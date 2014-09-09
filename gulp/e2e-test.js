// e2e tests.
'use strict';

var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;
var browserSync = require('browser-sync');

gulp.task('test:e2e', ['protractor']);
gulp.task('webdriver-update', ['browser-sync:e2e'], protractor.webdriver_update);
gulp.task('protractor', ['webdriver-update'], function(done) {
  gulp
    .src([
      './test/e2e/**/*.js'
    ])
    .pipe(protractor({
      configFile: "./protractor_conf.js"
    }))
    .on('error', function(e) {
      throw e
    })
    .on('end', function() {
      // Close browser
      browserSync.exit();
      done();
    });
});

