/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors-main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugin/js/index.tsx":
/*!*****************************!*\
  !*** ./plugin/js/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./plugin/js/main.tsx\");\n\r\n\r\n\r\nvar debug = false;\r\nwindow.onload = function () {\r\n    if (location.host === \"newtab\"\r\n        || location.host === \"local-ntp\"\r\n        || location.host === \"\"\r\n        || location.protocol === \"file:\"\r\n        || location.href === \"https://www.zhoushoujian.com/svg/\"\r\n        || /chrome\\-extension/.test(location.origin)\r\n        || debug) {\r\n        var ele = document.createElement('div');\r\n        ele.id = 'svg';\r\n        document.body.appendChild(ele);\r\n        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.querySelector('#svg'));\r\n    }\r\n    else {\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW4vanMvaW5kZXgudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3BsdWdpbi9qcy9pbmRleC50c3g/NDY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9tYWluXCI7XG5cbmNvbnN0IGRlYnVnID0gZmFsc2U7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5ob3N0ID09PSBcIm5ld3RhYlwiXG4gICAgfHwgbG9jYXRpb24uaG9zdCA9PT0gXCJsb2NhbC1udHBcIlxuICAgIHx8IGxvY2F0aW9uLmhvc3QgPT09IFwiXCJcbiAgICB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJmaWxlOlwiXG4gICAgfHwgbG9jYXRpb24uaHJlZiA9PT0gXCJodHRwczovL3d3dy56aG91c2hvdWppYW4uY29tL3N2Zy9cIlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgIHx8IC9jaHJvbWVcXC1leHRlbnNpb24vLnRlc3QobG9jYXRpb24ub3JpZ2luKVxuICAgIHx8IGRlYnVnKSB7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlLmlkID0gJ3N2Zyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGUpO1xuICAgIFJlYWN0RE9NLnJlbmRlcig8TWFpbiAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N2ZycpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbm8gc3VpdGFibGUgY2FzZScpO1xuICB9XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./plugin/js/index.tsx\n");

/***/ }),

