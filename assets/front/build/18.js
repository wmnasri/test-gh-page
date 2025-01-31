(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./assets/img/move-in/releve_index.png":
/*!*********************************************!*\
  !*** ./assets/img/move-in/releve_index.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/releve_index.png");

/***/ }),

/***/ "./assets/img/photo-compteur-1.png":
/*!*****************************************!*\
  !*** ./assets/img/photo-compteur-1.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/photo-compteur-1.png");

/***/ }),

/***/ "./assets/img/photoMeter/oups.png":
/*!****************************************!*\
  !*** ./assets/img/photoMeter/oups.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/oups.png");

/***/ }),

/***/ "./assets/js/components/photoMeter/ErrorPc.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/components/photoMeter/ErrorPc.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorPc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _img_photoMeter_oups_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/photoMeter/oups.png */ "./assets/img/photoMeter/oups.png");
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Stepper */ "./assets/js/components/photoMeter/Stepper.jsx");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photoCompteur.scss */ "./assets/js/components/photoMeter/photoCompteur.scss");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_photoCompteur_scss__WEBPACK_IMPORTED_MODULE_6__);







function ErrorPc(_ref) {
  var message = _ref.message,
    indiceError = _ref.indiceError,
    titleError = _ref.titleError;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useIsMobile"])();
  var isBrowser = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var onClick = function onClick() {
    window.location.reload();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h1",
    className: "pl-3 title-page"
  }, t('photoMeter.error.title')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container global-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 my-2 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Stepper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    indice: indiceError
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container global-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 m-auto ".concat(isBrowser ? 'py-5' : 'py-3')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-auto justify-content-center align-self-center d-block d-md-none text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_photoMeter_oups_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "",
    className: "text-center my-3"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    className: "mb-3 d-none d-md-block",
    weight: "bold"
  }, titleError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: "subtitle-02 ".concat(isMobile ? 'text-center' : '')
  }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 ".concat(isMobile ? 'text-center' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "outlined",
    className: "mr-3",
    onClick: onClick
  }, t('photoMeter.error.refreshPage')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-2 mt-5 justify-content-center align-self-center d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_photoMeter_oups_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  })))))));
}

/***/ }),

/***/ "./assets/js/components/photoMeter/LandingPage.jsx":
/*!*********************************************************!*\
  !*** ./assets/js/components/photoMeter/LandingPage.jsx ***!
  \*********************************************************/
