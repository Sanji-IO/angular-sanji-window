;(function() { 'use strict';

  angular
    .module('demoApp', [
      'ngAnimate',
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<sanji-window title="{{item.title}}"' +
                      'content-url="{{item.url}}">' +
                    '</sanji-window>'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}());
