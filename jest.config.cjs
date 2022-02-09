const base = require('./config/jest.config.cjs')

module.exports = {
  ...base,
  roots: ['<rootDir>'],
  projects: [
    '<rootDir>/ui',
    '<rootDir>/demo',
    '<rootDir>/core',
    '<rootDir>/svelte'
  ]
}
