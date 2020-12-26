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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./plugin/js/main.tsx\");\n\r\n\r\n\r\nvar debug = true;\r\nwindow.onload = function () {\r\n    if (location.host === \"newtab\"\r\n        || location.host === \"local-ntp\"\r\n        || location.href === \"https://www.zhoushoujian.com/svg/\"\r\n        || /chrome\\-extension/.test(location.origin)\r\n        || debug) {\r\n        var ele = document.createElement('div');\r\n        ele.id = 'svg-viewer-chrome-plugin';\r\n        document.body.appendChild(ele);\r\n        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.querySelector('#svg-viewer-chrome-plugin'));\r\n    }\r\n    else {\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW4vanMvaW5kZXgudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3BsdWdpbi9qcy9pbmRleC50c3g/NDY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuY29uc3QgZGVidWcgPSB0cnVlO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBpZiAobG9jYXRpb24uaG9zdCA9PT0gXCJuZXd0YWJcIlxyXG4gICAgfHwgbG9jYXRpb24uaG9zdCA9PT0gXCJsb2NhbC1udHBcIlxyXG4gICAgfHwgbG9jYXRpb24uaHJlZiA9PT0gXCJodHRwczovL3d3dy56aG91c2hvdWppYW4uY29tL3N2Zy9cIlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXHJcbiAgICB8fCAvY2hyb21lXFwtZXh0ZW5zaW9uLy50ZXN0KGxvY2F0aW9uLm9yaWdpbilcclxuICAgIHx8IGRlYnVnKSB7XHJcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZS5pZCA9ICdzdmctdmlld2VyLWNocm9tZS1wbHVnaW4nO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3RhcmdldCcpXHJcbiAgICBSZWFjdERPTS5yZW5kZXIoPE1haW4gLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdmctdmlld2VyLWNocm9tZS1wbHVnaW4nKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdubyBzdWl0YWJsZSBjYXNlJyk7XHJcbiAgfVxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./plugin/js/index.tsx\n");

/***/ }),

