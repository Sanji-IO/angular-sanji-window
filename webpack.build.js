const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;
const config = require('./webpack.config.js');

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

config.module.rules = [
  { test: /\.js$/, loader: 'ng-annotate-loader', exclude: /(node_modules)/, enforce: 'post' },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader!postcss-loader!sass-loader?includePaths[]=' + bourbon
    })
  }
].concat(config.module.rules);

config.plugins.push(
  new ExtractTextPlugin('angular-sanji-window.css'),
  new LodashModuleReplacementPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    quiet: true,
    options: {
      postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
      dead_code: true
    }
  })
);
module.exports = config;
