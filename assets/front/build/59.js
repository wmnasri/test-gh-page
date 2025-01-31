(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./assets/img/photoMeter/ask-email.png":
/*!*********************************************!*\
  !*** ./assets/img/photoMeter/ask-email.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/ask-email.png");

/***/ }),

/***/ "./assets/js/components/photoMeter/AskEmail.jsx":
/*!******************************************************!*\
  !*** ./assets/js/components/photoMeter/AskEmail.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AskEmail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _img_photoMeter_ask_email_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/photoMeter/ask-email.png */ "./assets/img/photoMeter/ask-email.png");
/* harmony import */ var _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photoMeter/Meter */ "./assets/js/services/photoMeter/Meter.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photoCompteur.scss */ "./assets/js/components/photoMeter/photoCompteur.scss");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_photoCompteur_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _models_photoMeter_AskEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/photoMeter/AskEmail */ "./assets/js/models/photoMeter/AskEmail.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function AskEmail() {
  var isBrowser = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
    _useState2 = _slicedToArray(_useState, 2),
    setDataSession = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showLoader = _useState4[0],
    setshowLoader = _useState4[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_3__["default"].getDataSession().then(function (data) {
      setDataSession(data);
    });
  }, []);
  var onChangeEmailInput = function onChangeEmailInput(_ref, setFieldValue) {
    var target = _ref.target;
    setFieldValue('email', target.value);
  };
  var mailToUser = function mailToUser(values) {
    var email = values.email;
    setshowLoader(true);
    _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_3__["default"].updateSession({
      email: email
    }).then(function () {
      _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_3__["default"].sendConfirmationMail().then(function (sendMail) {
        if (sendMail.isError == false) {
          history.push(_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].PHOTO_COUNTER_CONFIRM, {
            isMailError: false
          });
        } else {
          history.push(_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].PHOTO_COUNTER_CONFIRM, {
            isMailSent: true
          });
        }
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Formik"], {
    initialValues: {
      email: ''
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: _models_photoMeter_AskEmail__WEBPACK_IMPORTED_MODULE_10__["AskEmailModel"],
    onSubmit: mailToUser
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      values = _ref2.values,
      errors = _ref2.errors,
      setFieldValue = _ref2.setFieldValue,
      isValid = _ref2.isValid,
      dirty = _ref2.dirty;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-10 m-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      variant: "h1",
      className: "pl-3 title-page"
    }, t('photoMeter.askEmail.title')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container global-container mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-10 m-auto ".concat(isBrowser ? 'py-5' : 'py-3')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-6 d-md-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      weight: "regular",
      className: "mb-4"
    }, t('photoMeter.askEmail.formTitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzInput"], {
      name: "email",
      value: values.email,
      onChange: function onChange(event) {
        onChangeEmailInput(event, setFieldValue);
      },
      label: t('photoMeter.askEmail.email.label'),
      placeholder: isBrowser ? t('photoMeter.askEmail.email.placeholder.browser') : t('photoMeter.askEmail.email.placeholder.mobile'),
      icon: "envelope",
      valid: !errors.email
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-6 d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "m-auto justify-content-center align-self-center d-md-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_photoMeter_ask_email_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: ""
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container my-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-10 m-auto d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
      type: "submit",
      variant: "contained",
      className: "m-auto",
      loader: showLoader,
      isDisabled: !dirty || !isValid
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      weight: "light",
      variant: "button"
    }, t('photoMeter.askEmail.submit'))))));
  }));
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

/***/ "./assets/js/models/photoMeter/AskEmail.js":
/*!*************************************************!*\
  !*** ./assets/js/models/photoMeter/AskEmail.js ***!
  \*************************************************/
/*! exports provided: AskEmailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskEmailModel", function() { return AskEmailModel; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validation/yup */ "./assets/js/validation/yup.js");


var AskEmailModel = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email('photoMeter.form.errors.email')
});

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