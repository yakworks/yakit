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

const listConfig = async ({queryStore, apiPath}) => {

  let cfg = await appConfigApi.getConfig(apiPath)
  cfg = isEmpty(cfg) ? {} : cloneDeep(cfg)

  const gridOpts = cfg.gridOptions || {}
  const tbOpts = gridOpts.toolbarOptions || {}

  defaultsDeep(tbOpts, defaultToolbarOpts)

  if (cfg.editForm === undefined || gridOpts.createEnabled == false) {
    tbOpts.leftButtons.create.class = 'hidden'
  }

  if (cfg.bulkUpdateForm === undefined) {
    tbOpts.selectedButtons.bulkUpdate.class = 'hidden'
  }
  return cfg
}

export default listConfig
