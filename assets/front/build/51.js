(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./assets/img/cross-circle.svg":
/*!*************************************!*\
  !*** ./assets/img/cross-circle.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/cross-circle.svg");

/***/ }),

/***/ "./assets/img/icons/analytics-board-graph-line.svg":
/*!*********************************************************!*\
  !*** ./assets/img/icons/analytics-board-graph-line.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/analytics-board-graph-line.svg");

/***/ }),

/***/ "./assets/img/icons/person-line.svg":
/*!******************************************!*\
  !*** ./assets/img/icons/person-line.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/person-line.svg");

/***/ }),

/***/ "./assets/img/icons/water-protection-drop-hold-line.svg":
/*!**************************************************************!*\
  !*** ./assets/img/icons/water-protection-drop-hold-line.svg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/water-protection-drop-hold-line.svg");

/***/ }),

/***/ "./assets/js/components/ConnectCoachForm/index.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/components/ConnectCoachForm/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");







var OnConnectCoachForm = function OnConnectCoachForm(_ref) {
  var initialValues = _ref.initialValues,
    validationSchema = _ref.validationSchema,
    onSubmit = _ref.onSubmit,
    nextButton = _ref.nextButton,
    previousButton = _ref.previousButton,
    defaultPeopleCount = _ref.defaultPeopleCount,
    peopleCountOptions = _ref.peopleCountOptions,
    displayConsent = _ref.displayConsent,
    canUnsubscribe = _ref.canUnsubscribe,
    onConnectUnsubscribeUrl = _ref.onConnectUnsubscribeUrl,
    isPrivacyPolicy = _ref.isPrivacyPolicy,
    privacyPolicyUrl = _ref.privacyPolicyUrl;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    enableReinitialize: true
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      handleChange = _ref2.handleChange,
      setFieldValue = _ref2.setFieldValue,
      values = _ref2.values,
      errors = _ref2.errors,
      touched = _ref2.touched;
    var onChangeHousingType = function onChangeHousingType(e) {
      setFieldValue('housingType', e.target.value);
    };
    var onChangePeopleCount = function onChangePeopleCount(selectedOption) {
      setFieldValue('peopleCount', selectedOption.label);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "onConnectCoach",
      onSubmit: handleSubmit,
      className: "on-connect-coach-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      className: "mb-2"
    }, t('personalInfos.form.on-connect.people_count_label')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-7 px-0 my-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzSelect"], {
      name: "peopleCount",
      id: "peopleCount",
      placeholder: t('personalInfos.form.on-connect.people_count_placeholder'),
      defaultValue: defaultPeopleCount,
      options: peopleCountOptions,
      value: values.peopleCount || '',
      onChange: onChangePeopleCount,
      className: "mb-2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_3__["default"], {
      field: "peopleCount",
      customDisplay: touched.peopleCount && errors.peopleCount
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      className: "mb-2"
    }, t('personalInfos.form.on-connect.housing_type')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzRadio"], {
      id: "housingTypeHouse",
      name: "housingType",
      label: t('personalInfos.form.on-connect.type_house'),
      value: "M",
      checked: 'M' === values.housingType,
      onChange: onChangeHousingType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzRadio"], {
      className: "ml-3",
      id: "housingTypeApartment",
      name: "housingType",
      label: t('personalInfos.form.on-connect.type_apartment'),
      value: "A",
      checked: 'A' === values.housingType,
      onChange: onChangeHousingType
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_3__["default"], {
      field: "housingType",
      customDisplay: touched.housingType && errors.housingType
    }))), displayConsent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-3 px-0 border-top border-1 border-gray-100 pt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzCheckbox"], {
      id: "consentGiven",
      name: "consentGiven",
      label: t('personalInfos.form.on-connect.consent'),
      type: "checkbox",
      checked: values.consentGiven || false,
      onChange: handleChange
    }), errors.consentGiven && touched.consentGiven ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-consentGiven",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, t(errors.consentGiven))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_3__["default"], {
      field: "consentGiven"
    })), canUnsubscribe && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-3 px-0 border-top border-1 border-gray-100 pt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
      i18nKey: 'personalInfos.form.on-connect.unsubscribe.link',
      components: {
        redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: "on-connect-unusubscribe-btn",
          decorate: true,
          to: onConnectUnsubscribeUrl || '#'
        })
      }
    }))), isPrivacyPolicy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M",
      className: "mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
      i18nKey: 'loginReset.login.step4.form.mobilePhone.privacy_policy',
      components: {
        redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "font-family-medium",
          decorate: true,
          target: "_blank",
          to: privacyPolicyUrl
        })
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  });
};
/* harmony default export */ __webpack_exports__["default"] = (OnConnectCoachForm);

