(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

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

/***/ "./assets/js/components/photoMeter/SecurityCheck.jsx":
/*!***********************************************************!*\
  !*** ./assets/js/components/photoMeter/SecurityCheck.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecurityCheck; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var _ErrorPc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorPc */ "./assets/js/components/photoMeter/ErrorPc.jsx");
/* harmony import */ var _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/photoMeter/Meter */ "./assets/js/services/photoMeter/Meter.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photoCompteur.scss */ "./assets/js/components/photoMeter/photoCompteur.scss");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_photoCompteur_scss__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var recaptchaRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
function SecurityCheck() {
  var isBrowser = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
    t = _useTranslation.t;
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
    search = _useLocation.search;
  var reference = new URLSearchParams(search).get('reference');
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _window$tsme_data = window.tsme_data,
    recaptchaInvisiblePublicKey = _window$tsme_data.recaptchaInvisiblePublicKey,
    recaptchaEnabled = _window$tsme_data.recaptchaEnabled,
    urlMobile = _window$tsme_data.urlMobile,
    isTechnicalError = _window$tsme_data.isTechnicalError;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState2 = _slicedToArray(_useState, 2),
    anonymEmail = _useState2[0],
    setAnonymEmail = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState4 = _slicedToArray(_useState3, 2),
    anonymCellPhone = _useState4[0],
    setAnonymCellPhone = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState6 = _slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState8 = _slicedToArray(_useState7, 2),
    cellPhone = _useState8[0],
    setCellPhone = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
    _useState10 = _slicedToArray(_useState9, 2),
    showMail = _useState10[0],
    setShowMail = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showBlocMail = _useState12[0],
    setShowBlocMail = _useState12[1];
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showBlocPhone = _useState14[0],
    setShowBlocPhone = _useState14[1];
  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
    _useState16 = _slicedToArray(_useState15, 2),
    isDisabledBtn = _useState16[0],
    setIsDisabledBtn = _useState16[1];
  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isShowEmailError = _useState18[0],
    setisShowEmailError = _useState18[1];
  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isShowPhoneError = _useState20[0],
    setisShowPhoneError = _useState20[1];
  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
    _useState22 = _slicedToArray(_useState21, 2),
    isLoading = _useState22[0],
    setIsLoading = _useState22[1];
  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isSubmitLoading = _useState24[0],
    setIsSubmitLoading = _useState24[1];
  var checkRef = reference !== null && reference !== '';
  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!checkRef),
    _useState26 = _slicedToArray(_useState25, 2),
    isError = _useState26[0],
    setIsError = _useState26[1];
  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(t('photoMeter.securityCheck.technicalError')),
    _useState28 = _slicedToArray(_useState27, 2),
    errorMessage = _useState28[0],
    setErrorMessage = _useState28[1];
  if (navigator.userAgent.match(/Android/i) && urlMobile) {
    window.location.replace(urlMobile);
  }
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (checkRef) {
      _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_4__["default"].getMailAndPhone(reference).then(function (_ref) {
        var isError = _ref.isError,
          anonymEmail = _ref.anonymEmail,
          anonymCellPhone = _ref.anonymCellPhone;
        if (!!isError) {
          setIsError(true);
        }
        if (anonymEmail !== 'NO_MAIL') {
          setAnonymEmail(anonymEmail);
          setShowBlocMail(true);
        } else {
          setShowBlocMail(false);
          setShowMail(false);
        }
        if (anonymCellPhone !== 'NO_CELLPHONE') {
          setAnonymCellPhone(anonymCellPhone);
          setShowBlocPhone(true);
        } else {
          setShowBlocPhone(false);
        }
        setIsLoading(false);
      })["catch"](function () {
        setIsError(true);
      });
    }
  }, []);
  var onChangeEmailInput = function onChangeEmailInput(_ref2) {
    var target = _ref2.target;
    setEmail(target.value);
    setCellPhone('');
    var isEmailValid = _constants__WEBPACK_IMPORTED_MODULE_7__["EMAIL_REGEX"].test(target.value);
    setisShowEmailError(!isEmailValid);
    setIsDisabledBtn(!isEmailValid);
  };
  var onChangePhoneInput = function onChangePhoneInput(_ref3) {
    var target = _ref3.target;
    setCellPhone(target.value);
    setEmail('');
    var reg = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
    var isPhoneValid = reg.test(target.value);
    setisShowPhoneError(!isPhoneValid);
    setIsDisabledBtn(!isPhoneValid);
  };
  var validateSecurityData = function validateSecurityData(event) {
    event.preventDefault();
    if (recaptchaEnabled) {
      recaptchaRef.current.execute();
    } else {
      onChange();
    }
  };
  function onChange() {
    setIsSubmitLoading(true);
    var fullRef = reference;
    _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_4__["default"].nextStepAction(fullRef, email, cellPhone).then(function (data) {
      if (1 === data.code) {
        _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_4__["default"].generateJwToken(fullRef).then(function (data) {
          if (data.response.isError) {
            setIsError(true);
          } else {
            history.push(_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].PHOTO_COUNTER_VALIDATION.replace(':reference', reference));
          }
        })["catch"](function () {
          setIsError(true);
        });
      } else if (0 === data.code) {
        setErrorMessage(t('photoMeter.securityCheck.errorAddress'));
        setIsError(true);
      }
    })["catch"](function () {
      setIsError(true);
    });
  }
  if (isError) {
    var titleError = 'Information';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorPc__WEBPACK_IMPORTED_MODULE_3__["default"], {
      message: errorMessage,
      indiceError: 0,
      titleError: titleError
    });
  }
  if (isTechnicalError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-index"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container global-container mb-2 mt-4 pb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-10 m-auto py-5 ".concat(isBrowser ? 'pt-3' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], {
      className: "d-flex flex-column col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzAlert"], {
      variant: "info",
      transparent: true
    }, t('photoMeter.securityCheck.technicalError'))))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container global-container mb-2 mt-4 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 m-auto py-5 ".concat(isBrowser ? 'pt-3' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], {
    className: "d-flex flex-column col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzAlert"], {
    variant: "info",
    transparent: true
  }, t('photoMeter.securityCheck.description'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], {
    className: "container container-fluid mt-3",
    id: "form-global"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "pc_pre_check_form",
    action: _constants__WEBPACK_IMPORTED_MODULE_7__["NEXT_STEP_URL"],
    method: "get",
    noValidate: "novalidate",
    onSubmit: validateSecurityData
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzSpinner"], null)), showMail && showBlocMail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], {
    className: "sds-container mt-2 bloc-w-email border new-rectangle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], {
    className: "sds-container mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "caption",
    weight: "light"
  }, t('photoMeter.securityCheck.email.description'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
    className: "col-md-8 input-security-mail",
    name: "email",
    value: email,
    onChange: onChangeEmailInput,
    label: t('photoMeter.securityCheck.email.description'),
    placeholder: t('photoMeter.securityCheck.email.placeholder')
  }), isShowEmailError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzAlert"], {
    className: "col-md-8",
    variant: "danger"
  }, t('photoMeter.securityCheck.email.error')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], {
    className: "sds-container mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    weight: "bold"
  }, anonymEmail))), !showMail && showBlocPhone && showBlocMail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "col-md-12 border border-light bg-light text-left font-weight-light email-confirm-button",
    type: "button",
    onClick: function onClick() {
      return setShowMail(true);
    }
  }, t('photoMeter.securityCheck.showBlockMail'))), !showMail && showBlocPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], {
    className: "sds-container mt-2 bloc-cell-phone border new-rectangle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], {
    className: "sds-container mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "caption",
    weight: "light"
  }, t('photoMeter.securityCheck.phone.description'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
    className: "col-md-8 input-security-mail",
    name: "cellphone",
    value: cellPhone,
    onChange: onChangePhoneInput,
    label: t('photoMeter.securityCheck.phone.label'),
    placeholder: t('photoMeter.securityCheck.phone.placeholder')
  }), isShowPhoneError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzAlert"], {
    className: "col-md-8",
    variant: "danger"
  }, t('photoMeter.securityCheck.phone.error')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    weight: "bold"
  }, anonymCellPhone))), showMail && showBlocMail && showBlocPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "col-md-12 border border-light bg-light text-left font-weight-light mobile-confirm-button",
    type: "button",
    onClick: function onClick() {
      return setShowMail(false);
    }
  }, t('photoMeter.securityCheck.showBlockPhone'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
    name: "fullRef",
    type: "hidden",
    value: reference
  }), recaptchaEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: recaptchaRef,
    size: "invisible",
    sitekey: recaptchaInvisiblePublicKey,
    onChange: onChange,
    badge: "bottomleft"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzBox"], {
    className: "mt-3 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    variant: "contained",
    className: "mr-3 float-right",
    icon: "arrow-right-1",
    type: "submit",
    alignIcon: "right",
    isDisabled: isDisabledBtn,
    loader: isSubmitLoading
  }, t('photoMeter.securityCheck.continue')))))))));
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