// import { get, writable } from 'svelte/store';
import { isEmpty, cloneDeep, isFunction, merge, defaultsDeep } from '@yakit/core/dash'
import appConfigApi from '@yakit/core/stores/AppConfigApi'

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

const listConfig = async ({queryStore, listId = '' }) => {

  let cfg = await queryStore.getAppConfig()

  // let cfg = await appConfigApi.getConfig(apiPath)
  cfg = isEmpty(cfg) ? {} : cloneDeep(cfg)

  const gridOpts = cfg.gridOptions || {}
  if(!listId) listId = queryStore.ident()
  console.log("listId", listId)
  const tbOpts = gridOpts.toolbarOptions || {}

  defaultsDeep(tbOpts, defaultToolbarOpts)

  let createBtn = tbOpts.leftButtons.create

  if (!(cfg.editForm || cfg.editPopover) || gridOpts.createEnabled == false) {
    createBtn.class = 'hidden'
  }
  // setup create popover
  if(createBtn.class !== 'hidden' ){
      createBtn.popoverId = `#${listId}-popover-edit`
  }

  if (cfg.bulkUpdateForm === undefined) {
    tbOpts.selectedButtons.bulkUpdate.class = 'hidden'
  }

  gridOpts.toolbarOptions = tbOpts
  cfg.gridOptions = gridOpts

  return cfg
}

export default listConfig
