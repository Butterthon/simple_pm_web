const path = require('path');
const { merge } = require('webpack-merge')
const DotenvPlugin = require('dotenv-webpack')
const webpack = require('webpack')
const baseConfig = require('./base')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    // ホットリロード
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),

    // 環境変数
    new DotenvPlugin({
      path: path.resolve(__dirname, '../../.env.development')
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
})
