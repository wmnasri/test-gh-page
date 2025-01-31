(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./assets/img/clickable-white.svg":
/*!****************************************!*\
  !*** ./assets/img/clickable-white.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/clickable-white.svg");

/***/ }),

/***/ "./assets/img/clickable.svg":
/*!**********************************!*\
  !*** ./assets/img/clickable.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/clickable.svg");

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

/***/ "./assets/js/pages/invoice-detail/DetailBlock.tsx":
/*!********************************************************!*\
  !*** ./assets/js/pages/invoice-detail/DetailBlock.tsx ***!
  \********************************************************/
/*! exports provided: imgPosition, versoContent, DetailBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgPosition", function() { return imgPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versoContent", function() { return versoContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailBlock", function() { return DetailBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _img_clickable_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @img/clickable.svg */ "./assets/img/clickable.svg");
/* harmony import */ var _img_clickable_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @img/clickable-white.svg */ "./assets/img/clickable-white.svg");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var imgPosition = {
  CONTACTS: {
    width: '32.2%',
    left: '1.2%',
    top: ['10.1', '7.6']
  },
  FACTURATION: {
    width: '62%',
    right: '4.65%',
    top: ['27.6', '25.5']
  },
  PRIX_EAU: {
    width: '31%',
    top: ['46.9', '46.9'],
    left: '33.4%'
  },
  CONSOMMATION: {
    width: '31%',
    right: '3.3%',
    top: ['46.9', '46.9']
  },
  SOLDE_ANTERIEUR: {
    width: '31%',
    right: '3.3%',
    top: ['46.9', '46.9']
  },
  INFOS_BANCAIRES: {
    width: '33%',
    right: '30%',
    top: ['72.45', '72.45']
  },
  INFOS_CLIENTS: {
    width: '24.1%',
    top: ['2.9', '1.2'],
    right: '5%'
  },
  PROCHAINES_ETAPES: {
    width: '24.7%',
    top: ['64.2', '62.5'],
    right: '2.9%'
  },
  VOTRE_SOLDE_ANTERIEUR: {
    width: '28.8%',
    top: ['72.45', '72.45'],
    left: '6.7%'
  },
  HISTORIQUE_FACTURE: {
    width: '28.8%',
    top: ['72.45', '72.45'],
    left: '6.7%'
  },
  ECHEANCIER: {
    width: '26%',
    top: ['72.45', '72.45'],
    right: '2.2%'
  },
  TIP_SEPA: {
    width: '79.5%',
    top: ['69.45', '70.85'],
    right: '2.9%'
  },
  INFOS_COMPTEUR: {
    width: '72.2%',
    top: ['2.4', '-1'],
    right: '2.35%'
  }
};
var versoContent = ['MONTANT_EAU_POTABLE', 'MONTANT_EAU_USEE', 'MONTANT_ORGANISMES_PUBLICS', 'DETAIL_PRESTATIONS'];
var DetailBlockRender = function DetailBlockRender(_ref) {
  var className = _ref.className,
    title = _ref.title,
    children = _ref.children,
    onClick = _ref.onClick,
    type = _ref.type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "block-".concat(String(type).toLowerCase()),
    className: 'cursor-pointer ' + className,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TouchPointBtn, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-container text-center py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H5",
    size: "L",
    className: "text-uppercase text-white mb-0"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detail-img-container"
  }, children));
};
var DetailBlock = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(DetailBlockRender)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  img {\n    width: 100%;\n  }\n\n  @media screen and (min-width: 992px) {\n    &:hover {\n      .title-container {\n        background-color: var(--expert-blue);\n      }\n      .detail-img-container {\n        filter: grayscale(0);\n      }\n      .touch-point-btn {\n        background-color: var(--blue-1);\n        .tpb-icon-dark {\n          display: none;\n        }\n        .tpb-icon-white {\n          display: block;\n        }\n      }\n      border-color: var(--expert-blue);\n    }\n  }\n\n  .title-container {\n    width: 100%;\n    border-radius: 16px 16px 0 0;\n    background-color: var(--blue-1);\n    @media screen and (max-width: 992px) {\n      display: none;\n    }\n  }\n\n  .detail-img-container {\n    width: 100%;\n    border: 2px solid var(--blue-1);\n    border-radius: 0 0 16px 16px;\n    overflow: hidden;\n    filter: grayscale(1);\n  }\n"])), function (props) {
  var type = props.type;
  if (versoContent.includes(type)) return;
  var pos = imgPosition[type];
  var defaultPos = {
    position: 'absolute',
    top: "".concat(pos.top[0], "%"),
    '@media screen and (min-width: 992px)': {
      top: "".concat(pos.top[1], "%")
    }
  };
  return Object.assign(Object.assign({}, pos), defaultPos);
});
var TouchPointRender = function TouchPointRender(_ref2) {
  var className = _ref2.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: 'touch-point-btn ' + className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_clickable_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "tpb-icon tpb-icon-dark",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_clickable_white_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    className: "tpb-icon tpb-icon-white",
    alt: ""
  }));
};
var TouchPointBtn = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(TouchPointRender)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background-color: white;\n  position: absolute;\n  top: -16px;\n  left: -16px;\n  z-index: 1;\n\n  @media screen and (min-width: 992px) {\n    width: 64px;\n    height: 64px;\n    top: -32px;\n    left: -32px;\n  }\n\n  .tpb-icon {\n    width: 16px;\n    @media screen and (min-width: 992px) {\n      width: 32px;\n    }\n  }\n\n  .tpb-icon-white {\n    display: none;\n  }\n  &:hover {\n    .tpb-icon-dark {\n      display: none;\n    }\n    .tpb-icon-white {\n      display: block;\n    }\n  }\n"])));

