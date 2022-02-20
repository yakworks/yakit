<script>
  import { App, Panel, View } from 'framework7-svelte';
  import SideNav from './SideNav.svelte';
  import routes from './routes';
  import store from './store';

  // Demo Theme
  let theme = 'aurora';
  if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
  }

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
    view:{
      // browserHistory: true,
      // browserHistoryRoot: 'http://localhost:9001/',
      // browserHistoryOnLoad: true,
      // browserHistoryInitialMatch: true,
      // masterDetailBreakpoint:800
      // browserHistorySeparator: '#'
    }
  };
</script>

<App {...f7Params}>
  <Panel left cover resizable>
    <View url="/panel-left/" linksView=".view-main" />
  </Panel>
  <Panel right reveal resizable>
    <View url="/panel-right/" />
  </Panel>

  <main>
    <SideNav/>
    <article >
      <View url="/" main={true} class="safe-areas"
        browserHistory={true} browserHistorySeparator='#' browserHistoryInitialMatch={true}/>
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