/***/ }),

/***/ "./assets/js/components/FormButtons/index.tsx":
/*!****************************************************!*\
  !*** ./assets/js/components/FormButtons/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function FormButtons(_a) {
  var _a$marginTop = _a.marginTop,
    marginTop = _a$marginTop === void 0 ? true : _a$marginTop,
    buttonsProps = __rest(_a, ["marginTop"]);
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _b = buttonsProps.previous || {},
    _b$label = _b.label,
    prevLabel = _b$label === void 0 ? t('go_back') : _b$label,
    _b$enabled = _b.enabled,
    prevEnabled = _b$enabled === void 0 ? false : _b$enabled,
    _b$prevArrow = _b.prevArrow,
    prevArrow = _b$prevArrow === void 0 ? true : _b$prevArrow,
    defaultPrev = __rest(_b, ["label", "enabled", "prevArrow"]);
  var _c = buttonsProps.next || {},
    _c$label = _c.label,
    nextLabel = _c$label === void 0 ? t('validate') : _c$label,
    _c$arrow = _c.arrow,
    arrow = _c$arrow === void 0 ? false : _c$arrow,
    _c$enabled = _c.enabled,
    nextEnabled = _c$enabled === void 0 ? true : _c$enabled,
    defaultNext = __rest(_c, ["label", "arrow", "enabled"]);
  var leftArrow = 'keyboard-arrow-left';
  var rightArrow = 'keyboard-arrow-right';
  var prevIcon = (defaultPrev === null || defaultPrev === void 0 ? void 0 : defaultPrev.alignIcon) === 'right' ? rightArrow : leftArrow;
  var previous = Object.assign({
    id: 'previousButton',
    variant: 'text',
    align: 'left',
    icon: prevArrow ? prevIcon : undefined,
    alignIcon: 'left',
    onClick: function onClick() {},
    loader: false,
    disabled: defaultPrev.loader || false
  }, defaultPrev);
  var next = Object.assign({
    id: 'nextButton',
    variant: 'contained',
    align: 'left',
    icon: arrow ? rightArrow : undefined,
    onClick: function onClick() {},
    disabled: defaultNext.loader || false,
    type: 'submit'
  }, defaultNext);
  var buttonClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('row', {
    'mt-3 mt-lg-4': marginTop
  });
  var previousClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('col-12 order-lg-0', {
    'col-lg-6': nextEnabled,
    'text-lg-right': 'right' === previous.align
  });
  var nextClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('col-12 mb-2 mb-lg-0 order-lg-1', {
    'col-lg-6': prevEnabled,
    'text-lg-right': 'right' === next.align
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: buttonClassnames
  }, nextEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: nextClassnames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], Object.assign({
    id: next.id,
    border: "soft",
    alignIcon: "right",
    isDisabled: next.disabled
  }, next, {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
    }
  }), nextLabel)), prevEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: previousClassnames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], Object.assign({
    id: previous.id,
    border: "soft",
    className: "pl-0",
    isDisabled: previous.disabled
  }, previous), prevLabel)));
}

/***/ }),

/***/ "./assets/js/form/FormError.tsx":
/*!**************************************!*\
  !*** ./assets/js/form/FormError.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




function FormError(_ref) {
  var field = _ref.field,
    _ref$messageAccess = _ref.messageAccess,
    messageAccess = _ref$messageAccess === void 0 ? '' : _ref$messageAccess,
    customDisplay = _ref.customDisplay,
    className = _ref.className;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])(),
    errors = _useFormikContext.errors,
    values = _useFormikContext.values,
    touched = _useFormikContext.touched;
  var condition = values[field] && errors[field] && touched[field];
  if (customDisplay || condition) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-".concat(field),
      role: "alert",
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, t(errors[field])), messageAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, messageAccess));
  }
  return null;
}

/***/ }),

