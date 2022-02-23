<script>
  import CardTitle from './CardTitle.svelte';
  import CardSubtitle from './CardSubtitle.svelte';
  // import * as su from '../shared/common';
  import {colorClasses} from 'framework7-svelte/shared/mixins'
  import {classNames} from 'framework7-svelte/shared/utils'
  import {restProps} from 'framework7-svelte/shared//rest-props'
  //class pattern
  let className = undefined; export { className as class };

  // console.log("**** su", su)
  $: classes = classNames(className, 'card-header py-0', colorClasses($$props));

  export let title = undefined;
  export let subtitle = undefined;

</script>

<header class={classes} {...restProps($$restProps)}>
  {#if typeof title !== 'undefined'}
    <CardTitle class="p-0">{title}</CardTitle>
  {/if}
  {#if typeof subtitle !== 'undefined'}
    <CardSubtitle >{subtitle}</CardSubtitle>
  {/if}
  <slot />
</header>
