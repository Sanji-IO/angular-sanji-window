;(function() { 'use strict';

  angular
    .module('sanji.window')
    .controller('mapCtrl', mapCtrl);

  function mapCtrl($log, $scope, mapService) {

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
      mapService
        .read()
        .then(function(model) {
          vm.info = model;
          vm.edit = angular.copy(model);
          sanjiWindowMgr.goToInfoState();
        }, function() {
          $log.info('map controller activate error.');
        });
    }

    function reload() {
      sanjiWindowMgr.goToLoadingState();
      activate();
    }

    function submit() {
      sanjiWindowMgr.goToProcessingState();
      mapService

        .update()


        .then(function() {
          sanjiWindowMgr.goToInfoState();
        }, function() {
          sanjiWindowMgr.goToProblemState();
        });
    }

  }

}());
