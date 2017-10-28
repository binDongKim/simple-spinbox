/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpinButton = function () {
	function SpinButton(buttonType) {
		_classCallCheck(this, SpinButton);

		this.buttonType = buttonType;
		this.root = document.getElementById("root");

		this.init();
	}

	/**
  * Build a button DOM
  */


	SpinButton.prototype.init = function init() {
		this.spinButton = document.createElement("button");
		this.spinButtonIcon = document.createElement("i");

		this.addClassProperty(this.buttonType);
	};

	/**
  * Add class property to the each tag
  */


	SpinButton.prototype.addClassProperty = function addClassProperty(buttonType) {
		var spinButtonClassList = this.spinButton.classList;
		var spinButtonIconClassList = this.spinButtonIcon.classList;

		spinButtonClassList.add("button");
		spinButtonIconClassList.add("fa");

		if (buttonType === "numberUp") {
			spinButtonClassList.add("number-up-btn");
			spinButtonIconClassList.add("fa-caret-up");
		} else {
			spinButtonClassList.add("number-down-btn");
			spinButtonIconClassList.add("fa-caret-down");
		}
	};

	SpinButton.prototype.render = function render() {
		this.spinButton.appendChild(this.spinButtonIcon);
		this.root.appendChild(this.spinButton);
	};

	return SpinButton;
}();

exports.default = SpinButton;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _spinUpButton = __webpack_require__(2);

var _spinUpButton2 = _interopRequireDefault(_spinUpButton);

var _spinDownButton = __webpack_require__(3);

var _spinDownButton2 = _interopRequireDefault(_spinDownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	var spinUpButton = new _spinUpButton2.default();
	var spinDownButton = new _spinDownButton2.default();

	spinUpButton.render();
	spinDownButton.render();
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _spinButton = __webpack_require__(0);

var _spinButton2 = _interopRequireDefault(_spinButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpinUpButton = function (_SpinButton) {
	_inherits(SpinUpButton, _SpinButton);

	function SpinUpButton() {
		_classCallCheck(this, SpinUpButton);

		return _possibleConstructorReturn(this, _SpinButton.call(this, "numberUp"));
	}

	SpinUpButton.prototype.render = function render() {
		_SpinButton.prototype.render.call(this);
	};

	return SpinUpButton;
}(_spinButton2.default);

exports.default = SpinUpButton;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _spinButton = __webpack_require__(0);

var _spinButton2 = _interopRequireDefault(_spinButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpinDownButton = function (_SpinButton) {
	_inherits(SpinDownButton, _SpinButton);

	function SpinDownButton() {
		_classCallCheck(this, SpinDownButton);

		return _possibleConstructorReturn(this, _SpinButton.call(this, "numberDown"));
	}

	SpinDownButton.prototype.render = function render() {
		_SpinButton.prototype.render.call(this);
	};

	return SpinDownButton;
}(_spinButton2.default);

exports.default = SpinDownButton;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map