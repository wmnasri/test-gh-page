(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./assets/img/waterLeak/contract.svg":
/*!*******************************************!*\
  !*** ./assets/img/waterLeak/contract.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/contract.svg");

/***/ }),

/***/ "./assets/img/waterLeak/e-mail-success.svg":
/*!*************************************************!*\
  !*** ./assets/img/waterLeak/e-mail-success.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/e-mail-success.svg");

/***/ }),

/***/ "./assets/img/waterLeak/explorer-error.svg":
/*!*************************************************!*\
  !*** ./assets/img/waterLeak/explorer-error.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/explorer-error.svg");

/***/ }),

/***/ "./assets/img/waterLeak/helper.svg":
/*!*****************************************!*\
  !*** ./assets/img/waterLeak/helper.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/helper.svg");

/***/ }),

/***/ "./assets/img/waterLeak/message-sending.svg":
/*!**************************************************!*\
  !*** ./assets/img/waterLeak/message-sending.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/message-sending.svg");

/***/ }),

/***/ "./assets/img/waterLeak/timer.svg":
/*!****************************************!*\
  !*** ./assets/img/waterLeak/timer.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/timer.svg");

/***/ }),

/***/ "./assets/js/components/WaterLeak/MachineContext.jsx":
/*!***********************************************************!*\
  !*** ./assets/js/components/WaterLeak/MachineContext.jsx ***!
  \***********************************************************/
/*! exports provided: MachineContext, MachineProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineContext", function() { return MachineContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineProvider", function() { return MachineProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/es/index.js");
/* harmony import */ var _WaterLeakMachine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WaterLeakMachine */ "./assets/js/components/WaterLeak/WaterLeakMachine.js");



var MachineContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var MachineProvider = function MachineProvider(_ref) {
  var children = _ref.children;
  var WaterLeakService = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_1__["useInterpret"])(_WaterLeakMachine__WEBPACK_IMPORTED_MODULE_2__["default"], {
    devTools: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MachineContext.Provider, {
    value: {
      WaterLeakService: WaterLeakService
    }
  }, children);
};


/***/ }),

/***/ "./assets/js/components/WaterLeak/MessagesCard.jsx":
/*!*********************************************************!*\
  !*** ./assets/js/components/WaterLeak/MessagesCard.jsx ***!
  \*********************************************************/
/*! exports provided: ContractErrorMap, ContractErrorCard, Error500Card, SuccessCard, PendingCard, FailCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractErrorMap", function() { return ContractErrorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractErrorCard", function() { return ContractErrorCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Card", function() { return Error500Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessCard", function() { return SuccessCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingCard", function() { return PendingCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailCard", function() { return FailCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_waterLeak_e_mail_success_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/waterLeak/e-mail-success.svg */ "./assets/img/waterLeak/e-mail-success.svg");
/* harmony import */ var _img_waterLeak_message_sending_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/waterLeak/message-sending.svg */ "./assets/img/waterLeak/message-sending.svg");
/* harmony import */ var _img_waterLeak_helper_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../img/waterLeak/helper.svg */ "./assets/img/waterLeak/helper.svg");
/* harmony import */ var _img_waterLeak_explorer_error_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../img/waterLeak/explorer-error.svg */ "./assets/img/waterLeak/explorer-error.svg");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");










var ContractErrorMap = {
  CLOSED: 'notAvailable',
  MAX_PDS: 'pro',
  FACT_KO: 'deprecated',
  DOSSIER_KO: 'dossierKO'
};
function ContractErrorCard(_ref) {
  var variant = _ref.variant,
    dateDossier = _ref.dateDossier;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "cy-result-page mb-2 container mt-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-4 py-2 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-7"
  }, variant === ContractErrorMap.MAX_PDS && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    className: "mb-6",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
    content: t('waterleak.contractErrorCard.pro', {
      customerServiceLink: _constants__WEBPACK_IMPORTED_MODULE_9__["CUSTOMER_SERVICE_URL"]
    })
  })), variant === ContractErrorMap.CLOSED && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    className: "mb-6",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
    content: t('waterleak.contractErrorCard.notAvailable', {
      customerServiceLink: _constants__WEBPACK_IMPORTED_MODULE_9__["CUSTOMER_SERVICE_URL"]
    })
  })), variant === ContractErrorMap.FACT_KO && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, t('waterleak.contractErrorCard.deprecated1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, t('waterleak.contractErrorCard.deprecated2'))), variant === ContractErrorMap.DOSSIER_KO && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    className: "mb-6",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
    content: t('waterleak.contractErrorCard.dossierKO', {
      dateDossier: dateDossier,
      requestCelUrl: _constants__WEBPACK_IMPORTED_MODULE_9__["REQUEST_CEL_URL"]
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-3 pt-5 mb-3 justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    "data-cy": "waterleak-close-form",
    variant: "contained",
    className: "col-5",
    onClick: function onClick() {
      return window.location.assign(_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].HOME);
    }
  }, t('waterleak.closeForm')), variant !== ContractErrorMap.DOSSIER_KO && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "text",
    className: "col-5",
    onClick: function onClick() {
      return window.location.assign(_constants__WEBPACK_IMPORTED_MODULE_9__["CUSTOMER_SERVICE_URL"]);
    }
  }, t('waterleak.customerService')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_helper_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    style: {
      minHeight: '20vh'
    },
    alt: t('waterleak.contractErrorCard.image')
  }))));
}
function Error500Card() {
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation2.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "cy-result-page my-5 px-4 py-3 bg-white align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    className: "mb-3",
    weight: "bold",
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
    content: t('waterleak.error500.title')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
    content: t('waterleak.error500.content1')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
    format: "DD/MM/YYYY, \xE0 HH:mm"
  }, new Date()), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), t('waterleak.error500.content2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, t('waterleak.error500.content3')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 d-block d-md-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_explorer_error_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    style: {
      minHeight: '15vh'
    },
    alt: t('waterleak.error500.image')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 mb-4 mb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    "data-cy": "waterleak-close-form",
    variant: "contained",
    className: "col-12",
    onClick: function onClick() {
      return window.location.assign(_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].HOME);
    }
  }, t('waterleak.closeForm'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "col-12",
    variant: "outlined",
    onClick: function onClick() {
      return window.location.assign(_constants__WEBPACK_IMPORTED_MODULE_9__["CUSTOMER_SERVICE_URL"]);
    },
    icon: "headphones-customer-support"
  }, t('waterleak.customerService'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5 d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_explorer_error_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: t('waterleak.error500.image')
  }))));
}
function SuccessCard() {
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation3.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "cy-result-page my-5 px-4 py-3  bg-white align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    className: "mb-3",
    weight: "bold",
    align: "left"
  }, t('waterleak.successCard.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, t('waterleak.successCard.content')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 d-block d-md-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_e_mail_success_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    style: {
      minHeight: '20vh'
    },
    alt: t('waterleak.successCard.image')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "text",
    className: "mt-md-5",
    icon: "layout-dashboard",
    onClick: function onClick() {
      return window.location.assign(_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DASHBOARD);
    }
  }, t('waterleak.dashboard'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5 d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_e_mail_success_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: t('waterleak.successCard.image')
  }))));
}
function PendingCard() {
  var _useTranslation4 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation4.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "cy-result-page my-5 px-4 py-3 bg-white align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    className: "mb-3",
    weight: "bold",
    align: "left"
  }, t('waterleak.pendingCard.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, t('waterleak.pendingCard.content1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, t('waterleak.pendingCard.content2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 d-block d-md-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_e_mail_success_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    style: {
      minHeight: '20vh'
    },
    alt: t('waterleak.imageHourglass')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "text",
    className: "mt-md-5",
    icon: "layout-dashboard",
    onClick: function onClick() {
      return window.location.assign(_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DASHBOARD);
    }
  }, t('waterleak.dashboard'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5 d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_e_mail_success_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    style: {
      minHeight: '40vh'
    },
    alt: t('waterleak.imageHourglass')
  }))));
}
function FailCard(_ref2) {
  var variant = _ref2.variant;
  var _useTranslation5 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation5.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "cy-result-page my-5 px-4 py-3 bg-white align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    className: "mb-3",
    weight: "bold",
    align: "left"
  }, t('waterleak.failCard.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, variant === 'warsmann' ? t('waterleak.failCard.contentWarsmann') : t('waterleak.failCard.content')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, t('waterleak.failCard.notEligible')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5  d-block d-md-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_message_sending_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    style: {
      minHeight: '35vh'
    },
    alt: t('waterleak.imageHourglass')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "text",
    className: "mt-md-5",
    icon: "layout-dashboard",
    onClick: function onClick() {
      return window.location.assign(_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].DASHBOARD);
    }
  }, t('waterleak.dashboard'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5 d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_message_sending_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: t('waterleak.imageHourglass')
  }))));
}

/***/ }),

/***/ "./assets/js/components/WaterLeak/SkeletonStep1.jsx":
/*!**********************************************************!*\
  !*** ./assets/js/components/WaterLeak/SkeletonStep1.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SkeletonCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


function SkeletonCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3 mt-4 mx-1 py-3 dataCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-6 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 30,
    width: 30
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    count: 3
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-6 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 30,
    width: 30
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    count: 3
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-2 mt-4 mx-1 pt-1 pb-2 dataCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-12 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 30,
    width: 30
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3 mt-4 mx-1 pt-1 pb-2 dataCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-12 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 30,
    width: 30
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, null)))));
}

/***/ }),

