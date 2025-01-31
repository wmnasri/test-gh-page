(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/components/DownloadMandate.tsx":
/*!**************************************************!*\
  !*** ./assets/js/components/DownloadMandate.tsx ***!
  \**************************************************/
/*! exports provided: DownloadMandate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadMandate", function() { return DownloadMandate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");




function DownloadMandate(_ref) {
  var url = _ref.url,
    pathname = _ref.pathname,
    search = _ref.search,
    mobilePhone = _ref.mobilePhone,
    isBlob = _ref.isBlob,
    onSuccess = _ref.onSuccess;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useDownloadMandate = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_3__["useDownloadMandate"])({
      url: url,
      pathname: pathname,
      search: search,
      isBlob: isBlob,
      onSuccess: onSuccess
    }),
    isLoading = _useDownloadMandate.isLoading,
    mutate = _useDownloadMandate.mutate;
  var onClick = function onClick() {
    mutate();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    tag: "h2",
    weight: "medium",
    className: "sign-mandate-title"
  }, t('payment.sign_mandate.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "sign-mandate-infos"
  }, t('payment.sign_mandate.infos', {
    mobilePhone: mobilePhone
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    id: "downloadMandate",
    icon: "download-bottom",
    variant: "text",
    className: "px-0",
    onClick: onClick,
    loader: isLoading
  }, t('payment.sign_mandate.btn_download')));
}

/***/ }),

/***/ "./assets/js/form/InputCheckbox.tsx":
/*!******************************************!*\
  !*** ./assets/js/form/InputCheckbox.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputCheckbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormError */ "./assets/js/form/FormError.tsx");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function InputCheckbox(_a) {
  var _a$defaultLabelSize = _a.defaultLabelSize,
    defaultLabelSize = _a$defaultLabelSize === void 0 ? false : _a$defaultLabelSize,
    props = __rest(_a, ["defaultLabelSize"]);
  var name = props.name;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])(),
    setFieldValue = _useFormikContext.setFieldValue,
    values = _useFormikContext.values,
    errors = _useFormikContext.errors;
  var onChange = function onChange(_ref) {
    var target = _ref.target;
    var checked = target.checked;
    setFieldValue(name, checked);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzCheckbox"], Object.assign({}, props, {
    checked: values[name],
    onChange: onChange,
    className: !defaultLabelSize ? 'small' : ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormError__WEBPACK_IMPORTED_MODULE_3__["default"], {
    field: name,
    customDisplay: errors[name]
  }));
}

/***/ }),

/***/ "./assets/js/form/InputSeries.tsx":
/*!****************************************!*\
  !*** ./assets/js/form/InputSeries.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputSeries; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _FormError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormError */ "./assets/js/form/FormError.tsx");
