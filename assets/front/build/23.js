(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./assets/img/cross-circle.svg":
/*!*************************************!*\
  !*** ./assets/img/cross-circle.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/cross-circle.svg");

/***/ }),

/***/ "./assets/img/icons/pen-paper-icon.svg":
/*!*********************************************!*\
  !*** ./assets/img/icons/pen-paper-icon.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/pen-paper-icon.svg");

/***/ }),

/***/ "./assets/img/icons/single-neutral-icon.svg":
/*!**************************************************!*\
  !*** ./assets/img/icons/single-neutral-icon.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/single-neutral-icon.svg");

/***/ }),

/***/ "./assets/img/login-reset/find-ref.png":
/*!*********************************************!*\
  !*** ./assets/img/login-reset/find-ref.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/find-ref.png");

/***/ }),

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

/***/ "./assets/js/components/FormButtons/index.tsx":
/*!****************************************************!*\
  !*** ./assets/js/components/FormButtons/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function FormButtons(_a) {
  var _a$marginTop = _a.marginTop,
    marginTop = _a$marginTop === void 0 ? true : _a$marginTop,
    buttonsProps = __rest(_a, ["marginTop"]);
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _b = buttonsProps.previous || {},
    _b$label = _b.label,
    prevLabel = _b$label === void 0 ? t('go_back') : _b$label,
    _b$enabled = _b.enabled,
    prevEnabled = _b$enabled === void 0 ? false : _b$enabled,
    _b$prevArrow = _b.prevArrow,
    prevArrow = _b$prevArrow === void 0 ? true : _b$prevArrow,
    defaultPrev = __rest(_b, ["label", "enabled", "prevArrow"]);
  var _c = buttonsProps.next || {},
    _c$label = _c.label,
    nextLabel = _c$label === void 0 ? t('validate') : _c$label,
    _c$arrow = _c.arrow,
    arrow = _c$arrow === void 0 ? false : _c$arrow,
    _c$enabled = _c.enabled,
    nextEnabled = _c$enabled === void 0 ? true : _c$enabled,
    defaultNext = __rest(_c, ["label", "arrow", "enabled"]);
  var leftArrow = 'keyboard-arrow-left';
  var rightArrow = 'keyboard-arrow-right';
  var prevIcon = (defaultPrev === null || defaultPrev === void 0 ? void 0 : defaultPrev.alignIcon) === 'right' ? rightArrow : leftArrow;
  var previous = Object.assign({
    id: 'previousButton',
    variant: 'text',
    align: 'left',
    icon: prevArrow ? prevIcon : undefined,
    alignIcon: 'left',
    onClick: function onClick() {},
    loader: false,
    disabled: defaultPrev.loader || false
  }, defaultPrev);
  var next = Object.assign({
    id: 'nextButton',
    variant: 'contained',
    align: 'left',
    icon: arrow ? rightArrow : undefined,
    onClick: function onClick() {},
    disabled: defaultNext.loader || false,
    type: 'submit'
  }, defaultNext);
  var buttonClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('row', {
    'mt-3 mt-lg-4': marginTop
  });
  var previousClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('col-12 order-lg-0', {
    'col-lg-6': nextEnabled,
    'text-lg-right': 'right' === previous.align
  });
  var nextClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('col-12 mb-2 mb-lg-0 order-lg-1', {
    'col-lg-6': prevEnabled,
    'text-lg-right': 'right' === next.align
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: buttonClassnames
  }, nextEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: nextClassnames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], Object.assign({
    id: next.id,
    border: "soft",
    alignIcon: "right",
    isDisabled: next.disabled
  }, next, {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
    }
  }), nextLabel)), prevEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: previousClassnames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], Object.assign({
    id: previous.id,
    border: "soft",
    className: "pl-0",
    isDisabled: previous.disabled
  }, previous), prevLabel)));
}

/***/ }),

/***/ "./assets/js/components/background/BackgroundBubbles/background-bubbles.scss":
/*!***********************************************************************************!*\
  !*** ./assets/js/components/background/BackgroundBubbles/background-bubbles.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/background/BackgroundBubbles/index.tsx":
/*!*********************************************************************!*\
  !*** ./assets/js/components/background/BackgroundBubbles/index.tsx ***!
  \*********************************************************************/
/*! exports provided: BackgroundBubbles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundBubbles", function() { return BackgroundBubbles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _Bubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Bubble */ "./assets/js/components/Bubble/index.jsx");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _background_bubbles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./background-bubbles.scss */ "./assets/js/components/background/BackgroundBubbles/background-bubbles.scss");
/* harmony import */ var _background_bubbles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_background_bubbles_scss__WEBPACK_IMPORTED_MODULE_5__);






var BackgroundBubbles = function BackgroundBubbles(_ref) {
  var id = _ref.id,
    children = _ref.children,
    type = _ref.type,
    customMinHeight = _ref.customMinHeight;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var RoundedImg1ClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()('rounded-img-1', type);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tag: "main",
    id: id,
    className: "overflow-x-clip bg-brand-dark px-0 pb-md-md",
    fullscreen: true,
    minHeight: customMinHeight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container pt-0 pt-lg-3 pb-lg-0 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bubble__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "green",
    size: isMobile ? 'sm' : 'md',
    position: "29"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bubble__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "dark",
    size: isMobile ? 'sm' : 'md',
    position: "30"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: RoundedImg1ClassNames
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-img-2"
  }), children));
};

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

/***/ "./assets/js/hooks/useSearchParams.ts":
/*!********************************************!*\
  !*** ./assets/js/hooks/useSearchParams.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSearchParams; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function useSearchParams() {
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useLocation"])(),
    search = _useLocation.search;
  return new URLSearchParams(search);
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

/***/ "./assets/js/models/loginReset/index.ts":
/*!**********************************************!*\
  !*** ./assets/js/models/loginReset/index.ts ***!
  \**********************************************/
/*! exports provided: customerRefSchema, contactConfirmMobileSchema, contactConfirmPhoneSchema, passwordEmailSchema, passwordUpdateSchema, updateLoginSchema, postalCodeSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerRefSchema", function() { return customerRefSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactConfirmMobileSchema", function() { return contactConfirmMobileSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactConfirmPhoneSchema", function() { return contactConfirmPhoneSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordEmailSchema", function() { return passwordEmailSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUpdateSchema", function() { return passwordUpdateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLoginSchema", function() { return updateLoginSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postalCodeSchema", function() { return postalCodeSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/models */ "./assets/js/models/index.ts");



var customerRefSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  reference: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().isRef('loginReset.form.errors.invalidRef').required('loginReset.form.errors.mandatory')
});
var contactConfirmMobileSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  telMobile: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('loginReset.form.errors.mandatory').matches(_app_models__WEBPACK_IMPORTED_MODULE_2__["mobileOrPhoneAllowSpaces"], 'errors.mobilePhone.invalid')
});
var contactConfirmPhoneSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  telFixe: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('loginReset.form.errors.mandatory').matches(_app_models__WEBPACK_IMPORTED_MODULE_2__["mobileOrPhoneAllowSpaces"], 'errors.phone.invalid')
});
var passwordEmailSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('loginReset.form.errors.mandatory').email('errors.email.invalid')
});
var passwordUpdateSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  password: _app_models__WEBPACK_IMPORTED_MODULE_2__["password"],
  passwordConfirm: Object(_app_models__WEBPACK_IMPORTED_MODULE_2__["repeated_password"])('password')
});
var updateLoginSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  telMobile: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(_app_models__WEBPACK_IMPORTED_MODULE_2__["mobileMatch"], 'errors.mobilePhone.invalid'),
  email: _app_models__WEBPACK_IMPORTED_MODULE_2__["email"],
  repeated_email: Object(_app_models__WEBPACK_IMPORTED_MODULE_2__["repeated_email"])(),
  raw_password: _app_models__WEBPACK_IMPORTED_MODULE_2__["password"],
  repeated_password: Object(_app_models__WEBPACK_IMPORTED_MODULE_2__["repeated_password"])('raw_password'),
  updateEfacture: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().nullable()
});
var postalCodeSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  postalCode: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(_app_models__WEBPACK_IMPORTED_MODULE_2__["frenchZipCodeRegex"], 'loginReset.form.errors.invalidZipcode').required('mandatory_field')
});

