;(function() { 'use strict';

  // This is for sanji bundle module
  angular
    .module('sanji.bundle', []);

  angular
    .module('demoApp', [
      'ngAnimate',
      'ngRoute',
      'sanji.window',
      'sanji.bundle'
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
          }
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}());