var _templateObject;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var InputContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-right: 1px;\n"])));
function joinValues(values) {
  return Object.values(values).join('');
}
function checkPattern(pattern, value) {
  return new RegExp(pattern).test(value);
}
function InputSeries(_ref) {
  var length = _ref.length,
    label = _ref.label,
    prefixName = _ref.prefixName,
    _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 1 : _ref$maxLength,
    _ref$placeholders = _ref.placeholders,
    placeholders = _ref$placeholders === void 0 ? [] : _ref$placeholders,
    _ref$pattern = _ref.pattern,
    pattern = _ref$pattern === void 0 ? '^[0-9]?$' : _ref$pattern,
    children = _ref.children;
  var defaultPlaceholder = '-';
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var _useDigit = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_6__["useDigit"])(length, prefixName),
    inputs = _useDigit.inputs;
  var inputsName = Object.keys(inputs).filter(function (name) {
    return name.includes("".concat(prefixName, "_"));
  });
  var formikContext = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
  var handleChange = formikContext.handleChange,
    values = formikContext.values,
    setValues = formikContext.setValues,
    setFieldValue = formikContext.setFieldValue,
    errors = formikContext.errors,
    setErrors = formikContext.setErrors,
    validateField = formikContext.validateField;
  var hasError = !!errors[prefixName];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var callback = function callback(e) {
      var relatedTarget = e.relatedTarget;
      if (relatedTarget === null) {
        validateField(prefixName);
      }
    };
    Object.values(inputs).forEach(function (input) {
      var _a;
      (_a = input.current) === null || _a === void 0 ? void 0 : _a.addEventListener('blur', callback);
    });
    return function () {
      Object.values(inputs).forEach(function (input) {
        var _a;
        (_a = input.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('blur', callback);
      });
    };
  }, []);
  var onChange = function onChange(e) {
    var _a;
    var _e$target = e.target,
      value = _e$target.value,
      name = _e$target.name;
    var nextIndex = inputsName.indexOf(name) + 1;
    var nextRefIndex = "".concat(prefixName, "_").concat(nextIndex);
    var valuesToJoin = Object.fromEntries(inputsName.map(function (name) {
      return [name, values[name]];
    }).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        value = _ref3[1];
      return value;
    }));
    valuesToJoin[name] = value;
    if (!checkPattern(pattern, value)) {
      return;
    }
    if (value.length <= maxLength) {
      setErrors({});
      handleChange(e);
      setFieldValue(prefixName, joinValues(valuesToJoin));
    }
    if (nextIndex < length && value.length === maxLength) {
      (_a = inputs[nextRefIndex].current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  };
  var onPaste = function onPaste(e) {
    var name = e.target.name;
    if (name === "".concat(prefixName, "_0")) {
      var valuePaste = e.clipboardData.getData('Text').split('');
      var checkEveryValues = valuePaste.every(function (value) {
        return checkPattern(pattern, value);
      });
      if (!checkEveryValues) {
        return;
      }
      var concatValues = Object.fromEntries(valuePaste.map(function (value, index) {
        return ["".concat(prefixName, "_").concat(index), value];
      }));
      setValues(Object.assign(Object.assign({}, values), concatValues));
      setFieldValue(prefixName, joinValues(concatValues));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    tag: "label"
  }, label)), Object.keys(inputs).map(function (name, key) {
    var inputContainerClassNames = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({
      'mr-lg-2': key < length - 1
    });
    var placeholder = t(placeholders[key]) || defaultPlaceholder;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer, {
      className: inputContainerClassNames,
      key: name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      ref: inputs[name],
      variant: "outlined",
      name: name,
      onChange: onChange,
      onPaste: onPaste,
      value: values[name] || '',
      type: "text",
      placeholder: placeholder,
      className: "pr-0"
    }));
  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    field: prefixName,
    customDisplay: hasError
  }));
}

/***/ }),

/***/ "./assets/js/form/MandateForm.tsx":
/*!****************************************!*\
  !*** ./assets/js/form/MandateForm.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MandateForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ez-components/modules/Tips */ "./assets/js/ez-components/modules/Tips.jsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_form_InputSeries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/form/InputSeries */ "./assets/js/form/InputSeries.tsx");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_models_InputSeries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/models/InputSeries */ "./assets/js/models/InputSeries.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/models */ "./assets/js/models/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/pages/payment/hooks/usePaymentParams */ "./assets/js/pages/payment/hooks/usePaymentParams.ts");
/* harmony import */ var _InputCheckbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./InputCheckbox */ "./assets/js/form/InputCheckbox.tsx");
/* harmony import */ var _app_hooks_useNewOtp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/hooks/useNewOtp */ "./assets/js/hooks/useNewOtp.ts");
/* harmony import */ var _app_pages_payment_hooks_usePostDocapostSendOtp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/pages/payment/hooks/usePostDocapostSendOtp */ "./assets/js/pages/payment/hooks/usePostDocapostSendOtp.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _mandate_form_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mandate-form.scss */ "./assets/js/form/mandate-form.scss");
/* harmony import */ var _mandate_form_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mandate_form_scss__WEBPACK_IMPORTED_MODULE_17__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


