/*! exports provided: InfoUser, HelpBody, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUser", function() { return InfoUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpBody", function() { return HelpBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyPrincipalComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/photoMeter/Meter */ "./assets/js/services/photoMeter/Meter.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _ErrorPc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorPc */ "./assets/js/components/photoMeter/ErrorPc.jsx");
/* harmony import */ var _LandingPageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LandingPageModal */ "./assets/js/components/photoMeter/LandingPageModal.jsx");
/* harmony import */ var _MultiMeter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MultiMeter */ "./assets/js/components/photoMeter/MultiMeter.jsx");
/* harmony import */ var _img_move_in_releve_index_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../img/move-in/releve_index.png */ "./assets/img/move-in/releve_index.png");
/* harmony import */ var _img_photo_compteur_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../img/photo-compteur-1.png */ "./assets/img/photo-compteur-1.png");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./photoCompteur.scss */ "./assets/js/components/photoMeter/photoCompteur.scss");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_photoCompteur_scss__WEBPACK_IMPORTED_MODULE_14__);
var _excluded = ["derniereReleve"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function InfoUser(_ref) {
  var dataLpMeter = _ref.dataLpMeter,
    fullRef = _ref.fullRef;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzCard"], {
    className: "bg-light",
    padding: "normal"
  }, (dataLpMeter === null || dataLpMeter === void 0 ? void 0 : dataLpMeter.length) === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzData"], {
    icon: "maps-pin-1",
    className: "pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzData"].Text, null, t('photoMeter.landingPage.servedAddress')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzData"].Title, null, dataLpMeter[0].adresse1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-block"
  }, dataLpMeter[0].adresse1), dataLpMeter[0].adresse2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-block"
  }, dataLpMeter[0].adresse2), dataLpMeter[0].adresse3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-block"
  }, dataLpMeter[0].adresse3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-block"
  }, dataLpMeter[0].codePostal, " ", dataLpMeter[0].ville))), Object.entries(dataLpMeter).length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-0 col-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spinner-border text-dark"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzData"], {
    icon: "single-neutral-id-card-3",
    className: (dataLpMeter === null || dataLpMeter === void 0 ? void 0 : dataLpMeter.length) > 1 ? 'mt-5' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzData"].Text, null, t('photoMeter.landingPage.numClient')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzData"].Title, null, fullRef)));
}
function HelpBody(_ref2) {
  var imageReleveIndex = _ref2.imageReleveIndex;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H4",
    weight: "medium"
  }, t('photoMeter.landingPage.help.blackFiguresTitle'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "medium"
  }, t('photoMeter.landingPage.help.blackFiguresBody'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageReleveIndex,
    alt: t('photoMeter.landingPage.indexEntry')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H4",
    weight: "medium"
  }, t('photoMeter.landingPage.help.takePhotoTitle'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "medium"
  }, t('photoMeter.landingPage.help.takePhotoBody'))));
}
function MyPrincipalComponent() {
  var isDesktop = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__["useIsDesktop"])();
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
    reference = _useParams.reference;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation3.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
    _useState2 = _slicedToArray(_useState, 2),
    campagne = _useState2[0],
    setCampagne = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowModal = _useState4[0],
    setIsShowModal = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showLoader = _useState6[0],
    setShowLoader = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState8 = _slicedToArray(_useState7, 2),
    setDataMeter = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
    _useState10 = _slicedToArray(_useState9, 2),
    dataLpMeter = _useState10[0],
    setDataLpMeter = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState12 = _slicedToArray(_useState11, 2),
    getMeterDataError = _useState12[0],
    setGetMeterDataError = _useState12[1];
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isAlreadyRegistered = _useState14[0],
    setIsAlreadyRegistered = _useState14[1];
  var formatTwoDigits = function formatTwoDigits(digit) {
    return ('0' + digit).slice(-2);
  };
  var todayTemp = new Date();
  var todayYear = todayTemp.getFullYear();
  var todayMonth = formatTwoDigits(todayTemp.getMonth() + 1);
  var todayDay = formatTwoDigits(todayTemp.getDate());
  var todayFormatted = todayYear + '-' + todayMonth + '-' + todayDay;
  var KEY_CAMPAGNE_ANR = 'ANR_P';
  var KEY_CAMPAGNE_CNV = 'CNV_P';
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('getDataSession', _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_6__["default"].getDataSession, {
      onSuccess: function onSuccess(data) {
        setCampagne(data.campagne);
        if (data.date_campagne < todayFormatted && data.popinDate) {
          setIsShowModal(true);
        }
      }
    }),
    isFetchedGetDataSession = _useQuery.isFetched;
  var _useQuery2 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('getMeterData', _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_6__["default"].getMeterData, {
      enabled: isFetchedGetDataSession,
      onSuccess: function onSuccess(data) {
        setGetMeterDataError(false);
        setDataLpMeter(data);
      },
      onError: function onError() {
        setGetMeterDataError(true);
      }
    }),
    isFetchedGetMeterData = _useQuery2.isFetched;
  var _useQuery3 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(['checkAllMeterDropIndex', reference], function () {
      return _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_6__["default"].checkAllMeterDropIndex(reference);
    }, {
      enabled: isFetchedGetMeterData,
      onSuccess: function onSuccess(data) {
        if (data) {
          setIsAlreadyRegistered(true);
        }
      }
    }),
    isFetchedcheckAllMeterDropIndex = _useQuery3.isFetched;
  var isAllFetched = isFetchedGetDataSession && isFetchedGetMeterData && isFetchedcheckAllMeterDropIndex;
  var handleClose = function handleClose() {
    setIsShowModal(false);
  };
  // eslint-disable-next-line no-unused-vars
  var _onClick = function onClick(_ref3) {
    var derniereReleve = _ref3.derniereReleve,
      dataMeter = _objectWithoutProperties(_ref3, _excluded);
    setShowLoader(true);
    setDataMeter(dataMeter);
    var params = {
      numeroCompteur: dataMeter.numeroCompteur,
      rangCompteur: dataMeter.rangCompteur,
      matriculeCompteur: dataMeter.numCompteur,
      adresse1: dataMeter.adresse1,
      adresse2: dataMeter.adresse2,
      adresse3: dataMeter.adresse3,
      codePostal: dataMeter.codePostal,
      ville: dataMeter.ville,
      popinDate: false
    };
    var paramsSelectedMeter = {
      numBranch: dataMeter.numeroBranchement,
      numCompteur: dataMeter.numeroCompteur,
      rangCompteur: dataMeter.rangCompteur,
      matriculeCompteur: dataMeter.numCompteur
    };
    _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_6__["default"].updateSession(params).then(function () {
      _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_6__["default"].selectedMeter(paramsSelectedMeter).then(function () {
        history.push(_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].PHOTO_COUNTER_INDEX.replace(':reference', reference));
      });
    });
  };
  if (getMeterDataError) {
    var titleError = t('photoMeter.landingPage.error.title');
    var message = t('photoMeter.landingPage.error.message');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorPc__WEBPACK_IMPORTED_MODULE_8__["default"], {
      message: message,
      indiceError: 0,
      titleError: titleError
    });
  }
  if (dataLpMeter !== null && dataLpMeter !== void 0 && dataLpMeter.isError) {
    var _titleError = t('photoMeter.landingPage.error.oups');
    if (dataLpMeter !== null && dataLpMeter !== void 0 && dataLpMeter.noMeterSe) {
      _titleError = t('photoMeter.landingPage.error.title');
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorPc__WEBPACK_IMPORTED_MODULE_8__["default"], {
      message: dataLpMeter === null || dataLpMeter === void 0 ? void 0 : dataLpMeter.errorMessage,
      indiceError: 0,
      titleError: _titleError
    });
  }
  if (!isAllFetched) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tsme-container px-2 py-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rounded-2 bg-white shadow-sm p-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
      count: 1,
      width: "100%",
      height: 200,
      className: "mb-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default.a, {
      count: 1,
      width: "100%",
      height: 200
    }))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "index-landing-page",
    className: "home-index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container px-2 py-4"
  }, (dataLpMeter === null || dataLpMeter === void 0 ? void 0 : dataLpMeter.length) === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-2 bg-white shadow-sm mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 m-auto py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], null, t('photoMeter.landingPage.hello')), campagne === KEY_CAMPAGNE_ANR && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], null, t('photoMeter.landingPage.campagneANR')), campagne === KEY_CAMPAGNE_CNV && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "regular",
    className: "text-justify"
  }, t('photoMeter.landingPage.campagneCNV1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "regular",
    className: "text-justify"
  }, t('photoMeter.landingPage.campagneCNV2'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "numberCircle"
  }, "1"), t('photoMeter.landingPage.inputIndex')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "numberCircle"
  }, "2"), t('photoMeter.landingPage.attachPhoto')))), isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 d-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_photo_compteur_1_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoUser, {
    dataLpMeter: dataLpMeter,
    fullRef: reference
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 pt-4 d-flex align-items-end justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzHelper"], {
    title: t('photoMeter.landingPage.help.title'),
    type: "btn",
    label: t('photoMeter.landingPage.helper')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelpBody, {
    imageReleveIndex: _img_move_in_releve_index_png__WEBPACK_IMPORTED_MODULE_11__["default"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 my-4"
  }, isAlreadyRegistered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "bold",
    tag: "span"
  }, t('photoMeter.landingPage.alreadyRegistered')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
    variant: "contained",
    className: "m-auto rounded-1 go-to-depose",
    onClick: function onClick() {
      return _onClick(dataLpMeter[0]);
    },
    loader: showLoader,
    isDisabled: isAlreadyRegistered
  }, t('photoMeter.landingPage.submit')))), (dataLpMeter === null || dataLpMeter === void 0 ? void 0 : dataLpMeter.length) > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-2 bg-white shadow-sm p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MultiMeter__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fullRef: reference,
    dataMeter: dataLpMeter
  }), !isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mx-1 d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzHelper"], {
    title: t('photoMeter.landingPage.help.title'),
    type: "btn",
    label: t('know_more')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelpBody, {
    imageReleveIndex: _img_move_in_releve_index_png__WEBPACK_IMPORTED_MODULE_11__["default"]
  }))))), isShowModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingPageModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isShowModal: isShowModal,
    handleClose: handleClose
  }));
}