/***/ }),

/***/ "./assets/js/pages/invoice-detail/DetailHeader.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/invoice-detail/DetailHeader.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/Skeleton */ "./assets/js/components/Skeleton/index.tsx");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function DetailHeader(_ref) {
  var description = _ref.description,
    handleSwitchContent = _ref.handleSwitchContent,
    isLoading = _ref.isLoading,
    buttons = _ref.buttons,
    active = _ref.active;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    previousLoader = _useState2[0],
    setPreviousLoader = _useState2[1];
  var handlePreviousClick = function handlePreviousClick() {
    setPreviousLoader(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].PEDAGO_FACTURE);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "invoice-detail-title-block",
    className: "invoice-detail-title-block tsme-container bg-white mw-100 m-0 px-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container row py-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    variant: "text",
    onClick: handlePreviousClick,
    icon: "keyboard-arrow-left",
    alignIcon: "left",
    className: "back-btn pl-0 mb-3 mb-lg-0",
    loader: previousLoader,
    "data-cy": "invoice-detail-return-btn"
  }, t('go_back')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H1",
    size: isMobile ? 'L' : 'XL',
    weight: "black",
    className: "text-uppercase text-center mx-auto mb-4"
  }, t('pedagoFacture.invoiceDetails.title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters flex-column flex-md-row justify-content-md-center mb-4"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: 'invoice-detail-btn'
  }) : buttons.map(function (_ref2, index) {
    var title = _ref2.title,
      icon = _ref2.icon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailInvoiceButton, {
      key: title,
      active: active === index,
      className: "d-flex align-items-center shadow",
      handleClick: function handleClick() {
        return handleSwitchContent(index);
      },
      icon: icon
    }, title);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    className: "w-auto mx-auto text-center mb-2"
  }, description));
}
var ButtonRender = function ButtonRender(_ref3) {
  var className = _ref3.className,
    children = _ref3.children,
    handleClick = _ref3.handleClick,
    icon = _ref3.icon;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__["useIsMobile"])();
  var classes = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('p-3 px-lg-4 mb-3 mx-lg-3', {
    'col-12': isMobile
  }, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classes,
    onClick: handleClick,
    "data-cy": "invoice-select-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "detail-icon-container d-flex align-items-center justify-content-center"
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: 24,
    height: 24,
    src: icon.src,
    alt: icon.alt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "body",
    size: isMobile ? 'M' : 'L',
    weight: "regular",
    className: "mb-0 pl-3"
  }, children));
};
var DetailInvoiceButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(ButtonRender)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  border-radius: 8px;\n  border: 0px;\n  background-color: ", ";\n  color: ", ";\n\n  .detail-icon-container {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: ", ";\n    color: ", ";\n  }\n"])), function (_ref4) {
  var active = _ref4.active;
  return active ? _app_constants__WEBPACK_IMPORTED_MODULE_8__["primaryDark"] : _app_constants__WEBPACK_IMPORTED_MODULE_8__["white"];
}, function (_ref5) {
  var active = _ref5.active;
  return active ? _app_constants__WEBPACK_IMPORTED_MODULE_8__["white"] : _app_constants__WEBPACK_IMPORTED_MODULE_8__["primaryDark"];
}, function (_ref6) {
  var active = _ref6.active;
  return active ? _app_constants__WEBPACK_IMPORTED_MODULE_8__["white"] : _app_constants__WEBPACK_IMPORTED_MODULE_8__["gray"];
}, _app_constants__WEBPACK_IMPORTED_MODULE_8__["primaryDark"]);

