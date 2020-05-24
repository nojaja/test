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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/dashboard/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/uikit/dist/css/components/notify.css":
/*!***************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/uikit/dist/css/components/notify.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! UIkit 2.27.3 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */\n/* ========================================================================\n   Component: Notify\n ========================================================================== */\n/*\n * Message container for positioning\n */\n.uk-notify {\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  z-index: 1040;\n  box-sizing: border-box;\n  width: 350px;\n}\n/* Position modifiers\n========================================================================== */\n.uk-notify-top-right,\n.uk-notify-bottom-right {\n  left: auto;\n  right: 10px;\n}\n.uk-notify-top-center,\n.uk-notify-bottom-center {\n  left: 50%;\n  margin-left: -175px;\n}\n.uk-notify-bottom-left,\n.uk-notify-bottom-right,\n.uk-notify-bottom-center {\n  top: auto;\n  bottom: 10px;\n}\n/* Responsiveness\n========================================================================== */\n/* Phones portrait and smaller */\n@media (max-width: 479px) {\n  /*\n     * Fit in small screen\n     */\n  .uk-notify {\n    left: 10px;\n    right: 10px;\n    width: auto;\n    margin: 0;\n  }\n}\n/* Sub-object: `uk-notify-message`\n========================================================================== */\n.uk-notify-message {\n  position: relative;\n  margin-bottom: 10px;\n  padding: 15px;\n  background: #444;\n  color: #fff;\n  font-size: 16px;\n  line-height: 22px;\n  cursor: pointer;\n}\n/* Close in notify\n ========================================================================== */\n.uk-notify-message > .uk-close {\n  visibility: hidden;\n  float: right;\n}\n.uk-notify-message:hover > .uk-close {\n  visibility: visible;\n}\n/* Modifier: `uk-notify-message-primary`\n ========================================================================== */\n.uk-notify-message-primary {\n  background: #ebf7fd;\n  color: #2d7091;\n}\n/* Modifier: `uk-notify-message-success`\n ========================================================================== */\n.uk-notify-message-success {\n  background: #f2fae3;\n  color: #659f13;\n}\n/* Modifier: `uk-notify-message-warning`\n ========================================================================== */\n.uk-notify-message-warning {\n  background: #fffceb;\n  color: #e28327;\n}\n/* Modifier: `uk-notify-message-danger`\n ========================================================================== */\n.uk-notify-message-danger {\n  background: #fff1f0;\n  color: #d85030;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/uikit/dist/css/uikit.css":
/*!***************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/uikit/dist/css/uikit.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/fontawesome-webfont.woff2 */ "../node_modules/uikit/dist/fonts/fontawesome-webfont.woff2");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/fontawesome-webfont.woff */ "../node_modules/uikit/dist/fonts/fontawesome-webfont.woff");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/fontawesome-webfont.ttf */ "../node_modules/uikit/dist/fonts/fontawesome-webfont.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "/*! UIkit 2.27.3 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */\n/* ========================================================================\n   Component: Base\n ========================================================================== */\n/*\n * 1. Normalize default `font-family` and set `font-size` to support `rem` units\n * 2. Prevents iOS text size adjust after orientation change, without disabling user zoom\n * 3. Style\n */\nhtml {\n  /* 1 */\n  font: normal 14px / 20px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  background: #fff;\n  color: #444;\n}\n/*\n * Removes default margin.\n */\nbody {\n  margin: 0;\n}\n/* Links\n ========================================================================== */\n/*\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background: transparent;\n}\n/*\n * Improve readability of focused elements when they are also in an active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/*\n * Style\n */\na,\n.uk-link {\n  color: #07D;\n  text-decoration: none;\n  cursor: pointer;\n}\na:hover,\n.uk-link:hover {\n  color: #059;\n  text-decoration: underline;\n}\n/* Text-level semantics\n ========================================================================== */\n/*\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/*\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/*\n * 1. Address odd `em`-unit font size rendering in all browsers.\n * 2. Consolas has a better baseline in running text compared to `Courier`\n */\n:not(pre) > code,\n:not(pre) > kbd,\n:not(pre) > samp {\n  /* 1 */\n  font-size: 12px;\n  /* 2 */\n  font-family: Consolas, monospace, serif;\n  /* 3 */\n  color: #D05;\n  white-space: nowrap;\n}\n/*\n * Emphasize\n */\nem {\n  color: #D05;\n}\n/*\n * Insert\n */\nins {\n  background: #ffa;\n  color: #444;\n  text-decoration: none;\n}\n/*\n * Mark\n * Note: Addresses styling not present in IE 8/9.\n */\nmark {\n  background: #ffa;\n  color: #444;\n}\n/*\n * Quote\n */\nq {\n  font-style: italic;\n}\n/*\n * Addresses inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/*\n * Prevents `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n ========================================================================== */\n/*\n * Remove the gap between embedded content and the bottom of their containers.\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Responsiveness\n * 1. Sets a maximum width relative to the parent and auto scales the height\n * 2. Corrects `max-width` behavior if padding and border are used\n */\naudio,\ncanvas,\nimg,\nsvg,\nvideo {\n  /* 1 */\n  max-width: 100%;\n  height: auto;\n  /* 2 */\n  box-sizing: border-box;\n}\n/*\n * Preserve original dimensions\n */\n.uk-img-preserve,\n.uk-img-preserve audio,\n.uk-img-preserve canvas,\n.uk-img-preserve img,\n.uk-img-preserve svg,\n.uk-img-preserve video {\n  max-width: none;\n}\n/*\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/*\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Block elements\n ========================================================================== */\n/*\n * Reset margin\n */\nblockquote,\nfigure {\n  margin: 0;\n}\n/*\n * Margins\n */\np,\nul,\nol,\ndl,\nblockquote,\npre,\naddress,\nfieldset,\nfigure {\n  margin: 0 0 15px 0;\n}\n* + p,\n* + ul,\n* + ol,\n* + dl,\n* + blockquote,\n* + pre,\n* + address,\n* + fieldset,\n* + figure {\n  margin-top: 15px;\n}\n/* Headings\n ========================================================================== */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0 0 15px 0;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  color: #444;\n  text-transform: none;\n}\n/*\n * Margins\n */\n* + h1,\n* + h2,\n* + h3,\n* + h4,\n* + h5,\n* + h6 {\n  margin-top: 25px;\n}\n/*\n * Sizes\n */\nh1,\n.uk-h1 {\n  font-size: 36px;\n  line-height: 42px;\n}\nh2,\n.uk-h2 {\n  font-size: 24px;\n  line-height: 30px;\n}\nh3,\n.uk-h3 {\n  font-size: 18px;\n  line-height: 24px;\n}\nh4,\n.uk-h4 {\n  font-size: 16px;\n  line-height: 22px;\n}\nh5,\n.uk-h5 {\n  font-size: 14px;\n  line-height: 20px;\n}\nh6,\n.uk-h6 {\n  font-size: 12px;\n  line-height: 18px;\n}\n/* Lists\n ========================================================================== */\nul,\nol {\n  padding-left: 30px;\n}\n/*\n * Reset margin for nested lists\n */\nul > li > ul,\nul > li > ol,\nol > li > ol,\nol > li > ul {\n  margin: 0;\n}\n/* Description lists\n ========================================================================== */\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n/* Horizontal rules\n ========================================================================== */\n/*\n * 1. Address differences between Firefox and other browsers.\n * 2. Style\n */\nhr {\n  /* 1 */\n  box-sizing: content-box;\n  height: 0;\n  /* 2 */\n  margin: 15px 0;\n  border: 0;\n  border-top: 1px solid #ddd;\n}\n/* Address\n ========================================================================== */\naddress {\n  font-style: normal;\n}\n/* Blockquotes\n ========================================================================== */\nblockquote {\n  padding-left: 15px;\n  border-left: 5px solid #ddd;\n  font-size: 16px;\n  line-height: 22px;\n  font-style: italic;\n}\n/* Preformatted text\n ========================================================================== */\n/*\n * 1. Contain overflow in all browsers.\n */\npre {\n  padding: 10px;\n  background: #f5f5f5;\n  font: 12px / 18px Consolas, monospace, serif;\n  color: #444;\n  -moz-tab-size: 4;\n  tab-size: 4;\n  /* 1 */\n  overflow: auto;\n}\n/* Selection pseudo-element\n ========================================================================== */\n::-moz-selection {\n  background: #39f;\n  color: #fff;\n  text-shadow: none;\n}\n::selection {\n  background: #39f;\n  color: #fff;\n  text-shadow: none;\n}\n/* HTML5 elements\n ========================================================================== */\n/*\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/*\n * Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/*\n * Prevent displaying `audio` without controls in Chrome, Safari and Opera\n */\naudio:not([controls]) {\n  display: none;\n}\n/*\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Iframe\n ========================================================================== */\niframe {\n  border: 0;\n}\n/* Fix viewport for IE10 snap mode\n ========================================================================== */\n@media screen and (max-width: 400px) {\n  @-ms-viewport {\n    width: device-width;\n  }\n}\n/* ========================================================================\n   Component: Grid\n ========================================================================== */\n/*\n * 1. Makes grid more robust so that it can be used with other block elements like lists\n */\n.uk-grid {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  /* 1 */\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n/*\n * DEPRECATED\n * Micro clearfix\n * Can't use `table` because it creates a 1px gap when it becomes a flex item, only in Webkit\n */\n.uk-grid:before,\n.uk-grid:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n}\n.uk-grid:after {\n  clear: both;\n}\n/*\n * Grid cell\n * 1. Space is allocated solely based on content dimensions\n * 2. Makes grid more robust so that it can be used with other block elements\n * 3. DEPRECATED Using `float` to support IE9\n */\n.uk-grid > * {\n  /* 1 */\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  float: left;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-grid > * > :last-child {\n  margin-bottom: 0;\n}\n/* Grid gutter\n ========================================================================== */\n/*\n * Default gutter\n */\n/* Horizontal */\n.uk-grid {\n  margin-left: -25px;\n}\n.uk-grid > * {\n  padding-left: 25px;\n}\n/* Vertical */\n.uk-grid + .uk-grid,\n.uk-grid-margin,\n.uk-grid > * > .uk-panel + .uk-panel {\n  margin-top: 25px;\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  /* Horizontal */\n  .uk-grid {\n    margin-left: -35px;\n  }\n  .uk-grid > * {\n    padding-left: 35px;\n  }\n  /* Vertical */\n  .uk-grid + .uk-grid,\n  .uk-grid-margin,\n  .uk-grid > * > .uk-panel + .uk-panel {\n    margin-top: 35px;\n  }\n}\n/*\n * Collapse gutter\n */\n/* Horizontal */\n.uk-grid-collapse {\n  margin-left: 0;\n}\n.uk-grid-collapse > * {\n  padding-left: 0;\n}\n/* Vertical */\n.uk-grid-collapse + .uk-grid-collapse,\n.uk-grid-collapse > .uk-grid-margin,\n.uk-grid-collapse > * > .uk-panel + .uk-panel {\n  margin-top: 0;\n}\n/*\n * Small gutter\n */\n/* Horizontal */\n.uk-grid-small {\n  margin-left: -10px;\n}\n.uk-grid-small > * {\n  padding-left: 10px;\n}\n/* Vertical */\n.uk-grid-small + .uk-grid-small,\n.uk-grid-small > .uk-grid-margin,\n.uk-grid-small > * > .uk-panel + .uk-panel {\n  margin-top: 10px;\n}\n/*\n * Medium gutter\n */\n/* Horizontal */\n.uk-grid-medium {\n  margin-left: -25px;\n}\n.uk-grid-medium > * {\n  padding-left: 25px;\n}\n/* Vertical */\n.uk-grid-medium + .uk-grid-medium,\n.uk-grid-medium > .uk-grid-margin,\n.uk-grid-medium > * > .uk-panel + .uk-panel {\n  margin-top: 25px;\n}\n/*\n * Large gutter\n */\n/* Large screen and bigger */\n@media (min-width: 960px) {\n  /* Horizontal */\n  .uk-grid-large {\n    margin-left: -35px;\n  }\n  .uk-grid-large > * {\n    padding-left: 35px;\n  }\n  /* Vertical */\n  .uk-grid-large + .uk-grid-large,\n  .uk-grid-large-margin,\n  .uk-grid-large > * > .uk-panel + .uk-panel {\n    margin-top: 35px;\n  }\n}\n/* Extra Large screens */\n@media (min-width: 1220px) {\n  /* Horizontal */\n  .uk-grid-large {\n    margin-left: -50px;\n  }\n  .uk-grid-large > * {\n    padding-left: 50px;\n  }\n  /* Vertical */\n  .uk-grid-large + .uk-grid-large,\n  .uk-grid-large-margin,\n  .uk-grid-large > * > .uk-panel + .uk-panel {\n    margin-top: 50px;\n  }\n}\n/* Modifier: `uk-grid-divider`\n ========================================================================== */\n/*\n * Horizontal divider\n * Only works with the default gutter. Does not work with gutter collapse, small or large.\n * Does not work with `uk-push-*`, `uk-pull-*` and not if the columns float into the next row.\n */\n.uk-grid-divider:not(:empty) {\n  margin-left: -25px;\n  margin-right: -25px;\n}\n.uk-grid-divider > * {\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.uk-grid-divider > [class*='uk-width-1-']:not(.uk-width-1-1):nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-2-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-3-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-4-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-5-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-6-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-7-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-8-']:nth-child(n+2),\n.uk-grid-divider > [class*='uk-width-9-']:nth-child(n+2) {\n  border-left: 1px solid #ddd;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-grid-divider > [class*='uk-width-medium-']:not(.uk-width-medium-1-1):nth-child(n+2) {\n    border-left: 1px solid #ddd;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-grid-divider > [class*='uk-width-large-']:not(.uk-width-large-1-1):nth-child(n+2) {\n    border-left: 1px solid #ddd;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  /*\n     * Large gutter\n     */\n  .uk-grid-divider:not(:empty) {\n    margin-left: -35px;\n    margin-right: -35px;\n  }\n  .uk-grid-divider > * {\n    padding-left: 35px;\n    padding-right: 35px;\n  }\n  .uk-grid-divider:empty {\n    margin-top: 35px;\n    margin-bottom: 35px;\n  }\n}\n/*\n * Vertical divider\n */\n.uk-grid-divider:empty {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  border-top: 1px solid #ddd;\n}\n/* Match panels in grids\n ========================================================================== */\n/*\n * 1. Behave like a block element\n */\n.uk-grid-match > * {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  /* 1 */\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.uk-grid-match > * > * {\n  /* 1 */\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n  box-sizing: border-box;\n  width: 100%;\n}\n/* Even grid cell widths\n ========================================================================== */\n[class*='uk-grid-width'] > * {\n  box-sizing: border-box;\n  width: 100%;\n}\n.uk-grid-width-1-2 > * {\n  width: 50%;\n}\n.uk-grid-width-1-3 > * {\n  width: 33.333%;\n}\n.uk-grid-width-1-4 > * {\n  width: 25%;\n}\n.uk-grid-width-1-5 > * {\n  width: 20%;\n}\n.uk-grid-width-1-6 > * {\n  width: 16.666%;\n}\n.uk-grid-width-1-10 > * {\n  width: 10%;\n}\n.uk-grid-width-auto > * {\n  width: auto;\n}\n/* Phone landscape and bigger */\n@media (min-width: 480px) {\n  .uk-grid-width-small-1-1 > * {\n    width: 100%;\n  }\n  .uk-grid-width-small-1-2 > * {\n    width: 50%;\n  }\n  .uk-grid-width-small-1-3 > * {\n    width: 33.333%;\n  }\n  .uk-grid-width-small-1-4 > * {\n    width: 25%;\n  }\n  .uk-grid-width-small-1-5 > * {\n    width: 20%;\n  }\n  .uk-grid-width-small-1-6 > * {\n    width: 16.666%;\n  }\n  .uk-grid-width-small-1-10 > * {\n    width: 10%;\n  }\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-grid-width-medium-1-1 > * {\n    width: 100%;\n  }\n  .uk-grid-width-medium-1-2 > * {\n    width: 50%;\n  }\n  .uk-grid-width-medium-1-3 > * {\n    width: 33.333%;\n  }\n  .uk-grid-width-medium-1-4 > * {\n    width: 25%;\n  }\n  .uk-grid-width-medium-1-5 > * {\n    width: 20%;\n  }\n  .uk-grid-width-medium-1-6 > * {\n    width: 16.666%;\n  }\n  .uk-grid-width-medium-1-10 > * {\n    width: 10%;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-grid-width-large-1-1 > * {\n    width: 100%;\n  }\n  .uk-grid-width-large-1-2 > * {\n    width: 50%;\n  }\n  .uk-grid-width-large-1-3 > * {\n    width: 33.333%;\n  }\n  .uk-grid-width-large-1-4 > * {\n    width: 25%;\n  }\n  .uk-grid-width-large-1-5 > * {\n    width: 20%;\n  }\n  .uk-grid-width-large-1-6 > * {\n    width: 16.666%;\n  }\n  .uk-grid-width-large-1-10 > * {\n    width: 10%;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-grid-width-xlarge-1-1 > * {\n    width: 100%;\n  }\n  .uk-grid-width-xlarge-1-2 > * {\n    width: 50%;\n  }\n  .uk-grid-width-xlarge-1-3 > * {\n    width: 33.333%;\n  }\n  .uk-grid-width-xlarge-1-4 > * {\n    width: 25%;\n  }\n  .uk-grid-width-xlarge-1-5 > * {\n    width: 20%;\n  }\n  .uk-grid-width-xlarge-1-6 > * {\n    width: 16.666%;\n  }\n  .uk-grid-width-xlarge-1-10 > * {\n    width: 10%;\n  }\n}\n/* Sub-objects: `uk-width-*`\n ========================================================================== */\n[class*='uk-width'] {\n  box-sizing: border-box;\n  width: 100%;\n}\n/*\n * Widths\n */\n/* Whole */\n.uk-width-1-1 {\n  width: 100%;\n}\n/* Halves */\n.uk-width-1-2,\n.uk-width-2-4,\n.uk-width-3-6,\n.uk-width-5-10 {\n  width: 50%;\n}\n/* Thirds */\n.uk-width-1-3,\n.uk-width-2-6 {\n  width: 33.333%;\n}\n.uk-width-2-3,\n.uk-width-4-6 {\n  width: 66.666%;\n}\n/* Quarters */\n.uk-width-1-4 {\n  width: 25%;\n}\n.uk-width-3-4 {\n  width: 75%;\n}\n/* Fifths */\n.uk-width-1-5,\n.uk-width-2-10 {\n  width: 20%;\n}\n.uk-width-2-5,\n.uk-width-4-10 {\n  width: 40%;\n}\n.uk-width-3-5,\n.uk-width-6-10 {\n  width: 60%;\n}\n.uk-width-4-5,\n.uk-width-8-10 {\n  width: 80%;\n}\n/* Sixths */\n.uk-width-1-6 {\n  width: 16.666%;\n}\n.uk-width-5-6 {\n  width: 83.333%;\n}\n/* Tenths */\n.uk-width-1-10 {\n  width: 10%;\n}\n.uk-width-3-10 {\n  width: 30%;\n}\n.uk-width-7-10 {\n  width: 70%;\n}\n.uk-width-9-10 {\n  width: 90%;\n}\n/* Phone landscape and bigger */\n@media (min-width: 480px) {\n  /* Whole */\n  .uk-width-small-1-1 {\n    width: 100%;\n  }\n  /* Halves */\n  .uk-width-small-1-2,\n  .uk-width-small-2-4,\n  .uk-width-small-3-6,\n  .uk-width-small-5-10 {\n    width: 50%;\n  }\n  /* Thirds */\n  .uk-width-small-1-3,\n  .uk-width-small-2-6 {\n    width: 33.333%;\n  }\n  .uk-width-small-2-3,\n  .uk-width-small-4-6 {\n    width: 66.666%;\n  }\n  /* Quarters */\n  .uk-width-small-1-4 {\n    width: 25%;\n  }\n  .uk-width-small-3-4 {\n    width: 75%;\n  }\n  /* Fifths */\n  .uk-width-small-1-5,\n  .uk-width-small-2-10 {\n    width: 20%;\n  }\n  .uk-width-small-2-5,\n  .uk-width-small-4-10 {\n    width: 40%;\n  }\n  .uk-width-small-3-5,\n  .uk-width-small-6-10 {\n    width: 60%;\n  }\n  .uk-width-small-4-5,\n  .uk-width-small-8-10 {\n    width: 80%;\n  }\n  /* Sixths */\n  .uk-width-small-1-6 {\n    width: 16.666%;\n  }\n  .uk-width-small-5-6 {\n    width: 83.333%;\n  }\n  /* Tenths */\n  .uk-width-small-1-10 {\n    width: 10%;\n  }\n  .uk-width-small-3-10 {\n    width: 30%;\n  }\n  .uk-width-small-7-10 {\n    width: 70%;\n  }\n  .uk-width-small-9-10 {\n    width: 90%;\n  }\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  /* Whole */\n  .uk-width-medium-1-1 {\n    width: 100%;\n  }\n  /* Halves */\n  .uk-width-medium-1-2,\n  .uk-width-medium-2-4,\n  .uk-width-medium-3-6,\n  .uk-width-medium-5-10 {\n    width: 50%;\n  }\n  /* Thirds */\n  .uk-width-medium-1-3,\n  .uk-width-medium-2-6 {\n    width: 33.333%;\n  }\n  .uk-width-medium-2-3,\n  .uk-width-medium-4-6 {\n    width: 66.666%;\n  }\n  /* Quarters */\n  .uk-width-medium-1-4 {\n    width: 25%;\n  }\n  .uk-width-medium-3-4 {\n    width: 75%;\n  }\n  /* Fifths */\n  .uk-width-medium-1-5,\n  .uk-width-medium-2-10 {\n    width: 20%;\n  }\n  .uk-width-medium-2-5,\n  .uk-width-medium-4-10 {\n    width: 40%;\n  }\n  .uk-width-medium-3-5,\n  .uk-width-medium-6-10 {\n    width: 60%;\n  }\n  .uk-width-medium-4-5,\n  .uk-width-medium-8-10 {\n    width: 80%;\n  }\n  /* Sixths */\n  .uk-width-medium-1-6 {\n    width: 16.666%;\n  }\n  .uk-width-medium-5-6 {\n    width: 83.333%;\n  }\n  /* Tenths */\n  .uk-width-medium-1-10 {\n    width: 10%;\n  }\n  .uk-width-medium-3-10 {\n    width: 30%;\n  }\n  .uk-width-medium-7-10 {\n    width: 70%;\n  }\n  .uk-width-medium-9-10 {\n    width: 90%;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  /* Whole */\n  .uk-width-large-1-1 {\n    width: 100%;\n  }\n  /* Halves */\n  .uk-width-large-1-2,\n  .uk-width-large-2-4,\n  .uk-width-large-3-6,\n  .uk-width-large-5-10 {\n    width: 50%;\n  }\n  /* Thirds */\n  .uk-width-large-1-3,\n  .uk-width-large-2-6 {\n    width: 33.333%;\n  }\n  .uk-width-large-2-3,\n  .uk-width-large-4-6 {\n    width: 66.666%;\n  }\n  /* Quarters */\n  .uk-width-large-1-4 {\n    width: 25%;\n  }\n  .uk-width-large-3-4 {\n    width: 75%;\n  }\n  /* Fifths */\n  .uk-width-large-1-5,\n  .uk-width-large-2-10 {\n    width: 20%;\n  }\n  .uk-width-large-2-5,\n  .uk-width-large-4-10 {\n    width: 40%;\n  }\n  .uk-width-large-3-5,\n  .uk-width-large-6-10 {\n    width: 60%;\n  }\n  .uk-width-large-4-5,\n  .uk-width-large-8-10 {\n    width: 80%;\n  }\n  /* Sixths */\n  .uk-width-large-1-6 {\n    width: 16.666%;\n  }\n  .uk-width-large-5-6 {\n    width: 83.333%;\n  }\n  /* Tenths */\n  .uk-width-large-1-10 {\n    width: 10%;\n  }\n  .uk-width-large-3-10 {\n    width: 30%;\n  }\n  .uk-width-large-7-10 {\n    width: 70%;\n  }\n  .uk-width-large-9-10 {\n    width: 90%;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  /* Whole */\n  .uk-width-xlarge-1-1 {\n    width: 100%;\n  }\n  /* Halves */\n  .uk-width-xlarge-1-2,\n  .uk-width-xlarge-2-4,\n  .uk-width-xlarge-3-6,\n  .uk-width-xlarge-5-10 {\n    width: 50%;\n  }\n  /* Thirds */\n  .uk-width-xlarge-1-3,\n  .uk-width-xlarge-2-6 {\n    width: 33.333%;\n  }\n  .uk-width-xlarge-2-3,\n  .uk-width-xlarge-4-6 {\n    width: 66.666%;\n  }\n  /* Quarters */\n  .uk-width-xlarge-1-4 {\n    width: 25%;\n  }\n  .uk-width-xlarge-3-4 {\n    width: 75%;\n  }\n  /* Fifths */\n  .uk-width-xlarge-1-5,\n  .uk-width-xlarge-2-10 {\n    width: 20%;\n  }\n  .uk-width-xlarge-2-5,\n  .uk-width-xlarge-4-10 {\n    width: 40%;\n  }\n  .uk-width-xlarge-3-5,\n  .uk-width-xlarge-6-10 {\n    width: 60%;\n  }\n  .uk-width-xlarge-4-5,\n  .uk-width-xlarge-8-10 {\n    width: 80%;\n  }\n  /* Sixths */\n  .uk-width-xlarge-1-6 {\n    width: 16.666%;\n  }\n  .uk-width-xlarge-5-6 {\n    width: 83.333%;\n  }\n  /* Tenths */\n  .uk-width-xlarge-1-10 {\n    width: 10%;\n  }\n  .uk-width-xlarge-3-10 {\n    width: 30%;\n  }\n  .uk-width-xlarge-7-10 {\n    width: 70%;\n  }\n  .uk-width-xlarge-9-10 {\n    width: 90%;\n  }\n}\n/* Sub-object: `uk-push-*` and `uk-pull-*`\n ========================================================================== */\n/*\n * Source ordering\n * Works only with `uk-width-medium-*`\n */\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  [class*='uk-push-'],\n  [class*='uk-pull-'] {\n    position: relative;\n  }\n  /*\n     * Push\n     */\n  /* Halves */\n  .uk-push-1-2,\n  .uk-push-2-4,\n  .uk-push-3-6,\n  .uk-push-5-10 {\n    left: 50%;\n  }\n  /* Thirds */\n  .uk-push-1-3,\n  .uk-push-2-6 {\n    left: 33.333%;\n  }\n  .uk-push-2-3,\n  .uk-push-4-6 {\n    left: 66.666%;\n  }\n  /* Quarters */\n  .uk-push-1-4 {\n    left: 25%;\n  }\n  .uk-push-3-4 {\n    left: 75%;\n  }\n  /* Fifths */\n  .uk-push-1-5,\n  .uk-push-2-10 {\n    left: 20%;\n  }\n  .uk-push-2-5,\n  .uk-push-4-10 {\n    left: 40%;\n  }\n  .uk-push-3-5,\n  .uk-push-6-10 {\n    left: 60%;\n  }\n  .uk-push-4-5,\n  .uk-push-8-10 {\n    left: 80%;\n  }\n  /* Sixths */\n  .uk-push-1-6 {\n    left: 16.666%;\n  }\n  .uk-push-5-6 {\n    left: 83.333%;\n  }\n  /* Tenths */\n  .uk-push-1-10 {\n    left: 10%;\n  }\n  .uk-push-3-10 {\n    left: 30%;\n  }\n  .uk-push-7-10 {\n    left: 70%;\n  }\n  .uk-push-9-10 {\n    left: 90%;\n  }\n  /*\n     * Pull\n     */\n  /* Halves */\n  .uk-pull-1-2,\n  .uk-pull-2-4,\n  .uk-pull-3-6,\n  .uk-pull-5-10 {\n    left: -50%;\n  }\n  /* Thirds */\n  .uk-pull-1-3,\n  .uk-pull-2-6 {\n    left: -33.333%;\n  }\n  .uk-pull-2-3,\n  .uk-pull-4-6 {\n    left: -66.666%;\n  }\n  /* Quarters */\n  .uk-pull-1-4 {\n    left: -25%;\n  }\n  .uk-pull-3-4 {\n    left: -75%;\n  }\n  /* Fifths */\n  .uk-pull-1-5,\n  .uk-pull-2-10 {\n    left: -20%;\n  }\n  .uk-pull-2-5,\n  .uk-pull-4-10 {\n    left: -40%;\n  }\n  .uk-pull-3-5,\n  .uk-pull-6-10 {\n    left: -60%;\n  }\n  .uk-pull-4-5,\n  .uk-pull-8-10 {\n    left: -80%;\n  }\n  /* Sixths */\n  .uk-pull-1-6 {\n    left: -16.666%;\n  }\n  .uk-pull-5-6 {\n    left: -83.333%;\n  }\n  /* Tenths */\n  .uk-pull-1-10 {\n    left: -10%;\n  }\n  .uk-pull-3-10 {\n    left: -30%;\n  }\n  .uk-pull-7-10 {\n    left: -70%;\n  }\n  .uk-pull-9-10 {\n    left: -90%;\n  }\n}\n/* ========================================================================\n   Component: Panel\n ========================================================================== */\n/*\n * 1. Needed for `a` elements\n * 2. Create position context for badges\n */\n.uk-panel {\n  /* 1 */\n  display: block;\n  /* 2 */\n  position: relative;\n}\n/*\n * Allow panels to be anchors\n */\n.uk-panel,\n.uk-panel:hover {\n  text-decoration: none;\n}\n/*\n * Micro clearfix to make panels more robust\n */\n.uk-panel:before,\n.uk-panel:after {\n  content: \"\";\n  display: table;\n}\n.uk-panel:after {\n  clear: both;\n}\n/*\n * Remove margin from the last-child if not `uk-widget-title`\n */\n.uk-panel > :not(.uk-panel-title):last-child {\n  margin-bottom: 0;\n}\n/* Sub-object: `uk-panel-title`\n ========================================================================== */\n.uk-panel-title {\n  margin-top: 0;\n  margin-bottom: 15px;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: normal;\n  text-transform: none;\n  color: #444;\n}\n/* Sub-object: `uk-panel-badge`\n ========================================================================== */\n.uk-panel-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n}\n/* Sub-object: `uk-panel-teaser`\n ========================================================================== */\n.uk-panel-teaser {\n  margin-bottom: 15px;\n}\n/* Sub-object: `uk-panel-body`\n ========================================================================== */\n.uk-panel-body {\n  padding: 15px;\n}\n/* Modifier: `uk-panel-box`\n ========================================================================== */\n.uk-panel-box {\n  padding: 15px;\n  background: #f5f5f5;\n  color: #444;\n}\n.uk-panel-box-hover:hover {\n  color: #444;\n}\n.uk-panel-box .uk-panel-title {\n  color: #444;\n}\n.uk-panel-box .uk-panel-badge {\n  top: 10px;\n  right: 10px;\n}\n.uk-panel-box > .uk-panel-teaser {\n  margin-top: -15px;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n/*\n * Nav in panel\n */\n.uk-panel-box > .uk-nav-side {\n  margin: 0 -15px;\n}\n/*\n * Sub-modifier: `uk-panel-box-primary`\n */\n.uk-panel-box-primary {\n  background-color: #ebf7fd;\n  color: #2d7091;\n}\n.uk-panel-box-primary-hover:hover {\n  color: #2d7091;\n}\n.uk-panel-box-primary .uk-panel-title {\n  color: #2d7091;\n}\n/*\n * Sub-modifier: `uk-panel-box-secondary`\n */\n.uk-panel-box-secondary {\n  background-color: #eee;\n  color: #444;\n}\n.uk-panel-box-secondary-hover:hover {\n  color: #444;\n}\n.uk-panel-box-secondary .uk-panel-title {\n  color: #444;\n}\n/* Modifier: `uk-panel-hover`\n ========================================================================== */\n.uk-panel-hover {\n  padding: 15px;\n  color: #444;\n}\n.uk-panel-hover:hover {\n  background: #f5f5f5;\n  color: #444;\n}\n.uk-panel-hover .uk-panel-badge {\n  top: 10px;\n  right: 10px;\n}\n.uk-panel-hover > .uk-panel-teaser {\n  margin-top: -15px;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n/* Modifier: `uk-panel-header`\n ========================================================================== */\n.uk-panel-header .uk-panel-title {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ddd;\n  color: #444;\n}\n/* Modifier: `uk-panel-space`\n ========================================================================== */\n.uk-panel-space {\n  padding: 30px;\n}\n.uk-panel-space .uk-panel-badge {\n  top: 30px;\n  right: 30px;\n}\n/* Modifier: `uk-panel-divider`\n ========================================================================== */\n.uk-panel + .uk-panel-divider {\n  margin-top: 50px !important;\n}\n.uk-panel + .uk-panel-divider:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -25px;\n  left: 0;\n  right: 0;\n  border-top: 1px solid #ddd;\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-panel + .uk-panel-divider {\n    margin-top: 70px !important;\n  }\n  .uk-panel + .uk-panel-divider:before {\n    top: -35px;\n  }\n}\n/* ========================================================================\n   Component: Block\n ========================================================================== */\n.uk-block {\n  position: relative;\n  box-sizing: border-box;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/* Phone landscape and bigger */\n@media (min-width: 768px) {\n  .uk-block {\n    padding-top: 50px;\n    padding-bottom: 50px;\n  }\n}\n/*\n * Micro clearfix to make blocks more robust\n */\n.uk-block:before,\n.uk-block:after {\n  content: \"\";\n  display: table;\n}\n.uk-block:after {\n  clear: both;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-block > :last-child {\n  margin-bottom: 0;\n}\n/* Padding Modifier\n ========================================================================== */\n/*\n * Large padding\n */\n.uk-block-large {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/* Tablets and bigger */\n@media (min-width: 768px) {\n  .uk-block-large {\n    padding-top: 50px;\n    padding-bottom: 50px;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-block-large {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n}\n/* Color Modifier\n ========================================================================== */\n/*\n * Default\n */\n.uk-block-default {\n  background: #fff;\n}\n/*\n * Muted\n */\n.uk-block-muted {\n  background: #f9f9f9;\n}\n/*\n * Primary\n */\n.uk-block-primary {\n  background: #00a8e6;\n}\n/*\n * Secondary\n */\n.uk-block-secondary {\n  background: #222;\n}\n/*\n     * Adjust padding between equal colored blocks\n     */\n.uk-block-default + .uk-block-default,\n.uk-block-muted + .uk-block-muted,\n.uk-block-primary + .uk-block-primary,\n.uk-block-secondary + .uk-block-secondary {\n  padding-top: 0;\n}\n/* ========================================================================\n   Component: Article\n ========================================================================== */\n/*\n * Micro clearfix to make articles more robust\n */\n.uk-article:before,\n.uk-article:after {\n  content: \"\";\n  display: table;\n}\n.uk-article:after {\n  clear: both;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-article > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Vertical gutter for articles\n */\n.uk-article + .uk-article {\n  margin-top: 25px;\n}\n/* Sub-object `uk-article-title`\n ========================================================================== */\n.uk-article-title {\n  font-size: 36px;\n  line-height: 42px;\n  font-weight: normal;\n  text-transform: none;\n}\n.uk-article-title a {\n  color: inherit;\n  text-decoration: none;\n}\n/* Sub-object `uk-article-meta`\n ========================================================================== */\n.uk-article-meta {\n  font-size: 12px;\n  line-height: 18px;\n  color: #999;\n}\n/* Sub-object `uk-article-lead`\n ========================================================================== */\n.uk-article-lead {\n  color: #444;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: normal;\n}\n/* Sub-object `uk-article-divider`\n ========================================================================== */\n.uk-article-divider {\n  margin-bottom: 25px;\n  border-color: #ddd;\n}\n* + .uk-article-divider {\n  margin-top: 25px;\n}\n/* ========================================================================\n   Component: Comment\n ========================================================================== */\n/* Sub-object `uk-comment-header`\n ========================================================================== */\n.uk-comment-header {\n  margin-bottom: 15px;\n}\n/*\n * Micro clearfix\n */\n.uk-comment-header:before,\n.uk-comment-header:after {\n  content: \"\";\n  display: table;\n}\n.uk-comment-header:after {\n  clear: both;\n}\n/* Sub-object `uk-comment-avatar`\n ========================================================================== */\n.uk-comment-avatar {\n  margin-right: 15px;\n  float: left;\n}\n/* Sub-object `uk-comment-title`\n ========================================================================== */\n.uk-comment-title {\n  margin: 5px 0 0 0;\n  font-size: 16px;\n  line-height: 22px;\n}\n/* Sub-object `uk-comment-meta`\n ========================================================================== */\n.uk-comment-meta {\n  margin: 2px 0 0 0;\n  font-size: 11px;\n  line-height: 16px;\n  color: #999;\n}\n/* Sub-object `uk-comment-body`\n ========================================================================== */\n/*\n * Remove margin from the last-child\n */\n.uk-comment-body > :last-child {\n  margin-bottom: 0;\n}\n/* Sub-object `uk-comment-list`\n ========================================================================== */\n.uk-comment-list {\n  padding: 0;\n  list-style: none;\n}\n.uk-comment-list .uk-comment + ul {\n  margin: 15px 0 0 0;\n  list-style: none;\n}\n.uk-comment-list > li:nth-child(n+2),\n.uk-comment-list .uk-comment + ul > li:nth-child(n+2) {\n  margin-top: 15px;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-comment-list .uk-comment + ul {\n    padding-left: 100px;\n  }\n}\n/* Modifier `uk-comment-primary`\n ========================================================================== */\n/* ========================================================================\n   Component: Cover\n ========================================================================== */\n/*\n * Background image always covers and centers its element\n */\n.uk-cover-background {\n  background-position: 50% 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*\n * Emulates image cover, works with video and image elements\n * 1. Parent container which clips resized object\n * 2. Resizes the object to always covers its container\n * 3. Reset the responsive image CSS\n * 4. Center object\n */\n/* 1 */\n.uk-cover {\n  overflow: hidden;\n}\n.uk-cover-object {\n  /* 2 */\n  width: auto;\n  height: auto;\n  min-width: 100%;\n  min-height: 100%;\n  /* 3 */\n  max-width: none;\n  /* 4 */\n  position: relative;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n/*\n * To center iframes use `data-uk-cover` JavaScript\n */\n[data-uk-cover] {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n/* ========================================================================\n   Component: Nav\n ========================================================================== */\n.uk-nav,\n.uk-nav ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n/*\n * Items\n */\n.uk-nav li > a {\n  display: block;\n  text-decoration: none;\n}\n.uk-nav > li > a {\n  padding: 5px 15px;\n}\n/*\n * Nested items\n */\n.uk-nav ul {\n  padding-left: 15px;\n}\n.uk-nav ul a {\n  padding: 2px 0;\n}\n/*\n * Item subtitle\n */\n.uk-nav li > a > div {\n  font-size: 12px;\n  line-height: 18px;\n}\n/* Sub-object: `uk-nav-header`\n ========================================================================== */\n.uk-nav-header {\n  padding: 5px 15px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n}\n.uk-nav-header:not(:first-child) {\n  margin-top: 15px;\n}\n/* Sub-object: `uk-nav-divider`\n ========================================================================== */\n.uk-nav-divider {\n  margin: 9px 15px;\n}\n/* Sub-object: `uk-nav-sub`\n ========================================================================== */\n/*\n * `ul` needed for higher specificity to override padding\n */\nul.uk-nav-sub {\n  padding: 5px 0 5px 15px;\n}\n/* Modifier: `uk-nav-parent-icon`\n ========================================================================== */\n.uk-nav-parent-icon > .uk-parent > a:after {\n  content: \"\\f104\";\n  width: 20px;\n  margin-right: -10px;\n  float: right;\n  font-family: FontAwesome;\n  text-align: center;\n}\n.uk-nav-parent-icon > .uk-parent.uk-open > a:after {\n  content: \"\\f107\";\n}\n/* Modifier `uk-nav-side`\n ========================================================================== */\n/*\n * Items\n */\n.uk-nav-side > li > a {\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-nav-side > li > a:hover,\n.uk-nav-side > li > a:focus {\n  background: rgba(0, 0, 0, 0.05);\n  color: #444;\n  /* 2 */\n  outline: none;\n}\n/* Active */\n.uk-nav-side > li.uk-active > a {\n  background: #00a8e6;\n  color: #fff;\n}\n/*\n * Sub-object: `uk-nav-header`\n */\n.uk-nav-side .uk-nav-header {\n  color: #444;\n}\n/*\n * Sub-object: `uk-nav-divider`\n */\n.uk-nav-side .uk-nav-divider {\n  border-top: 1px solid #ddd;\n}\n/*\n * Nested items\n */\n.uk-nav-side ul a {\n  color: #07D;\n}\n.uk-nav-side ul a:hover {\n  color: #059;\n}\n/* Modifier `uk-nav-dropdown`\n ========================================================================== */\n/*\n * Items\n */\n.uk-nav-dropdown > li > a {\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-nav-dropdown > li > a:hover,\n.uk-nav-dropdown > li > a:focus {\n  background: #00a8e6;\n  color: #fff;\n  /* 2 */\n  outline: none;\n}\n/*\n * Sub-object: `uk-nav-header`\n */\n.uk-nav-dropdown .uk-nav-header {\n  color: #999;\n}\n/*\n * Sub-object: `uk-nav-divider`\n */\n.uk-nav-dropdown .uk-nav-divider {\n  border-top: 1px solid #ddd;\n}\n/*\n * Nested items\n */\n.uk-nav-dropdown ul a {\n  color: #07D;\n}\n.uk-nav-dropdown ul a:hover {\n  color: #059;\n}\n/* Modifier `uk-nav-navbar`\n ========================================================================== */\n/*\n * Items\n */\n.uk-nav-navbar > li > a {\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-nav-navbar > li > a:hover,\n.uk-nav-navbar > li > a:focus {\n  background: #00a8e6;\n  color: #fff;\n  /* 2 */\n  outline: none;\n}\n/*\n * Sub-object: `uk-nav-header`\n */\n.uk-nav-navbar .uk-nav-header {\n  color: #999;\n}\n/*\n * Sub-object: `uk-nav-divider`\n */\n.uk-nav-navbar .uk-nav-divider {\n  border-top: 1px solid #ddd;\n}\n/*\n * Nested items\n */\n.uk-nav-navbar ul a {\n  color: #07D;\n}\n.uk-nav-navbar ul a:hover {\n  color: #059;\n}\n/* Modifier `uk-nav-offcanvas`\n ========================================================================== */\n/*\n * Items\n */\n.uk-nav-offcanvas > li > a {\n  color: #ccc;\n  padding: 10px 15px;\n}\n/*\n * Hover\n * No hover on touch devices because it behaves buggy in fixed offcanvas\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-nav-offcanvas > .uk-open > a,\nhtml:not(.uk-touch) .uk-nav-offcanvas > li > a:hover,\nhtml:not(.uk-touch) .uk-nav-offcanvas > li > a:focus {\n  background: #404040;\n  color: #fff;\n  /* 2 */\n  outline: none;\n}\n/*\n * Active\n * `html .uk-nav` needed for higher specificity to override hover\n */\nhtml .uk-nav.uk-nav-offcanvas > li.uk-active > a {\n  background: #1a1a1a;\n  color: #fff;\n}\n/*\n * Sub-object: `uk-nav-header`\n */\n.uk-nav-offcanvas .uk-nav-header {\n  color: #777;\n}\n/*\n * Sub-object: `uk-nav-divider`\n */\n.uk-nav-offcanvas .uk-nav-divider {\n  border-top: 1px solid #1a1a1a;\n}\n/*\n * Nested items\n * No hover on touch devices because it behaves buggy in fixed offcanvas\n */\n.uk-nav-offcanvas ul a {\n  color: #ccc;\n}\nhtml:not(.uk-touch) .uk-nav-offcanvas ul a:hover {\n  color: #fff;\n}\n/* ========================================================================\n   Component: Navbar\n ========================================================================== */\n.uk-navbar {\n  background: #eee;\n  color: #444;\n}\n/*\n * Micro clearfix\n */\n.uk-navbar:before,\n.uk-navbar:after {\n  content: \"\";\n  display: table;\n}\n.uk-navbar:after {\n  clear: both;\n}\n/* Sub-object: `uk-navbar-nav`\n ========================================================================== */\n.uk-navbar-nav {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  float: left;\n}\n/*\n * 1. Create position context for dropdowns\n */\n.uk-navbar-nav > li {\n  float: left;\n  /* 1 */\n  position: relative;\n}\n/*\n * 1. Dimensions\n * 2. Style\n */\n.uk-navbar-nav > li > a {\n  display: block;\n  box-sizing: border-box;\n  text-decoration: none;\n  /* 1 */\n  height: 40px;\n  padding: 0 15px;\n  line-height: 40px;\n  /* 2 */\n  color: #444;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n}\n/* Appear not as link */\n.uk-navbar-nav > li > a[href='#'] {\n  cursor: text;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Also apply if dropdown is opened\n * 3. Remove default focus style\n */\n.uk-navbar-nav > li:hover > a,\n.uk-navbar-nav > li > a:focus,\n.uk-navbar-nav > li.uk-open > a {\n  background-color: #f5f5f5;\n  color: #444;\n  /* 3 */\n  outline: none;\n}\n/* OnClick */\n.uk-navbar-nav > li > a:active {\n  background-color: #ddd;\n  color: #444;\n}\n/* Active */\n.uk-navbar-nav > li.uk-active > a {\n  background-color: #f5f5f5;\n  color: #444;\n}\n/* Sub-objects: `uk-navbar-nav-subtitle`\n ========================================================================== */\n.uk-navbar-nav .uk-navbar-nav-subtitle {\n  line-height: 28px;\n}\n.uk-navbar-nav-subtitle > div {\n  margin-top: -6px;\n  font-size: 10px;\n  line-height: 12px;\n}\n/* Sub-objects: `uk-navbar-content`, `uk-navbar-brand`, `uk-navbar-toggle`\n ========================================================================== */\n/*\n * Imitate navbar items\n */\n.uk-navbar-content,\n.uk-navbar-brand,\n.uk-navbar-toggle {\n  box-sizing: border-box;\n  display: block;\n  height: 40px;\n  padding: 0 15px;\n  float: left;\n}\n/*\n * Helper to center all child elements vertically\n */\n.uk-navbar-content:before,\n.uk-navbar-brand:before,\n.uk-navbar-toggle:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n/* Sub-objects: `uk-navbar-content`\n ========================================================================== */\n/*\n * Better sibling spacing\n */\n.uk-navbar-content + .uk-navbar-content:not(.uk-navbar-center) {\n  padding-left: 0;\n}\n/*\n * Link colors\n */\n.uk-navbar-content > a:not([class]) {\n  color: #07D;\n}\n.uk-navbar-content > a:not([class]):hover {\n  color: #059;\n}\n/* Sub-objects: `uk-navbar-brand`\n ========================================================================== */\n.uk-navbar-brand {\n  font-size: 18px;\n  color: #444;\n  text-decoration: none;\n}\n/*\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-navbar-brand:hover,\n.uk-navbar-brand:focus {\n  color: #444;\n  text-decoration: none;\n  /* 2 */\n  outline: none;\n}\n/* Sub-object: `uk-navbar-toggle`\n ========================================================================== */\n.uk-navbar-toggle {\n  font-size: 18px;\n  color: #444;\n  text-decoration: none;\n}\n/*\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-navbar-toggle:hover,\n.uk-navbar-toggle:focus {\n  color: #444;\n  text-decoration: none;\n  /* 2 */\n  outline: none;\n}\n/*\n * 1. Center icon vertically\n */\n.uk-navbar-toggle:after {\n  content: \"\\f0c9\";\n  font-family: FontAwesome;\n  /* 1 */\n  vertical-align: middle;\n}\n.uk-navbar-toggle-alt:after {\n  content: \"\\f002\";\n}\n/* Sub-object: `uk-navbar-center`\n ========================================================================== */\n/*\n * The element with this class needs to be last child in the navbar\n * 1. This hack is needed because other float elements shift centered text\n */\n.uk-navbar-center {\n  float: none;\n  text-align: center;\n  /* 1 */\n  max-width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/* Sub-object: `uk-navbar-flip`\n ========================================================================== */\n.uk-navbar-flip {\n  float: right;\n}\n/* ========================================================================\n   Component: Subnav\n ========================================================================== */\n/*\n * 1. Gutter\n * 2. Remove default list style\n */\n.uk-subnav {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  /* 1 */\n  margin-left: -10px;\n  margin-top: -10px;\n  /* 2 */\n  padding: 0;\n  list-style: none;\n}\n/*\n * 1. Space is allocated solely based on content dimensions\n * 2. Horizontal gutter is using `padding` so `uk-width-*` classes can be applied\n * 3. Create position context for dropdowns\n */\n.uk-subnav > * {\n  /* 1 */\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n  /* 2 */\n  padding-left: 10px;\n  margin-top: 10px;\n  /* 3 */\n  position: relative;\n}\n/*\n * DEPRECATED IE9 Support\n */\n.uk-subnav:before,\n.uk-subnav:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n}\n.uk-subnav:after {\n  clear: both;\n}\n.uk-subnav > * {\n  float: left;\n}\n/* Items\n ========================================================================== */\n.uk-subnav > * > * {\n  display: inline-block;\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n */\n.uk-subnav > * > :hover,\n.uk-subnav > * > :focus {\n  color: #07D;\n  text-decoration: none;\n}\n/*\n * Active\n */\n.uk-subnav > .uk-active > * {\n  color: #07D;\n}\n/* Modifier: 'subnav-line'\n ========================================================================== */\n.uk-subnav-line > :before {\n  content: \"\";\n  display: inline-block;\n  height: 10px;\n  vertical-align: middle;\n}\n.uk-subnav-line > :nth-child(n+2):before {\n  margin-right: 10px;\n  border-left: 1px solid #ddd;\n}\n/* Modifier: 'subnav-pill'\n ========================================================================== */\n.uk-subnav-pill > * > * {\n  padding: 3px 9px;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-subnav-pill > * > :hover,\n.uk-subnav-pill > * > :focus {\n  background: #eee;\n  color: #444;\n  text-decoration: none;\n  /* 2 */\n  outline: none;\n}\n/*\n * Active\n * `li` needed for higher specificity to override hover\n */\n.uk-subnav-pill > .uk-active > * {\n  background: #00a8e6;\n  color: #fff;\n}\n/* Disabled state\n ========================================================================== */\n.uk-subnav > .uk-disabled > * {\n  background: none;\n  color: #999;\n  text-decoration: none;\n  cursor: text;\n}\n/* ========================================================================\n   Component: Breadcrumb\n ========================================================================== */\n/*\n * 1. Remove default list style\n * 2. Remove whitespace between child elements when using `inline-block`\n */\n.uk-breadcrumb {\n  /* 1 */\n  padding: 0;\n  list-style: none;\n  /* 2 */\n  font-size: 0.001px;\n}\n/* Items\n ========================================================================== */\n/*\n * Reset whitespace hack\n */\n.uk-breadcrumb > li {\n  font-size: 1rem;\n  vertical-align: top;\n}\n.uk-breadcrumb > li,\n.uk-breadcrumb > li > a,\n.uk-breadcrumb > li > span {\n  display: inline-block;\n}\n.uk-breadcrumb > li:nth-child(n+2):before {\n  content: \"/\";\n  display: inline-block;\n  margin: 0 8px;\n}\n/*\n * Disabled\n */\n.uk-breadcrumb > li:not(.uk-active) > span {\n  color: #999;\n}\n/* ========================================================================\n   Component: Pagination\n ========================================================================== */\n/*\n * 1. Remove default list style\n * 2. Center pagination by default\n * 3. Remove whitespace between child elements when using `inline-block`\n */\n.uk-pagination {\n  /* 1 */\n  padding: 0;\n  list-style: none;\n  /* 2 */\n  text-align: center;\n  /* 3 */\n  font-size: 0.001px;\n}\n/*\n * Micro clearfix\n * Needed if `uk-pagination-previous` or `uk-pagination-next` sub-objects are used\n */\n.uk-pagination:before,\n.uk-pagination:after {\n  content: \"\";\n  display: table;\n}\n.uk-pagination:after {\n  clear: both;\n}\n/* Items\n ========================================================================== */\n/*\n * 1. Reset whitespace hack\n * 2. Remove the gap at the bottom of it container\n */\n.uk-pagination > li {\n  display: inline-block;\n  /* 1 */\n  font-size: 1rem;\n  /* 2 */\n  vertical-align: top;\n}\n.uk-pagination > li:nth-child(n+2) {\n  margin-left: 5px;\n}\n/*\n * 1. Makes pagination more robust against different box-sizing use\n * 2. Reset text-align to center if alignment modifier is used\n */\n.uk-pagination > li > a,\n.uk-pagination > li > span {\n  display: inline-block;\n  min-width: 16px;\n  padding: 3px 5px;\n  line-height: 20px;\n  text-decoration: none;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n  text-align: center;\n}\n/*\n * Links\n */\n.uk-pagination > li > a {\n  background: #eee;\n  color: #444;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-pagination > li > a:hover,\n.uk-pagination > li > a:focus {\n  background-color: #f5f5f5;\n  color: #444;\n  /* 2 */\n  outline: none;\n}\n/* OnClick */\n.uk-pagination > li > a:active {\n  background-color: #ddd;\n  color: #444;\n}\n/*\n * Active\n */\n.uk-pagination > .uk-active > span {\n  background: #00a8e6;\n  color: #fff;\n}\n/*\n * Disabled\n */\n.uk-pagination > .uk-disabled > span {\n  background-color: #f5f5f5;\n  color: #999;\n}\n/* Previous and next navigation\n ========================================================================== */\n.uk-pagination-previous {\n  float: left;\n}\n.uk-pagination-next {\n  float: right;\n}\n/* Alignment modifiers\n ========================================================================== */\n.uk-pagination-left {\n  text-align: left;\n}\n.uk-pagination-right {\n  text-align: right;\n}\n/* ========================================================================\n   Component: Tab\n ========================================================================== */\n.uk-tab {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  border-bottom: 1px solid #ddd;\n}\n/*\n * Micro clearfix on the deepest container\n */\n.uk-tab:before,\n.uk-tab:after {\n  content: \"\";\n  display: table;\n}\n.uk-tab:after {\n  clear: both;\n}\n/*\n * Items\n * 1. Create position context for dropdowns\n */\n.uk-tab > li {\n  margin-bottom: -1px;\n  float: left;\n  /* 1 */\n  position: relative;\n}\n.uk-tab > li > a {\n  display: block;\n  padding: 8px 12px 8px 12px;\n  border: 1px solid transparent;\n  border-bottom-width: 0;\n  color: #07D;\n  text-decoration: none;\n}\n.uk-tab > li:nth-child(n+2) > a {\n  margin-left: 5px;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Also apply if dropdown is opened\n * 3. Remove default focus style\n */\n.uk-tab > li > a:hover,\n.uk-tab > li > a:focus,\n.uk-tab > li.uk-open > a {\n  border-color: #f5f5f5;\n  background: #f5f5f5;\n  color: #059;\n  /* 2 */\n  outline: none;\n}\n.uk-tab > li:not(.uk-active) > a:hover,\n.uk-tab > li:not(.uk-active) > a:focus,\n.uk-tab > li.uk-open:not(.uk-active) > a {\n  margin-bottom: 1px;\n  padding-bottom: 7px;\n}\n/* Active */\n.uk-tab > li.uk-active > a {\n  border-color: #ddd;\n  border-bottom-color: transparent;\n  background: #fff;\n  color: #444;\n}\n/* Disabled */\n.uk-tab > li.uk-disabled > a {\n  color: #999;\n  cursor: text;\n}\n.uk-tab > li.uk-disabled > a:hover,\n.uk-tab > li.uk-disabled > a:focus,\n.uk-tab > li.uk-disabled.uk-active > a {\n  background: none;\n  border-color: transparent;\n}\n/* Modifier: 'tab-flip'\n ========================================================================== */\n.uk-tab-flip > li {\n  float: right;\n}\n.uk-tab-flip > li:nth-child(n+2) > a {\n  margin-left: 0;\n  margin-right: 5px;\n}\n/* Modifier: 'tab-responsive'\n ========================================================================== */\n.uk-tab > li.uk-tab-responsive > a {\n  margin-left: 0;\n  margin-right: 0;\n}\n/*\n * Icon\n */\n.uk-tab-responsive > a:before {\n  content: \"\\f0c9\\00a0\";\n  font-family: FontAwesome;\n}\n/* Modifier: 'tab-center'\n ========================================================================== */\n.uk-tab-center {\n  border-bottom: 1px solid #ddd;\n}\n.uk-tab-center-bottom {\n  border-bottom: none;\n  border-top: 1px solid #ddd;\n}\n.uk-tab-center:before,\n.uk-tab-center:after {\n  content: \"\";\n  display: table;\n}\n.uk-tab-center:after {\n  clear: both;\n}\n/*\n * 1. Using `right` to prevent vertical scrollbar caused by centering if to many tabs\n */\n.uk-tab-center .uk-tab {\n  position: relative;\n  right: 50%;\n  border: none;\n  float: right;\n}\n.uk-tab-center .uk-tab > li {\n  position: relative;\n  right: -50%;\n}\n.uk-tab-center .uk-tab > li > a {\n  text-align: center;\n}\n/* Modifier: 'tab-bottom'\n ========================================================================== */\n.uk-tab-bottom {\n  border-top: 1px solid #ddd;\n  border-bottom: none;\n}\n.uk-tab-bottom > li {\n  margin-top: -1px;\n  margin-bottom: 0;\n}\n.uk-tab-bottom > li > a {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom-width: 1px;\n  border-top-width: 0;\n}\n.uk-tab-bottom > li:not(.uk-active) > a:hover,\n.uk-tab-bottom > li:not(.uk-active) > a:focus,\n.uk-tab-bottom > li.uk-open:not(.uk-active) > a {\n  margin-bottom: 0;\n  margin-top: 1px;\n  padding-bottom: 8px;\n  padding-top: 7px;\n}\n.uk-tab-bottom > li.uk-active > a {\n  border-top-color: transparent;\n  border-bottom-color: #ddd;\n}\n/* Modifier: 'tab-grid'\n ========================================================================== */\n/*\n * 1. Create position context to prevent hidden border because of negative `z-index`\n */\n.uk-tab-grid {\n  margin-left: -5px;\n  border-bottom: none;\n  /* 1 */\n  position: relative;\n  z-index: 0;\n}\n.uk-tab-grid:before {\n  display: block;\n  position: absolute;\n  left: 5px;\n  right: 0;\n  bottom: -1px;\n  border-top: 1px solid #ddd;\n  /* 1 */\n  z-index: -1;\n}\n.uk-tab-grid > li:first-child > a {\n  margin-left: 5px;\n}\n.uk-tab-grid > li > a {\n  text-align: center;\n}\n/*\n * If `uk-tab-bottom`\n */\n.uk-tab-grid.uk-tab-bottom {\n  border-top: none;\n}\n.uk-tab-grid.uk-tab-bottom:before {\n  top: -1px;\n  bottom: auto;\n}\n/* Modifier: 'tab-left', 'tab-right'\n ========================================================================== */\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-tab-left,\n  .uk-tab-right {\n    border-bottom: none;\n  }\n  .uk-tab-left > li,\n  .uk-tab-right > li {\n    margin-bottom: 0;\n    float: none;\n  }\n  .uk-tab-left > li > a,\n  .uk-tab-right > li > a {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n  .uk-tab-left > li:nth-child(n+2) > a,\n  .uk-tab-right > li:nth-child(n+2) > a {\n    margin-left: 0;\n    margin-top: 5px;\n  }\n  .uk-tab-left > li.uk-active > a,\n  .uk-tab-right > li.uk-active > a {\n    border-color: #ddd;\n  }\n  /*\n     * Modifier: 'tab-left'\n     */\n  .uk-tab-left {\n    border-right: 1px solid #ddd;\n  }\n  .uk-tab-left > li {\n    margin-right: -1px;\n  }\n  .uk-tab-left > li > a {\n    border-bottom-width: 1px;\n    border-right-width: 0;\n  }\n  .uk-tab-left > li:not(.uk-active) > a:hover,\n  .uk-tab-left > li:not(.uk-active) > a:focus {\n    margin-bottom: 0;\n    margin-right: 1px;\n    padding-bottom: 8px;\n    padding-right: 11px;\n  }\n  .uk-tab-left > li.uk-active > a {\n    border-right-color: transparent;\n  }\n  /*\n     * Modifier: 'tab-right'\n     */\n  .uk-tab-right {\n    border-left: 1px solid #ddd;\n  }\n  .uk-tab-right > li {\n    margin-left: -1px;\n  }\n  .uk-tab-right > li > a {\n    border-bottom-width: 1px;\n    border-left-width: 0;\n  }\n  .uk-tab-right > li:not(.uk-active) > a:hover,\n  .uk-tab-right > li:not(.uk-active) > a:focus {\n    margin-bottom: 0;\n    margin-left: 1px;\n    padding-bottom: 8px;\n    padding-left: 11px;\n  }\n  .uk-tab-right > li.uk-active > a {\n    border-left-color: transparent;\n  }\n}\n/* ========================================================================\n   Component: Thumbnav\n ========================================================================== */\n/*\n * 1. Gutter\n * 2. Remove default list style\n */\n.uk-thumbnav {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  /* 1 */\n  margin-left: -10px;\n  margin-top: -10px;\n  /* 2 */\n  padding: 0;\n  list-style: none;\n}\n/*\n * 1. Space is allocated solely based on content dimensions\n * 2. Horizontal gutter is using `padding` so `uk-width-*` classes can be applied\n */\n.uk-thumbnav > * {\n  /* 1 */\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n  /* 2 */\n  padding-left: 10px;\n  margin-top: 10px;\n}\n/*\n * DEPRECATED IE9 Support\n */\n.uk-thumbnav:before,\n.uk-thumbnav:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n}\n.uk-thumbnav:after {\n  clear: both;\n}\n.uk-thumbnav > * {\n  float: left;\n}\n/* Items\n ========================================================================== */\n.uk-thumbnav > * > * {\n  display: block;\n  background: #fff;\n}\n.uk-thumbnav > * > * > img {\n  opacity: 0.7;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n/*\n * Hover\n */\n.uk-thumbnav > * > :hover > img,\n.uk-thumbnav > * > :focus > img {\n  opacity: 1;\n}\n/*\n * Active\n */\n.uk-thumbnav > .uk-active > * > img {\n  opacity: 1;\n}\n/* ========================================================================\n   Component: List\n ========================================================================== */\n.uk-list {\n  padding: 0;\n  list-style: none;\n}\n/*\n * Micro clearfix to make list more robust\n */\n.uk-list > li:before,\n.uk-list > li:after {\n  content: \"\";\n  display: table;\n}\n.uk-list > li:after {\n  clear: both;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-list > li > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Nested lists\n */\n.uk-list ul {\n  margin: 0;\n  padding-left: 20px;\n  list-style: none;\n}\n/* Modifier: `uk-list-line`\n ========================================================================== */\n.uk-list-line > li:nth-child(n+2) {\n  margin-top: 5px;\n  padding-top: 5px;\n  border-top: 1px solid #ddd;\n}\n/* Modifier: `uk-list-striped`\n ========================================================================== */\n.uk-list-striped > li {\n  padding: 5px 5px;\n}\n.uk-list-striped > li:nth-of-type(odd) {\n  background: #f5f5f5;\n}\n/* Modifier: `uk-list-space`\n ========================================================================== */\n.uk-list-space > li:nth-child(n+2) {\n  margin-top: 10px;\n}\n/* ========================================================================\n   Component: Description list\n ========================================================================== */\n/* Modifier: `uk-description-list-horizontal`\n ========================================================================== */\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-description-list-horizontal {\n    overflow: hidden;\n  }\n  .uk-description-list-horizontal > dt {\n    width: 160px;\n    float: left;\n    clear: both;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .uk-description-list-horizontal > dd {\n    margin-left: 180px;\n  }\n}\n/* Modifier: `uk-description-list-line`\n ========================================================================== */\n.uk-description-list-line > dt {\n  font-weight: normal;\n}\n.uk-description-list-line > dt:nth-child(n+2) {\n  margin-top: 5px;\n  padding-top: 5px;\n  border-top: 1px solid #ddd;\n}\n.uk-description-list-line > dd {\n  color: #999;\n}\n/* ========================================================================\n   Component: Table\n ========================================================================== */\n/*\n * 1. Remove most spacing between table cells.\n * 2. Block element behavior\n * 3. Style\n */\n.uk-table {\n  /* 1 */\n  border-collapse: collapse;\n  border-spacing: 0;\n  /* 2 */\n  width: 100%;\n  /* 3 */\n  margin-bottom: 15px;\n}\n/*\n * Add margin if adjacent element\n */\n* + .uk-table {\n  margin-top: 15px;\n}\n.uk-table th,\n.uk-table td {\n  padding: 8px 8px;\n}\n/*\n * Set alignment\n */\n.uk-table th {\n  text-align: left;\n}\n.uk-table td {\n  vertical-align: top;\n}\n.uk-table thead th {\n  vertical-align: bottom;\n}\n/*\n * Caption and footer\n */\n.uk-table caption,\n.uk-table tfoot {\n  font-size: 12px;\n  font-style: italic;\n}\n.uk-table caption {\n  text-align: left;\n  color: #999;\n}\n/*\n * Active State\n */\n.uk-table tbody tr.uk-active {\n  background: #EEE;\n}\n/* Sub-modifier: `uk-table-middle`\n ========================================================================== */\n.uk-table-middle,\n.uk-table-middle td {\n  vertical-align: middle !important;\n}\n/* Modifier: `uk-table-striped`\n ========================================================================== */\n.uk-table-striped tbody tr:nth-of-type(odd) {\n  background: #f5f5f5;\n}\n/* Modifier: `uk-table-condensed`\n ========================================================================== */\n.uk-table-condensed td {\n  padding: 4px 8px;\n}\n/* Modifier: `uk-table-hover`\n ========================================================================== */\n.uk-table-hover tbody tr:hover {\n  background: #EEE;\n}\n/* ========================================================================\n   Component: Form\n ========================================================================== */\n/*\n * 1. Define consistent box sizing.\n *    Default is `content-box` with following exceptions set to `border-box`\n *    `button`, `select`, `input[type=\"checkbox\"]` and `input[type=\"radio\"]`\n *    `input[type=\"search\"]` in Chrome, Safari and Opera\n *    `input[type=\"color\"]` in Firefox\n * 2. Address margins set differently in Firefox/IE and Chrome/Safari/Opera.\n * 3. Remove `border-radius` in iOS.\n * 4. Correct `font` properties and `color` not being inherited.\n */\n.uk-form input,\n.uk-form select,\n.uk-form textarea {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  border-radius: 0;\n  /* 4 */\n  font: inherit;\n  color: inherit;\n}\n/*\n * Address inconsistent `text-transform` inheritance which is only inherit in Firefox\n */\n.uk-form select {\n  text-transform: none;\n}\n/*\n * 1. Correct `font` properties not being inherited.\n * 2. Don't inherit the `font-weight` and use `bold` instead.\n * NOTE: Both declarations don't work in Chrome, Safari and Opera.\n */\n.uk-form optgroup {\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  font-weight: bold;\n}\n/*\n * Removes inner padding and border in Firefox 4+.\n */\n.uk-form input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/*\n * Removes excess padding in IE 8/9/10.\n */\n.uk-form input[type=\"checkbox\"],\n.uk-form input[type=\"radio\"] {\n  padding: 0;\n}\n/*\n * Improves consistency of cursor style for clickable elements\n */\n.uk-form input[type=\"checkbox\"]:not(:disabled),\n.uk-form input[type=\"radio\"]:not(:disabled) {\n  cursor: pointer;\n}\n/*\n * Remove default style in iOS.\n */\n.uk-form textarea,\n.uk-form input:not([type]),\n.uk-form input[type=\"text\"],\n.uk-form input[type=\"password\"],\n.uk-form input[type=\"email\"],\n.uk-form input[type=\"url\"],\n.uk-form input[type=\"search\"],\n.uk-form input[type=\"tel\"],\n.uk-form input[type=\"number\"],\n.uk-form input[type=\"datetime\"] {\n  -webkit-appearance: none;\n}\n/*\n * Remove inner padding and search cancel button in Chrome, Safari and Opera on OS X.\n */\n.uk-form input[type=\"search\"]::-webkit-search-cancel-button,\n.uk-form input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n.uk-form input[type=\"number\"]::-webkit-inner-spin-button,\n.uk-form input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n * Define consistent border, margin, and padding.\n */\n.uk-form fieldset {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n/*\n * 1. Remove default vertical scrollbar in IE 8/9/10/11.\n * 2. Improve readability and alignment in all browsers.\n */\n.uk-form textarea {\n  /* 1 */\n  overflow: auto;\n  /* 2 */\n  vertical-align: top;\n}\n/*\n * Removes placeholder transparency in Firefox.\n */\n.uk-form ::-moz-placeholder {\n  opacity: 1;\n}\n/*\n * Removes `box-shadow` for invalid controls in Firefox.\n */\n.uk-form :invalid {\n  box-shadow: none;\n}\n/*\n * Vertical alignment\n */\n.uk-form input:not([type=\"radio\"]):not([type=\"checkbox\"]),\n.uk-form select {\n  vertical-align: middle;\n}\n/* Style\n ========================================================================== */\n/*\n * Remove margin from the last-child\n */\n.uk-form > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Controls\n * Except for `range`, `radio`, `checkbox`, `file`, `submit`, `reset`, `button` and `image`\n * 1. Must be `height` because `min-height` is not working in OSX\n * 2. Responsiveness: Sets a maximum width relative to the parent to scale on narrower viewports\n * 3. Vertical `padding` needed for `select` elements in Firefox\n * 4. Style\n */\n.uk-form select,\n.uk-form textarea,\n.uk-form input:not([type]),\n.uk-form input[type=\"text\"],\n.uk-form input[type=\"password\"],\n.uk-form input[type=\"datetime\"],\n.uk-form input[type=\"datetime-local\"],\n.uk-form input[type=\"date\"],\n.uk-form input[type=\"month\"],\n.uk-form input[type=\"time\"],\n.uk-form input[type=\"week\"],\n.uk-form input[type=\"number\"],\n.uk-form input[type=\"email\"],\n.uk-form input[type=\"url\"],\n.uk-form input[type=\"search\"],\n.uk-form input[type=\"tel\"],\n.uk-form input[type=\"color\"] {\n  /* 1 */\n  height: 30px;\n  /* 2 */\n  max-width: 100%;\n  /* 3 */\n  padding: 4px 6px;\n  /* 4 */\n  border: 1px solid #ddd;\n  background: #fff;\n  color: #444;\n  -webkit-transition: all 0.2s linear;\n  -webkit-transition-property: border, background, color, box-shadow, padding;\n  transition: all 0.2s linear;\n  transition-property: border, background, color, box-shadow, padding;\n}\n.uk-form select:focus,\n.uk-form textarea:focus,\n.uk-form input:not([type]):focus,\n.uk-form input[type=\"text\"]:focus,\n.uk-form input[type=\"password\"]:focus,\n.uk-form input[type=\"datetime\"]:focus,\n.uk-form input[type=\"datetime-local\"]:focus,\n.uk-form input[type=\"date\"]:focus,\n.uk-form input[type=\"month\"]:focus,\n.uk-form input[type=\"time\"]:focus,\n.uk-form input[type=\"week\"]:focus,\n.uk-form input[type=\"number\"]:focus,\n.uk-form input[type=\"email\"]:focus,\n.uk-form input[type=\"url\"]:focus,\n.uk-form input[type=\"search\"]:focus,\n.uk-form input[type=\"tel\"]:focus,\n.uk-form input[type=\"color\"]:focus {\n  border-color: #99baca;\n  outline: 0;\n  background: #f5fbfe;\n  color: #444;\n}\n.uk-form select:disabled,\n.uk-form textarea:disabled,\n.uk-form input:not([type]):disabled,\n.uk-form input[type=\"text\"]:disabled,\n.uk-form input[type=\"password\"]:disabled,\n.uk-form input[type=\"datetime\"]:disabled,\n.uk-form input[type=\"datetime-local\"]:disabled,\n.uk-form input[type=\"date\"]:disabled,\n.uk-form input[type=\"month\"]:disabled,\n.uk-form input[type=\"time\"]:disabled,\n.uk-form input[type=\"week\"]:disabled,\n.uk-form input[type=\"number\"]:disabled,\n.uk-form input[type=\"email\"]:disabled,\n.uk-form input[type=\"url\"]:disabled,\n.uk-form input[type=\"search\"]:disabled,\n.uk-form input[type=\"tel\"]:disabled,\n.uk-form input[type=\"color\"]:disabled {\n  border-color: #ddd;\n  background-color: #f5f5f5;\n  color: #999;\n}\n/*\n * Placeholder\n */\n.uk-form :-ms-input-placeholder {\n  color: #999 !important;\n}\n.uk-form ::-moz-placeholder {\n  color: #999;\n}\n.uk-form ::-webkit-input-placeholder {\n  color: #999;\n}\n.uk-form :disabled:-ms-input-placeholder {\n  color: #999 !important;\n}\n.uk-form :disabled::-moz-placeholder {\n  color: #999;\n}\n.uk-form :disabled::-webkit-input-placeholder {\n  color: #999;\n}\n/*\n * Legend\n * 1. Behave like block element\n * 2. Correct `color` not being inherited in IE 8/9/10/11.\n * 3. Remove padding\n * 4. `margin-bottom` is not working in Safari and Opera.\n *    Using `padding` and :after instead to create the border\n * 5. Style\n */\n.uk-form legend {\n  /* 1 */\n  width: 100%;\n  /* 2 */\n  border: 0;\n  /* 3 */\n  padding: 0;\n  /* 4 */\n  padding-bottom: 15px;\n  /* 5 */\n  font-size: 18px;\n  line-height: 30px;\n}\n/*\n * 1. Fixes IE9\n */\n.uk-form legend:after {\n  content: \"\";\n  display: block;\n  border-bottom: 1px solid #ddd;\n  /* 1 */\n  width: 100%;\n}\n/* Size modifiers\n * Higher specificity needed to override defaults\n ========================================================================== */\nselect.uk-form-small,\ntextarea.uk-form-small,\ninput[type].uk-form-small,\ninput:not([type]).uk-form-small {\n  height: 25px;\n  padding: 3px 3px;\n  font-size: 12px;\n}\nselect.uk-form-large,\ntextarea.uk-form-large,\ninput[type].uk-form-large,\ninput:not([type]).uk-form-large {\n  height: 40px;\n  padding: 8px 6px;\n  font-size: 16px;\n}\n/* Reset height\n * Must be after size modifiers\n ========================================================================== */\n.uk-form textarea,\n.uk-form select[multiple],\n.uk-form select[size] {\n  height: auto;\n}\n/* Validation states\n * Using !important to keep the selector simple\n ========================================================================== */\n/*\n * Error state\n */\n.uk-form-danger {\n  border-color: #dc8d99 !important;\n  background: #fff7f8 !important;\n  color: #d85030 !important;\n}\n/*\n * Success state\n */\n.uk-form-success {\n  border-color: #8ec73b !important;\n  background: #fafff2 !important;\n  color: #659f13 !important;\n}\n/* Style modifiers\n * Using !important to keep the selector simple\n ========================================================================== */\n/*\n * Blank form\n */\n.uk-form-blank {\n  border-color: transparent !important;\n  border-style: dashed !important;\n  background: none !important;\n}\n.uk-form-blank:focus {\n  border-color: #ddd !important;\n}\n/* Size sub-modifiers\n ========================================================================== */\n/*\n * Fixed widths\n * Different widths for mini sized `input` and `select` elements\n */\ninput.uk-form-width-mini {\n  width: 40px;\n}\nselect.uk-form-width-mini {\n  width: 65px;\n}\n.uk-form-width-small {\n  width: 130px;\n}\n.uk-form-width-medium {\n  width: 200px;\n}\n.uk-form-width-large {\n  width: 500px;\n}\n/* Sub-objects: `uk-form-row`\n * Groups labels and controls in rows\n ========================================================================== */\n/*\n * Micro clearfix\n * Needed for `uk-form-horizontal` modifier\n */\n.uk-form-row:before,\n.uk-form-row:after {\n  content: \"\";\n  display: table;\n}\n.uk-form-row:after {\n  clear: both;\n}\n/*\n * Vertical gutter\n */\n.uk-form-row + .uk-form-row {\n  margin-top: 15px;\n}\n/* Help text\n * Sub-object: `uk-form-help-inline`, `uk-form-help-block`\n ========================================================================== */\n.uk-form-help-inline {\n  display: inline-block;\n  margin: 0 0 0 10px;\n}\n.uk-form-help-block {\n  margin: 5px 0 0 0;\n}\n/* Controls content\n * Sub-object: `uk-form-controls`, `uk-form-controls-condensed`\n ========================================================================== */\n/*\n * Remove margins\n */\n.uk-form-controls > :first-child {\n  margin-top: 0;\n}\n.uk-form-controls > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Group controls and text into blocks with a small spacing between blocks\n */\n.uk-form-controls-condensed {\n  margin: 5px 0;\n}\n/* Modifier: `uk-form-stacked`\n * Requires sub-object: `uk-form-label`\n ========================================================================== */\n.uk-form-stacked .uk-form-label {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n/* Modifier: `uk-form-horizontal`\n * Requires sub-objects: `uk-form-label`, `uk-form-controls`\n ========================================================================== */\n/* Tablet portrait and smaller */\n@media (max-width: 959px) {\n  /* Behave like `uk-form-stacked` */\n  .uk-form-horizontal .uk-form-label {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-form-horizontal .uk-form-label {\n    width: 200px;\n    margin-top: 5px;\n    float: left;\n  }\n  .uk-form-horizontal .uk-form-controls {\n    margin-left: 215px;\n  }\n  /* Better vertical alignment if controls are checkboxes and radio buttons with text */\n  .uk-form-horizontal .uk-form-controls-text {\n    padding-top: 5px;\n  }\n}\n/* Sub-object: `uk-form-icon`\n ========================================================================== */\n/*\n * 1. Container width fits its content\n * 2. Create position context\n * 3. Prevent `inline-block` consequences\n */\n.uk-form-icon {\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  max-width: 100%;\n}\n/*\n * 1. Make form element clickable through icon\n */\n.uk-form-icon > [class*='uk-icon-'] {\n  position: absolute;\n  top: 50%;\n  width: 30px;\n  margin-top: -7px;\n  font-size: 14px;\n  color: #999;\n  text-align: center;\n  /* 1 */\n  pointer-events: none;\n}\n.uk-form-icon:not(.uk-form-icon-flip) > input {\n  padding-left: 30px !important;\n}\n/*\n * Sub-modifier: `uk-form-icon-flip`\n */\n.uk-form-icon-flip > [class*='uk-icon-'] {\n  right: 0;\n}\n.uk-form-icon-flip > input {\n  padding-right: 30px !important;\n}\n/* ========================================================================\n   Component: Button\n ========================================================================== */\n/*\n * Removes inner padding and border in Firefox 4+.\n */\n.uk-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/*\n * 1. Correct inability to style clickable `input` types in iOS.\n * 2. Remove margins in Chrome, Safari and Opera.\n * 3. Remove borders for `button`.\n * 4. Address `overflow` set to `hidden` in IE 8/9/10/11.\n * 5. Correct `font` properties and `color` not being inherited for `button`.\n * 6. Address inconsistent `text-transform` inheritance which is only inherit in Firefox and IE\n * 7. Style\n * 8. `line-height` is used to create a height\n * 9. `min-height` is necessary for `input` elements in Firefox and Opera because `line-height` is not working.\n * 10. Reset button group whitespace hack\n * 11. Required for `a`.\n */\n.uk-button {\n  /* 1 */\n  -webkit-appearance: none;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  border: none;\n  /* 4 */\n  overflow: visible;\n  /* 5 */\n  font: inherit;\n  color: #444;\n  /* 6 */\n  text-transform: none;\n  /* 7 */\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 12px;\n  background: #eee;\n  vertical-align: middle;\n  /* 8 */\n  line-height: 30px;\n  /* 9 */\n  min-height: 30px;\n  /* 10 */\n  font-size: 1rem;\n  /* 11 */\n  text-decoration: none;\n  text-align: center;\n}\n.uk-button:not(:disabled) {\n  cursor: pointer;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n * 3. Required for `a` elements\n */\n.uk-button:hover,\n.uk-button:focus {\n  background-color: #f5f5f5;\n  color: #444;\n  /* 2 */\n  outline: none;\n  /* 3 */\n  text-decoration: none;\n}\n/* Active */\n.uk-button:active,\n.uk-button.uk-active {\n  background-color: #ddd;\n  color: #444;\n}\n/* Color modifiers\n ========================================================================== */\n/*\n * Modifier: `uk-button-primary`\n */\n.uk-button-primary {\n  background-color: #00a8e6;\n  color: #fff;\n}\n/* Hover */\n.uk-button-primary:hover,\n.uk-button-primary:focus {\n  background-color: #35b3ee;\n  color: #fff;\n}\n/* Active */\n.uk-button-primary:active,\n.uk-button-primary.uk-active {\n  background-color: #0091ca;\n  color: #fff;\n}\n/*\n * Modifier: `uk-button-success`\n */\n.uk-button-success {\n  background-color: #8cc14c;\n  color: #fff;\n}\n/* Hover */\n.uk-button-success:hover,\n.uk-button-success:focus {\n  background-color: #8ec73b;\n  color: #fff;\n}\n/* Active */\n.uk-button-success:active,\n.uk-button-success.uk-active {\n  background-color: #72ae41;\n  color: #fff;\n}\n/*\n * Modifier: `uk-button-danger`\n */\n.uk-button-danger {\n  background-color: #da314b;\n  color: #fff;\n}\n/* Hover */\n.uk-button-danger:hover,\n.uk-button-danger:focus {\n  background-color: #e4354f;\n  color: #fff;\n}\n/* Active */\n.uk-button-danger:active,\n.uk-button-danger.uk-active {\n  background-color: #c91032;\n  color: #fff;\n}\n/* Disabled state\n * Overrides also the color modifiers\n ========================================================================== */\n/* Equal for all button types */\n.uk-button:disabled {\n  background-color: #f5f5f5;\n  color: #999;\n}\n/* Modifier: `uk-button-link`\n ========================================================================== */\n/* Reset */\n.uk-button-link,\n.uk-button-link:hover,\n.uk-button-link:focus,\n.uk-button-link:active,\n.uk-button-link.uk-active,\n.uk-button-link:disabled {\n  border-color: transparent;\n  background: none;\n}\n/* Color */\n.uk-button-link {\n  color: #07D;\n}\n.uk-button-link:hover,\n.uk-button-link:focus,\n.uk-button-link:active,\n.uk-button-link.uk-active {\n  color: #059;\n  text-decoration: underline;\n}\n.uk-button-link:disabled {\n  color: #999;\n}\n/* Focus */\n.uk-button-link:focus {\n  outline: 1px dotted;\n}\n/* Size modifiers\n ========================================================================== */\n.uk-button-mini {\n  min-height: 20px;\n  padding: 0 6px;\n  line-height: 20px;\n  font-size: 11px;\n}\n.uk-button-small {\n  min-height: 25px;\n  padding: 0 10px;\n  line-height: 25px;\n  font-size: 12px;\n}\n.uk-button-large {\n  min-height: 40px;\n  padding: 0 15px;\n  line-height: 40px;\n  font-size: 16px;\n}\n/* Sub-object `uk-button-group`\n ========================================================================== */\n/*\n * 1. Behave like buttons\n * 2. Create position context for dropdowns\n * 3. Remove whitespace between child elements when using `inline-block`\n * 4. Prevent buttons from wrapping\n * 5. Remove whitespace between child elements when using `inline-block`\n */\n.uk-button-group {\n  /* 1 */\n  display: inline-block;\n  vertical-align: middle;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  font-size: 0.001px;\n  /* 4 */\n  white-space: nowrap;\n}\n.uk-button-group > * {\n  display: inline-block;\n}\n/* 5 */\n.uk-button-group .uk-button {\n  vertical-align: top;\n}\n/* Sub-object: `uk-button-dropdown`\n ========================================================================== */\n/*\n * 1. Behave like buttons\n * 2. Create position context for dropdowns\n */\n.uk-button-dropdown {\n  /* 1 */\n  display: inline-block;\n  vertical-align: middle;\n  /* 2 */\n  position: relative;\n}\n/* ========================================================================\n   Component: Icon\n ========================================================================== */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n/*\n * 1. Allow margin\n * 2. Prevent inherit font style\n * 4. Correct line-height\n * 5. Better font rendering\n * 6. Remove `text-decoration` for anchors\n */\n[class*='uk-icon-'] {\n  font-family: FontAwesome;\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  font-weight: normal;\n  font-style: normal;\n  /* 4 */\n  line-height: 1;\n  /* 5 */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* 6 */\n[class*='uk-icon-'],\n[class*='uk-icon-']:hover,\n[class*='uk-icon-']:focus {\n  text-decoration: none;\n}\n/* Size modifiers\n ========================================================================== */\n.uk-icon-small {\n  font-size: 150%;\n  vertical-align: -10%;\n}\n.uk-icon-medium {\n  font-size: 200%;\n  vertical-align: -16%;\n}\n.uk-icon-large {\n  font-size: 250%;\n  vertical-align: -22%;\n}\n/* Modifier: `uk-icon-justify`\n ========================================================================== */\n.uk-icon-justify {\n  width: 1em;\n  text-align: center;\n}\n/* Modifier: `uk-icon-spin`\n ========================================================================== */\n.uk-icon-spin {\n  display: inline-block;\n  -webkit-animation: uk-rotate 2s infinite linear;\n  animation: uk-rotate 2s infinite linear;\n}\n/* Modifier: `uk-icon-hover`\n ========================================================================== */\n.uk-icon-hover {\n  color: #999;\n}\n/*\n * Hover\n */\n.uk-icon-hover:hover {\n  color: #444;\n}\n/* Modifier: `uk-icon-button`\n ========================================================================== */\n.uk-icon-button {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  border-radius: 100%;\n  background: #eee;\n  line-height: 35px;\n  color: #444;\n  font-size: 18px;\n  text-align: center;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n */\n.uk-icon-button:hover,\n.uk-icon-button:focus {\n  background-color: #f5f5f5;\n  color: #444;\n  /* 2 */\n  outline: none;\n}\n/* Active */\n.uk-icon-button:active {\n  background-color: #ddd;\n  color: #444;\n}\n/* Icon mapping\n ========================================================================== */\n.uk-icon-glass:before {\n  content: \"\\f000\";\n}\n.uk-icon-music:before {\n  content: \"\\f001\";\n}\n.uk-icon-search:before {\n  content: \"\\f002\";\n}\n.uk-icon-envelope-o:before {\n  content: \"\\f003\";\n}\n.uk-icon-heart:before {\n  content: \"\\f004\";\n}\n.uk-icon-star:before {\n  content: \"\\f005\";\n}\n.uk-icon-star-o:before {\n  content: \"\\f006\";\n}\n.uk-icon-user:before {\n  content: \"\\f007\";\n}\n.uk-icon-film:before {\n  content: \"\\f008\";\n}\n.uk-icon-th-large:before {\n  content: \"\\f009\";\n}\n.uk-icon-th:before {\n  content: \"\\f00a\";\n}\n.uk-icon-th-list:before {\n  content: \"\\f00b\";\n}\n.uk-icon-check:before {\n  content: \"\\f00c\";\n}\n.uk-icon-remove:before,\n.uk-icon-close:before,\n.uk-icon-times:before {\n  content: \"\\f00d\";\n}\n.uk-icon-search-plus:before {\n  content: \"\\f00e\";\n}\n.uk-icon-search-minus:before {\n  content: \"\\f010\";\n}\n.uk-icon-power-off:before {\n  content: \"\\f011\";\n}\n.uk-icon-signal:before {\n  content: \"\\f012\";\n}\n.uk-icon-gear:before,\n.uk-icon-cog:before {\n  content: \"\\f013\";\n}\n.uk-icon-trash-o:before {\n  content: \"\\f014\";\n}\n.uk-icon-home:before {\n  content: \"\\f015\";\n}\n.uk-icon-file-o:before {\n  content: \"\\f016\";\n}\n.uk-icon-clock-o:before {\n  content: \"\\f017\";\n}\n.uk-icon-road:before {\n  content: \"\\f018\";\n}\n.uk-icon-download:before {\n  content: \"\\f019\";\n}\n.uk-icon-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.uk-icon-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.uk-icon-inbox:before {\n  content: \"\\f01c\";\n}\n.uk-icon-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.uk-icon-rotate-right:before,\n.uk-icon-repeat:before {\n  content: \"\\f01e\";\n}\n.uk-icon-refresh:before {\n  content: \"\\f021\";\n}\n.uk-icon-list-alt:before {\n  content: \"\\f022\";\n}\n.uk-icon-lock:before {\n  content: \"\\f023\";\n}\n.uk-icon-flag:before {\n  content: \"\\f024\";\n}\n.uk-icon-headphones:before {\n  content: \"\\f025\";\n}\n.uk-icon-volume-off:before {\n  content: \"\\f026\";\n}\n.uk-icon-volume-down:before {\n  content: \"\\f027\";\n}\n.uk-icon-volume-up:before {\n  content: \"\\f028\";\n}\n.uk-icon-qrcode:before {\n  content: \"\\f029\";\n}\n.uk-icon-barcode:before {\n  content: \"\\f02a\";\n}\n.uk-icon-tag:before {\n  content: \"\\f02b\";\n}\n.uk-icon-tags:before {\n  content: \"\\f02c\";\n}\n.uk-icon-book:before {\n  content: \"\\f02d\";\n}\n.uk-icon-bookmark:before {\n  content: \"\\f02e\";\n}\n.uk-icon-print:before {\n  content: \"\\f02f\";\n}\n.uk-icon-camera:before {\n  content: \"\\f030\";\n}\n.uk-icon-font:before {\n  content: \"\\f031\";\n}\n.uk-icon-bold:before {\n  content: \"\\f032\";\n}\n.uk-icon-italic:before {\n  content: \"\\f033\";\n}\n.uk-icon-text-height:before {\n  content: \"\\f034\";\n}\n.uk-icon-text-width:before {\n  content: \"\\f035\";\n}\n.uk-icon-align-left:before {\n  content: \"\\f036\";\n}\n.uk-icon-align-center:before {\n  content: \"\\f037\";\n}\n.uk-icon-align-right:before {\n  content: \"\\f038\";\n}\n.uk-icon-align-justify:before {\n  content: \"\\f039\";\n}\n.uk-icon-list:before {\n  content: \"\\f03a\";\n}\n.uk-icon-dedent:before,\n.uk-icon-outdent:before {\n  content: \"\\f03b\";\n}\n.uk-icon-indent:before {\n  content: \"\\f03c\";\n}\n.uk-icon-video-camera:before {\n  content: \"\\f03d\";\n}\n.uk-icon-photo:before,\n.uk-icon-image:before,\n.uk-icon-picture-o:before {\n  content: \"\\f03e\";\n}\n.uk-icon-pencil:before {\n  content: \"\\f040\";\n}\n.uk-icon-map-marker:before {\n  content: \"\\f041\";\n}\n.uk-icon-adjust:before {\n  content: \"\\f042\";\n}\n.uk-icon-tint:before {\n  content: \"\\f043\";\n}\n.uk-icon-edit:before,\n.uk-icon-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.uk-icon-share-square-o:before {\n  content: \"\\f045\";\n}\n.uk-icon-check-square-o:before {\n  content: \"\\f046\";\n}\n.uk-icon-arrows:before {\n  content: \"\\f047\";\n}\n.uk-icon-step-backward:before {\n  content: \"\\f048\";\n}\n.uk-icon-fast-backward:before {\n  content: \"\\f049\";\n}\n.uk-icon-backward:before {\n  content: \"\\f04a\";\n}\n.uk-icon-play:before {\n  content: \"\\f04b\";\n}\n.uk-icon-pause:before {\n  content: \"\\f04c\";\n}\n.uk-icon-stop:before {\n  content: \"\\f04d\";\n}\n.uk-icon-forward:before {\n  content: \"\\f04e\";\n}\n.uk-icon-fast-forward:before {\n  content: \"\\f050\";\n}\n.uk-icon-step-forward:before {\n  content: \"\\f051\";\n}\n.uk-icon-eject:before {\n  content: \"\\f052\";\n}\n.uk-icon-chevron-left:before {\n  content: \"\\f053\";\n}\n.uk-icon-chevron-right:before {\n  content: \"\\f054\";\n}\n.uk-icon-plus-circle:before {\n  content: \"\\f055\";\n}\n.uk-icon-minus-circle:before {\n  content: \"\\f056\";\n}\n.uk-icon-times-circle:before {\n  content: \"\\f057\";\n}\n.uk-icon-check-circle:before {\n  content: \"\\f058\";\n}\n.uk-icon-question-circle:before {\n  content: \"\\f059\";\n}\n.uk-icon-info-circle:before {\n  content: \"\\f05a\";\n}\n.uk-icon-crosshairs:before {\n  content: \"\\f05b\";\n}\n.uk-icon-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.uk-icon-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.uk-icon-ban:before {\n  content: \"\\f05e\";\n}\n.uk-icon-arrow-left:before {\n  content: \"\\f060\";\n}\n.uk-icon-arrow-right:before {\n  content: \"\\f061\";\n}\n.uk-icon-arrow-up:before {\n  content: \"\\f062\";\n}\n.uk-icon-arrow-down:before {\n  content: \"\\f063\";\n}\n.uk-icon-mail-forward:before,\n.uk-icon-share:before {\n  content: \"\\f064\";\n}\n.uk-icon-expand:before {\n  content: \"\\f065\";\n}\n.uk-icon-compress:before {\n  content: \"\\f066\";\n}\n.uk-icon-plus:before {\n  content: \"\\f067\";\n}\n.uk-icon-minus:before {\n  content: \"\\f068\";\n}\n.uk-icon-asterisk:before {\n  content: \"\\f069\";\n}\n.uk-icon-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.uk-icon-gift:before {\n  content: \"\\f06b\";\n}\n.uk-icon-leaf:before {\n  content: \"\\f06c\";\n}\n.uk-icon-fire:before {\n  content: \"\\f06d\";\n}\n.uk-icon-eye:before {\n  content: \"\\f06e\";\n}\n.uk-icon-eye-slash:before {\n  content: \"\\f070\";\n}\n.uk-icon-warning:before,\n.uk-icon-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.uk-icon-plane:before {\n  content: \"\\f072\";\n}\n.uk-icon-calendar:before {\n  content: \"\\f073\";\n}\n.uk-icon-random:before {\n  content: \"\\f074\";\n}\n.uk-icon-comment:before {\n  content: \"\\f075\";\n}\n.uk-icon-magnet:before {\n  content: \"\\f076\";\n}\n.uk-icon-chevron-up:before {\n  content: \"\\f077\";\n}\n.uk-icon-chevron-down:before {\n  content: \"\\f078\";\n}\n.uk-icon-retweet:before {\n  content: \"\\f079\";\n}\n.uk-icon-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.uk-icon-folder:before {\n  content: \"\\f07b\";\n}\n.uk-icon-folder-open:before {\n  content: \"\\f07c\";\n}\n.uk-icon-arrows-v:before {\n  content: \"\\f07d\";\n}\n.uk-icon-arrows-h:before {\n  content: \"\\f07e\";\n}\n.uk-icon-bar-chart-o:before,\n.uk-icon-bar-chart:before {\n  content: \"\\f080\";\n}\n.uk-icon-twitter-square:before {\n  content: \"\\f081\";\n}\n.uk-icon-facebook-square:before {\n  content: \"\\f082\";\n}\n.uk-icon-camera-retro:before {\n  content: \"\\f083\";\n}\n.uk-icon-key:before {\n  content: \"\\f084\";\n}\n.uk-icon-gears:before,\n.uk-icon-cogs:before {\n  content: \"\\f085\";\n}\n.uk-icon-comments:before {\n  content: \"\\f086\";\n}\n.uk-icon-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.uk-icon-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.uk-icon-star-half:before {\n  content: \"\\f089\";\n}\n.uk-icon-heart-o:before {\n  content: \"\\f08a\";\n}\n.uk-icon-sign-out:before {\n  content: \"\\f08b\";\n}\n.uk-icon-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.uk-icon-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.uk-icon-external-link:before {\n  content: \"\\f08e\";\n}\n.uk-icon-sign-in:before {\n  content: \"\\f090\";\n}\n.uk-icon-trophy:before {\n  content: \"\\f091\";\n}\n.uk-icon-github-square:before {\n  content: \"\\f092\";\n}\n.uk-icon-upload:before {\n  content: \"\\f093\";\n}\n.uk-icon-lemon-o:before {\n  content: \"\\f094\";\n}\n.uk-icon-phone:before {\n  content: \"\\f095\";\n}\n.uk-icon-square-o:before {\n  content: \"\\f096\";\n}\n.uk-icon-bookmark-o:before {\n  content: \"\\f097\";\n}\n.uk-icon-phone-square:before {\n  content: \"\\f098\";\n}\n.uk-icon-twitter:before {\n  content: \"\\f099\";\n}\n.uk-icon-facebook-f:before,\n.uk-icon-facebook:before {\n  content: \"\\f09a\";\n}\n.uk-icon-github:before {\n  content: \"\\f09b\";\n}\n.uk-icon-unlock:before {\n  content: \"\\f09c\";\n}\n.uk-icon-credit-card:before {\n  content: \"\\f09d\";\n}\n.uk-icon-rss:before {\n  content: \"\\f09e\";\n}\n.uk-icon-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.uk-icon-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.uk-icon-bell:before {\n  content: \"\\f0f3\";\n}\n.uk-icon-certificate:before {\n  content: \"\\f0a3\";\n}\n.uk-icon-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.uk-icon-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.uk-icon-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.uk-icon-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.uk-icon-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.uk-icon-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.uk-icon-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.uk-icon-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.uk-icon-globe:before {\n  content: \"\\f0ac\";\n}\n.uk-icon-wrench:before {\n  content: \"\\f0ad\";\n}\n.uk-icon-tasks:before {\n  content: \"\\f0ae\";\n}\n.uk-icon-filter:before {\n  content: \"\\f0b0\";\n}\n.uk-icon-briefcase:before {\n  content: \"\\f0b1\";\n}\n.uk-icon-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.uk-icon-group:before,\n.uk-icon-users:before {\n  content: \"\\f0c0\";\n}\n.uk-icon-chain:before,\n.uk-icon-link:before {\n  content: \"\\f0c1\";\n}\n.uk-icon-cloud:before {\n  content: \"\\f0c2\";\n}\n.uk-icon-flask:before {\n  content: \"\\f0c3\";\n}\n.uk-icon-cut:before,\n.uk-icon-scissors:before {\n  content: \"\\f0c4\";\n}\n.uk-icon-copy:before,\n.uk-icon-files-o:before {\n  content: \"\\f0c5\";\n}\n.uk-icon-paperclip:before {\n  content: \"\\f0c6\";\n}\n.uk-icon-save:before,\n.uk-icon-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.uk-icon-square:before {\n  content: \"\\f0c8\";\n}\n.uk-icon-navicon:before,\n.uk-icon-reorder:before,\n.uk-icon-bars:before {\n  content: \"\\f0c9\";\n}\n.uk-icon-list-ul:before {\n  content: \"\\f0ca\";\n}\n.uk-icon-list-ol:before {\n  content: \"\\f0cb\";\n}\n.uk-icon-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.uk-icon-underline:before {\n  content: \"\\f0cd\";\n}\n.uk-icon-table:before {\n  content: \"\\f0ce\";\n}\n.uk-icon-magic:before {\n  content: \"\\f0d0\";\n}\n.uk-icon-truck:before {\n  content: \"\\f0d1\";\n}\n.uk-icon-pinterest:before {\n  content: \"\\f0d2\";\n}\n.uk-icon-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.uk-icon-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.uk-icon-google-plus:before {\n  content: \"\\f0d5\";\n}\n.uk-icon-money:before {\n  content: \"\\f0d6\";\n}\n.uk-icon-caret-down:before {\n  content: \"\\f0d7\";\n}\n.uk-icon-caret-up:before {\n  content: \"\\f0d8\";\n}\n.uk-icon-caret-left:before {\n  content: \"\\f0d9\";\n}\n.uk-icon-caret-right:before {\n  content: \"\\f0da\";\n}\n.uk-icon-columns:before {\n  content: \"\\f0db\";\n}\n.uk-icon-unsorted:before,\n.uk-icon-sort:before {\n  content: \"\\f0dc\";\n}\n.uk-icon-sort-down:before,\n.uk-icon-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.uk-icon-sort-up:before,\n.uk-icon-sort-asc:before {\n  content: \"\\f0de\";\n}\n.uk-icon-envelope:before {\n  content: \"\\f0e0\";\n}\n.uk-icon-linkedin:before {\n  content: \"\\f0e1\";\n}\n.uk-icon-rotate-left:before,\n.uk-icon-undo:before {\n  content: \"\\f0e2\";\n}\n.uk-icon-legal:before,\n.uk-icon-gavel:before {\n  content: \"\\f0e3\";\n}\n.uk-icon-dashboard:before,\n.uk-icon-tachometer:before {\n  content: \"\\f0e4\";\n}\n.uk-icon-comment-o:before {\n  content: \"\\f0e5\";\n}\n.uk-icon-comments-o:before {\n  content: \"\\f0e6\";\n}\n.uk-icon-flash:before,\n.uk-icon-bolt:before {\n  content: \"\\f0e7\";\n}\n.uk-icon-sitemap:before {\n  content: \"\\f0e8\";\n}\n.uk-icon-umbrella:before {\n  content: \"\\f0e9\";\n}\n.uk-icon-paste:before,\n.uk-icon-clipboard:before {\n  content: \"\\f0ea\";\n}\n.uk-icon-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.uk-icon-exchange:before {\n  content: \"\\f0ec\";\n}\n.uk-icon-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.uk-icon-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.uk-icon-user-md:before {\n  content: \"\\f0f0\";\n}\n.uk-icon-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.uk-icon-suitcase:before {\n  content: \"\\f0f2\";\n}\n.uk-icon-bell-o:before {\n  content: \"\\f0a2\";\n}\n.uk-icon-coffee:before {\n  content: \"\\f0f4\";\n}\n.uk-icon-cutlery:before {\n  content: \"\\f0f5\";\n}\n.uk-icon-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.uk-icon-building-o:before {\n  content: \"\\f0f7\";\n}\n.uk-icon-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.uk-icon-ambulance:before {\n  content: \"\\f0f9\";\n}\n.uk-icon-medkit:before {\n  content: \"\\f0fa\";\n}\n.uk-icon-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.uk-icon-beer:before {\n  content: \"\\f0fc\";\n}\n.uk-icon-h-square:before {\n  content: \"\\f0fd\";\n}\n.uk-icon-plus-square:before {\n  content: \"\\f0fe\";\n}\n.uk-icon-angle-double-left:before {\n  content: \"\\f100\";\n}\n.uk-icon-angle-double-right:before {\n  content: \"\\f101\";\n}\n.uk-icon-angle-double-up:before {\n  content: \"\\f102\";\n}\n.uk-icon-angle-double-down:before {\n  content: \"\\f103\";\n}\n.uk-icon-angle-left:before {\n  content: \"\\f104\";\n}\n.uk-icon-angle-right:before {\n  content: \"\\f105\";\n}\n.uk-icon-angle-up:before {\n  content: \"\\f106\";\n}\n.uk-icon-angle-down:before {\n  content: \"\\f107\";\n}\n.uk-icon-desktop:before {\n  content: \"\\f108\";\n}\n.uk-icon-laptop:before {\n  content: \"\\f109\";\n}\n.uk-icon-tablet:before {\n  content: \"\\f10a\";\n}\n.uk-icon-mobile-phone:before,\n.uk-icon-mobile:before {\n  content: \"\\f10b\";\n}\n.uk-icon-circle-o:before {\n  content: \"\\f10c\";\n}\n.uk-icon-quote-left:before {\n  content: \"\\f10d\";\n}\n.uk-icon-quote-right:before {\n  content: \"\\f10e\";\n}\n.uk-icon-spinner:before {\n  content: \"\\f110\";\n}\n.uk-icon-circle:before {\n  content: \"\\f111\";\n}\n.uk-icon-mail-reply:before,\n.uk-icon-reply:before {\n  content: \"\\f112\";\n}\n.uk-icon-github-alt:before {\n  content: \"\\f113\";\n}\n.uk-icon-folder-o:before {\n  content: \"\\f114\";\n}\n.uk-icon-folder-open-o:before {\n  content: \"\\f115\";\n}\n.uk-icon-smile-o:before {\n  content: \"\\f118\";\n}\n.uk-icon-frown-o:before {\n  content: \"\\f119\";\n}\n.uk-icon-meh-o:before {\n  content: \"\\f11a\";\n}\n.uk-icon-gamepad:before {\n  content: \"\\f11b\";\n}\n.uk-icon-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.uk-icon-flag-o:before {\n  content: \"\\f11d\";\n}\n.uk-icon-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.uk-icon-terminal:before {\n  content: \"\\f120\";\n}\n.uk-icon-code:before {\n  content: \"\\f121\";\n}\n.uk-icon-mail-reply-all:before,\n.uk-icon-reply-all:before {\n  content: \"\\f122\";\n}\n.uk-icon-star-half-empty:before,\n.uk-icon-star-half-full:before,\n.uk-icon-star-half-o:before {\n  content: \"\\f123\";\n}\n.uk-icon-location-arrow:before {\n  content: \"\\f124\";\n}\n.uk-icon-crop:before {\n  content: \"\\f125\";\n}\n.uk-icon-code-fork:before {\n  content: \"\\f126\";\n}\n.uk-icon-unlink:before,\n.uk-icon-chain-broken:before {\n  content: \"\\f127\";\n}\n.uk-icon-question:before {\n  content: \"\\f128\";\n}\n.uk-icon-info:before {\n  content: \"\\f129\";\n}\n.uk-icon-exclamation:before {\n  content: \"\\f12a\";\n}\n.uk-icon-superscript:before {\n  content: \"\\f12b\";\n}\n.uk-icon-subscript:before {\n  content: \"\\f12c\";\n}\n.uk-icon-eraser:before {\n  content: \"\\f12d\";\n}\n.uk-icon-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.uk-icon-microphone:before {\n  content: \"\\f130\";\n}\n.uk-icon-microphone-slash:before {\n  content: \"\\f131\";\n}\n.uk-icon-shield:before {\n  content: \"\\f132\";\n}\n.uk-icon-calendar-o:before {\n  content: \"\\f133\";\n}\n.uk-icon-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.uk-icon-rocket:before {\n  content: \"\\f135\";\n}\n.uk-icon-maxcdn:before {\n  content: \"\\f136\";\n}\n.uk-icon-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.uk-icon-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.uk-icon-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.uk-icon-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.uk-icon-html5:before {\n  content: \"\\f13b\";\n}\n.uk-icon-css3:before {\n  content: \"\\f13c\";\n}\n.uk-icon-anchor:before {\n  content: \"\\f13d\";\n}\n.uk-icon-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.uk-icon-bullseye:before {\n  content: \"\\f140\";\n}\n.uk-icon-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.uk-icon-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.uk-icon-rss-square:before {\n  content: \"\\f143\";\n}\n.uk-icon-play-circle:before {\n  content: \"\\f144\";\n}\n.uk-icon-ticket:before {\n  content: \"\\f145\";\n}\n.uk-icon-minus-square:before {\n  content: \"\\f146\";\n}\n.uk-icon-minus-square-o:before {\n  content: \"\\f147\";\n}\n.uk-icon-level-up:before {\n  content: \"\\f148\";\n}\n.uk-icon-level-down:before {\n  content: \"\\f149\";\n}\n.uk-icon-check-square:before {\n  content: \"\\f14a\";\n}\n.uk-icon-pencil-square:before {\n  content: \"\\f14b\";\n}\n.uk-icon-external-link-square:before {\n  content: \"\\f14c\";\n}\n.uk-icon-share-square:before {\n  content: \"\\f14d\";\n}\n.uk-icon-compass:before {\n  content: \"\\f14e\";\n}\n.uk-icon-toggle-down:before,\n.uk-icon-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.uk-icon-toggle-up:before,\n.uk-icon-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.uk-icon-toggle-right:before,\n.uk-icon-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.uk-icon-euro:before,\n.uk-icon-eur:before {\n  content: \"\\f153\";\n}\n.uk-icon-gbp:before {\n  content: \"\\f154\";\n}\n.uk-icon-dollar:before,\n.uk-icon-usd:before {\n  content: \"\\f155\";\n}\n.uk-icon-rupee:before,\n.uk-icon-inr:before {\n  content: \"\\f156\";\n}\n.uk-icon-cny:before,\n.uk-icon-rmb:before,\n.uk-icon-yen:before,\n.uk-icon-jpy:before {\n  content: \"\\f157\";\n}\n.uk-icon-ruble:before,\n.uk-icon-rouble:before,\n.uk-icon-rub:before {\n  content: \"\\f158\";\n}\n.uk-icon-won:before,\n.uk-icon-krw:before {\n  content: \"\\f159\";\n}\n.uk-icon-bitcoin:before,\n.uk-icon-btc:before {\n  content: \"\\f15a\";\n}\n.uk-icon-file:before {\n  content: \"\\f15b\";\n}\n.uk-icon-file-text:before {\n  content: \"\\f15c\";\n}\n.uk-icon-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.uk-icon-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.uk-icon-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.uk-icon-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.uk-icon-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.uk-icon-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.uk-icon-thumbs-up:before {\n  content: \"\\f164\";\n}\n.uk-icon-thumbs-down:before {\n  content: \"\\f165\";\n}\n.uk-icon-youtube-square:before {\n  content: \"\\f166\";\n}\n.uk-icon-youtube:before {\n  content: \"\\f167\";\n}\n.uk-icon-xing:before {\n  content: \"\\f168\";\n}\n.uk-icon-xing-square:before {\n  content: \"\\f169\";\n}\n.uk-icon-youtube-play:before {\n  content: \"\\f16a\";\n}\n.uk-icon-dropbox:before {\n  content: \"\\f16b\";\n}\n.uk-icon-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.uk-icon-instagram:before {\n  content: \"\\f16d\";\n}\n.uk-icon-flickr:before {\n  content: \"\\f16e\";\n}\n.uk-icon-adn:before {\n  content: \"\\f170\";\n}\n.uk-icon-bitbucket:before {\n  content: \"\\f171\";\n}\n.uk-icon-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.uk-icon-tumblr:before {\n  content: \"\\f173\";\n}\n.uk-icon-tumblr-square:before {\n  content: \"\\f174\";\n}\n.uk-icon-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.uk-icon-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.uk-icon-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.uk-icon-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.uk-icon-apple:before {\n  content: \"\\f179\";\n}\n.uk-icon-windows:before {\n  content: \"\\f17a\";\n}\n.uk-icon-android:before {\n  content: \"\\f17b\";\n}\n.uk-icon-linux:before {\n  content: \"\\f17c\";\n}\n.uk-icon-dribbble:before {\n  content: \"\\f17d\";\n}\n.uk-icon-skype:before {\n  content: \"\\f17e\";\n}\n.uk-icon-foursquare:before {\n  content: \"\\f180\";\n}\n.uk-icon-trello:before {\n  content: \"\\f181\";\n}\n.uk-icon-female:before {\n  content: \"\\f182\";\n}\n.uk-icon-male:before {\n  content: \"\\f183\";\n}\n.uk-icon-gittip:before,\n.uk-icon-gratipay:before {\n  content: \"\\f184\";\n}\n.uk-icon-sun-o:before {\n  content: \"\\f185\";\n}\n.uk-icon-moon-o:before {\n  content: \"\\f186\";\n}\n.uk-icon-archive:before {\n  content: \"\\f187\";\n}\n.uk-icon-bug:before {\n  content: \"\\f188\";\n}\n.uk-icon-vk:before {\n  content: \"\\f189\";\n}\n.uk-icon-weibo:before {\n  content: \"\\f18a\";\n}\n.uk-icon-renren:before {\n  content: \"\\f18b\";\n}\n.uk-icon-pagelines:before {\n  content: \"\\f18c\";\n}\n.uk-icon-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.uk-icon-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.uk-icon-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.uk-icon-toggle-left:before,\n.uk-icon-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.uk-icon-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.uk-icon-wheelchair:before {\n  content: \"\\f193\";\n}\n.uk-icon-vimeo-square:before {\n  content: \"\\f194\";\n}\n.uk-icon-turkish-lira:before,\n.uk-icon-try:before {\n  content: \"\\f195\";\n}\n.uk-icon-plus-square-o:before {\n  content: \"\\f196\";\n}\n.uk-icon-space-shuttle:before {\n  content: \"\\f197\";\n}\n.uk-icon-slack:before {\n  content: \"\\f198\";\n}\n.uk-icon-envelope-square:before {\n  content: \"\\f199\";\n}\n.uk-icon-wordpress:before {\n  content: \"\\f19a\";\n}\n.uk-icon-openid:before {\n  content: \"\\f19b\";\n}\n.uk-icon-institution:before,\n.uk-icon-bank:before,\n.uk-icon-university:before {\n  content: \"\\f19c\";\n}\n.uk-icon-mortar-board:before,\n.uk-icon-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.uk-icon-yahoo:before {\n  content: \"\\f19e\";\n}\n.uk-icon-google:before {\n  content: \"\\f1a0\";\n}\n.uk-icon-reddit:before {\n  content: \"\\f1a1\";\n}\n.uk-icon-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.uk-icon-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.uk-icon-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.uk-icon-delicious:before {\n  content: \"\\f1a5\";\n}\n.uk-icon-digg:before {\n  content: \"\\f1a6\";\n}\n.uk-icon-pied-piper:before {\n  content: \"\\f1a7\";\n}\n.uk-icon-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.uk-icon-drupal:before {\n  content: \"\\f1a9\";\n}\n.uk-icon-joomla:before {\n  content: \"\\f1aa\";\n}\n.uk-icon-language:before {\n  content: \"\\f1ab\";\n}\n.uk-icon-fax:before {\n  content: \"\\f1ac\";\n}\n.uk-icon-building:before {\n  content: \"\\f1ad\";\n}\n.uk-icon-child:before {\n  content: \"\\f1ae\";\n}\n.uk-icon-paw:before {\n  content: \"\\f1b0\";\n}\n.uk-icon-spoon:before {\n  content: \"\\f1b1\";\n}\n.uk-icon-cube:before {\n  content: \"\\f1b2\";\n}\n.uk-icon-cubes:before {\n  content: \"\\f1b3\";\n}\n.uk-icon-behance:before {\n  content: \"\\f1b4\";\n}\n.uk-icon-behance-square:before {\n  content: \"\\f1b5\";\n}\n.uk-icon-steam:before {\n  content: \"\\f1b6\";\n}\n.uk-icon-steam-square:before {\n  content: \"\\f1b7\";\n}\n.uk-icon-recycle:before {\n  content: \"\\f1b8\";\n}\n.uk-icon-automobile:before,\n.uk-icon-car:before {\n  content: \"\\f1b9\";\n}\n.uk-icon-cab:before,\n.uk-icon-taxi:before {\n  content: \"\\f1ba\";\n}\n.uk-icon-tree:before {\n  content: \"\\f1bb\";\n}\n.uk-icon-spotify:before {\n  content: \"\\f1bc\";\n}\n.uk-icon-deviantart:before {\n  content: \"\\f1bd\";\n}\n.uk-icon-soundcloud:before {\n  content: \"\\f1be\";\n}\n.uk-icon-database:before {\n  content: \"\\f1c0\";\n}\n.uk-icon-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.uk-icon-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.uk-icon-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.uk-icon-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.uk-icon-file-photo-o:before,\n.uk-icon-file-picture-o:before,\n.uk-icon-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.uk-icon-file-zip-o:before,\n.uk-icon-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.uk-icon-file-sound-o:before,\n.uk-icon-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.uk-icon-file-movie-o:before,\n.uk-icon-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.uk-icon-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.uk-icon-vine:before {\n  content: \"\\f1ca\";\n}\n.uk-icon-codepen:before {\n  content: \"\\f1cb\";\n}\n.uk-icon-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.uk-icon-life-bouy:before,\n.uk-icon-life-buoy:before,\n.uk-icon-life-saver:before,\n.uk-icon-support:before,\n.uk-icon-life-ring:before {\n  content: \"\\f1cd\";\n}\n.uk-icon-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.uk-icon-ra:before,\n.uk-icon-rebel:before {\n  content: \"\\f1d0\";\n}\n.uk-icon-ge:before,\n.uk-icon-empire:before {\n  content: \"\\f1d1\";\n}\n.uk-icon-git-square:before {\n  content: \"\\f1d2\";\n}\n.uk-icon-git:before {\n  content: \"\\f1d3\";\n}\n.uk-icon-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.uk-icon-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.uk-icon-qq:before {\n  content: \"\\f1d6\";\n}\n.uk-icon-wechat:before,\n.uk-icon-weixin:before {\n  content: \"\\f1d7\";\n}\n.uk-icon-send:before,\n.uk-icon-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.uk-icon-send-o:before,\n.uk-icon-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.uk-icon-history:before {\n  content: \"\\f1da\";\n}\n.uk-icon-genderless:before,\n.uk-icon-circle-thin:before {\n  content: \"\\f1db\";\n}\n.uk-icon-header:before {\n  content: \"\\f1dc\";\n}\n.uk-icon-paragraph:before {\n  content: \"\\f1dd\";\n}\n.uk-icon-sliders:before {\n  content: \"\\f1de\";\n}\n.uk-icon-share-alt:before {\n  content: \"\\f1e0\";\n}\n.uk-icon-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.uk-icon-bomb:before {\n  content: \"\\f1e2\";\n}\n.uk-icon-soccer-ball-o:before,\n.uk-icon-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.uk-icon-tty:before {\n  content: \"\\f1e4\";\n}\n.uk-icon-binoculars:before {\n  content: \"\\f1e5\";\n}\n.uk-icon-plug:before {\n  content: \"\\f1e6\";\n}\n.uk-icon-slideshare:before {\n  content: \"\\f1e7\";\n}\n.uk-icon-twitch:before {\n  content: \"\\f1e8\";\n}\n.uk-icon-yelp:before {\n  content: \"\\f1e9\";\n}\n.uk-icon-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.uk-icon-wifi:before {\n  content: \"\\f1eb\";\n}\n.uk-icon-calculator:before {\n  content: \"\\f1ec\";\n}\n.uk-icon-paypal:before {\n  content: \"\\f1ed\";\n}\n.uk-icon-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.uk-icon-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.uk-icon-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.uk-icon-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.uk-icon-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.uk-icon-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.uk-icon-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.uk-icon-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.uk-icon-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.uk-icon-trash:before {\n  content: \"\\f1f8\";\n}\n.uk-icon-copyright:before {\n  content: \"\\f1f9\";\n}\n.uk-icon-at:before {\n  content: \"\\f1fa\";\n}\n.uk-icon-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.uk-icon-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.uk-icon-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.uk-icon-area-chart:before {\n  content: \"\\f1fe\";\n}\n.uk-icon-pie-chart:before {\n  content: \"\\f200\";\n}\n.uk-icon-line-chart:before {\n  content: \"\\f201\";\n}\n.uk-icon-lastfm:before {\n  content: \"\\f202\";\n}\n.uk-icon-lastfm-square:before {\n  content: \"\\f203\";\n}\n.uk-icon-toggle-off:before {\n  content: \"\\f204\";\n}\n.uk-icon-toggle-on:before {\n  content: \"\\f205\";\n}\n.uk-icon-bicycle:before {\n  content: \"\\f206\";\n}\n.uk-icon-bus:before {\n  content: \"\\f207\";\n}\n.uk-icon-ioxhost:before {\n  content: \"\\f208\";\n}\n.uk-icon-angellist:before {\n  content: \"\\f209\";\n}\n.uk-icon-cc:before {\n  content: \"\\f20a\";\n}\n.uk-icon-shekel:before,\n.uk-icon-sheqel:before,\n.uk-icon-ils:before {\n  content: \"\\f20b\";\n}\n.uk-icon-meanpath:before {\n  content: \"\\f20c\";\n}\n.uk-icon-buysellads:before {\n  content: \"\\f20d\";\n}\n.uk-icon-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.uk-icon-dashcube:before {\n  content: \"\\f210\";\n}\n.uk-icon-forumbee:before {\n  content: \"\\f211\";\n}\n.uk-icon-leanpub:before {\n  content: \"\\f212\";\n}\n.uk-icon-sellsy:before {\n  content: \"\\f213\";\n}\n.uk-icon-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.uk-icon-simplybuilt:before {\n  content: \"\\f215\";\n}\n.uk-icon-skyatlas:before {\n  content: \"\\f216\";\n}\n.uk-icon-cart-plus:before {\n  content: \"\\f217\";\n}\n.uk-icon-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.uk-icon-diamond:before {\n  content: \"\\f219\";\n}\n.uk-icon-ship:before {\n  content: \"\\f21a\";\n}\n.uk-icon-user-secret:before {\n  content: \"\\f21b\";\n}\n.uk-icon-motorcycle:before {\n  content: \"\\f21c\";\n}\n.uk-icon-street-view:before {\n  content: \"\\f21d\";\n}\n.uk-icon-heartbeat:before {\n  content: \"\\f21e\";\n}\n.uk-icon-venus:before {\n  content: \"\\f221\";\n}\n.uk-icon-mars:before {\n  content: \"\\f222\";\n}\n.uk-icon-mercury:before {\n  content: \"\\f223\";\n}\n.uk-icon-transgender:before {\n  content: \"\\f224\";\n}\n.uk-icon-transgender-alt:before {\n  content: \"\\f225\";\n}\n.uk-icon-venus-double:before {\n  content: \"\\f226\";\n}\n.uk-icon-mars-double:before {\n  content: \"\\f227\";\n}\n.uk-icon-venus-mars:before {\n  content: \"\\f228\";\n}\n.uk-icon-mars-stroke:before {\n  content: \"\\f229\";\n}\n.uk-icon-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.uk-icon-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.uk-icon-neuter:before {\n  content: \"\\f22c\";\n}\n.uk-icon-facebook-official:before {\n  content: \"\\f230\";\n}\n.uk-icon-pinterest-p:before {\n  content: \"\\f231\";\n}\n.uk-icon-whatsapp:before {\n  content: \"\\f232\";\n}\n.uk-icon-server:before {\n  content: \"\\f233\";\n}\n.uk-icon-user-plus:before {\n  content: \"\\f234\";\n}\n.uk-icon-user-times:before {\n  content: \"\\f235\";\n}\n.uk-icon-hotel:before,\n.uk-icon-bed:before {\n  content: \"\\f236\";\n}\n.uk-icon-viacoin:before {\n  content: \"\\f237\";\n}\n.uk-icon-train:before {\n  content: \"\\f238\";\n}\n.uk-icon-subway:before {\n  content: \"\\f239\";\n}\n.uk-icon-medium-logo:before {\n  content: \"\\f23a\";\n}\n.uk-icon-500px:before {\n  content: \"\\f26e\";\n}\n.uk-icon-amazon:before {\n  content: \"\\f270\";\n}\n.uk-icon-balance-scale:before {\n  content: \"\\f24e\";\n}\n.uk-icon-battery-empty:before,\n.uk-icon-battery-0:before {\n  content: \"\\f244\";\n}\n.uk-icon-battery-quarter:before,\n.uk-icon-battery-1:before {\n  content: \"\\f243\";\n}\n.uk-icon-battery-half:before,\n.uk-icon-battery-2:before {\n  content: \"\\f242\";\n}\n.uk-icon-battery-three-quarters:before,\n.uk-icon-battery-3:before {\n  content: \"\\f241\";\n}\n.uk-icon-battery-full:before,\n.uk-icon-battery-4:before {\n  content: \"\\f240\";\n}\n.uk-icon-black-tie:before {\n  content: \"\\f27e\";\n}\n.uk-icon-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.uk-icon-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.uk-icon-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.uk-icon-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.uk-icon-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.uk-icon-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.uk-icon-chrome:before {\n  content: \"\\f268\";\n}\n.uk-icon-clone:before {\n  content: \"\\f24d\";\n}\n.uk-icon-commenting:before {\n  content: \"\\f27a\";\n}\n.uk-icon-commenting-o:before {\n  content: \"\\f27b\";\n}\n.uk-icon-contao:before {\n  content: \"\\f26d\";\n}\n.uk-icon-creative-commons:before {\n  content: \"\\f25e\";\n}\n.uk-icon-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.uk-icon-firefox:before {\n  content: \"\\f269\";\n}\n.uk-icon-fonticons:before {\n  content: \"\\f280\";\n}\n.uk-icon-get-pocket:before {\n  content: \"\\f265\";\n}\n.uk-icon-gg:before {\n  content: \"\\f260\";\n}\n.uk-icon-gg-circle:before {\n  content: \"\\f261\";\n}\n.uk-icon-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.uk-icon-hand-stop-o:before,\n.uk-icon-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.uk-icon-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.uk-icon-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.uk-icon-hand-grab-o:before,\n.uk-icon-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.uk-icon-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.uk-icon-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.uk-icon-hourglass:before {\n  content: \"\\f254\";\n}\n.uk-icon-hourglass-o:before {\n  content: \"\\f250\";\n}\n.uk-icon-hourglass-1:before,\n.uk-icon-hourglass-start:before {\n  content: \"\\f251\";\n}\n.uk-icon-hourglass-2:before,\n.uk-icon-hourglass-half:before {\n  content: \"\\f252\";\n}\n.uk-icon-hourglass-3:before,\n.uk-icon-hourglass-end:before {\n  content: \"\\f253\";\n}\n.uk-icon-houzz:before {\n  content: \"\\f27c\";\n}\n.uk-icon-i-cursor:before {\n  content: \"\\f246\";\n}\n.uk-icon-industry:before {\n  content: \"\\f275\";\n}\n.uk-icon-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.uk-icon-map:before {\n  content: \"\\f279\";\n}\n.uk-icon-map-o:before {\n  content: \"\\f278\";\n}\n.uk-icon-map-pin:before {\n  content: \"\\f276\";\n}\n.uk-icon-map-signs:before {\n  content: \"\\f277\";\n}\n.uk-icon-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.uk-icon-object-group:before {\n  content: \"\\f247\";\n}\n.uk-icon-object-ungroup:before {\n  content: \"\\f248\";\n}\n.uk-icon-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.uk-icon-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.uk-icon-opencart:before {\n  content: \"\\f23d\";\n}\n.uk-icon-opera:before {\n  content: \"\\f26a\";\n}\n.uk-icon-optin-monster:before {\n  content: \"\\f23c\";\n}\n.uk-icon-registered:before {\n  content: \"\\f25d\";\n}\n.uk-icon-safari:before {\n  content: \"\\f267\";\n}\n.uk-icon-sticky-note:before {\n  content: \"\\f249\";\n}\n.uk-icon-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.uk-icon-tv:before,\n.uk-icon-television:before {\n  content: \"\\f26c\";\n}\n.uk-icon-trademark:before {\n  content: \"\\f25c\";\n}\n.uk-icon-tripadvisor:before {\n  content: \"\\f262\";\n}\n.uk-icon-vimeo:before {\n  content: \"\\f27d\";\n}\n.uk-icon-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.uk-icon-yc:before,\n.uk-icon-y-combinator:before {\n  content: \"\\f23b\";\n}\n.uk-icon-yc-square:before,\n.uk-icon-y-combinator-square:before {\n  content: \"\\f1d4\";\n}\n.uk-icon-bluetooth:before {\n  content: \"\\f293\";\n}\n.uk-icon-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.uk-icon-codiepie:before {\n  content: \"\\f284\";\n}\n.uk-icon-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.uk-icon-edge:before {\n  content: \"\\f282\";\n}\n.uk-icon-fort-awesome:before {\n  content: \"\\f286\";\n}\n.uk-icon-hashtag:before {\n  content: \"\\f292\";\n}\n.uk-icon-mixcloud:before {\n  content: \"\\f289\";\n}\n.uk-icon-modx:before {\n  content: \"\\f285\";\n}\n.uk-icon-pause-circle:before {\n  content: \"\\f28b\";\n}\n.uk-icon-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.uk-icon-percent:before {\n  content: \"\\f295\";\n}\n.uk-icon-product-hunt:before {\n  content: \"\\f288\";\n}\n.uk-icon-reddit-alien:before {\n  content: \"\\f281\";\n}\n.uk-icon-scribd:before {\n  content: \"\\f28a\";\n}\n.uk-icon-shopping-bag:before {\n  content: \"\\f290\";\n}\n.uk-icon-shopping-basket:before {\n  content: \"\\f291\";\n}\n.uk-icon-stop-circle:before {\n  content: \"\\f28d\";\n}\n.uk-icon-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.uk-icon-usb:before {\n  content: \"\\f287\";\n}\n.uk-icon-american-sign-language-interpreting:before,\n.uk-icon-asl-interpreting:before {\n  content: \"\\f2a3\";\n}\n.uk-icon-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.uk-icon-audio-description:before {\n  content: \"\\f29e\";\n}\n.uk-icon-blind:before {\n  content: \"\\f29d\";\n}\n.uk-icon-braille:before {\n  content: \"\\f2a1\";\n}\n.uk-icon-deaf:before,\n.uk-icon-deafness:before {\n  content: \"\\f2a4\";\n}\n.uk-icon-envira:before {\n  content: \"\\f299\";\n}\n.uk-icon-font-awesome:before,\n.uk-icon-fa:before {\n  content: \"\\f2b4\";\n}\n.uk-icon-first-order:before {\n  content: \"\\f2b0\";\n}\n.uk-icon-gitlab:before {\n  content: \"\\f296\";\n}\n.uk-icon-glide:before {\n  content: \"\\f2a5\";\n}\n.uk-icon-glide-g:before {\n  content: \"\\f2a6\";\n}\n.uk-icon-hard-of-hearing:before {\n  content: \"\\f2a4\";\n}\n.uk-icon-low-vision:before {\n  content: \"\\f2a8\";\n}\n.uk-icon-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.uk-icon-sign-language:before,\n.uk-icon-signing:before {\n  content: \"\\f2a7\";\n}\n.uk-icon-snapchat:before {\n  content: \"\\f2ab\";\n}\n.uk-icon-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.uk-icon-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.uk-icon-themeisle:before {\n  content: \"\\f2b2\";\n}\n.uk-icon-universal-access:before {\n  content: \"\\f29a\";\n}\n.uk-icon-viadeo:before {\n  content: \"\\f2a9\";\n}\n.uk-icon-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.uk-icon-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.uk-icon-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.uk-icon-wpbeginner:before {\n  content: \"\\f297\";\n}\n.uk-icon-wpforms:before {\n  content: \"\\f298\";\n}\n.uk-icon-yoast:before {\n  content: \"\\f2b1\";\n}\n.uk-icon-adress-book:before {\n  content: \"\\f2b9\";\n}\n.uk-icon-adress-book-o:before {\n  content: \"\\f2ba\";\n}\n.uk-icon-adress-card:before {\n  content: \"\\f2bb\";\n}\n.uk-icon-adress-card-o:before {\n  content: \"\\f2bc\";\n}\n.uk-icon-bandcamp:before {\n  content: \"\\f2d5\";\n}\n.uk-icon-bath:before {\n  content: \"\\f2cd\";\n}\n.uk-icon-bathub:before {\n  content: \"\\f2cd\";\n}\n.uk-icon-drivers-license:before {\n  content: \"\\f2c2\";\n}\n.uk-icon-drivers-license-o:before {\n  content: \"\\f2c3\";\n}\n.uk-icon-eercast:before {\n  content: \"\\f2da\";\n}\n.uk-icon-envelope-open:before {\n  content: \"\\f2b6\";\n}\n.uk-icon-envelope-open-o:before {\n  content: \"\\f2b7\";\n}\n.uk-icon-etsy:before {\n  content: \"\\f2d7\";\n}\n.uk-icon-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n.uk-icon-grav:before {\n  content: \"\\f2d6\";\n}\n.uk-icon-handshake-o:before {\n  content: \"\\f2b5\";\n}\n.uk-icon-id-badge:before {\n  content: \"\\f2c1\";\n}\n.uk-icon-id-card:before {\n  content: \"\\f2c2\";\n}\n.uk-icon-id-card-o:before {\n  content: \"\\f2c3\";\n}\n.uk-icon-imdb:before {\n  content: \"\\f2d8\";\n}\n.uk-icon-linode:before {\n  content: \"\\f2b8\";\n}\n.uk-icon-meetup:before {\n  content: \"\\f2e0\";\n}\n.uk-icon-microchip:before {\n  content: \"\\f2db\";\n}\n.uk-icon-podcast:before {\n  content: \"\\f2ce\";\n}\n.uk-icon-quora:before {\n  content: \"\\f2c4\";\n}\n.uk-icon-ravelry:before {\n  content: \"\\f2d9\";\n}\n.uk-icon-s15:before {\n  content: \"\\f2cd\";\n}\n.uk-icon-shower:before {\n  content: \"\\f2cc\";\n}\n.uk-icon-snowflake-o:before {\n  content: \"\\f2dc\";\n}\n.uk-icon-superpowers:before {\n  content: \"\\f2dd\";\n}\n.uk-icon-telegram:before {\n  content: \"\\f2c6\";\n}\n.uk-icon-thermometer:before {\n  content: \"\\f2c7\";\n}\n.uk-icon-thermometer-0:before {\n  content: \"\\f2cb\";\n}\n.uk-icon-thermometer-1:before {\n  content: \"\\f2ca\";\n}\n.uk-icon-thermometer-2:before {\n  content: \"\\f2c9\";\n}\n.uk-icon-thermometer-3:before {\n  content: \"\\f2c8\";\n}\n.uk-icon-thermometer-4:before {\n  content: \"\\f2c7\";\n}\n.uk-icon-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n.uk-icon-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n.uk-icon-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n.uk-icon-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n.uk-icon-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n.uk-icon-times-rectangle:before {\n  content: \"\\f2d3\";\n}\n.uk-icon-times-rectangle-o:before {\n  content: \"\\f2d4\";\n}\n.uk-icon-user-circle:before {\n  content: \"\\f2bd\";\n}\n.uk-icon-user-circle-o:before {\n  content: \"\\f2be\";\n}\n.uk-icon-user-o:before {\n  content: \"\\f2c0\";\n}\n.uk-icon-vcard:before {\n  content: \"\\f2bb\";\n}\n.uk-icon-vcard-o:before {\n  content: \"\\f2bc\";\n}\n.uk-icon-widow-close:before {\n  content: \"\\f2d3\";\n}\n.uk-icon-widow-close-o:before {\n  content: \"\\f2d4\";\n}\n.uk-icon-window-maximize:before {\n  content: \"\\f2d0\";\n}\n.uk-icon-window-minimize:before {\n  content: \"\\f2d1\";\n}\n.uk-icon-window-restore:before {\n  content: \"\\f2d2\";\n}\n.uk-icon-wpexplorer:before {\n  content: \"\\f2de\";\n}\n/* ========================================================================\n   Component: Close\n ========================================================================== */\n/*\n * Removes inner padding and border in Firefox 4+.\n */\n.uk-close::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/*\n * 1. Correct inability to style clickable `input` types in iOS.\n * 2. Remove margins in Chrome, Safari and Opera.\n * 3. Remove borders for `button`.\n * 4. Address `overflow` set to `hidden` in IE 8/9/10/11.\n * 5. Correct `font` properties and `color` not being inherited for `button`.\n * 6. Address inconsistent `text-transform` inheritance which is only inherit in Firefox and IE\n * 7. Remove default `button` padding and background color\n * 8. Style\n */\n.uk-close {\n  /* 1 */\n  -webkit-appearance: none;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  border: none;\n  /* 4 */\n  overflow: visible;\n  /* 5 */\n  font: inherit;\n  color: inherit;\n  /* 6 */\n  text-transform: none;\n  /* 7. */\n  padding: 0;\n  background: transparent;\n  /* 8 */\n  display: inline-block;\n  box-sizing: content-box;\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  opacity: 0.3;\n}\n/* Icon */\n.uk-close:after {\n  display: block;\n  content: \"\\f00d\";\n  font-family: FontAwesome;\n}\n/*\n * Hover\n * 1. Apply hover style also to focus state\n * 2. Remove default focus style\n * 3. Required for `a` elements\n */\n.uk-close:hover,\n.uk-close:focus {\n  opacity: 0.5;\n  /* 2 */\n  outline: none;\n  /* 3 */\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\n/* Modifier\n ========================================================================== */\n.uk-close-alt {\n  padding: 2px;\n  border-radius: 50%;\n  background: #eee;\n  opacity: 1;\n}\n/* Hover */\n.uk-close-alt:hover,\n.uk-close-alt:focus {\n  opacity: 1;\n}\n/* Icon */\n.uk-close-alt:after {\n  opacity: 0.5;\n}\n.uk-close-alt:hover:after,\n.uk-close-alt:focus:after {\n  opacity: 0.8;\n}\n/* ========================================================================\n   Component: Badge\n ========================================================================== */\n.uk-badge {\n  display: inline-block;\n  padding: 0 5px;\n  background: #00a8e6;\n  font-size: 10px;\n  font-weight: bold;\n  line-height: 14px;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  text-transform: none;\n}\n/*\n * Keep color when badge is a link\n */\na.uk-badge:hover {\n  color: #fff;\n}\n/* Modifier: `uk-badge-notification`;\n ========================================================================== */\n.uk-badge-notification {\n  box-sizing: border-box;\n  min-width: 18px;\n  border-radius: 500px;\n  font-size: 12px;\n  line-height: 18px;\n}\n/* Color modifier\n ========================================================================== */\n/*\n * Modifier: `uk-badge-success`\n */\n.uk-badge-success {\n  background-color: #8cc14c;\n}\n/*\n * Modifier: `uk-badge-warning`\n */\n.uk-badge-warning {\n  background-color: #faa732;\n}\n/*\n * Modifier: `uk-badge-danger`\n */\n.uk-badge-danger {\n  background-color: #da314b;\n}\n/* ========================================================================\n   Component: Alert\n ========================================================================== */\n.uk-alert {\n  margin-bottom: 15px;\n  padding: 10px;\n  background: #ebf7fd;\n  color: #2d7091;\n}\n/*\n * Add margin if adjacent element\n */\n* + .uk-alert {\n  margin-top: 15px;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-alert > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Keep color for headings if the default heading color is changed\n */\n.uk-alert h1,\n.uk-alert h2,\n.uk-alert h3,\n.uk-alert h4,\n.uk-alert h5,\n.uk-alert h6 {\n  color: inherit;\n}\n/* Close in alert\n ========================================================================== */\n.uk-alert > .uk-close:first-child {\n  float: right;\n}\n/*\n * Remove margin from adjacent element\n */\n.uk-alert > .uk-close:first-child + * {\n  margin-top: 0;\n}\n/* Modifier: `uk-alert-success`\n ========================================================================== */\n.uk-alert-success {\n  background: #f2fae3;\n  color: #659f13;\n}\n/* Modifier: `uk-alert-warning`\n ========================================================================== */\n.uk-alert-warning {\n  background: #fffceb;\n  color: #e28327;\n}\n/* Modifier: `uk-alert-danger`\n ========================================================================== */\n.uk-alert-danger {\n  background: #fff1f0;\n  color: #d85030;\n}\n/* Modifier: `uk-alert-large`\n ========================================================================== */\n.uk-alert-large {\n  padding: 20px;\n}\n.uk-alert-large > .uk-close:first-child {\n  margin: -10px -10px 0 0;\n}\n/* ========================================================================\n   Component: Thumbnail\n ========================================================================== */\n/*\n * 1. Container width fits its content\n * 2. Responsive behavior\n * 3. Corrects `max-width` behavior sed\n * 4. Required for `figure` element\n * 5. Style\n */\n.uk-thumbnail {\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  max-width: 100%;\n  /* 3 */\n  box-sizing: border-box;\n  /* 3 */\n  margin: 0;\n  /* 4 */\n  padding: 4px;\n  border: 1px solid #ddd;\n  background: #fff;\n}\n/*\n * Hover state for `a` elements\n * 1. Apply hover style also to focus state\n * 2. Needed for caption\n * 3. Remove default focus style\n */\na.uk-thumbnail:hover,\na.uk-thumbnail:focus {\n  border-color: #aaaaaa;\n  background-color: #fff;\n  /* 2 */\n  text-decoration: none;\n  /* 3 */\n  outline: none;\n}\n/* Caption\n ========================================================================== */\n.uk-thumbnail-caption {\n  padding-top: 4px;\n  text-align: center;\n  color: #444;\n}\n/* Sizes\n ========================================================================== */\n.uk-thumbnail-mini {\n  width: 150px;\n}\n.uk-thumbnail-small {\n  width: 200px;\n}\n.uk-thumbnail-medium {\n  width: 300px;\n}\n.uk-thumbnail-large {\n  width: 400px;\n}\n.uk-thumbnail-expand,\n.uk-thumbnail-expand > img {\n  width: 100%;\n}\n/* ========================================================================\n   Component: Overlay\n ========================================================================== */\n/*\n * 1. Container width fits its content\n * 2. Create position context\n * 3. Set max-width for responsive images to prevent `inline-block` consequences\n * 4. Remove the gap between the container and its child element\n * 5. Needed for transitions and to fixed wrong scaling calculation for images in Chrome\n * 6. Fixed `overflow: hidden` to be ignored with border-radius and CSS transforms in Webkit\n * 7. Reset margin\n */\n.uk-overlay {\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  max-width: 100%;\n  /* 4 */\n  vertical-align: middle;\n  /* 5 */\n  overflow: hidden;\n  /* 6 */\n  -webkit-transform: translateZ(0);\n  /* 7 */\n  margin: 0;\n}\n/* 6 for Safari */\n.uk-overlay.uk-border-circle {\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n/*\n * Remove margin from content\n */\n.uk-overlay > :first-child {\n  margin-bottom: 0;\n}\n/* Sub-object `uk-overlay-panel`\n ========================================================================== */\n/*\n * 1. Position cover\n * 2. Style\n */\n.uk-overlay-panel {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  /* 2 */\n  padding: 20px;\n  color: #fff;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-overlay-panel > :last-child,\n.uk-overlay-panel.uk-flex > * > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Keep color for headings if the default heading color is changed\n */\n.uk-overlay-panel h1,\n.uk-overlay-panel h2,\n.uk-overlay-panel h3,\n.uk-overlay-panel h4,\n.uk-overlay-panel h5,\n.uk-overlay-panel h6 {\n  color: inherit;\n}\n.uk-overlay-panel a:not([class]) {\n  color: inherit;\n  text-decoration: underline;\n}\n.uk-overlay-panel a[class*='uk-icon-']:not(.uk-icon-button) {\n  color: inherit;\n}\n/* Sub-object `uk-overlay-hover` and `uk-overlay-active`\n ========================================================================== */\n.uk-overlay-hover:not(:hover):not(.uk-hover) .uk-overlay-panel:not(.uk-ignore) {\n  opacity: 0;\n}\n.uk-overlay-active :not(.uk-active) > .uk-overlay-panel:not(.uk-ignore) {\n  opacity: 0;\n}\n/* Modifier `uk-overlay-background`\n ========================================================================== */\n.uk-overlay-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n/* Modifier `uk-overlay-image`\n ========================================================================== */\n/*\n * Reset panel\n */\n.uk-overlay-image {\n  padding: 0;\n}\n/* Position modifiers\n ========================================================================== */\n.uk-overlay-top {\n  bottom: auto;\n}\n.uk-overlay-bottom {\n  top: auto;\n}\n.uk-overlay-left {\n  right: auto;\n}\n.uk-overlay-right {\n  left: auto;\n}\n/* Sub-object `uk-overlay-icon`\n ========================================================================== */\n.uk-overlay-icon:before {\n  content: \"\\f002\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-top: -25px;\n  margin-left: -25px;\n  font-size: 50px;\n  line-height: 1;\n  font-family: FontAwesome;\n  text-align: center;\n  color: #fff;\n}\n/* Transitions\n ========================================================================== */\n.uk-overlay-fade,\n.uk-overlay-scale,\n.uk-overlay-spin,\n.uk-overlay-grayscale,\n.uk-overlay-blur,\n[class*='uk-overlay-slide'] {\n  transition-duration: 0.3s;\n  transition-timing-function: ease-out;\n  transition-property: opacity, transform, filter;\n}\n.uk-overlay-active .uk-overlay-fade,\n.uk-overlay-active .uk-overlay-scale,\n.uk-overlay-active .uk-overlay-spin,\n.uk-overlay-active [class*='uk-overlay-slide'] {\n  transition-duration: 0.8s;\n}\n/*\n * Fade\n */\n.uk-overlay-fade {\n  opacity: 0.7;\n}\n.uk-overlay-hover:hover .uk-overlay-fade,\n.uk-overlay-hover.uk-hover .uk-overlay-fade,\n.uk-overlay-active .uk-active > .uk-overlay-fade {\n  opacity: 1;\n}\n/*\n * Scale\n */\n.uk-overlay-scale {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.uk-overlay-hover:hover .uk-overlay-scale,\n.uk-overlay-hover.uk-hover .uk-overlay-scale,\n.uk-overlay-active .uk-active > .uk-overlay-scale {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n/*\n * Spin\n */\n.uk-overlay-spin {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n}\n.uk-overlay-hover:hover .uk-overlay-spin,\n.uk-overlay-hover.uk-hover .uk-overlay-spin,\n.uk-overlay-active .uk-active > .uk-overlay-spin {\n  -webkit-transform: scale(1.1) rotate(3deg);\n  transform: scale(1.1) rotate(3deg);\n}\n/*\n * Grayscale\n */\n.uk-overlay-grayscale {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n}\n.uk-overlay-hover:hover .uk-overlay-grayscale,\n.uk-overlay-hover.uk-hover .uk-overlay-grayscale,\n.uk-overlay-active .uk-active > .uk-overlay-grayscale {\n  -webkit-filter: grayscale(0%);\n  filter: grayscale(0%);\n}\n/*\n * Slide\n */\n[class*='uk-overlay-slide'] {\n  opacity: 0;\n}\n/* Top */\n.uk-overlay-slide-top {\n  -webkit-transform: translateY(-100%);\n  transform: translateY(-100%);\n}\n/* Bottom */\n.uk-overlay-slide-bottom {\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n}\n/* Left */\n.uk-overlay-slide-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n/* Right */\n.uk-overlay-slide-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n/* Hover */\n.uk-overlay-hover:hover [class*='uk-overlay-slide'],\n.uk-overlay-hover.uk-hover [class*='uk-overlay-slide'],\n.uk-overlay-active .uk-active > [class*='uk-overlay-slide'] {\n  opacity: 1;\n  -webkit-transform: translateX(0) translateY(0);\n  transform: translateX(0) translateY(0);\n}\n/* DEPRECATED\n * Sub-object `uk-overlay-area`\n ========================================================================== */\n/*\n * 1. Set position\n * 2. Set style\n * 3. Fade-in transition\n */\n.uk-overlay-area {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  /* 2 */\n  background: rgba(0, 0, 0, 0.3);\n  /* 3 */\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  -webkit-transform: translate3d(0, 0, 0);\n}\n/*\n * Hover\n * 1. `uk-hover` to support touch devices\n * 2. Use optional `uk-overlay-toggle` to trigger the overlay earlier\n */\n.uk-overlay:hover .uk-overlay-area,\n.uk-overlay.uk-hover .uk-overlay-area,\n.uk-overlay-toggle:hover .uk-overlay-area,\n.uk-overlay-toggle.uk-hover .uk-overlay-area {\n  opacity: 1;\n}\n/*\n * Icon\n */\n.uk-overlay-area:empty:before {\n  content: \"\\f002\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-top: -25px;\n  margin-left: -25px;\n  font-size: 50px;\n  line-height: 1;\n  font-family: FontAwesome;\n  text-align: center;\n  color: #fff;\n}\n/* DEPRECATED\n * Sub-object `uk-overlay-area-content`\n ========================================================================== */\n/*\n * Remove whitespace between child elements when using `inline-block`\n * Needed for Firefox\n */\n.uk-overlay-area:not(:empty) {\n  font-size: 0.001px;\n}\n/*\n * 1. Needed for vertical alignment\n */\n.uk-overlay-area:not(:empty):before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n/*\n * 1. Set vertical alignment\n * 2. Reset whitespace hack\n * 3. Set horizontal alignment\n * 4. Set style\n */\n.uk-overlay-area-content {\n  /* 1 */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  vertical-align: middle;\n  /* 2 */\n  font-size: 1rem;\n  /* 3 */\n  text-align: center;\n  /* 4 */\n  padding: 0 15px;\n  color: #fff;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-overlay-area-content > :last-child {\n  margin-bottom: 0;\n}\n/*\n * Links in overlay area\n */\n.uk-overlay-area-content a:not([class]),\n.uk-overlay-area-content a:not([class]):hover {\n  color: inherit;\n}\n/* DEPRECATED\n * Sub-object `uk-overlay-caption`\n ========================================================================== */\n/*\n * 1. Set position\n * 2. Set style\n * 3. Fade-in transition\n */\n.uk-overlay-caption {\n  /* 1 */\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  /* 2 */\n  padding: 15px;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  /* 3 */\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  -webkit-transform: translate3d(0, 0, 0);\n}\n/*\n * Hover\n * 1. `uk-hover` to support touch devices\n * 2. Use optional `uk-overlay-toggle` to trigger the overlay earlier\n */\n.uk-overlay:hover .uk-overlay-caption,\n.uk-overlay.uk-hover .uk-overlay-caption,\n.uk-overlay-toggle:hover .uk-overlay-caption,\n.uk-overlay-toggle.uk-hover .uk-overlay-caption {\n  opacity: 1;\n}\n/* ========================================================================\n   Component: Column\n ========================================================================== */\n[class*='uk-column-'] {\n  -webkit-column-gap: 25px;\n  -moz-column-gap: 25px;\n  column-gap: 25px;\n}\n/* Width modifiers\n ========================================================================== */\n.uk-column-1-2 {\n  -webkit-column-count: 2;\n  -moz-column-count: 2;\n  column-count: 2;\n}\n.uk-column-1-3 {\n  -webkit-column-count: 3;\n  -moz-column-count: 3;\n  column-count: 3;\n}\n.uk-column-1-4 {\n  -webkit-column-count: 4;\n  -moz-column-count: 4;\n  column-count: 4;\n}\n.uk-column-1-5 {\n  -webkit-column-count: 5;\n  -moz-column-count: 5;\n  column-count: 5;\n}\n.uk-column-1-6 {\n  -webkit-column-count: 6;\n  -moz-column-count: 6;\n  column-count: 6;\n}\n/* Phone landscape and bigger */\n@media (min-width: 480px) {\n  .uk-column-small-1-2 {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n  }\n  .uk-column-small-1-3 {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n  }\n  .uk-column-small-1-4 {\n    -webkit-column-count: 4;\n    -moz-column-count: 4;\n    column-count: 4;\n  }\n  .uk-column-small-1-5 {\n    -webkit-column-count: 5;\n    -moz-column-count: 5;\n    column-count: 5;\n  }\n  .uk-column-small-1-6 {\n    -webkit-column-count: 6;\n    -moz-column-count: 6;\n    column-count: 6;\n  }\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-column-medium-1-2 {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n  }\n  .uk-column-medium-1-3 {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n  }\n  .uk-column-medium-1-4 {\n    -webkit-column-count: 4;\n    -moz-column-count: 4;\n    column-count: 4;\n  }\n  .uk-column-medium-1-5 {\n    -webkit-column-count: 5;\n    -moz-column-count: 5;\n    column-count: 5;\n  }\n  .uk-column-medium-1-6 {\n    -webkit-column-count: 6;\n    -moz-column-count: 6;\n    column-count: 6;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-column-large-1-2 {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n  }\n  .uk-column-large-1-3 {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n  }\n  .uk-column-large-1-4 {\n    -webkit-column-count: 4;\n    -moz-column-count: 4;\n    column-count: 4;\n  }\n  .uk-column-large-1-5 {\n    -webkit-column-count: 5;\n    -moz-column-count: 5;\n    column-count: 5;\n  }\n  .uk-column-large-1-6 {\n    -webkit-column-count: 6;\n    -moz-column-count: 6;\n    column-count: 6;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-column-xlarge-1-2 {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n  }\n  .uk-column-xlarge-1-3 {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n  }\n  .uk-column-xlarge-1-4 {\n    -webkit-column-count: 4;\n    -moz-column-count: 4;\n    column-count: 4;\n  }\n  .uk-column-xlarge-1-5 {\n    -webkit-column-count: 5;\n    -moz-column-count: 5;\n    column-count: 5;\n  }\n  .uk-column-xlarge-1-6 {\n    -webkit-column-count: 6;\n    -moz-column-count: 6;\n    column-count: 6;\n  }\n}\n/* ========================================================================\n   Component: Animation\n ========================================================================== */\n[class*='uk-animation-'] {\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n/* Hide animated element if scrollspy is used */\n@media screen {\n  [data-uk-scrollspy*='uk-animation-']:not([data-uk-scrollspy*='target']) {\n    opacity: 0;\n  }\n}\n/*\n * Fade\n * Higher specificity (!important) needed because of reverse modifier\n */\n.uk-animation-fade {\n  -webkit-animation-name: uk-fade;\n  animation-name: uk-fade;\n  -webkit-animation-duration: 0.8s;\n  animation-duration: 0.8s;\n  -webkit-animation-timing-function: linear !important;\n  animation-timing-function: linear !important;\n}\n/*\n * Fade with scale\n */\n.uk-animation-scale-up {\n  -webkit-animation-name: uk-fade-scale-02;\n  animation-name: uk-fade-scale-02;\n}\n.uk-animation-scale-down {\n  -webkit-animation-name: uk-fade-scale-18;\n  animation-name: uk-fade-scale-18;\n}\n/*\n * Fade with slide\n */\n.uk-animation-slide-top {\n  -webkit-animation-name: uk-fade-top;\n  animation-name: uk-fade-top;\n}\n.uk-animation-slide-bottom {\n  -webkit-animation-name: uk-fade-bottom;\n  animation-name: uk-fade-bottom;\n}\n.uk-animation-slide-left {\n  -webkit-animation-name: uk-fade-left;\n  animation-name: uk-fade-left;\n}\n.uk-animation-slide-right {\n  -webkit-animation-name: uk-fade-right;\n  animation-name: uk-fade-right;\n}\n/*\n * Scale\n */\n.uk-animation-scale {\n  -webkit-animation-name: uk-scale-12;\n  animation-name: uk-scale-12;\n}\n/*\n * Shake\n */\n.uk-animation-shake {\n  -webkit-animation-name: uk-shake;\n  animation-name: uk-shake;\n}\n/* Direction modifiers\n ========================================================================== */\n.uk-animation-reverse {\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n/* Duration modifiers\n========================================================================== */\n.uk-animation-15 {\n  -webkit-animation-duration: 15s;\n  animation-duration: 15s;\n}\n/* Origin modifiers\n========================================================================== */\n.uk-animation-top-left {\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n.uk-animation-top-center {\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n}\n.uk-animation-top-right {\n  -webkit-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.uk-animation-middle-left {\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n}\n.uk-animation-middle-right {\n  -webkit-transform-origin: 100% 50%;\n  transform-origin: 100% 50%;\n}\n.uk-animation-bottom-left {\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.uk-animation-bottom-center {\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n}\n.uk-animation-bottom-right {\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n}\n/* Sub-object: `uk-animation-hover`\n========================================================================== */\n/*\n * Enable animation only on hover\n * Note: Firefox also needs this because animations are not triggered when switching between display `hidden` and `block`\n */\n.uk-animation-hover:not(:hover),\n.uk-animation-hover:not(:hover) [class*='uk-animation-'],\n.uk-touch .uk-animation-hover:not(.uk-hover),\n.uk-touch .uk-animation-hover:not(.uk-hover) [class*='uk-animation-'] {\n  -webkit-animation-name: none;\n  animation-name: none;\n}\n/* Keyframes: Fade\n * Used by dropdown, datepicker and slideshow component\n ========================================================================== */\n@-webkit-keyframes uk-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes uk-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/* Keyframes: Fade with slide\n ========================================================================== */\n/*\n * Top\n */\n@-webkit-keyframes uk-fade-top {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes uk-fade-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Bottom\n */\n@-webkit-keyframes uk-fade-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes uk-fade-bottom {\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Left\n */\n@-webkit-keyframes uk-fade-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-fade-left {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*\n * Right\n */\n@-webkit-keyframes uk-fade-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-fade-right {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/* Keyframes: Fade with scale\n ========================================================================== */\n/*\n * Scale by 0.2\n */\n@-webkit-keyframes uk-fade-scale-02 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.2);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes uk-fade-scale-02 {\n  0% {\n    opacity: 0;\n    transform: scale(0.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*\n * Scale by 1.5\n * Used by slideshow component\n */\n@-webkit-keyframes uk-fade-scale-15 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes uk-fade-scale-15 {\n  0% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*\n * Scale by 1.8\n */\n@-webkit-keyframes uk-fade-scale-18 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.8);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes uk-fade-scale-18 {\n  0% {\n    opacity: 0;\n    transform: scale(1.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/* Keyframes: Slide\n * Used by slideshow component\n ========================================================================== */\n/*\n * Left\n */\n@-webkit-keyframes uk-slide-left {\n  0% {\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-slide-left {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/*\n * Right\n */\n@-webkit-keyframes uk-slide-right {\n  0% {\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-slide-right {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/*\n * Left third\n */\n@-webkit-keyframes uk-slide-left-33 {\n  0% {\n    -webkit-transform: translateX(33%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-slide-left-33 {\n  0% {\n    transform: translateX(33%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/*\n * Right third\n */\n@-webkit-keyframes uk-slide-right-33 {\n  0% {\n    -webkit-transform: translateX(-33%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes uk-slide-right-33 {\n  0% {\n    transform: translateX(-33%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/* Keyframes: Scale\n ========================================================================== */\n@-webkit-keyframes uk-scale-12 {\n  0% {\n    -webkit-transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes uk-scale-12 {\n  0% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/* Keyframes: Rotate\n * Used by icon component\n ========================================================================== */\n@-webkit-keyframes uk-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@keyframes uk-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n/* Keyframes: Shake\n ========================================================================== */\n@-webkit-keyframes uk-shake {\n  0%,\n  100% {\n    -webkit-transform: translateX(0);\n  }\n  10% {\n    -webkit-transform: translateX(-9px);\n  }\n  20% {\n    -webkit-transform: translateX(8px);\n  }\n  30% {\n    -webkit-transform: translateX(-7px);\n  }\n  40% {\n    -webkit-transform: translateX(6px);\n  }\n  50% {\n    -webkit-transform: translateX(-5px);\n  }\n  60% {\n    -webkit-transform: translateX(4px);\n  }\n  70% {\n    -webkit-transform: translateX(-3px);\n  }\n  80% {\n    -webkit-transform: translateX(2px);\n  }\n  90% {\n    -webkit-transform: translateX(-1px);\n  }\n}\n@keyframes uk-shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  10% {\n    transform: translateX(-9px);\n  }\n  20% {\n    transform: translateX(8px);\n  }\n  30% {\n    transform: translateX(-7px);\n  }\n  40% {\n    transform: translateX(6px);\n  }\n  50% {\n    transform: translateX(-5px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  70% {\n    transform: translateX(-3px);\n  }\n  80% {\n    transform: translateX(2px);\n  }\n  90% {\n    transform: translateX(-1px);\n  }\n}\n/* Keyframes: Fade with slide fixed\n * Used by dropdown and search component\n ========================================================================== */\n/*\n * Top fixed\n */\n@-webkit-keyframes uk-slide-top-fixed {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes uk-slide-top-fixed {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Bottom fixed\n */\n@-webkit-keyframes uk-slide-bottom-fixed {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes uk-slide-bottom-fixed {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* ========================================================================\n   Component: Dropdown\n ========================================================================== */\n/*\n * 1. Hide by default\n * 2. Set position\n * 3. Box-sizing is needed for `uk-dropdown-justify`\n * 4. Set width\n */\n.uk-dropdown,\n.uk-dropdown-blank {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: absolute;\n  z-index: 1020;\n  /* 3 */\n  box-sizing: border-box;\n  /* 4 */\n  width: 200px;\n}\n/*\n * Dropdown style\n * 1. Reset button group whitespace hack\n */\n.uk-dropdown {\n  padding: 15px;\n  background: #f5f5f5;\n  color: #444;\n  /* 1 */\n  font-size: 1rem;\n  vertical-align: top;\n}\n/* Focus */\n.uk-dropdown:focus {\n  outline: none;\n}\n/*\n * 1. Show dropdown\n * 2. Set animation\n * 3. Needed for scale animation\n */\n.uk-open > .uk-dropdown,\n.uk-open > .uk-dropdown-blank {\n  /* 1 */\n  display: block;\n  /* 2 */\n  -webkit-animation: uk-fade 0.2s ease-in-out;\n  animation: uk-fade 0.2s ease-in-out;\n  /* 3 */\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n/* Alignment modifiers\n ========================================================================== */\n/*\n * Modifier\n */\n.uk-dropdown-top {\n  margin-top: -5px;\n}\n.uk-dropdown-bottom {\n  margin-top: 5px;\n}\n.uk-dropdown-left {\n  margin-left: -5px;\n}\n.uk-dropdown-right {\n  margin-left: 5px;\n}\n/* Nav in dropdown\n ========================================================================== */\n.uk-dropdown .uk-nav {\n  margin: 0 -15px;\n}\n/* Grid and panel in dropdown\n ========================================================================== */\n/*\n* Vertical gutter\n*/\n/*\n * Grid\n * Higher specificity to override large gutter\n */\n.uk-grid .uk-dropdown-grid + .uk-dropdown-grid {\n  margin-top: 15px;\n}\n/* Panels */\n.uk-dropdown-grid > [class*='uk-width-'] > .uk-panel + .uk-panel {\n  margin-top: 15px;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  /*\n     * Horizontal gutter\n     */\n  .uk-dropdown:not(.uk-dropdown-stack) > .uk-dropdown-grid {\n    margin-left: -15px;\n    margin-right: -15px;\n  }\n  .uk-dropdown:not(.uk-dropdown-stack) > .uk-dropdown-grid > [class*='uk-width-'] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  /*\n     * Column divider\n     */\n  .uk-dropdown:not(.uk-dropdown-stack) > .uk-dropdown-grid > [class*='uk-width-']:nth-child(n+2) {\n    border-left: 1px solid #ddd;\n  }\n  /*\n     * Width multiplier for dropdown columns\n     */\n  .uk-dropdown-width-2:not(.uk-dropdown-stack) {\n    width: 400px;\n  }\n  .uk-dropdown-width-3:not(.uk-dropdown-stack) {\n    width: 600px;\n  }\n  .uk-dropdown-width-4:not(.uk-dropdown-stack) {\n    width: 800px;\n  }\n  .uk-dropdown-width-5:not(.uk-dropdown-stack) {\n    width: 1000px;\n  }\n}\n/* Phone landscape and smaller */\n@media (max-width: 767px) {\n  /*\n     * Stack columns and take full width\n     */\n  .uk-dropdown-grid > [class*='uk-width-'] {\n    width: 100%;\n  }\n  /*\n     * Vertical gutter\n     */\n  .uk-dropdown-grid > [class*='uk-width-']:nth-child(n+2) {\n    margin-top: 15px;\n  }\n}\n/*\n* Stack grid columns\n*/\n.uk-dropdown-stack > .uk-dropdown-grid > [class*='uk-width-'] {\n  width: 100%;\n}\n.uk-dropdown-stack > .uk-dropdown-grid > [class*='uk-width-']:nth-child(n+2) {\n  margin-top: 15px;\n}\n/* Modifier `uk-dropdown-small`\n ========================================================================== */\n/*\n * Set min-width and text expands dropdown if needed\n */\n.uk-dropdown-small {\n  min-width: 150px;\n  width: auto;\n  padding: 5px;\n  white-space: nowrap;\n}\n/*\n * Nav in dropdown\n */\n.uk-dropdown-small .uk-nav {\n  margin: 0 -5px;\n}\n/* Modifier: `uk-dropdown-navbar`\n ========================================================================== */\n.uk-dropdown-navbar {\n  margin-top: 0;\n  background: #f5f5f5;\n  color: #444;\n}\n.uk-open > .uk-dropdown-navbar {\n  -webkit-animation: uk-slide-top-fixed 0.2s ease-in-out;\n  animation: uk-slide-top-fixed 0.2s ease-in-out;\n}\n/* Modifier `uk-dropdown-scrollable`\n ========================================================================== */\n/*\n * Usefull for long lists\n */\n.uk-dropdown-scrollable {\n  overflow-y: auto;\n  max-height: 200px;\n}\n/* Sub-object: `uk-dropdown-overlay`\n ========================================================================== */\n/* ========================================================================\n   Component: Modal\n ========================================================================== */\n/*\n * This is the modal overlay and modal dialog container\n * 1. Hide by default\n * 2. Set fixed position\n * 3. Allow scrolling for the modal dialog\n * 4. Mask the background page\n * 5. Fade-in transition\n * 6. Deactivate browser history navigation in IE11\n * 7. force hardware acceleration to prevent browser rendering hiccups\n */\n.uk-modal {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1010;\n  /* 3 */\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  /* 4 */\n  background: rgba(0, 0, 0, 0.6);\n  /* 5 */\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  /* 6 */\n  touch-action: cross-slide-y pinch-zoom double-tap-zoom;\n  /* 7 */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n/*\n * Open state\n */\n.uk-modal.uk-open {\n  opacity: 1;\n}\n/*\n * Prevents duplicated scrollbar caused by 4.\n */\n.uk-modal-page,\n.uk-modal-page body {\n  overflow: hidden;\n}\n/* Sub-object: `uk-modal-dialog`\n ========================================================================== */\n/*\n * 1. Create position context for caption, spinner and close button\n * 2. Set box sizing\n * 3. Set style\n * 4. Slide-in transition\n */\n.uk-modal-dialog {\n  /* 1 */\n  position: relative;\n  /* 2 */\n  box-sizing: border-box;\n  margin: 50px auto;\n  padding: 20px;\n  width: 600px;\n  max-width: 100%;\n  max-width: calc(100% - 20px);\n  /* 3 */\n  background: #fff;\n  /* 4 */\n  opacity: 0;\n  -webkit-transform: translateY(-100px);\n  transform: translateY(-100px);\n  -webkit-transition: opacity 0.3s linear, -webkit-transform 0.3s ease-out;\n  transition: opacity 0.3s linear, transform 0.3s ease-out;\n}\n/* Phone landscape and smaller */\n@media (max-width: 767px) {\n  /*\n     * Fit in small screen\n     */\n  .uk-modal-dialog {\n    width: auto;\n    margin: 10px auto;\n  }\n}\n/*\n * Open state\n */\n.uk-open .uk-modal-dialog {\n  /* 4 */\n  opacity: 1;\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n/*\n * Remove margin from the last-child\n */\n.uk-modal-dialog > :not([class*='uk-modal-']):last-child {\n  margin-bottom: 0;\n}\n/* Close in modal\n ========================================================================== */\n.uk-modal-dialog > .uk-close:first-child {\n  margin: -10px -10px 0 0;\n  float: right;\n}\n/*\n * Remove margin from adjacent element\n */\n.uk-modal-dialog > .uk-close:first-child + :not([class*='uk-modal-']) {\n  margin-top: 0;\n}\n/* Modifier: `uk-modal-dialog-lightbox`\n ========================================================================== */\n.uk-modal-dialog-lightbox {\n  margin: 15px auto;\n  padding: 0;\n  max-width: 95%;\n  max-width: calc(100% - 30px);\n  min-height: 50px;\n}\n/*\n * Close button\n */\n.uk-modal-dialog-lightbox > .uk-close:first-child {\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  margin: 0;\n  float: none;\n}\n/* Phone landscape and smaller */\n@media (max-width: 767px) {\n  .uk-modal-dialog-lightbox > .uk-close:first-child {\n    top: -7px;\n    right: -7px;\n  }\n}\n/* Modifier: `uk-modal-dialog-blank`\n ========================================================================== */\n.uk-modal-dialog-blank {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  max-width: 100%;\n  -webkit-transition: opacity 0.3s linear;\n  transition: opacity 0.3s linear;\n}\n/*\n* Close button\n*/\n.uk-modal-dialog-blank > .uk-close:first-child {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 1;\n  margin: 0;\n  float: none;\n}\n/* Modifier: `uk-modal-dialog-large`\n ========================================================================== */\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-modal-dialog-large {\n    width: 930px;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-modal-dialog-large {\n    width: 1130px;\n  }\n}\n/* Sub-Object: `uk-modal-header` and `uk-modal-footer`\n ========================================================================== */\n.uk-modal-header {\n  margin-bottom: 15px;\n}\n.uk-modal-footer {\n  margin-top: 15px;\n}\n/*\n * Remove margin from the last-child\n */\n.uk-modal-header > :last-child,\n.uk-modal-footer > :last-child {\n  margin-bottom: 0;\n}\n/* Sub-Object: `uk-modal-caption`\n ========================================================================== */\n.uk-modal-caption {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -20px;\n  margin-bottom: -10px;\n  color: #fff;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/* Sub-Object: `uk-modal-spinner`\n ========================================================================== */\n.uk-modal-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  font-size: 25px;\n  color: #ddd;\n}\n.uk-modal-spinner:after {\n  content: \"\\f110\";\n  display: block;\n  font-family: FontAwesome;\n  -webkit-animation: uk-rotate 2s infinite linear;\n  animation: uk-rotate 2s infinite linear;\n}\n/* ========================================================================\n   Component: Off-canvas\n ========================================================================== */\n/*\n * This is the offcanvas overlay and bar container\n * 1. Hide by default\n * 2. Set fixed position\n * 3. Deactivate browser touch actions in IE11\n * 4. Mask the background page\n */\n.uk-offcanvas {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  /* 3 */\n  touch-action: none;\n  /* 4 */\n  background: rgba(0, 0, 0, 0.1);\n}\n.uk-offcanvas.uk-active {\n  display: block;\n}\n/* Sub-object `uk-offcanvas-page`\n ========================================================================== */\n/*\n * Prepares the whole HTML page to slide-out\n * 1. Fix the main page and disallow scrolling\n * 2. Side-out transition\n * 3. Needed for the transition to work instead of just letting it pop to the side\n */\n.uk-offcanvas-page {\n  /* 1 */\n  position: fixed;\n  /* 2 */\n  -webkit-transition: margin-left 0.3s ease-in-out;\n  transition: margin-left 0.3s ease-in-out;\n  /* 3 */\n  margin-left: 0;\n}\n/* Sub-object `uk-offcanvas-bar`\n ========================================================================== */\n/*\n * This is the offcanvas bar\n * 1. Set fixed position\n * 2. Size and style\n * 3. Allow scrolling\n * 4. Side-out transition\n * 5. Deactivate scroll chaining in IE11\n */\n.uk-offcanvas-bar {\n  /* 1 */\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  z-index: 1001;\n  /* 2 */\n  width: 270px;\n  max-width: 100%;\n  background: #333;\n  /* 3 */\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  /* 4 */\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  /* 5 */\n  -ms-scroll-chaining: none;\n}\n.uk-offcanvas.uk-active .uk-offcanvas-bar.uk-offcanvas-bar-show {\n  -webkit-transform: translateX(0%);\n  transform: translateX(0%);\n}\n/* Modifier `uk-offcanvas-bar-flip`\n ========================================================================== */\n.uk-offcanvas-bar-flip {\n  left: auto;\n  right: 0;\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n/* Offcanvase modes\n ========================================================================== */\n.uk-offcanvas-bar[mode='none'] {\n  -webkit-transition: none;\n  transition: none;\n}\n.uk-offcanvas-bar[mode='reveal'] {\n  -webkit-transform: translateX(0%);\n  transform: translateX(0%);\n  clip: rect(0, 0, 100vh, 0);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out, clip 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, clip 0.3s ease-in-out;\n}\n.uk-offcanvas-bar-flip[mode='reveal'] {\n  clip: none;\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n.uk-offcanvas-bar-flip[mode='reveal'] > * {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n}\n.uk-offcanvas.uk-active .uk-offcanvas-bar-flip[mode='reveal'].uk-offcanvas-bar-show > * {\n  -webkit-transform: translateX(0%);\n  transform: translateX(0%);\n}\n/* Panel in offcanvas\n ========================================================================== */\n.uk-offcanvas .uk-panel {\n  margin: 20px 15px;\n  color: #777;\n}\n.uk-offcanvas .uk-panel-title {\n  color: #ccc;\n}\n.uk-offcanvas .uk-panel a:not([class]) {\n  color: #ccc;\n}\n.uk-offcanvas .uk-panel a:not([class]):hover {\n  color: #fff;\n}\n/* ========================================================================\n   Component: Switcher\n ========================================================================== */\n/*\n * 1. Deactivate browser history navigation in IE11\n */\n.uk-switcher {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  /* 1 */\n  touch-action: cross-slide-y pinch-zoom double-tap-zoom;\n}\n/*\n * Items\n */\n.uk-switcher > :not(.uk-active) {\n  display: none;\n}\n/* ========================================================================\n   Component: Text\n ========================================================================== */\n/* Size modifiers\n ========================================================================== */\n.uk-text-small {\n  font-size: 11px;\n  line-height: 16px;\n}\n.uk-text-large {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: normal;\n}\n/* Weight modifiers\n ========================================================================== */\n.uk-text-bold {\n  font-weight: bold;\n}\n/* Color modifiers\n ========================================================================== */\n.uk-text-muted {\n  color: #999 !important;\n}\n.uk-text-primary {\n  color: #2d7091 !important;\n}\n.uk-text-success {\n  color: #659f13 !important;\n}\n.uk-text-warning {\n  color: #e28327 !important;\n}\n.uk-text-danger {\n  color: #d85030 !important;\n}\n.uk-text-contrast {\n  color: #fff !important;\n}\n/* Alignment modifiers\n ========================================================================== */\n.uk-text-left {\n  text-align: left !important;\n}\n.uk-text-right {\n  text-align: right !important;\n}\n.uk-text-center {\n  text-align: center !important;\n}\n.uk-text-justify {\n  text-align: justify !important;\n}\n.uk-text-top {\n  vertical-align: top !important;\n}\n.uk-text-middle {\n  vertical-align: middle !important;\n}\n.uk-text-bottom {\n  vertical-align: bottom !important;\n}\n/* Only tablets portrait and smaller */\n@media (max-width: 959px) {\n  .uk-text-center-medium {\n    text-align: center !important;\n  }\n  .uk-text-left-medium {\n    text-align: left !important;\n  }\n}\n/* Phone landscape and smaller */\n@media (max-width: 767px) {\n  .uk-text-center-small {\n    text-align: center !important;\n  }\n  .uk-text-left-small {\n    text-align: left !important;\n  }\n}\n/* Wrap modifiers\n ========================================================================== */\n/*\n * Prevent text from wrapping onto multiple lines\n */\n.uk-text-nowrap {\n  white-space: nowrap;\n}\n/*\n * Prevent text from wrapping onto multiple lines, and truncate with an ellipsis\n */\n.uk-text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*\n * Break strings if their length exceeds the width of their container\n */\n.uk-text-break {\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  hyphens: auto;\n}\n/* Transform modifiers\n ========================================================================== */\n.uk-text-capitalize {\n  text-transform: capitalize !important;\n}\n.uk-text-lowercase {\n  text-transform: lowercase !important;\n}\n.uk-text-uppercase {\n  text-transform: uppercase !important;\n}\n/* ========================================================================\n   Component: Utility\n ========================================================================== */\n/* Container\n ========================================================================== */\n.uk-container {\n  box-sizing: border-box;\n  max-width: 980px;\n  padding: 0 25px;\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-container {\n    max-width: 1200px;\n    padding: 0 35px;\n  }\n}\n/*\n * Micro clearfix\n */\n.uk-container:before,\n.uk-container:after {\n  content: \"\";\n  display: table;\n}\n.uk-container:after {\n  clear: both;\n}\n/*\n * Center container\n */\n.uk-container-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n/* Clearing\n ========================================================================== */\n/*\n * Micro clearfix\n* `table-cell` is used with `:before` because `table` creates a 1px gap when it becomes a flex item, only in Webkit\n * `table` is used again with `:after` because `clear` only works with block elements.\n * Note: `display: block` with `overflow: hidden` is currently not working in the latest Safari\n */\n.uk-clearfix:before {\n  content: \"\";\n  display: table-cell;\n}\n.uk-clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/*\n *  Create a new block formatting context\n */\n.uk-nbfc {\n  overflow: hidden;\n}\n.uk-nbfc-alt {\n  display: table-cell;\n  width: 10000px;\n}\n/* Alignment of block elements\n ========================================================================== */\n/*\n * Float blocks\n * 1. Prevent content overflow on small devices\n */\n.uk-float-left {\n  float: left;\n}\n.uk-float-right {\n  float: right;\n}\n/* 1 */\n[class*='uk-float-'] {\n  max-width: 100%;\n}\n/* Alignment of images and objects\n ========================================================================== */\n/*\n * Alignment\n */\n[class*='uk-align-'] {\n  display: block;\n  margin-bottom: 15px;\n}\n.uk-align-left {\n  margin-right: 15px;\n  float: left;\n}\n.uk-align-right {\n  margin-left: 15px;\n  float: right;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-align-medium-left {\n    margin-right: 15px;\n    float: left;\n  }\n  .uk-align-medium-right {\n    margin-left: 15px;\n    float: right;\n  }\n}\n.uk-align-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n/* Vertical alignment\n ========================================================================== */\n/*\n * Remove whitespace between child elements when using `inline-block`\n */\n.uk-vertical-align {\n  font-size: 0.001px;\n}\n/*\n *  The `uk-vertical-align` container needs a specific height\n */\n.uk-vertical-align:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n/*\n * Sub-object which can have any height\n * 1. Reset whitespace hack\n */\n.uk-vertical-align-middle,\n.uk-vertical-align-bottom {\n  display: inline-block;\n  max-width: 100%;\n  /* 1 */\n  font-size: 1rem;\n}\n.uk-vertical-align-middle {\n  vertical-align: middle;\n}\n.uk-vertical-align-bottom {\n  vertical-align: bottom;\n}\n/* Height\n ========================================================================== */\n/*\n * More robust if padding and border are used\n */\n[class*='uk-height'] {\n  box-sizing: border-box;\n}\n/*\n * Useful to extend the `html` and `body` element to the full height of the page.\n */\n.uk-height-1-1 {\n  height: 100%;\n}\n/*\n * Useful to create image teasers\n */\n.uk-height-viewport {\n  height: 100vh;\n  min-height: 600px;\n}\n/* Responsive objects\n * Note: Images are already responsive by default, see Base component\n ========================================================================== */\n/*\n * 1. Corrects `max-width` and `max-height` behavior if padding and border are used\n */\n.uk-responsive-width,\n.uk-responsive-height {\n  box-sizing: border-box;\n}\n/*\n * Responsiveness: Sets a maximum width relative to the parent and auto scales the height\n * `important` needed to override `uk-img-preserve img`\n */\n.uk-responsive-width {\n  max-width: 100% !important;\n  height: auto;\n}\n/*\n * Responsiveness: Sets a maximum height relative to the parent and auto scales the width\n * Only works if the parent element has a fixed height.\n */\n.uk-responsive-height {\n  max-height: 100%;\n  width: auto;\n}\n/* Margin\n ========================================================================== */\n/*\n * Create a block with the same margin of a paragraph\n * Add margin if adjacent element\n */\n.uk-margin {\n  margin-bottom: 15px;\n}\n* + .uk-margin {\n  margin-top: 15px;\n}\n.uk-margin-top {\n  margin-top: 15px !important;\n}\n.uk-margin-bottom {\n  margin-bottom: 15px !important;\n}\n.uk-margin-left {\n  margin-left: 15px !important;\n}\n.uk-margin-right {\n  margin-right: 15px !important;\n}\n/*\n * Larger margins\n */\n.uk-margin-large {\n  margin-bottom: 50px;\n}\n* + .uk-margin-large {\n  margin-top: 50px;\n}\n.uk-margin-large-top {\n  margin-top: 50px !important;\n}\n.uk-margin-large-bottom {\n  margin-bottom: 50px !important;\n}\n.uk-margin-large-left {\n  margin-left: 50px !important;\n}\n.uk-margin-large-right {\n  margin-right: 50px !important;\n}\n/*\n * Smaller margins\n */\n.uk-margin-small {\n  margin-bottom: 5px;\n}\n* + .uk-margin-small {\n  margin-top: 5px;\n}\n.uk-margin-small-top {\n  margin-top: 5px !important;\n}\n.uk-margin-small-bottom {\n  margin-bottom: 5px !important;\n}\n.uk-margin-small-left {\n  margin-left: 5px !important;\n}\n.uk-margin-small-right {\n  margin-right: 5px !important;\n}\n/*\n * Remove margins\n */\n.uk-margin-remove {\n  margin: 0 !important;\n}\n.uk-margin-top-remove {\n  margin-top: 0 !important;\n}\n.uk-margin-bottom-remove {\n  margin-bottom: 0 !important;\n}\n/* Padding\n ========================================================================== */\n.uk-padding-remove {\n  padding: 0 !important;\n}\n.uk-padding-top-remove {\n  padding-top: 0 !important;\n}\n.uk-padding-bottom-remove {\n  padding-bottom: 0 !important;\n}\n.uk-padding-vertical-remove {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n/* Border\n ========================================================================== */\n.uk-border-circle {\n  border-radius: 50%;\n}\n.uk-border-rounded {\n  border-radius: 5px;\n}\n/* Headings\n ========================================================================== */\n.uk-heading-large {\n  font-size: 36px;\n  line-height: 42px;\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-heading-large {\n    font-size: 52px;\n    line-height: 64px;\n  }\n}\n/* Link\n ========================================================================== */\n/*\n * Let links appear in default text color\n */\n.uk-link-muted,\n.uk-link-muted a {\n  color: #444;\n}\n.uk-link-muted:hover,\n.uk-link-muted a:hover {\n  color: #444;\n}\n/*\n * Reset link style\n */\n.uk-link-reset,\n.uk-link-reset a,\n.uk-link-reset:hover,\n.uk-link-reset a:hover,\n.uk-link-reset:focus,\n.uk-link-reset a:focus {\n  color: inherit;\n  text-decoration: none;\n}\n/* Scrollable\n ========================================================================== */\n/*\n * Enable scrolling for preformatted text\n */\n.uk-scrollable-text {\n  height: 300px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  resize: both;\n}\n/*\n * Box with scrolling enabled\n */\n.uk-scrollable-box {\n  box-sizing: border-box;\n  height: 170px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  resize: both;\n}\n.uk-scrollable-box > :last-child {\n  margin-bottom: 0;\n}\n/* Overflow\n ========================================================================== */\n.uk-overflow-hidden {\n  overflow: hidden;\n}\n/*\n * Enable scrollbars if content is clipped\n */\n.uk-overflow-container {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.uk-overflow-container > :last-child {\n  margin-bottom: 0;\n}\n/* Position\n ========================================================================== */\n.uk-position-absolute,\n[class*='uk-position-top'],\n[class*='uk-position-bottom'] {\n  position: absolute !important;\n}\n/* Don't use `width: 100%` because it is wrong if the parent has padding. */\n.uk-position-top {\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.uk-position-bottom {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.uk-position-top-left {\n  top: 0;\n  left: 0;\n}\n.uk-position-top-right {\n  top: 0;\n  right: 0;\n}\n.uk-position-bottom-left {\n  bottom: 0;\n  left: 0;\n}\n.uk-position-bottom-right {\n  bottom: 0;\n  right: 0;\n}\n/*\n * Cover\n */\n.uk-position-cover {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*\n * Relative\n */\n.uk-position-relative {\n  position: relative !important;\n}\n/*\n * Z-index\n */\n.uk-position-z-index {\n  z-index: 1;\n}\n/* Display\n ========================================================================== */\n/*\n * Display\n * 1. Required if child is a responsive image\n */\n.uk-display-block {\n  display: block !important;\n}\n.uk-display-inline {\n  display: inline !important;\n}\n.uk-display-inline-block {\n  display: inline-block !important;\n  /* 1 */\n  max-width: 100%;\n}\n/*\n * Visibility\n * Avoids setting display to `block` so it works also with `inline-block` and `table`\n */\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-visible-small {\n    display: none !important;\n  }\n  .uk-visible-medium {\n    display: none !important;\n  }\n  .uk-hidden-large {\n    display: none !important;\n  }\n}\n/* Tablets portrait */\n@media (min-width: 768px) and (max-width: 959px) {\n  .uk-visible-small {\n    display: none !important;\n  }\n  .uk-visible-large {\n    display: none !important ;\n  }\n  .uk-hidden-medium {\n    display: none !important;\n  }\n}\n/* Phone landscape and smaller*/\n@media (max-width: 767px) {\n  .uk-visible-medium {\n    display: none !important;\n  }\n  .uk-visible-large {\n    display: none !important;\n  }\n  .uk-hidden-small {\n    display: none !important;\n  }\n}\n/* Remove from the flow and screen readers on any device */\n.uk-hidden {\n  display: none !important;\n  visibility: hidden !important;\n}\n/* It's hidden, but still affects layout */\n.uk-invisible {\n  visibility: hidden !important;\n}\n/* Show on hover */\n.uk-visible-hover:hover .uk-hidden,\n.uk-visible-hover:hover .uk-invisible {\n  display: block !important;\n  visibility: visible !important;\n}\n.uk-visible-hover-inline:hover .uk-hidden,\n.uk-visible-hover-inline:hover .uk-invisible {\n  display: inline-block !important;\n  visibility: visible !important;\n}\n/* Hide on touch */\n.uk-touch .uk-hidden-touch,\n.uk-notouch .uk-hidden-notouch {\n  display: none !important;\n}\n/* ========================================================================\n   Component: Flex\n ========================================================================== */\n.uk-flex {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n.uk-flex-inline {\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n}\n/*\n * Fixes initial flex-shrink value in IE10\n */\n.uk-flex > *,\n.uk-flex-inline > * {\n  -ms-flex-negative: 1;\n}\n/* Alignment\n ========================================================================== */\n/*\n * Vertical alignment\n * Default value is `stretch`\n */\n.uk-flex-top {\n  -ms-flex-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n.uk-flex-middle {\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n.uk-flex-bottom {\n  -ms-flex-align: end;\n  -webkit-align-items: flex-end;\n  align-items: flex-end;\n}\n/*\n * Horizontal alignment\n * Default value is `flex-start`\n */\n.uk-flex-center {\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n.uk-flex-right {\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n}\n.uk-flex-space-between {\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n}\n.uk-flex-space-around {\n  -ms-flex-pack: distribute;\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n}\n/* Direction\n ========================================================================== */\n.uk-flex-row-reverse {\n  -ms-flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n.uk-flex-column {\n  -ms-flex-direction: column;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n.uk-flex-column-reverse {\n  -ms-flex-direction: column-reverse;\n  -webkit-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n/* Wrap\n ========================================================================== */\n.uk-flex-nowrap {\n  -ms-flex-wrap: nowrap;\n  -webkit-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n.uk-flex-wrap {\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.uk-flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse;\n  -webkit-flex-wrap: wrap-reverse;\n  flex-wrap: wrap-reverse;\n}\n/*\n * Horizontal alignment\n * Default value is `stretch`\n */\n.uk-flex-wrap-top {\n  -ms-flex-line-pack: start;\n  -webkit-align-content: flex-start;\n  align-content: flex-start;\n}\n.uk-flex-wrap-middle {\n  -ms-flex-line-pack: center;\n  -webkit-align-content: center;\n  align-content: center;\n}\n.uk-flex-wrap-bottom {\n  -ms-flex-line-pack: end;\n  -webkit-align-content: flex-end;\n  align-content: flex-end;\n}\n.uk-flex-wrap-space-between {\n  -ms-flex-line-pack: justify;\n  -webkit-align-content: space-between;\n  align-content: space-between;\n}\n.uk-flex-wrap-space-around {\n  -ms-flex-line-pack: distribute;\n  -webkit-align-content: space-around;\n  align-content: space-around;\n}\n/* Item ordering\n ========================================================================== */\n/*\n * Default is 0\n */\n.uk-flex-order-first {\n  -ms-flex-order: -1;\n  -webkit-order: -1;\n  order: -1;\n}\n.uk-flex-order-last {\n  -ms-flex-order: 99;\n  -webkit-order: 99;\n  order: 99;\n}\n/* Phone landscape and bigger */\n@media (min-width: 480px) {\n  .uk-flex-order-first-small {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n  .uk-flex-order-last-small {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n/* Tablet and bigger */\n@media (min-width: 768px) {\n  .uk-flex-order-first-medium {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n  .uk-flex-order-last-medium {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-flex-order-first-large {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n  .uk-flex-order-last-large {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1220px) {\n  .uk-flex-order-first-xlarge {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n  .uk-flex-order-last-xlarge {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n/* Item dimensions\n ========================================================================== */\n/*\n * Initial: 0 1 auto\n * Content dimensions, but shrinks\n */\n/*\n * No Flex: 0 0 auto\n * Content dimensions\n */\n.uk-flex-item-none {\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n}\n/*\n * Relative Flex: 1 1 auto\n * Space is allocated considering content\n * 1. Fixes flex-shrink value in IE10\n */\n.uk-flex-item-auto {\n  -ms-flex: auto;\n  -webkit-flex: auto;\n  flex: auto;\n  /* 1 */\n  -ms-flex-negative: 1;\n}\n/*\n * Absolute Flex: 1 1 0%\n * Space is allocated solely based on flex\n */\n.uk-flex-item-1 {\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n/* ========================================================================\n   Component: Contrast\n ========================================================================== */\n.uk-contrast {\n  color: #fff;\n  /* Active */\n}\n.uk-contrast a:not([class]),\n.uk-contrast .uk-link {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n}\n.uk-contrast a:not([class]):hover,\n.uk-contrast .uk-link:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n.uk-contrast :not(pre) > code,\n.uk-contrast :not(pre) > kbd,\n.uk-contrast :not(pre) > samp {\n  color: #fff;\n}\n.uk-contrast em {\n  color: #fff;\n}\n.uk-contrast h1,\n.uk-contrast h2,\n.uk-contrast h3,\n.uk-contrast h4,\n.uk-contrast h5,\n.uk-contrast h6 {\n  color: #fff;\n}\n.uk-contrast hr {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-nav li > a,\n.uk-contrast .uk-nav li > a:hover {\n  text-decoration: none;\n}\n.uk-contrast .uk-nav-side > li > a {\n  color: #fff;\n}\n.uk-contrast .uk-nav-side > li > a:hover,\n.uk-contrast .uk-nav-side > li > a:focus {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.uk-contrast .uk-nav-side > li.uk-active > a {\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-nav-side .uk-nav-header {\n  color: #fff;\n}\n.uk-contrast .uk-nav-side .uk-nav-divider {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-nav-side ul a {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-contrast .uk-nav-side ul a:hover {\n  color: #fff;\n}\n.uk-contrast .uk-subnav > * > a {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n}\n.uk-contrast .uk-subnav > * > a:hover,\n.uk-contrast .uk-subnav > * > a:focus {\n  color: #fff;\n  text-decoration: none;\n}\n.uk-contrast .uk-subnav > .uk-active > a {\n  color: #fff;\n}\n.uk-contrast .uk-subnav-line > :nth-child(n+2):before {\n  border-left-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-subnav-pill > * > a:hover,\n.uk-contrast .uk-subnav-pill > * > a:focus {\n  background: rgba(255, 255, 255, 0.7);\n  color: #444;\n  text-decoration: none;\n}\n.uk-contrast .uk-subnav-pill > .uk-active > a {\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-tab {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-tab > li > a {\n  border-color: transparent;\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-contrast .uk-tab > li > a:hover,\n.uk-contrast .uk-tab > li > a:focus,\n.uk-contrast .uk-tab > li.uk-open > a {\n  border-color: rgba(255, 255, 255, 0.7);\n  background: rgba(255, 255, 255, 0.7);\n  color: #444;\n  text-decoration: none;\n}\n.uk-contrast .uk-tab > li.uk-active > a {\n  border-color: rgba(255, 255, 255, 0.2);\n  border-bottom-color: transparent;\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-tab-center {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-tab-grid:before {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-list-line > li:nth-child(n+2) {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-contrast .uk-form select,\n.uk-contrast .uk-form textarea,\n.uk-contrast .uk-form input:not([type]),\n.uk-contrast .uk-form input[type=\"text\"],\n.uk-contrast .uk-form input[type=\"password\"],\n.uk-contrast .uk-form input[type=\"datetime\"],\n.uk-contrast .uk-form input[type=\"datetime-local\"],\n.uk-contrast .uk-form input[type=\"date\"],\n.uk-contrast .uk-form input[type=\"month\"],\n.uk-contrast .uk-form input[type=\"time\"],\n.uk-contrast .uk-form input[type=\"week\"],\n.uk-contrast .uk-form input[type=\"number\"],\n.uk-contrast .uk-form input[type=\"email\"],\n.uk-contrast .uk-form input[type=\"url\"],\n.uk-contrast .uk-form input[type=\"search\"],\n.uk-contrast .uk-form input[type=\"tel\"],\n.uk-contrast .uk-form input[type=\"color\"] {\n  border-color: rgba(255, 255, 255, 0.8);\n  background: rgba(255, 255, 255, 0.8);\n  color: #444;\n  background-clip: padding-box;\n}\n.uk-contrast .uk-form select:focus,\n.uk-contrast .uk-form textarea:focus,\n.uk-contrast .uk-form input:not([type]):focus,\n.uk-contrast .uk-form input[type=\"text\"]:focus,\n.uk-contrast .uk-form input[type=\"password\"]:focus,\n.uk-contrast .uk-form input[type=\"datetime\"]:focus,\n.uk-contrast .uk-form input[type=\"datetime-local\"]:focus,\n.uk-contrast .uk-form input[type=\"date\"]:focus,\n.uk-contrast .uk-form input[type=\"month\"]:focus,\n.uk-contrast .uk-form input[type=\"time\"]:focus,\n.uk-contrast .uk-form input[type=\"week\"]:focus,\n.uk-contrast .uk-form input[type=\"number\"]:focus,\n.uk-contrast .uk-form input[type=\"email\"]:focus,\n.uk-contrast .uk-form input[type=\"url\"]:focus,\n.uk-contrast .uk-form input[type=\"search\"]:focus,\n.uk-contrast .uk-form input[type=\"tel\"]:focus,\n.uk-contrast .uk-form input[type=\"color\"]:focus {\n  border-color: #fff;\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-form :-ms-input-placeholder {\n  color: rgba(68, 68, 68, 0.7) !important;\n}\n.uk-contrast .uk-form ::-moz-placeholder {\n  color: rgba(68, 68, 68, 0.7);\n}\n.uk-contrast .uk-form ::-webkit-input-placeholder {\n  color: rgba(68, 68, 68, 0.7);\n}\n.uk-contrast .uk-button {\n  color: #444;\n  background: #fff;\n}\n.uk-contrast .uk-button:hover,\n.uk-contrast .uk-button:focus {\n  background-color: rgba(255, 255, 255, 0.8);\n  color: #444;\n}\n.uk-contrast .uk-button:active,\n.uk-contrast .uk-button.uk-active {\n  background-color: rgba(255, 255, 255, 0.7);\n  color: #444;\n}\n.uk-contrast .uk-button-primary {\n  background-color: #00a8e6;\n  color: #fff;\n}\n.uk-contrast .uk-button-primary:hover,\n.uk-contrast .uk-button-primary:focus {\n  background-color: #35b3ee;\n  color: #fff;\n}\n.uk-contrast .uk-button-primary:active,\n.uk-contrast .uk-button-primary.uk-active {\n  background-color: #0091ca;\n  color: #fff;\n}\n.uk-contrast .uk-icon-hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-contrast .uk-icon-hover:hover {\n  color: #fff;\n}\n.uk-contrast .uk-icon-button {\n  background: #fff;\n  color: #444;\n}\n.uk-contrast .uk-icon-button:hover,\n.uk-contrast .uk-icon-button:focus {\n  background-color: rgba(255, 255, 255, 0.8);\n  color: #444;\n}\n.uk-contrast .uk-icon-button:active {\n  background-color: rgba(255, 255, 255, 0.7);\n  color: #444;\n}\n.uk-contrast .uk-text-muted {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n.uk-contrast .uk-text-primary {\n  color: #2d7091 !important;\n}\n/* ========================================================================\n   Component: Print\n ========================================================================== */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: black !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  @page {\n    margin: 0.5cm;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".left-panel {\r\n    background: #333;\r\n    color: #fff\r\n}\r\n\r\n.tabs{\r\n    display:none;\r\n}\r\n.tabs.active{\r\n    display:block;\r\n}\r\n\r\n.editor {\r\n  width: 100%;\r\n  height: 800px;\r\n}\r\n.tm-navbar {\r\n    padding: 15px 0;\r\n    border: none;\r\n    background: #000;\r\n}\r\n.tm-navbar {\r\n    position: relative;\r\n}\r\n\r\n.warningLineDecoration {\r\n    background: red;\r\n    width: 5px !important;\r\n    left: 3px;\r\n}\r\n\r\n.edit-title {\r\n    font-size: 70%;\r\n}\r\n\r\n.edit-title:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.treeview {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.treeview ul {\r\n    margin: 0;\r\n    padding-left: 10px;\r\n    list-style: none;\r\n}\r\n\r\n.treeview li.uk-active > a, .treeview li.uk-active > span {\r\n    background: #00a8e6;\r\n    color: #fff;\r\n}\r\n\r\n.treeview ul a:hover, .treeview ul span:hover {\r\n    __color: #059;\r\n}\r\n\r\n.treeview li > a:hover, .treeview li > a:focus, .treeview li > span:hover, .treeview li > span:focus {\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #EEE;\r\n    outline: none;\r\n}\r\n\r\n.treeview li > span, .treeview li > span > a {\r\n    color: #EEE;\r\n    padding: 2px 5px;\r\n    display: block;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/events/events.js":
/*!****************************************!*\
  !*** ../node_modules/events/events.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "../node_modules/jquery/dist/jquery.js":
/*!*********************************************!*\
  !*** ../node_modules/jquery/dist/jquery.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/uikit/dist/css/components/notify.css":
/*!************************************************************!*\
  !*** ../node_modules/uikit/dist/css/components/notify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js!./notify.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/uikit/dist/css/components/notify.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../node_modules/uikit/dist/css/uikit.css":
/*!************************************************!*\
  !*** ../node_modules/uikit/dist/css/uikit.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./uikit.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/uikit/dist/css/uikit.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../node_modules/uikit/dist/fonts/fontawesome-webfont.ttf":
/*!****************************************************************!*\
  !*** ../node_modules/uikit/dist/fonts/fontawesome-webfont.ttf ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1e59d2330b4c6deb84b340635ed36249.ttf");

/***/ }),

