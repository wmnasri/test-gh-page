(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./assets/img/helper.svg":
/*!*******************************!*\
  !*** ./assets/img/helper.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/helper.svg");

/***/ }),

/***/ "./assets/img/move-out/process-error.svg":
/*!***********************************************!*\
  !*** ./assets/img/move-out/process-error.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/process-error.svg");

/***/ }),

/***/ "./assets/js/components/MoveInOutLanding/index.jsx":
/*!*********************************************************!*\
  !*** ./assets/js/components/MoveInOutLanding/index.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoveInOutLanding; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _form_subscriptionForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../form/subscriptionForm */ "./assets/js/form/subscriptionForm/index.tsx");
/* harmony import */ var _form_cancelForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form/cancelForm */ "./assets/js/form/cancelForm/index.jsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _Bubble__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Bubble */ "./assets/js/components/Bubble/index.jsx");
/* harmony import */ var _move_in_out_landing_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./move-in-out-landing.scss */ "./assets/js/components/MoveInOutLanding/move-in-out-landing.scss");
/* harmony import */ var _move_in_out_landing_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_move_in_out_landing_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var CheckListItem = function CheckListItem(_ref) {
  var title = _ref.title,
    text = _ref.text;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var checklistItemClassNames = classnames__WEBPACK_IMPORTED_MODULE_4___default()('checklist d-flex', {
    'align-items-baseline': !text
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: checklistItemClassNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "check",
    variant: "bold",
    className: "text-primary-dark mr-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "bold",
    size: "M",
    className: "text-dark mb-1"
  }, t(title)), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-0"
  }, t(text))));
};
var MoveInModalContent = function MoveInModalContent() {
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    className: "mb-3"
  }, t('moveIn.edito.helper.title_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular"
  }, t('moveIn.edito.helper.description_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('moveIn.edito.helper.title_2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('moveIn.edito.helper.description_2')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('moveIn.edito.helper.sub_description')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('moveIn.edito.helper.sub_title_3')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('moveIn.edito.helper.sub_description_3')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('moveIn.edito.helper.title_4')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('moveIn.edito.helper.description_4')
  })));
};
var MoveOutModalContent = function MoveOutModalContent() {
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation3.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    className: "mb-3"
  }, t('editoMoveOut.helper.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('editoMoveOut.helper.blackNumbers.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('editoMoveOut.helper.blackNumbers.content')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('editoMoveOut.helper.photo.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('editoMoveOut.helper.photo.content')
  })));
};
function MoveInOutLanding(_ref2) {
  var checklist = _ref2.checklist,
    moveIn = _ref2.moveIn;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__["useIsMobile"])();
  var isDesktop = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__["useIsDesktop"])();
  var _useTranslation4 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation4.t;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowModal = _useState2[0],
    setisShowModal = _useState2[1];
  var handleCloseModal = function handleCloseModal() {
    setisShowModal(false);
  };
  var handleOpenModal = function handleOpenModal() {
    setisShowModal(true);
  };
  var RoundedImg1ClassNames = classnames__WEBPACK_IMPORTED_MODULE_4___default()('rounded-img-1', {
    'move-in': moveIn,
    'move-out': !moveIn
  });
  var RoundedImg2ClassNames = classnames__WEBPACK_IMPORTED_MODULE_4___default()('rounded-img-2', {
    'move-in': moveIn,
    'move-out': !moveIn
  });
  var defaultTrad = moveIn ? 'landingMoveIn' : 'landingMoveOut';
  var ModalContent = moveIn ? MoveInModalContent : MoveOutModalContent;
  var onClick = function onClick() {
    track('MOVEIN_3');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fullscreen: true,
    className: "move-in-out-landing px-0",
    tag: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container pt-0 pt-lg-3 position-relative"
  }, isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bubble__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "green",
    size: "md",
    position: "25"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bubble__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "light",
    size: isMobile ? 'sm' : 'lg',
    position: "26"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bubble__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "dark",
    size: isMobile ? 'sm' : 'md',
    position: "27"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: RoundedImg1ClassNames
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: RoundedImg2ClassNames
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H1",
    size: "XL",
    weight: "black",
    color: "white",
    className: "text-center text-uppercase"
  }, t("".concat(defaultTrad, ".title"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-11 mx-auto mt-4 mt-lg-5 px-3 py-4 p-lg-5 bg-white d-flex flex-column flex-lg-row ".concat(isMobile ? 'rounded-2' : 'rounded-3')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "infos-list pr-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t("".concat(defaultTrad, ".info.title"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "XL",
    weight: "regular",
    className: "mb-4"
  }, t("".concat(defaultTrad, ".info.subtitle"))), checklist.map(function (_ref3, key) {
    var title = _ref3.title,
      text = _ref3.text;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: "mb-2 mb-lg-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckListItem, {
      title: title,
      text: text
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    onClick: handleOpenModal,
    variant: "outlined",
    border: "soft",
    className: "sz-typo-body sm mt-4 mb-4 mb-lg-0 d-inline"
  }, t('know_more')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "landing-form mt-4 mt-lg-0 pl-lg-5"
  }, moveIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_subscriptionForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: onClick
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_cancelForm__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: isShowModal,
    handleClose: handleCloseModal,
    size: "xl",
    backdrop: true,
    centered: true,
    border: "smooth",
    fullscreen: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalContent, null)));
}