/***/ }),

/***/ "./assets/js/pages/invoice-detail/DetailPages.tsx":
/*!********************************************************!*\
  !*** ./assets/js/pages/invoice-detail/DetailPages.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailPages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DetailBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailBlock */ "./assets/js/pages/invoice-detail/DetailBlock.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./assets/js/pages/invoice-detail/Modal.tsx");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function DetailPages(_ref) {
  var clientContext = _ref.clientContext,
    recto = _ref.recto,
    verso = _ref.verso,
    activeIndex = _ref.activeIndex;
  var _a, _b, _c, _d, _e;
  var infosCompteur = ((_a = verso === null || verso === void 0 ? void 0 : verso.items) === null || _a === void 0 ? void 0 : _a.find(function (item) {
    return item.type === 'INFOS_COMPTEUR';
  })) || {};
  var versoFixed = (_b = verso === null || verso === void 0 ? void 0 : verso.items) === null || _b === void 0 ? void 0 : _b.filter(function (item) {
    return item.type !== 'INFOS_COMPTEUR';
  });
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    track = _useGA.track;
  var findByType = function findByType(item) {
    return item.type === type;
  };
  var findInRecto = (_c = recto === null || recto === void 0 ? void 0 : recto.items) === null || _c === void 0 ? void 0 : _c.find(findByType);
  var findInVerso = (_d = verso === null || verso === void 0 ? void 0 : verso.items) === null || _d === void 0 ? void 0 : _d.find(findByType);
  var _ref2 = findInRecto || findInVerso || {},
    modal = _ref2.modal;
  var showModal = type !== null;
  var _onClick = function onClick(type) {
    track('PEDAGO_6', {
      cas_client: clientContext,
      nature_facture: "Facture_".concat(activeIndex + 1),
      nom_modale: type
    });
    setType(type);
  };
  var handleCloseModal = function handleCloseModal() {
    setType(null);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, recto && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "invoice-detail-page-recto",
    className: "recto paper w-100 position-relative mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: recto.fond[0].src,
    alt: recto.fond[0].alt,
    width: "100%"
  }), (_e = recto === null || recto === void 0 ? void 0 : recto.items) === null || _e === void 0 ? void 0 : _e.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailBlock__WEBPACK_IMPORTED_MODULE_1__["DetailBlock"], {
      title: item.title,
      type: item.type,
      key: item.type,
      onClick: function onClick() {
        return _onClick(item.type);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.imgPreview.src,
      alt: item.imgPreview.alt,
      width: "100%"
    }));
  })), verso && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "invoice-detail-page-verso",
    className: "verso paper w-100 position-relative mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: verso.fond[0].src,
    alt: verso.fond[0].alt,
    width: "100%"
  }), Object.keys(infosCompteur || {}).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailBlock__WEBPACK_IMPORTED_MODULE_1__["DetailBlock"], {
    title: infosCompteur.title,
    type: infosCompteur.type,
    key: infosCompteur.type,
    onClick: function onClick() {
      return _onClick(infosCompteur.type);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: infosCompteur.imgPreview.src,
    alt: infosCompteur.imgPreview.alt,
    width: "100%"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fixed-content"
  }, versoFixed === null || versoFixed === void 0 ? void 0 : versoFixed.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailBlock__WEBPACK_IMPORTED_MODULE_1__["DetailBlock"], {
      title: item.title,
      type: item.type,
      key: item.type,
      onClick: function onClick() {
        return _onClick(item.type);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.imgPreview.src,
      alt: item.imgPreview.alt,
      width: "100%"
    }));
  }))), type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, modal, {
    showModal: showModal,
    handleCloseModal: handleCloseModal
  })));
}

/***/ }),

/***/ "./assets/js/pages/invoice-detail/Modal.tsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/invoice-detail/Modal.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _invoice_detail_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoice-detail.scss */ "./assets/js/pages/invoice-detail/invoice-detail.scss");
/* harmony import */ var _invoice_detail_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_invoice_detail_scss__WEBPACK_IMPORTED_MODULE_7__);








