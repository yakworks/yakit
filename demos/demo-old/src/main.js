// import './app.css'
import './vendor.css.js'
import './assets/styles.scss'
// framework7
// import '@yakit/svelte/framework7'
import './framework7'

// VENDOR
// import '@yakit/ui/jqGrid'
// import './vendor'

import App from './App.svelte'

// Mount Svelte App
const app = new App({
  target: document.getElementById('app'),
});

export default app
