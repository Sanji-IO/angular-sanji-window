;(function() {
  'use strict';

  angular
    .module('sanji.window', ['pasvaz.bindonce', 'sanji.validator', 'angularFileUpload'])
    .service('SanjiWindowConfig', SanjiWindowConfig)
    .directive('sanjiWindow',sanjiWindow);

  function SanjiWindowConfig() {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
    this.title = '';
    this.contentUrl = '';
    this.navigateContent = 'sanji-loading';
    this.recordState = [this.navigateContent];
    this.animateClass = 'slide-left';
    this.isProcessing = false;
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
    states.pop();
    this.navigateContent = states[states.length - 1];
  };

  SanjiWindowConfig.prototype.reset = function() {
    this.recordState.length = 0;
  };

  SanjiWindowConfig.prototype.isShowFooter = function() {
    var excludeStatusArray = [
      'sanji-loading',
      'sanji-info',
      'sanji-processing',
      'sanji-connection-problem'
    ];

    return (-1 !== excludeStatusArray.indexOf(this.navigateContent)) ? false : true;
  };

  function sanjiWindow($log, $controller, SanjiWindowConfig) {
    return {
      templateUrl: 'templates/sanji-window.html',
      restrict: 'EA',
      replace: true,
      scope: {
        title: '@',
        contentUrl: '@',
        data: '='
      },
      link: function postLink(scope) {
        scope.sanjiWindowMgr = new SanjiWindowConfig();

        if (scope.contentUrl) {
          scope.sanjiWindowMgr.setContentUrl(scope.contentUrl);
        } else {
          $log.error('Sanji window content url not defined!');
        }

        if (scope.title) {
          scope.sanjiWindowMgr.setTitle(scope.title);
        }
      }
    };
  }

}());
