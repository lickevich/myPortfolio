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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/overlay-menu */ \"./src/assets/scripts/modules/overlay-menu.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9vdmVybGF5LW1lbnVcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/overlay-menu.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/modules/overlay-menu.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction overlay() {\n\n    var heroMenu = document.querySelector('.hero__menu');\n    var overlayMenu = document.querySelector('.overlay-menu');\n    var menuNavItems = document.querySelectorAll('.menu-nav__item--overlay');\n    var navTrigger = document.querySelector('.nav-trigger');\n\n    heroMenu.addEventListener('click', toggleClass);\n\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = menuNavItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var iterator = _step.value;\n\n            iterator.addEventListener('click', toggleClass);\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    function toggleClass(e) {\n        e.preventDefault();\n\n        overlayMenu.classList.toggle('is-active');\n        navTrigger.classList.toggle('is-active');\n    }\n}\noverlay();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9vdmVybGF5LW1lbnUuanM/N2U0ZiJdLCJuYW1lcyI6WyJvdmVybGF5IiwiaGVyb01lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvdmVybGF5TWVudSIsIm1lbnVOYXZJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZUcmlnZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZUNsYXNzIiwiaXRlcmF0b3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsT0FBVCxHQUFtQjs7QUFFZixRQUFNQyxXQUFXQyxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQWpCO0FBQ0EsUUFBTUMsY0FBY0YsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLFFBQU1FLGVBQWVILFNBQVNJLGdCQUFULENBQTBCLDBCQUExQixDQUFyQjtBQUNBLFFBQU1DLGFBQWFMLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7O0FBRUFGLGFBQVNPLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DQyxXQUFuQzs7QUFQZTtBQUFBO0FBQUE7O0FBQUE7QUFTZiw2QkFBdUJKLFlBQXZCLDhIQUFxQztBQUFBLGdCQUExQkssUUFBMEI7O0FBQ2pDQSxxQkFBU0YsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNDLFdBQW5DO0FBQ0g7QUFYYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFmLGFBQVNBLFdBQVQsQ0FBcUJFLENBQXJCLEVBQXdCO0FBQ3BCQSxVQUFFQyxjQUFGOztBQUVBUixvQkFBWVMsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsV0FBN0I7QUFDQVAsbUJBQVdNLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLFdBQTVCO0FBQ0g7QUFDSjtBQUNEZCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL292ZXJsYXktbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG92ZXJsYXkoKSB7XHJcblxyXG4gICAgY29uc3QgaGVyb01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fbWVudScpO1xyXG4gICAgY29uc3Qgb3ZlcmxheU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheS1tZW51Jyk7XHJcbiAgICBjb25zdCBtZW51TmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1uYXZfX2l0ZW0tLW92ZXJsYXknKTtcclxuICAgIGNvbnN0IG5hdlRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXRyaWdnZXInKTtcclxuXHJcbiAgICBoZXJvTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNsYXNzKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIG1lbnVOYXZJdGVtcykge1xyXG4gICAgICAgIGl0ZXJhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ2xhc3MpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgb3ZlcmxheU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgbmF2VHJpZ2dlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5vdmVybGF5KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/overlay-menu.js\n");

/***/ })

/******/ });