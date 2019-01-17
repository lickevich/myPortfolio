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
eval("\n\nvar heroMenu = document.querySelector('.hero__menu');\nvar overlayMenu = document.querySelector('.overlay-menu');\nvar menuNavItems = document.querySelectorAll('.menu-nav__item--overlay');\nvar navTrigger = document.querySelector('.nav-trigger');\n\nheroMenu.addEventListener('click', toggleClass);\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n    for (var _iterator = menuNavItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var iterator = _step.value;\n\n        iterator.addEventListener('click', toggleClass);\n    }\n} catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n        }\n    } finally {\n        if (_didIteratorError) {\n            throw _iteratorError;\n        }\n    }\n}\n\nfunction toggleClass() {\n\n    overlayMenu.classList.toggle('is-active');\n    navTrigger.classList.toggle('is-active');\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9vdmVybGF5LW1lbnUuanM/N2U0ZiJdLCJuYW1lcyI6WyJoZXJvTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm92ZXJsYXlNZW51IiwibWVudU5hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdlRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlQ2xhc3MiLCJpdGVyYXRvciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNQSxXQUFXQyxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQWpCO0FBQ0EsSUFBTUMsY0FBY0YsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLElBQU1FLGVBQWVILFNBQVNJLGdCQUFULENBQTBCLDBCQUExQixDQUFyQjtBQUNBLElBQU1DLGFBQWFMLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7O0FBRUFGLFNBQVNPLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DQyxXQUFuQzs7Ozs7OztBQUVBLHlCQUF1QkosWUFBdkIsOEhBQXFDO0FBQUEsWUFBMUJLLFFBQTBCOztBQUNqQ0EsaUJBQVNGLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DQyxXQUFuQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsU0FBU0EsV0FBVCxHQUF1Qjs7QUFFbkJMLGdCQUFZTyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixXQUE3QjtBQUNBTCxlQUFXSSxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixXQUE1QjtBQUNIIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvb3ZlcmxheS1tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGhlcm9NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX21lbnUnKTtcclxuY29uc3Qgb3ZlcmxheU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheS1tZW51Jyk7XHJcbmNvbnN0IG1lbnVOYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LW5hdl9faXRlbS0tb3ZlcmxheScpO1xyXG5jb25zdCBuYXZUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi10cmlnZ2VyJyk7XHJcblxyXG5oZXJvTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNsYXNzKTtcclxuXHJcbmZvciAoY29uc3QgaXRlcmF0b3Igb2YgbWVudU5hdkl0ZW1zKSB7XHJcbiAgICBpdGVyYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNsYXNzKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDbGFzcygpIHtcclxuICAgIFxyXG4gICAgb3ZlcmxheU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICBuYXZUcmlnZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/overlay-menu.js\n");

/***/ })

/******/ });