'use strict';

(function() {
  angular
    .module('sanji.window', [])
    .service('SanjiWindowConfig', SanjiWindowConfig)
    .directive('sanjiWindow', sanjiWindow);

  function sanjiWindow($log, $controller, SanjiWindowConfig) {
    return {
      templateUrl: 'templates/sanji-window.html',
      restrict: 'EA',
      replace: true,
      scope: {
        title: '@windowName',
        contentUrl: '@',
        data: '=',
        contentBack: '&'
      },
      link: function postLink(scope) {
        scope.sanjiWindowMgr = angular.copy(SanjiWindowConfig);

        if (scope.contentUrl) {
          scope.sanjiWindowMgr.setContentUrl(scope.contentUrl);
        }
        else {
          $log.error('Sanji window content url not defined!');
        }

        if (scope.title) {
          scope.sanjiWindowMgr.setTitle(scope.title);
        }

        if (angular.isFunction(scope.contentBack)) {
          scope.sanjiWindowMgr.setContentBackCallback = scope.contentBack;
        }
      }
    };
  }
  sanjiWindow.$inject = ["$log", "$controller", "SanjiWindowConfig"];

  function SanjiWindowConfig() {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
    this.title = '';
    this.contentUrl = '';
    this.navigateContent = 'sanji-loading';
    this.recordState = [this.navigateContent];
    this.animateClass = 'slide-left';
    this.isProcessing = false;
    this.excludeStatusArray = [
      'sanji-loading',
      'sanji-info',
      'sanji-processing',
      'sanji-connection-problem'
    ];
    this.setContentBackCallback = null;
    this.oneTimeBackCallback = null;
  }

  SanjiWindowConfig.prototype.setTitle = function(title) {
    this.title = title;
  };

  SanjiWindowConfig.prototype.getTitle = function() {
    return this.title;
  };

  SanjiWindowConfig.prototype.setContentUrl = function(url) {
    this.contentUrl = url;
  };

  SanjiWindowConfig.prototype.navigateTo = function(state) {
    this.recordState.push(state);
    this.navigateContent = state;
  };

  SanjiWindowConfig.prototype.getWindowStatus = function() {
    return this.navigateContent;
  };

  SanjiWindowConfig.prototype.isEqualToCurrentState = function(state) {
    return (this.navigateContent === state ) ? true : false;
  };

  SanjiWindowConfig.prototype.goToLoadingState = function() {
    this.reset();
    this.navigateTo('sanji-loading');
  };

  SanjiWindowConfig.prototype.goToProcessingState = function() {
    this.reset();
    this.navigateTo('sanji-processing');
  };

  SanjiWindowConfig.prototype.goToInfoState = function() {
    this.navigateTo('sanji-info');
  };

  SanjiWindowConfig.prototype.goToEditState = function() {
    this.navigateTo('sanji-edit');
  };

  SanjiWindowConfig.prototype.goToAddState = function() {
    this.navigateTo('sanji-add');
  };

  SanjiWindowConfig.prototype.goToProblemState = function() {
    this.reset();
    this.navigateTo('sanji-connection-problem');
  };

  SanjiWindowConfig.prototype.goBack = function() {
    var states = this.recordState;

    if (null !== this.setContentBackCallback && angular.isFunction(this.setContentBackCallback)) {
      this.setContentBackCallback();
    }

    if (null !== this.oneTimeBackCallback && angular.isFunction(this.oneTimeBackCallback)) {
      this.oneTimeBackCallback();
      this.oneTimeBackCallback = null;
    }

    states.pop();
    this.navigateContent = states[states.length - 1];
  };

  SanjiWindowConfig.prototype.reset = function() {
    this.recordState.length = 0;
  };

  SanjiWindowConfig.prototype.isShowFooter = function() {
    return (-1 !== this.excludeStatusArray.indexOf(this.navigateContent)) ? false : true;
  };

  SanjiWindowConfig.prototype.addHideFooterStatus = function(status) {
    this.excludeStatusArray.push(status);
  };
}());
