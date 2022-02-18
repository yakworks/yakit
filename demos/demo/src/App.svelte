<script>
  import { App, Panel, View, f7, f7ready, Link, Page, Block, Button } from 'framework7-svelte';
  import SideNav from './SideNav.svelte';
  import { onMount } from 'svelte';
  import routes from './routes';
  import store from './store';

  // Demo Theme
  let theme = 'aurora';
  // if (document.location.search.indexOf('theme=') >= 0) {
  //   theme = document.location.search.split('theme=')[1].split('&')[0];
  // }

  const f7Params = {
    id: 'io.framework7.testapp',
    theme,
    routes,
    store,
    popup: {
      closeOnEscape: true,
    },
    sheet: {
      closeOnEscape: true,
    },
    popover: {
      closeOnEscape: true,
    },
    actions: {
      closeOnEscape: true,
    },
    view: {
      // router: false,
      browserHistory: true,
      // browserHistoryRoot: 'http://localhost:9001/',
      // browserHistoryOnLoad: true,
      browserHistoryInitialMatch: true,
      // masterDetailBreakpoint:800
      browserHistorySeparator: '#'
    },

  };

  const viewInit = (view) => {
    const url = new URL(window.location);
    if (url.pathname.toLocaleLowerCase() !== "/") {
      console.log(`navigate to ${url.pathname} on init`);
      view.router.navigate(url.pathname);
      view.router.refreshPage();
    }
  }
  // onMount(() => {
  //   f7ready(() => {
  //     // Framework7 initialized
  //     f7.dialog.alert('Component mounted');
  //   })
  // })
</script>

<App {...f7Params}>

<main>
  <SideNav/>
  <article>
    <View url="/" main={true} class="safe-areas" onViewInit={viewInit}  />
  </article>
</main>
<div>

</div>
</App>

<style>

main {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: hidden;
}
article {
  height: 100%;
  flex: 1;
}

</style>
