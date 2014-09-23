'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// JavaScript task
gulp.task('js', function() {
  return gulp.src('./src/*.js')
  .pipe(plugins.jshint())
  .pipe(plugins.jshint.reporter('jshint-stylish'))
  .pipe(plugins.concat('sanji-window.js'))
  .pipe(plugins.ngAnnotate())
  .pipe(gulp.dest('./dist'))
  .pipe(gulp.dest('./demo/scripts'))
  .pipe(plugins.rename('sanji-window.min.js'))
  .pipe(plugins.uglify())
  .pipe(gulp.dest('./dist'));
});