/***/ }),

/***/ "./assets/js/pages/login-reset/CustomerRefModal.tsx":
/*!**********************************************************!*\
  !*** ./assets/js/pages/login-reset/CustomerRefModal.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomerRefModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_login_reset_find_ref_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @img/login-reset/find-ref.png */ "./assets/img/login-reset/find-ref.png");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");






function CustomerRefModal(_ref) {
  var isShowModal = _ref.isShowModal,
    handleCloseModal = _ref.handleCloseModal;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: isShowModal,
    handleClose: handleCloseModal,
    size: "lg",
    backdrop: true,
    centered: true,
    scrollable: true,
    border: "smooth",
    fullscreen: "md",
    title: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('loginReset.login.step1.helpRef.modal.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-0"
  }, t('loginReset.login.step1.helpRef.modal.subtitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-0 my-3 my-lg-4 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_login_reset_find_ref_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "ref-client",
    className: "w-100",
    style: {
      maxWidth: 540
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    i18nKey: 'loginReset.login.step1.helpRef.modal.text',
    components: {
      redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
        decorate: true,
        to: _app_constants__WEBPACK_IMPORTED_MODULE_4__["CUSTOMER_SERVICE_URL"],
        className: "text-dark"
      })
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: handleCloseModal,
    id: "close-pedago-modal"
  }, t('understood'))));
}

/***/ }),

/***/ "./assets/js/pages/login-reset/LoginResetBox.tsx":
/*!*******************************************************!*\
  !*** ./assets/js/pages/login-reset/LoginResetBox.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginResetBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/emotion-css.esm.js");



function LoginResetBox(_ref) {
  var children = _ref.children,
    title = _ref.title,
    subtitle = _ref.subtitle,
    large = _ref.large;
  var containerStyles = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
    backgroundColor: 'white',
    borderRadius: '1rem',
    position: 'relative',
    margin: 'auto',
    padding: '1.5rem',
    '@media screen and (min-width: 992px)': {
      padding: '3rem 4rem',
      maxWidth: large ? 750 : 540
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "loginResetContainer",
    className: containerStyles
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L",
    className: "mb-2"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "mb-2 text-dark"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "step-content mt-2"
  }, children));
}

/***/ }),

/***/ "./assets/js/pages/login-reset/LoginResetStepper.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/login-reset/LoginResetStepper.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginResetStepper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_pages_login_reset_steps_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/pages/login-reset/steps/error */ "./assets/js/pages/login-reset/steps/error.tsx");
/* harmony import */ var _LoginResetBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginResetBox */ "./assets/js/pages/login-reset/LoginResetBox.tsx");
/* harmony import */ var _useSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSteps */ "./assets/js/pages/login-reset/useSteps.tsx");





function LoginResetStepper() {
  var steps = Object(_useSteps__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, steps.map(function (step) {
    if (step.error) {
      var body = step.body,
        description = step.description,
        _path = step.path,
        _title = step.title,
        submit = step.submit,
        success = step.success;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        key: _path,
        path: _path
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginResetBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: _title,
        large: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_login_reset_steps_error__WEBPACK_IMPORTED_MODULE_2__["LoginResetError"], {
        body: body,
        description: description,
        submit: submit,
        success: success
      })));
    }
    var path = step.path,
      title = step.title,
      subtitle = step.subtitle,
      large = step.large,
      Step = step.step;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: path,
      path: path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginResetBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: title,
      subtitle: subtitle,
      large: large
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, null)));
  }));
}

/***/ }),

/***/ "./assets/js/pages/login-reset/index.tsx":
/*!***********************************************!*\
  !*** ./assets/js/pages/login-reset/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginReset; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/background/BackgroundBubbles */ "./assets/js/components/background/BackgroundBubbles/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _LoginResetStepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginResetStepper */ "./assets/js/pages/login-reset/LoginResetStepper.tsx");
/* harmony import */ var _app_pages_sign_up_AccountInfos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/pages/sign-up/AccountInfos */ "./assets/js/pages/sign-up/AccountInfos.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");









function LoginReset() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__["useIsMobile"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useLocation"])();
  var currentPath = location.pathname;
  var displayAccountInfos = currentPath === _app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].LOGIN_RESET.CREATE_CEL;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_2__["BackgroundBubbles"], {
    id: "loginResetPage",
    type: "login-reset",
    customMinHeight: displayAccountInfos ? 'calc(100vh - 461px)' : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H1",
    size: isMobile ? 'L' : 'XL',
    align: "center",
    color: "light",
    weight: "black",
    className: "mb-4 text-uppercase"
  }, t('loginReset.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginResetStepper__WEBPACK_IMPORTED_MODULE_5__["default"], null)), displayAccountInfos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_sign_up_AccountInfos__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/ConfirmContact.tsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/ConfirmContact.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmContact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_models_loginReset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/models/loginReset */ "./assets/js/models/loginReset/index.ts");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _app_form_InputSeries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/form/InputSeries */ "./assets/js/form/InputSeries.tsx");
/* harmony import */ var _app_models_InputSeries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/models/InputSeries */ "./assets/js/models/InputSeries.ts");
/* harmony import */ var _CustomerRefModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../CustomerRefModal */ "./assets/js/pages/login-reset/CustomerRefModal.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/hooks/useSearchParams */ "./assets/js/hooks/useSearchParams.ts");
/* harmony import */ var _confirm_contact_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./confirm-contact.scss */ "./assets/js/pages/login-reset/steps/confirm-contact.scss");
/* harmony import */ var _confirm_contact_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_confirm_contact_scss__WEBPACK_IMPORTED_MODULE_19__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





