/***/ "../node_modules/uikit/dist/fonts/fontawesome-webfont.woff":
/*!*****************************************************************!*\
  !*** ../node_modules/uikit/dist/fonts/fontawesome-webfont.woff ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f691f37e57f04c152e2315ab7dbad881.woff");

/***/ }),

/***/ "../node_modules/uikit/dist/fonts/fontawesome-webfont.woff2":
/*!******************************************************************!*\
  !*** ../node_modules/uikit/dist/fonts/fontawesome-webfont.woff2 ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "20fd1704ea223900efa9fd4e869efb08.woff2");

/***/ }),

/***/ "../node_modules/uikit/dist/js/uikit.js":
/*!**********************************************!*\
  !*** ../node_modules/uikit/dist/js/uikit.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, __webpack_provided_window_dot_jQuery) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.27.3 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function(core) {

    var uikit;

    if (!__webpack_provided_window_dot_jQuery) {
        throw new Error('UIkit 2.x requires jQuery');
    } else {
        uikit = core(__webpack_provided_window_dot_jQuery);
    }

    if (true) { // AMD

        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){

            uikit.load = function(res, req, onload, config) {

                var resources = res.split(','), load = [], i, base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : '').replace(/\/+$/g, '');

                if (!base) {
                    throw new Error('Please define base path to UIkit in the requirejs config.');
                }

                for (i = 0; i < resources.length; i += 1) {
                    var resource = resources[i].replace(/\./g, '/');
                    load.push(base+'/components/'+resource);
                }

                req(load, function() {
                    onload(uikit);
                });
            };

            return uikit;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }

})(function($) {

    "use strict";

    if (window.UIkit2) {
        return window.UIkit2;
    }

    var UI = {}, _UI = window.UIkit || undefined;

    UI.version = '2.27.3';

    UI.noConflict = function() {
        // restore UIkit version
        if (_UI) {
            window.UIkit = _UI;
            $.UIkit      = _UI;
            $.fn.uk      = _UI.fn;
        }

        return UI;
    };

    window.UIkit2 = UI;

    if (!_UI) {
        window.UIkit = UI;
    }

    // cache jQuery
    UI.$ = $;

    UI.$doc  = UI.$(document);
    UI.$win  = UI.$(window);
    UI.$html = UI.$('html');

    UI.support = {};
    UI.support.transition = (function() {

        var transitionEnd = (function() {

            var element = document.body || document.documentElement,
                transEndEventNames = {
                    WebkitTransition : 'webkitTransitionEnd',
                    MozTransition    : 'transitionend',
                    OTransition      : 'oTransitionEnd otransitionend',
                    transition       : 'transitionend'
                }, name;

            for (name in transEndEventNames) {
                if (element.style[name] !== undefined) return transEndEventNames[name];
            }
        }());

        return transitionEnd && { end: transitionEnd };
    })();

    UI.support.animation = (function() {

        var animationEnd = (function() {

            var element = document.body || document.documentElement,
                animEndEventNames = {
                    WebkitAnimation : 'webkitAnimationEnd',
                    MozAnimation    : 'animationend',
                    OAnimation      : 'oAnimationEnd oanimationend',
                    animation       : 'animationend'
                }, name;

            for (name in animEndEventNames) {
                if (element.style[name] !== undefined) return animEndEventNames[name];
            }
        }());

        return animationEnd && { end: animationEnd };
    })();

    // requestAnimationFrame polyfill
    //https://github.com/darius/requestAnimationFrame
    (function() {

        Date.now = Date.now || function() { return new Date().getTime(); };

        var vendors = ['webkit', 'moz'];
        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
            window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                       || window[vp+'CancelRequestAnimationFrame']);
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
            || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;
            window.requestAnimationFrame = function(callback) {
                var now = Date.now();
                var nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function() { callback(lastTime = nextTime); },
                                  nextTime - now);
            };
            window.cancelAnimationFrame = clearTimeout;
        }
    }());

    UI.support.touch = (
        ('ontouchstart' in document) ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
        (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0) || //IE 10
        (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0) || //IE >=11
        false
    );

    UI.support.mutationobserver = (window.MutationObserver || window.WebKitMutationObserver || null);

    UI.Utils = {};

    UI.Utils.isFullscreen = function() {
        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || false;
    };

    UI.Utils.str2json = function(str, notevil) {
        try {
            if (notevil) {
                return JSON.parse(str
                    // wrap keys without quote with valid double quote
                    .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":';})
                    // replacing single quote wrapped ones to double quote
                    .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"';})
                );
            } else {
                return (new Function('', 'var json = ' + str + '; return JSON.parse(JSON.stringify(json));'))();
            }
        } catch(e) { return false; }
    };

    UI.Utils.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    UI.Utils.throttle = function (func, limit) {
        var wait = false;
        return function () {
            if (!wait) {
                func.call();
                wait = true;
                setTimeout(function () {
                    wait = false;
                }, limit);
            }
        }
    };

    UI.Utils.removeCssRules = function(selectorRegEx) {
        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

        if(!selectorRegEx) return;

        setTimeout(function(){
            try {
              _ref = document.styleSheets;
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                stylesheet = _ref[_i];
                idxs = [];
                stylesheet.cssRules = stylesheet.cssRules;
                for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
                  if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
                    idxs.unshift(idx);
                  }
                }
                for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
                  stylesheet.deleteRule(idxs[_k]);
                }
              }
            } catch (_error) {}
        }, 0);
    };

    UI.Utils.isInView = function(element, options) {

        var $element = $(element);

        if (!$element.is(':visible')) {
            return false;
        }

        var window_left = UI.$win.scrollLeft(), window_top = UI.$win.scrollTop(), offset = $element.offset(), left = offset.left, top = offset.top;

        options = $.extend({topoffset:0, leftoffset:0}, options);

        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + UI.$win.height() &&
            left + $element.width() >= window_left && left - options.leftoffset <= window_left + UI.$win.width()) {
          return true;
        } else {
          return false;
        }
    };

    UI.Utils.checkDisplay = function(context, initanimation) {

        var elements = UI.$('[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]', context || document), animated;

        if (context && !elements.length) {
            elements = $(context);
        }

        elements.trigger('display.uk.check');

        // fix firefox / IE animations
        if (initanimation) {

            if (typeof(initanimation)!='string') {
                initanimation = '[class*="uk-animation-"]';
            }

            elements.find(initanimation).each(function(){

                var ele  = UI.$(this),
                    cls  = ele.attr('class'),
                    anim = cls.match(/uk-animation-(.+)/);

                ele.removeClass(anim[0]).width();

                ele.addClass(anim[0]);
            });
        }

        return elements;
    };

    UI.Utils.options = function(string) {

        if ($.type(string)!='string') return string;

        if (string.indexOf(':') != -1 && string.trim().substr(-1) != '}') {
            string = '{'+string+'}';
        }

        var start = (string ? string.indexOf("{") : -1), options = {};

        if (start != -1) {
            try {
                options = UI.Utils.str2json(string.substr(start));
            } catch (e) {}
        }

        return options;
    };

    UI.Utils.animate = function(element, cls) {

        var d = $.Deferred();

        element = UI.$(element);

        element.css('display', 'none').addClass(cls).one(UI.support.animation.end, function() {
            element.removeClass(cls);
            d.resolve();
        });

        element.css('display', '');

        return d.promise();
    };

    UI.Utils.uid = function(prefix) {
        return (prefix || 'id') + (new Date().getTime())+"RAND"+(Math.ceil(Math.random() * 100000));
    };

    UI.Utils.template = function(str, data) {

        var tokens = str.replace(/\n/g, '\\n').replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),
            i=0, toc, cmd, prop, val, fn, output = [], openblocks = 0;

        while(i < tokens.length) {

            toc = tokens[i];

            if(toc.match(/\{\{\s*(.+?)\s*\}\}/)) {
                i = i + 1;
                toc  = tokens[i];
                cmd  = toc[0];
                prop = toc.substring(toc.match(/^(\^|\#|\!|\~|\:)/) ? 1:0);

                switch(cmd) {
                    case '~':
                        output.push('for(var $i=0;$i<'+prop+'.length;$i++) { var $item = '+prop+'[$i];');
                        openblocks++;
                        break;
                    case ':':
                        output.push('for(var $key in '+prop+') { var $val = '+prop+'[$key];');
                        openblocks++;
                        break;
                    case '#':
                        output.push('if('+prop+') {');
                        openblocks++;
                        break;
                    case '^':
                        output.push('if(!'+prop+') {');
                        openblocks++;
                        break;
                    case '/':
                        output.push('}');
                        openblocks--;
                        break;
                    case '!':
                        output.push('__ret.push('+prop+');');
                        break;
                    default:
                        output.push('__ret.push(escape('+prop+'));');
                        break;
                }
            } else {
                output.push("__ret.push('"+toc.replace(/\'/g, "\\'")+"');");
            }
            i = i + 1;
        }

        fn  = new Function('$data', [
            'var __ret = [];',
            'try {',
            'with($data){', (!openblocks ? output.join('') : '__ret = ["Not all blocks are closed correctly."]'), '};',
            '}catch(e){__ret = [e.message];}',
            'return __ret.join("").replace(/\\n\\n/g, "\\n");',
            "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"
        ].join("\n"));

        return data ? fn(data) : fn;
    };

    UI.Utils.focus = function(element, extra) {

        element = $(element);

        if (!element.length) {
            return element;
        }

        var autofocus = element.find('[autofocus]:first'), tabidx;

        if (autofocus.length) {
            return autofocus.focus();
        }

        autofocus = element.find(':input'+(extra && (','+extra) || '')).first();

        if (autofocus.length) {
            return autofocus.focus();
        }

        if (!element.attr('tabindex')) {
            tabidx = 1000;
            element.attr('tabindex', tabidx);
        }

        element[0].focus();

        if (tabidx) {
            element.attr('tabindex', '');
        }

        return element;
    }

    UI.Utils.events       = {};
    UI.Utils.events.click = UI.support.touch ? 'tap' : 'click';

    // deprecated

    UI.fn = function(command, options) {

        var args = arguments, cmd = command.match(/^([a-z\-]+)(?:\.([a-z]+))?/i), component = cmd[1], method = cmd[2];

        if (!UI[component]) {
            $.error('UIkit component [' + component + '] does not exist.');
            return this;
        }

        return this.each(function() {
            var $this = $(this), data = $this.data(component);
            if (!data) $this.data(component, (data = UI[component](this, method ? undefined : options)));
            if (method) data[method].apply(data, Array.prototype.slice.call(args, 1));
        });
    };

    $.UIkit          = UI;
    $.fn.uk          = UI.fn;

    UI.langdirection = UI.$html.attr("dir") == "rtl" ? "right" : "left";

    UI.components    = {};

    UI.component = function(name, def, override) {

        if (UI.components[name] && !override) {
            return UI.components[name];
        }

        var fn = function(element, options) {

            var $this = this;

            this.UIkit   = UI;
            this.element = element ? UI.$(element) : null;
            this.options = $.extend(true, {}, this.defaults, options);
            this.plugins = {};

            if (this.element) {
                this.element.data(name, this);
            }

            this.init();

            (this.options.plugins.length ? this.options.plugins : Object.keys(fn.plugins)).forEach(function(plugin) {

                if (fn.plugins[plugin].init) {
                    fn.plugins[plugin].init($this);
                    $this.plugins[plugin] = true;
                }

            });

            this.trigger('init.uk.component', [name, this]);

            return this;
        };

        fn.plugins = {};

        $.extend(true, fn.prototype, {

            defaults : {plugins: []},

            boot: function(){},
            init: function(){},

            on: function(a1,a2,a3){
                return UI.$(this.element || this).on(a1,a2,a3);
            },

            one: function(a1,a2,a3){
                return UI.$(this.element || this).one(a1,a2,a3);
            },

            off: function(evt){
                return UI.$(this.element || this).off(evt);
            },

            trigger: function(evt, params) {
                return UI.$(this.element || this).trigger(evt, params);
            },

            find: function(selector) {
                return UI.$(this.element ? this.element: []).find(selector);
            },

            proxy: function(obj, methods) {

                var $this = this;

                methods.split(' ').forEach(function(method) {
                    if (!$this[method]) $this[method] = function() { return obj[method].apply(obj, arguments); };
                });
            },

            mixin: function(obj, methods) {

                var $this = this;

                methods.split(' ').forEach(function(method) {
                    if (!$this[method]) $this[method] = obj[method].bind($this);
                });
            },

            option: function() {

                if (arguments.length == 1) {
                    return this.options[arguments[0]] || undefined;
                } else if (arguments.length == 2) {
                    this.options[arguments[0]] = arguments[1];
                }
            }

        }, def);

        this.components[name] = fn;

        this[name] = function() {

            var element, options;

            if (arguments.length) {

                switch(arguments.length) {
                    case 1:

                        if (typeof arguments[0] === 'string' || arguments[0].nodeType || arguments[0] instanceof jQuery) {
                            element = $(arguments[0]);
                        } else {
                            options = arguments[0];
                        }

                        break;
                    case 2:

                        element = $(arguments[0]);
                        options = arguments[1];
                        break;
                }
            }

            if (element && element.data(name)) {
                return element.data(name);
            }

            return (new UI.components[name](element, options));
        };

        if (UI.domready) {
            UI.component.boot(name);
        }

        return fn;
    };

    UI.plugin = function(component, name, def) {
        this.components[component].plugins[name] = def;
    };

    UI.component.boot = function(name) {

        if (UI.components[name].prototype && UI.components[name].prototype.boot && !UI.components[name].booted) {
            UI.components[name].prototype.boot.apply(UI, []);
            UI.components[name].booted = true;
        }
    };

    UI.component.bootComponents = function() {

        for (var component in UI.components) {
            UI.component.boot(component);
        }
    };


    // DOM mutation save ready helper function

    UI.domObservers = [];
    UI.domready     = false;

    UI.ready = function(fn) {

        UI.domObservers.push(fn);

        if (UI.domready) {
            fn(document);
        }
    };

    UI.on = function(a1,a2,a3){

        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
        }

        return UI.$doc.on(a1,a2,a3);
    };

    UI.one = function(a1,a2,a3){

        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
            return UI.$doc;
        }

        return UI.$doc.one(a1,a2,a3);
    };

    UI.trigger = function(evt, params) {
        return UI.$doc.trigger(evt, params);
    };

    UI.domObserve = function(selector, fn) {

        if(!UI.support.mutationobserver) return;

        fn = fn || function() {};

        UI.$(selector).each(function() {

            var element  = this,
                $element = UI.$(element);

            if ($element.data('observer')) {
                return;
            }

            try {

                var observer = new UI.support.mutationobserver(UI.Utils.debounce(function(mutations) {
                    fn.apply(element, [$element]);
                    $element.trigger('changed.uk.dom');
                }, 50), {childList: true, subtree: true});

                // pass in the target node, as well as the observer options
                observer.observe(element, { childList: true, subtree: true });

                $element.data('observer', observer);

            } catch(e) {}
        });
    };

    UI.init = function(root) {

        root = root || document;

        UI.domObservers.forEach(function(fn){
            fn(root);
        });
    };

    UI.on('domready.uk.dom', function(){

        UI.init();

        if (UI.domready) UI.Utils.checkDisplay();
    });

    document.addEventListener('DOMContentLoaded', function(){

        var domReady = function() {

            UI.$body = UI.$('body');

            UI.trigger('beforeready.uk.dom');

            UI.component.bootComponents();

            // custom scroll observer
            var rafToken = requestAnimationFrame((function(){

                var memory = {dir: {x:0, y:0}, x: window.pageXOffset, y:window.pageYOffset};

                var fn = function(){
                    // reading this (window.page[X|Y]Offset) causes a full page recalc of the layout in Chrome,
                    // so we only want to do this once
                    var wpxo = window.pageXOffset;
                    var wpyo = window.pageYOffset;

                    // Did the scroll position change since the last time we were here?
                    if (memory.x != wpxo || memory.y != wpyo) {

                        // Set the direction of the scroll and store the new position
                        if (wpxo != memory.x) {memory.dir.x = wpxo > memory.x ? 1:-1; } else { memory.dir.x = 0; }
                        if (wpyo != memory.y) {memory.dir.y = wpyo > memory.y ? 1:-1; } else { memory.dir.y = 0; }

                        memory.x = wpxo;
                        memory.y = wpyo;

                        // Trigger the scroll event, this could probably be sent using memory.clone() but this is
                        // more explicit and easier to see exactly what is being sent in the event.
                        UI.$doc.trigger('scrolling.uk.document', [{
                            dir: {x: memory.dir.x, y: memory.dir.y}, x: wpxo, y: wpyo
                        }]);
                    }

                    cancelAnimationFrame(rafToken);
                    rafToken = requestAnimationFrame(fn);
                };

                if (UI.support.touch) {
                    UI.$html.on('touchmove touchend MSPointerMove MSPointerUp pointermove pointerup', fn);
                }

                if (memory.x || memory.y) fn();

                return fn;

            })());

            // run component init functions on dom
            UI.trigger('domready.uk.dom');

            if (UI.support.touch) {

                // remove css hover rules for touch devices
                // UI.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/);

                // viewport unit fix for uk-height-viewport - should be fixed in iOS 8
                if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {

                    UI.$win.on('load orientationchange resize', UI.Utils.debounce((function(){

                        var fn = function() {
                            $('.uk-height-viewport').css('height', window.innerHeight);
                            return fn;
                        };

                        return fn();

                    })(), 100));
                }
            }

            UI.trigger('afterready.uk.dom');

            // mark that domready is left behind
            UI.domready = true;

            // auto init js components
            if (UI.support.mutationobserver) {

                var initFn = UI.Utils.debounce(function(){
                    requestAnimationFrame(function(){ UI.init(document.body);});
                }, 10);

                (new UI.support.mutationobserver(function(mutations) {

                    var init = false;

                    mutations.every(function(mutation){

                        if (mutation.type != 'childList') return true;

                        for (var i = 0, node; i < mutation.addedNodes.length; ++i) {

                            node = mutation.addedNodes[i];

                            if (node.outerHTML && node.outerHTML.indexOf('data-uk-') !== -1) {
                                return (init = true) && false;
                            }
                        }
                        return true;
                    });

                    if (init) initFn();

                })).observe(document.body, {childList: true, subtree: true});
            }
        };

        if (document.readyState == 'complete' || document.readyState == 'interactive') {
            setTimeout(domReady);
        }

        return domReady;

    }());

    // add touch identifier class
    UI.$html.addClass(UI.support.touch ? 'uk-touch' : 'uk-notouch');

    // add uk-hover class on tap to support overlays on touch devices
    if (UI.support.touch) {

        var hoverset = false,
            exclude,
            hovercls = 'uk-hover',
            selector = '.uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover';

        UI.$html.on('mouseenter touchstart MSPointerDown pointerdown', selector, function() {

            if (hoverset) $('.'+hovercls).removeClass(hovercls);

            hoverset = $(this).addClass(hovercls);

        }).on('mouseleave touchend MSPointerUp pointerup', function(e) {

            exclude = $(e.target).parents(selector);

            if (hoverset) {
                hoverset.not(exclude).removeClass(hovercls);
            }
        });
    }

    return UI;
});

//  Based on Zeptos touch.js
//  https://raw.github.com/madrobby/zepto/master/src/touch.js
//  Zepto.js may be freely distributed under the MIT license.

;(function($){

  if ($.fn.swipeLeft) {
    return;
  }


  var touch = {}, touchTimeout, tapTimeout, swipeTimeout, longTapTimeout, longTapDelay = 750, gesture;
  var hasTouchEvents = 'ontouchstart' in window,
      hasPointerEvents = window.PointerEvent,
      hasTouch = hasTouchEvents
      || window.DocumentTouch && document instanceof DocumentTouch
      || navigator.msPointerEnabled && navigator.msMaxTouchPoints > 0 // IE 10
      || navigator.pointerEnabled && navigator.maxTouchPoints > 0; // IE >=11

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
  }

  function longTap() {
    longTapTimeout = null;
    if (touch.last) {
      if ( touch.el !== undefined ) touch.el.trigger('longTap');
      touch = {};
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout);
    longTapTimeout = null;
  }

  function cancelAll() {
    if (touchTimeout)   clearTimeout(touchTimeout);
    if (tapTimeout)     clearTimeout(tapTimeout);
    if (swipeTimeout)   clearTimeout(swipeTimeout);
    if (longTapTimeout) clearTimeout(longTapTimeout);
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
    touch = {};
  }

  function isPrimaryTouch(event){
    return event.pointerType == event.MSPOINTER_TYPE_TOUCH && event.isPrimary;
  }

  $(function(){
    var now, delta, deltaX = 0, deltaY = 0, firstTouch;

    if ('MSGesture' in window) {
      gesture = new MSGesture();
      gesture.target = document.body;
    }

    $(document)
      .on('MSGestureEnd gestureend', function(e){

        var swipeDirectionFromVelocity = e.originalEvent.velocityX > 1 ? 'Right' : e.originalEvent.velocityX < -1 ? 'Left' : e.originalEvent.velocityY > 1 ? 'Down' : e.originalEvent.velocityY < -1 ? 'Up' : null;

        if (swipeDirectionFromVelocity && touch.el !== undefined) {
          touch.el.trigger('swipe');
          touch.el.trigger('swipe'+ swipeDirectionFromVelocity);
        }
      })
      // MSPointerDown: for IE10
      // pointerdown: for IE11
      .on('touchstart MSPointerDown pointerdown', function(e){

        if(e.type == 'MSPointerDown' && !isPrimaryTouch(e.originalEvent)) return;

        firstTouch = (e.type == 'MSPointerDown' || e.type == 'pointerdown') ? e : e.originalEvent.touches[0];

        now      = Date.now();
        delta    = now - (touch.last || now);
        touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);

        if(touchTimeout) clearTimeout(touchTimeout);

        touch.x1 = firstTouch.pageX;
        touch.y1 = firstTouch.pageY;

        if (delta > 0 && delta <= 250) touch.isDoubleTap = true;

        touch.last = now;
        longTapTimeout = setTimeout(longTap, longTapDelay);

        // adds the current touch contact for IE gesture recognition
        if (e.originalEvent && e.originalEvent.pointerId && gesture && ( e.type == 'MSPointerDown' || e.type == 'pointerdown' || e.type == 'touchstart' ) ) {
          gesture.addPointer(e.originalEvent.pointerId);
        }

      })
      // MSPointerMove: for IE10
      // pointermove: for IE11
      .on('touchmove MSPointerMove pointermove', function(e){

        if (e.type == 'MSPointerMove' && !isPrimaryTouch(e.originalEvent)) return;

        firstTouch = (e.type == 'MSPointerMove' || e.type == 'pointermove') ? e : e.originalEvent.touches[0];

        cancelLongTap();
        touch.x2 = firstTouch.pageX;
        touch.y2 = firstTouch.pageY;

        deltaX += Math.abs(touch.x1 - touch.x2);
        deltaY += Math.abs(touch.y1 - touch.y2);
      })
      // MSPointerUp: for IE10
      // pointerup: for IE11
      .on('touchend MSPointerUp pointerup', function(e){

        if (e.type == 'MSPointerUp' && !isPrimaryTouch(e.originalEvent)) return;

        cancelLongTap();

        // swipe
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)){

          swipeTimeout = setTimeout(function() {
            if ( touch.el !== undefined ) {
              touch.el.trigger('swipe');
              touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
            }
            touch = {};
          }, 0);

        // normal tap
        } else if ('last' in touch) {

          // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (isNaN(deltaX) || (deltaX < 30 && deltaY < 30)) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            tapTimeout = setTimeout(function() {

              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              var event = $.Event('tap');
              event.cancelTouch = cancelAll;
              if ( touch.el !== undefined ) touch.el.trigger(event);

              // trigger double tap immediately
              if (touch.isDoubleTap) {
                if ( touch.el !== undefined ) touch.el.trigger('doubleTap');
                touch = {};
              }

              // trigger single tap after 250ms of inactivity
              else {
                touchTimeout = setTimeout(function(){
                  touchTimeout = null;
                  if ( touch.el !== undefined ) touch.el.trigger('singleTap');
                  touch = {};
                }, 250);
              }
            }, 0);
          } else {
            touch = {};
          }
          deltaX = deltaY = 0;
        }
      })
      // when the browser window loses focus,
      // for example when a modal dialog is shown,
      // cancel all ongoing events
      .on('touchcancel MSPointerCancel pointercancel', function(e){

        // Ignore pointercancel if the event supports touch events, to prevent pointercancel in swipe gesture
        if ((e.type == 'touchcancel' && hasTouchEvents && hasTouch) || (!hasTouchEvents && e.type == 'pointercancel' && hasPointerEvents)) {
          cancelAll();
        }

    });

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll);
  });

  ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return $(this).on(eventName, callback); };
  });
})(jQuery);

(function(UI) {

    "use strict";

    var stacks = [];

    UI.component('stackMargin', {

        defaults: {
            cls: 'uk-margin-small-top',
            rowfirst: false,
            observe: false
        },

        boot: function() {

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-margin]', context).each(function() {

                    var ele = UI.$(this);

                    if (!ele.data('stackMargin')) {
                        UI.stackMargin(ele, UI.Utils.options(ele.attr('data-uk-margin')));
                    }
                });
            });
        },

        init: function() {

            var $this = this;

            UI.$win.on('resize orientationchange', (function() {

                var fn = function() {
                    $this.process();
                };

                UI.$(function() {
                    fn();
                    UI.$win.on('load', fn);
                });

                return UI.Utils.debounce(fn, 20);
            })());

            this.on('display.uk.check', function(e) {
                if (this.element.is(':visible')) this.process();
            }.bind(this));

            if (this.options.observe) {

                UI.domObserve(this.element, function(e) {
                    if ($this.element.is(':visible')) $this.process();
                });
            }

            stacks.push(this);
        },

        process: function() {

            var $this = this, columns = this.element.children();

            UI.Utils.stackMargin(columns, this.options);

            if (!this.options.rowfirst || !columns.length) {
                return this;
            }

            // Mark first column elements
            var group = {}, minleft = false;

            columns.removeClass(this.options.rowfirst).each(function(offset, $ele){

                $ele = UI.$(this);

                if (this.style.display != 'none') {
                    offset = $ele.offset().left;
                    ((group[offset] = group[offset] || []) && group[offset]).push(this);
                    minleft = minleft === false ? offset : Math.min(minleft, offset);
                }
            });

            UI.$(group[minleft]).addClass(this.options.rowfirst);

            return this;
        }

    });


    // responsive element e.g. iframes

    (function(){

        var elements = [], check = function(ele) {

            if (!ele.is(':visible')) return;

            var width  = ele.parent().width(),
                iwidth = ele.data('width'),
                ratio  = (width / iwidth),
                height = Math.floor(ratio * ele.data('height'));

            ele.css({height: (width < iwidth) ? height : ele.data('height')});
        };

        UI.component('responsiveElement', {

            defaults: {},

            boot: function() {

                // init code
                UI.ready(function(context) {

                    UI.$('iframe.uk-responsive-width, [data-uk-responsive]', context).each(function() {

                        var ele = UI.$(this), obj;

                        if (!ele.data('responsiveElement')) {
                            obj = UI.responsiveElement(ele, {});
                        }
                    });
                });
            },

            init: function() {

                var ele = this.element;

                if (ele.attr('width') && ele.attr('height')) {

                    ele.data({
                        width : ele.attr('width'),
                        height: ele.attr('height')
                    }).on('display.uk.check', function(){
                        check(ele);
                    });

                    check(ele);

                    elements.push(ele);
                }
            }
        });

        UI.$win.on('resize load', UI.Utils.debounce(function(){

            elements.forEach(function(ele){
                check(ele);
            });

        }, 15));

    })();


    // helper

    UI.Utils.stackMargin = function(elements, options) {

        options = UI.$.extend({
            cls: 'uk-margin-small-top'
        }, options);

        elements = UI.$(elements).removeClass(options.cls);

        var min = false;

        elements.each(function(offset, height, pos, $ele){

            $ele   = UI.$(this);

            if ($ele.css('display') != 'none') {

                offset = $ele.offset();
                height = $ele.outerHeight();
                pos    = offset.top + height;

                $ele.data({
                    ukMarginPos: pos,
                    ukMarginTop: offset.top
                });

                if (min === false || (offset.top < min.top) ) {

                    min = {
                        top  : offset.top,
                        left : offset.left,
                        pos  : pos
                    };
                }
            }

        }).each(function($ele) {

            $ele   = UI.$(this);

            if ($ele.css('display') != 'none' && $ele.data('ukMarginTop') > min.top && $ele.data('ukMarginPos') > min.pos) {
                $ele.addClass(options.cls);
            }
        });
    };

    UI.Utils.matchHeights = function(elements, options) {

        elements = UI.$(elements).css('min-height', '');
        options  = UI.$.extend({ row : true }, options);

        var matchHeights = function(group){

            if (group.length < 2) return;

            var max = 0;

            group.each(function() {
                max = Math.max(max, UI.$(this).outerHeight());
            }).each(function() {

                var element = UI.$(this),
                    height  = max - (element.css('box-sizing') == 'border-box' ? 0 : (element.outerHeight() - element.height()));

                element.css('min-height', height + 'px');
            });
        };

        if (options.row) {

            elements.first().width(); // force redraw

            setTimeout(function(){

                var lastoffset = false, group = [];

                elements.each(function() {

                    var ele = UI.$(this), offset = ele.offset().top;

                    if (offset != lastoffset && group.length) {

                        matchHeights(UI.$(group));
                        group  = [];
                        offset = ele.offset().top;
                    }

                    group.push(ele);
                    lastoffset = offset;
                });

                if (group.length) {
                    matchHeights(UI.$(group));
                }

            }, 0);

        } else {
            matchHeights(elements);
        }
    };

    (function(cacheSvgs){

        UI.Utils.inlineSvg = function(selector, root) {

            var images = UI.$(selector || 'img[src$=".svg"]', root || document).each(function(){

                var img = UI.$(this),
                    src = img.attr('src');

                if (!cacheSvgs[src]) {

                    var d = UI.$.Deferred();

                    UI.$.get(src, {nc: Math.random()}, function(data){
                        d.resolve(UI.$(data).find('svg'));
                    });

                    cacheSvgs[src] = d.promise();
                }

                cacheSvgs[src].then(function(svg) {

                    var $svg = UI.$(svg).clone();

                    if (img.attr('id')) $svg.attr('id', img.attr('id'));
                    if (img.attr('class')) $svg.attr('class', img.attr('class'));
                    if (img.attr('style')) $svg.attr('style', img.attr('style'));

                    if (img.attr('width')) {
                        $svg.attr('width', img.attr('width'));
                        if (!img.attr('height'))  $svg.removeAttr('height');
                    }

                    if (img.attr('height')){
                        $svg.attr('height', img.attr('height'));
                        if (!img.attr('width')) $svg.removeAttr('width');
                    }

                    img.replaceWith($svg);
                });
            });
        };

        // init code
        UI.ready(function(context) {
            UI.Utils.inlineSvg('[data-uk-svg]', context);
        });

    })({});

    UI.Utils.getCssVar = function(name) {

        /* usage in css:  .var-name:before { content:"xyz" } */

        var val, doc = document.documentElement, element = doc.appendChild(document.createElement('div'));

        element.classList.add('var-'+name);

        try {
            val = JSON.parse(val = getComputedStyle(element, ':before').content.replace(/^["'](.*)["']$/, '$1'));
        } catch (e) {
            val = undefined;
        }

        doc.removeChild(element);

        return val;
    }

})(UIkit2);

