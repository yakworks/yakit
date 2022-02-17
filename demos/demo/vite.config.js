// eslint-disable-next-line
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess'
// import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { URL } from 'url'; // in Browser, the URL in native accessible on window

// const buildFolder = process.env.NODE_ENV === 'production' ? 'packages' : 'build';
const buildFolder = '../../../framework7/build'


// const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const basedir = new URL('.', import.meta.url).pathname;
const production = process.env.NODE_ENV === 'production'


export default {
  plugins: [
    svelte({
      emitCss: production,
      preprocess: sveltePreprocess({
        postcss: true
      }),
      compilerOptions: {
        dev: true //!production
      },

      // @ts-ignore This is temporary until the type definitions are fixed!
      // hot: !production
    })
  ],
  root: './',
  base: '',
  publicDir: path.resolve(basedir, 'public'),
  build: {
    outDir: path.resolve(basedir, 'dist'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  server: {
    host: 'localhost',
    port: 9001
  },
  optimizeDeps: {
    exclude: ['framework7-svelte', 'framework7'],
  },
  resolve: {
    alias: {
      'framework7/lite/bundle': path.resolve(
        basedir,
        `${buildFolder}/core/framework7-lite-bundle.esm.js`,
      ),
      'framework7/css/bundle': path.resolve(
        basedir,
        `${buildFolder}/core/framework7-bundle.css`,
      ),
      'framework7/lite': path.resolve(
        basedir,
        `${buildFolder}/core/framework7-lite.esm.js`,
      ),
      'framework7-svelte': path.resolve(basedir, `${buildFolder}/svelte`),
    },
  },
};
