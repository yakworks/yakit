import Framework7 from 'framework7/lite/bundle';
import Framework7Svelte from 'framework7-svelte';
import App from './App.svelte';

// import './assets/index'
import 'framework7/css/bundle'
import './assets/demo.css'

Framework7.use(Framework7Svelte);

// Init Svelte App
const app = new App({
  target: document.getElementById('app'),
});

export default app;
