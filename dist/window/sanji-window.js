;(function() { 'use strict';

  var WindowMgr = function(windowConfig, cacheAdapter, afterShow) {

    this.window = windowConfig;
    this.afterShow = afterShow;

    if (angular.isDefined(cacheAdapter)) {
      this.cacheAdapter = cacheAdapter;

      var value = this.cacheAdapter.get(this.window.title);
      if (angular.isDefined(value)) {
        this.window.toggleStatus = value;
      }
    }
  };

  WindowMgr.prototype.getSanjiWindowObj = function() {
    return this.window;
  };

  WindowMgr.prototype.setTitle = function(title) {
    this.window.title = title;
  };

  WindowMgr.prototype.getTitle = function() {
    return this.window.title;
  };

  WindowMgr.prototype.getLink = function() {
    return this.window.link;
  };

  WindowMgr.prototype.navigateTo = function(state) {
    this.window.recordState.push(state);
    this.window.navigateContent = state;
  };

  WindowMgr.prototype.getWindowStatus = function() {
    return this.window.navigateContent;
  };

  WindowMgr.prototype.goToProcessingState = function() {
    this.reset();
    this.navigateTo('mx-processing');
  };

  WindowMgr.prototype.goToInfoState = function() {
    this.navigateTo('mx-info');
  };

  WindowMgr.prototype.goToEditState = function() {
    this.navigateTo('mx-edit');
  };

  WindowMgr.prototype.goToAddState = function() {
    this.navigateTo('mx-add');
  };

  WindowMgr.prototype.goToProblemState = function() {
    this.reset();
    this.navigateTo('mx-connection-problem');
  };

  WindowMgr.prototype.goBack = function() {
    var states = this.window.recordState;
    states.pop();
    this.window.navigateContent = states[states.length - 1];
  };

  WindowMgr.prototype.reset = function() {
    this.window.recordState.length = 0;
    // Push default state
    this.window.recordState.push('');
  };

  WindowMgr.prototype.isShowFooter = function() {
    var status;
    // [default state, info state] or [default state, processing state]
    if (2 >= this.window.recordState.length) {
      status = false;
    } else {
      status = ('mx-processing' === this.window.navigateContent) ? false : true;
    }
    return status;
  };

  WindowMgr.prototype.setToggleStatus = function(status) {
    this.window.toggleStatus = status;
  };

  WindowMgr.prototype.toggleWidget = function() {

    this.window.toggleStatus = ! this.window.toggleStatus;

    if (angular.isDefined(this.cacheAdapter)) {
      this.cacheAdapter.put(this.window.title, this.window.toggleStatus);
    }
  };

  WindowMgr.prototype.afterShow = function() {

    if (angular.isFunction(this.afterShow)) {
      this.afterShow();
    }
  };

  WindowMgr.$inject = ['windowConfig', 'cacheAdapter', 'afterShow'];

  var SanjiWindowStepMgr = function() {
    this.step = {
      isEnd: true,
      name: null
    };
  };

  SanjiWindowStepMgr.prototype.setNextStep = function(step) {
    this.step = step;
  };

  SanjiWindowStepMgr.prototype.isEnd = function() {
    return this.step.isEnd;
  };

  angular.module('sanji.window', [])
    .constant('_', window._)
    .provider('sanjiWindowConfig', function() {

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
          link: '',
          isProcessing: false,
          navigateContent: '',
          recordState: [this.navigateContent],
          toggleStatus: false,
          animateClass: 'slide-left'
        };
        Configurer.init(service, globalConfig);
        return service;
      };
    })
    .directive('sanjiWindowNextStep', function() {
      return {
        restrict: 'A',
        require: '^sanjiWindow',
        link: function(scope, element, attrs, ctrl) {
          var step = scope.$eval(attrs.sanjiWindowNextStep);
          ctrl.setNextStep(step);
        }
      };
    })
    .directive('mxHide', ["$animate", function($animate) {
      return {
        restrict: 'A',
        scope: {
          'mxHide': '=',
          'afterHide': '&',
          'afterShow': '&'
        },
        link: function(scope, elem) {
          scope.$watch('mxHide', function(newValue, oldValue) {
            if (newValue) {
              $animate.addClass(elem, 'ng-hide', scope.afterHide);
            } else {
              $animate.removeClass(elem, 'ng-hide', scope.afterShow);
            }
          });
        }
      };
    }])
    .directive('sanjiReloadWindow', function () {
      return {
        restrict: 'EA',
        templateUrl: 'templates/sanji-window-connect-problem.html',
        scope: {
          'reloadWindow': '&'
        }
      };
    })
    .directive('sanjiWindow', ["$log", "$controller", "sanjiWindowConfig", function ($log, $controller, sanjiWindowConfig) {
      return {
        templateUrl: 'templates/sanji-window.html',
        restrict: 'EA',
        replace: true,
        controller: ["$scope", function($scope) {
          $scope.sanjiWindowStepMgr = $controller(SanjiWindowStepMgr);
          this.setNextStep = function(step) {
            $scope.sanjiWindowStepMgr.setNextStep(step);
          };
        }],
        link: function postLink(scope, element, attrs) {

          var title = attrs.title || '',
              link = attrs.contentUrl,
              icon = attrs.iconClass || '',
              size = attrs.contentSize || '',
              padding = attrs.padding || '',
              helpInfo = attrs.helpInfo || '';

          scope.icon = icon;
          scope.contentSize = size;
          scope.padding = padding;
          scope.helpInfoUrl = helpInfo;

          // This is sanji-window which is manual version.
          if (link) {
            sanjiWindowConfig.title = title;
            sanjiWindowConfig.link = link;
            scope.sanjiWindowMgr = $controller(WindowMgr, {
              windowConfig: sanjiWindowConfig,
              cacheAdapter: sanjiWindowConfig.getCacheAdapter(),
              afterShow: sanjiWindowConfig.getAfterShow()
            });
            attrs.$observe('title', function(value) {
              scope.sanjiWindowMgr.setTitle(value);
            });
          }
        }
      };
    }]);
}());
