(function() {
  'use strict';
  angular
    .module('demoApp', [
      'ngAnimate',
      'sanji.window'
    ])
    .controller('AppController', AppController)
    .controller('EthernetController', EthernetController);

  function AppController($window) {
    var vm = this;
    vm.alert = function() {
      $window.alert('Go back callback alert!');
    };
  }

  function EthernetController($scope, $window) {
    var vm = this;
    var sanjiWindowMgr = $scope.sanjiWindowMgr;
    vm.ethernet = {
      ip: '192.168.31.204',
      netmask: '255.255.255.0',
      gateway: '192.168.31.254'
    };
    sanjiWindowMgr.goToInfoState();
  }
}());
