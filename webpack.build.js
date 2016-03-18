'use strict';

var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'angular-sanji-window': './sanji-window/index.js'
};
config.output.library = 'sjWindow';
config.output.libraryTarget = 'umd';
config.externals = {
  angular: {
    root: 'angular',
    commonjs2: 'angular',
    commonjs: 'angular',
    amd: 'angular'
  },
  'angular-material': {
    root: 'ngMaterial',
    commonjs2: 'angular-material',
    commonjs: 'angular-material',
    amd: 'angular-material'
  },
  'angular-busy': {
    root: 'ngBusy',
    commonjs2: 'angular-busy',
    commonjs: 'angular-busy',
    amd: 'angular-busy'
  },
  'angular-material-icons': {
    root: 'ngMdIcons',
    commonjs2: 'angular-material-icons',
    commonjs: 'angular-material-icons',
    amd: 'angular-material-icons'
  }
};

config.module.loaders = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer?browsers=last 2 versions!sass?includePaths[]=' + bourbon)
  }
].concat(config.module.loaders);

config.plugins.push(
  new ExtractTextPlugin('angular-sanji-window.css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);
module.exports = config;
