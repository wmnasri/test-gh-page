(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

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

/***/ }),

/***/ "./assets/js/models/index.ts":
/*!***********************************!*\
  !*** ./assets/js/models/index.ts ***!
  \***********************************/
/*! exports provided: fixFMatch, mobileMatch, phoneMatch, mobileOrPhoneAllowSpaces, urlMatch, mailMatch, nameRegex, ownerNameRegex, ownerSurnameRegex, frenchZipCodeRegex, mobilePhone, phone, email, repeated_email, password, checkBoxValidation, repeated_password, frenchZipCodeSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixFMatch", function() { return fixFMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMatch", function() { return mobileMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneMatch", function() { return phoneMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileOrPhoneAllowSpaces", function() { return mobileOrPhoneAllowSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlMatch", function() { return urlMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mailMatch", function() { return mailMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameRegex", function() { return nameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ownerNameRegex", function() { return ownerNameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ownerSurnameRegex", function() { return ownerSurnameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchZipCodeRegex", function() { return frenchZipCodeRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobilePhone", function() { return mobilePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phone", function() { return phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeated_email", function() { return repeated_email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBoxValidation", function() { return checkBoxValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeated_password", function() { return repeated_password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchZipCodeSchema", function() { return frenchZipCodeSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_components_tsme_react_components_models_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/tsme-react-components/models/validators */ "./assets/js/components/tsme-react-components/models/validators.tsx");



var fixFMatch = /^(0)\s*([1-5]|9)\s*([0-9]\s*){8}$/;
var mobileMatch = /^(0)\s*(6|7)\s*([0-9]\s*){8}$/;
var phoneMatch = /^0[0-9]{9}$/;
var mobileOrPhoneAllowSpaces = /^0[\s.]*([0-9][\s.]*){9}$/;
var urlMatch = /(http:\/|https:\/)?(\/[^\s"'<>]+)+\/?/;
var mailMatch = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var nameRegex = new RegExp(/^[A-Za-z\s]{0,24}$/);
var ownerNameRegex = new RegExp(/^[0-9A-Za-z\s]{0,50}$/);
var ownerSurnameRegex = new RegExp(/^[0-9A-Za-z\s]{0,49}$/);
var frenchZipCodeRegex = new RegExp(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/);
var mobilePhone = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(mobileMatch, 'errors.mobilePhone.invalid');
var phone = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(fixFMatch, 'errors.phone.invalid');
var email = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email('errors.email.invalid').required('mandatory_field');
var repeated_email = function repeated_email() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'email';
  return yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(1, 'errors.email.invalid').oneOf([yup__WEBPACK_IMPORTED_MODULE_0__["ref"](ref)], 'errors.email.mismatch').required('mandatory_field');
};
var password = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().isPassword('errors.password.invalid');
var checkBoxValidation = function checkBoxValidation(error) {
  return yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().oneOf([true], error);
};
var repeated_password = function repeated_password(ref) {
  return yup__WEBPACK_IMPORTED_MODULE_0__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_0__["ref"](ref)], 'errors.password.mismatch').required('errors.password.required');
};
var frenchZipCodeSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  zipCode: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(frenchZipCodeRegex, 'loginReset.form.errors.invalidZipcode').required('mandatory_field')
});

/***/ })

}]);