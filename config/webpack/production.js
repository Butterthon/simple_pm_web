const { merge } = require('webpack-merge')
const base = require('./base')

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
      new DotenvPlugin({
        path: path.resolve(__dirname, '../../.env.production')
      })
    ],
})
