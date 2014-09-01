;(function() { 'use strict';

  angular
    .module('demoApp')
    .controller('BundleCtrl', BundleCtrl);

  function BundleCtrl($log, $scope, BundleService) {

    // Members definition
    var vm = this; // vm means ViewModle
    var sanjiWindowMgr = $scope.sanjiWindowMgr;
    vm.info = null;
    vm.edit = null;
    vm.submit = submit;
    vm.activate = activate;
    vm.reload = reload;

    activate();

    // Member function implement
    function activate() {
      BundleService
        .read()
        .then(function(model) {
          vm.info = model;
          vm.edit = angular.copy(model);
          vm.info.map = {
            center: {
              latitude: 45,
              longitude: -73
            },
            zoom: 8
          }
          sanjiWindowMgr.goToInfoState();
        }, function() {
          $log.info('Bundle controller activate error.');
        });
    }

    function reload() {
      sanjiWindowMgr.goToLoadingState();
      activate();
    }

    function submit() {
      sanjiWindowMgr.goToProcessingState();
      BundleService
        .update()
        .then(function() {
          sanjiWindowMgr.goToInfoState();
        }, function() {
          sanjiWindowMgr.goToProblemState();
        });
    }

  }

}());

