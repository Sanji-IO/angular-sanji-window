;(function() { 'use strict';

  angular
    .module('demoApp')
    .service('BundleService', BundleService);

    function BundleService($rootScope, $http, $q, $ocLazyLoad, io, _) {

      // Members definition
      var self = this;

      self.bundles = [];
      self.MODULE_NAME = 'sanji.window';
      self.getAll = getAll;
      self.lazyLoadBundle = lazyLoadBundle;

      init();

      function init() {
        var socket = io.connect('http://localhost');
        socket.on('sanji.bundle.new', function(bundles) {
          var index = self.bundles.length;
          var tmp = [index, 0];
          var args = tmp.concat(bundles);

          self.lazyLoadBundle(bundles)
          .then(function() {
            self.bundles.splice.apply(self.bundles, args);
          });
        });

        socket.on('sanji.bundle.delete', function(res) {
          var index = _.findIndex(self.bundles, res);
          if (-1 !== index) {
            self.bundles.splice(index, 1);
            $rootScope.$digest();
          }
        });
      }

      // Member function implement
      function getAll() {
        var deferred = $q.defer();

        $http
        .get('/api/bundles')
        .then(function(res) {
          self.lazyLoadBundle(res.data)
          .then(function() {
            self.bundles = res.data;
            deferred.resolve(self.bundles);
          });
        });

        return deferred.promise;
      }

      function lazyLoadBundle(bundles) {
        var files = [], len = bundles.length;

        for (var i = 0; i < len; i++) {
          files.push(bundles[i].url.service);
          files.push(bundles[i].url.controller);
        }

        return $ocLazyLoad.load({
          name: self.MODULE_NAME,
          files: files
        });
      }

    }

}());
