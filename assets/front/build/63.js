(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./assets/img/photoMeter/e-mail-success.png":
/*!**************************************************!*\
  !*** ./assets/img/photoMeter/e-mail-success.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/e-mail-success.png");

/***/ }),

/***/ "./assets/js/components/photoMeter/Confirmation.jsx":
/*!**********************************************************!*\
  !*** ./assets/js/components/photoMeter/Confirmation.jsx ***!
  \**********************************************************/
/*! exports provided: HelpWaterleakBody, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpWaterleakBody", function() { return HelpWaterleakBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Confirmation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _img_photoMeter_e_mail_success_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/photoMeter/e-mail-success.png */ "./assets/img/photoMeter/e-mail-success.png");
/* harmony import */ var _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photoMeter/Meter */ "./assets/js/services/photoMeter/Meter.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photoCompteur.scss */ "./assets/js/components/photoMeter/photoCompteur.scss");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_photoCompteur_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _IndexEntry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./IndexEntry */ "./assets/js/components/photoMeter/IndexEntry.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function HelpWaterleakBody() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-2 px-md-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H4",
    weight: "medium"
  }, t('photoMeter.confirmation.help.localizeTitle'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-2 px-md-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "medium"
  }, t('photoMeter.confirmation.help.localizeOrdered1'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "medium"
  }, t('photoMeter.confirmation.help.localizeOrdered2'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-2 px-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "medium"
  }, t('photoMeter.confirmation.help.localizePart2'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-2 px-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "medium"
  }, t('photoMeter.confirmation.help.localizePart3'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-2 px-md-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H4",
    weight: "medium"
  }, t('photoMeter.confirmation.help.watchConsoTitle'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-2 px-md-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_5__["Markup"], {
    content: t('photoMeter.confirmation.help.watchConso')
  }))));
}
function Confirmation(props) {
  var _props$location;
  var isBrowser = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__["useIsDesktop"])();
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
    t = _useTranslation2.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var state = props === null || props === void 0 ? void 0 : (_props$location = props.location) === null || _props$location === void 0 ? void 0 : _props$location.state;
  var isMailError = false;
  if (state !== null && state !== void 0 && state.isMailError) {
    isMailError = state.isMailError;
  }
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
    _useState2 = _slicedToArray(_useState, 2),
    dataSession = _useState2[0],
    setDataSession = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasMeterDropIndex = _useState4[0],
    setHasMeterDropIndex = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showLoader = _useState6[0],
    setshowLoader = _useState6[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_3__["default"].getDataSession().then(function (data) {
      setDataSession(data);
      var params = {
        fullRef: data.fullRef
      };
      _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_3__["default"].checkAllMeterDropIndex(params).then(function (data) {
        if (data === false) {
          setHasMeterDropIndex(true);
        }
      });
      _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_3__["default"].revokeJwtToken();
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      if (history.action === 'POP') {
        if (dataSession.date_campagne) {
          var date = dataSession.date_campagne;
          var dateSplit = date.split('-');
          window.location.href = _constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].PHOTO_COUNTER_START.replace(':campagne', dataSession.campagne).replace(':reference', dataSession.fullRef).replace(':day', dateSplit[2]).replace(':month', dateSplit[1]).replace(':year', dateSplit[0]).replace(':email', dataSession.email);
        } else {
          window.location.href = _constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].PHOTO_COUNTER_START.replace(':campagne', dataSession.campagne).replace(':reference', dataSession.fullRef).replace(':day', dataSession.email).replace('/:month/:year/:email', '');
        }
      }
    };
  });
  var isOutOfBoundsMax = dataSession.horsBorne && dataSession.motifIndex === _IndexEntry__WEBPACK_IMPORTED_MODULE_11__["hau"];
  var onClickRedo = function onClickRedo() {
    setshowLoader(true);
    if (dataSession.date_campagne) {
      var date = dataSession.date_campagne;
      var dateSplit = date.split('-');
      window.location.href = _constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].PHOTO_COUNTER_START.replace(':campagne', dataSession.campagne).replace(':reference', dataSession.fullRef).replace(':day', dateSplit[2]).replace(':month', dateSplit[1]).replace(':year', dateSplit[0]).replace(':email', dataSession.email);
    } else {
      window.location.href = _constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].PHOTO_COUNTER_START.replace(':campagne', dataSession.campagne).replace(':reference', dataSession.fullRef).replace(':day', dataSession.email).replace('/:month/:year/:email', '');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-index confirmation-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container global-container my-4 rounded-2 shadow-blue-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 m-auto py-md-5 py-3"
  }, !isBrowser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-auto justify-content-center align-self-center d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_photoMeter_e_mail_success_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "",
    height: "270",
    width: "270"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7 d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: isBrowser ? 'large' : 'body',
    weight: "bold",
    className: "mb-4 text-center text-md-left"
  }, t('photoMeter.confirmation.success')), !isMailError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "regular",
    className: "mb-2 grey-01 text-center text-md-left"
  }, t('photoMeter.confirmation.emailSent')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "bold",
    className: "mb-4 text-center text-md-left grey-01",
    id: "emailConfirmation"
  }, dataSession.email)), hasMeterDropIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center text-md-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
    id: "readingAnotherMeter",
    variant: "contained",
    onClick: onClickRedo,
    loader: showLoader,
    border: "soft"
  }, t('photoMeter.confirmation.readingAnotherMeter')))), isBrowser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-auto justify-content-center align-self-center d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_photoMeter_e_mail_success_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "",
    height: "270",
    width: "270"
  })))))), isOutOfBoundsMax && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container global-container my-4 rounded-2 shadow-blue-sm",
    "data-cy": "outOfBounds"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 m-auto py-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7 d-md-block my-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "regular",
    className: "mb-md-2 mb-4' grey-01 text-center text-md-left"
  }, t('photoMeter.confirmation.outOfBoundsMax'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5 d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzHelper"], {
    className: "mt-4",
    title: t('photoMeter.confirmation.help.title'),
    type: "btn",
    label: t('know_more')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelpWaterleakBody, null)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container global-container my-4 rounded-2 shadow-blue-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 m-auto py-md-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7 d-md-block my-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    weight: "regular",
    className: "mb-md-2 mb-4 text-center text-md-left"
  }, t('photoMeter.confirmation.noCelText'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5 d-md-block text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "secondary",
    border: "soft",
    to: _constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].SIGN_UP,
    id: "createCelButton"
  }, t('photoMeter.confirmation.createCelButton')))))));
}

/***/ })

}]);