'use strict';

var gulp = require('gulp');

// Template task
gulp.task('html', function() {
  return gulp.src('./src/window/*.html')
  .pipe(gulp.dest('./dist/window'))
  .pipe(gulp.dest('./demo/templates'));
});