/***/ }),

/***/ "./assets/js/components/photoMeter/LandingPageModal.jsx":
/*!**************************************************************!*\
  !*** ./assets/js/components/photoMeter/LandingPageModal.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPageModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);


function LandingPageModal(_ref) {
  var isShowModal = _ref.isShowModal,
    handleClose = _ref.handleClose;
  var body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "medium"
  }, "La date limite pour que votre index soit pris en compte pour votre facture est d\xE9pass\xE9e. Vous pouvez cependant nous communiquer le relev\xE9 et la photo de votre compteur afin d\u2019am\xE9liorer le suivi de votre consommation.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    className: "mr-1",
    onClick: handleClose
  }, "Continuer")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: isShowModal,
    handleClose: handleClose,
    size: 'xl'
  }, body);
}

/***/ }),

/***/ "./assets/js/components/photoMeter/MultiMeter.jsx":
/*!********************************************************!*\
  !*** ./assets/js/components/photoMeter/MultiMeter.jsx ***!
  \********************************************************/
/*! exports provided: construcMeters, sortMeters, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "construcMeters", function() { return construcMeters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortMeters", function() { return sortMeters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiMeter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _SzCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SzCard */ "./assets/js/components/photoMeter/SzCard.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function construcMeters(fullRef, dataMeter) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SzCard__WEBPACK_IMPORTED_MODULE_3__["default"].Init, {
    fullRef: fullRef,
    dataMeter: dataMeter
  }));
}
function sortMeters(items, currentPage, itemsPerPage) {
  var started = currentPage * itemsPerPage - itemsPerPage;
  var end = started + itemsPerPage;
  return items.slice(started, end);
}
function MultiMeter(props) {
  var fullRef = props.fullRef;
  var itemsCountPerPage = 5;
  var dataMeter = props.dataMeter;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var isBrowser = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsDesktop"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentPage = _useState4[0],
    setCurrentPage = _useState4[1];
  var filteredBanks = dataMeter.filter(function (b) {
    return b.numCompteur.toLowerCase().includes(search.toLowerCase());
  });
  var handlePageChange = function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  };
  var handelSearch = function handelSearch(event) {
    var value = event.target.value;
    setSearch(value);
  };
  var totalItemsCount = filteredBanks.length;
  var pageRangeDisplayed = Math.ceil(filteredBanks.length / itemsCountPerPage);
  var metersSlice = sortMeters(filteredBanks, currentPage, itemsCountPerPage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row ".concat(isMobile ? 'mx-1' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    value: search,
    className: "col-md-4 ".concat(isBrowser ? 'ml-3' : ''),
    onChange: handelSearch,
    placeholder: "Saisissez un n\xB0 de compteur",
    required: true
  }), construcMeters(fullRef, metersSlice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-auto pt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzPagination"], {
    totalItemsCount: totalItemsCount,
    activePage: currentPage,
    onChange: handlePageChange,
    itemsCountPerPage: itemsCountPerPage,
    pageRangeDisplayed: pageRangeDisplayed
  })));
}

