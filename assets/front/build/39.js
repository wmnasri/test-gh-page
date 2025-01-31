(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./assets/img/sanitize_group.svg":
/*!***************************************!*\
  !*** ./assets/img/sanitize_group.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/sanitize_group.svg");

/***/ }),

/***/ "./assets/img/sanitize_solo.svg":
/*!**************************************!*\
  !*** ./assets/img/sanitize_solo.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/sanitize_solo.svg");

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

/***/ "./assets/js/components/RadioCard/index.tsx":
/*!**************************************************!*\
  !*** ./assets/js/components/RadioCard/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_InputRadio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form/InputRadio */ "./assets/js/form/InputRadio/index.tsx");




var RadioCard = function RadioCard(_ref) {
  var className = _ref.className,
    children = _ref.children,
    label = _ref.label,
    onChange = _ref.onChange,
    checked = _ref.checked,
    name = _ref.name,
    value = _ref.value,
    id = _ref.id,
    imgSrc = _ref.imgSrc,
    radioPosition = _ref.radioPosition;
  var radioContainerClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('ml-auto d-flex', {
    'align-items-center': 'center' === radioPosition,
    'align-items-end': 'bottom' === radioPosition
  });
  var containerClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('cursor-pointer bg-white row no-gutters rounded-2 border border-1 p-3 p-lg-4 w-100', {
    'border-card-disabled': !checked,
    'border-primary-dark': checked
  }, className);
  var containerRowClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('d-flex col-12', {
    'col-lg-9': imgSrc
  });
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var onClick = function onClick() {
    var ev = new InputEvent('change', {
      bubbles: true
    });
    if (inputRef.current) {
      inputRef.current.dispatchEvent(ev);
      if (onChange) {
        onChange(ev);
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: containerClasses,
    onClick: onClick,
    style: {
      maxWidth: 515
    }
  }, imgSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex col-12 col-lg-3 mb-3 mr-auto",
    style: {
      flex: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgSrc,
    width: 80,
    height: 80,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: containerRowClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr-3"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "m-0 cursor-pointer",
    htmlFor: id || name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H5",
    tag: "span",
    className: "text-uppercase"
  }, label)), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: radioContainerClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_InputRadio__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: inputRef,
    className: "ml-auto",
    onChange: onChange,
    name: name,
    id: id || name,
    value: value,
    checked: checked
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (RadioCard);

/***/ }),

/***/ "./assets/js/components/Seo/index.tsx":
/*!********************************************!*\
  !*** ./assets/js/components/Seo/index.tsx ***!
  \********************************************/
/*! exports provided: Seo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seo", function() { return Seo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");


var Seo = function Seo(_ref) {
  var robots = _ref.robots;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, robots && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: robots
  }));
};

/***/ }),

/***/ "./assets/js/components/Skeleton/RadioCard/index.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/components/Skeleton/RadioCard/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioCardSkeleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


function RadioCardSkeleton(_ref) {
  var _ref$count = _ref.count,
    count = _ref$count === void 0 ? 1 : _ref$count;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Array.from({
    length: count
  }, function (_, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "row no-gutters rounded-2 border border-1 p-3 p-lg-4 w-100 mb-3",
      style: {
        maxWidth: 515
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      height: 40,
      className: "mb-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      count: 2,
      className: "ml-4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-1 offset-3 align-self-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      height: 24,
      width: 24,
      circle: true,
      className: "ml-auto"
    })));
  }));
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

/***/ "./assets/js/ez-components/diagAss/diag-ass.scss":
/*!*******************************************************!*\
  !*** ./assets/js/ez-components/diagAss/diag-ass.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/ez-components/diagAss/stepper/history.tsx":
/*!*************************************************************!*\
  !*** ./assets/js/ez-components/diagAss/stepper/history.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return History; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_pages_diagAss_diagAssContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/pages/diagAss/diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_ez_components_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ez-components/accordion */ "./assets/js/ez-components/accordion/index.jsx");
/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/history */ "./assets/js/ez-components/diagAss/utils/history.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function History(_ref) {
  var currentStep = _ref.currentStep;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_pages_diagAss_diagAssContext__WEBPACK_IMPORTED_MODULE_2__["DiagAssContext"]),
    state = _useContext.state;
  var steps = state.steps;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var data = [{
    fields: {
      title: t('diagAss.step.step0.history.title'),
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_history__WEBPACK_IMPORTED_MODULE_4__["default"], {
        steps: steps.slice(0, currentStep - 1)
      })
    }
  }];
  var setCurrentKey = function setCurrentKey(activeKeyState) {
    setActiveKey(activeKeyState);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      maxWidth: 750,
      margin: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    className: "rounded-3 mb-3",
    activeKey: activeKey,
    setCurrentKey: setCurrentKey,
    toggle: false,
    borderBottom: false,
    buttonArrow: true,
    isHistory: true
  }));
}

/***/ }),

/***/ "./assets/js/ez-components/diagAss/utils/box.tsx":
/*!*******************************************************!*\
  !*** ./assets/js/ez-components/diagAss/utils/box.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiagAssBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Badge */ "./assets/js/components/Badge/index.tsx");




function DiagAssBox(_ref) {
  var children = _ref.children,
    title = _ref.title,
    subtitle = _ref.subtitle,
    _ref$displayBadge = _ref.displayBadge,
    displayBadge = _ref$displayBadge === void 0 ? false : _ref$displayBadge,
    index = _ref.index,
    _ref$innerPadding = _ref.innerPadding,
    innerPadding = _ref$innerPadding === void 0 ? true : _ref$innerPadding;
  var length = 6;
  var maxWidth = 750;
  var stepContent = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('step-content', {
    'mt-2': !title && subtitle,
    'mt-3': title && !subtitle
  });
  var containerClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('bg-white rounded-3 position-relative mx-auto', {
    'px-3 py-4 px-lg-6 py-lg-5': innerPadding
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "diagAssContainer",
    className: containerClassName,
    style: {
      maxWidth: maxWidth
    }
  }, displayBadge && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Badge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    borderColor: "expert-blue",
    className: "bg-blue-1 mb-2",
    textWeight: "bold",
    textSize: "M",
    textClassName: "text-white"
  }, index, " / ", length), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L",
    className: "mb-2"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "mb-2 text-dark"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: stepContent
  }, children));
}

/***/ }),

/***/ "./assets/js/ez-components/diagAss/utils/error.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/ez-components/diagAss/utils/error.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiagAssError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _components_FormButtons_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FormButtons/index */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./box */ "./assets/js/ez-components/diagAss/utils/box.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function DiagAssError(props) {
  var title = props.title,
    body = props.body,
    next = props.next,
    previous = props.previous;
  var _useInterweave = Object(_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    transform = _useInterweave.transform;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    nextLoader = _useState2[0],
    setNextLoader = _useState2[1];
  var handleClick = function handleClick() {
    setNextLoader(true);
    history.push(_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].CUSTOMER_SERVICE);
  };
  var nextButtonDefault = {
    label: t('diagAss.error.contact_customer_service'),
    loader: nextLoader,
    align: 'right',
    onClick: handleClick,
    disabled: false
  };
  var nextButton = next !== null && next !== void 0 ? next : nextButtonDefault;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: title !== null && title !== void 0 ? title : t('diagAss.error.sorry'),
    subtitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
      content: body,
      transform: transform
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    previous: Object.assign(Object.assign({}, previous), {
      disabled: false
    }),
    next: nextButton
  }));
}

/***/ }),

/***/ "./assets/js/ez-components/diagAss/utils/history.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/ez-components/diagAss/utils/history.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiagAssHistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _diag_ass_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../diag-ass.scss */ "./assets/js/ez-components/diagAss/diag-ass.scss");
/* harmony import */ var _diag_ass_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_diag_ass_scss__WEBPACK_IMPORTED_MODULE_6__);







function DiagAssHistory(_ref) {
  var className = _ref.className,
    steps = _ref.steps,
    isStepList = _ref.isStepList,
    icons = _ref.icons;
  var _useInterweave = Object(_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    transform = _useInterweave.transform;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, steps.map(function (_ref2, key) {
    var summary = _ref2.summary,
      link = _ref2.link,
      locked = _ref2.locked;
    var rowClassNames = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('row no-gutters align-items-center', {
      'pt-3 mt-3 border-top border-1 border-gray-200': 0 < key
    });
    var lockClassNames = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('col-2  text-lg-right', {
      'offset-2 offset-lg-0': isStepList
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "stepsHistory-".concat(key),
      className: rowClassNames,
      "data-cy": "stepHistory"
    }, isStepList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-2 col-lg-1"
    }, icons && icons[key] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzIcon"], {
      className: "mr-3",
      variant: "line",
      icon: icons[key]
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
      className: "step-list inline-flex mr-3",
      weight: "bold"
    }, key + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: isStepList ? 'col-10 col-lg-9' : 'col-12 col-lg-10'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
      className: "m-0 text-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
      content: summary,
      transform: transform
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: lockClassNames
    }, !locked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "p-0 sz-typo-caption md",
      onClick: link === null || link === void 0 ? void 0 : link.onClick
    }, link === null || link === void 0 ? void 0 : link.label)));
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

/***/ "./assets/js/form/InputRadio/index.tsx":
/*!*********************************************!*\
  !*** ./assets/js/form/InputRadio/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputRadio = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  appearance: none;\n  width: 24px;\n  height: 24px;\n  border: 2px solid var(--blue-1);\n  border-radius: 50%;\n  &:checked {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    &::after {\n      content: '';\n      position: absolute;\n      width: 8px;\n      height: 8px;\n      background-color: var(--blue-1);\n      border-radius: 50%;\n    }\n  }\n"])));
InputRadio.defaultProps = {
  type: 'radio'
};
/* harmony default export */ __webpack_exports__["default"] = (InputRadio);

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

/***/ "./assets/js/hooks/useFormDependency.ts":
/*!**********************************************!*\
  !*** ./assets/js/hooks/useFormDependency.ts ***!
  \**********************************************/
/*! exports provided: APPART, MAISON, VISITE_1, CONTRE_VISITE_1, VENTE, NOUVELLE_INSTALLATION, CONTROLE_PERIODIQUE, NOUVEAU_RACCORDEMENT, OUI, NON, OTHER, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPART", function() { return APPART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAISON", function() { return MAISON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISITE_1", function() { return VISITE_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTRE_VISITE_1", function() { return CONTRE_VISITE_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VENTE", function() { return VENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOUVELLE_INSTALLATION", function() { return NOUVELLE_INSTALLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLE_PERIODIQUE", function() { return CONTROLE_PERIODIQUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOUVEAU_RACCORDEMENT", function() { return NOUVEAU_RACCORDEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUI", function() { return OUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON", function() { return NON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHER", function() { return OTHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFormDependency; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var APPART = 'APPART';
var MAISON = 'MAISON';
var VISITE_1 = 'Visite1';
var CONTRE_VISITE_1 = 'ContreVisite1';
var VENTE = 'Vente';
var NOUVELLE_INSTALLATION = 'NouvelleInstallation';
var CONTROLE_PERIODIQUE = 'ControlePeriodique';
var NOUVEAU_RACCORDEMENT = 'NouveauRaccordement';
var OUI = 'oui';
var NON = 'non';
var OTHER = 'other';
function useFormDependency(type, sanitationType) {
  var form_default = [{
    context: 'lodging',
    name: 'type',
    inputs: [{
      label: 'label_APPART',
      value: APPART
    }, {
      label: 'label_MAISON',
      value: MAISON
    }, {
      label: 'label_other',
      value: OTHER
    }]
  }];
  var form_apartment = [{
    context: 'floor',
    name: 'floor',
    dependency: {
      name: 'type',
      value: APPART
    }
  }];
  var form_house = [{
    context: 'pool',
    name: 'pool',
    inputs: [{
      label: 'pool_yes',
      value: OUI
    }, {
      label: 'pool_no',
      value: NON
    }],
    dependency: {
      name: 'type',
      value: MAISON
    }
  }, {
    context: 'extra_equipment',
    name: 'extra_equipment',
    inputs: [{
      label: 'extra_equipment_yes',
      value: OUI
    }, {
      label: 'extra_equipment_no',
      value: NON
    }],
    dependency: {
      name: 'pool'
    }
  }];
  var form_content = [{
    context: 'size',
    name: 'size',
    dependency: {
      name: type === APPART ? 'floor' : ['pool', 'extra_equipment']
    }
  }, {
    context: 'water',
    name: 'water',
    infos: true,
    dependency: {
      name: 'size'
    }
  }, {
    context: 'visit',
    name: 'visit',
    inputs: [{
      label: 'label_first',
      value: VISITE_1
    }, {
      label: 'label_after',
      value: CONTRE_VISITE_1
    }],
    dependency: {
      name: 'water'
    }
  }];
  var form_context_anc = [{
    label: 'label_control',
    value: NOUVELLE_INSTALLATION
  }, {
    label: 'label_period',
    value: CONTROLE_PERIODIQUE
  }];
  var form_context_ac = [{
    label: 'label_new_connection',
    value: NOUVEAU_RACCORDEMENT
  }];
  var form_context = [{
    context: 'context',
    name: 'context',
    inputs: [{
      label: 'label_to_sell',
      value: VENTE
    }].concat(_toConsumableArray(sanitationType === 'ANC' ? form_context_anc : form_context_ac)),
    dependency: {
      name: 'visit'
    }
  }];
  var form = [].concat(form_default, _toConsumableArray(type === APPART ? form_apartment : []), _toConsumableArray(type === MAISON ? form_house : []), _toConsumableArray(type === OTHER ? [] : form_content), _toConsumableArray(type === OTHER ? [] : form_context));
  return {
    form: form
  };
}

/***/ }),

/***/ "./assets/js/models/diagAss/index.ts":
/*!*******************************************!*\
  !*** ./assets/js/models/diagAss/index.ts ***!
  \*******************************************/
/*! exports provided: StepSelectionOriginSchema, OwnerHomeSchema, SuezHomeUserSchema, StepStartSchema, addressMainCreateSchema, addressSubCreateSchema, addressListSchema, SanitizeSchema, contactCreateSchema, contactListSchema, step5Schema, StepWaterSuppliedSchema, franceMainObject, franceSubObject, foreignObject, StepConfirmSummarySchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepSelectionOriginSchema", function() { return StepSelectionOriginSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerHomeSchema", function() { return OwnerHomeSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuezHomeUserSchema", function() { return SuezHomeUserSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepStartSchema", function() { return StepStartSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressMainCreateSchema", function() { return addressMainCreateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressSubCreateSchema", function() { return addressSubCreateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressListSchema", function() { return addressListSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeSchema", function() { return SanitizeSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactCreateSchema", function() { return contactCreateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactListSchema", function() { return contactListSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step5Schema", function() { return step5Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepWaterSuppliedSchema", function() { return StepWaterSuppliedSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "franceMainObject", function() { return franceMainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "franceSubObject", function() { return franceSubObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foreignObject", function() { return foreignObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepConfirmSummarySchema", function() { return StepConfirmSummarySchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

yup__WEBPACK_IMPORTED_MODULE_0__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_0__["string"], 'textValid', function (message) {
  var regex = /^[aàâäAæÆbBcCçdDeéèêëEfFgGhHiïîIjJkKlLmMnNñoôöOœŒpPqQrRsStTuùûüUvVwWxXyÿYzZ\-' ]*$/;
  return this.test('text-valid', message, function (value) {
    return regex.test(value);
  });
});
// Step 0
var StepSelectionOriginSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  selectOrigin: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.select_option')
});
var OwnerHomeSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  ownerLoginOwnerHome: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.select_option')
});
var SuezHomeUserSchema = OwnerHomeSchema.shape({
  ownerLoginSuezUser: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.select_option')
});
var StepStartSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  profile: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.mandatory_field')
});
// Step 1
var addressMainCreateSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.step.step1.create.error_field')
});
var addressSubCreateSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.step.step1.create.error_field'),
  address: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.step.step1.create.error_field'),
  additionalAddress: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
});
var addressListSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  addressId: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.select_option')
});
// Step 2
var SanitizeSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  radioBtn: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.select_option')
});
// Step 3
var contactCreateSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  civilite: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.mandatory_field'),
  prenom: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().textValid('diagAss.error.text_invalid').required('diagAss.error.mandatory_field'),
  nom: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().textValid('diagAss.error.text_invalid').required('diagAss.error.mandatory_field'),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email('diagAss.error.email_invalid').required('diagAss.error.mandatory_field')
});
var contactListSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  contactId: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.select_option')
});
// Step 5
var step5Schema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  serviceId: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.select_option')
});
var StepWaterSuppliedSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  waterSupplied: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.select_option')
});
// Step 6
var franceMainObject = {
  city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.mandatory_field')
};
var franceSubObject = {
  address: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.mandatory_field')
};
var foreignObject = {
  city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.mandatory_field'),
  zip: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.mandatory_field'),
  country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.mandatory_field'),
  address: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('diagAss.error.mandatory_field')
};
// Step confirm
var StepConfirmSummarySchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  confirmConditions: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().oneOf([true], 'diagAss.step.confirm.conditions.error')
});

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step0/OwnerLoginStep/ErrorNotOwner.tsx":
/*!********************************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step0/OwnerLoginStep/ErrorNotOwner.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step2ErrorNotOwner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ez-components/diagAss/utils/error */ "./assets/js/ez-components/diagAss/utils/error.tsx");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Step2ErrorNotOwner() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    nextLoader = _useState2[0],
    setNextLoader = _useState2[1];
  var handleClick = function handleClick() {
    setNextLoader(true);
    track('DIAGASS_8', {
      motif_retour_accueil: _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_6__["DEMANDEUR_NON_PROPRIO"]
    });
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].HOME);
  };
  var nextButton = {
    label: t('diagAss.error.back_home'),
    onClick: handleClick,
    loader: nextLoader,
    align: 'right'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_4__["default"], {
    body: t('diagAss.step.step0.error_not_owner.body'),
    next: nextButton
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step0/OwnerLoginStep/OwnerLoginStep.tsx":
/*!*********************************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step0/OwnerLoginStep/OwnerLoginStep.tsx ***!
  \*********************************************************************************/
/*! exports provided: StepContext, default, QuestionOwnerHome, QuestionSuezUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepContext", function() { return StepContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step2OwnerLoginStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionOwnerHome", function() { return QuestionOwnerHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSuezUser", function() { return QuestionSuezUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_form_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/form/Login */ "./assets/js/form/Login/index.jsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var StepContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
function Step2OwnerLoginStep() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_10__["default"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showSuezUser = _useState2[0],
    setShowSuezUser = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
    _useState4 = _slicedToArray(_useState3, 2),
    showFormButtons = _useState4[0],
    setShowFormButtons = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
    _useState6 = _slicedToArray(_useState5, 2),
    stepOwnerLoginSchema = _useState6[0],
    setStepOwnerLoginSchema = _useState6[1];
  var isConnected = window.tsme_data.isConnected;
  var nextButtonDefault = {
    label: t('next'),
    align: 'right',
    arrow: true
  };
  var nextButtonValidate = {
    label: t('validate'),
    align: 'right'
  };
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(nextButtonDefault),
    _useState8 = _slicedToArray(_useState7, 2),
    nextButton = _useState8[0],
    setNextButton = _useState8[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setStepOwnerLoginSchema(showSuezUser && !isConnected ? _app_models_diagAss__WEBPACK_IMPORTED_MODULE_6__["SuezHomeUserSchema"] : _app_models_diagAss__WEBPACK_IMPORTED_MODULE_6__["OwnerHomeSchema"]);
  }, [showSuezUser]);
  var onSubmit = function onSubmit(_ref) {
    var ownerLoginOwnerHome = _ref.ownerLoginOwnerHome,
      ownerLoginSuezUser = _ref.ownerLoginSuezUser;
    if (!ownerLoginOwnerHome) {
      track('DIAGASS_6');
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_0_ERROR_NOT_OWNER);
    }
    if (ownerLoginOwnerHome && (!ownerLoginSuezUser || isConnected)) {
      track('DIAGASS_7');
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_1);
    }
  };
  var initialValues = {
    ownerLoginOwnerHome: '',
    ownerLoginSuezUser: ''
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StepContext.Provider, {
    value: {
      setShowFormButtons: setShowFormButtons,
      setShowSuezUser: setShowSuezUser,
      stepOwnerLoginSchema: stepOwnerLoginSchema,
      setStepOwnerLoginSchema: setStepOwnerLoginSchema,
      nextButton: nextButton,
      setNextButton: setNextButton,
      nextButtonDefault: nextButtonDefault,
      nextButtonValidate: nextButtonValidate,
      isConnected: isConnected
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: true,
    validationSchema: stepOwnerLoginSchema,
    onSubmit: onSubmit
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssOwnerLogin",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuestionOwnerHome, null), showSuezUser && !isConnected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuestionSuezUser, null), showFormButtons && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      next: nextButton
    }));
  }));
}
function QuestionOwnerHome() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StepContext),
    setShowSuezUser = _useContext.setShowSuezUser,
    setShowFormButtons = _useContext.setShowFormButtons,
    setNextButton = _useContext.setNextButton,
    nextButtonValidate = _useContext.nextButtonValidate,
    nextButtonDefault = _useContext.nextButtonDefault,
    isConnected = _useContext.isConnected;
  var formikContext = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
  var values = formikContext.values,
    setFieldValue = formikContext.setFieldValue,
    errors = formikContext.errors;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  var onChange = function onChange(e) {
    var value = Boolean(parseInt(e.target.value));
    setFieldValue('ownerLoginSuezUser', '', false);
    setFieldValue('ownerLoginOwnerHome', value);
    setShowSuezUser(value);
    setShowFormButtons(true);
    value && !isConnected ? setNextButton(nextButtonDefault) : setNextButton(nextButtonValidate);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzTypographie"], {
    size: "XL"
  }, t('diagAss.step.step0.owner_login.owner_home')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzRadio"], {
    id: "ownerLoginOwnerHomeYes",
    name: "ownerLoginOwnerHome",
    label: t('yes'),
    value: "1",
    checked: '' !== values.ownerLoginOwnerHome && !!values.ownerLoginOwnerHome,
    onChange: onChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzRadio"], {
    className: "ml-3",
    id: "ownerLoginOwnerHomeNo",
    name: "ownerLoginOwnerHome",
    label: t('no'),
    value: "0",
    checked: '' !== values.ownerLoginOwnerHome && !values.ownerLoginOwnerHome,
    onChange: onChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    field: "ownerLoginOwnerHome",
    customDisplay: errors.ownerLoginOwnerHome
  }));
}
function QuestionSuezUser() {
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StepContext),
    setShowFormButtons = _useContext2.setShowFormButtons,
    setNextButton = _useContext2.setNextButton,
    nextButtonDefault = _useContext2.nextButtonDefault,
    nextButtonValidate = _useContext2.nextButtonValidate;
  var formikContext = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
  var values = formikContext.values,
    setFieldValue = formikContext.setFieldValue,
    errors = formikContext.errors;
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation3.t;
  var _useGA2 = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_10__["default"])(),
    track = _useGA2.track;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isShowModal = _useState10[0],
    setShowModal = _useState10[1];
  var brand = window.tsme_data.brand;
  var onChange = function onChange(e) {
    var value = Boolean(parseInt(e.target.value));
    setFieldValue('ownerLoginSuezUser', value);
    setShowFormButtons(!value);
    value ? setNextButton(nextButtonDefault) : setNextButton(nextButtonValidate);
  };
  var handleClickLogin = function handleClickLogin() {
    track('DIAGASS_5');
    setShowModal(true);
  };
  var handleClickRegister = function handleClickRegister() {
    track('DIAGASS_4');
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].SIGN_UP + '?redirect=diagass');
  };
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzModal"], {
    handleClose: handleCloseModal,
    show: isShowModal,
    border: "smooth",
    centered: true,
    fullscreen: "md",
    size: "md",
    backdrop: true,
    title: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "px-3 py-3 login-menu no-gutters",
    title: t('signIn.hasAccount.button_submit'),
    submitText: t('signIn.hasAccount.button_submit'),
    targetPath: _app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_1,
    usernameInputId: "username-popin",
    passwordInputId: "password-popin",
    variant: "redesign",
    isModal: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzTypographie"], {
    size: "XL"
  }, t('diagAss.step.step0.owner_login.suez_user', {
    brand: brand.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzRadio"], {
    id: "ownerLoginSuezUserYes",
    name: "ownerLoginSuezUser",
    label: t('yes'),
    value: "1",
    checked: '' !== values.ownerLoginSuezUser && !!values.ownerLoginSuezUser,
    onChange: onChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzRadio"], {
    className: "ml-3",
    id: "ownerLoginSuezUserNo",
    name: "ownerLoginSuezUser",
    label: t('no'),
    value: "0",
    checked: '' !== values.ownerLoginSuezUser && !values.ownerLoginSuezUser,
    onChange: onChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    field: "ownerLoginSuezUser",
    customDisplay: errors.ownerLoginSuezUser
  }), !!values.ownerLoginSuezUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 mt-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzTypographie"], null, t('diagAss.step.step0.owner_login.suez_user_login', {
    brand: brand.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-auto order-lg-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzButton"], {
    id: "OwnerLogin",
    variant: "contained",
    border: "soft",
    onClick: handleClickLogin
  }, t('diagAss.step.step0.owner_login.login'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-auto order-lg-0 mt-2 mt-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzButton"], {
    id: "OwnerRegister",
    variant: "outlined",
    border: "soft",
    onClick: handleClickRegister
  }, t('diagAss.step.step0.owner_login.register')))))));
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step0/SelectionOrigin/ErrorRequestOrigin.tsx":
/*!**************************************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step0/SelectionOrigin/ErrorRequestOrigin.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step0ErrorRequestOrigin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ez-components/diagAss/utils/error */ "./assets/js/ez-components/diagAss/utils/error.tsx");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
/* harmony import */ var _app_pages_diagAss_hooks_useTrackAndRedirectErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/pages/diagAss/hooks/useTrackAndRedirectErrors */ "./assets/js/pages/diagAss/hooks/useTrackAndRedirectErrors.ts");





