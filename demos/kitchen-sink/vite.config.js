// eslint-disable-next-line
import { defineConfig } from 'vite'
import svelte from 'rollup-plugin-svelte';
// import legacy from '@vitejs/plugin-legacy'
import sveltePreprocess from 'svelte-preprocess'
// import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { URL } from 'url'; // in Browser, the URL in native accessible on window

// const buildFolder = process.env.NODE_ENV === 'production' ? 'packages' : 'build';
const rootDir = '../..'

// const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const basedir = new URL('.', import.meta.url).pathname;

const production = process.env.NODE_ENV === 'production'
const sourceMapsInProduction = true
const useBabel = false

const cfg = defineConfig({
  plugins: [
    svelte({
      emitCss: production,
      preprocess: sveltePreprocess({
        postcss: true
      }),
      compilerOptions: {
        dev: !production
      },
      // onwarn: (warning, onwarn) => {
      //   //disable all of them
      //   return
      //   // if (warning.code === 'a11y-missing-attribute') return true
      //   // // let Rollup handle all other warnings normally
      //   // onwarn(warning)
      // }

      // @ts-ignore This is temporary until the type definitions are fixed!
      // hot: !production
    })
  ],
  root: './',
  // base: '',
  // publicDir: path.resolve(basedir, 'public'),
  build: {
    sourcemap: sourceMapsInProduction,
    // outDir: path.resolve(basedir, 'dist'),
    // assetsInlineLimit: 0,
    // emptyOutDir: true,
  },
  server: {
    host: 'localhost',
    port: 9001
  },
  optimizeDeps: {
    exclude: ['free-jqgrid'],
    // exclude: ['framework7-svelte@7.0.0-beta.11', 'framework7@7.0.0-beta.11', 'free-jqgrid'],
    // exclude: ['framework7-svelte@7.0.0-beta.11', 'framework7'],
  },
  resolve: {
    alias: {
      // 'framework7-svelte/shared': path.resolve(
      //   basedir,
      //   `${rootDir}/node_modules/framework7-svelte/esm/shared`,
      // ),
      'framework7-svelte/shared': path.resolve(
        basedir,
        `node_modules/framework7-svelte/shared`

      ),
    },
  },
})

// if (useBabel) {
//   cfg.plugins.unshift(
//     legacy({
//       targets: [
//         "defaults"
//       ]
//     })
//   )
// }

export default cfg
