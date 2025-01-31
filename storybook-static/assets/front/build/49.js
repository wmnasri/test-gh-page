(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./assets/js/components/ContractInfosBlock/index.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/components/ContractInfosBlock/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContractInfosBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");





function ContractInfosBlock(_ref) {
  var isLoading = _ref.isLoading,
    data = _ref.data;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var name = data.name,
    company_name = data.company_name,
    served_address = data.served_address,
    reference = data.reference;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white d-flex align-items-center position-absolute",
    style: {
      top: '-20px',
      left: '1.5rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "business-contract-handshake-sign",
    variant: "line"
  }), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "mx-2",
    width: 100,
    height: 20
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "bold",
    className: "ml-2 mb-0 text-uppercase"
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters justify-content-lg-between border rounded-1 mb-4 mb-lg-5 p-4 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    className: "mb-3 mb-md-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    color: "disabled"
  }, t('proofOfResidence.contractOwner')), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: 150,
    height: 30
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, company_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    className: "mb-3 mb-md-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    color: "disabled"
  }, t('proofOfResidence.contractAddress')), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: 150,
    height: 30
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, served_address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    className: "mb-3 mb-md-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    color: "disabled"
  }, t('proofOfResidence.contractRefClient')), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: 150,
    height: 30
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, null, Object(_app_services_Utils__WEBPACK_IMPORTED_MODULE_4__["formatReference"])(reference)))));
}

/***/ }),

/***/ "./assets/js/components/Error/index.jsx":
/*!**********************************************!*\
  !*** ./assets/js/components/Error/index.jsx ***!
  \**********************************************/
/*! exports provided: GlobalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalError", function() { return GlobalError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




var GlobalError = function GlobalError(_ref) {
  var children = _ref.children,
    context = _ref.context;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(), t('date.short_date'));
  var time = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(), t('date.hour'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3"
  }, t('errors.global_date', {
    context: 'proofOfResidence',
    date: date,
    time: time
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "mb-4 mb-lg-5 new-line"
  }, t('errors.global_text', {
    context: context
  })), children);
};

/***/ }),

/***/ "./assets/js/hooks/useHasRoleEnable.js":
/*!*********************************************!*\
  !*** ./assets/js/hooks/useHasRoleEnable.js ***!
  \*********************************************/
/*! exports provided: useHasRoleEnable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHasRoleEnable", function() { return useHasRoleEnable; });
function useHasRoleEnable() {
  var roles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var lookupRole = arguments.length > 1 ? arguments[1] : undefined;
  var lookupReason = arguments.length > 2 ? arguments[2] : undefined;
  var matchingRoles = roles.filter(function (_ref) {
    var role = _ref.role,
      reason_code = _ref.reason_code;
    if (lookupReason) {
      return lookupRole.includes(role) && lookupReason.includes(reason_code);
    }
    return lookupRole.includes(role);
  });
  if (!matchingRoles.length) {
    return {
      enabled: null,
      reason_code: null
    };
  }
  return matchingRoles[0];
}

/***/ }),

/***/ "./assets/js/pages/proofOfResidence/ContractInfos.jsx":
/*!************************************************************!*\
  !*** ./assets/js/pages/proofOfResidence/ContractInfos.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContractInfos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_ContractInfosBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/ContractInfosBlock */ "./assets/js/components/ContractInfosBlock/index.tsx");




function ContractInfos(_ref) {
  var _data$data, _data$data$content;
  var isLoading = _ref.isLoading,
    data = _ref.data,
    onClick = _ref.onClick,
    btnLoading = _ref.btnLoading;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-5"
  }, t('proofOfResidence.subscribeProofForContract')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_ContractInfosBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: (data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : (_data$data$content = _data$data.content) === null || _data$data$content === void 0 ? void 0 : _data$data$content.contracts[0]) || {},
    isLoading: isLoading
  }), !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    "data-cy": "download-btn",
    variant: "contained",
    border: "soft",
    onClick: onClick,
    loader: btnLoading
  }, t('proofOfResidence.downloadBtn')));
}

/***/ }),

/***/ "./assets/js/pages/proofOfResidence/Download.jsx":
/*!*******************************************************!*\
  !*** ./assets/js/pages/proofOfResidence/Download.jsx ***!
  \*******************************************************/
/*! exports provided: DownloadSuccess, DownloadError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadSuccess", function() { return DownloadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadError", function() { return DownloadError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _proofOfResidence_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proofOfResidence.scss */ "./assets/js/pages/proofOfResidence/proofOfResidence.scss");
/* harmony import */ var _proofOfResidence_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_proofOfResidence_scss__WEBPACK_IMPORTED_MODULE_5__);






function DownloadSuccess(_ref) {
  var contractName = _ref.contractName,
    onClick = _ref.onClick;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3"
  }, t('proofOfResidence.subscribProofTitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    variant: "success",
    className: "py-2 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    i18nKey: "proofOfResidence.downloadSuccess",
    values: {
      contractName: contractName
    },
    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      className: "download-link m-0 p-0 h-auto",
      "data-cy": "download-link",
      variant: "text",
      onClick: onClick
    })]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "pl-0",
    icon: "keyboard-arrow-left",
    to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DASHBOARD
  }, t('proofOfResidence.dashboardBtn')));
}
function DownloadError(_ref2) {
  var contractName = _ref2.contractName,
    reason_code = _ref2.reason_code;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3"
  }, t('proofOfResidence.subscribProofTitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzAlert"], {
    className: "py-3 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "mb-0"
  }, t('proofOfResidence.downloadError', {
    context: reason_code,
    contractName: contractName
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "pl-0",
    icon: "keyboard-arrow-left",
    to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DASHBOARD
  }, t('proofOfResidence.dashboardBtn')));
}

/***/ }),