/***/ }),

/***/ "./assets/js/components/MoveInOutLanding/move-in-out-landing.scss":
/*!************************************************************************!*\
  !*** ./assets/js/components/MoveInOutLanding/move-in-out-landing.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/moveIn/ModalError.jsx":
/*!****************************************************!*\
  !*** ./assets/js/components/moveIn/ModalError.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_move_in_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/move-in/Error */ "./assets/js/pages/move-in/Error.jsx");



function ModalError(_ref) {
  var isShow = _ref.isShow,
    typeError = _ref.typeError,
    close = _ref.close;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: isShow,
    handleClose: close,
    size: 'xl',
    border: "smooth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_move_in_Error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    inModal: true,
    typeError: typeError
  }));
}

/***/ }),

/***/ "./assets/js/form/cancelForm/cancel-form.scss":
/*!****************************************************!*\
  !*** ./assets/js/form/cancelForm/cancel-form.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/form/cancelForm/index.jsx":
/*!*********************************************!*\
  !*** ./assets/js/form/cancelForm/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CancelForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Login */ "./assets/js/form/Login/index.jsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _cancel_form_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel-form.scss */ "./assets/js/form/cancelForm/cancel-form.scss");
/* harmony import */ var _cancel_form_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_cancel_form_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useGA/tags/moveout */ "./assets/js/hooks/useGA/tags/moveout.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function CancelForm() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var isConnected = window.tsme_data.isConnected;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-4 mb-lg-5"
  }, t('landingMoveOut.form.title', {
    context: isConnected ? 'connected' : 'default'
  })), isConnected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedUser, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultMoveOut, null));
}
var ConnectedUser = function ConnectedUser() {
  var isIntranet = window.tsme_data.isIntranet;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    track = _useGA.track;
  var onClick = function onClick() {
    track('MOVEOUT_3', {
      sz_resilier_type: _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_8__["SZ_RESILIER_TYPE"].account
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    to: _constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].UNSUBSCRIBE_CONNECTED,
    variant: "contained",
    border: "soft",
    className: "sz-typo-body sm",
    isDisabled: isIntranet,
    "data-cy": "moveout-contract-selection-link",
    onClick: onClick
  }, t('landingMoveOut.form.button', {
    context: 'connected'
  }));
};
var DefaultMoveOut = function DefaultMoveOut() {
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation3.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowLoginModal = _useState2[0],
    setisShowLoginModal = _useState2[1];
  var _useGA2 = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    track = _useGA2.track;
  var onClick = function onClick() {
    track('MOVEOUT_3', {
      sz_resilier_type: _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_8__["SZ_RESILIER_TYPE"].reference
    });
  };
  var handleCloseLoginModal = function handleCloseLoginModal() {
    setisShowLoginModal(false);
  };
  var handleOpenLoginModal = function handleOpenLoginModal() {
    track('MOVEOUT_3', {
      sz_resilier_type: _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_8__["SZ_RESILIER_TYPE"].account
    });
    setisShowLoginModal(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: isShowLoginModal,
    handleClose: handleCloseLoginModal,
    size: "md",
    backdrop: true,
    centered: true,
    border: "smooth",
    fullscreen: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: t('signIn.hasAccount.button_submit'),
    variant: "redesign",
    submitText: t('editoMoveOut.loginForm.submitText'),
    targetPath: _constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].UNSUBSCRIBE_CONNECTED,
    isModal: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cancel-account mb-4 mb-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H5",
    size: "L",
    weight: "bold",
    className: "text-uppercase"
  }, t('editoMoveOut.loginForm.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "XL",
    weight: "regular",
    className: "mb-3 mb-lg-4"
  }, t('editoMoveOut.loginForm.info')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    onClick: handleOpenLoginModal,
    variant: "contained",
    border: "soft",
    className: "sz-typo-body sm"
  }, t('editoMoveOut.loginForm.submitText'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cancel-reference"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H5",
    size: "L",
    weight: "bold",
    className: "text-uppercase pt-4 pt-lg-5 mb-3 mb-lg-4"
  }, t('editoMoveOut.auth.block.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    to: _constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].UNSUBSCRIBE,
    variant: "contained",
    border: "soft",
    className: "sz-typo-body sm",
    "data-cy": "moveout-auth-link",
    onClick: onClick
  }, t('editoMoveOut.auth.block.submit'))));
};

