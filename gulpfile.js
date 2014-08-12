var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    prefix = require('gulp-autoprefixer');

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

  return gulp.src('./src/window/*.scss')
  .pipe(plugins.sass())
  .pipe(prefix('last 2 version', 'ie 8', 'ie 9'))
  .pipe(gulp.dest('./dist/window'))
  .pipe(gulp.dest('./demo/styles'))
  .pipe(browserSync.reload({stream: true}));

});

// JavaScript task
gulp.task('js', function() {

  return gulp.src('./src/window/*.js')
  .pipe(plugins.jshint())
  .pipe(plugins.jshint.reporter('default'))
  .pipe(plugins.concat('sanji-window.js'))
  .pipe(plugins.ngAnnotate())
  .pipe(gulp.dest('./dist/window'))
  .pipe(gulp.dest('./demo/scripts'))
  .pipe(plugins.rename('sanji-window.min.js'))
  .pipe(plugins.uglify())
  .pipe(gulp.dest('./dist/window'));

});

// Template task
gulp.task('html', function() {

  return gulp.src('./src/window/*.html')
  .pipe(gulp.dest('./dist/window'))
  .pipe(gulp.dest('./demo/templates'));

});

// Reload all browsers
gulp.task('bs-reload', function() {
  browserSync.reload();
});

// Default task to be run with 'gulp
gulp.task('default', ['browser-sync', 'html', 'sass', 'js'], function() {
  gulp.watch('./src/window/*.scss', ['sass']);
  gulp.watch('./src/window/*.js', ['js', 'bs-reload']);
  gulp.watch('./src/window/*.html', ['html', 'bs-reload']);
  gulp.watch('./demo/**/*.html', ['bs-reload']);
});