/***/ "./assets/js/components/WaterLeak/Step1.jsx":
/*!**************************************************!*\
  !*** ./assets/js/components/WaterLeak/Step1.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/es/index.js");
/* harmony import */ var _MessagesCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessagesCard */ "./assets/js/components/WaterLeak/MessagesCard.jsx");
/* harmony import */ var _MachineContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MachineContext */ "./assets/js/components/WaterLeak/MachineContext.jsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SkeletonStep1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SkeletonStep1 */ "./assets/js/components/WaterLeak/SkeletonStep1.jsx");
/* harmony import */ var _components_SimplePhotoMeter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SimplePhotoMeter */ "./assets/js/components/WaterLeak/components/SimplePhotoMeter/index.jsx");
/* harmony import */ var _img_waterLeak_timer_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../img/waterLeak/timer.svg */ "./assets/img/waterLeak/timer.svg");
/* harmony import */ var _hooks_useConvertCompress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useConvertCompress */ "./assets/js/hooks/useConvertCompress.js");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
var _excluded = ["value", "label"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
















function map4Select(Collection, conf) {
  return Collection === null || Collection === void 0 ? void 0 : Collection.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      value: item[conf.value],
      label: item[conf.label || conf.value]
    });
  });
}
var MeterTypeMap = {
  ESTIMATION: 'estimée',
  RELEVÉ: 'relevée'
};
function Step1(_ref) {
  var _state$context, _state$context2, _state$context$select, _state$context3, _state$context3$selec, _state$context$select2, _state$context$select3, _state$context6, _state$context6$selec, _state$context7, _state$context7$selec, _state$context$select4, _state$context$select5, _state$context$select6, _state$context$select7, _state$context$select8, _state$context$select9, _state$context$select10, _state$context$select11, _state$context$select12, _state$context8, _state$context8$selec, _state$context$select13, _state$context9, _state$context9$selec, _state$context$select14, _state$context10, _state$context10$sele, _state$context11, _state$context$index, _state$context12, _state$context12$sele;
  var goToNextStep = _ref.goToNextStep;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_15__["useIsMobile"])();
  var isDesktop = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_15__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_14__["useTranslation"])(),
    t = _useTranslation.t;
  var TYPE_METER = {
    ESTIMATION: 'ESTIMATION'
  };
  var ELIGIBILITY = {
    OK: 'OK'
  };
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowPreviewModal = _useState4[0],
    setShowPreviewModal = _useState4[1];
  var machineInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MachineContext__WEBPACK_IMPORTED_MODULE_6__["MachineContext"]);
  var send = machineInstance.WaterLeakService.send;
  var state = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(machineInstance.WaterLeakService, function (state) {
    return state;
  });
  var degrevement_edito = document.getElementById('app').getAttribute('degrevement-edito');
  var containerMeters = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var containerBill = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var containerIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var scroll = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
  };
  var handleOpenModal = function handleOpenModal() {
    setShowModal(true);
  };
  var handleToggleConfirmInfo = function handleToggleConfirmInfo(_ref2) {
    var target = _ref2.target;
    send({
      type: 'CONFIRM_INFO',
      toggleConfirmInfo: target.checked
    });
  };
  var handleToggleConfirmInvoice = function handleToggleConfirmInvoice(_ref3) {
    var target = _ref3.target;
    send({
      type: 'CONFIRM_INVOICE',
      toggleConfirmInvoice: target.checked
    });
  };
  var handleToggleConfirmPhotometerFiles = function handleToggleConfirmPhotometerFiles(_ref4) {
    var target = _ref4.target;
    send({
      type: 'CONFIRM_PHOTOMETER',
      toggleConfirmPhotometerFiles: target.checked
    });
  };
  var handleSelect = function handleSelect(_ref5) {
    var reference = _ref5.reference;
    send({
      type: 'SELECTED_CONTRACT',
      reference: reference
    });
    setShowSelectedContractArea(true);
  };

  // eslint-disable-next-line no-unused-vars
  var handleMultiMeter = function handleMultiMeter(_ref6) {
    var value = _ref6.value,
      label = _ref6.label,
      rest = _objectWithoutProperties(_ref6, _excluded);
    send({
      type: 'SELECTED_METER',
      selectedMeter: _objectSpread({}, rest)
    });
  };
  var handlePreview = function handlePreview() {
    setShowPreviewModal(true);
  };
  var handleClosePreviewModal = function handleClosePreviewModal() {
    setShowPreviewModal(false);
  };
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
    _useState6 = _slicedToArray(_useState5, 2),
    files = _useState6[0],
    setFiles = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isConvertFile = _useState8[0],
    setIsConvertFile = _useState8[1];
  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
      accept: _app_constants__WEBPACK_IMPORTED_MODULE_13__["ACCEPTED_FORMAT_IMAGE"],
      maxFiles: 1,
      maxSize: _app_constants__WEBPACK_IMPORTED_MODULE_13__["MAX_UPLOAD_FILE_SIZE"],
      onDrop: function () {
        var _onDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(acceptedFiles) {
          var fileTemp, _yield$useConvertComp, fileConvert, objectURL;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                setIsConvertFile(true);
                _context.prev = 1;
                fileTemp = acceptedFiles[0];
                _context.next = 5;
                return Object(_hooks_useConvertCompress__WEBPACK_IMPORTED_MODULE_11__["useConvertCompress"])(fileTemp);
              case 5:
                _yield$useConvertComp = _context.sent;
                fileConvert = _yield$useConvertComp.fileConvert;
                objectURL = _yield$useConvertComp.objectURL;
                setFiles([Object.assign(fileTemp, {
                  preview: objectURL
                })]);
                send({
                  type: 'DROP_FILE',
                  photo: fileConvert
                });
                _context.next = 15;
                break;
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.error('Error during file processing:', _context.t0);
              case 15:
                _context.prev = 15;
                setIsConvertFile(false);
                return _context.finish(15);
              case 18:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 12, 15, 18]]);
        }));
        function onDrop(_x2) {
          return _onDrop.apply(this, arguments);
        }
        return onDrop;
      }(),
      onDropRejected: function onDropRejected() {
        setIsConvertFile(false);
      }
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    open = _useDropzone.open,
    fileRejections = _useDropzone.fileRejections;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      files.forEach(function (file) {
        return URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);
  var datasContracts = map4Select((_state$context = state.context) === null || _state$context === void 0 ? void 0 : _state$context.contracts, {
    value: 'reference'
  });
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
    _useState10 = _slicedToArray(_useState9, 2),
    propsSelectContract = _useState10[0],
    setPropsSelectContract = _useState10[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (datasContracts.length === 1) {
      setPropsSelectContract({
        value: datasContracts[0]
      });
      var reference = datasContracts[0].reference;
      send({
        type: 'SELECTED_CONTRACT',
        reference: reference
      });
    }
  }, [(_state$context2 = state.context) === null || _state$context2 === void 0 ? void 0 : _state$context2.contracts]);
  var showMultiMeters = state.context.toggleConfirmInfo && ((_state$context$select = state.context.selectedContract) === null || _state$context$select === void 0 ? void 0 : _state$context$select.multicounter) && state.context.selectedContract.eligibility === ELIGIBILITY.OK;
  var showBtnWrongBill = state.context.selectedContract && state.context.toggleConfirmInfo && state.matches({
    step1: {
      contract: {
        invoice: 'lastInvoice'
      }
    }
  }) && !state.context.toggleConfirmInvoice && state.context.selectedContract.eligibility === ELIGIBILITY.OK;
  var showBills = state.context.selectedContract && state.context.toggleConfirmInfo && state.context.selectedContract.eligibility == ELIGIBILITY.OK && state.matches({
    step1: {
      contract: {
        invoice: 'lastInvoice'
      }
    }
  });
  var showIndex = state.context.toggleConfirmInfo && state.context.toggleConfirmInvoice && ((_state$context3 = state.context) === null || _state$context3 === void 0 ? void 0 : (_state$context3$selec = _state$context3.selectedMeter) === null || _state$context3$selec === void 0 ? void 0 : _state$context3$selec.type) === TYPE_METER.ESTIMATION && state.matches({
    step1: {
      contract: {
        photoMeter: 'idle'
      }
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (showMultiMeters) {
      var current = containerMeters.current;
      scroll(current === null || current === void 0 ? void 0 : current.offsetTop);
    }
  }, [showMultiMeters]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (showBills) {
      var current = containerBill.current;
      scroll(current === null || current === void 0 ? void 0 : current.offsetTop);
    }
  }, [showBills]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (showIndex) {
      var current = containerIndex.current;
      scroll(current === null || current === void 0 ? void 0 : current.offsetTop);
    }
  }, [showIndex]);
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showSelectedContractArea = _useState12[0],
    setShowSelectedContractArea = _useState12[1];
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showSelectedContractData = _useState14[0],
    setShowSelectedContractData = _useState14[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _state$context4, _state$context4$selec, _state$context5, _state$context5$selec;
    if ((_state$context4 = state.context) !== null && _state$context4 !== void 0 && (_state$context4$selec = _state$context4.selectedContract) !== null && _state$context4$selec !== void 0 && _state$context4$selec.address || (_state$context5 = state.context) !== null && _state$context5 !== void 0 && (_state$context5$selec = _state$context5.selectedContract) !== null && _state$context5$selec !== void 0 && _state$context5$selec.identity) {
      setShowSelectedContractData(true);
    } else {
      setShowSelectedContractData(false);
    }
  }, [state.context]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: isShowModal,
    handleClose: handleCloseModal,
    size: "xl",
    backdrop: "static",
    className: "modal-index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-5 mb-2 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "large",
    className: "mb-3",
    weight: "bold",
    align: "left"
  }, t('waterleak.step1.modal.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, t('waterleak.step1.modal.desc1'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_3___default.a, {
    format: "DD/MM/YY"
  }, (_state$context$select2 = state.context.selectedContract) === null || _state$context$select2 === void 0 ? void 0 : (_state$context$select3 = _state$context$select2.invoice) === null || _state$context$select3 === void 0 ? void 0 : _state$context$select3.date), t('waterleak.step1.modal.desc2'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_timer_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
    style: {
      minHeight: '30vh',
      width: '100%'
    },
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-5 py-3 justify-content-between",
    style: {
      rowGap: '2rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "col-12 col-md-4  bg-transparent",
    variant: "outlined",
    onClick: function onClick() {
      return handleCloseModal();
    }
  }, t('waterleak.step1.modal.ok')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    className: "col-12 col-md-5",
    onClick: function onClick() {
      return window.location.assign(degrevement_edito);
    }
  }, t('waterleak.step1.modal.ko')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "bg-white mb-2 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container px-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h2",
    weight: "bold",
    align: "left"
  }, t('waterleak.step1.card.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzSelect"], _extends({
    placeholder: t('waterleak.step1.card.refContract.placeholder'),
    options: datasContracts,
    className: "cy-select-contract col-12 col-md-5",
    label: t('waterleak.step1.card.refContract.label'),
    onChange: handleSelect,
    name: "refContract"
  }, propsSelectContract))), showSelectedContractArea && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !showSelectedContractData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SkeletonStep1__WEBPACK_IMPORTED_MODULE_8__["default"], null), showSelectedContractData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3 mt-4 mx-1 py-3 dataCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-12 col-md-6 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "maps-pin-1",
    className: "col-2 col-md-1",
    variant: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-10 col-md-11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, t('waterleak.step1.card.servedAddress')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "text",
    weight: "medium"
  }, (_state$context6 = state.context) === null || _state$context6 === void 0 ? void 0 : (_state$context6$selec = _state$context6.selectedContract) === null || _state$context6$selec === void 0 ? void 0 : _state$context6$selec.address))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-12 col-md-6 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "single-neutral-id-card-3",
    className: "col-2 col-md-1",
    variant: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-10 col-md-11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, t('waterleak.step1.card.identity')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "text",
    weight: "medium"
  }, (_state$context7 = state.context) === null || _state$context7 === void 0 ? void 0 : (_state$context7$selec = _state$context7.selectedContract) === null || _state$context7$selec === void 0 ? void 0 : _state$context7$selec.identity)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row ml-1 mt-4 mb-3 ml-md-0 pl-md-3 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
    id: "checkbox",
    name: "checkbox",
    className: "cy-check-home",
    label: t('waterleak.step1.card.checkbox.label'),
    type: "checkbox",
    checked: state.context.toggleConfirmInfo || false,
    onChange: handleToggleConfirmInfo
  }))), !state.context.toggleConfirmInfo && showSelectedContractData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    variant: "info",
    className: "my-2",
    transparent: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, t('waterleak.step1.card.otherLocation'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _app_constants__WEBPACK_IMPORTED_MODULE_13__["CUSTOMER_SERVICE_URL"],
    className: "basic-link"
  }, t('waterleak.step1.card.customerService')), "."))))), state.context.toggleConfirmInfo && state.context.selectedContract.eligibility !== ELIGIBILITY.OK && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesCard__WEBPACK_IMPORTED_MODULE_5__["ContractErrorCard"], {
    variant: _MessagesCard__WEBPACK_IMPORTED_MODULE_5__["ContractErrorMap"][(_state$context$select4 = state.context.selectedContract) === null || _state$context$select4 === void 0 ? void 0 : _state$context$select4.eligibility],
    dateDossier: (_state$context$select5 = state.context.selectedContract) === null || _state$context$select5 === void 0 ? void 0 : _state$context$select5.dateHeureCreationDossier
  }), showMultiMeters &&
  /*#__PURE__*/
  // state.matches({ step1: { contract: { multiMeters: "infos" } } }) && (
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "bg-white mb-2 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: containerMeters,
    className: "container px-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h2",
    weight: "bold",
    align: "left"
  }, t('waterleak.step1.multiMeters.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3",
    style: {
      rowGap: '1rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzSelect"], {
    placeholder: t('waterleak.step1.multiMeters.refMultiMeterContract.placeholder'),
    options: map4Select((_state$context$select6 = state.context.selectedContract) === null || _state$context$select6 === void 0 ? void 0 : _state$context$select6.counters, {
      value: 'matricule'
    }),
    className: "cy-select-meter col-12 col-md-5",
    label: t('waterleak.step1.multiMeters.refMultiMeterContract.label'),
    onChange: handleMultiMeter,
    name: "refMultiMeterContract"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-7  helperCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center py-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "information-circle",
    className: "col-1",
    variant: "bold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "col-9",
    variant: "caption",
    color: "dark",
    weight: "regular"
  }, t('waterleak.step1.multiMeters.twoMeters'))))))), showBills && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "mb-2 mt-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: containerBill,
    className: "container px-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h2",
    weight: "bold",
    align: "left"
  }, t('waterleak.step1.bills.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "billCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center billCard-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 col-md-3 pl-4 border-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, t('waterleak.step1.bills.invoiceNumber')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "text",
    weight: "medium"
  }, (_state$context$select7 = state.context.selectedContract) === null || _state$context$select7 === void 0 ? void 0 : (_state$context$select8 = _state$context$select7.invoice) === null || _state$context$select8 === void 0 ? void 0 : _state$context$select8.number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, t('waterleak.step1.bills.invoiceDate')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "text",
    weight: "medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_3___default.a, {
    format: "DD/MM/YY"
  }, (_state$context$select9 = state.context.selectedContract) === null || _state$context$select9 === void 0 ? void 0 : (_state$context$select10 = _state$context$select9.invoice) === null || _state$context$select10 === void 0 ? void 0 : _state$context$select10.date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 col-md-3 pl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, t('waterleak.step1.bills.invoiceAmount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "text",
    weight: "medium"
  }, "".concat((_state$context$select11 = state.context.selectedContract) === null || _state$context$select11 === void 0 ? void 0 : (_state$context$select12 = _state$context$select11.invoice) === null || _state$context$select12 === void 0 ? void 0 : _state$context$select12.amount, " \u20AC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-6 col-md-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, "Conso. ".concat(MeterTypeMap[((_state$context8 = state.context) === null || _state$context8 === void 0 ? void 0 : (_state$context8$selec = _state$context8.selectedMeter) === null || _state$context8$selec === void 0 ? void 0 : _state$context8$selec.type) || ((_state$context$select13 = state.context.selectedContract) === null || _state$context$select13 === void 0 ? void 0 : _state$context$select13.counters[0].type)])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "text",
    weight: "medium"
  }, "".concat(((_state$context9 = state.context) === null || _state$context9 === void 0 ? void 0 : (_state$context9$selec = _state$context9.selectedMeter) === null || _state$context9$selec === void 0 ? void 0 : _state$context9$selec.consumption) || ((_state$context$select14 = state.context.selectedContract) === null || _state$context$select14 === void 0 ? void 0 : _state$context$select14.counters[0].consumption), "\n                      m3")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row ml-1 mt-4 mb-3 ml-md-0 pl-md-3 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
    id: "checkboxConfirmInvoice",
    name: "checkboxConfirmInvoice",
    label: t('waterleak.step1.bills.checkboxConfirmInvoice.label'),
    type: "checkbox",
    checked: state.context.toggleConfirmInvoice || false,
    onChange: handleToggleConfirmInvoice,
    className: "cy-check-leak"
  })))), showIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "mb-2 mt-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: containerIndex,
    className: "container px-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h2",
    weight: "bold",
    align: "left"
  }, t('waterleak.step1.index.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SimplePhotoMeter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    matricule: (_state$context10 = state.context) === null || _state$context10 === void 0 ? void 0 : (_state$context10$sele = _state$context10.selectedMeter) === null || _state$context10$sele === void 0 ? void 0 : _state$context10$sele.matricule,
    index: (_state$context11 = state.context) === null || _state$context11 === void 0 ? void 0 : _state$context11.index,
    onChange: function onChange(val) {
      send({
        type: 'INDEX_SET',
        index: val
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row py-3 mx-1 pl-2 align-items-center upLoadCard dropzone"
  }, isConvertFile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "rectangular",
    height: 50
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "cy-upload-photo col-12 ".concat(files.length > 0 ? 'col-md-3' : 'col-md-5', " bg-transparent"),
    variant: "outlined",
    icon: files.length > 0 ? 'view-1' : 'attachment',
    onClick: files.length > 0 ? handlePreview : open
  }, files.length > 0 ? t('waterleak.step1.index.displayPhoto') : isMobile ? t('waterleak.step1.index.addPhoto.mobile') : t('waterleak.step1.index.addPhoto.desktop')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: "col-12 col-md-5 ".concat(fileRejections.length > 0 && 'pt-4 ')
  }, getRootProps()), fileRejections.length < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: files.length < 1 ? 'disabled' : 'dark',
    weight: files.length < 1 ? 'light' : 'bold'
  }, files.length > 0 ? isDesktop && files[files.length - 1].name : t('waterleak.step1.index.fileFormat')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    variant: "danger"
  }, t('waterleak.step1.index.fileFormat')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], _extends({
    placeholder: t('waterleak.step1.index.fileFormat')
  }, getInputProps(), {
    className: "transparent"
  })))), files.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "text",
    className: "col-12 col-md-4",
    icon: "pencil-write",
    alignIcon: "right",
    onClick: open
  }, t('waterleak.step1.index.editPhoto'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row ml-1 mt-4 mb-3 ml-md-0 pl-md-3 mb-3"
  }, ((_state$context$index = state.context.index) === null || _state$context$index === void 0 ? void 0 : _state$context$index.length) > 4 && files.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
    id: "checkboxEstimateConfirm",
    name: "checkboxEstimateConfirm",
    className: "cy-check-capture",
    label: t('waterleak.step1.index.checkboxEstimateConfirm.label'),
    type: "checkbox",
    checked: state.context.toggleConfirmPhotometerFiles || false,
    onChange: handleToggleConfirmPhotometerFiles
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: fileRejections.length > 0 ? false : isShowPreviewModal,
    handleClose: handleClosePreviewModal,
    size: "xl",
    className: "modal-index",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: "pictureContainer m-2"
  }, getRootProps()), files.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: files[files.length - 1].preview,
    alt: ""
  })), fileRejections.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    variant: "danger",
    className: "mx-auto"
  }, t('waterleak.step1.index.fileFormat')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "text",
    className: "col-12",
    icon: "pencil-write",
    alignIcon: "right",
    onClick: open
  }, files.length > 0 ? t('waterleak.step1.index.editPhoto') : t('waterleak.step1.index.addPhoto.short')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-5 py-3 justify-content-between",
    style: {
      rowGap: '2rem'
    }
  }, showBtnWrongBill && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: 'col-12 col-md-3 bg-transparent',
    variant: "outlined",
    onClick: function onClick() {
      return handleOpenModal();
    }
  }, t('waterleak.step1.wrongInvoice')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    className: "cy-btn-step-1 col-12 col-md-3 ".concat(!showBtnWrongBill && 'm-auto', " ").concat(state.context.toggleConfirmInfo && state.context.selectedContract.eligibility !== ELIGIBILITY.OK ? 'invisible' : ''),
    onClick: function onClick() {
      goToNextStep();
    },
    isDisabled: (state.context.toggleConfirmInvoice && ((_state$context12 = state.context) === null || _state$context12 === void 0 ? void 0 : (_state$context12$sele = _state$context12.selectedMeter) === null || _state$context12$sele === void 0 ? void 0 : _state$context12$sele.type) === TYPE_METER.ESTIMATION ? !state.context.toggleConfirmPhotometerFiles : !state.context.toggleConfirmInvoice) || !state.context.toggleConfirmInfo || state.matches({
      step1: {
        contract: {
          go2Step2: {}
        }
      }
    }),
    type: "submit"
  }, t('waterleak.step1.nextStep')))));
}

