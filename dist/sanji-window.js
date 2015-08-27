(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(1);
	
	__webpack_require__(4);
	
	var _sanjiWindowService = __webpack_require__(3);
	
	var _sanjiWindowService2 = _interopRequireDefault(_sanjiWindowService);
	
	var _sanjiWindowDirective = __webpack_require__(2);
	
	var _sanjiWindowDirective2 = _interopRequireDefault(_sanjiWindowDirective);
	
	angular.module('sanji.window', []).service('sanjiWindowService', _sanjiWindowService2['default']).directive('sanjiWindow', _sanjiWindowDirective2['default'].directiveFactory);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = ['$log', 'sanjiWindowService'];
	
	var SanjiWindowDirective = (function () {
	  function SanjiWindowDirective(injects) {
	    _classCallCheck(this, SanjiWindowDirective);
	
	    SanjiWindowDirective.directiveFactory.$inject.forEach(function (item, index) {
	      SanjiWindowDirective[item] = injects[index];
	      injectMap.set(SanjiWindowDirective[item], injects[index]);
	    });
	    this.templateUrl = 'sanji-window.tpl.html';
	    this.restrict = 'EA';
	    this.replace = true;
	    this.scope = {
	      title: '@',
	      contentUrl: '@',
	      data: '=',
	      contentBack: '&'
	    };
	  }
	
	  _createClass(SanjiWindowDirective, [{
	    key: 'link',
	    value: function link(scope) {
	      var config = injectMap.get(SanjiWindowDirective.sanjiWindowService);
	      var $log = injectMap.get(SanjiWindowDirective.$log);
	
	      scope.sanjiWindowMgr = angular.copy(config);
	
	      if (scope.contentUrl) {
	        scope.sanjiWindowMgr.setContentUrl(scope.contentUrl);
	      } else {
	        $log.error('Sanji window content url not defined!');
	      }
	
	      if (scope.title) {
	        scope.sanjiWindowMgr.setTitle(scope.title);
	      }
	
	      if (angular.isFunction(scope.contentBack)) {
	        scope.sanjiWindowMgr.setContentBackCallback = scope.contentBack;
	      }
	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      SanjiWindowDirective.instance = new SanjiWindowDirective(injects);
	      return SanjiWindowDirective.instance;
	    }
	  }]);
	
	  return SanjiWindowDirective;
	})();
	
	SanjiWindowDirective.directiveFactory.$inject = $inject;
	exports['default'] = SanjiWindowDirective;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var SanjiWindowService = (function () {
	  function SanjiWindowService() {
	    _classCallCheck(this, SanjiWindowService);
	
	    this.id = '_' + Math.random().toString(36).substr(2, 9);
	    this.title = '';
	    this.contentUrl = '';
	    this.navigateContent = 'sanji-loading';
	    this.recordState = [this.navigateContent];
	    this.animateClass = 'slide-left';
	    this.isProcessing = false;
	    this.excludeStatusArray = ['sanji-loading', 'sanji-info', 'sanji-processing', 'sanji-connection-problem'];
	    this.setContentBackCallback = null;
	    this.oneTimeBackCallback = null;
	  }
	
	  _createClass(SanjiWindowService, [{
	    key: 'setTitle',
	    value: function setTitle(title) {
	      this.title = title;
	    }
	  }, {
	    key: 'getTitle',
	    value: function getTitle() {
	      return this.title;
	    }
	  }, {
	    key: 'setContentUrl',
	    value: function setContentUrl(url) {
	      this.contentUrl = url;
	    }
	  }, {
	    key: 'navigateTo',
	    value: function navigateTo(state) {
	      this.recordState.push(state);
	      this.navigateContent = state;
	    }
	  }, {
	    key: 'getWindowStatus',
	    value: function getWindowStatus() {
	      return this.navigateContent;
	    }
	  }, {
	    key: 'isEqualToCurrentState',
	    value: function isEqualToCurrentState(state) {
	      return this.navigateContent === state ? true : false;
	    }
	  }, {
	    key: 'goToProcessingState',
	    value: function goToProcessingState() {
	      this.reset();
	      this.navigateTo('sanji-processing');
	    }
	  }, {
	    key: 'goToInfoState',
	    value: function goToInfoState() {
	      this.navigateTo('sanji-info');
	    }
	  }, {
	    key: 'goToEditState',
	    value: function goToEditState() {
	      this.navigateTo('sanji-edit');
	    }
	  }, {
	    key: 'goToAddState',
	    value: function goToAddState() {
	      this.navigateTo('sanji-add');
	    }
	  }, {
	    key: 'goToProblemState',
	    value: function goToProblemState() {
	      this.reset();
	      this.navigateTo('sanji-connection-problem');
	    }
	  }, {
	    key: 'goBack',
	    value: function goBack() {
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
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.recordState.length = 0;
	    }
	  }, {
	    key: 'isShowFooter',
	    value: function isShowFooter() {
	      return -1 !== this.excludeStatusArray.indexOf(this.navigateContent) ? false : true;
	    }
	  }, {
	    key: 'addHideFooterStatus',
	    value: function addHideFooterStatus(status) {
	      this.excludeStatusArray.push(status);
	    }
	  }]);
	
	  return SanjiWindowService;
	})();
	
	exports['default'] = SanjiWindowService;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	var v1="<div class=\"panel\">\n    <div class=\"mx-panel-heading clearfix\">\n      <div class=\"mx-panel-heading__title pull-left\">\n        <span ng-bind=\"title\"></span>\n      </div>\n    </div>\n    <div class=\"mx-slide-toggle\">\n      <div class=\"panel-body\">\n        <div ng-if=\"!!contentUrl\" ng-include=\"contentUrl\"></div>\n      </div>\n      <div class=\"panel-footer clearfix\" ng-show=\"sanjiWindowMgr.isShowFooter()\">\n        <button type=\"button\" class=\"btn btn-info\" ng-click=\"sanjiWindowMgr.goBack()\">\n          <i class=\"fa fa-arrow-left\"></i>\n          Back\n        </button>\n      </div>\n    </div>\n  </div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("sanji-window.tpl.html", v1)}]);
	module.exports=v1;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sanji-window.js.map