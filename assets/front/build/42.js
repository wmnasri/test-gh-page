(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

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

/***/ "./assets/img/icons/accounting-document-euro.svg":
/*!*******************************************************!*\
  !*** ./assets/img/icons/accounting-document-euro.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/accounting-document-euro.svg");

/***/ }),

/***/ "./assets/img/icons/credit-card.svg":
/*!******************************************!*\
  !*** ./assets/img/icons/credit-card.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/credit-card.svg");

/***/ }),

/***/ "./assets/img/icons/info-circle.svg":
/*!******************************************!*\
  !*** ./assets/img/icons/info-circle.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/info-circle.svg");

/***/ }),

/***/ "./assets/img/icons/sz-ecology-leaf-bulb.svg":
/*!***************************************************!*\
  !*** ./assets/img/icons/sz-ecology-leaf-bulb.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/sz-ecology-leaf-bulb.svg");

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

/***/ "./assets/img/icons/water-protection-faucet.svg":
/*!******************************************************!*\
  !*** ./assets/img/icons/water-protection-faucet.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/water-protection-faucet.svg");

/***/ }),

/***/ "./assets/img/light-bulb-shine.svg":
/*!*****************************************!*\
  !*** ./assets/img/light-bulb-shine.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/light-bulb-shine.svg");

/***/ }),

/***/ "./assets/img/personal-infos/tap-glass.png":
/*!*************************************************!*\
  !*** ./assets/img/personal-infos/tap-glass.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/tap-glass.png");

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

/***/ "./assets/js/components/Skeleton/PersonalInfos/index.tsx":
/*!***************************************************************!*\
  !*** ./assets/js/components/Skeleton/PersonalInfos/index.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalInfosSkeleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


function PersonalInfosSkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    count: 4,
    height: 32,
    className: "mb-3"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 180,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 220,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 300,
    className: "mb-3"
  })));
}

/***/ }),

/***/ "./assets/js/components/Skeleton/index.tsx":
/*!*************************************************!*\
  !*** ./assets/js/components/Skeleton/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomSkeleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



function CustomSkeleton(_a) {
  var type = _a.type,
    rest = __rest(_a, ["type"]);
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var width = isMobile ? '100%' : '250px';
  if (type === 'invoice-detail-btn') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "d-block d-lg-inline-block mx-lg-2 mb-2",
      width: width,
      count: 3,
      height: 72
    });
  }
  if (type === 'modal') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "list-consents"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      width: '300px',
      height: '50px',
      className: "mt-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      width: '100%',
      height: '35vh',
      className: "mt-4"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex flex-center justify-content-end mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      width: '125px',
      height: '3rem'
    })));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({}, rest));
}

/***/ }),

/***/ "./assets/js/ez-components/modules/Tips.jsx":
/*!**************************************************!*\
  !*** ./assets/js/ez-components/modules/Tips.jsx ***!
  \**************************************************/
/*! exports provided: Separator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Separator", function() { return Separator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModuleTips; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _hooks_useInterweave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _img_light_bulb_shine_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../img/light-bulb-shine.svg */ "./assets/img/light-bulb-shine.svg");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var TipsWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: ", ";\n"])), function (_ref) {
  var fullWidth = _ref.fullWidth;
  return fullWidth ? '100%' : '824px';
});
var Separator = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n"])), function (_ref2) {
  var horizontal = _ref2.horizontal;
  return !horizontal ? '2px' : 'inherit';
}, function (_ref3) {
  var horizontal = _ref3.horizontal;
  return horizontal ? '2px' : 'inherit';
});
function ModuleTips(_ref4) {
  var className = _ref4.className,
    children = _ref4.children,
    _ref4$variant = _ref4.variant,
    variant = _ref4$variant === void 0 ? 'info' : _ref4$variant,
    _ref4$isGoodToKnow = _ref4.isGoodToKnow,
    isGoodToKnow = _ref4$isGoodToKnow === void 0 ? true : _ref4$isGoodToKnow,
    borderRadius = _ref4.borderRadius,
    smallIconContainer = _ref4.smallIconContainer,
    iconSize = _ref4.iconSize,
    fullWidth = _ref4.fullWidth,
    smallPadding = _ref4.smallPadding;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useInterweave = Object(_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_7__["default"])(_constants__WEBPACK_IMPORTED_MODULE_6__["MODULES"].TIPS),
    transform = _useInterweave.transform;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__["useIsMobile"])();
  var classNames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('tips row no-gutters', className, borderRadius, {
    'bg-green-03': variant === 'success',
    'bg-blue-03': variant === 'info',
    'rounded-3': !borderRadius,
    'px-3 py-4': !smallPadding,
    'p-3': smallPadding
  });
  var separatorClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])({
    'bg-green-02': variant === 'success',
    'bg-blue-electric': variant === 'info'
  });
  var tipsIconContainerClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('tips-icon', {
    'col-12 col-sm-2': isMobile || !smallIconContainer
  });
  var widthMobile = 21;
  var widthDesktop = 40;
  var width = iconSize || (isMobile ? widthMobile : widthDesktop);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TipsWrapper, {
    className: classNames,
    fullWidth: fullWidth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: tipsIconContainerClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters align-items-center justify-content-center h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tips-icon d-flex flex-sm-column align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_light_bulb_shine_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
    width: width,
    alt: ""
  }), isGoodToKnow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    weight: "medium",
    size: "S",
    className: "ml-2 ml-sm-0 mb-0"
  }, t('tips'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Separator, {
    horizontal: true,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(separatorClasses, 'col ml-3 d-sm-none')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Separator, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(separatorClasses, 'd-none d-sm-block mx-3')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col tips-content py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["default"], {
    transform: transform,
    content: children,
    noWrap: true
  })));
}

/***/ }),

/***/ "./assets/js/form/CapAddressField.tsx":
/*!********************************************!*\
  !*** ./assets/js/form/CapAddressField.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CapAddressField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_CapAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/CapAddress */ "./assets/js/components/CapAddress/index.jsx");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/utils */ "./assets/js/utils/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var CapContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
function CapAddressField() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
    _useState2 = _slicedToArray(_useState, 2),
    city = _useState2[0],
    setCity = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
    _useState4 = _slicedToArray(_useState3, 2),
    street = _useState4[0],
    setStreet = _useState4[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CapContext.Provider, {
    value: {
      city: city,
      setCity: setCity,
      street: street,
      setStreet: setStreet
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CapAddressCity, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CapAddressStreet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CapAddressAdditionnal, null));
}
function CapAddressCity() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CapContext),
    setCity = _useContext.setCity,
    city = _useContext.city,
    setStreet = _useContext.setStreet;
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isCityDirty = _useState6[0],
    setIsCityDirty = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isSearchingCity = _useState8[0],
    setIsSearchingCity = _useState8[1];
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])(),
    values = _useFormikContext.values,
    errors = _useFormikContext.errors,
    setFieldValue = _useFormikContext.setFieldValue,
    setValues = _useFormikContext.setValues,
    setFieldError = _useFormikContext.setFieldError,
    setFieldTouched = _useFormikContext.setFieldTouched,
    touched = _useFormikContext.touched;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isCityDirty && touched.city && values.city.length === 0) {
      setFieldTouched('city', true, true);
      setFieldError('city', 'mandatory_field');
    }
  }, [touched.city, values.city]);
  var onClickCity = function onClickCity(city) {
    var locality = city.locality,
      zipcode = city.zipcode;
    setCity(city);
    setStreet({});
    setIsSearchingCity(false);
    setValues(Object.assign(Object.assign({}, values), {
      city: locality,
      zipCode: zipcode
    }), true);
    setIsCityDirty(false);
    setFieldError('streetName', '');
  };
  var onChangeCity = function onChangeCity(_ref) {
    var target = _ref.target;
    if (2 < target.value.length && !isSearchingCity) {
      setIsSearchingCity(true);
    }
    setIsCityDirty(true);
    setCity({
      text: target.value
    });
    setFieldError('streetName', '');
    setStreet({
      text: ''
    });
  };
  var onClickAwayCity = function onClickAwayCity() {
    if (isCityDirty) {
      setFieldValue('city', '', true);
      setCity({
        text: ''
      });
      setFieldTouched('city', true, true);
      setFieldError('city', 'mandatory_field');
    }
    setIsSearchingCity(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mb-2",
    htmlFor: "searchInput-town"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    weight: "regular",
    className: "text-primary-dark",
    tag: "span"
  }, t('billingInfo.address.addressCap.label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_CapAddress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "town",
    name: "city",
    value: city.text,
    placeholder: t('diagAss.step.step6.edit.city.placeholder'),
    onChange: onChangeCity,
    onClick: onClickCity,
    onClickAway: onClickAwayCity,
    isSearching: isSearchingCity,
    onBlur: function onBlur() {
      return setFieldTouched('city');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
    field: "city",
    customDisplay: touched.city && (!!errors.city || !!errors.zipCode)
  }));
}
function CapAddressStreet() {
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isSearchingAddress = _useState10[0],
    setIsSearchingAddress = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isAddressDirty = _useState12[0],
    setIsAddressDirty = _useState12[1];
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CapContext),
    city = _useContext2.city,
    street = _useContext2.street,
    setStreet = _useContext2.setStreet;
  var _useFormikContext2 = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])(),
    values = _useFormikContext2.values,
    errors = _useFormikContext2.errors,
    touched = _useFormikContext2.touched,
    setFieldError = _useFormikContext2.setFieldError,
    setFieldTouched = _useFormikContext2.setFieldTouched,
    setValues = _useFormikContext2.setValues,
    setFieldValue = _useFormikContext2.setFieldValue;
  var address = {
    locality: city === null || city === void 0 ? void 0 : city.locality,
    localityId: city === null || city === void 0 ? void 0 : city.inseecode,
    postalCode: city === null || city === void 0 ? void 0 : city.zipcode
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isAddressDirty && touched.streetName && values.streetName.length === 0) {
      setFieldError('streetName', 'mandatory_field');
    }
  }, [touched.streetName, values.streetName]);
  var onClickAddress = function onClickAddress(addressInfos) {
    setStreet(addressInfos);
    setValues(Object.assign(Object.assign({}, values), Object(_app_utils__WEBPACK_IMPORTED_MODULE_7__["getFormAdress"])(addressInfos)), true);
    setIsAddressDirty(false);
    setIsSearchingAddress(false);
  };
  var onChangeAddress = function onChangeAddress(_ref2) {
    var target = _ref2.target;
    setFieldError('streetName', '');
    if (target.value.length > 2 && !isSearchingAddress) {
      setIsSearchingAddress(true);
    }
    setIsAddressDirty(true);
    setStreet({
      text: target.value
    });
  };
  var onClickAwayAddress = function onClickAwayAddress() {
    if (isAddressDirty) {
      setFieldValue('streetName', '', true);
      setStreet({
        text: ''
      });
      setFieldError('streetName', 'mandatory_field');
    }
    setIsSearchingAddress(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mb-2",
    htmlFor: "searchInput-town"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    weight: "regular",
    className: "text-primary-dark",
    tag: "span"
  }, t('diagAss.step.step6.edit.address.label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_CapAddress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "street",
    name: "address",
    value: street.text,
    placeholder: t('diagAss.step.step6.edit.address.placeholder'),
    onChange: onChangeAddress,
    onClick: onClickAddress,
    onClickAway: onClickAwayAddress,
    isSearching: isSearchingAddress,
    address: address,
    disabled: !values.city.length,
    onBlur: function onBlur() {
      return setFieldTouched('streetName');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
    field: "streetName",
    customDisplay: values.city.length > 0 && touched.streetName && !!errors.streetName
  }));
}
function CapAddressAdditionnal() {
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation3.t;
  var _useFormikContext3 = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])(),
    values = _useFormikContext3.values,
    errors = _useFormikContext3.errors,
    setFieldValue = _useFormikContext3.setFieldValue,
    handleBlur = _useFormikContext3.handleBlur;
  var onChange = function onChange(_ref3) {
    var target = _ref3.target;
    var cleanValue = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_6__["capitalizeValue"])(target.value);
    setFieldValue(target.name, cleanValue);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
    id: "additionalAddress",
    name: "additionalAddress",
    label: t('diagAss.step.step6.edit.additional_address.label'),
    placeholder: t('diagAss.step.step6.edit.additional_address.placeholder'),
    variant: "outlined",
    value: values.additionalAddress,
    onChange: onChange,
    onBlur: handleBlur,
    disabled: !values.city.length
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
    field: "additionalAddress",
    customDisplay: !!errors.additionalAddress
  }));
}

