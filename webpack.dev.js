'use strict';

var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');

config.ip = 'localhost';
config.port = 8080;
config.debug = true;
config.devtool = 'eval';
config.entry = {
  'angular-module': [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://' + config.ip + ':' + config.port,
    './app.js'
  ]
};
config.module.loaders = [
  {test: /\.scss/, loader: 'style!css!autoprefixer?browsers=last 2 versions!sass?includePaths[]=' + bourbon},
  {test: /\.css$/, loader: 'style!css!autoprefixer?browsers=last 2 versions'},
  {test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
  {test: /\.(woff|woff2)$/, loader: "url?limit=10000&minetype=application/font-woff"},
  {test: /\.(ttf|eot|svg)$/, loader: "file"}
].concat(config.module.loaders);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new WebpackNotifierPlugin({title: 'Webpack'}),
  new HtmlWebpackPlugin({
    template: 'app/index.html',
    inject: 'body',
    hash: true
  })
);

module.exports = config;
