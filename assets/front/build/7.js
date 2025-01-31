(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./assets/img/alert-triangle.svg":
/*!***************************************!*\
  !*** ./assets/img/alert-triangle.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/alert-triangle.svg");

/***/ }),

/***/ "./assets/img/check-circle-2.svg":
/*!***************************************!*\
  !*** ./assets/img/check-circle-2.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/check-circle-2.svg");

/***/ }),

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

/***/ "./assets/img/icons/user-filled.svg":
/*!******************************************!*\
  !*** ./assets/img/icons/user-filled.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/user-filled.svg");

/***/ }),

/***/ "./assets/js/components/BlockRadio/block-radio.scss":
/*!**********************************************************!*\
  !*** ./assets/js/components/BlockRadio/block-radio.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/BlockRadio/index.tsx":
/*!***************************************************!*\
  !*** ./assets/js/components/BlockRadio/index.tsx ***!
  \***************************************************/
/*! exports provided: BlockRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockRadio", function() { return BlockRadio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_radio_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-radio.scss */ "./assets/js/components/BlockRadio/block-radio.scss");
/* harmony import */ var _block_radio_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_block_radio_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_components_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/Badge */ "./assets/js/components/Badge/index.tsx");







var BlockRadio = function BlockRadio(_ref) {
  var label = _ref.label,
    value = _ref.value,
    name = _ref.name,
    id = _ref.id,
    isReco = _ref.isReco,
    children = _ref.children,
    className = _ref.className;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var radioRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var formikContext = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
  var values = formikContext.values,
    setFieldValue = formikContext.setFieldValue;
  var colClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('col-12 cursor-pointer border border-1 border-expert-blue rounded-3', className, isReco ? 'bg-blue-clear-light p-4' : 'px-4 pt-4 pb-3');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: colClassName,
    onClick: function onClick() {
      radioRef.current.click();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-radio w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzRadio"], {
    ref: radioRef,
    id: id,
    name: name,
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isReco && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
      borderColor: "expert-blue",
      color: "expert-blue",
      textSize: "12",
      textWeight: "medium",
      className: "d-lg-none"
    }, t("payment.list.our_reco")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex flex-row align-items-center ".concat(isReco ? "reco-width-adjust" : "")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "h4",
      size: "M",
      weight: "medium",
      className: "mb-0 mr-3 mr-lg-1"
    }, label), isReco && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
      borderColor: "expert-blue",
      color: "expert-blue",
      textSize: "12",
      textWeight: "medium",
      className: "d-none d-lg-block"
    }, t("payment.list.our_reco")))),
    value: value,
    checked: values.paymentMode === value,
    onChange: function onChange(e) {
      setFieldValue('paymentMode', e.target.value);
    }
  }), children)));
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

/***/ "./assets/js/ez-components/alert.jsx":
/*!*******************************************!*\
  !*** ./assets/js/ez-components/alert.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _img_check_circle_2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/check-circle-2.svg */ "./assets/img/check-circle-2.svg");
