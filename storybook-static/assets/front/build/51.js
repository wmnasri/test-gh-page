(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./assets/img/icons/envelope.svg":
/*!***************************************!*\
  !*** ./assets/img/icons/envelope.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/envelope.svg");

/***/ }),

/***/ "./assets/img/icons/key-lock.svg":
/*!***************************************!*\
  !*** ./assets/img/icons/key-lock.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/key-lock.svg");

/***/ }),

/***/ "./assets/js/components/Services.jsx":
/*!*******************************************!*\
  !*** ./assets/js/components/Services.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function Services(_ref) {
  var variant = _ref.variant,
    ptValue = _ref.ptValue;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var isLabelInline = variant === 'label-inline';
  var isLine = variant === 'line';
  var isSquare = variant === 'square';
  var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('row no-gutters pt-3', _defineProperty({
    'pt-md-5 mt-3': isSquare,
    'pt-md-5 justify-content-center': isLine
  }, "pt-md-".concat(ptValue, " justify-content-center"), isLabelInline));
  var serviceClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    'px-2 px-sm-3 col-sm-3 new-line col-6 col-md-2 text-center': isLine,
    'px-2 px-sm-3 col-sm-3 new-line col-6 col-md-4 col-lg-6 text-center': isSquare,
    'px-2 px-xl-3 d-flex': isLabelInline
  });
  var labelClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('text-dark mt-2', {
    'pl-2 pl-xl-3 mb-4': isLabelInline
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: containerClassName
  }, isLabelInline ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "accounting-document",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service1'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "check-1",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service3')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "gauge-dashboard-1",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service2'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "cog",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service4'))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    serviceClassName: serviceClassName,
    labelClassName: labelClassName
  }));
}
var Content = function Content(_ref2) {
  var serviceClassName = _ref2.serviceClassName,
    labelClassName = _ref2.labelClassName;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "accounting-document",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service1'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "gauge-dashboard-1",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service2'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "check-1",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service3'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: serviceClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "cog",
    variant: "line",
    className: "mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: labelClassName
  }, t('signUp.accountInfos.service4'))));
};

/***/ }),

/***/ "./assets/js/pages/login-reset/Modal.tsx":
/*!***********************************************!*\
  !*** ./assets/js/pages/login-reset/Modal.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginResetModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_components_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/Box */ "./assets/js/components/Box/index.jsx");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _img_icons_key_lock_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @img/icons/key-lock.svg */ "./assets/img/icons/key-lock.svg");
/* harmony import */ var _img_icons_envelope_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @img/icons/envelope.svg */ "./assets/img/icons/envelope.svg");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");












function LoginResetModal(_ref) {
  var isShow = _ref.isShow,
    close = _ref.close;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useIsMobile"])();
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_11__["useGA"])(),
    track = _useGA.track;
  var resetLoginModalButtons = [{
    link: _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].LOGIN_RESET.CUSTOMER_REF,
    picto: {
      src: _img_icons_envelope_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
      alt: ''
    },
    label: t('loginReset.modal.button_login_reset'),
    id: 'to-login-reset',
    onClick: function onClick() {
      track('REINIT_CEL_1', {
        nature_reinitID: 'pb_email'
      });
    }
  }, {
    link: _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].LOGIN_RESET.PASSWORD.INDEX,
    picto: {
      src: _img_icons_key_lock_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
      alt: ''
    },
    label: t('loginReset.modal.button_password_reset'),
    id: 'to-password-reset',
    onClick: function onClick() {
      track('REINIT_CEL_1', {
        nature_reinitID: 'oubli_mdp'
      });
    }
  }];
  var modalStyles = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__["css"])({
    borderRadius: '1rem',
    '.modal-content': {
      backgroundColor: 'white'
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: isShow,
    handleClose: close,
    size: "lg",
    title: "",
    centered: true,
    fullscreen: "md",
    border: "smooth",
    className: modalStyles,
    id: "login-reset-entry",
    closeBtnId: "login-reset-close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-4"
  }, t('loginReset.modal.title')), resetLoginModalButtons.map(function (item, key) {
    var link = item.link,
      picto = item.picto,
      label = item.label,
      id = item.id,
      onClick = item.onClick;
    var boxClasses = classnames__WEBPACK_IMPORTED_MODULE_6___default()('shadow-sm', {
      'mb-3': key !== resetLoginModalButtons.length - 1,
      'mb-4': key === resetLoginModalButtons.length - 1,
      'mt-3 mt-lg-4': key === 0
    });
    var pictoStyles = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__["css"])({
      width: isMobile ? 15 : 24,
      height: isMobile ? 15 : 24
    });
    var iconStyles = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__["css"])({
      fontSize: '0.9rem !important',
      marginLeft: 'auto'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
      backgroundColor: "white",
      className: boxClasses,
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      to: link,
      className: "d-flex align-items-center p-3 p-lg-4 cursor-pointer",
      id: id,
      onClick: onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-gray-200 rounded-circle d-flex align-items-center justify-content-center p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: picto.src,
      alt: picto.alt,
      className: pictoStyles
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "text-dark ml-3 mb-0 mr-3 mr-sm-0",
      size: "XL"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      i18nKey: label,
      components: {
        boldText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
          weight: "bold",
          tag: "span"
        })
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
      icon: "arrow-right-1",
      variant: "line",
      className: iconStyles
    })));
  }));
}

