module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['svelte3', 'jest'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    babelOptions: {
      rootMode: "upward",
    },
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
    jest: true
  },
  ignorePatterns: [
    "coverage/",
    "**/*spec.js"
  ],
  rules: {
    'no-unused-vars': 0,
    quotes: 0,
    semi: 0,
    'comma-dangle': 0,
    'no-return-assign': 0,
    'no-useless-escape': 0,
    'space-before-blocks': 0,
    'padded-blocks': 0,
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'a11y-invalid-attribute': 0
  }
}