/* harmony import */ var _img_alert_triangle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/alert-triangle.svg */ "./assets/img/alert-triangle.svg");
/* harmony import */ var _img_cross_circle_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/cross-circle.svg */ "./assets/img/cross-circle.svg");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./assets/js/constants/index.ts");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var errorMessage = Object(i18next__WEBPACK_IMPORTED_MODULE_4__["t"])('cel_dashboard.alert_error');
function getIconByVariant(variant) {
  var isWarning = variant === _constants__WEBPACK_IMPORTED_MODULE_8__["MSG_TYPE_WARNING"];
  var isSuccess = variant === _constants__WEBPACK_IMPORTED_MODULE_8__["MSG_TYPE_SUCCESS"];
  var isError = variant === _constants__WEBPACK_IMPORTED_MODULE_8__["MSG_TYPE_ERROR"];
  if (isWarning) {
    return _img_alert_triangle_svg__WEBPACK_IMPORTED_MODULE_6__["default"];
  }
  if (isSuccess) {
    return _img_check_circle_2_svg__WEBPACK_IMPORTED_MODULE_5__["default"];
  }
  if (isError) {
    return _img_cross_circle_svg__WEBPACK_IMPORTED_MODULE_7__["default"];
  }
  throw new Error(errorMessage);
}
function getBackgroundByVariant(variant) {
  var isWarning = variant === _constants__WEBPACK_IMPORTED_MODULE_8__["MSG_TYPE_WARNING"];
  var isSuccess = variant === _constants__WEBPACK_IMPORTED_MODULE_8__["MSG_TYPE_SUCCESS"];
  var isError = variant === _constants__WEBPACK_IMPORTED_MODULE_8__["MSG_TYPE_ERROR"];
  if (isWarning) {
    return 'var(--gold-light)';
  }
  if (isSuccess) {
    return 'var(--green-light)';
  }
  if (isError) {
    return 'var(--red-light)';
  }
  throw new Error(errorMessage);
}
function getRoleByVariant(variant) {
  var isWarning = variant === _constants__WEBPACK_IMPORTED_MODULE_8__["MSG_TYPE_WARNING"];
  var isSuccess = variant === _constants__WEBPACK_IMPORTED_MODULE_8__["MSG_TYPE_SUCCESS"];
  var isError = variant === _constants__WEBPACK_IMPORTED_MODULE_8__["MSG_TYPE_ERROR"];
  if (isWarning) {
    return 'status';
  }
  if (isSuccess) {
    return 'status';
  }
  if (isError) {
    return 'alert';
  }
  throw new Error(errorMessage);
}
function CelAlert(_ref) {
  var variant = _ref.variant,
    className = _ref.className,
    children = _ref.children;
  var icon = getIconByVariant(variant);
  var role = getRoleByVariant(variant);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('d-flex w-100 py-3 px-1 px-lg-5', className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icon,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "ml-3 my-1",
    role: role
  }, children));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(CelAlert)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n"])), function (_ref2) {
  var variant = _ref2.variant;
  return getBackgroundByVariant(variant);
}));

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

/***/ "./assets/js/hooks/usePayline.ts":
/*!***************************************!*\
  !*** ./assets/js/hooks/usePayline.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePayline; });
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ahooks */ "./node_modules/ahooks/es/index.js");

function usePayline() {
  var _window$tsme_data = window.tsme_data,
    payline_js_url = _window$tsme_data.payline_js_url,
    payline_css_url = _window$tsme_data.payline_css_url;
  var overrideCssUrl = '/assets/legacy/build/css/legacy/payment/overridePaylineWidget.css';
  var js_script = Object(ahooks__WEBPACK_IMPORTED_MODULE_0__["useExternal"])(payline_js_url, {
    js: {
      async: true
    }
  });
  var css = Object(ahooks__WEBPACK_IMPORTED_MODULE_0__["useExternal"])(payline_css_url, {
    type: 'css'
  });
  var overrideCss = Object(ahooks__WEBPACK_IMPORTED_MODULE_0__["useExternal"])(overrideCssUrl, {
    type: 'css'
  });
  return {
    js_script: js_script,
    css: css,
    overrideCss: overrideCss
  };
}

/***/ }),

/***/ "./assets/js/pages/payments-manage/ContractSummary.tsx":
/*!*************************************************************!*\
  !*** ./assets/js/pages/payments-manage/ContractSummary.tsx ***!
  \*************************************************************/
/*! exports provided: ContractSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractSummary", function() { return ContractSummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _img_icons_user_filled_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @img/icons/user-filled.svg */ "./assets/img/icons/user-filled.svg");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/emotion-css.esm.js");





var ContractSummary = function ContractSummary(_ref) {
  var contractBlockInfos = _ref.contractBlockInfos;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var contractOwner = contractBlockInfos.contractOwner,
    name = contractBlockInfos.name,
    siteAddress = contractBlockInfos.siteAddress,
    fullReference = contractBlockInfos.fullReference;
  var fullRefDash = (fullReference === null || fullReference === void 0 ? void 0 : fullReference.slice(0, 2)) + "-" + (fullReference === null || fullReference === void 0 ? void 0 : fullReference.slice(2));
  var iconStyles = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__["css"])({
    marginRight: '1rem',
    width: 24,
    height: 24
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border sz-border-1 rounded-2 px-4 py-3"
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    className: "mb-3",
    icon: "business-contract-handshake-sign",
    variant: "line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    className: "sz-typo-caption md font-family-regular"
  }, t('managePayments.summary.contract_name')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, name)), contractOwner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_icons_user_filled_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: iconStyles
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    tag: "span",
    variant: "caption",
    weight: "medium",
    size: "M",
    className: "text-disabled"
  }, t('personalInfos.form.contract.owner')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "medium",
    size: "M",
    className: "mb-0 text-expert-blue",
    tag: "span"
  }, contractOwner))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    className: "mb-3",
    icon: "pin-location-1",
    variant: "line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    className: "sz-typo-caption md font-family-regular"
  }, t('managePayments.summary.address')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, {
    className: "new-line"
  }, siteAddress)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "house-3",
    variant: "line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    className: "sz-typo-caption md font-family-regular"
  }, t('managePayments.summary.reference')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, fullRefDash)));
};