/***/ "./assets/js/pages/proofOfResidence/index.jsx":
/*!****************************************************!*\
  !*** ./assets/js/pages/proofOfResidence/index.jsx ***!
  \****************************************************/
/*! exports provided: default, ProofOfResidenceBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProofOfResidence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProofOfResidenceBackground", function() { return ProofOfResidenceBackground; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _hooks_useHasRoleEnable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useHasRoleEnable */ "./assets/js/hooks/useHasRoleEnable.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Error */ "./assets/js/components/Error/index.jsx");
/* harmony import */ var _Download__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Download */ "./assets/js/pages/proofOfResidence/Download.jsx");
/* harmony import */ var _ContractInfos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContractInfos */ "./assets/js/pages/proofOfResidence/ContractInfos.jsx");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _proofOfResidence_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./proofOfResidence.scss */ "./assets/js/pages/proofOfResidence/proofOfResidence.scss");
/* harmony import */ var _proofOfResidence_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_proofOfResidence_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_components_Bubble__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/Bubble */ "./assets/js/components/Bubble/index.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















function ProofOfResidence() {
  var _data$data, _data$data$content;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_14__["useIsMobile"])();
  var GetUserProQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])('getUserPro', function () {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_12__["API"].GET_USER_PRO);
  });
  var isSuccess = GetUserProQuery.isSuccess,
    isError = GetUserProQuery.isError,
    isLoading = GetUserProQuery.isLoading,
    _GetUserProQuery$data = GetUserProQuery.data,
    data = _GetUserProQuery$data === void 0 ? Object(_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["getInitialData"])({
      contracts: {
        roles: []
      }
    }) : _GetUserProQuery$data;
  var _ref = ((_data$data = data.data) === null || _data$data === void 0 ? void 0 : (_data$data$content = _data$data.content) === null || _data$data$content === void 0 ? void 0 : _data$data$content.contracts[0]) || {},
    roles = _ref.roles,
    name = _ref.name;
  var _useHasRoleEnable = Object(_hooks_useHasRoleEnable__WEBPACK_IMPORTED_MODULE_5__["useHasRoleEnable"])(roles, _constants__WEBPACK_IMPORTED_MODULE_12__["CODES"].ATTESTATION_ABO),
    enabled = _useHasRoleEnable.enabled,
    reason_code = _useHasRoleEnable.reason_code;
  var DownloadMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(function () {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_12__["API"].CERTIFICATE_SUBSCRIPTION);
  }, {
    onSuccess: function onSuccess(_ref2) {
      var data = _ref2.data;
      var _data$content = data.content,
        rawData = _data$content.rawData,
        filename = _data$content.filename;
      _services_Utils__WEBPACK_IMPORTED_MODULE_11__["download"].fromBase64(rawData, filename, _constants__WEBPACK_IMPORTED_MODULE_12__["CONTENT_TYPE_PDF"]);
    }
  });
  var onClick = function onClick() {
    if (DownloadMutation.isSuccess) {
      var _DownloadMutation$dat = DownloadMutation.data.data.content,
        rawData = _DownloadMutation$dat.rawData,
        filename = _DownloadMutation$dat.filename;
      _services_Utils__WEBPACK_IMPORTED_MODULE_11__["download"].fromBase64(rawData, filename, _constants__WEBPACK_IMPORTED_MODULE_12__["CONTENT_TYPE_PDF"]);
    } else {
      DownloadMutation.mutate();
    }
  };
  var Content = function Content() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (isLoading || isSuccess && enabled) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContractInfos__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, GetUserProQuery, {
      onClick: onClick,
      btnLoading: DownloadMutation.isLoading
    })), !isLoading && enabled === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Download__WEBPACK_IMPORTED_MODULE_9__["DownloadError"], {
      contractName: name,
      reason_code: reason_code
    }), isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error__WEBPACK_IMPORTED_MODULE_8__["GlobalError"], {
      context: "proofOfResidence"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "contained",
      border: "soft",
      to: _constants__WEBPACK_IMPORTED_MODULE_12__["ROUTES"].DASHBOARD
    }, t('proofOfResidence.dashboardBtn'))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tag: "main",
    className: "px-0 bg-brand-dark proof-of-residence overflow-hidden",
    fullscreen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container pb-5 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProofOfResidenceBackground, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H1",
    weight: "black",
    size: isMobile ? 'L' : 'XL',
    align: "center",
    color: "white",
    className: "mt-lg-3 mb-4 text-uppercase"
  }, t('proofOfResidence.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white rounded-3 position-relative mx-auto px-3 px-lg-6 py-4 py-lg-5 mb-6 mb-lg-0",
    style: {
      maxWidth: 750
    },
    "data-cy": "por-content"
  }, DownloadMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Download__WEBPACK_IMPORTED_MODULE_9__["DownloadSuccess"], {
    contractName: name,
    onClick: onClick
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null))));
}
var ProofOfResidenceBackground = function ProofOfResidenceBackground() {
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_14__["useIsMobile"])();
  var logo_background = window.tsme_data.header.logo_background;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Bubble__WEBPACK_IMPORTED_MODULE_15__["default"], {
    color: "dark",
    size: isMobile ? 'sm' : 'md',
    position: "31"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Bubble__WEBPACK_IMPORTED_MODULE_15__["default"], {
    color: "green",
    size: isMobile ? 'sm' : 'md',
    position: "32"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-img-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-img-2"
  }), logo_background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s-suez",
    style: {
      backgroundImage: "url(".concat(logo_background, ")")
    }
  }));
};

/***/ }),

/***/ "./assets/js/pages/proofOfResidence/proofOfResidence.scss":
/*!****************************************************************!*\
  !*** ./assets/js/pages/proofOfResidence/proofOfResidence.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);