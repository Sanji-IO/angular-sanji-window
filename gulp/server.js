// Gulp tasks which start a server for development or e2e tests.
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function() {
  browserSync.init([
    './demo/scripts/*.js',
    '!./demo/scripts/sanji-window.js',
    './demo/index.html',
    './demo/app.js'
  ], {
    server: {
      baseDir: './demo'
    }
  });
});

// Reload all browsers
gulp.task('bs-reload', function() {
  browserSync.reload();
});
