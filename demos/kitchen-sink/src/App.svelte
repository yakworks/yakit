<script>
  import { app,f7ready, App, Panel, View, Fab, Icon } from 'framework7-svelte';
  import SideNav from './side-nav/SideNav.svelte';
  import routes from './routes';
  import compRoutes from './components/routes';
  // import store from './store';
  import { onMount } from 'svelte';

  // Demo Theme
  let theme = 'aurora';
  if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
  }

  let mainRouter

  const f7Params = {
    id: 'io.framework7.testapp',
    theme,
    routes: [...routes, ...compRoutes],
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
    }
  };

  onMount(() => {
    f7ready(() => {
      console.log("f7 app", app)
    })
  });

  function mainViewInit(view) {
    console.log("main view init", view)
    mainRouter = view.router
    // const url = new URL(window.location);
    // if (url.pathname.toLocaleLowerCase() !== "/") {
    //   console.log(`navigate to ${url.pathname} on init`);
    //   view.router.navigate(url.pathname);
    //   view.router.refreshPage();
    // }
  }
</script>

<App {...f7Params}>
  <Panel left cover resizable>
    <View url="/panel-left/" linksView=".view-main" />
  </Panel>
  <Panel right reveal resizable>
    <View url="/panel-right/" />
  </Panel>
  <!-- <View url="/" main={true} class="safe-areas" browserHistory={true} browserHistorySeparator='#' browserHistoryInitialMatch={true}/> -->
  <main class="views">
    <SideNav {mainRouter} />
    <article>
      <View url="/" main={true} class="safe-areas"
        browserHistory={true} browserHistorySeparator='#' browserHistoryInitialMatch={true} onViewInit={mainViewInit}/>
    </article>

  </main>

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
