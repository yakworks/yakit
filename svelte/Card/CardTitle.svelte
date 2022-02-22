<script>
  // import classnames from './utils';
  import { colorClasses } from 'framework7-svelte/shared/mixins';
  import { classNames } from 'framework7-svelte/shared/utils';

  let className = undefined;
  export { className as class };

  $: classes = classNames(className, 'card-title', colorClasses($$props));
</script>

<p class={classes}>
<slot />
</p>