/***/ "./assets/js/pages/consumption-history/ConnectCoachLanding.tsx":
/*!*********************************************************************!*\
  !*** ./assets/js/pages/consumption-history/ConnectCoachLanding.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConnectCoachLanding; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_Bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/Bubble */ "./assets/js/components/Bubble/index.jsx");
/* harmony import */ var _app_components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _connect_coach_landing_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect-coach-landing.scss */ "./assets/js/pages/consumption-history/connect-coach-landing.scss");
/* harmony import */ var _connect_coach_landing_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_connect_coach_landing_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _img_icons_analytics_board_graph_line_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @img/icons/analytics-board-graph-line.svg */ "./assets/img/icons/analytics-board-graph-line.svg");
/* harmony import */ var _img_icons_person_line_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @img/icons/person-line.svg */ "./assets/img/icons/person-line.svg");
/* harmony import */ var _img_icons_water_protection_drop_hold_line_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @img/icons/water-protection-drop-hold-line.svg */ "./assets/img/icons/water-protection-drop-hold-line.svg");
/* harmony import */ var _app_components_ConnectCoachForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/ConnectCoachForm */ "./assets/js/components/ConnectCoachForm/index.tsx");
/* harmony import */ var _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/models/personalInfos */ "./assets/js/models/personalInfos/index.ts");
/* harmony import */ var _app_pages_personal_infos_hooks_usePostCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/pages/personal-infos/hooks/usePostCustomerAdditionalInfos */ "./assets/js/pages/personal-infos/hooks/usePostCustomerAdditionalInfos.ts");
/* harmony import */ var _app_pages_personal_infos_modals_UpdateStatus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/pages/personal-infos/modals/UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _app_pages_personal_infos_hooks_useGetServicesStatus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/pages/personal-infos/hooks/useGetServicesStatus */ "./assets/js/pages/personal-infos/hooks/useGetServicesStatus.ts");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_18__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