function ConfirmContact() {
  var _this = this;
  var _a;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useLocation"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowModal = _useState4[0],
    setShowModal = _useState4[1];
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_17__["useGA"])(),
    track = _useGA.track;
  var _location$state = location.state,
    apiData = _location$state.apiData,
    customerRef = _location$state.customerRef;
  var params = Object(_app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_18__["default"])();
  var confirmMobilePhone = params.get('type') === 'mobile-phone';
  var confirmPhone = params.get('type') === 'phone';
  var confirmInvoiceCode = params.get('type') === 'invoice-code';
  var _b = Object(react_query__WEBPACK_IMPORTED_MODULE_14__["useMutation"])(function (params) {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_6__["API"].RESET_CREDENTIALS.CHECK_USER_INFOS, params);
    }, {
      onSuccess: function onSuccess(_ref) {
        var data = _ref.data;
        var infoFromApi = data.content ? data.content.info : '';
        var referenceFromApi = data.content ? data.content.reference : '';
        if (data.message === _app_constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_CEL) {
          history.push({
            pathname: _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN_RESET.CREATE_CEL
          }, {
            reference: referenceFromApi
          });
        } else {
          history.push({
            pathname: _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN_RESET.LOGIN_CEL
          }, {
            email: infoFromApi,
            reference: referenceFromApi
          });
        }
      },
      onError: function onError(_ref2) {
        var response = _ref2.response;
        var _a;
        var errorMessages = {
          KO_NB_REF: _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN_RESET.ERROR_CONTRACTS,
          KO_SERVICES: _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN_RESET.SERVICES_ERROR,
          KO_RESILIE: _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN_RESET.CANCELED_ERROR
        };
        var defaultRoute = _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN_RESET.UPDATE_CEL_ERROR;
        var errorMessage = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message;
        if (errorMessages[errorMessage]) {
          history.push(errorMessages[errorMessage]);
        } else if (['KO_MOBILE', 'KO_FIXE', 'KO_ID_CP'].includes(errorMessage)) {
          return;
        } else {
          history.push(defaultRoute);
        }
      }
    }),
    isError = _b.isError,
    error = _b.error,
    reset = _b.reset,
    isLoading = _b.isLoading,
    checkUserInfos = __rest(_b, ["isError", "error", "reset", "isLoading"]);
  var onSubmit = function onSubmit(values) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var fieldsToFormat, filteredParams, identifier_0, identifier_1, identifier_2, identifier_3, identifier_4, formattedParams, natureConfirmationIdentity;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fieldsToFormat = ['telMobile', 'telFixe'];
            filteredParams = Object.assign(Object.assign(Object.assign({}, values), Object.fromEntries(fieldsToFormat.filter(function (field) {
              return values[field];
            }).map(function (field) {
              return [field, Object(_app_services_Utils__WEBPACK_IMPORTED_MODULE_15__["cleanText"])(values[field])];
            }))), {
              reference: customerRef
            });
            identifier_0 = filteredParams.identifier_0, identifier_1 = filteredParams.identifier_1, identifier_2 = filteredParams.identifier_2, identifier_3 = filteredParams.identifier_3, identifier_4 = filteredParams.identifier_4, formattedParams = __rest(filteredParams, ["identifier_0", "identifier_1", "identifier_2", "identifier_3", "identifier_4"]);
            natureConfirmationIdentity = confirmMobilePhone ? 'telephone_mobile' : confirmPhone ? 'telephone_fixe' : confirmInvoiceCode ? 'code' : undefined;
            if (natureConfirmationIdentity) {
              track('REINIT_CEL_11', {
                nature_confirmation_identite: natureConfirmationIdentity
              });
            }
            checkUserInfos.mutate(formattedParams);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN_RESET.CUSTOMER_REF);
  };
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
  };
  var handleOpenModal = function handleOpenModal() {
    setShowModal(true);
  };
  var inputContainerClasses = 'col-12 px-0 mb-3 pt-2 pt-lg-3';
  var previousButton = {
    label: t('go_back'),
    align: 'left',
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var nextButton = {
    label: t('validate'),
    align: 'right',
    loader: isLoading
  };
  var inputSeries = {
    prefixName: 'identifier',
    length: 4,
    label: t('loginReset.login.step2.label_invoiceCode'),
    placeholders: ['0', '0', '0', '0']
  };
  var initialValuesMobile = {
    telMobile: ''
  };
  var initialValuesPhone = {
    telFixe: ''
  };
  var intialValuesInvoiceCode = {
    identifier: '',
    postalCode: ''
  };
  var initialValuesConfirmContact = function initialValuesConfirmContact() {
    if (confirmMobilePhone) {
      return initialValuesMobile;
    } else if (confirmPhone) {
      return initialValuesPhone;
    }
    return intialValuesInvoiceCode;
  };
  var contactConfirmInvoiceCodeSchema = Object(_app_models_InputSeries__WEBPACK_IMPORTED_MODULE_11__["InputSeriesSchema"])({
    name: inputSeries.prefixName,
    length: 4
  }).concat(_app_models_loginReset__WEBPACK_IMPORTED_MODULE_8__["postalCodeSchema"]);
  var validationSchemaConfirmContact = function validationSchemaConfirmContact() {
    if (confirmMobilePhone) {
      return _app_models_loginReset__WEBPACK_IMPORTED_MODULE_8__["contactConfirmMobileSchema"];
    } else if (confirmPhone) {
      return _app_models_loginReset__WEBPACK_IMPORTED_MODULE_8__["contactConfirmPhoneSchema"];
    }
    return contactConfirmInvoiceCodeSchema;
  };
  var subtitleContext = function subtitleContext() {
    if (confirmMobilePhone) {
      return 'mobilePhone';
    } else if (confirmPhone) {
      return 'phone';
    }
    return 'invoiceCode';
  };
  var _ref3 = isError ? (_a = error.response) === null || _a === void 0 ? void 0 : _a.data : {},
    _ref3$message = _ref3.message,
    message = _ref3$message === void 0 ? '' : _ref3$message;
  var isMobileError = isError && message === 'KO_MOBILE';
  var isPhoneError = isError && message === 'KO_FIXE';
  var isIdCpError = isError && message === 'KO_ID_CP';
  var context = Object(clsx__WEBPACK_IMPORTED_MODULE_16__["default"])({
    mobilePhone: isMobileError,
    phone: isPhoneError,
    invoiceCode: isIdCpError
  });
  var errorText = t('loginReset.login.step2.mismatch', {
    context: context
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "mb-2 text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    i18nKey: 'loginReset.login.step2.subtitle',
    context: subtitleContext(),
    values: {
      info: apiData
    },
    components: {
      boldText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
        weight: "bold",
        tag: "span"
      })
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValuesConfirmContact(),
    onSubmit: onSubmit,
    validationSchema: validationSchemaConfirmContact(),
    validateOnChange: false
  }, function (_ref4) {
    var values = _ref4.values,
      handleChange = _ref4.handleChange,
      handleSubmit = _ref4.handleSubmit,
      handleBlur = _ref4.handleBlur;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, confirmMobilePhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: inputContainerClasses
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      name: "telMobile",
      id: "telMobile",
      autocomplete: "off",
      value: values.telMobile,
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('loginReset.login.step2.label_mobilePhone'),
      placeholder: t('loginReset.login.step2.placeholder_phone'),
      variant: "outlined"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "telMobile"
    }), isMobileError && values.telMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-telMobile",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, errorText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, errorText))), confirmPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: inputContainerClasses
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      name: "telFixe",
      id: "telFixe",
      autocomplete: "off",
      value: values.telFixe,
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('loginReset.login.step2.label_phone'),
      placeholder: t('loginReset.login.step2.placeholder_phone'),
      variant: "outlined"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "telFixe"
    }), isPhoneError && values.telFixe && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-telFixe",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, errorText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, errorText))), confirmInvoiceCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "digit-form pt-3 row w-100 m-0 no-gutters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_InputSeries__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, inputSeries))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      onClick: handleOpenModal,
      variant: "text",
      className: "pl-0 mb-3",
      type: "button",
      "data-cy": "open-help-reference-modal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "regular"
    }, t('loginReset.login.step2.unknownInfoButton'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      name: "postalCode",
      id: "postalCode",
      autocomplete: "off",
      value: values.postalCode,
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('loginReset.login.step2.label_zipCode'),
      placeholder: t('loginReset.login.step2.placeholder_zipCode'),
      variant: "outlined"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "postalCode",
      customDisplay: true
    })), isIdCpError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-api-validation",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, errorText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, errorText)), !confirmInvoiceCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      i18nKey: 'loginReset.login.step2.unknownInfoCustomerService',
      components: {
        redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
          decorate: true,
          to: _app_constants__WEBPACK_IMPORTED_MODULE_6__["CUSTOMER_SERVICE_URL"],
          "data-cy": "redirect-customer-service"
        })
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomerRefModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleCloseModal: handleCloseModal,
    isShowModal: isShowModal
  }));
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/CreateCel.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/CreateCel.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateCel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");






function CreateCel() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])();
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_5__["useGA"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('REINIT_CEL_12', {
      etat_cel: 'client_inexistant'
    });
  }, []);
  var reference = location.state.reference;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "mb-2 text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: 'loginReset.login.step3.create_cel.subtitle',
    values: {
      customerRef: reference
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 d-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    variant: "contained",
    border: "soft",
    id: "createCelButton",
    onClick: function onClick() {
      return history.push(_app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].SIGN_UP, {
        from: _app_constants__WEBPACK_IMPORTED_MODULE_3__["LOGIN_RESET"]
      });
    }
  }, t('loginReset.login.step3.create_cel.button'))));
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/CustomerRef.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/CustomerRef.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomerRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_models_loginReset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/models/loginReset */ "./assets/js/models/loginReset/index.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CustomerRefModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../CustomerRefModal */ "./assets/js/pages/login-reset/CustomerRefModal.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















