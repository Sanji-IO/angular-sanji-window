;(function() { 'use strict';

  angular
    .module('sanji.window')
    .controller('snmpCtrl', snmpCtrl);

  function snmpCtrl($log, $scope, snmpService) {

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
      snmpService
        .read()
        .then(function(model) {
          vm.info = model;
          vm.edit = angular.copy(model);
          sanjiWindowMgr.goToInfoState();
        }, function() {
          $log.info('snmp controller activate error.');
        });
    }

    function reload() {
      sanjiWindowMgr.goToLoadingState();
      activate();
    }

    function submit() {
      sanjiWindowMgr.goToProcessingState();
      snmpService

        .update()


        .then(function() {
          sanjiWindowMgr.goToInfoState();
        }, function() {
          sanjiWindowMgr.goToProblemState();
        });
    }

  }

}());
