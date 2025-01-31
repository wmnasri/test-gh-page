(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./assets/js/components/InfoBox.tsx":
/*!******************************************!*\
  !*** ./assets/js/components/InfoBox.tsx ***!
  \******************************************/
/*! exports provided: InfoBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");



var InfoBox = function InfoBox(_ref) {
  var title = _ref.title,
    eFactureContact = _ref.eFactureContact,
    checkboxLabel = _ref.checkboxLabel,
    _ref$checkboxValue = _ref.checkboxValue,
    checkboxValue = _ref$checkboxValue === void 0 ? false : _ref$checkboxValue,
    handleChange = _ref.handleChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-blue-sky-light border border-blue-clear rounded-lg px-3 pt-2 pb-5 mt-3 mt-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center py-3 px-3 px-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    className: "text-blue-sky big",
    icon: "information-circle",
    variant: "bold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    size: "M",
    className: "mb-2"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "bold"
  }, eFactureContact)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
    label: checkboxLabel,
    id: "confirm_efacture",
    name: "confirm_efacture",
    checked: checkboxValue,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
    field: "confirm_efacture"
  }));
};

/***/ }),

/***/ "./assets/js/components/Services.jsx":
/*!*******************************************!*\
  !*** ./assets/js/components/Services.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function Services(_ref) {
  var variant = _ref.variant,
    ptValue = _ref.ptValue;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var isLabelInline = variant === 'label-inline';
  var isLine = variant === 'line';
  var isSquare = variant === 'square';
  var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('row no-gutters pt-3', _defineProperty({
    'pt-md-5 mt-3': isSquare,
    'pt-md-5 justify-content-center': isLine
  }, "pt-md-".concat(ptValue, " justify-content-center"), isLabelInline));
  var serviceClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    'px-2 px-sm-3 col-sm-3 new-line col-6 col-md-2 text-center': isLine,
    'px-2 px-sm-3 col-sm-3 new-line col-6 col-md-4 col-lg-6 text-center': isSquare,
    'px-2 px-xl-3 d-flex': isLabelInline
  });
  var labelClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('text-dark mt-2', {
    'pl-2 pl-xl-3 mb-4': isLabelInline
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: containerClassName
  }, isLabelInline ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "accounting-document",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service1'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "check-1",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service3')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "gauge-dashboard-1",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service2'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "cog",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service4'))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    serviceClassName: serviceClassName,
    labelClassName: labelClassName
  }));
}
var Content = function Content(_ref2) {
  var serviceClassName = _ref2.serviceClassName,
    labelClassName = _ref2.labelClassName;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "accounting-document",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service1'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "gauge-dashboard-1",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service2'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "check-1",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service3'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "cog",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service4'))));
};

/***/ }),

/***/ "./assets/js/form/FormError.tsx":
/*!**************************************!*\
  !*** ./assets/js/form/FormError.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




function FormError(_ref) {
  var field = _ref.field,
    _ref$messageAccess = _ref.messageAccess,
    messageAccess = _ref$messageAccess === void 0 ? '' : _ref$messageAccess,
    customDisplay = _ref.customDisplay,
    className = _ref.className;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])(),
    errors = _useFormikContext.errors,
    values = _useFormikContext.values,
    touched = _useFormikContext.touched;
  var condition = values[field] && errors[field] && touched[field];
  if (customDisplay || condition) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-".concat(field),
      role: "alert",
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, t(errors[field])), messageAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, messageAccess));
  }
  return null;
}

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

/***/ }),

/***/ "./assets/js/pages/sign-up/AccountInfos.jsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/sign-up/AccountInfos.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountInfos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Services */ "./assets/js/components/Services.jsx");




function AccountInfos() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative bg-white py-4 px-2 py-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrow-up",
    style: {
      width: 0,
      height: 0,
      borderLeft: '25px solid transparent',
      borderRight: '25px solid transparent',
      borderBottom: '25px solid white',
      position: 'absolute',
      top: -25,
      left: 'calc(50% - 25px)'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-8 col-md-6 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    align: "center",
    size: "L",
    weight: "medium",
    tag: "h2"
  }, t('signUp.accountInfos.title')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Services__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "line"
  }));
}

/***/ })

}]);