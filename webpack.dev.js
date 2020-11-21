const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config({ path: `${__dirname}/.env` });
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
    },
      {
        test: /\.(gif|svg|jpg|png)$/,
        use : [
          {
            loader: 'url-loader'
          }
        ]
      }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Cyber Bullying Detection',
      inject: true,
      // eslint-disable-next-line global-require
      template: require('html-webpack-template'),
      bodyHtmlSnippet: '<main class="main" id="app"/>',
    }),
  ],
});
