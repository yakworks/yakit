<script>
  import { f7,f7ready, theme, Page, Panel,
    Navbar, NavRight, NavLeft, NavTitle, NavTitleLarge, Searchbar, BlockTitle,
    List,ListItem,Link,AccordionContent,Block,Icon,Button, View} from 'framework7-svelte';
  import { onMount } from 'svelte';
  import routes from './routes';

  export let opened = true
  export let mainRouter = undefined

  $: {
    toggleSideNavClasses(opened)
  }
  function toggleSideNavClasses(_){
    let _html = document.body.parentElement
    if(opened){
      _html.classList.add("side-nav-open")
      _html.classList.remove("side-nav-closed")
    } else{
      _html.classList.remove("side-nav-open")
      _html.classList.add("side-nav-closed")
    }
  }

  let currentRoute

  // listen to highlight active item
  $: if(mainRouter){
    currentRoute = mainRouter.currentRoute
    mainRouter.on('routeChange', (route) => {
      currentRoute = route
      // highlightActive()
    });
  }

  $: if(currentRoute){
    console.log('currentRoute changed, highlighting active', currentRoute)
    highlightActive()
  }

  function highlightActive(){
    if(!currentRoute.url) return
    const $el = f7.$('.page-home');
    const url = currentRoute.url;
    if (!$el) return;
    const $linkEl = $el.find(`a[href="${url}"]`);
    if (!$linkEl.length) return;
    $el.find('.item-selected').removeClass('item-selected');
    $linkEl.addClass('item-selected');
  }

  const onResize = () => {
    const $el = f7.$('.page-home');
    if (f7.width >= 768) {
      // $el.find('.list:not(.searchbar-not-found)').addClass('menu-list');
      opened = true
    } else {
      // $el.find('.list:not(.searchbar-not-found)').removeClass('menu-list');
      opened = false
    }
  };


  onMount(() => {
    if (theme.aurora) {
      const $el = f7.$('.page-home');
      //run it first on mount
      f7ready(() => {
        console.log("onMount f7ready")
        // fire it right away
        onResize();
        //then listen
        f7.on('resize', onResize);
        // currentRoute = mainRouter.getCurrentRoute()
      })
    }
  });
</script>

<div class="burger">
  <Button  iconF7="sidebar_left" on:click={ () => opened = !opened}/>
</div>

<aside class="side-nav">
  <View url="/side-nav-menu/" linksView=".view-main" />
</aside>

<style>

:global(aside.side-nav) {
  --side-nav-width: 256px:
}
aside.side-nav{
  flex: 0 0 var(--side-nav-width);
  transition: margin 0.3s ease;
  /* overflow-y: auto; */
  margin-left: -256px;
  width: 256px;
  --f7-safe-area-right: 0px;
  --f7-safe-area-outer-right: 0px;
  border-right: var(--f7-page-master-border-width) solid var(--f7-page-master-border-color);
  position: static;
}

aside.side-nav :global(.navbar){
  /* width: 256px; */
  /* border-right: var(--f7-page-master-border-width) solid var(--f7-page-master-border-color); */
}
aside.side-nav :global(.navbar .navbar-inner){
  /* padding: 0; */
  /* border-right: var(--f7-page-master-border-width) solid var(--f7-page-master-border-color); */
}

/* .nav-content {
  padding-top: 0;
} */
/* .nav-content :global(.menu-list){
  --menu-list-offset: 4px;
  --f7-list-font-size: 16px;
  --f7-list-margin-vertical: 8px;
  --f7-list-item-title-font-size: 16px;
  padding-top: 0;
} */

:global(.side-nav-open) aside.side-nav {
  margin-left: 0;
}

.burger :global(.button) {
  top: 0 !important;
  position: fixed;
  top: 1em;
  left: 4px;
  z-index: 10000;
  height: calc(var(--f7-navbar-height) + var(--f7-safe-area-top));
  /* height: var(--f7-navbar-link-height); */
}

/* make space for the burger */
:global(.side-nav-closed .navbar-inner) {
  padding-left: 52px;
}
</style>
