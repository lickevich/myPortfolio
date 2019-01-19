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
eval("\n\n__webpack_require__(/*! ./modules/overlay-menu */ \"./src/assets/scripts/modules/overlay-menu.js\");\n\n__webpack_require__(/*! ./modules/blog-nav */ \"./src/assets/scripts/modules/blog-nav.js\");\n\n__webpack_require__(/*! ./modules/blog-nav-trigger */ \"./src/assets/scripts/modules/blog-nav-trigger.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9vdmVybGF5LW1lbnVcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL2Jsb2ctbmF2XCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9ibG9nLW5hdi10cmlnZ2VyXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/blog-nav-trigger.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/modules/blog-nav-trigger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar trigger = document.querySelector('.blog__nav-trigger');\nvar blogAside = document.querySelector('.blog__aside');\n\ntrigger.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    blogAside.classList.toggle('is-active');\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nLW5hdi10cmlnZ2VyLmpzP2U0N2UiXSwibmFtZXMiOlsidHJpZ2dlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJsb2dBc2lkZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZRixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWxCOztBQUVBRixRQUFRSSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTQyxDQUFULEVBQVk7QUFDMUNBLE1BQUVDLGNBQUY7O0FBRUFILGNBQVVJLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLFdBQTNCO0FBQ0gsQ0FKRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2Jsb2ctbmF2LXRyaWdnZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2dfX25hdi10cmlnZ2VyJyk7XHJcbmNvbnN0IGJsb2dBc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX19hc2lkZScpO1xyXG5cclxudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBibG9nQXNpZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blog-nav-trigger.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/blog-nav.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/blog-nav.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar blogAside = document.querySelector('.blog__aside');\nvar articles = document.querySelectorAll('.blog__article__item');\nvar links = document.querySelectorAll('.blog__nav__link');\nvar blogList = document.querySelector('.blog__nav__list');\n\nlinks[0].parentElement.classList.add('is-active');\n\nfunction windowScroller(reqmove, duration) {\n    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;\n    window.requestAnimationFrame = requestAnimationFrame;\n\n    var scrollHeight = window.scrollY;\n    var diffY = scrollHeight < reqmove ? reqmove - scrollHeight : -1 * (scrollHeight - reqmove);\n\n    var animate = function animate(draw, duration) {\n        var start = performance.now();\n        requestAnimationFrame(function move(time) {\n            var timePassed = time - start;\n            if (timePassed > duration) timePassed = duration;\n            draw(timePassed);\n            if (timePassed < duration) requestAnimationFrame(move);\n        });\n    };\n\n    animate(function (timePassed) {\n        window.scroll(0, scrollHeight + diffY * Math.min(timePassed / duration, 1));\n    }, duration);\n}\n\nfunction fixed() {\n    if (blogAside.parentElement.getBoundingClientRect().top <= 0) {\n        blogAside.classList.remove('blog__aside--absolute');\n        blogAside.classList.add('blog__aside--fixed');\n    } else {\n        blogAside.classList.remove('blog__aside--fixed');\n        blogAside.classList.add('blog__aside--absolute');\n    }\n}\n\nfunction checkCurrentArticle() {\n    for (var i = 0; i < articles.length; i++) {\n        if (articles[i].getBoundingClientRect().y < 50 && articles[i].getBoundingClientRect().y > -articles[i].getBoundingClientRect().height) {\n            var prevArticle = links[i].parentElement.previousElementSibling;\n            var nextArticle = links[i].parentElement.nextElementSibling;\n\n            if (prevArticle) {\n                prevArticle.classList.remove('is-active');\n            }\n            if (nextArticle) {\n                nextArticle.classList.remove('is-active');\n            }\n\n            links[i].parentElement.classList.add('is-active');\n        }\n    }\n}\n\nfunction toArticle(name) {\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var item = _step.value;\n\n            if (name === item.dataset.name) {\n                var scrollPos = item.getBoundingClientRect().top + window.scrollY;\n                windowScroller(scrollPos, 300);\n            }\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n}\n\nblogList.addEventListener('click', function (e) {\n    e.preventDefault();\n    if (e.target.classList.contains('blog__nav__link') && !e.target.parentElement.classList.contains('is-active')) {\n        toArticle(e.target.getAttribute('data-name'));\n    }\n});\n\nfixed();\n\nwindow.addEventListener(\"scroll\", function (e) {\n    fixed();\n    checkCurrentArticle();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nLW5hdi5qcz9lM2I2Il0sIm5hbWVzIjpbImJsb2dBc2lkZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmtzIiwiYmxvZ0xpc3QiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93U2Nyb2xsZXIiLCJyZXFtb3ZlIiwiZHVyYXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbEhlaWdodCIsInNjcm9sbFkiLCJkaWZmWSIsImFuaW1hdGUiLCJkcmF3Iiwic3RhcnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm1vdmUiLCJ0aW1lIiwidGltZVBhc3NlZCIsInNjcm9sbCIsIk1hdGgiLCJtaW4iLCJmaXhlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInJlbW92ZSIsImNoZWNrQ3VycmVudEFydGljbGUiLCJpIiwibGVuZ3RoIiwieSIsImhlaWdodCIsInByZXZBcnRpY2xlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHRBcnRpY2xlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidG9BcnRpY2xlIiwibmFtZSIsIml0ZW0iLCJkYXRhc2V0Iiwic2Nyb2xsUG9zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOztBQUNBLElBQU1BLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbEI7QUFDQSxJQUFNQyxXQUFXRixTQUFTRyxnQkFBVCxDQUEwQixzQkFBMUIsQ0FBakI7QUFDQSxJQUFNQyxRQUFRSixTQUFTRyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBZDtBQUNBLElBQU1FLFdBQVdMLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWpCOztBQUVBRyxNQUFNLENBQU4sRUFBU0UsYUFBVCxDQUF1QkMsU0FBdkIsQ0FBaUNDLEdBQWpDLENBQXFDLFdBQXJDOztBQUVBLFNBQVNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUN2QyxRQUFNQyx3QkFDSkMsT0FBT0QscUJBQVAsSUFDQUMsT0FBT0Msd0JBRFAsSUFFQUQsT0FBT0UsMkJBRlAsSUFHQUYsT0FBT0csdUJBSlQ7QUFLQUgsV0FBT0QscUJBQVAsR0FBK0JBLHFCQUEvQjs7QUFFQSxRQUFNSyxlQUFlSixPQUFPSyxPQUE1QjtBQUNBLFFBQU1DLFFBQ0pGLGVBQWVQLE9BQWYsR0FDSUEsVUFBVU8sWUFEZCxHQUVJLENBQUMsQ0FBRCxJQUFNQSxlQUFlUCxPQUFyQixDQUhOOztBQUtBLFFBQU1VLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQU9WLFFBQVAsRUFBb0I7QUFDbEMsWUFBTVcsUUFBUUMsWUFBWUMsR0FBWixFQUFkO0FBQ0FaLDhCQUFzQixTQUFTYSxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDeEMsZ0JBQUlDLGFBQWFELE9BQU9KLEtBQXhCO0FBQ0EsZ0JBQUlLLGFBQWFoQixRQUFqQixFQUEyQmdCLGFBQWFoQixRQUFiO0FBQzNCVSxpQkFBS00sVUFBTDtBQUNBLGdCQUFJQSxhQUFhaEIsUUFBakIsRUFBMkJDLHNCQUFzQmEsSUFBdEI7QUFDNUIsU0FMRDtBQU1ELEtBUkQ7O0FBVUFMLFlBQVEsc0JBQWM7QUFDcEJQLGVBQU9lLE1BQVAsQ0FBYyxDQUFkLEVBQWlCWCxlQUFlRSxRQUFRVSxLQUFLQyxHQUFMLENBQVNILGFBQWFoQixRQUF0QixFQUFnQyxDQUFoQyxDQUF4QztBQUNELEtBRkQsRUFFR0EsUUFGSDtBQUdIOztBQUVELFNBQVNvQixLQUFULEdBQWlCO0FBQ2IsUUFBSWhDLFVBQVVPLGFBQVYsQ0FBd0IwQixxQkFBeEIsR0FBZ0RDLEdBQWhELElBQXVELENBQTNELEVBQThEO0FBQzFEbEMsa0JBQVVRLFNBQVYsQ0FBb0IyQixNQUFwQixDQUEyQix1QkFBM0I7QUFDQW5DLGtCQUFVUSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixvQkFBeEI7QUFDSCxLQUhELE1BR087QUFDSFQsa0JBQVVRLFNBQVYsQ0FBb0IyQixNQUFwQixDQUEyQixvQkFBM0I7QUFDQW5DLGtCQUFVUSxTQUFWLENBQW9CQyxHQUFwQixDQUF3Qix1QkFBeEI7QUFDSDtBQUNKOztBQUVELFNBQVMyQixtQkFBVCxHQUErQjtBQUMzQixTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSWxDLFNBQVNtQyxNQUE3QixFQUFxQ0QsR0FBckMsRUFBMEM7QUFDdEMsWUFDSWxDLFNBQVNrQyxDQUFULEVBQVlKLHFCQUFaLEdBQW9DTSxDQUFwQyxHQUF3QyxFQUF4QyxJQUNBcEMsU0FBU2tDLENBQVQsRUFBWUoscUJBQVosR0FBb0NNLENBQXBDLEdBQ0UsQ0FBQ3BDLFNBQVNrQyxDQUFULEVBQVlKLHFCQUFaLEdBQW9DTyxNQUgzQyxFQUlLO0FBQ0QsZ0JBQU1DLGNBQWNwQyxNQUFNZ0MsQ0FBTixFQUFTOUIsYUFBVCxDQUF1Qm1DLHNCQUEzQztBQUNBLGdCQUFNQyxjQUFjdEMsTUFBTWdDLENBQU4sRUFBUzlCLGFBQVQsQ0FBdUJxQyxrQkFBM0M7O0FBRUEsZ0JBQUlILFdBQUosRUFBaUI7QUFDYkEsNEJBQVlqQyxTQUFaLENBQXNCMkIsTUFBdEIsQ0FBNkIsV0FBN0I7QUFDSDtBQUNELGdCQUFJUSxXQUFKLEVBQWlCO0FBQ2JBLDRCQUFZbkMsU0FBWixDQUFzQjJCLE1BQXRCLENBQTZCLFdBQTdCO0FBQ0g7O0FBRUQ5QixrQkFBTWdDLENBQU4sRUFBUzlCLGFBQVQsQ0FBdUJDLFNBQXZCLENBQWlDQyxHQUFqQyxDQUFxQyxXQUFyQztBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFTb0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDckIsNkJBQWlCM0MsUUFBakIsOEhBQTJCO0FBQUEsZ0JBQWxCNEMsSUFBa0I7O0FBQ3ZCLGdCQUFJRCxTQUFTQyxLQUFLQyxPQUFMLENBQWFGLElBQTFCLEVBQWdDO0FBQzVCLG9CQUFJRyxZQUFZRixLQUFLZCxxQkFBTCxHQUE2QkMsR0FBN0IsR0FBbUNwQixPQUFPSyxPQUExRDtBQUNBVCwrQkFBZXVDLFNBQWYsRUFBMEIsR0FBMUI7QUFDSDtBQUNKO0FBTm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPeEI7O0FBRUQzQyxTQUFTNEMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsYUFBSztBQUNwQ0MsTUFBRUMsY0FBRjtBQUNBLFFBQUlELEVBQUVFLE1BQUYsQ0FBUzdDLFNBQVQsQ0FBbUI4QyxRQUFuQixDQUE0QixpQkFBNUIsS0FBa0QsQ0FBQ0gsRUFBRUUsTUFBRixDQUFTOUMsYUFBVCxDQUF1QkMsU0FBdkIsQ0FBaUM4QyxRQUFqQyxDQUEwQyxXQUExQyxDQUF2RCxFQUErRztBQUMzR1Qsa0JBQVVNLEVBQUVFLE1BQUYsQ0FBU0UsWUFBVCxDQUFzQixXQUF0QixDQUFWO0FBQ0g7QUFDSixDQUxEOztBQU9BdkI7O0FBRUFsQixPQUFPb0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsYUFBSztBQUNuQ2xCO0FBQ0FJO0FBQ0gsQ0FIRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2Jsb2ctbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGJsb2dBc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX19hc2lkZScpO1xyXG5jb25zdCBhcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nX19hcnRpY2xlX19pdGVtJyk7XHJcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2dfX25hdl9fbGluaycpO1xyXG5jb25zdCBibG9nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX19uYXZfX2xpc3QnKTtcclxuXHJcbmxpbmtzWzBdLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcblxyXG5mdW5jdGlvbiB3aW5kb3dTY3JvbGxlcihyZXFtb3ZlLCBkdXJhdGlvbikge1xyXG4gICAgY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgXHJcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgY29uc3QgZGlmZlkgPVxyXG4gICAgICBzY3JvbGxIZWlnaHQgPCByZXFtb3ZlXHJcbiAgICAgICAgPyByZXFtb3ZlIC0gc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgOiAtMSAqIChzY3JvbGxIZWlnaHQgLSByZXFtb3ZlKVxyXG4gIFxyXG4gICAgY29uc3QgYW5pbWF0ZSA9IChkcmF3LCBkdXJhdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBtb3ZlKHRpbWUpIHtcclxuICAgICAgICBsZXQgdGltZVBhc3NlZCA9IHRpbWUgLSBzdGFydFxyXG4gICAgICAgIGlmICh0aW1lUGFzc2VkID4gZHVyYXRpb24pIHRpbWVQYXNzZWQgPSBkdXJhdGlvblxyXG4gICAgICAgIGRyYXcodGltZVBhc3NlZClcclxuICAgICAgICBpZiAodGltZVBhc3NlZCA8IGR1cmF0aW9uKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobW92ZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICBcclxuICAgIGFuaW1hdGUodGltZVBhc3NlZCA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGwoMCwgc2Nyb2xsSGVpZ2h0ICsgZGlmZlkgKiBNYXRoLm1pbih0aW1lUGFzc2VkIC8gZHVyYXRpb24sIDEpKVxyXG4gICAgfSwgZHVyYXRpb24pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeGVkKCkge1xyXG4gICAgaWYgKGJsb2dBc2lkZS5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAwKSB7XHJcbiAgICAgICAgYmxvZ0FzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2dfX2FzaWRlLS1hYnNvbHV0ZScpO1xyXG4gICAgICAgIGJsb2dBc2lkZS5jbGFzc0xpc3QuYWRkKCdibG9nX19hc2lkZS0tZml4ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmxvZ0FzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2dfX2FzaWRlLS1maXhlZCcpO1xyXG4gICAgICAgIGJsb2dBc2lkZS5jbGFzc0xpc3QuYWRkKCdibG9nX19hc2lkZS0tYWJzb2x1dGUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDdXJyZW50QXJ0aWNsZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGFydGljbGVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgPCA1MCAmJlxyXG4gICAgICAgICAgICBhcnRpY2xlc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ID4gXHJcbiAgICAgICAgICAgICAgLWFydGljbGVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2QXJ0aWNsZSA9IGxpbmtzW2ldLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgY29uc3QgbmV4dEFydGljbGUgPSBsaW5rc1tpXS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICAgICAgICAgIGlmIChwcmV2QXJ0aWNsZSkge1xyXG4gICAgICAgICAgICAgICAgcHJldkFydGljbGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5leHRBcnRpY2xlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0QXJ0aWNsZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGlua3NbaV0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQXJ0aWNsZShuYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFydGljbGVzKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IGl0ZW0uZGF0YXNldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxQb3MgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZXHJcbiAgICAgICAgICAgIHdpbmRvd1Njcm9sbGVyKHNjcm9sbFBvcywgMzAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYmxvZ0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Jsb2dfX25hdl9fbGluaycpICYmICFlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICB0b0FydGljbGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZml4ZWQoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGUgPT4ge1xyXG4gICAgZml4ZWQoKTtcclxuICAgIGNoZWNrQ3VycmVudEFydGljbGUoKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blog-nav.js\n");

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