/***/ }),

/***/ "./assets/js/form/EmailFields.tsx":
/*!****************************************!*\
  !*** ./assets/js/form/EmailFields.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _FormError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormError */ "./assets/js/form/FormError.tsx");






function EmailFields() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])(),
    handleBlur = _useFormikContext.handleBlur,
    handleChange = _useFormikContext.handleChange,
    values = _useFormikContext.values,
    touched = _useFormikContext.touched,
    errors = _useFormikContext.errors;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzInput"], {
    variant: "outlined",
    name: "email",
    id: "email",
    autocomplete: "off",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.email,
    label: t('personalInfos.form.email.label_email'),
    onPaste: _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__["preventCopyPaste"],
    "aria-required": "true",
    placeholder: t('personalInfos.form.email.placeholder')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
    field: "email",
    customDisplay: touched.email && errors.email ? true : false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzInput"], {
    variant: "outlined",
    name: "repeated_email",
    id: "repeated_email",
    autocomplete: "off",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.repeated_email,
    label: t('personalInfos.form.email.label_repeated'),
    onPaste: _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__["preventCopyPaste"],
    "aria-required": "true",
    placeholder: t('personalInfos.form.email.placeholder')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
    field: "repeated_email",
    customDisplay: touched.repeated_email && errors.repeated_email ? true : false
  }));
}

/***/ }),

/***/ "./assets/js/form/ForeignAddressField.tsx":
/*!************************************************!*\
  !*** ./assets/js/form/ForeignAddressField.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForeignAddressField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/Utils */ "./assets/js/services/Utils.js");










function ForeignAddressField() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var formikContext = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
  var values = formikContext.values,
    errors = formikContext.errors,
    touched = formikContext.touched,
    handleBlur = formikContext.handleBlur,
    setFieldTouched = formikContext.setFieldTouched,
    setFieldValue = formikContext.setFieldValue;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])('countries', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_8__["API"].GET_COUNTRIES);
    }),
    isLoading = _useQuery.isLoading,
    data = _useQuery.data;
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Array.from({
      length: 5
    }, function (v, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 col-lg-8 mb-3",
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 20,
        width: 100,
        className: "mb-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 48
      }));
    }));
  }
  var onBlurCountry = function onBlurCountry() {
    setFieldTouched('country', true, true);
  };
  var onBlurZip = function onBlurZip() {
    setFieldTouched('zipCode', true, true);
  };
  var onChangeCountry = function onChangeCountry(selectedOption) {
    setFieldValue('country', selectedOption.label, true);
  };
  var onChange = function onChange(_ref) {
    var target = _ref.target;
    var cleanValue = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_9__["capitalizeValue"])(target.value);
    setFieldValue(target.name, cleanValue);
  };
  var countryOptions = (isLoading ? [] : data.data).map(function (_ref2) {
    var id = _ref2.id,
      fr = _ref2.fr;
    return {
      label: fr,
      value: id
    };
  });
  var defaultValue = countryOptions.find(function (_ref3) {
    var value = _ref3.value;
    return value === values.country;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mb-2",
    htmlFor: "country"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: "text-primary-dark",
    tag: "span"
  }, t('diagAss.step.step6.edit.country.label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzSelect"], {
    name: "country",
    id: "country",
    placeholder: t('diagAss.step.step6.edit.country.placeholder'),
    options: countryOptions,
    value: values.country,
    defaultValue: defaultValue,
    onBlur: onBlurCountry,
    onChange: onChangeCountry,
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    field: "country",
    customDisplay: touched.country && !!errors.country
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    id: "city",
    name: "city",
    label: t('diagAss.step.step6.edit.city.label'),
    placeholder: t('diagAss.step.step6.edit.city.placeholder', {
      context: 'foreign'
    }),
    variant: "outlined",
    value: values.city,
    onChange: onChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    field: "city",
    customDisplay: touched.city && !!errors.city
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    id: "zipCode",
    name: "zipCode",
    label: t('diagAss.step.step6.edit.zip.label'),
    placeholder: t('diagAss.step.step6.edit.zip.placeholder'),
    variant: "outlined",
    value: values.zipCode,
    onChange: onChange,
    onBlur: onBlurZip
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    field: "zipCode",
    customDisplay: touched.zipCode && !!errors.zipCode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    id: "address",
    name: "address",
    label: t('diagAss.step.step6.edit.address.label'),
    placeholder: t('diagAss.step.step6.edit.address.placeholder'),
    variant: "outlined",
    value: values.address,
    onChange: onChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    field: "address",
    customDisplay: touched.address && !!errors.address
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    id: "additionalAddress",
    name: "additionalAddress",
    label: t('diagAss.step.step6.edit.additional_address.label'),
    placeholder: t('diagAss.step.step6.edit.additional_address.placeholder'),
    variant: "outlined",
    value: values.additionalAddress,
    onChange: onChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    field: "additionalAddress",
    customDisplay: touched.additionalAddress && !!errors.additionalAddress
  }));
}

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

/***/ "./assets/js/models/Address.ts":
/*!*************************************!*\
  !*** ./assets/js/models/Address.ts ***!
  \*************************************/
/*! exports provided: frenchAddressSchema, foreignAddressSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchAddressSchema", function() { return frenchAddressSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foreignAddressSchema", function() { return foreignAddressSchema; });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


var city = yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('mandatory_field').matches(_app_constants__WEBPACK_IMPORTED_MODULE_0__["regex"].city, 'personalInfos.form.adresse.error.city');
var zipCode = yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('mandatory_field').matches(_app_constants__WEBPACK_IMPORTED_MODULE_0__["regex"].zipCode, 'personalInfos.form.adresse.error.zip');
var additionalAddress = yup__WEBPACK_IMPORTED_MODULE_1__["string"]().matches(_app_constants__WEBPACK_IMPORTED_MODULE_0__["regex"].additionalAddress, 'personalInfos.form.adresse.error.additional_address');
var frenchAddressSchema = yup__WEBPACK_IMPORTED_MODULE_1__["object"]({
  insee: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('mandatory_field'),
  hexavia: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('mandatory_field'),
  streetNumber: yup__WEBPACK_IMPORTED_MODULE_1__["string"](),
  streetName: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('mandatory_field'),
  streetExt: yup__WEBPACK_IMPORTED_MODULE_1__["string"](),
  city: city,
  zipCode: zipCode,
  additionalAddress: additionalAddress,
  isFrenchAddress: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().matches('yes')
});
var foreignAddressSchema = yup__WEBPACK_IMPORTED_MODULE_1__["object"]({
  country: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('mandatory_field'),
  city: city,
  zipCode: zipCode,
  address: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('mandatory_field').matches(_app_constants__WEBPACK_IMPORTED_MODULE_0__["regex"].adress, 'personalInfos.form.adresse.error.address'),
  additionalAddress: additionalAddress
});

/***/ }),

/***/ "./assets/js/pages/consent/PersonalInfosConsentForm.tsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/consent/PersonalInfosConsentForm.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalInfosConsentForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_services_consent_consentService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/consent/consentService */ "./assets/js/services/consent/consentService.js");
/* harmony import */ var _app_hooks_consents_useValidateConsent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/consents/useValidateConsent */ "./assets/js/hooks/consents/useValidateConsent.js");
/* harmony import */ var _ConsentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConsentForm */ "./assets/js/pages/consent/ConsentForm.tsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _personal_infos_modals_UpdateStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../personal-infos/modals/UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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











function PersonalInfosConsentForm() {
  var _this = this;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_10__["default"])(),
    track = _useGA.track;
  var codeParcours = 'infosPerso';
  var _a = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_7__["default"])('getInfosPersoConsentQuery', {
      queryFn: function queryFn() {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_8__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_9__["API"].GET_CONSENT, {
                  params: {
                    codeParcours: codeParcours
                  }
                });
              case 2:
                return _context.abrupt("return", _context.sent);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
      }
    }),
    isLoading = _a.isLoading,
    isIdle = _a.isIdle,
    getConsentQuery = __rest(_a, ["isLoading", "isIdle"]);
  var validateConsent = Object(_app_hooks_consents_useValidateConsent__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var isLoadingValidateConsent = validateConsent.isLoading,
    isSuccessValidateConsent = validateConsent.isSuccess,
    isErrorValidateConsent = validateConsent.isError;
  var onSubmit = function onSubmit(values) {
    var _a, _b;
    var formData = Object(_app_services_consent_consentService__WEBPACK_IMPORTED_MODULE_2__["formatSendingData"])({
      params: values,
      codeParcours: codeParcours
    });
    var hasFormData = ((_a = Object.keys(formData)) === null || _a === void 0 ? void 0 : _a.length) > 0;
    var hasCodeUsages = ((_b = formData === null || formData === void 0 ? void 0 : formData.codeUsages) === null || _b === void 0 ? void 0 : _b.length) > 0;
    if (hasFormData && hasCodeUsages) {
      validateConsent.mutate(formData, {
        onSuccess: function onSuccess() {
          getConsentQuery.refetch();
        }
      });
    }
  };
  if (isSuccessValidateConsent || isErrorValidateConsent) {
    var trackingSuccess = function trackingSuccess() {
      return track('PERSONAL_INFO_2', {
        champ_infos_perso: 'préférences de communication'
      });
    };
    var trackingError = function trackingError() {
      return track('PERSONAL_INFO_5', {
        champ_infos_perso: 'préférences de communication'
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_personal_infos_modals_UpdateStatus__WEBPACK_IMPORTED_MODULE_6__["UpdateStatus"], {
      type: "consents",
      success: isSuccessValidateConsent,
      trackingSuccess: trackingSuccess,
      trackingError: trackingError
    });
  }
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
      width: "100%",
      height: "100%",
      className: "mt-5"
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConsentForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "page",
    onSubmit: onSubmit,
    modalTitle: t('consent.modal.title_edit'),
    isLoading: isLoadingValidateConsent,
    codeParcours: codeParcours
  });
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

/***/ "./assets/js/pages/personal-infos/hooks/useConcatAddress.ts":
/*!******************************************************************!*\
  !*** ./assets/js/pages/personal-infos/hooks/useConcatAddress.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useConcatAddress; });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils */ "./assets/js/utils/index.ts");

