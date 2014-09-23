'use strict';

var gulp = require('gulp');

// Template task
gulp.task('html', function() {
  return gulp.src('./src/*.html')
  .pipe(gulp.dest('./dist'))
  .pipe(gulp.dest('./demo/templates'));
});