function Step0ErrorRequestOrigin() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var next = Object(_app_pages_diagAss_hooks_useTrackAndRedirectErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(_app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__["ORIGINE_DEMANDE_OPERATEUR"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    body: t('diagAss.step.step0.error_request_origin.body'),
    next: next
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step0/SelectionOrigin/SelectionOrigin.tsx":
/*!***********************************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step0/SelectionOrigin/SelectionOrigin.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step0SelectionOrigin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");










function Step0SelectionOrigin() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_9__["useGA"])(),
    track = _useGA.track;
  var onSubmit = function onSubmit(_ref) {
    var selectOrigin = _ref.selectOrigin;
    track('DIAGASS_3', {
      origine_demande: selectOrigin ? t('operator') : t('particular').toLowerCase()
    });
    if (selectOrigin) {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].DIAG_ASS.STEP_0_ERROR_REQUEST_ORIGIN);
    } else {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].DIAG_ASS.STEP_0_OWNER_LOGIN);
    }
  };
  var nextButton = {
    label: t('validate'),
    align: 'right'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      selectOrigin: ''
    },
    validateOnBlur: true,
    validationSchema: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_5__["StepSelectionOriginSchema"],
    onSubmit: onSubmit
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      setFieldValue = _ref2.setFieldValue,
      values = _ref2.values,
      errors = _ref2.errors;
    var onChange = function onChange(e) {
      setFieldValue('selectOrigin', Boolean(+e.target.value));
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssSelectionOrigin",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__["SzRadio"], {
      className: "mb-2",
      id: "selectionOriginNo",
      name: "selectOrigin",
      label: t('diagAss.step.step0.selection_origin.choiceYourOwnInitiative'),
      value: "0",
      checked: '' !== values.selectOrigin && !values.selectOrigin,
      onChange: onChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_8__["SzRadio"], {
      id: "selectionOriginYes",
      name: "selectOrigin",
      label: t('diagAss.step.step0.selection_origin.choiceSanitationCompany'),
      value: "1",
      checked: '' !== values.selectOrigin && !!values.selectOrigin,
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "selectOrigin",
      customDisplay: errors.selectOrigin
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step0/Start/ProNotEligible.tsx":
/*!************************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step0/Start/ProNotEligible.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step0ProNotEligible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ez-components/diagAss/utils/error */ "./assets/js/ez-components/diagAss/utils/error.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Step0ProNotEligible() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_4__["useGA"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    nextLoader = _useState2[0],
    setNextLoader = _useState2[1];
  var handleClick = function handleClick() {
    track('DIAGASS_2', {
      motif_contact_client: _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_5__["DEMANDEUR_PRO"]
    });
    setNextLoader(true);
    window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].CUSTOMER_SERVICE;
  };
  var nextButton = {
    label: t('diagAss.error.contact_customer_service'),
    loader: nextLoader,
    align: 'right',
    onClick: handleClick,
    disabled: false
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    body: t('diagAss.step.step0.pro_not_eligible.body'),
    next: nextButton
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step0/Start/Start.tsx":
/*!***************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step0/Start/Start.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step0Start; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");











function Step0Start() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var isDesktop = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_10__["useGA"])(),
    track = _useGA.track;
  var PROFILE_PARTICULAR = 'particular';
  var PROFILE_PROFESSIONAL = 'professional';
  var TRACKING_LABEL_PERSONAL = 'particulier';
  var TRACKING_LABEL_PRO = 'professionnel';
  var profiles = [{
    label: t('particular'),
    value: PROFILE_PARTICULAR
  }, {
    label: t('professional'),
    value: PROFILE_PROFESSIONAL
  }];
  var onSubmit = function onSubmit(_ref) {
    var profile = _ref.profile;
    var value = profile.value,
      label = profile.label;
    track('DIAGASS_1', {
      profil_demandeur: label === t('particular') ? TRACKING_LABEL_PERSONAL : TRACKING_LABEL_PRO
    });
    if (PROFILE_PROFESSIONAL === value) {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].DIAG_ASS.STEP_0_PRO_NOT_ELIGIBLE);
    } else {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].DIAG_ASS.STEP_0_SELECTION_ORIGIN);
    }
  };
  var nextButton = {
    label: t('diagAss.step.step0.start.submit'),
    align: 'right'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      profile: ''
    },
    validateOnBlur: true,
    validationSchema: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_5__["StepStartSchema"],
    validateOnMount: false,
    onSubmit: onSubmit
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      setFieldValue = _ref2.setFieldValue,
      values = _ref2.values,
      errors = _ref2.errors;
    var onChange = function onChange(option) {
      setFieldValue('profile', option);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssStart",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      id: "profile-aria-label",
      className: "mb-2",
      htmlFor: "profileInput"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzTypographie"], {
      tag: "span"
    }, t('diagAss.step.step0.start.profile_label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzSelect"], {
      id: "profile",
      name: "profile",
      inputId: "profileInput",
      className: isDesktop ? 'w-75' : '',
      "aria-labelledby": "profile-aria-label",
      placeholder: t('diagAss.step.step0.start.profile_placeholder'),
      options: profiles,
      value: values.profile,
      onChange: onChange,
      isSearchable: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "profile",
      customDisplay: errors.profile
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pt-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      next: nextButton
    })));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step1/AddressCreate.tsx":
/*!*****************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step1/AddressCreate.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step1AddressCreate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_components_CapAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/CapAddress */ "./assets/js/components/CapAddress/index.jsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/pages/diagAss/hooks */ "./assets/js/pages/diagAss/hooks.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function Step1AddressCreate(_ref) {
  var currentStep = _ref.currentStep;
  var _a, _b;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_14__["useGA"])(),
    track = _useGA.track;
  var _useSummaries = Object(_app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_11__["default"])(),
    setSummaryStep1 = _useSummaries.setSummaryStep1;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_13__["DiagAssContext"]),
    dispatch = _useContext.dispatch,
    extraFn = _useContext.extraFn,
    state = _useContext.state;
  var saveStep = extraFn.saveStep;
  var steps = state.steps;
  var index = currentStep - 1;
  var values = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSearchingCity = _useState2[0],
    setIsSearchingCity = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSearchingAddress = _useState4[0],
    setIsSearchingAddress = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
      var _a;
      var values = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values;
      if (values && '' !== (values === null || values === void 0 ? void 0 : values.address)) {
        var _address = values.address,
          locality = values.locality,
          localityId = values.localityId,
          postalCode = values.postalCode;
        return {
          locality: locality,
          zipcode: postalCode,
          inseecode: localityId,
          text: _address
        };
      }
      return null;
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    cityValue = _useState6[0],
    setCityValue = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isCityDirty = _useState8[0],
    setIsCityDirty = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isAddressDirty = _useState10[0],
    setIsAddressDirty = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState12 = _slicedToArray(_useState11, 2),
    previousLoader = _useState12[0],
    setPreviousLoader = _useState12[1];
  var isConnected = window.tsme_data.isConnected;
  var address = {
    locality: cityValue === null || cityValue === void 0 ? void 0 : cityValue.locality,
    localityId: cityValue === null || cityValue === void 0 ? void 0 : cityValue.inseecode,
    postalCode: cityValue === null || cityValue === void 0 ? void 0 : cityValue.zipcode
  };
  var nextButtonDefault = {
    label: t('validate'),
    align: 'right'
  };
  var nextButtonNext = {
    label: t('next'),
    align: 'right',
    arrow: true
  };
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
      var _a;
      var values = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values;
      return values && '' !== (values === null || values === void 0 ? void 0 : values.address) ? nextButtonDefault : nextButtonNext;
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    nextButton = _useState14[0],
    setNextButton = _useState14[1];
  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_app_models_diagAss__WEBPACK_IMPORTED_MODULE_10__["addressMainCreateSchema"]),
    _useState16 = _slicedToArray(_useState15, 2),
    step1Schema = _useState16[0],
    setStep1Schema = _useState16[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: 'activeStep',
      payload: 1
    });
  }, []);
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('addressList', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_8__["API"].DIAG_ASS.SITE_ADDRESS);
    }, {
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      },
      enabled: isConnected
    }),
    data = _useQuery.data;
  var _ref2 = (data === null || data === void 0 ? void 0 : data.data) || {},
    _ref2$content = _ref2.content,
    addressList = _ref2$content === void 0 ? [] : _ref2$content;
  var setAddressForm = function setAddressForm(isFull) {
    var step1Object;
    if (isFull) {
      step1Object = _app_models_diagAss__WEBPACK_IMPORTED_MODULE_10__["addressMainCreateSchema"].concat(_app_models_diagAss__WEBPACK_IMPORTED_MODULE_10__["addressSubCreateSchema"]);
      setNextButton(nextButtonDefault);
    } else {
      step1Object = _app_models_diagAss__WEBPACK_IMPORTED_MODULE_10__["addressMainCreateSchema"];
      setNextButton(nextButtonNext);
    }
    setStep1Schema(step1Object);
  };
  var handlePreviousClick = function handlePreviousClick() {
    if (isConnected && 0 < addressList.length) {
      window.scrollTo(0, 0);
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_1);
    } else {
      setPreviousLoader(true);
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_0_START);
    }
  };
  var previousButton = {
    label: t('go_back'),
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var setInitialValueForField = function setInitialValueForField(values, field) {
    return (values === null || values === void 0 ? void 0 : values[field]) && (values === null || values === void 0 ? void 0 : values.addressId) === _app_constants__WEBPACK_IMPORTED_MODULE_8__["ADDRESS_OTHER"] ? values === null || values === void 0 ? void 0 : values[field] : '';
  };
  var initialValues = {
    addressId: (_b = values === null || values === void 0 ? void 0 : values.addressId) !== null && _b !== void 0 ? _b : '',
    city: setInitialValueForField(values, 'city'),
    address: setInitialValueForField(values, 'address'),
    additionalAddress: setInitialValueForField(values, 'additionalAddress')
  };
  var setSummary = function setSummary(formValues) {
    var city = formValues.city,
      address = formValues.address,
      additionalAddress = formValues.additionalAddress;
    var _setSummaryStep = setSummaryStep1(city, address, additionalAddress),
      label = _setSummaryStep.label,
      values = _setSummaryStep.values;
    return t(label, values);
  };
  var onSubmit = function onSubmit(values) {
    track('DIAGASS_10');
    var summary = setSummary(values);
    saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_1_CREATE, values, summary);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_2);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: step1Schema,
    onSubmit: onSubmit
  }, function (_ref3) {
    var handleChange = _ref3.handleChange,
      handleSubmit = _ref3.handleSubmit,
      setFieldValue = _ref3.setFieldValue,
      validateForm = _ref3.validateForm,
      values = _ref3.values,
      errors = _ref3.errors,
      resetForm = _ref3.resetForm;
    var onClickCity = function onClickCity(city) {
      var _a;
      var text = city.text;
      setCityValue(city);
      setIsSearchingCity(false);
      resetForm({
        values: {
          addressId: (_a = values === null || values === void 0 ? void 0 : values.addressId) !== null && _a !== void 0 ? _a : '',
          city: text,
          address: '',
          additionalAddress: ''
        },
        errors: {}
      });
      setIsCityDirty(false);
      setAddressForm(true);
    };
    var onChangeCity = function onChangeCity(_ref4) {
      var target = _ref4.target;
      if (0 === target.value.length) {
        setFieldValue('address', '', false);
        setFieldValue('additionalAddress', '', false);
      } else if (2 < target.value.length && !isSearchingCity) {
        setIsSearchingCity(true);
      }
      setIsCityDirty(true);
      setFieldValue('city', target.value);
    };
    var onClickAwayCity = function onClickAwayCity() {
      if (values.city.length > 0 && isCityDirty) {
        setFieldValue('address', '');
        setFieldValue('city', '', true);
        setCityValue(null);
        setAddressForm(false);
      }
      setIsSearchingCity(false);
    };
    var onClickAddress = function onClickAddress(infosStreet) {
      var text = infosStreet.text,
        localityId = infosStreet.localityId,
        streetId = infosStreet.streetId,
        streetNumber = infosStreet.streetNumber,
        streetNumberExt = infosStreet.streetNumberExt,
        streetName = infosStreet.streetName,
        locality = infosStreet.locality,
        postalCode = infosStreet.postalCode;
      setFieldValue('address', text);
      setFieldValue('localityId', localityId);
      setFieldValue('streetId', streetId);
      setFieldValue('streetNumber', streetNumber);
      setFieldValue('streetNumberExt', streetNumberExt);
      setFieldValue('streetName', streetName);
      setFieldValue('locality', locality);
      setFieldValue('postalCode', postalCode);
      setFieldValue('addressId', _app_constants__WEBPACK_IMPORTED_MODULE_8__["ADDRESS_OTHER"]);
      validateForm();
      setIsAddressDirty(false);
      setIsSearchingAddress(false);
    };
    var onChangeAddress = function onChangeAddress(_ref5) {
      var target = _ref5.target;
      if (target.value.length > 2 && !isSearchingAddress) {
        setIsSearchingAddress(true);
      }
      setAddressForm(true);
      setIsAddressDirty(true);
      setFieldValue('address', target.value);
    };
    var onClickAwayAddress = function onClickAwayAddress() {
      if (values.address.length > 0 && isAddressDirty) {
        setFieldValue('address', '', true);
      }
      setIsSearchingAddress(false);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssAddress",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      variant: "H3",
      weight: "medium",
      size: "L"
    }, t('diagAss.step.step1.create.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      className: "mt-2 text-dark"
    }, t('diagAss.step.step1.create.body')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-8 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mb-2",
      htmlFor: "searchInput-town"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      weight: "regular",
      className: "text-primary-dark",
      tag: "span"
    }, t('diagAss.step.step1.create.city'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_CapAddress__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: "town",
      name: "city",
      value: values.city,
      placeholder: t('diagAss.step.step1.create.city_placeholder'),
      onChange: onChangeCity,
      onClick: onClickCity,
      onClickAway: onClickAwayCity,
      isSearching: isSearchingCity
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "city",
      customDisplay: errors.city
    })), cityValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-8 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mb-2",
      htmlFor: "searchInput-town"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      weight: "regular",
      className: "text-primary-dark",
      tag: "span"
    }, t('diagAss.step.step6.edit.address.label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_CapAddress__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: "street",
      name: "address",
      value: values.address,
      placeholder: t('diagAss.step.step1.create.address_placeholder'),
      onChange: onChangeAddress,
      onClick: onClickAddress,
      onClickAway: onClickAwayAddress,
      isSearching: isSearchingAddress,
      address: address
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "address",
      customDisplay: errors.address
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-8 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      id: "additionalAddress",
      name: "additionalAddress",
      label: t('diagAss.step.step1.create.additional_address'),
      placeholder: t('diagAss.step.step1.create.additional_address_placeholder'),
      variant: "outlined",
      value: values.additionalAddress,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "additionalAddress",
      customDisplay: errors.additionalAddress
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step1/AddressList.tsx":
/*!***************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step1/AddressList.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step1AddressList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_RadioCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/RadioCard */ "./assets/js/components/RadioCard/index.tsx");
/* harmony import */ var _app_components_Skeleton_RadioCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/Skeleton/RadioCard */ "./assets/js/components/Skeleton/RadioCard/index.tsx");
/* harmony import */ var _app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/pages/diagAss/hooks */ "./assets/js/pages/diagAss/hooks.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Utils */ "./assets/js/pages/diagAss/Utils/index.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