var Icon = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"])(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__["SzIcon"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: var(--gray);\n  font-size: 1.125rem;\n"])));
var prefixName = 'input';
var checkBoxName = 'opt-in';
function MandateForm(_a) {
  var onSubmit = _a.onSubmit,
    props = __rest(_a, ["onSubmit"]);
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var initialValues = _defineProperty({
    input: ''
  }, checkBoxName, false);
  var validationSchema = Object(_app_models_InputSeries__WEBPACK_IMPORTED_MODULE_9__["InputSeriesSchema"])({
    name: prefixName
  }).shape(_defineProperty({}, checkBoxName, Object(_app_models__WEBPACK_IMPORTED_MODULE_10__["checkBoxValidation"])(t('payment.sign_mandate.form.validation_error'))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContent, Object.assign({}, props)));
}
var FormContent = function FormContent(_ref) {
  var errorReset = _ref.errorReset,
    setErrorReset = _ref.setErrorReset,
    onPrevClick = _ref.onPrevClick,
    label = _ref.label,
    loadingSubmit = _ref.loadingSubmit,
    mobilePhone = _ref.mobilePhone;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_16__["useGA"])(),
    track = _useGA.track;
  var _usePaymentParams = Object(_app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    isRouteEtip = _usePaymentParams.isRouteEtip;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])(),
    handleSubmit = _useFormikContext.handleSubmit,
    resetForm = _useFormikContext.resetForm;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (errorReset) {
      track('PAYMENT_7');
    }
  }, [errorReset]);
  var inputSeries = {
    prefixName: prefixName,
    length: 6,
    label: t('payment.sign_mandate.form.code_label')
  };
  var previousButton = {
    label: t('go_back'),
    arrow: "true",
    enabled: true,
    onClick: onPrevClick
  };
  var nextButton = {
    label: label || t('payment.sign_mandate.form.btn_submit'),
    align: 'right',
    loader: loadingSubmit
  };
  var _a = Object(_app_hooks_useNewOtp__WEBPACK_IMPORTED_MODULE_14__["default"])(mobilePhone),
    loadingResetNewOtp = _a.isLoading,
    apiNewOpt = __rest(_a, ["isLoading"]);
  var _b = Object(_app_pages_payment_hooks_usePostDocapostSendOtp__WEBPACK_IMPORTED_MODULE_15__["default"])(),
    loadingResetSendOtp = _b.isLoading,
    postDocapostSendOtp = __rest(_b, ["isLoading"]);
  var params = {
    sendBack: 'true'
  };
  var onReset = function onReset() {
    isRouteEtip ? postDocapostSendOtp.mutate(params, {
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        if ((data === null || data === void 0 ? void 0 : data.message) === _app_constants__WEBPACK_IMPORTED_MODULE_11__["CODES"].OK) {
          resetForm();
          setErrorReset(false);
        } else {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].PAYMENT.ERROR_ETIP);
        }
      }
    }) : apiNewOpt.mutate();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    "data-cy": "mandate-form",
    onSubmit: handleSubmit,
    className: "digit-form pt-3 row w-100 m-0 no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_InputSeries__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, inputSeries), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__["SzButton"], {
    onClick: onReset,
    className: "cy-btn-reset-index ml-0 ml-sm-4 pl-0",
    variant: "text",
    icon: "synchronize-arrow-1",
    loader: loadingResetNewOtp || loadingResetSendOtp
  }, t('payment.sign_mandate.form.btn_retry'))), errorReset && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__["SzTypographie"], {
    tag: "div",
    variant: "caption",
    color: "danger",
    className: "w-100"
  }, t('payment.sign_mandate.error_otp')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_4__["Separator"], {
    horizontal: true,
    className: "my-2 my-lg-4 bg-gray-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    icon: "information-circle",
    variant: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__["SzTypographie"], {
    tag: "div",
    variant: "caption",
    size: "M",
    className: "ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__["SzTypographie"], {
    className: "mb-0"
  }, t('payment.sign_mandate.help')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mb-0 pl-3 ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__["SzTypographie"], {
    tag: "li"
  }, t('payment.sign_mandate.help_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__["SzTypographie"], {
    tag: "li"
  }, t('payment.sign_mandate.help_2'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-4 mt-lg-5 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputCheckbox__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: checkBoxName,
    name: checkBoxName,
    label: t('payment.sign_mandate.form.validation_label')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    previous: previousButton,
    next: nextButton
  }));
};

/***/ }),

/***/ "./assets/js/form/mandate-form.scss":
/*!******************************************!*\
  !*** ./assets/js/form/mandate-form.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/hooks/useNewOtp.ts":
/*!**************************************!*\
  !*** ./assets/js/hooks/useNewOtp.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useNewOtp; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");





function useNewOtp(mobilePhone) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])(),
    resetForm = _useFormikContext.resetForm;
  var matchMoveIn = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useRouteMatch"])(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].SUBSCRIBE_FULL);
  var url = matchMoveIn ? _app_constants__WEBPACK_IMPORTED_MODULE_4__["API"].MOVE_IN.NEW_OTP : _app_constants__WEBPACK_IMPORTED_MODULE_4__["API"].PAYMENT.GET_PAYMENT_NEW_OPT;
  var pathname = matchMoveIn ? _app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].MOVE_IN.ERROR_URL : _app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].PAYMENT.ERROR;
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__["default"].get(url.concat('?mobilePhone=', encodeURIComponent(mobilePhone)));
  }, {
    onSuccess: function onSuccess(_ref) {
      var data = _ref.data;
      if ((data === null || data === void 0 ? void 0 : data.message) === _app_constants__WEBPACK_IMPORTED_MODULE_4__["CODES"].OK) {
        resetForm();
      } else {
        history.push(pathname);
      }
    }
  });
}

/***/ }),