/***/ }),

/***/ "./assets/js/form/moveIn/subscription/model.js":
/*!*****************************************************!*\
  !*** ./assets/js/form/moveIn/subscription/model.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../validation/yup */ "./assets/js/validation/yup.js");


/* harmony default export */ __webpack_exports__["default"] = (yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  town: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Obligatoire'),
  street: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
}));

/***/ }),

/***/ "./assets/js/form/subscriptionForm/index.tsx":
/*!***************************************************!*\
  !*** ./assets/js/form/subscriptionForm/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubscriptionForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _moveIn_subscription_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moveIn/subscription/model */ "./assets/js/form/moveIn/subscription/model.js");
/* harmony import */ var _components_CapAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/CapAddress */ "./assets/js/components/CapAddress/index.jsx");
/* harmony import */ var _components_moveIn_ModalError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/moveIn/ModalError */ "./assets/js/components/moveIn/ModalError.jsx");
/* harmony import */ var _pages_move_in_MoveInContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/move-in/MoveInContext */ "./assets/js/pages/move-in/MoveInContext.tsx");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _subscription_form_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subscription-form.scss */ "./assets/js/form/subscriptionForm/subscription-form.scss");
/* harmony import */ var _subscription_form_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_subscription_form_scss__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};














function SubscriptionForm(_ref) {
  var _this = this;
  var onClick = _ref.onClick;
  var _a;
  var _window$tsme_data = window.tsme_data,
    recaptchaInvisiblePublicKey = _window$tsme_data.recaptchaInvisiblePublicKey,
    recaptchaEnabled = _window$tsme_data.recaptchaEnabled;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var recaptchaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSearching = _useState2[0],
    setIsSearching = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    formLoading = _useState6[0],
    setFormLoading = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState8 = _slicedToArray(_useState7, 2),
    town = _useState8[0],
    setTown = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState10 = _slicedToArray(_useState9, 2),
    street = _useState10[0],
    setStreet = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showErrorModal = _useState12[0],
    setShowErrorModal = _useState12[1];
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showAddress = _useState14[0],
    setShowAddress = _useState14[1];
  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState16 = _slicedToArray(_useState15, 2),
    typeError = _useState16[0],
    setTypeError = _useState16[1];
  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState18 = _slicedToArray(_useState17, 2),
    territoryEligibility = _useState18[0],
    setTerritoryEligibility = _useState18[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_move_in_MoveInContext__WEBPACK_IMPORTED_MODULE_11__["MoveInContext"]),
    initParcours = _useContext.initParcours;
  var send = initParcours.send;
  var initialValues = {
    street: '',
    town: ''
  };
  var reset = function reset() {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };
  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
      initialValues: initialValues,
      validationSchema: _moveIn_subscription_model__WEBPACK_IMPORTED_MODULE_8__["default"],
      validateOnChange: true,
      enableReinitialize: true,
      validateOnMount: true,
      onSubmit: function onSubmit(_ref2) {
        var street = _ref2.street;
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _b, _c, _d, postalCode, localityId, locality, _ref3, codeBanco, _ref4, message, code, formData, _yield$axios$post, data, toMeterKoList;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                setFormLoading(true);
                postalCode = town.postalCode, localityId = town.localityId, locality = town.locality;
                _ref3 = ((_b = territorialEligibility.data) === null || _b === void 0 ? void 0 : _b.data) || {}, codeBanco = _ref3.codeBanco;
                _ref4 = ((_c = territorialEligibilityAddress.data) === null || _c === void 0 ? void 0 : _c.data) || {}, message = _ref4.message, code = _ref4.code;
                formData = {
                  newIdBanco: codeBanco,
                  newCodePostal: postalCode,
                  newVille: locality,
                  newInseeCode: localityId,
                  streetName: street
                };
                if (![territoryEligibility, message].includes(_constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].OK_NON_AUTO)) {
                  _context.next = 12;
                  break;
                }
                _context.next = 8;
                return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_6__["API"].MOVE_IN.POST_SET_ADDRESS_IN_SESSION, formData);
              case 8:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;
                if (data.code === '00' && data.message === _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].OK_SET_IN_SESSION) {
                  window.location.href = _constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].MOVE_IN.ACCOUNT_ONLINE_STEP2;
                }
                return _context.abrupt("return");
              case 12:
                if (_constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].OK_ELIGIBILITE === territoryEligibility) {
                  toMeterKoList = [_constants__WEBPACK_IMPORTED_MODULE_6__["ERROR_CODES"].KO_NUMERO_RUE, _constants__WEBPACK_IMPORTED_MODULE_6__["ERROR_CODES"].KO_ELIGIBILITE_MULTI_COMPTEUR, _constants__WEBPACK_IMPORTED_MODULE_6__["ERROR_CODES"].KO_ELIGIBILITE_ADRESSE];
                  if (code === '00' && message === _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].OK_ELIGIBILITE) {
                    send({
                      type: 'GO_TO_SUMMARY_METER',
                      meterInfos: (_d = territorialEligibilityAddress.data) === null || _d === void 0 ? void 0 : _d.data,
                      codeInsee: localityId,
                      codeBanco: codeBanco,
                      sessionData: formData
                    });
                  } else if (code === '00' && message === _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].OK_ELIGIBILITE_INITIE) {
                    send({
                      type: 'GO_TO_START_PARCOURS',
                      codeInsee: localityId,
                      codeBanco: codeBanco,
                      sessionData: formData
                    });
                  } else if (code === '00' && message === _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_ELIGIBILITE_INITIE) {
                    send({
                      type: 'GO_TO_KO_EGIBILITY'
                    });
                  } else if (code === '00' && toMeterKoList.includes(message || '')) {
                    send({
                      type: 'GO_TO_METER',
                      codeInsee: localityId,
                      codeBanco: codeBanco,
                      sessionData: formData
                    });
                  } else {
                    typeErrorEligibility(message);
                    setFormLoading(false);
                  }
                } else {
                  typeErrorEligibility(territoryEligibility);
                  setFormLoading(false);
                }
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
      }
    }),
    values = _useFormik.values,
    errors = _useFormik.errors,
    handleSubmit = _useFormik.handleSubmit,
    setFieldValue = _useFormik.setFieldValue;
  var onClickAway = function onClickAway() {
    setIsSearching(false);
  };
  var onChangeTown = function onChangeTown(_ref5) {
    var target = _ref5.target;
    setIsSearching(true);
    setIsLoading(false);
    setFieldValue('town', target.value);
  };
  var onClickTown = function onClickTown(town) {
    setIsSearching(false);
    setIsLoading(true);
    var params = {
      'nom-commune': town.name,
      'insee-code': town.inseecode,
      town: Object.assign(Object.assign({}, town), {
        locality: town.name,
        localityId: town.inseecode,
        postalCode: town.zipcode
      })
    };
    territorialEligibility.mutate({
      params: params
    });
  };
  var onChangeStreet = function onChangeStreet(_ref6) {
    var target = _ref6.target;
    setIsSearching(true);
    setIsLoading(false);
    setFieldValue('street', target.value);
  };
  var onClickStreet = function onClickStreet(street) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var localityId, streetId, streetNumber, params, _yield$territorialEli, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setIsSearching(false);
            setIsLoading(true);
            setFieldValue('street', street.inputOutput);
            localityId = street.localityId, streetId = street.streetId, streetNumber = street.streetNumber;
            params = {
              insee: localityId,
              hexavia: streetId,
              streetNumber: streetNumber,
              street: street
            };
            if (!(territoryEligibility === _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_INCLUSION)) {
              _context2.next = 14;
              break;
            }
            _context2.next = 8;
            return territorialEligibility.mutateAsync({
              params: {
                hexavia: streetId,
                'insee-code': localityId,
                'nom-commune': town.name,
                'street-number': streetNumber
              }
            });
          case 8:
            _yield$territorialEli = _context2.sent;
            data = _yield$territorialEli.data;
            if (!(data.territoryEligibility !== _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].OK_ELIGIBILITE)) {
              _context2.next = 14;
              break;
            }
            setStreet(street);
            setShowAddress(false);
            return _context2.abrupt("return");
          case 14:
            territorialEligibilityAddress.mutate({
              params: params
            });
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
  };
  var fetchTerritorialEligibility = function fetchTerritorialEligibility(_ref7) {
    var data = _ref7.params;
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var params;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            params = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["removeKey"])('town', data);
            if (!(recaptchaEnabled && recaptchaRef.current)) {
              _context3.next = 5;
              break;
            }
            _context3.next = 4;
            return recaptchaRef.current.executeAsync();
          case 4:
            params[_constants__WEBPACK_IMPORTED_MODULE_6__["RECAPTCHA_RESPONSE"]] = _context3.sent;
          case 5:
            return _context3.abrupt("return", _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_6__["API"].MOVE_IN.POST_ELIGIBILITY_TERRITORIAL, {
              params: params
            }));
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
  };
  var territorialEligibility = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(fetchTerritorialEligibility, {
    onSuccess: function onSuccess(response, _ref8) {
      var params = _ref8.params;
      var town = params.town;
      var territoryEligibility = response.data.territoryEligibility;
      setTerritoryEligibility(territoryEligibility);
      var askAddress = [_constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].OK_ELIGIBILITE, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_INCLUSION];
      if (askAddress.includes(territoryEligibility)) {
        setShowAddress(true);
      }
      if (town) {
        setTown(town);
      }
    },
    onSettled: function onSettled() {
      var _ref9 = arguments.length <= 2 ? undefined : arguments[2],
        params = _ref9.params;
      var town = params.town;
      if (town) {
        setIsLoading(false);
      }
      reset();
    },
    onError: function onError(error) {
      console.error(error);
    }
  });
  var fetchTerritorialEligibilityAddress = function fetchTerritorialEligibilityAddress(_ref10) {
    var data = _ref10.params;
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var params;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            params = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["removeKey"])('street', data);
            if (!(recaptchaEnabled && recaptchaRef.current)) {
              _context4.next = 5;
              break;
            }
            _context4.next = 4;
            return recaptchaRef.current.executeAsync();
          case 4:
            params[_constants__WEBPACK_IMPORTED_MODULE_6__["RECAPTCHA_RESPONSE"]] = _context4.sent;
          case 5:
            return _context4.abrupt("return", _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_6__["API"].MOVE_IN.GET_ADDRESS_ELIGIBILITY, {
              params: params
            }));
          case 6:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
  };
  var territorialEligibilityAddress = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(fetchTerritorialEligibilityAddress, {
    onSuccess: function onSuccess(_, _ref11) {
      var params = _ref11.params;
      var street = params.street;
      setFieldValue('street', street.inputOutput);
      setStreet(street);
      setShowAddress(false);
    },
    onSettled: function onSettled() {
      setIsLoading(false);
      reset();
    },
    onError: function onError(error) {
      console.error(error);
    }
  });
  var initAddress = function initAddress() {
    setTown(null);
    setStreet(null);
    setShowAddress(false);
    setFieldValue('town', '');
    setFieldValue('street', '');
  };
  var initStreet = function initStreet() {
    setStreet(null);
    setShowAddress(true);
    setFieldValue('street', '');
  };
  var typeErrorEligibility = function typeErrorEligibility(message) {
    var codesErrorNotEligible = [_constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_CONTRAT, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_CONTRAT_EAU, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_CONTRAT_EXPIRE, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].INCLUSION_NO_DATA];
    var codesErrorNotSelectionable = [_constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_PRIX, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_RS, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_SERVICE, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_EFACTURE, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_MENSU_PRELEV, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_COMPTEUR, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_ELIGIBILITE_COMPTEUR, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_LOCALISATION, _constants__WEBPACK_IMPORTED_MODULE_6__["CODES"].KO_ELIGIBILITE_DEMANDE];
    if (codesErrorNotEligible.includes(message)) {
      setTypeError('notEligible');
      setShowErrorModal(true);
    }
    if (codesErrorNotSelectionable.includes(message)) {
      setTypeError('notSelectionable');
      setShowErrorModal(true);
    }
  };
  var onClose = function onClose() {
    setShowErrorModal(false);
  };
  var isValid = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return !town || town && showAddress && !street ? false : true;
  }, [town, street, showAddress]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    "data-cy": "form-subscription",
    onSubmit: handleSubmit,
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('landingMoveIn.form.title'))), recaptchaEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: recaptchaRef,
    size: "invisible",
    sitekey: recaptchaInvisiblePublicKey,
    badge: "bottomleft"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-2"
  }, town ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "regular",
    className: "mb-2"
  }, t('moveIn.edito.subscription.form.postalCode.label')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "locality-town",
    className: "locality rounded-1 px-3 w-100 data-hj-suppress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "button",
    size: "L",
    className: "mb-0"
  }, town.zipcode, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mx-1"
  }, "-"), town.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    "data-cy": "reset-town",
    type: "reset",
    onClick: initAddress,
    variant: "text",
    icon: "pencil-write"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CapAddress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "town",
    className: "pr-0 data-hj-suppress",
    type: "town",
    value: values.town,
    placeholder: t('landingMoveIn.form.placeholder_postalCode'),
    onChange: onChangeTown,
    onClick: onClickTown,
    onClickAway: onClickAway,
    isSearching: isSearching,
    isLoading: isLoading,
    withCapaddress: false
  })), showAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "body",
    size: "XL",
    weight: "regular",
    className: "text-left mb-4"
  }, t('moveIn.edito.subscription.form.address.text'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CapAddress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "street",
    className: "w-100 data-hj-suppress",
    type: "street",
    value: values.street,
    label: t('moveIn.edito.subscription.form.address.label'),
    placeholder: t('moveIn.edito.subscription.form.address.placeholder'),
    address: town,
    onChange: onChangeStreet,
    onClick: onClickStreet,
    onClickAway: onClickAway,
    isSearching: isSearching,
    isLoading: isLoading
  }), ((_a = values === null || values === void 0 ? void 0 : values.street) === null || _a === void 0 ? void 0 : _a.length) > 0 && (errors === null || errors === void 0 ? void 0 : errors.street) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzAlert"], null, errors.street))), town && street && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "regular"
  }, t('moveIn.edito.subscription.form.address.label')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "locality-street",
    className: "locality rounded-1 px-3 w-100 data-hj-suppress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "button",
    size: "L",
    className: "mb-0"
  }, values === null || values === void 0 ? void 0 : values.street)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    "data-cy": "reset-street",
    type: "reset",
    variant: "text",
    icon: "pencil-write",
    onClick: initStreet
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    type: "submit",
    isDisabled: !isValid,
    className: "sz-typo-body sm mt-3 mb-4",
    variant: "contained",
    border: "soft",
    loader: formLoading,
    onClick: onClick
  }, t('moveIn.edito.subscription.form.postalCode.submit', {
    context: town && 'inclusion'
  }))), showErrorModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_moveIn_ModalError__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isShow: showErrorModal,
    close: onClose,
    typeError: typeError
  }));
}

