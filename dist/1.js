exports.ids = [1];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/conponents/Ui/Button/index.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/conponents/Ui/Button/index.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/postcss-loader/src/index.js):\\nError: No PostCSS Config found in: /home/arthur/Projects/test-projects/lazy-load-app/src/conponents/Ui/Button\\n    at config.search.then (/home/arthur/Projects/test-projects/lazy-load-app/node_modules/postcss-load-config/src/index.js:91:15)\");\n\n//# sourceURL=webpack:///./src/conponents/Ui/Button/index.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/Public/index.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/containers/Public/index.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/postcss-loader/src/index.js):\\nError: No PostCSS Config found in: /home/arthur/Projects/test-projects/lazy-load-app/src/containers/Public\\n    at config.search.then (/home/arthur/Projects/test-projects/lazy-load-app/node_modules/postcss-load-config/src/index.js:91:15)\");\n\n//# sourceURL=webpack:///./src/containers/Public/index.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3");

/***/ }),

/***/ "./src/conponents/Ui/Button/index.js":
/*!*******************************************!*\
  !*** ./src/conponents/Ui/Button/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/conponents/Ui/Button/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Button(props) {\n  var title = props.title,\n      onClick = props.onClick;\n\n  function click(event) {\n    if (typeof onClick !== 'function') {\n      return false;\n    }\n\n    onClick(event);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: click,\n    className: \"button\"\n  }, title);\n}\n\nButton.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nButton.defaultProps = {\n  title: 'Click on me'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/conponents/Ui/Button/index.js?");

/***/ }),

/***/ "./src/conponents/Ui/Button/index.scss":
/*!*********************************************!*\
  !*** ./src/conponents/Ui/Button/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./index.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/conponents/Ui/Button/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/conponents/Ui/Button/index.scss?");

/***/ }),

/***/ "./src/containers/Public/index.js":
/*!****************************************!*\
  !*** ./src/containers/Public/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _conponents_Ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../conponents/Ui/Button */ \"./src/conponents/Ui/Button/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/containers/Public/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Public() {\n  var buttonClickHandler = function buttonClickHandler() {\n    alert('Button clicked from Public mode');\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"public\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_conponents_Ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onClick: buttonClickHandler,\n    title: \"Click me from Public mode\"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Public);\n\n//# sourceURL=webpack:///./src/containers/Public/index.js?");

/***/ }),

/***/ "./src/containers/Public/index.scss":
/*!******************************************!*\
  !*** ./src/containers/Public/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./index.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/Public/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/containers/Public/index.scss?");

/***/ })

};;