'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

gulp.task('clean:serve', function() {
  return gulp.src('./demo/bundle', { read: false })
  .pipe(rimraf());
});

gulp.task('clean:dist', function() {
  return gulp.src(['.tmp', 'dist'], { read: false })
  .pipe(rimraf());
});
