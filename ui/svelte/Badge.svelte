<script>
  import { colorClasses } from 'framework7-svelte/shared/mixins';
  import { classNames } from 'framework7-svelte/shared/utils';
  import { restProps } from 'framework7-svelte/shared/rest-props';
  import { useTooltip } from 'framework7-svelte/shared/use-tooltip';

  let className = undefined;
  export { className as class };

  export let tooltip = undefined;
  export let tooltipTrigger = undefined;

  $: classes = classNames(className, 'badge', colorClasses($$props));
</script>

<span class={classes} {...restProps($$restProps)} use:useTooltip={{ tooltip, tooltipTrigger }}>
  <slot />
</span>