function Step1AddressList(props) {
  var _a, _b, _c, _d, _e;
  var currentStep = props.currentStep;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useSummaries = Object(_app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    setSummaryStep1 = _useSummaries.setSummaryStep1;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_15__["DiagAssContext"]),
    dispatch = _useContext.dispatch,
    extraFn = _useContext.extraFn,
    state = _useContext.state;
  var saveStep = extraFn.saveStep;
  var steps = state.steps;
  var index = currentStep - 1;
  var values = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var isConnected = window.tsme_data.isConnected;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_17__["useGA"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: 'activeStep',
      payload: 1
    });
    if (!isConnected) {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.STEP_1_CREATE);
    }
  }, []);
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('addressList', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_9__["API"].DIAG_ASS.SITE_ADDRESS);
    }, {
      onSuccess: function onSuccess(_ref) {
        var data = _ref.data;
        var message = data.message;
        if (_app_constants__WEBPACK_IMPORTED_MODULE_9__["CODES"].KO_ADRESSE === message) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.STEP_1_CREATE);
        }
      },
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      },
      enabled: isConnected
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading;
  var _ref2 = (data === null || data === void 0 ? void 0 : data.data) || {},
    _ref2$content = _ref2.content,
    addressList = _ref2$content === void 0 ? [] : _ref2$content;
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.STEP_0_START);
  };
  var previousButton = {
    label: t('go_back'),
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var nextButton = {
    label: t('validate'),
    align: 'right'
  };
  var setSummary = function setSummary(formValues) {
    var city = formValues.city,
      address = formValues.address,
      additionalAddress = formValues.additionalAddress;
    var _setSummaryStep = setSummaryStep1(city, address, additionalAddress),
      label = _setSummaryStep.label,
      values = _setSummaryStep.values;
    return t(label, values);
  };
  var onSubmit = function onSubmit(values) {
    var addressId = values.addressId;
    if (_app_constants__WEBPACK_IMPORTED_MODULE_9__["ADDRESS_OTHER"] === addressId) {
      history.push({
        pathname: _app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.STEP_1_CREATE
      });
    } else {
      var summary = setSummary(values);
      saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.STEP_1, values, summary);
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.STEP_2);
    }
  };
  var initialValues = {
    addressId: (_b = values === null || values === void 0 ? void 0 : values.addressId) !== null && _b !== void 0 ? _b : '',
    city: (_c = values === null || values === void 0 ? void 0 : values.city) !== null && _c !== void 0 ? _c : '',
    address: (_d = values === null || values === void 0 ? void 0 : values.address) !== null && _d !== void 0 ? _d : '',
    additionalAddress: (_e = values === null || values === void 0 ? void 0 : values.additionalAddress) !== null && _e !== void 0 ? _e : ''
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_6__["addressListSchema"],
    onSubmit: onSubmit
  }, function (_ref3) {
    var handleSubmit = _ref3.handleSubmit,
      setFieldValue = _ref3.setFieldValue,
      values = _ref3.values,
      errors = _ref3.errors;
    var customSubmit = function customSubmit(e) {
      var addressId = values.addressId;
      track('DIAGASS_9');
      if (_app_constants__WEBPACK_IMPORTED_MODULE_9__["ADDRESS_OTHER"] !== addressId) {
        var _getIdSplit = Object(_Utils__WEBPACK_IMPORTED_MODULE_16__["getIdSplit"])(addressId),
          _getIdSplit2 = _slicedToArray(_getIdSplit, 2),
          iliadeSiteId = _getIdSplit2[0],
          odysseAccountId = _getIdSplit2[1];
        var address = addressList.find(function (address) {
          return address.iliadeSiteId === iliadeSiteId && address.odysseAccountId === odysseAccountId;
        });
        if (address) {
          setFieldValue('city', Object(_Utils__WEBPACK_IMPORTED_MODULE_16__["joinStringNull"])(address.zipCode, address.city));
          setFieldValue('address', Object(_Utils__WEBPACK_IMPORTED_MODULE_16__["joinStringNull"])(address.streetNumber, address.address));
          setFieldValue('additionalAddress', address.additionalAddress);
        }
      }
      handleSubmit(e);
    };
    var onChangeAddressId = function onChangeAddressId(e) {
      setFieldValue('city', '');
      setFieldValue('address', '');
      setFieldValue('additionalAddress', '');
      setFieldValue('addressId', e.target.value, true);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssAddress",
      onSubmit: customSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__["SzTypographie"], {
      variant: "H3",
      weight: "medium",
      size: "L"
    }, t('diagAss.step.step1.list.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-3 mt-lg-4"
    }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton_RadioCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      count: 3
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "address-list",
      className: "mh-lg"
    }, addressList.map(function (_ref4, index) {
      var contractName = _ref4.contractName,
        iliadeSiteId = _ref4.iliadeSiteId,
        odysseAccountId = _ref4.odysseAccountId,
        address = _ref4.address,
        streetNumber = _ref4.streetNumber,
        additionalAddress = _ref4.additionalAddress,
        zipCode = _ref4.zipCode,
        city = _ref4.city;
      var addressId = Object(_Utils__WEBPACK_IMPORTED_MODULE_16__["getIdConcat"])(iliadeSiteId, odysseAccountId);
      var id = "address-".concat(addressId);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_RadioCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: id,
        id: id,
        name: "addressId",
        className: index === addressList.length - 1 ? 'mb-0' : 'mb-3',
        label: contractName !== null && contractName !== void 0 ? contractName : undefined,
        value: addressId,
        checked: addressId === values.addressId,
        onChange: onChangeAddressId,
        radioPosition: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__["SzTypographie"], {
        className: "mb-3",
        variant: "caption",
        size: "M",
        color: "disabled",
        weight: "regular"
      }, t('num'), " ", odysseAccountId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__["SzData"], {
        icon: "pin-location-1",
        variant: "line",
        className: "d-lg-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__["SzTypographie"], {
        className: "mb-0",
        weight: "regular"
      }, streetNumber, " ", address, additionalAddress && ", ".concat(additionalAddress), ", ", zipCode, " ", city)));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_RadioCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: 'address-other',
      name: "addressId",
      className: "my-3",
      value: _app_constants__WEBPACK_IMPORTED_MODULE_9__["ADDRESS_OTHER"],
      checked: _app_constants__WEBPACK_IMPORTED_MODULE_9__["ADDRESS_OTHER"] === values.addressId,
      onChange: onChangeAddressId,
      radioPosition: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__["SzData"], {
      icon: "add-circle",
      variant: "line",
      className: "d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__["SzTypographie"], {
      className: "mb-0",
      weight: "regular"
    }, t('diagAss.step.step1.list.other')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      field: "addressId",
      customDisplay: errors.addressId
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step2/KoContract.tsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step2/KoContract.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step2KoContract; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ez-components/diagAss/utils/error */ "./assets/js/ez-components/diagAss/utils/error.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Step2KoContract() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_4__["useGA"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    nextLoader = _useState2[0],
    setNextLoader = _useState2[1];
  // @ts-ignore
  var brand = window.tsme_data.brand;
  var handleClick = function handleClick() {
    track('DIAGASS_8', {
      motif_retour_accueil: _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_6__["SECTEUR_INELIGIBLE"]
    });
    setNextLoader(true);
    history.push(_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].HOME);
  };
  var nextButton = {
    label: t('diagAss.error.back_home'),
    loader: nextLoader,
    align: 'right',
    onClick: handleClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    body: t('diagAss.step.step2.ko_contract.body', {
      brand: brand.name
    }),
    next: nextButton
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step2/KoDigital.tsx":
/*!*************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step2/KoDigital.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step2KoDigital; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ez-components/diagAss/utils/error */ "./assets/js/ez-components/diagAss/utils/error.tsx");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
/* harmony import */ var _app_pages_diagAss_hooks_useTrackAndRedirectErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/pages/diagAss/hooks/useTrackAndRedirectErrors */ "./assets/js/pages/diagAss/hooks/useTrackAndRedirectErrors.ts");





function Step2KoDigital() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var next = Object(_app_pages_diagAss_hooks_useTrackAndRedirectErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(_app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__["CONTRAT_INELIGIBLE"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    body: t('diagAss.step.step2.ko_digital.body'),
    next: next
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step2/SanitizeType.tsx":
/*!****************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step2/SanitizeType.tsx ***!
  \****************************************************************/
/*! exports provided: SANITIZE_TYPE_SOLO, SANITIZE_TYPE_GROUP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANITIZE_TYPE_SOLO", function() { return SANITIZE_TYPE_SOLO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANITIZE_TYPE_GROUP", function() { return SANITIZE_TYPE_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step2SanitizeType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_components_RadioCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/RadioCard */ "./assets/js/components/RadioCard/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _img_sanitize_group_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @img/sanitize_group.svg */ "./assets/img/sanitize_group.svg");
/* harmony import */ var _img_sanitize_solo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @img/sanitize_solo.svg */ "./assets/img/sanitize_solo.svg");
/* harmony import */ var _app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/pages/diagAss/hooks */ "./assets/js/pages/diagAss/hooks.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Utils */ "./assets/js/pages/diagAss/Utils/index.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















var SANITIZE_TYPE_SOLO = 'ANC';
var SANITIZE_TYPE_GROUP = 'AC';
function Step2SanitizeType(_ref) {
  var currentStep = _ref.currentStep;
  var _a, _b;
  var isConnected = window.tsme_data.isConnected;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_18__["useGA"])(),
    track = _useGA.track;
  var _useSummaries = Object(_app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    setSummaryStep2 = _useSummaries.setSummaryStep2;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_16__["DiagAssContext"]),
    extraFn = _useContext.extraFn,
    state = _useContext.state;
  var saveStep = extraFn.saveStep;
  var steps = state.steps;
  var index = currentStep - 1;
  var values = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    nextLoader = _useState4[0],
    setNextLoader = _useState4[1];
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    var addressId = steps[0].values.addressId;
    var url = _app_constants__WEBPACK_IMPORTED_MODULE_10__["ADDRESS_OTHER"] === addressId && !isConnected ? _app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_1_CREATE : _app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_1;
    history.push(url);
  };
  var previousButton = {
    label: t('go_back'),
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var setSummary = function setSummary(formValues) {
    var radioBtn = formValues.radioBtn;
    var _setSummaryStep = setSummaryStep2(radioBtn, t),
      label = _setSummaryStep.label,
      values = _setSummaryStep.values;
    return t(label, values);
  };
  var initialValues = {
    radioBtn: (_b = values === null || values === void 0 ? void 0 : values.radioBtn) !== null && _b !== void 0 ? _b : ''
  };
  var onSubmit = function onSubmit(values) {
    var _a;
    setNextLoader(true);
    var summary = setSummary(values);
    saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_2, values, summary);
    var selectedAddressValues = (_a = steps[0]) === null || _a === void 0 ? void 0 : _a.values;
    var addressId = selectedAddressValues.addressId;
    var params = {
      sanitationType: values.radioBtn
    };
    var typeAss = {
      ANC: _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_19__["ASS_INDIVIDUEL"],
      AC: _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_19__["ASS_COLLECTIF"]
    };
    track('DIAGASS_11', {
      type_assainissement: values.radioBtn in typeAss && typeAss[values.radioBtn]
    });
    if (addressId === _app_constants__WEBPACK_IMPORTED_MODULE_10__["ADDRESS_OTHER"]) {
      var additionalAddress = selectedAddressValues.additionalAddress,
        locality = selectedAddressValues.locality,
        localityId = selectedAddressValues.localityId,
        postalCode = selectedAddressValues.postalCode,
        streetId = selectedAddressValues.streetId,
        streetName = selectedAddressValues.streetName,
        streetNumber = selectedAddressValues.streetNumber,
        streetNumberExt = selectedAddressValues.streetNumberExt;
      params = Object.assign(Object.assign({}, params), {
        insee: localityId,
        hexavia: streetId,
        streetName: streetName,
        city: locality,
        zipCode: postalCode,
        additionalAddress: additionalAddress
      });
      if (streetNumber) {
        var streetNumFull;
        streetNumberExt === undefined ? streetNumFull = streetNumber : streetNumFull = Object(_Utils__WEBPACK_IMPORTED_MODULE_17__["joinStringNull"])(streetNumber, streetNumberExt);
        params = Object.assign(Object.assign({}, params), {
          streetNumber: streetNumFull
        });
      }
    } else {
      var _getIdSplit = Object(_Utils__WEBPACK_IMPORTED_MODULE_17__["getIdSplit"])(addressId),
        _getIdSplit2 = _slicedToArray(_getIdSplit, 2),
        iliadeSiteId = _getIdSplit2[0],
        odysseAccountId = _getIdSplit2[1];
      params = Object.assign(Object.assign({}, params), {
        iliadeSiteId: iliadeSiteId,
        odysseAccountId: odysseAccountId
      });
    }
    checkDiagnosisEligibility.mutate(params);
  };
  var checkDiagnosisEligibility = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (params) {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_14__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_10__["API"].DIAG_ASS.ELIGIBILITY, params);
  }, {
    onSuccess: function onSuccess(_ref2) {
      var data = _ref2.data;
      if (_app_constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].SUCCESS === data.code) {
        switch (data.message) {
          case _app_constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].OK_ELIGIBILITE:
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_3);
            break;
          case _app_constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].KO_MULTI_SITES:
          case _app_constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].KO_ELIGIBILITE_DIGITAL:
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_2_KO_DIGITAL);
            break;
          case _app_constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].KO_ELIGIBILITE_SECTEUR:
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_2_KO_CONTRACT);
            break;
        }
      } else {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      }
    },
    onError: function onError() {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: true,
    validationSchema: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_6__["SanitizeSchema"],
    onSubmit: onSubmit
  }, function (_ref3) {
    var values = _ref3.values,
      handleChange = _ref3.handleChange,
      handleSubmit = _ref3.handleSubmit,
      errors = _ref3.errors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssSanitizeType",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_RadioCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: "radioBtn",
      id: "radio-1",
      className: "mb-3",
      label: t('diagAss.step.step2.sanitize.radioCard_AC.label'),
      onChange: handleChange,
      checked: values['radioBtn'] === SANITIZE_TYPE_GROUP,
      imgSrc: _img_sanitize_group_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
      value: SANITIZE_TYPE_GROUP
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
      className: "mb-3",
      variant: "caption",
      size: "M",
      color: "disabled",
      weight: "regular"
    }, t('diagAss.step.step2.sanitize.radioCard_AC.type')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
      className: "m-0 text-dark"
    }, t('diagAss.step.step2.sanitize.radioCard_AC.info'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_RadioCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: "radioBtn",
      id: "radio-2",
      className: "mb-3",
      label: t('diagAss.step.step2.sanitize.radioCard_ANC.label'),
      onChange: handleChange,
      checked: values['radioBtn'] === SANITIZE_TYPE_SOLO,
      imgSrc: _img_sanitize_solo_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
      value: SANITIZE_TYPE_SOLO
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
      className: "mb-3",
      variant: "caption",
      size: "M",
      color: "disabled",
      weight: "regular"
    }, t('diagAss.step.step2.sanitize.radioCard_ANC.type')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
      className: "m-0 text-dark"
    }, t('diagAss.step.step2.sanitize.radioCard_ANC.info'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      field: "radioBtn",
      // {const toto = !values['radioBtn'] ? errors['radioBtn'] : false}
      customDisplay: !values['radioBtn'] && errors['radioBtn']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      previous: previousButton,
      next: {
        align: 'right',
        loader: nextLoader
      }
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step3/ContactCreate.tsx":
/*!*****************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step3/ContactCreate.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step3ContactCreate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_form_PhoneForm_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/form/PhoneForm/model */ "./assets/js/form/PhoneForm/model.js");
/* harmony import */ var _app_form_PhoneForm_PhoneInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/form/PhoneForm/PhoneInput */ "./assets/js/form/PhoneForm/PhoneInput.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/pages/diagAss/hooks */ "./assets/js/pages/diagAss/hooks.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function Step3ContactCreate(_ref) {
  var currentStep = _ref.currentStep;
  var _a, _b, _c, _d, _e, _f;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_16__["useGA"])(),
    track = _useGA.track;
  var _useSummaries = Object(_app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    setSummaryStep3 = _useSummaries.setSummaryStep3;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_15__["DiagAssContext"]),
    extraFn = _useContext.extraFn,
    state = _useContext.state;
  var saveStep = extraFn.saveStep;
  var steps = state.steps;
  var index = currentStep - 1;
  var values = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var isConnected = window.tsme_data.isConnected;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('interlocutors', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_14__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_6__["API"].DIAG_ASS.INTERLOCUTORS);
    }, {
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      },
      enabled: isConnected
    }),
    data = _useQuery.data;
  var _ref2 = (data === null || data === void 0 ? void 0 : data.data) || {},
    _ref2$content = _ref2.content,
    contacts = _ref2$content === void 0 ? [] : _ref2$content;
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(0 < contacts.length ? _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].DIAG_ASS.STEP_3 : _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].DIAG_ASS.STEP_2);
  };
  var nextButton = {
    label: t('validate'),
    align: 'right'
  };
  var previousButton = {
    label: t('go_back'),
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var setSummary = function setSummary(formValues) {
    var prenom = formValues.prenom,
      nom = formValues.nom,
      email = formValues.email,
      telPortable = formValues.telPortable;
    var _setSummaryStep = setSummaryStep3(prenom, nom, email, telPortable),
      label = _setSummaryStep.label,
      values = _setSummaryStep.values;
    return t(label, values);
  };
  var onSubmit = function onSubmit(values) {
    track('DIAGASS_16');
    var summary = setSummary(values);
    saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].DIAG_ASS.STEP_3_CREATE, values, summary);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].DIAG_ASS.STEP_RGPD_CONFIRM);
  };
  var initialValues = {
    contactId: _app_constants__WEBPACK_IMPORTED_MODULE_6__["CONTACT_OTHER"],
    civilite: (_b = values === null || values === void 0 ? void 0 : values.civilite) !== null && _b !== void 0 ? _b : '',
    prenom: (_c = values === null || values === void 0 ? void 0 : values.prenom) !== null && _c !== void 0 ? _c : '',
    nom: (_d = values === null || values === void 0 ? void 0 : values.nom) !== null && _d !== void 0 ? _d : '',
    email: (_e = values === null || values === void 0 ? void 0 : values.email) !== null && _e !== void 0 ? _e : '',
    telPortable: (_f = values === null || values === void 0 ? void 0 : values.telPortable) !== null && _f !== void 0 ? _f : ''
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_11__["contactCreateSchema"].concat(Object(_app_form_PhoneForm_model__WEBPACK_IMPORTED_MODULE_9__["phoneNumberInputSchema"])(t, 'telPortable')),
    onSubmit: onSubmit
  }, function (_ref3) {
    var handleSubmit = _ref3.handleSubmit,
      setFieldValue = _ref3.setFieldValue,
      values = _ref3.values,
      errors = _ref3.errors,
      isSubmitting = _ref3.isSubmitting,
      isValid = _ref3.isValid,
      touched = _ref3.touched,
      handleChange = _ref3.handleChange,
      handleBlur = _ref3.handleBlur;
    var onChangeCivility = function onChangeCivility(e) {
      setFieldValue('civilite', e.target.value, true);
    };
    if (isSubmitting && !isValid && Object.keys(errors).length > 0) {
      track('DIAGASS_17');
    }
    var onChangeText = function onChangeText(maxLength) {
      return function (e) {
        if (e.target.value.length <= maxLength) {
          handleChange(e);
        }
      };
    };
    var onChangeEmail = function onChangeEmail(maxLength) {
      return function (e) {
        if (e.target.value.length <= maxLength) {
          handleChange(e);
        }
      };
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssContact",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-8 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      className: "mb-2"
    }, t('diagAss.step.step3.create.civility')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzRadio"], {
      id: "civilityMiss",
      name: "civilite",
      label: t('civility.mrs_short'),
      value: "MME",
      checked: 'MME' === values.civilite,
      onChange: onChangeCivility
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzRadio"], {
      className: "ml-3",
      id: "civilityMister",
      name: "civilite",
      label: t('civility.mr_short'),
      value: "M",
      checked: 'M' === values.civilite,
      onChange: onChangeCivility
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_8__["default"], {
      field: "civilite",
      customDisplay: touched.civilite && errors.civilite
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-8 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      id: "nom",
      name: "nom",
      label: t('diagAss.step.step3.create.lastname'),
      placeholder: t('diagAss.step.step3.create.lastname_placeholder'),
      variant: "outlined",
      value: values.nom,
      onBlur: handleBlur,
      onChange: onChangeText(80)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_8__["default"], {
      field: "nom",
      customDisplay: touched.nom && errors.nom
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-8 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      id: "prenom",
      name: "prenom",
      label: t('diagAss.step.step3.create.firstname'),
      placeholder: t('diagAss.step.step3.create.firstname_placeholder'),
      variant: "outlined",
      value: values.prenom,
      onBlur: handleBlur,
      onChange: onChangeText(40)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_8__["default"], {
      field: "prenom",
      customDisplay: touched.prenom && errors.prenom
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-8 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      id: "email",
      name: "email",
      label: t('diagAss.step.step3.create.email'),
      placeholder: t('diagAss.step.step3.create.email_placeholder'),
      variant: "outlined",
      value: values.email,
      onBlur: handleBlur,
      onChange: onChangeEmail(80)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_8__["default"], {
      field: "email",
      customDisplay: touched.email && errors.email
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-8 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_PhoneForm_PhoneInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "telPortable"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step3/ContactList.tsx":
/*!***************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step3/ContactList.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step3ContactList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_components_RadioCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/RadioCard */ "./assets/js/components/RadioCard/index.tsx");
/* harmony import */ var _app_components_Skeleton_RadioCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/Skeleton/RadioCard */ "./assets/js/components/Skeleton/RadioCard/index.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Utils */ "./assets/js/pages/diagAss/Utils/index.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function Step3ContactList(_ref) {
  var currentStep = _ref.currentStep;
  var _a, _b;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_16__["useGA"])(),
    track = _useGA.track;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_14__["DiagAssContext"]),
    extraFn = _useContext.extraFn,
    state = _useContext.state;
  var deleteStep = extraFn.deleteStep,
    saveStep = extraFn.saveStep;
  var steps = state.steps;
  var index = currentStep - 1;
  var values = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var isConnected = window.tsme_data.isConnected;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isConnected) {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_3_CREATE);
    }
  }, []);
  if (!isConnected) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useQuery"])('interlocutors', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_8__["API"].DIAG_ASS.INTERLOCUTORS);
    }, {
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        var message = data.message;
        if (_app_constants__WEBPACK_IMPORTED_MODULE_8__["CODES"].KO_INTERLOCUTEUR === message) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_3_CREATE);
        }
      },
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      },
      enabled: isConnected
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading;
  var _ref3 = (data === null || data === void 0 ? void 0 : data.data) || {},
    _ref3$content = _ref3.content,
    contacts = _ref3$content === void 0 ? [] : _ref3$content;
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_2);
  };
  var nextButton = {
    label: t('validate'),
    align: 'right'
  };
  var previousButton = {
    label: t('go_back'),
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var getFilteredName = function getFilteredName(nom, prenom) {
    return Object(_Utils__WEBPACK_IMPORTED_MODULE_15__["joinStringNull"])(nom, prenom);
  };
  var setSummary = function setSummary(values) {
    var prenom = values.prenom,
      nom = values.nom,
      email = values.email,
      telPortable = values.telPortable;
    return t('diagAss.stepper.step3', {
      value1: getFilteredName(nom, prenom),
      value2: telPortable,
      value3: email,
      context: telPortable ? '' : 'no_phone'
    });
  };
  var onSubmit = function onSubmit(values) {
    track('DIAGASS_15');
    deleteStep(currentStep);
    var contactId = values.contactId;
    if (_app_constants__WEBPACK_IMPORTED_MODULE_8__["CONTACT_OTHER"] === contactId) {
      saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_3_CREATE, values);
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_3_CREATE);
    } else {
      var summary = setSummary(values);
      saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_3, values, summary);
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_RGPD_CONFIRM);
    }
  };
  var initialValues = {
    contactId: (_b = values === null || values === void 0 ? void 0 : values.contactId) !== null && _b !== void 0 ? _b : ''
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_7__["contactListSchema"],
    onSubmit: onSubmit
  }, function (_ref4) {
    var handleSubmit = _ref4.handleSubmit,
      values = _ref4.values,
      errors = _ref4.errors,
      setFieldValue = _ref4.setFieldValue;
    var customSubmit = function customSubmit(e) {
      var _a, _b;
      var contactId = values.contactId;
      if (_app_constants__WEBPACK_IMPORTED_MODULE_8__["CONTACT_OTHER"] !== contactId) {
        var _getIdSplit = Object(_Utils__WEBPACK_IMPORTED_MODULE_15__["getIdSplit"])(contactId),
          _getIdSplit2 = _slicedToArray(_getIdSplit, 2),
          id = _getIdSplit2[0],
          compteId = _getIdSplit2[1];
        var contact = contacts.find(function (contact) {
          return contact.id === id && contact.compteId === compteId;
        });
        if (contact) {
          var civilite = contact.civilite,
            prenom = contact.prenom,
            nom = contact.nom,
            email = contact.email,
            telPortable = contact.telPortable;
          setFieldValue('civilite', civilite);
          setFieldValue('prenom', prenom);
          setFieldValue('nom', nom);
          setFieldValue('email', email);
          setFieldValue('telPortable', telPortable);
        }
      }
      if (_app_constants__WEBPACK_IMPORTED_MODULE_8__["CONTACT_OTHER"] === contactId && _app_constants__WEBPACK_IMPORTED_MODULE_8__["CONTACT_OTHER"] === ((_a = steps[2]) === null || _a === void 0 ? void 0 : _a.values.contactId)) {
        var _ref5 = (_b = steps[2]) === null || _b === void 0 ? void 0 : _b.values,
          _civilite = _ref5.civilite,
          _prenom = _ref5.prenom,
          _nom = _ref5.nom,
          _email = _ref5.email,
          _telPortable = _ref5.telPortable;
        setFieldValue('civilite', _civilite);
        setFieldValue('prenom', _prenom);
        setFieldValue('nom', _nom);
        setFieldValue('email', _email);
        setFieldValue('telPortable', _telPortable);
      }
      handleSubmit(e);
    };
    var onChangeContactId = function onChangeContactId(e) {
      setFieldValue('civilite', '');
      setFieldValue('prenom', '');
      setFieldValue('nom', '');
      setFieldValue('email', '');
      setFieldValue('telPortable', '');
      setFieldValue('contactId', e.target.value, true);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssContact",
      onSubmit: customSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-3 mt-lg-4"
    }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton_RadioCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      count: 3
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "contact-list",
      className: "mh-lg"
    }, contacts.map(function (_ref6, index) {
      var id = _ref6.id,
        compteId = _ref6.compteId,
        prenom = _ref6.prenom,
        nom = _ref6.nom,
        email = _ref6.email,
        telPortable = _ref6.telPortable;
      var contactId = Object(_Utils__WEBPACK_IMPORTED_MODULE_15__["getIdConcat"])(id, compteId);
      var uid = "contact-".concat(contactId);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_RadioCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: uid,
        id: uid,
        name: "contactId",
        className: index === contacts.length - 1 ? 'mb-0' : 'mb-3',
        label: getFilteredName(nom, prenom),
        value: contactId,
        checked: contactId === values.contactId,
        onChange: onChangeContactId,
        radioPosition: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzData"], {
        icon: "single-neutral-id-card-3",
        variant: "line",
        className: "d-flex align-items-center mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzData"].Text, null, email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzTypographie"], {
        className: "mb-0 text-break",
        weight: "regular"
      }, email), telPortable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzTypographie"], {
        className: "mb-0",
        weight: "regular"
      }, telPortable))));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_RadioCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "contact-other",
      name: "contactId",
      className: "my-3",
      value: _app_constants__WEBPACK_IMPORTED_MODULE_8__["CONTACT_OTHER"],
      checked: _app_constants__WEBPACK_IMPORTED_MODULE_8__["CONTACT_OTHER"] === values.contactId,
      onChange: onChangeContactId,
      radioPosition: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzData"], {
      icon: "add-circle",
      variant: "line",
      className: "d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzTypographie"], {
      className: "mb-0",
      weight: "regular"
    }, t('diagAss.step.step3.list.other')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
      field: "contactId",
      customDisplay: errors.contactId
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_9__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step4/ComplementaryInfos.tsx":
/*!**********************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step4/ComplementaryInfos.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step4ComplementaryInfos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useFormDependency */ "./assets/js/hooks/useFormDependency.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model */ "./assets/js/pages/diagAss/Stepper/Step4/model.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_pages_diagAss_Stepper_Step4_ConfirmationModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/pages/diagAss/Stepper/Step4/ConfirmationModal */ "./assets/js/pages/diagAss/Stepper/Step4/ConfirmationModal.tsx");
/* harmony import */ var _app_pages_diagAss_Stepper_Step2_SanitizeType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/pages/diagAss/Stepper/Step2/SanitizeType */ "./assets/js/pages/diagAss/Stepper/Step2/SanitizeType.tsx");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
/* harmony import */ var _app_pages_diagAss_hooks_useContextDemandeValue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/pages/diagAss/hooks/useContextDemandeValue */ "./assets/js/pages/diagAss/hooks/useContextDemandeValue.ts");
/* harmony import */ var _app_pages_diagAss_hooks_useVisitTypeValue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/pages/diagAss/hooks/useVisitTypeValue */ "./assets/js/pages/diagAss/hooks/useVisitTypeValue.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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





















