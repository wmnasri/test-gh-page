(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/js/components/Error/index.jsx":
/*!**********************************************!*\
  !*** ./assets/js/components/Error/index.jsx ***!
  \**********************************************/
/*! exports provided: GlobalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalError", function() { return GlobalError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




var GlobalError = function GlobalError(_ref) {
  var children = _ref.children,
    context = _ref.context;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(), t('date.short_date'));
  var time = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(), t('date.hour'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3"
  }, t('errors.global_date', {
    context: 'proofOfResidence',
    date: date,
    time: time
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "mb-4 mb-lg-5 new-line"
  }, t('errors.global_text', {
    context: context
  })), children);
};

/***/ }),

/***/ "./assets/js/components/RegisteredIbanBlock/index.tsx":
/*!************************************************************!*\
  !*** ./assets/js/components/RegisteredIbanBlock/index.tsx ***!
  \************************************************************/
/*! exports provided: RegisteredIbanBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredIbanBlock", function() { return RegisteredIbanBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");



var RegisteredIbanBlock = function RegisteredIbanBlock(_ref) {
  var showOwner = _ref.showOwner,
    holderValue = _ref.holderValue,
    ibanValue = _ref.ibanValue;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-10 bg-gray-100 rounded-2 p-3 py-lg-3 px-lg-4",
    "data-cy": "registered-iban"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-lg-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "iban-icon bg-white rounded-circle d-flex align-items-center justify-content-center mb-3 mb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "credit-card-1",
    variant: "line"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "regular",
    className: "text-dark mb-1"
  }, t('IBAN.registeredIban.bankInfos')), showOwner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters mb-1",
    "data-cy": "registered-iban-owner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "M",
    className: "mb-0"
  }, t('IBAN.registeredIban.owner')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "bold",
    className: "ml-1 mb-0"
  }, holderValue)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters",
    "data-cy": "registered-iban-iban"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "M",
    className: "mb-0",
    tag: "span"
  }, t('IBAN.registeredIban.iban')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    tag: "span",
    variant: "body",
    size: "M",
    weight: "bold",
    className: "ml-1 mb-0"
  }, ibanValue))))));
};

/***/ }),

/***/ "./assets/js/components/tsme-react-components/components/IbanForm/IbanInput.jsx":
/*!**************************************************************************************!*\
  !*** ./assets/js/components/tsme-react-components/components/IbanForm/IbanInput.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_IbanInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/IbanInput */ "./assets/js/components/tsme-react-components/models/IbanInput.tsx");
/* harmony import */ var _Iban_Iban_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Iban/Iban.scss */ "./assets/js/components/tsme-react-components/components/Iban/Iban.scss");
/* harmony import */ var _Iban_Iban_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Iban_Iban_scss__WEBPACK_IMPORTED_MODULE_5__);
var _excluded = ["schema", "placeholder"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function IbanInput(_ref, ref) {
  var onChange = _ref.onChange,
    variant = _ref.variant,
    setIbanFieldFocused = _ref.setIbanFieldFocused;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])(),
    handleBlur = _useFormikContext.handleBlur,
    handleChange = _useFormikContext.handleChange,
    values = _useFormikContext.values,
    errors = _useFormikContext.errors,
    setErrors = _useFormikContext.setErrors,
    setFieldValue = _useFormikContext.setFieldValue,
    setFieldTouched = _useFormikContext.setFieldTouched,
    validateForm = _useFormikContext.validateForm;
  var iban_props = _models_IbanInput__WEBPACK_IMPORTED_MODULE_4__["default"];
  var refsInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var memoRefsInput = {};
    for (var _i = 0, _Object$keys = Object.keys(iban_props); _i < _Object$keys.length; _i++) {
      var name = _Object$keys[_i];
      if (name === 'iban_field_1') {
        memoRefsInput[name] = ref;
      } else memoRefsInput[name] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    }
    return memoRefsInput;
  }, []);
  var onCustomChange = function onCustomChange(e) {
    var _e$target = e.target,
      value = _e$target.value,
      name = _e$target.name;
    e.target.value = value.toUpperCase().replace(/\s+/g, '');
    var regExp = /^.{4}$/;
    var nextIndex = Object.keys(iban_props).indexOf(name) + 2;
    var inputLength = Object.keys(iban_props).length;
    var nextRefIndex = "iban_field_".concat(nextIndex);
    if (name.includes('iban_field_7') && value.length > 3 || name.includes('iban_field_') && value.length > 4) {
      return;
    }

    // Filter errors containing "iban_field_"
    var errorsWithoutIban = Object.keys(errors).filter(function (error) {
      return !error.includes('iban_field_');
    }).reduce(function (obj, key) {
      return Object.assign(obj, _defineProperty({}, key, errors[key]));
    }, {});
    setErrors(errorsWithoutIban);
    setIbanFieldFocused(false);
    handleChange(e);
    onChange();
    if (regExp.test(value)) {
      var nextValue = refsInput[nextRefIndex].current.value;
      if (nextIndex < inputLength + 1 && value.length > 0 && !nextValue) {
        setIbanFieldFocused(true);
        refsInput[nextRefIndex].current.focus();
      }
    }
  };
  var onPaste = function onPaste(e) {
    var name = e.target.name;
    if (name === 'iban_field_1') {
      var valuePaste = e.clipboardData.getData('Text');
      var formattedValue = valuePaste.replace(/\s+/g, '').toUpperCase().substring(0, 27);
      var splitsValues = formattedValue.match(/.{1,4}/g);
      var toCheck = splitsValues === null || splitsValues === void 0 ? void 0 : splitsValues.map(function (value, index) {
        var iban_name = "iban_field_".concat(index + 1);
        setFieldTouched(iban_name, true, true);
        setFieldValue(iban_name, value);
        return [iban_name, value];
      });
      validateForm(_objectSpread(_objectSpread({}, values), Object.fromEntries(toCheck))).then(function () {
        return refsInput['iban_field_7'].current.focus();
      });
    }
  };
  return Object.entries(iban_props).map(function (_ref2, i) {
    var _ref3 = _slicedToArray(_ref2, 2),
      name = _ref3[0],
      props = _ref3[1];
    var schema = props.schema,
      placeholder = props.placeholder,
      rest = _objectWithoutProperties(props, _excluded);
    var IbanInputClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()("cy-input-".concat(i + 1, "-iban iban-input col-3 col-md-1 px-1 mx-0"), {
      'variant-iban': variant
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: name,
      className: IbanInputClassNames
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzInput"], _extends({
      className: "border-btn-disabled",
      name: name,
      id: name,
      value: values[name],
      placeholder: placeholder,
      ref: refsInput[name],
      autocomplete: "off",
      onBlur: handleBlur,
      onChange: onCustomChange,
      onPaste: onPaste
    }, rest)));
  });
}));

/***/ }),

/***/ "./assets/js/components/tsme-react-components/components/IbanForm/InternationalIbanInput.jsx":
/*!***************************************************************************************************!*\
  !*** ./assets/js/components/tsme-react-components/components/IbanForm/InternationalIbanInput.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _pages_payback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pages/payback */ "./assets/js/pages/payback/index.jsx");
/* harmony import */ var _pages_payment_methods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pages/payment-methods */ "./assets/js/pages/payment-methods/index.tsx");







/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function InternationalIbanInput(_, ref) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])(),
    values = _useFormikContext.values,
    setFieldValue = _useFormikContext.setFieldValue,
    handleBlur = _useFormikContext.handleBlur,
    touched = _useFormikContext.touched,
    errors = _useFormikContext.errors;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_payback__WEBPACK_IMPORTED_MODULE_5__["PaybackContext"]),
    setIsErrorValidation = _useContext.setIsErrorValidation;
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_payment_methods__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodsContext"]),
    dispatch = _useContext2.dispatch;
  var handleIbanInputChange = function handleIbanInputChange(e) {
    if (_pages_payback__WEBPACK_IMPORTED_MODULE_5__["PaybackContext"]) {
      setIsErrorValidation(false);
    }
    if (_pages_payment_methods__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodsContext"]) {
      dispatch({
        type: 'errorIban',
        payload: ''
      });
    }
    var _e$target = e.target,
      value = _e$target.value,
      name = _e$target.name;
    var formattedValue = value.replace(/\s+/g, '').toUpperCase();
    setFieldValue(name, formattedValue);
    if (formattedValue.length >= 34) {
      setFieldValue(name, formattedValue.slice(0, 34));
    }
  };
  var setInputRef = function setInputRef(element) {
    ref.current = element;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9 px-0 mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sz-form-group form-group-outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sz-line-height-normal mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sz-typo-body font-family-regular text-primary-dark"
  }, t('IBAN.addIban.iban_label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "iban",
    className: "iban-input form-control rounded-1",
    mask: "#### #### #### #### #### #### #### #### ##",
    placeholder: "---- ---- ---- ---- ---- ---- ----",
    maskChar: "",
    onChange: handleIbanInputChange,
    onBlur: handleBlur,
    value: values.iban || '',
    formatChars: {
      '#': '^.'
    },
    autoComplete: "off",
    id: "international-iban-input",
    inputRef: setInputRef
  }))), errors.iban && touched.iban && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "error-iban",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "danger",
    className: "mb-2"
  }, errors.iban), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, errors.iban)));
}));

/***/ }),

/***/ "./assets/js/components/tsme-react-components/components/IbanForm/OwnerNameInput.jsx":
/*!*******************************************************************************************!*\
  !*** ./assets/js/components/tsme-react-components/components/IbanForm/OwnerNameInput.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OwnerNameInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/Utils */ "./assets/js/services/Utils.js");





function OwnerNameInput() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])(),
    values = _useFormikContext.values,
    touched = _useFormikContext.touched,
    handleBlur = _useFormikContext.handleBlur,
    errors = _useFormikContext.errors,
    setFieldValue = _useFormikContext.setFieldValue;
  var handleNameInputChange = function handleNameInputChange(e) {
    var _e$target = e.target,
      value = _e$target.value,
      name = _e$target.name;
    setFieldValue(name, Object(_services_Utils__WEBPACK_IMPORTED_MODULE_4__["capitalizeValue"])(value));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    variant: "outlined",
    name: "ownerName",
    value: values.ownerName,
    onChange: handleNameInputChange,
    valid: !errors.ownerName,
    label: t('IBAN.addIban.owner_label'),
    placeholder: t('IBAN.addIban.owner_label'),
    onBlur: handleBlur,
    autocomplete: "name"
  }), errors.ownerName && touched.ownerName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "error-ownerName",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "danger",
    className: "mb-2"
  }, errors.ownerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, errors.ownerName)));
}

/***/ }),

/***/ "./assets/js/components/tsme-react-components/components/IbanForm/iban-form-model.jsx":
/*!********************************************************************************************!*\
  !*** ./assets/js/components/tsme-react-components/components/IbanForm/iban-form-model.jsx ***!
  \********************************************************************************************/
