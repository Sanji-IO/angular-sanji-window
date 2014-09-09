'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');
var wiredep = require('wiredep');

gulp.task('test:unit', function() {

  var bowerDeps = wiredep({
    directory: 'demo/bower_components',
    dependencies: true,
    devDependencies: true,
    exclude: [
      'demo/bower_components/angular-google-maps/dist/angular-google-maps.js'
    ]
  });

  var files = bowerDeps.js.concat([
    'demo/scripts/sanji-window.js',
    'demo/app.js',
    'test/unit/**/*.js'
  ]);

  files.unshift('http://maps.googleapis.com/maps/api/js?sensor=false&language=en');

  return gulp.src(files)
    .pipe(karma({
      configFile: './karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
       // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });

});
