import Framework7 from 'framework7/lite/bundle';
import Framework7Svelte from 'framework7-svelte';
import App from './app.svelte';
// adding this gets rid of the 'Cannot read properties of undefined (reading 'once')' error
import 'framework7/lite';

Framework7.use(Framework7Svelte);

// Init Svelte App
const app = new App({
  target: document.getElementById('app'),
});

export default app;
