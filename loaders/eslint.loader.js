const path = require('path')
const { env } = require('process')

module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  enforce: 'pre',
  options: {
    configFile: path.resolve(env.PWD, '.eslintrc'),
    fix: true
  }
}