/*! exports provided: nameInputSchema, ListSepaLink, internationalIbanInputSchema, ibanInputSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameInputSchema", function() { return nameInputSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSepaLink", function() { return ListSepaLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internationalIbanInputSchema", function() { return internationalIbanInputSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ibanInputSchema", function() { return ibanInputSchema; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var ibantools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ibantools */ "./node_modules/ibantools/jsnext/ibantools.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _Links_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__);
var _footer$links_bottom, _footer$links_bottom$;








var _window$tsme_data = window.tsme_data,
  ibanPrefixList = _window$tsme_data.ibanPrefixList,
  footer = _window$tsme_data.footer;
var CGULink = footer === null || footer === void 0 ? void 0 : (_footer$links_bottom = footer.links_bottom) === null || _footer$links_bottom === void 0 ? void 0 : (_footer$links_bottom$ = _footer$links_bottom.credits_url) === null || _footer$links_bottom$ === void 0 ? void 0 : _footer$links_bottom$.link;
var listSepaAnchorLink = "".concat(CGULink, "#ListeSEPA");
var regexSpecialCharacters = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
var ibanFieldReg = /^[A-Za-z0-9\s]{4}$/;
var nameInputSchema = function nameInputSchema(t) {
  return yup__WEBPACK_IMPORTED_MODULE_1__["object"]().shape({
    ownerName: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required(t('IBAN.errors.mandatory')).matches(/^[A-Za-z0-9\s]{0,30}$/, t('IBAN.errors.name'))
  });
};
var ListSepaLink = function ListSepaLink() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzTypographie"], {
    weight: "medium",
    className: "text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
    i18nKey: 'IBAN.errors.unauthorized_country',
    components: {
      redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Links_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
        decorate: true,
        to: listSepaAnchorLink,
        target: "_blank",
        className: "text-danger"
      })
    }
  }));
};
var internationalIbanInputSchema = function internationalIbanInputSchema(t) {
  return yup__WEBPACK_IMPORTED_MODULE_1__["object"]().shape({
    iban: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().test({
      name: 'iban-valid',
      test: function test(val) {
        if (val) {
          if (val.length > 0) {
            var hasSpecialCharacter = regexSpecialCharacters.test(val);
            if (hasSpecialCharacter) {
              return this.createError({
                message: t('IBAN.errors.special_characters')
              });
            }
          }
          if (val.length >= 2) {
            var countryCode = val.slice(0, 2);
            var isIbanSepa = ibanPrefixList.includes(countryCode);
            if (!isIbanSepa) {
              return this.createError({
                message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListSepaLink, null)
              });
            }
            var formattedIbanValue = ibantools__WEBPACK_IMPORTED_MODULE_3__["electronicFormatIBAN"](val);
            if (!ibantools__WEBPACK_IMPORTED_MODULE_3__["isValidIBAN"](formattedIbanValue)) {
              return this.createError({
                message: t('IBAN.errors.invalid')
              });
            }
          }
        }
        return true;
      }
    }).required(t('IBAN.errors.mandatory'))
  });
};
var ibanInputSchema = function ibanInputSchema(t) {
  return yup__WEBPACK_IMPORTED_MODULE_1__["object"]({
    iban_field_1: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().test({
      name: 'iban-1',
      test: function test(val) {
        if (val) {
          var isIbanStartOk = new RegExp("^FR").test(val);
          var isIbanLength = new RegExp("^[A-Z0-9s]{4}").test(val);
          if (!isIbanStartOk || !isIbanLength) {
            return this.createError({
              message: t('IBAN.errors.iban', {
                length: _constants__WEBPACK_IMPORTED_MODULE_4__["IBAN_LENGTH"]
              })
            });
          }
        }
        return true;
      }
    }),
    iban_field_2: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().matches(ibanFieldReg, t('IBAN.errors.iban', {
      length: _constants__WEBPACK_IMPORTED_MODULE_4__["IBAN_LENGTH"]
    })).required(),
    iban_field_3: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().matches(ibanFieldReg, t('IBAN.errors.iban', {
      length: _constants__WEBPACK_IMPORTED_MODULE_4__["IBAN_LENGTH"]
    })).required(),
    iban_field_4: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().matches(ibanFieldReg, t('IBAN.errors.iban', {
      length: _constants__WEBPACK_IMPORTED_MODULE_4__["IBAN_LENGTH"]
    })).required(),
    iban_field_5: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().matches(ibanFieldReg, t('IBAN.errors.iban', {
      length: _constants__WEBPACK_IMPORTED_MODULE_4__["IBAN_LENGTH"]
    })).required(),
    iban_field_6: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().matches(ibanFieldReg, t('IBAN.errors.iban', {
      length: _constants__WEBPACK_IMPORTED_MODULE_4__["IBAN_LENGTH"]
    })).required(),
    iban_field_7: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().matches(/^[A-Za-z0-9\s]{3}$/, t('IBAN.errors.iban', {
      length: _constants__WEBPACK_IMPORTED_MODULE_4__["IBAN_LENGTH"]
    })).required()
  });
};

/***/ }),

/***/ "./assets/js/components/tsme-react-components/components/IbanForm/index.jsx":
/*!**********************************************************************************!*\
  !*** ./assets/js/components/tsme-react-components/components/IbanForm/index.jsx ***!
  \**********************************************************************************/
/*! exports provided: default, DisplayError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IbanForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayError", function() { return DisplayError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _pages_payback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pages/payback */ "./assets/js/pages/payback/index.jsx");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _Links_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _IbanInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IbanInput */ "./assets/js/components/tsme-react-components/components/IbanForm/IbanInput.jsx");
/* harmony import */ var _InternationalIbanInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InternationalIbanInput */ "./assets/js/components/tsme-react-components/components/IbanForm/InternationalIbanInput.jsx");
/* harmony import */ var _OwnerNameInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OwnerNameInput */ "./assets/js/components/tsme-react-components/components/IbanForm/OwnerNameInput.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function IbanForm(_ref) {
  var _ref$displayOwnerName = _ref.displayOwnerName,
    displayOwnerName = _ref$displayOwnerName === void 0 ? false : _ref$displayOwnerName,
    isInternational = _ref.isInternational,
    displayInternationalIban = _ref.displayInternationalIban,
    setDisplayInternationalIban = _ref.setDisplayInternationalIban,
    validationError = _ref.validationError,
    resetValidationError = _ref.resetValidationError,
    disabledInternationalIban = _ref.disabledInternationalIban;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])(),
    resetForm = _useFormikContext.resetForm,
    values = _useFormikContext.values,
    touched = _useFormikContext.touched,
    errors = _useFormikContext.errors;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    ibanFieldFocused = _useState2[0],
    setIbanFieldFocused = _useState2[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_payback__WEBPACK_IMPORTED_MODULE_5__["PaybackContext"]),
    setIsErrorValidation = _useContext.setIsErrorValidation,
    isErrorValidation = _useContext.isErrorValidation,
    ibanError = _useContext.ibanError;
  var ibanRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var interIbanRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  // Filter errors containing "iban_field_"
  var touchedIbanList = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_6__["filterByKeys"])(touched, 'iban_field_');
  var errorsIbanList = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_6__["filterByKeys"])(errors, 'iban_field_');
  var isIbanTouched = Object.keys(touchedIbanList).length > 0;
  var isErrorIban = Object.keys(errorsIbanList).length > 0;
  var isInterIbanFocused = interIbanRef.current === document.activeElement;
  var isIbanFieldFocused = ibanRef.current === document.activeElement;
  var ResetErrorOnIbanChange = function ResetErrorOnIbanChange() {
    if (validationError) {
      resetValidationError();
    }
    setIsErrorValidation(false);
  };
  var onClick = function onClick() {
    resetForm({
      values: _objectSpread(_objectSpread({}, values), {}, {
        iban: '',
        iban_field_1: '',
        iban_field_2: '',
        iban_field_3: '',
        iban_field_4: '',
        iban_field_5: '',
        iban_field_6: '',
        iban_field_7: ''
      })
    });
    ResetErrorOnIbanChange();
    setDisplayInternationalIban(function (prev) {
      return !prev;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, displayOwnerName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OwnerNameInput__WEBPACK_IMPORTED_MODULE_10__["default"], null)), displayInternationalIban ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InternationalIbanInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: interIbanRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisplayError, {
    condition: !isInterIbanFocused && (isErrorValidation || ibanError || validationError)
  }, t('IBAN.errors.incorrect'))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sz-form-group__label sz-line-height-normal mb-2 mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "regular",
    tag: "span",
    className: "text-primary-dark"
  }, t('IBAN.addIban.iban_label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IbanInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    setIbanFieldFocused: setIbanFieldFocused,
    onChange: ResetErrorOnIbanChange,
    ref: ibanRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisplayError, {
    condition: !ibanFieldFocused && !isIbanFieldFocused && isIbanTouched && isErrorIban
  }, t('IBAN.errors.iban', {
    length: _constants__WEBPACK_IMPORTED_MODULE_4__["IBAN_LENGTH"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisplayError, {
    condition: !ibanFieldFocused && !isIbanFieldFocused && (isErrorValidation || ibanError || validationError)
  }, t('IBAN.errors.incorrect')))), isInternational && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], {
    onClick: onClick,
    variant: "text",
    isDisabled: disabledInternationalIban,
    className: "sz-typo-caption md pl-0",
    type: "button",
    "data-cy": "iban-switch-display"
  }, displayInternationalIban ? t('IBAN.international.french') : t('IBAN.international.foreign'))));
}
var DisplayError = function DisplayError(_ref2) {
  var children = _ref2.children,
    condition = _ref2.condition;
  if (!condition) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-0",
    "data-cy": "error-iban-validation",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    variant: "caption",
    color: "danger",
    className: "mb-2"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, children));
};

/***/ }),

/***/ "./assets/js/ez-components/paymentMethods/PaymentMethodBlock.tsx":
/*!***********************************************************************!*\
  !*** ./assets/js/ez-components/paymentMethods/PaymentMethodBlock.tsx ***!
  \***********************************************************************/
/*! exports provided: PaymentMethodBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodBlock", function() { return PaymentMethodBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);


var PaymentMethodBlock = function PaymentMethodBlock(_ref) {
  var label = _ref.label,
    children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-10 border border-1 border-expert-blue rounded-3 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pr-3 pr-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H4",
    size: "L",
    weight: "medium",
    className: "mb-1"
  }, label), children)));
};

/***/ }),

