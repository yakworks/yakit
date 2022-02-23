<script>
  import { App, Panel, View, f7, f7ready, Link, Page, Block, Button } from 'framework7-svelte';
  import SideNav from './SideNav.svelte';
  import { onMount } from 'svelte';
  import routes from './routes';
  import Router from 'svelte-spa-router'

  // Demo Theme
  let theme = 'aurora';
  // if (document.location.search.indexOf('theme=') >= 0) {
  //   theme = document.location.search.split('theme=')[1].split('&')[0];
  // }

  const f7Params = {
    id: 'io.framework7.testapp',
    theme,
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
    // clicks: {
    //   externalLinks: '*',
    // },
    view: {
      router: false,
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
  function routeLoading(event) {
    console.log('***** routeLoading *****')

    console.log('Route', event.detail.route)
    console.log('Location', event.detail.location)
    console.log('Querystring', event.detail.querystring)
    console.log('User data', event.detail.userData)
}

  function routeLoaded(event) {
    console.log('***** routeLoaded *****')

    // The first 5 properties are the same as for the routeLoading event
    console.log('Route', event.detail.route)
    console.log('Location', event.detail.location)
    console.log('Querystring', event.detail.querystring)
    console.log('Params', event.detail.params)
    console.log('User data', event.detail.userData)
    // The last two properties are unique to routeLoaded
    // console.log('Component', event.detail.component) // This is a Svelte component, so a function
    console.log('Name', event.detail.name)
  }
</script>

<App {...f7Params}>

<main>
  <SideNav/>
  <article class="safe-areas view view-main">
    <Router {routes} restoreScrollState={true}
      on:routeLoading={routeLoading}
      on:routeLoaded={routeLoaded}/>
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
