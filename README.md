# Yakit Monorepo

From here. With jest and router added

A starter template for [Svelte](https://svelte.dev) that comes preconfigured with [Vite](https://vitejs.dev/),
TypeScript, SCSS, Babel, Autoprefixer, and HMR.

---

## Getting started

### Installation

### Starting the development server

Run the `dev` script to start a live development server with hot module replacement. Then check the output for a link
to the app, which is usually `http://localhost:5000/`:

```bash
npm run dev
```

### Building for production

Run the `build` script to bundle the app for production. The bundle will be created at `/dist/assets/` and the `dist`
directory will contain all files you need to host the app:

```bash
npm run build
```

> 💡 **Tip:** You can quickly test the production build by running `npm run preview` locally.

---

## Usage

### Global stylesheets

Edit the `index.html` file and add additional `<link>` references to stylesheets:

```html
<link rel="stylesheet" type="text/css" href="/src/styles/index.scss" />
```

You can specify `css`, `scss`, and `sass` files here, and they will be compiled and minified as necessary. These styles
will be added to the bundle in the order specified. Svelte's styles will always load last.

> 💡 **Note:** The paths to these assets must start with `/` in order to resolve.

### Browsers list

The bundle will be compiled to run on the browsers specified in `package.json`:

```json
"browserslist": [
    "defaults"
]
```

If you wish to customize this, please refer to the list of
[example browserslist queries](https://github.com/browserslist/browserslist#full-list).

### Babel customization

Production builds are compiled with Babel automatically. If you wish to disable it, edit the `vite.config.ts` file:

```ts
const useBabel = false
```

### Source maps in production

Source maps are generated automatically during development. They are not included in production builds by default. If
you wish to change this behavior, edit the `vite.config.ts` file:

```ts
const sourceMapsInProduction = true
```