/***/ "./assets/js/form/PhoneForm/PhoneInput.tsx":
/*!*************************************************!*\
  !*** ./assets/js/form/PhoneForm/PhoneInput.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InternationalPhoneInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-phone-number-input */ "./node_modules/react-phone-number-input/min/index.js");
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-phone-number-input/style.css */ "./node_modules/react-phone-number-input/style.css");
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_phone_number_input_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-number-input/flags */ "./node_modules/react-phone-number-input/flags/index.js");
/* harmony import */ var react_phone_number_input_locale_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-phone-number-input/locale/fr */ "./node_modules/react-phone-number-input/locale/fr.json");
var react_phone_number_input_locale_fr__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! react-phone-number-input/locale/fr */ "./node_modules/react-phone-number-input/locale/fr.json", 1);
/* harmony import */ var _phone_input_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phone-input.scss */ "./assets/js/form/PhoneForm/phone-input.scss");
/* harmony import */ var _phone_input_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_phone_input_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function InternationalPhoneInput(_ref) {
  var info = _ref.info,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? 'phoneNumber' : _ref$name,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'phoneNumber.label' : _ref$label,
    _ref$onlyFrenchMobile = _ref.onlyFrenchMobile,
    onlyFrenchMobile = _ref$onlyFrenchMobile === void 0 ? false : _ref$onlyFrenchMobile;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showInfo = _useState2[0],
    setShowInfo = _useState2[1];
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
    t = _useTranslation.t;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useFormikContext"])(),
    values = _useFormikContext.values,
    setFieldValue = _useFormikContext.setFieldValue,
    handleBlur = _useFormikContext.handleBlur,
    handleChange = _useFormikContext.handleChange,
    touched = _useFormikContext.touched,
    errors = _useFormikContext.errors;
  var handlePhoneInputChange = function handlePhoneInputChange(val) {
    setFieldValue(name, val);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9 px-0 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sz-form-group form-group-outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mb-2",
    htmlFor: name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzTypographie"], {
    weight: "regular",
    className: "text-primary-dark",
    tag: "span"
  }, t(label)), info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onMouseEnter: function onMouseEnter() {
      return setShowInfo(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShowInfo(false);
    },
    onFocus: function onFocus() {
      return setShowInfo(true);
    },
    onBlur: function onBlur() {
      return setShowInfo(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzButton"], {
    className: "ml-1",
    variant: "text",
    icon: "information-circle",
    "aria-labelledby": "phone-info"
  })), showInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-2",
    id: "phone-info"
  }, info))), !onlyFrenchMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_phone_number_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    id: name,
    "aria-describedby": "phone-info",
    defaultCountry: "FR",
    countries: _constants__WEBPACK_IMPORTED_MODULE_9__["PHONE_WHITELIST"],
    labels: react_phone_number_input_locale_fr__WEBPACK_IMPORTED_MODULE_4__,
    international: true,
    placeholder: "Num\xE9ro de t\xE9l\xE9phone",
    flags: react_phone_number_input_flags__WEBPACK_IMPORTED_MODULE_3__["default"],
    value: values[name],
    onChange: handlePhoneInputChange,
    onBlur: handleBlur,
    numberInputProps: {
      className: 'pr-5 rounded-1 sz-typo-body text-primary-dark input-group'
    },
    limitMaxLength: true,
    addInternationalOption: false,
    countryCallingCodeEditable: false
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzInput"], {
    name: name,
    id: name,
    "aria-describedby": "phone-info",
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    variant: "outlined",
    aria: {
      describedById: 'cellPhone-info'
    }
  })), errors[name] && touched[name] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "error-phone-number",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzTypographie"], {
    variant: "caption",
    color: "danger",
    className: "mb-2"
  }, t("".concat(errors[name]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, errors[name])));
}

/***/ }),

/***/ "./assets/js/form/PhoneForm/model.js":
/*!*******************************************!*\
  !*** ./assets/js/form/PhoneForm/model.js ***!
  \*******************************************/
/*! exports provided: phoneNumberInputSchema, frenchMobilePhoneInputSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneNumberInputSchema", function() { return phoneNumberInputSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchMobilePhoneInputSchema", function() { return frenchMobilePhoneInputSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-phone-number-input */ "./node_modules/react-phone-number-input/min/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var mobileMatch = /^(?:(?:\+|00)33|0)\s*[6-7](?:[\s.-]*\d{2}){4}$/;
var phoneNumberInputSchema = function phoneNumberInputSchema(t) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'phoneNumber';
  return yup__WEBPACK_IMPORTED_MODULE_0__["object"](_defineProperty({}, name, yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(t('phoneNumber.errors.mandatory')).test('valid-phone-number', t('phoneNumber.errors.invalid'), function (value) {
    if (value) {
      return Object(react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__["isValidPhoneNumber"])(value);
    }
  })));
};
var frenchMobilePhoneInputSchema = function frenchMobilePhoneInputSchema() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'phoneNumber';
  return yup__WEBPACK_IMPORTED_MODULE_0__["object"](_defineProperty({}, name, yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('phoneNumber.errors.mandatory').matches(mobileMatch, 'phoneNumber.errors.invalid')));
};

/***/ }),

/***/ "./assets/js/form/PhoneForm/phone-input.scss":
/*!***************************************************!*\
  !*** ./assets/js/form/PhoneForm/phone-input.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/models/Civility.js":
/*!**************************************!*\
  !*** ./assets/js/models/Civility.js ***!
  \**************************************/
/*! exports provided: civilitySchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "civilitySchema", function() { return civilitySchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./assets/js/models/index.ts");



var civilitySchema = function civilitySchema(t) {
  return yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    civility: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(t('managePayments.form.errors.mandatory')),
    surname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(t('managePayments.form.errors.mandatory')).matches(___WEBPACK_IMPORTED_MODULE_2__["nameRegex"], t('managePayments.form.errors.surname')),
    name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(t('managePayments.form.errors.mandatory')).matches(___WEBPACK_IMPORTED_MODULE_2__["nameRegex"], t('managePayments.form.errors.name'))
  });
};

/***/ }),

/***/ "./assets/js/pages/payback/index.jsx":
/*!*******************************************!*\
  !*** ./assets/js/pages/payback/index.jsx ***!
  \*******************************************/
/*! exports provided: PaybackContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaybackContext", function() { return PaybackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tsme-react-components/components/IbanForm */ "./assets/js/components/tsme-react-components/components/IbanForm/index.jsx");
/* harmony import */ var _components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/tsme-react-components/components/IbanForm/iban-form-model */ "./assets/js/components/tsme-react-components/components/IbanForm/iban-form-model.jsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _components_Links_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Error */ "./assets/js/components/Error/index.jsx");
/* harmony import */ var _components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/background/BackgroundBubbles */ "./assets/js/components/background/BackgroundBubbles/index.tsx");
/* harmony import */ var _components_RegisteredIbanBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/RegisteredIbanBlock */ "./assets/js/components/RegisteredIbanBlock/index.tsx");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _payback_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payback.scss */ "./assets/js/pages/payback/payback.scss");
/* harmony import */ var _payback_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_payback_scss__WEBPACK_IMPORTED_MODULE_17__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["isLoading", "data", "isSuccess"],
  _excluded2 = ["ownerName", "iban"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var PaybackContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  setCodeValidation: function setCodeValidation() {},
  setShowEditIban: function setShowEditIban() {},
  setIsUpdateIbanAuthorized: function setIsUpdateIbanAuthorized() {},
  setIbanValue: function setIbanValue() {},
  setIsErrorValidation: function setIsErrorValidation() {},
  setIbanError: function setIbanError() {},
  ibanError: '',
  isErrorValidation: '',
  showEditIban: '',
  isUpdateIbanAuthorized: '',
  holderValue: '',
  ibanValue: ''
});
function Payback() {
  var _data$data;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showEditIban = _useState2[0],
    setShowEditIban = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    codeValidation = _useState4[0],
    setCodeValidation = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isUpdateIbanAuthorized = _useState6[0],
    setIsUpdateIbanAuthorized = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState8 = _slicedToArray(_useState7, 2),
    holderValue = _useState8[0],
    setHolderValue = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState10 = _slicedToArray(_useState9, 2),
    ibanValue = _useState10[0],
    setIbanValue = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isErrorValidation = _useState12[0],
    setIsErrorValidation = _useState12[1];
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState14 = _slicedToArray(_useState13, 2),
    ibanError = _useState14[0],
    setIbanError = _useState14[1];
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["useIsMobile"])();
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])('getBankInfos', function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_15__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_7__["API"].GET_BANK_INFOS);
    }, {
      onSuccess: function onSuccess(_ref) {
        var data = _ref.data;
        var response = data.content;
        var authorisation = response.authorisation,
          holder = response.holder,
          iban = response.iban,
          requestStatus = response.requestStatus,
          updatingIban = response.updatingIban,
          updatingHolder = response.updatingHolder;
        if (authorisation) {
          setIsUpdateIbanAuthorized(true);
        }
        if (!!requestStatus) {
          setHolderValue(updatingHolder);
          setIbanValue(updatingIban);
        } else {
          setHolderValue(holder);
          setIbanValue(iban);
        }
      }
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading,
    isError = _useQuery.isError;
  var content = (data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.content) || {};
  var requestStatus = content.requestStatus,
    holder = content.holder,
    iban = content.iban,
    updatingIban = content.updatingIban;
  var hasRequestStatus = !!requestStatus;
  var hasHolder = !!holder;
  var hasIban = !!iban;
  var isAddIban = !hasRequestStatus && !hasHolder && !hasIban;
  var isRegisteredIban = !hasRequestStatus && hasHolder && hasIban;
  var isValidateIban = hasRequestStatus && !!updatingIban || codeValidation === _constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK;
  var showIbanForm = isAddIban && !isValidateIban || showEditIban;
  var showError = isError || codeValidation === _constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].INVALID;
  var showRegisteredIban = isRegisteredIban && !showIbanForm && !isValidateIban && !showError;
  var showValidateIban = isValidateIban && !showIbanForm && !showError;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaybackContext.Provider, {
    value: {
      setCodeValidation: setCodeValidation,
      setShowEditIban: setShowEditIban,
      setIsUpdateIbanAuthorized: setIsUpdateIbanAuthorized,
      setIbanValue: setIbanValue,
      setIbanError: setIbanError,
      setIsErrorValidation: setIsErrorValidation,
      showEditIban: showEditIban,
      isUpdateIbanAuthorized: isUpdateIbanAuthorized,
      holderValue: holderValue,
      ibanValue: ibanValue,
      ibanError: ibanError,
      isErrorValidation: isErrorValidation
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_13__["BackgroundBubbles"], {
    id: "payback-container",
    type: "payback"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H1",
    size: isMobile ? 'L' : 'XL',
    align: "center",
    color: "light",
    weight: "black",
    className: "mb-4 text-uppercase"
  }, t('IBAN.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white rounded-3 position-relative mx-auto mb-lg-3 px-3 px-lg-6 py-4 py-lg-5",
    style: {
      maxWidth: 750
    }
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    width: 300,
    height: 28,
    className: "mb-3 mb-lg-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    width: isMobile ? 300 : 600,
    height: 100
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row-no-gutters mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    width: 200,
    height: 48
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showIbanForm && !showError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddUpdateIban, null), showRegisteredIban && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RegisteredIban, null), showValidateIban && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValidateIban, null), showError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IBANError, null)))));
}
var RegisteredIban = function RegisteredIban() {
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PaybackContext),
    holderValue = _useContext.holderValue,
    ibanValue = _useContext.ibanValue,
    setShowEditIban = _useContext.setShowEditIban;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-2"
  }, t('IBAN.registeredIban.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "body",
    size: "M",
    className: "text-dark mb-4"
  }, t('IBAN.registeredIban.subtitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegisteredIbanBlock__WEBPACK_IMPORTED_MODULE_14__["RegisteredIbanBlock"], {
    showOwner: true,
    holderValue: holderValue,
    ibanValue: ibanValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: function onClick() {
      setShowEditIban(true);
    }
  }, t('IBAN.updateIban.button')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "regular",
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: 'IBAN.registeredIban.deleteIban',
    components: {
      redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        decorate: true,
        to: _constants__WEBPACK_IMPORTED_MODULE_7__["CUSTOMER_SERVICE_URL"]
      })
    }
  })));
};
var AddUpdateIban = function AddUpdateIban() {
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation3.t;
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PaybackContext),
    showEditIban = _useContext2.showEditIban,
    setCodeValidation = _useContext2.setCodeValidation,
    setShowEditIban = _useContext2.setShowEditIban,
    setIsUpdateIbanAuthorized = _useContext2.setIsUpdateIbanAuthorized,
    setIbanValue = _useContext2.setIbanValue,
    setIsErrorValidation = _useContext2.setIsErrorValidation;
  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState16 = _slicedToArray(_useState15, 2),
    displayInternationalIban = _useState16[0],
    setDisplayInternationalIban = _useState16[1];
  var isIntranet = tsme_data.isIntranet === '1';
  var nameSchema = Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_9__["nameInputSchema"])(t);
  var validationSchema = displayInternationalIban ? nameSchema.concat(Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_9__["internationalIbanInputSchema"])(t)) : nameSchema.concat(Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_9__["ibanInputSchema"])(t));
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(function (IbanFormData) {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_15__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_7__["API"].VALIDATE_BANK_INFOS, IbanFormData);
    }, {
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        var message = data.message,
          content = data.content;
        var isIbanValid = _constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK === message;
        var isEditAuthorized = !!(content !== null && content !== void 0 && content.authorisation);
        var isUpdateOutOfTime = _constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].IBAN_72H === message;
        if (isIbanValid) {
          setIbanValue(content.iban);
          setCodeValidation(_constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK);
          setShowEditIban(false);
          if (isEditAuthorized) {
            setIsUpdateIbanAuthorized(true);
          } else setIsUpdateIbanAuthorized(false);
        } else if (isUpdateOutOfTime) {
          setCodeValidation(_constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].INVALID);
          setShowEditIban(false);
        }
      },
      onError: function onError(error) {
        var _error$response = error.response,
          status = _error$response.status,
          data = _error$response.data;
        var message = data.message;
        var KO_VALIDATION = [_constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].KO_COHERENCE, _constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].KO_CONFORMITE].includes(message);
        if (status === 400 && KO_VALIDATION) {
          setIsErrorValidation(true);
        } else {
          setCodeValidation(_constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].INVALID);
          setShowEditIban(false);
        }
      }
    }),
    isLoading = _useMutation.isLoading,
    data = _useMutation.data,
    isSuccess = _useMutation.isSuccess,
    IbanValidateForm = _objectWithoutProperties(_useMutation, _excluded);
  var onSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref3) {
      var ownerName, iban, values, ibanValue;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            ownerName = _ref3.ownerName, iban = _ref3.iban, values = _objectWithoutProperties(_ref3, _excluded2);
            ibanValue = 0 < iban.length ? iban : Object.values(values).join();
            IbanValidateForm.mutate({
              holder: ownerName,
              iban: ibanValue.replace(/[ ,]/g, '')
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onSubmit(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-0"
  }, showEditIban ? t('IBAN.updateIban.title') : t('IBAN.addIban.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
      ownerName: '',
      iban: '',
      iban_field_1: '',
      iban_field_2: '',
      iban_field_3: '',
      iban_field_4: '',
      iban_field_5: '',
      iban_field_6: '',
      iban_field_7: ''
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: onSubmit
  }, function (_ref5) {
    var handleSubmit = _ref5.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "iban-form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row no-gutters mt-0 mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      displayOwnerName: true,
      isInternational: true,
      displayInternationalIban: displayInternationalIban,
      setDisplayInternationalIban: setDisplayInternationalIban
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row no-gutters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
      type: "submit",
      variant: "contained",
      border: "soft",
      isDisabled: isIntranet,
      loader: isLoading
    }, showEditIban ? t('IBAN.updateIban.button') : t('IBAN.addIban.button'))));
  }));
};
var ValidateIban = function ValidateIban() {
  var _useTranslation4 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation4.t;
  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PaybackContext),
    ibanValue = _useContext3.ibanValue,
    setShowEditIban = _useContext3.setShowEditIban,
    isUpdateIbanAuthorized = _useContext3.isUpdateIbanAuthorized;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3 mb-lg-4"
  }, t('IBAN.validateIban.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "regular",
    className: "text-dark new-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: 'IBAN.validateIban.text',
    values: {
      iban: ibanValue
    },
    components: {
      bold: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
        tag: "span",
        className: "sz-typo-body md font-family-bold"
      })
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "contained",
    border: "soft",
    className: "mt-lg-2",
    to: _constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].DASHBOARD
  }, t('IBAN.validateIban.button')), isUpdateIbanAuthorized && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters mt-3 mt-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    id: "show-edit-iban",
    variant: "text",
    className: "pl-0",
    onClick: function onClick() {
      setShowEditIban(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "caption",
    weight: "regular",
    size: "M",
    className: "text-left"
  }, t('IBAN.validateIban.update_link')))));
};
var IBANError = function IBANError() {
  var _useTranslation5 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation5.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error__WEBPACK_IMPORTED_MODULE_12__["GlobalError"], {
    context: "IBAN"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "contained",
    border: "soft",
    to: _constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].DASHBOARD
  }, t('managePayments.form.errors.dashboard_btn'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "text",
    icon: "keyboard-arrow-right",
    alignIcon: "right",
    to: _constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].CUSTOMER_SERVICE,
    className: "pl-0 mt-2"
  }, t('IBAN.errors.button'))));
};

