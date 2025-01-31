(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./assets/img/hand_shower.jpg":
/*!************************************!*\
  !*** ./assets/img/hand_shower.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/hand_shower.jpg");

/***/ }),

/***/ "./assets/js/components/PhoneButton/index.jsx":
/*!****************************************************!*\
  !*** ./assets/js/components/PhoneButton/index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);



function PhoneButton(_ref) {
  var phone = _ref.phone,
    infoTextColor = _ref.infoTextColor,
    infoPhone = _ref.infoPhone,
    name = _ref.name,
    descriptionId = _ref.descriptionId,
    onClick = _ref.onClick;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "phone-button-".concat(name),
    className: "phone-button text-decoration-none",
    href: "tel:".concat(phone.split(' ').join('')),
    "aria-labelledby": "".concat(descriptionId, " phone-button-").concat(name, " phone-button-info-").concat(name),
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-primary-dark rounded-5 px-4 py-3 d-flex align-items-baseline justify-content-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    variant: "line",
    icon: "phone-actions-voice-mail",
    className: "text-white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L",
    color: "white",
    className: "ml-3 mb-0",
    tag: "p"
  }, phone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "caption",
    size: "M",
    color: infoTextColor || 'white',
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "phone-button-info-".concat(name)
  }, t('helpAndContact.contact.phone_info'))));
}

/***/ }),

/***/ "./assets/js/components/SpeechBubble/index.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/components/SpeechBubble/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpeechBubble; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _speechBubble_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speechBubble.scss */ "./assets/js/components/SpeechBubble/speechBubble.scss");
/* harmony import */ var _speechBubble_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_speechBubble_scss__WEBPACK_IMPORTED_MODULE_2__);



function SpeechBubble(_ref) {
  var _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'left' : _ref$direction,
    children = _ref.children,
    classNames = _ref.classNames;
  var chatClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('speech-bubble', classNames, {
    'speech-bubble-right': direction && 'right' === direction
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: chatClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "speech-bubble-content"
  }, children));
}

/***/ }),

/***/ "./assets/js/components/SpeechBubble/speechBubble.scss":
/*!*************************************************************!*\
  !*** ./assets/js/components/SpeechBubble/speechBubble.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/ez-components/contactPhone/contactPhone.scss":
/*!****************************************************************!*\
  !*** ./assets/js/ez-components/contactPhone/contactPhone.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/ez-components/contactPhone/index.jsx":
/*!********************************************************!*\
  !*** ./assets/js/ez-components/contactPhone/index.jsx ***!
  \********************************************************/
