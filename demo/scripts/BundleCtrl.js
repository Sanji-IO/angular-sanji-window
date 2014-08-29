;(function() { 'use strict';

  angular
    .module('demoApp')
    .controller('BundleCtrl', BundleCtrl);

  function BundleCtrl($scope, BundleService) {

    // Members definition
    var vm = this; // vm means ViewModle
    vm.info = null;
    vm.edit = null;

    activate();

    // Member function implement
    function activate() {
      BundleService
        .get()
        .then(function(model) {
          vm.info = model;
          vm.edit = angular.copy(model);
          $scope.sanjiWindowMgr.goToInfoState();
        }, function() {
          console.log('Bundle controller activate error.');
        });
    }

  }

}());

