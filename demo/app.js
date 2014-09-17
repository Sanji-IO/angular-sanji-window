;(function() { 'use strict';

  angular
    .module('demoApp', [
      'ngAnimate',
      'ngRoute',
      'sanji.window',
      'gridshore.c3js.chart'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'templates/main.html',
          controller: function($scope) {
            $scope.item = {
              title: 'snmp',
              url: 'bundle/snmp/main.html'
            };
            $scope.item2 = {
              title: 'map',
              url: 'bundle/map/main.html'
            };
            $scope.item3 = {
              title: 'line chart',
              url: 'bundle/lineChart/main.html'
            };
          }
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}());