/*! exports provided: ContactPhoneContext, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPhoneContext", function() { return ContactPhoneContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactPhone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _components_CapAddress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CapAddress */ "./assets/js/components/CapAddress/index.jsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducer */ "./assets/js/ez-components/contactPhone/reducer.js");
/* harmony import */ var _contactPhone_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contactPhone.scss */ "./assets/js/ez-components/contactPhone/contactPhone.scss");
/* harmony import */ var _contactPhone_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_contactPhone_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _hooks_useGA_tags_helpAndContact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useGA/tags/helpAndContact */ "./assets/js/hooks/useGA/tags/helpAndContact.ts");
/* harmony import */ var _components_PhoneButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/PhoneButton */ "./assets/js/components/PhoneButton/index.jsx");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var ContactPhoneContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  contactDatas: null
});
var initialState = {
  infosTown: null,
  infosStreet: null,
  isLoading: false,
  isSearching: false,
  isSearchingStreet: false,
  contactDatas: null,
  messageError: null,
  isTownIncluded: false
};
function ContactPhone() {
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    track = _useGA.track;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_10__["default"], initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var infosTown = state.infosTown,
    infosStreet = state.infosStreet,
    isLoading = state.isLoading,
    isSearching = state.isSearching,
    contactDatas = state.contactDatas,
    messageError = state.messageError,
    isTownIncluded = state.isTownIncluded;
  var hasResult = contactDatas ? Object.keys(contactDatas).length > 0 : false;
  var showResult = hasResult || messageError;
  var onChange = function onChange(_ref) {
    var target = _ref.target;
    var value = target.value;
    setValue(value);
    dispatch({
      type: 'isSearching',
      payload: true
    });
  };
  var SCControlInclusionMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (_ref2) {
    var inseecode = _ref2.inseecode;
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_5__["API"].CUSTOMER_SERVICE_GET_CONTROL_INCLUSION, {
      params: {
        inseeCode: inseecode
      }
    });
  }, {
    onSuccess: function onSuccess(_ref3, infosTown) {
      var data = _ref3.data;
      var isError = data.isError,
        isTownIncluded = data.isTownIncluded;
      if (isError) {
        return;
      } else if (isTownIncluded) {
        dispatch({
          type: 'isTownIncluded',
          payload: true
        });
        dispatch({
          type: 'isLoading',
          payload: false
        });
        dispatch({
          type: 'isShowModal',
          payload: true
        });
      } else {
        onValidateTown(infosTown);
      }
    }
  });
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (params) {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_5__["API"].CUSTOMER_SERVICE_DATA, params);
    }, {
      onSuccess: function onSuccess(_ref4) {
        var data = _ref4.data;
        var _data$response = data.response,
          contactDatas = _data$response.contactDatas,
          isError = _data$response.isError,
          messageError = _data$response.messageError;
        dispatch({
          type: 'isLoading',
          payload: false
        });
        if (isError) {
          dispatch({
            type: 'messageError',
            payload: messageError
          });
        } else {
          dispatch({
            type: 'contactDatas',
            payload: contactDatas
          });
        }
      },
      onError: function onError() {
        dispatch({
          type: 'isLoading',
          payload: false
        });
        dispatch({
          type: 'messageError',
          payload: t('errors.techError')
        });
      }
    }),
    SCDataMutation = _extends({}, (_objectDestructuringEmpty(_useMutation), _useMutation));
  var onClick = function onClick(infosTown) {
    var text = infosTown.text;
    setValue(text);
    dispatch({
      type: 'isSearching',
      payload: false
    });
    dispatch({
      type: 'infosTown',
      payload: infosTown
    });
    dispatch({
      type: 'isLoading',
      payload: true
    });
    track('HELP_CONTACT_3', {
      sz_clic_aide_recherche_ville: text
    });
    SCControlInclusionMutation.mutate(infosTown);
  };
  var onValidateTown = function onValidateTown(infosTown) {
    var zipcode = infosTown.zipcode,
      inseecode = infosTown.inseecode;
    var params = {
      zipCode: zipcode,
      codeInsee: inseecode,
      idUrlFromTypePage: 'lderiuc_service_client'
    };
    SCDataMutation.mutate(params);
  };
  var onValidateStreet = function onValidateStreet() {
    var zipcode = infosTown.zipcode,
      inseecode = infosTown.inseecode,
      name = infosTown.name;
    var streetNumber = infosStreet.streetNumber,
      streetId = infosStreet.streetId;
    var params = {
      zipCode: zipcode,
      codeInsee: inseecode,
      numeroRue: streetNumber,
      townName: name,
      codeHexaviaAdresse: streetId,
      idUrlFromTypePage: 'lderiuc_service_client'
    };
    dispatch({
      type: 'isShowModal',
      payload: false
    });
    SCDataMutation.mutate(params);
  };
  var reset = function reset() {
    setValue('');
    dispatch({
      type: 'reset'
    });
  };
  var inputClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()('col-12 col-md-8 col-lg-4 px-0', {
    'offset-1': showResult && !isMobile,
    'mx-auto': !showResult
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tag: "div",
    fullscreen: true,
    minHeight: "auto",
    className: "bg-blue-1 overflow-x-clip py-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-lg-3",
    "data-cy": "faq-contact-phone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    size: "L",
    color: "white",
    weight: "medium",
    className: "mx-auto text-center",
    tag: "h2"
  }, t('helpAndContact.contact.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactPhoneContext.Provider, {
    value: [state, dispatch, {
      onValidateStreet: onValidateStreet
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center w-100 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9 px-0 px-lg-3 mx-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    color: "white",
    className: "mb-4"
  }, t('helpAndContact.contact.subtitle', {
    context: showResult ? 'result' : 'search'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: inputClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CapAddress__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "search-address",
    value: value,
    placeholder: t('edmc.search.search_address'),
    className: "pr-0",
    onChange: onChange,
    onClick: onClick,
    isSearching: isSearching,
    isLoading: isLoading,
    withCapaddress: false,
    disabled: showResult
  })), showResult && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-auto d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
    variant: "text",
    className: "text-white sz-typo-caption md",
    size: "S",
    onClick: reset
  }, t('helpAndContact.contact.button_change')))), showResult && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Result, null), isTownIncluded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InclusionModal, null))));
}
var Result = function Result() {
  var _useGA2 = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    track = _useGA2.track;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ContactPhoneContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    _useContext2$ = _useContext2[0],
    contactDatas = _useContext2$.contactDatas,
    messageError = _useContext2$.messageError;
  var _ref5 = contactDatas || {},
    telCrcJour = _ref5.telCrcJour;
  var horaireCrc = contactDatas ? contactDatas.horaireCrc.toLowerCase() : null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (horaireCrc) {
      track('HELP_CONTACT_4', {
        sz_click_cta_tel_type: _hooks_useGA_tags_helpAndContact__WEBPACK_IMPORTED_MODULE_13__["SZ_TEL_TYPE"].client
      });
    }
  }, []);
  var onClick = function onClick() {
    track('HELP_CONTACT_5', {
      sz_click_cta_tel_type: _hooks_useGA_tags_helpAndContact__WEBPACK_IMPORTED_MODULE_13__["SZ_TEL_TYPE"].client
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contact-result"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9 mx-auto mt-4 mt-lg-5 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrow-line position-relative"
  })), messageError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9 mx-auto mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    color: "white",
    size: "XL"
  }, messageError)), horaireCrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9 mx-auto mt-4 p-0 d-flex flex-column flex-lg-row align-items-center justify-content-between text-center text-md-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    color: "white",
    size: "XL",
    className: "col-11 col-lg-8 p-0 mb-3 mb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: "helpAndContact.contact.text_result",
    values: {
      horaireCrc: horaireCrc
    },
    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-bold"
    })]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhoneButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: onClick,
    descriptionId: "telclient-title",
    name: "contact",
    phone: telCrcJour,
    infoTextColor: "primary-dark"
  })));
};
var InclusionModal = function InclusionModal() {
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ContactPhoneContext),
    _useContext4 = _slicedToArray(_useContext3, 3),
    state = _useContext4[0],
    dispatch = _useContext4[1],
    onValidateStreet = _useContext4[2].onValidateStreet;
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState4 = _slicedToArray(_useState3, 2),
    addressValue = _useState4[0],
    setAddressValue = _useState4[1];
  var infosTown = state.infosTown,
    isShowModal = state.isShowModal,
    isSearchingStreet = state.isSearchingStreet,
    isLoading = state.isLoading;
  var address = {
    locality: infosTown.name,
    localityId: infosTown.inseecode,
    postalCode: infosTown.zipcode
  };
  var onClick = function onClick(infosStreet) {
    var text = infosStreet.text;
    setAddressValue(text);
    dispatch({
      type: 'infosStreet',
      payload: infosStreet
    });
    dispatch({
      type: 'isSearchingStreet',
      payload: false
    });
  };
  var onChange = function onChange(_ref6) {
    var target = _ref6.target;
    if (target.value.length > 2 && !isSearchingStreet) {
      dispatch({
        type: 'isSearchingStreet',
        payload: true
      });
    }
    setAddressValue(target.value);
  };
  var handleCloseModal = function handleCloseModal() {
    dispatch({
      type: 'isLoading',
      payload: false
    });
    dispatch({
      type: 'isShowModal',
      payload: false
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzModal"], {
    show: isShowModal,
    handleClose: handleCloseModal,
    size: 'lg',
    border: "smooth",
    centered: true,
    title: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('inclusion.addressConcerned')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    color: "dark"
  }, t('inclusion.addressMoreInfo')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CapAddress__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "search-inclusion-address",
    value: addressValue,
    onChange: onChange,
    onClick: onClick,
    className: "pr-0",
    label: t('inclusion.address'),
    type: "street",
    address: address,
    isSearching: isSearchingStreet
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: function onClick() {
      return onValidateStreet();
    },
    loader: isLoading
  }, t('validate')))));
};

