/**
 * We keep this as typescript so that we can import the package.json and use it
 */
import { defineConfig, UserConfig } from 'vite'
// import { svelte } from '@sveltejs/vite-plugin-svelte'
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess'
import path from 'path'
// import autoprefixer from 'autoprefixer'
import legacy from '@vitejs/plugin-legacy'
import pkg from './package.json'
import tsconfig from '../jsconfig.json'
//for typescript use this one
// import tsconfig from './tsconfig.json'

const useBabel = true
const sourceMapsInProduction = false
const production = process.env.NODE_ENV === 'production'

const config = {
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
  server: {
    host: 'localhost',
    port: 9001
  },
  optimizeDeps: {
    exclude: ['free-jqgrid', 'dom7'],
  }
}

export default config
