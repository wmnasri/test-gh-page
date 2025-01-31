(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./assets/img/doc.svg":
/*!****************************!*\
  !*** ./assets/img/doc.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/doc.svg");

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

/***/ "./assets/js/ez-components/cards/Pedago/card-pedago.scss":
/*!***************************************************************!*\
  !*** ./assets/js/ez-components/cards/Pedago/card-pedago.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/ez-components/cards/Pedago/index.tsx":
/*!********************************************************!*\
  !*** ./assets/js/ez-components/cards/Pedago/index.tsx ***!
  \********************************************************/
/*! exports provided: CardPedago */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPedago", function() { return CardPedago; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _card_pedago_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-pedago.scss */ "./assets/js/ez-components/cards/Pedago/card-pedago.scss");
/* harmony import */ var _card_pedago_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_card_pedago_scss__WEBPACK_IMPORTED_MODULE_5__);






var CardPedago = function CardPedago(_ref) {
  var icon = _ref.icon,
    title = _ref.title,
    subtitle = _ref.subtitle,
    children = _ref.children,
    _ref$centered = _ref.centered,
    centered = _ref$centered === void 0 ? false : _ref$centered,
    _ref$clickable = _ref.clickable,
    clickable = _ref$clickable === void 0 ? true : _ref$clickable,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? 'white' : _ref$backgroundColor,
    background = _ref.background,
    cardIndex = _ref.cardIndex,
    handleClick = _ref.handleClick;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    transform = _useInterweave.transform;
  var getStyleBackground = function getStyleBackground(backgroundColor) {
    return {
      backgroundColor: backgroundColor
    };
  };
  var cardPedagoClassNames = classnames__WEBPACK_IMPORTED_MODULE_4___default()('card-pedago d-flex flex-column rounded-2 px-3 py-4 p-lg-3 w-100 position-relative', {
    'cursor-pointer': clickable,
    'card-detail text-center': centered
  });
  var contentClassNames = classnames__WEBPACK_IMPORTED_MODULE_4___default()('card-content d-flex', {
    'justify-content-between align-items-start': !centered,
    'justify-content-center flex-column': centered
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cardPedagoClassNames,
    style: getStyleBackground(backgroundColor),
    onClick: handleClick,
    "data-cy": title
  }, background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardPedagoBackground, {
    index: cardIndex
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: contentClassNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: centered ? 'H3' : 'H4',
    size: "L",
    weight: "medium"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    noWrap: true,
    transform: transform,
    content: subtitle
  })), icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-circle p-2 bg-gray-100 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icon.src,
    alt: icon.alt,
    style: {
      width: 32,
      height: 32
    }
  })), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right mt-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    variant: "line",
    icon: "keyboard-arrow-right"
  })));
};
var CardPedagoBackground = function CardPedagoBackground(_ref2) {
  var index = _ref2.index;
  var waveClassname = "wave-".concat(index + 1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wave-container position-absolute w-100 left-0 bottom-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wave ".concat(waveClassname)
  }));
};

/***/ }),

/***/ "./assets/js/pages/pedago-facture/Board.tsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/pedago-facture/Board.tsx ***!
  \**************************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_ez_components_cards_Pedago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/ez-components/cards/Pedago */ "./assets/js/ez-components/cards/Pedago/index.tsx");
