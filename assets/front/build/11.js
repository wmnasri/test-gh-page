(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/img/add-circle.svg":
/*!***********************************!*\
  !*** ./assets/img/add-circle.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/add-circle.svg");

/***/ }),

/***/ "./assets/img/pedago_ellipse_lg.svg":
/*!******************************************!*\
  !*** ./assets/img/pedago_ellipse_lg.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/pedago_ellipse_lg.svg");

/***/ }),

/***/ "./assets/img/pedago_ellipse_sm.svg":
/*!******************************************!*\
  !*** ./assets/img/pedago_ellipse_sm.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/pedago_ellipse_sm.svg");

/***/ }),

/***/ "./assets/js/components/Timeline/TimelineItem.tsx":
/*!********************************************************!*\
  !*** ./assets/js/components/Timeline/TimelineItem.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timeline_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.scss */ "./assets/js/components/Timeline/timeline.scss");
/* harmony import */ var _timeline_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timeline_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__);







function TimelineItem(_ref) {
  var title = _ref.title,
    description = _ref.description,
    icon = _ref.icon;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__["useIsMobile"])();
  var cardContentClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    'd-flex align-items-start': !isMobile
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item ml-4 mb-3 p-3 py-lg-4 pl-lg-4 pr-lg-5 rounded-2 border border-1 border-blue-02 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cardContentClassNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardContent, {
    icon: icon,
    title: title,
    description: description
  })));
}
var CardContent = function CardContent(_ref2) {
  var icon = _ref2.icon,
    title = _ref2.title,
    description = _ref2.description;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    transform = _useInterweave.transform;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__["useIsMobile"])();
  if (isMobile) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center pb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineIcon, {
      icon: icon
    }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
      variant: "H5",
      size: "L",
      className: "text-uppercase mb-0 mb-lg-2"
    }, title)), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["default"], {
      transform: transform,
      content: description,
      noWrap: true
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineIcon, {
    icon: icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-detail position-relative pl-lg-4"
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
    variant: "H5",
    size: "L",
    className: "text-uppercase mb-0 mb-lg-2"
  }, title), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["default"], {
    transform: transform,
    content: description,
    noWrap: true
  })));
};
var TimelineIcon = function TimelineIcon(_ref3) {
  var icon = _ref3.icon;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__["useIsMobile"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr-3 mr-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icon.src,
    alt: icon.alt,
    style: {
      width: isMobile ? 32 : 48,
      height: isMobile ? 32 : 48
    }
  }));
};

/***/ }),

/***/ "./assets/js/components/Timeline/index.tsx":
/*!*************************************************!*\
  !*** ./assets/js/components/Timeline/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timeline_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.scss */ "./assets/js/components/Timeline/timeline.scss");
/* harmony import */ var _timeline_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timeline_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimelineItem */ "./assets/js/components/Timeline/TimelineItem.tsx");



function Timeline(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline col-12 col-lg-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container p-0 position-relative"
  }, items.map(function (data, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimelineItem__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, data, {
      key: key
    }));
  })));
}

/***/ }),

/***/ "./assets/js/components/Timeline/timeline.scss":
/*!*****************************************************!*\
  !*** ./assets/js/components/Timeline/timeline.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/background/BackgroundWave/background-wave.scss":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/background/BackgroundWave/background-wave.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/background/BackgroundWave/index.tsx":
/*!******************************************************************!*\
  !*** ./assets/js/components/background/BackgroundWave/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundWave; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _background_wave_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background-wave.scss */ "./assets/js/components/background/BackgroundWave/background-wave.scss");
/* harmony import */ var _background_wave_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_background_wave_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_pedago_ellipse_sm_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @img/pedago_ellipse_sm.svg */ "./assets/img/pedago_ellipse_sm.svg");
/* harmony import */ var _img_pedago_ellipse_lg_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @img/pedago_ellipse_lg.svg */ "./assets/img/pedago_ellipse_lg.svg");







