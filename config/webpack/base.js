const path = require('path');
const baseDir = path.resolve(__dirname, '../../')
const srcDir = path.resolve(baseDir, 'src')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const isEnvDevelopment = process.env.NODE_ENV === 'development'
const isEnvProduction = process.env.NODE_ENV === 'production';

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
                isEnvDevelopment && 'react-refresh/babel',
              ].filter(Boolean),
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

    // build時、distにindex.html出力
    new HtmlWebpackPlugin({
      template: path.resolve(baseDir, 'public/index.html')
    }),
  ]
};
