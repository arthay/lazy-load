(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/conponents/Ui/Button/index.js":
/*!*******************************************!*\
  !*** ./src/conponents/Ui/Button/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n // import './index.scss';\n\nfunction Button(props) {\n  var title = props.title,\n      onClick = props.onClick;\n\n  function click(event) {\n    if (typeof onClick !== 'function') {\n      return false;\n    }\n\n    onClick(event);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: click,\n    className: \"button\"\n  }, title);\n}\n\nButton.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nButton.defaultProps = {\n  title: 'Click on me'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/conponents/Ui/Button/index.js?");

/***/ }),

/***/ "./src/containers/Public/index.js":
/*!****************************************!*\
  !*** ./src/containers/Public/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _conponents_Ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../conponents/Ui/Button */ \"./src/conponents/Ui/Button/index.js\");\n\n // import './index.scss';\n\nfunction Public() {\n  var buttonClickHandler = function buttonClickHandler() {\n    alert('Button clicked from Public mode');\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"public\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_conponents_Ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onClick: buttonClickHandler,\n    title: \"Click me from Public mode\"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Public);\n\n//# sourceURL=webpack:///./src/containers/Public/index.js?");

/***/ })

}]);