function CustomerRef() {
  var _this = this;
  var _a;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var recaptcha = window.tsme_data.recaptcha;
  var recaptchaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_14__["useGA"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowModal = _useState4[0],
    setShowModal = _useState4[1];
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
  };
  var handleOpenModal = function handleOpenModal() {
    setShowModal(true);
    track('REINIT_CEL_10');
  };
  var _b = Object(react_query__WEBPACK_IMPORTED_MODULE_12__["useMutation"])(function (params) {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_11__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_7__["API"].RESET_CREDENTIALS.CHECK_REFERENCE, params);
    }, {
      onSuccess: function onSuccess(_ref, params) {
        var _types;
        var data = _ref.data;
        var types = (_types = {}, _defineProperty(_types, _app_constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK_TEL_MOBILE, 'mobile-phone'), _defineProperty(_types, _app_constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK_TEL_FIXE, 'phone'), _defineProperty(_types, _app_constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK_ID_CP, 'invoice-code'), _types);
        var search = "?type=".concat(types[data.message]);
        var infoFromApi = data.content ? data.content.info : '';
        var customerRef = params.reference;
        history.push({
          pathname: _app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].LOGIN_RESET.CONFIRM_CONTACT,
          search: search
        }, {
          apiData: infoFromApi,
          customerRef: customerRef
        });
      }
    }),
    isError = _b.isError,
    error = _b.error,
    reset = _b.reset,
    isLoading = _b.isLoading,
    checkReference = __rest(_b, ["isError", "error", "reset", "isLoading"]);
  var onSubmit = function onSubmit(values) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _c, fieldsToFormat, params;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fieldsToFormat = ['reference'];
            params = Object.assign(Object.assign({}, values), Object.fromEntries(fieldsToFormat.filter(function (field) {
              return values[field];
            }).map(function (field) {
              return [field, Object(_app_services_Utils__WEBPACK_IMPORTED_MODULE_13__["cleanText"])(values[field])];
            })));
            if (!(recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.enabled)) {
              _context.next = 6;
              break;
            }
            _context.next = 5;
            return (_c = recaptchaRef === null || recaptchaRef === void 0 ? void 0 : recaptchaRef.current) === null || _c === void 0 ? void 0 : _c.executeAsync();
          case 5:
            params['g-recaptcha-response'] = _context.sent;
          case 6:
            track('REINIT_CEL_9');
            checkReference.mutate(params);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].LOGIN_LOST_ID);
  };
  var previousButton = {
    label: t('go_back'),
    align: 'left',
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var nextButton = {
    label: t('validate'),
    align: 'right',
    loader: isLoading
  };
  var _ref2 = isError ? (_a = error.response) === null || _a === void 0 ? void 0 : _a.data : {},
    _ref2$message = _ref2.message,
    message = _ref2$message === void 0 ? '' : _ref2$message;
  var isRefError = isError ? message === 'KO_REF' : false;
  var isCaptchaError = isError ? message === 'KO_CAPTCHA' : false;
  var getErrorMessage = function getErrorMessage() {
    if (isRefError) {
      return 'loginReset.login.step1.error';
    } else if (isCaptchaError) {
      return 'loginReset.login.step1.error_captcha';
    }
    return 'errors.techError';
  };
  var errorMessage = getErrorMessage();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
      reference: ''
    },
    onSubmit: onSubmit,
    validationSchema: _app_models_loginReset__WEBPACK_IMPORTED_MODULE_8__["customerRefSchema"],
    validateOnChange: false
  }, function (_ref3) {
    var values = _ref3.values,
      errors = _ref3.errors,
      handleChange = _ref3.handleChange,
      handleSubmit = _ref3.handleSubmit,
      handleBlur = _ref3.handleBlur;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 px-0 pt-2 pt-lg-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzInput"], {
      name: "reference",
      id: "reference",
      autocomplete: "off",
      value: values.reference,
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('loginReset.login.step1.label'),
      placeholder: t('loginReset.login.step1.placeholder'),
      variant: "outlined"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      field: "reference",
      customDisplay: errors.reference
    }), isError && values.reference && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-reference",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, t(errorMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, t(errorMessage)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzButton"], {
      onClick: handleOpenModal,
      variant: "text",
      className: "pl-0",
      type: "button",
      "data-cy": "open-help-reference-modal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "regular"
    }, t('loginReset.login.step1.helpRef.button'))), (recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.enabled) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: recaptchaRef,
      size: "invisible",
      sitekey: recaptcha.invisiblePublicKey,
      badge: "bottomleft"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomerRefModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleCloseModal: handleCloseModal,
    isShowModal: isShowModal
  }));
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/ErrorContracts.tsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/ErrorContracts.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorContracts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_components_FormButtons_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/FormButtons/index */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");






function ErrorContracts() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_5__["useGA"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('REINIT_CEL_12', {
      etat_cel: 'client_connu_pls_contrats'
    });
  }, []);
  var nextButton = {
    label: t('loginReset.login.step3.error_contracts.button'),
    align: 'right',
    onClick: function onClick() {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].CUSTOMER_SERVICE);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    next: nextButton
  });
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/ExistingCel.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/ExistingCel.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExistingCel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ExistingCel() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])(),
    state = _useLocation.state;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    nextLoader = _useState4[0],
    setNextLoader = _useState4[1];
  var userMail = state.userMail;
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push({
      pathname: _app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].LOGIN_RESET.UPDATE_LOGIN
    }, {
      userMail: userMail
    });
  };
  var handleNextClick = function handleNextClick() {
    setNextLoader(true);
    history.push({
      pathname: _app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].LOGIN
    }, {
      userMail: userMail
    });
  };
  var previousButton = {
    label: t('loginReset.login.existing_error.correction_btn'),
    align: 'left',
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var nextButton = {
    label: t('loginReset.login.existing_error.connexion_btn'),
    align: 'right',
    loader: nextLoader,
    onClick: handleNextClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    previous: previousButton,
    next: nextButton
  });
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/LoginCel.tsx":
/*!********************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/LoginCel.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginCel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/Box */ "./assets/js/components/Box/index.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _img_icons_pen_paper_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @img/icons/pen-paper-icon.svg */ "./assets/img/icons/pen-paper-icon.svg");
/* harmony import */ var _img_icons_single_neutral_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @img/icons/single-neutral-icon.svg */ "./assets/img/icons/single-neutral-icon.svg");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");