function Step4ComplementaryInfos(_ref) {
  var currentStep = _ref.currentStep;
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_12__["DiagAssContext"]),
    extraFn = _useContext.extraFn,
    state = _useContext.state;
  var saveStep = extraFn.saveStep;
  var steps = state.steps;
  var index = currentStep - 1;
  var values = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values;
  var sanitationType = steps[1].values.radioBtn;
  var type_assainissement = sanitationType === _app_pages_diagAss_Stepper_Step2_SanitizeType__WEBPACK_IMPORTED_MODULE_17__["SANITIZE_TYPE_SOLO"] ? _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_18__["ASS_INDIVIDUEL"] : _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_18__["ASS_COLLECTIF"];
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_15__["useGA"])(),
    track = _useGA.track;
  var setSummary = function setSummary(values) {
    var type = values.type,
      size = values.size,
      water = values.water,
      visit = values.visit,
      context = values.context;
    return t('diagAss.stepper.step4', {
      value1: t('diagAss.step.step4.complementary_infos.questions.visit.label_short', {
        context: visit
      }),
      value2: t('diagAss.step.step4.complementary_infos.questions.context.label_short', {
        context: context
      }),
      value3: t('diagAss.step.step4.complementary_infos.questions.lodging.label', {
        context: type
      }),
      value4: size + 'm2',
      value5: t('diagAss.step.step4.complementary_infos.questions.water.label_count', {
        count: parseInt(water)
      })
    });
  };
  var onsubmit = function onsubmit(values) {
    if (_app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["OTHER"] === (values === null || values === void 0 ? void 0 : values.type)) {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.STEP_4_KO);
    } else {
      var summary = setSummary(values);
      saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.STEP_4, values, summary);
      var params = {
        housingType: values === null || values === void 0 ? void 0 : values.type,
        surface: values === null || values === void 0 ? void 0 : values.size,
        waterRooms: values === null || values === void 0 ? void 0 : values.water,
        visitType: values === null || values === void 0 ? void 0 : values.visit,
        requestType: values === null || values === void 0 ? void 0 : values.context
      };
      if (_app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["MAISON"] === (values === null || values === void 0 ? void 0 : values.type)) {
        params.pool = (values === null || values === void 0 ? void 0 : values.pool) === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["OUI"];
        params.exterior = (values === null || values === void 0 ? void 0 : values.extra_equipment) === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["OUI"];
      } else if (_app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["APPART"] === (values === null || values === void 0 ? void 0 : values.type)) {
        params.floor = values === null || values === void 0 ? void 0 : values.floor;
      }
      var visitTypeValue = Object(_app_pages_diagAss_hooks_useVisitTypeValue__WEBPACK_IMPORTED_MODULE_20__["default"])(values === null || values === void 0 ? void 0 : values.visit);
      var contextDemandeValue = Object(_app_pages_diagAss_hooks_useContextDemandeValue__WEBPACK_IMPORTED_MODULE_19__["default"])(values === null || values === void 0 ? void 0 : values.context);
      track('DIAGASS_19', {
        type_assainissement: type_assainissement,
        type_logement: (values === null || values === void 0 ? void 0 : values.type) === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["MAISON"] ? 'maison' : (values === null || values === void 0 ? void 0 : values.type) === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["APPART"] ? 'appartement' : 'autres',
        surface_logement: values === null || values === void 0 ? void 0 : values.size,
        nombre_piece_eau: values === null || values === void 0 ? void 0 : values.water,
        type_visite: visitTypeValue,
        contexte_demande: contextDemandeValue,
        etage_logement: values === null || values === void 0 ? void 0 : values.floor,
        equipement_piscine: values === null || values === void 0 ? void 0 : values.pool,
        dependance_exterieure: values === null || values === void 0 ? void 0 : values.extra_equipment
      });
      requestSite.mutate(params);
    }
  };
  var _k = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (params) {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_9__["API"].DIAG_ASS.REQUEST_SITE, params);
    }, {
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        if (data.message === _app_constants__WEBPACK_IMPORTED_MODULE_9__["CODES"].OK_MAJ_DEMANDE_SITE) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.STEP_5);
        }
      },
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      }
    }),
    isLoading = _k.isLoading,
    requestSite = __rest(_k, ["isLoading"]);
  var initialValues = {
    type: (_b = values === null || values === void 0 ? void 0 : values.type) !== null && _b !== void 0 ? _b : '',
    floor: (_c = values === null || values === void 0 ? void 0 : values.floor) !== null && _c !== void 0 ? _c : '',
    pool: (_d = values === null || values === void 0 ? void 0 : values.pool) !== null && _d !== void 0 ? _d : '',
    extra_equipment: (_e = values === null || values === void 0 ? void 0 : values.extra_equipment) !== null && _e !== void 0 ? _e : '',
    size: (_f = values === null || values === void 0 ? void 0 : values.size) !== null && _f !== void 0 ? _f : '',
    water: (_g = values === null || values === void 0 ? void 0 : values.water) !== null && _g !== void 0 ? _g : '',
    visit: (_h = values === null || values === void 0 ? void 0 : values.visit) !== null && _h !== void 0 ? _h : '',
    context: (_j = values === null || values === void 0 ? void 0 : values.context) !== null && _j !== void 0 ? _j : ''
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: initialValues,
    validationSchema: _model__WEBPACK_IMPORTED_MODULE_14__["Step4Validation"],
    onSubmit: onsubmit,
    validateOnChange: false,
    validateOnBlur: true
  }, function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContent, {
      nextLoader: isLoading,
      sanitationType: sanitationType
    });
  });
}
var FormContent = function FormContent(_ref3) {
  var nextLoader = _ref3.nextLoader,
    sanitationType = _ref3.sanitationType;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])('translation'),
    t = _useTranslation2.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    isUpdating = _useState2[0],
    setIsUpdating = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showConfirmModal = _useState4[0],
    setShowConfirmModal = _useState4[1];
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useFormikContext"])(),
    handleSubmit = _useFormikContext.handleSubmit,
    handleChange = _useFormikContext.handleChange,
    values = _useFormikContext.values,
    setFieldValue = _useFormikContext.setFieldValue,
    errors = _useFormikContext.errors,
    validateField = _useFormikContext.validateField,
    setFieldError = _useFormikContext.setFieldError,
    status = _useFormikContext.status,
    setStatus = _useFormikContext.setStatus,
    validateForm = _useFormikContext.validateForm;
  var type = values.type,
    context = values.context;
  var _useFormDependency = Object(_app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["default"])(type, sanitationType),
    form = _useFormDependency.form;
  var formComplete = type !== _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["OTHER"] && context || type === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["OTHER"];
  var nextButton = {
    label: t('next'),
    align: 'right',
    arrow: true,
    type: 'button',
    onClick: function onClick() {
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var isValueTooHigh;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (values[isUpdating]) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return validateForm();
            case 3:
              return _context.abrupt("return");
            case 4:
              isValueTooHigh = valueExceedsLimit(isUpdating, values[isUpdating]);
              if (isValueTooHigh) {
                setExceedingFieldName(isUpdating);
                setShowConfirmModal(true);
              } else {
                if (isUpdating != null) {
                  validateField(isUpdating);
                }
                setStatus();
                setIsUpdating(null);
                setFocusOnNextInputField(isUpdating, values[isUpdating]);
              }
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
    }
  };
  var submitButton = {
    label: t('validate'),
    align: 'right',
    loader: nextLoader,
    type: 'submit'
  };
  var writing = 'writing';
  var cleanUpForm = function cleanUpForm(key, isLastItem) {
    if (!isLastItem) {
      for (var i = key + 1; i < form.length; i++) {
        if (values[form[i].name]) {
          setFieldValue(form[i].name, undefined);
        }
        if (errors[form[i].name]) {
          setFieldError(form[i].name, undefined);
        }
      }
    }
  };
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState6 = _slicedToArray(_useState5, 2),
    exceedingFieldName = _useState6[0],
    setExceedingFieldName = _useState6[1];
  var valueExceedsLimit = function valueExceedsLimit(fieldName, value) {
    var limitValues = [{
      name: 'floor',
      value: 9
    }, {
      name: 'size',
      value: 400
    }, {
      name: 'water',
      value: 6
    }];
    var limitObj = limitValues.find(function (field) {
      return field.name === fieldName;
    });
    var limitValue = (limitObj === null || limitObj === void 0 ? void 0 : limitObj.value) || {};
    return parseInt(value) > limitValue;
  };
  var delay = function delay(ms) {
    return new Promise(function (res) {
      return setTimeout(res, ms);
    });
  };
  var setFocus = function setFocus(nextField) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var input;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return delay(100);
          case 2:
            input = document.getElementById(nextField);
            if (input) {
              input.focus();
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
  };
  var setFocusOnNextInputField = function setFocusOnNextInputField(actualField, actualFieldValue) {
    if (actualFieldValue !== '') {
      if (actualField === 'floor') {
        setFocus('size');
      }
      if (actualField === 'size') {
        setFocus('water');
      }
      if (actualField === 'water') {
        setFocus('visit');
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, form.map(function (_ref4, key) {
    var context = _ref4.context,
      name = _ref4.name,
      inputs = _ref4.inputs,
      dependency = _ref4.dependency,
      _ref4$infos = _ref4.infos,
      infos = _ref4$infos === void 0 ? false : _ref4$infos;
    var trad = "diagAss.step.step4.complementary_infos.questions.".concat(context);
    var classNames = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('question-block', {
      'border-top border-1 border-card-disabled-light': key > 0,
      'py-4': !inputs,
      'py-3': inputs
    });
    var isLastItem = key + 1 === form.length;
    var onChange = function onChange(e) {
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _e$target, name, value;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _e$target = e.target, name = _e$target.name, value = _e$target.value;
              cleanUpForm(key, isLastItem);
              _context3.next = 4;
              return setFieldValue(name, value);
            case 4:
              validateField(name);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
    };
    var onFocus = function onFocus(e) {
      var name = e.target.name;
      setIsUpdating(name);
    };
    var onInputChange = function onInputChange(e) {
      var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
      var lastLetter = value.at(-1);
      cleanUpForm(key, isLastItem);
      if (/\d/g.test(lastLetter || '') && value.length <= _model__WEBPACK_IMPORTED_MODULE_14__["lengths"][name] || value.length < values[name].length) {
        handleChange(e);
        setStatus(_defineProperty({}, name, writing));
      }
    };
    var onInputBlur = function onInputBlur(e) {
      var _e$target3 = e.target,
        name = _e$target3.name,
        value = _e$target3.value;
      var isValueTooHigh = valueExceedsLimit(name, value);
      if (isValueTooHigh) {
        setExceedingFieldName(name);
        setShowConfirmModal(true);
      } else {
        validateField(name);
        setStatus();
        setFocusOnNextInputField(name, value);
      }
    };
    if (dependency) {
      var value = dependency.value,
        _name = dependency.name;
      if (Array.isArray(_name)) {
        var shouldRender = _name.every(function (name) {
          return values[name];
        });
        if (!shouldRender) return null;
      } else {
        if (value && values[_name] !== value || !value && !values[_name] || status && status[_name] === writing) {
          return null;
        }
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: context,
      className: classNames
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzTypographie"], {
      size: "L",
      weight: "regular"
    }, t("".concat(trad, ".title"))), !inputs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row no-gutters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzTypographie"], {
      color: "dark",
      className: "mb-2",
      tag: "span"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: name
    }, t("".concat(trad, ".label")))), infos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "regular",
      color: "dark",
      className: "mb-2 col-8"
    }, t("".concat(trad, ".infos")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzInput"], {
      className: "col-8",
      onChange: onInputChange,
      onBlur: onInputBlur,
      onFocus: onFocus,
      variant: "outlined",
      name: name,
      id: name,
      value: values[name]
    })), (inputs || []).map(function (_ref5) {
      var label = _ref5.label,
        value = _ref5.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: label,
        className: "d-flex input-group mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzRadio"], {
        id: label,
        name: name,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
          t: t,
          i18nKey: "".concat(trad, ".").concat(label),
          components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzTypographie"], {
            weight: "bold",
            tag: "span"
          })]
        }),
        value: value,
        checked: values[name] === value,
        onChange: onChange
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
      field: name,
      customDisplay: errors[name]
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_diagAss_Stepper_Step4_ConfirmationModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    showConfirmModal: showConfirmModal,
    setShowConfirmModal: setShowConfirmModal,
    name: exceedingFieldName,
    values: values
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__["default"], {
    next: formComplete ? submitButton : nextButton
  }));
};

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step4/ConfirmationModal.tsx":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step4/ConfirmationModal.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmationModal; });
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_pages_diagAss_diagAssContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/pages/diagAss/diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ConfirmationModal(_ref) {
  var showConfirmModal = _ref.showConfirmModal,
    setShowConfirmModal = _ref.setShowConfirmModal,
    name = _ref.name,
    values = _ref.values;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    transform = _useInterweave.transform;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_app_pages_diagAss_diagAssContext__WEBPACK_IMPORTED_MODULE_7__["DiagAssContext"]),
    setExceedsValueField = _useContext.setExceedsValueField;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    nextLoader = _useState2[0],
    setNextLoader = _useState2[1];
  var submittedValue = '';
  for (var _i2 = 0, _Object$entries = Object.entries(values); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (key === name) {
      submittedValue = value;
    }
  }
  var title = t('diagAss.step.step4.confirmation.title', {
    context: name
  });
  var body = t('diagAss.step.step4.confirmation.body', {
    context: name,
    value: submittedValue
  });
  var handleCloseModal = function handleCloseModal() {
    setShowConfirmModal(false);
  };
  var handlePreviousClick = function handlePreviousClick() {
    setShowConfirmModal(false);
  };
  var previousButton = {
    variant: 'outlined',
    enabled: true,
    prevArrow: false,
    label: t('diagAss.step.step4.confirmation.button', {
      context: 'left'
    }),
    onClick: handlePreviousClick,
    disabled: false,
    className: 'pl-3 fix-my-value-btn'
  };
  var handleNextClick = function handleNextClick() {
    setNextLoader(true);
    setExceedsValueField(name);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].DIAG_ASS.STEP_4_KO_MAX_VALUE);
  };
  var nextButton = {
    variant: 'contained',
    label: t('diagAss.step.step4.confirmation.button', {
      context: 'right'
    }),
    loader: nextLoader,
    align: 'right',
    onClick: handleNextClick,
    disabled: false,
    className: 'confirm-and-go-on-btn'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_0__["SzModal"], {
    handleClose: handleCloseModal,
    show: showConfirmModal,
    border: "smooth",
    centered: true,
    fullscreen: "md",
    size: "lg",
    backdrop: true,
    title: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_0__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L",
    className: "mb-2"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_0__["SzTypographie"], {
    className: "mb-2 text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: body,
    transform: transform
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    previous: previousButton,
    next: nextButton
  })));
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step4/Step4Ko.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step4/Step4Ko.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step4Ko; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ez-components/diagAss/utils/error */ "./assets/js/ez-components/diagAss/utils/error.tsx");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
/* harmony import */ var _app_pages_diagAss_hooks_useTrackAndRedirectErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/pages/diagAss/hooks/useTrackAndRedirectErrors */ "./assets/js/pages/diagAss/hooks/useTrackAndRedirectErrors.ts");