(function(UI) {

    "use strict";

    UI.component('smoothScroll', {

        boot: function() {

            // init code
            UI.$html.on('click.smooth-scroll.uikit', '[data-uk-smooth-scroll]', function(e) {
                var ele = UI.$(this);

                if (!ele.data('smoothScroll')) {
                    var obj = UI.smoothScroll(ele, UI.Utils.options(ele.attr('data-uk-smooth-scroll')));
                    ele.trigger('click');
                }

                return false;
            });
        },

        init: function() {

            var $this = this;

            this.on('click', function(e) {
                e.preventDefault();
                scrollToElement(UI.$(this.hash).length ? UI.$(this.hash) : UI.$('body'), $this.options);
            });
        }
    });

    function scrollToElement(ele, options) {

        options = UI.$.extend({
            duration: 1000,
            transition: 'easeOutExpo',
            offset: 0,
            complete: function(){}
        }, options);

        // get / set parameters
        var target    = ele.offset().top - options.offset,
            docheight = UI.$doc.height(),
            winheight = window.innerHeight;

        if ((target + winheight) > docheight) {
            target = docheight - winheight;
        }

        // animate to target, fire callback when done
        UI.$('html,body').stop().animate({scrollTop: target}, options.duration, options.transition).promise().done(options.complete);
    }

    UI.Utils.scrollToElement = scrollToElement;

    if (!UI.$.easing.easeOutExpo) {
        UI.$.easing.easeOutExpo = function(x, t, b, c, d) { return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b; };
    }

})(UIkit2);