function LoginCel() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__["useIsMobile"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useLocation"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useHistory"])();
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_11__["useGA"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('REINIT_CEL_12', {
      etat_cel: 'client_connu'
    });
  }, []);
  var _location$state = location.state,
    email = _location$state.email,
    reference = _location$state.reference;
  var loginCelButtons = [{
    onClick: function onClick() {
      history.push({
        pathname: _app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].LOGIN
      }, {
        userMail: email
      });
      track('REINIT_CEL_13');
    },
    picto: {
      src: _img_icons_single_neutral_icon_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
      alt: ''
    },
    label: t('loginReset.login.step3.login_cel.button_login'),
    dataCy: 'redirect-login'
  }, {
    onClick: function onClick() {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].LOGIN_RESET.UPDATE_LOGIN);
      track('REINIT_CEL_14');
    },
    picto: {
      src: _img_icons_pen_paper_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
      alt: ''
    },
    label: t('loginReset.login.step3.login_cel.button_reset'),
    dataCy: 'redirect-login-reset'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "mb-2 text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    i18nKey: 'loginReset.login.step3.login_cel.subtitle',
    values: {
      customerRef: reference,
      email: email
    },
    components: {
      boldText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
        weight: "bold",
        tag: "span"
      })
    }
  })), loginCelButtons.map(function (item, key) {
    var onClick = item.onClick,
      picto = item.picto,
      label = item.label,
      dataCy = item.dataCy;
    var boxClasses = classnames__WEBPACK_IMPORTED_MODULE_7___default()('shadow-sm', {
      'mb-3': key !== loginCelButtons.length - 1,
      'mt-3 mt-lg-4': key === 0
    });
    var pictoStyles = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])({
      width: isMobile ? 15 : 24,
      height: isMobile ? 15 : 24
    });
    var iconStyles = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])({
      fontSize: '0.9rem !important',
      marginLeft: 'auto'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
      backgroundColor: "white",
      className: boxClasses,
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center p-3 p-lg-4 cursor-pointer",
      onClick: onClick,
      "data-cy": dataCy
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-gray-200 rounded-circle d-flex align-items-center justify-content-center p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: picto.src,
      alt: picto.alt,
      className: pictoStyles
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "text-dark ml-3 mb-0 mr-3 mr-sm-0",
      size: "XL"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      i18nKey: label,
      components: {
        boldText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
          weight: "bold",
          tag: "span"
        })
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
      icon: "arrow-right-1",
      variant: "line",
      className: iconStyles
    })));
  }));
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/UpdateLogin.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/UpdateLogin.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateLogin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/tsme-react-components */ "./assets/js/components/tsme-react-components/index.tsx");
/* harmony import */ var _app_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/tsme-react-components/components/Password/utils */ "./assets/js/components/tsme-react-components/components/Password/utils.tsx");
/* harmony import */ var _app_models_loginReset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/models/loginReset */ "./assets/js/models/loginReset/index.ts");
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_components_InfoBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/InfoBox */ "./assets/js/components/InfoBox.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



















function UpdateLogin() {
  var _this = this;
  var _a, _b, _c, _d, _e, _f, _g;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var isDesktop = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_11__["useIsDesktop"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["useHistory"])();
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["useLocation"])(),
    state = _useLocation.state;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPasswordRules = _useState2[0],
    setShowPasswordRules = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    displayEfacture = _useState4[0],
    setDisplayEfacture = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState6 = _slicedToArray(_useState5, 2),
    EFactureMail = _useState6[0],
    setEFactureMail = _useState6[1];
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_17__["useGA"])(),
    track = _useGA.track;
  var defaultFormValues = {
    telMobile: '',
    email: (_a = state === null || state === void 0 ? void 0 : state.userMail) !== null && _a !== void 0 ? _a : '',
    repeated_email: (_b = state === null || state === void 0 ? void 0 : state.userMail) !== null && _b !== void 0 ? _b : '',
    raw_password: '',
    repeated_password: ''
  };
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object.assign({}, defaultFormValues)),
    _useState8 = _slicedToArray(_useState7, 2),
    initialValues = _useState8[0],
    setInitialValues = _useState8[1];
  var _ref = (_e = (_d = (_c = window.tsme_data) === null || _c === void 0 ? void 0 : _c.footer) === null || _d === void 0 ? void 0 : _d.links_bottom) === null || _e === void 0 ? void 0 : _e.privacy_policy,
    link = _ref.link;
  var _h = Object(react_query__WEBPACK_IMPORTED_MODULE_14__["useMutation"])(function (params) {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_15__["API"].RESET_CREDENTIALS.REINIT_ACCOUNT, params);
    }, {
      onSuccess: function onSuccess(_ref2, params) {
        var data = _ref2.data;
        var _a;
        if (data.message === _app_constants__WEBPACK_IMPORTED_MODULE_15__["CODES"].KO_EFACTURE) {
          var newInitValues = Object.assign({}, params);
          setDisplayEfacture(true);
          setEFactureMail((_a = data === null || data === void 0 ? void 0 : data.content) === null || _a === void 0 ? void 0 : _a.info);
          setInitialValues(newInitValues);
        } else if (data.message === _app_constants__WEBPACK_IMPORTED_MODULE_15__["CODES"].OK) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_15__["ROUTES"].LOGIN_RESET.UPDATE_CEL_SUCCESS);
          track('REINIT_CEL_15');
        }
      },
      onError: function onError(_ref3) {
        var response = _ref3.response;
        var _a;
        if (response.data.message === _app_constants__WEBPACK_IMPORTED_MODULE_15__["CODES"].KO_LOGIN) {
          history.push({
            pathname: _app_constants__WEBPACK_IMPORTED_MODULE_15__["ROUTES"].LOGIN_RESET.UPDATE_CEL_EXISTING_ERROR
          }, {
            userMail: (_a = response.data.content) === null || _a === void 0 ? void 0 : _a.info
          });
        } else if (response.data.message !== 'global.form_has_errors') {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_15__["ROUTES"].LOGIN_RESET.UPDATE_CEL_ERROR);
          track('REINIT_CEL_16');
        }
      }
    }),
    isError = _h.isError,
    error = _h.error,
    reset = _h.reset,
    isLoading = _h.isLoading,
    isSuccess = _h.isSuccess,
    reinitAccount = __rest(_h, ["isError", "error", "reset", "isLoading", "isSuccess"]);
  var emailFormGroupClasses = classnames__WEBPACK_IMPORTED_MODULE_10___default()('border-bottom sz-border-1 pt-3 pb-3 pb-lg-4', {
    'border-top': isDesktop
  });
  var refPassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var aria = {
    showPasswordLabel: t('global.form.password', {
      context: 'show'
    }),
    hidePasswordLabel: t('global.form.password', {
      context: 'hide'
    })
  };
  var formErrors = isError ? (_g = (_f = error.response) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.validation_errors : {};
  var formattedFormErrors = formErrors ? Object.keys(formErrors) : [];
  var isTelMobileError = formattedFormErrors.includes('telMobile');
  var isEmailError = formattedFormErrors.includes('email[first]');
  var isRepeatedEmailError = formattedFormErrors.includes('email[second]');
  var isRawPasswordError = formattedFormErrors.includes('password[first]');
  var isRepeatedPasswordError = formattedFormErrors.includes('password[second]');
  var onSubmit = function onSubmit(values) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var updatedParams, email, repeated_email, raw_password, repeated_password, formattedParams;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            updatedParams = Object.assign(Object.assign(Object.assign({}, values), displayEfacture && {
              updateEfacture: values.updateEfacture || false
            }), {
              telMobile: Object(_app_services_Utils__WEBPACK_IMPORTED_MODULE_8__["cleanText"])(values.telMobile),
              'login[first]': values.email,
              'login[second]': values.repeated_email,
              'password[first]': values.raw_password,
              'password[second]': values.repeated_password
            });
            email = updatedParams.email, repeated_email = updatedParams.repeated_email, raw_password = updatedParams.raw_password, repeated_password = updatedParams.repeated_password, formattedParams = __rest(updatedParams, ["email", "repeated_email", "raw_password", "repeated_password"]);
            reinitAccount.mutate(formattedParams);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  var ApiErrorMessage = function ApiErrorMessage(_ref4) {
    var dataCy = _ref4.dataCy,
      message = _ref4.message;
    var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation2.t;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": dataCy,
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, t(message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, t(message)));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: _app_models_loginReset__WEBPACK_IMPORTED_MODULE_7__["updateLoginSchema"],
    validateOnChange: false
  }, function (_ref5) {
    var values = _ref5.values,
      errors = _ref5.errors,
      touched = _ref5.touched,
      handleChange = _ref5.handleChange,
      handleBlur = _ref5.handleBlur,
      handleSubmit = _ref5.handleSubmit,
      setFieldValue = _ref5.setFieldValue;
    var onChange = function onChange(_ref6) {
      var target = _ref6.target;
      setFieldValue('updateEfacture', target.checked ? true : false);
    };
    var infoBoxData = {
      title: t('signUp.step3.eFacture.receive_on_mail'),
      eFactureContact: EFactureMail,
      checkboxLabel: t('signUp.step3.eFacture.confirm_login_mail'),
      checkboxValue: values.updateEfacture,
      handleChange: onChange
    };
    var passwordValidation = Object(_app_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_6__["checkPassRules"])(values.raw_password);
    var allTrue = Object.values(passwordValidation).every(function (value) {
      return value;
    });
    var messageErrorAccess = Object(_app_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_6__["messageErrorPasswordAccess"])(passwordValidation);
    var onFocus = function onFocus() {
      if (!allTrue) {
        setShowPasswordRules(true);
      }
    };
    var onBlur = function onBlur(e) {
      setShowPasswordRules(false);
      handleBlur(e);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      if (allTrue) {
        setShowPasswordRules(false);
      } else if (document.activeElement === refPassword.current) {
        setShowPasswordRules(true);
      }
    }, [passwordValidation]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit,
      autoComplete: "off"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-3 mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      name: "telMobile",
      id: "telMobile",
      autocomplete: "off",
      value: values.telMobile,
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('loginReset.login.step4.form.mobilePhone.label'),
      placeholder: t('loginReset.login.step4.form.mobilePhone.placeholder'),
      variant: "outlined",
      info: t('loginReset.login.step4.form.mobilePhone.info'),
      infoPosition: "label",
      infoDetached: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
      field: "telMobile",
      customDisplay: touched.telMobile && errors.telMobile
    }), isTelMobileError && values.telMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApiErrorMessage, {
      dataCy: "error-api-telMobile",
      message: "errors.mobilePhone.invalid"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
      i18nKey: 'loginReset.login.step4.form.mobilePhone.privacy_policy',
      components: {
        redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "font-family-medium",
          decorate: true,
          target: "_blank",
          to: link
        })
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: emailFormGroupClasses
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      variant: "outlined",
      name: "email",
      id: "email",
      autocomplete: "off",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.email,
      label: t('loginReset.login.step4.form.mail.label'),
      onPaste: _app_services_Utils__WEBPACK_IMPORTED_MODULE_8__["preventCopyPaste"],
      "aria-required": "true",
      placeholder: t('loginReset.login.step4.form.mail.placeholder')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
      field: "email",
      customDisplay: touched.email && errors.email
    }), isEmailError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApiErrorMessage, {
      dataCy: "error-api-email",
      message: "errors.email.invalid"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      variant: "outlined",
      name: "repeated_email",
      id: "repeated_email",
      autocomplete: "off",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.repeated_email,
      label: t('loginReset.login.step4.form.mail.confirm_label'),
      onPaste: _app_services_Utils__WEBPACK_IMPORTED_MODULE_8__["preventCopyPaste"],
      "aria-required": "true",
      placeholder: t('loginReset.login.step4.form.mail.placeholder')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
      field: "repeated_email",
      customDisplay: touched.repeated_email && errors.repeated_email
    }), isRepeatedEmailError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApiErrorMessage, {
      dataCy: "error-api-repeated_email",
      message: "loginReset.form.errors.email_invalid"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "position-relative mb-3 mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      ref: refPassword,
      variant: "outlined",
      name: "raw_password",
      id: "raw_password",
      autocomplete: "new-password",
      type: "password",
      onChange: handleChange,
      onBlur: onBlur,
      onFocus: onFocus,
      value: values.raw_password,
      label: t('loginReset.login.step4.form.password.label'),
      showPassword: true,
      onPaste: _app_services_Utils__WEBPACK_IMPORTED_MODULE_8__["preventCopyPaste"],
      "aria-describedby": "password-rules",
      "aria-required": "true",
      aria: aria,
      placeholder: t('loginReset.login.step4.form.password.placeholder')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_5__["PasswordRules"], {
      password: values.raw_password,
      className: 'position-absolute bg-blue-03 rounded-2',
      show: showPasswordRules
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
      field: "raw_password",
      messageAccess: messageErrorAccess,
      customDisplay: touched.raw_password && errors.raw_password
    }), isRawPasswordError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApiErrorMessage, {
      dataCy: "error-api-raw_password",
      message: "loginReset.form.errors.invalidPassword"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      variant: "outlined",
      name: "repeated_password",
      id: "repeated_password",
      autocomplete: "off",
      type: "password",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.repeated_password,
      label: t('loginReset.login.step4.form.password.confirm_label'),
      showPassword: true,
      onPaste: _app_services_Utils__WEBPACK_IMPORTED_MODULE_8__["preventCopyPaste"],
      aria: aria,
      placeholder: t('loginReset.login.step4.form.password.confirm_placeholder')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
      field: "repeated_password",
      customDisplay: touched.repeated_password && errors.repeated_password
    }), isRepeatedPasswordError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApiErrorMessage, {
      dataCy: "error-api-repeated_password",
      message: "loginReset.form.errors.invalidPassword"
    }), displayEfacture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_InfoBox__WEBPACK_IMPORTED_MODULE_12__["InfoBox"], Object.assign({}, infoBoxData)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-lg-end mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      type: "submit",
      variant: "contained",
      border: "soft",
      loader: isLoading,
      id: "login-reset-step3-submit"
    }, t('loginReset.login.step4.form.button'))));
  });
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/confirm-contact.scss":
/*!****************************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/confirm-contact.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/error.tsx":
/*!*****************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/error.tsx ***!
  \*****************************************************/