/***/ "./plugin/js/main.tsx":
/*!****************************!*\
  !*** ./plugin/js/main.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __read = (undefined && undefined.__read) || function (o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n};\r\nvar __spread = (undefined && undefined.__spread) || function () {\r\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n};\r\n\r\n\r\nvar btnArray = [\r\n    {\r\n        type: \"svgBtn\",\r\n        title: \"show svg\",\r\n        text: \"SVG\"\r\n    },\r\n    {\r\n        type: \"gifBtn\",\r\n        title: \"show gif\",\r\n        text: \"GIF\"\r\n    },\r\n    {\r\n        type: \"jpgBtn\",\r\n        title: \"show jpg\",\r\n        text: \"JPG\"\r\n    },\r\n    {\r\n        type: \"pngBtn\",\r\n        title: \"show png\",\r\n        text: \"PNG\"\r\n    },\r\n    {\r\n        type: \"bmpBtn\",\r\n        title: \"show bmp\",\r\n        text: \"BMP\"\r\n    },\r\n    {\r\n        type: \"iconBtn\",\r\n        title: \"show icon\",\r\n        text: \"ICON\"\r\n    },\r\n];\r\nvar availableMimeArray = ['image/svg+xml', 'image/gif', 'image/jpeg', 'image/bmp', 'image/x-icon', 'image/png'];\r\nvar initState = true;\r\nfunction MyDropzone() {\r\n    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]), 2), availableFiles = _a[0], setAvailableFiles = _a[1];\r\n    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\r\n        svgBtn: true,\r\n        gifBtn: true,\r\n        jpgBtn: false,\r\n        pngBtn: false,\r\n        bmpBtn: false,\r\n        iconBtn: false\r\n    }), 2), selectedBtns = _b[0], setSelectedBtns = _b[1];\r\n    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\r\n        width: 200,\r\n        height: 200\r\n    }), 2), container = _c[0], setContainer = _c[1];\r\n    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\r\n        width: 150,\r\n        height: 150\r\n    }), 2), content = _d[0], setContent = _d[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        if (document.querySelector('body')) {\r\n            document.querySelector('body').style.overflow = \"hidden\";\r\n        }\r\n    }, []);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var svgBtn = selectedBtns.svgBtn, gifBtn = selectedBtns.gifBtn, jpgBtn = selectedBtns.jpgBtn, pngBtn = selectedBtns.pngBtn, bmpBtn = selectedBtns.bmpBtn, iconBtn = selectedBtns.iconBtn;\r\n        availableFiles.forEach(function (item) {\r\n            if (item.type === 'image/svg+xml') {\r\n                item.visible = svgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/gif') {\r\n                item.visible = gifBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/jpeg') {\r\n                item.visible = jpgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/bmp') {\r\n                item.visible = bmpBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/x-icon') {\r\n                item.visible = iconBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/png') {\r\n                item.visible = pngBtn ? true : false;\r\n            }\r\n        });\r\n        console.log('filter changed, files: ', availableFiles);\r\n        setAvailableFiles(__spread(availableFiles));\r\n    }, [selectedBtns]);\r\n    var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (acceptedFiles) {\r\n        console.log('selected files: ', acceptedFiles);\r\n        acceptedFiles = acceptedFiles.filter(function (item) { return availableMimeArray.indexOf(item.type) !== -1; });\r\n        acceptedFiles.forEach(function (item) {\r\n            if (item.type === 'image/svg+xml') {\r\n                item.visible = selectedBtns.svgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/gif') {\r\n                item.visible = selectedBtns.gifBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/jpeg') {\r\n                item.visible = selectedBtns.jpgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/bmp') {\r\n                item.visible = selectedBtns.bmpBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/x-icon') {\r\n                item.visible = selectedBtns.iconBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/png') {\r\n                item.visible = selectedBtns.pngBtn ? true : false;\r\n            }\r\n        });\r\n        console.log('available files: ', acceptedFiles);\r\n        if (acceptedFiles.length) {\r\n            initState = false;\r\n        }\r\n        setAvailableFiles(__spread(availableFiles, acceptedFiles));\r\n    }, [availableFiles]);\r\n    var _e = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_1__[\"useDropzone\"])({ onDrop: onDrop }), getRootProps = _e.getRootProps, getInputProps = _e.getInputProps, isDragActive = _e.isDragActive;\r\n    var zoomOut = function () {\r\n        setContainer({\r\n            width: container.width + 20,\r\n            height: container.height + 20\r\n        });\r\n        setContent({\r\n            width: content.width + 20,\r\n            height: content.height + 20\r\n        });\r\n    };\r\n    var zoomIn = function () {\r\n        if (container.width === 100)\r\n            return;\r\n        setContainer({\r\n            width: container.width - 20,\r\n            height: container.height - 20\r\n        });\r\n        setContent({\r\n            width: content.width - 20,\r\n            height: content.height - 20\r\n        });\r\n    };\r\n    var changeSelectedBtn = function (type) {\r\n        var _a;\r\n        setSelectedBtns(__assign(__assign({}, selectedBtns), (_a = {}, _a[type] = !selectedBtns[type], _a)));\r\n    };\r\n    var availableFilesVisible = availableFiles.filter(function (item) { return item.visible; });\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-show-svg-container\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-show-svg-header-container\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", { className: \"svg-viewer-chrome-plugin-css-style-plugin-header-content\" },\r\n                \"Multiple SVG And GIF Viewer \",\r\n                availableFilesVisible.length ? \"( \" + availableFilesVisible.length + \" )\" : \"\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-tool\" },\r\n                btnArray.map(function (item) {\r\n                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { key: item.type, className: \"svg-viewer-chrome-plugin-css-style-file-type-button\", style: {\r\n                            backgroundColor: selectedBtns[item.type] ? \"#ccc\" : \"#fff\",\r\n                            color: selectedBtns[item.type] ? \"#fff\" : \"#ccc\"\r\n                        }, onClick: function () { return changeSelectedBtn(item.type); }, title: item.title }, item.text);\r\n                }),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { marginRight: 20, cursor: 'pointer' }, onClick: zoomOut, title: \"zoom out\" }, \"+\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { cursor: 'pointer' }, onClick: zoomIn, title: \"zoom in\" }, \"-\"))),\r\n        initState\r\n            ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { title: \"\" + (isDragActive\r\n                    ? 'Drop the files here ...'\r\n                    : 'Drag some files here, or click to select files') },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", __assign({}, getRootProps({ accept: 'image/svg+xml' })),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", __assign({}, getInputProps())),\r\n                    isDragActive ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-init\" }, \"Drop the files here ...\")) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-init\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-init-middle\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { fontSize: '72px' } }, \"+\"),\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { textAlign: 'center', fontWeight: 600, fontSize: 20 } }, \"Drag some files here, or click to select files\")))))))\r\n            : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { title: \"\" + (isDragActive\r\n                    ? 'Drop the files here ...'\r\n                    : availableFilesVisible.length\r\n                        ? \"\"\r\n                        : 'Drag some files here, or click to select files'), className: \"svg-viewer-chrome-plugin-css-style-multi-svg-container-used\" },\r\n                availableFilesVisible.map(function (file, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-svg-items\", style: { width: container.width, height: container.height }, key: index },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-filename\", style: { width: container.width }, title: file.name }, file.name),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", { title: file.name, alt: file.name, style: { width: content.width, height: content.height }, className: \"svg-viewer-chrome-plugin-css-style-react-svg\", src: window.webkitURL.createObjectURL(file) }))); }),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-svg-items svg-viewer-chrome-plugin-css-style-upload-button-content\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", __assign({}, getRootProps()),\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", __assign({}, getInputProps())),\r\n                        isDragActive ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-content-border svg-viewer-chrome-plugin-css-style-drop-file-here\" }, \"Drop the files here ...\")) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-content-border\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-plus\" }, \"+\"),\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-plus-text\" }, \"Drag some files here, or click to select files\")))))))));\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyDropzone);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW4vanMvbWFpbi50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcGx1Z2luL2pzL21haW4udHN4Pzk1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcclxuXHJcbmNvbnN0IGJ0bkFycmF5ID0gW1xyXG4gIHtcclxuICAgIHR5cGU6IFwic3ZnQnRuXCIsXHJcbiAgICB0aXRsZTogXCJzaG93IHN2Z1wiLFxyXG4gICAgdGV4dDogXCJTVkdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJnaWZCdG5cIixcclxuICAgIHRpdGxlOiBcInNob3cgZ2lmXCIsXHJcbiAgICB0ZXh0OiBcIkdJRlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImpwZ0J0blwiLFxyXG4gICAgdGl0bGU6IFwic2hvdyBqcGdcIixcclxuICAgIHRleHQ6IFwiSlBHXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwicG5nQnRuXCIsXHJcbiAgICB0aXRsZTogXCJzaG93IHBuZ1wiLFxyXG4gICAgdGV4dDogXCJQTkdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJibXBCdG5cIixcclxuICAgIHRpdGxlOiBcInNob3cgYm1wXCIsXHJcbiAgICB0ZXh0OiBcIkJNUFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImljb25CdG5cIixcclxuICAgIHRpdGxlOiBcInNob3cgaWNvblwiLFxyXG4gICAgdGV4dDogXCJJQ09OXCJcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgYXZhaWxhYmxlTWltZUFycmF5ID0gWydpbWFnZS9zdmcreG1sJywgJ2ltYWdlL2dpZicsICdpbWFnZS9qcGVnJywgJ2ltYWdlL2JtcCcsICdpbWFnZS94LWljb24nLCAnaW1hZ2UvcG5nJ107XHJcblxyXG5sZXQgaW5pdFN0YXRlID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIE15RHJvcHpvbmUoKSB7XHJcbiAgY29uc3QgW2F2YWlsYWJsZUZpbGVzLCBzZXRBdmFpbGFibGVGaWxlc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEJ0bnMsIHNldFNlbGVjdGVkQnRuc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBzdmdCdG46IHRydWUsXHJcbiAgICBnaWZCdG46IHRydWUsXHJcbiAgICBqcGdCdG46IGZhbHNlLFxyXG4gICAgcG5nQnRuOiBmYWxzZSxcclxuICAgIGJtcEJ0bjogZmFsc2UsXHJcbiAgICBpY29uQnRuOiBmYWxzZVxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb250YWluZXIsIHNldENvbnRhaW5lcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogMjAwLFxyXG4gICAgaGVpZ2h0OiAyMDBcclxuICB9KTtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogMTUwLFxyXG4gICAgaGVpZ2h0OiAxNTBcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpIHtcclxuICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBhbnkpLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IHN2Z0J0biwgZ2lmQnRuLCBqcGdCdG4sIHBuZ0J0biwgYm1wQnRuLCBpY29uQnRuIH0gPSBzZWxlY3RlZEJ0bnM7XHJcbiAgICBhdmFpbGFibGVGaWxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2Uvc3ZnK3htbCcpIHtcclxuICAgICAgICBpdGVtLnZpc2libGUgPSBzdmdCdG4gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2UvZ2lmJykge1xyXG4gICAgICAgIGl0ZW0udmlzaWJsZSA9IGdpZkJ0biA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9qcGVnJykge1xyXG4gICAgICAgIGl0ZW0udmlzaWJsZSA9IGpwZ0J0biA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9ibXAnKSB7XHJcbiAgICAgICAgaXRlbS52aXNpYmxlID0gYm1wQnRuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2ltYWdlL3gtaWNvbicpIHtcclxuICAgICAgICBpdGVtLnZpc2libGUgPSBpY29uQnRuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2ltYWdlL3BuZycpIHtcclxuICAgICAgICBpdGVtLnZpc2libGUgPSBwbmdCdG4gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ2ZpbHRlciBjaGFuZ2VkLCBmaWxlczogJywgYXZhaWxhYmxlRmlsZXMpO1xyXG4gICAgc2V0QXZhaWxhYmxlRmlsZXMoWy4uLmF2YWlsYWJsZUZpbGVzXSk7XHJcbiAgfSwgW3NlbGVjdGVkQnRuc10pO1xyXG5cclxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjayhcclxuICAgIGFjY2VwdGVkRmlsZXMgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgZmlsZXM6ICcsIGFjY2VwdGVkRmlsZXMpO1xyXG4gICAgICBhY2NlcHRlZEZpbGVzID0gYWNjZXB0ZWRGaWxlcy5maWx0ZXIoaXRlbSA9PiBhdmFpbGFibGVNaW1lQXJyYXkuaW5kZXhPZihpdGVtLnR5cGUpICE9PSAtMSk7XHJcbiAgICAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2Uvc3ZnK3htbCcpIHtcclxuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHNlbGVjdGVkQnRucy5zdmdCdG4gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9naWYnKSB7XHJcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSBzZWxlY3RlZEJ0bnMuZ2lmQnRuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2UvanBlZycpIHtcclxuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHNlbGVjdGVkQnRucy5qcGdCdG4gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9ibXAnKSB7XHJcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSBzZWxlY3RlZEJ0bnMuYm1wQnRuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2UveC1pY29uJykge1xyXG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gc2VsZWN0ZWRCdG5zLmljb25CdG4gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9wbmcnKSB7XHJcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSBzZWxlY3RlZEJ0bnMucG5nQnRuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhdmFpbGFibGUgZmlsZXM6ICcsIGFjY2VwdGVkRmlsZXMpO1xyXG4gICAgICBpZiAoYWNjZXB0ZWRGaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICBpbml0U3RhdGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBzZXRBdmFpbGFibGVGaWxlcyhbLi4uYXZhaWxhYmxlRmlsZXMsIC4uLmFjY2VwdGVkRmlsZXNdKTtcclxuICAgIH0sXHJcbiAgICBbYXZhaWxhYmxlRmlsZXNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoeyBvbkRyb3AgfSk7XHJcblxyXG4gIGNvbnN0IHpvb21PdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRDb250YWluZXIoe1xyXG4gICAgICB3aWR0aDogY29udGFpbmVyLndpZHRoICsgMjAsXHJcbiAgICAgIGhlaWdodDogY29udGFpbmVyLmhlaWdodCArIDIwXHJcbiAgICB9KTtcclxuICAgIHNldENvbnRlbnQoe1xyXG4gICAgICB3aWR0aDogY29udGVudC53aWR0aCArIDIwLFxyXG4gICAgICBoZWlnaHQ6IGNvbnRlbnQuaGVpZ2h0ICsgMjBcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHpvb21JbiA9ICgpID0+IHtcclxuICAgIGlmIChjb250YWluZXIud2lkdGggPT09IDEwMCkgcmV0dXJuO1xyXG4gICAgc2V0Q29udGFpbmVyKHtcclxuICAgICAgd2lkdGg6IGNvbnRhaW5lci53aWR0aCAtIDIwLFxyXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5oZWlnaHQgLSAyMFxyXG4gICAgfSk7XHJcbiAgICBzZXRDb250ZW50KHtcclxuICAgICAgd2lkdGg6IGNvbnRlbnQud2lkdGggLSAyMCxcclxuICAgICAgaGVpZ2h0OiBjb250ZW50LmhlaWdodCAtIDIwXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VTZWxlY3RlZEJ0biA9ICh0eXBlOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFNlbGVjdGVkQnRucyh7XHJcbiAgICAgIC4uLnNlbGVjdGVkQnRucyxcclxuICAgICAgW3R5cGVdOiAhc2VsZWN0ZWRCdG5zW3R5cGVdXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhdmFpbGFibGVGaWxlc1Zpc2libGUgPSBhdmFpbGFibGVGaWxlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZpc2libGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtc2hvdy1zdmctY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1zaG93LXN2Zy1oZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtcGx1Z2luLWhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICBNdWx0aXBsZSBTVkcgQW5kIEdJRiBWaWV3ZXIge2F2YWlsYWJsZUZpbGVzVmlzaWJsZS5sZW5ndGggPyBgKCAke2F2YWlsYWJsZUZpbGVzVmlzaWJsZS5sZW5ndGh9IClgIDogXCJcIn1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS10b29sXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkFycmF5Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLWZpbGUtdHlwZS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZEJ0bnNbaXRlbS50eXBlXSA/IFwiI2NjY1wiIDogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBzZWxlY3RlZEJ0bnNbaXRlbS50eXBlXSA/IFwiI2ZmZlwiIDogXCIjY2NjXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTZWxlY3RlZEJ0bihpdGVtLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9PntpdGVtLnRleHR9PC9kaXY+O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogMjAsIGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3pvb21PdXR9IHRpdGxlPVwiem9vbSBvdXRcIj4rPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3pvb21Jbn0gdGl0bGU9XCJ6b29tIGluXCI+LTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2luaXRTdGF0ZVxyXG4gICAgICAgID8gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB0aXRsZT17YCR7aXNEcmFnQWN0aXZlXHJcbiAgICAgICAgICAgICAgPyAnRHJvcCB0aGUgZmlsZXMgaGVyZSAuLi4nXHJcbiAgICAgICAgICAgICAgOiAnRHJhZyBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlcyd9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IGFjY2VwdDogJ2ltYWdlL3N2Zyt4bWwnIH0pfT5cclxuICAgICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgICB7aXNEcmFnQWN0aXZlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXVwbG9hZC1idXR0b24taW5pdFwiPlxyXG4gICAgICAgICAgICAgICAgICBEcm9wIHRoZSBmaWxlcyBoZXJlIC4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6ICg8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtdXBsb2FkLWJ1dHRvbi1pbml0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtdXBsb2FkLWJ1dHRvbi1pbml0LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnNzJweCcgfX0+KzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIERyYWcgc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgICA6ICg8ZGl2XHJcbiAgICAgICAgICB0aXRsZT17YCR7aXNEcmFnQWN0aXZlXHJcbiAgICAgICAgICAgID8gJ0Ryb3AgdGhlIGZpbGVzIGhlcmUgLi4uJ1xyXG4gICAgICAgICAgICA6IGF2YWlsYWJsZUZpbGVzVmlzaWJsZS5sZW5ndGhcclxuICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICA6ICdEcmFnIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzJ31gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1tdWx0aS1zdmctY29udGFpbmVyLXVzZWRcIj5cclxuICAgICAgICAgIHthdmFpbGFibGVGaWxlc1Zpc2libGUubWFwKChmaWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1zdmctaXRlbXNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBjb250YWluZXIud2lkdGgsIGhlaWdodDogY29udGFpbmVyLmhlaWdodCB9fVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGNvbnRhaW5lci53aWR0aCB9fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2ZpbGUubmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtmaWxlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2ZpbGUubmFtZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBjb250ZW50LndpZHRoLCBoZWlnaHQ6IGNvbnRlbnQuaGVpZ2h0IH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXJlYWN0LXN2Z1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9e3dpbmRvdy53ZWJraXRVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtc3ZnLWl0ZW1zIHN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtdXBsb2FkLWJ1dHRvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcygpfT5cclxuICAgICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgICB7aXNEcmFnQWN0aXZlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXVwbG9hZC1idXR0b24tY29udGVudC1ib3JkZXIgc3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1kcm9wLWZpbGUtaGVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICBEcm9wIHRoZSBmaWxlcyBoZXJlIC4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXVwbG9hZC1idXR0b24tY29udGVudC1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtcGx1c1wiPis8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtcGx1cy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEcmFnIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RHJvcHpvbmU7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFNQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQVNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugin/js/main.tsx\n");

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