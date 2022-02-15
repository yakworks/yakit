<!--
  Wraps the jqGrid and adds the toolbar and search form
 -->
<script>
  import { onMount, onDestroy, tick, createEventDispatcher } from 'svelte'
  import Resource from '@yakit/core/stores/Resource'
  import {JqGridCtrl} from '@yakit/ui/jqGrid'
  import JqGridListManager from './JqGridListManager'
  import ListToolbar from '../ListToolbar.svelte'
  import EditPopover from '../EditPopover.svelte'
  import SearchForm from '../SearchForm.svelte'
  import { classNames } from '../../shared/utils';
  import growl from "@yakit/ui/growl"
  import { difference, get as _get, uniqueId, isEqual } from "@yakit/core/dash"

  /** the grid context with gridOptions and toolbarOptions */
  export let ctx = undefined
  /** the dataApi that feeds tihs */
  export let dataApi = undefined
  /** the resource as alternative to dataApi */
  export let resource = undefined
  /** the gridId, can be bound, should set this through the gridOptions and not here*/
  export let gridId = undefined
  /** bind to the grid controller to access the instance*/
  export let gridCtrl = undefined
  /** toolbar title */
  export let loadOnMount = false
  /** toolbar title */
  export let title = undefined
  /** the quickfilter buttons to add to toolbar */
  export let QuickFilter = undefined
  /** set to true with the gridComplete event is done and data is loaded */
  export let isGridComplete = false
  /** the selected ids store */
  export let selectedIds = undefined

  if(dataApi){
    resource = Resource({ dataApi })
  } else {
    dataApi = resource.dataApi
  }

  //stores from Resource we will listen to
  $: selectedIds = resource.selectedIds

  // export let restrictSearch = undefined

  let inialized = false
  let listManager

  let className = undefined;
  export { className as class };

  let classes

  $: classes = classNames(
    className,
    'gridz'
  )
  let settings //state store for settings
  let editSchema
  let searchSchema
  let searchFormEnabled
  let gridOptions
  let toolbarOptions

  //sync selection store to grid.
  $: if(isGridComplete){
    syncSelects($selectedIds)
  }

  function syncSelects(_){
    let selIds = gridCtrl.getSelectedRowIds()
    if(!isEqual(selIds, $selectedIds)){
      // console.log(`******resettting to sync **** ${selIds}`)
      gridCtrl.clearSelection()
      $selectedIds.forEach(id => {
        gridCtrl.setSelection(id, false)
      })
    }
  }

  $: if(gridCtrl && gridCtrl.isReady){
    // console.log("jqGrid $resource.isLoading", $resource.isLoading)
    gridCtrl.toggleLoading($resource.isLoading)
  }

  let listManagerPromise = setupListManager()

  async function setupListManager() {
    listManager = await JqGridListManager({ resource })
    await listManager.doConfig(ctx)
    gridCtrl = listManager.gridCtrl
    ctx = listManager.ctx
    gridOptions = ctx.gridOptions
    toolbarOptions = ctx.gridOptions.toolbarOptions
    gridId = ctx.gridOptions.gridId = resource.ident()
    // console.log("setupListCtrl", gridId)
    settings = resource.settings
    searchFormEnabled = _get(ctx, 'gridOptions.searchFormEnabled', true)
    //needs to be either
    editSchema = ctx.editPopover || ctx.editForm
    //needs to be either
    searchSchema = ctx.searchForm
    inialized = true
    return listManager
  }

  let currentPage = resource.currentPage

  $: if(gridCtrl && gridCtrl.isReady && $currentPage){
    console.log("$currentPage", resource.apiKey, $currentPage)
    gridCtrl.addJSONData($currentPage)
  }

  function initGrid(node) {
    //add gridComplete
    ctx.gridOptions.gridComplete = () => {
      isGridComplete = true
      syncSelects(_)
      dispatch("gridComplete")
    }
    ctx.gridOptions.onSelectRow = (rowId, checked, event) => {
      let selIds = gridCtrl.getSelectedRowIds()
      resource.setSelected(selIds)
      dispatch("rowSelected", [rowId, checked])
    }
    //initializes the grid
    gridCtrl.setupAndInit(node, ctx)
    // load data if its loadOnMount
    if(loadOnMount) {
      query()
    } else {
      $resource.isLoading = false
    }

  }

  /** calls query on resource after setting restrictSearch */
  async function query() {
    if(gridOptions.restrictSearch) resource.restrictSearch.set(gridOptions.restrictSearch)
    resource.query()
  }

  onDestroy(() => {
    if(gridCtrl) gridCtrl.destroy()
  });

  const dispatch = createEventDispatcher();

  /** called after successful submit of edit or create. Display message and sync grid*/
  function afterEdit(event){
    //this just updates the grid display and flashes the row to show it updated
    gridCtrl.addOrUpdateRow(event.detail.id, event.detail)
    growl.success("saved successfully")
    //refire in case we want to do something
    dispatch( 'afterEditSubmit' , event.detail)
  }

  /** fired action after search clicked*/
  async function searchAction(event){
    const searchVals = event.detail
    console.log("searchVals", searchVals)
    resource.q.set(searchVals)
    // await listManager.search(searchVals)
    await resource.query()
  }

</script>

{#await listManagerPromise}
  <p>Loading...</p>
{:then _ }
  <!-- <p>selectedIds {$selectedIds} isLoading {$resource.isLoading}</p> -->
  {#if searchSchema && searchFormEnabled }
    <SearchForm listId={gridId} {resource} schema={searchSchema} on:search={searchAction}/>
  {/if}
  <div use:initGrid class="gridz-wrapper card m-0">
    {#if toolbarOptions }
      <ListToolbar listId={gridId} {title} {listManager} opts={toolbarOptions} {QuickFilter}/>
    {/if}
    <table class={classes} class:is-dense={$resource.isDense}></table>
    <div class="gridz-pager"></div>
  </div>

  {#if editSchema }
  <EditPopover listId={gridId} {dataApi} schema={editSchema} on:afterEditSubmit={afterEdit} on:beforeEditSubmit/>
  {/if}
{/await}