/***/ }),

/***/ "./assets/js/components/WaterLeak/Step2.jsx":
/*!**************************************************!*\
  !*** ./assets/js/components/WaterLeak/Step2.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/es/index.js");
/* harmony import */ var _MachineContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MachineContext */ "./assets/js/components/WaterLeak/MachineContext.jsx");
/* harmony import */ var _img_waterLeak_contract_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../img/waterLeak/contract.svg */ "./assets/img/waterLeak/contract.svg");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useConvertCompress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useConvertCompress */ "./assets/js/hooks/useConvertCompress.js");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Step2(_ref) {
  var _state$context, _state$context2, _state$context4, _state$context5, _state$context5$selec, _state$context$select, _state$context$select2, _state$context6, _state$context7, _state$context8, _state$context9, _state$context10, _state$context11;
  var goPreviousStep = _ref.goPreviousStep;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_10__["useIsMobile"])();
  var isDesktop = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_10__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
    _useState4 = _slicedToArray(_useState3, 2),
    files = _useState4[0],
    setFiles = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([false, false, false]),
    _useState6 = _slicedToArray(_useState5, 2),
    checkedLeakPlace = _useState6[0],
    setLeakPlace = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState8 = _slicedToArray(_useState7, 2),
    locationLeakSelect = _useState8[0],
    setLocationLeakSelect = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([false, false]),
    _useState10 = _slicedToArray(_useState9, 2),
    checkedLeakPlaceRareCase = _useState10[0],
    setLeakPlaceRareCase = _useState10[1];
  var containerSelectLeak = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var containerDescOther = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var containerSelectDescOther = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var machineInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MachineContext__WEBPACK_IMPORTED_MODULE_4__["MachineContext"]);
  var send = machineInstance.WaterLeakService.send;
  var state = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(machineInstance.WaterLeakService, function (state) {
    return state;
  });
  var isKO_400 = state.matches({
    formSubmitResponse: 'KO_400'
  });
  var errorsValidation = state.context.errorsValidation;
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loaderSubmit = _useState12[0],
    setLoaderSubmit = _useState12[1];
  var errorMessage = t('waterleak.step2.error');
  var _window$tsme_data = window.tsme_data,
    degrevementEdito = _window$tsme_data.degrevementEdito,
    isIntranet = _window$tsme_data.isIntranet;
  var scroll = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var leakPlaceOption = [{
    label: t('waterleak.step2.leak_place.canapcpt'),
    checked: false,
    value: 'CANAPCPT'
  }, {
    label: t('waterleak.step2.leak_place.accapcpt'),
    checked: false,
    value: 'ACCAPCPT'
  }, {
    label: t('waterleak.step2.leak_place.other'),
    checked: false
  }];
  var leakPlaceRareCaseOption = [{
    label: t('waterleak.step2.leak_place_rare.value01'),
    checked: false,
    value: true
  }, {
    label: t('waterleak.step2.leak_place_rare.value02'),
    checked: false,
    value: false
  }];
  var locationOptions = [{
    value: 'EQPSANIT',
    label: t('waterleak.step2.location.eqpsanit')
  }, {
    value: 'EQPSANIT ',
    label: t('waterleak.step2.eqpsanit2')
  }, {
    value: 'EQPCHAUF',
    label: t('waterleak.step2.location.eqpchauf')
  }, {
    value: 'EQPCHAUF',
    label: t('waterleak.step2.location.eqpchauf2')
  }, {
    value: 'APPMENAG',
    label: t('waterleak.step2.location.appmenag')
  }, {
    value: 'INSTPRIV',
    label: t('waterleak.step2.location.instpriv')
  }, {
    value: 'INSTPRIV',
    label: t('waterleak.step2.location.instpriv2')
  }, {
    value: 'INSTPRIV',
    label: t('waterleak.step2.location.instpriv3')
  }, {
    value: 'INSTPRIV',
    label: t('waterleak.step2.location.instpriv4')
  }];
  if (isKO_400 && errorsValidation !== null && errorsValidation !== void 0 && errorsValidation.validation_errors) {
    errorMessage = '';
    var maxErrorsMessage = Object.entries(errorsValidation === null || errorsValidation === void 0 ? void 0 : errorsValidation.validation_errors).slice(0, 2);
    maxErrorsMessage.forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        value = _ref3[1];
      errorMessage += "".concat(value, " <br/>");
    });
  }
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLoaderSubmit(false);
  }, [isKO_400]);
  var handleLeakPlace = function handleLeakPlace(_ref4) {
    var target = _ref4.target;
    setLeakPlace(function () {
      var arrResult = [false, false, false];
      arrResult[target.value] = target.checked;
      return arrResult;
    }, target.value == 2 ? send({
      type: 'SELECTED_PLACE_OTHER'
    }) : send({
      type: 'SELECTED_PLACE',
      selectedLeakPlace: leakPlaceOption[target.value].value
    }));
  };
  var handleLeakPlaceRareCase = function handleLeakPlaceRareCase(_ref5) {
    var target = _ref5.target;
    setLeakPlaceRareCase(function () {
      var arrResult = [false, false];
      arrResult[target.value] = target.checked;
      return arrResult;
    }, send({
      type: 'SELECTED_WASTE',
      leakInWasteWater: leakPlaceRareCaseOption[target.value].value
    }));
  };
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
  };
  var handleOpenModal = function handleOpenModal() {
    setShowModal(true);
  };
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isConvertFile = _useState14[0],
    setIsConvertFile = _useState14[1];
  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
      accept: _app_constants__WEBPACK_IMPORTED_MODULE_11__["ACCEPTED_FORMAT_IMAGE_AND_PDF"],
      maxSize: _app_constants__WEBPACK_IMPORTED_MODULE_11__["MAX_UPLOAD_FILE_SIZE"],
      maxFiles: 1,
      onDrop: function () {
        var _onDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(acceptedFiles) {
          var fileTemp, _yield$useConvertComp, fileConvert, objectURL, _fileConvert, _objectURL;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                setIsConvertFile(true);
                _context.prev = 1;
                fileTemp = acceptedFiles[0];
                if (!(fileTemp.type !== 'application/pdf')) {
                  _context.next = 13;
                  break;
                }
                _context.next = 6;
                return Object(_hooks_useConvertCompress__WEBPACK_IMPORTED_MODULE_7__["useConvertCompress"])(fileTemp);
              case 6:
                _yield$useConvertComp = _context.sent;
                fileConvert = _yield$useConvertComp.fileConvert;
                objectURL = _yield$useConvertComp.objectURL;
                setFiles([Object.assign(fileTemp, {
                  preview: objectURL
                })]);
                send({
                  type: 'DROP_FILE',
                  attachFile: fileConvert
                });
                _context.next = 17;
                break;
              case 13:
                _fileConvert = fileTemp;
                _objectURL = URL.createObjectURL(fileTemp);
                setFiles([Object.assign(fileTemp, {
                  preview: _objectURL
                })]);
                send({
                  type: 'DROP_FILE',
                  attachFile: _fileConvert
                });
              case 17:
                _context.next = 22;
                break;
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](1);
                console.error('Error during file processing:', _context.t0);
              case 22:
                _context.prev = 22;
                setIsConvertFile(false);
                return _context.finish(22);
              case 25:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 19, 22, 25]]);
        }));
        function onDrop(_x2) {
          return _onDrop.apply(this, arguments);
        }
        return onDrop;
      }()
    }),
    getInputProps = _useDropzone.getInputProps,
    open = _useDropzone.open,
    fileRejections = _useDropzone.fileRejections;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(function (file) {
        return URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);
  var handleDeleteAttach = function handleDeleteAttach() {
    setFiles([]);
    send({
      type: 'DELETE_FILE',
      attachFile: []
    });
  };
  var handleLocationLeakSelect = function handleLocationLeakSelect(select) {
    setLocationLeakSelect(select, send({
      type: 'SELECTED_PRECISION',
      selectedLeakPlace: select.value
    }));
  };
  var handleConfirmBeforeSubmit = function handleConfirmBeforeSubmit(_ref6) {
    var target = _ref6.target;
    send({
      type: 'CONFIRM_FORM',
      toggleConfirmFormData: target.checked
    });
  };
  var showDescOther = ((_state$context = state.context) === null || _state$context === void 0 ? void 0 : _state$context.attachFile) && state.context.toggleLeakPlaceOther && state.matches({
    step2: 'leakPrecision'
  });
  var showSelectDescOther = ((_state$context2 = state.context) === null || _state$context2 === void 0 ? void 0 : _state$context2.attachFile) && state.context.toggleLeakPlaceWaste && state.matches({
    step2: 'waste'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _state$context3;
    if ((_state$context3 = state.context) !== null && _state$context3 !== void 0 && _state$context3.attachFile) {
      var current = containerSelectLeak.current;
      scroll(current === null || current === void 0 ? void 0 : current.offsetTop);
    }
  }, [(_state$context4 = state.context) === null || _state$context4 === void 0 ? void 0 : _state$context4.attachFile]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (showDescOther) {
      var current = containerDescOther.current;
      scroll(current === null || current === void 0 ? void 0 : current.offsetTop);
    }
  }, [showDescOther]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (showSelectDescOther) {
      var current = containerSelectDescOther.current;
      scroll(current === null || current === void 0 ? void 0 : current.offsetTop);
    }
  }, [showSelectDescOther]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: isShowModal,
    handleClose: handleCloseModal,
    size: 'xl',
    backdrop: "static",
    className: "modal-index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-5 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "large",
    className: "mb-3",
    weight: "bold",
    align: "left"
  }, t('waterleak.step2.no_certificate')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    color: "disabled",
    weight: "regular"
  }, t('waterleak.step2.no_certificate_info'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_waterLeak_contract_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    style: {
      minHeight: '30vh'
    },
    alt: t('waterleak.step2.representation_of_contracts')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-5 py-3 justify-content-between",
    style: {
      rowGap: '2rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "col-12 col-md-4 bg-transparent",
    variant: "outlined",
    onClick: handleCloseModal
  }, t('waterleak.step2.i_have_certificate')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "col-12 col-md-6",
    onClick: function onClick() {
      return window.location.assign(degrevementEdito);
    }
  }, t('waterleak.step2.leave_request_form')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "mb-2 mt-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row  mx-1 justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-12 col-md-6 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "pin-location-1",
    className: "col-2 col-md-1",
    variant: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-10 col-md-11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, t('waterleak.step2.address_served')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "text",
    weight: "medium"
  }, (_state$context5 = state.context) === null || _state$context5 === void 0 ? void 0 : (_state$context5$selec = _state$context5.selectedContract) === null || _state$context5$selec === void 0 ? void 0 : _state$context5$selec.address))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-12 col-md-6 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "common-file-text",
    className: "col-2 col-md-1",
    variant: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-10 col-md-11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, t('waterleak.step2.invoice_to_process')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "text",
    weight: "medium"
  }, (_state$context$select = state.context.selectedContract) === null || _state$context$select === void 0 ? void 0 : (_state$context$select2 = _state$context$select.invoice) === null || _state$context$select2 === void 0 ? void 0 : _state$context$select2.number))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "bg-white mb-2 mt-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container px-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h2",
    weight: "bold",
    align: "left"
  }, t('waterleak.step2.send_us_repair_certificate_or_invoice')), isConvertFile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mb-2 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "rectangular",
    height: 50
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], _extends({}, getInputProps(), {
    className: "transparent"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row ml-1 p-3 mb-3 align-items-center attachementCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: files.length > 0 ? 'text' : 'outlined',
    className: "cy-upload-attestation col-12 col-md-5",
    icon: files.length > 0 ? 'pencil-write' : 'attachment',
    onClick: open
  }, files.length > 0 ? "Changer d'attestation" : 'Joindre votre attestation'), files.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    className: "col-5",
    color: "disabled",
    weight: "regular"
  }, files.length > 0 && isDesktop && files[files.length - 1].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "text",
    className: "col-12 col-md-2",
    icon: isDesktop && 'bin-2-alternate',
    onClick: handleDeleteAttach
  }, isMobile && 'Supprimer')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "col-12 col-md-7",
    variant: "caption",
    color: fileRejections.length > 0 ? 'danger' : 'disabled',
    weight: "regular"
  }, t('waterleak.step2.accepted_files')))), !((_state$context6 = state.context) !== null && _state$context6 !== void 0 && _state$context6.attachFile) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row ml-1 p-3 mb-3 align-items-center helperCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "information-circle",
    className: "col-1",
    variant: "bold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "col-9",
    variant: "caption",
    color: "dark",
    weight: "regular"
  }, t('waterleak.step2.must_specify'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, t('waterleak.step2.companys_siretsiren_number')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, t('waterleak.step2.location_leak')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, t('waterleak.step2.mention_leak_repaired')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, t('waterleak.step2.date_repair')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, t('waterleak.step2.report_certificate'))))))), ((_state$context7 = state.context) === null || _state$context7 === void 0 ? void 0 : _state$context7.attachFile) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "mb-2 mt-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: containerSelectLeak,
    className: "cy-bloc-where-leak container px-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h2",
    className: "mb-3",
    weight: "bold",
    align: "left"
  }, t('waterleak.step2.where_is_leak')), leakPlaceOption.map(function (leakPlaceItem, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
      id: "leakPlace".concat(index),
      key: "leakPlace".concat(index),
      name: "leakPlace".concat(index),
      label: leakPlaceItem.label,
      type: "radio",
      className: "my-3",
      value: index,
      checked: checkedLeakPlace[index] || false,
      onChange: handleLeakPlace
    });
  }), !checkedLeakPlace.find(function (leakPlaceSelect) {
    return leakPlaceSelect === true;
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row ml-1 p-3 mt-4 mb-3 align-items-center helperCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "information-circle",
    className: "col-1",
    variant: "bold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "col-9",
    variant: "caption",
    color: "dark",
    weight: "regular"
  }, t('waterleak.step2.leak_place_info'))))), showDescOther && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "mb-2 mt-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: containerDescOther,
    className: "cy-bloc-desc-other container px-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h2",
    className: "mb-3",
    weight: "bold",
    align: "left"
  }, t('waterleak.step2.please_specify_location_leak')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzSelect"], {
    placeholder: 'Choisissez parmi les propositions',
    options: locationOptions,
    value: locationLeakSelect,
    className: "col-12 col-md-6",
    onChange: handleLocationLeakSelect,
    name: 'locationLeak'
  })))), showSelectDescOther && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "mb-2 mt-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: containerSelectDescOther,
    className: "cy-bloc-choice-water container px-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h2",
    className: "mb-3",
    weight: "bold",
    align: "left"
  }, t('waterleak.step2.regarding_volume_water_leak')), leakPlaceRareCaseOption.map(function (leakPlaceItem, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
      id: "leakPlaceRareCase".concat(index),
      key: "leakPlaceRareCase".concat(index),
      name: "leakPlaceRareCase".concat(index),
      label: leakPlaceItem.label,
      type: "radio",
      className: "my-3",
      value: index,
      checked: checkedLeakPlaceRareCase[index] || false,
      onChange: handleLeakPlaceRareCase
    });
  }))), ((_state$context8 = state.context) === null || _state$context8 === void 0 ? void 0 : _state$context8.attachFile) && ((_state$context9 = state.context) === null || _state$context9 === void 0 ? void 0 : _state$context9.selectedLeakPlace) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-4 ml-1 mt-4 mb-3 ml-md-0 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
    id: "checkboxConfirm",
    name: "checkboxConfirm",
    className: "cy-check-confirm-validation",
    label: "Je confirme l\u2019exactitude des informations transmises et je souhaite que ma demande de remise sur facture suite \xE0 une fuite soit \xE9tudi\xE9e dans le cadre de la loi Warsmann.",
    type: "checkbox",
    checked: state.context.toggleConfirmFormData || false,
    onChange: handleConfirmBeforeSubmit
  }))), isKO_400 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-between",
    style: {
      rowGap: '2rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    variant: "danger",
    className: "col-12 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: errorMessage
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-5 py-3 justify-content-between",
    style: {
      rowGap: '2rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "col-12 col-md-3 bg-transparent",
    variant: "outlined",
    icon: "arrow-left",
    onClick: function onClick() {
      goPreviousStep();
    }
  }, t('waterleak.step2.previous_step')), !((_state$context10 = state.context) !== null && _state$context10 !== void 0 && _state$context10.attachFile) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "col-12 col-md-3 ml-auto mr-1 bg-transparent",
    variant: "text",
    icon: "messages-bubble-question",
    alignIcon: "right",
    onClick: handleOpenModal
  }, t('waterleak.step2.i_dont_have_certificate')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    loader: loaderSubmit,
    className: "cy-btn-step2 col-12 col-md-3",
    onClick: function onClick() {
      setLoaderSubmit(true, send('SUBMIT_FORM'));
    },
    isDisabled: isIntranet || !((_state$context11 = state.context) !== null && _state$context11 !== void 0 && _state$context11.attachFile) || !state.context.toggleConfirmFormData,
    type: "submit"
  }, t('waterleak.step2.send_request')))));
}