/* harmony import */ var _img_doc_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @img/doc.svg */ "./assets/img/doc.svg");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _PedagoModalContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PedagoModalContent */ "./assets/js/pages/pedago-facture/PedagoModalContent.tsx");
/* harmony import */ var _app_ez_components_ModuleCardFaq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/ez-components/ModuleCardFaq */ "./assets/js/ez-components/ModuleCardFaq/index.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_components_background_BackgroundWave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/background/BackgroundWave */ "./assets/js/components/background/BackgroundWave/index.tsx");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var Board = function Board() {
  var _a;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["useHistory"])();
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_15__["default"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowModal = _useState2[0],
    setisShowModal = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedPedagoCard = _useState4[0],
    setSelectedPedagoCard = _useState4[1];
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_12__["useQuery"])('invoiceExplanation', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_4__["API"].INVOICE_EXPLANATION);
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading,
    isError = _useQuery.isError;
  var content = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.content) || {};
  var pf_card_cmf = content.pf_card_cmf,
    pf_card_go_further = content.pf_card_go_further,
    clientContext = content.clientContext;
  var handleCloseModal = function handleCloseModal() {
    setisShowModal(false);
  };
  var handleOpenModal = function handleOpenModal(data) {
    var _ref = data || {},
      modalContent = _ref.modalContent;
    if (Object.keys(modalContent).length > 0) {
      track('PEDAGO_1', {
        nom_modale: modalContent.type,
        cas_client: clientContext
      });
      setisShowModal(true);
      setSelectedPedagoCard(data);
    }
  };
  var pedagoItemClassName = 'col-12 col-lg-6 px-0 px-lg-2 mb-3';
  var openCard = function openCard(modalContent) {
    track('PEDAGO_2', {
      nom_modale: modalContent === null || modalContent === void 0 ? void 0 : modalContent.type,
      cas_client: clientContext
    });
  };
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkeletonInvoiceExplanation, null);
  }
  if (isError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-100 bg-blue-07 pb-lg-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tsme-container pb-3 pb-lg-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-7 mx-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "border border-dark w-100",
      src: "/assets/legacy/build/img/page-404.png",
      alt: t('errors.notFound')
    })))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pedago-facture-board position-relative w-100 pb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container py-3 pb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: isMobile ? 'L' : 'XL',
    weight: "bold",
    className: "text-center mb-3",
    tag: "h1"
  }, t('pedagoFacture.board.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, pf_card_cmf.map(function (data, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: pedagoItemClassName,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_cards_Pedago__WEBPACK_IMPORTED_MODULE_5__["CardPedago"], Object.assign({}, data, {
      cardIndex: index,
      background: true,
      handleClick: function handleClick() {
        return handleOpenModal(data);
      }
    })));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-5 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pl-lg-4 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_cards_Pedago__WEBPACK_IMPORTED_MODULE_5__["CardPedago"], {
    title: "Ma facture en d\xE9tail",
    subtitle: "<p>Zoom sur chaque point cl\xE9</p>",
    centered: true,
    handleClick: function handleClick() {
      track('PEDAGO_4', {
        cas_client: clientContext
      });
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].INVOICE_DETAIL);
    },
    backgroundColor: "var(--blue-electric-light)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_doc_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    className: "mx-auto",
    style: {
      position: 'absolute',
      bottom: isMobile ? -25 : 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: isMobile ? 250 : 315
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_background_BackgroundWave__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_ModuleCardFaq__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: t('pedagoFacture.board.card_contract_module_title'),
    items: pf_card_go_further,
    openCard: openCard
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container pt-0 pb-6 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "outlined",
    border: "soft",
    className: "border-white bg-transparent mb-1 mb-lg-0 text-white",
    to: _app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].HELP_AND_CONTACT,
    id: "invoice-explanation-other-question-btn",
    onClick: function onClick() {
      track('PEDAGO_3', {
        cas_client: clientContext
      });
    }
  }, t('pedagoFacture.board.otherQuestionBtn')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: isShowModal,
    handleClose: handleCloseModal,
    size: "xl",
    backdrop: true,
    centered: true,
    scrollable: true,
    border: "smooth",
    fullscreen: "md",
    title: ""
  }, selectedPedagoCard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PedagoModalContent__WEBPACK_IMPORTED_MODULE_10__["PedagoModalContent"], Object.assign({}, selectedPedagoCard)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: handleCloseModal,
    id: "close-pedago-modal"
  }, t('pedagoFacture.board.modal.btn')))));
};
var SkeletonInvoiceExplanation = function SkeletonInvoiceExplanation() {
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 bg-blue-07 pb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container pb-3 pb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: isMobile ? 250 : 500,
    height: 40
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 px-0 px-lg-2 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: '100%',
    height: 180
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 px-0 px-lg-2 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: '100%',
    height: 180
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 px-0 px-lg-2 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: '100%',
    height: 180
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 px-0 px-lg-2 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: '100%',
    height: 180
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-5 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pl-lg-4 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: isMobile ? '100%&' : 497,
    height: 375
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container mx-auto position-relative pt-3 pt-lg-4 px-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: 200,
    height: 30
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 px-lg-2 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: '100%',
    height: 210
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 px-lg-2 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: '100%',
    height: 210
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 px-lg-2 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    width: '100%',
    height: 210
  }))))));
};

/***/ }),

/***/ "./assets/js/pages/pedago-facture/index.tsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/pedago-facture/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PedagoFacture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./assets/js/pages/pedago-facture/Board.tsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _pedago_facture_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedago-facture.scss */ "./assets/js/pages/pedago-facture/pedago-facture.scss");
/* harmony import */ var _pedago_facture_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pedago_facture_scss__WEBPACK_IMPORTED_MODULE_3__);




function PedagoFacture() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "p-0",
    fullscreen: true,
    tag: "main",
    id: "pedago-facture-board",
    minHeight: "initial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], null));
}

/***/ })

}]);