/***/ }),

/***/ "./assets/js/pages/sign-in/index.jsx":
/*!*******************************************!*\
  !*** ./assets/js/pages/sign-in/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Services */ "./assets/js/components/Services.jsx");
/* harmony import */ var _components_Bubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Bubble */ "./assets/js/components/Bubble/index.jsx");
/* harmony import */ var _sign_in_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in.scss */ "./assets/js/pages/sign-in/sign-in.scss");
/* harmony import */ var _sign_in_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sign_in_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form/Login */ "./assets/js/form/Login/index.jsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _login_reset_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login-reset/Modal */ "./assets/js/pages/login-reset/Modal.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var ProBlock = function ProBlock(_ref) {
  var url_pro = _ref.url_pro;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto text-center col-sm-12 col-md-8 col-lg-12 px-lg-0 pt-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3",
    tag: "h2"
  }, t('signIn.accountPro.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    to: url_pro,
    variant: "outlined",
    border: "soft"
  }, t('signIn.accountPro.button', {
    context: 'submit'
  })));
};
function SignIn() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__["useIsMobile"])();
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  var _window$tsme_data = window.tsme_data,
    header = _window$tsme_data.header,
    targetUrl = _window$tsme_data.targetUrl;
  var url_pro = header.url_pro;
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useLocation"])();
  var pathname = location.pathname;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (pathname === _constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].LOGIN_LOST_ID) {
      setShowModal(true);
    }
  }, []);
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "sign-in container-fluid p-0"
  }, showModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_reset_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isShow: showModal,
    close: handleCloseModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container pb-large pt-5 pb-lg-5 px-md-0 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "light",
    size: isMobile ? 'sm' : 'lg',
    position: "4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "dark",
    size: isMobile ? 'sm' : 'md',
    position: "5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "green",
    size: "md",
    position: "6",
    className: "d-none d-lg-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-img-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-img-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H1",
    size: "XL",
    weight: "bold",
    color: "white",
    className: "text-center text-uppercase"
  }, t('signIn.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sign-in-container bg-white d-flex flex-column flex-lg-row mx-auto mt-4 p-0 py-5 position-relative",
    style: {
      maxWidth: 1098,
      borderRadius: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sign-in-account col-12 col-lg-5 px-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Login__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('signIn.hasAccount.title'),
    submitText: t('signIn.hasAccount.button', {
      context: 'submit'
    }),
    variant: "redesign",
    targetPath: targetUrl || _constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DASHBOARD,
    usernameInputId: "username",
    passwordInputId: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "no-account col-12 col-lg-7 px-md-4 mt-4 mt-lg-0 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3",
    tag: "h2"
  }, t('signIn.hasNoAccount.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "outlined",
    border: "soft",
    to: _constants__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].SIGN_UP
  }, t('signUp.step1.button', {
    context: 'submit'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Services__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: isMobile ? 'square' : 'label-inline',
    ptValue: url_pro ? 4 : 6
  }), url_pro && !isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pro-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProBlock, {
    url_pro: url_pro
  })))), url_pro && isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sign-in-container bg-white d-flex flex-column flex-lg-row mx-auto mt-4 p-0 py-5 position-relative",
    style: {
      maxWidth: 1098,
      borderRadius: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProBlock, {
    url_pro: url_pro
  }))));
}

/***/ }),

/***/ "./assets/js/pages/sign-in/sign-in.scss":
/*!**********************************************!*\
  !*** ./assets/js/pages/sign-in/sign-in.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);