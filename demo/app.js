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
    .value('_', _)
    .controller('AppCtrl', function(BundleService, _) {

      var app = this;

      BundleService.getAll()
      .then(function(bundles) {
        _.forEach(bundles, function(bundle, index) {
          if (0 === index) {
            bundle.isShow = true;
          } else {
            bundle.isShow = false;
          }
        });
        app.bundles = bundles;
      });

      app.setShowContentStatus = function(selectedBundle) {
        _.forEach(app.bundles, function(bundle) {
          bundle.isShow = false;
        });

        selectedBundle.isShow = true;
      };

    });

}());
