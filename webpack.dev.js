const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;
const config = require('./webpack.config.js');

config.devtool = 'eval';
config.entry = {
  'angular-module': [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './app.js'
  ]
};
config.module.rules = [
  {test: /\.js$/, loader: 'ng-annotate', exclude: /(node_modules)/, enforce: 'post'},
  {test: /\.scss/, loader: 'style!css!postcss!sass?includePaths[]=' + bourbon},
  {test: /\.css$/, loader: 'style!css!postcss?browsers=last 2 versions'},
  {test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192', exclude: /node_modules/},
  {test: /\.(woff|woff2)$/, loader: 'url?limit=10000&minetype=application/font-woff', exclude: /node_modules/},
  {test: /\.(ttf|eot|svg)$/, loader: 'file', exclude: /node_modules/}
].concat(config.module.rules);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.LoaderOptionsPlugin({
    debug: true,
    options: {
      postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
      ]
    }
  }),
  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: true
  })
);

module.exports = config;
