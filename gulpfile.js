'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

// Build task to be run with gulp
gulp.task('default', ['clean:dist'], function() {
  gulp.start('build');
});

// Compile snaji window template files
gulp.task('sanji-window-compiler', ['clean:serve'], function() {
  var path = require('path');
  var fs = require('fs');
  var SanjiWindowCompiler = require('sanji-window-compiler');

  fs.readFile(path.resolve(__dirname, './bundle/bundle.json'), function(err, data) {

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
    console.log(compiler.jsonOutputControllerJs('./demo/bundle/' + bundle.name + '/controller.js', bundle));
    console.log(compiler.jsonOutputServiceJs('./demo/bundle/' + bundle.name + '/service.js', bundle));
  });

  fs.readFile(path.resolve(__dirname, './bundle/mapBundle.json'), function(err, data) {

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
    console.log(compiler.jsonOutputControllerJs('./demo/bundle/' + bundle.name + '/controller.js', bundle));
    console.log(compiler.jsonOutputServiceJs('./demo/bundle/' + bundle.name + '/service.js', bundle));
  });

  fs.readFile(path.resolve(__dirname, './bundle/lineChartBundle.json'), function(err, data) {

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
    console.log(compiler.jsonOutputControllerJs('./demo/bundle/' + bundle.name + '/controller.js', bundle));
    console.log(compiler.jsonOutputServiceJs('./demo/bundle/' + bundle.name + '/service.js', bundle));
  });

});

gulp.task('add-test-window', function() {
  var path = require('path');
  var fs = require('fs');
  var SanjiWindowCompiler = require('sanji-window-compiler');

  fs.readFile(path.resolve(__dirname, './bundle/testBundle.json'), function(err, data) {

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
    console.log(compiler.jsonOutputControllerJs('./demo/bundle/' + bundle.name + '/controller.js', bundle));
    console.log(compiler.jsonOutputServiceJs('./demo/bundle/' + bundle.name + '/service.js', bundle));
  });
});