(function(UI) {

    "use strict";

    var $win           = UI.$win,
        $doc           = UI.$doc,
        scrollspies    = [],
        checkScrollSpy = function() {
            for(var i=0; i < scrollspies.length; i++) {
                window.requestAnimationFrame.apply(window, [scrollspies[i].check]);
            }
        };

    UI.component('scrollspy', {

        defaults: {
            target     : false,
            cls        : 'uk-scrollspy-inview',
            initcls    : 'uk-scrollspy-init-inview',
            topoffset  : 0,
            leftoffset : 0,
            repeat     : false,
            delay      : 0
        },

        boot: function() {

            // listen to scroll and resize
            $doc.on('scrolling.uk.document', checkScrollSpy);
            $win.on('load resize orientationchange', UI.Utils.debounce(checkScrollSpy, 50));

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-scrollspy]', context).each(function() {

                    var element = UI.$(this);

                    if (!element.data('scrollspy')) {
                        var obj = UI.scrollspy(element, UI.Utils.options(element.attr('data-uk-scrollspy')));
                    }
                });
            });
        },

        init: function() {

            var $this = this, inviewstate, initinview, togglecls = this.options.cls.split(/,/), fn = function(){

                var elements     = $this.options.target ? $this.element.find($this.options.target) : $this.element,
                    delayIdx     = elements.length === 1 ? 1 : 0,
                    toggleclsIdx = 0;

                elements.each(function(idx){

                    var element     = UI.$(this),
                        inviewstate = element.data('inviewstate'),
                        inview      = UI.Utils.isInView(element, $this.options),
                        toggle      = element.attr('data-uk-scrollspy-cls') || togglecls[toggleclsIdx].trim();

                    if (inview && !inviewstate && !element.data('scrollspy-idle')) {

                        if (!initinview) {
                            element.addClass($this.options.initcls);
                            $this.offset = element.offset();
                            initinview = true;

                            element.trigger('init.uk.scrollspy');
                        }

                        element.data('scrollspy-idle', setTimeout(function(){

                            element.addClass('uk-scrollspy-inview').toggleClass(toggle).width();
                            element.trigger('inview.uk.scrollspy');

                            element.data('scrollspy-idle', false);
                            element.data('inviewstate', true);

                        }, $this.options.delay * delayIdx));

                        delayIdx++;
                    }

                    if (!inview && inviewstate && $this.options.repeat) {

                        if (element.data('scrollspy-idle')) {
                            clearTimeout(element.data('scrollspy-idle'));
                            element.data('scrollspy-idle', false);
                        }

                        element.removeClass('uk-scrollspy-inview').toggleClass(toggle);
                        element.data('inviewstate', false);

                        element.trigger('outview.uk.scrollspy');
                    }

                    toggleclsIdx = togglecls[toggleclsIdx + 1] ? (toggleclsIdx + 1) : 0;

                });
            };

            fn();

            this.check = fn;

            scrollspies.push(this);
        }
    });


    var scrollspynavs = [],
        checkScrollSpyNavs = function() {
            for(var i=0; i < scrollspynavs.length; i++) {
                window.requestAnimationFrame.apply(window, [scrollspynavs[i].check]);
            }
        };

    UI.component('scrollspynav', {

        defaults: {
            cls          : 'uk-active',
            closest      : false,
            topoffset    : 0,
            leftoffset   : 0,
            smoothscroll : false
        },

        boot: function() {

            // listen to scroll and resize
            $doc.on('scrolling.uk.document', checkScrollSpyNavs);
            $win.on('resize orientationchange', UI.Utils.debounce(checkScrollSpyNavs, 50));

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-scrollspy-nav]', context).each(function() {

                    var element = UI.$(this);

                    if (!element.data('scrollspynav')) {
                        var obj = UI.scrollspynav(element, UI.Utils.options(element.attr('data-uk-scrollspy-nav')));
                    }
                });
            });
        },

        init: function() {

            var ids     = [],
                links   = this.find("a[href^='#']").each(function(){ if(this.getAttribute('href').trim()!=='#') ids.push(this.getAttribute('href')); }),
                targets = UI.$(ids.join(",")),

                clsActive  = this.options.cls,
                clsClosest = this.options.closest || this.options.closest;

            var $this = this, inviews, fn = function(){

                inviews = [];

                for (var i=0 ; i < targets.length ; i++) {
                    if (UI.Utils.isInView(targets.eq(i), $this.options)) {
                        inviews.push(targets.eq(i));
                    }
                }

                if (inviews.length) {

                    var navitems,
                        scrollTop = $win.scrollTop(),
                        target = (function(){
                            for(var i=0; i< inviews.length;i++){
                                if (inviews[i].offset().top - $this.options.topoffset >= scrollTop){
                                    return inviews[i];
                                }
                            }
                        })();

                    if (!target) return;

                    if ($this.options.closest) {
                        links.blur().closest(clsClosest).removeClass(clsActive);
                        navitems = links.filter("a[href='#"+target.attr('id')+"']").closest(clsClosest).addClass(clsActive);
                    } else {
                        navitems = links.removeClass(clsActive).filter("a[href='#"+target.attr("id")+"']").addClass(clsActive);
                    }

                    $this.element.trigger('inview.uk.scrollspynav', [target, navitems]);
                }
            };

            if (this.options.smoothscroll && UI.smoothScroll) {
                links.each(function(){
                    UI.smoothScroll(this, $this.options.smoothscroll);
                });
            }

            fn();

            this.element.data('scrollspynav', this);

            this.check = fn;
            scrollspynavs.push(this);

        }
    });

})(UIkit2);