/***/ }),

/***/ "./assets/js/components/WaterLeak/Stepper.jsx":
/*!****************************************************!*\
  !*** ./assets/js/components/WaterLeak/Stepper.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stepper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MachineContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MachineContext */ "./assets/js/components/WaterLeak/MachineContext.jsx");
/* harmony import */ var _Step1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Step1 */ "./assets/js/components/WaterLeak/Step1.jsx");
/* harmony import */ var _Step2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Step2 */ "./assets/js/components/WaterLeak/Step2.jsx");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var stepperProps = {
  activeStep: 0,
  variant: "complexed",
  displayProgress: true,
  header: ["Facture à traiter", "Informations concernant la fuite"]
};
function Stepper(props) {
  var indice = props.indice || 0;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(indice),
    _useState2 = _slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var machineInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MachineContext__WEBPACK_IMPORTED_MODULE_2__["MachineContext"]);
  var send = machineInstance.WaterLeakService.send;
  var scroll = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__["default"])({
    top: 0
  });
  var handleGoNext = function handleGoNext() {
    setStep(step + 1, send("click"));
  };
  var handleGoBack = function handleGoBack() {
    setStep(step - 1, send("click"));
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    scroll();
  }, [step]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mt-4 p-0 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"], _extends({}, stepperProps, {
    className: "bg-transparent",
    activeStep: step
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"].SzHeader, {
    className: "bg-transparent mx-auto justify-content-center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"].SzStep, {
    className: "bg-transparent p-0",
    index: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    goToNextStep: handleGoNext
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"].SzStep, {
    className: "bg-transparent p-0",
    index: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    goPreviousStep: handleGoBack
  })))));
}