/***/ }),

/***/ "./assets/js/ez-components/contactPhone/reducer.js":
/*!*********************************************************!*\
  !*** ./assets/js/ez-components/contactPhone/reducer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./assets/js/ez-components/contactPhone/index.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function reducer(state, action) {
  switch (action.type) {
    case 'isShowModal':
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowModal: action.payload
      });
    case 'isLoading':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: action.payload
      });
    case 'messageError':
      return _objectSpread(_objectSpread({}, state), {}, {
        messageError: action.payload
      });
    case 'contactDatas':
      return _objectSpread(_objectSpread({}, state), {}, {
        contactDatas: action.payload
      });
    case 'infosTown':
      return _objectSpread(_objectSpread({}, state), {}, {
        infosTown: action.payload
      });
    case 'infosStreet':
      return _objectSpread(_objectSpread({}, state), {}, {
        infosStreet: action.payload
      });
    case 'isSearching':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearching: action.payload
      });
    case 'isSearchingStreet':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearchingStreet: action.payload
      });
    case 'isTownIncluded':
      return _objectSpread(_objectSpread({}, state), {}, {
        isTownIncluded: action.payload
      });
    case 'reset':
      return _objectSpread({}, ___WEBPACK_IMPORTED_MODULE_0__["initialState"]);
    default:
      throw new Error('Not a reducer');
  }
}

/***/ }),

