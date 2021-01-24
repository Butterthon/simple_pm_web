const path = require('path');
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const base = require('./base')

module.exports = merge(base, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    "webpack-dev-server/client?http://0.0.0.0:3000",
    "webpack/hot/only-dev-server",
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    // open: true,
    overlay: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
