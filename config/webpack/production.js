const path = require('path');
const { merge } = require('webpack-merge')
const DotenvPlugin = require('dotenv-webpack')
const baseConfig = require('./base')

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
      new DotenvPlugin({
        path: path.resolve(__dirname, '../../.env.production')
      })
    ],
    output: {
      path: path.resolve(__dirname, '../../dist'),
      filename: 'bundle.[contenthash:8].js'
    },
})