function BackgroundWave(_ref) {
  var children = _ref.children,
    _ref$bgColor = _ref.bgColor,
    bgColor = _ref$bgColor === void 0 ? '#f3f8ff' : _ref$bgColor;
  var isApple = Object(_app_services_Utils__WEBPACK_IMPORTED_MODULE_2__["isAppleDevice"])();
  var backgroundClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()('background-wave w-100', {
    hidden: isApple,
    clip: !isApple
  });
  var backgroundWaveContainer = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
    maskImage: "url(".concat(_img_pedago_ellipse_sm_svg__WEBPACK_IMPORTED_MODULE_5__["default"], ")"),
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    maskSize: 'cover',
    WebkitMaskImage: "url(".concat(_img_pedago_ellipse_sm_svg__WEBPACK_IMPORTED_MODULE_5__["default"], ")"),
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    WebkitMaskSize: 'cover',
    position: 'absolute',
    backgroundColor: bgColor,
    width: 768,
    height: 730,
    bottom: 300,
    left: '50%',
    transform: 'translateX(-50%)',
    '@media (min-width: 768px)': {
      width: 992
    },
    '@media (min-width: 992px)': {
      maskImage: "url(".concat(_img_pedago_ellipse_lg_svg__WEBPACK_IMPORTED_MODULE_6__["default"], ")"),
      WebkitMaskImage: "url(".concat(_img_pedago_ellipse_lg_svg__WEBPACK_IMPORTED_MODULE_6__["default"], ")"),
      width: '100%',
      height: 300,
      top: '-5rem'
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: backgroundClassNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: backgroundWaveContainer
  }), children);
}

/***/ }),

/***/ "./assets/js/ez-components/ModuleCardFaq/index.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/ez-components/ModuleCardFaq/index.tsx ***!
  \*********************************************************/
/*! exports provided: CardFaq, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFaq", function() { return CardFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModuleCardFaq; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _img_add_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @img/add-circle.svg */ "./assets/img/add-circle.svg");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_pages_pedago_facture_PedagoModalContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/pages/pedago-facture/PedagoModalContent */ "./assets/js/pages/pedago-facture/PedagoModalContent.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var CardFaq = function CardFaq(_ref) {
  var icon = _ref.icon,
    sub_description = _ref.sub_description,
    description = _ref.description,
    handleClick = _ref.handleClick;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    transform = _useInterweave.transform;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-faq rounded-2 bg-white py-4 px-3 px-lg-4 w-100 d-flex flex-column text-center align-items-center mb-3 mb-lg-0 text-decoration-none position-relative cursor-pointer",
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-absolute",
    style: {
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_add_circle_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  })), icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-2 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icon.src,
    alt: icon.alt,
    style: {
      width: 40,
      height: 40
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-contact-faq truncated-text"
  }, description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    variant: "H4",
    size: "L",
    weight: "medium"
  }, description), sub_description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-faq-sub_description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["default"], {
    transform: transform,
    content: sub_description,
    noWrap: true,
    noHtml: true
  }))));
};
function ModuleCardFaq(_ref2) {
  var title = _ref2.title,
    items = _ref2.items,
    openCard = _ref2.openCard;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedInfoCard = _useState2[0],
    setSelectedInfoCard = _useState2[1];
  var showModal = selectedInfoCard !== null;
  var onClick = function onClick(data) {
    var _ref3 = data || {},
      modalContent = _ref3.modalContent;
    if (Object.keys(modalContent).length > 0) {
      if (openCard) {
        openCard(modalContent);
      }
      setSelectedInfoCard(data);
    }
  };
  var handleCloseModal = function handleCloseModal() {
    setSelectedInfoCard(null);
  };
  var _ref4 = selectedInfoCard || {},
    modalContent = _ref4.modalContent;
  var _ref5 = modalContent || {},
    type = _ref5.type;
  var isInfoModal = type ? _app_constants__WEBPACK_IMPORTED_MODULE_8__["infoModalTypes"].includes(type) : false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container mx-auto position-relative pt-3 pt-lg-4 px-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    variant: "H5",
    size: "L",
    weight: "bold",
    className: "text-center text-uppercase mb-3"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters justify-content-center"
  }, items.map(function (data, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-4 px-lg-2 d-flex align-items-stretch",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardFaq, Object.assign({}, data, {
      handleClick: function handleClick() {
        return onClick(data);
      }
    })));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzModal"], {
    show: showModal,
    handleClose: handleCloseModal,
    size: isInfoModal ? 'lg' : 'xl',
    backdrop: true,
    centered: true,
    scrollable: true,
    border: "smooth",
    fullscreen: "md",
    title: "",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])({
      'extra-infos': isInfoModal
    })
  }, selectedInfoCard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_pedago_facture_PedagoModalContent__WEBPACK_IMPORTED_MODULE_6__["PedagoModalContent"], Object.assign({}, selectedInfoCard)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: handleCloseModal,
    id: "go-further-modal-close-btn"
  }, t('pedagoFacture.board.modal.closeBtn')))));
}

/***/ }),

