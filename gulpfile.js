'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

// Development task to be run with gulp
gulp.task('serve', ['sanji-window-compiler'], function() {
  gulp.start('watch');
});

// Build task to be run with gulp
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});

// Compile snaji window template files
gulp.task('sanji-window-compiler', function() {
  var path = require('path');
  var fs = require('fs');
  var SanjiWindowCompiler = require('sanji-window-compiler');

  fs.readFile(path.resolve(__dirname, './bundle.json'), function(err, data) {

    var bundle;
    var compiler = new SanjiWindowCompiler();

    if (err) {
      throw err;
    }

    try {
      bundle = JSON.parse(data);
    } catch(err) {
      throw err;
    }

    console.log('===== compile bundle.json =====');
    console.log(compiler.jsonOutputMainHtml('./demo/bundle/' + bundle.name + '/main.html', bundle));
    console.log(compiler.jsonOutputInfoHtml('./demo/bundle/' + bundle.name + '/info.html', bundle));
    console.log(compiler.jsonOutputEditHtml('./demo/bundle/' + bundle.name + '/edit.html', bundle));
    console.log(compiler.jsonOutputControllerJs('./demo/scripts/' + bundle.name + '.ctrl.js', bundle));
    console.log(compiler.jsonOutputServiceJs('./demo/scripts/' + bundle.name + '.srv.js', bundle));
  });

  fs.readFile(path.resolve(__dirname, './mapBundle.json'), function(err, data) {

    var bundle;
    var compiler = new SanjiWindowCompiler();

    if (err) {
      throw err;
    }

    try {
      bundle = JSON.parse(data);
    } catch(err) {
      throw err;
    }

    console.log('===== compile map bundle.json =====');
    console.log(compiler.jsonOutputMainHtml('./demo/bundle/' + bundle.name + '/main.html', bundle));
    console.log(compiler.jsonOutputInfoHtml('./demo/bundle/' + bundle.name + '/info.html', bundle));
    console.log(compiler.jsonOutputEditHtml('./demo/bundle/' + bundle.name + '/edit.html', bundle));
    console.log(compiler.jsonOutputControllerJs('./demo/scripts/' + bundle.name + '.ctrl.js', bundle));
    console.log(compiler.jsonOutputServiceJs('./demo/scripts/' + bundle.name + '.srv.js', bundle));
  });

  fs.readFile(path.resolve(__dirname, './lineChartBundle.json'), function(err, data) {

    var bundle;
    var compiler = new SanjiWindowCompiler();

    if (err) {
      throw err;
    }

    try {
      bundle = JSON.parse(data);
    } catch(err) {
      throw err;
    }

    console.log('===== compile line chart bundle.json =====');
    console.log(compiler.jsonOutputMainHtml('./demo/bundle/' + bundle.name + '/main.html', bundle));
    console.log(compiler.jsonOutputInfoHtml('./demo/bundle/' + bundle.name + '/info.html', bundle));
    console.log(compiler.jsonOutputEditHtml('./demo/bundle/' + bundle.name + '/edit.html', bundle));
    console.log(compiler.jsonOutputControllerJs('./demo/scripts/' + bundle.name + '.ctrl.js', bundle));
    console.log(compiler.jsonOutputServiceJs('./demo/scripts/' + bundle.name + '.srv.js', bundle));
  });

});