function Step4Ko() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var next = Object(_app_pages_diagAss_hooks_useTrackAndRedirectErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(_app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__["LOGEMENT_INELIGIBLE"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    body: t('diagAss.step.step4.ko.body'),
    next: next
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step4/Step4KoMaxValue.tsx":
/*!*******************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step4/Step4KoMaxValue.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step4KoMaxValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ez-components/diagAss/utils/error */ "./assets/js/ez-components/diagAss/utils/error.tsx");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_pages_diagAss_diagAssContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/diagAss/diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Step4KoMaxValue() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_4__["useGA"])(),
    track = _useGA.track;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_pages_diagAss_diagAssContext__WEBPACK_IMPORTED_MODULE_5__["DiagAssContext"]),
    exceedsValueField = _useContext.exceedsValueField;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    nextLoader = _useState2[0],
    setNextLoader = _useState2[1];
  var handleClick = function handleClick() {
    var exceedFieldTextForTracking = [{
      name: 'floor',
      value: _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__["ETAGE_TROP_HAUT"]
    }, {
      name: 'size',
      value: _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__["LOGEMENT_TROP_GRAND"]
    }, {
      name: 'water',
      value: _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__["PIECE_EAU_TROP_NOMBREUSES"]
    }];
    var limitObj = exceedFieldTextForTracking.find(function (field) {
      return field.name === exceedsValueField;
    });
    var textForTracking = (limitObj === null || limitObj === void 0 ? void 0 : limitObj.value) || {};
    track('DIAGASS_2', {
      motif_contact_client: textForTracking
    });
    setNextLoader(true);
    window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].CUSTOMER_SERVICE;
  };
  var nextButton = {
    label: t('diagAss.error.contact_customer_service'),
    loader: nextLoader,
    align: 'right',
    onClick: handleClick,
    disabled: false
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    body: t('diagAss.step.step4.confirmation.max_value_final_body'),
    next: nextButton
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step4/model.ts":
/*!********************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step4/model.ts ***!
  \********************************************************/
/*! exports provided: lengths, Step4Validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengths", function() { return lengths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step4Validation", function() { return Step4Validation; });
/* harmony import */ var _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/hooks/useFormDependency */ "./assets/js/hooks/useFormDependency.ts");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


var lengths = {
  floor: 2,
  size: 3,
  water: 2
};
var then = function then(schema) {
  return schema.required('diagAss.error.mandatory_field');
};
var Step4Validation = yup__WEBPACK_IMPORTED_MODULE_1__["object"]({
  type: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('diagAss.error.select_option'),
  floor: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().max(lengths.floor, 'diagAss.error.size').when('type', {
    is: function is(type) {
      return type === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_0__["APPART"];
    },
    then: then
  }),
  pool: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().when('type', {
    is: function is(type) {
      return type === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_0__["MAISON"];
    },
    then: then
  }),
  extra_equipment: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().when('pool', {
    is: function is(pool) {
      return pool;
    },
    then: then
  }),
  size: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().max(lengths.size, 'diagAss.error.size').when(['type', 'floor', 'pool', 'extra_equipment'], {
    is: function is(type, floor, pool, extra_eq) {
      return type === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_0__["APPART"] && floor || type === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_0__["MAISON"] && pool && extra_eq;
    },
    then: then
  }),
  water: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().max(lengths.water, 'diagAss.error.size').when('size', {
    is: function is(size) {
      return size;
    },
    then: then
  }),
  visit: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().when('water', {
    is: function is(water) {
      return water;
    },
    then: then
  }),
  context: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().when('visit', {
    is: function is(visit) {
      return visit;
    },
    then: then
  })
});

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step5/Step5.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step5/Step5.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step5; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_components_RadioCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/RadioCard */ "./assets/js/components/RadioCard/index.tsx");
/* harmony import */ var _app_components_Skeleton_RadioCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/Skeleton/RadioCard */ "./assets/js/components/Skeleton/RadioCard/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_pages_diagAss_Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/pages/diagAss/Utils */ "./assets/js/pages/diagAss/Utils/index.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function Step5(_ref) {
  var currentStep = _ref.currentStep;
  var _a, _b, _c;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_14__["DiagAssContext"]),
    extraFn = _useContext.extraFn,
    state = _useContext.state;
  var saveStep = extraFn.saveStep;
  var steps = state.steps;
  var index = currentStep - 1;
  var _ref2 = steps[index] || {},
    values = _ref2.values;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_16__["useGA"])(),
    track = _useGA.track;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('services', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_11__["API"].DIAG_ASS.SERVICES);
    }, {
      onSuccess: function onSuccess(_ref3) {
        var data = _ref3.data;
        var message = data.message;
        if (_app_constants__WEBPACK_IMPORTED_MODULE_11__["CODES"].KO_CERTIFICAT === message) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].DIAG_ASS.STEP_5_KO);
        }
      },
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      }
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading;
  var _ref4 = (data === null || data === void 0 ? void 0 : data.data) || {},
    _ref4$content = _ref4.content,
    services = _ref4$content === void 0 ? [] : _ref4$content;
  var setSummary = function setSummary(service) {
    var tariffSpec = (service === null || service === void 0 ? void 0 : service.tariffSpecification) || '';
    return t('diagAss.stepper.step5', {
      value: service === null || service === void 0 ? void 0 : service.certificateType.concat(' ', tariffSpec)
    });
  };
  var getServiceById = function getServiceById(id) {
    return services.find(function (service) {
      return service.idArticle === id;
    });
  };
  var priceForClient = function priceForClient(priceWithVAT, communityInvoice) {
    if (Number(priceWithVAT) === 0 || communityInvoice) {
      return t('free');
    }
    return priceWithVAT.replace('.', ',') + ' €';
  };
  var onSubmit = function onSubmit(values, formikHelpers) {
    var service = getServiceById(values.serviceId);
    if (service) {
      var setValues = formikHelpers.setValues;
      var priceWithVAT = priceForClient(service.priceWithVAT, service.communityInvoice);
      var addedValues = Object.assign(Object.assign({}, values), {
        needWater: service.needWater ? '1' : '0',
        priceWithVAT: priceWithVAT
      });
      setValues(addedValues);
      var rawTypeDiag = service.certificateType;
      rawTypeDiag += service.tariffSpecification ? ' ' + service.tariffSpecification : '';
      var cleanTypeDiag = Object(_app_pages_diagAss_Utils__WEBPACK_IMPORTED_MODULE_12__["formatTypeDiag"])(rawTypeDiag);
      track('DIAGASS_20', {
        type_diagnostic: cleanTypeDiag,
        tarif: priceWithVAT
      });
      var summary = setSummary(service);
      saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].DIAG_ASS.STEP_5, addedValues, summary);
      if (service.needWater) {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].DIAG_ASS.STEP_5_WATER);
      } else {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].DIAG_ASS.STEP_6);
      }
    }
  };
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].DIAG_ASS.STEP_4);
  };
  var nextButton = {
    label: t('validate'),
    align: 'right'
  };
  var previousButton = {
    label: t('go_back'),
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var initialValues = {
    serviceId: (_a = values === null || values === void 0 ? void 0 : values.serviceId) !== null && _a !== void 0 ? _a : '',
    needWater: (_b = values === null || values === void 0 ? void 0 : values.needWater) !== null && _b !== void 0 ? _b : '',
    priceWithVAT: (_c = values === null || values === void 0 ? void 0 : values.priceWithVAT) !== null && _c !== void 0 ? _c : ''
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: true,
    validationSchema: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_15__["step5Schema"],
    onSubmit: onSubmit
  }, function (_ref5) {
    var values = _ref5.values,
      errors = _ref5.errors,
      handleChange = _ref5.handleChange,
      handleSubmit = _ref5.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssServices",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "services-list",
      className: "my-4 mh-lg"
    }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton_RadioCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
      count: 3
    }) : services.map(function (_ref6, index) {
      var idArticle = _ref6.idArticle,
        certificateType = _ref6.certificateType,
        tariffSpecification = _ref6.tariffSpecification,
        certificateLabel = _ref6.certificateLabel,
        priceWithVAT = _ref6.priceWithVAT,
        communityInvoice = _ref6.communityInvoice;
      var tariffSpec = tariffSpecification || '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_RadioCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: idArticle,
        id: "service-".concat(idArticle),
        name: "serviceId",
        className: index === services.length - 1 ? 'mb-0' : 'mb-3',
        label: Object(_app_pages_diagAss_Utils__WEBPACK_IMPORTED_MODULE_12__["joinStringNull"])(certificateType, tariffSpec),
        value: idArticle,
        checked: idArticle === values.serviceId,
        onChange: handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzTypographie"], {
        className: "mb-4",
        color: "disabled"
      }, certificateLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzTypographie"], {
        className: "mb-0 text-uppercase",
        weight: "bold"
      }, t('price', {
        context: 'ttc'
      }), " :", ' ', priceForClient(priceWithVAT, communityInvoice)));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      field: "serviceId",
      customDisplay: errors.serviceId
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step5/Step5Ko.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step5/Step5Ko.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step5Ko; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ez-components/diagAss/utils/error */ "./assets/js/ez-components/diagAss/utils/error.tsx");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
/* harmony import */ var _app_pages_diagAss_hooks_useTrackAndRedirectErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/pages/diagAss/hooks/useTrackAndRedirectErrors */ "./assets/js/pages/diagAss/hooks/useTrackAndRedirectErrors.ts");





