;(function() { 'use strict';

  angular
    .module('demoApp', [
      'ngAnimate',
      'oc.lazyLoad',
      'sanji.window',
      'gridshore.c3js.chart'
    ])
    .config(function($ocLazyLoadProvider) {
      $ocLazyLoadProvider.config({
        events: true,
        debug: true,
        cache: true,
        loadedModules: ['sanji.window']
      });
    })
    .controller('AppCtrl', function($scope, $http, $ocLazyLoad, $injector) {
      var app = this;

      $http
      .get('http://sanjiwindowapi.apiary-mock.com/bundles')
      .then(function(res) {

        var files = [], bundles = res.data;

        for (var i = 0; i < bundles.length; i++) {
          files.push(bundles[i].url.service);
          files.push(bundles[i].url.controller);
        }

        // app.bundles = res.data;
        $ocLazyLoad.load({
          name: 'sanji.window',
          files: files
        })
        .then(function() {
          app.bundles = res.data;
        });
      });

    });

}());
