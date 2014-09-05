// Gulp tasks which start a server for development or e2e tests.
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var files = [
  './demo/scripts/*.js',
  '!./demo/scripts/sanji-window.js',
  './demo/index.html',
  './demo/app.js',
  './demo/bundle/main.html'
];
// Static server
gulp.task('browser-sync', function() {
  browserSync.init(files, {
    server: {
      baseDir: './demo'
    }
  });
});

gulp.task('browser-sync:e2e', function() {
  browserSync.init(files, {
    server: {
      baseDir: './demo',
    },
    open: false
  });
});

// Reload all browsers
gulp.task('bs-reload', function() {
  browserSync.reload();
});
