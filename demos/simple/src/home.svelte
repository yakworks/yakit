<script>
  import {
    f7,
    theme,
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    BlockTitle,
    List,
    ListItem,
    Link,
    Searchbar,
  } from 'framework7-svelte';
  import { onMount } from 'svelte';

  export let f7router;

  const onResize = () => {
    const $el = f7.$('.page-home');
    if (f7.width >= 768) {
      $el.find('.list:not(.searchbar-not-found)').addClass('menu-list');
    } else {
      $el.find('.list:not(.searchbar-not-found)').removeClass('menu-list');
    }
  };

  // const onPageAfterIn = () => {
  //   if (!theme.aurora) return;
  //   if (f7.width >= 768) {
  //     f7router.navigate('/about/', { reloadDetail: true });
  //   }
  // };

  onMount(() => {
    if (theme.aurora) {
      const $el = f7.$('.page-home');
      onResize();

      f7.on('resize', onResize);

      f7router.on('routeChange', (route) => {
        const url = route.url;
        if (!$el) return;
        const $linkEl = $el.find(`a[href="${url}"]`);
        if (!$linkEl.length) return;
        $el.find('.item-selected').removeClass('item-selected');
        $linkEl.addClass('item-selected');
      });
    }
  });
</script>

<Page class="page-home" >

  <BlockTitle medium >GO GO GO</BlockTitle>

</Page>
