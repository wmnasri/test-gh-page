(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./assets/img/intranet/checklist-ok.svg":
/*!**********************************************!*\
  !*** ./assets/img/intranet/checklist-ok.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/checklist-ok.svg");

/***/ }),

/***/ "./assets/img/move-out/edito_background.jpg":
/*!**************************************************!*\
  !*** ./assets/img/move-out/edito_background.jpg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/edito_background.jpg");

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

/***/ "./assets/img/move-out/stepper_background.jpg":
/*!****************************************************!*\
  !*** ./assets/img/move-out/stepper_background.jpg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/stepper_background.jpg");

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

/***/ "./assets/js/components/edito/Edito.jsx":
/*!**********************************************!*\
  !*** ./assets/js/components/edito/Edito.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _Edito_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Edito.scss */ "./assets/js/components/edito/Edito.scss");
/* harmony import */ var _Edito_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Edito_scss__WEBPACK_IMPORTED_MODULE_5__);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var EditoComp = function EditoComp(_ref) {
  var imgEdito = _ref.imgEdito,
    title = _ref.title,
    info = _ref.info,
    infoRef = _ref.infoRef,
    blocRight = _ref.blocRight,
    customService = _ref.customService,
    helper = _ref.helper,
    readMore = _ref.readMore;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "edito"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainTitle, {
    imgEdito: imgEdito
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    weight: "bold",
    className: "title pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], null, title)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row-eq-height row-connection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr-1 bg-primary-light rounded-lg shadow-sm p-4 mb-3"
  }, info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h1",
    weight: "bold"
  }, info.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, info.description)), infoRef && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, infoRef), readMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "readMore"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzHelper"], {
    type: "btn",
    className: "helper-mobile",
    label: t('know_more')
  }, readMore))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, blocRight))), customService && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row block-customer-service pb-4 pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 text-center"
  }, customService))), helper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('container', {
      'mt-5': !customService
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzHelper"], {
    className: "mb-5 col-10 mx-auto",
    label: t('know_more')
  }, helper))));
};
var MainTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  height: 322px;\n  background-image: linear-gradient(\n    270deg,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(255, 255, 255, 0.6) 100%\n  );\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n    background-position: center;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(\n        270deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0.6) 100%\n      ),\n      url(", ");\n  }\n\n  .title {\n    line-height: 1;\n  }\n\n  @media (max-width: 767px) {\n    br {\n      display: none;\n    }\n\n    &::after {\n      display: block;\n      background-size: 200%;\n      background-image: url(", ");\n      position: static;\n      height: 300px;\n    }\n  }\n"])), function (props) {
  return props.imgEdito;
}, function (props) {
  return props.imgEdito;
});
/* harmony default export */ __webpack_exports__["default"] = (EditoComp);

/***/ }),

/***/ "./assets/js/components/edito/Edito.scss":
/*!***********************************************!*\
  !*** ./assets/js/components/edito/Edito.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/models/BillingInfo.js":
/*!*****************************************!*\
  !*** ./assets/js/models/BillingInfo.js ***!
  \*****************************************/
/*! exports provided: BillingInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingInfoModel", function() { return BillingInfoModel; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/yup */ "./assets/js/validation/yup.js");


var fixFMatch = /^(0)\s*([0-5]|9)\s*([0-9]\s*){8}$/;
var mobileMatch = /^(0)\s*(6|7)\s*([0-9]\s*){8}$/;
var regexAlpha = "^[a-z-A-Z0-9À-ÿ , ']*$";
var regexInternationlZipCode = '^[a-z-A-Z0-9]+$';
var regexDate = '^(((0[1-9]|[12][0-9]|30)\/(0[13-9]|1[012])|31\/(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])\/02)\/[0-9]{4}|29\/02\/([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$';
var BillingInfoModel = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email("Le champ e-mail n'est pas valide.").max(70, "Le champ e-mail n'est pas valide.").required('Le champ e-mail doit être rempli.'),
  radioNationality: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
  billing_zip_code: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required().when('radioNationality', {
    is: function is(val) {
      return val === 'radioNationalityFr';
    },
    then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Le champ code postal doit être rempli.').matches(/^\d{5}$/, "Le champ code postal n'est pas valide.").max(10, "Le champ code postal n'est pas valide."),
    otherwise: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Le champ code postal doit être rempli.').matches(regexInternationlZipCode, "Le champ code postal n'est pas valide.").max(10, "Le champ code postal n'est pas valide.")
  }),
  billing_town: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Le champ ville doit être rempli.').matches(regexAlpha, "Le champ ville n'est pas valide.").max(21, "Le champ ville n'est pas valide."),
  billing_country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Le pays doit être rempli.').matches(regexAlpha, "Le pays n'est pas valide.").max(32, "Le pays n'est pas valide."),
  billing_address_1: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Le champ adresse doit être rempli.').matches(regexAlpha, "Le champ adresse n'est pas valide.").max(37, "Le champ adresse n'est pas valide."),
  billing_address_2: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(regexAlpha, "Le champ complément d'adresse n'est pas valide.").max(37, "Le champ complément d'adresse n'est pas valide."),
  civility: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Veuillez sélectionner un genre.').matches(/(M|MME)/, "Le genre sélectionné n'est pas disponible."),
  first_name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(regexAlpha, "Ce champ n'est pas valide.").min(2, 'Le champ prénom doit être rempli.').max(25, 'Trop Long !').required('Le champ prénom doit être rempli.'),
  last_name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(regexAlpha, "Ce champ n'est pas valide.").min(2, 'Le champ nom doit être rempli.').max(70, 'Trop Long !').required('Le champ nom doit être rempli.'),
  birthday_date: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(regexDate, "La date doit respecter ce format : 'jj/mm/aaaa'."),
  city_holder: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(regexAlpha, "Ce champ n'est pas valide.").max(70, 'Trop Long !'),
  mobile: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(mobileMatch, "Le numéro de téléphone n'est pas valide"),
  fix_mobile: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(fixFMatch, "Le numéro de téléphone n'est pas valide")
});

/***/ }),

/***/ "./assets/js/models/ContractSelection.js":
/*!***********************************************!*\
  !*** ./assets/js/models/ContractSelection.js ***!
  \***********************************************/
/*! exports provided: ContractSelectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractSelectionModel", function() { return ContractSelectionModel; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _components_tsme_react_components_models_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tsme-react-components/models/validators */ "./assets/js/components/tsme-react-components/models/validators.tsx");



var ContractSelectionModel = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  'full-ref': yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Veuillez saisir un contrat')
});

/***/ }),

/***/ "./assets/js/pages/move-out/Authentication/CEL.jsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/move-out/Authentication/CEL.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CEL; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _form_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form/Login */ "./assets/js/form/Login/index.jsx");
/* harmony import */ var _ReferenceDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReferenceDisplay */ "./assets/js/pages/move-out/Authentication/ReferenceDisplay.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card */ "./assets/js/pages/move-out/Authentication/Card.jsx");






function CEL() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReferenceDisplay__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "my-4 py-2"
  }, t('authenticate.login.content'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8 border rounded p-0 px-md-5 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mx-1 px-3 px-lg-5",
    title: t('editoMoveOut.loginForm.titleHasAccount'),
    info: t('editoMoveOut.loginForm.info'),
    submitText: t('editoMoveOut.loginForm.submitText'),
    targetPath: "/resilier/resiliation?connected"
  })))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Authentication/Card.jsx":
/*!**********************************************************!*\
  !*** ./assets/js/pages/move-out/Authentication/Card.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");



function Card(_ref) {
  var children = _ref.children;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    direction: "top",
    color: "primary-brand",
    className: "mt-5 mb-3 bg-white",
    title: t('authenticate.title')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-3 px-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('authenticate.description')), children));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Authentication/Collapse.jsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/move-out/Authentication/Collapse.jsx ***!
  \**************************************************************/
/*! exports provided: EmailCollapse, CellPhoneCollapse, PhoneCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailCollapse", function() { return EmailCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellPhoneCollapse", function() { return CellPhoneCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneCollapse", function() { return PhoneCollapse; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function EmailCollapse(_ref) {
  var _formik$values$email;
  var onClickAccordion = _ref.onClickAccordion,
    email = _ref.email,
    activeKey = _ref.activeKey;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var eventKey = '0';
  var onChange = function onChange(e) {
    setValue(e.target.value);
    formik.handleChange(e);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    formik.setFieldValue('email', undefined);
  }, [activeKey]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAccordion"].SzCollapse, {
    eventKey: eventKey,
    onClick: onClickAccordion,
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "m-0 d-none d-lg-block"
    }, t('authenticate.credentials.email.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "m-0 d-block d-lg-none"
    }, t('authenticate.credentials.email.title_short'))),
    body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row no-gutters p-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('authenticate.credentials.email.body')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      weight: "medium",
      className: "d-lg-none mb-4"
    }, email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      label: t('authenticate.credentials.email.field.label'),
      placeholder: t('authenticate.credentials.email.field.placeholder'),
      name: "email",
      value: formik.values.email,
      onChange: onChange,
      onBlur: formik.handleBlur
    }), ((_formik$values$email = formik.values.email) === null || _formik$values$email === void 0 ? void 0 : _formik$values$email.length) > 0 && formik.errors.email && formik.touched.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-7 d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      weight: "medium",
      className: "d-none d-lg-block ml-3 mt-4 pt-2"
    }, email)))
  });
}
function CellPhoneCollapse(_ref2) {
  var _formik$values$cellPh;
  var onClickAccordion = _ref2.onClickAccordion,
    cellphone = _ref2.cellphone,
    activeKey = _ref2.activeKey;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var eventKey = '1';
  var onChange = function onChange(e) {
    setValue(e.target.value);
    formik.handleChange(e);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    formik.setFieldValue('cellPhone', undefined);
  }, [activeKey]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAccordion"].SzCollapse, {
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "m-0 d-none d-lg-block"
    }, t('authenticate.credentials.cellPhone.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "m-0 d-block d-lg-none"
    }, t('authenticate.credentials.cellPhone.title_short'))),
    body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row no-gutters p-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('authenticate.credentials.cellPhone.body')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      weight: "medium",
      className: "d-lg-none mb-4"
    }, cellphone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      label: t('authenticate.credentials.cellPhone.field.label'),
      placeholder: t('authenticate.credentials.cellPhone.field.placeholder'),
      name: "cellPhone",
      value: formik.values.cellPhone,
      onChange: onChange,
      onBlur: formik.handleBlur
    }), ((_formik$values$cellPh = formik.values.cellPhone) === null || _formik$values$cellPh === void 0 ? void 0 : _formik$values$cellPh.length) > 0 && formik.errors.cellPhone && formik.touched.cellPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.cellPhone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-7 d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      weight: "medium",
      className: "d-none d-lg-block ml-3 mt-4 pt-2"
    }, cellphone))),
    eventKey: "1",
    onClick: onClickAccordion
  });
}
function PhoneCollapse(_ref3) {
  var _formik$values$phone;
  var onClickAccordion = _ref3.onClickAccordion,
    phone = _ref3.phone,
    activeKey = _ref3.activeKey;
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation3.t;
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState6 = _slicedToArray(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];
  var eventKey = '2';
  var onChange = function onChange(e) {
    setValue(e.target.value);
    formik.handleChange(e);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    formik.setFieldValue('phone', undefined);
  }, [activeKey]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAccordion"].SzCollapse, {
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "m-0 d-none d-lg-block"
    }, t('authenticate.credentials.phone.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "m-0 d-block d-lg-none"
    }, t('authenticate.credentials.phone.title_short'))),
    body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row no-gutters p-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('authenticate.credentials.phone.body')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      weight: "medium",
      className: "d-lg-none mb-4"
    }, phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      label: t('authenticate.credentials.phone.field.label'),
      placeholder: t('authenticate.credentials.phone.field.placeholder'),
      name: "phone",
      value: formik.values.phone,
      onChange: onChange,
      onBlur: formik.handleBlur
    }), ((_formik$values$phone = formik.values.phone) === null || _formik$values$phone === void 0 ? void 0 : _formik$values$phone.length) > 0 && formik.errors.phone && formik.touched.phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-7 d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      weight: "medium",
      className: "d-none d-lg-block ml-3 mt-4 pt-2"
    }, phone))),
    eventKey: "2",
    onClick: onClickAccordion
  });
}

/***/ }),

/***/ "./assets/js/pages/move-out/Authentication/CredentialsAccordion.jsx":
/*!**************************************************************************!*\
  !*** ./assets/js/pages/move-out/Authentication/CredentialsAccordion.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CredentialsAccordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Collapse */ "./assets/js/pages/move-out/Authentication/Collapse.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function CredentialsAccordion() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_2__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    initParcoursState = _initParcours[0];
  var _initParcoursState$co = initParcoursState.context.coordinates,
    cellphone = _initParcoursState$co.cellphone,
    phone = _initParcoursState$co.phone,
    email = _initParcoursState$co.email;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(email ? '0' : cellphone ? '1' : '2'),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var onClickAccordion = function onClickAccordion(active) {
    setActiveKey(function (prev) {
      return prev === active ? null : active;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAccordion"], {
    variant: "details",
    activeKey: activeKey
  }, email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Collapse__WEBPACK_IMPORTED_MODULE_3__["EmailCollapse"], {
    onClickAccordion: onClickAccordion,
    email: email,
    activeKey: activeKey
  }), cellphone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Collapse__WEBPACK_IMPORTED_MODULE_3__["CellPhoneCollapse"], {
    onClickAccordion: onClickAccordion,
    cellphone: cellphone,
    activeKey: activeKey
  }), phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Collapse__WEBPACK_IMPORTED_MODULE_3__["PhoneCollapse"], {
    onClickAccordion: onClickAccordion,
    phone: phone,
    activeKey: activeKey
  }))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Authentication/CredentialsForm.jsx":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/move-out/Authentication/CredentialsForm.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CredentialsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _CredentialsAccordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CredentialsAccordion */ "./assets/js/pages/move-out/Authentication/CredentialsAccordion.jsx");
/* harmony import */ var _ReferenceDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReferenceDisplay */ "./assets/js/pages/move-out/Authentication/ReferenceDisplay.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card */ "./assets/js/pages/move-out/Authentication/Card.jsx");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model */ "./assets/js/pages/move-out/model.js");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
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

// import { useEffect } from 'react';











function CredentialsForm() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_6__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    initParcoursState = _initParcours[0],
    send = _initParcours[1];
  var reference = initParcoursState.context.reference;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    formError = _useState2[0],
    setFormError = _useState2[1];
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_11__["default"])(),
    track = _useGA.track;

  // useEffect(() => {
  //   track('MOVEOUT_39');
  // }, []);

  var AuthenticateQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(function (data) {
    var cleanData = _objectSpread({}, data);
    if (data.cellPhone) {
      cleanData.cellPhone = data.cellPhone.replaceAll(/\s|\.|-/gi, '');
    }
    if (data.phone) {
      cleanData.phone = data.phone.replaceAll(/\s|\.|-/gi, '');
    }
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_5__["default"].post('/move-out/authenticate-by-reference', _objectSpread(_objectSpread({}, cleanData), {}, {
      fullReference: reference
    }));
  }, {
    onSuccess: function onSuccess(response) {
      var message = response.data.message;
      if (message === 'contract.already-exists') {
        send('KO_CEL');
        // track('MOVEOUT_42');
      } else {
        // track('MOVEOUT_40');
        send('AUTH_SUCCESS');
      }
    },
    onError: function onError(error) {
      var message = error.response.data.message;
      if (message.includes('mismatch')) {
        // track('MOVEOUT_41');
        setFormError(message.split('.')[0]);
      }
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {},
    onSubmit: AuthenticateQuery.mutate,
    validationSchema: _model__WEBPACK_IMPORTED_MODULE_10__["credentialsSchema"],
    isInitialValid: false
  }, function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      "data-cy": "moveout-auth-credentials",
      onSubmit: props.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container py-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReferenceDisplay__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CredentialsAccordion__WEBPACK_IMPORTED_MODULE_7__["default"], null), formError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, t('authenticate.credentials.mismatch', {
      context: formError
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "contained",
      type: "submit",
      loader: AuthenticateQuery.isLoading,
      isDisabled: !props.isValid
    }, t('authenticate.continueButton')))));
  });
}

/***/ }),

/***/ "./assets/js/pages/move-out/Authentication/NotEligible.jsx":
/*!*****************************************************************!*\
  !*** ./assets/js/pages/move-out/Authentication/NotEligible.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotEligible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ReferenceDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReferenceDisplay */ "./assets/js/pages/move-out/Authentication/ReferenceDisplay.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./assets/js/pages/move-out/Authentication/Card.jsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");