/***/ }),

/***/ "./assets/js/components/WaterLeak/WaterLeakMachine.js":
/*!************************************************************!*\
  !*** ./assets/js/components/WaterLeak/WaterLeakMachine.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var _services_WaterLeak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/WaterLeak */ "./assets/js/services/WaterLeak/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var loadContracts = {
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'getContracts',
        src: function src() {
          return Object(_services_WaterLeak__WEBPACK_IMPORTED_MODULE_1__["fetchContracts"])();
        },
        onDone: [{
          cond: 'isResOK',
          target: '#contract',
          actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
            contracts: function contracts(context, event) {
              return event.data.contracts;
            }
          })
        }],
        onError: {
          target: 'failed',
          actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
            error: function error(context, event) {
              return event.data;
            }
          })
        }
      }
    },
    failed: {
      on: {
        RETRY: {
          target: 'loading'
        },
        ERROR: {
          target: '#serverError'
        }
      }
    }
  }
};
var waterLeakMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__["createMachine"])({
  id: 'waterLeak',
  initial: 'step1',
  context: {
    contracts: [],
    selectedRef: null,
    selectedContract: null,
    selectedMeter: null,
    selectedLeakPlace: null,
    leakInWasteWater: null,
    attachFile: null,
    toggleConfirmInfo: false,
    toggleConfirmInvoice: false,
    toggleConfirmPhotometerFiles: false,
    toggleLeakPlaceOther: false,
    toggleLeakPlaceWaste: false,
    toggleConfirmFormData: false,
    formValid: false
  },
  states: {
    step1: {
      id: 'step1',
      initial: 'loadContracts',
      states: {
        loadContracts: _objectSpread({}, loadContracts),
        contract: {
          id: 'contract',
          initial: 'contractSelect',
          type: 'parallel',
          states: {
            contractSelect: {
              id: 'contractSelect',
              initial: 'idle',
              on: {
                SELECTED_CONTRACT: {
                  target: '#loadContract',
                  actions: ['setSelectedRef', 'clearSelectedContract']
                }
              },
              states: {
                idle: {},
                loadContract: {
                  id: 'loadContract',
                  initial: 'loading',
                  states: {
                    loading: {
                      invoke: {
                        id: 'getContract',
                        src: function src(context) {
                          return Object(_services_WaterLeak__WEBPACK_IMPORTED_MODULE_1__["fetchContractByRef"])(context.selectedRef);
                        },
                        onDone: [{
                          cond: 'isResOK',
                          actions: ['setSelectedContract'],
                          target: '#infos'
                        }, {
                          cond: 'isResKO_502',
                          target: '#serverError'
                        }],
                        onError: {
                          target: '#serverError'
                        }
                      }
                    }
                  }
                }
              }
            },
            infos: {
              id: 'infos',
              initial: 'idle',
              states: {
                idle: {}
              },
              on: {
                CONFIRM_INFO: [{
                  target: 'notEligible.KO',
                  cond: 'isNotEligible',
                  actions: ['setToggleConfirmInfo']
                }, {
                  target: '#multiMeters',
                  cond: 'hasMultiMeters',
                  actions: ['setToggleConfirmInfo']
                }, {
                  target: '#invoice.lastInvoice',
                  cond: 'isEligible',
                  actions: ['setSingleMeter', 'setToggleConfirmInfo']
                }]
              }
            },
            notEligible: {
              initial: 'idle',
              states: {
                idle: {},
                KO: {
                  type: 'final'
                }
              }
            },
            multiMeters: {
              id: 'multiMeters',
              initial: 'infos',
              states: {
                infos: {
                  on: {
                    SELECTED_METER: {
                      target: '#invoice.lastInvoice',
                      actions: ['setSelectedMeter']
                    }
                  }
                }
              }
            },
            invoice: {
              id: 'invoice',
              initial: 'idle',
              states: {
                idle: {},
                lastInvoice: {
                  always: [{
                    target: '#multiMeters',
                    cond: 'hasMultiMeters'
                  }],
                  on: {
                    CONFIRM_INVOICE: [{
                      target: '#photoMeter.idle',
                      cond: 'isEstimated',
                      actions: ['setToggleConfirmInvoice']
                    }, {
                      target: '#go2Step2',
                      actions: ['setToggleConfirmInvoice']
                    }]
                  }
                }
              }
            },
            photoMeter: {
              id: 'photoMeter',
              initial: 'idle',
              states: {
                idle: {}
              },
              on: {
                INDEX_SET: {
                  actions: ['setIndex', 'setSideEffectToggleConfirmPhotometerFiles']
                },
                DROP_FILE: {
                  actions: ['setPhotoFile', 'setSideEffectToggleConfirmPhotometerFiles']
                },
                CONFIRM_PHOTOMETER: [{
                  target: '#go2Step2',
                  cond: 'isIndexPhotoValid',
                  actions: ['setToggleConfirmPhotometerFiles']
                }, {
                  actions: ['setToggleConfirmPhotometerFiles']
                }]
              }
            },
            go2Step2: {
              id: 'go2Step2',
              initial: 'idle',
              states: {
                idle: {}
              },
              on: {
                click: [{
                  cond: 'isValid4Step2',
                  target: '#step2'
                }]
              }
            }
          }
        }
      }
    },
    step2: {
      id: 'step2',
      initial: 'attachFile',
      type: 'parallel',
      states: {
        attachFile: {
          on: {
            DROP_FILE: {
              target: 'whereWasTheLeak',
              actions: ['setAttachFile']
            },
            DELETE_FILE: {
              target: '#step2',
              actions: ['setAttachFile']
            }
          }
        },
        whereWasTheLeak: {
          on: {
            SELECTED_PLACE: [{
              actions: ['setLeakPlace', 'setHideLeakPlaceOther', 'setHideLeakPlaceWaste']
            }],
            CONFIRM_FORM: {
              target: '#submitForm',
              cond: 'isFormValid',
              actions: ['setToggleConfirmFormData']
            },
            SELECTED_PLACE_OTHER: {
              target: 'leakPrecision',
              actions: ['setShowLeakPlaceOther', 'clearLeakPlace', 'setHideLeakPlaceWaste']
            }
          }
        },
        leakPrecision: {
          on: {
            SELECTED_PRECISION: [{
              target: 'waste',
              cond: 'isSanitation',
              actions: ['setLeakPlace', 'setShowLeakPlaceWaste']
            }, {
              actions: ['setLeakPlace']
            }]
          }
        },
        waste: {
          on: {
            SELECTED_WASTE: {
              actions: ['setWaste']
            },
            CONFIRM_FORM: {
              target: '#submitForm',
              cond: 'isFormValid',
              actions: ['setToggleConfirmFormData']
            }
          }
        },
        goBack2Step1: {
          on: {
            click: {
              target: '#invoice.lastInvoice'
            }
          }
        },
        submitForm: {
          id: 'submitForm',
          initial: 'idle',
          states: {
            idle: {},
            postForm: {
              invoke: {
                id: 'postForm',
                src: function src(context) {
                  var data = {
                    reference: context.selectedRef,
                    idPds: context.selectedMeter.idPds,
                    matricule: context.selectedMeter.matricule,
                    habitationLocal: context.toggleConfirmInfo,
                    confirmInvoice: context.toggleConfirmInvoice,
                    attestation: context.attachFile,
                    confirmData: context.toggleConfirmFormData,
                    leakLocation: context.selectedLeakPlace,
                    leakInWasteWater: context.leakInWasteWater
                  };
                  if (context.toggleConfirmPhotometerFiles) {
                    data = _objectSpread(_objectSpread({}, data), {}, {
                      index: context.index,
                      photo: context.photo,
                      confirmIndex: context.toggleConfirmPhotometerFiles
                    });
                  }
                  return Object(_services_WaterLeak__WEBPACK_IMPORTED_MODULE_1__["postFormValidation"])(data);
                },
                onDone: [{
                  cond: 'isResKO_400',
                  actions: ['setErrorsValidation'],
                  target: '#formSubmitResponse.KO_400'
                }, {
                  cond: 'isResKO_DELAI',
                  target: '#formSubmitResponse.KO_DELAI'
                }, {
                  cond: 'isResKO_LOC',
                  target: '#formSubmitResponse.KO_LOC'
                }, {
                  cond: 'isResOK',
                  target: '#formSubmitResponse.OK'
                }, {
                  target: '#serverError'
                }],
                onError: {
                  target: '#serverError'
                }
              }
            }
          },
          on: {
            SUBMIT_FORM: {
              target: '#submitForm.postForm'
            }
          }
        }
      }
    },
    formSubmitResponse: {
      id: 'formSubmitResponse',
      initial: 'idle',
      states: {
        idle: {},
        KO_400: {},
        KO_502: {},
        KO_DELAI: {},
        KO_LOC: {},
        OK: {}
      }
    },
    serverError: {
      id: 'serverError'
    }
  }
}, {
  actions: {
    setContracts: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      contracts: function contracts(context, event) {
        return event.contracts;
      }
    }),
    setSelectedRef: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      selectedRef: function selectedRef(context, event) {
        return event.reference;
      }
    }),
    setSelectedContract: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      selectedContract: function selectedContract(context, event) {
        return event.data.contractInformation;
      }
    }),
    clearSelectedContract: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      selectedContract: function selectedContract() {
        return {};
      },
      toggleConfirmInfo: function toggleConfirmInfo() {
        return false;
      }
    }),
    setToggleConfirmInfo: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      toggleConfirmInfo: function toggleConfirmInfo(context, event) {
        return event.toggleConfirmInfo;
      }
    }),
    setToggleConfirmInvoice: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      toggleConfirmInvoice: function toggleConfirmInvoice(context, event) {
        return event.toggleConfirmInvoice;
      }
    }),
    setToggleConfirmPhotometerFiles: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      toggleConfirmPhotometerFiles: function toggleConfirmPhotometerFiles(context, event) {
        return event.toggleConfirmPhotometerFiles;
      }
    }),
    setSideEffectToggleConfirmPhotometerFiles: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      toggleConfirmPhotometerFiles: function toggleConfirmPhotometerFiles(context) {
        return !!(context.toggleConfirmPhotometerFiles && (context === null || context === void 0 ? void 0 : context.index.length) === 5 && context.photo.length > 0);
      }
    }),
    setSingleMeter: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      selectedMeter: function selectedMeter(context) {
        var _context$selectedCont;
        return (_context$selectedCont = context.selectedContract) === null || _context$selectedCont === void 0 ? void 0 : _context$selectedCont.counters[0];
      }
    }),
    setSelectedMeter: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      selectedMeter: function selectedMeter(context, event) {
        return event.selectedMeter;
      }
    }),
    setIndex: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      index: function index(context, event) {
        return event.index;
      }
    }),
    setPhotoFile: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      photo: function photo(context, event) {
        return event.photo;
      }
    }),
    setAttachFile: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      attachFile: function attachFile(context, event) {
        return event.attachFile;
      }
    }),
    setLeakPlace: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      selectedLeakPlace: function selectedLeakPlace(context, event) {
        return event.selectedLeakPlace;
      }
    }),
    clearLeakPlace: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      selectedLeakPlace: function selectedLeakPlace() {
        return null;
      }
    }),
    setShowLeakPlaceOther: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      toggleLeakPlaceOther: function toggleLeakPlaceOther() {
        return true;
      }
    }),
    setShowLeakPlaceWaste: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      toggleLeakPlaceWaste: function toggleLeakPlaceWaste() {
        return true;
      }
    }),
    setHideLeakPlaceOther: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      toggleLeakPlaceOther: function toggleLeakPlaceOther() {
        return false;
      }
    }),
    setHideLeakPlaceWaste: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      toggleLeakPlaceWaste: function toggleLeakPlaceWaste() {
        return false;
      }
    }),
    setWaste: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      leakInWasteWater: function leakInWasteWater(context, event) {
        return event.leakInWasteWater;
      }
    }),
    setToggleConfirmFormData: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      toggleConfirmFormData: function toggleConfirmFormData(context, event) {
        return event.toggleConfirmFormData;
      }
    }),
    clearContext: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      selectedLeakPlace: function selectedLeakPlace() {
        return null;
      },
      selectedMeter: function selectedMeter() {
        return null;
      },
      selectedRef: function selectedRef() {
        return null;
      }
    }),
    setErrorsValidation: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      errorsValidation: function errorsValidation(context, event) {
        return event.data.data;
      }
    })
  },
  guards: {
    isEligible: function isEligible(context) {
      var _context$selectedCont2;
      return (context === null || context === void 0 ? void 0 : (_context$selectedCont2 = context.selectedContract) === null || _context$selectedCont2 === void 0 ? void 0 : _context$selectedCont2.eligibility) === 'OK';
    },
    isNotEligible: function isNotEligible(context) {
      var _context$selectedCont3;
      return (context === null || context === void 0 ? void 0 : (_context$selectedCont3 = context.selectedContract) === null || _context$selectedCont3 === void 0 ? void 0 : _context$selectedCont3.eligibility) !== 'OK';
    },
    hasMultiMeters: function hasMultiMeters(context) {
      var _context$selectedCont4;
      return ((_context$selectedCont4 = context.selectedContract) === null || _context$selectedCont4 === void 0 ? void 0 : _context$selectedCont4.multicounter) === true && !context.selectedMeter;
    },
    isEstimated: function isEstimated(context) {
      var _context$selectedMete;
      return (context === null || context === void 0 ? void 0 : (_context$selectedMete = context.selectedMeter) === null || _context$selectedMete === void 0 ? void 0 : _context$selectedMete.type) === 'ESTIMATION';
    },
    isIndexPhotoValid: function isIndexPhotoValid(context) {
      var _context$index, _context$photo;
      return (context === null || context === void 0 ? void 0 : (_context$index = context.index) === null || _context$index === void 0 ? void 0 : _context$index.length) === 5 && (context === null || context === void 0 ? void 0 : (_context$photo = context.photo) === null || _context$photo === void 0 ? void 0 : _context$photo.length) > 0;
    },
    isValid4Step2: function isValid4Step2(context) {
      return context.toggleConfirmInfo === true && context.toggleConfirmInvoice === true;
    },
    isErrorInvoice: function isErrorInvoice(context) {
      return (context === null || context === void 0 ? void 0 : context.errorInvoice) === true;
    },
    isSanitation: function isSanitation(context) {
      var _context$selectedCont5;
      return (context === null || context === void 0 ? void 0 : (_context$selectedCont5 = context.selectedContract) === null || _context$selectedCont5 === void 0 ? void 0 : _context$selectedCont5.sanitation) === true;
    },
    isFormValid: function isFormValid(context) {
      return !!context.selectedLeakPlace;
    },
    isResKO_400: function isResKO_400(context, event) {
      var _event$data;
      return (event === null || event === void 0 ? void 0 : (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.status) === 400;
    },
    isResKO_502: function isResKO_502(context, event) {
      var _event$data2;
      return (event === null || event === void 0 ? void 0 : (_event$data2 = event.data) === null || _event$data2 === void 0 ? void 0 : _event$data2.status) === 502;
    },
    isResKO_DELAI: function isResKO_DELAI(context, event) {
      var _event$data3;
      return (event === null || event === void 0 ? void 0 : (_event$data3 = event.data) === null || _event$data3 === void 0 ? void 0 : _event$data3.message) === 'KO_DELAI';
    },
    isResKO_LOC: function isResKO_LOC(context, event) {
      var _event$data4;
      return (event === null || event === void 0 ? void 0 : (_event$data4 = event.data) === null || _event$data4 === void 0 ? void 0 : _event$data4.message) === 'KO_LOC';
    },
    isResOK: function isResOK(context, event) {
      var _event$data5;
      return (event === null || event === void 0 ? void 0 : (_event$data5 = event.data) === null || _event$data5 === void 0 ? void 0 : _event$data5.message) === 'OK';
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (waterLeakMachine);

/***/ }),

/***/ "./assets/js/components/WaterLeak/components/SimplePhotoMeter/index.jsx":
/*!******************************************************************************!*\
  !*** ./assets/js/components/WaterLeak/components/SimplePhotoMeter/index.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimplePhotoMeter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/es/index.js");
/* harmony import */ var _MachineContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../MachineContext */ "./assets/js/components/WaterLeak/MachineContext.jsx");
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







