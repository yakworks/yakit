// eslint-disable-next-line
import svelte from 'rollup-plugin-svelte';

export default {
  plugins: [svelte()],
  // optimizeDeps: {
  //   exclude: ['framework7-svelte*']
  // }
  server: {
    host: 'localhost',
    port: 9001
  }
};