function NotEligible() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReferenceDisplay__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "my-4"
  }, t('authenticate.error.content')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    to: _constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].CUSTOMER_SERVICE,
    variant: "contained",
    icon: "messages-bubble-question"
  }, t('authenticate.error.button'))))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Authentication/ReferenceDisplay.jsx":
/*!**********************************************************************!*\
  !*** ./assets/js/pages/move-out/Authentication/ReferenceDisplay.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReferenceDisplay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ReferenceDisplay() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_3__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    initParcoursState = _initParcours[0],
    send = _initParcours[1];
  var reference = initParcoursState.context.reference;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-5 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    className: "p-3",
    style: {
      background: 'var(--gray-100)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "business-contract-handshake-sign",
    variant: "line",
    className: "text-inactive d-none d-sm-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-inline-block mr-sm-auto ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('authenticate.reference.label')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, reference)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    icon: "pencil-write",
    variant: "text",
    onClick: function onClick() {
      return send('UPDATE_REF');
    }
  })))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Authentication/SetReference.jsx":
/*!******************************************************************!*\
  !*** ./assets/js/pages/move-out/Authentication/SetReference.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetReference; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model */ "./assets/js/pages/move-out/model.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card */ "./assets/js/pages/move-out/Authentication/Card.jsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/Utils */ "./assets/js/services/Utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import { useEffect } from 'react';











var recaptchaRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
function SetReference() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_8__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    initParcoursState = _initParcours[0],
    send = _initParcours[1];
  var reference = initParcoursState.context.reference;
  var _window$tsme_data = window.tsme_data,
    recaptchaInvisiblePublicKey = _window$tsme_data.recaptchaInvisiblePublicKey,
    recaptchaEnabled = _window$tsme_data.recaptchaEnabled;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_10__["default"])(),
    track = _useGA.track;

  // useEffect(() => {
  //   track('MOVEOUT_36');
  // }, []);

  var CheckReferenceQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(function (_ref) {
    var params = _ref.params;
    return Object(_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__["default"])("/move-out/check-reference?".concat(params));
  }, {
    onSuccess: function onSuccess(response, _ref2) {
      var reference = _ref2.reference;
      var message = response.data.message;
      if (message === 'KO_INFOS') {
        send({
          type: 'CHECK_REF_FAIL',
          reference: reference
        });
      } else {
        // track('MOVEOUT_37');
        var coordinates = response.data.coordinates;
        send({
          type: 'SET_REF_SUCCESS',
          reference: reference,
          coordinates: coordinates
        });
      }
    },
    onError: function onError(error) {
      var _error$response;
      if ((error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 400) {
        var _error$response$data;
        var errMessage = error === null || error === void 0 ? void 0 : (_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message;
        setErrorMessage(errMessage);
        // track('MOVEOUT_38');
      }
    }
  });

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    validationSchema: _model__WEBPACK_IMPORTED_MODULE_7__["setRefSchema"],
    isInitialValid: !!reference,
    initialValues: {
      reference: reference
    },
    onSubmit: function onSubmit(_ref3) {
      var reference = _ref3.reference;
      reference = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_11__["cleanText"])(reference);
      var data = {
        'full-ref': reference
      };
      if (recaptchaEnabled) {
        data['g-recaptcha-response'] = recaptchaRef.current.getValue();
      }
      var searchParams = new URLSearchParams(data);
      var params = searchParams.toString();
      CheckReferenceQuery.mutate({
        reference: reference,
        params: params
      });
    }
  });
  var displayError = formik.values.reference && formik.errors.reference && formik.touched.reference;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    errorMessage = _useState2[0],
    setErrorMessage = _useState2[1];
  var onClickSubmit = function onClickSubmit(e) {
    if (recaptchaEnabled) {
      e.preventDefault();
      recaptchaRef.current.execute();
    }
  };
  var onChange = function onChange() {
    formik.submitForm();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    "data-cy": "moveout-auth-refclient",
    className: "row",
    onSubmit: formik.handleSubmit
  }, recaptchaEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: recaptchaRef,
    size: "invisible",
    sitekey: recaptchaInvisiblePublicKey,
    onChange: onChange,
    badge: "bottomleft"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9 col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('authenticate.reference.label'),
    placeholder: t('authenticate.reference.placeholder'),
    name: "reference",
    value: formik.values.reference,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), displayError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.reference), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cy-message-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    variant: "danger"
  }, errorMessage))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-3 col-md-3 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    className: "mt-4 d-none d-md-flex",
    onClick: onClickSubmit,
    type: "submit",
    isDisabled: !formik.isValid,
    loader: CheckReferenceQuery.isLoading
  }, t('validateButton')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    className: "mt-4 d-flex d-md-none p-0",
    onClick: onClickSubmit,
    type: "submit",
    icon: "check-1",
    isDisabled: !formik.isValid,
    loader: CheckReferenceQuery.isLoading
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzHelper"], {
    title: t('authenticate.helper.title'),
    className: "mx-md-5",
    label: t('know_more')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('authenticate.helper.content'))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Authentication/index.jsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/move-out/Authentication/index.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _CredentialsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CredentialsForm */ "./assets/js/pages/move-out/Authentication/CredentialsForm.jsx");
/* harmony import */ var _SetReference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SetReference */ "./assets/js/pages/move-out/Authentication/SetReference.jsx");
/* harmony import */ var _CEL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CEL */ "./assets/js/pages/move-out/Authentication/CEL.jsx");
/* harmony import */ var _NotEligible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotEligible */ "./assets/js/pages/move-out/Authentication/NotEligible.jsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function AuthCard() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_1__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    initParcoursState = _initParcours[0];
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (initParcoursState.matches('authentication.setReferenceForm')) {
      track('MOVEOUT_1', {
        sz_funnel_step: '1',
        sz_funnel_variant: 'reference'
      });
    }
  }, []);
  switch (true) {
    case initParcoursState.matches('authentication.setReferenceForm'):
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SetReference__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    case initParcoursState.matches('authentication.credentials'):
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CredentialsForm__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    case initParcoursState.matches('authentication.connection'):
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CEL__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    case initParcoursState.matches('authentication.notEligible'):
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotEligible__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    default:
      return null;
  }
}

/***/ }),

/***/ "./assets/js/pages/move-out/ContractSelection.jsx":
/*!********************************************************!*\
  !*** ./assets/js/pages/move-out/ContractSelection.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContractSelection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/tsme-react-components */ "./assets/js/components/tsme-react-components/index.tsx");
/* harmony import */ var _ContractSelection_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContractSelection.scss */ "./assets/js/pages/move-out/ContractSelection.scss");
/* harmony import */ var _ContractSelection_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ContractSelection_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_models_ContractSelection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/models/ContractSelection */ "./assets/js/models/ContractSelection.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_hooks_useGA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _machine__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./machine */ "./assets/js/pages/move-out/machine.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function ContractSelection() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_10__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    errorMessage = _useState2[0],
    setErrorMessage = _useState2[1];
  var _initParcours = _slicedToArray(initParcours, 2),
    send = _initParcours[1];
  var _useGA = Object(_app_hooks_useGA__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    track = _useGA.track;
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useLocation"])();
  var params = new URLSearchParams(location.search);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //   const connected = params.has('connected');
    track('MOVEOUT_1', {
      sz_funnel_step: '1',
      sz_funnel_variant: 'compte'
    });
  }, []);
  var getData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$axios$get, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].get('/user/contracts');
          case 2:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getData() {
      return _ref.apply(this, arguments);
    };
  }();
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])('getContracts', getData, {
      initialData: {
        contracts: []
      },
      refetchOnWindowFocus: false,
      retry: 2,
      onError: function onError() {}
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading;
  var submitSelectContract = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(function (data) {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].post('/move-out/select-contract', data);
  }, {
    onSuccess: function onSuccess(response, params) {
      var data = response.data;
      if (Object.keys(_machine__WEBPACK_IMPORTED_MODULE_13__["keysEligibility"]).includes(data.message)) {
        // if (['OK', 'FETCH_SUCCESS'].includes(data.message)) {
        //   track('MOVEOUT_7');
        // } else {
        //   const KO = ['KO_ELIGIBILITE', 'KO_ELIGIBILITE_API', 'KO_72H'];

        //   if (data.message === 'KO_RESILIATION') {
        //     track('MOVEOUT_8', keysEligibility[data.message]);
        //   }
        //   if (KO.includes(data.message)) {
        //     track('MOVEOUT_9', keysEligibility[data.message]);
        //   }
        //   if (data.message === CODES.OK_NON_AUTO) {
        //     track('MOVEOUT_10', keysEligibility[data.message]);
        //   }
        // }
        send({
          type: data.message,
          reference: params['full-ref']
        });
      } else {
        send({
          type: 'KO_ELIGIBILITE',
          reference: params['full-ref']
        });
      }
    },
    onError: function onError(error) {
      if (error.response.status === 400) {
        var _error$response$data;
        var errMessage = error === null || error === void 0 ? void 0 : (_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.response.errorMessage;
        setErrorMessage(errMessage);
      }
    }
  });
  var contractList = data.contracts;
  var initDataForm = contractList && contractList.length === 1 ? {
    'full-ref': contractList[0].reference
  } : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container px-0 px-lg-5 pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
    enableReinitialize: true,
    initialValues: initDataForm,
    onSubmit: submitSelectContract.mutate,
    validationSchema: _app_models_ContractSelection__WEBPACK_IMPORTED_MODULE_9__["ContractSelectionModel"],
    isInitialValid: contractList && contractList.length === 1 && contractList[0].situation_code === true
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      setFieldValue = _ref2.setFieldValue,
      isValid = _ref2.isValid,
      values = _ref2.values;
    var onChangeSelect = function onChangeSelect(_ref3) {
      var target = _ref3.target;
      setFieldValue('full-ref', target.id);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
      direction: "top",
      title: "S\xE9lection du contrat \xE0 r\xE9silier",
      color: "primary-brand",
      className: "mx-1 bg-white"
    }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      height: 76,
      count: 3,
      className: "my-2"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "px-0 px-md-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "cy-title-select-contract mt-3 mx-md-4 mx-lg-5 ",
      variant: "body",
      weight: "medium"
    }, contractList.length === 1 ? t('contractSelection.titleOneContract') : t('contractSelection.titleContracts')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'scroll-container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cy-actif-contract mx-md-4 mx-lg-5 "
    }, contractList && contractList.filter(function (_ref4) {
      var situation_code = _ref4.situation_code;
      return situation_code;
    }).map(function (contract) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_2__["RadioData"], {
        className: 'over-radio-data mt-3',
        name: "full-ref",
        id: contract.reference,
        key: contract.reference,
        reference: contract.reference.substring(0, 2) + '-' + contract.reference.substring(2),
        address: contract.addr_served ? contract.addr_served : '-',
        isTerminate: !contract.situation_code,
        checked: contract.reference === values['full-ref'],
        onChange: onChangeSelect
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cy-no-actif-contract mx-md-4 mx-lg-5 mt-5"
    }, contractList && contractList.filter(function (_ref5) {
      var situation_code = _ref5.situation_code;
      return !situation_code;
    }).map(function (contract) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_2__["DataRow"], {
        key: contract.reference,
        className: "mt-3",
        reference: contract.reference.substring(0, 2) + '-' + contract.reference.substring(2),
        address: contract.addr_served ? contract.addr_served : '-',
        isTerminate: !contract.situation_code
      });
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex flex-column align-items-center pt-3"
    }, errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cy-message-error"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
      variant: "danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_14__["Markup"], {
      content: errorMessage,
      noWrap: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      className: "cy-btn-select-contract",
      isDisabled: !isValid,
      type: "submit",
      variant: "contained",
      loader: submitSelectContract.isLoading
    }, t('contractSelection.validateButton'))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cy-info-select-contract d-flex justify-content-center pt-4 px-1 px-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzHelper"], {
    title: t('contractSelection.titleInfoHelper'),
    label: t('know_more')
  }, t('contractSelection.infoHelper'))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/ContractSelection.scss":
/*!*********************************************************!*\
  !*** ./assets/js/pages/move-out/ContractSelection.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/move-out/Edito/index.jsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/move-out/Edito/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edito; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _form_Login_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../form/Login/index */ "./assets/js/form/Login/index.jsx");
/* harmony import */ var _img_intranet_checklist_ok_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../img/intranet/checklist-ok.svg */ "./assets/img/intranet/checklist-ok.svg");
/* harmony import */ var _components_edito_Edito__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/edito/Edito */ "./assets/js/components/edito/Edito.jsx");
/* harmony import */ var _img_move_out_edito_background_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../img/move-out/edito_background.jpg */ "./assets/img/move-out/edito_background.jpg");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");











function Edito() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    track = _useGA.track;
  var _window$tsme_data = window.tsme_data,
    isConnected = _window$tsme_data.isConnected,
    isIntranet = _window$tsme_data.isIntranet;
  var toTrack = isConnected ? 'MOVEOUT_4' : 'MOVEOUT_1';
  var info = {
    title: t('editoMoveOut.info.title'),
    description: t('editoMoveOut.info.description')
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track(toTrack);
  }, []);
  var infoRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "check-circle-1",
    className: "p-4 bg-gray-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, t('editoMoveOut.info.reference.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    variant: "text",
    weight: "light",
    color: "placeholder"
  }, t('editoMoveOut.info.reference.text'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "check-circle-1",
    className: "p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, t('editoMoveOut.info.resiliationDate.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    variant: "text",
    weight: "light",
    color: "placeholder"
  }, t('editoMoveOut.info.resiliationDate.text'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "check-circle-1",
    className: "p-4 bg-gray-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, t('editoMoveOut.info.index.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    variant: "text",
    weight: "light",
    color: "placeholder"
  }, t('editoMoveOut.info.index.text'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "check-circle-1",
    className: "p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, t('editoMoveOut.info.photo.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    variant: "text",
    weight: "light",
    color: "placeholder"
  }, t('editoMoveOut.info.photo.text'))));
  var connectedUser = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-1 bg-primary-light rounded-lg shadow-sm p-4 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h1",
    weight: "bold",
    className: "text-center mb-3"
  }, t('editoMoveOut.connected.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    isDisabled: isIntranet,
    to: _constants__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].UNSUBSCRIBE
  }, t('editoMoveOut.connected.button'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-md-block text-center mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_intranet_checklist_ok_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "",
    className: "img-checklist"
  })));
  var onClickResilier = function onClickResilier() {
    history.push('/resilier/resiliation');
    // track('MOVEOUT_5', () => {
    // });
  };

  var loginForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-1 bg-primary-light rounded-lg shadow-sm p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "h1",
    weight: "bold",
    className: "text-center"
  }, t('editoMoveOut.auth.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Login_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "block-login rounded-lg p-4 m-3 pb-5 border-small",
    title: t('editoMoveOut.loginForm.title'),
    info: t('editoMoveOut.loginForm.info'),
    submitText: t('editoMoveOut.loginForm.submitText'),
    targetPath: "/resilier/resiliation?connected"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-lg p-4 m-3 border-small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "bold",
    className: "text-center"
  }, t('editoMoveOut.auth.block.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('editoMoveOut.auth.block.content')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    onClick: onClickResilier,
    variant: "outlined"
  }, t('editoMoveOut.auth.block.submit')))));
  var onClickServiceClient = function onClickServiceClient(e) {
    e.preventDefault();
    var href = e.target.href;
    window.location.assign(href);
    // track('MOVEOUT_2', () => {
    // });
  };

  var link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: onClickServiceClient,
    href: "/service-client"
  }, t('editoMoveOut.auth.customerServiceLink'));
  var customService = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "m-0"
  }, t('editoMoveOut.auth.customerServiceStart'), link, t('editoMoveOut.auth.customerServiceEnd'));
  var helper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "large",
    weight: "bold",
    align: "center"
  }, t('editoMoveOut.helper.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "bold"
  }, t('editoMoveOut.helper.blackNumbers.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    t: t
  }, "editoMoveOut.helper.blackNumbers.content")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "bold"
  }, t('editoMoveOut.helper.photo.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    t: t
  }, "editoMoveOut.helper.photo.content")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_edito_Edito__WEBPACK_IMPORTED_MODULE_6__["default"], {
    imgEdito: _img_move_out_edito_background_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
    title: t('editoMoveOut.title'),
    info: info,
    infoRef: infoRef,
    blocRight: isConnected ? connectedUser : loginForm,
    customService: customService,
    helper: helper
  });
}

