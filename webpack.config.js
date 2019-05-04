const webpack = require('webpack')
const { join, resolve } = require('path')
const { sync } = require('glob')

const loadersDir = join(__dirname, 'loaders')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public')
  },
  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader)) // eslint-disable-line
  },
  devServer: {
    open: true,
    openPage: 'index.html',
    contentBase: __dirname,
    publicPath: '/public/',
    watchContentBase: true,
    port: 5000,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
