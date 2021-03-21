/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/app.js":
/*!***********************!*\
  !*** ./source/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.scss */ \"./source/css/app.scss\");\n/* harmony import */ var _components_finder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/finder */ \"./source/components/finder.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n // service worker\n\nif (\"serviceWorker\" in navigator) {\n  window.addEventListener(\"load\", function () {\n    //register service worker\n    navigator.serviceWorker.register(\"/service-worker.js\").then(function () {\n      return;\n    }).catch(function (err) {\n      var error = {\n        message: err.message\n      };\n      console.log(error);\n    });\n  });\n}\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {\n      var getStartedBtn = document.getElementById(\"getStartedBtn\");\n      var options = {\n        root: null,\n        rootMargin: \"0px 0px -200px 0px\",\n        threshold: 0.05\n      };\n      var observer = new IntersectionObserver(fadeIn, options);\n      document.querySelectorAll(\".lorem\").forEach(function (lorem) {\n        observer.observe(lorem);\n      });\n\n      function fadeIn(elements) {\n        elements.forEach(function (element) {\n          if (element.isIntersecting) {\n            element.target.classList.add(\"active\");\n          } else {\n            element.target.classList.remove(\"active\");\n          }\n        });\n      }\n\n      getStartedBtn.addEventListener(\"click\", this.getLocation.bind(this));\n    }\n  }, {\n    key: \"getLocation\",\n    value: function getLocation() {\n      var finder = new _components_finder__WEBPACK_IMPORTED_MODULE_1__.default();\n      var coords = finder.getCoordinates();\n      console.log(coords);\n    }\n  }]);\n\n  return App;\n}();\n\nvar app = new App();\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9hcHAuanM/MGJlZSJdLCJuYW1lcyI6WyJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIkFwcCIsImdldFN0YXJ0ZWRCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImZhZGVJbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibG9yZW0iLCJvYnNlcnZlIiwiZWxlbWVudHMiLCJlbGVtZW50IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJnZXRMb2NhdGlvbiIsImJpbmQiLCJmaW5kZXIiLCJGaW5kZXIiLCJjb29yZHMiLCJnZXRDb29yZGluYXRlcyIsImFwcCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBSSxtQkFBbUJBLFNBQXZCLEVBQWtDO0FBQ2pDQyxRQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDckM7QUFDQUYsYUFBUyxDQUFDRyxhQUFWLENBQ0VDLFFBREYsQ0FDVyxvQkFEWCxFQUVFQyxJQUZGLENBRU8sWUFBTTtBQUNYO0FBQ0EsS0FKRixFQUtFQyxLQUxGLENBS1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2YsVUFBTUMsS0FBSyxHQUFHO0FBQUVDLGVBQU8sRUFBRUYsR0FBRyxDQUFDRTtBQUFmLE9BQWQ7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQSxLQVJGO0FBU0EsR0FYRDtBQVlBOztJQUVLSSxHO0FBQ0wsaUJBQWM7QUFBQTtBQUFFOzs7O1dBRWhCLGdCQUFPO0FBQ04sVUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFFQSxVQUFNQyxPQUFPLEdBQUc7QUFDZkMsWUFBSSxFQUFFLElBRFM7QUFFZkMsa0JBQVUsRUFBRSxvQkFGRztBQUdmQyxpQkFBUyxFQUFFO0FBSEksT0FBaEI7QUFNQSxVQUFJQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUJDLE1BQXpCLEVBQWlDTixPQUFqQyxDQUFmO0FBQ0FGLGNBQVEsQ0FBQ1MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLE9BQXBDLENBQTRDLFVBQUNDLEtBQUQsRUFBVztBQUN0REwsZ0JBQVEsQ0FBQ00sT0FBVCxDQUFpQkQsS0FBakI7QUFDQSxPQUZEOztBQUlBLGVBQVNILE1BQVQsQ0FBZ0JLLFFBQWhCLEVBQTBCO0FBQ3pCQSxnQkFBUSxDQUFDSCxPQUFULENBQWlCLFVBQUNJLE9BQUQsRUFBYTtBQUM3QixjQUFJQSxPQUFPLENBQUNDLGNBQVosRUFBNEI7QUFDM0JELG1CQUFPLENBQUNFLE1BQVIsQ0FBZUMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0I7QUFDQSxXQUZELE1BRU87QUFDTkosbUJBQU8sQ0FBQ0UsTUFBUixDQUFlQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxRQUFoQztBQUNBO0FBQ0QsU0FORDtBQU9BOztBQUVEcEIsbUJBQWEsQ0FBQ1gsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsS0FBS2dDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXhDO0FBQ0E7OztXQUVELHVCQUFjO0FBQ2IsVUFBTUMsTUFBTSxHQUFHLElBQUlDLHVEQUFKLEVBQWY7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csY0FBUCxFQUFmO0FBQ0E3QixhQUFPLENBQUNDLEdBQVIsQ0FBWTJCLE1BQVo7QUFDQTs7Ozs7O0FBR0YsSUFBTUUsR0FBRyxHQUFHLElBQUk1QixHQUFKLEVBQVo7QUFDQTRCLEdBQUcsQ0FBQ0MsSUFBSiIsImZpbGUiOiIuL3NvdXJjZS9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuL2Nzcy9hcHAuc2Nzc1wiO1xyXG5pbXBvcnQgRmluZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZmluZGVyXCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlclxyXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRcdC8vcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcclxuXHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXHJcblx0XHRcdC5yZWdpc3RlcihcIi9zZXJ2aWNlLXdvcmtlci5qc1wiKVxyXG5cdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGVycm9yID0geyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9O1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmNsYXNzIEFwcCB7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgZ2V0U3RhcnRlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0U3RhcnRlZEJ0blwiKTtcclxuXHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRyb290OiBudWxsLFxyXG5cdFx0XHRyb290TWFyZ2luOiBcIjBweCAwcHggLTIwMHB4IDBweFwiLFxyXG5cdFx0XHR0aHJlc2hvbGQ6IDAuMDUsXHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmYWRlSW4sIG9wdGlvbnMpO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb3JlbVwiKS5mb3JFYWNoKChsb3JlbSkgPT4ge1xyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKGxvcmVtKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGZhZGVJbihlbGVtZW50cykge1xyXG5cdFx0XHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnQuaXNJbnRlcnNlY3RpbmcpIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRTdGFydGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmdldExvY2F0aW9uLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0Z2V0TG9jYXRpb24oKSB7XHJcblx0XHRjb25zdCBmaW5kZXIgPSBuZXcgRmluZGVyKCk7XHJcblx0XHRjb25zdCBjb29yZHMgPSBmaW5kZXIuZ2V0Q29vcmRpbmF0ZXMoKTtcclxuXHRcdGNvbnNvbGUubG9nKGNvb3Jkcyk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5pbml0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/app.js\n");