/***/ "./assets/js/ez-components/faq/cards.jsx":
/*!***********************************************!*\
  !*** ./assets/js/ez-components/faq/cards.jsx ***!
  \***********************************************/
/*! exports provided: CardLevel1, CardLevelN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLevel1", function() { return CardLevel1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLevelN", function() { return CardLevelN; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Box */ "./assets/js/components/Box/index.jsx");
/* harmony import */ var _components_Links_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./assets/js/ez-components/faq/index.jsx");





function CardLevel1(_ref) {
  var picto = _ref.picto,
    slug = _ref.slug,
    label = _ref.label,
    url = _ref.url,
    onClick = _ref.onClick;
  if (url) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      to: url,
      className: "help-card bg-white p-3 rounded-1 shadow-sm text-left d-flex align-items-center cursor-pointer",
      onClick: onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: picto,
      alt: ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      size: "XL",
      weight: "bold",
      className: "ml-2 mb-0"
    }, label));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "help-card bg-white p-3 rounded-1 shadow-sm text-left d-flex align-items-center cursor-pointer",
    role: "button",
    tabIndex: "0",
    to: Object(___WEBPACK_IMPORTED_MODULE_4__["getFaqPath"])(slug),
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: picto,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "XL",
    weight: "bold",
    className: "ml-2 mb-0"
  }, label));
}
function CardLevelN(_ref2) {
  var picto = _ref2.picto,
    label = _ref2.label,
    url = _ref2.url,
    slug = _ref2.slug,
    onClick = _ref2.onClick;
  if (url) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      backgroundColor: "white",
      className: "shadow-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      to: url,
      className: "d-flex align-items-center p-3 p-lg-4 cursor-pointer",
      onClick: onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "help-subicon rounded-circle d-flex align-items-center justify-content-center p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: picto,
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "text-dark ml-3 mb-0 mr-3 mr-sm-0",
      size: "XL"
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
      icon: "arrow-right-1",
      variant: "line",
      className: "question-card-icon ml-auto"
    })));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    backgroundColor: "white",
    className: "shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "d-flex align-items-center p-3 p-lg-4 cursor-pointer",
    role: "button",
    tabIndex: "0",
    to: Object(___WEBPACK_IMPORTED_MODULE_4__["getFaqPath"])(slug),
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "help-subicon rounded-circle d-flex align-items-center justify-content-center p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: picto,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "text-dark ml-3 mb-0 mr-3 mr-sm-0",
    size: "XL"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "arrow-right-1",
    variant: "line",
    className: "question-card-icon ml-auto"
  })));
}

