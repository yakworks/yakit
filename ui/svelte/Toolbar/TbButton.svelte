<!--
  Wraps the jqGrid and adds the toolbar and search form
 -->
<script>
  import {Button} from '../index'
  import { makeLabel } from '@yakit/core/nameUtils'

  export let opts

  export let popoverId = undefined

  let isButton = true

  $: {
    // if (opts.label && !opts.display) {
    //   opts.display = opts.label
    // }
    if (opts.display && !opts.color) {
      opts.color = 'transparent'
    }
    if(opts.tooltip === undefined) {
      opts.tooltip = opts.label || makeLabel(opts.key)
    }

    // if it has menu items then its a dropdown not a button
    if (opts.menuItems) {
      isButton = false
    }
    if(opts.popoverId) popoverId = opts.popoverId
  }


</script>
{#if isButton }
  <Button class="is-icon-button" color={opts.color} popoverOpen={popoverId} tooltip={opts.tooltip} iconMaterial={opts.icon} on:click>
    {opts.display ? opts.display : ''}
  </Button>
{:else}
<!-- TODO setup popups -->
  <Button class="is-icon-button" popoverOpen={popoverId} tooltip={opts.tooltip} iconMaterial={opts.icon} on:click/>
{/if}