/***/ }),

/***/ "./source/components/finder.js":
/*!*************************************!*\
  !*** ./source/components/finder.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Finder = /*#__PURE__*/function () {\n  function Finder() {\n    _classCallCheck(this, Finder);\n  }\n\n  _createClass(Finder, [{\n    key: \"getCoordinates\",\n    value: function getCoordinates() {\n      var coords;\n\n      if (navigator.geolocation.getCurrentPosition) {\n        navigator.geolocation.getCurrentPosition(function (success) {\n          coords = {\n            lng: success.coords.longitude,\n            lat: success.coords.latitude\n          };\n        }, function (error) {\n          console.log(error);\n        });\n      }\n\n      return coords;\n    }\n  }]);\n\n  return Finder;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Finder);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9jb21wb25lbnRzL2ZpbmRlci5qcz8zZGJlIl0sIm5hbWVzIjpbIkZpbmRlciIsImNvb3JkcyIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2VzcyIsImxuZyIsImxvbmdpdHVkZSIsImxhdCIsImxhdGl0dWRlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BLE07Ozs7Ozs7V0FDTCwwQkFBaUI7QUFDaEIsVUFBSUMsTUFBSjs7QUFDQSxVQUFJQyxTQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUExQixFQUE4QztBQUM3Q0YsaUJBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQ0MsVUFBQ0MsT0FBRCxFQUFhO0FBQ1pKLGdCQUFNLEdBQUc7QUFDUkssZUFBRyxFQUFFRCxPQUFPLENBQUNKLE1BQVIsQ0FBZU0sU0FEWjtBQUVSQyxlQUFHLEVBQUVILE9BQU8sQ0FBQ0osTUFBUixDQUFlUTtBQUZaLFdBQVQ7QUFJQSxTQU5GLEVBT0MsVUFBQ0MsS0FBRCxFQUFXO0FBQ1ZDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFNBVEY7QUFXQTs7QUFDRCxhQUFPVCxNQUFQO0FBQ0E7Ozs7OztBQUdGLCtEQUFlRCxNQUFmIiwiZmlsZSI6Ii4vc291cmNlL2NvbXBvbmVudHMvZmluZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmluZGVyIHtcclxuXHRnZXRDb29yZGluYXRlcygpIHtcclxuXHRcdGxldCBjb29yZHM7XHJcblx0XHRpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbikge1xyXG5cdFx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG5cdFx0XHRcdChzdWNjZXNzKSA9PiB7XHJcblx0XHRcdFx0XHRjb29yZHMgPSB7XHJcblx0XHRcdFx0XHRcdGxuZzogc3VjY2Vzcy5jb29yZHMubG9uZ2l0dWRlLFxyXG5cdFx0XHRcdFx0XHRsYXQ6IHN1Y2Nlc3MuY29vcmRzLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjb29yZHM7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaW5kZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/components/finder.js\n");

/***/ }),

/***/ "./source/css/app.scss":
/*!*****************************!*\
  !*** ./source/css/app.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9jc3MvYXBwLnNjc3M/M2E5YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEiLCJmaWxlIjoiLi9zb3VyY2UvY3NzL2FwcC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/css/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/app.js");
/******/ 	
/******/ })()
;