/***/ }),

/***/ "./assets/js/pages/move-out/Error.jsx":
/*!********************************************!*\
  !*** ./assets/js/pages/move-out/Error.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _img_move_out_process_error_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/move-out/process-error.svg */ "./assets/img/move-out/process-error.svg");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Error() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_2__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    value = _initParcours[0].value;
  var isMoveOut = value === 'contractNotSelectionable';
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showLoaderContact = _useState2[0],
    setshowLoaderContact = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showLoaderQuit = _useState4[0],
    setshowLoaderQuit = _useState4[1];
  var returnBtnMessage = isMoveOut ? t('contractError.back_dashboard') : t('contractError.exitBtn');
  var isMoveOutClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('col-8', {
    'mx-auto': isMoveOut
  });
  var onClickContact = function onClickContact() {
    setshowLoaderContact(true);
  };
  var onClickQuit = function onClickQuit() {
    setshowLoaderQuit(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cy-error-page container py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "bg-white mt-5 mb-3 px-5 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: isMoveOutClassnames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge"
  }, t('contractError.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('contractError.content', {
    context: value
  })), !isMoveOut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('contractError.complementary', {
    context: value
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('contractError.thanks')), !isMoveOut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    to: _constants__WEBPACK_IMPORTED_MODULE_5__["CUSTOMER_SERVICE_URL"],
    variant: "contained",
    onClick: onClickContact,
    loader: showLoaderContact
  }, t('contractError.contactBtn')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    to: _constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].HOME,
    variant: isMoveOut ? 'contained' : 'text',
    onClick: onClickQuit,
    loader: showLoaderQuit
  }, returnBtnMessage)), !isMoveOut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_move_out_process_error_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "process error"
  })))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/IdentityBlock.jsx":
/*!****************************************************!*\
  !*** ./assets/js/pages/move-out/IdentityBlock.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdentityBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function IdentityBlock() {
  var _initParcoursState$co3;
  var isDesktop = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_2__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    initParcoursState = _initParcours[0];
  var _initParcoursState$co = initParcoursState.context,
    contractData = _initParcoursState$co.contractData,
    summary = _initParcoursState$co.summary;
  var _initParcoursState$co2 = (_initParcoursState$co3 = initParcoursState.context) === null || _initParcoursState$co3 === void 0 ? void 0 : _initParcoursState$co3.contractData,
    addressSite1 = _initParcoursState$co2.addressSite1,
    addressSite2 = _initParcoursState$co2.addressSite2,
    addressSite3 = _initParcoursState$co2.addressSite3,
    cpSite = _initParcoursState$co2.cpSite,
    villeSite = _initParcoursState$co2.villeSite,
    identite = _initParcoursState$co2.identite,
    fullReference = _initParcoursState$co2.fullReference;
  var address1 = addressSite1 || '';
  var address2 = addressSite2 || '';
  var address3 = addressSite3 || '';
  var adress = address1;
  if (address2) {
    adress = "".concat(address1, " ").concat(address2);
  }
  if (address3) {
    adress = "".concat(address1, " ").concat(address2, " ").concat(address3);
  }
  if (isDesktop && adress.length > 75) {
    adress = "".concat(Object(_services_Utils__WEBPACK_IMPORTED_MODULE_3__["stringTruncate"])(adress, 77, ' ...'), " ");
  } else if (isDesktop && adress.length > 27) {
    adress = "".concat(Object(_services_Utils__WEBPACK_IMPORTED_MODULE_3__["stringTruncate"])(adress, adress.length, ' ...'), " ");
  } else if (adress.length > 27) {
    adress = "".concat(Object(_services_Utils__WEBPACK_IMPORTED_MODULE_3__["stringTruncate"])(adress, 29, ' ...'), " ");
  }
  var cpVille = cpSite + ' ' + villeSite;
  var formattedRef = '';
  if (fullReference !== undefined) {
    formattedRef = fullReference.substring(0, 2) + '-' + fullReference.substring(2);
  }
  var showSkeleton = Object.keys(summary).length === 0 || Object.keys(contractData).length === 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    className: "bg-white my-4 px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, showSkeleton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    height: 24
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    className: "col-12 col-md-5",
    icon: "pin-location-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    className: "cy-identity-address-title"
  }, t('IdentityBlock.address')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, {
    className: "cy-identity-address-value"
  }, adress, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), cpVille)), showSkeleton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "offset-1 col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    height: 24
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-md-block offset-1 col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "single-neutral-id-card-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    className: "cy-identity-owner-title"
  }, t('IdentityBlock.owner')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, {
    className: "cy-identity-owner-value"
  }, identite))), showSkeleton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    height: 24
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-md-block col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "business-contract-handshake-sign"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    className: "cy-identity-ref-title"
  }, t('IdentityBlock.reference')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, {
    className: "cy-identity-ref-value"
  }, formattedRef)))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/MoveOutContext.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/pages/move-out/MoveOutContext.jsx ***!
  \*****************************************************/
/*! exports provided: MoveOutContext, MoveOutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveOutContext", function() { return MoveOutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveOutProvider", function() { return MoveOutProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {};
var MoveOutContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialState);
function MoveOutProvider(_ref) {
  var children = _ref.children,
    initParcours = _ref.initParcours;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoveOutContext.Provider, {
    value: {
      initParcours: initParcours
    }
  }, children);
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/BillingInfo/Address.jsx":
/*!******************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/BillingInfo/Address.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Address; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_tsme_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/tsme-react-components */ "./assets/js/components/tsme-react-components/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_serviceClient_CapAdress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/serviceClient/CapAdress */ "./assets/js/components/serviceClient/CapAdress.jsx");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var tsme_data = window.tsme_data;
var apiUrlCapadresse = tsme_data.apiUrlCapadresse;
function Address() {
  var _formik$values$radioN, _formik$values$billin, _formik$values$billin2, _formik$values$billin3, _formik$values$billin4, _formik$values$billin5, _formik$values$billin6, _formik$values$billin7;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormikContext"])();
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_8__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    context = _initParcours[0].context;
  var summary = context === null || context === void 0 ? void 0 : context.summary;
  var nationalitySummary = {
    label: summary === null || summary === void 0 ? void 0 : summary.billingCountry,
    value: summary === null || summary === void 0 ? void 0 : summary.billingCountry
  };
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((summary === null || summary === void 0 ? void 0 : summary.billingCountry) && (summary === null || summary === void 0 ? void 0 : summary.billingCountry) !== 'FRA' && nationalitySummary),
    _useState2 = _slicedToArray(_useState, 2),
    nationalityValue = _useState2[0],
    setNationalityValue = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((summary === null || summary === void 0 ? void 0 : summary.isBillingAddressForeign) === true ? 'radioNationalityOther' : 'radioNationalityFr'),
    _useState4 = _slicedToArray(_useState3, 2),
    radioNationality = _useState4[0],
    setRadioNationality = _useState4[1];
  var onChange = function onChange(e) {
    var target = e.target;
    formik.setFieldValue('radioNationality', target.id);
    initAddress();
  };
  var getCountries = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$axios$get, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_5__["default"].get("/getCountries");
          case 2:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getCountries() {
      return _ref.apply(this, arguments);
    };
  }();
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_6__["useQuery"])('getCountries', getCountries, {
      initialData: [],
      refetchOnWindowFocus: false,
      retry: 2,
      onError: function onError() {}
    }),
    dataCountries = _useQuery.data,
    isLoading = _useQuery.isLoading;
  var nationalitiesOptions = Array.from(dataCountries).filter(function (country) {
    return country['fr'] != 'France';
  }).map(function (country) {
    if (country['fr']) {
      return {
        label: country['fr'],
        value: country['fr']
      };
    }
  });
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedAddress = _useState6[0],
    setSelectedAddress = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState8 = _slicedToArray(_useState7, 2),
    townValue = _useState8[0],
    setTownValue = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
    _useState10 = _slicedToArray(_useState9, 2),
    showCapStreetList = _useState10[0],
    setShowCapStreetList = _useState10[1];
  var capAddressClick = function capAddressClick(address, type) {
    var postalCode = address.postalCode,
      locality = address.locality,
      inputOutput = address.inputOutput,
      localityInfo_2 = address.localityInfo_2,
      countryCode = address.countryCode;
    var inputOutputFormat = inputOutput === null || inputOutput === void 0 ? void 0 : inputOutput.substring(0, inputOutput === null || inputOutput === void 0 ? void 0 : inputOutput.indexOf('\t'));
    var currentInputOutput = inputOutputFormat || inputOutput;
    setSelectedAddress(address);
    if (type === 'town') {
      var fields = {
        billing_zip_code: postalCode,
        billing_country: countryCode,
        billing_town: localityInfo_2 ? "".concat(locality, " ").concat(localityInfo_2) : locality
      };
      for (var name in fields) {
        var value = fields[name];
        formik.setFieldValue(name, value);
        formik.setFieldTouched(name, true);
      }
    }
    if (type === 'street') {
      formik.setFieldTouched('billing_address_1', true);
      formik.setFieldValue('billing_address_1', currentInputOutput);
    }
    setShowCapStreetList(false);
  };
  var initAddress = function initAddress() {
    setSelectedAddress(null);
    setTownValue('');
    var fields = ['billing_zip_code', 'billing_town', 'billing_address_1', 'billing_address_2', 'billing_country'];
    fields.forEach(function (element) {
      formik.setFieldValue(element, '');
    });
  };
  var handleInputTown = function handleInputTown(e) {
    setShowCapStreetList(true);
    setTownValue(e.target.value);
  };
  var handleInputStreet = function handleInputStreet(e) {
    setShowCapStreetList(true);
    formik.setFieldValue('billing_address_1', e.target.value);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSelectedAddress(null);
    setTownValue('');
    var fields = ['billing_zip_code', 'billing_town', 'billing_address_1', 'billing_address_2', 'billing_country'];
    if (radioNationality !== null && radioNationality !== void 0 && radioNationality.value) {
      fields.forEach(function (element) {
        formik.setFieldValue(element, '');
      });
    }
  }, [radioNationality]);
  var addressesList = Object(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_2__["useCapaddress"])(apiUrlCapadresse, 'town', "".concat(formik.values.billing_zip_code, " ").concat(formik.values.billing_town));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (addressesList.length > 0 && formik.values.billing_town && formik.values.billing_zip_code) {
      var localityId = addressesList[0].localityId;
      var currentAddress = {
        locality: formik.values.billing_town,
        localityId: localityId,
        postalCode: formik.values.billing_zip_code
      };
      setSelectedAddress(currentAddress);
    }
    if (formik.values.billing_address_1) {
      setShowCapStreetList(false);
    }
  }, [addressesList]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzRadio"], {
    id: "radioNationalityFr",
    name: "radioNationality",
    label: t('billingInfo.address.radioNationality.labelFr'),
    type: "radio",
    checked: formik.values.radioNationality === 'radioNationalityFr',
    onChange: onChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzRadio"], {
    id: "radioNationalityOther",
    name: "radioNationality",
    className: "ml-5",
    label: t('billingInfo.address.radioNationality.labelOther'),
    type: "radio",
    checked: formik.values.radioNationality === 'radioNationalityOther',
    onChange: onChange
  }), ((_formik$values$radioN = formik.values.radioNationality) === null || _formik$values$radioN === void 0 ? void 0 : _formik$values$radioN.length) > 0 && formik.errors.radioNationality && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.radioNationality)), formik.values.radioNationality === 'radioNationalityFr' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pr-0 pr-md-2 col-12 col-md-6"
  }, selectedAddress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_2__["ComposedTypo"], {
    className: " bg-light py-3 px-2 px-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_2__["ComposedTypo"].Title, null, t('billingInfo.address.addressCap.label')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_2__["ComposedTypo"].Text, null, formik.values.billing_zip_code, ",", ' ', formik.values.billing_town)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_2__["ComposedTypo"].Icon, {
    onClick: initAddress,
    icon: "pencil-write",
    variant: "line",
    className: "editAddress"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.address.field.label'),
    placeholder: t('billingInfo.address.field.placeholder'),
    name: "billing_address_1",
    id: "billing_address_1",
    value: formik.values.billing_address_1,
    onChange: handleInputStreet,
    onBlur: formik.handleBlur
  }), formik.values.billing_address_1.length >= 3 && showCapStreetList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_serviceClient_CapAdress__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "w-100",
    type: "street",
    address: selectedAddress,
    inputOutput: formik.values.billing_address_1,
    onClick: capAddressClick
  }), ((_formik$values$billin = formik.values.billing_address_1) === null || _formik$values$billin === void 0 ? void 0 : _formik$values$billin.length) > 0 && formik.errors.billing_address_1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.billing_address_1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sz-form-group__label sz-line-height-normal mb-1",
    htmlFor: "billing_address_2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-family-bold text-inactive"
  }, t('billingInfo.address.additionalAddress.label')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    align: "center",
    weight: "light",
    className: "ml-2 d-inline"
  }, t('billingInfo.optional'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    placeholder: t('billingInfo.address.additionalAddress.placeholder'),
    name: "billing_address_2",
    id: "billing_address_2",
    value: formik.values.billing_address_2,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$billin2 = formik.values.billing_address_2) === null || _formik$values$billin2 === void 0 ? void 0 : _formik$values$billin2.length) > 0 && formik.errors.billing_address_2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.billing_address_2))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.address.addressCap.label'),
    placeholder: t('billingInfo.address.addressCap.placeholder'),
    name: "addressCap",
    id: "addressCap",
    value: townValue,
    onChange: handleInputTown
  }), townValue.length >= 3 && showCapStreetList ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_serviceClient_CapAdress__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: capAddressClick,
    className: "w-100",
    type: "town",
    inputOutput: townValue
  }) : null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pr-0 pr-md-2 col-12 col-md-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.address.field.label'),
    placeholder: t('billingInfo.address.field.placeholder'),
    name: "billing_address_1",
    id: "billing_address_1",
    value: formik.values.billing_address_1,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$billin3 = formik.values.billing_address_1) === null || _formik$values$billin3 === void 0 ? void 0 : _formik$values$billin3.length) > 0 && formik.errors.billing_address_1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.billing_address_1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pr-0 pr-md-2 col-12 col-md-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sz-form-group__label sz-line-height-normal mb-1",
    htmlFor: "billing_address_2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-family-bold text-inactive"
  }, t('billingInfo.address.additionalAddress.label')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    align: "center",
    weight: "light",
    className: "ml-2 d-inline"
  }, t('billingInfo.optional'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    placeholder: t('billingInfo.address.additionalAddress.placeholder'),
    name: "billing_address_2",
    id: "billing_address_2",
    value: formik.values.billing_address_2,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$billin4 = formik.values.billing_address_2) === null || _formik$values$billin4 === void 0 ? void 0 : _formik$values$billin4.length) > 0 && formik.errors.billing_address_2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.billing_address_2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pr-0 pr-md-2 col-12 col-md-4 col-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.address.zipCode.label'),
    placeholder: t('billingInfo.address.zipCode.placeholder'),
    name: "billing_zip_code",
    id: "billing_zip_code",
    value: formik.values.billing_zip_code,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$billin5 = formik.values.billing_zip_code) === null || _formik$values$billin5 === void 0 ? void 0 : _formik$values$billin5.length) > 0 && formik.errors.billing_zip_code && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.billing_zip_code)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pl-md-4 pr-0 pr-md-2 col-12 col-md-6 col-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.address.city.label'),
    placeholder: t('billingInfo.address.city.placeholder'),
    name: "billing_town",
    id: "billing_town",
    value: formik.values.billing_town,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$billin6 = formik.values.billing_town) === null || _formik$values$billin6 === void 0 ? void 0 : _formik$values$billin6.length) > 0 && formik.errors.billing_town && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.billing_town)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pl-lg-4 pr-0 pr-md-2 col-12 col-md-10 col-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sz-form-group__label sz-line-height-normal mb-1",
    htmlFor: "nationality"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-family-bold text-inactive"
  }, "Pays")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzSelect"], {
    label: t('billingInfo.address.country.label'),
    name: "billing_country",
    id: "billing_country",
    placeholder: t('billingInfo.address.country.placeholder'),
    options: nationalitiesOptions,
    value: nationalityValue,
    onChange: function onChange(selectedOption) {
      formik.setFieldValue('billing_country', selectedOption.value);
      setNationalityValue(selectedOption);
    },
    onBlur: function onBlur() {
      formik.handleBlur({
        target: {
          name: 'billing_country'
        }
      });
    },
    className: "mb-3 border-secondary"
  }), ((_formik$values$billin7 = formik.values.billing_country) === null || _formik$values$billin7 === void 0 ? void 0 : _formik$values$billin7.length) > 0 && formik.errors.billing_country && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.billing_country)))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/BillingInfo/Info.jsx":
