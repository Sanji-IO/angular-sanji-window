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
          template: [
            '<sanji-window title="{{item.title}}"',
            'content-url="{{item.url}}">',
            '</sanji-window>',
            '<hr/>',
            '<sanji-window title="{{item2.title}}"',
            'content-url="{{item2.url}}">',
            '</sanji-window>',
            '<sanji-window title="{{item3.title}}"',
            'content-url="{{item3.url}}">',
            '</sanji-window>'
          ].join(''),
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