/***/ }),

/***/ "./assets/js/form/subscriptionForm/subscription-form.scss":
/*!****************************************************************!*\
  !*** ./assets/js/form/subscriptionForm/subscription-form.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/move-in/Error.jsx":
/*!*******************************************!*\
  !*** ./assets/js/pages/move-in/Error.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_img_move_out_process_error_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/../img/move-out/process-error.svg */ "./assets/img/move-out/process-error.svg");
/* harmony import */ var _app_img_helper_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/../img/helper.svg */ "./assets/img/helper.svg");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_movein__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks/useGA/tags/movein */ "./assets/js/hooks/useGA/tags/movein.ts");
/* harmony import */ var _app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Error(_ref) {
  var _ref$inModal = _ref.inModal,
    inModal = _ref$inModal === void 0 ? false : _ref$inModal,
    typeError = _ref.typeError;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showLoaderQuit = _useState2[0],
    setshowLoaderQuit = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showLoaderContact = _useState4[0],
    setshowLoaderContact = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showLoaderLogin = _useState6[0],
    setshowLoaderLogin = _useState6[1];
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    track = _useGA.track;
  var errorImg = _app_img_move_out_process_error_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
  if (typeError === 'alreadyInitiated') {
    errorImg = _app_img_helper_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
  }
  var isInitiated = typeError === 'errorSessionExpiredInitated';
  var isNotInitiated = typeError === 'errorSessionExpiredUninitiated';
  var sessionExpired = isInitiated || isNotInitiated;
  var loginToStep1Url = "".concat(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN, "?targetUrl=").concat(_app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].MOVE_IN.INVENTORY_URL);
  var onClickContact = function onClickContact() {
    setshowLoaderContact(true);
    window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_6__["CUSTOMER_SERVICE_URL"];
  };
  var onClickLogin = function onClickLogin() {
    setshowLoaderLogin(true);
    window.location.href = '/mon-compte-en-ligne/deconnexion';
  };
  var onClickQuit = function onClickQuit() {
    setshowLoaderQuit(true);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typeError === 'notSelectionable') {
      track('MOVEIN_5', {
        'sz_souscription-impossible-type': _app_hooks_useGA_tags_movein__WEBPACK_IMPORTED_MODULE_8__["SZ_COMPTEUR_RESULT"].uncover
      });
    }
    if (typeError === 'notEligible') {
      track('MOVEIN_5', {
        'sz_souscription-impossible-type': _app_hooks_useGA_tags_movein__WEBPACK_IMPORTED_MODULE_8__["SZ_COMPTEUR_RESULT"].unavailable
      });
    }
  }, []);
  if (sessionExpired) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container py-5",
      "data-cy": "session-expired-error-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
      className: "bg-white mb-3 p-3 px-md-5 pt-md-4 pb-md-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "huge",
      weight: "medium",
      className: "sz-line-height-normal mb-3",
      tag: "h1"
    }, t('moveIn.errors.title_sessionExpired')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "mb-2"
    }, t('moveIn.errors.content_sessionExpired')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "new-line"
    }, t('moveIn.errors.content', {
      context: isInitiated ? 'initiated' : 'uninitiated'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-5 px-0 mt-4 mb-md-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_9__["default"], {
      to: isInitiated ? loginToStep1Url : _app_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].MOVE_IN.URL,
      variant: "contained",
      onClick: onClickQuit,
      loader: showLoaderQuit,
      id: "redirect"
    }, t('moveIn.errors.btn', {
      context: isInitiated ? 'reenter' : 'startAgain'
    }))))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "error-page",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('cy-error-page', inModal === false && 'container py-5')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('bg-white ', inModal === false ? ' px-2 px-md-5 py-3 mt-0 mt-md-1 mb-3' : 'shadow-none')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-block d-md-none text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: errorImg,
    className: "w-75",
    alt: "process error"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    className: "text-center text-lg-left cy-error-title"
  }, t('moveIn.errors.title', {
    context: typeError
  })), typeError === 'alreadyInitiated' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('moveIn.errors.intro', {
    context: typeError
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('moveIn.errors.content', {
    context: typeError
  })), typeError === 'notSelectionable' || typeError === 'notEligible' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('moveIn.errors.complementary', {
    context: typeError
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-none d-lg-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: errorImg,
    alt: "process error"
  }))), typeError === 'notSelectionable' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-md-row mt-3 text-center text-md-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    "data-cy": "client-service",
    variant: "contained",
    border: "soft",
    onClick: onClickContact,
    className: "mt-2 mt-md-0",
    loader: showLoaderContact
  }, t('moveIn.errors.btnServiceClient')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    "data-cy": "home-button",
    variant: "text",
    icon: "house-3",
    alignIcon: "left",
    onClick: function onClick() {
      window.location.href = '/';
    }
  }, t('moveIn.errors.btnHome'))), typeError === 'notEligible' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-md-row mt-3 text-center text-md-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    "data-cy": "home-button",
    variant: "contained",
    border: "soft",
    onClick: function onClick() {
      window.location.href = '/';
    }
  }, t('moveIn.errors.btnHome'))), typeError === 'alreadyInitiated' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-md-row mt-3 text-center text-md-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: onClickLogin,
    loader: showLoaderLogin,
    className: "mr-0 mr-md-4 cy-reconnect-button"
  }, t('moveIn.errors.btnLogin')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    "data-cy": "client-service",
    variant: "text",
    icon: "keyboard-arrow-right",
    alignIcon: "right",
    onClick: onClickContact,
    className: "mt-2 mt-md-0 cy-client-service-button",
    loader: showLoaderContact
  }, t('moveIn.errors.btnServiceClient')))));
}

/***/ }),

/***/ "./assets/js/pages/move-in/MoveInContext.tsx":
/*!***************************************************!*\
  !*** ./assets/js/pages/move-in/MoveInContext.tsx ***!
  \***************************************************/
/*! exports provided: MoveInContext, MoveInProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveInContext", function() { return MoveInContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveInProvider", function() { return MoveInProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {};
var MoveInContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialState);
function MoveInProvider(_ref) {
  var children = _ref.children,
    initParcours = _ref.initParcours;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoveInContext.Provider, {
    value: {
      initParcours: initParcours
    }
  }, children);
}

/***/ })

}]);