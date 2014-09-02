;(function() { 'use strict';

  angular
    .module('sanji.bundle')
    .factory('snmpService', snmpService);

  function snmpService($http, $q) {

    // Members definition
    var bundleModel = {};
    
    
    
    
    bundleModel.read = getModel
    
    bundleModel.update = putModel
    
    

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
    
    function putModel() {
      var deferred = $q.defer();
      $http
        .put('http://sanjiapi.apiary-mock.com/network/snmpd')
        .then(function(res) {
          deferred.resolve(res.data);
        }, function(res) {
          deferred.reject(res.data);
        });
      return deferred.promise;
    };
    
    
  }

}());