function useConcatAddress(props) {
  if (props.isFrenchAddress === 'KO') {
    return 'KO';
  }
  if (props.isFrenchAddress === null) {
    return null;
  }
  if (props.isFrenchAddress === 'true') {
    var streetAddress = props.streetAddress,
      additionalAddress = props.additionalAddress,
      zipCode = props.zipCode,
      city = props.city;
    var billingAddress = Object(_app_utils__WEBPACK_IMPORTED_MODULE_0__["wordSeparator"])({
      elem: streetAddress,
      comma: true
    }) + Object(_app_utils__WEBPACK_IMPORTED_MODULE_0__["wordSeparator"])({
      elem: additionalAddress,
      comma: true
    }) + Object(_app_utils__WEBPACK_IMPORTED_MODULE_0__["wordSeparator"])({
      elem: zipCode
    }) + city;
    return billingAddress;
  }
  if (props.isFrenchAddress === 'false') {
    var streetName = props.streetName,
      _additionalAddress = props.additionalAddress,
      foreignAdditionalAddress = props.foreignAdditionalAddress,
      country = props.country;
    return [streetName, _additionalAddress, foreignAdditionalAddress, country].join(', ').replace(/(, ){2,}/g, ', ');
  }
  return '';
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/hooks/useGetCustomerInfos.ts":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/personal-infos/hooks/useGetCustomerInfos.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetCustomerInfos; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");



function useGetCustomerInfos(props) {
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])('getCustomerInfos', function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PERSONAL_INFOS.CUSTOMER_INFOS);
  }, props || {});
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/hooks/usePostContractInfos.ts":
/*!**********************************************************************!*\
  !*** ./assets/js/pages/personal-infos/hooks/usePostContractInfos.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePostContractInfos; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");




function usePostContractInfos() {
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_1__["default"])('getCustomerInfos'),
    refetch = _useQueryObserver.refetch;
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function (params) {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API"].PERSONAL_INFOS.CONTRACT_INFOS, params);
  }, {
    onSuccess: function onSuccess() {
      refetch();
    }
  });
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/hooks/usePostEInvoice.ts":
/*!*****************************************************************!*\
  !*** ./assets/js/pages/personal-infos/hooks/usePostEInvoice.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePostEInvoice; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");



function usePostEInvoice(options) {
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PERSONAL_INFOS.EINVOICE);
  }, options);
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/hooks/usePostUserInfos.ts":
/*!******************************************************************!*\
  !*** ./assets/js/pages/personal-infos/hooks/usePostUserInfos.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePostUserInfos; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");




function usePostUserInfos() {
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_2__["default"])('getCustomerInfos'),
    refetch = _useQueryObserver.refetch;
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function (params) {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API"].PERSONAL_INFOS.USER_INFOS, params);
  }, {
    onSuccess: function onSuccess() {
      refetch();
    }
  });
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/index.tsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/personal-infos/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalInfos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_background_BackgroundEllipse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/background/BackgroundEllipse */ "./assets/js/components/background/BackgroundEllipse/index.jsx");
/* harmony import */ var _app_components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _img_personal_infos_tap_glass_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @img/personal-infos/tap-glass.png */ "./assets/img/personal-infos/tap-glass.png");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections */ "./assets/js/pages/personal-infos/sections/index.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals */ "./assets/js/pages/personal-infos/modals/index.tsx");
/* harmony import */ var _personal_infos_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./personal-infos.scss */ "./assets/js/pages/personal-infos/personal-infos.scss");
/* harmony import */ var _personal_infos_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_personal_infos_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_hooks_consents_useGetConsentQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks/consents/useGetConsentQuery */ "./assets/js/hooks/consents/useGetConsentQuery.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");













function PersonalInfos() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_12__["useGA"])(),
    track = _useGA.track;
  var isDesktop = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["useIsDesktop"])();
  var handleClickDelete = function handleClickDelete() {
    track('PERSONAL_INFO_3');
    window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].ACCOUNT_DELETE;
  };
  var codeParcours = 'infosPerso';
  Object(_app_hooks_consents_useGetConsentQuery__WEBPACK_IMPORTED_MODULE_11__["default"])({
    params: {
      codeParcours: codeParcours
    },
    queryName: 'getInfosPersoConsentQuery'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullscreen: true,
    className: "p-0",
    id: "personal-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_background_BackgroundEllipse__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ellipseImg: _img_personal_infos_tap_glass_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row pt-3 pt-lg-0",
    "data-cy": "personal-infos-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H1",
    size: isDesktop ? 'XL' : 'L',
    color: "light",
    className: "text-uppercase mb-4 mb-lg-6",
    weight: "black"
  }, t('personalInfos.title')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 bg-white mt-3 mt-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
    variant: "contained",
    className: "rounded-1 mx-auto delete-account-btn",
    onClick: handleClickDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    weight: "medium",
    size: isDesktop ? 'M' : 'S',
    className: "mb-0"
  }, t('personalInfos.button_deleteCEL'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals__WEBPACK_IMPORTED_MODULE_9__["default"], null));
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/modals/BillingAddressContent.tsx":
/*!*************************************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/BillingAddressContent.tsx ***!
  \*************************************************************************/