/*! exports provided: LoginResetError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResetError", function() { return LoginResetError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);






var LoginResetError = function LoginResetError(_ref) {
  var body = _ref.body,
    description = _ref.description,
    _ref$submit = _ref.submit,
    submit = _ref$submit === void 0 ? {
      label: '',
      value: ''
    } : _ref$submit,
    _ref$success = _ref.success,
    success = _ref$success === void 0 ? true : _ref$success;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    transform = _useInterweave.transform;
  var variant = success ? _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_4__["ALERT_SUCCESS"] : _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_4__["ALERT_ALERT"];
  var label = submit.label,
    value = submit.value;
  var onclickBack = function onclickBack() {
    history.push(value);
  };
  var hasSubmitBtn = !!(submit.label && submit.value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_4__["AlertBox"], {
    className: "my-3 my-lg-4",
    variant: variant
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
    content: body,
    transform: transform
  }), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
    content: description,
    transform: transform,
    className: "d-block mt-3"
  })), hasSubmitBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg-right mt-4 mt-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    id: "backLink",
    variant: "contained",
    border: "soft",
    onClick: onclickBack
  }, label)));
};

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/password/email-success.tsx":
/*!**********************************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/password/email-success.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginResetEmailSuccess; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_components_AlertBox_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/AlertBox/index */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function LoginResetEmailSuccess() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    transform = _useInterweave.transform;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_8__["useGA"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])(),
    state = _useLocation.state;
  var userMail = state.userMail;
  var onClickPrevStep = function onClickPrevStep() {
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].LOGIN_RESET.PASSWORD.INDEX);
    track('REINIT_CEL_5', {
      solution_choisie_email_non_recu: 'renvoi d\'email'
    });
  };
  var onClickGetEdit = function onClickGetEdit() {
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].LOGIN_RESET.CUSTOMER_REF);
    track('REINIT_CEL_5', {
      solution_choisie_email_non_recu: 'recup ID'
    });
  };
  var onClickBack = function onClickBack() {
    setIsLoading(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].HOME);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox_index__WEBPACK_IMPORTED_MODULE_4__["AlertBox"], {
    className: "mb-3 mb-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('loginReset.password.email_success.message', {
      email: userMail !== null && userMail !== void 0 ? userMail : ''
    }),
    transform: transform
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzTypographie"], {
    className: "my-3"
  }, t('loginReset.password.email_success.no_email_received')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzButton"], {
    id: "goPrevStep",
    variant: "text",
    className: "m-0 p-0 h-auto text-left",
    icon: "keyboard-arrow-right",
    alignIcon: "right",
    type: "submit",
    onClick: onClickPrevStep
  }, t('loginReset.password.email_success.no_email_choice1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzButton"], {
    id: "getEditEmail",
    variant: "text",
    className: "m-0 p-0 h-auto text-left",
    icon: "keyboard-arrow-right",
    alignIcon: "right",
    onClick: onClickGetEdit
  }, t('loginReset.password.email_success.no_email_choice2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg-right mt-3 mt-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzButton"], {
    id: "backLink",
    variant: "contained",
    border: "soft",
    onClick: onClickBack,
    loader: isLoading
  }, t('loginReset.password.email_success.back'))));
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/password/index.tsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/password/index.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginResetPassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_loginReset_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/models/loginReset/index */ "./assets/js/models/loginReset/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













