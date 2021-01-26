const path = require('path');
const baseDir = path.resolve(__dirname, '../../')
const srcDir = path.resolve(baseDir, 'src')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  context: srcDir,
  entry: [
    path.resolve(srcDir, 'index.tsx'),
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'react-refresh/babel',
              ],
              presets: [
                '@babel/preset-typescript',
              ],
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ]
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
      },
      {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
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
    // ts-loaderによるコンパイルを高速化したい、でもtsの型チェックはしたい
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(baseDir, 'tsconfig.json')
      }
    }),

    // ホットリロード
    new ReactRefreshWebpackPlugin(),

    // build時、distにindex.html出力
    new HtmlWebpackPlugin({
      template: path.resolve(baseDir, 'public/index.html')
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
};
