// eslint-disable-next-line
import { defineConfig } from 'vite'
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess'
import path from 'path';
import { URL } from 'url'; // in Browser, the URL in native accessible on window

// const buildFolder = process.env.NODE_ENV === 'production' ? 'packages' : 'build';
// const buildFolder = '../../framework7'


// const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const basedir = new URL('.', import.meta.url).pathname;
const production = process.env.NODE_ENV === 'production'
/**
 * Change this to `true` to generate source maps alongside your production bundle. This is useful for debugging, but
 * will increase total bundle size and expose your source code.
 */
const sourceMapsInProduction = true
/**
 * Babel will compile modern JavaScript down to a format compatible with older browsers, but it will also increase your
 * final bundle size and build speed. Edit the `browserslist` property in the package.json file to define which
 * browsers Babel should target.
 *
 * Browserslist documentation: https://github.com/browserslist/browserslist#browserslist-
 */
const useBabel = true

const cfg = defineConfig({
  plugins: [
    svelte({
      emitCss: production,
      preprocess: sveltePreprocess({
        postcss: true
      }),
      compilerOptions: {
        dev: true //!production
      },
      onwarn: (warning, onwarn) => {
        //disable all of them
        return
        // if (warning.code === 'a11y-missing-attribute') return true
        // // let Rollup handle all other warnings normally
        // onwarn(warning)
      }

      // @ts-ignore This is temporary until the type definitions are fixed!
      // hot: !production
    })
  ],
  root: './',
  base: '',
  publicDir: path.resolve(basedir, 'public'),
  build: {
    sourcemap: sourceMapsInProduction,
    outDir: path.resolve(basedir, 'dist'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  server: {
    host: 'localhost',
    port: 9001
  },
  optimizeDeps: {
    exclude: ['framework7-svelte@7.0.0-beta.11', 'framework7'],
  }
})

export default cfg