function SimplePhotoMeter(_ref) {
  var _state$context;
  var matricule = _ref.matricule,
    onChange = _ref.onChange;
  var inputs = {
    input0: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),
    input1: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),
    input2: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),
    input3: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),
    input4: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null)
  };
  var machineInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MachineContext__WEBPACK_IMPORTED_MODULE_6__["MachineContext"]);
  var state = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(machineInstance.WaterLeakService, function (state) {
    return state;
  });
  var currentIndex = [];
  var initValues = {
    input0: '',
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  };
  if (state !== null && state !== void 0 && (_state$context = state.context) !== null && _state$context !== void 0 && _state$context.index) {
    var _state$context2;
    currentIndex = state === null || state === void 0 ? void 0 : (_state$context2 = state.context) === null || _state$context2 === void 0 ? void 0 : _state$context2.index.split('');
    initValues = {
      input0: currentIndex[0],
      input1: currentIndex[1],
      input2: currentIndex[2],
      input3: currentIndex[3],
      input4: currentIndex[4]
    };
  }
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
    _useState2 = _slicedToArray(_useState, 2),
    isDisabledBtn = _useState2[0],
    setIsDisabledBtn = _useState2[1];
  var errorLength = 'Un seul chiffre par cellule';
  var errorRequired = 'Votre saisie est incomplète, merci de renseigner les 5 champs ci-dessus.';
  var SignupSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
    input0: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().length(1, errorLength).required(errorRequired),
    input1: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().length(1, errorLength).required(errorRequired),
    input2: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().length(1, errorLength).required(errorRequired),
    input3: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().length(1, errorLength).required(errorRequired),
    input4: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().length(1, errorLength).required(errorRequired)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row py-3 mx-1 align-items-center photometerCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-sm-12  col-md-4 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "gauge-dashboard-1",
    className: "col-2",
    variant: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, "N\xB0 du compteur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "text",
    weight: "medium"
  }, matricule))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initValues,
    validationSchema: SignupSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: function onSubmit() {}
  }, function (_ref2) {
    var values = _ref2.values,
      errors = _ref2.errors,
      handleChange = _ref2.handleChange,
      handleSubmit = _ref2.handleSubmit,
      setErrors = _ref2.setErrors;
    SignupSchema.isValid(values).then(function (res) {
      if (res && isDisabledBtn) {
        setIsDisabledBtn(false);
      }
      if (!res) {
        setIsDisabledBtn(true);
      }
    });
    var formatIndex = function formatIndex(inputs) {
      var index = '';
      for (var element in inputs) {
        var value = inputs[element].current.value;
        if (parseInt(value) >= 0) {
          index += value;
        }
      }
      return index;
    };
    var onChangeInput = function onChangeInput(e) {
      e.preventDefault();
      e.stopPropagation();
      var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;
      var reg = /^\d?$/;
      var NextIndex = Object.keys(inputs).indexOf(name) + 1;
      var inputLength = Object.keys(inputs).length;
      var nextRefIndex = 'input' + NextIndex;
      if (errors[name]) {
        var newErrors = _objectSpread({}, errors);
        delete newErrors[name];
        setErrors(newErrors);
      }
      if (reg.test(value) || values[name].toString().length > value.toString().length) {
        handleChange(e);
        if (NextIndex < inputLength && value.length > 0) {
          inputs[nextRefIndex].current.focus();
        }
        formatIndex(inputs);
        onChange(formatIndex(inputs));
      }
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onSubmit: handleSubmit,
      className: "col-12 col-md-5 justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      ref: inputs.input0,
      name: "input0",
      type: "text",
      value: values.input0,
      onChange: onChangeInput,
      placeholder: "-",
      className: "p-0 border border-secondary rounded number-box mr-2 text-center",
      pattern: "^\\d?$",
      maxLength: 1
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      ref: inputs.input1,
      name: "input1",
      type: "text",
      value: values.input1,
      onChange: onChangeInput,
      placeholder: "-",
      className: "p-0 border border-secondary rounded number-box mr-2 text-center",
      pattern: "^\\d?$",
      maxLength: 1
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      ref: inputs.input2,
      name: "input2",
      type: "text",
      value: values.input2,
      onChange: onChangeInput,
      placeholder: "-",
      className: "p-0 border border-secondary rounded number-box mr-2 text-center",
      pattern: "^\\d?$",
      maxLength: 1
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      ref: inputs.input3,
      name: "input3",
      type: "text",
      value: values.input3,
      onChange: onChangeInput,
      placeholder: "-",
      className: "p-0 border border-secondary rounded number-box mr-2 text-center",
      pattern: "^\\d?$",
      maxLength: 1
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      ref: inputs.input4,
      name: "input4",
      type: "text",
      value: values.input4,
      onChange: onChangeInput,
      placeholder: "-",
      className: "p-0 border border-secondary rounded number-box mr-2 text-center",
      pattern: "^\\d?$",
      maxLength: 1
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sz-form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sz-form-group__input p-0 border rounded fixed-box mr-2 text-center form-control fakeDisabledPhotoMeterInput"
    }, "X"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sz-form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sz-form-group__input p-0 border rounded fixed-box mr-2 text-center form-control fakeDisabledPhotoMeterInput"
    }, "X"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sz-form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sz-form-group__input p-0 border rounded fixed-box mr-2 text-center form-control fakeDisabledPhotoMeterInput"
    }, "X"))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-sm-12 col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "information-circle",
    className: "col-1",
    variant: "bold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    color: "disabled",
    weight: "regular"
  }, "Les chiffres sur fond noir indiquent les m", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "3"), "."))));
}