/*!***************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/BillingInfo/Info.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _components_tsme_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/tsme-react-components */ "./assets/js/components/tsme-react-components/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Address */ "./assets/js/pages/move-out/Stepper/BillingInfo/Address.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Info(_ref) {
  var _initParcourState$con2, _formik$values$email;
  var email = _ref.email;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_2__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    initParcourState = _initParcours[0],
    send = _initParcours[1];
  var _initParcourState$con = (_initParcourState$con2 = initParcourState.context) === null || _initParcourState$con2 === void 0 ? void 0 : _initParcourState$con2.contractData,
    identite = _initParcourState$con.identite;
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useFormikContext"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    title: t('billingInfo.titleCard'),
    direction: "top",
    color: "primary-brand",
    className: "mt-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-0 px-md-5 mt-3 mx-3 mx-md-4 mx-lg-5 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "medium",
    className: "row"
  }, t('billingInfo.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_3__["ComposedTypo"], {
    className: "row bg-light py-3 px-2 px-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_3__["ComposedTypo"].Icon, {
    icon: "single-neutral-id-card-3",
    variant: "line",
    className: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-10 col-md-11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_3__["ComposedTypo"].Title, null, t('billingInfo.titleCardUser')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_3__["ComposedTypo"].Text, null, identite))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pr-0 pr-md-2 col-12 col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.email.label'),
    placeholder: t('billingInfo.email.placeholder'),
    name: "email",
    id: "email",
    disabled: email,
    value: formik.values.email,
    onChange: !email ? formik.handleChange : function () {},
    onBlur: formik.handleBlur
  }), ((_formik$values$email = formik.values.email) === null || _formik$values$email === void 0 ? void 0 : _formik$values$email.length) > 0 && formik.errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-7 mt-4 d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    variant: "info",
    transparent: true,
    className: "py-1"
  }, t('billingInfo.infoEmail')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "medium",
    className: "row mt-4 mb-2"
  }, t('billingInfo.titleInfoEmail')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    color: "disabled",
    className: "row d-none d-md-block"
  }, t('billingInfo.descInfoEmail')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Address__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/BillingInfo/InfoHolder.jsx":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/BillingInfo/InfoHolder.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoHolder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function InfoHolder() {
  var _formik$values$civili, _formik$values$first_, _formik$values$last_n, _formik$values$birthd, _formik$values$city_h, _formik$values$mobile, _formik$values$fix_mo;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_5__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    context = _initParcours[0].context;
  var summary = context === null || context === void 0 ? void 0 : context.summary;
  var civilitySummary = {
    label: summary.billingCivility == 'MME' ? 'Madame' : 'Monsieur',
    value: summary.billingCivility
  };
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(summary.billingCivility && civilitySummary),
    _useState2 = _slicedToArray(_useState, 2),
    civilityValue = _useState2[0],
    setCivilityValue = _useState2[1];
  var civilityOptions = [{
    label: t('civility.mrs'),
    value: 'MME'
  }, {
    label: t('civility.mr'),
    value: 'M'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _summary$billingBirth;
    if (summary !== null && summary !== void 0 && (_summary$billingBirth = summary.billingBirthDate) !== null && _summary$billingBirth !== void 0 && _summary$billingBirth.date) {
      var _summary$billingBirth2;
      var defaultDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(summary === null || summary === void 0 ? void 0 : (_summary$billingBirth2 = summary.billingBirthDate) === null || _summary$billingBirth2 === void 0 ? void 0 : _summary$billingBirth2.date), 'dd/MM/yyyy');
      formik.setFieldValue('birthday_date', defaultDate);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
    title: t('billingInfo.infoHolder.titleCard'),
    direction: "top",
    color: "primary-brand",
    className: "mt-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-0 px-md-5 mt-3 mx-3 mx-md-4 mx-lg-5 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "medium",
    className: "row"
  }, t('billingInfo.infoHolder.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pr-0 pr-md-2 col-8 col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sz-form-group__label sz-line-height-normal mb-1",
    htmlFor: "civility"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-family-bold text-inactive"
  }, t('billingInfo.infoHolder.civility.label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzSelect"], {
    placeholder: t('billingInfo.infoHolder.civility.placeholder'),
    name: "civility",
    id: "civility",
    options: civilityOptions,
    value: civilityValue,
    onChange: function onChange(selectedOption) {
      setCivilityValue(selectedOption);
      formik.setFieldValue('civility', selectedOption.value);
    },
    className: "mb-3 border-secondary"
  }), ((_formik$values$civili = formik.values.civility) === null || _formik$values$civili === void 0 ? void 0 : _formik$values$civili.length) > 0 && formik.errors.civility && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.civility))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pr-0 pr-md-2 col-12 col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.infoHolder.firstName.label'),
    placeholder: t('billingInfo.infoHolder.firstName.placeholder'),
    name: "first_name",
    id: "first_name",
    value: formik.values.first_name,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$first_ = formik.values.first_name) === null || _formik$values$first_ === void 0 ? void 0 : _formik$values$first_.length) > 0 && formik.errors.first_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.first_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pl-md-4 pr-0 pr-md-2 col-12 col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.infoHolder.lastName.label'),
    placeholder: t('billingInfo.infoHolder.lastName.placeholder'),
    name: "last_name",
    id: "last_name",
    value: formik.values.last_name,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$last_n = formik.values.last_name) === null || _formik$values$last_n === void 0 ? void 0 : _formik$values$last_n.length) > 0 && formik.errors.last_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.last_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "medium",
    className: "row mt-4"
  }, t('billingInfo.infoComplementaryHolder.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pr-md-2 col-8 col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sz-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.infoComplementaryHolder.birthDay.label'),
    placeholder: "jj/mm/aaaa",
    name: "birthday_date",
    id: "birthday_date",
    value: formik.values.birthday_date,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  })), ((_formik$values$birthd = formik.values.birthday_date) === null || _formik$values$birthd === void 0 ? void 0 : _formik$values$birthd.length) > 0 && formik.errors.birthday_date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.birthday_date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pl-md-4 pr-0 pr-md-2 col-12 col-md-5 mt-md-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.infoComplementaryHolder.city.label'),
    placeholder: t('billingInfo.infoComplementaryHolder.city.placeholder'),
    name: "city_holder",
    id: "city_holder",
    value: formik.values.city_holder,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$city_h = formik.values.city_holder) === null || _formik$values$city_h === void 0 ? void 0 : _formik$values$city_h.length) > 0 && formik.errors.city_holder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.city_holder))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pr-md-2 col-8 col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.infoComplementaryHolder.mobile.label'),
    placeholder: t('billingInfo.infoComplementaryHolder.mobile.placeholder'),
    name: "mobile",
    id: "mobile",
    value: formik.values.mobile,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$mobile = formik.values.mobile) === null || _formik$values$mobile === void 0 ? void 0 : _formik$values$mobile.length) > 0 && formik.errors.mobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.mobile)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-0 pl-md-4 pr-md-2 col-8 col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
    label: t('billingInfo.infoComplementaryHolder.fixMobile.label'),
    placeholder: t('billingInfo.infoComplementaryHolder.fixMobile.placeholder'),
    name: "fix_mobile",
    id: "fix_mobile",
    value: formik.values.fix_mobile,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), ((_formik$values$fix_mo = formik.values.fix_mobile) === null || _formik$values$fix_mo === void 0 ? void 0 : _formik$values$fix_mo.length) > 0 && formik.errors.fix_mobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], null, formik.errors.fix_mobile)))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/BillingInfo/index.jsx":
/*!****************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/BillingInfo/index.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitBillingInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_BillingInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../models/BillingInfo */ "./assets/js/models/BillingInfo.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Info */ "./assets/js/pages/move-out/Stepper/BillingInfo/Info.jsx");
/* harmony import */ var _InfoHolder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InfoHolder */ "./assets/js/pages/move-out/Stepper/BillingInfo/InfoHolder.jsx");
/* harmony import */ var _useTracking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../useTracking */ "./assets/js/pages/move-out/useTracking.js");
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

// import { useEffect } from 'react';










function InitBillingInfo() {
  var _summary$billingCount, _summary$billingStree, _summary$billingAddit, _summary$billingEmail, _summary$billingMobil, _summary$billingPhone;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    errorMessage = _useState2[0],
    setErrorMessage = _useState2[1];
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_3__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    _initParcours$ = _initParcours[0],
    context = _initParcours$.context,
    event = _initParcours$.event,
    send = _initParcours[1];
  var _context$contractData = context.contractData,
    email = _context$contractData.email,
    telPortable = _context$contractData.telPortable,
    telDomicile = _context$contractData.telDomicile;
  var summary = context === null || context === void 0 ? void 0 : context.summary;
  Object(_useTracking__WEBPACK_IMPORTED_MODULE_10__["default"])(3);
  var submitBillingIinfo = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(function (response) {
    var _newData$email, _newData$billing_addr, _newData$billing_addr2, _newData$billing_town, _newData$billing_zip_, _newData$civility, _newData$first_name, _newData$last_name, _newData$birthday_dat, _newData$city_holder, _newData$billing_coun;
    var newData = _objectSpread({}, response);
    var dataBillingInfo = {
      email: (_newData$email = newData.email) !== null && _newData$email !== void 0 ? _newData$email : '',
      isAddressForeign: newData.radioNationality === 'radioNationalityFr' ? 0 : 1,
      street: (_newData$billing_addr = newData.billing_address_1) !== null && _newData$billing_addr !== void 0 ? _newData$billing_addr : '',
      additionalStreet: (_newData$billing_addr2 = newData.billing_address_2) !== null && _newData$billing_addr2 !== void 0 ? _newData$billing_addr2 : '',
      city: (_newData$billing_town = newData.billing_town) !== null && _newData$billing_town !== void 0 ? _newData$billing_town : '',
      zipCode: (_newData$billing_zip_ = newData.billing_zip_code) !== null && _newData$billing_zip_ !== void 0 ? _newData$billing_zip_ : '',
      civility: (_newData$civility = newData.civility) !== null && _newData$civility !== void 0 ? _newData$civility : '',
      firstName: (_newData$first_name = newData.first_name) !== null && _newData$first_name !== void 0 ? _newData$first_name : '',
      lastName: (_newData$last_name = newData.last_name) !== null && _newData$last_name !== void 0 ? _newData$last_name : '',
      birthDate: (_newData$birthday_dat = newData.birthday_date) !== null && _newData$birthday_dat !== void 0 ? _newData$birthday_dat : '',
      birthAddress: (_newData$city_holder = newData.city_holder) !== null && _newData$city_holder !== void 0 ? _newData$city_holder : '',
      country: (_newData$billing_coun = newData.billing_country) !== null && _newData$billing_coun !== void 0 ? _newData$billing_coun : ''
    };
    if (newData !== null && newData !== void 0 && newData.mobile) {
      dataBillingInfo.mobilePhone = newData.mobile.replace(/ /g, '');
    }
    if (newData !== null && newData !== void 0 && newData.fix_mobile) {
      dataBillingInfo.phone = newData.fix_mobile.replace(/ /g, '');
    }
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].post('/move-out/billing-informations', dataBillingInfo);
  }, {
    onSuccess: function onSuccess(response, params) {
      var data = response.data;
      if (data.message === 'OK') {
        send({
          type: event.type === 'BACK_BILLING' ? 'GO_TO_SUMMARY' : 'COMPLETE_BILL',
          billingInfo: params
        });
      }
    },
    onError: function onError(error) {
      if (error.response.status === 400) {
        var _error$response$data;
        var errMessage = error === null || error === void 0 ? void 0 : (_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.response.errorMessage;
        setErrorMessage(errMessage);
      }
    }
  });
  var previousBtn = function previousBtn() {
    send({
      type: 'BACK'
    });
  };
  var initDataForm = {
    radioNationality: (summary === null || summary === void 0 ? void 0 : summary.isBillingAddressForeign) === true ? 'radioNationalityOther' : 'radioNationalityFr',
    billing_zip_code: summary === null || summary === void 0 ? void 0 : summary.billingZipCode,
    billing_country: (_summary$billingCount = summary === null || summary === void 0 ? void 0 : summary.billingCountry) !== null && _summary$billingCount !== void 0 ? _summary$billingCount : !(summary !== null && summary !== void 0 && summary.isBillingAddressForeign) && 'France',
    billing_town: summary === null || summary === void 0 ? void 0 : summary.billingCity,
    billing_address_1: (_summary$billingStree = summary === null || summary === void 0 ? void 0 : summary.billingStreet) !== null && _summary$billingStree !== void 0 ? _summary$billingStree : '',
    billing_address_2: (_summary$billingAddit = summary === null || summary === void 0 ? void 0 : summary.billingAdditionalStreet) !== null && _summary$billingAddit !== void 0 ? _summary$billingAddit : '',
    civility: summary === null || summary === void 0 ? void 0 : summary.billingCivility,
    email: (_summary$billingEmail = summary === null || summary === void 0 ? void 0 : summary.billingEmail) !== null && _summary$billingEmail !== void 0 ? _summary$billingEmail : email || '',
    mobile: (_summary$billingMobil = summary === null || summary === void 0 ? void 0 : summary.billingMobilePhone) !== null && _summary$billingMobil !== void 0 ? _summary$billingMobil : telPortable || '',
    fix_mobile: (_summary$billingPhone = summary === null || summary === void 0 ? void 0 : summary.billingPhone) !== null && _summary$billingPhone !== void 0 ? _summary$billingPhone : telDomicile || '',
    first_name: (summary === null || summary === void 0 ? void 0 : summary.billingFirstName) || '',
    last_name: (summary === null || summary === void 0 ? void 0 : summary.billingLastName) || '',
    city_holder: (summary === null || summary === void 0 ? void 0 : summary.billingBirthAddress) || ''
  };
  var propsInfo = {
    email: initDataForm.email
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    enableReinitialize: true,
    initialValues: initDataForm,
    onSubmit: submitBillingIinfo.mutate,
    validationSchema: _models_BillingInfo__WEBPACK_IMPORTED_MODULE_7__["BillingInfoModel"],
    validateOnMount: true
  }, function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: props.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info__WEBPACK_IMPORTED_MODULE_8__["default"], propsInfo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoHolder__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rounded-lg mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "px-0 px-md-5 mt-3 mx-md-4 mx-lg-5 "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
      variant: "info",
      transparent: true
    }, t('billingInfo.infoGeneral')), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cy-message-error"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
      variant: "danger"
    }, errorMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row px-3 mt-5 d-none d-md-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      className: "bg-transparent",
      variant: "outlined",
      icon: "arrow-left",
      onClick: previousBtn
    }, t('billingInfo.previousButton')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "contained",
      isDisabled: !props.isValid,
      loader: submitBillingIinfo.isLoading,
      className: "float-right",
      type: "submit"
    }, t('billingInfo.validateButton'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-md-none row no-gutters justify-content-between mt-4 mt-md-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "contained",
      isDisabled: !props.isValid,
      className: "col-8 m-auto",
      type: "submit",
      loader: submitBillingIinfo.isLoading
    }, t('billingInfo.validateButton'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      isDisabled: !props.isValid,
      className: "bg-transparent col-8 m-auto",
      variant: "outlined",
      icon: "arrow-left",
      onClick: previousBtn
    }, t('billingInfo.previousButton')))))));
  });
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Counter/Counter.jsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Counter/Counter.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Upload */ "./assets/js/pages/move-out/Stepper/Counter/Upload.jsx");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Data */ "./assets/js/pages/move-out/Stepper/Counter/Data.jsx");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ "./assets/js/pages/move-out/Stepper/Counter/Form.jsx");
/* harmony import */ var _hooks_useIsTr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useIsTr */ "./assets/js/hooks/useIsTr.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
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










