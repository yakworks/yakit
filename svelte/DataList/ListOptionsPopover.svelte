<!--
  Wraps the jqGrid and adds the toolbar and search form
 -->
<script>
  import {Popover, List, ListItem} from '../index'
  import growl from '@yakit/ui/growl'
  import { isFunction } from '@yakit/core/dash';

  export let resource = undefined
  export let listManager = {}
  export let popoverId = undefined

  if(!resource) resource = listManager.resource

  let defaultMenuItems = [
    { key:'refresh', display: 'Refresh', material: 'refresh'},
    { key:'reset_sort', display: 'Reset Sort', material: 'playlist_remove'},
    // { divider: true },
    { key:'column_config', display: 'Column Config', material: 'view_column'},
    { key:'toggle_density', display: 'Density Toggle', material: 'expand'},
    // { divider: true },
    // { id:'toggle_show', display: 'Hide/Show Toggle', material: 'close_fullscreen' },
    // { id:'expand', display: 'Expand', material: 'open_in_full' },
    // { id:'dummy', display: 'Not Enabled', class: 'hidden' }
  ]

  // filter out where class=hidden
  $: displayMenutItems = defaultMenuItems.filter(item => item.class !== 'hidden')

  let popMenuClick = (item) => (event) =>{
    switch (item.key) {
      case 'refresh':
        return listManager.reloadKeepSelected()
      case 'reset_sort':
        return listManager.resetSort()
      case 'column_config':
        return growl.info("Not Enabled")
      case 'toggle_density':
        return toggleDensity()
        break
      default:
        if (isFunction(listManager[item.key])) {
          return listManager[item.key](item, event)
        }
    }
  }

  function toggleDensity(){
    $resource.isDense = !$resource.isDense
  }
  let popComponent;

  function popoverClose(data) {
    // console.log("popClose", popComponent.instance())
    // popComponent.__proto__.resize()
  }

</script>

<Popover bind:this={popComponent} id={popoverId} onPopoverClose={popoverClose}>
  <List>
    {#each displayMenutItems as item}
      <ListItem id={item.key} link="#" title={item.display} popoverClose
      noChevron={true} on:click={popMenuClick(item)}>
        <span slot="media" class="material-icons-two-tone">
          {item.material}
        </span>
        <!-- <Icon slot="media" material={item.material}/> -->
      </ListItem>
    {/each}
  </List>
</Popover>