/***/ }),

/***/ "./assets/js/components/WaterLeak/index.jsx":
/*!**************************************************!*\
  !*** ./assets/js/components/WaterLeak/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WaterLeakIndex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/es/index.js");
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stepper */ "./assets/js/components/WaterLeak/Stepper.jsx");
/* harmony import */ var _MessagesCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessagesCard */ "./assets/js/components/WaterLeak/MessagesCard.jsx");
/* harmony import */ var _MachineContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MachineContext */ "./assets/js/components/WaterLeak/MachineContext.jsx");
/* harmony import */ var _waterLeak_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waterLeak.scss */ "./assets/js/components/WaterLeak/waterLeak.scss");
/* harmony import */ var _waterLeak_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_waterLeak_scss__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var matches = function matches(state) {
  var isServerError = state.matches('serverError');
  var isKO_DELAI = state.matches({
    formSubmitResponse: 'KO_DELAI'
  });
  var isKO_LOC = state.matches({
    formSubmitResponse: 'KO_LOC'
  });
  var isOK = state.matches({
    formSubmitResponse: 'OK'
  });
  return [isServerError, isKO_DELAI, isKO_LOC, isOK];
};
var Consumers = function Consumers() {
  var machineInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MachineContext__WEBPACK_IMPORTED_MODULE_4__["MachineContext"]);
  var _useSelector = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(machineInstance.WaterLeakService, matches),
    _useSelector2 = _slicedToArray(_useSelector, 4),
    isServerError = _useSelector2[0],
    isKO_DELAI = _useSelector2[1],
    isKO_LOC = _useSelector2[2],
    isOK = _useSelector2[3];
  if (isServerError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesCard__WEBPACK_IMPORTED_MODULE_3__["Error500Card"], null));
  }
  if (isKO_DELAI) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesCard__WEBPACK_IMPORTED_MODULE_3__["FailCard"], {
      variant: "warsmann"
    }));
  }
  if (isKO_LOC) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesCard__WEBPACK_IMPORTED_MODULE_3__["FailCard"], null));
  }
  if (isOK) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesCard__WEBPACK_IMPORTED_MODULE_3__["SuccessCard"], null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Stepper__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};
