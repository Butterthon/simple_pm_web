const path = require('path');
const { merge } = require('webpack-merge')
const DotenvPlugin = require('dotenv-webpack')
const webpack = require('webpack')
const baseConfig = require('./base')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DotenvPlugin({
      path: path.resolve(__dirname, '../../.env.development')
    })
  ],
})
