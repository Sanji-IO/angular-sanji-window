'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

gulp.task('watch', ['browser-sync', 'html', 'sass', 'js'], function() {
  gulp.watch(['./bundle/bundle.json', './bundle/mapBundle.json'], function() {
    runSequence('sanji-window-compiler', 'bs-reload');
  });
  gulp.watch('./src/*.scss', function() {
    runSequence('sass', 'bs-reload');
  });
  gulp.watch('./src/*.js', function() {
    runSequence('js', 'bs-reload');
  });
  gulp.watch('./src/*.html', function() {
    runSequence('html', 'bs-reload');
  });
});
