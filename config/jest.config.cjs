// see https://el3um4s.medium.com/how-to-test-sveltekit-app-with-jest-848afa8edbc7
// and https://koenvg.medium.com/setting-up-jest-with-sveltekit-4f0a0e379668
module.exports = {
  //testMatch: [ "**/__tests__/**/*.spec.[jt]s?(x)"],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.m?(j)s$': 'babel-jest',

    '^.+\\.svelte$': ['svelte-jester', { preprocess: './config/svelte.config.test.cjs' }],
    // 'node_modules/.+\\.svelte$': ['svelte-jester', { preprocess: './config/svelte.config.test.cjs' }],

    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub'
  },
  moduleFileExtensions: ['svelte', 'js'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // collectCoverageFrom: ['src/**/*.{ts,tsx,svelte,js,jsx}']
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/dist/', '<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/build/coverage/',
  transformIgnorePatterns: ['node_modules/(?!(svelte-spa-router)/)']
}

// function ignoreModules(modules) {
//   return `node_modules/(?!(${modules.join('|')})/)`
// }