function Counter(props) {
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var loopIndex = props.loopIndex,
    matricule = props.matricule;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_4__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    context = _initParcours[0].context;
  var statements = context.statements,
    summary = context.summary,
    currentDateResiliation = context.currentDateResiliation;
  var formatedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(currentDateResiliation, 'dd/MM/yyyy');
  var _statements$loopIndex = statements[loopIndex],
    isValid = _statements$loopIndex.isValid,
    isUpdating = _statements$loopIndex.isUpdating,
    isTRUpdated = _statements$loopIndex.isTRUpdated,
    indexTR = _statements$loopIndex.indexTR,
    isCounterUpdated = _statements$loopIndex.isCounterUpdated;
  var dateEvent = summary === null || summary === void 0 ? void 0 : summary.dateResiliation;
  var isTR = Object(_hooks_useIsTr__WEBPACK_IMPORTED_MODULE_8__["default"])(dateEvent, currentDateResiliation, _objectSpread({}, statements[loopIndex]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-md-5"
  }, !isUpdating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "cy-title-type-index",
    weight: "medium"
  }, t('statement.last_date_taken', {
    typeIndex: isTR ? 'télé-relevé' : 'relevé',
    dateIndexTR: formatedDate
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "mb-md-0",
    weight: "medium"
  }, t('statement.counter_infos_required_mobile', {
    dateIndexTR: formatedDate
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "mb-md-0",
    weight: "medium"
  }, t('statement.counter_infos_required', {
    dateIndexTR: formatedDate
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('statement.counter_infos_precision')))), !isValid || isUpdating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 p-md-4 mb-3",
    style: {
      background: 'var(--gray-100)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-md-block col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "gauge-dashboard-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('statement.counter_data.counterNb')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, matricule))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_7__["default"], props)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Data__WEBPACK_IMPORTED_MODULE_6__["default"], props), !isTR && (indexTR > 0 || isTRUpdated) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "information-circle",
    className: "text-disabled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    weight: "bold"
  }, t('statement.index_statement', {
    indexTR: parseInt(indexTR)
  })))), isValid && isUpdating && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Upload__WEBPACK_IMPORTED_MODULE_5__["default"], props));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Counter/Counter.scss":
/*!***************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Counter/Counter.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Counter/Data.jsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Counter/Data.jsx ***!
  \***********************************************************/
/*! exports provided: default, UpdateButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CounterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateButton", function() { return UpdateButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _hooks_useIsTr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useIsTr */ "./assets/js/hooks/useIsTr.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["loopIndex", "differentOnMobile", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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








function CounterData(_ref) {
  var loopIndex = _ref.loopIndex;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_4__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    context = _initParcours[0].context;
  var statements = context.statements,
    summary = context.summary,
    currentDateResiliation = context.currentDateResiliation;
  var alreadyUpdating = statements.findIndex(function (_ref2) {
    var isUpdating = _ref2.isUpdating;
    return isUpdating;
  });
  var _statements$loopIndex = statements[loopIndex],
    matricule = _statements$loopIndex.matricule,
    dateIndexTR = _statements$loopIndex.dateIndexTR,
    isTRUpdated = _statements$loopIndex.isTRUpdated,
    isCounterUpdated = _statements$loopIndex.isCounterUpdated,
    indexTR = _statements$loopIndex.indexTR,
    summaryIndex = _statements$loopIndex.summaryIndex,
    index = _statements$loopIndex.index;
  var dateSummaryEqualCurrentDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(currentDateResiliation, new Date(summary === null || summary === void 0 ? void 0 : summary.dateResiliation));
  var dateEvent = summary === null || summary === void 0 ? void 0 : summary.dateResiliation;
  var isTR = Object(_hooks_useIsTr__WEBPACK_IMPORTED_MODULE_6__["default"])(dateEvent, currentDateResiliation, _objectSpread({}, statements[loopIndex]));
  var formatedDate = summaryIndex && dateSummaryEqualCurrentDate || isCounterUpdated ? Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(currentDateResiliation, 'dd/MM/yyyy') : Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(dateIndexTR), 'dd/MM/yyyy');
  var indexContract = isTR && !isTRUpdated ? parseInt(indexTR) : parseInt(index);
  var currentIndex = !isTR && !isCounterUpdated && summaryIndex ? parseInt(summaryIndex) : indexContract;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cy-data-index p-3 mb-3",
    style: {
      background: 'var(--gray-100)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-md-block col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "gauge-dashboard-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('statement.counter_data.counter')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, matricule))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-md-block col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "calendar-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('statement.counter_data.date')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, formatedDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9 col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "color-drop-pick"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('statement.counter_data.index', {
    context: isTR ? 'TR' : 'R'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, currentIndex))), alreadyUpdating === -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-3 d-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UpdateButton, {
    loopIndex: loopIndex
  }))));
}
var UpdateButton = function UpdateButton(_ref3) {
  var loopIndex = _ref3.loopIndex,
    differentOnMobile = _ref3.differentOnMobile,
    className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded);
  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_4__["MoveOutContext"]),
    initParcours = _React$useContext2.initParcours;
  var _initParcours2 = _slicedToArray(initParcours, 2),
    context = _initParcours2[0].context,
    send = _initParcours2[1];
  var statements = context.statements;
  var onClick = function onClick() {
    var newStatements = _toConsumableArray(statements);
    var alreadyUpdating = statements.findIndex(function (_ref4) {
      var isUpdating = _ref4.isUpdating;
      return isUpdating;
    });
    if (alreadyUpdating !== -1) {
      newStatements[alreadyUpdating].isUpdating = false;
      newStatements[alreadyUpdating].isValid = false;
    }
    newStatements[loopIndex].isUpdating = true;
    newStatements[loopIndex].isValid = false;
    send({
      type: 'UPDATE_COUNTER',
      statements: newStatements
    });
  };
  var desktopButtonClsx = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('cy-edit-index d-none d-md-block', className);
  if (differentOnMobile) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], _extends({
      className: "d-md-none mx-auto mb-2",
      variant: "text",
      icon: "pencil-write",
      onClick: onClick,
      alignIcon: "right"
    }, props), "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], _extends({
      className: desktopButtonClsx,
      variant: "text",
      icon: "pencil-write",
      onClick: onClick
    }, props)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], _extends({
    variant: "text",
    className: "cy-edit-index",
    icon: "pencil-write",
    onClick: onClick
  }, props));
};

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Counter/Form.jsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Counter/Form.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CounterForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model */ "./assets/js/pages/move-out/model.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Data */ "./assets/js/pages/move-out/Stepper/Counter/Data.jsx");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _hooks_useIsTr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useIsTr */ "./assets/js/hooks/useIsTr.js");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../hooks/useGA/tags/moveout */ "./assets/js/hooks/useGA/tags/moveout.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../constants */ "./assets/js/constants/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
















function CounterForm(_ref) {
  var loopIndex = _ref.loopIndex,
    idPds = _ref.idPds;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_13__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_5__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    context = _initParcours[0].context,
    send = _initParcours[1];
  var statements = context.statements,
    summary = context.summary,
    currentDateResiliation = context.currentDateResiliation;
  var _statements$loopIndex = statements[loopIndex],
    isValid = _statements$loopIndex.isValid,
    isUpdating = _statements$loopIndex.isUpdating,
    isCounterUpdated = _statements$loopIndex.isCounterUpdated,
    index = _statements$loopIndex.index,
    indexTR = _statements$loopIndex.indexTR,
    summaryIndex = _statements$loopIndex.summaryIndex;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    track = _useGA.track;
  var dateEvent = summary === null || summary === void 0 ? void 0 : summary.dateResiliation;
  var isTR = Object(_hooks_useIsTr__WEBPACK_IMPORTED_MODULE_11__["default"])(dateEvent, currentDateResiliation, _objectSpread({}, statements[loopIndex]));
  var dateSummaryEqualCurrentDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["isEqual"])(currentDateResiliation, new Date(summary === null || summary === void 0 ? void 0 : summary.dateResiliation));
  var CounterPostQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(function (params) {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_15__["API"].MOVE_OUT.CPT_INDEX_CHECK, params);
  }, {
    onSuccess: function onSuccess(response, _ref2) {
      var index = _ref2.index;
      var isOutLimit = response.data.message === 'KO_HORS_BORNE';
      var isNoView = response.data.message === 'KO_NON_VU';
      var isKo = response.data.message.includes('KO');
      var inconsistent = _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_14__["SZ_CHECK_RESULT"].inconsistent,
        consistent = _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_14__["SZ_CHECK_RESULT"].consistent;
      var isInconsistent = isOutLimit || isNoView || isKo;
      var sz_check_result = isInconsistent ? inconsistent : consistent;
      track('MOVEOUT_18', {
        sz_check_result: sz_check_result,
        sz_check_type: 'validation'
      });
      var newStatements = _toConsumableArray(statements);
      newStatements[loopIndex].isValid = true;
      newStatements[loopIndex].index = index;
      newStatements[loopIndex].isCounterUpdated = true;
      newStatements[loopIndex].isUploadKo = isKo;
      newStatements[loopIndex].isUploadMandatory = isOutLimit;
      newStatements[loopIndex].isUploadNoView = isNoView;
      if (isTR) {
        newStatements[loopIndex].isTRUpdated = true;
        newStatements[loopIndex].indexUpdated = index;
      }
      send({
        type: 'UPDATE_COUNTER',
        statements: newStatements
      });
    }
  });
  var initIndex = function initIndex() {
    var currentIndex = '';
    if (isCounterUpdated) {
      currentIndex = parseInt(index);
    } else if (dateSummaryEqualCurrentDate && summaryIndex) {
      currentIndex = parseInt(summaryIndex);
    }
    return addZeroFrontIndex(currentIndex);
  };
  var addZeroFrontIndex = function addZeroFrontIndex(currentIndex) {
    var lengthCurrentIndex = String(currentIndex).length;
    var sizeIndex = 5;
    var stringCurrentIndex = String(currentIndex);
    var initIndexes = {};
    if (parseInt(currentIndex) > 0 && lengthCurrentIndex < sizeIndex) {
      var numberZeroAdd = sizeIndex - lengthCurrentIndex;
      for (var _index = 0; _index < numberZeroAdd; _index++) {
        stringCurrentIndex = "0".concat(stringCurrentIndex);
      }
    }
    if (parseInt(currentIndex) > 0) {
      for (var key in stringCurrentIndex) {
        initIndexes["input".concat(key)] = stringCurrentIndex[key];
      }
    }
    return initIndexes;
  };
  var initialValues = initIndex();
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: _model__WEBPACK_IMPORTED_MODULE_7__["counterSchema"],
    validateOnMount: true,
    onSubmit: function onSubmit(values) {
      var index = Object.values(values).join('');
      CounterPostQuery.mutate({
        index: index,
        idPds: idPds
      });
    }
  });
  var inputs = {
    input0: react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null),
    input1: react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null),
    input2: react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null),
    input3: react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null),
    input4: react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null)
  };
  var onChange = function onChange(e) {
    e.preventDefault();
    e.stopPropagation();
    var _e$target = e.target,
      value = _e$target.value,
      name = _e$target.name;
    var reg = /^\d?$/;
    var NextIndex = Object.keys(inputs).indexOf(name) + 1;
    var inputLength = Object.keys(inputs).length;
    var nextRefIndex = 'input' + NextIndex;
    if (formik.errors[name]) {
      var newErrors = _objectSpread({}, formik.errors);
      delete newErrors[name];
      formik.setErrors(newErrors);
    }
    if (reg.test(value) || formik.values[name].toString().length > value.toString().length && name !== nextRefIndex) {
      formik.handleChange(e);
      if (NextIndex < inputLength && value.length > 0) {
        inputs[nextRefIndex].current.focus();
      }
    }
  };
  var onReset = function onReset() {
    var newStatements = _toConsumableArray(statements);
    newStatements[loopIndex].isValid = true;
    newStatements[loopIndex].isUpdating = false;
    newStatements[loopIndex].isTRUpdated = false;
    newStatements[loopIndex].isCounterUpdated = false;
    delete newStatements[loopIndex].index;
    send({
      type: 'UPDATE_COUNTER',
      statements: newStatements
    });
  };
  var Digit = function Digit(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mx-1 mx-md-2 pt-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sz-form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sz-form-group__input p-0 border rounded form-control d-flex justify-content-center align-items-center",
      style: {
        width: isMobile ? 'calc(90vw / 8 - 12px)' : 41,
        height: 41,
        background: 'var(--btn-disabled)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      color: children ? 'disabled' : 'danger',
      className: "m-0"
    }, children || 'X')))));
  };
  if (!isUpdating || isValid) {
    var isIndexSummary = dateSummaryEqualCurrentDate && summaryIndex > 0;
    var indexSummary = addZeroFrontIndex(summaryIndex);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cy-digits-index justify-content-center row no-gutters"
    }, [].concat(_toConsumableArray(index || isIndexSummary && indexSummary || '-----'), _toConsumableArray(new Array(3).fill())).map(function (nb, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Digit, {
        key: key
      }, nb);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Data__WEBPACK_IMPORTED_MODULE_9__["UpdateButton"], {
      differentOnMobile: true,
      className: "ml-auto",
      loopIndex: loopIndex
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "cy-digits-index row w-100 m-0 no-gutters justify-content-center"
  }, Object.keys(inputs).map(function (name, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('mx-1 pt-1', {
        'mx-md-2': key > 0,
        'mr-md-2': key === 0
      }),
      key: name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], {
      ref: inputs[name],
      style: {
        backgroundColor: isValid ? 'var(--blue-4) !important' : '',
        width: isMobile ? 'calc(90vw / 8 - 12px)' : 41,
        height: 41
      },
      name: name,
      onChange: onChange,
      value: formik.values[name],
      pattern: "^\\d?$",
      maxLength: 1,
      type: isMobile ? 'tel' : 'text',
      placeholder: "-",
      className: "p-0 border border-secondary rounded number-box text-center sz-border-1",
      disabled: isValid || !isUpdating
    }));
  }), new Array(3).fill().map(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Digit, {
      key: arguments.length <= 1 ? undefined : arguments[1]
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-md-auto ml-lg-auto counter-validate"
  }, indexTR > 0 && isUpdating && !isValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    onClick: onReset,
    className: "cy-btn-reset-index mr-4 mr-md-1",
    variant: "text",
    icon: "synchronize-arrow-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "ml-md-auto",
    type: "submit",
    variant: "outlined",
    isDisabled: !formik.isValid,
    loader: CounterPostQuery.isLoading
  }, t('validateButton'))));
}

// Utilisation avec un composant réutilisable, en cours de préparation.
// return (
//   <CounterIndexForm onSubmit={onSubmit}>
//     <div className="ml-md-auto">
//       {isTR && isUpdating && !isValid && (
//         <SzButton
//           onClick={onReset}
//           className="mr-4 mr-md-1"
//           variant="text"
//           icon="synchronize-arrow-1"
//         />
//       )}
//       {!isUpdating || isValid ? (
//         <UpdateButton
//           differentOnMobile
//           // className="ml-auto"
//           loopIndex={loopIndex}
//         />
//       ) : (
//         <SzButton
//           className="my-3 my-md-0 ml-md-auto"
//           type="submit"
//           variant="outlined"
//           isDisabled={!formik.isValid}
//         >
//           {t('validateButton')}
//         </SzButton>
//       )}
//     </div>
//   </CounterIndexForm>
// );

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Counter/Upload.jsx":
/*!*************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Counter/Upload.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CounterUpload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Upload */ "./assets/js/components/Upload.jsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useGA/tags/moveout */ "./assets/js/hooks/useGA/tags/moveout.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constants */ "./assets/js/constants/index.ts");
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