/***/ "./assets/js/pages/pedago-facture/HighlightBlock.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/pedago-facture/HighlightBlock.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TipBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TipBlock */ "./assets/js/pages/pedago-facture/TipBlock.tsx");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function HighlightBlock(_ref) {
  var subtitle = _ref.subtitle,
    text = _ref.text,
    textTip = _ref.textTip,
    infoItems = _ref.infoItems,
    keyNumber = _ref.keyNumber,
    keyNumberText = _ref.keyNumberText,
    text1 = _ref.text1,
    text2 = _ref.text2,
    text3 = _ref.text3,
    img = _ref.img,
    legend = _ref.legend,
    className = _ref.className;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    transform = _useInterweave.transform;
  var highlightBlockClasses = classnames__WEBPACK_IMPORTED_MODULE_6___default()('highlight-block rounded-3 bg-white shadow-sm p-3 d-flex flex-column', {
    'h-100': !isMobile
  }, className);
  var textContentDisplay = text && !img;
  var diagramContentDisplay = img && text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: highlightBlockClasses
  }, subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    size: "XL",
    weight: "bold",
    className: "text-dark mb-4"
  }, subtitle), textContentDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "highlight-text mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_5__["Markup"], {
    noWrap: true,
    transform: transform,
    content: text
  })), diagramContentDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img.src,
    alt: img.alt,
    className: "mr-3",
    style: {
      width: 48,
      height: 48
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "highlight-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_5__["Markup"], {
    noWrap: true,
    transform: transform,
    content: text
  }))), infoItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap flex-column flex-lg-row w-100 justify-content-around"
  }, infoItems.map(function (item, key) {
    var img = item.img,
      text = item.text,
      title = item.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: "pedago-info-item text-center py-4 py-lg-0 px-3 position-relative",
      style: {
        minWidth: 174,
        maxWidth: isMobile ? '100%&' : 174
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: img.src,
      alt: img.alt,
      className: "mb-3",
      style: {
        width: 48,
        height: 48
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "body",
      size: "M",
      weight: "regular",
      className: "text-dark mb-1"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_5__["Markup"], {
      noWrap: true,
      transform: transform,
      content: text
    }));
  })), keyNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 d-flex flex-row no-gutters align-items-baseline mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    tag: "span",
    className: "key-number-container text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    weight: "bold",
    className: "key-number text-uppercase mb-0"
  }, keyNumber), keyNumberText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold",
    className: "key-number-text pl-2 mb-0"
  }, keyNumberText))), text1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "payment-chrono text-center mb-3"
  }, text1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    size: "XL",
    className: "text-dark mb-2"
  }, text1), text2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L",
    tag: "p",
    className: "mb-2"
  }, text2), text3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    size: "XL",
    className: "text-dark mb-0"
  }, text3)), textTip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TipBlock__WEBPACK_IMPORTED_MODULE_7__["TipBlock"], {
    content: textTip
  }), legend && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-center justify-content-center h-100 w-100"
  }, img && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img.src,
    alt: img.alt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 px-0 pl-lg-4"
  }, legend.map(function (item, key) {
    var legendItemClasses = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'border-top border-1 border-gray-200': key > 0
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: legendItemClasses
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LegendItem, Object.assign({}, item)));
  }))));
}
var LegendItemBubble = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-width: 16px;\n  height: 16px;\n  background-color: ", ";\n  margin-right: 16px;\n  border-radius: 50%;\n"])), function (_ref2) {
  var color = _ref2.color;
  return color;
});
var LegendItem = function LegendItem(_ref3) {
  var color = _ref3.color,
    title = _ref3.title,
    subtitle = _ref3.subtitle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LegendItemBubble, {
    color: color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H4",
    weight: "medium",
    size: "L",
    tag: "p",
    className: "mb-0"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    size: "M",
    tag: "p",
    className: "text-dark mb-0"
  }, subtitle)));
};

/***/ }),

/***/ "./assets/js/pages/pedago-facture/InfoModalContent.tsx":
/*!*************************************************************!*\
  !*** ./assets/js/pages/pedago-facture/InfoModalContent.tsx ***!
  \*************************************************************/
/*! exports provided: InfoModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModalContent", function() { return InfoModalContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _TipBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TipBlock */ "./assets/js/pages/pedago-facture/TipBlock.tsx");
/* harmony import */ var _pedago_facture_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedago-facture.scss */ "./assets/js/pages/pedago-facture/pedago-facture.scss");
/* harmony import */ var _pedago_facture_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pedago_facture_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








