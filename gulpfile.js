var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync');


// Static server
gulp.task('browser-sync', function() {

  browserSync({
    server: {
      baseDir: './demo'
    }
  });

});

// Sass task
gulp.task('sass', function() {

  return gulp.src()
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({stream: true}));

});

// JavaScript task
gulp.task('js', function() {

  return gulp.src('')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(reload({stream: true}));

});

// Reload all browsers
gulp.task('bs-reload', function() {
  browserSync.reload();
});

// Default task to be run with 'gulp
gulp.task('default', ['browser-sync'], function() {
  // gulp.watch('', ['sass']);
  // gulp.watch('*.js', ['bs-reload']);
  gulp.watch('./demo/*.html', ['bs-reload']);
});