function LoginResetPassword() {
  var _this = this;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var recaptcha = window.tsme_data.recaptcha;
  var recaptchaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_12__["useGA"])(),
    track = _useGA.track;
  var _a = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(function (params) {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_9__["API"].RESET_PASSWORD.SEND_LINK, params);
    }, {
      onSuccess: function onSuccess(_ref, params) {
        var data = _ref.data;
        if (data.message === _app_constants__WEBPACK_IMPORTED_MODULE_9__["CODES"].OK) {
          history.push({
            pathname: _app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].LOGIN_RESET.PASSWORD.EMAIL_SUCCESS
          }, {
            userMail: params.email
          });
          track('REINIT_CEL_4');
        } else {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].LOGIN_RESET.PASSWORD.UPDATE_ERROR);
          track('REINIT_CEL_3');
        }
      },
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].LOGIN_RESET.PASSWORD.UPDATE_ERROR);
        track('REINIT_CEL_3');
      }
    }),
    isLoading = _a.isLoading,
    sendLink = __rest(_a, ["isLoading"]);
  var onSubmit = function onSubmit(values) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _b, params;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            track('REINIT_CEL_2');
            params = Object.assign({}, values);
            if (!(recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.enabled)) {
              _context.next = 6;
              break;
            }
            _context.next = 5;
            return (_b = recaptchaRef === null || recaptchaRef === void 0 ? void 0 : recaptchaRef.current) === null || _b === void 0 ? void 0 : _b.executeAsync();
          case 5:
            params['g-recaptcha-response'] = _context.sent;
          case 6:
            sendLink.mutate(params);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].LOGIN_LOST_ID);
  };
  var previousButton = {
    label: t('go_back'),
    align: 'left',
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var nextButton = {
    label: t('validate'),
    align: 'right',
    loader: isLoading
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      email: ''
    },
    onSubmit: onSubmit,
    validationSchema: _app_models_loginReset_index__WEBPACK_IMPORTED_MODULE_7__["passwordEmailSchema"],
    validateOnChange: false
  }, function (_ref2) {
    var values = _ref2.values,
      errors = _ref2.errors,
      handleChange = _ref2.handleChange,
      handleBlur = _ref2.handleBlur,
      handleSubmit = _ref2.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-3 mt-lg-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzInput"], {
      name: "email",
      id: "email",
      variant: "outlined",
      value: values.email,
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('loginReset.password.index.email_label'),
      placeholder: t('loginReset.password.index.email_placeholder')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
      field: "email",
      customDisplay: errors.email
    })), (recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.enabled) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: recaptchaRef,
      size: "invisible",
      sitekey: recaptcha.invisiblePublicKey,
      badge: "bottomleft"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/login-reset/steps/password/update.tsx":
/*!***************************************************************!*\
  !*** ./assets/js/pages/login-reset/steps/password/update.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginResetPasswordUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_loginReset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/models/loginReset */ "./assets/js/models/loginReset/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/tsme-react-components */ "./assets/js/components/tsme-react-components/index.tsx");
/* harmony import */ var _app_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/tsme-react-components/components/Password/utils */ "./assets/js/components/tsme-react-components/components/Password/utils.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/hooks/useSearchParams */ "./assets/js/hooks/useSearchParams.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















function LoginResetPasswordUpdate() {
  var _this = this;
  var _a;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var refPassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var params = Object(_app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_15__["useGA"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPasswordRules = _useState2[0],
    setShowPasswordRules = _useState2[1];
  var token = params.get('token');
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_13__["useQuery"])(['checkToken', token], function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_7__["API"].RESET_PASSWORD.CHECK_TOKEN, {
        params: {
          token: token
        }
      });
    }, {
      onSuccess: function onSuccess(_ref) {
        var data = _ref.data;
        if (_app_constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK === data.message) {
          history.push({
            pathname: _app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].LOGIN_RESET.PASSWORD.UPDATE,
            search: "?token=".concat(token)
          });
        } else {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].LOGIN_RESET.PASSWORD.EMAIL_ERROR);
        }
      },
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].LOGIN_RESET.PASSWORD.EMAIL_ERROR);
      },
      enabled: !!token
    }),
    isIdle = _useQuery.isIdle;
  var _b = Object(react_query__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(function (params) {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_7__["API"].RESET_PASSWORD.SET_PASSWORD, params);
    }, {
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        if (data.message === _app_constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].LOGIN_RESET.PASSWORD.UPDATE_SUCCESS);
          track('REINIT_CEL_7');
        } else {
          track('REINIT_CEL_8');
        }
      },
      onError: function onError(_ref3) {
        var response = _ref3.response;
        var _a;
        if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) !== 'KO_MDP') {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].LOGIN_RESET.PASSWORD.UPDATE_ERROR);
          track('REINIT_CEL_8');
        }
      }
    }),
    isError = _b.isError,
    error = _b.error,
    reset = _b.reset,
    isLoading = _b.isLoading,
    setPassword = __rest(_b, ["isError", "error", "reset", "isLoading"]);
  var aria = {
    showPasswordLabel: t('global.form.password', {
      context: 'show'
    }),
    hidePasswordLabel: t('global.form.password', {
      context: 'hide'
    })
  };
  var nextButton = {
    label: t('save'),
    align: 'right',
    loader: isLoading
  };
  var onSubmit = function onSubmit(values) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var updatedParams, password, passwordConfirm, formattedParams;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            track('REINIT_CEL_6');
            updatedParams = Object.assign(Object.assign({}, values), {
              'password[first]': values.password,
              'password[second]': values.passwordConfirm
            });
            password = updatedParams.password, passwordConfirm = updatedParams.passwordConfirm, formattedParams = __rest(updatedParams, ["password", "passwordConfirm"]);
            setPassword.mutate(formattedParams);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  var preventCopyPaste = function preventCopyPaste(e) {
    e.preventDefault();
  };
  var _ref4 = isError ? (_a = error.response) === null || _a === void 0 ? void 0 : _a.data : {},
    _ref4$message = _ref4.message,
    message = _ref4$message === void 0 ? '' : _ref4$message;
  var isPasswordError = isError ? message === 'KO_MDP' : false;
  var initialValues = {
    password: '',
    passwordConfirm: '',
    token: token
  };
  if (token && isIdle) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: true,
    validationSchema: _app_models_loginReset__WEBPACK_IMPORTED_MODULE_5__["passwordUpdateSchema"],
    onSubmit: onSubmit
  }, function (_ref5) {
    var values = _ref5.values,
      errors = _ref5.errors,
      handleChange = _ref5.handleChange,
      handleBlur = _ref5.handleBlur,
      handleSubmit = _ref5.handleSubmit;
    var passwordValidation = Object(_app_services_Utils__WEBPACK_IMPORTED_MODULE_8__["checkPassRules"])(values.password);
    var allTrue = Object.values(passwordValidation).every(function (value) {
      return value;
    });
    var messageErrorAccess = Object(_app_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_11__["messageErrorPasswordAccess"])(passwordValidation);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      if (allTrue) {
        setShowPasswordRules(false);
      } else if (!allTrue && document.activeElement === refPassword.current) {
        setShowPasswordRules(true);
      }
    }, [passwordValidation]);
    var onBlur = function onBlur(e) {
      setShowPasswordRules(false);
      handleBlur(e);
    };
    var onFocus = function onFocus() {
      if (!allTrue) {
        setShowPasswordRules(true);
      }
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "loginResetPasswordUpdate",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 my-3 position-relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzInput"], {
      id: "password",
      name: "password",
      label: t('loginReset.password.update.password'),
      placeholder: t('loginReset.password.update.password_placeholder'),
      value: values.password,
      autocomplete: "off",
      showPassword: true,
      ref: refPassword,
      type: "password",
      variant: "outlined",
      error: !!errors.password,
      onChange: handleChange,
      onBlur: onBlur,
      onFocus: onFocus,
      onPaste: preventCopyPaste,
      "aria-describedby": "password-rules",
      "aria-required": "true",
      aria: aria
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_10__["PasswordRules"], {
      password: values.password,
      className: 'position-absolute bg-blue-03 rounded-2',
      show: showPasswordRules
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "password",
      customDisplay: errors.password,
      messageAccess: messageErrorAccess
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 my-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzInput"], {
      id: "passwordConfirm",
      name: "passwordConfirm",
      label: t('loginReset.password.update.password_confirm'),
      placeholder: t('loginReset.password.update.password_confirm_placeholder'),
      type: "password",
      variant: "outlined",
      value: values.passwordConfirm,
      error: !!errors.passwordConfirm,
      onBlur: handleBlur,
      onChange: handleChange,
      onPaste: preventCopyPaste,
      autocomplete: "off",
      showPassword: true,
      aria: aria
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "passwordConfirm",
      customDisplay: errors.passwordConfirm
    })), isPasswordError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-password",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, t('loginReset.form.errors.invalidPassword')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, t('loginReset.form.errors.invalidPassword')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/login-reset/useSteps.tsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/login-reset/useSteps.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSteps; });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_pages_login_reset_steps_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/pages/login-reset/steps/password */ "./assets/js/pages/login-reset/steps/password/index.tsx");
