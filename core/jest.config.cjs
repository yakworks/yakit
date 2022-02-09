const base = require('../config/jest.config.cjs')
const packageJson = require('./package')

module.exports = {
  ...base,
  name: packageJson.name,
  displayName: packageJson.name
}