function Step5Ko() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var next = Object(_app_pages_diagAss_hooks_useTrackAndRedirectErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(_app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_3__["NO_AVAILABLE_CERTIFICATE"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    body: t('diagAss.step.step5.ko.body'),
    next: next
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step5/Step5Water.tsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step5/Step5Water.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step5Water; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");













function Step5Water() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_10__["DiagAssContext"]),
    extraFn = _useContext.extraFn,
    state = _useContext.state;
  var steps = state.steps;
  var saveStep = extraFn.saveStep;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_11__["useGA"])(),
    track = _useGA.track;
  var serviceId = steps[4].values.serviceId;
  var needWater = steps[4].values.needWater;
  var priceWithVAT = steps[4].values.priceWithVAT;
  var summary = steps[4].summary;
  var onSubmit = function onSubmit(_ref) {
    var waterSupplied = _ref.waterSupplied;
    var values = {
      serviceId: serviceId,
      needWater: needWater,
      priceWithVAT: priceWithVAT,
      waterSupplied: waterSupplied
    };
    saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_5_WATER, values, summary);
    track('DIAGASS_21', {
      alimentation_eau: waterSupplied ? _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_12__["LOGEMENT_AVEC_ALIMENTATION_EAU"] : _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_12__["LOGEMENT_SANS_ALIMENTATION_EAU"]
    });
    if (waterSupplied) {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_6);
    } else {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DIAG_ASS.STEP_5_WATER_KO);
    }
  };
  var nextButton = {
    label: t('validate'),
    align: 'right'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      waterSupplied: ''
    },
    validateOnBlur: true,
    validationSchema: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_5__["StepWaterSuppliedSchema"],
    onSubmit: onSubmit
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      setFieldValue = _ref2.setFieldValue,
      values = _ref2.values,
      errors = _ref2.errors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssWaterSupplied",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzTypographie"], {
      size: "XL"
    }, t('diagAss.step.step5.water.water_supplied')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzRadio"], {
      id: "waterSuppliedYes",
      name: "waterSupplied",
      label: t('yes'),
      value: "1",
      checked: '' !== values.waterSupplied && !!values.waterSupplied,
      onChange: function onChange(e) {
        setFieldValue('waterSupplied', Boolean(parseInt(e.target.value)));
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_9__["SzRadio"], {
      className: "ml-3",
      id: "waterSuppliedNo",
      name: "waterSupplied",
      label: t('no'),
      value: "0",
      checked: '' !== values.waterSupplied && !values.waterSupplied,
      onChange: function onChange(e) {
        setFieldValue('waterSupplied', Boolean(parseInt(e.target.value)));
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      field: "waterSupplied",
      customDisplay: errors.waterSupplied
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step5/Step5WaterKo.tsx":
/*!****************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step5/Step5WaterKo.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step5WaterKo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ez-components/diagAss/utils/error */ "./assets/js/ez-components/diagAss/utils/error.tsx");
/* harmony import */ var _app_hooks_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks/index */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Step5WaterKo() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_index__WEBPACK_IMPORTED_MODULE_5__["useGA"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    nextLoader = _useState2[0],
    setNextLoader = _useState2[1];
  var handleClick = function handleClick() {
    setNextLoader(true);
    track('DIAGASS_22');
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_6);
  };
  var nextButton = {
    label: t('diagAss.step.step5.ko_water.button'),
    loader: nextLoader,
    align: 'right',
    onClick: handleClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_diagAss_utils_error__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: t('diagAss.step.step5.ko_water.title'),
    body: t('diagAss.step.step5.ko_water.body'),
    next: nextButton
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/Step6/Step6.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/Step6/Step6.tsx ***!
  \*********************************************************/
/*! exports provided: COUNTRY_FR, COUNTRY_OTHER, Step6Context, default, Step6Check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRY_FR", function() { return COUNTRY_FR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRY_OTHER", function() { return COUNTRY_OTHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step6Context", function() { return Step6Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step6Check", function() { return Step6Check; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_CapAddress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/CapAddress */ "./assets/js/components/CapAddress/index.jsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_ez_components_diagAss_utils_history__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/ez-components/diagAss/utils/history */ "./assets/js/ez-components/diagAss/utils/history.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var COUNTRY_FR = 'france';
var COUNTRY_OTHER = 'foreign';
var FREE_DIAG = 'Gratuit';
var Step6Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
var setAddress = function setAddress(_ref) {
  var address = _ref.address,
    city = _ref.city,
    additionalAddress = _ref.additionalAddress;
  var pattern = ', ';
  var cleanUpCity = city.split(pattern).reverse().join(' ');
  if (additionalAddress && '' !== additionalAddress) {
    return address.concat(pattern, additionalAddress, pattern, cleanUpCity);
  }
  return address.concat(pattern, cleanUpCity);
};
function Step6(_ref2) {
  var currentStep = _ref2.currentStep;
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_17__["useGA"])(),
    track = _useGA.track;
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])(),
    stateLocation = _useLocation.state;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_16__["DiagAssContext"]),
    extraFn = _useContext.extraFn,
    state = _useContext.state;
  var steps = state.steps;
  var saveStep = extraFn.saveStep;
  var stepIndex = currentStep - 1;
  var stepValues = !((_b = (_a = steps[stepIndex]) === null || _a === void 0 ? void 0 : _a.values) === null || _b === void 0 ? void 0 : _b.isDefaultAddress) ? (_c = steps[stepIndex]) === null || _c === void 0 ? void 0 : _c.values : null;
  var initialAddress = (_d = steps[0]) === null || _d === void 0 ? void 0 : _d.values;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 1),
    previousLoader = _useState2[0];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
    _useState4 = _slicedToArray(_useState3, 2),
    countryOptions = _useState4[0],
    setCountryOptions = _useState4[1];
  var priceWithVAT = (_e = steps[4]) === null || _e === void 0 ? void 0 : _e.values.priceWithVAT;
  var isFreeDiag = priceWithVAT === FREE_DIAG;
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(yup__WEBPACK_IMPORTED_MODULE_6__["object"]()),
    _useState6 = _slicedToArray(_useState5, 2),
    step6Schema = _useState6[0],
    setStep6Schema = _useState6[1];
  var setSummary = function setSummary(values) {
    var address = values.address,
      additionalAddress = values.additionalAddress,
      city = values.city,
      country = values.country,
      countryForm = values.countryForm,
      zip = values.zip;
    if (COUNTRY_OTHER === countryForm && '' === address && '' === city) {
      address = initialAddress.address;
      additionalAddress = initialAddress.additionalAddress;
      city = initialAddress.city;
      zip = initialAddress.zip;
      countryForm = COUNTRY_FR;
    }
    var isCountryFr = COUNTRY_FR === countryForm;
    var value = setAddress({
      address: address,
      city: isCountryFr ? city : "".concat(zip, " ").concat(city),
      additionalAddress: additionalAddress
    });
    if (!isCountryFr) {
      var countryOption = countryOptions.find(function (countryOption) {
        return countryOption.label === country;
      });
      if (countryOption) {
        return t('diagAss.step.step6.check.body', {
          context: isFreeDiag ? '' : 'fee',
          address: value.concat(', ', countryOption.label)
        });
      }
    }
    return t('diagAss.step.step6.check.body', {
      context: isFreeDiag ? '' : 'fee',
      address: value
    });
  };
  var onSubmit = function onSubmit(values) {
    var summary = setSummary(values);
    saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_6, values, summary);
    if (values.isDefaultAddress === false) {
      var country = values.countryForm === _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_18__["CTR_FRANCE"] ? _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_18__["CTR_FRANCE"] : _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_18__["CTR_FOREIGN"];
      track('DIAGASS_24', {
        pays_adresse_facturation: country
      });
    } else {
      track('DIAGASS_23');
    }
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_CONFIRM);
  };
  var handlePreviousClick = function handlePreviousClick() {
    if (!!(stateLocation === null || stateLocation === void 0 ? void 0 : stateLocation.showEdit)) {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_6, {
        showEdit: false
      });
    } else {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_5);
    }
  };
  var nextButtonDefault = {
    label: t('validate'),
    align: 'right'
  };
  var nextButtonNext = {
    label: t('next'),
    align: 'right',
    arrow: true
  };
  var previousButton = {
    label: t('go_back'),
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(nextButtonDefault),
    _useState8 = _slicedToArray(_useState7, 2),
    nextButton = _useState8[0],
    setNextButton = _useState8[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step6Context.Provider, {
    value: {
      currentStep: currentStep,
      franceMainObject: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_8__["franceMainObject"],
      franceSubObject: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_8__["franceSubObject"],
      foreignObject: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_8__["foreignObject"],
      setStep6Schema: setStep6Schema,
      countryOptions: countryOptions,
      setCountryOptions: setCountryOptions,
      nextButtonDefault: nextButtonDefault,
      nextButtonNext: nextButtonNext,
      setNextButton: setNextButton
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      countryForm: (_f = stepValues === null || stepValues === void 0 ? void 0 : stepValues.countryForm) !== null && _f !== void 0 ? _f : COUNTRY_FR,
      country: (_g = stepValues === null || stepValues === void 0 ? void 0 : stepValues.country) !== null && _g !== void 0 ? _g : '',
      countryObj: (_h = stepValues === null || stepValues === void 0 ? void 0 : stepValues.countryObj) !== null && _h !== void 0 ? _h : {},
      city: (_j = stepValues === null || stepValues === void 0 ? void 0 : stepValues.city) !== null && _j !== void 0 ? _j : '',
      zip: (_k = stepValues === null || stepValues === void 0 ? void 0 : stepValues.zip) !== null && _k !== void 0 ? _k : '',
      address: (_l = stepValues === null || stepValues === void 0 ? void 0 : stepValues.address) !== null && _l !== void 0 ? _l : '',
      additionalAddress: (_m = stepValues === null || stepValues === void 0 ? void 0 : stepValues.additionalAddress) !== null && _m !== void 0 ? _m : '',
      isDefaultAddress: false
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: step6Schema,
    onSubmit: onSubmit
  }, function (_ref3) {
    var handleSubmit = _ref3.handleSubmit,
      setFieldValue = _ref3.setFieldValue,
      values = _ref3.values;
    var preSubmit = function preSubmit(e) {
      var _a;
      var city = values.city,
        countryForm = values.countryForm;
      if (!(stateLocation === null || stateLocation === void 0 ? void 0 : stateLocation.showEdit) && COUNTRY_FR === countryForm && '' === city) {
        var _ref4 = (_a = steps[0]) === null || _a === void 0 ? void 0 : _a.values,
          address = _ref4.address,
          additionalAddress = _ref4.additionalAddress,
          _city = _ref4.city;
        setFieldValue('city', _city);
        setFieldValue('address', address);
        setFieldValue('additionalAddress', additionalAddress);
        setFieldValue('isDefaultAddress', true);
      }
      handleSubmit(e);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssBillingAddress",
      onSubmit: preSubmit
    }, !!(stateLocation === null || stateLocation === void 0 ? void 0 : stateLocation.showEdit) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step6Edit, {
      isFreeDiag: isFreeDiag
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step6Check, {
      isFreeDiag: isFreeDiag
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_12__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  }));
}
function Step6Check(_ref5) {
  var isFreeDiag = _ref5.isFreeDiag;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useGA2 = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_17__["useGA"])(),
    track = _useGA2.track;
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_16__["DiagAssContext"]),
    state = _useContext2.state;
  var steps = state.steps;
  var icons = ['pin-location-1'];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
      var _a, _b, _c;
      var values = (_b = (_a = steps[5]) === null || _a === void 0 ? void 0 : _a.values) !== null && _b !== void 0 ? _b : (_c = steps[0]) === null || _c === void 0 ? void 0 : _c.values;
      var address = values.address,
        additionalAddress = values.additionalAddress,
        city = values.city;
      return setAddress({
        address: address,
        city: city,
        additionalAddress: additionalAddress
      });
    }),
    _useState10 = _slicedToArray(_useState9, 1),
    addressStep = _useState10[0];
  var step = [{
    locked: false,
    summary: t('diagAss.step.step6.check.body', {
      context: isFreeDiag ? '' : 'fee',
      address: addressStep
    }),
    link: {
      onClick: function onClick() {
        track('DIAGASS_14', {
          type_information: _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_18__["ADRESSE_FACTURATION"]
        });
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_6, {
          showEdit: true
        });
      },
      label: t('edit')
    },
    values: {}
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L"
  }, t('diagAss.step.step6.check.title', {
    context: isFreeDiag ? '' : 'fee'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_diagAss_utils_history__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "mt-3 mt-lg-4",
    steps: step,
    isStepList: true,
    icons: icons
  }));
}
var Step6FranceForm = function Step6FranceForm() {
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation3.t;
  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Step6Context),
    currentStep = _useContext3.currentStep,
    franceMainObject = _useContext3.franceMainObject,
    franceSubObject = _useContext3.franceSubObject,
    setStep6Schema = _useContext3.setStep6Schema,
    setNextButton = _useContext3.setNextButton,
    nextButtonNext = _useContext3.nextButtonNext,
    nextButtonDefault = _useContext3.nextButtonDefault;
  var _useContext4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_16__["DiagAssContext"]),
    state = _useContext4.state;
  var steps = state.steps;
  var index = currentStep - 1;
  var formikContext = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useFormikContext"])();
  var values = formikContext.values,
    errors = formikContext.errors,
    handleChange = formikContext.handleChange,
    handleBlur = formikContext.handleBlur,
    setFieldValue = formikContext.setFieldValue,
    validateForm = formikContext.validateForm;
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isSearchingCity = _useState12[0],
    setIsSearchingCity = _useState12[1];
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isSearchingAddress = _useState14[0],
    setIsSearchingAddress = _useState14[1];
  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
      var _a, _b, _c;
      var values = !((_b = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values) === null || _b === void 0 ? void 0 : _b.isDefaultAddress) ? (_c = steps[index]) === null || _c === void 0 ? void 0 : _c.values : null;
      if (values && '' !== (values === null || values === void 0 ? void 0 : values.city) && COUNTRY_FR === (values === null || values === void 0 ? void 0 : values.countryForm)) {
        var _address = values.address,
          locality = values.locality,
          localityId = values.localityId,
          postalCode = values.postalCode;
        return {
          locality: locality,
          zipcode: postalCode,
          inseecode: localityId,
          text: _address
        };
      }
      return null;
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    cityValue = _useState16[0],
    setCityValue = _useState16[1];
  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isCityDirty = _useState18[0],
    setIsCityDirty = _useState18[1];
  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isAddressDirty = _useState20[0],
    setIsAddressDirty = _useState20[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _a, _b, _c;
    if (!((_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values) || ((_c = (_b = steps[index]) === null || _b === void 0 ? void 0 : _b.values) === null || _c === void 0 ? void 0 : _c.isDefaultAddress)) {
      setNextButton(nextButtonNext);
    }
  }, []);
  var address = {
    locality: cityValue === null || cityValue === void 0 ? void 0 : cityValue.locality,
    localityId: cityValue === null || cityValue === void 0 ? void 0 : cityValue.inseecode,
    postalCode: cityValue === null || cityValue === void 0 ? void 0 : cityValue.zipcode
  };
  var setAddressForm = function setAddressForm(isFull) {
    var step6Object;
    if (isFull) {
      step6Object = yup__WEBPACK_IMPORTED_MODULE_6__["object"](Object.assign(Object.assign({}, franceMainObject), franceSubObject));
      setNextButton(nextButtonDefault);
    } else {
      step6Object = yup__WEBPACK_IMPORTED_MODULE_6__["object"](franceMainObject);
      setNextButton(nextButtonNext);
    }
    setStep6Schema(step6Object);
  };
  var onClickCity = function onClickCity(city) {
    var text = city.text;
    setCityValue(city);
    setIsSearchingCity(false);
    setFieldValue('city', text, true);
    setFieldValue('address', '', false);
    setFieldValue('additionalAddress', '', false);
    setIsCityDirty(false);
    setAddressForm(true);
  };
  var onChangeCity = function onChangeCity(_ref6) {
    var target = _ref6.target;
    if (0 === target.value.length) {
      setFieldValue('address', '', false);
      setFieldValue('additionalAddress', '', false);
    } else if (2 < target.value.length && !isSearchingCity) {
      setIsSearchingCity(true);
    }
    setIsCityDirty(true);
    setFieldValue('city', target.value);
  };
  var onClickAwayCity = function onClickAwayCity() {
    if (values.city.length > 0 && isCityDirty) {
      setFieldValue('address', '');
      setFieldValue('city', '', true);
      setCityValue(null);
      setAddressForm(false);
    }
    setIsSearchingCity(false);
  };
  var onClickAddress = function onClickAddress(infosStreet) {
    var locality = infosStreet.locality,
      localityId = infosStreet.localityId,
      streetId = infosStreet.streetId,
      streetName = infosStreet.streetName,
      streetNumber = infosStreet.streetNumber,
      streetNumberExt = infosStreet.streetNumberExt,
      text = infosStreet.text,
      postalCode = infosStreet.postalCode;
    setFieldValue('address', text);
    setFieldValue('localityId', localityId);
    setFieldValue('streetId', streetId);
    setFieldValue('streetNumber', streetNumber);
    setFieldValue('streetNumberExt', streetNumberExt);
    setFieldValue('streetName', streetName);
    setFieldValue('locality', locality);
    setFieldValue('postalCode', postalCode);
    validateForm();
    setIsAddressDirty(false);
    setIsSearchingAddress(false);
  };
  var onChangeAddress = function onChangeAddress(_ref7) {
    var target = _ref7.target;
    if (target.value.length > 2 && !isSearchingAddress) {
      setIsSearchingAddress(true);
    }
    setAddressForm(true);
    setIsAddressDirty(true);
    setFieldValue('address', target.value);
  };
  var onClickAwayAddress = function onClickAwayAddress() {
    if (values.address.length > 0 && isAddressDirty) {
      setFieldValue('address', '', true);
    }
    setIsSearchingAddress(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mb-2",
    htmlFor: "searchInput-town"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
    weight: "regular",
    className: "text-primary-dark",
    tag: "span"
  }, t('diagAss.step.step6.edit.city.label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_CapAddress__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "town",
    name: "city",
    value: values.city,
    placeholder: t('diagAss.step.step6.edit.city.placeholder'),
    onChange: onChangeCity,
    onClick: onClickCity,
    onClickAway: onClickAwayCity,
    isSearching: isSearchingCity
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    field: "city",
    customDisplay: errors.city
  })), cityValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mb-2",
    htmlFor: "searchInput-town"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
    weight: "regular",
    className: "text-primary-dark",
    tag: "span"
  }, t('diagAss.step.step6.edit.address.label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_CapAddress__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "street",
    name: "address",
    value: values.address,
    placeholder: t('diagAss.step.step6.edit.address.placeholder'),
    onChange: onChangeAddress,
    onClick: onClickAddress,
    onClickAway: onClickAwayAddress,
    isSearching: isSearchingAddress,
    address: address
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    field: "address",
    customDisplay: errors.address
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzInput"], {
    id: "additionalAddress",
    name: "additionalAddress",
    label: t('diagAss.step.step6.edit.additional_address.label'),
    placeholder: t('diagAss.step.step6.edit.additional_address.placeholder'),
    variant: "outlined",
    value: values.additionalAddress,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    field: "additionalAddress",
    customDisplay: errors.additionalAddress
  }))));
};
var Step6ForeignForm = function Step6ForeignForm() {
  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Step6Context),
    setNextButton = _useContext5.setNextButton,
    nextButtonDefault = _useContext5.nextButtonDefault,
    countryOptions = _useContext5.countryOptions,
    setCountryOptions = _useContext5.setCountryOptions;
  var _useTranslation4 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation4.t;
  var formikContext = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useFormikContext"])();
  var values = formikContext.values,
    errors = formikContext.errors,
    touched = formikContext.touched,
    handleBlur = formikContext.handleBlur,
    handleChange = formikContext.handleChange,
    setFieldTouched = formikContext.setFieldTouched,
    setFieldValue = formikContext.setFieldValue;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setNextButton(nextButtonDefault);
  }, []);
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('countries', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_14__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_10__["API"].GET_COUNTRIES);
    }, {
      refetchOnWindowFocus: false,
      onSuccess: function onSuccess(_ref8) {
        var data = _ref8.data;
        var options = data.map(function (_ref9) {
          var id = _ref9.id,
            fr = _ref9.fr;
          return {
            label: fr,
            value: id
          };
        });
        setCountryOptions(options);
      }
    }),
    isLoading = _useQuery.isLoading;
  var onBlurCountry = function onBlurCountry() {
    setFieldTouched('country', true, true);
  };
  var onChangeCountry = function onChangeCountry(selectedOption) {
    setFieldValue('country', selectedOption.label, true);
    setFieldValue('countryObj', selectedOption);
  };
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Array.from({
      length: 5
    }, function (v, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 col-lg-8 mb-3",
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
        height: 20,
        width: 100,
        className: "mb-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
        height: 48
      }));
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mb-2",
    htmlFor: "country"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
    weight: "regular",
    className: "text-primary-dark",
    tag: "span"
  }, t('diagAss.step.step6.edit.country.label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzSelect"], {
    name: "country",
    id: "country",
    placeholder: t('diagAss.step.step6.edit.country.placeholder'),
    options: countryOptions,
    value: values.country,
    defaultValue: Object.keys(values.countryObj).length > 0 ? values.countryObj : countryOptions.find(function (_ref10) {
      var value = _ref10.value;
      return value === values.country;
    }),
    onBlur: onBlurCountry,
    onChange: onChangeCountry
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    field: "country",
    customDisplay: touched.country && errors.country
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzInput"], {
    id: "city",
    name: "city",
    label: t('diagAss.step.step6.edit.city.label'),
    placeholder: t('diagAss.step.step6.edit.city.placeholder', {
      context: 'foreign'
    }),
    variant: "outlined",
    value: values.city,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    field: "city",
    customDisplay: touched.city && errors.city
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzInput"], {
    id: "zip",
    name: "zip",
    label: t('diagAss.step.step6.edit.zip.label'),
    placeholder: t('diagAss.step.step6.edit.zip.placeholder'),
    variant: "outlined",
    value: values.zip,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    field: "zip",
    customDisplay: touched.zip && errors.zip
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzInput"], {
    id: "address",
    name: "address",
    label: t('diagAss.step.step6.edit.address.label'),
    placeholder: t('diagAss.step.step6.edit.address.placeholder'),
    variant: "outlined",
    value: values.address,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    field: "address",
    customDisplay: touched.address && errors.address
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzInput"], {
    id: "additionalAddress",
    name: "additionalAddress",
    label: t('diagAss.step.step6.edit.additional_address.label'),
    placeholder: t('diagAss.step.step6.edit.additional_address.placeholder'),
    variant: "outlined",
    value: values.additionalAddress,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    field: "additionalAddress",
    customDisplay: touched.additionalAddress && errors.additionalAddress
  })));
};
var Step6Edit = function Step6Edit(_ref11) {
  var isFreeDiag = _ref11.isFreeDiag;
  var _useTranslation5 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation5.t;
  var _useContext6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Step6Context),
    currentStep = _useContext6.currentStep,
    franceMainObject = _useContext6.franceMainObject,
    foreignObject = _useContext6.foreignObject,
    setStep6Schema = _useContext6.setStep6Schema,
    setNextButton = _useContext6.setNextButton,
    nextButtonDefault = _useContext6.nextButtonDefault,
    nextButtonNext = _useContext6.nextButtonNext;
  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_16__["DiagAssContext"]),
    state = _useContext7.state;
  var steps = state.steps;
  var index = currentStep - 1;
  var formikContext = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useFormikContext"])();
  var values = formikContext.values,
    resetForm = formikContext.resetForm;
  var onChangeCountryForm = function onChangeCountryForm(e) {
    var _a;
    var values = (_a = steps[index]) === null || _a === void 0 ? void 0 : _a.values;
    var defaultValues = e.target.value === (values === null || values === void 0 ? void 0 : values.countryForm) ? {
      country: values === null || values === void 0 ? void 0 : values.country,
      countryObj: values === null || values === void 0 ? void 0 : values.countryObj,
      city: values === null || values === void 0 ? void 0 : values.city,
      address: values === null || values === void 0 ? void 0 : values.address,
      zip: values === null || values === void 0 ? void 0 : values.zip,
      additionalAddress: values === null || values === void 0 ? void 0 : values.additionalAddress,
      isDefaultAddress: false
    } : {
      country: '',
      countryObj: {},
      city: '',
      address: '',
      zip: '',
      additionalAddress: '',
      isDefaultAddress: false
    };
    resetForm({
      values: Object.assign({
        countryForm: e.target.value
      }, defaultValues),
      errors: {}
    });
    setStep6Schema(yup__WEBPACK_IMPORTED_MODULE_6__["object"](COUNTRY_FR === e.target.value ? franceMainObject : foreignObject));
    setNextButton(COUNTRY_FR === e.target.value ? nextButtonNext : nextButtonDefault);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L"
  }, t('diagAss.step.step6.edit.title', {
    context: isFreeDiag ? '' : 'fee'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
    className: "mb-lg-4 text-dark"
  }, t('diagAss.step.step6.edit.body')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzTypographie"], {
    className: "mb-2"
  }, t('diagAss.step.step6.edit.country_form.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzRadio"], {
    id: "countryFormFrance",
    name: "countryForm",
    label: t('diagAss.step.step6.edit.country_form.france'),
    value: "france",
    checked: COUNTRY_FR === values.countryForm,
    onChange: onChangeCountryForm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_15__["SzRadio"], {
    className: "ml-3",
    id: "countryFormForeign",
    name: "countryForm",
    label: t('diagAss.step.step6.edit.country_form.foreign'),
    value: "foreign",
    checked: COUNTRY_OTHER === values.countryForm,
    onChange: onChangeCountryForm
  }))), COUNTRY_FR === values.countryForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step6FranceForm, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step6ForeignForm, null)));
};

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/StepConfirm/StepConfirm.tsx":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/StepConfirm/StepConfirm.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StepConfirm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_models_diagAss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/models/diagAss */ "./assets/js/models/diagAss/index.ts");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_ez_components_diagAss_utils_history__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/ez-components/diagAss/utils/history */ "./assets/js/ez-components/diagAss/utils/history.tsx");
/* harmony import */ var _app_pages_diagAss_Stepper_Step2_SanitizeType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/pages/diagAss/Stepper/Step2/SanitizeType */ "./assets/js/pages/diagAss/Stepper/Step2/SanitizeType.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _Step6_Step6__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Step6/Step6 */ "./assets/js/pages/diagAss/Stepper/Step6/Step6.tsx");
/* harmony import */ var _app_hooks_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/hooks/index */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


