(function(UI){

    "use strict";

    var toggles = [];

    UI.component('toggle', {

        defaults: {
            target    : false,
            cls       : 'uk-hidden',
            animation : false,
            duration  : 200
        },

        boot: function(){

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-toggle]', context).each(function() {
                    var ele = UI.$(this);

                    if (!ele.data('toggle')) {
                        var obj = UI.toggle(ele, UI.Utils.options(ele.attr('data-uk-toggle')));
                    }
                });

                setTimeout(function(){

                    toggles.forEach(function(toggle){
                        toggle.getToggles();
                    });

                }, 0);
            });
        },

        init: function() {

            var $this = this;

            this.aria = (this.options.cls.indexOf('uk-hidden') !== -1);

            this.on('click', function(e) {

                if ($this.element.is('a[href="#"]')) {
                    e.preventDefault();
                }

                $this.toggle();
            });

            toggles.push(this);
        },

        toggle: function() {

            this.getToggles();

            if(!this.totoggle.length) return;

            if (this.options.animation && UI.support.animation) {

                var $this = this, animations = this.options.animation.split(',');

                if (animations.length == 1) {
                    animations[1] = animations[0];
                }

                animations[0] = animations[0].trim();
                animations[1] = animations[1].trim();

                this.totoggle.css('animation-duration', this.options.duration+'ms');

                this.totoggle.each(function(){

                    var ele = UI.$(this);

                    if (ele.hasClass($this.options.cls)) {

                        ele.toggleClass($this.options.cls);

                        UI.Utils.animate(ele, animations[0]).then(function(){
                            ele.css('animation-duration', '');
                            UI.Utils.checkDisplay(ele);
                        });

                    } else {

                        UI.Utils.animate(this, animations[1]+' uk-animation-reverse').then(function(){
                            ele.toggleClass($this.options.cls).css('animation-duration', '');
                            UI.Utils.checkDisplay(ele);
                        });

                    }

                });

            } else {
                this.totoggle.toggleClass(this.options.cls);
                UI.Utils.checkDisplay(this.totoggle);
            }

            this.updateAria();

        },

        getToggles: function() {
            this.totoggle = this.options.target ? UI.$(this.options.target):[];
            this.updateAria();
        },

        updateAria: function() {
            if (this.aria && this.totoggle.length) {
                this.totoggle.not('[aria-hidden]').each(function(){
                    UI.$(this).attr('aria-hidden', UI.$(this).hasClass('uk-hidden'));
                });
            }
        }
    });

})(UIkit2);