function CounterUpload(_ref) {
  var loopIndex = _ref.loopIndex,
    idPds = _ref.idPds,
    scrollToMeter = _ref.scrollToMeter;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_5__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    context = _initParcours[0].context,
    send = _initParcours[1];
  var statements = context.statements;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    files = _React$useState2[0],
    setFiles = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isErrorCptIndex = _React$useState4[0],
    setIsErrorCptIndex = _React$useState4[1];
  var _statements$loopIndex = statements[loopIndex],
    isUploadMandatory = _statements$loopIndex.isUploadMandatory,
    isUploadNoView = _statements$loopIndex.isUploadNoView,
    isUploadKo = _statements$loopIndex.isUploadKo;
  var isUploadKoAndKo = isUploadKo && files.length > 0;
  var accept = 'image/jpeg, image/png, image/jpg';
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    track = _useGA.track;
  var onDrop = function onDrop(acceptedFiles) {
    setFiles(acceptedFiles);
  };
  var onFileReject = function onFileReject() {
    track('MOVEOUT_4', {
      sz_check_result: _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_10__["SZ_CHECK_RESULT"].upload_photo
    });
  };
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      upload: null
    },
    onSubmit: function onSubmit() {
      var data = {
        idPds1: idPds,
        index1: statements[loopIndex].index,
        photo1: files[0] || null
      };
      UploadPhotoQuery.mutate(data);
    }
  });
  var UploadPhotoQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(function (data) {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_11__["API"].MOVE_OUT.CPT_INDEX, data);
  }, {
    onSuccess: function onSuccess(response) {
      if (response.data.message === 'OK') {
        var newStatements = _toConsumableArray(statements);
        var allValid = statements.every(function (_ref2) {
          var isValid = _ref2.isValid;
          return isValid;
        });
        if (!allValid) {
          var nextToUpdate = statements.findIndex(function (_ref3) {
            var isUpdating = _ref3.isUpdating;
            return !isUpdating;
          });
          newStatements[nextToUpdate].isUpdating = true;
        }
        newStatements[loopIndex].photo = files[0] || null;
        newStatements[loopIndex].isUpdating = false;
        send({
          type: 'UPDATE_COUNTER',
          statements: newStatements
        });
        scrollToMeter(loopIndex + 1);
      } else {
        setIsErrorCptIndex(true);
      }
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "row no-gutters"
  }, isUploadNoView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    className: "mt-3",
    variant: "warning"
  }, t('statement.counter_alert_no_view.moveout')), isUploadMandatory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    className: "mt-3",
    variant: "warning"
  }, t('statement.counteralert_default')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "my-4 ml-1",
    weight: "medium"
  }, t('statement.upload_infos', {
    context: isUploadKo && 'mandatory'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onDrop: onDrop,
    onFileReject: onFileReject,
    accept: accept
  })), isErrorCptIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    className: "col-12 mt-3",
    variant: "danger"
  }, t('errors.techError')), (!isUploadKo || isUploadKoAndKo) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    id: "uploadButton",
    variant: "contained",
    className: "mt-4 mb-3 mx-auto",
    type: "submit",
    alignIcon: "right",
    loader: UploadPhotoQuery.isLoading,
    icon: isMobile && 'floppy-disk'
  }, t('statement.upload_button')));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Counter/index.jsx":
/*!************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Counter/index.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CounterStep; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Counter */ "./assets/js/pages/move-out/Stepper/Counter/Counter.jsx");
/* harmony import */ var _hooks_useIsTr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useIsTr */ "./assets/js/hooks/useIsTr.js");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _Counter_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Counter.scss */ "./assets/js/pages/move-out/Stepper/Counter/Counter.scss");
/* harmony import */ var _Counter_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Counter_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useTracking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../useTracking */ "./assets/js/pages/move-out/useTracking.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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










function CounterStep() {
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_3__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    isErrorCptIndex = _React$useState2[0];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isLoading = _React$useState4[0],
    setIsLoading = _React$useState4[1];
  var _initParcours = _slicedToArray(initParcours, 2),
    _initParcours$ = _initParcours[0],
    context = _initParcours$.context,
    event = _initParcours$.event,
    send = _initParcours[1];
  var statements = context.statements,
    summary = context.summary,
    currentDateResiliation = context.currentDateResiliation;
  var displayTR = statements.every(function (_ref) {
    var indexTR = _ref.indexTR;
    return indexTR > 0;
  });
  // const hasTR = statements.find(({ isTR }) => isTR);

  var isDisabled = statements.every(function (_ref2) {
    var isValid = _ref2.isValid,
      isUpdating = _ref2.isUpdating;
    return isValid && !isUpdating;
  });
  Object(_useTracking__WEBPACK_IMPORTED_MODULE_9__["default"])(2);
  var onValidate = function onValidate() {
    setIsLoading(true);
    send(event.type === 'BACK_STATEMENT' ? 'GO_TO_SUMMARY' : 'VALIDATE');
  };
  var goBack = function goBack() {
    send('GO_BACK');
  };
  var containerIndex = {};
  var scrollToMeter = function scrollToMeter(keyMeter) {
    var _containerIndex;
    Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_6__["default"])((_containerIndex = containerIndex["refIndexBloc".concat(keyMeter)]) === null || _containerIndex === void 0 ? void 0 : _containerIndex.offsetTop);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, statements.map(function (counter, key) {
    var dateEvent = summary === null || summary === void 0 ? void 0 : summary.dateResiliation;
    var isTR = Object(_hooks_useIsTr__WEBPACK_IMPORTED_MODULE_5__["default"])(dateEvent, currentDateResiliation, _objectSpread({}, counter));
    var tradContext = isTR ? 'TR' : 'SE';
    containerIndex["refIndexBloc".concat(key)] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: counter.matricule,
      className: "cy-card-index col-12 bg-white mt-3",
      ref: containerIndex["refIndexBloc".concat(key)]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
      color: counter.isUpdating ? 'primary-brand' : 'card-disabled',
      direction: "top",
      title: t('statement.title', {
        context: isMobile ? tradContext + '_mobile' : tradContext,
        matricule: counter.matricule
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Counter__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      loopIndex: key,
      scrollToMeter: scrollToMeter
    }, counter))));
  }), isErrorCptIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    className: "col-12 mt-3",
    variant: "danger"
  }, t('errors.techError')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 d-flex px-5 py-3 flex-column flex-md-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "col-12 col-md-4 col-lg-3 mt-3 mt-md-0 order-1 order-sm-0",
    variant: "outlined",
    onClick: goBack,
    icon: "arrow-left"
  }, t('statement.back_step_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    "data-cy": "btn-validate-continue",
    variant: "contained",
    isDisabled: !isDisabled,
    loader: isLoading,
    onClick: onValidate,
    className: "col-12 col-md-4 col-lg-3 ml-md-auto"
  }, t('statement.validate_and_continue')))), !displayTR ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzHelper"], {
    title: t('statement.helper_step_1.title'),
    label: t('know_more')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "bold"
  }, t('statement.helper_step_1.black_number')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('statement.helper_step_1.content')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "bold"
  }, t('statement.helper_step_1.subtitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('statement.helper_step_1.subcontent'))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzHelper"], {
    title: t('statement.helper_step_2.title'),
    label: t('know_more')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('statement.helper_step_2.content'))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/ResiliationDate/Modal.jsx":
/*!********************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/ResiliationDate/Modal.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResiliationModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_move_out_wait_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../img/move-out/wait.svg */ "./assets/img/move-out/wait.svg");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants */ "./assets/js/constants/index.ts");







function ResiliationModal(_ref) {
  var show = _ref.show,
    handleClose = _ref.handleClose;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    track = _useGA.track;
  var cancelBtn = function cancelBtn() {
    window.location.href = '/';
    // track('MOVEOUT_14', () => {
    // });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    backdrop: "static",
    show: show,
    size: 'xl',
    className: "p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-auto text-center timer-img d-block d-md-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_move_out_wait_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    className: "w-75",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    weight: "regular"
  }, t('MoveOut.modalTitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular"
  }, t('MoveOut.modalBody_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular"
  }, t('MoveOut.modalBody_2'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular"
  }, t('MoveOut.modalBody_3', {
    n: _constants__WEBPACK_IMPORTED_MODULE_6__["MAX_MOVE_OUT_DELAY"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-5 d-flex flex-column flex-sm-row align-items-sm-center  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    className: "mr-sm-3 mb-3 mb-sm-0",
    onClick: handleClose
  }, t('MoveOut.modalBtnContinue')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "text",
    onClick: cancelBtn
  }, t('MoveOut.modalBtnCancel'))))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/ResiliationDate/index.jsx":
/*!********************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/ResiliationDate/index.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResiliationDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modal */ "./assets/js/pages/move-out/Stepper/ResiliationDate/Modal.jsx");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _ResiliationDate_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ResiliationDate.scss */ "./assets/js/pages/move-out/Stepper/ResiliationDate/ResiliationDate.scss");
/* harmony import */ var _ResiliationDate_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ResiliationDate_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../hooks/useGA/tags/moveout */ "./assets/js/hooks/useGA/tags/moveout.ts");
/* harmony import */ var _useTracking__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../useTracking */ "./assets/js/pages/move-out/useTracking.js");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../constants/index */ "./assets/js/constants/index.ts");
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

















function ResiliationDate() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_11__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState2 = _slicedToArray(_useState, 2),
    messageError = _useState2[0],
    setmessageError = _useState2[1];
  var _initParcours = _slicedToArray(initParcours, 2),
    initParcoursState = _initParcours[0],
    send = _initParcours[1];
  var context = initParcoursState.context,
    event = initParcoursState.event,
    history = initParcoursState.history;
  var currentDateResiliation = context.currentDateResiliation,
    isValidDate = context.isValidDate,
    contractData = context.contractData,
    summary = context.summary;
  var todayDate = new Date();
  var terminateDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["sub"])(todayDate, {
    days: _constants_index__WEBPACK_IMPORTED_MODULE_16__["MAX_MOVE_OUT_DELAY"] - 1
  });
  var dateResiliation = summary.dateResiliation;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _history$event;
    var reference = _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_14__["SZ_FUNNEL_VARIANT"].reference,
      account = _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_14__["SZ_FUNNEL_VARIANT"].account;
    var fromAuth = (history === null || history === void 0 ? void 0 : (_history$event = history.event) === null || _history$event === void 0 ? void 0 : _history$event.type) === 'AUTH_SUCCESS';
    var sz_funnel_variant = fromAuth ? reference : account;
    track('MOVEOUT_1', {
      sz_funnel_step: 'complete',
      sz_funnel_variant: sz_funnel_variant
    });
  }, []);
  Object(_useTracking__WEBPACK_IMPORTED_MODULE_15__["default"])(1);
  var submitClosingDate = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(function (data) {
    var formData = _objectSpread({}, data);
    formData.closingDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(data.closingDate, 'yyyy-MM-dd');
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__["default"].post('move-out/set-closing-date', formData);
  }, {
    onSuccess: function onSuccess(response, _ref) {
      var closingDate = _ref.closingDate;
      // Changement de date avec summary
      // dateResiliation
      // track('MOVEOUT_15');
      var isDateDifferent = !Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isEqual"])(new Date(closingDate), new Date(dateResiliation));
      var isBackDate = event.type === 'BACK_DATE_SELECTION';
      var type = isBackDate && !isDateDifferent ? 'GO_TO_SUMMARY' : 'COMPLETE_DATE';
      send({
        type: type,
        currentDateResiliation: closingDate,
        isDateDifferent: isDateDifferent
      });
    },
    onError: function onError(error) {
      var validation_errors = error.response.data.validation_errors;
      var firstError = validation_errors[Object.keys(validation_errors)[0]];
      var errorMessage = firstError.filter(function (element, index) {
        if (index < 2) {
          return element;
        }
      });
      var currentMessage = errorMessage[0];
      if (errorMessage[1]) {
        currentMessage = errorMessage[0].concat('. ', errorMessage[1]);
      }
      setmessageError(currentMessage);
    }
  });
  var ResiliationDateModel = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
    closingDate: yup__WEBPACK_IMPORTED_MODULE_5__["date"]().required('Veuillez saisir une date').min(terminateDate).max(todayDate)
  });
  var onOpenModal = function onOpenModal() {
    setShowModal(true);
    // track('MOVEOUT_12');
  };

  var handleClose = function handleClose() {
    setShowModal(false);
    // track('MOVEOUT_13');
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showModal = _useState4[0],
    setShowModal = _useState4[1];
  var showSkeleton = Object.keys(summary).length === 0 || Object.keys(contractData).length === 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      closingDate: isValidDate ? currentDateResiliation : null
    },
    validationSchema: ResiliationDateModel,
    onSubmit: submitClosingDate.mutate,
    enableReinitialize: true,
    validateOnMount: true
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      setFieldValue = _ref2.setFieldValue,
      isValid = _ref2.isValid,
      values = _ref2.values;
    var onChangeDate = function onChangeDate(date) {
      setFieldValue('closingDate', date);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      "data-cy": "moveout-resiliation-date",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
      title: "Date de r\xE9siliation",
      direction: "top",
      color: "primary-brand",
      className: "mt-4 bg-white cy-id-bloc-resiliation"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-md-4"
    }, showSkeleton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
      height: 24
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      weight: "medium"
    }, t('resiliationDate.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row align-items-center"
    }, showSkeleton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
      height: 42
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-lg-4 mt-2 date-resiliation"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzDateRangePicker"], {
      value: values.closingDate,
      onChange: onChangeDate,
      maxDate: new Date(),
      minDate: terminateDate,
      toggle: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-lg-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
      transparent: true,
      variant: "info",
      className: "mb-0 py-1 cy-id-resiliation-alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      tag: "span",
      weight: "regular",
      className: "mb-0 py-1"
    }, t('resiliationDate.alert'))))))), messageError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
      variant: "danger",
      className: "col-12 mt-4"
    }, messageError), !showSkeleton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row justify-content-start align-items-center no-gutters px-md-4 py-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-baseline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-baseline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "mb-0",
      size: "S"
    }, t('resiliationDate.action')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      className: "pl-1",
      variant: "text",
      onClick: onOpenModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      size: "S",
      weight: "medium",
      className: "mb-0"
    }, t('resiliationDate.btns.outDelay'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      "data-cy": "btn-validate-continue",
      variant: "contained",
      isDisabled: !isValid,
      loader: submitClosingDate.isLoading,
      type: "submit",
      className: "col-12 col-md-4 col-lg-3 ml-md-auto"
    }, t('resiliationDate.btns.validate')))));
  }), showModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: showModal,
    handleClose: handleClose
  }));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Summary/SummaryBilling.jsx":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Summary/SummaryBilling.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SummaryBilling; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SummaryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SummaryCard */ "./assets/js/pages/move-out/Stepper/Summary/SummaryCard.jsx");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function SummaryBilling(_ref) {
  var isLoading = _ref.isLoading,
    response = _ref.data;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_3__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    context = _initParcours[0].context,
    send = _initParcours[1];
  var sendTo = function sendTo() {
    send('BACK_BILLING');
  };
  var contractData = context.contractData,
    isEfacture = context.isEfacture;
  var summary = response.data.summary;
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormikContext"])();
  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    formik.setFieldValue('confirmEFacture', target.checked);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SummaryCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: t('summary.billingInfo.title'),
    sendTo: sendTo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('summary.billingInfo.contractualInfo')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--gray-100)'
    },
    className: "mb-2 row no-gutters p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "single-neutral-id-card-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.billingInfo.identity')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, contractData.identite))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "business-contract-handshake-sign"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.billingInfo.reference')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, contractData.fullReference))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 mb-3"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "envelope"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.billingInfo.email')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, summary.billingEmail))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mb-3"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "mr-3"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "pin-location-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.billingInfo.newAddress')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, summary !== null && summary !== void 0 && summary.isBillingAddressForeign ? [summary.billingStreet, summary.billingAdditionalStreet ? "".concat(summary.billingAdditionalStreet, ", ").concat(summary.billingZipCode, " ").concat(summary.billingCity, ", ").concat(summary.billingCountry) : "".concat(summary.billingZipCode, " ").concat(summary.billingCity, ", ").concat(summary.billingCountry)].join(', ') : [summary.billingStreet, summary.billingAdditionalStreet ? "".concat(summary.billingAdditionalStreet, ", ").concat(summary.billingZipCode, " ").concat(summary.billingCity) : "".concat(summary.billingZipCode, " ").concat(summary.billingCity)].join(', '))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('summary.billingInfo.principalOwnerInfos')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--gray-100)'
    },
    className: "mb-2 row no-gutters p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-5 mb-3"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "mr-3"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "single-neutral-id-card-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.billingInfo.principalOwner')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, summary.billingCivility, " ", summary.billingFirstName, ' ', summary.billingLastName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-7 mb-3"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, null) : (summary.billingBirthDate || summary.billingBirthAddress) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "calendar-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.billingInfo.dateAndBirthPlace')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, summary.billingBirthDate && summary.billingBirthDate.date && "Le ".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(summary.billingBirthDate.date), 'dd/MM/yyyy')), ' ', summary.billingBirthAddress && "\xE0 ".concat(summary.billingBirthAddress)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-5 mb-3"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "mr-3"
  }) : summary.billingMobilePhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "mobile-phone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.billingInfo.mobilePhone')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, summary.billingMobilePhone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-7 mb-3"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, null) : summary.billingPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "phone-actions-voice-mail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.billingInfo.phone')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, summary.billingPhone)))), isEfacture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
    id: "confirmEFacture",
    className: "py-3 ml-3",
    label: t('summary.billingInfo.billingAccept'),
    onChange: onChange,
    checked: formik.values.confirmEFacture
  }));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Summary/SummaryCard.jsx":
