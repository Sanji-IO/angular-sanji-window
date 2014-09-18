// Gulp tasks which start a server for development or e2e tests.
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

var files = [
  './demo/scripts/*.js',
  '!./demo/scripts/sanji-window.js',
  './demo/index.html',
  './demo/app.js',
  './demo/bundle/main.html'
];

gulp.task('express-server', function(done) {

  var called = false;

  nodemon({
    script: 'server.js',
    watch: ['server.js'],
  })
  .on('start', function() {
    if (! called) {
      done();
      called = true;
    }
  });

});

// Static server
gulp.task('browser-sync', ['express-server'], function() {
  browserSync.init(files, {
    proxy: {
      host: "http://localhost",
      port: 4000
    },
    open: true,
    browser: 'google chrome'
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


