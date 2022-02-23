<!--
  Toggle group, bit like radio buttons where one can be selected and clicking on selected button turns it off
 -->
 <script>
  import { createEventDispatcher } from 'svelte'
  import Segmented from './Segmented.svelte'
  import {Button} from 'framework7-svelte'

  export let activeKey = undefined
  export let schema = undefined

  const dispatch = createEventDispatcher()
  //turns on value or toggles it if its the same button click
  let toggleActive = (key) => () => {
    activeKey = activeKey !== key ? key : null
    dispatch('click', activeKey)
    console.log("activeKey", activeKey)
  }

</script>

<Segmented strong tag="p" class='mr-2' {activeKey} >
  {#each schema as item}
  <Button active={activeKey === item.key} on:click={toggleActive(item.key)}>{item.label}</Button>
  {/each}
</Segmented>

