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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n\n__webpack_require__(/*! ./modules/parallax */ \"./src/assets/scripts/modules/parallax.js\");\n\n__webpack_require__(/*! ./modules/welcome */ \"./src/assets/scripts/modules/welcome.js\");\n\n__webpack_require__(/*! ./modules/form */ \"./src/assets/scripts/modules/form.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9wcmVsb2FkZXJcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL3BhcmFsbGF4XCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy93ZWxjb21lXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9mb3JtXCI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/form.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/form.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enterButton = document.querySelector('#enter');\nvar authForm = document.querySelector('#auth-form');\n\nenterButton.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    if (validateForm(authForm)) {\n        var data = {\n            login: authForm.elements.login.value,\n            password: authForm.elements.password.value,\n            human: authForm.elements.human.checked,\n            question: authForm.elements.question.value\n        };\n        var xhr = new XMLHttpRequest();\n        xhr.responseType = 'json';\n        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');\n        xhr.send(JSON.stringify(data));\n        xhr.addEventListener('load', function () {\n            if (xhr.response.status) {\n                console.log('все ок');\n            }\n        });\n    }\n});\n\nfunction validateForm(form) {\n    var valid = true;\n\n    if (!validateField(form.elements.login)) {\n        valid = false;\n    }\n    if (!validateField(form.elements.password)) {\n        valid = false;\n    }\n    return valid;\n}\n\nfunction validateField(field) {\n    var fieldParent = field.parentNode;\n    var fieldParentPrev = fieldParent.previousElementSibling;\n    var fieldParentPrevChild = fieldParentPrev.firstChild;\n\n    field.addEventListener('focus', function () {\n        field.nextElementSibling.style.visibility = 'hidden';\n        field.style.border = '0';\n        field.style.borderRadius = 'initial';\n        fieldParentPrevChild.style.fill = '#e1e1d6';\n    });\n\n    if (!field.checkValidity()) {\n        field.nextElementSibling.style.visibility = 'visible';\n        field.style.border = '1px solid #e44845';\n        field.style.borderRadius = '5px';\n        fieldParentPrevChild.style.fill = '#e44845';\n\n        return false;\n    } else {\n        field.nextElementSibling.style.visibility = 'hidden';\n        field.style.border = '1px solid #16c2aa';\n        field.style.borderRadius = '5px';\n        fieldParentPrevChild.style.fill = '#16c2aa';\n\n        return true;\n    }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mb3JtLmpzPzA0YjEiXSwibmFtZXMiOlsiZW50ZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhdXRoRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUZvcm0iLCJkYXRhIiwibG9naW4iLCJlbGVtZW50cyIsInZhbHVlIiwicGFzc3dvcmQiLCJodW1hbiIsImNoZWNrZWQiLCJxdWVzdGlvbiIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsInZhbGlkIiwidmFsaWRhdGVGaWVsZCIsImZpZWxkIiwiZmllbGRQYXJlbnQiLCJwYXJlbnROb2RlIiwiZmllbGRQYXJlbnRQcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImZpZWxkUGFyZW50UHJldkNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRFbGVtZW50U2libGluZyIsInN0eWxlIiwidmlzaWJpbGl0eSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImZpbGwiLCJjaGVja1ZhbGlkaXR5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGNBQWNDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7QUFDQSxJQUFNQyxXQUFXRixTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWpCOztBQUVBRixZQUFZSSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFTQyxDQUFULEVBQVk7QUFDOUNBLE1BQUVDLGNBQUY7O0FBRUEsUUFBSUMsYUFBYUosUUFBYixDQUFKLEVBQTRCO0FBQ3hCLFlBQU1LLE9BQU87QUFDVEMsbUJBQU9OLFNBQVNPLFFBQVQsQ0FBa0JELEtBQWxCLENBQXdCRSxLQUR0QjtBQUVUQyxzQkFBVVQsU0FBU08sUUFBVCxDQUFrQkUsUUFBbEIsQ0FBMkJELEtBRjVCO0FBR1RFLG1CQUFPVixTQUFTTyxRQUFULENBQWtCRyxLQUFsQixDQUF3QkMsT0FIdEI7QUFJVEMsc0JBQVVaLFNBQVNPLFFBQVQsQ0FBa0JLLFFBQWxCLENBQTJCSjtBQUo1QixTQUFiO0FBTUEsWUFBTUssTUFBTSxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsWUFBSUUsWUFBSixHQUFtQixNQUFuQjtBQUNBRixZQUFJRyxJQUFKLENBQVMsTUFBVCxFQUFpQiw0Q0FBakI7QUFDQUgsWUFBSUksSUFBSixDQUFTQyxLQUFLQyxTQUFMLENBQWVkLElBQWYsQ0FBVDtBQUNBUSxZQUFJWixnQkFBSixDQUFxQixNQUFyQixFQUE2QixZQUFXO0FBQ3BDLGdCQUFJWSxJQUFJTyxRQUFKLENBQWFDLE1BQWpCLEVBQXlCO0FBQ3JCQyx3QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDSDtBQUNKLFNBSkQ7QUFLSDtBQUNKLENBcEJEOztBQXNCQSxTQUFTbkIsWUFBVCxDQUFzQm9CLElBQXRCLEVBQTRCO0FBQ3hCLFFBQUlDLFFBQVEsSUFBWjs7QUFFQSxRQUFJLENBQUNDLGNBQWNGLEtBQUtqQixRQUFMLENBQWNELEtBQTVCLENBQUwsRUFBeUM7QUFDckNtQixnQkFBUSxLQUFSO0FBQ0g7QUFDRCxRQUFJLENBQUNDLGNBQWNGLEtBQUtqQixRQUFMLENBQWNFLFFBQTVCLENBQUwsRUFBNEM7QUFDeENnQixnQkFBUSxLQUFSO0FBQ0g7QUFDRCxXQUFPQSxLQUFQO0FBQ0g7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDMUIsUUFBTUMsY0FBY0QsTUFBTUUsVUFBMUI7QUFDQSxRQUFNQyxrQkFBa0JGLFlBQVlHLHNCQUFwQztBQUNBLFFBQU1DLHVCQUF1QkYsZ0JBQWdCRyxVQUE3Qzs7QUFFQU4sVUFBTTFCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQVc7QUFDdkMwQixjQUFNTyxrQkFBTixDQUF5QkMsS0FBekIsQ0FBK0JDLFVBQS9CLEdBQTRDLFFBQTVDO0FBQ0FULGNBQU1RLEtBQU4sQ0FBWUUsTUFBWixHQUFxQixHQUFyQjtBQUNBVixjQUFNUSxLQUFOLENBQVlHLFlBQVosR0FBMkIsU0FBM0I7QUFDQU4sNkJBQXFCRyxLQUFyQixDQUEyQkksSUFBM0IsR0FBa0MsU0FBbEM7QUFDSCxLQUxEOztBQU9BLFFBQUksQ0FBQ1osTUFBTWEsYUFBTixFQUFMLEVBQTRCO0FBQ3hCYixjQUFNTyxrQkFBTixDQUF5QkMsS0FBekIsQ0FBK0JDLFVBQS9CLEdBQTRDLFNBQTVDO0FBQ0FULGNBQU1RLEtBQU4sQ0FBWUUsTUFBWixHQUFxQixtQkFBckI7QUFDQVYsY0FBTVEsS0FBTixDQUFZRyxZQUFaLEdBQTJCLEtBQTNCO0FBQ0FOLDZCQUFxQkcsS0FBckIsQ0FBMkJJLElBQTNCLEdBQWtDLFNBQWxDOztBQUVBLGVBQU8sS0FBUDtBQUNILEtBUEQsTUFPTztBQUNIWixjQUFNTyxrQkFBTixDQUF5QkMsS0FBekIsQ0FBK0JDLFVBQS9CLEdBQTRDLFFBQTVDO0FBQ0FULGNBQU1RLEtBQU4sQ0FBWUUsTUFBWixHQUFxQixtQkFBckI7QUFDQVYsY0FBTVEsS0FBTixDQUFZRyxZQUFaLEdBQTJCLEtBQTNCO0FBQ0FOLDZCQUFxQkcsS0FBckIsQ0FBMkJJLElBQTNCLEdBQWtDLFNBQWxDOztBQUVBLGVBQU8sSUFBUDtBQUNIO0FBQ0oiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW50ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW50ZXInKTtcclxuY29uc3QgYXV0aEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0aC1mb3JtJyk7XHJcblxyXG5lbnRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKGF1dGhGb3JtKSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxvZ2luOiBhdXRoRm9ybS5lbGVtZW50cy5sb2dpbi52YWx1ZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dGhGb3JtLmVsZW1lbnRzLnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgICBodW1hbjogYXV0aEZvcm0uZWxlbWVudHMuaHVtYW4uY2hlY2tlZCxcclxuICAgICAgICAgICAgcXVlc3Rpb246IGF1dGhGb3JtLmVsZW1lbnRzLnF1ZXN0aW9uLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgJ2h0dHBzOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9zZW5kbWFpbCcpO1xyXG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cy0YHQtSDQvtC6Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZm9ybSkge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5sb2dpbikpIHtcclxuICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMucGFzc3dvcmQpKSB7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGaWVsZChmaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRQYXJlbnQgPSBmaWVsZC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgZmllbGRQYXJlbnRQcmV2ID0gZmllbGRQYXJlbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIGNvbnN0IGZpZWxkUGFyZW50UHJldkNoaWxkID0gZmllbGRQYXJlbnRQcmV2LmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBmaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIGZpZWxkLnN0eWxlLmJvcmRlciA9ICcwJztcclxuICAgICAgICBmaWVsZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnaW5pdGlhbCc7XHJcbiAgICAgICAgZmllbGRQYXJlbnRQcmV2Q2hpbGQuc3R5bGUuZmlsbCA9ICcjZTFlMWQ2JztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgZmllbGQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgZmllbGQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjZTQ0ODQ1JztcclxuICAgICAgICBmaWVsZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcclxuICAgICAgICBmaWVsZFBhcmVudFByZXZDaGlsZC5zdHlsZS5maWxsID0gJyNlNDQ4NDUnO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpZWxkLm5leHRFbGVtZW50U2libGluZy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgZmllbGQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjMTZjMmFhJztcclxuICAgICAgICBmaWVsZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcclxuICAgICAgICBmaWVsZFBhcmVudFByZXZDaGlsZC5zdHlsZS5maWxsID0gJyMxNmMyYWEnO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/form.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallaxContainer = document.querySelector('.parallax');\nvar layers = Array.from(parallaxContainer.children);\n\nvar moveLayers = function moveLayers(e) {\n    var initialX = window.innerWidth / 2 - e.pageX;\n    var initialY = window.innerHeight / 2 - e.pageY;\n\n    layers.forEach(function (layer, i) {\n        var divider = i / 100;\n        var positionX = initialX * divider;\n        var positionY = initialY * divider;\n\n        layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';\n    });\n};\n\nwindow.addEventListener('mousemove', moveLayers);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9jNjZkIl0sIm5hbWVzIjpbInBhcmFsbGF4Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGF5ZXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJtb3ZlTGF5ZXJzIiwiaW5pdGlhbFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZSIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiZm9yRWFjaCIsImxheWVyIiwiaSIsImRpdmlkZXIiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJzdHlsZSIsInRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTUEsb0JBQW9CQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQTFCO0FBQ0EsSUFBTUMsU0FBU0MsTUFBTUMsSUFBTixDQUFXTCxrQkFBa0JNLFFBQTdCLENBQWY7O0FBRUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLElBQUs7QUFDcEIsUUFBTUMsV0FBWUMsT0FBT0MsVUFBUCxHQUFvQixDQUFyQixHQUEwQkMsRUFBRUMsS0FBN0M7QUFDQSxRQUFNQyxXQUFZSixPQUFPSyxXQUFQLEdBQXFCLENBQXRCLEdBQTJCSCxFQUFFSSxLQUE5Qzs7QUFFQVosV0FBT2EsT0FBUCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQ3pCLFlBQU1DLFVBQVVELElBQUksR0FBcEI7QUFDQSxZQUFNRSxZQUFZWixXQUFXVyxPQUE3QjtBQUNBLFlBQU1FLFlBQVlSLFdBQVdNLE9BQTdCOztBQUVBRixjQUFNSyxLQUFOLENBQVlDLFNBQVosa0JBQXFDSCxTQUFyQyxZQUFxREMsU0FBckQ7QUFDSCxLQU5EO0FBT0gsQ0FYRDs7QUFhQVosT0FBT2UsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNqQixVQUFyQyIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BhcmFsbGF4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4Jyk7XHJcbmNvbnN0IGxheWVycyA9IEFycmF5LmZyb20ocGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW4pO1xyXG5cclxuY29uc3QgbW92ZUxheWVycyA9IGUgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIGUucGFnZVg7XHJcbiAgICBjb25zdCBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIGUucGFnZVk7XHJcblxyXG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGl2aWRlciA9IGkgLyAxMDA7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcjtcclxuICAgICAgICBcclxuICAgICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb25YfXB4LCAke3Bvc2l0aW9uWX1weClgO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlTGF5ZXJzKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallax.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/preloader.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/preloader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar preloader = document.querySelector(\".preloader\");\nvar numPreloader = document.querySelector(\".preloader__num\");\nvar images = document.images;\nvar imagesCount = images.length;\nvar percent = 100 / imagesCount;\nvar counter = 0;\n\nfor (var i = 0; i < imagesCount; i++) {\n    var img = images[i];\n    var imgCopy = new Image();\n    imgCopy.src = img.src;\n    imgCopy.onload = imgLoad;\n    imgCopy.onerror = imgLoad;\n}\n\nfunction imgLoad() {\n    counter++;\n    numPreloader.innerHTML = Math.round(percent * counter);\n}\n\nwindow.addEventListener(\"load\", setStyle);\n\nfunction setStyle() {\n    setTimeout(function () {\n        preloader.style.opacity = 0;\n    }, 1500);\n\n    setTimeout(function () {\n        preloader.style.display = \"none\";\n    }, 2000);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/MGEwOSJdLCJuYW1lcyI6WyJwcmVsb2FkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJudW1QcmVsb2FkZXIiLCJpbWFnZXMiLCJpbWFnZXNDb3VudCIsImxlbmd0aCIsInBlcmNlbnQiLCJjb3VudGVyIiwiaSIsImltZyIsImltZ0NvcHkiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImltZ0xvYWQiLCJvbmVycm9yIiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFN0eWxlIiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTUEsWUFBWUMsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLElBQU1DLGVBQWVGLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsSUFBTUUsU0FBU0gsU0FBU0csTUFBeEI7QUFDQSxJQUFNQyxjQUFjRCxPQUFPRSxNQUEzQjtBQUNBLElBQU1DLFVBQVUsTUFBTUYsV0FBdEI7QUFDQSxJQUFJRyxVQUFVLENBQWQ7O0FBRUEsS0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlKLFdBQXBCLEVBQWlDSSxHQUFqQyxFQUFzQztBQUNsQyxRQUFNQyxNQUFNTixPQUFPSyxDQUFQLENBQVo7QUFDQSxRQUFNRSxVQUFVLElBQUlDLEtBQUosRUFBaEI7QUFDQUQsWUFBUUUsR0FBUixHQUFjSCxJQUFJRyxHQUFsQjtBQUNBRixZQUFRRyxNQUFSLEdBQWlCQyxPQUFqQjtBQUNBSixZQUFRSyxPQUFSLEdBQWtCRCxPQUFsQjtBQUNIOztBQUVELFNBQVNBLE9BQVQsR0FBbUI7QUFDZlA7QUFDQUwsaUJBQWFjLFNBQWIsR0FBeUJDLEtBQUtDLEtBQUwsQ0FBV1osVUFBVUMsT0FBckIsQ0FBekI7QUFDSDs7QUFFRFksT0FBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NDLFFBQWhDOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEJDLGVBQVcsWUFBTTtBQUNqQnZCLGtCQUFVd0IsS0FBVixDQUFnQkMsT0FBaEIsR0FBMEIsQ0FBMUI7QUFDQyxLQUZELEVBRUcsSUFGSDs7QUFJQUYsZUFBVyxZQUFNO0FBQ2pCdkIsa0JBQVV3QixLQUFWLENBQWdCRSxPQUFoQixHQUEwQixNQUExQjtBQUNDLEtBRkQsRUFFRyxJQUZIO0FBR0giLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJcIik7XHJcbmNvbnN0IG51bVByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlbG9hZGVyX19udW1cIik7XHJcbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmltYWdlcztcclxuY29uc3QgaW1hZ2VzQ291bnQgPSBpbWFnZXMubGVuZ3RoO1xyXG5jb25zdCBwZXJjZW50ID0gMTAwIC8gaW1hZ2VzQ291bnQ7XHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzQ291bnQ7IGkrKykge1xyXG4gICAgY29uc3QgaW1nID0gaW1hZ2VzW2ldO1xyXG4gICAgY29uc3QgaW1nQ29weSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nQ29weS5zcmMgPSBpbWcuc3JjO1xyXG4gICAgaW1nQ29weS5vbmxvYWQgPSBpbWdMb2FkO1xyXG4gICAgaW1nQ29weS5vbmVycm9yID0gaW1nTG9hZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW1nTG9hZCgpIHtcclxuICAgIGNvdW50ZXIrKztcclxuICAgIG51bVByZWxvYWRlci5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHBlcmNlbnQgKiBjb3VudGVyKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHNldFN0eWxlKTtcclxuXHJcbmZ1bmN0aW9uIHNldFN0eWxlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBwcmVsb2FkZXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICB9LCAxNTAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHByZWxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9LCAyMDAwKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/preloader.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/welcome.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/welcome.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar front = document.querySelector('.user-welcome__front');\nvar back = document.querySelector('.user-welcome__back');\nvar authLink = document.querySelector('.welcome__auth');\nvar buttons = document.querySelector('.auth__form__buttons');\nvar button = buttons.firstElementChild;\n\nauthLink.addEventListener('click', toggleClass);\n\nfunction toggleClass(e) {\n    e.preventDefault();\n\n    front.classList.toggle('is-active');\n    back.classList.toggle('is-active');\n    authLink.classList.toggle('is-active');\n}\n\nbutton.addEventListener('click', toggleClass);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy93ZWxjb21lLmpzPzhhNjAiXSwibmFtZXMiOlsiZnJvbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrIiwiYXV0aExpbmsiLCJidXR0b25zIiwiYnV0dG9uIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlQ2xhc3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBZDtBQUNBLElBQU1DLE9BQU9GLFNBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWI7QUFDQSxJQUFNRSxXQUFXSCxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFqQjtBQUNBLElBQU1HLFVBQVVKLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWhCO0FBQ0EsSUFBTUksU0FBU0QsUUFBUUUsaUJBQXZCOztBQUdBSCxTQUFTSSxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0MsV0FBbkM7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0I7QUFDcEJBLE1BQUVDLGNBQUY7O0FBRUFYLFVBQU1ZLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCLFdBQXZCO0FBQ0FWLFNBQUtTLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixXQUF0QjtBQUNBVCxhQUFTUSxTQUFULENBQW1CQyxNQUFuQixDQUEwQixXQUExQjtBQUNIOztBQUVEUCxPQUFPRSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0MsV0FBakMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy93ZWxjb21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnJvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci13ZWxjb21lX19mcm9udCcpO1xyXG5jb25zdCBiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItd2VsY29tZV9fYmFjaycpO1xyXG5jb25zdCBhdXRoTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lX19hdXRoJyk7XHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aF9fZm9ybV9fYnV0dG9ucycpO1xyXG5jb25zdCBidXR0b24gPSBidXR0b25zLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHJcbmF1dGhMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ2xhc3MpO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcclxuICAgIGF1dGhMaW5rLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG59XHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDbGFzcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/welcome.js\n");

/***/ })

/******/ });