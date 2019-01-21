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
eval("\n\nvar enterButton = document.querySelector('#enter');\nvar authForm = document.querySelector('#auth-form');\n\nenterButton.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    if (validateForm(authForm)) {\n        var data = {\n            login: authForm.elements.login.value,\n            password: authForm.elements.password.value,\n            human: authForm.elements.human.checked,\n            question: authForm.elements.question.value\n        };\n        var xhr = new XMLHttpRequest();\n        xhr.responseType = 'json';\n        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');\n        xhr.send(JSON.stringify(data));\n        xhr.addEventListener('load', function () {\n            if (xhr.response.status) {\n                console.log('все ок');\n            }\n        });\n    }\n});\n\nfunction validateForm(form) {\n    var valid = true;\n\n    if (!validateField(form.elements.login)) {\n        valid = false;\n    }\n    if (!validateField(form.elements.password)) {\n        valid = false;\n    }\n    return valid;\n}\n\nfunction validateField(field) {\n\n    field.addEventListener('focus', function () {\n        field.nextElementSibling.style.visibility = 'hidden';\n    });\n\n    if (!field.checkValidity()) {\n        field.nextElementSibling.style.visibility = 'visible';\n\n        return false;\n    } else {\n        field.nextElementSibling.style.visibility = 'hidden';\n\n        return true;\n    }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mb3JtLmpzPzA0YjEiXSwibmFtZXMiOlsiZW50ZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhdXRoRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUZvcm0iLCJkYXRhIiwibG9naW4iLCJlbGVtZW50cyIsInZhbHVlIiwicGFzc3dvcmQiLCJodW1hbiIsImNoZWNrZWQiLCJxdWVzdGlvbiIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsInZhbGlkIiwidmFsaWRhdGVGaWVsZCIsImZpZWxkIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwiY2hlY2tWYWxpZGl0eSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxjQUFjQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQXBCO0FBQ0EsSUFBTUMsV0FBV0YsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjs7QUFFQUYsWUFBWUksZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBU0MsQ0FBVCxFQUFZO0FBQzlDQSxNQUFFQyxjQUFGOztBQUVBLFFBQUlDLGFBQWFKLFFBQWIsQ0FBSixFQUE0QjtBQUN4QixZQUFNSyxPQUFPO0FBQ1RDLG1CQUFPTixTQUFTTyxRQUFULENBQWtCRCxLQUFsQixDQUF3QkUsS0FEdEI7QUFFVEMsc0JBQVVULFNBQVNPLFFBQVQsQ0FBa0JFLFFBQWxCLENBQTJCRCxLQUY1QjtBQUdURSxtQkFBT1YsU0FBU08sUUFBVCxDQUFrQkcsS0FBbEIsQ0FBd0JDLE9BSHRCO0FBSVRDLHNCQUFVWixTQUFTTyxRQUFULENBQWtCSyxRQUFsQixDQUEyQko7QUFKNUIsU0FBYjtBQU1BLFlBQU1LLE1BQU0sSUFBSUMsY0FBSixFQUFaO0FBQ0FELFlBQUlFLFlBQUosR0FBbUIsTUFBbkI7QUFDQUYsWUFBSUcsSUFBSixDQUFTLE1BQVQsRUFBaUIsNENBQWpCO0FBQ0FILFlBQUlJLElBQUosQ0FBU0MsS0FBS0MsU0FBTCxDQUFlZCxJQUFmLENBQVQ7QUFDQVEsWUFBSVosZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsWUFBVztBQUNwQyxnQkFBSVksSUFBSU8sUUFBSixDQUFhQyxNQUFqQixFQUF5QjtBQUNyQkMsd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFDSixTQUpEO0FBS0g7QUFDSixDQXBCRDs7QUFzQkEsU0FBU25CLFlBQVQsQ0FBc0JvQixJQUF0QixFQUE0QjtBQUN4QixRQUFJQyxRQUFRLElBQVo7O0FBRUEsUUFBSSxDQUFDQyxjQUFjRixLQUFLakIsUUFBTCxDQUFjRCxLQUE1QixDQUFMLEVBQXlDO0FBQ3JDbUIsZ0JBQVEsS0FBUjtBQUNIO0FBQ0QsUUFBSSxDQUFDQyxjQUFjRixLQUFLakIsUUFBTCxDQUFjRSxRQUE1QixDQUFMLEVBQTRDO0FBQ3hDZ0IsZ0JBQVEsS0FBUjtBQUNIO0FBQ0QsV0FBT0EsS0FBUDtBQUNIOztBQUVELFNBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCOztBQUUxQkEsVUFBTTFCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQVc7QUFDdkMwQixjQUFNQyxrQkFBTixDQUF5QkMsS0FBekIsQ0FBK0JDLFVBQS9CLEdBQTRDLFFBQTVDO0FBQ0gsS0FGRDs7QUFJQSxRQUFJLENBQUNILE1BQU1JLGFBQU4sRUFBTCxFQUE0QjtBQUN4QkosY0FBTUMsa0JBQU4sQ0FBeUJDLEtBQXpCLENBQStCQyxVQUEvQixHQUE0QyxTQUE1Qzs7QUFFQSxlQUFPLEtBQVA7QUFDSCxLQUpELE1BSU87QUFDSEgsY0FBTUMsa0JBQU4sQ0FBeUJDLEtBQXpCLENBQStCQyxVQUEvQixHQUE0QyxRQUE1Qzs7QUFFQSxlQUFPLElBQVA7QUFDSDtBQUNKIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyJyk7XHJcbmNvbnN0IGF1dGhGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dGgtZm9ybScpO1xyXG5cclxuZW50ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlRm9ybShhdXRoRm9ybSkpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBsb2dpbjogYXV0aEZvcm0uZWxlbWVudHMubG9naW4udmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRoRm9ybS5lbGVtZW50cy5wYXNzd29yZC52YWx1ZSxcclxuICAgICAgICAgICAgaHVtYW46IGF1dGhGb3JtLmVsZW1lbnRzLmh1bWFuLmNoZWNrZWQsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiBhdXRoRm9ybS5lbGVtZW50cy5xdWVzdGlvbi52YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgICAgICB4aHIub3BlbignUE9TVCcsICdodHRwczovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vc2VuZG1haWwnKTtcclxuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQstGB0LUg0L7QuicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZvcm0pIHtcclxuICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMubG9naW4pKSB7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICghdmFsaWRhdGVGaWVsZChmb3JtLmVsZW1lbnRzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoZmllbGQpIHtcclxuXHJcbiAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZpZWxkLm5leHRFbGVtZW50U2libGluZy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIGZpZWxkLm5leHRFbGVtZW50U2libGluZy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpZWxkLm5leHRFbGVtZW50U2libGluZy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/form.js\n");

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