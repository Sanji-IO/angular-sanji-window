;(function() { 'use strict';

  angular
    .module('sanji.window', ['google-maps', 'pasvaz.bindonce'])
    .constant('_', window._)
    .provider('sanjiWindowConfig', SanjiWindowConfig)
    .directive('mxHide', sanjiHide)
    .directive('sanjiReloadWindow', sanjiReloadWindow)
    .directive('sanjiWindow',sanjiWindow);

  function SanjiWindowConfig() {

    var Configurer, globalConfig;

    var genId = function() {
      return '_' + Math.random().toString(36).substr(2, 9);
    };

    Configurer = {};
    Configurer.init = function(object, config) {

      object.setCacheAdapter = function(cacheAdapter) {
        config.cacheAdapter = cacheAdapter;
      };

      object.getCacheAdapter = function() {
        return config.cacheAdapter;
      };

      object.setAfterShow = function(afterShow) {
        config.afterShow = afterShow;
      };

      object.getAfterShow = function() {
        return config.afterShow;
      };

    };

    globalConfig = {};

    Configurer.init(this, globalConfig);

    this.$get = function() {

      var service = {
        id: genId(),
        title: '',
        contentUrl: '',
        helpUrl: '',
        navigateContent: '',
        recordState: [this.navigateContent],
        animateClass: 'slide-left',
        isProcessing: false,
        toggleStatus: false
      };

      Configurer.init(service, globalConfig);

      service.setTitle = function(title) {
        service.title = title;
      };

      service.getTitle = function() {
        return service.title;
      };

      service.setContentUrl = function(url) {
        service.contentUrl = url;
      };

      service.setHelpUrl = function(url) {
        service.helpUrl = url;
      };

      service.navigateTo = function(state) {
        service.recordState.push(state);
        service.navigateContent = state;
      };

      service.getWindowStatus = function() {
        return service.navigateContent;
      };

      service.goToProcessingState = function() {
        service.reset();
        service.navigateTo('sanji-processing');
      };

      service.goToInfoState = function() {
        service.navigateTo('sanji-info');
      };

      service.goToEditState = function() {
        service.navigateTo('sanji-edit');
      };

      service.goToAddState = function() {
        service.navigateTo('sanji-add');
      };

      service.goToProblemState = function() {
        service.reset();
        service.navigateTo('sanji-connection-problem');
      };

      service.goBack = function() {
        var states = service.recordState;
        states.pop();
        service.navigateContent = states[states.length - 1];
      };

      service.reset = function() {
        service.recordState.length = 0;
        // Push default state
        service.recordState.push('');
      };

      service.setToggleStatus = function(status) {
        service.toggleStatus = status;
      };

      service.toggleWidget = function() {
        service.toggleStatus = !service.toggleStatus;
        if (angular.isDefined(service.cacheAdapter)) {
          service.cacheAdapter.put(service.title, service.toggleStatus);
        }
      };

      service.afterShow = function() {
        if (angular.isFunction(service.afterShow)) {
          service.afterShow();
        }
      };

      return service;

    };

  }

  function sanjiHide($animate) {
    return {
      restrict: 'A',
      scope: {
        'mxHide': '=',
        'afterHide': '&',
        'afterShow': '&'
      },
      link: function(scope, elem) {
        scope.$watch('mxHide', function(newValue) {
          if (newValue) {
            $animate.addClass(elem, 'ng-hide', scope.afterHide);
          } else {
            $animate.removeClass(elem, 'ng-hide', scope.afterShow);
          }
        });
      }
    };
  }
  sanjiHide.$inject = ["$animate"];

  function sanjiReloadWindow() {
    return {
      restrict: 'EA',
      templateUrl: 'templates/sanji-window-connect-problem.html',
      scope: {
        'reloadWindow': '&'
      }
    };
  }

  function sanjiWindow($log, $controller, sanjiWindowConfig) {
    return {
      templateUrl: 'templates/sanji-window.html',
      restrict: 'EA',
      replace: true,
      scope: {
        title: '@',
        contentUrl: '@',
        helpUrl: '@'
      },
      link: function postLink(scope) {
        sanjiWindowConfig.setTitle(scope.title);
        sanjiWindowConfig.setContentUrl(scope.contentUrl);
        sanjiWindowConfig.setHelpUrl(scope.helpUrl);
        scope.sanjiWindowMgr = sanjiWindowConfig;
      }
    };
  }
  sanjiWindow.$inject = ["$log", "$controller", "sanjiWindowConfig"];

}());
