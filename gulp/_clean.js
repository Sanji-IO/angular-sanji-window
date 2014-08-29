'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

// Template task
gulp.task('clean', function() {
  return gulp.src(['.tmp', 'dist'], { read: false })
  .pipe(rimraf());
});
