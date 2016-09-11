// Karma configuration
'use strict';

var webpackConfig = require('./webpack.test');
var test = process.env.NODE_ENV === 'test';

module.exports = function(config) {
  config.set({
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-chai-plugins',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-spec-reporter'
    ],

    autoWatch: test,

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    client: {
      captureConsole: true
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'app/app.test.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'app/app.test.js': [ 'webpack', 'sourcemap' ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],


    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/', subdir: '.'},
        {type: 'json', dir: 'coverage/', subdir: '.'},
        {type: 'text-summary'}
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !test
  });
};
