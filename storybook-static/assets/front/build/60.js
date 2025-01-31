(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./assets/img/move-out/explorer-error.svg":
/*!************************************************!*\
  !*** ./assets/img/move-out/explorer-error.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/explorer-error.svg");

/***/ }),

/***/ "./assets/img/move-out/wait.svg":
/*!**************************************!*\
  !*** ./assets/img/move-out/wait.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/wait.svg");

/***/ }),

/***/ "./assets/js/pages/move-out/Error401.jsx":
/*!***********************************************!*\
  !*** ./assets/js/pages/move-out/Error401.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error401; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _img_move_out_wait_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/move-out/wait.svg */ "./assets/img/move-out/wait.svg");
/* harmony import */ var _hooks_useRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useRoutes */ "./assets/js/hooks/useRoutes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Error401() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
    pathType = _useParams.pathType;
  var _useRoutes = Object(_hooks_useRoutes__WEBPACK_IMPORTED_MODULE_5__["useRoutes"])(),
    btnRetry = _useRoutes.btnRetry;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showLoaderQuit = _useState2[0],
    setshowLoaderQuit = _useState2[1];
  var getRoute = function getRoute() {
    if (pathType.includes('souscrire')) {
      return _constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].SUBSCRIBE;
    }
    if (pathType.includes('resilier')) {
      return _constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].CANCEL;
    }
    if (pathType.includes('inscription')) {
      return _constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].SIGN_UP;
    }
  };
  var onClickQuit = function onClickQuit() {
    setshowLoaderQuit(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzCard"], {
    className: "bg-white mb-3 p-3 px-md-5 pt-md-4 pb-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row my-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "huge",
    weight: "medium",
    className: "sz-line-height-normal"
  }, t('Error401.title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], null, t('Error401.mainText'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], null, t('Error401.reconnectText'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 d-block d-md-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_move_out_wait_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "process error"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    to: getRoute(),
    variant: "contained",
    className: "mt-4 mb-md-0 mx-xs-auto",
    onClick: onClickQuit,
    loader: showLoaderQuit
  }, t('Error401.quit', {
    typeParcours: btnRetry
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4 d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_move_out_wait_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "process error"
  })))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Error5xx.jsx":
/*!***********************************************!*\
  !*** ./assets/js/pages/move-out/Error5xx.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error5xx; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _img_move_out_explorer_error_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/move-out/explorer-error.svg */ "./assets/img/move-out/explorer-error.svg");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Error5xx() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var now = new Date();
  var day = now.toLocaleString('fr-FR', {
    day: '2-digit'
  });
  var month = now.toLocaleString('fr-FR', {
    month: '2-digit'
  });
  var year = now.getFullYear();
  var hour = now.toLocaleString('fr-FR', {
    hour: 'numeric'
  });
  var mn = now.toLocaleString('fr-FR', {
    minute: 'numeric'
  });
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showLoaderQuit = _useState2[0],
    setshowLoaderQuit = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showLoaderContact = _useState4[0],
    setshowLoaderContact = _useState4[1];
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useParams"])(),
    pathType = _useParams.pathType;
  var isInvoiceDetails = pathType === 'ma-facture-en-detail';
  var isMoveOut = pathType === 'resilier';
  var isMoveOutClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('col-12 col-md-8', {
    'mx-auto': isMoveOut
  });
  var returnBtnMessage = isMoveOut ? t('Error5xx.back_dashboard') : t('Error5xx.quit');
  var comeBackMessage = isMoveOut ? t('Error5xx.tryAgain') : t('Error5xx.comeBack');
  var onClickQuit = function onClickQuit() {
    setshowLoaderQuit(true);
  };
  var onClickContact = function onClickContact() {
    setshowLoaderContact(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "bg-white mb-3 p-3 px-md-5 pt-md-4 pb-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: isMoveOutClassnames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    weight: "medium"
  }, t('Error5xx.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('Error5xx.date'), " ", day, " / ", month, " / ", year, ", \xE0 ", hour, " ", mn, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('Error5xx.failText')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, comeBackMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('Error5xx.sorry')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4 d-block d-sm-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_move_out_explorer_error_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "process error"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, !isInvoiceDetails && !isMoveOut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    to: _constants__WEBPACK_IMPORTED_MODULE_4__["CUSTOMER_SERVICE_URL"],
    variant: "contained",
    className: "col-12 col-md-11 mr-md-4 mb-3 mb-md-0",
    onClick: onClickContact,
    loader: showLoaderContact
  }, t('Error5xx.contactBtn'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].HOME,
    variant: isMoveOut ? 'contained' : 'outlined',
    className: "col-12 col-md-8 mr-md-4 mb-3 mb-md-0",
    onClick: onClickQuit,
    loader: showLoaderQuit
  }, returnBtnMessage)))), !isMoveOut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4 d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_move_out_explorer_error_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "process error"
  })))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/ErrorGeneral.jsx":
/*!***************************************************!*\
  !*** ./assets/js/pages/move-out/ErrorGeneral.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorGeneral; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Error5xx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error5xx */ "./assets/js/pages/move-out/Error5xx.jsx");
/* harmony import */ var _Error401__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Error401 */ "./assets/js/pages/move-out/Error401.jsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");

// import { useEffect } from 'react';





function ErrorGeneral() {
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
    pathname = _useLocation.pathname;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    track = _useGA.track;

  // useEffect(() => {
  //   track('MOVEOUT_43', pathname);
  // }, []);

  var type_error = ':typerror(erreur|erreursession)';
  var error5 = _constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].ERROR_PATH.replace(type_error, 'erreur');
  var error4 = _constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].ERROR_PATH.replace(type_error, 'erreursession');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: error5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error5xx__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: error4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error401__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

/***/ })

}]);