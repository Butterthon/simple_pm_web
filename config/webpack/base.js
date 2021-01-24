const path = require('path');
const baseDir = path.resolve(__dirname, '../../')
const srcDir = path.resolve(baseDir, 'src')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: srcDir,
  entry: [
    path.resolve(srcDir, 'index.tsx'),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
      },
      {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      components: path.resolve(srcDir, 'components'),
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(baseDir, 'public/index.html')
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
};