(function(UI) {

    "use strict";

    UI.component('alert', {

        defaults: {
            fade: true,
            duration: 200,
            trigger: '.uk-alert-close'
        },

        boot: function() {

            // init code
            UI.$html.on('click.alert.uikit', '[data-uk-alert]', function(e) {

                var ele = UI.$(this);

                if (!ele.data('alert')) {

                    var alert = UI.alert(ele, UI.Utils.options(ele.attr('data-uk-alert')));

                    if (UI.$(e.target).is(alert.options.trigger)) {
                        e.preventDefault();
                        alert.close();
                    }
                }
            });
        },

        init: function() {

            var $this = this;

            this.on('click', this.options.trigger, function(e) {
                e.preventDefault();
                $this.close();
            });
        },

        close: function() {

            var element       = this.trigger('close.uk.alert'),
                removeElement = function () {
                    this.trigger('closed.uk.alert').remove();
                }.bind(this);

            if (this.options.fade) {
                element.css('overflow', 'hidden').css("max-height", element.height()).animate({
                    height         : 0,
                    opacity        : 0,
                    paddingTop    : 0,
                    paddingBottom : 0,
                    marginTop     : 0,
                    marginBottom  : 0
                }, this.options.duration, removeElement);
            } else {
                removeElement();
            }
        }

    });

})(UIkit2);

