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
      // browserHistoryInitialMatch: true,
      masterDetailBreakpoint:800
      // browserHistorySeparator: '#'
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
<Link href="/about/">About</Link> <Link href="/appbar/">appbar</Link>
<Button raised fill panelOpen="#side-nav">Open nested panel</Button>
<Panel left effect="push" backdrop={false} collapsedBreakpoint={768} containerEl="#panel-page" id="side-nav">
  <Page>
    <Block strong>
      <p>This is page-nested Panel.</p>
      <p>
        <Link panelClose>Close me</Link>
      </p>
    </Block>
  </Page>
</Panel>
<!-- onViewInit={viewInit}  -->
  <View url="/" main={true} class="safe-areas" onViewInit={viewInit}  />
</App>
