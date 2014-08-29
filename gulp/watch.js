'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

gulp.task('watch', ['browser-sync', 'html', 'sass', 'js'], function() {
  gulp.watch('./bundle.json', function() {
    runSequence('sanji-window-compiler', 'bs-reload');
  });
  gulp.watch('./src/window/*.scss', function() {
    runSequence('sass', function() {
      browserSync.reload({stream: true});
    });
  });
  gulp.watch('./src/window/*.js', function(event) {
    runSequence('js', 'bs-reload');
  });
  gulp.watch('./src/window/*.html', function() {
    runSequence('html', 'bs-reload');
  });
});