(function(UI) {

    "use strict";

    UI.component('buttonRadio', {

        defaults: {
            activeClass: 'uk-active',
            target: '.uk-button'
        },

        boot: function() {

            // init code
            UI.$html.on('click.buttonradio.uikit', '[data-uk-button-radio]', function(e) {

                var ele = UI.$(this);

                if (!ele.data('buttonRadio')) {

                    var obj    = UI.buttonRadio(ele, UI.Utils.options(ele.attr('data-uk-button-radio'))),
                        target = UI.$(e.target);

                    if (target.is(obj.options.target)) {
                        target.trigger('click');
                    }
                }
            });
        },

        init: function() {

            var $this = this;

            // Init ARIA
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

            this.on('click', this.options.target, function(e) {

                var ele = UI.$(this);

                if (ele.is('a[href="#"]')) e.preventDefault();

                $this.find($this.options.target).not(ele).removeClass($this.options.activeClass).blur();
                ele.addClass($this.options.activeClass);

                // Update ARIA
                $this.find($this.options.target).not(ele).attr('aria-checked', 'false');
                ele.attr('aria-checked', 'true');

                $this.trigger('change.uk.button', [ele]);
            });

        },

        getSelected: function() {
            return this.find('.' + this.options.activeClass);
        }
    });

    UI.component('buttonCheckbox', {

        defaults: {
            activeClass: 'uk-active',
            target: '.uk-button'
        },

        boot: function() {

            UI.$html.on('click.buttoncheckbox.uikit', '[data-uk-button-checkbox]', function(e) {
                var ele = UI.$(this);

                if (!ele.data('buttonCheckbox')) {

                    var obj    = UI.buttonCheckbox(ele, UI.Utils.options(ele.attr('data-uk-button-checkbox'))),
                        target = UI.$(e.target);

                    if (target.is(obj.options.target)) {
                        target.trigger('click');
                    }
                }
            });
        },

        init: function() {

            var $this = this;

            // Init ARIA
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

            this.on('click', this.options.target, function(e) {
                var ele = UI.$(this);

                if (ele.is('a[href="#"]')) e.preventDefault();

                ele.toggleClass($this.options.activeClass).blur();

                // Update ARIA
                ele.attr('aria-checked', ele.hasClass($this.options.activeClass));

                $this.trigger('change.uk.button', [ele]);
            });

        },

        getSelected: function() {
            return this.find('.' + this.options.activeClass);
        }
    });


    UI.component('button', {

        defaults: {},

        boot: function() {

            UI.$html.on('click.button.uikit', '[data-uk-button]', function(e) {
                var ele = UI.$(this);

                if (!ele.data('button')) {

                    var obj = UI.button(ele, UI.Utils.options(ele.attr('data-uk-button')));
                    ele.trigger('click');
                }
            });
        },

        init: function() {

            var $this = this;

            // Init ARIA
            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));

            this.on('click', function(e) {

                if ($this.element.is('a[href="#"]')) e.preventDefault();

                $this.toggle();
                $this.trigger('change.uk.button', [$this.element.blur().hasClass('uk-active')]);
            });

        },

        toggle: function() {
            this.element.toggleClass('uk-active');

            // Update ARIA
            this.element.attr('aria-pressed', this.element.hasClass('uk-active'));
        }
    });

})(UIkit2);

(function(UI) {

    "use strict";

    var active = false, hoverIdle, flips = {
        x: {
            'bottom-left'   : 'bottom-right',
            'bottom-right'  : 'bottom-left',
            'bottom-center' : 'bottom-center',
            'top-left'      : 'top-right',
            'top-right'     : 'top-left',
            'top-center'    : 'top-center',
            'left-top'      : 'right-top',
            'left-bottom'   : 'right-bottom',
            'left-center'   : 'right-center',
            'right-top'     : 'left-top',
            'right-bottom'  : 'left-bottom',
            'right-center'  : 'left-center'
        },
        y: {
            'bottom-left'   : 'top-left',
            'bottom-right'  : 'top-right',
            'bottom-center' : 'top-center',
            'top-left'      : 'bottom-left',
            'top-right'     : 'bottom-right',
            'top-center'    : 'bottom-center',
            'left-top'      : 'left-bottom',
            'left-bottom'   : 'left-top',
            'left-center'   : 'left-center',
            'right-top'     : 'right-bottom',
            'right-bottom'  : 'right-top',
            'right-center'  : 'right-center'
        },
        xy: {
            'bottom-left'   : 'top-right',
            'bottom-right'  : 'top-left',
            'bottom-center' : 'top-center',
            'top-left'      : 'bottom-right',
            'top-right'     : 'bottom-left',
            'top-center'    : 'bottom-center',
            'left-top'      : 'right-bottom',
            'left-bottom'   : 'right-top',
            'left-center'   : 'right-center',
            'right-top'     : 'left-bottom',
            'right-bottom'  : 'left-top',
            'right-center'  : 'left-center'
        }
    };

    UI.component('dropdown', {

        defaults: {
           mode            : 'hover',
           pos             : 'bottom-left',
           offset          : 0,
           remaintime      : 800,
           justify         : false,
           boundary        : UI.$win,
           delay           : 0,
           dropdownSelector: '.uk-dropdown,.uk-dropdown-blank',
           hoverDelayIdle  : 250,
           preventflip     : false
        },

        remainIdle: false,

        boot: function() {

            var triggerevent = UI.support.touch ? 'click' : 'mouseenter';

            // init code
            UI.$html.on(triggerevent+'.dropdown.uikit focus pointerdown', '[data-uk-dropdown]', function(e) {

                var ele = UI.$(this);

                if (!ele.data('dropdown')) {

                    var dropdown = UI.dropdown(ele, UI.Utils.options(ele.attr('data-uk-dropdown')));

                    if (e.type=='click' || (e.type=='mouseenter' && dropdown.options.mode=='hover')) {
                        dropdown.element.trigger(triggerevent);
                    }

                    if (dropdown.dropdown.length) {
                        e.preventDefault();
                    }
                }
            });
        },

        init: function() {

            var $this = this;

            this.dropdown     = this.find(this.options.dropdownSelector);
            this.offsetParent = this.dropdown.parents().filter(function() {
                return UI.$.inArray(UI.$(this).css('position'), ['relative', 'fixed', 'absolute']) !== -1;
            }).slice(0,1);

            if (!this.offsetParent.length) {
                this.offsetParent = this.element;
            }

            this.centered  = this.dropdown.hasClass('uk-dropdown-center');
            this.justified = this.options.justify ? UI.$(this.options.justify) : false;

            this.boundary  = UI.$(this.options.boundary);

            if (!this.boundary.length) {
                this.boundary = UI.$win;
            }

            // legacy DEPRECATED!
            if (this.dropdown.hasClass('uk-dropdown-up')) {
                this.options.pos = 'top-left';
            }
            if (this.dropdown.hasClass('uk-dropdown-flip')) {
                this.options.pos = this.options.pos.replace('left','right');
            }
            if (this.dropdown.hasClass('uk-dropdown-center')) {
                this.options.pos = this.options.pos.replace(/(left|right)/,'center');
            }
            //-- end legacy

            // Init ARIA
            this.element.attr('aria-haspopup', 'true');
            this.element.attr('aria-expanded', this.element.hasClass('uk-open'));
            this.dropdown.attr('aria-hidden', 'true');

            if (this.options.mode == 'click' || UI.support.touch) {

                this.on('click.uk.dropdown', function(e) {

                    var $target = UI.$(e.target);

                    if (!$target.parents($this.options.dropdownSelector).length) {

                        if ($target.is("a[href='#']") || $target.parent().is("a[href='#']") || ($this.dropdown.length && !$this.dropdown.is(':visible')) ){
                            e.preventDefault();
                        }

                        $target.blur();
                    }

                    if (!$this.element.hasClass('uk-open')) {

                        $this.show();

                    } else {

                        if (!$this.dropdown.find(e.target).length || $target.is('.uk-dropdown-close') || $target.parents('.uk-dropdown-close').length) {
                            $this.hide();
                        }
                    }
                });

            } else {

                this.on('mouseenter', function(e) {

                    $this.trigger('pointerenter.uk.dropdown', [$this]);

                    if ($this.remainIdle) {
                        clearTimeout($this.remainIdle);
                    }

                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }

                    if (active && active == $this) {
                        return;
                    }

                    // pseudo manuAim
                    if (active && active != $this) {

                        hoverIdle = setTimeout(function() {
                            hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
                        }, $this.options.hoverDelayIdle);

                    } else {

                        hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
                    }

                }).on('mouseleave', function() {

                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }

                    $this.remainIdle = setTimeout(function() {
                        if (active && active == $this) $this.hide();
                    }, $this.options.remaintime);

                    $this.trigger('pointerleave.uk.dropdown', [$this]);

                }).on('click', function(e){

                    var $target = UI.$(e.target);

                    if ($this.remainIdle) {
                        clearTimeout($this.remainIdle);
                    }

                    if (active && active == $this) {
                        if (!$this.dropdown.find(e.target).length || $target.is('.uk-dropdown-close') || $target.parents('.uk-dropdown-close').length) {
                            $this.hide();
                        }
                        return;
                    }

                    if ($target.is("a[href='#']") || $target.parent().is("a[href='#']")){
                        e.preventDefault();
                    }

                    $this.show();
                });
            }
        },

        show: function(){

            UI.$html.off('click.outer.dropdown');

            if (active && active != this) {
                active.hide(true);
            }

            if (hoverIdle) {
                clearTimeout(hoverIdle);
            }

            this.trigger('beforeshow.uk.dropdown', [this]);

            this.checkDimensions();
            this.element.addClass('uk-open');

            // Update ARIA
            this.element.attr('aria-expanded', 'true');
            this.dropdown.attr('aria-hidden', 'false');

            this.trigger('show.uk.dropdown', [this]);

            UI.Utils.checkDisplay(this.dropdown, true);
            UI.Utils.focus(this.dropdown);
            active = this;

            this.registerOuterClick();
        },

        hide: function(force) {

            this.trigger('beforehide.uk.dropdown', [this, force]);

            this.element.removeClass('uk-open');

            if (this.remainIdle) {
                clearTimeout(this.remainIdle);
            }

            this.remainIdle = false;

            // Update ARIA
            this.element.attr('aria-expanded', 'false');
            this.dropdown.attr('aria-hidden', 'true');

            this.trigger('hide.uk.dropdown', [this, force]);

            if (active == this) active = false;
        },

        registerOuterClick: function(){

            var $this = this;

            UI.$html.off('click.outer.dropdown');

            setTimeout(function() {

                UI.$html.on('click.outer.dropdown', function(e) {

                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }

                    var $target = UI.$(e.target);

                    if (active == $this && !$this.element.find(e.target).length) {
                        $this.hide(true);
                        UI.$html.off('click.outer.dropdown');
                    }
                });
            }, 10);
        },

        checkDimensions: function() {

            if (!this.dropdown.length) return;

            // reset
            this.dropdown.removeClass('uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip').css({
                topLeft :'',
                left :'',
                marginLeft :'',
                marginRight :''
            });

            if (this.justified && this.justified.length) {
                this.dropdown.css('min-width', '');
            }

            var $this          = this,
                pos            = UI.$.extend({}, this.offsetParent.offset(), {width: this.offsetParent[0].offsetWidth, height: this.offsetParent[0].offsetHeight}),
                posoffset      = this.options.offset,
                dropdown       = this.dropdown,
                offset         = dropdown.show().offset() || {left: 0, top: 0},
                width          = dropdown.outerWidth(),
                height         = dropdown.outerHeight(),
                boundarywidth  = this.boundary.width(),
                boundaryoffset = this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset(): {top:0, left:0},
                dpos           = this.options.pos;

            var variants =  {
                    'bottom-left'   : {top: 0 + pos.height + posoffset, left: 0},
                    'bottom-right'  : {top: 0 + pos.height + posoffset, left: 0 + pos.width - width},
                    'bottom-center' : {top: 0 + pos.height + posoffset, left: 0 + pos.width / 2 - width / 2},
                    'top-left'      : {top: 0 - height - posoffset, left: 0},
                    'top-right'     : {top: 0 - height - posoffset, left: 0 + pos.width - width},
                    'top-center'    : {top: 0 - height - posoffset, left: 0 + pos.width / 2 - width / 2},
                    'left-top'      : {top: 0, left: 0 - width - posoffset},
                    'left-bottom'   : {top: 0 + pos.height - height, left: 0 - width - posoffset},
                    'left-center'   : {top: 0 + pos.height / 2 - height / 2, left: 0 - width - posoffset},
                    'right-top'     : {top: 0, left: 0 + pos.width + posoffset},
                    'right-bottom'  : {top: 0 + pos.height - height, left: 0 + pos.width + posoffset},
                    'right-center'  : {top: 0 + pos.height / 2 - height / 2, left: 0 + pos.width + posoffset}
                },
                css = {},
                pp;

            pp = dpos.split('-');
            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];

            // justify dropdown
            if (this.justified && this.justified.length) {
                justify(dropdown.css({left:0}), this.justified, boundarywidth);
            } else {

                if (this.options.preventflip !== true) {

                    var fdpos;

                    switch(this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
                        case "x":
                            if(this.options.preventflip !=='x') fdpos = flips['x'][dpos] || 'right-top';
                            break;
                        case "y":
                            if(this.options.preventflip !=='y') fdpos = flips['y'][dpos] || 'top-left';
                            break;
                        case "xy":
                            if(!this.options.preventflip) fdpos = flips['xy'][dpos] || 'right-bottom';
                            break;
                    }

                    if (fdpos) {

                        pp  = fdpos.split('-');
                        css = variants[fdpos] ? variants[fdpos] : variants['bottom-left'];
                        dropdown.addClass('uk-dropdown-autoflip');

                        // check flipped
                        if (this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
                            pp  = dpos.split('-');
                            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];
                        }
                    }
                }
            }

            if (width > boundarywidth) {
                dropdown.addClass('uk-dropdown-stack');
                this.trigger('stack.uk.dropdown', [this]);
            }

            dropdown.css(css).css('display', '').addClass('uk-dropdown-'+pp[0]);
        },

        checkBoundary: function(left, top, width, height, boundarywidth) {

            var axis = "";

            if (left < 0 || ((left - UI.$win.scrollLeft())+width) > boundarywidth) {
               axis += "x";
            }

            if ((top - UI.$win.scrollTop()) < 0 || ((top - UI.$win.scrollTop())+height) > window.innerHeight) {
               axis += "y";
            }

            return axis;
        }
    });


    UI.component('dropdownOverlay', {

        defaults: {
           justify : false,
           cls     : '',
           duration: 200
        },

        boot: function() {

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-dropdown-overlay]', context).each(function() {
                    var ele = UI.$(this);

                    if (!ele.data('dropdownOverlay')) {
                        UI.dropdownOverlay(ele, UI.Utils.options(ele.attr('data-uk-dropdown-overlay')));
                    }
                });
            });
        },

        init: function() {

            var $this = this;

            this.justified = this.options.justify ? UI.$(this.options.justify) : false;
            this.overlay   = this.element.find('uk-dropdown-overlay');

            if (!this.overlay.length) {
                this.overlay = UI.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element);
            }

            this.overlay.addClass(this.options.cls);

            this.on({

                'beforeshow.uk.dropdown': function(e, dropdown) {
                    $this.dropdown = dropdown;

                    if ($this.justified && $this.justified.length) {
                        justify($this.overlay.css({display:'block', marginLeft:'', marginRight:''}), $this.justified, $this.justified.outerWidth());
                    }
                },

                'show.uk.dropdown': function(e, dropdown) {

                    var h = $this.dropdown.dropdown.outerHeight(true);

                    $this.dropdown.element.removeClass('uk-open');

                    $this.overlay.stop().css('display', 'block').animate({height: h}, $this.options.duration, function() {

                       $this.dropdown.dropdown.css('visibility', '');
                       $this.dropdown.element.addClass('uk-open');

                       UI.Utils.checkDisplay($this.dropdown.dropdown, true);
                    });

                    $this.pointerleave = false;
                },

                'hide.uk.dropdown': function() {
                    $this.overlay.stop().animate({height: 0}, $this.options.duration);
                },

                'pointerenter.uk.dropdown': function(e, dropdown) {
                    clearTimeout($this.remainIdle);
                },

                'pointerleave.uk.dropdown': function(e, dropdown) {
                    $this.pointerleave = true;
                }
            });


            this.overlay.on({

                'mouseenter': function() {
                    if ($this.remainIdle) {
                        clearTimeout($this.dropdown.remainIdle);
                        clearTimeout($this.remainIdle);
                    }
                },

                'mouseleave': function(){

                    if ($this.pointerleave && active) {

                        $this.remainIdle = setTimeout(function() {
                           if(active) active.hide();
                        }, active.options.remaintime);
                    }
                }
            })
        }

    });


    function justify(ele, justifyTo, boundarywidth, offset) {

        ele           = UI.$(ele);
        justifyTo     = UI.$(justifyTo);
        boundarywidth = boundarywidth || window.innerWidth;
        offset        = offset || ele.offset();

        if (justifyTo.length) {

            var jwidth = justifyTo.outerWidth();

            ele.css('min-width', jwidth);

            if (UI.langdirection == 'right') {

                var right1   = boundarywidth - (justifyTo.offset().left + jwidth),
                    right2   = boundarywidth - (ele.offset().left + ele.outerWidth());

                ele.css('margin-right', right1 - right2);

            } else {
                ele.css('margin-left', justifyTo.offset().left - offset.left);
            }
        }
    }

})(UIkit2);

(function(UI) {

    "use strict";

    var grids = [];

    UI.component('gridMatchHeight', {

        defaults: {
            target        : false,
            row           : true,
            ignorestacked : false,
            observe       : false
        },

        boot: function() {

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-grid-match]', context).each(function() {
                    var grid = UI.$(this), obj;

                    if (!grid.data('gridMatchHeight')) {
                        obj = UI.gridMatchHeight(grid, UI.Utils.options(grid.attr('data-uk-grid-match')));
                    }
                });
            });
        },

        init: function() {

            var $this = this;

            this.columns  = this.element.children();
            this.elements = this.options.target ? this.find(this.options.target) : this.columns;

            if (!this.columns.length) return;

            UI.$win.on('load resize orientationchange', (function() {

                var fn = function() {
                    if ($this.element.is(':visible')) $this.match();
                };

                UI.$(function() { fn(); });

                return UI.Utils.debounce(fn, 50);
            })());

            if (this.options.observe) {

                UI.domObserve(this.element, function(e) {
                    if ($this.element.is(':visible')) $this.match();
                });
            }

            this.on('display.uk.check', function(e) {
                if(this.element.is(':visible')) this.match();
            }.bind(this));

            grids.push(this);
        },

        match: function() {

            var firstvisible = this.columns.filter(':visible:first');

            if (!firstvisible.length) return;

            var stacked = Math.ceil(100 * parseFloat(firstvisible.css('width')) / parseFloat(firstvisible.parent().css('width'))) >= 100;

            if (stacked && !this.options.ignorestacked) {
                this.revert();
            } else {
                UI.Utils.matchHeights(this.elements, this.options);
            }

            return this;
        },

        revert: function() {
            this.elements.css('min-height', '');
            return this;
        }
    });

    UI.component('gridMargin', {

        defaults: {
            cls      : 'uk-grid-margin',
            rowfirst : 'uk-row-first'
        },

        boot: function() {

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-grid-margin]', context).each(function() {
                    var grid = UI.$(this), obj;

                    if (!grid.data('gridMargin')) {
                        obj = UI.gridMargin(grid, UI.Utils.options(grid.attr('data-uk-grid-margin')));
                    }
                });
            });
        },

        init: function() {

            var stackMargin = UI.stackMargin(this.element, this.options);
        }
    });

})(UIkit2);

(function(UI) {

    "use strict";

    var active = false, activeCount = 0, $html = UI.$html, body;

    UI.$win.on('resize orientationchange', UI.Utils.debounce(function(){
        UI.$('.uk-modal.uk-open').each(function(){
            return UI.$(this).data('modal') && UI.$(this).data('modal').resize();
        });
    }, 150));

    UI.component('modal', {

        defaults: {
            keyboard: true,
            bgclose: true,
            minScrollHeight: 150,
            center: false,
            modal: true
        },

        scrollable: false,
        transition: false,
        hasTransitioned: true,

        init: function() {

            if (!body) body = UI.$('body');

            if (!this.element.length) return;

            var $this = this;

            this.paddingdir = 'padding-' + (UI.langdirection == 'left' ? 'right':'left');
            this.dialog     = this.find('.uk-modal-dialog');

            this.active     = false;

            // Update ARIA
            this.element.attr('aria-hidden', this.element.hasClass('uk-open'));

            this.on('click', '.uk-modal-close', function(e) {
                e.preventDefault();
                $this.hide();
            }).on('click', function(e) {

                var target = UI.$(e.target);

                if (target[0] == $this.element[0] && $this.options.bgclose) {
                    $this.hide();
                }
            });

            UI.domObserve(this.element, function(e) { $this.resize(); });
        },

        toggle: function() {
            return this[this.isActive() ? 'hide' : 'show']();
        },

        show: function() {

            if (!this.element.length) return;

            var $this = this;

            if (this.isActive()) return;

            if (this.options.modal && active) {
                active.hide(true);
            }

            this.element.removeClass('uk-open').show();
            this.resize(true);

            if (this.options.modal) {
                active = this;
            }

            this.active = true;

            activeCount++;

            if (UI.support.transition) {
                this.hasTransitioned = false;
                this.element.one(UI.support.transition.end, function(){
                    $this.hasTransitioned = true;
                    UI.Utils.focus($this.dialog, 'a[href]');
                }).addClass('uk-open');
            } else {
                this.element.addClass('uk-open');
                UI.Utils.focus(this.dialog, 'a[href]');
            }

            $html.addClass('uk-modal-page').height(); // force browser engine redraw

            // Update ARIA
            this.element.attr('aria-hidden', 'false');

            this.element.trigger('show.uk.modal');

            UI.Utils.checkDisplay(this.dialog, true);

            return this;
        },

        hide: function(force) {

            if (!force && UI.support.transition && this.hasTransitioned) {

                var $this = this;

                this.one(UI.support.transition.end, function() {
                    $this._hide();
                }).removeClass('uk-open');

            } else {

                this._hide();
            }

            return this;
        },

        resize: function(force) {

            if (!this.isActive() && !force) return;

            var bodywidth  = body.width();

            this.scrollbarwidth = window.innerWidth - bodywidth;

            body.css(this.paddingdir, this.scrollbarwidth);

            this.element.css('overflow-y', this.scrollbarwidth ? 'scroll' : 'auto');

            if (!this.updateScrollable() && this.options.center) {

                var dh  = this.dialog.outerHeight(),
                pad = parseInt(this.dialog.css('margin-top'), 10) + parseInt(this.dialog.css('margin-bottom'), 10);

                if ((dh + pad) < window.innerHeight) {
                    this.dialog.css({top: (window.innerHeight/2 - dh/2) - pad });
                } else {
                    this.dialog.css({top: ''});
                }
            }
        },

        updateScrollable: function() {

            // has scrollable?
            var scrollable = this.dialog.find('.uk-overflow-container:visible:first');

            if (scrollable.length) {

                scrollable.css('height', 0);

                var offset = Math.abs(parseInt(this.dialog.css('margin-top'), 10)),
                dh     = this.dialog.outerHeight(),
                wh     = window.innerHeight,
                h      = wh - 2*(offset < 20 ? 20:offset) - dh;

                scrollable.css({
                    maxHeight: (h < this.options.minScrollHeight ? '':h),
                    height:''
                });

                return true;
            }

            return false;
        },

        _hide: function() {

            this.active = false;
            if (activeCount > 0) activeCount--;
            else activeCount = 0;

            this.element.hide().removeClass('uk-open');

            // Update ARIA
            this.element.attr('aria-hidden', 'true');

            if (!activeCount) {
                $html.removeClass('uk-modal-page');
                body.css(this.paddingdir, "");
            }

            if (active===this) active = false;

            this.trigger('hide.uk.modal');
        },

        isActive: function() {
            return this.element.hasClass('uk-open');
        }

    });

    UI.component('modalTrigger', {

        boot: function() {

            // init code
            UI.$html.on('click.modal.uikit', '[data-uk-modal]', function(e) {

                var ele = UI.$(this);

                if (ele.is('a')) {
                    e.preventDefault();
                }

                if (!ele.data('modalTrigger')) {
                    var modal = UI.modalTrigger(ele, UI.Utils.options(ele.attr('data-uk-modal')));
                    modal.show();
                }

            });

            // close modal on esc button
            UI.$html.on('keydown.modal.uikit', function (e) {

                if (active && e.keyCode === 27 && active.options.keyboard) { // ESC
                    e.preventDefault();
                    active.hide();
                }
            });
        },

        init: function() {

            var $this = this;

            this.options = UI.$.extend({
                target: $this.element.is('a') ? $this.element.attr('href') : false
            }, this.options);

            this.modal = UI.modal(this.options.target, this.options);

            this.on("click", function(e) {
                e.preventDefault();
                $this.show();
            });

            //methods
            this.proxy(this.modal, 'show hide isActive');
        }
    });

    UI.modal.dialog = function(content, options) {

        var modal = UI.modal(UI.$(UI.modal.dialog.template).appendTo('body'), options);

        modal.on('hide.uk.modal', function(){
            if (modal.persist) {
                modal.persist.appendTo(modal.persist.data('modalPersistParent'));
                modal.persist = false;
            }
            modal.element.remove();
        });

        setContent(content, modal);

        return modal;
    };

    UI.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>';

    UI.modal.alert = function(content, options) {

        options = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, options);

        var modal = UI.modal.dialog(([
            '<div class="uk-margin uk-modal-content">'+String(content)+'</div>',
            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+options.labels.Ok+'</button></div>'
        ]).join(""), options);

        modal.on('show.uk.modal', function(){
            setTimeout(function(){
                modal.element.find('button:first').focus();
            }, 50);
        });

        return modal.show();
    };

    UI.modal.confirm = function(content, onconfirm, oncancel) {

        var options = arguments.length > 1 && arguments[arguments.length-1] ? arguments[arguments.length-1] : {};

        onconfirm = UI.$.isFunction(onconfirm) ? onconfirm : function(){};
        oncancel  = UI.$.isFunction(oncancel) ? oncancel : function(){};
        options   = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, UI.$.isFunction(options) ? {}:options);

        var modal = UI.modal.dialog(([
            '<div class="uk-margin uk-modal-content">'+String(content)+'</div>',
            '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">'+options.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+options.labels.Ok+'</button></div>'
        ]).join(""), options);

        modal.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function(){
            UI.$(this).is('.js-modal-confirm') ? onconfirm() : oncancel();
            modal.hide();
        });

        modal.on('show.uk.modal', function(){
            setTimeout(function(){
                modal.element.find('.js-modal-confirm').focus();
            }, 50);
        });

        return modal.show();
    };

    UI.modal.prompt = function(text, value, onsubmit, options) {

        onsubmit = UI.$.isFunction(onsubmit) ? onsubmit : function(value){};
        options  = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, options);

        var modal = UI.modal.dialog(([
            text ? '<div class="uk-modal-content uk-form">'+String(text)+'</div>':'',
            '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>',
            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+options.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+options.labels.Ok+'</button></div>'
        ]).join(""), options),

        input = modal.element.find("input[type='text']").val(value || '').on('keyup', function(e){
            if (e.keyCode == 13) {
                modal.element.find('.js-modal-ok').trigger('click');
            }
        });

        modal.element.find('.js-modal-ok').on('click', function(){
            if (onsubmit(input.val())!==false){
                modal.hide();
            }
        });

        return modal.show();
    };

    UI.modal.blockUI = function(content, options) {

        var modal = UI.modal.dialog(([
            '<div class="uk-margin uk-modal-content">'+String(content || '<div class="uk-text-center">...</div>')+'</div>'
        ]).join(""), UI.$.extend({bgclose:false, keyboard:false, modal:false}, options));

        modal.content = modal.element.find('.uk-modal-content:first');

        return modal.show();
    };

    UI.modal.labels = {
        Ok: 'Ok',
        Cancel: 'Cancel'
    };

    // helper functions
    function setContent(content, modal){

        if(!modal) return;

        if (typeof content === 'object') {

            // convert DOM object to a jQuery object
            content = content instanceof jQuery ? content : UI.$(content);

            if(content.parent().length) {
                modal.persist = content;
                modal.persist.data('modalPersistParent', content.parent());
            }
        }else if (typeof content === 'string' || typeof content === 'number') {
                // just insert the data as innerHTML
                content = UI.$('<div></div>').html(content);
        }else {
                // unsupported data type!
                content = UI.$('<div></div>').html('UIkit2.modal Error: Unsupported data type: ' + typeof content);
        }

        content.appendTo(modal.element.find('.uk-modal-dialog'));

        return modal;
    }

})(UIkit2);

