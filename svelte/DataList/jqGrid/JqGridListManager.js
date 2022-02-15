import { get, writable, derived } from 'svelte/store';
import { isEmpty, cloneDeep, isFunction, merge } from '@yakit/core/dash'
import appConfigApi from '@yakit/core/stores/AppConfigApi'
import growl from "@yakit/ui/growl"
import toast from "@yakit/ui/toast"
import listConfig from "../listConfig"
import {JqGridCtrl} from '@yakit/ui/jqGrid'
import problemHandler from '@yakit/ui/toast/problemHandler'

const not_implemented = "not implemented"

const JqGridListManager = ({ resource }) => {

  const gridCtrl = new JqGridCtrl()
  gridCtrl.resource = resource

  let ctrl = {
    resource,
    gridCtrl,

    async doConfig(ctx = {}) {
      let apiCfg = await listConfig({resource})
      const clonedCfg = merge({}, apiCfg)
      merge(ctx, clonedCfg)
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

    deleteSelected() {
      const selectedIds = get(resource.selectedIds)
      if(selectedIds.length > 1){
        growl.warn("Single item deletes are supported. Bulk deleting will be supported in a future release")
      } else {
        const id = selectedIds[0]
        ctrl.delete(id)
      }
    },

    async delete(id) {
      try {
        let res = await resource.delete(id)
        toast(res)
        // ctrl.gridCtrl.removeRow(id)
      } catch (er) {
        problemHandler.handleError(er)
      }
    },

    reloadKeepSelected() {
      // ctrl.gridCtrl.clearSelection()
      //we just blank out the param and the reactive sync in the component will add them back
      ctrl.gridCtrl.setParam({'selarrrow':[]}, true)
      resource.reload()
      // ctrl.gridCtrl.reloadKeepSelected()
    },

    resetSort() { ctrl.gridCtrl.resetSort() },

    async quickSearch(text) { ctrl.gridCtrl.quickSearch(text) },

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
  }

  return ctrl //Object.assign(ctrl, opts)
}

export default JqGridListManager
