<!--
  Wraps the jqGrid and adds the toolbar and search form
 -->
<script>
  import { fade, fly } from "svelte/transition";
  import { Button } from '../index'
  import TbButton from '../Toolbar/TbButton.svelte'
  import { isFunction } from '@yakit/core/is';
  import { defaultsDeep, _defaults } from "@yakit/core/dash";
  import ListOptionsPopover from './ListOptionsPopover.svelte'
  import growl from '@yakit/ui/growl';
  import { problemHandler } from '../Formify'

  //toolbar options
  export let resource = undefined
  export let title = undefined
  export let opts = {}
  export let listManager = {}
  export let listId = undefined

  /** the quickfilter buttons to add to toolbar */
  export let QuickFilter = undefined

  if(!resource) resource = listManager.resource

  $: selectedIds = resource.selectedIds
  $: hasSelected = $selectedIds.length > 0
  $: qSearch = resource.qSearch
  $: q = resource.q

  let isLoading = false
  let optionsPopoverId = `${listId}-options-popover`

  let defaultOpts = {
    selectedButtons: {
      bulkUpdate: { icon: 'edit_note', tooltip: 'Bulk Update' },
      xlsExport: { icon: 'view_module', label: 'Export to Excel' }
    },
    leftButtons: {
      create: { icon: 'add_box', tooltip: 'Create New' }
    },
    searchFormButton: { icon: 'mdi-text-box-search-outline', tooltip: 'Show Search Filters Form' }
  }

  $: mergedOpts = defaultsDeep(opts, defaultOpts)

  // let opts = options

  //turn object to array with key field and returns only visible
  function filterVisible(buttonOpts){
    return Object.entries(buttonOpts)
      .map(( [key, v] ) => ({ key, ...v })) //turn into array with key as key
      .filter(o => o.class !== 'hidden')
  }

  function clearSearchInput() {
    $qSearch = ''
    resource.query()
  }

  const onSearchKeyPress = e => {
    if (e.charCode === 13){
      // e.preventDefault()
      resource.query()
    }
    // esc key
    if (e.charCode === 27) $qSearch = ''
  };

  async function fireButtonClick(btnItem, event) {
    // if it has an action then fire that
    try {
      isLoading = true
      // this.gridCtrl.toggleLoading(true)
      if (isFunction(btnItem.action)) {
        await btnItem.action(btnItem, event)
      } else {
        // calls the listController fireToolbarAction, which will fallback to the ctx.toolbarHandler
        await listManager.fireToolbarAction(btnItem, event)
      }
    } catch(e){
      //deal with any unhandled exceptions
      console.log("fireButtonClick error", e)
      problemHandler.handleError(e)
      // growl.error(e, "fireButtonClick Error")
    } finally {
      //results.ok ? growl.success(results.title) : growl.error(results.detail, results.title)
      isLoading = false
      // this.gridCtrl.toggleLoading(false)
    }
  }

  function toggleShowSearch(){
    $resource.showSearchForm = !$resource.showSearchForm
  }

// <slot name="title" />
</script>
<!-- <p>selectedIds {$selectedIds}</p> -->

<header class="is-light is-dense has-border toolbar">
  <div class="toolbar-container">
    {#if hasSelected }
      <div class="toolbar-item toolbar-item-left px-0 py-0" in:fly>
        <div class="selection-pointer">
          <!-- subdirectory_arrow_right -->

          <i class="material-icons md-18 rotate-90">subdirectory_arrow_right</i>
        </div>
        {#each filterVisible(opts.selectedButtons) as btnItem}
          <TbButton opts={btnItem} on:click={() => fireButtonClick(btnItem)}/>
        {/each}
        <div class="divider-vertical"></div>
      </div>
    {/if}
    {#each filterVisible(opts.leftButtons) as btnItem}
      {#if btnItem.popoverId}
        <TbButton opts={btnItem} />
      {:else}
        <TbButton opts={btnItem} on:click={() => fireButtonClick(btnItem)}/>
      {/if}
    {/each}


    {#if title}
    <div class="spacer"/>
    <div class="toolbar-title text-gray-strong text-lg">{title}</div>
    {/if}
    <div class="spacer"/>

    <!-- <QuickFilter /> -->
    <svelte:component this={QuickFilter} {resource}/>

    <div class="toolbar-item p-0 quick-search-item">
      <div class="control has-icons-right has-icons-left">
        <input type="text" class="input is-rounded is-search quick-search"
          placeholder="Search"
          on:keypress={onSearchKeyPress}
          bind:value={$qSearch}>
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
        {#if $qSearch }
        <span class="icon is-small is-right">
          <a href={'#'} class="delete is-small" on:click={clearSearchInput}> </a>
        </span>
        {/if}
      </div>
    </div>

    {#if opts.searchFormButton.class !== 'hidden' }
    <Button tooltip="Toggle search form" icon="manage_search" on:click={toggleShowSearch}/>
    {/if}
    <Button popoverOpen={`#${optionsPopoverId}`} icon="more_vert" tooltip="Actions"/>
  </div>
</header>

<ListOptionsPopover popoverId={optionsPopoverId} {listManager}/>

<!-- FIXME works fine here but not when imported into rcm-ui -->
<style>
  .toolbar {
    border-radius: 8px 8px 0 0;
    border: 1px solid var(--color-shade-10);
    border-bottom: none;
  }
</style>
