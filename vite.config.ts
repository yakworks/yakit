/**
 * We keep this as typescript so that we can import the package.json and use it
 */
import { defineConfig, UserConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import path from 'path'
import autoprefixer from 'autoprefixer'
import legacy from '@vitejs/plugin-legacy'
import pkg from './package.json'
import tsconfig from './jsconfig.json'
//for typescript use this one
// import tsconfig from './tsconfig.json'

/**
 * Babel will compile modern JavaScript down to a format compatible with older browsers, but it will also increase your
 * final bundle size and build speed. Edit the `browserslist` property in the package.json file to define which
 * browsers Babel should target.
 *
 * Browserslist documentation: https://github.com/browserslist/browserslist#browserslist-
 */
const useBabel = true

/**
 * Change this to `true` to generate source maps alongside your production bundle. This is useful for debugging, but
 * will increase total bundle size and expose your source code.
 */
const sourceMapsInProduction = false

const production = process.env.NODE_ENV === 'production'
// https://vitejs.dev/config/
const cfg = <UserConfig>defineConfig({
  plugins: [
    svelte({
      emitCss: production,
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: !production
      },
      // @ts-ignore This is temporary until the type definitions are fixed!
      hot: !production
    })
  ],
  server: {
    host: 'localhost',
    port: 9001
  },
  build: {
    sourcemap: sourceMapsInProduction
  },
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  }
})

// Babel
if (useBabel) {
  cfg.plugins.unshift(
    legacy({
      targets: pkg.browserslist
    })
  )
}

// Load path aliases from the tsconfig.json file
const aliases = tsconfig.compilerOptions.paths

for (const alias in aliases) {
  const paths = aliases[alias].map((p) => path.resolve(__dirname, p))

  // Our tsconfig uses glob path formats, whereas webpack just wants directories
  // We'll need to transform the glob format into a format acceptable to webpack

  const wpAlias = alias.replace(/(\\|\/)\*$/, '')
  const wpPaths = paths.map((p) => p.replace(/(\\|\/)\*$/, ''))

  if (!cfg.resolve) cfg.resolve = {}
  if (!cfg.resolve.alias) cfg.resolve.alias = {}

  if (cfg.resolve && cfg.resolve.alias && !(wpAlias in cfg.resolve.alias)) {
    cfg.resolve.alias[wpAlias] = wpPaths.length > 1 ? wpPaths : wpPaths[0]
  }
}

export default cfg