function DetailModal(props) {
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__["useIsMobile"])();
  var title = props.title,
    description = props.description,
    imgDesktop = props.imgDesktop,
    imgMobile = props.imgMobile,
    details = props.details,
    handleCloseModal = props.handleCloseModal,
    showModal = props.showModal;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
    t = _useTranslation.t;
  var src = isMobile ? imgMobile === null || imgMobile === void 0 ? void 0 : imgMobile.src : imgDesktop.src;
  var alt = isMobile ? imgMobile === null || imgMobile === void 0 ? void 0 : imgMobile.alt : imgDesktop.alt;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzModal"], {
    className: "invoice-detail-modal",
    show: showModal,
    handleClose: handleCloseModal,
    size: "lg",
    backdrop: true,
    centered: true,
    scrollable: true,
    border: "smooth",
    fullscreen: "md",
    title: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L",
    className: "mb-4"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-0 mb-2 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    alt: alt,
    className: "mw-100 mx-auto"
  })), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-0 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    noWrap: true,
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-0"
  }, details.map(function (detail, key) {
    var detailItemClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('invoice-detail-item', {
      'border-top border-1 border-gray-200': key > 0
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InvoiceDetailItem, Object.assign({
      key: key,
      iteration: key + 1,
      className: detailItemClasses
    }, detail));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: handleCloseModal
  }, t('pedagoFacture.board.modal.btn'))));
}
var InvoiceDetailItem = function InvoiceDetailItem(_ref) {
  var title = _ref.title,
    description = _ref.description,
    image = _ref.image,
    className = _ref.className,
    iteration = _ref.iteration;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    transform = _useInterweave.transform;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-start py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "step-number bg-blue-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H5",
    weight: "bold",
    size: "L",
    className: "text-white mb-0"
  }, iteration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    weight: "bold",
    className: "text-dark mb-0"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invoice-detail-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    noWrap: true,
    transform: transform,
    content: description
  })), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 pt-3 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image.src,
    alt: image.alt,
    className: "w-100 w-lg-50"
  })))));
};

/***/ }),

/***/ "./assets/js/pages/invoice-detail/index.tsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/invoice-detail/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InvoiceDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _DetailPages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailPages */ "./assets/js/pages/invoice-detail/DetailPages.tsx");
/* harmony import */ var _DetailHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DetailHeader */ "./assets/js/pages/invoice-detail/DetailHeader.tsx");
/* harmony import */ var _invoice_detail_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invoice-detail.scss */ "./assets/js/pages/invoice-detail/invoice-detail.scss");
/* harmony import */ var _invoice_detail_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_invoice_detail_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function InvoiceDetail() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('InvoiceDetail', function () {
      return Object(_app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_5__["default"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["API"].INVOICE_DETAIL);
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_10__["default"])(),
    track = _useGA.track;
  var _ref = data ? data === null || data === void 0 ? void 0 : data.data : Object(_app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_5__["getInitialData"])(),
    content = _ref.content;
  var buttons = ((content === null || content === void 0 ? void 0 : content.pedagoInvoices) || []).map(function (_ref2) {
    var title = _ref2.title,
      icon = _ref2.icon;
    return {
      title: title,
      icon: icon
    };
  });
  var hasPedagoInvoices = !isLoading && (content === null || content === void 0 ? void 0 : content.pedagoInvoices) && (content === null || content === void 0 ? void 0 : content.pedagoInvoices.length) > 0;
  var _ref3 = hasPedagoInvoices ? content === null || content === void 0 ? void 0 : content.pedagoInvoices[active] : {},
    _ref3$description = _ref3.description,
    description = _ref3$description === void 0 ? '' : _ref3$description;
  var handleSwitchContent = function handleSwitchContent(index) {
    track('PEDAGO_5', {
      cas_client: content.clientContext,
      nature_facture: "Facture_".concat(index + 1)
    });
    setActive(index);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "p-0",
    fullscreen: true,
    tag: "main",
    id: "pedago-facture-invoice-detail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    active: active,
    isLoading: isLoading,
    handleSwitchContent: handleSwitchContent,
    description: description,
    buttons: buttons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "invoice-detail-pages",
    "data-cy": "invoice-details-pages",
    className: "px-3 px-lg-0"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzSpinner"], null)) : !hasPedagoInvoices ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "mt-2"
  }, t('pedagoFacture.invoiceDetails.noContent')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "mt-2"
  }, t('pedagoFacture.invoiceDetails.zoneToDetail')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailPages__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
    clientContext: content === null || content === void 0 ? void 0 : content.clientContext
  }, content === null || content === void 0 ? void 0 : content.pedagoInvoices[active].content, {
    activeIndex: active
  })))));
}

/***/ }),

/***/ "./assets/js/pages/invoice-detail/invoice-detail.scss":
/*!************************************************************!*\
  !*** ./assets/js/pages/invoice-detail/invoice-detail.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);