/***/ }),

/***/ "./assets/js/pages/payments-manage/InfoBlock.tsx":
/*!*******************************************************!*\
  !*** ./assets/js/pages/payments-manage/InfoBlock.tsx ***!
  \*******************************************************/
/*! exports provided: UnavailableInfo, InfoBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailableInfo", function() { return UnavailableInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBlock", function() { return InfoBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_Links_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Links/Link */ "./assets/js/components/Links/Link.jsx");





var UnavailableInfo = function UnavailableInfo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    i18nKey: 'managePayments.infoBlock.unavailable',
    components: {
      redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        decorate: true,
        to: _constants__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_SERVICE_URL"]
      })
    }
  });
};
var InfoBlock = function InfoBlock(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-3 px-lg-4 py-lg-3 bg-blue-03 rounded-1 border border-1 border-blue-sky"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    variant: "bold",
    icon: "information-circle",
    className: "text-blue-sky"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    size: "M",
    className: "pl-4"
  }, content)));
};

/***/ }),

/***/ "./assets/js/pages/payments-manage/PaymentChoice.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/payments-manage/PaymentChoice.tsx ***!
  \***********************************************************/
/*! exports provided: PaymentChoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentChoice", function() { return PaymentChoice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ahooks */ "./node_modules/ahooks/es/index.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _components_BlockRadio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/BlockRadio */ "./assets/js/components/BlockRadio/index.tsx");
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _InfoBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InfoBlock */ "./assets/js/pages/payments-manage/InfoBlock.tsx");
/* harmony import */ var _components_FormButtons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! . */ "./assets/js/pages/payments-manage/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var getAvailablePaymentModes = function getAvailablePaymentModes(list, hasEtipSignedValidMandate, allModes) {
  var availablePaymentModes = new Array();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var monthlyPayment = list.monthlyPayment,
    directDebitPayment = list.directDebitPayment,
    etip = list.etip,
    bankCardPayment = list.bankCardPayment,
    tipi = list.tipi;
  if (monthlyPayment === true) {
    availablePaymentModes.push({
      label: t('managePayments.form.paymentMode.list.label_monthlyPayment'),
      value: 'monthlyPayment',
      text: t('managePayments.form.paymentMode.list.text_monthlyPayment'),
      targetUrl: _app_constants__WEBPACK_IMPORTED_MODULE_14__["ROUTES"].MANAGE_PAYMENTS_URL.MENSU,
      info: t('managePayments.form.paymentMode.list.info_monthlyPayment')
    });
  }
  if (directDebitPayment === true) {
    availablePaymentModes.push({
      label: t('managePayments.form.paymentMode.list.label_directDebitPayment'),
      value: 'directDebitPayment',
      text: t('managePayments.form.paymentMode.list.text_directDebitPayment'),
      targetUrl: _app_constants__WEBPACK_IMPORTED_MODULE_14__["ROUTES"].MANAGE_PAYMENTS_URL.PRELEV,
      info: t('managePayments.form.paymentMode.list.info_directDebitPayment')
    });
  }
  if (etip === true && allModes) {
    availablePaymentModes.push({
      label: t('managePayments.form.paymentMode.list.label_etip'),
      value: 'etip',
      text: t('managePayments.form.paymentMode.list.text_etip'),
      targetUrl: _app_constants__WEBPACK_IMPORTED_MODULE_14__["ROUTES"].MANAGE_PAYMENTS_URL.ETIP,
      info: t('managePayments.form.paymentMode.list.info_etip', {
        context: hasEtipSignedValidMandate ? 'mandate' : 'no_mandate'
      })
    });
  }
  if (bankCardPayment === true && allModes) {
    availablePaymentModes.push({
      label: t('managePayments.form.paymentMode.list.label_bankCardPayment'),
      value: 'bankCardPayment',
      text: t('managePayments.form.paymentMode.list.text_bankCardPayment'),
      targetUrl: _app_constants__WEBPACK_IMPORTED_MODULE_14__["API"].PAYMENT.BANK_CARD,
      info: t('managePayments.form.paymentMode.list.info_bankCardPayment')
    });
  }
  if (tipi === true && allModes) {
    availablePaymentModes.push({
      label: t('managePayments.form.paymentMode.list.label_tipi'),
      value: 'tipi',
      text: t('managePayments.form.paymentMode.list.text_tipi'),
      targetUrl: _app_constants__WEBPACK_IMPORTED_MODULE_14__["ROUTES"].MANAGE_PAYMENTS_URL.TIPI,
      info: t('managePayments.form.paymentMode.list.info_tipi')
    });
  }
  return availablePaymentModes;
};
var PaymentChoice = function PaymentChoice(_ref) {
  var paymentListTitle = _ref.paymentListTitle,
    info = _ref.info,
    paymentModesList = _ref.paymentModesList,
    hasEtipSignedValidMandate = _ref.hasEtipSignedValidMandate,
    _ref$allModes = _ref.allModes,
    allModes = _ref$allModes === void 0 ? true : _ref$allModes,
    _ref$efacture = _ref.efacture,
    efacture = _ref$efacture === void 0 ? false : _ref$efacture;
  var _a, _b;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenPopinCb = _useState2[0],
    setIsOpenPopinCb = _useState2[1];
  var paymentModesFromApi = getAvailablePaymentModes(paymentModesList, hasEtipSignedValidMandate, allModes);
  var _paymentModesFromApi = _slicedToArray(paymentModesFromApi, 1),
    firstPaymentMode = _paymentModesFromApi[0];
  var displayInfoBlock = ['01', '02', '06'].some(function (code) {
    return info === null || info === void 0 ? void 0 : info.includes(code);
  });
  var SelectPaymentModeSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
    paymentMode: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(t('managePayments.form.errors.select_option'))
  });
  var onSubmit = function onSubmit(_ref2) {
    var paymentMode = _ref2.paymentMode;
    // Grace à la valeur de paymentMode il faut l'élément du tableau
    var selectedPaymentMode = paymentModesFromApi.find(function (_ref3) {
      var value = _ref3.value;
      return value === paymentMode;
    });
    var keysPaymentMode = {
      monthlyPayment: _app_constants__WEBPACK_IMPORTED_MODULE_14__["PAYMENT_MODE_MENSU"],
      directDebitPayment: _app_constants__WEBPACK_IMPORTED_MODULE_14__["PAYMENT_MODE_PRELEV"]
    };
    var targetUrl = selectedPaymentMode === null || selectedPaymentMode === void 0 ? void 0 : selectedPaymentMode.targetUrl;
    if (targetUrl !== 'undefined') {
      if (keysPaymentMode.hasOwnProperty(paymentMode)) {
        var routePaymentMethods = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_14__["ROUTES"].ACCOUNT_PAYMENT_METHODS);
        var keyPaymentMode = keysPaymentMode[paymentMode];
        history.push({
          pathname: routePaymentMethods,
          search: "?payment_mode=".concat(keyPaymentMode),
          state: {
            showEfacture: efacture
          }
        });
      } else if (targetUrl === _app_constants__WEBPACK_IMPORTED_MODULE_14__["API"].PAYMENT.BANK_CARD) {
        getBlocSolde.mutate({
          callSubmitPayment: true
        });
      } else {
        window.location.href = targetUrl !== null && targetUrl !== void 0 ? targetUrl : '';
      }
    }
  };
  var idBtnClosePopinCb = document === null || document === void 0 ? void 0 : document.getElementById('pl-container-lightbox-close');
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_15__["useQueryClient"])();
  var resetApiMessage = function resetApiMessage() {
    queryClient.resetQueries('PaymentMessages');
    window.scrollTo({
      top: 0
    });
  };
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_15__["useMutation"])(function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_14__["API"].PAYMENT.BANK_CARD, {
        baseURL: ''
      });
    }, {
      onSuccess: function onSuccess(response) {
        var _a;
        var code = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.code;
        if (_app_constants__WEBPACK_IMPORTED_MODULE_14__["CODES"].CODE_DOMAIN_ERROR === code) {
          resetApiMessage();
        }
      },
      onError: function onError() {
        resetApiMessage();
      }
    }),
    muateBankCard = _useMutation.mutate,
    isLoadingBankCard = _useMutation.isLoading,
    isSuccessBankCard = _useMutation.isSuccess,
    dataBankCard = _useMutation.data;
  var getBlocSolde = Object(react_query__WEBPACK_IMPORTED_MODULE_15__["useMutation"])(function () {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_14__["API"].PAYMENT.CHECK_PAYLINE);
  }, {
    onSuccess: function onSuccess(response, _ref4) {
      var callSubmitPayment = _ref4.callSubmitPayment;
      if (callSubmitPayment) {
        muateBankCard();
      } else {
        resetApiMessage();
      }
    }
  });
  var nextButton = {
    label: t('managePayments.form.goNext'),
    align: 'right',
    loader: getBlocSolde.isLoading
  };
  var responseBankCard = dataBankCard;
  var paylineToken = isSuccessBankCard && responseBankCard ? (_b = (_a = responseBankCard === null || responseBankCard === void 0 ? void 0 : responseBankCard.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.paylineToken : '';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (paylineToken) {
      var currentTimeout = setTimeout(function () {
        // @ts-ignore
        Payline.Api.init();
        setIsOpenPopinCb(true);
      }, 1000);
      return function () {
        clearTimeout(currentTimeout);
      };
    }
    return;
  }, [isLoadingBankCard]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleClick = function handleClick() {
      // @ts-ignore
      Payline.Api.endToken();
      getBlocSolde.mutate({});
    };
    idBtnClosePopinCb === null || idBtnClosePopinCb === void 0 ? void 0 : idBtnClosePopinCb.addEventListener('click', handleClick);
    return function () {
      idBtnClosePopinCb === null || idBtnClosePopinCb === void 0 ? void 0 : idBtnClosePopinCb.removeEventListener('click', handleClick);
    };
  }, [idBtnClosePopinCb]);
  Object(ahooks__WEBPACK_IMPORTED_MODULE_6__["useKeyPress"])(27, function () {
    if (isOpenPopinCb && idBtnClosePopinCb) {
      // @ts-ignore
      Payline.Api.endToken();
      getBlocSolde.mutate({});
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "PaylineWidget",
    "data-token": paylineToken,
    "data-embeddedredirectionallowed": "false",
    "data-auto-init": "false"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
      paymentMode: firstPaymentMode.value
    },
    validationSchema: SelectPaymentModeSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: onSubmit
  }, function (_ref5) {
    var handleSubmit = _ref5.handleSubmit,
      values = _ref5.values,
      setFieldValue = _ref5.setFieldValue,
      errors = _ref5.errors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium"
    }, t('managePayments.form.paymentMode.titles.code', {
      context: "".concat(paymentListTitle)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlockRadio__WEBPACK_IMPORTED_MODULE_9__["BlockRadio"], {
      id: firstPaymentMode.value,
      name: firstPaymentMode.value,
      label: firstPaymentMode.label,
      value: firstPaymentMode.value
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      size: "M",
      weight: "regular",
      className: "text-dark mt-1"
    }, firstPaymentMode.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " border-top sz-border-1 border-gray-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
      variant: "line",
      icon: "information-circle",
      className: "sz-typo-body sm text-dark mr-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "light",
      className: "text-dark"
    }, firstPaymentMode.info))))), paymentModesFromApi.length >= 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      size: "M",
      weight: "regular",
      className: "mb-0"
    }, t('managePayments.form.paymentMode.other')), paymentModesFromApi.slice(1).map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzRadio"], {
        className: "py-2 py-lg-3",
        key: index,
        id: item.value,
        name: item.value,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
          variant: "h4",
          size: "M",
          weight: "medium",
          className: "mb-0"
        }, item.label),
        value: item.value,
        checked: values.paymentMode === item.value,
        onChange: function onChange(e) {
          setFieldValue('paymentMode', e.target.value);
        }
      });
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_10__["default"], {
      field: "paymentMode",
      customDisplay: errors.paymentMode
    }), displayInfoBlock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBlock__WEBPACK_IMPORTED_MODULE_11__["InfoBlock"], {
      content: Object(___WEBPACK_IMPORTED_MODULE_13__["getInfoContentFromCode"])(info)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_12__["default"], {
      next: nextButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/payments-manage/PaymentInfo.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/payments-manage/PaymentInfo.tsx ***!
  \*********************************************************/
/*! exports provided: PaymentInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfo", function() { return PaymentInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);



var PaymentInfo = function PaymentInfo(_ref) {
  var paymentInfoContent = _ref.paymentInfoContent;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var titleCode = paymentInfoContent.titleCode,
    content = paymentInfoContent.content;
  var hasAmountInBold = ['01', '02', '08', '09'].includes(titleCode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-disabled mb-0"
  }, t('managePayments.infoPayment.label.code', {
    context: "".concat(titleCode)
  })), hasAmountInBold && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H1",
    size: "XL",
    weight: "bold"
  }, t(content.amount).concat(' €')), !hasAmountInBold && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-disabled mb-0 text-center"
  }, t('managePayments.infoPayment.content.code', {
    context: "".concat(titleCode),
    amount: content.amount,
    date: content.date
  })));
};

/***/ }),

