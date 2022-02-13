// import { get, writable } from 'svelte/store';
import { isEmpty, cloneDeep, isFunction, merge } from '@yakit/core/dash'
import appConfigApi from '@yakit/core/stores/AppConfigApi'
import growl from "@yakit/ui/growl"
import listConfig from "../listConfig"
import {JqGridCtrl} from '@yakit/ui/jqGrid'

const not_implemented = "not implemented"

const JqGridListManager = ({ resource }) => {

  let { apiPath } = resource

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
  gridCtrl.resource = resource

  let ctrl = {
    gridCtrl,
    async doConfig(ctx = {}) {
      let apiCfg = await listConfig({resource, apiPath})
      merge(ctx, apiCfg)
      console.log("apiCfg", apiCfg)

      ctrl.ctx = ctx

      return ctx
    },

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

  }

  return ctrl //Object.assign(ctrl, opts)
}

export default JqGridListManager