/*! exports provided: BillingAddressContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressContent", function() { return BillingAddressContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _UpdateStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _hooks_useConcatAddress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useConcatAddress */ "./assets/js/pages/personal-infos/hooks/useConcatAddress.ts");
/* harmony import */ var _app_form_CapAddressField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/form/CapAddressField */ "./assets/js/form/CapAddressField.tsx");
/* harmony import */ var _app_form_ForeignAddressField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/form/ForeignAddressField */ "./assets/js/form/ForeignAddressField.tsx");
/* harmony import */ var _hooks_usePostContractInfos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/usePostContractInfos */ "./assets/js/pages/personal-infos/hooks/usePostContractInfos.ts");
/* harmony import */ var _app_models_Address__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/models/Address */ "./assets/js/models/Address.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/utils */ "./assets/js/utils/index.ts");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var BillingAddressContent = function BillingAddressContent(_ref) {
  var handleClose = _ref.handleClose;
  var _a;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_16__["default"])(),
    track = _useGA.track;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    transform = _useInterweave.transform;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    updatedValue = _useState2[0],
    setUpdatedValue = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["COUNTRY_FR"]),
    _useState4 = _slicedToArray(_useState3, 2),
    countryForm = _useState4[0],
    setCountryForm = _useState4[1];
  var isCountryFr = _app_constants__WEBPACK_IMPORTED_MODULE_8__["COUNTRY_FR"] === countryForm;
  var isIntranet = window.tsme_data.isIntranet;
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_9__["default"])('getCustomerInfos'),
    data = _useQueryObserver.data; // TODO : replace any with the correct type
  var _usePostContractInfos = Object(_hooks_usePostContractInfos__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    isLoading = _usePostContractInfos.isLoading,
    isSuccess = _usePostContractInfos.isSuccess,
    isError = _usePostContractInfos.isError,
    mutate = _usePostContractInfos.mutate;
  var billingAddress = Object(_hooks_useConcatAddress__WEBPACK_IMPORTED_MODULE_10__["default"])(((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.content.contact) || {});
  var nextButton = {
    label: t('save'),
    align: 'right',
    loader: isLoading,
    disabled: isIntranet ? isIntranet : isLoading
  };
  var previousButton = {
    enabled: true,
    label: t('cancel'),
    align: 'left',
    onClick: handleClose
  };
  var defaultValues = {
    isFrenchAddress: 'yes',
    insee: '',
    hexavia: '',
    streetNumber: '',
    streetName: '',
    streetExt: '',
    city: '',
    zipCode: '',
    additionalAddress: ''
  };
  var foreignInitialValues = {
    isFrenchAddress: 'no',
    country: '',
    city: '',
    zipCode: '',
    address: '',
    additionalAddress: ''
  };
  var initialValues = isCountryFr ? defaultValues : foreignInitialValues;
  var schema = isCountryFr ? _app_models_Address__WEBPACK_IMPORTED_MODULE_14__["frenchAddressSchema"] : _app_models_Address__WEBPACK_IMPORTED_MODULE_14__["foreignAddressSchema"];
  var onSubmit = function onSubmit(values) {
    var concatAddress = '';
    if (values.isFrenchAddress === 'no') {
      var country = values.country,
        city = values.city,
        zipCode = values.zipCode,
        address = values.address,
        additionalAddress = values.additionalAddress;
      concatAddress = Object(_app_utils__WEBPACK_IMPORTED_MODULE_15__["wordSeparator"])({
        elem: address,
        comma: true
      }) + Object(_app_utils__WEBPACK_IMPORTED_MODULE_15__["wordSeparator"])({
        elem: additionalAddress,
        comma: true
      }) + Object(_app_utils__WEBPACK_IMPORTED_MODULE_15__["wordSeparator"])({
        elem: zipCode
      }) + Object(_app_utils__WEBPACK_IMPORTED_MODULE_15__["wordSeparator"])({
        elem: city,
        comma: true
      }) + country;
    } else {
      var streetNumber = values.streetNumber,
        streetExt = values.streetExt,
        streetName = values.streetName,
        _additionalAddress = values.additionalAddress,
        _city = values.city,
        _zipCode = values.zipCode;
      concatAddress = Object(_app_utils__WEBPACK_IMPORTED_MODULE_15__["wordSeparator"])({
        elem: streetNumber
      }) + Object(_app_utils__WEBPACK_IMPORTED_MODULE_15__["wordSeparator"])({
        elem: streetExt
      }) + Object(_app_utils__WEBPACK_IMPORTED_MODULE_15__["wordSeparator"])({
        elem: streetName,
        comma: true
      }) + Object(_app_utils__WEBPACK_IMPORTED_MODULE_15__["wordSeparator"])({
        elem: _additionalAddress,
        comma: true
      }) + Object(_app_utils__WEBPACK_IMPORTED_MODULE_15__["wordSeparator"])({
        elem: _zipCode
      }) + _city;
    }
    mutate(values);
    setUpdatedValue(concatAddress);
  };
  var addOrModify = billingAddress ? 'edit' : 'add';
  if (isSuccess || isError) {
    var trackingSuccess = function trackingSuccess() {
      return track('PERSONAL_INFO_2', {
        champ_infos_perso: 'adresse de facturation'
      });
    };
    var trackingError = function trackingError() {
      return track('PERSONAL_INFO_5', {
        champ_infos_perso: 'adresse de facturation'
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateStatus__WEBPACK_IMPORTED_MODULE_5__["UpdateStatus"], {
      type: "adresse",
      updatedValue: updatedValue,
      success: isSuccess,
      context: addOrModify,
      trackingSuccess: trackingSuccess,
      trackingError: trackingError
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('personalInfos.form.adresse.title', {
    context: addOrModify
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-3 mb-lg-4"
  }, billingAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_6__["Markup"], {
    content: t('personalInfos.form.adresse.reminder', {
      billingAddress: billingAddress
    }),
    transform: transform
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    key: isCountryFr ? 'fr' : 'foreign',
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: schema,
    validateOnChange: false
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      resetForm = _ref2.resetForm;
    var onChangeCountryForm = function onChangeCountryForm(e) {
      setCountryForm(e.target.value);
      var isFR = e.target.value === _app_constants__WEBPACK_IMPORTED_MODULE_8__["COUNTRY_FR"];
      resetForm({
        values: isFR ? defaultValues : foreignInitialValues,
        errors: {}
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      "data-cy": "address-form",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-8 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      weight: "regular",
      className: "text-primary-dark",
      tag: "span"
    }, t('diagAss.step.step6.edit.country_form.title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzRadio"], {
      id: "countryFormFrance",
      name: "countryForm",
      label: t('diagAss.step.step6.edit.country_form.france'),
      value: _app_constants__WEBPACK_IMPORTED_MODULE_8__["COUNTRY_FR"],
      checked: isCountryFr,
      onChange: onChangeCountryForm
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzRadio"], {
      className: "ml-3",
      id: "countryFormForeign",
      name: "countryForm",
      label: t('diagAss.step.step6.edit.country_form.foreign'),
      value: _app_constants__WEBPACK_IMPORTED_MODULE_8__["COUNTRY_OTHER"],
      checked: !isCountryFr,
      onChange: onChangeCountryForm
    }))), isCountryFr ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_CapAddressField__WEBPACK_IMPORTED_MODULE_11__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_ForeignAddressField__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/personal-infos/modals/ContractContent.tsx":
/*!*******************************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/ContractContent.tsx ***!
  \*******************************************************************/
/*! exports provided: ContractContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractContent", function() { return ContractContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/models/personalInfos */ "./assets/js/models/personalInfos/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _UpdateStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var _app_pages_payments_manage_ContractSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/pages/payments-manage/ContractSummary */ "./assets/js/pages/payments-manage/ContractSummary.tsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _hooks_usePostUserInfos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/usePostUserInfos */ "./assets/js/pages/personal-infos/hooks/usePostUserInfos.ts");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");














var ContractContent = function ContractContent(_ref) {
  var handleClose = _ref.handleClose;
  var _a;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    track = _useGA.track;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_10__["default"])(),
    transform = _useInterweave.transform;
  var isIntranet = window.tsme_data.isIntranet;
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_11__["default"])('getCustomerInfos'),
    data = _useQueryObserver.data;
  var postUserInfos = Object(_hooks_usePostUserInfos__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var isLoading = postUserInfos.isLoading,
    isSuccess = postUserInfos.isSuccess,
    isError = postUserInfos.isError,
    mutate = postUserInfos.mutate,
    variables = postUserInfos.variables;
  var _ref2 = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.content.contract) || {},
    name = _ref2.name,
    holder = _ref2.holder,
    servedAddress = _ref2.servedAddress,
    reference = _ref2.reference;
  var hasNoData = name === null;
  var context = hasNoData ? 'add' : 'edit';
  var contractBlockInfos = {
    name: name,
    contractOwner: holder,
    siteAddress: servedAddress,
    fullReference: reference
  };
  var nextButton = {
    label: t('save'),
    align: 'right',
    loader: isLoading,
    disabled: isIntranet ? isIntranet : isLoading
  };
  var previousButton = {
    enabled: true,
    label: t('cancel'),
    align: 'left',
    onClick: handleClose
  };
  var initialValues = {
    contract_name: ''
  };
  var onSubmit = function onSubmit(values) {
    mutate(values);
  };
  var updatedValue = isSuccess ? variables === null || variables === void 0 ? void 0 : variables.contract_name : '';
  if (isSuccess || isError) {
    var trackingSuccess = function trackingSuccess() {
      return track('PERSONAL_INFO_2', {
        champ_infos_perso: 'nom du contrat'
      });
    };
    var trackingError = function trackingError() {
      return track('PERSONAL_INFO_5', {
        champ_infos_perso: 'nom du contrat'
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateStatus__WEBPACK_IMPORTED_MODULE_7__["UpdateStatus"], {
      type: "contract",
      updatedValue: updatedValue,
      success: isSuccess,
      context: context,
      trackingSuccess: trackingSuccess,
      trackingError: trackingError
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('personalInfos.form.contract.title', {
    context: context
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-3 mb-lg-4"
  }, !hasNoData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_9__["Markup"], {
    content: t('personalInfos.form.contract.reminder', {
      name: name
    }),
    transform: transform
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_5__["updateContractNameSchema"],
    validateOnChange: false
  }, function (_ref3) {
    var values = _ref3.values,
      errors = _ref3.errors,
      touched = _ref3.touched,
      handleChange = _ref3.handleChange,
      handleBlur = _ref3.handleBlur,
      handleSubmit = _ref3.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit,
      autoComplete: "off",
      "data-cy": "contract-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-7 px-0 mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      variant: "outlined",
      name: "contract_name",
      id: "contract_name",
      autocomplete: "off",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.contract_name,
      label: t('personalInfos.form.contract.label'),
      "aria-required": "true",
      placeholder: t('personalInfos.form.contract.placeholder')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "contract_name",
      customDisplay: touched.contract_name && errors.contract_name
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-7 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payments_manage_ContractSummary__WEBPACK_IMPORTED_MODULE_8__["ContractSummary"], {
      contractBlockInfos: contractBlockInfos
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      next: nextButton,
      previous: previousButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/personal-infos/modals/EFactureContent.tsx":
/*!*******************************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/EFactureContent.tsx ***!
  \*******************************************************************/
/*! exports provided: EFactureContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFactureContent", function() { return EFactureContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _UpdateStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/ez-components/modules/Tips */ "./assets/js/ez-components/modules/Tips.jsx");
/* harmony import */ var _app_pages_personal_infos_hooks_usePostEInvoice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/pages/personal-infos/hooks/usePostEInvoice */ "./assets/js/pages/personal-infos/hooks/usePostEInvoice.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var EFactureContent = function EFactureContent(_ref) {
  var handleClose = _ref.handleClose;
  var _a;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_11__["useGA"])(),
    track = _useGA.track;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    transform = _useInterweave.transform;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showUnsubscribe = _useState2[0],
    setShowUnsubscribe = _useState2[1];
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_10__["default"])('getServicesStatus'),
    refetch = _useQueryObserver.refetch;
  var _usePostEInvoice = Object(_app_pages_personal_infos_hooks_usePostEInvoice__WEBPACK_IMPORTED_MODULE_8__["default"])({
      onSuccess: function onSuccess() {
        refetch();
        setShowUnsubscribe(false);
      },
      onError: function onError() {
        setShowUnsubscribe(false);
      }
    }),
    isLoading = _usePostEInvoice.isLoading,
    isSuccess = _usePostEInvoice.isSuccess,
    isError = _usePostEInvoice.isError,
    data = _usePostEInvoice.data,
    mutate = _usePostEInvoice.mutate;
  var responseOK = _app_constants__WEBPACK_IMPORTED_MODULE_9__["CODES"].OK === ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.message);
  var isIntranet = window.tsme_data.isIntranet;
  var nextButton = {
    label: t('close'),
    align: 'right',
    onClick: handleClose,
    type: 'button'
  };
  var nextUnSubscribeBtn = {
    label: t('confirm'),
    align: 'right',
    loader: isLoading,
    disabled: isIntranet ? isIntranet : isLoading,
    onClick: function onClick() {
      track('PERSONAL_INFO_6');
      mutate();
    }
  };
  var previousUnsubscribeBtn = {
    enabled: true,
    label: t('cancel'),
    align: 'left',
    arrow: 'true',
    onClick: function onClick() {
      setShowUnsubscribe(false);
    }
  };
  var onClick = function onClick() {
    setShowUnsubscribe(true);
  };
  if (showUnsubscribe) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "efacture-unsubscribe"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium"
    }, t('personalInfos.form.e-facture.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      size: "L",
      weight: "regular",
      className: "text-dark mb-3 mb-lg-4"
    }, t('personalInfos.form.e-facture.unsubscribe.reminder')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
      previous: previousUnsubscribeBtn,
      next: nextUnSubscribeBtn
    }));
  }
  if (isSuccess || isError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateStatus__WEBPACK_IMPORTED_MODULE_4__["UpdateStatus"], {
      type: "e-facture",
      success: isSuccess && responseOK
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "efacture-initial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('personalInfos.form.e-facture.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular",
    className: "text-dark mb-3 mb-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_5__["Markup"], {
    content: t('personalInfos.form.e-facture.description'),
    transform: transform
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-expert-blue new-line",
    tag: "span"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isGoodToKnow: false,
    borderRadius: "rounded-1",
    smallIconContainer: true,
    iconSize: 21,
    fullWidth: true,
    smallPadding: true
  }, t('personalInfos.form.e-facture.info')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    size: "M",
    className: "text-dark mt-3 d-flex align-items-baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    i18nKey: 'personalInfos.form.e-facture.unsubscribe.description',
    components: {
      redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
        variant: "text",
        className: "text-dark sz-typo-body pl-1 pr-0",
        onClick: onClick
      })
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    next: nextButton
  }));
};

/***/ }),

/***/ "./assets/js/pages/personal-infos/modals/EmailContent.tsx":
/*!****************************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/EmailContent.tsx ***!
  \****************************************************************/
/*! exports provided: EmailContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailContent", function() { return EmailContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/models/personalInfos */ "./assets/js/models/personalInfos/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _img_icons_info_circle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @img/icons/info-circle.svg */ "./assets/img/icons/info-circle.svg");
/* harmony import */ var _UpdateStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_form_EmailFields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/form/EmailFields */ "./assets/js/form/EmailFields.tsx");
/* harmony import */ var _hooks_usePostUserInfos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/usePostUserInfos */ "./assets/js/pages/personal-infos/hooks/usePostUserInfos.ts");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");














