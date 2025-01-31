(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./assets/js/components/AlertBox/index.tsx":
/*!*************************************************!*\
  !*** ./assets/js/components/AlertBox/index.tsx ***!
  \*************************************************/
/*! exports provided: ALERT_SUCCESS, ALERT_ALERT, ALERT_INFO, ALERT_WARNING, AlertBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_SUCCESS", function() { return ALERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_ALERT", function() { return ALERT_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_INFO", function() { return ALERT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_WARNING", function() { return ALERT_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBox", function() { return AlertBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_cross_circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @img/cross-circle.svg */ "./assets/img/cross-circle.svg");




var ALERT_SUCCESS = 'success';
var ALERT_ALERT = 'alert';
var ALERT_INFO = 'info';
var ALERT_WARNING = 'warning';
var AlertBox = function AlertBox(_ref) {
  var children = _ref.children,
    className = _ref.className,
    fontSize = _ref.fontSize,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? ALERT_SUCCESS : _ref$variant;
  var alertBoxClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('d-flex p-4 mb-3 border-s border border-1 rounded-1', {
    'border-green-05 bg-lighten-30-green-light': ALERT_SUCCESS === variant,
    'border-red bg-lighten-30-red-light': ALERT_ALERT === variant,
    'border-blue-02 bg-blue-03': ALERT_INFO === variant,
    'border-warning bg-warning-light': ALERT_WARNING === variant
  }, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: alertBoxClasses,
    "data-cy": "alert-box-".concat(variant)
  }, ALERT_SUCCESS === variant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    className: "text-success text-xlarge mr-4",
    icon: "check-circle-1",
    variant: "bold"
  })), ALERT_ALERT === variant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "text-danger text-xlarge mr-4",
    src: _img_cross_circle_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: ""
  })), ALERT_INFO === variant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    className: "text-info text-xlarge mr-4",
    icon: "information-circle",
    variant: "bold"
  })), ALERT_WARNING === variant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    className: "text-warning text-xlarge mr-4",
    icon: "alert-triangle",
    variant: "bold"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "m-0 new-line text-break align-self-center d-block",
    tag: "span",
    size: fontSize
  }, children));
};

/***/ })

}]);