/***/ }),

/***/ "./assets/js/ez-components/faq/help-and-contact.scss":
/*!***********************************************************!*\
  !*** ./assets/js/ez-components/faq/help-and-contact.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/ez-components/faq/index.jsx":
/*!***********************************************!*\
  !*** ./assets/js/ez-components/faq/index.jsx ***!
  \***********************************************/
/*! exports provided: getFaqPath, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFaqPath", function() { return getFaqPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Faq; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cards */ "./assets/js/ez-components/faq/cards.jsx");
/* harmony import */ var _help_and_contact_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./help-and-contact.scss */ "./assets/js/ez-components/faq/help-and-contact.scss");
/* harmony import */ var _help_and_contact_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_help_and_contact_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pages_helpAndContact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/helpAndContact */ "./assets/js/pages/helpAndContact/index.tsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }












var getFaqPath = function getFaqPath(slug) {
  if (slug) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["generatePath"])(_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].HELP_AND_CONTACT_SUB, {
      slug: slug
    });
  }
  return _constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].HELP_AND_CONTACT;
};
function Faq() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_helpAndContact__WEBPACK_IMPORTED_MODULE_11__["HelpAndContactPageContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var items = state.items,
    activeItem = state.activeItem;
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"])(),
    slug = _useParams.slug;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])('FAQ', function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_6__["API"].FAQ);
    }, {
      onSuccess: function onSuccess(_ref) {
        var data = _ref.data;
        window.tsme_data.faq = data === null || data === void 0 ? void 0 : data.content;
        dispatch({
          type: 'items',
          payload: data === null || data === void 0 ? void 0 : data.content
        });
      },
      enabled: items.length === 0
    }),
    isLoading = _useQuery.isLoading;
  if (isLoading) {
    var nbBloc = _toConsumableArray(Array(8));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row pt-3 pt-lg-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
      width: 500,
      height: 30,
      className: "d-block"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
      width: 350,
      height: 30
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "help-and-contact-container d-flex flex-wrap mt-4 mt-lg-6 mb-lg-3"
    }, nbBloc === null || nbBloc === void 0 ? void 0 : nbBloc.map(function (index, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 col-md-4 col-lg-3 mb-2 px-1",
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        width: 301,
        height: 76
      }));
    })));
  }
  if (activeItem.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-white rounded-2 shadow-sm px-lg-5 py-lg-5 mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      variant: "caption",
      color: "danger"
    }, t('errors.techError')));
  }
  return !slug ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FaqLevel1, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FaqLevelN, null);
}
var FaqLevel1 = function FaqLevel1() {
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_helpAndContact__WEBPACK_IMPORTED_MODULE_11__["HelpAndContactPageContext"]),
    state = _useContext2.state,
    extraFn = _useContext2.extraFn;
  var items = state.items;
  var onClickItem = extraFn.onClickItem;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row pt-3 pt-lg-0",
    "data-cy": "faq-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H1",
    size: "XL",
    color: "white",
    className: "text-uppercase",
    weight: "black"
  }, t('helpAndContact.title_level_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold",
    color: "white",
    className: "mb-0"
  }, t('helpAndContact.subtitle')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "help-and-contact-container d-flex flex-wrap mt-4 mt-lg-6 mb-lg-3",
    "data-cy": "faq-cards-container"
  }, items === null || items === void 0 ? void 0 : items.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "faq-card",
      className: "col-12 col-md-4 col-lg-3 mb-2 px-1",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards__WEBPACK_IMPORTED_MODULE_9__["CardLevel1"], _extends({}, item, {
      onClick: function onClick() {
        return onClickItem(item.slug, true);
      }
    })));
  })));
};
var FaqLevelN = function FaqLevelN() {
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation3.t;
  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_helpAndContact__WEBPACK_IMPORTED_MODULE_11__["HelpAndContactPageContext"]),
    state = _useContext3.state,
    extraFn = _useContext3.extraFn;
  var parentItem = state.parentItem,
    activeItem = state.activeItem;
  var onClickItem = extraFn.onClickItem,
    onClickBack = extraFn.onClickBack;
  var label = activeItem.label,
    pictoSubLevel = activeItem.pictoSubLevel;
  var prevItem = parentItem.at(-1) || {};
  var picto = pictoSubLevel !== null && pictoSubLevel !== void 0 ? pictoSubLevel : parentItem.at(0).pictoSubLevel;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row pt-3 pt-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H1",
    size: "XL",
    color: "white",
    className: "text-uppercase",
    weight: "black"
  }, t('helpAndContact.title_level_2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold",
    color: "white",
    className: "mb-0"
  }, label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "help-and-contact-container row mt-4 mt-lg-6"
  }, (activeItem.children || []).map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "faq-card",
      className: "col-12 col-lg-8 mx-auto mb-3",
      key: "levelN".concat(key)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards__WEBPACK_IMPORTED_MODULE_9__["CardLevelN"], _extends({}, item, {
      onClick: function onClick() {
        return item.children.length > 0 ? onClickItem(item.slug) : {};
      },
      picto: picto,
      index: key
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 mx-auto mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "faqBackLink",
    icon: "keyboard-arrow-left",
    alignIcon: "left",
    className: "pl-0 sz-typo-body sm",
    to: getFaqPath(prevItem.slug),
    onClick: onClickBack
  }, t('go_back')))));
};