var EmailContent = function EmailContent(_ref) {
  var handleClose = _ref.handleClose;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    track = _useGA.track;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    transform = _useInterweave.transform;
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_10__["default"])('getCustomerInfos'),
    data = _useQueryObserver.data; // TODO : replace any with the correct type
  var postUserInfos = Object(_hooks_usePostUserInfos__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var isLoading = postUserInfos.isLoading,
    isSuccess = postUserInfos.isSuccess,
    isError = postUserInfos.isError,
    variables = postUserInfos.variables,
    mutate = postUserInfos.mutate;
  var _ref2 = (data === null || data === void 0 ? void 0 : data.data.content) || {},
    _ref2$login = _ref2.login,
    login = _ref2$login === void 0 ? '' : _ref2$login;
  var isIntranet = window.tsme_data.isIntranet;
  var nextButton = {
    label: t('save'),
    align: 'right',
    loader: isLoading,
    disabled: isIntranet ? isIntranet : isLoading
  };
  var previousButton = {
    enabled: true,
    label: t('cancel'),
    align: 'left',
    onClick: handleClose
  };
  var initialValues = {
    email: '',
    repeated_email: ''
  };
  var onSubmit = function onSubmit(values) {
    mutate(values);
  };
  var updatedValue = isSuccess ? variables === null || variables === void 0 ? void 0 : variables.email : '';
  if (isSuccess || isError) {
    var trackingSuccess = function trackingSuccess() {
      return track('PERSONAL_INFO_2', {
        champ_infos_perso: 'email'
      });
    };
    var trackingError = function trackingError() {
      return track('PERSONAL_INFO_5', {
        champ_infos_perso: 'email'
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateStatus__WEBPACK_IMPORTED_MODULE_7__["UpdateStatus"], {
      type: "email",
      updatedValue: updatedValue,
      success: isSuccess,
      trackingSuccess: trackingSuccess,
      trackingError: trackingError
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('personalInfos.form.email.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-3 mb-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
    content: t('personalInfos.form.email.reminder', {
      login: login
    }),
    transform: transform
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_4__["updateEmailSchema"],
    validateOnChange: false
  }, function (_ref3) {
    var handleSubmit = _ref3.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit,
      autoComplete: "off",
      "data-cy": "email-form",
      className: "personal-info-email-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "border-bottom border-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-7 px-0 mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_EmailFields__WEBPACK_IMPORTED_MODULE_11__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "light",
      className: "text-dark"
    }, t('personalInfos.form.email.info_first')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "light",
      className: "text-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_icons_info_circle_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
      alt: "",
      className: "info-icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      i18nKey: 'personalInfos.form.email.info',
      components: {
        ul: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
          tag: "ul",
          className: "mb-0"
        }),
        li: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
          tag: "li"
        })
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
      next: nextButton,
      previous: previousButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/personal-infos/modals/OnConnectUnsubscribeContent.tsx":
/*!*******************************************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/OnConnectUnsubscribeContent.tsx ***!
  \*******************************************************************************/
/*! exports provided: OnConnectUnsubscribeContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnConnectUnsubscribeContent", function() { return OnConnectUnsubscribeContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_usePostCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/usePostCustomerAdditionalInfos */ "./assets/js/pages/personal-infos/hooks/usePostCustomerAdditionalInfos.ts");
/* harmony import */ var _UpdateStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");










var OnConnectUnsubscribeContent = function OnConnectUnsubscribeContent(_ref) {
  var handleClose = _ref.handleClose;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_9__["default"])('getServicesStatus'),
    refetch = _useQueryObserver.refetch;
  var _usePostCustomerAddit = Object(_hooks_usePostCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_7__["default"])('postSmartCoachAddInfoInfoPerso'),
    mutate = _usePostCustomerAddit.mutate,
    isLoading = _usePostCustomerAddit.isLoading,
    isError = _usePostCustomerAddit.isError,
    isSuccess = _usePostCustomerAddit.isSuccess;
  var onSubmit = function onSubmit() {
    var updatedValues = {
      peopleCount: '',
      housingType: '',
      useCommunityHotWater: '',
      consentGiven: false
    };
    mutate(updatedValues, {
      onSuccess: function onSuccess() {
        refetch();
        history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
          modal: 'on-connect-desactivation',
          result: 'succes'
        }));
      },
      onError: function onError() {
        history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
          modal: 'on-connect-desactivation',
          result: 'erreur'
        }));
      }
    });
  };
  var previousButton = {
    label: t('cancel'),
    align: 'left',
    prevArrow: false,
    enabled: true,
    variant: 'outlined',
    onClick: function onClick() {
      return history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
        modal: 'on-connect'
      }));
    },
    className: 'pl-3'
  };
  var nextButton = {
    label: t('confirm'),
    align: 'right',
    loader: isLoading
  };
  if (isSuccess || isError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateStatus__WEBPACK_IMPORTED_MODULE_8__["UpdateStatus"], {
      type: "on-connect-desactivation",
      sourceType: "infoPerso",
      success: isSuccess,
      toRedirect: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS)
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      consentGiven: false
    },
    onSubmit: onSubmit
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit,
      "data-cy": "unsubscribe-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium"
    }, t('personalInfos.form.on-connect.unsubscribe.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      size: "L",
      weight: "regular",
      className: "text-dark"
    }, t('personalInfos.form.on-connect.unsubscribe.description')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      previous: previousButton,
      next: nextButton
    })));
  });
};

/***/ }),

/***/ "./assets/js/pages/personal-infos/modals/PasswordContent.tsx":
/*!*******************************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/PasswordContent.tsx ***!
  \*******************************************************************/
/*! exports provided: PasswordContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordContent", function() { return PasswordContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/models/personalInfos */ "./assets/js/models/personalInfos/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _UpdateStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var _app_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/tsme-react-components */ "./assets/js/components/tsme-react-components/index.tsx");
/* harmony import */ var _app_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/tsme-react-components/components/Password/utils */ "./assets/js/components/tsme-react-components/components/Password/utils.tsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _hooks_usePostUserInfos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/usePostUserInfos */ "./assets/js/pages/personal-infos/hooks/usePostUserInfos.ts");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var PasswordContent = function PasswordContent(_ref) {
  var handleClose = _ref.handleClose;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_15__["default"])(),
    track = _useGA.track;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    transform = _useInterweave.transform;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPasswordRules = _useState2[0],
    setShowPasswordRules = _useState2[1];
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_13__["default"])('getCustomerInfos'),
    data = _useQueryObserver.data; // TODO : replace any with the correct type
  var postUserInfos = Object(_hooks_usePostUserInfos__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var isLoading = postUserInfos.isLoading,
    isSuccess = postUserInfos.isSuccess,
    isError = postUserInfos.isError,
    mutate = postUserInfos.mutate;
  var _ref2 = (data === null || data === void 0 ? void 0 : data.data.content) || {},
    _ref2$login = _ref2.login,
    login = _ref2$login === void 0 ? '' : _ref2$login;
  var refPassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var aria = {
    showPasswordLabel: t('global.form.password', {
      context: 'show'
    }),
    hidePasswordLabel: t('global.form.password', {
      context: 'hide'
    })
  };
  var isIntranet = window.tsme_data.isIntranet;
  var nextButton = {
    loader: isLoading,
    label: t('save'),
    align: 'right',
    disabled: isIntranet ? isIntranet : isLoading
  };
  var previousButton = {
    enabled: true,
    label: t('cancel'),
    align: 'left',
    onClick: handleClose
  };
  var initialValues = {
    old_password: '',
    password: '',
    repeated_password: ''
  };
  var onSubmit = function onSubmit(values) {
    mutate(values);
  };
  if (isSuccess || isError) {
    var trackingSuccess = function trackingSuccess() {
      return track('PERSONAL_INFO_2', {
        champ_infos_perso: 'mot de passe'
      });
    };
    var trackingError = function trackingError() {
      return track('PERSONAL_INFO_5', {
        champ_infos_perso: 'mot de passe'
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateStatus__WEBPACK_IMPORTED_MODULE_8__["UpdateStatus"], {
      type: "password",
      success: isSuccess,
      trackingSuccess: trackingSuccess,
      trackingError: trackingError
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('personalInfos.form.password.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-3 mb-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_11__["Markup"], {
    content: t('personalInfos.form.password.reminder', {
      login: login
    }),
    transform: transform
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_6__["updateLoginSchema"],
    validateOnChange: false
  }, function (_ref3) {
    var values = _ref3.values,
      errors = _ref3.errors,
      touched = _ref3.touched,
      handleChange = _ref3.handleChange,
      handleBlur = _ref3.handleBlur,
      handleSubmit = _ref3.handleSubmit;
    var passwordValidation = Object(_app_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_10__["checkPassRules"])(values.password);
    var allTrue = Object.values(passwordValidation).every(function (value) {
      return value;
    });
    var messageErrorAccess = Object(_app_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_10__["messageErrorPasswordAccess"])(passwordValidation);
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
      autoComplete: "off",
      "data-cy": "password-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-7 px-0 mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      variant: "outlined",
      name: "old_password",
      id: "old_password",
      autocomplete: "off",
      type: "password",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.old_password,
      label: t('personalInfos.form.password.label_old_password'),
      showPassword: true,
      onPaste: _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__["preventCopyPaste"],
      aria: aria,
      placeholder: t('personalInfos.form.password.placeholder')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      field: "old_password",
      customDisplay: touched.old_password && errors.old_password
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "position-relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      ref: refPassword,
      variant: "outlined",
      name: "password",
      id: "password",
      autocomplete: "new-password",
      type: "password",
      onChange: handleChange,
      onBlur: onBlur,
      onFocus: onFocus,
      value: values.password,
      label: t('personalInfos.form.password.label_password'),
      showPassword: true,
      onPaste: _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__["preventCopyPaste"],
      "aria-describedby": "password-rules",
      "aria-required": "true",
      aria: aria,
      placeholder: t('personalInfos.form.password.placeholder')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_9__["PasswordRules"], {
      password: values.password,
      className: 'position-absolute bg-blue-03 rounded-2',
      show: showPasswordRules
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      field: "password",
      messageAccess: messageErrorAccess,
      customDisplay: touched.password && errors.password
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      variant: "outlined",
      name: "repeated_password",
      id: "repeated_password",
      autocomplete: "off",
      type: "password",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.repeated_password,
      label: t('personalInfos.form.password.label_repeated_password'),
      showPassword: true,
      onPaste: _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__["preventCopyPaste"],
      aria: aria,
      placeholder: t('personalInfos.form.password.placeholder')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      field: "repeated_password",
      customDisplay: touched.repeated_password && errors.repeated_password
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      next: nextButton,
      previous: previousButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/personal-infos/modals/PhoneContent.tsx":
/*!****************************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/PhoneContent.tsx ***!
  \****************************************************************/
/*! exports provided: PhoneContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneContent", function() { return PhoneContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/models/personalInfos */ "./assets/js/models/personalInfos/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _UpdateStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/ez-components/modules/Tips */ "./assets/js/ez-components/modules/Tips.jsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _hooks_usePostContractInfos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/usePostContractInfos */ "./assets/js/pages/personal-infos/hooks/usePostContractInfos.ts");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var removedFixedPhoneTag = 'REMOVED';
var PhoneContent = function PhoneContent(_ref) {
  var handleClose = _ref.handleClose;
  var _a, _b, _c, _d;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_15__["default"])(),
    track = _useGA.track;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    transform = _useInterweave.transform;
  var pathname = window.location.pathname;
  var modal = pathname.split('/').pop();
  var isMobile = modal === 'mobilePhone';
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showInfo = _useState2[0],
    setShowInfo = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showErasePhone = _useState4[0],
    setShowErasePhone = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isEraseContext = _useState6[0],
    setIsEraseContext = _useState6[1];
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_13__["default"])('getCustomerInfos'),
    data = _useQueryObserver.data; // TODO : replace any with the correct type
  var _ref2 = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.content.contact) || {},
    mobilePhone = _ref2.mobilePhone,
    phone = _ref2.phone;
  var postUserInfos = Object(_hooks_usePostContractInfos__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var isLoading = postUserInfos.isLoading,
    isSuccess = postUserInfos.isSuccess,
    isError = postUserInfos.isError,
    variables = postUserInfos.variables,
    mutate = postUserInfos.mutate;
  var _ref3 = (_d = (_c = (_b = window.tsme_data) === null || _b === void 0 ? void 0 : _b.footer) === null || _c === void 0 ? void 0 : _c.links_bottom) === null || _d === void 0 ? void 0 : _d.privacy_policy,
    link = _ref3.link;
  var hasNoData = isMobile ? mobilePhone === null : phone === null;
  var context = hasNoData ? 'add' : 'edit';
  var isIntranet = window.tsme_data.isIntranet;
  var nextButton = {
    loader: isLoading,
    label: t('save'),
    align: 'right',
    disabled: isIntranet ? isIntranet : isLoading
  };
  var eraseFixedPhone = function eraseFixedPhone() {
    mutate({
      phone: removedFixedPhoneTag,
      mobile_phone: undefined,
      reference: undefined
    });
    setShowErasePhone(false);
    setIsEraseContext(true);
  };
  var nextButtonErase = {
    loader: isLoading,
    label: t('confirm'),
    align: 'right',
    disabled: isIntranet ? isIntranet : isLoading,
    onClick: eraseFixedPhone
  };
  var previousButton = {
    enabled: true,
    label: t('cancel'),
    align: 'left',
    onClick: handleClose
  };
  var previousButtonErase = {
    enabled: true,
    label: t('cancel'),
    align: 'left',
    onClick: function onClick() {
      setShowErasePhone(false);
    }
  };
  var initialValues = _defineProperty({}, isMobile ? 'mobile_phone' : 'phone', '');
  var validationSchema = isMobile ? _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_5__["updateMobilePhoneSchema"] : _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_5__["updatePhoneSchema"];
  var onSubmit = function onSubmit(values) {
    var _a, _b;
    var cleanedValues = Object.assign(Object.assign({}, values), {
      mobile_phone: (_a = values.mobile_phone) === null || _a === void 0 ? void 0 : _a.replace(/\s+/g, ''),
      phone: (_b = values.phone) === null || _b === void 0 ? void 0 : _b.replace(/\s+/g, '')
    });
    mutate(cleanedValues);
  };
  var handleInfoHide = function handleInfoHide() {
    setShowInfo(false);
  };
  var buttonInfoStyles = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_12__["css"])({
    marginLeft: 4,
    '.btn-text, .sz-icon-line': {
      padding: 0,
      height: '1rem',
      fontSize: '1.5rem',
      lineHeight: 1
    }
  });
  var updatedValue = isMobile ? variables === null || variables === void 0 ? void 0 : variables.mobile_phone : variables === null || variables === void 0 ? void 0 : variables.phone;
  var handleErasePhone = function handleErasePhone() {
    setShowErasePhone(true);
  };
  if (showErasePhone) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium"
    }, t("personalInfos.form.".concat(modal, ".validation.title_edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      weight: "regular",
      className: "text-dark mb-3 mb-lg-4"
    }, t("personalInfos.form.".concat(modal, ".validation.body_erase"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      next: nextButtonErase,
      previous: previousButtonErase
    }));
  }
  if (isSuccess || isError) {
    var trackingSuccess = function trackingSuccess() {
      return track('PERSONAL_INFO_2', {
        champ_infos_perso: isMobile ? 'téléphone mobile' : 'téléphone fixe'
      });
    };
    var trackingError = function trackingError() {
      return track('PERSONAL_INFO_5', {
        champ_infos_perso: isMobile ? 'téléphone mobile' : 'téléphone fixe'
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateStatus__WEBPACK_IMPORTED_MODULE_7__["UpdateStatus"], {
      type: "phone",
      context: isEraseContext && isSuccess ? 'erase_ok' : context,
      updatedValue: updatedValue,
      success: isSuccess,
      trackingSuccess: trackingSuccess,
      trackingError: trackingError
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t("personalInfos.form.".concat(modal, ".title"), {
    context: context
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-3 mb-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
    content: t("personalInfos.form.".concat(modal, ".reminder"), {
      context: context,
      mobilePhone: mobilePhone !== null && mobilePhone !== void 0 ? mobilePhone : '',
      phone: phone !== null && phone !== void 0 ? phone : ''
    }),
    transform: transform
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    validateOnChange: false
  }, function (_ref4) {
    var values = _ref4.values,
      errors = _ref4.errors,
      touched = _ref4.touched,
      handleChange = _ref4.handleChange,
      handleBlur = _ref4.handleBlur,
      handleSubmit = _ref4.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit,
      autoComplete: "off",
      "data-cy": "phone-form"
    }, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-7 mb-3 px-0 input-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      id: "mobile_phone",
      name: "mobile_phone",
      label: t('personalInfos.form.mobilePhone.label'),
      placeholder: t('personalInfos.form.mobilePhone.placeholder'),
      variant: "outlined",
      value: values.mobile_phone,
      onChange: handleChange,
      onBlur: handleBlur
    }), !hasNoData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      className: buttonInfoStyles,
      variant: "text",
      icon: "information-circle",
      onBlur: handleInfoHide,
      onClick: function onClick() {
        return setShowInfo(!showInfo);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "mobile_phone",
      customDisplay: touched.mobile_phone && errors.mobile_phone,
      className: "mt-2"
    }), showInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M",
      className: "text-dark mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
      content: t('personalInfos.form.mobilePhone.info')
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-7 mb-3 px-0 input-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      id: "phone",
      name: "phone",
      label: t('personalInfos.form.phone.label'),
      placeholder: t('personalInfos.form.phone.placeholder'),
      variant: "outlined",
      value: values.phone,
      onChange: handleChange,
      onBlur: handleBlur
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      className: buttonInfoStyles,
      variant: "text",
      icon: "information-circle",
      onBlur: handleInfoHide,
      onClick: function onClick() {
        return setShowInfo(!showInfo);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "phone",
      customDisplay: touched.phone && errors.phone,
      className: "mt-2"
    }), showInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M",
      className: "text-dark mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
      content: t('personalInfos.form.phone.info')
    })), phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "text",
      className: "pl-0",
      onClick: handleErasePhone
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M",
      className: "text-dark"
    }, t('personalInfos.form.phone.erase_phone'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      i18nKey: 'loginReset.login.step4.form.mobilePhone.privacy_policy',
      components: {
        redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "font-family-medium",
          decorate: true,
          target: "_blank",
          to: link
        })
      }
    })), isMobile && hasNoData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      weight: "regular",
      className: "text-expert-blue",
      tag: "span"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_11__["default"], {
      isGoodToKnow: false,
      borderRadius: "rounded-1",
      smallIconContainer: true,
      iconSize: 21,
      fullWidth: true,
      smallPadding: true
    }, t('personalInfos.form.mobilePhone.info')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      next: nextButton,
      previous: previousButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/personal-infos/modals/index.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalInfosPersos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EmailContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmailContent */ "./assets/js/pages/personal-infos/modals/EmailContent.tsx");