var InfoModalContent = function InfoModalContent(_ref) {
  var title = _ref.title,
    heroImgDesktop = _ref.heroImgDesktop,
    heroImgMobile = _ref.heroImgMobile,
    extraInfoblocks = _ref.extraInfoblocks;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useIsMobile"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: isMobile ? "url(".concat(heroImgMobile === null || heroImgMobile === void 0 ? void 0 : heroImgMobile.src, ")") : "url(".concat(heroImgDesktop === null || heroImgDesktop === void 0 ? void 0 : heroImgDesktop.src, ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: isMobile ? 210 : 243,
      position: 'absolute',
      top: 0,
      left: 0
    },
    "data-cy": "go-further-modal-bg-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, isMobile ? heroImgMobile === null || heroImgMobile === void 0 ? void 0 : heroImgMobile.alt : heroImgDesktop === null || heroImgDesktop === void 0 ? void 0 : heroImgDesktop.alt))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: isMobile ? 210 : 243
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    weight: "bold",
    size: isMobile ? 'L' : 'XL',
    className: "pt-4 pt-lg-5 text-center mb-0"
  }, title), extraInfoblocks.map(function (block, key) {
    var extraInfoBlockClasses = classnames__WEBPACK_IMPORTED_MODULE_7___default()('extra-info-block d-flex flex-column flex-lg-row py-3 py-lg-4', {
      'border-top border-1 border-gray-200': key > 0
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: extraInfoBlockClasses
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExtraInfoBlock, Object.assign({}, block)));
  })));
};
var ExtraInfoBlock = function ExtraInfoBlock(_ref2) {
  var icon = _ref2.icon,
    title = _ref2.title,
    desc1 = _ref2.desc1,
    img1 = _ref2.img1,
    textTip1 = _ref2.textTip1,
    desc2 = _ref2.desc2,
    img2 = _ref2.img2,
    textTip2 = _ref2.textTip2;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useIsMobile"])();
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    transform = _useInterweave.transform;
  var iconCircleMobile = 48;
  var iconCircleDesktop = 64;
  var iconMobile = 24;
  var iconDesktop = 32;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-circle px-3 py-2 bg-primary-dark d-flex align-items-center justify-content-center mb-3 mb-lg-0",
    style: {
      width: isMobile ? iconCircleMobile : iconCircleDesktop,
      height: isMobile ? iconCircleMobile : iconCircleDesktop
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icon.src,
    alt: icon.alt,
    style: {
      width: isMobile ? iconMobile : iconDesktop,
      height: isMobile ? iconMobile : iconDesktop
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, title), desc1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    transform: transform,
    content: desc1
  }), img1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 rounded-2 overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img1.src,
    alt: img1.alt,
    className: "w-100 object-fit-cover"
  })), textTip1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TipBlock__WEBPACK_IMPORTED_MODULE_5__["TipBlock"], {
    content: textTip1
  })), desc2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    transform: transform,
    content: desc2
  }), img2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 rounded-2 overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img2.src,
    alt: img2.alt,
    className: "w-100 object-fit-cover"
  })), textTip2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TipBlock__WEBPACK_IMPORTED_MODULE_5__["TipBlock"], {
    content: textTip2
  })));
};

/***/ }),

/***/ "./assets/js/pages/pedago-facture/PedagoModalContent.tsx":
/*!***************************************************************!*\
  !*** ./assets/js/pages/pedago-facture/PedagoModalContent.tsx ***!
  \***************************************************************/
/*! exports provided: PedagoModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedagoModalContent", function() { return PedagoModalContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _HighlightBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HighlightBlock */ "./assets/js/pages/pedago-facture/HighlightBlock.tsx");
/* harmony import */ var _app_components_Timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/Timeline */ "./assets/js/components/Timeline/index.tsx");
/* harmony import */ var _InfoModalContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InfoModalContent */ "./assets/js/pages/pedago-facture/InfoModalContent.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");









