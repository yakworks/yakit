<script>
  import { App, Panel, View, f7, f7ready } from 'framework7-svelte';
  import { onMount } from 'svelte';
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
    view: {
      // history: true,
      browserHistory: true,
      browserHistoryRoot: 'http://localhost:9001',
      browserHistoryInitialMatch: true
      // browserHistorySeparator: '#'
    },

  };

  // onMount(() => {
  //   f7ready(() => {
  //     // Framework7 initialized
  //     f7.dialog.alert('Component mounted');
  //   })
  // })
</script>

<App {...f7Params}>
  <Panel left cover resizable>
    <View url="/panel-left/" linksView=".view-main" />
  </Panel>
  <Panel right reveal resizable>
    <View url="/panel-right/" />
  </Panel>
  <View url="/" main={true} class="safe-areas" masterDetailBreakpoint={768} />
</App>