/***/ }),

/***/ "./assets/js/pages/payback/payback.scss":
/*!**********************************************!*\
  !*** ./assets/js/pages/payback/payback.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/payment-methods/CGU.tsx":
/*!*************************************************!*\
  !*** ./assets/js/pages/payment-methods/CGU.tsx ***!
  \*************************************************/
/*! exports provided: CGU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CGU", function() { return CGU; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_Links_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Links/Link */ "./assets/js/components/Links/Link.jsx");




var CGU = function CGU(_ref) {
  var isFinalize = _ref.isFinalize,
    _ref$redirectKey = _ref.redirectKey,
    redirectKey = _ref$redirectKey === void 0 ? 'managePayments.form.CGU' : _ref$redirectKey;
  var _a, _b, _c;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _ref2 = (_c = (_b = (_a = window.tsme_data) === null || _a === void 0 ? void 0 : _a.footer) === null || _b === void 0 ? void 0 : _b.links_bottom) === null || _c === void 0 ? void 0 : _c.credits_url,
    link = _ref2.link;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-10 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    i18nKey: redirectKey,
    components: {
      redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        decorate: true,
        to: link,
        target: "_blank",
        className: "sz-typo-caption font-family-medium"
      })
    }
  })), isFinalize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "light"
  }, t('managePayments.form.redirect_info')));
};

/***/ }),

/***/ "./assets/js/pages/payment-methods/EfacturePaymentChoice.tsx":
/*!*******************************************************************!*\
  !*** ./assets/js/pages/payment-methods/EfacturePaymentChoice.tsx ***!
  \*******************************************************************/
/*! exports provided: EfacturePaymentChoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfacturePaymentChoice", function() { return EfacturePaymentChoice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _payments_manage_PaymentChoice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../payments-manage/PaymentChoice */ "./assets/js/pages/payments-manage/PaymentChoice.tsx");









var EfacturePaymentChoice = function EfacturePaymentChoice() {
  var _a;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["useIsMobile"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var urlGetPaymentModeList = _constants__WEBPACK_IMPORTED_MODULE_5__["API"].PAYMENT.GET_PAYMENT_MODE_LIST;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])('getBankInfos', function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"].get(urlGetPaymentModeList);
    }, {
      onSuccess: function onSuccess(_ref) {
        var data = _ref.data;
        var response = data.content;
        var paymentModesList = response.paymentModesList;
        var noModeAvailable = Object.values(paymentModesList).every(function (v) {
          return !v;
        });
        var routePaymentMethods = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["generatePath"])(_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].ACCOUNT_PAYMENT_METHODS);
        var debitAndMensu = paymentModesList['monthlyPayment'] && paymentModesList['directDebitPayment'];
        var paymentMode = paymentModesList['monthlyPayment'] ? _constants__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_MODE_MENSU"] : paymentModesList['directDebitPayment'] ? _constants__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_MODE_PRELEV"] : '';
        if (!debitAndMensu) {
          history.push({
            pathname: routePaymentMethods,
            search: "?payment_mode=".concat(paymentMode),
            state: {
              showEfacture: true
            }
          });
        }
        if (noModeAvailable) {
          history.push(_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].ACCOUNT_PAYMENT_MANAGE);
        }
      }
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading;
  var content = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.content) || {};
  var paymentListTitle = content.paymentModesTitleCode,
    paymentModesList = content.paymentModesList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: isMobile ? 256 : 622,
    height: 46,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: isMobile ? 256 : 622,
    height: 300
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_payments_manage_PaymentChoice__WEBPACK_IMPORTED_MODULE_7__["PaymentChoice"], {
    paymentModesList: paymentModesList,
    paymentListTitle: paymentListTitle,
    allModes: false,
    efacture: true
  })));
};

/***/ }),

/***/ "./assets/js/pages/payment-methods/IbanMandateForm.tsx":
/*!*************************************************************!*\
  !*** ./assets/js/pages/payment-methods/IbanMandateForm.tsx ***!
  \*************************************************************/
