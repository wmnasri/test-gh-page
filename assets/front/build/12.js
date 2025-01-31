(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/pages/personal-infos/hooks/useGetCustomerAdditionalInfos.ts":
/*!*******************************************************************************!*\
  !*** ./assets/js/pages/personal-infos/hooks/useGetCustomerAdditionalInfos.ts ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetCustomerAdditionalInfos; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




function useGetCustomerAdditionalInfos(_ref) {
  var shouldRedirect = _ref.shouldRedirect,
    withToken = _ref.withToken;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])('GetCustomerAdditionalInfos', function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].SMARTCOACH.CUSTOMER_ADDITIONAL_INFOS, {
      params: {
        token: withToken !== null && withToken !== void 0 ? withToken : false
      }
    });
  }, {
    onSettled: function onSettled(data, error) {
      var _a;
      var response = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.content) || {};
      var isErrorAddInfo = !!error;
      var to = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
        modal: 'on-connect'
      });
      if (shouldRedirect) {
        history.push(to, Object.assign({
          isErrorAddInfo: isErrorAddInfo
        }, response));
      }
    }
  });
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/modals/OnConnectCoachContent.tsx":
/*!*************************************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/OnConnectCoachContent.tsx ***!
  \*************************************************************************/
/*! exports provided: OnConnectCoachContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnConnectCoachContent", function() { return OnConnectCoachContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _UpdateStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UpdateStatus */ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/models/personalInfos */ "./assets/js/models/personalInfos/index.ts");
/* harmony import */ var _app_pages_personal_infos_hooks_usePostCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/personal-infos/hooks/usePostCustomerAdditionalInfos */ "./assets/js/pages/personal-infos/hooks/usePostCustomerAdditionalInfos.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_useGetCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useGetCustomerAdditionalInfos */ "./assets/js/pages/personal-infos/hooks/useGetCustomerAdditionalInfos.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");