function ConnectCoachLanding() {
  var _a, _b, _c, _d;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    hideCloseModal = _useState2[0],
    setHideCloseModal = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showModal = _useState4[0],
    setisShowModal = _useState4[1];
  var isMobile = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_5__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["useHistory"])();
  var advicesData = [{
    imgSrc: _img_icons_analytics_board_graph_line_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    text: t('on-connect-landing.advice-1')
  }, {
    imgSrc: _img_icons_person_line_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    text: t('on-connect-landing.advice-2')
  }, {
    imgSrc: _img_icons_water_protection_drop_hold_line_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
    text: t('on-connect-landing.advice-3')
  }];
  var _useGetServicesStatus = Object(_app_pages_personal_infos_hooks_useGetServicesStatus__WEBPACK_IMPORTED_MODULE_17__["default"])({}, '?services[]=smartcoach'),
    dataServicesStatus = _useGetServicesStatus.data,
    isFetchedServicesStatus = _useGetServicesStatus.isFetched,
    isLoadingServicesStatus = _useGetServicesStatus.isLoading,
    isErrorServicesStatus = _useGetServicesStatus.isError;
  var statusSmartCoach = ((_b = (_a = dataServicesStatus === null || dataServicesStatus === void 0 ? void 0 : dataServicesStatus.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.smartcoach) || '';
  var isEligibleSmartCoach = _app_constants__WEBPACK_IMPORTED_MODULE_15__["SERVICES_STATUS"].ELIGIBLE === statusSmartCoach;
  if (isErrorServicesStatus || isFetchedServicesStatus && !isEligibleSmartCoach) {
    history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_15__["ROUTES"].ACCOUNT_CONSUMPTION_TR));
  }
  var _usePostCustomerAddit = Object(_app_pages_personal_infos_hooks_usePostCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_12__["default"])('postSmartCoachAddInfoHistoConso'),
    mutate = _usePostCustomerAddit.mutate,
    isLoading = _usePostCustomerAddit.isLoading,
    isError = _usePostCustomerAddit.isError,
    isSuccess = _usePostCustomerAddit.isSuccess;
  var onSubmit = function onSubmit(values) {
    var updatedValues = Object.assign(Object.assign({}, values), {
      useCommunityHotWater: '1'
    });
    mutate(updatedValues);
  };
  var initialValues = {
    peopleCount: '',
    housingType: '',
    consentGiven: false
  };
  var peopleCountOptions = [{
    label: '1',
    value: '1'
  }, {
    label: '2',
    value: '2'
  }, {
    label: '3',
    value: '3'
  }, {
    label: '4',
    value: '4'
  }, {
    label: '5',
    value: '5'
  }, {
    label: '6',
    value: '6'
  }, {
    label: '7',
    value: '7'
  }, {
    label: '8',
    value: '8'
  }, {
    label: '9',
    value: '9'
  }, {
    label: '10+',
    value: '10+'
  }];
  var _ref = (_d = (_c = window.tsme_data) === null || _c === void 0 ? void 0 : _c.footer) === null || _d === void 0 ? void 0 : _d.links_bottom,
    privacy_policy = _ref.privacy_policy;
  var isIntranet = window.tsme_data.isIntranet;
  var nextButton = {
    label: t('on-connect-landing.subscribe_form.btn_label'),
    align: 'right',
    loader: isLoading,
    disabled: isIntranet ? isIntranet : isLoading
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isSuccess || isError) {
      setisShowModal(true);
    }
  }, [isSuccess, isError]);
  if (isLoadingServicesStatus) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzCard"], {
      className: "col-12 my-5 px-0 px-md-4 bg-white align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_18___default.a, {
      count: 1,
      width: '100%',
      height: 500
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullscreen: true,
    tag: "main",
    className: "bg-white px-0 py-lg-0 overflow-hidden",
    minHeight: "initial",
    id: "connect-coach-landing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "connect-coach-landing-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "connect-coach-circle-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle bg-blue-03"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "sm",
    color: "blue-default",
    position: "39"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tag: "div",
    className: "d-flex flex-column flex-lg-row py-0",
    minHeight: "initial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 px-0 new-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H1",
    weight: "bold",
    size: isMobile ? 'L' : 'XL',
    className: "mb-4 mb-lg-5"
  }, t('on-connect-landing.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3 mb-lg-4",
    tag: "h2"
  }, t('on-connect-landing.subtitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "advices"
  }, advicesData.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AdviceItem, Object.assign({}, item, {
      key: index,
      dataCy: "advice-item-".concat(index + 1)
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-5 px-0 pl-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-gray-100 rounded-3 px-3 py-4 p-lg-5 mt-5 mt-lg-0",
    "data-cy": "connect-coach-subscribe-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H3",
    size: "M",
    weight: "medium"
  }, t('on-connect-landing.subscribe_form.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_ConnectCoachForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    initialValues: initialValues,
    validationSchema: _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_11__["onConnectCoachSchemaHistoConso"],
    onSubmit: onSubmit,
    nextButton: nextButton,
    peopleCountOptions: peopleCountOptions,
    defaultPeopleCount: {
      label: '',
      value: ''
    },
    displayConsent: true,
    canUnsubscribe: false,
    isPrivacyPolicy: true,
    privacyPolicyUrl: privacy_policy === null || privacy_policy === void 0 ? void 0 : privacy_policy.link
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzModal"], {
    show: showModal,
    size: "lg",
    backdrop: true,
    centered: true,
    scrollable: true,
    border: "smooth",
    fullscreen: "md",
    title: "",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_16__["default"])('modal-consent sds-legacy-layout', {
      'hide-btn-close': hideCloseModal
    }),
    id: "connect-coach-subscribe-".concat(isSuccess ? 'success' : 'error')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_personal_infos_modals_UpdateStatus__WEBPACK_IMPORTED_MODULE_13__["UpdateStatus"], {
    type: "on-connect",
    sourceType: "histoConso",
    success: isSuccess,
    toRedirect: isSuccess ? Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_15__["ROUTES"].ACCOUNT_CONSUMPTION_TR) : false,
    onHideCloseModal: isSuccess ? setHideCloseModal : false,
    setShowModal: setisShowModal
  }))));
}
var AdviceItem = function AdviceItem(props) {
  var _ref2 = props || '',
    imgSrc = _ref2.imgSrc,
    text = _ref2.text,
    dataCy = _ref2.dataCy;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "on-connect-advice-item d-flex flex-row align-items-center mb-3 mb-lg-4",
    "data-cy": dataCy
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgSrc,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    size: "XL",
    className: "ml-3 mb-0 text-dark"
  }, text));
};

/***/ }),

/***/ "./assets/js/pages/consumption-history/connect-coach-landing.scss":
/*!************************************************************************!*\
  !*** ./assets/js/pages/consumption-history/connect-coach-landing.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);