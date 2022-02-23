import Framework7 from 'framework7/lite-bundle';
import Framework7Svelte from 'framework7-svelte';
// adding this gets rid of the 'Cannot read properties of undefined (reading 'once')' error
import 'framework7/lite';

Framework7.use(Framework7Svelte);

import App from './App.svelte';
import './assets/index'
// import 'framework7/framework7-bundle.css'
// import './assets/demo-orig.css'

// Init Svelte App
const app = new App({
  target: document.getElementById('app'),
});
export default app;
