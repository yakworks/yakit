// import './app.css'
import './vendor.css.js'
// import './assets/styles.scss'
// framework7
// import '@yakit/svelte/framework7'
// VENDOR
// import '@yakit/ui/jqGrid'
// import './vendor'
import 'framework7/framework7-bundle.less'

import Framework7 from 'framework7/framework7-bundle';

// Import F7-Svelte Plugin
import Framework7Svelte from 'framework7-svelte';

// Init F7-Svelte Plugin
Framework7.use(Framework7Svelte);

import App from './App.svelte'

// Mount Svelte App
const app = new App({
  target: document.getElementById('app'),
});

export default app