/* harmony import */ var _PasswordContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PasswordContent */ "./assets/js/pages/personal-infos/modals/PasswordContent.tsx");
/* harmony import */ var _ContractContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContractContent */ "./assets/js/pages/personal-infos/modals/ContractContent.tsx");
/* harmony import */ var _PhoneContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PhoneContent */ "./assets/js/pages/personal-infos/modals/PhoneContent.tsx");
/* harmony import */ var _BillingAddressContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BillingAddressContent */ "./assets/js/pages/personal-infos/modals/BillingAddressContent.tsx");
/* harmony import */ var _EFactureContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EFactureContent */ "./assets/js/pages/personal-infos/modals/EFactureContent.tsx");
/* harmony import */ var _OnConnectCoachContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OnConnectCoachContent */ "./assets/js/pages/personal-infos/modals/OnConnectCoachContent.tsx");
/* harmony import */ var _OnConnectUnsubscribeContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OnConnectUnsubscribeContent */ "./assets/js/pages/personal-infos/modals/OnConnectUnsubscribeContent.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_pages_consent_PersonalInfosConsentForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/pages/consent/PersonalInfosConsentForm */ "./assets/js/pages/consent/PersonalInfosConsentForm.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_components_Skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/Skeleton */ "./assets/js/components/Skeleton/index.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
















var modalRoutes = {
  email: _EmailContent__WEBPACK_IMPORTED_MODULE_3__["EmailContent"],
  password: _PasswordContent__WEBPACK_IMPORTED_MODULE_4__["PasswordContent"],
  contract: _ContractContent__WEBPACK_IMPORTED_MODULE_5__["ContractContent"],
  mobilePhone: _PhoneContent__WEBPACK_IMPORTED_MODULE_6__["PhoneContent"],
  phone: _PhoneContent__WEBPACK_IMPORTED_MODULE_6__["PhoneContent"],
  adresse: _BillingAddressContent__WEBPACK_IMPORTED_MODULE_7__["BillingAddressContent"],
  'e-facture': _EFactureContent__WEBPACK_IMPORTED_MODULE_8__["EFactureContent"],
  'on-connect': _OnConnectCoachContent__WEBPACK_IMPORTED_MODULE_9__["OnConnectCoachContent"],
  'on-connect-desactivation': _OnConnectUnsubscribeContent__WEBPACK_IMPORTED_MODULE_10__["OnConnectUnsubscribeContent"],
  consents: _app_pages_consent_PersonalInfosConsentForm__WEBPACK_IMPORTED_MODULE_13__["default"]
};
function ModalInfosPersos() {
  var _this = this;
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
    modal = _useParams.modal;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var codeParcours = 'infosPerso';
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_12__["default"])('getCustomerInfos'),
    isLoading = _useQueryObserver.isLoading;
  var _useQueryObserver2 = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_12__["default"])('getInfosPersoConsentQuery', {
      queryFn: function queryFn() {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_14__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_11__["API"].GET_CONSENT, {
                  params: codeParcours
                });
              case 2:
                return _context.abrupt("return", _context.sent);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
      }
    }),
    isConsentsLoading = _useQueryObserver2.isLoading;
  var handleClose = function handleClose() {
    history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzModal"], {
    size: "lg",
    show: !!modal,
    handleClose: handleClose,
    backdrop: true,
    centered: true,
    scrollable: true,
    border: "smooth",
    fullscreen: "md",
    title: "",
    id: "modal-".concat(modal)
  }, Object.entries(modalRoutes).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      Component = _ref2[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: key,
      path: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
        modal: key
      })
    }, isLoading || isConsentsLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton__WEBPACK_IMPORTED_MODULE_15__["default"], {
      type: "modal"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
      handleClose: handleClose
    }));
  }));
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/personal-infos.scss":
/*!************************************************************!*\
  !*** ./assets/js/pages/personal-infos/personal-infos.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/personal-infos/sections/ContactDetailsContent.tsx":
/*!***************************************************************************!*\
  !*** ./assets/js/pages/personal-infos/sections/ContactDetailsContent.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactDetailsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _DefaultCardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultCardContent */ "./assets/js/pages/personal-infos/sections/DefaultCardContent.tsx");