/***/ "./assets/js/pages/payments-manage/PaymentMessages.tsx":
/*!*************************************************************!*\
  !*** ./assets/js/pages/payments-manage/PaymentMessages.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentMessages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _ez_components_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ez-components/alert */ "./assets/js/ez-components/alert.jsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function PaymentMessages() {
  var defaultMessages = {
    permanent: [],
    flash: []
  };
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultMessages),
    _useState2 = _slicedToArray(_useState, 2),
    messages = _useState2[0],
    setMessages = _useState2[1];
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])('PaymentMessages', function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_5__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_4__["API"].PAYMENT.GET_PAYMENT_MSG);
    }, {
      onSuccess: function onSuccess(_ref) {
        var data = _ref.data;
        setMessages(data.content);
      },
      initialData: defaultMessages
    }),
    isLoading = _useQuery.isLoading;
  var permanent = messages.permanent,
    flash = messages.flash;
  return !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, permanent.map(function (message, key) {
    var type = message.type,
      title = message.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "perm-".concat(type, "-").concat(key),
      variant: type
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
      content: title
    }));
  }), flash[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValidationModal, Object.assign({}, flash[0]))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
}
function ValidationModal(_ref2) {
  var title = _ref2.title,
    subtitle = _ref2.subtitle,
    linkCTA = _ref2.linkCTA,
    libCTA = _ref2.libCTA,
    targetBlank = _ref2.targetBlank;
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
    _useState4 = _slicedToArray(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  var handleClose = function handleClose() {
    setShow(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzModal"], {
    handleClose: handleClose,
    show: show,
    // @ts-ignore
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium"
    }, title),
    border: "smooth",
    size: "lg",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
    content: subtitle
  })), libCTA && linkCTA && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    to: linkCTA,
    variant: "contained",
    border: "soft",
    className: "text-white",
    target: targetBlank ? '_blank' : '_self'
  }, libCTA)));
}