/***/ }),

/***/ "./assets/js/ez-components/helpBot/help-bot.scss":
/*!*******************************************************!*\
  !*** ./assets/js/ez-components/helpBot/help-bot.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/ez-components/helpBot/index.jsx":
/*!***************************************************!*\
  !*** ./assets/js/ez-components/helpBot/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelpBot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useLivingActorAssistant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLivingActorAssistant */ "./assets/js/hooks/useLivingActorAssistant/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_Bubble__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Bubble */ "./assets/js/components/Bubble/index.jsx");
/* harmony import */ var _components_SpeechBubble__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SpeechBubble */ "./assets/js/components/SpeechBubble/index.jsx");
/* harmony import */ var _help_bot_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help-bot.scss */ "./assets/js/ez-components/helpBot/help-bot.scss");
/* harmony import */ var _help_bot_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_help_bot_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var BackgroundHelpBot = function BackgroundHelpBot() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "background-overflow rounded-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-img-01 rounded-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-img-02 rounded-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "green",
    size: "md",
    className: "bg-bubble-01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "blue-dark",
    size: "sm",
    className: "bg-bubble-02"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "blue-dark",
    size: "lg",
    className: "bg-bubble-03"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "blue-default",
    size: "sm",
    className: "bg-bubble-04"
  }));
};
function HelpBot() {
  var chatbot = window.tsme_data.chatbot;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    track = _useGA.track;
  var _useLivingActorAssist = Object(_hooks_useLivingActorAssistant__WEBPACK_IMPORTED_MODULE_4__["default"])({
      config: _constants__WEBPACK_IMPORTED_MODULE_5__["HELP_BOT"].CONFIG.HELP,
      forceInit: true
    }),
    setValueLA = _useLivingActorAssist.setValueLA;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var KEY_ENTER = 'Enter';
  var handleChange = function handleChange(_ref) {
    var target = _ref.target;
    setValue(target.value);
  };
  var handleKeyUp = function handleKeyUp(event) {
    if (KEY_ENTER === event.key) {
      setValueLA(value);
      setValue('');
      track('HELP_CONTACT_2', {
        sz_search_aide_contact_term: value
      });
    }
  };
  if (!(chatbot !== null && chatbot !== void 0 && chatbot.enabled)) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container py-0 mb-5",
    "data-cy": "faq-helpbot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row position-relative mx-md-0 rounded-3 bg-blue-05"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackgroundHelpBot, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col col-md-5 mx-auto my-6 my-lg-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SpeechBubble__WEBPACK_IMPORTED_MODULE_7__["default"], {
    classNames: "mb-2 mr-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    weight: "medium",
    variant: "H3",
    size: "L",
    color: "light",
    className: "m-0",
    tag: "h2"
  }, t('help_bot.answer_not_found'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SpeechBubble__WEBPACK_IMPORTED_MODULE_7__["default"], {
    direction: "right",
    classNames: "ml-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzInput"], {
    id: "LivingActorInput",
    className: "mt-2",
    variant: "outlined",
    placeholder: t('help_bot.input_placeholder'),
    onChange: handleChange,
    onKeyUp: handleKeyUp,
    value: value,
    maxLength: _constants__WEBPACK_IMPORTED_MODULE_5__["HELP_BOT"].MAX_LENGTH
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    variant: "caption",
    weight: "regular",
    size: "M",
    className: "text-center new-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
    content: t('help_bot.help_text'),
    disableLineBreaks: true
  }))))));
}