/* harmony import */ var _hooks_useConcatAddress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useConcatAddress */ "./assets/js/pages/personal-infos/hooks/useConcatAddress.ts");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function ContactDetailsContent(_a // ContactDetailsData
) {
  var hideButton = _a.hideButton,
    props = __rest(_a, ["hideButton"]); // ContactDetailsData

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var billingAddress = Object(_hooks_useConcatAddress__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
  var phoneData = {
    mobilePhone: props.mobilePhone,
    phone: props.phone
  };
  var billingData = {
    billingAddress: billingAddress
  };
  var ibanData = {
    monthlyPaymentCode: props.monthlyPaymentCode,
    roleIbanStatus: props.roleIbanStatus
  };
  if (ibanData.roleIbanStatus) {
    ibanData['ibanHolder'] = props.ibanHolder;
    ibanData['iban'] = props.iban;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DefaultCardContent__WEBPACK_IMPORTED_MODULE_2__["DefaultCardContent"], {
    type: "contact",
    subtitle: t("personalInfos.section.subtitle.phone"),
    content: phoneData,
    hideButton: hideButton
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DefaultCardContent__WEBPACK_IMPORTED_MODULE_2__["DefaultCardContent"], {
    type: "contact",
    subtitle: t("personalInfos.section.subtitle.billing"),
    content: billingData,
    hideButton: hideButton
  }), (ibanData.monthlyPaymentCode === 'ELIGIBLE' || ibanData.roleIbanStatus === true) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DefaultCardContent__WEBPACK_IMPORTED_MODULE_2__["DefaultCardContent"], {
    type: "contact",
    subtitle: t("personalInfos.section.subtitle.bankInfos"),
    content: ibanData,
    hideButton: hideButton
  }));
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/sections/DefaultCardContent.tsx":
/*!************************************************************************!*\
  !*** ./assets/js/pages/personal-infos/sections/DefaultCardContent.tsx ***!
  \************************************************************************/
/*! exports provided: TableItem, DefaultCardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableItem", function() { return TableItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultCardContent", function() { return DefaultCardContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/ez-components/modules/Tips */ "./assets/js/ez-components/modules/Tips.jsx");
/* harmony import */ var _img_icons_credit_card_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @img/icons/credit-card.svg */ "./assets/img/icons/credit-card.svg");
/* harmony import */ var _img_icons_sz_ecology_leaf_bulb_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @img/icons/sz-ecology-leaf-bulb.svg */ "./assets/img/icons/sz-ecology-leaf-bulb.svg");
/* harmony import */ var _img_icons_accounting_document_euro_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @img/icons/accounting-document-euro.svg */ "./assets/img/icons/accounting-document-euro.svg");
/* harmony import */ var _img_icons_water_protection_faucet_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @img/icons/water-protection-faucet.svg */ "./assets/img/icons/water-protection-faucet.svg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var iconMappings = {
  mensu: _img_icons_credit_card_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
  onConnectCoach: _img_icons_sz_ecology_leaf_bulb_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
  overConsumptionAlert: _img_icons_accounting_document_euro_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
  EFacture: _img_icons_accounting_document_euro_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
  leakAlert: _img_icons_water_protection_faucet_svg__WEBPACK_IMPORTED_MODULE_13__["default"]
};
function TableItem(_ref) {
  var label = _ref.label,
    value = _ref.value,
    border = _ref.border,
    _ref$showInfo = _ref.showInfo,
    showInfo = _ref$showInfo === void 0 ? false : _ref$showInfo,
    _ref$showButton = _ref.showButton,
    showButton = _ref$showButton === void 0 ? true : _ref$showButton,
    handleInfoHide = _ref.handleInfoHide,
    handleInfoShow = _ref.handleInfoShow,
    _ref$context = _ref.context,
    context = _ref$context === void 0 ? 'edit' : _ref$context,
    className = _ref.className,
    service = _ref.service,
    to = _ref.to,
    onClick = _ref.onClick;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var isDesktop = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__["useIsDesktop"])();
  var tableItemClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('table-item py-2 border-top border-1', className, {
    'border-bottom': border
  });
  var buttonInfoStyles = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__["css"])({
    marginLeft: isDesktop ? 0 : 4,
    '.btn-text, .sz-icon-line': {
      padding: 0,
      height: '1rem',
      fontSize: '1rem',
      lineHeight: 1,
      color: 'var(--gray-600)'
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: tableItemClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, service && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: iconMappings[service],
    className: "services-item-icon mr-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "regular",
    className: "text-dark mb-0"
  }, label), showInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: buttonInfoStyles,
    variant: "text",
    icon: "information-circle",
    onMouseEnter: handleInfoShow,
    onMouseLeave: handleInfoHide,
    onFocus: handleInfoShow,
    onBlur: handleInfoHide
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "S",
    weight: "medium",
    className: "mb-0"
  }, value), showButton && to && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "px-0 ml-lg-auto",
    to: to,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "regular"
  }, t('personalInfos.button', {
    context: context
  }))));
}
var DefaultCardContent = function DefaultCardContent(_ref2) {
  var type = _ref2.type,
    subtitle = _ref2.subtitle,
    content = _ref2.content,
    hideButton = _ref2.hideButton;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_15__["default"])(),
    track = _useGA.track;
  if (type === 'login') {
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showInfo = _useState2[0],
      setShowInfo = _useState2[1];
    var handleInfoShow = function handleInfoShow() {
      setShowInfo(true);
    };
    var handleInfoHide = function handleInfoHide() {
      setShowInfo(false);
    };
    var onClickEmail = function onClickEmail() {
      return track('PERSONAL_INFO_1', {
        champ_infos_perso: 'email'
      });
    };
    var onClickPassword = function onClickPassword() {
      return track('PERSONAL_INFO_1', {
        champ_infos_perso: 'mot de passe'
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableItem, {
      label: t("personalInfos.labels.login"),
      value: content,
      showInfo: true,
      showButton: !hideButton,
      handleInfoHide: handleInfoHide,
      handleInfoShow: handleInfoShow,
      to: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
        modal: 'email'
      }),
      onClick: onClickEmail
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableItem, {
      label: t("personalInfos.labels.password"),
      value: '**************',
      showButton: !hideButton,
      border: true,
      to: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
        modal: 'password'
      }),
      onClick: onClickPassword
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmailInfo, {
      show: showInfo
    }));
  }
  var monthlyPaymentCode = content.monthlyPaymentCode;
  var url = _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD + '?payment_mode=mensualisation';
  var defaultCardDataArray = Object.entries(content);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H5",
    size: "L",
    weight: "bold",
    className: "text-uppercase mb-3"
  }, subtitle), type === 'contact' && monthlyPaymentCode === 'ELIGIBLE' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "full-width-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isGoodToKnow: false,
    borderRadius: "rounded-1",
    smallIconContainer: true,
    iconSize: 21,
    fullWidth: true
  }, t('personalInfos.mensuInfo', {
    url: url
  }))), defaultCardDataArray.map(function (_ref3, index) {
    var _ref4 = _slicedToArray(_ref3, 2),
      label = _ref4[0],
      value = _ref4[1];
    var isSubContact = ['phone', 'billingAddress'].includes(label);
    var isLastEl = index === defaultCardDataArray.length - 1;
    var className = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])({
      'mb-3 mb-lg-4': isSubContact && isLastEl
    });
    var koDataFields = ['mobilePhone', 'phone', 'billingAddress', 'ibanHolder', 'iban'];
    var hasKoData = koDataFields.includes(label) && value === 'KO';
    var hasNoMobilePhone = label === 'mobilePhone' && value === null;
    var hasValue = value && value !== null;
    var getValue = function getValue() {
      if (hasKoData) {
        return t('personalInfos.labels.koData');
      }
      if (!hasValue) {
        return t("personalInfos.labels.".concat(label), {
          context: 'no_value'
        });
      }
      if (label === 'reference' && value !== t('personalInfos.labels.koData')) {
        return (value === null || value === void 0 ? void 0 : value.slice(0, 2)) + "-" + (value === null || value === void 0 ? void 0 : value.slice(2));
      }
      return value;
    };
    var to = {
      phone: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
        modal: 'phone'
      }),
      mobilePhone: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
        modal: 'mobilePhone'
      }),
      name: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
        modal: 'contract'
      }),
      holder: null,
      servedAddress: null,
      reference: null,
      billingAddress: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
        modal: 'adresse'
      }),
      ibanHolder: _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_IBAN,
      iban: _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].ACCOUNT_IBAN
    };
    var TrackingChampInfosPersos = {
      phone: 'téléphone fixe',
      mobilePhone: 'téléphone mobile',
      name: 'nom du contrat',
      billingAddress: 'adresse de facturation'
    };
    if (label !== 'monthlyPaymentCode' && label !== 'roleIbanStatus') {
      var onClick = function onClick() {};
      if (label in TrackingChampInfosPersos) {
        onClick = function onClick() {
          track('PERSONAL_INFO_1', {
            champ_infos_perso: TrackingChampInfosPersos[label]
          });
        };
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: "table-item-".concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableItem, {
        label: t("personalInfos.labels.".concat(label)),
        value: getValue(),
        showButton: hideButton ? !hideButton : hasKoData ? false : !!to[label],
        className: className,
        border: isLastEl,
        context: !value ? 'add' : 'edit',
        to: to[label],
        onClick: onClick
      }), hasNoMobilePhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "full-width-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_7__["AlertBox"], {
        variant: "warning",
        fontSize: "S"
      }, t('personalInfos.mobilePhoneWarning'))));
    } else {
      return false;
    }
  }));
};
function EmailInfo(_ref5) {
  var _ref5$show = _ref5.show,
    show = _ref5$show === void 0 ? false : _ref5$show;
  if (!show) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "full-width-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    weight: "regular",
    size: "M",
    className: "text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    i18nKey: "personalInfos.emailInfo",
    components: {
      ul: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
        tag: "ul"
      }),
      li: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
        tag: "li"
      })
    }
  })));
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/sections/ServicesContent.tsx":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/personal-infos/sections/ServicesContent.tsx ***!
  \*********************************************************************/
/*! exports provided: ServicesContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesContent", function() { return ServicesContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _img_icons_credit_card_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @img/icons/credit-card.svg */ "./assets/img/icons/credit-card.svg");
/* harmony import */ var _img_icons_sz_ecology_leaf_bulb_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @img/icons/sz-ecology-leaf-bulb.svg */ "./assets/img/icons/sz-ecology-leaf-bulb.svg");
/* harmony import */ var _img_icons_accounting_document_euro_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @img/icons/accounting-document-euro.svg */ "./assets/img/icons/accounting-document-euro.svg");
/* harmony import */ var _img_icons_water_protection_faucet_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @img/icons/water-protection-faucet.svg */ "./assets/img/icons/water-protection-faucet.svg");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _hooks_useGetCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useGetCustomerAdditionalInfos */ "./assets/js/pages/personal-infos/hooks/useGetCustomerAdditionalInfos.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }













var getServiceIconFromApi = function getServiceIconFromApi(name) {
  var iconMappings = {
    mensu: _img_icons_credit_card_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    smartcoach: _img_icons_sz_ecology_leaf_bulb_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alerte_conso: _img_icons_accounting_document_euro_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    efacture: _img_icons_accounting_document_euro_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alerte_fuite: _img_icons_water_protection_faucet_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
  };
  return iconMappings[name] || undefined;
};
var SubscribedServiceItem = function SubscribedServiceItem(_ref) {
  var _routes;
  var label = _ref.label,
    className = _ref.className;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var routes = (_routes = {}, _defineProperty(_routes, _app_constants__WEBPACK_IMPORTED_MODULE_8__["smartcoach"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
    modal: 'on-connect'
  })), _defineProperty(_routes, _app_constants__WEBPACK_IMPORTED_MODULE_8__["eFacture"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
    modal: 'e-facture'
  })), _defineProperty(_routes, _app_constants__WEBPACK_IMPORTED_MODULE_8__["alerte_conso"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].MY_ALERTS)), _defineProperty(_routes, _app_constants__WEBPACK_IMPORTED_MODULE_8__["alerte_fuite"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].MY_ALERTS)), _defineProperty(_routes, _app_constants__WEBPACK_IMPORTED_MODULE_8__["mensu"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].TIMELINE_AND_OPERATIONS)), _routes);
  var to = routes[label];
  var _useGetCustomerAdditi = Object(_hooks_useGetCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_11__["default"])({
      shouldRedirect: true,
      withToken: false
    }),
    mutateAddInfo = _useGetCustomerAdditi.mutate,
    isLoadingAddInfo = _useGetCustomerAdditi.isLoading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: getServiceIconFromApi(label),
    className: "services-item-icon mr-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "bold",
    className: "mb-0"
  }, t("personalInfos.labels.".concat(label)))), label === 'smartcoach' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "text",
    className: "ml-lg-auto px-0",
    onClick: function onClick() {
      return mutateAddInfo();
    },
    loader: isLoadingAddInfo,
    alignIcon: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "regular"
  }, t('personalInfos.button', {
    context: 'parameter'
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
    to: to,
    className: "ml-lg-auto px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "regular"
  }, t('personalInfos.button', {
    context: 'know_more'
  }))));
};
var UnsubscribedServiceItem = function UnsubscribedServiceItem(_ref2) {
  var _routes2;
  var label = _ref2.label,
    className = _ref2.className;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  var routes = (_routes2 = {}, _defineProperty(_routes2, _app_constants__WEBPACK_IMPORTED_MODULE_8__["smartcoach"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].ACCOUNT_CONSUMPTION_TR)), _defineProperty(_routes2, _app_constants__WEBPACK_IMPORTED_MODULE_8__["eFacture"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].ACCOUNT_INVOICES, {
    modal: 'modale-e-facture'
  })), _defineProperty(_routes2, _app_constants__WEBPACK_IMPORTED_MODULE_8__["alerte_conso"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].ALERT_PARAMS)), _defineProperty(_routes2, _app_constants__WEBPACK_IMPORTED_MODULE_8__["alerte_fuite"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].ALERT_PARAMS)), _defineProperty(_routes2, _app_constants__WEBPACK_IMPORTED_MODULE_8__["mensu"], Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD + '?payment_mode=mensualisation')), _routes2);
  var to = routes[label];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-lg-center rounded-2 bg-gray-100 p-3 py-lg-3 px-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-0 col-lg-10 d-flex flex-column align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-lg-center mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "",
    src: getServiceIconFromApi(label),
    className: "services-item-icon mr-lg-3 mb-2 mb-lg-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "bold",
    className: "mb-0"
  }, t("personalInfos.labels.".concat(label)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "regular",
    className: "text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    i18nKey: "personalInfos.promo.".concat(label),
    components: {
      bold: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
        weight: "bold",
        tag: "span"
      })
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-0 ml-lg-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "contained",
    className: "rounded-1",
    to: to
  }, t('personalInfos.button_subscribe')))));
};
var ServicesContent = function ServicesContent(servicesData) {
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation3.t;
  var subscribedServices = [];
  var unsubscribedServices = [];
  for (var _i = 0, _Object$entries = Object.entries(servicesData); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      label = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (value === 'SOUSCRIT') {
      subscribedServices.push(label);
    } else if (value === 'ELIGIBLE') {
      unsubscribedServices.push(label);
    }
  }
  var onlyUnsubscribedServices = subscribedServices.length > 0 ? '' : 'only';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, subscribedServices.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular"
  }, t('personalInfos.subscribedServices')), subscribedServices.map(function (service, index) {
    var serviceItemClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('service-item py-2 border-top border-1 d-flex flex-column flex-lg-row align-items-baseline align-items-lg-center', {
      'border-bottom': index === subscribedServices.length - 1
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubscribedServiceItem, {
      label: service,
      key: index,
      className: serviceItemClasses
    });
  }), unsubscribedServices.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular",
    className: "mt-4"
  }, t('personalInfos.unsubscribedServices', {
    context: onlyUnsubscribedServices
  })), unsubscribedServices.map(function (service, index) {
    var unsubscribedServiceItemClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])({
      'mb-3': index < unsubscribedServices.length - 1
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnsubscribedServiceItem, {
      label: service,
      key: index,
      className: unsubscribedServiceItemClasses
    });
  }));
};

/***/ }),

/***/ "./assets/js/pages/personal-infos/sections/index.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/personal-infos/sections/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalInfosContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_ez_components_modules_StickyAndBlock_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ez-components/modules/StickyAndBlock/Content */ "./assets/js/ez-components/modules/StickyAndBlock/Content.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_ez_components_modules_StickyAndBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ez-components/modules/StickyAndBlock */ "./assets/js/ez-components/modules/StickyAndBlock/index.jsx");
/* harmony import */ var _app_pages_personal_infos_hooks_useGetCustomerInfos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/personal-infos/hooks/useGetCustomerInfos */ "./assets/js/pages/personal-infos/hooks/useGetCustomerInfos.ts");
/* harmony import */ var _app_pages_personal_infos_hooks_useGetServicesStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/pages/personal-infos/hooks/useGetServicesStatus */ "./assets/js/pages/personal-infos/hooks/useGetServicesStatus.ts");
/* harmony import */ var _app_components_Skeleton_PersonalInfos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/Skeleton/PersonalInfos */ "./assets/js/components/Skeleton/PersonalInfos/index.tsx");
/* harmony import */ var _ContactDetailsContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContactDetailsContent */ "./assets/js/pages/personal-infos/sections/ContactDetailsContent.tsx");
/* harmony import */ var _ServicesContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ServicesContent */ "./assets/js/pages/personal-infos/sections/ServicesContent.tsx");
/* harmony import */ var _DefaultCardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DefaultCardContent */ "./assets/js/pages/personal-infos/sections/DefaultCardContent.tsx");
/* harmony import */ var _app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function PersonalInfosContent() {
  var _a, _b, _c;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_16__["default"])(),
    track = _useGA.track;
  var koText = t('personalInfos.labels.koData');
  var errorData = {
    login: koText,
    contract: {
      name: koText,
      holder: koText,
      servedAddress: koText,
      reference: koText
    },
    contact: {
      billingAddress: null,
      isFrenchAddress: 'KO',
      mobilePhone: koText,
      phone: koText,
      monthlyPaymentCode: 'NON_ELIGIBLE',
      roleIbanStatus: true,
      ibanHolder: koText,
      iban: koText
    }
  };
  var _useGetCustomerInfos = Object(_app_pages_personal_infos_hooks_useGetCustomerInfos__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    data = _useGetCustomerInfos.data,
    isLoading = _useGetCustomerInfos.isLoading,
    isError = _useGetCustomerInfos.isError;
  var _ref = (data === null || data === void 0 ? void 0 : data.data) || {},
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? {} : _ref$content;
  var _useGetServicesStatus = Object(_app_pages_personal_infos_hooks_useGetServicesStatus__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    dataServicesStatus = _useGetServicesStatus.data,
    isLoadingServicesStatus = _useGetServicesStatus.isLoading,
    isErrorServicesStatus = _useGetServicesStatus.isError;
  var _ref2 = (dataServicesStatus === null || dataServicesStatus === void 0 ? void 0 : dataServicesStatus.data) || {},
    _ref2$content = _ref2.content,
    contentServicesStatus = _ref2$content === void 0 ? {} : _ref2$content;
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_15__["default"])('getInfosPersoConsentQuery'),
    isLoadingConsents = _useQueryObserver.isLoading,
    isErrorConsents = _useQueryObserver.isError,
    dataConsents = _useQueryObserver.data;
  var services = {
    mensu: (_b = (_a = content === null || content === void 0 ? void 0 : content.contact) === null || _a === void 0 ? void 0 : _a.monthlyPaymentCode) !== null && _b !== void 0 ? _b : null,
    efacture: null,
    smartcoach: null,
    alerte_conso: null,
    alerte_fuite: null
  };
  if (Object.keys(contentServicesStatus).length > 0) {
    for (var _i = 0, _Object$entries = Object.entries(contentServicesStatus); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        name = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      services[name] = value;
    }
  }
  var isKoConsent = ((_c = dataConsents === null || dataConsents === void 0 ? void 0 : dataConsents.data) === null || _c === void 0 ? void 0 : _c.message) === _app_constants__WEBPACK_IMPORTED_MODULE_13__["KO_CONSENT"];
  var displayConsent = !isErrorConsents && !isKoConsent;
  var isShowElem = function isShowElem(element) {
    return element[1] === 'SOUSCRIT' || element[1] === 'ELIGIBLE';
  };
  var isShowServices = Object.entries(services).some(isShowElem);
  var menuContent = Object.assign({}, content);
  var defaultLinks = [t('personalInfos.section.title.login'), t('personalInfos.section.title.contract'), t('personalInfos.section.title.contact')];
  var links = Object.keys(content).map(function (key) {
    return t("personalInfos.section.title.".concat(key));
  });
  if (isShowServices) {
    menuContent['services'] = services;
    links.push(t("personalInfos.section.title.services"));
  }
  if (displayConsent) {
    menuContent['consents'] = {};
    links.push(t('personalInfos.section.title.consents'));
  }
  var consentsLink = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_13__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
    modal: 'consents'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_modules_StickyAndBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    links: data ? links : defaultLinks,
    isLoading: isLoading || isLoadingServicesStatus || isLoadingConsents,
    Skeleton: _app_components_Skeleton_PersonalInfos__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, Object.entries(isError ? errorData : menuContent).map(function (_ref3, key, array) {
    var _ref4 = _slicedToArray(_ref3, 2),
      label = _ref4[0],
      item = _ref4[1];
    var id = "heading-".concat(key);
    var consentLabel = label === 'consents';
    var isLastElement = key === array.length - 1;
    var infoCardClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_14__["default"])('info-card', {
      'd-flex flex-column flex-lg-row align-items-baseline justify-content-between': consentLabel
    });
    var titleClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_14__["default"])({
      'mb-0': consentLabel,
      'mb-3 mb-lg-4': !consentLabel
    });
    var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium",
      className: titleClasses
    }, data ? links[key] : defaultLinks[key]);
    var onClickConsents = function onClickConsents() {
      return track('PERSONAL_INFO_1', {
        champ_infos_perso: 'préférences de communication'
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_modules_StickyAndBlock_Content__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      id: id,
      className: infoCardClasses,
      isLastElement: isLastElement
    }, title, (label === 'login' || label === 'contract') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DefaultCardContent__WEBPACK_IMPORTED_MODULE_10__["DefaultCardContent"], {
      type: label,
      content: item,
      hideButton: isError
    }), label === 'contact' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactDetailsContent__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
      hideButton: isError
    }, item)), label === 'services' && !isErrorServicesStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServicesContent__WEBPACK_IMPORTED_MODULE_9__["ServicesContent"], Object.assign({}, item)), consentLabel && displayConsent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "px-0 ml-lg-auto",
      to: consentsLink,
      onClick: onClickConsents
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "regular"
    }, t('personalInfos.button_edit')))));
  }));
}

/***/ })

}]);