'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// Sass task
gulp.task('sass', function() {
  return gulp.src('./src/*.scss')
  .pipe(plugins.sass({
    includePaths: require('node-bourbon').includePaths
  }))
  .pipe(plugins.autoprefixer('last 2 version', 'ie 8', 'ie 9'))
  .pipe(gulp.dest('./dist'))
  .pipe(gulp.dest('./demo/styles'));
});