/*! exports provided: IbanMandateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IbanMandateForm", function() { return IbanMandateForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/tsme-react-components/components/IbanForm */ "./assets/js/components/tsme-react-components/components/IbanForm/index.jsx");
/* harmony import */ var _app_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/tsme-react-components/components/IbanForm/iban-form-model */ "./assets/js/components/tsme-react-components/components/IbanForm/iban-form-model.jsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _CGU__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CGU */ "./assets/js/pages/payment-methods/CGU.tsx");
/* harmony import */ var _InfoPayment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InfoPayment */ "./assets/js/pages/payment-methods/InfoPayment.tsx");
/* harmony import */ var _RegisteredIban__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RegisteredIban */ "./assets/js/pages/payment-methods/RegisteredIban.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! . */ "./assets/js/pages/payment-methods/index.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var UpdateIbanForm = function UpdateIbanForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    displayInternationalIban = _useState2[0],
    setDisplayInternationalIban = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    previousLoader = _useState4[0],
    setPreviousLoader = _useState4[1];
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_12__["PaymentMethodsContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch,
    onSubmit = _useContext.onSubmit;
  var content = state || {};
  var isLoadingSubmit = content.isLoadingSubmit,
    isDisabledBtn = content.isDisabledBtn,
    errorIban = content.errorIban;
  var translatedIbanSchema = Object(_app_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__["ibanInputSchema"])(t);
  var translatedInternationalIbanSchema = Object(_app_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__["internationalIbanInputSchema"])(t);
  var translatedNameInputSchema = Object(_app_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__["nameInputSchema"])(t);
  var simpleFormSchema = translatedIbanSchema.concat(translatedNameInputSchema);
  var simpleFormInternationalSchema = translatedInternationalIbanSchema.concat(translatedNameInputSchema);
  var currentOnSubmit = function currentOnSubmit(params) {
    dispatch({
      type: 'isLoadingSubmit',
      payload: true
    });
    dispatch({
      type: 'isDisabledBtn',
      payload: true
    });
    params.type = 'noIbanMandate';
    onSubmit(params);
  };
  var resetValidationError = function resetValidationError() {
    dispatch({
      type: 'errorIban',
      payload: ''
    });
  };
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].MANAGE_PAYMENTS_URL.INDEX);
  };
  var nextButton = {
    label: t('managePayments.form.goNext'),
    align: 'right',
    loader: isLoadingSubmit
  };
  var previousButton = {
    enabled: true,
    disabled: isDisabledBtn,
    label: t('managePayments.form.goBack'),
    align: 'left',
    onClick: handlePreviousClick,
    loader: previousLoader
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      ownerName: '',
      iban: '',
      iban_field_1: '',
      iban_field_2: '',
      iban_field_3: '',
      iban_field_4: '',
      iban_field_5: '',
      iban_field_6: '',
      iban_field_7: ''
    },
    validationSchema: displayInternationalIban ? simpleFormInternationalSchema : simpleFormSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: currentOnSubmit
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
      resetForm = _ref.resetForm;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium",
      className: "mb-2"
    }, t('IBAN.updateIban.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      displayOwnerName: true,
      isInternational: true,
      displayInternationalIban: displayInternationalIban,
      setDisplayInternationalIban: setDisplayInternationalIban,
      validationError: errorIban,
      resetValidationError: resetValidationError
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
      variant: "outlined",
      border: "soft",
      isDisabled: isDisabledBtn,
      onClick: function onClick() {
        resetForm();
        dispatch({
          type: 'showEditIban',
          payload: false
        });
      },
      className: "mb-4"
    }, t('managePayments.form.cancelUpdateIban')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CGU__WEBPACK_IMPORTED_MODULE_9__["CGU"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      next: nextButton,
      previous: previousButton
    }));
  });
};
var IbanMandateForm = function IbanMandateForm() {
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_12__["PaymentMethodsContext"]),
    state = _useContext2.state;
  var content = state || {};
  var showEditIban = content.showEditIban;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-2"
  }, t('managePayments.form.title_payment_mode_selected')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPayment__WEBPACK_IMPORTED_MODULE_10__["InfoPayment"], null), showEditIban ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UpdateIbanForm, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisteredIban__WEBPACK_IMPORTED_MODULE_11__["RegisteredIban"], null));
};

/***/ }),

/***/ "./assets/js/pages/payment-methods/IbanNoMandateForm.tsx":
/*!***************************************************************!*\
  !*** ./assets/js/pages/payment-methods/IbanNoMandateForm.tsx ***!
  \***************************************************************/
/*! exports provided: IbanNoMandateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IbanNoMandateForm", function() { return IbanNoMandateForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tsme-react-components/components/IbanForm */ "./assets/js/components/tsme-react-components/components/IbanForm/index.jsx");
/* harmony import */ var _components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tsme-react-components/components/IbanForm/iban-form-model */ "./assets/js/components/tsme-react-components/components/IbanForm/iban-form-model.jsx");
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _components_FormButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _components_RegisteredIbanBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/RegisteredIbanBlock */ "./assets/js/components/RegisteredIbanBlock/index.tsx");
/* harmony import */ var _form_PhoneForm_PhoneInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../form/PhoneForm/PhoneInput */ "./assets/js/form/PhoneForm/PhoneInput.tsx");
/* harmony import */ var _form_PhoneForm_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../form/PhoneForm/model */ "./assets/js/form/PhoneForm/model.js");
/* harmony import */ var _models_Civility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models/Civility */ "./assets/js/models/Civility.js");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _InfoPayment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InfoPayment */ "./assets/js/pages/payment-methods/InfoPayment.tsx");
/* harmony import */ var _CGU__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CGU */ "./assets/js/pages/payment-methods/CGU.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! . */ "./assets/js/pages/payment-methods/index.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var IbanNoMandateForm = function IbanNoMandateForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    displayInternationalIban = _useState2[0],
    setDisplayInternationalIban = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    previousLoader = _useState4[0],
    setPreviousLoader = _useState4[1];
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_17__["PaymentMethodsContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch,
    onSubmit = _useContext.onSubmit;
  var content = state || {};
  var showEditIban = content.showEditIban,
    iban = content.iban,
    errorIban = content.errorIban,
    isLoadingSubmit = content.isLoadingSubmit,
    isDisabledBtn = content.isDisabledBtn;
  var civilityOptions = [{
    label: t('civility.mrs'),
    value: 'MME'
  }, {
    label: t('civility.mr'),
    value: 'M'
  }];
  var translatedIbanSchema = Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__["ibanInputSchema"])(t);
  var translatedInternationalIbanSchema = Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__["internationalIbanInputSchema"])(t);
  var translatedphoneNumberInputSchema = Object(_form_PhoneForm_model__WEBPACK_IMPORTED_MODULE_12__["phoneNumberInputSchema"])(t);
  var translatedCivilitySchema = Object(_models_Civility__WEBPACK_IMPORTED_MODULE_13__["civilitySchema"])(t);
  var complexFormSchema = translatedphoneNumberInputSchema.concat(translatedIbanSchema).concat(translatedCivilitySchema);
  var complexFormInternationalSchema = translatedphoneNumberInputSchema.concat(translatedInternationalIbanSchema).concat(translatedCivilitySchema);
  var modelNoShowIban = translatedphoneNumberInputSchema.concat(translatedCivilitySchema);
  var resetValidationError = function resetValidationError() {
    dispatch({
      type: 'errorIban',
      payload: ''
    });
  };
  var currentOnSubmit = function currentOnSubmit(params) {
    dispatch({
      type: 'isLoadingSubmit',
      payload: true
    });
    dispatch({
      type: 'isDisabledBtn',
      payload: true
    });
    onSubmit(params);
  };
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].MANAGE_PAYMENTS_URL.INDEX);
  };
  var nextButton = {
    label: t('managePayments.form.goNext'),
    align: 'right',
    loader: isLoadingSubmit
  };
  var previousButton = {
    enabled: true,
    disabled: isDisabledBtn,
    label: t('managePayments.form.goBack'),
    align: 'left',
    onClick: handlePreviousClick,
    loader: previousLoader
  };
  var currentModel = modelNoShowIban;
  if (showEditIban) {
    currentModel = displayInternationalIban ? complexFormInternationalSchema : complexFormSchema;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-2"
  }, t('managePayments.form.title_payment_mode_selected')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPayment__WEBPACK_IMPORTED_MODULE_15__["InfoPayment"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      civility: '',
      surname: '',
      name: '',
      phoneNumber: '',
      iban: '',
      iban_field_1: '',
      iban_field_2: '',
      iban_field_3: '',
      iban_field_4: '',
      iban_field_5: '',
      iban_field_6: '',
      iban_field_7: ''
    },
    validationSchema: currentModel,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: currentOnSubmit
  }, function (_ref) {
    var errors = _ref.errors,
      touched = _ref.touched,
      handleBlur = _ref.handleBlur,
      handleSubmit = _ref.handleSubmit,
      values = _ref.values,
      setFieldTouched = _ref.setFieldTouched,
      setFieldValue = _ref.setFieldValue,
      resetForm = _ref.resetForm;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "owner-info",
      className: "mb-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium",
      className: "mb-3 mb-lg-4"
    }, t('managePayments.form.title_civility')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "caption",
      size: "M",
      className: "mb-2 mb-lg-3"
    }, t('managePayments.form.all_fields_mandatory')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-9 mb-3 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      id: "civility-aria-label",
      className: "mb-1",
      htmlFor: "civilityInput"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "body",
      size: "M",
      className: "text-primary-dark mb-0"
    }, t('managePayments.form.label_civility'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzSelect"], {
      id: "civility",
      name: "civility",
      placeholder: t('managePayments.form.placeholder_civility'),
      options: civilityOptions,
      value: values.civility,
      onChange: function onChange(selectedOption) {
        setFieldValue('civility', selectedOption);
      },
      onBlur: function onBlur() {
        return setFieldTouched('civility', true);
      },
      isSearchable: false,
      variant: "outlined",
      inputId: "subjectInput",
      "aria-labelledby": "civility-aria-label"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_8__["default"], {
      customDisplay: touched.civility && errors.civility,
      field: "civility"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-9 mb-3 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzInput"], {
      name: "surname",
      id: "surname",
      value: values.surname,
      autocomplete: "given-name",
      onChange: function onChange(e) {
        var _e$target = e.target,
          value = _e$target.value,
          name = _e$target.name;
        setFieldValue(name, Object(_services_Utils__WEBPACK_IMPORTED_MODULE_14__["capitalizeValue"])(value));
      },
      onBlur: handleBlur,
      label: t('customerService.label_firstName'),
      placeholder: t('customerService.placeholder_firstName'),
      variant: "outlined",
      valid: !errors.surname
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_8__["default"], {
      customDisplay: touched.surname && errors.surname,
      field: "surname"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-9 mb-3 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzInput"], {
      name: "name",
      id: "name",
      value: values.name,
      autocomplete: "family-name",
      onChange: function onChange(e) {
        var _e$target2 = e.target,
          value = _e$target2.value,
          name = _e$target2.name;
        setFieldValue(name, Object(_services_Utils__WEBPACK_IMPORTED_MODULE_14__["capitalizeValue"])(value));
      },
      onBlur: handleBlur,
      label: t('customerService.label_lastName'),
      placeholder: t('customerService.placeholder_lastName'),
      variant: "outlined",
      valid: !errors.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_8__["default"], {
      customDisplay: touched.name && errors.name,
      field: "name"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_PhoneForm_PhoneInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      info: t('phoneNumber.info')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CGU__WEBPACK_IMPORTED_MODULE_16__["CGU"], {
      isFinalize: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium",
      className: "mb-3"
    }, t('managePayments.form.title', {
      context: showEditIban ? 'update_iban' : 'your_iban'
    })), showEditIban ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isInternational: true,
      displayInternationalIban: displayInternationalIban,
      setDisplayInternationalIban: setDisplayInternationalIban,
      validationError: errorIban,
      resetValidationError: resetValidationError
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
      variant: "outlined",
      border: "soft",
      isDisabled: isDisabledBtn,
      onClick: function onClick() {
        resetForm({
          values: Object.assign(Object.assign({}, values), {
            iban: '',
            iban_field_1: '',
            iban_field_2: '',
            iban_field_3: '',
            iban_field_4: '',
            iban_field_5: '',
            iban_field_6: '',
            iban_field_7: ''
          })
        });
        dispatch({
          type: 'showEditIban',
          payload: false
        });
      },
      className: "mb-4"
    }, t('managePayments.form.cancelUpdateIban'))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegisteredIbanBlock__WEBPACK_IMPORTED_MODULE_10__["RegisteredIbanBlock"], {
      showOwner: false,
      holderValue: "Franck Dupont",
      ibanValue: iban
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
      id: "update-iban",
      variant: "outlined",
      border: "soft",
      isDisabled: isDisabledBtn,
      onClick: function onClick() {
        dispatch({
          type: 'showEditIban',
          payload: true
        });
      },
      className: "mb-4"
    }, t('IBAN.updateIban.button'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_9__["default"], {
      next: nextButton,
      previous: previousButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/payment-methods/InfoPayment.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/payment-methods/InfoPayment.tsx ***!
  \*********************************************************/
/*! exports provided: InfoPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPayment", function() { return InfoPayment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ez_components_paymentMethods_PaymentMethodBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ez-components/paymentMethods/PaymentMethodBlock */ "./assets/js/ez-components/paymentMethods/PaymentMethodBlock.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./assets/js/pages/payment-methods/index.tsx");





var InfoPayment = function InfoPayment() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_4__["PaymentMethodsContext"]),
    state = _useContext.state;
  var content = state || {};
  var libelleCalcul = content.libelleCalcul,
    montantMensu = content.montantMensu,
    paymentMethod = content.paymentMethod;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 pb-4 pt-lg-4 pb-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_paymentMethods_PaymentMethodBlock__WEBPACK_IMPORTED_MODULE_3__["PaymentMethodBlock"], {
    label: t('managePayments.form.title', {
      context: "".concat(paymentMethod)
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "regular",
    className: "text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    i18nKey: "managePayments.form.mensu_description_".concat(paymentMethod),
    values: {
      value: montantMensu
    },
    components: {
      amount: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
        weight: "bold",
        className: "mb-0 text-blue-electric",
        tag: "span"
      })
    }
  })), paymentMethod === 'M' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "regular",
    className: "text-dark"
  }, libelleCalcul)));
};