/* harmony import */ var _app_pages_login_reset_steps_password_email_success__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/pages/login-reset/steps/password/email-success */ "./assets/js/pages/login-reset/steps/password/email-success.tsx");
/* harmony import */ var _steps_ConfirmContact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./steps/ConfirmContact */ "./assets/js/pages/login-reset/steps/ConfirmContact.tsx");
/* harmony import */ var _steps_CustomerRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steps/CustomerRef */ "./assets/js/pages/login-reset/steps/CustomerRef.tsx");
/* harmony import */ var _steps_ErrorContracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps/ErrorContracts */ "./assets/js/pages/login-reset/steps/ErrorContracts.tsx");
/* harmony import */ var _steps_LoginCel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./steps/LoginCel */ "./assets/js/pages/login-reset/steps/LoginCel.tsx");
/* harmony import */ var _steps_CreateCel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps/CreateCel */ "./assets/js/pages/login-reset/steps/CreateCel.tsx");
/* harmony import */ var _steps_UpdateLogin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./steps/UpdateLogin */ "./assets/js/pages/login-reset/steps/UpdateLogin.tsx");
/* harmony import */ var _app_pages_login_reset_steps_password_update__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/pages/login-reset/steps/password/update */ "./assets/js/pages/login-reset/steps/password/update.tsx");
/* harmony import */ var _steps_ExistingCel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./steps/ExistingCel */ "./assets/js/pages/login-reset/steps/ExistingCel.tsx");












function useSteps() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__["useTranslation"])(),
    t = _useTranslation.t;
  return [{
    step: _steps_CustomerRef__WEBPACK_IMPORTED_MODULE_5__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.CUSTOMER_REF,
    title: t('loginReset.login.step1.title'),
    subtitle: t('loginReset.login.step1.subtitle')
  }, {
    step: _steps_ConfirmContact__WEBPACK_IMPORTED_MODULE_4__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.CONFIRM_CONTACT,
    title: t('loginReset.login.step2.title')
  }, {
    step: _app_pages_login_reset_steps_password_email_success__WEBPACK_IMPORTED_MODULE_3__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.PASSWORD.EMAIL_SUCCESS,
    title: t('loginReset.password.email_success.title'),
    large: true
  }, {
    step: _steps_ErrorContracts__WEBPACK_IMPORTED_MODULE_6__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.ERROR_CONTRACTS,
    title: t('loginReset.login.step3.error_contracts.title'),
    subtitle: t('loginReset.login.step3.error_contracts.subtitle')
  }, {
    step: _steps_LoginCel__WEBPACK_IMPORTED_MODULE_7__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.LOGIN_CEL,
    title: t('loginReset.login.step3.login_cel.title')
  }, {
    step: _steps_CreateCel__WEBPACK_IMPORTED_MODULE_8__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.CREATE_CEL,
    title: t('loginReset.login.step3.create_cel.title')
  }, {
    step: _steps_UpdateLogin__WEBPACK_IMPORTED_MODULE_9__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.UPDATE_LOGIN,
    title: t('loginReset.login.step4.title')
  }, {
    step: _steps_ExistingCel__WEBPACK_IMPORTED_MODULE_11__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.UPDATE_CEL_EXISTING_ERROR,
    title: t('loginReset.login.existing_error.title'),
    subtitle: t('loginReset.login.existing_error.subtitle'),
    large: true
  }, {
    error: true,
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.UPDATE_CEL_SUCCESS,
    title: t('loginReset.login.update_success.title'),
    body: t('loginReset.login.update_success.body'),
    submit: {
      label: t('loginReset.login.update_success.submit'),
      value: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN
    }
  }, {
    error: true,
    success: false,
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.UPDATE_CEL_ERROR,
    title: t('loginReset.login.update_error.title'),
    body: t('loginReset.login.update_error.body'),
    submit: {
      label: t('loginReset.login.update_error.submit'),
      value: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.CUSTOMER_REF
    }
  }, {
    error: true,
    success: false,
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.SERVICES_ERROR,
    title: t('loginReset.login.error_services.title'),
    body: t('loginReset.login.error_services.body'),
    description: t('loginReset.login.error_services.description')
  }, {
    error: true,
    success: false,
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.CANCELED_ERROR,
    title: t('loginReset.login.error_services.title'),
    body: t('loginReset.login.error_canceled.body'),
    description: t('loginReset.login.error_canceled.description')
  }, {
    error: true,
    success: false,
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.PASSWORD.EMAIL_ERROR,
    title: t('loginReset.password.email_error.title'),
    body: t('loginReset.password.email_error.body'),
    submit: {
      label: t('loginReset.password.email_error.submit'),
      value: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.PASSWORD.INDEX
    }
  }, {
    step: _app_pages_login_reset_steps_password_update__WEBPACK_IMPORTED_MODULE_10__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.PASSWORD.UPDATE,
    title: t('loginReset.password.update.title'),
    subtitle: t('loginReset.password.update.subtitle')
  }, {
    error: true,
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.PASSWORD.UPDATE_SUCCESS,
    title: t('loginReset.password.update_success.title'),
    body: t('loginReset.password.update_success.body'),
    submit: {
      label: t('loginReset.password.update_success.submit'),
      value: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN
    }
  }, {
    error: true,
    success: false,
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.PASSWORD.UPDATE_ERROR,
    title: t('loginReset.password.update_error.title'),
    body: t('loginReset.password.update_error.body'),
    submit: {
      label: t('loginReset.password.update_error.submit'),
      value: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.PASSWORD.INDEX
    }
  }, {
    step: _app_pages_login_reset_steps_password__WEBPACK_IMPORTED_MODULE_2__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN_RESET.PASSWORD.INDEX,
    title: t('loginReset.password.index.title'),
    subtitle: t('loginReset.password.index.subtitle')
  }];
}

/***/ })

}]);