/***/ "./assets/js/hooks/useSetOtp.ts":
/*!**************************************!*\
  !*** ./assets/js/hooks/useSetOtp.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSetOtp; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");


function useSetOtp(_ref) {
  var url = _ref.url,
    onSuccess = _ref.onSuccess,
    onError = _ref.onError;
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function (params) {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post(url, params);
  }, {
    onSuccess: onSuccess,
    onError: onError
  });
}

/***/ }),

/***/ "./assets/js/models/InputSeries.ts":
/*!*****************************************!*\
  !*** ./assets/js/models/InputSeries.ts ***!
  \*****************************************/
/*! exports provided: InputSeriesSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSeriesSchema", function() { return InputSeriesSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var defaultLength = 6;
var defaultError = 'models.codeSchema.defaultError';
var defaultRegex = /^[0-9]+$/;
function InputSeriesSchema(_ref) {
  var name = _ref.name,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? defaultError : _ref$error,
    _ref$regex = _ref.regex,
    regex = _ref$regex === void 0 ? defaultRegex : _ref$regex,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? defaultLength : _ref$length;
  return yup__WEBPACK_IMPORTED_MODULE_0__["object"](Object.assign(Object.assign({}, getSeriesSchema({
    length: length,
    regex: regex,
    error: error,
    name: name
  })), _defineProperty({}, name, yup__WEBPACK_IMPORTED_MODULE_0__["string"]().length(length, error).required(error))));
}
function getSeriesSchema(_ref2) {
  var _ref2$length = _ref2.length,
    length = _ref2$length === void 0 ? defaultLength : _ref2$length,
    _ref2$regex = _ref2.regex,
    regex = _ref2$regex === void 0 ? defaultRegex : _ref2$regex,
    _ref2$error = _ref2.error,
    error = _ref2$error === void 0 ? defaultError : _ref2$error,
    name = _ref2.name;
  var inputs = {};
  for (var index = 1; index < length; index++) {
    var key = "".concat(name, "_").concat(index);
    inputs[key] = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(regex, 'Valeur incorrecte').min(1, error).required(error);
  }
  return inputs;
}

/***/ }),

/***/ "./assets/js/pages/payment/hooks/usePaymentParams.ts":
/*!***********************************************************!*\
  !*** ./assets/js/pages/payment/hooks/usePaymentParams.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePaymentParams; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants/index */ "./assets/js/constants/index.ts");



function usePaymentParams() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
    search = _useLocation.search,
    pathname = _useLocation.pathname;
  var params = new URLSearchParams(search);
  var isRouteEtip = pathname.includes(_app_constants_index__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.ETIP);
  var paymentMode = isRouteEtip ? _app_constants_index__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE_ETIP"] : params.get('payment_mode');
  var eFacture = 'true' === params.get('e-facture');
  var isWithMandat = 'true' === params.get('mandat');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (paymentMode && ![_app_constants_index__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE_MENSU"], _app_constants_index__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE_PRELEV"], _app_constants_index__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE_ETIP"]].includes(paymentMode)) {
      history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["generatePath"])(_app_constants_index__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT_INDEX));
    }
  }, []);
  return {
    paymentMode: paymentMode,
    eFacture: eFacture,
    isWithMandat: isWithMandat,
    isRouteEtip: isRouteEtip
  };
}

/***/ }),

/***/ "./assets/js/pages/payment/hooks/usePostDocapostSendOtp.ts":
/*!*****************************************************************!*\
  !*** ./assets/js/pages/payment/hooks/usePostDocapostSendOtp.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePostDocapostSendOtp; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");




function usePostDocapostSendOtp() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function (params) {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API"].DOCAPOSTE.SEND_OTP, params);
  }, {
    onError: function onError() {
      history.push({
        pathname: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].PAYMENT.ERROR_ETIP
      });
    }
  });
}

/***/ })

}]);