/***/ }),

/***/ "./assets/js/pages/helpAndContact/index.tsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/helpAndContact/index.tsx ***!
  \**************************************************/
/*! exports provided: HelpAndContactPageContext, reducer, findItemsById, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpAndContactPageContext", function() { return HelpAndContactPageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findItemsById", function() { return findItemsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelpAndContactPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _app_ez_components_helpBot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ez-components/helpBot */ "./assets/js/ez-components/helpBot/index.jsx");
/* harmony import */ var _app_ez_components_contactPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ez-components/contactPhone */ "./assets/js/ez-components/contactPhone/index.jsx");
/* harmony import */ var _app_ez_components_faq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/ez-components/faq */ "./assets/js/ez-components/faq/index.jsx");
/* harmony import */ var _img_hand_shower_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @img/hand_shower.jpg */ "./assets/img/hand_shower.jpg");
/* harmony import */ var _app_components_background_BackgroundEllipse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/background/BackgroundEllipse */ "./assets/js/components/background/BackgroundEllipse/index.jsx");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var intialValues = {
  state: {
    items: window.tsme_data.faq || [],
    activeItem: {},
    parentItem: []
  },
  dispatch: function dispatch() {},
  extraFn: {}
};
var HelpAndContactPageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(intialValues);
var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'items':
      return Object.assign(Object.assign({}, state), {
        items: action.payload
      });
    case 'activeItem':
      return Object.assign(Object.assign({}, state), {
        activeItem: action.payload
      });
    case 'parentItem':
      return Object.assign(Object.assign({}, state), {
        parentItem: action.payload
      });
    default:
      throw new Error('Not a reducer');
  }
};
function findItemsById() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var id = arguments.length > 1 ? arguments[1] : undefined;
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var parentIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isChildren = parentIndex !== null;
  var defaultValue = {
    activeItem: {},
    parentItem: []
  };
  if (!id) {
    return defaultValue;
  }
  return arr.reduce(function (acc, item, index) {
    if (Object.keys(acc.activeItem).length) {
      return acc;
    }
    // Si c'est un élément de premier niveau, on remet à zéro le tableau parent
    if (index > 0 && !isChildren) {
      parent = [];
    }
    // S'il a des sous éléments, on ajoute le label à la liste parent
    if (item.children.length > 0 && item.id !== id) {
      parent.push(Object.assign({}, item));
    }
    // Si l'élément correspond à l'id, on le retourne
    if (item.id === id) {
      return {
        activeItem: item,
        parentItem: parent
      };
    }
    // Si l'élément a des sous éléments, on rappelle la fonction
    if (item.children.length > 0) {
      var _findItemsById = findItemsById(item.children, id, parent, parentIndex || index),
        activeItem = _findItemsById.activeItem,
        parentItem = _findItemsById.parentItem;
      // Si on a trouvé l'élément, on le retourne
      if (Object.keys(activeItem).length) {
        return {
          activeItem: activeItem,
          parentItem: parentItem
        };
      }
    }
    // Si on est à la fin du tableau et qu'on a des éléments dans le tableau parent, on supprime le dernier élément
    if (arr.length - 1 === index && parent.length > 0) {
      parent.pop();
    }
    return defaultValue;
  }, defaultValue);
}
function HelpAndContactPage() {
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    track = _useGA.track;
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
    slug = _useParams.slug;
  var initialState = intialValues.state;
  var initializeState = function initializeState(initialState) {
    if (slug) {
      var _slug$split = slug.split('-'),
        _slug$split2 = _slicedToArray(_slug$split, 1),
        id = _slug$split2[0];
      var isLoadedByTsmeData = initialState.items.length === 0 && window.tsme_data.faq.length > 0;
      var initialItems = isLoadedByTsmeData ? window.tsme_data.faq : initialState.items;
      var _findItemsById2 = findItemsById(initialItems, id),
        activeItem = _findItemsById2.activeItem,
        parentItem = _findItemsById2.parentItem;
      toTrack([].concat(_toConsumableArray(parentItem), [activeItem]));
      return Object.assign(Object.assign({}, initialState), {
        activeItem: activeItem,
        parentItem: parentItem
      });
    }
    return initialState;
  };
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState, initializeState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var onClickItem = function onClickItem(slug) {
    if (!slug) return;
    var _slug$split3 = slug.split('-'),
      _slug$split4 = _slicedToArray(_slug$split3, 1),
      id = _slug$split4[0];
    var _findItemsById3 = findItemsById(state.items, id),
      activeItem = _findItemsById3.activeItem,
      parentItem = _findItemsById3.parentItem;
    toTrack([].concat(_toConsumableArray(parentItem), [activeItem]));
    if (parentItem.length > 0) {
      dispatch({
        type: 'parentItem',
        payload: parentItem
      });
    }
    dispatch({
      type: 'activeItem',
      payload: activeItem
    });
  };
  function toTrack(arrToTrack) {
    if (arrToTrack.length > 0) {
      var trackingOptions = Object.fromEntries(arrToTrack.map(function (_ref, key) {
        var label = _ref.label;
        return ["sz_display_aide_contact_label".concat(key + 1), label];
      }));
      track('HELP_CONTACT_1', trackingOptions);
    }
  }
  var onClickBack = function onClickBack() {
    var parentItem = _toConsumableArray(state.parentItem);
    var _ref2 = parentItem.pop() || {},
      id = _ref2.id;
    var _findItemsById4 = findItemsById(state.items, id),
      activeItem = _findItemsById4.activeItem;
    if (parentItem.length > 0 || Object.keys(activeItem).length > 0) {
      toTrack([].concat(_toConsumableArray(parentItem), [activeItem]));
    }
    dispatch({
      type: 'activeItem',
      payload: activeItem
    });
    dispatch({
      type: 'parentItem',
      payload: parentItem
    });
  };
  var extraFn = {
    onClickItem: onClickItem,
    onClickBack: onClickBack
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelpAndContactPageContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch,
      extraFn: extraFn
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullscreen: true,
    className: "p-0",
    tag: "main",
    id: "help-and-contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_background_BackgroundEllipse__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ellipseImg: _img_hand_shower_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
    tag: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_faq__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_helpBot__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_contactPhone__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

/***/ })

}]);