/***/ "./plugin/js/main.tsx":
/*!****************************!*\
  !*** ./plugin/js/main.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __read = (undefined && undefined.__read) || function (o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n};\r\nvar __spread = (undefined && undefined.__spread) || function () {\r\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n};\r\n\r\n\r\nfunction MyDropzone() {\r\n    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]), 2), availableFiles = _a[0], setAvailableFiles = _a[1];\r\n    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true), 2), selectedSvgBtn = _b[0], setSelectedSvgBtn = _b[1];\r\n    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true), 2), selectedGifBtn = _c[0], setSelectedGifBtn = _c[1];\r\n    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\r\n        width: 200,\r\n        height: 200\r\n    }), 2), container = _d[0], setContainer = _d[1];\r\n    var _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\r\n        width: 150,\r\n        height: 150\r\n    }), 2), content = _e[0], setContent = _e[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        availableFiles.forEach(function (item) {\r\n            if (item.type === 'image/svg+xml') {\r\n                item.visible = selectedSvgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/gif') {\r\n                item.visible = selectedGifBtn ? true : false;\r\n            }\r\n        });\r\n        console.log('filter changed, files: ', availableFiles);\r\n        setAvailableFiles(__spread(availableFiles));\r\n    }, [selectedSvgBtn, selectedGifBtn]);\r\n    var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (acceptedFiles) {\r\n        console.log('selected files: ', acceptedFiles);\r\n        acceptedFiles = acceptedFiles.filter(function (item) { return (item.type === 'image/svg+xml' || item.type === 'image/gif'); });\r\n        acceptedFiles.forEach(function (item) {\r\n            if (item.type === 'image/svg+xml') {\r\n                item.visible = selectedSvgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/gif') {\r\n                item.visible = selectedGifBtn ? true : false;\r\n            }\r\n        });\r\n        console.log('available files: ', acceptedFiles);\r\n        setAvailableFiles(__spread(availableFiles, acceptedFiles));\r\n    }, [availableFiles]);\r\n    var _f = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_1__[\"useDropzone\"])({ onDrop: onDrop }), getRootProps = _f.getRootProps, getInputProps = _f.getInputProps, isDragActive = _f.isDragActive;\r\n    var zoomOut = function () {\r\n        setContainer({\r\n            width: container.width + 20,\r\n            height: container.height + 20\r\n        });\r\n        setContent({\r\n            width: content.width + 20,\r\n            height: content.height + 20\r\n        });\r\n    };\r\n    var zoomIn = function () {\r\n        if (container.width === 100)\r\n            return;\r\n        setContainer({\r\n            width: container.width - 20,\r\n            height: container.height - 20\r\n        });\r\n        setContent({\r\n            width: content.width - 20,\r\n            height: content.height - 20\r\n        });\r\n    };\r\n    var availableFilesVisible = availableFiles.filter(function (item) { return item.visible; });\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-show-svg-container\" }, (!availableFilesVisible.length && selectedSvgBtn && selectedSvgBtn) ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { title: \"\" + (isDragActive\r\n            ? 'Drop the files here ...'\r\n            : 'Drag some files here, or click to select files'), className: \"svg-viewer-chrome-plugin-css-style-multi-svg-container\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", __assign({}, getRootProps({ accept: 'image/svg+xml' })),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", __assign({}, getInputProps())),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-plugin-header-init\" }, \"Multiple SVG And GIF Viewer\"),\r\n            isDragActive ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-init\" }, \"Drop the files here ...\")) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-init\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-init-middle\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { fontSize: '72px' } }, \"+\"),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { textAlign: 'center', fontWeight: 600, fontSize: 20 } }, \"Drag some files here, or click to select files\"))))))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", { className: \"svg-viewer-chrome-plugin-css-style-plugin-header-content\" }, \"Multiple SVG And GIF Viewer\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-tool\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-file-type-button\", style: { backgroundColor: selectedSvgBtn ? \"#ccc\" : \"#fff\", color: selectedSvgBtn ? \"#fff\" : \"#ccc\" }, onClick: function () { return setSelectedSvgBtn(!selectedSvgBtn); }, title: \"show svg\" }, \"SVG\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-file-type-button\", style: { backgroundColor: selectedGifBtn ? \"#ccc\" : \"#fff\", color: selectedGifBtn ? \"#fff\" : \"#ccc\" }, onClick: function () { return setSelectedGifBtn(!selectedGifBtn); }, title: \"show gif\" }, \"GIF\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { marginRight: 20, cursor: 'pointer' }, onClick: zoomOut, title: \"zoom out\" }, \"+\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { cursor: 'pointer' }, onClick: zoomIn, title: \"zoom in\" }, \"-\")),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { width: '100%' }, title: \"\" + (isDragActive\r\n                ? 'Drop the files here ...'\r\n                : 'Drag some files here, or click to select files'), className: \"svg-viewer-chrome-plugin-css-style-multi-svg-container\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-svg-items-container\" },\r\n                availableFilesVisible.map(function (file, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-svg-items\", style: { width: container.width, height: container.height }, key: index },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-filename\", style: { width: container.width }, title: file.name }, file.name),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", { alt: \"\", style: { width: content.width, height: content.height }, className: \"svg-viewer-chrome-plugin-css-style-react-svg\", src: window.webkitURL.createObjectURL(file) }))); }),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-svg-items svg-viewer-chrome-plugin-css-style-upload-button-content\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", __assign({}, getRootProps()),\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", __assign({}, getInputProps())),\r\n                        isDragActive ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-content-border svg-viewer-chrome-plugin-css-style-drop-file-here\" }, \"Drop the files here ...\")) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-content-border\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-plus\" }, \"+\"),\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-plus-text\" }, \"Drag some files here, or click to select files\")))))))))));\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyDropzone);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW4vanMvbWFpbi50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcGx1Z2luL2pzL21haW4udHN4Pzk1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuXG5mdW5jdGlvbiBNeURyb3B6b25lKCkge1xuICBjb25zdCBbYXZhaWxhYmxlRmlsZXMsIHNldEF2YWlsYWJsZUZpbGVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFN2Z0J0biwgc2V0U2VsZWN0ZWRTdmdCdG5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEdpZkJ0biwgc2V0U2VsZWN0ZWRHaWZCdG5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjb250YWluZXIsIHNldENvbnRhaW5lcl0gPSB1c2VTdGF0ZSh7XG4gICAgd2lkdGg6IDIwMCxcbiAgICBoZWlnaHQ6IDIwMFxuICB9KTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoe1xuICAgIHdpZHRoOiAxNTAsXG4gICAgaGVpZ2h0OiAxNTBcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhdmFpbGFibGVGaWxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2ltYWdlL3N2Zyt4bWwnKSB7XG4gICAgICAgIGl0ZW0udmlzaWJsZSA9IHNlbGVjdGVkU3ZnQnRuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9naWYnKSB7XG4gICAgICAgIGl0ZW0udmlzaWJsZSA9IHNlbGVjdGVkR2lmQnRuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdmaWx0ZXIgY2hhbmdlZCwgZmlsZXM6ICcsIGF2YWlsYWJsZUZpbGVzKTtcbiAgICBzZXRBdmFpbGFibGVGaWxlcyhbLi4uYXZhaWxhYmxlRmlsZXNdKTtcbiAgfSwgW3NlbGVjdGVkU3ZnQnRuLCBzZWxlY3RlZEdpZkJ0bl0pO1xuXG4gIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKFxuICAgIGFjY2VwdGVkRmlsZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGZpbGVzOiAnLCBhY2NlcHRlZEZpbGVzKTtcbiAgICAgIGFjY2VwdGVkRmlsZXMgPSBhY2NlcHRlZEZpbGVzLmZpbHRlcihpdGVtID0+IChpdGVtLnR5cGUgPT09ICdpbWFnZS9zdmcreG1sJyB8fCBpdGVtLnR5cGUgPT09ICdpbWFnZS9naWYnKSk7XG4gICAgICBhY2NlcHRlZEZpbGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9zdmcreG1sJykge1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHNlbGVjdGVkU3ZnQnRuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2ltYWdlL2dpZicpIHtcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSBzZWxlY3RlZEdpZkJ0biA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnYXZhaWxhYmxlIGZpbGVzOiAnLCBhY2NlcHRlZEZpbGVzKTtcbiAgICAgIHNldEF2YWlsYWJsZUZpbGVzKFsuLi5hdmFpbGFibGVGaWxlcywgLi4uYWNjZXB0ZWRGaWxlc10pO1xuICAgIH0sXG4gICAgW2F2YWlsYWJsZUZpbGVzXVxuICApO1xuXG4gIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHsgb25Ecm9wIH0pO1xuXG4gIGNvbnN0IHpvb21PdXQgPSAoKSA9PiB7XG4gICAgc2V0Q29udGFpbmVyKHtcbiAgICAgIHdpZHRoOiBjb250YWluZXIud2lkdGggKyAyMCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyLmhlaWdodCArIDIwXG4gICAgfSk7XG4gICAgc2V0Q29udGVudCh7XG4gICAgICB3aWR0aDogY29udGVudC53aWR0aCArIDIwLFxuICAgICAgaGVpZ2h0OiBjb250ZW50LmhlaWdodCArIDIwXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgem9vbUluID0gKCkgPT4ge1xuICAgIGlmIChjb250YWluZXIud2lkdGggPT09IDEwMCkgcmV0dXJuO1xuICAgIHNldENvbnRhaW5lcih7XG4gICAgICB3aWR0aDogY29udGFpbmVyLndpZHRoIC0gMjAsXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5oZWlnaHQgLSAyMFxuICAgIH0pO1xuICAgIHNldENvbnRlbnQoe1xuICAgICAgd2lkdGg6IGNvbnRlbnQud2lkdGggLSAyMCxcbiAgICAgIGhlaWdodDogY29udGVudC5oZWlnaHQgLSAyMFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGF2YWlsYWJsZUZpbGVzVmlzaWJsZSA9IGF2YWlsYWJsZUZpbGVzLmZpbHRlcihpdGVtID0+IGl0ZW0udmlzaWJsZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXNob3ctc3ZnLWNvbnRhaW5lclwiPlxuICAgICAgeyghYXZhaWxhYmxlRmlsZXNWaXNpYmxlLmxlbmd0aCAmJiBzZWxlY3RlZFN2Z0J0biAmJiBzZWxlY3RlZFN2Z0J0bikgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICB0aXRsZT17YCR7aXNEcmFnQWN0aXZlXG4gICAgICAgICAgICA/ICdEcm9wIHRoZSBmaWxlcyBoZXJlIC4uLidcbiAgICAgICAgICAgIDogJ0RyYWcgc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXMnfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1tdWx0aS1zdmctY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKHsgYWNjZXB0OiAnaW1hZ2Uvc3ZnK3htbCcgfSl9PlxuICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtcGx1Z2luLWhlYWRlci1pbml0XCI+XG4gICAgICAgICAgICAgIE11bHRpcGxlIFNWRyBBbmQgR0lGIFZpZXdlclxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aXNEcmFnQWN0aXZlID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtdXBsb2FkLWJ1dHRvbi1pbml0XCI+XG4gICAgICAgICAgICAgICAgRHJvcCB0aGUgZmlsZXMgaGVyZSAuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKDxkaXYgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS11cGxvYWQtYnV0dG9uLWluaXRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXVwbG9hZC1idXR0b24taW5pdC1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnNzJweCcgfX0+KzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogNjAwLCBmb250U2l6ZTogMjAgfX0+XG4gICAgICAgICAgICAgICAgICBEcmFnIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoPEZyYWdtZW50PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1wbHVnaW4taGVhZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICBNdWx0aXBsZSBTVkcgQW5kIEdJRiBWaWV3ZXJcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXRvb2xcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLWZpbGUtdHlwZS1idXR0b25cIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZFN2Z0J0biA/IFwiI2NjY1wiIDogXCIjZmZmXCIsIGNvbG9yOiBzZWxlY3RlZFN2Z0J0biA/IFwiI2ZmZlwiIDogXCIjY2NjXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkU3ZnQnRuKCFzZWxlY3RlZFN2Z0J0bil9XG4gICAgICAgICAgICB0aXRsZT1cInNob3cgc3ZnXCI+U1ZHPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1maWxlLXR5cGUtYnV0dG9uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRHaWZCdG4gPyBcIiNjY2NcIiA6IFwiI2ZmZlwiLCBjb2xvcjogc2VsZWN0ZWRHaWZCdG4gPyBcIiNmZmZcIiA6IFwiI2NjY1wiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEdpZkJ0bighc2VsZWN0ZWRHaWZCdG4pfVxuICAgICAgICAgICAgdGl0bGU9XCJzaG93IGdpZlwiPkdJRjwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDIwLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt6b29tT3V0fSB0aXRsZT1cInpvb20gb3V0XCI+KzwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17em9vbUlufSB0aXRsZT1cInpvb20gaW5cIj4tPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgIHRpdGxlPXtgJHtpc0RyYWdBY3RpdmVcbiAgICAgICAgICAgID8gJ0Ryb3AgdGhlIGZpbGVzIGhlcmUgLi4uJ1xuICAgICAgICAgICAgOiAnRHJhZyBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlcyd9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLW11bHRpLXN2Zy1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtc3ZnLWl0ZW1zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2F2YWlsYWJsZUZpbGVzVmlzaWJsZS5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXN2Zy1pdGVtc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGNvbnRhaW5lci53aWR0aCwgaGVpZ2h0OiBjb250YWluZXIuaGVpZ2h0IH19XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1maWxlbmFtZVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogY29udGFpbmVyLndpZHRoIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT17ZmlsZS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIHtmaWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBjb250ZW50LndpZHRoLCBoZWlnaHQ6IGNvbnRlbnQuaGVpZ2h0IH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXJlYWN0LXN2Z1wiXG4gICAgICAgICAgICAgICAgICBzcmM9e3dpbmRvdy53ZWJraXRVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtc3ZnLWl0ZW1zIHN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtdXBsb2FkLWJ1dHRvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcygpfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgICAgICB7aXNEcmFnQWN0aXZlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXVwbG9hZC1idXR0b24tY29udGVudC1ib3JkZXIgc3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1kcm9wLWZpbGUtaGVyZVwiPlxuICAgICAgICAgICAgICAgICAgICBEcm9wIHRoZSBmaWxlcyBoZXJlIC4uLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXVwbG9hZC1idXR0b24tY29udGVudC1ib3JkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtcGx1c1wiPis8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtcGx1cy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEcmFnIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEcm9wem9uZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBUUE7QUFHQTtBQUNBO0FBS0E7QUFLQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBTUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFXQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./plugin/js/main.tsx\n");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./plugin/js/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./plugin/js/index.tsx */"./plugin/js/index.tsx");


/***/ })

/******/ });