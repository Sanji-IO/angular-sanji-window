'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('test', ['sanji-window-compiler'], function() {
  runSequence('test:unit', 'test:e2e');
});