/***/ }),

/***/ "./assets/js/pages/payments-manage/index.tsx":
/*!***************************************************!*\
  !*** ./assets/js/pages/payments-manage/index.tsx ***!
  \***************************************************/
/*! exports provided: getInfoContentFromCode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfoContentFromCode", function() { return getInfoContentFromCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentManage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/background/BackgroundBubbles */ "./assets/js/components/background/BackgroundBubbles/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _InfoBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoBlock */ "./assets/js/pages/payments-manage/InfoBlock.tsx");
/* harmony import */ var _components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _PaymentChoice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PaymentChoice */ "./assets/js/pages/payments-manage/PaymentChoice.tsx");
/* harmony import */ var _ContractSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContractSummary */ "./assets/js/pages/payments-manage/ContractSummary.tsx");
/* harmony import */ var _PaymentInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PaymentInfo */ "./assets/js/pages/payments-manage/PaymentInfo.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _PaymentMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PaymentMessages */ "./assets/js/pages/payments-manage/PaymentMessages.tsx");
/* harmony import */ var _app_hooks_usePayline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks/usePayline */ "./assets/js/hooks/usePayline.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var getInfoContentFromCode = function getInfoContentFromCode(code) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  switch (code) {
    case '01':
      return t('managePayments.infoBlock.mensu');
    case '02':
      return t('managePayments.infoBlock.direct_debit');
    case '06':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBlock__WEBPACK_IMPORTED_MODULE_5__["UnavailableInfo"], null);
    default:
      return;
  }
};
var NoPaymentModeAvailable = function NoPaymentModeAvailable(_ref) {
  var info = _ref.info;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation2.t;
  var nextButton = {
    label: t('managePayments.form.goNext'),
    align: 'right',
    disabled: true
  };
  var displayInfoBlock = ['01', '02', '06'].some(function (code) {
    return info === null || info === void 0 ? void 0 : info.includes(code);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mt-5"
  }, t('managePayments.form.paymentMode.titles.code_04')), displayInfoBlock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBlock__WEBPACK_IMPORTED_MODULE_5__["InfoBlock"], {
    content: getInfoContentFromCode(info)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    next: nextButton
  }));
};
function PaymentManage() {
  var _a;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPaymentModesAvailable = _useState2[0],
    setIsPaymentModesAvailable = _useState2[1];
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_11__["useQueryClient"])();
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation3.t;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__["useIsMobile"])();
  var urlGetPaymentModeList = _constants__WEBPACK_IMPORTED_MODULE_10__["API"].PAYMENT.GET_PAYMENT_MODE_LIST;
  Object(react_query__WEBPACK_IMPORTED_MODULE_11__["useIsFetching"])(['PaymentMessages']);
  Object(_app_hooks_usePayline__WEBPACK_IMPORTED_MODULE_15__["default"])();
  var dashboardMessagesQuery = new react_query__WEBPACK_IMPORTED_MODULE_11__["QueryObserver"](queryClient, {
    queryKey: ['PaymentMessages']
  });
  var isFetchedDashboardMessages = dashboardMessagesQuery.getCurrentResult().isFetched;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_11__["useQuery"])('getPaymentModeList', function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__["default"].get(urlGetPaymentModeList);
    }, {
      enabled: isFetchedDashboardMessages,
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        var response = data.content;
        var paymentModesList = response.paymentModesList;
        var noModeAvailable = Object.values(paymentModesList).every(function (v) {
          return !v;
        });
        if (!noModeAvailable) {
          setIsPaymentModesAvailable(true);
        } else {
          setIsPaymentModesAvailable(false);
        }
      }
    }),
    data = _useQuery.data,
    isFetching = _useQuery.isFetching;
  var content = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.content) || {};
  var _ref3 = content || {},
    paymentInfoContent = _ref3.grayBlock,
    paymentListTitle = _ref3.paymentModesTitleCode,
    blockInfosCode = _ref3.infosBlockCode,
    paymentModesList = _ref3.paymentModesList,
    contractBlockInfos = _ref3.contractBlock,
    hasEtipSignedValidMandate = _ref3.hasEtipSignedValidMandate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentMessages__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_2__["BackgroundBubbles"], {
    id: "payment-manage",
    type: "payment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
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
  }, isFetching || !isFetchedDashboardMessages ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters mb-3 justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: isMobile ? 256 : 295,
    height: 192,
    className: "mr-lg-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: isMobile ? 256 : 295,
    height: 192
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: isMobile ? 256 : 622,
    height: 300
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 pr-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContractSummary__WEBPACK_IMPORTED_MODULE_8__["ContractSummary"], {
    contractBlockInfos: contractBlockInfos
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 bg-gray-100 rounded-2 d-flex align-items-center justify-content-center mt-3 mt-lg-0",
    style: {
      minHeight: '128px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column align-items-center px-4 py-3"
  }, paymentInfoContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentInfo__WEBPACK_IMPORTED_MODULE_9__["PaymentInfo"], {
    paymentInfoContent: paymentInfoContent
  })))), isPaymentModesAvailable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentChoice__WEBPACK_IMPORTED_MODULE_7__["PaymentChoice"], {
    paymentModesList: paymentModesList,
    paymentListTitle: paymentListTitle,
    info: blockInfosCode,
    hasEtipSignedValidMandate: hasEtipSignedValidMandate
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoPaymentModeAvailable, {
    info: blockInfosCode
  })))));
}

/***/ })

}]);