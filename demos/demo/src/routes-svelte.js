// import Home from './pages/home.svelte';
import Home from './Home.svelte';
import About from './pages/about.svelte';

import Accordion from './pages/accordion.svelte';
import ActionSheet from './pages/action-sheet.svelte';
import Appbar from './pages/appbar.svelte';
import TabsRoutable from './pages/tabs-routable.svelte';
import Panel from './pages/panel.svelte';

import NotFound from './pages/404.svelte';

// Export the route definition object
export default {
  '/': Home,
  '/about': About,
  '/accordion': Accordion,
  '/action-sheet': ActionSheet,
  '/appbar': Appbar,

  // Catch-all, must be last
  '*': NotFound
}