var PedagoModalContent = function PedagoModalContent(props) {
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var modalContent = props.modalContent,
    title = props.title;
  var _ref = modalContent || {},
    type = _ref.type,
    titleModal = _ref.title;
  var componentByType = Object.assign({
    pf_modale_ma_reference: ReferenceContent,
    pf_modale_ma_conso: ConsoContent,
    pf_modale_how_i_pay: PaymentChronoContent,
    pf_modale_what_i_pay: PaymentInfoContent
  }, Object.fromEntries(_app_constants__WEBPACK_IMPORTED_MODULE_8__["infoModalTypes"].map(function (type) {
    return [type, _InfoModalContent__WEBPACK_IMPORTED_MODULE_7__["InfoModalContent"]];
  })));
  if (type in componentByType === false) {
    return null;
  }
  var ComponentModal = componentByType[type];
  var isTitleModal = ['pf_modale_ma_conso', 'pf_modale_what_i_pay'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: isMobile ? 'L' : 'XL',
    weight: "bold",
    className: "text-center mb-3 mb-lg-4"
  }, isTitleModal.includes(type) ? titleModal : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentModal, Object.assign({}, modalContent)));
};
var ReferenceContent = function ReferenceContent(_ref2) {
  var img = _ref2.img,
    text1 = _ref2.text1,
    img1 = _ref2.img1,
    text2 = _ref2.text2;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    transform = _useInterweave.transform;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-center"
  }, img && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3 mb-lg-0 mr-lg-5",
    style: {
      minWidth: isMobile ? 210 : 296,
      height: isMobile ? 210 : 248
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img.src,
    alt: img.alt,
    className: "w-100 h-100",
    style: {
      objectFit: 'cover'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, text1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    transform: transform,
    content: text1
  })), img1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img1.src,
    alt: img1.alt,
    className: "mb-3"
  }), text2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    transform: transform,
    content: text2
  }))));
};
var ConsoContent = function ConsoContent(_ref3) {
  var img = _ref3.img,
    text = _ref3.text,
    highlightBlock1 = _ref3.highlightBlock1,
    highlightBlock2 = _ref3.highlightBlock2,
    highlightBlock3 = _ref3.highlightBlock3;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var _useInterweave2 = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    transform = _useInterweave2.transform;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-center"
  }, img && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3 mb-lg-0 mr-lg-5",
    style: {
      minWidth: isMobile ? 210 : 296,
      height: isMobile ? 210 : 248
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img.src,
    alt: img.alt,
    className: "w-100 h-100",
    style: {
      objectFit: 'cover'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    transform: transform,
    content: text
  })), highlightBlock1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightBlock__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, highlightBlock1, {
    className: "align-items-center"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-stretch mb-3 mb-lg-5"
  }, highlightBlock2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 px-0 pb-3 pb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightBlock__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, highlightBlock2, {
    className: "align-items-center"
  }))), highlightBlock3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-5 px-0 pl-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightBlock__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, highlightBlock3, {
    className: "align-items-center h-auto"
  })))));
};
var PaymentChronoContent = function PaymentChronoContent(_ref4) {
  var highlightBlock = _ref4.highlightBlock,
    timeline = _ref4.timeline;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-center pb-3 pb-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 px-0 pr-lg-4 pb-3 pb-lg-0"
  }, highlightBlock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightBlock__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, highlightBlock))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Timeline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    items: timeline
  }));
};
var PaymentInfoContent = function PaymentInfoContent(_ref5) {
  var text = _ref5.text,
    highlightBlock1 = _ref5.highlightBlock1,
    highlightBlock2 = _ref5.highlightBlock2,
    highlightBlock3 = _ref5.highlightBlock3;
  var _useInterweave3 = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    transform = _useInterweave3.transform;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9 text-center px-0 mx-auto text-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    transform: transform,
    content: text
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row mb-3 mb-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row w-100"
  }, highlightBlock1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 px-0 pr-lg-3 pb-3 pb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightBlock__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, highlightBlock1, {
    className: "p-lg-4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column h-100"
  }, highlightBlock2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-0 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightBlock__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, highlightBlock2, {
    className: "p-lg-4"
  }))), highlightBlock3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightBlock__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, highlightBlock3))))));
};

/***/ }),

/***/ "./assets/js/pages/pedago-facture/TipBlock.tsx":
/*!*****************************************************!*\
  !*** ./assets/js/pages/pedago-facture/TipBlock.tsx ***!
  \*****************************************************/
/*! exports provided: TipBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipBlock", function() { return TipBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_light_bulb_shine_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/light-bulb-shine.svg */ "./assets/img/light-bulb-shine.svg");
/* harmony import */ var _hooks_useInterweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");




var TipBlock = function TipBlock(_ref) {
  var content = _ref.content;
  var _useInterweave = Object(_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    transform = _useInterweave.transform;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tip-block d-flex flex-row p-3 mt-auto rounded-2 bg-blue-03 w-100 flex-nowrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tip-icon-container pr-3 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_light_bulb_shine_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    width: 24,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    noWrap: true,
    transform: transform,
    content: content
  }));
};

/***/ }),

/***/ "./assets/js/pages/pedago-facture/pedago-facture.scss":
/*!************************************************************!*\
  !*** ./assets/js/pages/pedago-facture/pedago-facture.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);