(function(UI) {

    "use strict";

    UI.component('nav', {

        defaults: {
            toggle: '>li.uk-parent > a[href="#"]',
            lists: '>li.uk-parent > ul',
            multiple: false
        },

        boot: function() {

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-nav]', context).each(function() {
                    var nav = UI.$(this);

                    if (!nav.data('nav')) {
                        var obj = UI.nav(nav, UI.Utils.options(nav.attr('data-uk-nav')));
                    }
                });
            });
        },

        init: function() {

            var $this = this;

            this.on('click.uk.nav', this.options.toggle, function(e) {
                e.preventDefault();
                var ele = UI.$(this);
                $this.open(ele.parent()[0] == $this.element[0] ? ele : ele.parent("li"));
            });

            this.update();

            UI.domObserve(this.element, function(e) {
                if ($this.element.find($this.options.lists).not('[role]').length) {
                    $this.update();
                }
            });
        },

        update: function() {

            var $this = this;

            this.find(this.options.lists).each(function() {

                var $ele   = UI.$(this).attr('role', 'menu'),
                    parent = $ele.closest('li'),
                    active = parent.hasClass("uk-active");

                if (!parent.data('list-container')) {
                    $ele.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');
                    parent.data('list-container', $ele.parent()[active ? 'removeClass':'addClass']('uk-hidden'));
                }

                // Init ARIA
                parent.attr('aria-expanded', parent.hasClass("uk-open"));

                if (active) $this.open(parent, true);
            });
        },

        open: function(li, noanimation) {

            var $this = this, element = this.element, $li = UI.$(li), $container = $li.data('list-container');

            if (!this.options.multiple) {

                element.children('.uk-open').not(li).each(function() {

                    var ele = UI.$(this);

                    if (ele.data('list-container')) {
                        ele.data('list-container').stop().animate({height: 0}, function() {
                            UI.$(this).parent().removeClass('uk-open').end().addClass('uk-hidden');
                        });
                    }
                });
            }

            $li.toggleClass('uk-open');

            // Update ARIA
            $li.attr('aria-expanded', $li.hasClass('uk-open'));

            if ($container) {

                if ($li.hasClass('uk-open')) {
                    $container.removeClass('uk-hidden');
                }

                if (noanimation) {

                    $container.stop().height($li.hasClass('uk-open') ? 'auto' : 0);

                    if (!$li.hasClass('uk-open')) {
                        $container.addClass('uk-hidden');
                    }

                    this.trigger('display.uk.check');

                } else {

                    $container.stop().animate({
                        height: ($li.hasClass('uk-open') ? getHeight($container.find('ul:first')) : 0)
                    }, function() {

                        if (!$li.hasClass('uk-open')) {
                            $container.addClass('uk-hidden');
                        } else {
                            $container.css('height', '');
                        }

                        $this.trigger('display.uk.check');
                    });
                }
            }
        }
    });


    // helper

    function getHeight(ele) {

        var $ele = UI.$(ele), height = 'auto';

        if ($ele.is(':visible')) {
            height = $ele.outerHeight();
        } else {

            var tmp = {
                position: $ele.css('position'),
                visibility: $ele.css('visibility'),
                display: $ele.css('display')
            };

            height = $ele.css({position: 'absolute', visibility: 'hidden', display: 'block'}).outerHeight();

            $ele.css(tmp); // reset element
        }

        return height;
    }

})(UIkit2);

(function(UI) {

    "use strict";

    var scrollpos = {x: window.scrollX, y: window.scrollY},
        $win      = UI.$win,
        $doc      = UI.$doc,
        $html     = UI.$html,
        Offcanvas = {

        show: function(element, options) {

            element = UI.$(element);

            if (!element.length) return;

            options = UI.$.extend({mode: 'push'}, options);

            var $body     = UI.$('body'),
                bar       = element.find('.uk-offcanvas-bar:first'),
                rtl       = (UI.langdirection == 'right'),
                flip      = bar.hasClass('uk-offcanvas-bar-flip') ? -1:1,
                dir       = flip * (rtl ? -1 : 1),

                scrollbarwidth =  window.innerWidth - $body.width();

            scrollpos = {x: window.pageXOffset, y: window.pageYOffset};

            bar.attr('mode', options.mode);
            element.addClass('uk-active');

            $body.css({width: window.innerWidth - scrollbarwidth, height: window.innerHeight}).addClass('uk-offcanvas-page');

            if (options.mode == 'push' || options.mode == 'reveal') {
                $body.css((rtl ? 'margin-right' : 'margin-left'), (rtl ? -1 : 1) * (bar.outerWidth() * dir));
            }

            if (options.mode == 'reveal') {
                bar.css('clip', 'rect(0, '+bar.outerWidth()+'px, 100vh, 0)');
            }

            $html.css('margin-top', scrollpos.y * -1).width(); // .width() - force redraw


            bar.addClass('uk-offcanvas-bar-show');

            this._initElement(element);

            bar.trigger('show.uk.offcanvas', [element, bar]);

            // Update ARIA
            element.attr('aria-hidden', 'false');
        },

        hide: function(force) {

            var $body = UI.$('body'),
                panel = UI.$('.uk-offcanvas.uk-active'),
                rtl   = (UI.langdirection == 'right'),
                bar   = panel.find('.uk-offcanvas-bar:first'),
                finalize = function() {
                    $body.removeClass('uk-offcanvas-page').css({width: '', height: '', marginLeft: '', marginRight: ''});
                    panel.removeClass('uk-active');

                    bar.removeClass('uk-offcanvas-bar-show');
                    $html.css('margin-top', '');
                    window.scrollTo(scrollpos.x, scrollpos.y);
                    bar.trigger('hide.uk.offcanvas', [panel, bar]);

                    // Update ARIA
                    panel.attr('aria-hidden', 'true');
                };

            if (!panel.length) return;
            if (bar.attr('mode') == 'none') force = true;

            if (UI.support.transition && !force) {

                $body.one(UI.support.transition.end, function() {
                    finalize();
                }).css((rtl ? 'margin-right' : 'margin-left'), '');

                if (bar.attr('mode') == 'reveal') {
                    bar.css('clip', '');
                }

                setTimeout(function(){
                    bar.removeClass('uk-offcanvas-bar-show');
                }, 0);

            } else {
                finalize();
            }
        },

        _initElement: function(element) {

            if (element.data('OffcanvasInit')) return;

            element.on('click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas', function(e) {

                var target = UI.$(e.target);

                if (!e.type.match(/swipe/)) {

                    if (!target.hasClass('uk-offcanvas-close')) {
                        if (target.hasClass('uk-offcanvas-bar')) return;
                        if (target.parents('.uk-offcanvas-bar:first').length) return;
                    }
                }

                e.stopImmediatePropagation();
                Offcanvas.hide();
            });

            element.on('click', 'a[href*="#"]', function(e){

                var link = UI.$(this),
                    href = link.attr('href');

                if (href == '#') {
                    return;
                }

                UI.$doc.one('hide.uk.offcanvas', function() {

                    var target;

                    try {
                        target = UI.$(link[0].hash);
                    } catch (e){
                        target = '';
                    }

                    if (!target.length) {
                        target = UI.$('[name="'+link[0].hash.replace('#','')+'"]');
                    }

                    if (target.length && UI.Utils.scrollToElement) {
                        UI.Utils.scrollToElement(target, UI.Utils.options(link.attr('data-uk-smooth-scroll') || '{}'));
                    } else {
                        window.location.href = href;
                    }
                });

                Offcanvas.hide();
            });

            element.data('OffcanvasInit', true);
        }
    };

    UI.component('offcanvasTrigger', {

        boot: function() {

            // init code
            $html.on('click.offcanvas.uikit', '[data-uk-offcanvas]', function(e) {

                e.preventDefault();

                var ele = UI.$(this);

                if (!ele.data('offcanvasTrigger')) {
                    var obj = UI.offcanvasTrigger(ele, UI.Utils.options(ele.attr('data-uk-offcanvas')));
                    ele.trigger("click");
                }
            });

            $html.on('keydown.uk.offcanvas', function(e) {

                if (e.keyCode === 27) { // ESC
                    Offcanvas.hide();
                }
            });
        },

        init: function() {

            var $this = this;

            this.options = UI.$.extend({
                target: $this.element.is('a') ? $this.element.attr('href') : false,
                mode: 'push'
            }, this.options);

            this.on('click', function(e) {
                e.preventDefault();
                Offcanvas.show($this.options.target, $this.options);
            });
        }
    });

    UI.offcanvas = Offcanvas;

})(UIkit2);

(function(UI) {

    "use strict";

    var Animations;

    UI.component('switcher', {

        defaults: {
            connect   : false,
            toggle    : '>*',
            active    : 0,
            animation : false,
            duration  : 200,
            swiping   : true
        },

        animating: false,

        boot: function() {

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-switcher]', context).each(function() {
                    var switcher = UI.$(this);

                    if (!switcher.data('switcher')) {
                        var obj = UI.switcher(switcher, UI.Utils.options(switcher.attr('data-uk-switcher')));
                    }
                });
            });
        },

        init: function() {

            var $this = this;

            this.on('click.uk.switcher', this.options.toggle, function(e) {
                e.preventDefault();
                $this.show(this);
            });

            if (!this.options.connect) {
                return;
            }

            this.connect = UI.$(this.options.connect);

            if (!this.connect.length) {
                return;
            }

            this.connect.on('click.uk.switcher', '[data-uk-switcher-item]', function(e) {

                e.preventDefault();

                var item = UI.$(this).attr('data-uk-switcher-item');

                if ($this.index == item) return;

                switch(item) {
                    case 'next':
                    case 'previous':
                        $this.show($this.index + (item=='next' ? 1:-1));
                        break;
                    default:
                        $this.show(parseInt(item, 10));
                }
            });

            if (this.options.swiping) {

                this.connect.on('swipeRight swipeLeft', function(e) {
                    e.preventDefault();
                    if (!window.getSelection().toString()) {
                        $this.show($this.index + (e.type == 'swipeLeft' ? 1 : -1));
                    }
                });
            }

            this.update();
        },

        update: function() {

            this.connect.children().removeClass('uk-active').attr('aria-hidden', 'true');

            var toggles = this.find(this.options.toggle),
                active  = toggles.filter('.uk-active');

            if (active.length) {
                this.show(active, false);
            } else {

                if (this.options.active===false) return;

                active = toggles.eq(this.options.active);
                this.show(active.length ? active : toggles.eq(0), false);
            }

            // Init ARIA for toggles
            toggles.not(active).attr('aria-expanded', 'false');
            active.attr('aria-expanded', 'true');
        },

        show: function(tab, animate) {

            if (this.animating) {
                return;
            }

            var toggles = this.find(this.options.toggle);

            if (isNaN(tab)) {
                tab = UI.$(tab);
            } else {
                tab = tab < 0 ? toggles.length-1 : tab;
                tab = toggles.eq(toggles[tab] ? tab : 0);
            }

            var $this     = this,
                active    = UI.$(tab),
                animation = Animations[this.options.animation] || function(current, next) {

                    if (!$this.options.animation) {
                        return Animations.none.apply($this);
                    }

                    var anim = $this.options.animation.split(',');

                    if (anim.length == 1) {
                        anim[1] = anim[0];
                    }

                    anim[0] = anim[0].trim();
                    anim[1] = anim[1].trim();

                    return coreAnimation.apply($this, [anim, current, next]);
                };

            if (animate===false || !UI.support.animation) {
                animation = Animations.none;
            }

            if (active.hasClass("uk-disabled")) return;

            // Update ARIA for Toggles
            toggles.attr('aria-expanded', 'false');
            active.attr('aria-expanded', 'true');

            toggles.filter(".uk-active").removeClass("uk-active");
            active.addClass("uk-active");

            if (this.options.connect && this.connect.length) {

                this.index = this.find(this.options.toggle).index(active);

                if (this.index == -1 ) {
                    this.index = 0;
                }

                this.connect.each(function() {

                    var container = UI.$(this),
                        children  = UI.$(container.children()),
                        current   = UI.$(children.filter('.uk-active')),
                        next      = UI.$(children.eq($this.index));

                        $this.animating = true;

                        animation.apply($this, [current, next]).then(function(){

                            current.removeClass("uk-active");
                            next.addClass("uk-active");

                            // Update ARIA for connect
                            current.attr('aria-hidden', 'true');
                            next.attr('aria-hidden', 'false');

                            UI.Utils.checkDisplay(next, true);

                            $this.animating = false;

                        });
                });
            }

            this.trigger("show.uk.switcher", [active]);
        }
    });

    Animations = {

        'none': function() {
            var d = UI.$.Deferred();
            d.resolve();
            return d.promise();
        },

        'fade': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-fade', current, next]);
        },

        'slide-bottom': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-bottom', current, next]);
        },

        'slide-top': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-top', current, next]);
        },

        'slide-vertical': function(current, next, dir) {

            var anim = ['uk-animation-slide-top', 'uk-animation-slide-bottom'];

            if (current && current.index() > next.index()) {
                anim.reverse();
            }

            return coreAnimation.apply(this, [anim, current, next]);
        },

        'slide-left': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-left', current, next]);
        },

        'slide-right': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-right', current, next]);
        },

        'slide-horizontal': function(current, next, dir) {

            var anim = ['uk-animation-slide-right', 'uk-animation-slide-left'];

            if (current && current.index() > next.index()) {
                anim.reverse();
            }

            return coreAnimation.apply(this, [anim, current, next]);
        },

        'scale': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-scale-up', current, next]);
        }
    };

    UI.switcher.animations = Animations;


    // helpers

    function coreAnimation(cls, current, next) {

        var d = UI.$.Deferred(), clsIn = cls, clsOut = cls, release;

        if (next[0]===current[0]) {
            d.resolve();
            return d.promise();
        }

        if (typeof(cls) == 'object') {
            clsIn  = cls[0];
            clsOut = cls[1] || cls[0];
        }

        UI.$body.css('overflow-x', 'hidden'); // fix scroll jumping in iOS

        release = function() {

            if (current) current.hide().removeClass('uk-active '+clsOut+' uk-animation-reverse');

            next.addClass(clsIn).one(UI.support.animation.end, function() {

                setTimeout(function () {
                    next.removeClass(''+clsIn+'').css({opacity:'', display:''});
                }, 0);

                d.resolve();

                UI.$body.css('overflow-x', '');

                if (current) current.css({opacity:'', display:''});

            }.bind(this)).show();
        };

        next.css('animation-duration', this.options.duration+'ms');

        if (current && current.length) {

            current.css('animation-duration', this.options.duration+'ms');

            current.css('display', 'none').addClass(clsOut+' uk-animation-reverse').one(UI.support.animation.end, function() {
                release();
            }.bind(this)).css('display', '');

        } else {
            next.addClass('uk-active');
            release();
        }

        return d.promise();
    }

})(UIkit2);

(function(UI) {

    "use strict";

    UI.component('tab', {

        defaults: {
            target    : '>li:not(.uk-tab-responsive, .uk-disabled)',
            connect   : false,
            active    : 0,
            animation : false,
            duration  : 200,
            swiping   : true
        },

        boot: function() {

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-tab]', context).each(function() {

                    var tab = UI.$(this);

                    if (!tab.data('tab')) {
                        var obj = UI.tab(tab, UI.Utils.options(tab.attr('data-uk-tab')));
                    }
                });
            });
        },

        init: function() {

            var $this = this;

            this.current = false;

            this.on('click.uk.tab', this.options.target, function(e) {

                e.preventDefault();

                if ($this.switcher && $this.switcher.animating) {
                    return;
                }

                var current = $this.find($this.options.target).not(this);

                current.removeClass('uk-active').blur();

                $this.trigger('change.uk.tab', [UI.$(this).addClass('uk-active'), $this.current]);

                $this.current = UI.$(this);

                // Update ARIA
                if (!$this.options.connect) {
                    current.attr('aria-expanded', 'false');
                    UI.$(this).attr('aria-expanded', 'true');
                }
            });

            if (this.options.connect) {
                this.connect = UI.$(this.options.connect);
            }

            // init responsive tab
            this.responsivetab = UI.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>');

            this.responsivetab.dropdown = this.responsivetab.find('.uk-dropdown');
            this.responsivetab.lst      = this.responsivetab.dropdown.find('ul');
            this.responsivetab.caption  = this.responsivetab.find('a:first');

            if (this.element.hasClass('uk-tab-bottom')) this.responsivetab.dropdown.addClass('uk-dropdown-up');

            // handle click
            this.responsivetab.lst.on('click.uk.tab', 'a', function(e) {

                e.preventDefault();
                e.stopPropagation();

                var link = UI.$(this);

                $this.element.children('li:not(.uk-tab-responsive)').eq(link.data('index')).trigger('click');
            });

            this.on('show.uk.switcher change.uk.tab', function(e, tab) {
                $this.responsivetab.caption.html(tab.text());
            });

            this.element.append(this.responsivetab);

            // init UIkit components
            if (this.options.connect) {

                this.switcher = UI.switcher(this.element, {
                    toggle    : '>li:not(.uk-tab-responsive)',
                    connect   : this.options.connect,
                    active    : this.options.active,
                    animation : this.options.animation,
                    duration  : this.options.duration,
                    swiping   : this.options.swiping
                });
            }

            UI.dropdown(this.responsivetab, {mode: 'click', preventflip: 'y'});

            // init
            $this.trigger('change.uk.tab', [this.element.find(this.options.target).not('.uk-tab-responsive').filter('.uk-active')]);

            this.check();

            UI.$win.on('resize orientationchange', UI.Utils.debounce(function(){
                if ($this.element.is(':visible'))  $this.check();
            }, 100));

            this.on('display.uk.check', function(){
                if ($this.element.is(':visible'))  $this.check();
            });
        },

        check: function() {

            var children = this.element.children('li:not(.uk-tab-responsive)').removeClass('uk-hidden');

            if (!children.length) {
                this.responsivetab.addClass('uk-hidden');
                return;
            }

            var top          = (children.eq(0).offset().top + Math.ceil(children.eq(0).height()/2)),
                doresponsive = false,
                item, link, clone;

            this.responsivetab.lst.empty();

            children.each(function(){

                if (UI.$(this).offset().top > top) {
                    doresponsive = true;
                }
            });

            if (doresponsive) {

                for (var i = 0; i < children.length; i++) {

                    item  = UI.$(children.eq(i));
                    link  = item.find('a');

                    if (item.css('float') != 'none' && !item.attr('uk-dropdown')) {

                        if (!item.hasClass('uk-disabled')) {

                            clone = UI.$(item[0].outerHTML);
                            clone.find('a').data('index', i);

                            this.responsivetab.lst.append(clone);
                        }

                        item.addClass('uk-hidden');
                    }
                }
            }

            this.responsivetab[this.responsivetab.lst.children('li').length ? 'removeClass':'addClass']('uk-hidden');
        }
    });

})(UIkit2);

(function(UI){

    "use strict";

    UI.component('cover', {

        defaults: {
            automute : true
        },

        boot: function() {

            // auto init
            UI.ready(function(context) {

                UI.$('[data-uk-cover]', context).each(function(){

                    var ele = UI.$(this);

                    if(!ele.data('cover')) {
                        var plugin = UI.cover(ele, UI.Utils.options(ele.attr('data-uk-cover')));
                    }
                });
            });
        },

        init: function() {

            this.parent = this.element.parent();

            UI.$win.on('load resize orientationchange', UI.Utils.debounce(function(){
                this.check();
            }.bind(this), 100));

            this.on('display.uk.check', function(e) {
                if (this.element.is(':visible')) this.check();
            }.bind(this));

            this.check();

            if (this.element.is('iframe') && this.options.automute) {

                var src = this.element.attr('src');

                this.element.attr('src', '').on('load', function(){
                    this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', '*');
                }).attr('src', [src, (src.indexOf('?') > -1 ? '&':'?'), 'enablejsapi=1&api=1'].join(''));
            }
        },

        check: function() {

            this.element.css({ width  : '', height : '' });

            this.dimension = {w: this.element.width(), h: this.element.height()};

            if (this.element.attr('width') && !isNaN(this.element.attr('width'))) {
                this.dimension.w = this.element.attr('width');
            }

            if (this.element.attr('height') && !isNaN(this.element.attr('height'))) {
                this.dimension.h = this.element.attr('height');
            }

            this.ratio = this.dimension.w / this.dimension.h;

            var w = this.parent.width(), h = this.parent.height(), width, height;

            // if element height < parent height (gap underneath)
            if ((w / this.ratio) < h) {

                width  = Math.ceil(h * this.ratio);
                height = h;

            // element width < parent width (gap to right)
            } else {

                width  = w;
                height = Math.ceil(w / this.ratio);
            }

            this.element.css({ width  : width, height : height });
        }
    });

})(UIkit2);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/dashboard/index.js":
/*!*******************************!*\
  !*** ./js/dashboard/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit */ "../node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fs_webstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fs/webstorage.js */ "./js/fs/webstorage.js");
/* harmony import */ var uikit_dist_css_uikit_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uikit/dist/css/uikit.css */ "../node_modules/uikit/dist/css/uikit.css");
/* harmony import */ var uikit_dist_css_uikit_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_css_uikit_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uikit_dist_css_components_notify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit/dist/css/components/notify.css */ "../node_modules/uikit/dist/css/components/notify.css");
/* harmony import */ var uikit_dist_css_components_notify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_css_components_notify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);



//import notify from 'uikit/dist/js/components/notify'






var webStorage = new _fs_webstorage_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

//プロジェクト一覧表示
function projectjsonCallback(json, type) {
  console.log(json);
  $("#prjlist").empty();

  const prj = $(`
<div class="uk-width-medium-1-3">
  <a target="_blank" class="uk-panel uk-panel-hover uk-panel-box file" data-url="">
    <h3 class="uk-panel-title"><i class="uk-icon-file"></i></h3>
  </a>
</div>
`);
  // [ROWID, filename, ext, timestamp, uid, scope,projectid]
  // [{description, id, public},,]
  json.rows.forEach((val, i) => {
    let _prj = prj.clone(true);
    _prj.children('.file').attr('href', 'editor.html?q=' + val.id + '&t=' + type);
    _prj.find('.uk-panel-title').append(val.description);
    $("#prjlist").append(_prj);
  });
}

//プロジェクト一覧取得
webStorage.loadList((json, type) => {
  projectjsonCallback(json, type)

});



function stringify(str) {
  var cache = [];
  return JSON.stringify(
    str,
    function (key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      if (key == "parentNode") return;
      return value;
    },
    "\t"
  );
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/fs/webstorage.js":
/*!*****************************!*\
  !*** ./js/fs/webstorage.js ***!
  \*****************************/
/*! exports provided: WebStorage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorage", function() { return WebStorage; });
/* harmony import */ var _model_FileContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/FileContainer.js */ "./js/model/FileContainer.js");
/* harmony import */ var _model_FileData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/FileData.js */ "./js/model/FileData.js");





class WebStorage {
    constructor() {
        this.siteurl = './sample/sample_container/'
    }

    loadList(cb) {
        $.getJSON(this.siteurl + 'index.json').done((data) => {
            /*schema
                data = {
                    rows : [
                        //OUT [{description, id, public},,]
                        {description : 'index', id:'./sample/html/index.html', public:true}
                    ]
                }
            */
            return (cb) ? cb(data, "web") : data
        })
    }

    saveDraft(fileContainer) {
    }

    loadDraft(fileContainer, url, cb) {
        $.getJSON(this.siteurl + url).done((data) => {
            fileContainer.setContainer(data);
            fileContainer.setId(fileContainer.getId())
            fileContainer.setProjectName(data.description.split(/\r\n|\r|\n/)[0] || "new project");
            //console.log("fileContainer:" + fileContainer.getContainerJson());
            return (cb) ? cb(fileContainer) : fileContainer.getContainerJson();
        })
    }

}
/* harmony default export */ __webpack_exports__["default"] = (WebStorage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/model/FileContainer.js":
/*!***********************************!*\
  !*** ./js/model/FileContainer.js ***!
  \***********************************/
/*! exports provided: FileContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileContainer", function() { return FileContainer; });
/* harmony import */ var _FileData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileData.js */ "./js/model/FileData.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/***********************************************
Copyright 2017 - 2018
***********************************************/
/* v1.0.0 */



/* ------------------------------------------------
  ファイル管理クラス FileContainer
------------------------------------------------ */
class FileContainer {
  constructor () {
    this.container = {
      v: 0.1,
      id: null,
      gistid: null,
      files: {},
      public: true,
      createdTime: new Date().getTime(),
      lastUpdatedTime: new Date().getTime(),
      // created_at: '2017-10-29T05:45:01Z',
      // updated_at: '2017-11-14T12:41:14Z',
      projectName: '',
      description: ''
    }
    this.fileObjects = {}
    this.ev = new events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"] ()
  }

  onChangeMetas (callback) {
    this.ev.on('changemeta', callback)
  }
  onChangeFiles (callback) {
    this.ev.on('change', callback)
  }

  onOpenFile (callback) {
    this.ev.on('open', callback)
  }

  onCloseFile (callback) {
    this.ev.on('close', callback)
  }

  setId (id) {
    this.container.id = id
    this.ev.emit('changemeta')
  }

  getId () {
    return this.container.id || Date.now() + Math.floor(1e4 + 9e4 * Math.random())
  }

  setGistId (gistid) {
    this.container.id = gistid
    this.ev.emit('changemeta')
  }

  getGistId () {
    return this.container.gistid || null
  }

  setProjectName (projectName) {
    this.container.projectName = projectName
    this.ev.emit('changemeta')
  }

  getProjectName () {
    return this.container.projectName || null
  }

  
  getDirectories ( parentPath = null) {
    // 配列のキーを取り出す
    let ret = {}
    for (let key in this.container.files) {
      if (!this.container.files[key].truncated) {
        if (!parentPath) {
          // let mp = key.match(/((.+?\/)+).+\.[^.]+$/)
          let mp = key.match(/(.+?\/)/)
          if(mp){
            ret[mp[1]] = mp[1]
          }
        } else {
          if(key.indexOf(parentPath)==0 && key.indexOf('/', parentPath.length) > 0 ) {
            const _key = key.substring(parentPath.length)
            let mp = _key.match(/(.+?\/)/)
            if(mp){
              ret[parentPath+mp[1]] = mp[1]
            }
          }
        }
      }
    }
    return Object.keys(ret).map(key => { return {"path": key, "name": ret[key]} });
  }

  getFiles ( parentPath = null, all = false) {
    // 配列のキーを取り出す
    let ret = {}
    for (let key in this.container.files) {
      if (!this.container.files[key].truncated) {
        if (!parentPath && (all || key.indexOf('/')==-1)) { 
          // parentPathを指定してない場合 最上位階層のファイルを返す
          // all = trueの場合は全ファイルを返す
          let mp = key.match(/\/?([^\/]+\.[^.]+)$/)
          if(mp){
            ret[key] = mp[1]
          }
        } else { 
          // parentPathを指定した場合　そのpathの直配下のファイルを返す
          // all = trueの場合は全配下のファイルを返す
          if(key.indexOf(parentPath)==0 && (all || key.indexOf('/', parentPath.length)==-1 )) {
            let mp = key.match(/\/?([^\/]+\.[^.]+)$/)
            if(mp){
              ret[key] = mp[1]
            }
          }
        }
      }
    }
    return Object.keys(ret).map(key => { return {"path": key, "name": ret[key]} });
  }

  getOpenFiles ( parentPath = null) {
    // 配列のキーを取り出す
    let ret = []
    for (let key in this.fileObjects) {
      if (!this.container.files[key].truncated) {
        if (!parentPath) {
          ret.push(key)
        } else {
          if(key.indexOf(parentPath)==0 && key.indexOf('/', parentPath.length)==-1 ) {
            ret.push(key)
          }
        }
      }
    }
    return ret
  }

  existFile (filename) {
    if (filename in this.container.files) {
      return true
    }
    return false
  }

  getFile (filename, fileCls, ...constructorParam) {
    let Cls = fileCls || _FileData_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    if (filename in this.container.files) {
      return new Cls(this.container.files[filename],...constructorParam)
    }
    return null
  }

  getFileRaw (filename) {
    if (filename in this.container.files) {
      return this.container.files[filename]
    }
    return null
  }

  openFile (filename, fileCls, ...constructorParam) {
    if (filename in this.container.files) {
      if (!(filename in this.fileObjects)) {
        this.fileObjects[filename] = this.getFile(filename, fileCls, ...constructorParam)
      }
      this.ev.emit('open', filename, this.fileObjects[filename])
      return this.fileObjects[filename]
    }
    return null
  }

  closeFile (filename) {
    if (filename in this.container.files) {
      if (filename in this.fileObjects) {
        const ret = this.fileObjects[filename]
        delete this.fileObjects[filename]
        this.ev.emit('close', filename)
        return ret
      }
    }
    return null
  }

  saveFile (filename) {
    if (filename in this.container.files) {
      if (!(filename in this.fileObjects)) {
        return this.putFile(this.fileObjects[filename])
      }
    }
    return false
  }

  async putFile (file) {
    const filename = file.getFilename()
    this.container.files[filename] = file.getFileData()
    this.container.lastUpdatedTime = new Date().getTime()
    this.ev.emit('change', filename)
    return true
  }

  copyFile (src, dest, mode = 0 ) {
    if (src in this.container.files) {
      if (mode==1 || !dest in this.container.files) {
        let file = new _FileData_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.container.files[src])
        file.setFilename(dest)
        this.putFile(file)
        this.container.lastUpdatedTime = new Date().getTime()
        return true
      }
    }
    return false
  }

  renameFile (filename, newName) {
    if (filename in this.container.files) {
      if (!newName in this.container.files) {
        let file = new _FileData_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.container.files[filename])
        file.setFilename(newName)
        delete this.container.files[filename]
        delete this.fileObjects[filename]
        this.putFile(file)
        this.container.lastUpdatedTime = new Date().getTime()
        return true
      }
    }
    return false
  }

  removeFile (filename) {
    if (filename in this.container.files) {
      let file = new _FileData_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.container.files[filename])
      file.remove()
      this.putFile(file)
      delete this.container.files[filename]
      delete this.fileObjects[filename]
      this.container.lastUpdatedTime = new Date().getTime()
      return true
    }
    return false
  }

  clear() {
    this.container = {
      v: 0.1,
      id: '',
      gistid: '',
      files: {},
      public: true,
      createdTime: new Date().getTime(),
      lastUpdatedTime: new Date().getTime(),
      // created_at: '2017-10-29T05:45:01Z',
      // updated_at: '2017-11-14T12:41:14Z',
      description: ''
    }
    this.fileObjects = {}
  }

  init () {
    this.clear()
  }

  setPublic (bool) {
    this.container.public = bool
    this.ev.emit('changemeta')
  }

  getPublic () {
    return this.container.public || null
  }

  setDescription (description) {
    this.container.description = description
    this.ev.emit('changemeta')
  }

  getDescription () {
    return this.container.description || null
  }

  setContainer (container) {
    this.container = container
    this.fileObjects = {}
    this.ev.emit('change', null)
    this.ev.emit('changemeta')
  }

  getContainer () {
    return this.container || null
  }

  setContainerJson (container) {
    this.setContainer(JSON.parse(container))
    this.fileObjects = {}
  }

  getContainerJson () {
    return JSON.stringify(this.getContainer())
  }

  getGistData () {
    let files = Object.entries(this.container.files).filter( (x, self) => (!x[1].content == "" && !x[1].filename.match(/^\/public\//))).map(([key, value]) => {
      return [key.replace(/\//g, '%2F'), {"filename": value.filename.replace(/\//g, '%2F'), "content": value.content}]
    })

    let gistdata = {
      description: this.container.projectName ,
      public: this.container.public,
      files: Object.fromEntries(files)
    }
    return gistdata
  }

  getGistJsonData () {
    return JSON.stringify(this.getGistData())
  }

  getCreatedTime () {
    return this.container.createdTime
  }

  getLastUpdatedTime () {
    return this.container.lastUpdatedTime
  }

  setCreatedTime (createdTime) {
    this.container.createdTime = createdTime
    this.ev.emit('changemeta')
  }

  setLastUpdatedTime (lastUpdatedTime) {
    this.container.lastUpdatedTime = lastUpdatedTime
    this.ev.emit('changemeta')
  }
}
/* harmony default export */ __webpack_exports__["default"] = (FileContainer);
if (typeof window !== 'undefined') {
  !window.FileContainer && (window.FileContainer = FileContainer)
}

/***/ }),

/***/ "./js/model/FileData.js":
/*!******************************!*\
  !*** ./js/model/FileData.js ***!
  \******************************/
/*! exports provided: FileData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileData", function() { return FileData; });
/***********************************************
Copyright 2017 - 2018
***********************************************/
/* v1.0.0 */

/*------------------------------------------------
  ファイル管理クラス FileContainer
------------------------------------------------*/
class FileData {
  constructor (file) {
    if (file instanceof FileData) {
      this.file = file.getFileData
    } else {
      this.file = {
        filename: file && file.filename ? file.filename : '',
        fileType: file && file.fileType ? file.fileType : 'txt',
        type: file && file.type ? file.type : 'text/plain',
        language: file && file.language ? file.language : 'Markdown',
        size: file && file.size ? file.size : 0,
        truncated: file && file.truncated ? file.truncated : false,
        content: file && file.content ? file.content : '',
        description: file && file.description ? file.description : ''
      }
      if (file && file.filename) this.setAutoType (file.filename)
    }
  }

  setLanguage (language) {
    this.file.language = language
  }

  getLanguage () {
    return this.file.language
  }

  setFileType (fileType) {
    this.file.fileType = fileType
  }

  getFileType () {
    return this.file.fileType
  }

  setType (type) {
    this.file.type = type
  }

  getType () {
    return this.file.type
  }

  getSize () {
    return this.file.size
  }

  setContent (content) {
    this.file.content = content
    return content
  }

  getContent () {
    return this.file.content || ''
  }

  setFilename (filename) {
    this.file.filename = filename
    this.setAutoType (filename)
  }

  setAutoType (filename) {
    if (filename.match(/md$/)) {
      this.setType('text/plain')
      this.setLanguage('Markdown')
       return
    } else if (filename.match(/markdown$/)) {
      this.setType('text/plain')
      this.setLanguage('Markdown')
      return
    } else if (filename.match(/txt$/)) {
      this.setType('text/plain')
      this.setLanguage('text')
      return
    } else if (filename.match(/json$/)) {
      this.setType('application/json')
      this.setLanguage('json')
      return
    } else if (filename.match(/ahtml$/)) {
      this.setType('text/html')
      this.setLanguage('ahtml')
      return
    } else if (filename.match(/htm.?$/)) {
      this.setType('text/html')
      this.setLanguage('html')
      return
    } else if (filename.match(/js$/)) {
      this.setType('text/javascript')
      this.setLanguage('JavaScript')
      return
    } else if (filename.match(/es6$/)) {
      this.setType('text/javascript')
      this.setLanguage('JavaScript')
      return
    } else if (filename.match(/scss$/)) {
      this.setType('text/scss')
      this.setLanguage('scss')
      return
    } else if (filename.match(/css$/)) {
      this.setType('text/css')
      this.setLanguage('css')
      return
    }
    return
  }

  getFilename () {
    return this.file.filename
  }

  setDescription (description) {
    this.file.description = description
  }

  getDescription () {
    return this.file.description
  }

  getFileData () {
    return this.file
  }

  getFileDataJson () {
    return JSON.stringify(this.getFileData())
  }

  remove () {
    this.file.content = ''
    this.file.truncated = true
  }
}
/* harmony default export */ __webpack_exports__["default"] = (FileData);

if (typeof window !== 'undefined') {
  !window.FileData && (window.FileData = FileData)
}

/***/ })

/******/ });
//# sourceMappingURL=map/dashboard.b8c7769581333e865462.js.map