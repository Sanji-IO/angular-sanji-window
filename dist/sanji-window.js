(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ngMaterial"), require("ngMdIcons"));
	else if(typeof define === 'function' && define.amd)
		define(["ngMaterial", "ngMdIcons"], factory);
	else if(typeof exports === 'object')
		exports["sjWindow"] = factory(require("ngMaterial"), require("ngMdIcons"));
	else
		root["sjWindow"] = factory(root["ngMaterial"], root["ngMdIcons"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angularMaterial = __webpack_require__(8);
	
	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);
	
	var _angularMaterialIcons = __webpack_require__(9);
	
	var _angularMaterialIcons2 = _interopRequireDefault(_angularMaterialIcons);
	
	__webpack_require__(1);
	
	__webpack_require__(7);
	
	var _sanjiWindowService = __webpack_require__(6);
	
	var _sanjiWindowService2 = _interopRequireDefault(_sanjiWindowService);
	
	var _sanjiWindowController = __webpack_require__(4);
	
	var _sanjiWindowController2 = _interopRequireDefault(_sanjiWindowController);
	
	var _sanjiWindowStateController = __webpack_require__(2);
	
	var _sanjiWindowStateController2 = _interopRequireDefault(_sanjiWindowStateController);
	
	var _sanjiWindowDirective = __webpack_require__(5);
	
	var _sanjiWindowDirective2 = _interopRequireDefault(_sanjiWindowDirective);
	
	var _sanjiWindowStateDirective = __webpack_require__(3);
	
	var _sanjiWindowStateDirective2 = _interopRequireDefault(_sanjiWindowStateDirective);
	
	var app = angular.module('sanji.window', [_angularMaterial2['default'], _angularMaterialIcons2['default']]);
	app.factory('sanjiWindowService', _sanjiWindowService2['default'].factory);
	app.controller('SanjiWindowController', _sanjiWindowController2['default']);
	app.controller('SanjiWindowStateController', _sanjiWindowStateController2['default']);
	app.directive('sanjiWindow', _sanjiWindowDirective2['default'].directiveFactory);
	app.directive('sanjiWindowState', _sanjiWindowStateDirective2['default'].directiveFactory);
	exports['default'] = app = app.name;
	module.exports = exports['default'];

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
	
	var $inject = ['$log', '$scope'];
	
	var SanjiWindowStateController = (function () {
	  function SanjiWindowStateController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, SanjiWindowStateController);
	
	    SanjiWindowStateController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	  }
	
	  _createClass(SanjiWindowStateController, [{
	    key: 'init',
	    value: function init(topCtrl, attrs) {
	      this.sanjiWindowMgr = topCtrl.sanjiWindowMgr;
	      if (undefined !== this.stateName) {
	        topCtrl.register({
	          name: this.stateName,
	          linkName: this.linkName,
	          icon: this.icon,
	          isDefault: undefined !== attrs.defaultState ? true : false
	        });
	      }
	    }
	  }]);
	
	  return SanjiWindowStateController;
	})();
	
	SanjiWindowStateController.$inject = $inject;
	exports['default'] = SanjiWindowStateController;
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
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var SanjiWindowStateDirective = (function () {
	  function SanjiWindowStateDirective(injects) {
	    _classCallCheck(this, SanjiWindowStateDirective);
	
	    SanjiWindowStateDirective.directiveFactory.$inject.forEach(function (item, index) {
	      SanjiWindowStateDirective[item] = injects[index];
	      injectMap.set(SanjiWindowStateDirective[item], injects[index]);
	    });
	    this.restrict = 'EA';
	    this.replace = true;
	    this.transclude = true;
	    this.scope = {};
	    this.require = ['sanjiWindowState', '^sanjiWindow'];
	    this.controller = 'SanjiWindowStateController';
	    this.controllerAs = 'vm';
	    this.bindToController = {
	      stateName: '@',
	      linkName: '@',
	      icon: '@'
	    };
	    this.template = '<div ng-show="vm.sanjiWindowMgr.navigateContent === vm.stateName" ng-transclude></div>';
	  }
	
	  _createClass(SanjiWindowStateDirective, [{
	    key: 'link',
	    value: function link(scope, element, attrs, ctrl, transclude) {
	      ctrl[0].init(ctrl[1], attrs);
	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      SanjiWindowStateDirective.instance = new SanjiWindowStateDirective(injects);
	      return SanjiWindowStateDirective.instance;
	    }
	  }]);
	
	  return SanjiWindowStateDirective;
	})();
	
	SanjiWindowStateDirective.directiveFactory.$inject = $inject;
	exports['default'] = SanjiWindowStateDirective;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$scope', 'sanjiWindowService'];
	
	var SanjiWindowController = (function () {
	  function SanjiWindowController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, SanjiWindowController);
	
	    SanjiWindowController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	    this.sanjiWindowMgr = this.sanjiWindowService.create(this.windowId, { name: this.windowName });
	    this.$scope.$on('$destroy', function () {
	      _this.sanjiWindowMgr.clearStates();
	      _this.sanjiWindowService.destroy(_this.sanjiWindowMgr.getId());
	    });
	  }
	
	  _createClass(SanjiWindowController, [{
	    key: 'register',
	    value: function register(state) {
	      var sanjiWindowMgr = this.sanjiWindowMgr;
	      if (state.isDefault) {
	        sanjiWindowMgr.navigateTo(state.name);
	      }
	      sanjiWindowMgr.addState(state);
	    }
	  }]);
	
	  return SanjiWindowController;
	})();
	
	SanjiWindowController.$inject = $inject;
	exports['default'] = SanjiWindowController;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = ['$log'];
	
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
	    this.transclude = true;
	    this.scope = {};
	    this.controller = 'SanjiWindowController';
	    this.controllerAs = 'vm';
	    this.bindToController = {
	      windowId: '@',
	      windowName: '@'
	    };
	  }
	
	  _createClass(SanjiWindowDirective, null, [{
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
/* 6 */
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
	
	    this.collection = [];
	  }
	
	  _createClass(SanjiWindowService, [{
	    key: '_addInstance',
	    value: function _addInstance(instance) {
	      this.collection.push(instance);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy(id) {
	      var idx = this.collection.findIndex(function (item) {
	        return item.id === id;
	      });
	      this.collection.splice(idx, 1);
	    }
	  }, {
	    key: '_isIdExist',
	    value: function _isIdExist(id) {
	      return -1 !== this.collection.findIndex(function (item) {
	        return item.id === id;
	      }) ? true : false;
	    }
	  }, {
	    key: 'get',
	    value: function get(id) {
	      return this.collection.find(function (item) {
	        return item.id === id;
	      });
	    }
	  }, {
	    key: 'create',
	    value: function create(id, options) {
	      var instance = null;
	      options = options || {};
	
	      if (undefined === id) {
	        throw new Error('Please give a window id.');
	      }
	
	      if (this._isIdExist(id)) {
	        throw new Error('The window id ' + id + ' is already exist.');
	      }
	
	      var sanjiWindowInstance = (function () {
	        function sanjiWindowInstance(options) {
	          _classCallCheck(this, sanjiWindowInstance);
	
	          this.states = [];
	          this.id = id;
	          this.name = options.name || '';
	          this.navigateContent = options.navigateContent || '';
	        }
	
	        _createClass(sanjiWindowInstance, [{
	          key: 'getId',
	          value: function getId() {
	            return this.id;
	          }
	        }, {
	          key: 'navigateTo',
	          value: function navigateTo(state) {
	            this.navigateContent = state;
	          }
	        }, {
	          key: 'addState',
	          value: function addState(state) {
	            this.states.push(state);
	          }
	        }, {
	          key: 'clearStates',
	          value: function clearStates() {
	            this.states.length = 0;
	          }
	        }]);
	
	        return sanjiWindowInstance;
	      })();
	
	      instance = new sanjiWindowInstance(options);
	      this._addInstance(instance);
	      return instance;
	    }
	  }], [{
	    key: 'factory',
	    value: function factory() {
	      return new SanjiWindowService();
	    }
	  }]);
	
	  return SanjiWindowService;
	})();
	
	exports['default'] = SanjiWindowService;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	var v1="<md-card layout=column>\n    <md-toolbar class=\"card-header\" md-scroll-shrink ng-if=\"true\">\n      <div class=\"md-toolbar-tools\">\n        <h3>\n          <span>{{vm.windowName}}</span>\n        </h3>\n        <md-menu md-position-mode=\"target-right target\">\n          <md-button aria-label=\"Open menu\" class=\"md-icon-button\" ng-click=\"$mdOpenMenu($event)\">\n            <ng-md-icon md-menu-origin icon=\"apps\" ng-attr-style=\"fill: #5e5e5e\"></ng-md-icon>\n          </md-button>\n          <md-menu-content width=\"4\">\n            <md-menu-item ng-repeat=\"state in vm.sanjiWindowMgr.states | filter:undefined!==state.linkName as results track by $index\">\n              <md-button aria-label=\"{{::state.linkName}}\"\n              ng-click=\"vm.sanjiWindowMgr.navigateTo(state.name)\">\n                <div layout=\"row\">\n                  <p flex ng-bind=\"::state.linkName\"></p>\n                  <ng-md-icon ng-if=\"undefined!==state.icon\"\n                    md-menu-origin icon=\"{{::state.icon}}\" ng-attr-style=\"fill: #5e5e5e\"></ng-md-icon>\n                </div>\n              </md-button>\n            </md-menu-item>\n          </md-menu-content>\n        </md-menu>\n      </div>\n    </md-toolbar>\n    <md-card-content>\n      <div ng-transclude></div>\n    </md-card-content>\n  </md-card>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("sanji-window.tpl.html", v1)}]);
	module.exports=v1;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sanji-window.js.map