var YES = 'yes';
var NO = 'no';
function StepConfirm() {
  var _a, _b, _c;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_index__WEBPACK_IMPORTED_MODULE_17__["useGA"])(),
    track = _useGA.track;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_15__["DiagAssContext"]),
    state = _useContext.state;
  var steps = state.steps;
  var _ref = (_c = (_b = (_a = window.tsme_data) === null || _a === void 0 ? void 0 : _a.footer) === null || _b === void 0 ? void 0 : _b.links_bottom) === null || _c === void 0 ? void 0 : _c.credits_url,
    link = _ref.link;
  var SanitationType = steps[1].values.radioBtn;
  var isGroupSanitation = SanitationType === _app_pages_diagAss_Stepper_Step2_SanitizeType__WEBPACK_IMPORTED_MODULE_12__["SANITIZE_TYPE_GROUP"];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_6, {
      showEdit: true
    });
  };
  var idCertificate = steps[4].values.serviceId;
  var needWater = steps[4].values.needWater;
  var waterSupplied = steps[4].values.waterSupplied;
  var initialAddress = Object.assign({}, steps[0].values);
  var preFinalAddress = Object.assign({}, steps[5].values);
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(preFinalAddress),
    _useState4 = _slicedToArray(_useState3, 2),
    finalAddress = _useState4[0],
    setFinalAddress = _useState4[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (_Step6_Step6__WEBPACK_IMPORTED_MODULE_16__["COUNTRY_OTHER"] === preFinalAddress.countryForm && '' === preFinalAddress.address && '' === preFinalAddress.city) {
      setFinalAddress(initialAddress);
    }
  }, []);
  var isFrench = null;
  if (initialAddress.address === finalAddress.address && initialAddress.additionalAddress === finalAddress.additionalAddress && initialAddress.city === finalAddress.city) {
    isFrench = null;
  } else if (finalAddress.countryForm === _Step6_Step6__WEBPACK_IMPORTED_MODULE_16__["COUNTRY_FR"]) {
    isFrench = YES;
  } else if (finalAddress.countryForm === _Step6_Step6__WEBPACK_IMPORTED_MODULE_16__["COUNTRY_OTHER"]) {
    isFrench = NO;
  }
  var onSubmit = function onSubmit() {
    track('DIAGASS_26');
    var params = {
      idCertificate: idCertificate
    };
    if (isFrench !== null) {
      params.isFrenchAddress = isFrench;
    }
    if (needWater === '1') {
      params.waterSupplyAccess = waterSupplied ? YES : NO;
    }
    // Delivery or billing address in France AND different from Diagnostic address.
    if (isFrench === YES) {
      params.insee = finalAddress.localityId;
      params.hexavia = finalAddress.streetId;
      params.streetName = finalAddress.streetName;
      params.city = finalAddress.locality;
      params.zipCode = finalAddress.postalCode;
      if (finalAddress.streetNumber) {
        params.streetNumber = finalAddress.streetNumber;
      }
    }
    // Delivery or billing address abroad AND different from Diagnostic address.
    if (isFrench === NO) {
      params.country = finalAddress.country;
      params.city = finalAddress.city;
      params.zipCode = finalAddress.zip;
      params.address = finalAddress.address;
    }
    if (finalAddress.additionalAddress !== '' && isFrench !== null) {
      params.additionalAddress = finalAddress.additionalAddress;
    }
    finalizeRequest.mutate(params);
  };
  var _d = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (params) {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_13__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_10__["API"].DIAG_ASS.FINALIZE_REQUEST, params);
    }, {
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        if (data.message === _app_constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].OK_FINALISATION_DEMANDE) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.STEP_END);
        } else {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
        }
      },
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      }
    }),
    isLoading = _d.isLoading,
    finalizeRequest = __rest(_d, ["isLoading"]);
  var nextButton = {
    label: t('diagAss.step.confirm.button'),
    align: 'right',
    loader: isLoading
  };
  var previousButton = {
    label: t('go_back'),
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
      confirmConditions: false
    },
    validateOnChange: false,
    validationSchema: _app_models_diagAss__WEBPACK_IMPORTED_MODULE_7__["StepConfirmSummarySchema"],
    onSubmit: onSubmit
  }, function (_ref3) {
    var errors = _ref3.errors,
      handleSubmit = _ref3.handleSubmit,
      setFieldValue = _ref3.setFieldValue,
      values = _ref3.values;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      if (errors.confirmConditions) {
        track('DIAGASS_25');
      }
    }, [errors]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "diagAssConfirmSummary",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-4 mb-lg-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__["SzTypographie"], {
      className: "mb-lg-5 text-dark"
    }, t('diagAss.step.confirm.body')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_diagAss_utils_history__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "mb-3 mb-lg-4",
      steps: steps,
      isStepList: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_14__["SzCheckbox"], {
      id: "confirmConditions",
      name: "confirmConditions",
      type: "checkbox",
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        i18nKey: 'diagAss.step.confirm.conditions.accept',
        components: {
          cgu: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
            "data-cy": "linkCGU",
            to: link,
            target: "_blank",
            decorate: true
          }),
          cge: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
            "data-cy": "linkCGE",
            to: isGroupSanitation ? _app_constants__WEBPACK_IMPORTED_MODULE_10__["CGE_LINK_AC"] : _app_constants__WEBPACK_IMPORTED_MODULE_10__["CGE_LINK_ANC"],
            target: "_blank",
            decorate: true
          })
        }
      }),
      checked: values.confirmConditions,
      onChange: function onChange(e) {
        setFieldValue('confirmConditions', e.target.checked, true);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      field: "confirmConditions",
      customDisplay: errors.confirmConditions
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  });
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/StepEnd/StepEnd.tsx":
/*!*************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/StepEnd/StepEnd.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StepEnd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _hooks_useInterweave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_pages_diagAss_Stepper_Step2_SanitizeType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/diagAss/Stepper/Step2/SanitizeType */ "./assets/js/pages/diagAss/Stepper/Step2/SanitizeType.tsx");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
/* harmony import */ var _app_pages_diagAss_Utils_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/pages/diagAss/Utils/index */ "./assets/js/pages/diagAss/Utils/index.tsx");
/* harmony import */ var _app_hooks_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks/index */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useFormDependency */ "./assets/js/hooks/useFormDependency.ts");
/* harmony import */ var _app_pages_diagAss_hooks_useContextDemandeValue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/pages/diagAss/hooks/useContextDemandeValue */ "./assets/js/pages/diagAss/hooks/useContextDemandeValue.ts");
/* harmony import */ var _app_pages_diagAss_hooks_useVisitTypeValue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/pages/diagAss/hooks/useVisitTypeValue */ "./assets/js/pages/diagAss/hooks/useVisitTypeValue.ts");
















function StepEnd() {
  var _a, _b, _c, _d;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useInterweave = Object(_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    transform = _useInterweave.transform;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_index__WEBPACK_IMPORTED_MODULE_12__["useGA"])(),
    track = _useGA.track;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_8__["DiagAssContext"]),
    state = _useContext.state;
  var steps = state.steps;
  var userEmail = steps[2].values.email;
  var step3 = steps[3].values;
  var type_assainissement = ((_a = steps[1].values) === null || _a === void 0 ? void 0 : _a.radioBtn) === _app_pages_diagAss_Stepper_Step2_SanitizeType__WEBPACK_IMPORTED_MODULE_9__["SANITIZE_TYPE_SOLO"] ? _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_10__["ASS_INDIVIDUEL"] : _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_10__["ASS_COLLECTIF"];
  var visitTypeValue = Object(_app_pages_diagAss_hooks_useVisitTypeValue__WEBPACK_IMPORTED_MODULE_15__["default"])(step3 === null || step3 === void 0 ? void 0 : step3.visit);
  var contextDemandeValue = Object(_app_pages_diagAss_hooks_useContextDemandeValue__WEBPACK_IMPORTED_MODULE_14__["default"])(step3 === null || step3 === void 0 ? void 0 : step3.context);
  var type_logement = (step3 === null || step3 === void 0 ? void 0 : step3.type) === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_13__["MAISON"] ? 'maison' : 'appartement';
  var surface_logement = step3 === null || step3 === void 0 ? void 0 : step3.size;
  var nombre_piece_eau = step3 === null || step3 === void 0 ? void 0 : step3.water;
  var type_visite = visitTypeValue;
  var contexte_demande = contextDemandeValue;
  var etage_logement = step3 === null || step3 === void 0 ? void 0 : step3.floor;
  var equipement_piscine = step3 === null || step3 === void 0 ? void 0 : step3.pool;
  var dependance_exterieure = step3 === null || step3 === void 0 ? void 0 : step3.extra_equipment;
  var rawTypeDiag = (_b = steps[4]) === null || _b === void 0 ? void 0 : _b.summary.split('>')[1].split('<')[0];
  var type_diagnostic = Object(_app_pages_diagAss_Utils_index__WEBPACK_IMPORTED_MODULE_11__["formatTypeDiag"])(rawTypeDiag);
  var tarif = (_c = steps[4].values) === null || _c === void 0 ? void 0 : _c.priceWithVAT;
  var alimentation_eau = !!((_d = steps[4].values) === null || _d === void 0 ? void 0 : _d.waterSupplied) ? _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_10__["LOGEMENT_AVEC_ALIMENTATION_EAU"] : _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_10__["LOGEMENT_SANS_ALIMENTATION_EAU"];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('DIAGASS_27', {
      type_assainissement: type_assainissement,
      type_logement: type_logement,
      surface_logement: surface_logement,
      nombre_piece_eau: nombre_piece_eau,
      type_visite: type_visite,
      contexte_demande: contexte_demande,
      etage_logement: etage_logement,
      equipement_piscine: equipement_piscine,
      dependance_exterieure: dependance_exterieure,
      type_diagnostic: type_diagnostic,
      tarif: tarif,
      alimentation_eau: alimentation_eau
    });
  }, []);
  var handleClick = function handleClick() {
    history.push(_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].HOME);
  };
  var nextButton = {
    label: t('diagAss.step.end.button'),
    align: 'right',
    onClick: handleClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex p-4 mb-3 border-s border border-1 border-green-05 rounded-1 bg-lighten-30-green-light",
    "data-cy": "success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzIcon"], {
    className: "text-success text-xlarge mr-4",
    icon: "check-circle-1",
    variant: "bold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    className: "m-0 new-line text-break"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('diagAss.step.end.alert', {
      email: userEmail
    }),
    transform: transform
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-lg-center mt-4 mt-lg-5 pt-2 border-top border-1 border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzIcon"], {
    className: "text-dark text-small mr-2",
    icon: "information-circle",
    variant: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    className: "text-dark",
    variant: "caption",
    size: "M",
    weight: "regular"
  }, t('diagAss.step.end.info'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    next: nextButton
  }));
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/StepRgpdConfirm/StepRgpdConfirm.tsx":
/*!*****************************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/StepRgpdConfirm/StepRgpdConfirm.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StepRgpdConfirm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_FormButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _ez_components_diagAss_utils_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ez-components/diagAss/utils/history */ "./assets/js/ez-components/diagAss/utils/history.tsx");
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Utils */ "./assets/js/pages/diagAss/Utils/index.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var isConnected = window.tsme_data.isConnected;

function StepRgpdConfirm() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    nextLoader = _useState4[0],
    setNextLoader = _useState4[1];
  var brand = window.tsme_data.brand;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_diagAssContext__WEBPACK_IMPORTED_MODULE_7__["DiagAssContext"]),
    state = _useContext.state,
    extraFn = _useContext.extraFn;
  var steps = state.steps;
  var lockStep = extraFn.lockStep;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_11__["useGA"])(),
    track = _useGA.track;
  var handleNextClick = function handleNextClick() {
    var _a;
    track('DIAGASS_18');
    lockStep([1, 2, 3]);
    setNextLoader(true);
    var contactValues = (_a = steps[2]) === null || _a === void 0 ? void 0 : _a.values;
    var contactId = contactValues.contactId;
    var params;
    if (contactId !== _constants__WEBPACK_IMPORTED_MODULE_4__["CONTACT_OTHER"]) {
      var _getIdSplit = Object(_Utils__WEBPACK_IMPORTED_MODULE_10__["getIdSplit"])(contactId),
        _getIdSplit2 = _slicedToArray(_getIdSplit, 1),
        id = _getIdSplit2[0];
      params = {
        idInterlocutor: id
      };
    } else {
      var civilite = contactValues.civilite,
        nom = contactValues.nom,
        prenom = contactValues.prenom,
        email = contactValues.email,
        telPortable = contactValues.telPortable;
      params = {
        civility: civilite,
        lastName: nom,
        firstName: prenom,
        email: email,
        cellphone: telPortable
      };
    }
    requestInitialization.mutate(params);
  };
  var requestInitialization = Object(react_query__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(function (params) {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_9__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_4__["API"].DIAG_ASS.REQUEST, params);
  }, {
    onSuccess: function onSuccess(_ref) {
      var data = _ref.data;
      var _a, _b;
      // If brand redirect spotted
      if ((_a = data === null || data === void 0 ? void 0 : data.content) === null || _a === void 0 ? void 0 : _a.redirect) {
        window.location.href = (_b = data === null || data === void 0 ? void 0 : data.content) === null || _b === void 0 ? void 0 : _b.redirect;
      } else if (data.message === _constants__WEBPACK_IMPORTED_MODULE_4__["CODES"].OK_INITIALISATION_DEMANDE) {
        history.push(_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.STEP_4);
      } else {
        history.push(_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      }
    },
    onError: function onError() {
      history.push(_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
    }
  });
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    var contactId = steps[2].values.contactId;
    var url = _constants__WEBPACK_IMPORTED_MODULE_4__["CONTACT_OTHER"] === contactId && !isConnected ? _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.STEP_3_CREATE : _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.STEP_3;
    history.push(url);
  };
  var nextButton = {
    label: t('diagAss.step.rgpd_confirm.button'),
    align: 'right',
    loader: nextLoader,
    onClick: handleNextClick
  };
  var previousButton = {
    label: t('go_back'),
    arrow: true,
    enabled: true,
    loader: previousLoader,
    onClick: handlePreviousClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "mb-lg-5 text-dark"
  }, t('diagAss.step.rgpd_confirm.body')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_diagAss_utils_history__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "stepper mb-3 mb-lg-5",
    steps: steps,
    isStepList: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "mb-lg-5 text-dark"
  }, t('diagAss.step.rgpd_confirm.rgpd', {
    brand: brand.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    previous: previousButton,
    next: nextButton
  }));
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/TechnicalError/index.tsx":
/*!******************************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/TechnicalError/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TechnicalError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_FormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _ez_components_diagAss_utils_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ez-components/diagAss/utils/box */ "./assets/js/ez-components/diagAss/utils/box.tsx");
/* harmony import */ var _hooks_useInterweave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function TechnicalError() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useInterweave = Object(_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    transform = _useInterweave.transform;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    nextLoader = _useState2[0],
    setNextLoader = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    customerServiceLoader = _useState4[0],
    setCustomerServiceLoader = _useState4[1];
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var isConnected = window.tsme_data.isConnected;
  var handleNextClick = function handleNextClick() {
    setNextLoader(true);
    history.push(isConnected ? _constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DASHBOARD : _constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].HOME);
  };
  var nextButton = {
    label: isConnected ? t('diagAss.error.back_dashboard') : t('diagAss.error.back_home'),
    loader: nextLoader,
    align: 'left',
    onClick: handleNextClick
  };
  var handleCustomerServiceClick = function handleCustomerServiceClick() {
    setCustomerServiceLoader(true);
    history.push(_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].CUSTOMER_SERVICE);
  };
  var CustomerServiceButton = {
    id: 'CustomerServiceButton',
    label: t('diagAss.error.contact_customer_service'),
    loader: customerServiceLoader,
    variant: 'text',
    arrow: true,
    onClick: handleCustomerServiceClick
  };
  var NODE_ENV = "test";
  var date = NODE_ENV === _constants__WEBPACK_IMPORTED_MODULE_5__["ENV"].TEST ? new Date('2024-01-01T12:00:00') : new Date();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_diagAss_utils_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: t('diagAss.step.technical_error.title', {
      date: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(date, t('date.short_date')),
      time: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(date, t('date.hour'))
    }),
    subtitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
      content: t('diagAss.step.technical_error.body'),
      transform: transform
    }),
    innerPadding: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    next: nextButton
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    next: CustomerServiceButton,
    marginTop: false
  })));
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Stepper/index.tsx":
/*!***************************************************!*\
  !*** ./assets/js/pages/diagAss/Stepper/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiagAssStepper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_ez_components_diagAss_utils_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/ez-components/diagAss/utils/box */ "./assets/js/ez-components/diagAss/utils/box.tsx");
/* harmony import */ var _app_ez_components_diagAss_stepper_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/ez-components/diagAss/stepper/history */ "./assets/js/ez-components/diagAss/stepper/history.tsx");
/* harmony import */ var _app_pages_diagAss_diagAssContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/pages/diagAss/diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/pages/diagAss/hooks */ "./assets/js/pages/diagAss/hooks.tsx");
/* harmony import */ var _app_pages_diagAss_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/diagAss/Utils */ "./assets/js/pages/diagAss/Utils/index.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _useSteps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../useSteps */ "./assets/js/pages/diagAss/useSteps.tsx");












function DiagAssStepper() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])();
  var steps = Object(_useSteps__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var _useSummaries = Object(_app_pages_diagAss_hooks__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    setSummaryStep1 = _useSummaries.setSummaryStep1,
    setSummaryStep2 = _useSummaries.setSummaryStep2,
    setSummaryStep3 = _useSummaries.setSummaryStep3;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_pages_diagAss_diagAssContext__WEBPACK_IMPORTED_MODULE_7__["DiagAssContext"]),
    extraFn = _useContext.extraFn;
  var lockStep = extraFn.lockStep,
    saveStep = extraFn.saveStep;
  var queryParameters = new URLSearchParams(location.search);
  var token = queryParameters.get('token');
  var rebuildContext = function rebuildContext(data) {
    var cellphone = data.cellphone,
      email = data.email,
      lastName = data.lastName,
      additionalAddress = data.additionalAddress,
      city = data.city,
      firstName = data.firstName,
      sanitationType = data.sanitationType,
      streetName = data.streetName,
      streetNumber = data.streetNumber,
      zipCode = data.zipCode;
    var address = Object(_app_pages_diagAss_Utils__WEBPACK_IMPORTED_MODULE_9__["joinStringNull"])(streetNumber, streetName);
    var cityFull = Object(_app_pages_diagAss_Utils__WEBPACK_IMPORTED_MODULE_9__["joinStringNull"])(zipCode, city);
    var summaryStep1 = setSummaryStep1(cityFull, address, additionalAddress);
    saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.STEP_1_CREATE, {
      addressId: 'other',
      city: cityFull,
      address: address,
      additionalAddress: additionalAddress
    }, t(summaryStep1.label, summaryStep1.values));
    var summaryStep2 = setSummaryStep2(sanitationType, t);
    saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.STEP_2, {
      radioBtn: sanitationType
    }, t(summaryStep2.label, summaryStep2.values));
    var summaryStep3 = setSummaryStep3(firstName, lastName, email, cellphone);
    saveStep(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.STEP_3, {
      value1: "".concat(firstName, " ").concat(lastName),
      value2: cellphone,
      value3: email,
      context: cellphone
    }, t(summaryStep3.label, summaryStep3.values));
    lockStep([1, 2, 3]);
  };
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(['dataRestitution', token], function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_4__["API"].DIAG_ASS.DATA_RESTITUTION, {
        params: {
          token: token
        }
      });
    }, {
      onSuccess: function onSuccess(_ref) {
        var data = _ref.data;
        if (_app_constants__WEBPACK_IMPORTED_MODULE_4__["CODES"].SUCCESS === data.code) {
          rebuildContext(data.content);
        } else {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
        }
      },
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR);
      },
      enabled: !!token
    }),
    isLoading = _useQuery.isLoading,
    isIdle = _useQuery.isIdle;
  if (token && (isIdle || isLoading)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, steps.map(function (step) {
    var path = step.path,
      title = step.title,
      subtitle = step.subtitle,
      index = step.index,
      displayBadge = step.displayBadge,
      showHistory = step.showHistory,
      error = step.error;
    var Step = step['step'];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      key: path,
      path: path
    }, showHistory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_diagAss_stepper_history__WEBPACK_IMPORTED_MODULE_6__["default"], {
      currentStep: index
    }), error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_diagAss_utils_box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      displayBadge: displayBadge,
      title: title,
      subtitle: subtitle,
      index: index,
      length: steps.length
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, {
      currentStep: index
    })));
  }));
}

/***/ }),

/***/ "./assets/js/pages/diagAss/Utils/index.tsx":
/*!*************************************************!*\
  !*** ./assets/js/pages/diagAss/Utils/index.tsx ***!
  \*************************************************/
/*! exports provided: getIdConcat, getIdSplit, joinStringNull, formatTypeDiag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdConcat", function() { return getIdConcat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdSplit", function() { return getIdSplit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinStringNull", function() { return joinStringNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTypeDiag", function() { return formatTypeDiag; });
function getIdConcat(id, otherId) {
  return "".concat(id, "/").concat(otherId);
}
function getIdSplit(idConcat) {
  return idConcat.split('/', 2);
}
function joinStringNull(s1, s2) {
  return [s1, s2].filter(function (c) {
    return c;
  }).join(' ');
}
function formatTypeDiag(rawTypeDiag) {
  return rawTypeDiag.normalize('NFD').replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD80D[\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, '').replace(/[^a-zA-Z0-9 ]/g, '').trim().replace(/ /g, '_').toLowerCase();
}

/***/ }),

/***/ "./assets/js/pages/diagAss/diagAssContext.tsx":
/*!****************************************************!*\
  !*** ./assets/js/pages/diagAss/diagAssContext.tsx ***!
  \****************************************************/
/*! exports provided: DiagAssContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagAssContext", function() { return DiagAssContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiagAssProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DiagAssContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
function DiagAssProvider(_ref) {
  var children = _ref.children,
    initialValue = _ref.initialValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DiagAssContext.Provider, {
    value: initialValue
  }, children);
}

/***/ }),

/***/ "./assets/js/pages/diagAss/hooks.tsx":
/*!*******************************************!*\
  !*** ./assets/js/pages/diagAss/hooks.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSummaries; });
function useSummaries() {
  var setSummaryStep1 = function setSummaryStep1(city, address, additionalAddress) {
    var value = [];
    value.push(address);
    additionalAddress && '' !== additionalAddress && value.push(additionalAddress);
    value.push(city);
    return {
      label: 'diagAss.stepper.step1',
      values: {
        value: value.join(', ')
      }
    };
  };
  var setSummaryStep2 = function setSummaryStep2(radioBtn, t) {
    return {
      label: 'diagAss.stepper.step2',
      values: {
        value: t("diagAss.step.step2.sanitize.radioCard_".concat(radioBtn, ".label"))
      }
    };
  };
  var setSummaryStep3 = function setSummaryStep3(prenom, nom, email, telPortable) {
    return {
      label: 'diagAss.stepper.step3',
      values: {
        value1: "".concat(prenom, " ").concat(nom),
        value2: telPortable,
        value3: email,
        context: telPortable
      }
    };
  };
  return {
    setSummaryStep1: setSummaryStep1,
    setSummaryStep2: setSummaryStep2,
    setSummaryStep3: setSummaryStep3
  };
}

/***/ }),

/***/ "./assets/js/pages/diagAss/hooks/useContextDemandeValue.ts":
/*!*****************************************************************!*\
  !*** ./assets/js/pages/diagAss/hooks/useContextDemandeValue.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useContextDemandeValue; });
function useContextDemandeValue(formContextValue) {
  var matchTrackRequestType = {
    Vente: 'vente',
    NouvelleInstallation: 'nouvelle_installation',
    ControlePeriodique: 'controle_periodique',
    NouveauRaccordement: 'nouveau_raccordement'
  };
  var requestLineArray = Object.entries(matchTrackRequestType).find(function (element) {
    return element[0] === formContextValue;
  });
  return requestLineArray ? requestLineArray[1] : '';
}

/***/ }),

