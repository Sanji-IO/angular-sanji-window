'use strict';

var gulp = require('gulp');

// Development task to be run with gulp
gulp.task('serve', ['sanji-window-compiler'], function() {
  gulp.start('watch');
});