/*!******************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Summary/SummaryCard.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SummaryCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");



function SummaryCard(_ref) {
  var title = _ref.title,
    children = _ref.children,
    sendTo = _ref.sendTo;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      borderRadius: '8px',
      borderColor: '#6095D6 !important'
    },
    className: "summary-card border sz-border-1 bg-white my-4 pt-3 pb-4 px-3 px-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-md-center position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "mb-3 mb-md-4",
    variant: "h2",
    weight: "bold"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      right: isMobile ? -10 : -40,
      top: -10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "ml-auto summary-edit-button",
    icon: "pencil-write",
    variant: "text",
    onClick: sendTo
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-md-5"
  }, children));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Summary/SummaryCounter.jsx":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Summary/SummaryCounter.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SummaryCounter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SummaryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SummaryCard */ "./assets/js/pages/move-out/Stepper/Summary/SummaryCard.jsx");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useIsTr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useIsTr */ "./assets/js/hooks/useIsTr.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
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







function SummaryCounter(_ref) {
  var response = _ref.data;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_3__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    context = _initParcours[0].context,
    send = _initParcours[1];
  var sendTo = function sendTo() {
    send('BACK_STATEMENT');
  };
  var statements = context.statements,
    currentDateResiliation = context.currentDateResiliation;
  var summary = response.data.summary;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedFile = _React$useState2[0],
    setSelectedFile = _React$useState2[1];
  var onClose = function onClose() {
    setSelectedFile(null);
  };
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useFormikContext"])();
  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    formik.setFieldValue('meterReading', target.checked);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SummaryCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: t('summary.counterInfos.title'),
    sendTo: sendTo
  }, statements.map(function (counter) {
    var matricule = counter.matricule,
      isTRUpdated = counter.isTRUpdated;
    var photo, index;
    if (matricule === summary.matriculeCompteur1) {
      photo = summary.photo1;
      index = parseInt(summary.index1) || parseInt(summary.indexTR1);
    } else if (matricule === summary.matriculeCompteur2) {
      photo = summary.photo2;
      index = parseInt(summary.index2) || parseInt(summary.indexTR2);
    }
    var onClick = function onClick() {
      setSelectedFile(photo);
    };
    var dateEvent = summary === null || summary === void 0 ? void 0 : summary.dateResiliation;
    var isTR = Object(_hooks_useIsTr__WEBPACK_IMPORTED_MODULE_5__["default"])(dateEvent, currentDateResiliation, _objectSpread({}, counter));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: matricule,
      style: {
        backgroundColor: 'var(--gray-100)'
      },
      className: "mb-2 row no-gutters justify-content-md-center px-3 px-md-5 py-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-4 mb-3 mb-md-0 data-hj-suppress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
      icon: "gauge-dashboard-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.counterInfos.counter')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, matricule))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-8 col-md-3 mb-3 mb-md-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
      icon: "color-drop-pick"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.counterInfos.index', {
      context: isTR && !isTRUpdated && 'TR'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, index))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-4 col-md-4 d-flex"
    }, photo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      className: "d-lg-none d-md-inline-flex ml-auto bg-transparent",
      icon: "camera-1",
      variant: "outlined",
      onClick: onClick
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      "data-cy": "counter-infos-display-photo",
      className: "d-none d-lg-inline-flex mx-auto mx-md-0 bg-transparent",
      icon: "camera-1",
      variant: "outlined",
      alignIcon: "right",
      onClick: onClick
    }, t('summary.counterInfos.displayPhoto')))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: selectedFile !== null,
    handleClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: selectedFile,
    alt: "",
    width: "100%"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
    id: "meterReading",
    className: "py-3 mb-3 ml-3",
    label: t('summary.counterInfos.confirmationLabel'),
    onChange: onChange,
    checked: formik.values.meterReading,
    name: "meterReading"
  }));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Summary/SummaryResiliationDate.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Summary/SummaryResiliationDate.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SummaryResiliationDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SummaryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SummaryCard */ "./assets/js/pages/move-out/Stepper/Summary/SummaryCard.jsx");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function SummaryResiliationDate(_ref) {
  var isLoading = _ref.isLoading,
    response = _ref.data;
  var isBrowser = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_3__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    context = _initParcours[0].context,
    send = _initParcours[1];
  var sendTo = function sendTo() {
    send('BACK_DATE_SELECTION');
  };
  var services = context.services.filter(function (service) {
    return service !== 'e-facture-eligible';
  });
  var _context$contractData = context === null || context === void 0 ? void 0 : context.contractData,
    addressSite1 = _context$contractData.addressSite1,
    addressSite2 = _context$contractData.addressSite2,
    addressSite3 = _context$contractData.addressSite3,
    cpSite = _context$contractData.cpSite,
    villeSite = _context$contractData.villeSite;
  var address1 = addressSite1 || '';
  var address2 = addressSite2 || '';
  var address3 = addressSite3 || '';
  var adress = address1 + ' ' + address2 + ' ' + address3;
  if (isBrowser && adress.length > 75) {
    adress = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_8__["stringTruncate"])(adress, 77, ' ...');
  } else if (adress.length > 27) {
    adress = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_8__["stringTruncate"])(adress, 29, ' ...');
  }
  var cpVille = cpSite + ' ' + villeSite;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SummaryCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: t('summary.resiliationDate.title'),
    sendTo: sendTo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: '#FFEABD'
    },
    className: "py-3 text-center mb-3"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_7__["Markup"], {
    content: t('summary.resiliationDate.dateInfo', {
      date: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(response.data.summary.dateResiliation), 'dd/MM/yyyy')
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: 'var(--gray-100)'
    },
    className: "p-3 mb-3"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "pin-location-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, null, t('summary.resiliationDate.addressInfo')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, adress, ", ", cpVille))), services.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border sz-border-1 px-3 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "medium",
    className: "m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    variant: "line",
    icon: "information-circle",
    className: "mr-3"
  }), t('summary.resiliationDate.associatedServices')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sumarry-services ml-3"
  }, services.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: service
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      tag: "span"
    }, service));
  }))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/Summary/index.jsx":
/*!************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/Summary/index.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Summary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _SummaryResiliationDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SummaryResiliationDate */ "./assets/js/pages/move-out/Stepper/Summary/SummaryResiliationDate.jsx");
/* harmony import */ var _SummaryCounter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SummaryCounter */ "./assets/js/pages/move-out/Stepper/Summary/SummaryCounter.jsx");
/* harmony import */ var _SummaryBilling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SummaryBilling */ "./assets/js/pages/move-out/Stepper/Summary/SummaryBilling.jsx");
/* harmony import */ var _machine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../machine */ "./assets/js/pages/move-out/machine.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
/* harmony import */ var _useTracking__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../useTracking */ "./assets/js/pages/move-out/useTracking.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function Summary() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
    t = _useTranslation.t;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MoveOutContext__WEBPACK_IMPORTED_MODULE_11__["MoveOutContext"]),
    initParcours = _React$useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 2),
    context = _initParcours[0].context,
    send = _initParcours[1];
  var isEfacture = context.isEfacture;
  var scroll = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_13__["default"])({
    behavior: 'instant'
  });
  Object(_useTracking__WEBPACK_IMPORTED_MODULE_14__["default"])(4);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    scroll(0);
  }, []);
  var ValidSummaryRequest = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(function (data) {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_12__["default"].post('/move-out/valid-summary', data);
  }, {
    onSuccess: function onSuccess() {
      send({
        type: 'VALIDATE'
      });
    },
    onError: function onError(error) {
      var message = error.data.message;
      var isKo = message === 'KO';
      send({
        type: 'VALIDATE',
        isKo: isKo
      });
    }
  });
  var getSummaryRequest = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])('getSummary', _machine__WEBPACK_IMPORTED_MODULE_10__["fetchSummary"], {
    refetchOnWindowFocus: false,
    initialData: {
      data: {
        summary: {
          dateResiliation: new Date()
        }
      }
    },
    onSuccess: function onSuccess(response) {
      send({
        type: 'UPDATE_SUMMARY',
        summary: response.data.summary
      });
    }
  });
  var backToBilling = function backToBilling() {
    send('BACK_BILLING');
  };
  var dataModel = {
    meterReading: yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]().oneOf([true], 'This field must be checked'),
    confirmData: yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]().oneOf([true], 'This field must be checked')
  };
  var initialValues = {
    meterReading: false,
    confirmData: true
  };
  if (isEfacture) {
    dataModel['confirmEFacture'] = yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]();
    initialValues['confirmEFacture'] = false;
  }
  var SummaryModel = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape(dataModel);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    validationSchema: SummaryModel,
    onSubmit: ValidSummaryRequest.mutate,
    enableReinitialize: true,
    validateOnMount: true
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
      isValid = _ref.isValid,
      resetForm = _ref.resetForm;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
      resetForm();
    }, [isEfacture]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      "data-cy": "moveout-summary",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SummaryResiliationDate__WEBPACK_IMPORTED_MODULE_7__["default"], getSummaryRequest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SummaryCounter__WEBPACK_IMPORTED_MODULE_8__["default"], getSummaryRequest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SummaryBilling__WEBPACK_IMPORTED_MODULE_9__["default"], getSummaryRequest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pb-5 px-1 px-md-5 mx-md-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row no-gutters mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "outlined",
      icon: "arrow-left",
      className: "col-12 col-md-4 col-lg-3 mt-3 mt-md-0 order-1 order-sm-0 bg-transparent",
      onClick: backToBilling
    }, t('summary.back_button')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "contained",
      className: "col-12 col-md-4 col-lg-3 ml-md-auto",
      type: "submit",
      isDisabled: !isValid,
      loader: ValidSummaryRequest.isLoading
    }, t('summary.send_button'))))));
  });
}

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/index.jsx":
/*!****************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/index.jsx ***!
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _ResiliationDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResiliationDate */ "./assets/js/pages/move-out/Stepper/ResiliationDate/index.jsx");
/* harmony import */ var _BillingInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BillingInfo */ "./assets/js/pages/move-out/Stepper/BillingInfo/index.jsx");
/* harmony import */ var _IdentityBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../IdentityBlock */ "./assets/js/pages/move-out/IdentityBlock.jsx");
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Summary */ "./assets/js/pages/move-out/Stepper/Summary/index.jsx");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Counter */ "./assets/js/pages/move-out/Stepper/Counter/index.jsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Stepper() {
  var isDesktop = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_11__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_3__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    initParcoursState = _initParcours[0];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeStep = _useState2[0],
    setActiveStep = _useState2[1];
  var scroll = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_8__["default"])({
    top: 0
  });
  var header = [t('stepper.header.step_1'), t('stepper.header.step_2'), t('stepper.header.step_3'), t('stepper.header.step_4')];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    switch (true) {
      case initParcoursState.matches('startParcours.dateSelection'):
        setActiveStep(0);
        break;
      case initParcoursState.matches('startParcours.statementsForm'):
        setActiveStep(1);
        break;
      case initParcoursState.matches('startParcours.billingInfo'):
        setActiveStep(2);
        break;
      case initParcoursState.matches('startParcours.summary'):
        setActiveStep(3);
        break;
      default:
        break;
    }
  }, [initParcoursState.value]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    scroll();
  }, [activeStep]);
  if (initParcoursState.matches('startParcours.checkContractEligibility')) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10___default.a, {
      count: 2
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"], {
    variant: "rounded",
    activeStep: activeStep,
    header: header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"].SzHeader, {
    className: isDesktop ? 'bg-white' : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, activeStep !== 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IdentityBlock__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"].SzStep, {
    className: "bg-transparent p-0",
    index: 0
  }, activeStep === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResiliationDate__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"].SzStep, {
    className: "bg-transparent p-0",
    index: 1
  }, activeStep === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    contextPath: _MoveOutContext__WEBPACK_IMPORTED_MODULE_3__["MoveOutContext"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"].SzStep, {
    className: "bg-transparent p-0",
    index: 2
  }, activeStep === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BillingInfo__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzStepper"].SzStep, {
    className: "bg-transparent p-0",
    index: 3
  }, activeStep === 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Summary__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/Validation.jsx":
/*!*************************************************!*\
  !*** ./assets/js/pages/move-out/Validation.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _useTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useTracking */ "./assets/js/pages/move-out/useTracking.js");




function Validation() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var onClickHome = function onClickHome() {
    window.location.assign('/');
  };
  Object(_useTracking__WEBPACK_IMPORTED_MODULE_3__["default"])('complete');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container bg-white my-3 my-md-5 px-md-5 py-md-4 px-2",
    "data-cy": "validation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-9 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "huge",
    tag: "h1",
    weight: "medium",
    className: "mb-4 d-none d-md-block"
  }, t('validation.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    tag: "h1",
    weight: "medium",
    className: "mb-4 text-left d-md-none"
  }, t('validation.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('validation.content_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('validation.content_2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('validation.content_3')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], null, t('validation.content_4')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    "data-cy": "validation-home",
    variant: "contained",
    onClick: onClickHome
  }, t('validation.btn_home'))))));
}

/***/ }),

/***/ "./assets/js/pages/move-out/index.tsx":
/*!********************************************!*\
  !*** ./assets/js/pages/move-out/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoveOut; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/es/index.js");
/* harmony import */ var _hooks_useShowBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useShowBackground */ "./assets/js/hooks/useShowBackground.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _machine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./machine */ "./assets/js/pages/move-out/machine.js");
/* harmony import */ var _Authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Authentication */ "./assets/js/pages/move-out/Authentication/index.jsx");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Error */ "./assets/js/pages/move-out/Error.jsx");
/* harmony import */ var _ContractSelection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContractSelection */ "./assets/js/pages/move-out/ContractSelection.jsx");
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Stepper */ "./assets/js/pages/move-out/Stepper/index.jsx");
/* harmony import */ var _Edito__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Edito */ "./assets/js/pages/move-out/Edito/index.jsx");
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Validation */ "./assets/js/pages/move-out/Validation.jsx");
/* harmony import */ var _img_move_out_stepper_background_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../img/move-out/stepper_background.jpg */ "./assets/img/move-out/stepper_background.jpg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function MoveOut() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoaded = _useState2[0],
    setIsLoaded = _useState2[1];
  var initParcours = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_1__["useMachine"])(_machine__WEBPACK_IMPORTED_MODULE_5__["initParcoursMachine"]);
  var _initParcours = _slicedToArray(initParcours, 1),
    initParcoursState = _initParcours[0];
  var errorCases = ['contractNotEligible', 'contractNotSelectionable'];
  var isErrorState = errorCases.includes(initParcoursState.value);
  var isValidationPage = initParcoursState.matches('startParcours.validationPage');
  var eligibleArray = ['contractNotEligible', 'contractAlreadyInitiated'];
  var showBackground = Object(_hooks_useShowBackground__WEBPACK_IMPORTED_MODULE_2__["default"])({
    initParcoursState: initParcoursState,
    eligibleArray: eligibleArray
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsLoaded(true);
  }, []);
  if (window.ssrRender || !isLoaded) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MoveOutContext__WEBPACK_IMPORTED_MODULE_4__["MoveOutProvider"], {
    initParcours: initParcours
  }, isValidationPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Validation__WEBPACK_IMPORTED_MODULE_11__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fullscreen: true,
    background: _img_move_out_stepper_background_jpg__WEBPACK_IMPORTED_MODULE_12__["default"],
    className: "container-moveout p-0",
    showBackground: showBackground,
    tag: "main"
  }, initParcoursState.matches('connected') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContractSelection__WEBPACK_IMPORTED_MODULE_8__["default"], null), initParcoursState.matches('edito') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Edito__WEBPACK_IMPORTED_MODULE_10__["default"], null), initParcoursState.matches('authentication') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Authentication__WEBPACK_IMPORTED_MODULE_6__["default"], null), isErrorState && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_7__["default"], null), initParcoursState.matches('startParcours') && !isValidationPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
}

/***/ }),

/***/ "./assets/js/pages/move-out/machine.js":
/*!*********************************************!*\
  !*** ./assets/js/pages/move-out/machine.js ***!
  \*********************************************/
/*! exports provided: fetchSummary, keysEligibility, initParcoursMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSummary", function() { return fetchSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keysEligibility", function() { return keysEligibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initParcoursMachine", function() { return initParcoursMachine; });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../analytics */ "./assets/js/analytics.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var fetchCheckEligibility = function fetchCheckEligibility(reference) {
  return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"].post('/move-out/select-contract', {
    'full-ref': reference
  });
};
var getContract = function getContract() {
  return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"].get('/move-out/get-contract');
};
var _ref = window.tsme_data || {},
  isConnected = _ref.isConnected,
  roles = _ref.roles;
