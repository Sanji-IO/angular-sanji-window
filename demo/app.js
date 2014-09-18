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
    .value('io', io)
    .controller('AppCtrl', function(BundleService) {

      var app = this;

      BundleService.getAll()
      .then(function(bundles) {
        app.bundles = bundles;
      });

    });

}());
