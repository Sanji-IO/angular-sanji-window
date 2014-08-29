;(function() { 'use strict';

  angular
    .module('demoApp')
    .factory('BundleService', BundleService);

  function BundleService($http, $q) {

    // Members definition
    var bundleModel = {};
    bundleModel.get = getModel;

    return bundleModel;

    // Member function implement
    function getModel() {

      var deferred = $q.defer();

      $http
        .get('http://sanjiapi.apiary-mock.com/network/snmpd')
        .then(function(res) {
          deferred.resolve(res.data);
        }, function(res) {
          deferred.reject(res.data);
        });

      return deferred.promise;

    };

  }

}());

