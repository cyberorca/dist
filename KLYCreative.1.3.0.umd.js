/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["KLYCreative"] = factory();
	else
		root["KLYCreative"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/global_init.js":
/*!****************************!*\
  !*** ./src/global_init.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\nconst par = (typeof parent !== \"undefined\") && parent;\nconst win = ( par && par.window ) ? par.window : window;\nconst doc = ( par && par.document) ? par.document : document;\nconst kly = ( par && (par.kly || par.kmklabs)) || {};\nconst platform = (kly.platform || \"\").toLowerCase();\nconst pageType = (kly.pageType || \"\").toLowerCase();\nlet site = (kly.site || \"\").toLowerCase();\n\nif (site === \"bola.com\") site = \"bolacom\";\n\nasync function init(format, config) {\n  config = config || {};\n  format = (format || \"\").toLowerCase();\n  \n  const { Newstag } = await __webpack_require__.e(/*! import() | newstag */ \"newstag\").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/Newstag.js */ \"./src/modules/Newstag.js\"));\n  const { SkinAd } = await __webpack_require__.e(/*! import() | skinad */ \"skinad\").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/SkinAd.js */ \"./src/modules/SkinAd.js\"));\n  const { AdvertorialEmbed } = await __webpack_require__.e(/*! import() | advertorialEmbed */ \"advertorialEmbed\").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/AdvertorialEmbed.js */ \"./src/modules/AdvertorialEmbed.js\"));\n  const { FloatingPin } = await __webpack_require__.e(/*! import() | floatingPin */ \"floatingPin\").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/FloatingPin.js */ \"./src/modules/FloatingPin.js\"));\n\n  try {\n    switch (format) {\n      case \"newstag\":\n        Newstag(config, site, platform, doc);\n        break;\n      case \"skinad\":\n        SkinAd(config, platform, doc);\n        break;\n      case \"advertorial-embed\":\n        console.log(\"INIT ADVERTORIAL EMBED\");\n        AdvertorialEmbed(config, win, doc, site, pageType);\n        break;\n      case \"floating-pin\":\n        console.log(\"INIT FLOATING PIN\");\n        FloatingPin(config, doc, site);\n        break;\n      default:\n        console.warn(\"Unknown format:\", format);\n    }\n  } catch (error) {\n    console.error(`Failed to load creative \"${format}\":`, error);\n  }\n}\n\n(function autoInit() {\n  try {\n    const currentScript =\n      document.currentScript ||\n      document.querySelector('script[src*=\"ad_Inventory\"]') ||\n      (function () {\n        const scripts = document.getElementsByTagName(\"script\");\n        return scripts[scripts.length - 1];\n      })();\n\n    if (!currentScript || !currentScript.src) return;\n\n    const src = new URL(currentScript.src, document.location.href);\n    const creative = src.searchParams.get(\"creative\");\n\n    if (creative) {\n      console.log(`[adInventory] Auto init creative: ${creative}`);\n      init(creative);\n    }\n  } catch (e) {\n    console.warn(\"[adInventory] Failed to auto init creative:\", e);\n  }\n})();\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2xvYmFsX2luaXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxVQUFVLFFBQVEsc0tBQWdFO0FBQzVGLFVBQVUsU0FBUyxRQUFRLGtLQUE4RDtBQUN6RixVQUFVLG1CQUFtQixRQUFRLDBNQUFrRjtBQUN2SCxVQUFVLGNBQWMsUUFBUSxzTEFBd0U7O0FBRXhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9LTFlDcmVhdGl2ZS8uL3NyYy9nbG9iYWxfaW5pdC5qcz84NzZkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhciA9ICh0eXBlb2YgcGFyZW50ICE9PSBcInVuZGVmaW5lZFwiKSAmJiBwYXJlbnQ7XG5jb25zdCB3aW4gPSAoIHBhciAmJiBwYXIud2luZG93ICkgPyBwYXIud2luZG93IDogd2luZG93O1xuY29uc3QgZG9jID0gKCBwYXIgJiYgcGFyLmRvY3VtZW50KSA/IHBhci5kb2N1bWVudCA6IGRvY3VtZW50O1xuY29uc3Qga2x5ID0gKCBwYXIgJiYgKHBhci5rbHkgfHwgcGFyLmtta2xhYnMpKSB8fCB7fTtcbmNvbnN0IHBsYXRmb3JtID0gKGtseS5wbGF0Zm9ybSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuY29uc3QgcGFnZVR5cGUgPSAoa2x5LnBhZ2VUeXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5sZXQgc2l0ZSA9IChrbHkuc2l0ZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXG5pZiAoc2l0ZSA9PT0gXCJib2xhLmNvbVwiKSBzaXRlID0gXCJib2xhY29tXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoZm9ybWF0LCBjb25maWcpIHtcbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICBmb3JtYXQgPSAoZm9ybWF0IHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gIFxuICBjb25zdCB7IE5ld3N0YWcgfSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm5ld3N0YWdcIiAqLyBcIi4vbW9kdWxlcy9OZXdzdGFnLmpzXCIpO1xuICBjb25zdCB7IFNraW5BZCB9ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic2tpbmFkXCIgKi8gXCIuL21vZHVsZXMvU2tpbkFkLmpzXCIpO1xuICBjb25zdCB7IEFkdmVydG9yaWFsRW1iZWQgfSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFkdmVydG9yaWFsRW1iZWRcIiAqLyBcIi4vbW9kdWxlcy9BZHZlcnRvcmlhbEVtYmVkLmpzXCIpO1xuICBjb25zdCB7IEZsb2F0aW5nUGluIH0gPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJmbG9hdGluZ1BpblwiICovIFwiLi9tb2R1bGVzL0Zsb2F0aW5nUGluLmpzXCIpO1xuXG4gIHRyeSB7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgXCJuZXdzdGFnXCI6XG4gICAgICAgIE5ld3N0YWcoY29uZmlnLCBzaXRlLCBwbGF0Zm9ybSwgZG9jKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2tpbmFkXCI6XG4gICAgICAgIFNraW5BZChjb25maWcsIHBsYXRmb3JtLCBkb2MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJhZHZlcnRvcmlhbC1lbWJlZFwiOlxuICAgICAgICBjb25zb2xlLmxvZyhcIklOSVQgQURWRVJUT1JJQUwgRU1CRURcIik7XG4gICAgICAgIEFkdmVydG9yaWFsRW1iZWQoY29uZmlnLCB3aW4sIGRvYywgc2l0ZSwgcGFnZVR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJmbG9hdGluZy1waW5cIjpcbiAgICAgICAgY29uc29sZS5sb2coXCJJTklUIEZMT0FUSU5HIFBJTlwiKTtcbiAgICAgICAgRmxvYXRpbmdQaW4oY29uZmlnLCBkb2MsIHNpdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVua25vd24gZm9ybWF0OlwiLCBmb3JtYXQpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbG9hZCBjcmVhdGl2ZSBcIiR7Zm9ybWF0fVwiOmAsIGVycm9yKTtcbiAgfVxufVxuXG4oZnVuY3Rpb24gYXV0b0luaXQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY3VycmVudFNjcmlwdCA9XG4gICAgICBkb2N1bWVudC5jdXJyZW50U2NyaXB0IHx8XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImFkX0ludmVudG9yeVwiXScpIHx8XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgICAgIHJldHVybiBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG4gICAgICB9KSgpO1xuXG4gICAgaWYgKCFjdXJyZW50U2NyaXB0IHx8ICFjdXJyZW50U2NyaXB0LnNyYykgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3JjID0gbmV3IFVSTChjdXJyZW50U2NyaXB0LnNyYywgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgY29uc3QgY3JlYXRpdmUgPSBzcmMuc2VhcmNoUGFyYW1zLmdldChcImNyZWF0aXZlXCIpO1xuXG4gICAgaWYgKGNyZWF0aXZlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgW2FkSW52ZW50b3J5XSBBdXRvIGluaXQgY3JlYXRpdmU6ICR7Y3JlYXRpdmV9YCk7XG4gICAgICBpbml0KGNyZWF0aXZlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbYWRJbnZlbnRvcnldIEZhaWxlZCB0byBhdXRvIGluaXQgY3JlYXRpdmU6XCIsIGUpO1xuICB9XG59KSgpO1xuXG5leHBvcnQgeyBpbml0IH07XG5cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/global_init.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "KLYCreative." + chunkId + ".1.3.0." + {"newstag":"4a180d51e10a0b8d8371","skinad":"3dd1c1c9177d8db52e33","advertorialEmbed":"553f9615c72e9305fb19","floatingPin":"2f43909c303bf58f67f0"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "KLYCreative:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = this["webpackChunkKLYCreative"] = this["webpackChunkKLYCreative"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/global_init.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});