/***/ }),

/***/ "./assets/js/pages/payment-methods/NoIbanMandateForm.tsx":
/*!***************************************************************!*\
  !*** ./assets/js/pages/payment-methods/NoIbanMandateForm.tsx ***!
  \***************************************************************/
/*! exports provided: NoIbanMandateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoIbanMandateForm", function() { return NoIbanMandateForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tsme-react-components/components/IbanForm */ "./assets/js/components/tsme-react-components/components/IbanForm/index.jsx");
/* harmony import */ var _components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tsme-react-components/components/IbanForm/iban-form-model */ "./assets/js/components/tsme-react-components/components/IbanForm/iban-form-model.jsx");
/* harmony import */ var _components_FormButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _CGU__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CGU */ "./assets/js/pages/payment-methods/CGU.tsx");
/* harmony import */ var _InfoPayment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InfoPayment */ "./assets/js/pages/payment-methods/InfoPayment.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! . */ "./assets/js/pages/payment-methods/index.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var NoIbanMandateForm = function NoIbanMandateForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    displayInternationalIban = _useState2[0],
    setDisplayInternationalIban = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    previousLoader = _useState4[0],
    setPreviousLoader = _useState4[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_11__["PaymentMethodsContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch,
    onSubmit = _useContext.onSubmit;
  var content = state || {};
  var isLoadingSubmit = content.isLoadingSubmit,
    errorIban = content.errorIban,
    isDisabledBtn = content.isDisabledBtn;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var translatedIbanSchema = Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__["ibanInputSchema"])(t);
  var translatedInternationalIbanSchema = Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__["internationalIbanInputSchema"])(t);
  var translatedNameInputSchema = Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_7__["nameInputSchema"])(t);
  var noIbanFormSchema = translatedNameInputSchema.concat(translatedIbanSchema);
  var noIbanFormInternationalSchema = translatedNameInputSchema.concat(translatedInternationalIbanSchema);
  var resetValidationError = function resetValidationError() {
    dispatch({
      type: 'errorIban',
      payload: ''
    });
  };
  var currentOnSubmit = function currentOnSubmit(params) {
    dispatch({
      type: 'isLoadingSubmit',
      payload: true
    });
    dispatch({
      type: 'isDisabledBtn',
      payload: true
    });
    params.type = 'noIbanMandate';
    onSubmit(params);
  };
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].MANAGE_PAYMENTS_URL.INDEX);
  };
  var nextButton = {
    label: t('managePayments.form.goNext'),
    align: 'right',
    loader: isLoadingSubmit
  };
  var previousButton = {
    enabled: true,
    disabled: isDisabledBtn,
    label: t('managePayments.form.goBack'),
    align: 'left',
    onClick: handlePreviousClick,
    loader: previousLoader
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-2"
  }, t('managePayments.form.title_payment_mode_selected')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPayment__WEBPACK_IMPORTED_MODULE_10__["InfoPayment"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      ownerName: '',
      iban: '',
      iban_field_1: '',
      iban_field_2: '',
      iban_field_3: '',
      iban_field_4: '',
      iban_field_5: '',
      iban_field_6: '',
      iban_field_7: ''
    },
    validationSchema: displayInternationalIban ? noIbanFormInternationalSchema : noIbanFormSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: currentOnSubmit
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "iban-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium",
      className: "mb-2"
    }, t('managePayments.form.title_add_iban'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      displayOwnerName: true,
      isInternational: true,
      displayInternationalIban: displayInternationalIban,
      setDisplayInternationalIban: setDisplayInternationalIban,
      validationError: errorIban,
      resetValidationError: resetValidationError
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CGU__WEBPACK_IMPORTED_MODULE_9__["CGU"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      next: nextButton,
      previous: previousButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/payment-methods/NoIbanNoMandateForm.tsx":
/*!*****************************************************************!*\
  !*** ./assets/js/pages/payment-methods/NoIbanNoMandateForm.tsx ***!
  \*****************************************************************/
/*! exports provided: NoIbanNoMandateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoIbanNoMandateForm", function() { return NoIbanNoMandateForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tsme-react-components/components/IbanForm */ "./assets/js/components/tsme-react-components/components/IbanForm/index.jsx");
/* harmony import */ var _components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tsme-react-components/components/IbanForm/iban-form-model */ "./assets/js/components/tsme-react-components/components/IbanForm/iban-form-model.jsx");
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _form_PhoneForm_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../form/PhoneForm/model */ "./assets/js/form/PhoneForm/model.js");
/* harmony import */ var _form_PhoneForm_PhoneInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../form/PhoneForm/PhoneInput */ "./assets/js/form/PhoneForm/PhoneInput.tsx");
/* harmony import */ var _models_Civility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/Civility */ "./assets/js/models/Civility.js");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _CGU__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CGU */ "./assets/js/pages/payment-methods/CGU.tsx");
/* harmony import */ var _InfoPayment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InfoPayment */ "./assets/js/pages/payment-methods/InfoPayment.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! . */ "./assets/js/pages/payment-methods/index.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var NoIbanNoMandateForm = function NoIbanNoMandateForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    displayInternationalIban = _useState2[0],
    setDisplayInternationalIban = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    previousLoader = _useState4[0],
    setPreviousLoader = _useState4[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_16__["PaymentMethodsContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch,
    onSubmit = _useContext.onSubmit;
  var content = state || {};
  var isLoadingSubmit = content.isLoadingSubmit,
    errorIban = content.errorIban,
    isDisabledBtn = content.isDisabledBtn;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var civilityOptions = [{
    label: t('civility.mrs'),
    value: 'MME'
  }, {
    label: t('civility.mr'),
    value: 'M'
  }];
  var translatedIbanSchema = Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_8__["ibanInputSchema"])(t);
  var translatedInternationalIbanSchema = Object(_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_8__["internationalIbanInputSchema"])(t);
  var translatedphoneNumberInputSchema = Object(_form_PhoneForm_model__WEBPACK_IMPORTED_MODULE_10__["phoneNumberInputSchema"])(t);
  var translatedCivilitySchema = Object(_models_Civility__WEBPACK_IMPORTED_MODULE_12__["civilitySchema"])(t);
  var complexFormSchema = translatedphoneNumberInputSchema.concat(translatedIbanSchema).concat(translatedCivilitySchema);
  var complexFormInternationalSchema = translatedphoneNumberInputSchema.concat(translatedInternationalIbanSchema).concat(translatedCivilitySchema);
  var resetValidationError = function resetValidationError() {
    dispatch({
      type: 'errorIban',
      payload: ''
    });
  };
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].MANAGE_PAYMENTS_URL.INDEX);
  };
  var nextButton = {
    label: t('managePayments.form.goNext'),
    align: 'right',
    loader: isLoadingSubmit
  };
  var previousButton = {
    enabled: true,
    disabled: isDisabledBtn,
    label: t('managePayments.form.goBack'),
    align: 'left',
    onClick: handlePreviousClick,
    loader: previousLoader
  };
  var currentOnSubmit = function currentOnSubmit(params) {
    dispatch({
      type: 'isLoadingSubmit',
      payload: true
    });
    dispatch({
      type: 'isDisabledBtn',
      payload: true
    });
    onSubmit(params);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-2"
  }, t('managePayments.form.title_payment_mode_selected')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPayment__WEBPACK_IMPORTED_MODULE_15__["InfoPayment"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      civility: '',
      surname: '',
      name: '',
      phoneNumber: '',
      iban: '',
      iban_field_1: '',
      iban_field_2: '',
      iban_field_3: '',
      iban_field_4: '',
      iban_field_5: '',
      iban_field_6: '',
      iban_field_7: ''
    },
    validationSchema: displayInternationalIban ? complexFormInternationalSchema : complexFormSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: currentOnSubmit
  }, function (_ref) {
    var errors = _ref.errors,
      touched = _ref.touched,
      handleBlur = _ref.handleBlur,
      handleSubmit = _ref.handleSubmit,
      values = _ref.values,
      setFieldTouched = _ref.setFieldTouched,
      setFieldValue = _ref.setFieldValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "owner-info",
      className: "mb-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium",
      className: "mb-3 mb-lg-4"
    }, t('managePayments.form.title_civility')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "caption",
      size: "M",
      className: "mb-2 mb-lg-3"
    }, t('managePayments.form.all_fields_mandatory')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-9 mb-3 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      id: "civility-aria-label",
      className: "mb-1",
      htmlFor: "civilityInput"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "body",
      size: "M",
      className: "text-primary-dark mb-0"
    }, t('managePayments.form.label_civility'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzSelect"], {
      id: "civility",
      name: "civility",
      placeholder: t('managePayments.form.placeholder_civility'),
      options: civilityOptions,
      value: values.civility,
      onChange: function onChange(selectedOption) {
        setFieldValue('civility', selectedOption);
      },
      onBlur: function onBlur() {
        return setFieldTouched('civility', true);
      },
      isSearchable: false,
      variant: "outlined",
      inputId: "subjectInput",
      "aria-labelledby": "civility-aria-label"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      customDisplay: touched.civility && errors.civility,
      field: "civility"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-9 mb-3 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzInput"], {
      name: "surname",
      id: "surname",
      value: values.surname,
      autocomplete: "given-name",
      onChange: function onChange(e) {
        var _e$target = e.target,
          value = _e$target.value,
          name = _e$target.name;
        setFieldValue(name, Object(_services_Utils__WEBPACK_IMPORTED_MODULE_13__["capitalizeValue"])(value));
      },
      onBlur: handleBlur,
      label: t('customerService.label_firstName'),
      placeholder: t('customerService.placeholder_firstName'),
      variant: "outlined",
      valid: !errors.surname
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      customDisplay: touched.surname && errors.surname,
      field: "surname"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-9 mb-3 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzInput"], {
      name: "name",
      id: "name",
      value: values.name,
      autocomplete: "family-name",
      onChange: function onChange(e) {
        var _e$target2 = e.target,
          value = _e$target2.value,
          name = _e$target2.name;
        setFieldValue(name, Object(_services_Utils__WEBPACK_IMPORTED_MODULE_13__["capitalizeValue"])(value));
      },
      onBlur: handleBlur,
      label: t('customerService.label_lastName'),
      placeholder: t('customerService.placeholder_lastName'),
      variant: "outlined",
      valid: !errors.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      customDisplay: touched.name && errors.name,
      field: "name"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_PhoneForm_PhoneInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      info: t('phoneNumber.info')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CGU__WEBPACK_IMPORTED_MODULE_14__["CGU"], {
      isFinalize: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "iban-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium",
      className: "mb-2"
    }, t('managePayments.form.title_add_iban'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isInternational: true,
      displayInternationalIban: displayInternationalIban,
      setDisplayInternationalIban: setDisplayInternationalIban,
      validationError: errorIban,
      resetValidationError: resetValidationError
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      next: nextButton,
      previous: previousButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/payment-methods/PaymentMethodError.tsx":
/*!****************************************************************!*\
  !*** ./assets/js/pages/payment-methods/PaymentMethodError.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentMethodError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Error */ "./assets/js/components/Error/index.jsx");





function PaymentMethodError() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error__WEBPACK_IMPORTED_MODULE_4__["GlobalError"], {
    context: "IBAN"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "dashboard-redirect-btn",
    variant: "contained",
    border: "soft",
    to: _constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].DASHBOARD
  }, t('managePayments.form.errors.dashboard_btn'))));
}