var OnConnectCoachContent = function OnConnectCoachContent(_ref) {
  var handleClose = _ref.handleClose,
    _ref$source = _ref.source,
    source = _ref$source === void 0 ? 'infoPerso' : _ref$source,
    onHideCloseModal = _ref.onHideCloseModal;
  var _a, _b, _c;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_12__["useGA"])(),
    track = _useGA.track;
  var SOURCE_HISTO_CONSO = 'histoConso';
  var _ref2 = (_b = (_a = window.tsme_data) === null || _a === void 0 ? void 0 : _a.footer) === null || _b === void 0 ? void 0 : _b.links_bottom,
    privacy_policy = _ref2.privacy_policy;
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useLocation"])(),
    stateLocation = _useLocation.state;
  var _useGetCustomerAdditi = Object(_hooks_useGetCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_11__["default"])({
      shouldRedirect: false,
      withToken: true
    }),
    mutateAddInfo = _useGetCustomerAdditi.mutate,
    dataAddInfos = _useGetCustomerAdditi.data,
    isErrorGetAddInfo = _useGetCustomerAdditi.isError,
    isSuccessGetAddInfo = _useGetCustomerAdditi.isSuccess;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!stateLocation && source !== SOURCE_HISTO_CONSO) {
      mutateAddInfo();
    }
  }, []);
  var _ref3 = stateLocation || Object.assign(Object.assign({}, ((_c = dataAddInfos === null || dataAddInfos === void 0 ? void 0 : dataAddInfos.data) === null || _c === void 0 ? void 0 : _c.content) || {}), {
      isErrorAddInfo: isErrorGetAddInfo
    }),
    peopleCount = _ref3.peopleCount,
    consentGiven = _ref3.consentGiven,
    housingType = _ref3.housingType,
    isErrorAddInfo = _ref3.isErrorAddInfo;
  var queriesNameApiAddInfo = {
    infoPerso: 'postSmartCoachAddInfoInfoPerso',
    histoConso: 'postSmartCoachAddInfoHistoConso'
  };
  var _usePostCustomerAddit = Object(_app_pages_personal_infos_hooks_usePostCustomerAdditionalInfos__WEBPACK_IMPORTED_MODULE_9__["default"])(queriesNameApiAddInfo[source]),
    mutate = _usePostCustomerAddit.mutate,
    isLoading = _usePostCustomerAddit.isLoading,
    isError = _usePostCustomerAddit.isError,
    isSuccess = _usePostCustomerAddit.isSuccess;
  var isIntranet = window.tsme_data.isIntranet;
  var nextButton = {
    label: t('save'),
    align: 'right',
    loader: isLoading,
    disabled: isIntranet ? isIntranet : isLoading
  };
  var previousButton = {
    enabled: true,
    label: t('cancel'),
    align: 'left',
    onClick: handleClose
  };
  var onSubmit = function onSubmit(values) {
    track('PERSONAL_INFO_7');
    var updatedValues = Object.assign(Object.assign({}, values), {
      useCommunityHotWater: '1'
    });
    mutate(updatedValues);
  };
  var initialValues = {
    peopleCount: peopleCount || '',
    housingType: housingType,
    consentGiven: SOURCE_HISTO_CONSO ? consentGiven : consentGiven === true
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
  var defaultPeopleCount = peopleCount ? peopleCountOptions.find(function (_ref4) {
    var value = _ref4.value;
    return value === peopleCount;
  }) : {};
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isSuccess && source === SOURCE_HISTO_CONSO) {
      var data = {
        token: true
      };
      mutateAddInfo(data);
    }
  }, [isSuccess]);
  if (isSuccess || isError || isErrorAddInfo) {
    var toRedirect = source === SOURCE_HISTO_CONSO ? Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_13__["ROUTES"].ACCOUNT_CONSUMPTION_TR) : Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_13__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateStatus__WEBPACK_IMPORTED_MODULE_5__["UpdateStatus"], {
      type: "on-connect",
      sourceType: source === SOURCE_HISTO_CONSO ? SOURCE_HISTO_CONSO : 'infoPerso',
      success: isSuccess,
      toRedirect: toRedirect,
      onHideCloseModal: onHideCloseModal
    });
  }
  var title = source === SOURCE_HISTO_CONSO ? t('histoConso.on-connect.title') : t('personalInfos.form.on-connect.title');
  var isPrivacyPolicy = source === SOURCE_HISTO_CONSO;
  var canUnsubscribe = source !== SOURCE_HISTO_CONSO;
  var onConnectUnsubscribeUrl = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_13__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS, {
    modal: 'on-connect-desactivation'
  });
  var validationSchema = source === SOURCE_HISTO_CONSO ? _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_8__["onConnectCoachSchemaHistoConso"] : _app_models_personalInfos__WEBPACK_IMPORTED_MODULE_8__["onConnectCoachSchema"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: validationSchema,
    key: isSuccessGetAddInfo ? 'reloadOnConnectCoach' : 'OnConnectCoach',
    onSubmit: onSubmit,
    enableReinitialize: true
  }, function (_ref5) {
    var handleSubmit = _ref5.handleSubmit,
      handleChange = _ref5.handleChange,
      setFieldValue = _ref5.setFieldValue,
      values = _ref5.values,
      errors = _ref5.errors,
      touched = _ref5.touched;
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
      className: "col-12 col-lg-7 px-0 my-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "mb-2"
    }, t('personalInfos.form.on-connect.people_count_label')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzSelect"], {
      name: "peopleCount",
      id: "peopleCount",
      placeholder: t('personalInfos.form.on-connect.people_count_placeholder'),
      defaultValue: defaultPeopleCount,
      options: peopleCountOptions,
      value: values.peopleCount || '',
      onChange: onChangePeopleCount,
      className: "mb-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
      field: "peopleCount",
      customDisplay: touched.peopleCount && errors.peopleCount
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "mb-2"
    }, t('personalInfos.form.on-connect.housing_type')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzRadio"], {
      id: "housingTypeHouse",
      name: "housingType",
      label: t('personalInfos.form.on-connect.type_house'),
      value: "M",
      checked: 'M' === values.housingType,
      onChange: onChangeHousingType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzRadio"], {
      className: "ml-3",
      id: "housingTypeApartment",
      name: "housingType",
      label: t('personalInfos.form.on-connect.type_apartment'),
      value: "A",
      checked: 'A' === values.housingType,
      onChange: onChangeHousingType
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
      field: "housingType",
      customDisplay: touched.housingType && errors.housingType
    }))), source === SOURCE_HISTO_CONSO && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-3 px-0 border-top border-1 border-gray-100 pt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
      id: "consentGiven",
      name: "consentGiven",
      label: t('personalInfos.form.on-connect.consent'),
      type: "checkbox",
      checked: values.consentGiven || false,
      onChange: handleChange
    }), errors.consentGiven && touched.consentGiven ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-consentGiven",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, t(errors.consentGiven))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
      field: "consentGiven"
    })), canUnsubscribe && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-3 px-0 border-top border-1 border-gray-100 pt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      i18nKey: 'personalInfos.form.on-connect.unsubscribe.link',
      components: {
        redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "on-connect-unusubscribe-btn",
          decorate: true,
          to: onConnectUnsubscribeUrl
        })
      }
    }))), isPrivacyPolicy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "caption",
      weight: "regular",
      size: "M",
      className: "mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      i18nKey: 'loginReset.login.step4.form.mobilePhone.privacy_policy',
      components: {
        redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "font-family-medium",
          decorate: true,
          target: "_blank",
          to: privacy_policy === null || privacy_policy === void 0 ? void 0 : privacy_policy.link
        })
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      previous: previousButton,
      next: nextButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/utils/index.ts":
/*!**********************************!*\
  !*** ./assets/js/utils/index.ts ***!
  \**********************************/
/*! exports provided: getFormAdress, wordSeparator, trackviewShortTitle, cleanUpNumericInputValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormAdress", function() { return getFormAdress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordSeparator", function() { return wordSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackviewShortTitle", function() { return trackviewShortTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUpNumericInputValue", function() { return cleanUpNumericInputValue; });
function getFormAdress(addressInfos) {
  return {
    insee: addressInfos.localityId,
    hexavia: addressInfos.streetId,
    streetName: addressInfos.streetName,
    streetNumber: addressInfos.streetNumber,
    streetExt: addressInfos.streetNumberExt
  };
}
function wordSeparator(_ref) {
  var elem = _ref.elem,
    _ref$comma = _ref.comma,
    comma = _ref$comma === void 0 ? false : _ref$comma;
  var separator = comma ? ', ' : ' ';
  return elem ? elem + separator : '';
}
function trackviewShortTitle() {
  var _a;
  var _ref2 = (_a = window.tsme_data) === null || _a === void 0 ? void 0 : _a.brand,
    name = _ref2.name;
  return document.title.replace(" - ".concat(name), '');
}
function cleanUpNumericInputValue(value, maxValue) {
  if (value === '') return 0;
  var sanitizedValue = value.replace(/[^0-9]/g, '');
  return Math.min(parseInt(sanitizedValue || '0', 10), maxValue);
}

/***/ })

}]);