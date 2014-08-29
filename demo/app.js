;(function() { 'use strict';

  angular
    .module('demoApp', [
      'ngAnimate',
      'ngRoute',
      'sanji.window'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: [
            '<sanji-window title="{{item.title}}"',
            'content-url="{{item.url}}">',
            '</sanji-window>'
            // '<sanji-window title="{{item2.title}}"',
            // 'content-url="{{item2.url}}">',
            // '</sanji-window>'
          ].join(''),
          controller: function($scope) {
            $scope.item = {
              title: 'Bundle',
              url: 'bundle/main.html'
            };
            // $scope.item2 = {
              // title: 'Test',
              // url: 'bundle/main.html'
            // };
          }
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}());