/***/ }),

/***/ "./assets/js/components/photoMeter/Stepper.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/components/photoMeter/Stepper.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stepper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Stepper(_ref) {
  var indice = _ref.indice;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(indice),
    _useState2 = _slicedToArray(_useState, 1),
    step = _useState2[0];
  var header = [t('photoMeter.stepper.step1'), t('photoMeter.stepper.step2')];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "bloc-steppers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzStepper"], {
    header: header,
    activeStep: step,
    variant: "rounded",
    displayProgress: true,
    numeric: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzStepper"].SzHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzStepper"].SzStep, {
    index: 0,
    className: "bg-transparent p-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzStepper"].SzStep, {
    index: 1,
    className: "bg-transparent p-0"
  })));
}

/***/ }),

/***/ "./assets/js/components/photoMeter/SzCard.jsx":
/*!****************************************************!*\
  !*** ./assets/js/components/photoMeter/SzCard.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/photoMeter/Meter */ "./assets/js/services/photoMeter/Meter.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
var _excluded = ["derniereReleve"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var currentMeter = null;
function Init(_ref) {
  var dataMeter = _ref.dataMeter,
    fullRef = _ref.fullRef;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, dataMeter.map(function (meter) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SzCard, {
      key: meter.numCompteur,
      fullRef: fullRef,
      dataItem: meter
    });
  }));
}
function SzCard(_ref2) {
  var fullRef = _ref2.fullRef,
    dataItem = _ref2.dataItem;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["useIsMobile"])();
  var isBrowser = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  // eslint-disable-next-line no-unused-vars
  var _onClick = function onClick(_ref3) {
    var derniereReleve = _ref3.derniereReleve,
      dataItem = _objectWithoutProperties(_ref3, _excluded);
    currentMeter = dataItem;
    var params = {
      numeroCompteur: currentMeter.numeroCompteur,
      rangCompteur: currentMeter.rangCompteur,
      matriculeCompteur: currentMeter.numCompteur,
      adresse1: currentMeter.adresse1,
      adresse2: currentMeter.adresse2,
      adresse3: currentMeter.adresse3,
      codePostal: currentMeter.codePostal,
      ville: currentMeter.ville,
      popinDate: false
    };
    _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_5__["default"].updateSession(params).then(function () {
      var params = {
        numBranch: currentMeter.numeroBranchement,
        numCompteur: currentMeter.numeroCompteur,
        rangCompteur: currentMeter.rangCompteur,
        matriculeCompteur: currentMeter.numCompteur
      };
      _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_5__["default"].selectedMeter(params).then(function () {
        history.push(_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].PHOTO_COUNTER_INDEX.replace(':reference', fullRef));
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 mb-2 sz-card-collapse__header d-flex justify-content-between sz-left-border position-relative align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 my-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-10 col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mb-2 d-block small font-family-medium text-left text-disabled"
  }, t('photoMeter.szCard.numMeter')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, dataItem.numCompteur)), isBrowser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-left col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mb-2 d-block small font-family-medium text-left text-disabled"
  }, t('photoMeter.szCard.address')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, dataItem.adresse1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, dataItem.adresse2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, dataItem.adresse3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, dataItem.codePostal, " ", dataItem.ville)), isBrowser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 offset-md-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mb-2 d-block small font-family-medium text-left text-disabled"
  }, t('photoMeter.szCard.lastReading')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, dataItem.derniereReleve)), isBrowser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-right offset-md-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1"
  }, dataItem.isDropIndex == false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-right mt-4 mb-2 d-block ".concat(isMobile ? 'sz-icon-line-mobile' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    variant: "text",
    className: "pl-3",
    icon: "arrow-right",
    onClick: function onClick() {
      return _onClick(dataItem);
    }
  })), dataItem.isDropIndex == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-2 mb-2 mt-4 text-center d-block ".concat(isMobile ? 'float-right' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    variant: "line",
    icon: "check-1",
    className: "color-green-suez"
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = ({
  Init: Init,
  SzCard: SzCard
});