/***/ }),

/***/ "./assets/js/pages/payment-methods/PaymentMethodValidation.tsx":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/payment-methods/PaymentMethodValidation.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentMethodValidation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _components_Links_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Links/Link */ "./assets/js/components/Links/Link.jsx");












function PaymentMethodValidation() {
  var _a, _b, _c, _d;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_10__["useIsMobile"])();
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["useLocation"])(),
    search = _useLocation.search;
  var _ref = (_c = (_b = (_a = window.tsme_data) === null || _a === void 0 ? void 0 : _a.footer) === null || _b === void 0 ? void 0 : _b.links_bottom) === null || _c === void 0 ? void 0 : _c.credits_url,
    link = _ref.link;
  var params = new URLSearchParams(search);
  var showEfacture = params.get('e-facture') === 'true';
  var reference = params.get('reference') || undefined;
  var title;
  var subTitle;
  if (showEfacture) {
    title = reference ? 'managePayments.validate.efacture_ref.title' : 'managePayments.validate.efacture_no_ref.title';
    subTitle = reference ? 'managePayments.validate.efacture_ref.subtitle' : 'managePayments.validate.efacture_no_ref.subtitle';
  } else {
    title = reference ? 'managePayments.validate.no_efacture_ref.title' : 'managePayments.validate.no_efacture_no_ref.title';
    subTitle = reference ? 'managePayments.validate.no_efacture_ref.subtitle' : 'managePayments.validate.no_efacture_no_ref.subtitle';
  }
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('postPaymentEInvoice', function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_3__["API"].PAYMENT.POST_PAYMENT_E_INVOICE);
    }, {
      enabled: showEfacture
    }),
    data = _useQuery.data,
    isError = _useQuery.isError,
    isLoading = _useQuery.isLoading,
    error = _useQuery.error;
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      width: isMobile ? 256 : 622,
      height: 46,
      className: "mb-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      width: isMobile ? 256 : 622,
      height: 300
    }));
  }
  var message = ((_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.message) || '';
  if (data && message !== _constants__WEBPACK_IMPORTED_MODULE_3__["CODES"].PAYMENT_E_INVOICE_OK || error && error.code === _constants__WEBPACK_IMPORTED_MODULE_3__["CODES"].ECONNABORTED || isError) {
    title = reference ? 'managePayments.validate.efacture_ref.title_ko' : 'managePayments.validate.efacture_no_ref.title_ko';
    subTitle = reference ? 'managePayments.validate.efacture_ref.subtitle_ko' : 'managePayments.validate.efacture_no_ref.subtitle_ko';
  }
  var pathDownloadMandate = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["generatePath"])(_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DOWNLOAD_MANDATE_PDF, {
    codeSystem: '98',
    refClient: reference
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-2"
  }, t(title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "body",
    size: "M",
    className: "text-dark mb-4 new-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
    i18nKey: subTitle,
    components: {
      redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        decorate: true,
        to: link,
        target: "_blank",
        className: "sz-typo-caption font-family-medium"
      })
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-left"
  }, reference && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "",
    variant: "contained",
    border: "soft",
    to: pathDownloadMandate,
    target: "_blank"
  }, t('managePayments.validate.button_mandate'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "dashboard-redirect",
    className: "pl-0 mt-2",
    to: _constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DASHBOARD,
    variant: "text",
    icon: "keyboard-arrow-left",
    alignIcon: "left"
  }, t('managePayments.validate.button_dashboard'))));
}

/***/ }),

/***/ "./assets/js/pages/payment-methods/PaymentMode.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/payment-methods/PaymentMode.tsx ***!
  \*********************************************************/
/*! exports provided: MonthlyAmountError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyAmountError", function() { return MonthlyAmountError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _IbanMandateForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IbanMandateForm */ "./assets/js/pages/payment-methods/IbanMandateForm.tsx");
/* harmony import */ var _IbanNoMandateForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IbanNoMandateForm */ "./assets/js/pages/payment-methods/IbanNoMandateForm.tsx");
/* harmony import */ var _NoIbanMandateForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NoIbanMandateForm */ "./assets/js/pages/payment-methods/NoIbanMandateForm.tsx");
/* harmony import */ var _NoIbanNoMandateForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NoIbanNoMandateForm */ "./assets/js/pages/payment-methods/NoIbanNoMandateForm.tsx");
/* harmony import */ var _PaymentMethodError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PaymentMethodError */ "./assets/js/pages/payment-methods/PaymentMethodError.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! . */ "./assets/js/pages/payment-methods/index.tsx");















function MonthlyAmountError() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3"
  }, t('managePayments.monthly_amount_error.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    className: "mb-4 mb-lg-5 new-line"
  }, t('managePayments.monthly_amount_error.body', {
    amount: _constants__WEBPACK_IMPORTED_MODULE_6__["MONTHLY_AMOUNT_MIN"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "backBtn",
    variant: "contained",
    border: "soft",
    to: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["generatePath"])(_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PAYMENT_METHODS)
  }, t('managePayments.monthly_amount_error.back')));
}
var Result = function Result(_ref) {
  var data = _ref.data,
    isLoading = _ref.isLoading,
    isError = _ref.isError;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_14__["PaymentMethodsContext"]),
    state = _useContext.state;
  var _ref2 = state || {},
    montantMensu = _ref2.montantMensu,
    paymentMethod = _ref2.paymentMethod;
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      width: 300,
      height: 30
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "mt-4",
      width: 600,
      height: 150
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "mt-5",
      width: 300,
      height: 30
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "mt-4",
      width: 600,
      height: 100
    }));
  }
  if (isError || !data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentMethodError__WEBPACK_IMPORTED_MODULE_13__["default"], null);
  }
  if ('M' === paymentMethod && _constants__WEBPACK_IMPORTED_MODULE_6__["MONTHLY_AMOUNT_MIN"] > Number(montantMensu)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MonthlyAmountError, null);
  }
  var _data$data$content = data.data.content,
    has_mandate = _data$data$content.has_mandate,
    iban = _data$data$content.iban;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !has_mandate && !iban && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoIbanNoMandateForm__WEBPACK_IMPORTED_MODULE_12__["NoIbanNoMandateForm"], null), !has_mandate && iban && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IbanNoMandateForm__WEBPACK_IMPORTED_MODULE_10__["IbanNoMandateForm"], null), has_mandate && iban && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IbanMandateForm__WEBPACK_IMPORTED_MODULE_9__["IbanMandateForm"], null), has_mandate && !iban && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoIbanMandateForm__WEBPACK_IMPORTED_MODULE_11__["NoIbanMandateForm"], null));
};
function PaymentMode() {
  var _a;
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])();
  var showEfacture = !!((_a = location === null || location === void 0 ? void 0 : location.state) === null || _a === void 0 ? void 0 : _a.showEfacture);
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_14__["PaymentMethodsContext"]),
    state = _useContext2.state,
    dispatch = _useContext2.dispatch;
  var _ref3 = state || {},
    paymentMethod = _ref3.paymentMethod;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('managePayment', function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_8__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_6__["API"].GET_MANAGE_PAYMENT, {
        params: {
          action: paymentMethod,
          enable_tracking: 1,
          e_invoice: showEfacture ? 1 : 0
        }
      });
    }, {
      onSuccess: function onSuccess(_ref4) {
        var data = _ref4.data;
        var _data$content = data.content,
          has_mandate = _data$content.has_mandate,
          iban = _data$content.iban,
          titulaire = _data$content.titulaire,
          libelle_calcul = _data$content.libelle_calcul,
          montant_mensu = _data$content.montant_mensu,
          is_iban_different_with_search_mandate = _data$content.is_iban_different_with_search_mandate;
        dispatch({
          type: 'titulaire',
          payload: titulaire
        });
        dispatch({
          type: 'libelleCalcul',
          payload: libelle_calcul
        });
        dispatch({
          type: 'montantMensu',
          payload: montant_mensu
        });
        dispatch({
          type: 'iban',
          payload: iban
        });
        dispatch({
          type: 'hasMandate',
          payload: has_mandate
        });
        dispatch({
          type: 'isIbanDifferentWithSearchMandate',
          payload: is_iban_different_with_search_mandate
        });
      }
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading,
    isError = _useQuery.isError;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "payment-methods"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Result, {
    data: data,
    isLoading: isLoading,
    isError: isError
  }));
}

/***/ }),

