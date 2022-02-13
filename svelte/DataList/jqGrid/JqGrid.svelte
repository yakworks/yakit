<!--
  Wraps the jqGrid and adds the toolbar and search form
 -->
<script>
  import { onMount, onDestroy, tick, createEventDispatcher } from 'svelte'
  import QueryStore from '@yakit/core/stores/QueryStore'
  import {JqGridCtrl} from '@yakit/ui/jqGrid'
  import JqGridListManager from './JqGridListManager'
  import ListToolbar from '../ListToolbar.svelte'
  import EditPopover from '../EditPopover.svelte'
  import SearchForm from '../SearchForm.svelte'
  import { classNames } from '../../shared/utils';
  import growl from "@yakit/ui/growl"
  import { difference, get as _get, uniqueId } from "@yakit/core/dash"

  /** the grid context with gridOptions and toolbarOptions */
  export let ctx = undefined
  /** the dataApi that feeds tihs */
  export let dataApi = undefined
  /**
   * the queryStore as alternative to dataApi
   */
  export let queryStore = undefined
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
    queryStore = QueryStore({ dataApi })
  } else {
    dataApi = queryStore.dataApi
  }

  //stores from QueryStore we will listen to
  let sort = queryStore.sort
  selectedIds = queryStore.selectedIds

  // export let restrictSearch = undefined

  let inialized = false
  let listController

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
    let selIds = gridCtrl.getSelectedRowIds()
    let toAdd = difference($selectedIds, selIds), toRemove = difference(selIds, $selectedIds)
    console.log(`******diffs between to sync **** ${selIds} && ${$selectedIds}`)
    if(toAdd.length > 0 || toRemove.length > 0){
      console.log(`******resettting to sync **** ${selIds}`)
      gridCtrl.clearSelection()
      $selectedIds.forEach(id => {
        gridCtrl.setSelection(id, false)
      })
    }
  }

  let listManagerPromise = setupListManager()

  async function setupListManager() {

    listController = await JqGridListManager({ queryStore, ctx })
    await listController.doConfig(ctx)
    gridCtrl = listController.gridCtrl
    ctx = listController.ctx
    gridOptions = ctx.gridOptions
    toolbarOptions = ctx.gridOptions.toolbarOptions
    gridId = ctx.gridOptions.gridId = queryStore.ident()
    // console.log("setupListCtrl", gridId)
    settings = queryStore.settings
    searchFormEnabled = _get(ctx, 'gridOptions.searchFormEnabled', true)
    //needs to be either
    editSchema = ctx.editPopover || ctx.editForm
    //needs to be either
    searchSchema = ctx.searchForm
    inialized = true
    return listController
  }

  let unsubPageView

  function initGrid(node) {
    //add gridComplete
    ctx.gridOptions.gridComplete = () => {
      console.log("******gridComplete**** ")
      isGridComplete = true
      //make sure selection is cleared on reload
      // gridCtrl.clearSelection()
      dispatch("gridComplete")
    }
    ctx.gridOptions.onSelectRow = (rowId, checked, event) => {
      let selIds = gridCtrl.getSelectedRowIds()
      console.log(`******selIds**** ${selIds}`, event)
      // console.log("******onSelectRow****", rowId, checked)
      selectedIds.update(_ids => selIds)
      dispatch("rowSelected", [rowId, checked])
    }
    //initializes the grid
    gridCtrl.setupAndInit(node, ctx)
    // load data if its loadOnMount
    if(loadOnMount) query()
    //subscribe the page store
    queryStore.currentPage.subscribe(data => {
      if(!data) return
      // gridCtrl.clearSelection()
      gridCtrl.addJSONData(data)
    });

  }

  /** calls query on queryStore after setting restrictSearch */
  async function query() {
    if(gridOptions.restrictSearch) queryStore.restrictSearch.set(gridOptions.restrictSearch)
    queryStore.query()
  }

  onDestroy(() => {
    gridCtrl.destroy()
    unsubPageView && unsubPageView()
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
    await listController.search(searchVals)
  }

</script>

{#await listManagerPromise}
  <p>...loading</p>
{:then _ }
  {#if searchSchema && searchFormEnabled }
    <SearchForm listId={gridId} {queryStore} schema={searchSchema} on:search={searchAction}/>
  {/if}
  <div use:initGrid class="gridz-wrapper card m-0">
    {#if toolbarOptions }
      <ListToolbar listId={gridId} {queryStore} {title} {listController} opts={toolbarOptions} {QuickFilter}/>
    {/if}
    <table class={classes} class:is-dense={$settings.isDense}></table>
    <div class="gridz-pager"></div>
  </div>

  {#if editSchema }
  <EditPopover listId={gridId} {dataApi} schema={editSchema} on:afterEditSubmit={afterEdit} on:beforeEditSubmit/>
  {/if}
{/await}