/***/ }),

/***/ "./assets/js/components/photoMeter/photoCompteur.scss":
/*!************************************************************!*\
  !*** ./assets/js/components/photoMeter/photoCompteur.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/services/photoMeter/Meter.js":
/*!************************************************!*\
  !*** ./assets/js/services/photoMeter/Meter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");


function getMailAndPhone(reference) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get('consumption/getMailAndPhone', {
    params: {
      reference: reference
    }
  }).then(function (response) {
    return response.data['response'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function nextStepAction(fullRef, email, cellphone) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get('consumption/nextStep/1', {
    params: {
      fullRef: fullRef,
      email: email,
      cellphone: cellphone
    }
  }).then(function (response) {
    return response.data;
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function generateJwToken(fullRef) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get('consumption/generateJwToken', {
    params: {
      fullRef: fullRef
    }
  }).then(function (response) {
    return response.data;
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function revokeJwtToken() {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get('consumption/revokeJwtToken').then(function (response) {
    return response.data;
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function getDataSession() {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get('/consumption/pc/getDataSession').then(function (response) {
    return response.data;
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function getMeterData() {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_0__["API"].CONSUMPTION.METER_DATA).then(function (response) {
    return response.data['meters'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function sendPhotoMeter(data) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post('/consumption/dropPhoto', data).then(function (response) {
    return response.data['response'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function updateSession(data) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post('/consumption/pc/updateSession', data).then(function (response) {
    return response.data;
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function selectedMeter(data) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post('/consumption/pc/selectedMeter', data).then(function (response) {
    return response.data;
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function getConsommation(numCompteur) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_0__["API"].CONSUMPTION.GET_CONSOMMATION, {
    params: {
      numCompteur: numCompteur
    }
  }).then(function (response) {
    return response.data['consommation'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function getDeposeInfo(numCompteur, rangCompteur) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_0__["API"].CONSUMPTION.GET_DEPOSE_INFO, {
    params: {
      numCompteur: numCompteur,
      rangCompteur: rangCompteur
    }
  }).then(function (response) {
    return response.data['response'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function checkIndexEntry(data) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_0__["API"].CONSUMPTION.CHECK_INDEX_ENTRY, data).then(function (response) {
    return response.data['response'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function checkAllMeterDropIndex(data) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_0__["API"].CONSUMPTION.CHECK_ALL_METER_DROP_INDEX, data).then(function (response) {
    return response.data['response'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function validationMotif() {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get('/consumption/pc/validationMotif').then(function (response) {
    return response.data['response'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function deposeIndex(data) {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_0__["API"].CONSUMPTION.DEPOSE_INDEX, data).then(function (response) {
    return response.data['response'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
function sendConfirmationMail() {
  return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get('/consumption/pc/sendConfirmationMail').then(function (response) {
    return response.data['response'];
  })["catch"](function (err) {
    return err.response.data.response;
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getMailAndPhone: getMailAndPhone,
  nextStepAction: nextStepAction,
  generateJwToken: generateJwToken,
  revokeJwtToken: revokeJwtToken,
  getMeterData: getMeterData,
  sendPhotoMeter: sendPhotoMeter,
  updateSession: updateSession,
  getDataSession: getDataSession,
  selectedMeter: selectedMeter,
  getConsommation: getConsommation,
  getDeposeInfo: getDeposeInfo,
  checkIndexEntry: checkIndexEntry,
  checkAllMeterDropIndex: checkAllMeterDropIndex,
  validationMotif: validationMotif,
  deposeIndex: deposeIndex,
  sendConfirmationMail: sendConfirmationMail
});

/***/ })

}]);