/***/ "./assets/js/pages/payment-methods/Reducer.tsx":
/*!*****************************************************!*\
  !*** ./assets/js/pages/payment-methods/Reducer.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reducer; });
function Reducer(state, action) {
  switch (action.type) {
    case 'paymentMethod':
      return Object.assign(Object.assign({}, state), {
        paymentMethod: action.payload
      });
    case 'showEditIban':
      return Object.assign(Object.assign({}, state), {
        showEditIban: action.payload
      });
    case 'titulaire':
      return Object.assign(Object.assign({}, state), {
        titulaire: action.payload
      });
    case 'libelleCalcul':
      return Object.assign(Object.assign({}, state), {
        libelleCalcul: action.payload
      });
    case 'montantMensu':
      return Object.assign(Object.assign({}, state), {
        montantMensu: action.payload
      });
    case 'iban':
      return Object.assign(Object.assign({}, state), {
        iban: action.payload
      });
    case 'lastUrlEfacture':
      return Object.assign(Object.assign({}, state), {
        lastUrlEfacture: action.payload
      });
    case 'hasMandate':
      return Object.assign(Object.assign({}, state), {
        hasMandate: action.payload
      });
    case 'isIbanDifferentWithSearchMandate':
      return Object.assign(Object.assign({}, state), {
        isIbanDifferentWithSearchMandate: action.payload
      });
    case 'isLoadingSubmit':
      return Object.assign(Object.assign({}, state), {
        isLoadingSubmit: action.payload
      });
    case 'isDisabledBtn':
      return Object.assign(Object.assign({}, state), {
        isDisabledBtn: action.payload
      });
    case 'errorIban':
      return Object.assign(Object.assign({}, state), {
        errorIban: action.payload
      });
    default:
      throw new Error('Not a reducer');
  }
}

/***/ }),

/***/ "./assets/js/pages/payment-methods/RegisteredIban.tsx":
/*!************************************************************!*\
  !*** ./assets/js/pages/payment-methods/RegisteredIban.tsx ***!
  \************************************************************/
/*! exports provided: RegisteredIban */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredIban", function() { return RegisteredIban; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_RegisteredIbanBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RegisteredIbanBlock */ "./assets/js/components/RegisteredIbanBlock/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./assets/js/pages/payment-methods/index.tsx");
/* harmony import */ var _CGU__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CGU */ "./assets/js/pages/payment-methods/CGU.tsx");
/* harmony import */ var _components_FormButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");








var RegisteredIban = function RegisteredIban() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_5__["PaymentMethodsContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch,
    onSubmit = _useContext.onSubmit;
  var content = state || {};
  var titulaire = content.titulaire,
    iban = content.iban,
    isLoadingSubmit = content.isLoadingSubmit,
    isDisabledBtn = content.isDisabledBtn;
  var nextButton = {
    label: t('managePayments.form.goNext'),
    align: 'right',
    loader: isLoadingSubmit,
    onClick: function onClick() {
      dispatch({
        type: 'isLoadingSubmit',
        payload: true
      });
      dispatch({
        type: 'isDisabledBtn',
        payload: true
      });
      var params = {
        type: 'noDataForm'
      };
      onSubmit(params);
    }
  };
  var previousButton = {
    enabled: true,
    disabled: isDisabledBtn,
    label: t('managePayments.form.goBack'),
    align: 'left',
    onClick: function onClick() {
      return window.location.assign(_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].MANAGE_PAYMENTS_URL.INDEX);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3 mb-lg-4"
  }, t('managePayments.form.title_civility')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegisteredIbanBlock__WEBPACK_IMPORTED_MODULE_4__["RegisteredIbanBlock"], {
    showOwner: true,
    holderValue: titulaire,
    ibanValue: iban
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    id: "update-iban",
    variant: "outlined",
    border: "soft",
    isDisabled: isDisabledBtn,
    onClick: function onClick() {
      dispatch({
        type: 'showEditIban',
        payload: true
      });
    },
    className: "mb-4"
  }, t('IBAN.updateIban.button')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CGU__WEBPACK_IMPORTED_MODULE_6__["CGU"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    next: nextButton,
    previous: previousButton
  }));
};

/***/ }),

/***/ "./assets/js/pages/payment-methods/index.tsx":
/*!***************************************************!*\
  !*** ./assets/js/pages/payment-methods/index.tsx ***!
  \***************************************************/
/*! exports provided: PaymentMethodsContext, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodsContext", function() { return PaymentMethodsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentMethods; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/background/BackgroundBubbles */ "./assets/js/components/background/BackgroundBubbles/index.tsx");
/* harmony import */ var react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom/cjs/react-router-dom.min */ "./node_modules/react-router-dom/cjs/react-router-dom.min.js");
/* harmony import */ var react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _Reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Reducer */ "./assets/js/pages/payment-methods/Reducer.tsx");
/* harmony import */ var _PaymentMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PaymentMode */ "./assets/js/pages/payment-methods/PaymentMode.tsx");
/* harmony import */ var _PaymentMethodError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PaymentMethodError */ "./assets/js/pages/payment-methods/PaymentMethodError.tsx");
/* harmony import */ var _EfacturePaymentChoice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EfacturePaymentChoice */ "./assets/js/pages/payment-methods/EfacturePaymentChoice.tsx");
/* harmony import */ var _PaymentMethodValidation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PaymentMethodValidation */ "./assets/js/pages/payment-methods/PaymentMethodValidation.tsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_usePayline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks/usePayline */ "./assets/js/hooks/usePayline.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var PaymentMethodsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  state: {},
  dispatch: function dispatch() {},
  onSubmit: function onSubmit() {}
});
var initialState = {
  paymentMethod: '',
  showEditIban: false,
  lastUrlEfacture: false,
  isLoadingSubmit: false,
  isDisabledBtn: false,
  titulaire: '',
  errorIban: '',
  montant_mensu: '',
  libelle_calcul: '',
  iban: '',
  hasMandate: null,
  isIbanDifferentWithSearchMandate: null
};
function PaymentMethods() {
  var _a;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_13__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_14__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var location = Object(react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  var search = location.search;
  var _useParams = Object(react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
    action = _useParams.action;
  var showEfacture = ((_a = location === null || location === void 0 ? void 0 : location.state) === null || _a === void 0 ? void 0 : _a.showEfacture) ? true : false;
  var params = new URLSearchParams(search);
  var paymentMode = params.get('payment_mode') || '';
  var isEfacture = params.get('e-facture');
  var isConfirmation = action === 'confirmation';
  var paymentModes = {
    mensualisation: 'M',
    prelevement: 'P'
  };
  initialState.paymentMethod = paymentModes[paymentMode];
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_Reducer__WEBPACK_IMPORTED_MODULE_7__["default"], initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var paymentReducerMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      state: state,
      dispatch: dispatch
    };
  }, [state, dispatch]);
  if (paymentModes[paymentMode] === undefined && !isConfirmation && isEfacture !== 'true' && action !== 'erreur') {
    history.push(_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PAYMENT_MANAGE);
    return null;
  }
  Object(_app_hooks_usePayline__WEBPACK_IMPORTED_MODULE_15__["default"])();
  var managePayment = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(function (params) {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_6__["API"].POST_MANAGE_PAYMENT, params);
  }, {
    onSuccess: function onSuccess(_ref) {
      var data = _ref.data;
      var _ref2 = (data === null || data === void 0 ? void 0 : data.content) || '',
        urlSEPA = _ref2.urlSEPA;
      dispatch({
        type: 'isLoadingSubmit',
        payload: false
      });
      dispatch({
        type: 'isDisabledBtn',
        payload: false
      });
      if (urlSEPA) {
        window.location.href = urlSEPA;
      } else {
        var _params = new URLSearchParams();
        _params.set('e-facture', showEfacture.toString());
        var toRedirect = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["generatePath"])(_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PAYMENT_METHODS.concat("?".concat(_params.toString())), {
          action: 'confirmation'
        });
        history.push(toRedirect);
      }
    },
    onError: function onError(error) {
      var _a, _b, _c;
      dispatch({
        type: 'isLoadingSubmit',
        payload: false
      });
      dispatch({
        type: 'isDisabledBtn',
        payload: false
      });
      if (((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 400) {
        var trackableMessage = (_c = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.trackableMessage;
        if (trackableMessage === _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].IBAN_KO) {
          dispatch({
            type: 'errorIban',
            payload: t('IBAN.errors.incorrect')
          });
        } else {
          window.location.href = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["generatePath"])(_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PAYMENT_METHODS, {
            action: 'erreur'
          });
        }
      }
    }
  });
  var initIban = function initIban(params) {
    var currentIban = state === null || state === void 0 ? void 0 : state.iban;
    if (params["iban_field_1"]) {
      currentIban = '';
      for (var index = 0; index < 7; index++) {
        currentIban += params["iban_field_".concat(index + 1)];
      }
    } else if (params["iban"]) {
      currentIban = params["iban"];
    }
    return currentIban;
  };
  var onSubmit = function onSubmit(params) {
    var _a;
    var response = state || {};
    var paymentMethod = response.paymentMethod,
      iban = response.iban,
      isIbanDifferentWithSearchMandate = response.isIbanDifferentWithSearchMandate,
      hasMandate = response.hasMandate,
      titulaire = response.titulaire;
    var currentParams = {
      action: paymentMethod,
      iban: iban,
      has_iban_different_with_search_mandate: isIbanDifferentWithSearchMandate ? isIbanDifferentWithSearchMandate : '0',
      has_mandate: hasMandate ? '1' : '0'
    };
    if ((params === null || params === void 0 ? void 0 : params.type) === 'noIbanMandate') {
      currentParams.iban = initIban(params);
      currentParams.holder = params === null || params === void 0 ? void 0 : params.ownerName;
    } else if ((params === null || params === void 0 ? void 0 : params.type) !== 'noDataForm') {
      var civilities = {
        M: t('managePayments.civilty.mr'),
        MME: t('managePayments.civilty.mrs')
      };
      currentParams.iban = initIban(params);
      currentParams.civility = civilities[(_a = params === null || params === void 0 ? void 0 : params.civility) === null || _a === void 0 ? void 0 : _a.value];
      currentParams.first_name = params === null || params === void 0 ? void 0 : params.surname;
      currentParams.last_name = params === null || params === void 0 ? void 0 : params.name;
      currentParams.mobile_phone = params === null || params === void 0 ? void 0 : params.phoneNumber;
    } else {
      currentParams.holder = titulaire;
    }
    dispatch({
      type: 'errorIban',
      payload: ''
    });
    managePayment.mutate(currentParams);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaymentMethodsContext.Provider, {
    value: Object.assign(Object.assign({}, paymentReducerMemo), {
      onSubmit: onSubmit
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_1__["BackgroundBubbles"], {
    id: "payment-methods",
    type: "payment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_12__["SzTypographie"], {
    variant: "H1",
    size: isMobile ? 'L' : 'XL',
    align: "center",
    color: "light",
    weight: "black",
    className: "mb-4 text-uppercase"
  }, t('managePayments.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white rounded-3 position-relative mx-auto mb-lg-3 px-3 px-lg-6 py-4 py-lg-5",
    style: {
      maxWidth: 750
    }
  }, paymentModes[paymentMode] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentMode__WEBPACK_IMPORTED_MODULE_8__["default"], null) : isConfirmation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentMethodValidation__WEBPACK_IMPORTED_MODULE_11__["default"], null) : isEfacture === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EfacturePaymentChoice__WEBPACK_IMPORTED_MODULE_10__["EfacturePaymentChoice"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentMethodError__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
}

/***/ })

}]);