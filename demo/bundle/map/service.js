;(function() { 'use strict';

  angular
    .module('sanji.window')
    .factory('mapService', mapService);

  function mapService($http, $q) {

    // Members definition
    var bundleModel = {};




    bundleModel.read = getModel

    bundleModel.update = putModel



    return bundleModel;

    // Member function implement




    function getModel() {
      var deferred = $q.defer();
      $http
        .get('http://sanjiwindowapi.apiary-mock.com/map')
        .then(function(res) {
          deferred.resolve(res.data);
        }, function(res) {
          deferred.reject(res.data);
        });
      return deferred.promise;
    };

    function putModel() {
      var deferred = $q.defer();
      $http
        .put('http://sanjiwindowapi.apiary-mock.com/map')
        .then(function(res) {
          deferred.resolve(res.data);
        }, function(res) {
          deferred.reject(res.data);
        });
      return deferred.promise;
    };


  }

}());
