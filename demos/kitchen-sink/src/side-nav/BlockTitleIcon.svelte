<script>
  import { f7,f7ready, theme, Page,
    Navbar, NavRight, NavLeft, NavTitle, NavTitleLarge, Searchbar,
    List,ListItem,Link,AccordionContent,Block, BlockTitle, Icon,Button, View} from 'framework7-svelte';
  // import { plainText } from 'framework7-svelte/shared/utils';
  import { onMount } from 'svelte';
  import routes from '../routes';

  export let title;

  const onPageAfterIn = () => {
    if (!theme.aurora) return;
    if (f7.width >= 768) {
      // f7router.navigate('/about/', { reloadDetail: true });
    }
  };

  // onMount(() => {
  //   console.log('routes', routes)
  // });

</script>

<div class="block-title list">
  <div class="item-content">
    <div class="item-media">
      <slot/>
    </div>
    <div class="item-inner">
      <div class="item-title">{title}</div>
    </div>
  </div>
</div>

<style>

.block-title.list {
  text-transform: uppercase;
  color: var(--f7-block-header-text-color);
  /* font-size: var(--f7-block-title-font-size, inherit); */
  font-size: 13px;
  font-weight: var(--f7-block-title-font-weight);
  line-height: var(--f7-block-title-line-height);
  margin-top: var(--f7-block-margin-vertical);
  margin-bottom: 0;
  margin-left: calc(var(--f7-block-padding-horizontal) + var(--f7-safe-area-left));
  margin-right: calc(var(--f7-block-padding-horizontal) + var(--f7-safe-area-right));
}
.block-title .item-content {
    padding-left: 0;
}

.block-title .item-inner:after {
  display: none !important;
}

</style>
