'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plugins = require('gulp-load-plugins')();
var del = require('del');
var combiner = require('stream-combiner2');

var processCss = function() {
  return combiner(plugins.sass({
    includePaths: require('node-bourbon').includePaths
  }), plugins.autoprefixer('last 2 version', 'ie 8', 'ie 9'));
};

var processJs = function() {
  return combiner(plugins.ngAnnotate());
};

gulp.task('serve', ['sass:demo', 'js:demo', 'tpl:demo'], function() {
  browserSync.init({
    server: './demo'
  });

  gulp.watch([ 'src/*.html' ], ['tpl:demo']);
  gulp.watch([ 'src/*.scss', 'demo/styles/main.css' ], ['sass:demo']).on('change', browserSync.stream);
  gulp.watch([ 'src/*.js' ], ['js:demo']).on('change', browserSync.reload);
  gulp.watch([ 'demo/index.html', 'demo/templates/*.html' ]).on('change', browserSync.reload);
  gulp.watch([ 'demo/app.js' ]).on('change', browserSync.reload);
});

gulp.task('build', ['sass:build', 'js:build', 'tpl:build']);

gulp.task('clean', function (cb) {
  del(['dserveist'], cb);
});

gulp.task('sass:demo', function() {
  return gulp.src([ 'src/*.scss' ])
  .pipe(processCss())
  .pipe(gulp.dest('demo/styles'));
});

gulp.task('sass:build', function() {
  return gulp.src([ 'src/*.scss' ])
  .pipe(processCss())
  .pipe(gulp.dest('dist'));
});

gulp.task('js-lint', function() {
  return gulp.src('src/*.js')
  .pipe(plugins.eslint())
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failOnError());
});

gulp.task('js:demo', ['js-lint'], function() {
  return gulp.src('src/*.js')
  .pipe(processJs())
  .pipe(gulp.dest('demo/scripts'));
});

gulp.task('js:build', ['js-lint'], function() {
  return gulp.src('src/*.js')
  .pipe(processJs())
  .pipe(gulp.dest('dist'));
});

gulp.task('tpl:demo', function() {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('demo/templates'));
});

gulp.task('tpl:build', function() {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
});

// Build task to be run with gulp
gulp.task('default', ['serve']);

