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
eval("\n\n__webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n\n__webpack_require__(/*! ./modules/parallax */ \"./src/assets/scripts/modules/parallax.js\");\n\n__webpack_require__(/*! ./modules/welcome */ \"./src/assets/scripts/modules/welcome.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9wcmVsb2FkZXJcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL3BhcmFsbGF4XCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy93ZWxjb21lXCI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

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
eval("\n\nvar user = document.querySelector('.user-welcome');\nvar auth = document.querySelector('.auth');\nvar authLink = document.querySelector('.welcome__auth');\nvar buttons = document.querySelector('.auth__form__buttons');\nvar button = buttons.firstElementChild;\n\nauthLink.addEventListener('click', toggleClass);\n\nfunction toggleClass(e) {\n    e.preventDefault();\n\n    user.classList.toggle('is-active');\n    auth.classList.toggle('is-active');\n    authLink.classList.toggle('is-active');\n}\n\nbutton.addEventListener('click', toggleClass);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy93ZWxjb21lLmpzPzhhNjAiXSwibmFtZXMiOlsidXNlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImF1dGgiLCJhdXRoTGluayIsImJ1dHRvbnMiLCJidXR0b24iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVDbGFzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxPQUFPQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWI7QUFDQSxJQUFNQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNRSxXQUFXSCxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFqQjtBQUNBLElBQU1HLFVBQVVKLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWhCO0FBQ0EsSUFBTUksU0FBU0QsUUFBUUUsaUJBQXZCOztBQUdBSCxTQUFTSSxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0MsV0FBbkM7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0I7QUFDcEJBLE1BQUVDLGNBQUY7O0FBRUFYLFNBQUtZLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixXQUF0QjtBQUNBVixTQUFLUyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsV0FBdEI7QUFDQVQsYUFBU1EsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSDs7QUFFRFAsT0FBT0UsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNDLFdBQWpDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvd2VsY29tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci13ZWxjb21lJyk7XHJcbmNvbnN0IGF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aCcpO1xyXG5jb25zdCBhdXRoTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lX19hdXRoJyk7XHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aF9fZm9ybV9fYnV0dG9ucycpO1xyXG5jb25zdCBidXR0b24gPSBidXR0b25zLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHJcbmF1dGhMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ2xhc3MpO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHVzZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICBhdXRoLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgYXV0aExpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbn1cclxuXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNsYXNzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/welcome.js\n");

/***/ })

/******/ });