/***/ "./assets/js/pages/diagAss/hooks/useTrackAndRedirectErrors.ts":
/*!********************************************************************!*\
  !*** ./assets/js/pages/diagAss/hooks/useTrackAndRedirectErrors.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTrackAndRedirectErrors; });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/hooks/index */ "./assets/js/hooks/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants/index */ "./assets/js/constants/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function useTrackAndRedirectErrors(motifContact) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_index__WEBPACK_IMPORTED_MODULE_1__["useGA"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    nextLoader = _useState2[0],
    setNextLoader = _useState2[1];
  var handleClick = function handleClick() {
    track('DIAGASS_2', {
      motif_contact_client: motifContact
    });
    setNextLoader(true);
    window.location.href = _app_constants_index__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].CUSTOMER_SERVICE;
  };
  var next = {
    label: t('diagAss.error.contact_customer_service'),
    loader: nextLoader,
    align: 'right',
    onClick: handleClick,
    disabled: false
  };
  return next;
}

/***/ }),

/***/ "./assets/js/pages/diagAss/hooks/useVisitTypeValue.ts":
/*!************************************************************!*\
  !*** ./assets/js/pages/diagAss/hooks/useVisitTypeValue.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVisitTypeValue; });
/* harmony import */ var _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/hooks/useFormDependency */ "./assets/js/hooks/useFormDependency.ts");

function useVisitTypeValue(formVisitTypeValue) {
  return formVisitTypeValue === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_0__["VISITE_1"] ? 'premiere_visite' : formVisitTypeValue === _app_hooks_useFormDependency__WEBPACK_IMPORTED_MODULE_0__["CONTRE_VISITE_1"] ? 'contre_visite' : 'contre_visite_supplementaire';
}

/***/ }),

/***/ "./assets/js/pages/diagAss/index.tsx":
/*!*******************************************!*\
  !*** ./assets/js/pages/diagAss/index.tsx ***!
  \*******************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiagAssPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/background/BackgroundBubbles */ "./assets/js/components/background/BackgroundBubbles/index.tsx");
/* harmony import */ var _app_components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/Seo */ "./assets/js/components/Seo/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _diagAssContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./diagAssContext */ "./assets/js/pages/diagAss/diagAssContext.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducer */ "./assets/js/pages/diagAss/reducer.ts");
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Stepper */ "./assets/js/pages/diagAss/Stepper/index.tsx");
/* harmony import */ var _useSteps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useSteps */ "./assets/js/pages/diagAss/useSteps.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useGA/tags/diagass */ "./assets/js/hooks/useGA/tags/diagass.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var isConnected = window.tsme_data.isConnected;
var initialState = {
  displayList: true,
  displayError: false,
  currentStep: 0,
  showHistory: true,
  isRGPDValidation: false,
  steps: []
};
function DiagAssPage() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_12__["useGA"])(),
    track = _useGA.track;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["useIsMobile"])();
  var stepIndexes = Object(_useSteps__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(location.pathname === _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_0_START),
    _useState2 = _slicedToArray(_useState, 2),
    isStep0Start = _useState2[0],
    setStep0Start = _useState2[1];
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_9__["default"], initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var diagAssReducerMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return [state, dispatch];
  }, [state, dispatch]);
  var steps = diagAssReducerMemo[0].steps;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setStep0Start(location.pathname === _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_0_START);
  }, [location]);
  // useEffect(() => {
  //   if (history.location.pathname !== ROUTES.DIAG_ASS.STEP_0_START) {
  //     history.replace(ROUTES.DIAG_ASS.STEP_0_START);
  //   }
  // }, []);
  var hideList = function hideList() {
    dispatch({
      type: 'setDisplay',
      payload: false
    });
  };
  var displayError = function displayError() {
    dispatch({
      type: 'setDisplayError',
      payload: true
    });
  };
  var lockStep = function lockStep(stepIndexes) {
    if (Array.isArray(stepIndexes)) {
      var _iterator = _createForOfIteratorHelper(stepIndexes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var step = _step.value;
          dispatch({
            type: 'lockStep',
            payload: {
              index: step - 1
            }
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      dispatch({
        type: 'lockStep',
        payload: {
          index: stepIndexes - 1
        }
      });
    }
  };
  var deleteStep = function deleteStep(step) {
    var tmpSteps = _toConsumableArray(steps);
    if (tmpSteps[step - 1]) {
      delete tmpSteps[step - 1];
      dispatch({
        type: 'steps',
        payload: tmpSteps
      });
    }
  };
  var saveStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (path, values) {
    var summary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var findStep = stepIndexes.find(function (step) {
      return step.path === path;
    });
    if (findStep === null || findStep === void 0 ? void 0 : findStep.index) {
      var currentIndex = findStep.index - 1;
      var payload = _toConsumableArray(steps);
      var link = {
        label: t('edit'),
        onClick: function onClick() {
          var _typeInfoByRoute;
          var typeInfoByRoute = (_typeInfoByRoute = {}, _defineProperty(_typeInfoByRoute, _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_1_CREATE, _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_13__["ADRESSE_LOGEMENT"]), _defineProperty(_typeInfoByRoute, _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_2, _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_13__["TYPE_ASSAINISSEMENT"]), _defineProperty(_typeInfoByRoute, _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_3_CREATE, _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_13__["COORDO_INTERLOCUTEUR"]), _defineProperty(_typeInfoByRoute, _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_4, _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_13__["INFO_LOGEMENT"]), _defineProperty(_typeInfoByRoute, _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_5_WATER, _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_13__["TYPE_DIAGNOSTIC"]), _defineProperty(_typeInfoByRoute, _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_5_WATER_KO, _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_13__["TYPE_DIAGNOSTIC"]), _defineProperty(_typeInfoByRoute, _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_6, _app_hooks_useGA_tags_diagass__WEBPACK_IMPORTED_MODULE_13__["ADRESSE_FACTURATION"]), _typeInfoByRoute);
          var type_information = typeInfoByRoute[path];
          if (type_information) {
            track('DIAGASS_14', {
              type_information: type_information
            });
          }
          if (path === _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_1_CREATE && isConnected) {
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_1);
          } else if (path === _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_3_CREATE && isConnected) {
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_3);
          } else if (path === _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_5_WATER) {
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_5);
          } else if (path === _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_6) {
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DIAG_ASS.STEP_6, {
              showEdit: true
            });
          } else {
            history.push(path);
          }
        }
      };
      var defaultStep = {
        locked: false,
        summary: '',
        link: link,
        values: {}
      };
      var step = Object.assign(Object.assign({}, payload[currentIndex] || defaultStep), {
        summary: summary,
        link: link
      });
      step.values = Object.assign(step.values, values);
      dispatch({
        type: 'step',
        payload: {
          index: currentIndex,
          step: step
        }
      });
    }
  }, [steps]);
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState4 = _slicedToArray(_useState3, 2),
    exceedsValueField = _useState4[0],
    setExceedsValueField = _useState4[1];
  var initialValue = {
    state: diagAssReducerMemo[0],
    dispatch: diagAssReducerMemo[1],
    extraFn: {
      hideList: hideList,
      displayError: displayError,
      deleteStep: deleteStep,
      lockStep: lockStep,
      saveStep: saveStep
    },
    exceedsValueField: exceedsValueField,
    setExceedsValueField: setExceedsValueField
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_3__["BackgroundBubbles"], {
    id: "diagAssPage",
    type: "diag-ass"
  }, !isStep0Start && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Seo__WEBPACK_IMPORTED_MODULE_4__["Seo"], {
    robots: "noindex"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzTypographie"], {
    variant: "H1",
    size: isMobile ? 'L' : 'XL',
    weight: "black",
    color: "light",
    className: "text-center text-uppercase mb-4 mb-lg-5"
  }, t('diagAss.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_diagAssContext__WEBPACK_IMPORTED_MODULE_8__["default"], {
    initialValue: initialValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Stepper__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
}

/***/ }),

/***/ "./assets/js/pages/diagAss/reducer.ts":
/*!********************************************!*\
  !*** ./assets/js/pages/diagAss/reducer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diagAssReducer; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./assets/js/pages/diagAss/index.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function diagAssReducer(state, action) {
  var steps = _toConsumableArray(state.steps);
  switch (action.type) {
    case 'activeStep':
      return Object.assign(Object.assign({}, state), {
        currentStep: action.payload
      });
    case 'lockStep':
      var step = Object.assign({}, steps[action.payload.index]);
      step.locked = true;
      steps[action.payload.index] = step;
      return Object.assign(Object.assign({}, state), {
        steps: steps
      });
    case 'reset':
      return Object.assign({}, ___WEBPACK_IMPORTED_MODULE_0__["initialState"]);
    case 'setDisplay':
      return Object.assign(Object.assign({}, state), {
        displayList: action.payload
      });
    case 'setDisplayError':
      return Object.assign(Object.assign({}, state), {
        displayError: action.payload
      });
    case 'showHistory':
      return Object.assign(Object.assign({}, state), {
        showHistory: action.payload
      });
    case 'step':
      steps[action.payload.index] = action.payload.step;
      return Object.assign(Object.assign({}, state), {
        steps: steps
      });
    case 'steps':
      return Object.assign(Object.assign({}, state), {
        steps: action.payload
      });
    default:
      throw new Error('Not a reducer');
  }
}

/***/ }),

/***/ "./assets/js/pages/diagAss/useSteps.tsx":
/*!**********************************************!*\
  !*** ./assets/js/pages/diagAss/useSteps.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSteps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _Stepper_Step0_Start_Start__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Stepper/Step0/Start/Start */ "./assets/js/pages/diagAss/Stepper/Step0/Start/Start.tsx");
/* harmony import */ var _Stepper_Step0_Start_ProNotEligible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Stepper/Step0/Start/ProNotEligible */ "./assets/js/pages/diagAss/Stepper/Step0/Start/ProNotEligible.tsx");
/* harmony import */ var _Stepper_Step0_SelectionOrigin_SelectionOrigin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Stepper/Step0/SelectionOrigin/SelectionOrigin */ "./assets/js/pages/diagAss/Stepper/Step0/SelectionOrigin/SelectionOrigin.tsx");
/* harmony import */ var _Stepper_Step0_SelectionOrigin_ErrorRequestOrigin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Stepper/Step0/SelectionOrigin/ErrorRequestOrigin */ "./assets/js/pages/diagAss/Stepper/Step0/SelectionOrigin/ErrorRequestOrigin.tsx");
/* harmony import */ var _Stepper_Step0_OwnerLoginStep_OwnerLoginStep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Stepper/Step0/OwnerLoginStep/OwnerLoginStep */ "./assets/js/pages/diagAss/Stepper/Step0/OwnerLoginStep/OwnerLoginStep.tsx");
/* harmony import */ var _Stepper_Step0_OwnerLoginStep_ErrorNotOwner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Stepper/Step0/OwnerLoginStep/ErrorNotOwner */ "./assets/js/pages/diagAss/Stepper/Step0/OwnerLoginStep/ErrorNotOwner.tsx");
/* harmony import */ var _Stepper_Step1_AddressList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Stepper/Step1/AddressList */ "./assets/js/pages/diagAss/Stepper/Step1/AddressList.tsx");
/* harmony import */ var _Stepper_Step1_AddressCreate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Stepper/Step1/AddressCreate */ "./assets/js/pages/diagAss/Stepper/Step1/AddressCreate.tsx");
/* harmony import */ var _Stepper_Step2_SanitizeType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Stepper/Step2/SanitizeType */ "./assets/js/pages/diagAss/Stepper/Step2/SanitizeType.tsx");
/* harmony import */ var _Stepper_Step2_KoContract__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Stepper/Step2/KoContract */ "./assets/js/pages/diagAss/Stepper/Step2/KoContract.tsx");
/* harmony import */ var _Stepper_Step2_KoDigital__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Stepper/Step2/KoDigital */ "./assets/js/pages/diagAss/Stepper/Step2/KoDigital.tsx");
/* harmony import */ var _Stepper_Step3_ContactList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Stepper/Step3/ContactList */ "./assets/js/pages/diagAss/Stepper/Step3/ContactList.tsx");
/* harmony import */ var _Stepper_Step3_ContactCreate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Stepper/Step3/ContactCreate */ "./assets/js/pages/diagAss/Stepper/Step3/ContactCreate.tsx");
/* harmony import */ var _Stepper_Step4_ComplementaryInfos__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Stepper/Step4/ComplementaryInfos */ "./assets/js/pages/diagAss/Stepper/Step4/ComplementaryInfos.tsx");
/* harmony import */ var _Stepper_Step4_Step4Ko__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Stepper/Step4/Step4Ko */ "./assets/js/pages/diagAss/Stepper/Step4/Step4Ko.tsx");
/* harmony import */ var _app_pages_diagAss_Stepper_Step4_Step4KoMaxValue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/pages/diagAss/Stepper/Step4/Step4KoMaxValue */ "./assets/js/pages/diagAss/Stepper/Step4/Step4KoMaxValue.tsx");
/* harmony import */ var _Stepper_StepRgpdConfirm_StepRgpdConfirm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Stepper/StepRgpdConfirm/StepRgpdConfirm */ "./assets/js/pages/diagAss/Stepper/StepRgpdConfirm/StepRgpdConfirm.tsx");
/* harmony import */ var _Stepper_Step5_Step5__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Stepper/Step5/Step5 */ "./assets/js/pages/diagAss/Stepper/Step5/Step5.tsx");
/* harmony import */ var _Stepper_Step5_Step5Water__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Stepper/Step5/Step5Water */ "./assets/js/pages/diagAss/Stepper/Step5/Step5Water.tsx");
/* harmony import */ var _Stepper_Step5_Step5Ko__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Stepper/Step5/Step5Ko */ "./assets/js/pages/diagAss/Stepper/Step5/Step5Ko.tsx");
/* harmony import */ var _Stepper_Step5_Step5WaterKo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Stepper/Step5/Step5WaterKo */ "./assets/js/pages/diagAss/Stepper/Step5/Step5WaterKo.tsx");
/* harmony import */ var _Stepper_Step6_Step6__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Stepper/Step6/Step6 */ "./assets/js/pages/diagAss/Stepper/Step6/Step6.tsx");
/* harmony import */ var _Stepper_StepConfirm_StepConfirm__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Stepper/StepConfirm/StepConfirm */ "./assets/js/pages/diagAss/Stepper/StepConfirm/StepConfirm.tsx");
/* harmony import */ var _Stepper_StepEnd_StepEnd__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Stepper/StepEnd/StepEnd */ "./assets/js/pages/diagAss/Stepper/StepEnd/StepEnd.tsx");
/* harmony import */ var _Stepper_TechnicalError__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Stepper/TechnicalError */ "./assets/js/pages/diagAss/Stepper/TechnicalError/index.tsx");






























function useSteps() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    transform = _useInterweave.transform;
  return [{
    displayBadge: false,
    step: _Stepper_Step0_Start_Start__WEBPACK_IMPORTED_MODULE_5__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_0_START,
    title: t('diagAss.step.step0.start.title'),
    subtitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
      content: t('diagAss.step.step0.start.body')
    })
  }, {
    displayBadge: false,
    step: _Stepper_Step0_Start_ProNotEligible__WEBPACK_IMPORTED_MODULE_6__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_0_PRO_NOT_ELIGIBLE,
    error: true
  }, {
    displayBadge: false,
    step: _Stepper_Step0_SelectionOrigin_SelectionOrigin__WEBPACK_IMPORTED_MODULE_7__["default"],
    title: t('diagAss.step.step0.selection_origin.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_0_SELECTION_ORIGIN,
    subtitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
      content: t('diagAss.step.step0.selection_origin.body')
    })
  }, {
    displayBadge: false,
    step: _Stepper_Step0_SelectionOrigin_ErrorRequestOrigin__WEBPACK_IMPORTED_MODULE_8__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_0_ERROR_REQUEST_ORIGIN,
    error: true
  }, {
    displayBadge: false,
    step: _Stepper_Step0_OwnerLoginStep_OwnerLoginStep__WEBPACK_IMPORTED_MODULE_9__["default"],
    title: t('diagAss.step.step0.owner_login.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_0_OWNER_LOGIN,
    index: 0
  }, {
    displayBadge: false,
    step: _Stepper_Step0_OwnerLoginStep_ErrorNotOwner__WEBPACK_IMPORTED_MODULE_10__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_0_ERROR_NOT_OWNER,
    error: true
  }, {
    displayBadge: true,
    step: _Stepper_Step1_AddressList__WEBPACK_IMPORTED_MODULE_11__["default"],
    index: 1,
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_1
  }, {
    displayBadge: true,
    step: _Stepper_Step1_AddressCreate__WEBPACK_IMPORTED_MODULE_12__["default"],
    index: 1,
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_1_CREATE
  }, {
    showHistory: true,
    displayBadge: true,
    step: _Stepper_Step2_SanitizeType__WEBPACK_IMPORTED_MODULE_13__["default"],
    index: 2,
    title: t('diagAss.step.step2.sanitize.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_2
  }, {
    displayBadge: true,
    step: _Stepper_Step2_KoContract__WEBPACK_IMPORTED_MODULE_14__["default"],
    title: t('diagAss.step.step3.list.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_2_KO_CONTRACT,
    error: true
  }, {
    displayBadge: true,
    step: _Stepper_Step2_KoDigital__WEBPACK_IMPORTED_MODULE_15__["default"],
    title: t('diagAss.step.step3.list.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_2_KO_DIGITAL,
    error: true
  }, {
    showHistory: true,
    displayBadge: true,
    step: _Stepper_Step3_ContactList__WEBPACK_IMPORTED_MODULE_16__["default"],
    index: 3,
    title: t('diagAss.step.step3.list.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_3
  }, {
    showHistory: true,
    displayBadge: true,
    step: _Stepper_Step3_ContactCreate__WEBPACK_IMPORTED_MODULE_17__["default"],
    index: 3,
    title: t('diagAss.step.step3.create.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_3_CREATE
  }, {
    displayBadge: false,
    step: _Stepper_StepRgpdConfirm_StepRgpdConfirm__WEBPACK_IMPORTED_MODULE_21__["default"],
    title: t('diagAss.step.rgpd_confirm.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_RGPD_CONFIRM
  }, {
    showHistory: true,
    displayBadge: true,
    step: _Stepper_Step4_ComplementaryInfos__WEBPACK_IMPORTED_MODULE_18__["default"],
    index: 4,
    title: t('diagAss.step.step4.complementary_infos.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_4
  }, {
    displayBadge: false,
    step: _Stepper_Step4_Step4Ko__WEBPACK_IMPORTED_MODULE_19__["default"],
    title: t('diagAss.step.step4.complementary_infos.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_4_KO,
    error: true
  }, {
    displayBadge: false,
    step: _app_pages_diagAss_Stepper_Step4_Step4KoMaxValue__WEBPACK_IMPORTED_MODULE_20__["default"],
    title: t('diagAss.step.step4.complementary_infos.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_4_KO_MAX_VALUE,
    error: true
  }, {
    showHistory: true,
    displayBadge: true,
    step: _Stepper_Step5_Step5__WEBPACK_IMPORTED_MODULE_22__["default"],
    index: 5,
    title: t('diagAss.step.step5.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_5
  }, {
    displayBadge: false,
    step: _Stepper_Step5_Step5Water__WEBPACK_IMPORTED_MODULE_23__["default"],
    index: 5,
    title: t('diagAss.step.step5.water.title'),
    subtitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
      content: t('diagAss.step.step5.water.body'),
      transform: transform
    }),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_5_WATER
  }, {
    displayBadge: false,
    step: _Stepper_Step5_Step5Ko__WEBPACK_IMPORTED_MODULE_24__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_5_KO,
    error: true
  }, {
    displayBadge: false,
    step: _Stepper_Step5_Step5WaterKo__WEBPACK_IMPORTED_MODULE_25__["default"],
    title: t('diagAss.step.step5.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_5_WATER_KO,
    error: true
  }, {
    showHistory: true,
    index: 6,
    displayBadge: true,
    step: _Stepper_Step6_Step6__WEBPACK_IMPORTED_MODULE_26__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_6
  }, {
    displayBadge: false,
    step: _Stepper_StepConfirm_StepConfirm__WEBPACK_IMPORTED_MODULE_27__["default"],
    title: t('diagAss.step.confirm.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_CONFIRM
  }, {
    displayBadge: false,
    step: _Stepper_StepEnd_StepEnd__WEBPACK_IMPORTED_MODULE_28__["default"],
    title: t('diagAss.step.end.title'),
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.STEP_END
  }, {
    step: _Stepper_TechnicalError__WEBPACK_IMPORTED_MODULE_29__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].DIAG_ASS.TECHNICAL_ERROR
  }];
}

/***/ })

}]);