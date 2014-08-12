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
          template: '<sanji-window title="{{item.title}}"' +
                      'content-url="{{item.url}}">' +
            '</sanji-window>',
          controller: function($scope) {
            $scope.item = {
              title: 'Bundle',
              url: 'bundle/main.html'
            };
          }
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}());
