// import { get, writable } from 'svelte/store';
import { isEmpty, cloneDeep, isFunction, merge } from '@yakit/core/dash'
import appConfigApi from '@yakit/core/stores/AppConfigApi'
import growl from "@yakit/ui/growl"
import listConfig from "../listConfig"
import {JqGridCtrl} from '@yakit/ui/jqGrid'

const not_implemented = "not implemented"

const JqGridListManager = ({ queryStore }) => {

  let { apiPath } = queryStore

  let defaultToolbarOpts = {
    selectedButtons: {
      bulkUpdate: { icon: 'edit_note', tooltip: 'Bulk Update' },
      xlsExport: { icon: 'view_module', label: 'Export to Excel' }
    },
    leftButtons: {
      create: { icon: 'add_box', tooltip: 'Create New' }
    },
    searchFormButton: { icon: 'mdi-text-box-search-outline', tooltip: 'Show Search Filters Form' }
  }

  const gridCtrl = new JqGridCtrl()
  gridCtrl.queryStore = queryStore

  let ctrl = {
    gridCtrl,
    async doConfig(ctx = {}) {
      ctrl.apiPath = ctrl.apiPath ? ctrl.apiPath : apiPath

      let apiCfg = {}
      if(ctrl.apiPath){
        apiCfg = await appConfigApi.getConfig(ctrl.apiPath)
      }

      if(!isEmpty(apiCfg)){
        let clonedApiCfg = cloneDeep(apiCfg)
        merge(ctx, clonedApiCfg)
      }

      // ctx.stateStore = dataApi.stores.stateStore
      // ctx.stateStore.set(state)
      // ctx.state = state
      // //short cut
      // ctrl.state = state

      const gopts = ctx.gridOptions || {}
      if (ctrl.eventHandlers) {
        gopts.eventHandlers = ctrl.eventHandlers
      }

      if (!gopts.toolbarOptions) gopts.toolbarOptions = {}

      const tbopts = merge({}, defaultToolbarOpts, gopts.toolbarOptions)
      //if ctx toolbar option were passed in with context
      if(ctx.toolbarOptions) merge(tbopts, ctx.toolbarOptions)
      // setup search form show based on if searchForm is configured
      // if (ctx.searchForm === undefined || gopts.searchFormEnabled == false) {
      //   gopts.showSearchForm = false
      //   ctx.state.showSearchForm = false
      //   tbopts.searchFormButton.class = 'hidden'
      // }

      if (ctx.editForm === undefined || gopts.createEnabled == false) {
        tbopts.leftButtons.create.class = 'hidden'
      }

      if (ctx.bulkUpdateForm === undefined) {
        tbopts.selectedButtons.bulkUpdate.class = 'hidden'
      }

      ctx.toolbarOptions = tbopts

      //setup some defaults for gridOpts
      gopts.contextMenuClick = (model, menuItem) => {
        return ctrl.fireRowAction(model, menuItem)
      }

      gopts.fireToolbarAction = ctrl.fireToolbarAction

      if(!gopts.restrictSearch) gopts.restrictSearch = ctrl.restrictSearch || {}
      gopts.initSearch = ctrl.initSearch || {}

      // _.defaults(ctrl.ctx, ctx)
      ctrl.ctx = ctx

      // ctrl.state.isConfigured = true
      return ctx
    },

    getGridOptions() { return ctrl.ctx.gridOptions },

    //Need to implement
    getEditModalCtrl() { throw Error(not_implemented) },
    getBulkUpdateModalCtrl() { throw Error(not_implemented) },
    // get searchCtrl() { return SearchCtrl }

    fireRowAction(model, menuItem) {
      switch (menuItem.key) {
        case 'edit':
          console.log("fireRowAction", model)
          return ctrl.edit(model.id)
        case 'delete':
          return ctrl.delete(model.id)
        // default:
        //   alert( "I don't know such values" );
      }
    },

    // Fires for common actions, will fall back to ctx.toobarHandler if nothing exists
    fireToolbarAction(btnItem, event) {
      console.log("listDataCtrl fireToolbarAction", btnItem, event)
      switch (btnItem.key) {
        case 'create':
          return ctrl.create()
        case 'bulkUpdate':
          return ctrl.showBulkUpdate()
        case 'xlsExport':
          return ctrl.gridCtrl.xlsExport()
        case 'delete':
          return ctrl.deleteSelected()
        default:
          if(ctrl.ctx.toolbarHandler){
            return ctrl.ctx.toolbarHandler(btnItem, event)
          }
          //FIXME this is kind of dangerous and should be removes and use ctx.toolbarHandler
          else if (isFunction(ctrl[btnItem.key])) {
            return ctrl[btnItem.key](btnItem, event)
          }
      }
    },

    //FIXME dont depend on grid, these should be refactored out
    reloadKeepSelected() { ctrl.gridCtrl.reloadKeepSelected() },
    resetSort() { ctrl.gridCtrl.resetSort() },
    async quickSearch(text) { ctrl.gridCtrl.quickSearch(text) },
    toggleDensity() { this.state.isDense = !this.state.isDense },

    updateFooter(data) {
      setTimeout(_ => {
        ctrl.gridCtrl.getGridEl().footerData('set', data)
      })
    },

    create(model = {}) {
      ctrl.showEdit('Create', model)
    },

    showEdit(title, model) {
      throw Error(not_implemented)
    },

    // modal options for edit
    getEditOptions(template, model, title) {
      throw Error(not_implemented)
    },

    showBulkUpdate() {
      throw Error(not_implemented)
    },

    getBulkUpdateOptions(model = {}) {
      throw Error(not_implemented)
    },

    async search(filters) {
      try {
        ctrl.isSearching = true
        await ctrl.gridCtrl?.search(filters)
      } catch (er) {
        ctrl.handleError(er)
      } finally {
        ctrl.isSearching = false
      }
    },

    searchReset(searchForm) {
      ctrl.searchModel = ctrl.initSearch || {}
      searchForm.reset()
    },

    handleError(er) {
      console.error(er)
      const message = er?.response?.status === 500 ? 'Unexpected error' : null
      growl.error(message || er)
    },

    handleResults(response) {
      if (response.ok) {
        growl.success(`${response.success.join('<br>')}`, response.defaultMessage)
      } else {
        growl.error(`${response.failed.join('<br>')} `, response.defaultMessage)
      }
    },

    handleAction(action) {
      const ids = ctrl.gridCtrl.getSelectedRowIds()
      const run = async (ids) => {
        ids.forEach((id) => {
          ctrl.gridCtrl.highlightRow(id)
        })

        try {
          const result = await action()
          if(result.ok){
            growl.success(result.title || 'Action is sucsess')
            ctrl.gridCtrl.reload() // todo: should we reload only selected rows?
          } else {
            growl.error(result?.failed?.join('<br>') || '', result.title)
          }
        } catch (e) {
          ctrl.handleError(e)
        } finally {
          ids.forEach((id) => {
            ctrl.gridCtrl.highlightRow(id)
          })
        }
      }
      return run(ids)
    },
    // we need to generate gridId, because if we have 2 grids on a page they will have the same id and 2 pagers will
    // be assisgned to the second grid
    gridId(){
      return ctrl.apiPath?.replace(/[^\w\s]/gi, '_') + 'Grid'
    }

  }

  return ctrl //Object.assign(ctrl, opts)
}

export default JqGridListManager