function WaterLeakIndex() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MachineContext__WEBPACK_IMPORTED_MODULE_4__["MachineProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Consumers, null));
}

/***/ }),

/***/ "./assets/js/components/WaterLeak/waterLeak.scss":
/*!*******************************************************!*\
  !*** ./assets/js/components/WaterLeak/waterLeak.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/services/WaterLeak/index.js":
/*!***********************************************!*\
  !*** ./assets/js/services/WaterLeak/index.js ***!
  \***********************************************/
/*! exports provided: fetchContracts, fetchContractByRef, postFormValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchContracts", function() { return fetchContracts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchContractByRef", function() { return fetchContractByRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postFormValidation", function() { return postFormValidation; });
/* harmony import */ var _AxiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");

var fetchContracts = function fetchContracts() {
  return _AxiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].get('/user/contracts').then(function (response) {
    return response.data;
  })["catch"](function (err) {
    return err.response;
  });
};
var fetchContractByRef = function fetchContractByRef(reference) {
  return _AxiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].get("water-leak/contract-information?full-ref=".concat(reference)).then(function (response) {
    return response.data;
  })["catch"](function (err) {
    return err.response;
  });
};

/*

curl -X POST "https://suez.toutsurmoneau.test/public-api/water-leak/validation" -H  "accept: application/json" -H  "Content-Type: multipart/form-data" -F "reference=980431988547" -F "idPds=5176085416" -F "matricule=C14VA039156" -F "index=666" -F "photo=@chart.png;type=image/png" -F "attestation=@chart.png;type=image/png" -F "leakLocation=CANAPCPT" -F "leakInWasteWater=false" -F "habitationLocal=true" -F "confirmInvoice=true" -F "confirmIndex=true" -F "confirmData=true"
curl -X POST "https://apisimulator.toutsurmoneau.test/public-api/water-leak/validation" -H  "accept: application/json" -H  "Content-Type: multipart/form-data" -F "reference=980431988547" -F "idPds=5176085416" -F "matricule=C14VA039156" -F "index=666" -F "photo=@chart.png;type=image/png" -F "attestation=@chart.png;type=image/png" -F "leakLocation=CANAPCPT" -F "leakInWasteWater=false" -F "habitationLocal=true" -F "confirmInvoice=true" -F "confirmIndex=true" -F "confirmData=true"

*/

var postFormValidation = function postFormValidation(data) {
  return _AxiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].post('/water-leak/validation', data, {
    timeout: 30000
  }).then(function (response) {
    return response.data;
  })["catch"](function (err) {
    return err.response;
  });
};

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

}]);