var isCustomer = isConnected && 'customer' in roles;
var isAuthReference = isConnected && 'auth_reference' in roles;
var fetchCptDetail = function fetchCptDetail(reference) {
  return Object(_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"])('/move-out/cpt-details');
};
var fetchSummary = function fetchSummary() {
  return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"].get('move-out/get-summary');
};
var fetchTpms = function fetchTpms() {
  return Object(_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"])('/move-out/tpms-services');
};
var keysEligibility = {
  OK: 'NC',
  FETCH_SUCCESS: 'NC',
  KO_ELIGIBILITE: 'non éligible commune ou dossier',
  KO_ELIGIBILITE_API: 'non éligible commune ou dossier',
  KO_72H: 'non éligible commune ou dossier',
  KO_RESILIATION: 'non éligible déjà résilié',
  OK_NON_AUTO: 'non éligible commune ou dossier > formulaire'
};
var initParcoursMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__["createMachine"])({
  id: 'initParcours',
  initial: 'init',
  context: {
    connected: isConnected,
    isCustomer: isCustomer,
    isAuthReference: isAuthReference,
    reference: '',
    nbMeters: null,
    coordinates: {},
    details: [],
    statements: [],
    services: [],
    contractData: {},
    billingInfo: {},
    isEfacture: false,
    isKo: false,
    summary: {},
    currentDateResiliation: new Date(),
    isDateDifferent: false
  },
  states: {
    init: {
      always: [{
        target: 'connected',
        cond: 'isCustomer'
      }, {
        target: 'authentication',
        cond: 'isNotConnected'
      }, {
        target: 'authentication',
        cond: 'isAuthReference'
      }]
    },
    connected: {
      on: {
        OK: {
          target: 'startParcours.dateSelection',
          actions: ['setReferenceContext']
        },
        FETCH_SUCCESS: {
          target: 'startParcours.dateSelection',
          actions: ['setReferenceContext']
        },
        KO_ELIGIBILITE: {
          target: 'contractNotEligible'
        },
        KO_ELIGIBILITE_API: {
          target: 'contractNotEligible'
        },
        KO_72H: {
          target: 'contractNotEligible'
        },
        KO_RESILIATION: {
          target: 'contractNotSelectionable'
        },
        OK_NON_AUTO: {
          actions: ['setReferenceContext', 'toPathMoveOutNoAuto']
        }
      }
    },
    authentication: {
      initial: 'setReferenceForm',
      states: {
        setReferenceForm: {
          on: {
            SET_REF_SUCCESS: {
              target: 'credentials',
              actions: ['setReferenceContext', 'setCoordinatesContext']
            },
            CHECK_REF_FAIL: {
              target: 'notEligible',
              actions: ['setReferenceContext']
            }
          }
        },
        credentials: {
          on: {
            AUTH_SUCCESS: {
              target: 'completed'
            },
            UPDATE_REF: {
              target: 'setReferenceForm'
            },
            KO_CEL: {
              target: 'connection'
            },
            FAILURE: {
              target: 'notEligible'
            }
          }
        },
        connection: {
          on: {
            UPDATE_REF: {
              target: 'setReferenceForm'
            }
          }
        },
        completed: {
          type: 'final'
        },
        notEligible: {
          on: {
            UPDATE_REF: {
              target: 'setReferenceForm'
            }
          }
        }
      },
      onDone: 'startParcours'
    },
    startParcours: {
      initial: 'checkContractEligibility',
      states: {
        checkContractEligibility: {
          invoke: {
            id: 'checkEligibility',
            src: function src(context) {
              return /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(send) {
                  var _yield$fetchCheckElig, data, _getGAEvent, _getGAEvent2, event, trackingData, track, replacedTrackingData, keysNameExist;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return fetchCheckEligibility(context.reference);
                      case 3:
                        _yield$fetchCheckElig = _context.sent;
                        data = _yield$fetchCheckElig.data;
                        _getGAEvent = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_3__["getGAEvent"])('MOVEOUT_8'), _getGAEvent2 = _slicedToArray(_getGAEvent, 2), event = _getGAEvent2[0], trackingData = _getGAEvent2[1];
                        track = _analytics__WEBPACK_IMPORTED_MODULE_4__["default"].track;
                        replacedTrackingData = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_3__["replaceTrackingValues"])(keysEligibility[data.message], trackingData);
                        if (!['OK', 'FETCH_SUCCESS'].includes(data.message)) {
                          track(event, replacedTrackingData);
                        }
                        keysNameExist = Object.keys(keysEligibility).includes(data.message);
                        send({
                          type: keysNameExist ? data.message : 'KO_ELIGIBILITE',
                          nbMeters: data.message === 'OK' ? data.nMeters : null
                        });
                        _context.next = 15;
                        break;
                      case 13:
                        _context.prev = 13;
                        _context.t0 = _context["catch"](0);
                      case 15:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, null, [[0, 13]]);
                }));
                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }();
            }
          },
          on: {
            OK: {
              target: 'dateSelection',
              actions: ['setNbMetersContext']
            },
            KO_ELIGIBILITE: {
              target: '#initParcours.contractNotEligible'
            },
            KO_ELIGIBILITE_API: {
              target: '#initParcours.contractNotEligible'
            },
            KO_72H: {
              target: '#initParcours.contractNotEligible'
            },
            KO_RESILIATION: {
              target: '#initParcours.contractNotSelectionable'
            },
            OK_NON_AUTO: {
              actions: ['toPathMoveOutNoAuto']
            }
          }
        },
        dateSelection: {
          invoke: [{
            id: 'getContract',
            src: function src(context, event) {
              return /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(send) {
                  var _yield$getContract, data;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!(event.type !== 'BACK_DATE_SELECTION')) {
                          _context2.next = 11;
                          break;
                        }
                        _context2.prev = 1;
                        _context2.next = 4;
                        return getContract();
                      case 4:
                        _yield$getContract = _context2.sent;
                        data = _yield$getContract.data;
                        if (data.message !== 'OK') {
                          // A DEMANDER
                        } else {
                          send({
                            type: 'VALID_GET_CONTRACT',
                            contractData: data.contract
                          });
                        }
                        _context2.next = 11;
                        break;
                      case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2["catch"](1);
                      case 11:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[1, 9]]);
                }));
                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }();
            }
          }, {
            id: 'fetchSummary',
            src: function src(context, event) {
              return /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(send) {
                  var _yield$fetchSummary, data, dateResiliation, summaryDate, todayDate, daysAgo, isBeforeOrEqual, isAfterOrEqual, isValidDate, currentDateResiliation;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(event.type !== 'BACK_DATE_SELECTION')) {
                          _context3.next = 11;
                          break;
                        }
                        _context3.prev = 1;
                        _context3.next = 4;
                        return fetchSummary();
                      case 4:
                        _yield$fetchSummary = _context3.sent;
                        data = _yield$fetchSummary.data;
                        if (data.message === 'OK') {
                          dateResiliation = data.summary.dateResiliation;
                          summaryDate = new Date(dateResiliation);
                          todayDate = new Date();
                          daysAgo = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["sub"])(new Date(), {
                            days: 21
                          });
                          isBeforeOrEqual = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isBefore"])(summaryDate, todayDate) || Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(todayDate, summaryDate);
                          isAfterOrEqual = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isAfter"])(summaryDate, daysAgo) || Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(daysAgo, summaryDate);
                          isValidDate = isBeforeOrEqual && isAfterOrEqual;
                          currentDateResiliation = isValidDate ? summaryDate : todayDate;
                          send({
                            type: 'DEFAULT_RESILIATION_DATE',
                            isValidDate: isValidDate,
                            summary: data.summary,
                            currentDateResiliation: currentDateResiliation
                          });
                        } else {
                          send(data.message);
                        }
                        _context3.next = 11;
                        break;
                      case 9:
                        _context3.prev = 9;
                        _context3.t0 = _context3["catch"](1);
                      case 11:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3, null, [[1, 9]]);
                }));
                return function (_x3) {
                  return _ref4.apply(this, arguments);
                };
              }();
            }
          }],
          on: {
            VALID_GET_CONTRACT: {
              actions: ['setContractData']
            },
            COMPLETE_DATE: {
              target: 'getStatementsDetail',
              actions: ['setCurrentDateResiliation', 'setIsDifferentDate']
            },
            GO_TO_SUMMARY: {
              target: 'summary',
              actions: ['setCurrentDateResiliation']
            },
            DEFAULT_RESILIATION_DATE: {
              actions: ['setCurrentDateResiliation', 'setSummary', 'setIsValidDate']
            }
          }
        },
        getStatementsDetail: {
          invoke: {
            id: 'fetchCpt',
            src: function src(context) {
              return /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(send) {
                  var _yield$fetchCptDetail, data, lastIsUpdating, lastIsValid, statements;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return fetchCptDetail();
                      case 2:
                        _yield$fetchCptDetail = _context4.sent;
                        data = _yield$fetchCptDetail.data;
                        lastIsUpdating = null;
                        lastIsValid = null;
                        statements = data.details.map(function (detail, index) {
                          var isTR = detail.indexTR > 0;
                          var summary = context.summary,
                            currentDateResiliation = context.currentDateResiliation;
                          var dateSummaryEqualCurrentDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(currentDateResiliation, new Date(summary === null || summary === void 0 ? void 0 : summary.dateResiliation));
                          var summaryIndex = '';
                          if (summary["matriculeCompteur1"] === detail.matricule) {
                            summaryIndex = summary["index1"];
                          } else if (summary["matriculeCompteur2"] === detail.matricule) {
                            summaryIndex = summary["index2"];
                          }
                          var isDataSeSummary = !isTR && dateSummaryEqualCurrentDate && summaryIndex > 0;
                          var isUpdating = !isTR && index === 0 && isDataSeSummary ? false : !isTR && index === 0;
                          var isValid = isDataSeSummary ? true : isTR;
                          if (isUpdating === false && isValid === false && lastIsUpdating === false && lastIsValid === true) {
                            isUpdating = true;
                          }
                          lastIsUpdating = isUpdating;
                          lastIsValid = isValid;
                          return _objectSpread({
                            isTR: isTR,
                            isValid: isValid,
                            isTRUpdated: false,
                            isCounterUpdated: false,
                            isUploadMandatory: false,
                            isUpdating: isUpdating,
                            summaryIndex: summaryIndex
                          }, detail);
                        });
                        send({
                          type: 'FETCH_DONE',
                          details: data.details,
                          statements: statements
                        });
                      case 8:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x4) {
                  return _ref5.apply(this, arguments);
                };
              }();
            }
          },
          on: {
            FETCH_DONE: {
              target: 'statementsForm',
              actions: ['setDetailsContext', 'setStatementsContext']
            }
          }
        },
        statementsForm: {
          on: {
            GO_BACK: {
              target: 'dateSelection'
            },
            UPDATE_COUNTER: {
              actions: ['setStatementsContext']
            },
            GO_TO_SUMMARY: {
              target: 'summary'
            },
            VALIDATE: {
              target: 'billingInfo'
            }
          }
        },
        billingInfo: {
          on: {
            COMPLETE_BILL: {
              target: 'summary',
              actions: ['setBillingInfos']
            },
            GO_TO_SUMMARY: {
              target: 'summary',
              actions: ['setBillingInfos']
            },
            BACK: {
              target: 'statementsForm'
            }
          }
        },
        summary: {
          invoke: [{
            id: 'fetchTpms',
            src: function src(context) {
              return /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(send) {
                  var _yield$fetchTpms, data, services, isEfacture;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return fetchTpms();
                      case 2:
                        _yield$fetchTpms = _context5.sent;
                        data = _yield$fetchTpms.data;
                        services = data.services;
                        isEfacture = services.some(function (service) {
                          return service === 'e-facture-eligible';
                        });
                        send({
                          type: 'FETCH_DONE',
                          services: services,
                          isEfacture: isEfacture
                        });
                      case 7:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x5) {
                  return _ref6.apply(this, arguments);
                };
              }();
            }
          }],
          on: {
            UPDATE_SUMMARY: {
              actions: ['setSummary']
            },
            FETCH_DONE: {
              actions: ['setServices', 'setIsEFacture']
            },
            BACK_STATEMENT: {
              target: 'statementsForm'
            },
            BACK_BILLING: {
              target: 'billingInfo'
            },
            BACK_DATE_SELECTION: {
              target: 'dateSelection'
            },
            VALIDATE: {
              target: 'validationPage',
              actions: ['setIsKoMessage']
            }
          }
        },
        validationPage: {
          type: 'final'
        }
      }
    },
    contractNotEligible: {
      type: 'final'
    },
    contractNotSelectionable: {
      type: 'final'
    },
    contractNoAuto: {
      type: 'final'
    }
  }
}, {
  actions: {
    setReferenceContext: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      reference: function reference() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return args[1].reference;
      }
    }),
    setCoordinatesContext: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      coordinates: function coordinates() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return args[1].coordinates;
      }
    }),
    setNbMetersContext: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      nbMeters: function nbMeters() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        return args[1].nbMeters;
      }
    }),
    setStatementsContext: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      statements: function statements() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        return args[1].statements;
      }
    }),
    setDetailsContext: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      details: function details() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }
        return args[1].details;
      }
    }),
    setBillingInfos: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      billingInfo: function billingInfo() {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        return args[1].billingInfo;
      }
    }),
    setSummary: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      summary: function summary(context, event) {
        return event.summary;
      }
    }),
    setServices: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      services: function services() {
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }
        return args[1].services;
      }
    }),
    setIsEFacture: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      isEfacture: function isEfacture() {
        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        return args[1].isEfacture;
      }
    }),
    setCurrentDateResiliation: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      currentDateResiliation: function currentDateResiliation(context, event) {
        return event.currentDateResiliation;
      }
    }),
    setIsValidDate: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      isValidDate: function isValidDate(context, event) {
        return event.isValidDate;
      }
    }),
    setContractData: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      contractData: function contractData(context, event) {
        return event.contractData;
      }
    }),
    setIsKoMessage: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      isKo: function isKo() {
        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          args[_key9] = arguments[_key9];
        }
        return args[1].isKo;
      }
    }),
    setIsDifferentDate: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      isDateDifferent: function isDateDifferent() {
        for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          args[_key10] = arguments[_key10];
        }
        return args[1].isDateDifferent;
      }
    }),
    toPathMoveOutNoAuto: function toPathMoveOutNoAuto(_ref7) {
      var reference = _ref7.reference;
      var codeSystem = reference.substring(0, 2);
      var currentRef = reference.substring(2);
      window.location.href = "/mon-compte-en-ligne/redirect/".concat(codeSystem, "-").concat(currentRef, "?redirect=/mon-compte-en-ligne/je-demenage");
    }
  },
  guards: {
    isConnected: function isConnected(context) {
      return context.connected;
    },
    isNotConnected: function isNotConnected(context) {
      return !context.connected;
    },
    isCustomer: function isCustomer(context) {
      return context.isCustomer;
    },
    isAuthReference: function isAuthReference(context) {
      return context.isAuthReference;
    }
  }
});

/***/ }),

/***/ "./assets/js/pages/move-out/useTracking.js":
/*!*************************************************!*\
  !*** ./assets/js/pages/move-out/useTracking.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTracking; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MoveOutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoveOutContext */ "./assets/js/pages/move-out/MoveOutContext.jsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useGA/tags/moveout */ "./assets/js/hooks/useGA/tags/moveout.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function useTracking(sz_funnel_step) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MoveOutContext__WEBPACK_IMPORTED_MODULE_1__["MoveOutContext"]),
    initParcours = _useContext.initParcours;
  var _initParcours = _slicedToArray(initParcours, 1),
    context = _initParcours[0].context;
  var _context$summary = context.summary,
    indexTR1 = _context$summary.indexTR1,
    indexTR2 = _context$summary.indexTR2;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var hasIndexTR1 = indexTR1 && indexTR1 !== null;
    var hasIndexTR2 = indexTR2 && indexTR2 !== null;
    var isTR = hasIndexTR1 || hasIndexTR2;
    var index = _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_3__["SZ_FUNNEL_VARIANT"].index,
      telereleve = _hooks_useGA_tags_moveout__WEBPACK_IMPORTED_MODULE_3__["SZ_FUNNEL_VARIANT"].telereleve;
    var sz_funnel_variant = isTR ? telereleve : index;
    track('MOVEOUT_2', {
      sz_funnel_step: sz_funnel_step,
      sz_funnel_variant: sz_funnel_variant
    });
  }, []);
}

/***/ })

}]);