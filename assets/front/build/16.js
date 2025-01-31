(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/components/Confirmation/index.tsx":
/*!*****************************************************!*\
  !*** ./assets/js/components/Confirmation/index.tsx ***!
  \*****************************************************/
/*! exports provided: Confirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirmation", function() { return Confirmation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");






var Confirmation = function Confirmation(_ref) {
  var _ref$isSuccess = _ref.isSuccess,
    isSuccess = _ref$isSuccess === void 0 ? true : _ref$isSuccess,
    title = _ref.title,
    subTitle = _ref.subTitle,
    desc = _ref.desc,
    descTransError = _ref.descTransError,
    previousButton = _ref.previousButton,
    nextButton = _ref.nextButton;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    transform = _useInterweave.transform;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3 mb-lg-4"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], null, subTitle), isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_3__["AlertBox"], {
    className: "mb-5 new-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    content: desc,
    transform: transform
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_3__["AlertBox"], {
    className: "mb-5 new-line",
    variant: "alert"
  }, descTransError ? descTransError : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    content: desc
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    next: nextButton,
    previous: previousButton
  }));
};

/***/ }),

/***/ "./assets/js/components/Skeleton/Payment/MyPaymentMode/index.tsx":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Skeleton/Payment/MyPaymentMode/index.tsx ***!
  \***********************************************************************/
/*! exports provided: default, IdentityBlockSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyPaymentModeSkeleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityBlockSkeleton", function() { return IdentityBlockSkeleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


function MyPaymentModeSkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-6 col-lg-4 mb-1 px-0",
    height: 20
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-12 col-lg-9 mb-3 px-0",
    height: 50
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-6 col-lg-4 mb-1 px-0",
    height: 20
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-12 col-lg-9 mb-3 px-0",
    height: 50
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-6 col-lg-4 mb-1 px-0",
    height: 20
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-12 col-lg-9 mb-4 px-0",
    height: 50
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-12 col-lg-10 mb-3 px-0",
    height: 60
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-1 col-lg-1 mb-1 px-0",
    height: 20
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-11 col-lg-11"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-12 col-lg-11 mb-3 px-0",
    height: 50
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-2 col-lg-2 mb-1 px-0",
    height: 20
  }));
}
function IdentityBlockSkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-4 mb-3",
    height: 12
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-12 col-lg-5 mr-lg-2 mb-3",
    height: 200
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "col-12 col-lg-6 ml-lg-2 mb-3",
    height: 200
  }));
}

/***/ }),

/***/ "./assets/js/components/Skeleton/PaymentModePromotion/paymentModePromotion.tsx":
/*!*************************************************************************************!*\
  !*** ./assets/js/components/Skeleton/PaymentModePromotion/paymentModePromotion.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentPromotionSkeleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");



function PaymentPromotionSkeleton() {
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var heightGrayBlock = isMobile ? '124px' : '186px';
  var heightSummaryBlock = isMobile ? '276px' : '186px';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-5 mb-3 mb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: heightGrayBlock
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: heightSummaryBlock
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 376
  }))));
}

/***/ }),

/***/ "./assets/js/components/payment/PaylineMonext.tsx":
/*!********************************************************!*\
  !*** ./assets/js/components/payment/PaylineMonext.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaylineMonext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ahooks */ "./node_modules/ahooks/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_hooks_usePayline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/usePayline */ "./assets/js/hooks/usePayline.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function PaylineMonext(_ref) {
  var launch = _ref.launch,
    setRunPaymentCB = _ref.setRunPaymentCB;
  var _a, _b;
  Object(_app_hooks_usePayline__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenPopinCb = _useState2[0],
    setIsOpenPopinCb = _useState2[1];
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PAYMENT.BANK_CARD, {
        baseURL: ''
      });
    }, {
      mutationKey: 'getBankCard',
      onSuccess: function onSuccess(response) {
        var _a;
        var code = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.code;
        if (_app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].CODE_DOMAIN_ERROR === code) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.CONFIRMATION_CB_FAILED);
        }
      },
      onError: function onError() {
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.CONFIRMATION_CB_FAILED);
      }
    }),
    muateBankCard = _useMutation.mutate,
    isLoadingBankCard = _useMutation.isLoading,
    isSuccessBankCard = _useMutation.isSuccess,
    dataBankCard = _useMutation.data;
  var checkPayline = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PAYMENT.CHECK_PAYLINE);
  }, {
    onSuccess: function onSuccess(response, _ref2) {
      var callSubmitPayment = _ref2.callSubmitPayment;
      var _a;
      if (callSubmitPayment) {
        muateBankCard();
      } else {
        var _ref3 = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.content,
          isRedirect = _ref3.isRedirect,
          redirect = _ref3.redirect;
        if (isRedirect === true && redirect) {
          window.location.href = redirect;
        }
      }
    },
    onError: function onError() {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.CONFIRMATION_CB_FAILED);
    }
  });
  var idBtnClosePopinCb = document === null || document === void 0 ? void 0 : document.getElementById('pl-container-lightbox-close');
  var responseBankCard = dataBankCard;
  var paylineToken = isSuccessBankCard && responseBankCard ? (_b = (_a = responseBankCard === null || responseBankCard === void 0 ? void 0 : responseBankCard.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.paylineToken : '';
  var handleClick = function handleClick() {
    // @ts-ignore
    Payline.Api.endToken();
    checkPayline.mutate({});
    setRunPaymentCB(false);
    setIsOpenPopinCb(false);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (paylineToken) {
      var currentTimeout = setTimeout(function () {
        // @ts-ignore
        Payline.Api.reset(paylineToken);
        setIsOpenPopinCb(true);
      }, 1000);
      return function () {
        clearTimeout(currentTimeout);
      };
    }
    return;
  }, [isLoadingBankCard]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var currentTimeout = setTimeout(function () {
      idBtnClosePopinCb === null || idBtnClosePopinCb === void 0 ? void 0 : idBtnClosePopinCb.addEventListener('click', handleClick);
    }, 1000);
    return function () {
      idBtnClosePopinCb === null || idBtnClosePopinCb === void 0 ? void 0 : idBtnClosePopinCb.removeEventListener('click', handleClick);
      clearTimeout(currentTimeout);
    };
  }, [isOpenPopinCb]);
  Object(ahooks__WEBPACK_IMPORTED_MODULE_4__["useKeyPress"])(27, function () {
    if (isOpenPopinCb && idBtnClosePopinCb) {
      // @ts-ignore
      Payline.Api.endToken();
      checkPayline.mutate({});
      setRunPaymentCB(false);
      setIsOpenPopinCb(false);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (launch) {
      checkPayline.mutate({
        callSubmitPayment: true
      });
    }
  }, [launch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "PaylineWidget",
    "data-token": paylineToken,
    "data-embeddedredirectionallowed": "false",
    "data-auto-init": "false"
  });
}

/***/ }),

/***/ "./assets/js/hooks/useGetAvailablePaymentModes.ts":
/*!********************************************************!*\
  !*** ./assets/js/hooks/useGetAvailablePaymentModes.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetAvailablePaymentModes; });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");

function useGetAvailablePaymentModes(list, hasEtipSignedValidMandate, monthlyPaymentAmount, allModes) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__["useTranslation"])(),
    t = _useTranslation.t;
  var availablePaymentModes = new Array();
  var monthlyPayment = list.monthlyPayment,
    directDebitPayment = list.directDebitPayment,
    etip = list.etip,
    bankCardPayment = list.bankCardPayment,
    tipi = list.tipi;
  if (monthlyPayment === true) {
    availablePaymentModes.push({
      label: t('payment.list.label_monthlyPayment'),
      value: 'monthlyPayment',
      text: t('payment.list.text_monthlyPayment', {
        monthlyAmount: monthlyPaymentAmount
      }),
      info: t('payment.list.info_monthlyPayment')
    });
  }
  if (directDebitPayment === true) {
    availablePaymentModes.push({
      label: t('payment.list.label_directDebitPayment'),
      value: 'directDebitPayment',
      text: t('payment.list.text_directDebitPayment'),
      info: t('payment.list.info_directDebitPayment')
    });
  }
  if (etip === true && allModes) {
    availablePaymentModes.push({
      label: t('payment.list.label_etip'),
      value: 'etip',
      text: t('payment.list.text_etip'),
      info: t('payment.list.info_etip', {
        context: hasEtipSignedValidMandate ? 'mandate' : 'no_mandate'
      })
    });
  }
  if (bankCardPayment === true && allModes) {
    availablePaymentModes.push({
      label: t('payment.list.label_bankCardPayment'),
      value: 'bankCardPayment',
      text: t('payment.list.text_bankCardPayment'),
      info: t('payment.list.info_bankCardPayment')
    });
  }
  if (tipi === true && allModes) {
    availablePaymentModes.push({
      label: t('payment.list.label_tipi'),
      value: 'tipi',
      text: t('payment.list.text_tipi'),
      info: t('payment.list.info_tipi')
    });
  }
  return availablePaymentModes;
}

/***/ }),

/***/ "./assets/js/hooks/useSearchParams.ts":
/*!********************************************!*\
  !*** ./assets/js/hooks/useSearchParams.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSearchParams; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function useSearchParams() {
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useLocation"])(),
    search = _useLocation.search;
  return new URLSearchParams(search);
}

/***/ }),

/***/ "./assets/js/models/IbanSepa/SelectPaymentMode.js":
/*!********************************************************!*\
  !*** ./assets/js/models/IbanSepa/SelectPaymentMode.js ***!
  \********************************************************/
/*! exports provided: SelectPaymentModeSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPaymentModeSchema", function() { return SelectPaymentModeSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validation/yup */ "./assets/js/validation/yup.js");


var SelectPaymentModeSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  paymentMode: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('managePayments.form.errors.select_option')
});

/***/ }),

/***/ "./assets/js/models/IbanSepa/checkboxVerified.js":
/*!*******************************************************!*\
  !*** ./assets/js/models/IbanSepa/checkboxVerified.js ***!
  \*******************************************************/
/*! exports provided: checkboxVerifiedSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxVerifiedSchema", function() { return checkboxVerifiedSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validation/yup */ "./assets/js/validation/yup.js");


var checkboxVerifiedSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  checkboxVerified: yup__WEBPACK_IMPORTED_MODULE_0__["bool"]().oneOf([true], 'payment.IBANForm.errors.checkboxVerified')
});

/***/ }),

/***/ "./assets/js/models/IbanSepa/index.ts":
/*!********************************************!*\
  !*** ./assets/js/models/IbanSepa/index.ts ***!
  \********************************************/
/*! exports provided: accountOwnerSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountOwnerSchema", function() { return accountOwnerSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");



var ownerRegex = new RegExp("^[0-9A-Za-z ]{0,".concat(_app_constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_OWNER_MAX_LENGTH"], "}$"));
var accountOwnerSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('managePayments.form.errors.mandatory').matches(ownerRegex, 'payment.IBANForm.errors.owner_name'),
  surname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('managePayments.form.errors.mandatory').matches(ownerRegex, 'payment.IBANForm.errors.owner_surname')
});

/***/ }),

/***/ "./assets/js/pages/payment/ContractSummary.tsx":
/*!*****************************************************!*\
  !*** ./assets/js/pages/payment/ContractSummary.tsx ***!
  \*****************************************************/
/*! exports provided: ContractSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractSummary", function() { return ContractSummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");



var ContractSummary = function ContractSummary(props) {
  var name = props.name,
    address = props.address,
    reference = props.reference;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border sz-border-1 rounded-2 px-4 py-3",
    "data-cy": "summary-contract"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    className: "mb-3",
    icon: "business-contract-handshake-sign",
    variant: "line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    className: "sz-typo-caption md font-family-regular"
  }, t('managePayments.summary.contract_name')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, {
    className: "summary-contract-name"
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    className: "mb-3",
    icon: "pin-location-1",
    variant: "line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    className: "sz-typo-caption md font-family-regular"
  }, t('managePayments.summary.address')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, {
    className: "summary-contract-address new-line"
  }, address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"], {
    icon: "house-3",
    variant: "line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Text, {
    className: "sz-typo-caption md font-family-regular"
  }, t('managePayments.summary.reference')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzData"].Title, {
    className: "summary-contract-reference"
  }, reference)));
};

/***/ }),

/***/ "./assets/js/pages/payment/PaymentBlock.tsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/payment/PaymentBlock.tsx ***!
  \**************************************************/
/*! exports provided: PaymentBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentBlock", function() { return PaymentBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _payments_manage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments-manage.scss */ "./assets/js/pages/payment/payments-manage.scss");
/* harmony import */ var _payments_manage_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_payments_manage_scss__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PaymentBlock = function PaymentBlock(props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPayMyBillBtnLoading = _useState2[0],
    setIsPayMyBillBtnLoading = _useState2[1];
  var titleCode = props.titleCode,
    amount = props.amount,
    date = props.date,
    showEtip = props.showEtip,
    paymentMode = props.paymentMode,
    computationModeCode = props.computationModeCode,
    invoiceVariant = props.invoiceVariant,
    currentPaymentModeCode = props.currentPaymentModeCode,
    showPayBillButton = props.showPayBillButton;
  var paymentModeKey = "payment.summary_box.debit_type_".concat(currentPaymentModeCode);
  var paymentModeValue = currentPaymentModeCode && i18n.exists(paymentModeKey) ? t(paymentModeKey) : undefined;
  var isIntranet = window.tsme_data.isIntranet;
  var showCommentCases = ['04', '06', '07'];
  var showComment = titleCode ? showCommentCases.includes(titleCode) : null;
  var showAmountCases = ['01', '02', '04', '08', '09', _app_constants__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_MODE_MENSU"], _app_constants__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_MODE_ETIP"]];
  var showAmount = titleCode ? showAmountCases.includes(titleCode) : null;
  var paymentBlockClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('summary-payment-block rounded-2 d-flex', {
    'col-12 col-lg-5 bg-gray-100 mt-3 mt-lg-0 p-3 p-lg-4 align-items-center': !invoiceVariant,
    'w-100 bg-white px-3 py-4 p-lg-5 mt-3 mt-lg-4 d-flex flex-column': invoiceVariant
  });
  var headlineClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('mb-0', {
    'text-dark': !invoiceVariant,
    'text-expert-blue': invoiceVariant
  });
  var amountClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('text-expert-blue', {
    'mb-2': !invoiceVariant,
    'my-3': invoiceVariant
  });
  var commentClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('text-dark mb-0', {
    'mt-auto': !invoiceVariant,
    'mt-2': invoiceVariant
  });
  var handleOnClickPayBill = function handleOnClickPayBill() {
    setIsPayMyBillBtnLoading(true);
    window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].PAYMENT.INDEX;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: paymentBlockClasses,
    "data-cy": "summary-payment-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column justify-content-center h-100",
    "data-cy": "summary-payment"
  }, titleCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: invoiceVariant ? 'H3' : 'body',
    size: invoiceVariant ? 'L' : 'S',
    weight: "medium",
    className: headlineClasses
  }, t("payment.summary_box.paymentInfo.headline", {
    context: titleCode
  })), showAmount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold",
    className: amountClasses
  }, t("payment.summary_box.paymentInfo.amount", {
    amount: amount,
    context: titleCode
  })), _app_constants__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_MODE_PRELEV"] === paymentMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    size: "M",
    weight: "bold",
    className: "text-expert-blue"
  }, t("payment.summary_box.paymentInfo.amount", {
    context: paymentMode
  })), (showComment || computationModeCode) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "regular",
    className: commentClasses
  }, showComment && t("payment.summary_box.paymentInfo.comment", {
    context: titleCode,
    amount: amount,
    date: date
  }), computationModeCode && t('payment.summary_box.paymentInfo.comment_mensualisation', {
    context: computationModeCode
  })), showEtip && !isIntranet && !invoiceVariant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "keyboard-arrow-right",
    className: "mt-auto pl-0 h-25 text-left justify-content-start",
    variant: "text",
    alignIcon: "right",
    to: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].PAYMENT.ETIP,
    "data-cy": "etip-payment-link"
  }, t('payment.summary_box.paymentInfo.etip_payment_button'))), invoiceVariant && paymentModeValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-top border-1 border-gray-100 w-100 mt-3 pt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-break mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    className: "mb-0",
    tag: "span"
  }, t('payment.summary_box.payment_mode_label', {
    context: t('payment.summary_box.actual')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    weight: "bold",
    className: "mb-0",
    tag: "span"
  }, paymentModeValue))), invoiceVariant && showPayBillButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
    variant: "outlined",
    border: "soft",
    onClick: handleOnClickPayBill,
    loader: isPayMyBillBtnLoading,
    "data-cy": "pay-my-bill-button"
  }, t('payment.summary_box.paymentInfo.payment_button'))));
};

/***/ }),

/***/ "./assets/js/pages/payment/PaymentBox.tsx":
/*!************************************************!*\
  !*** ./assets/js/pages/payment/PaymentBox.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function PaymentBox(_a) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
    className: "payments-manage-block bg-white rounded-3 position-relative mb-lg-3 px-3 px-lg-6 py-4 py-lg-5"
  }, props), children);
}

/***/ }),

/***/ "./assets/js/pages/payment/PaymentStepper.tsx":
/*!****************************************************!*\
  !*** ./assets/js/pages/payment/PaymentStepper.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentStepper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_useSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useSteps */ "./assets/js/pages/payment/hooks/useSteps.tsx");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



function PaymentStepper() {
  var steps = Object(_hooks_useSteps__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, steps.map(function (step) {
    var path = step.path,
      props = __rest(step, ["path"]);
    var Step = step['step'];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: Array.isArray(path) ? path[0] : path,
      path: path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, Object.assign({}, props)));
  }));
}

/***/ }),

/***/ "./assets/js/pages/payment/SummaryBox.tsx":
/*!************************************************!*\
  !*** ./assets/js/pages/payment/SummaryBox.tsx ***!
  \************************************************/
/*! exports provided: SummaryBox, SummaryBoxContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryBox", function() { return SummaryBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryBoxContent", function() { return SummaryBoxContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_ez_components_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ez-components/accordion */ "./assets/js/ez-components/accordion/index.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ContractSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContractSummary */ "./assets/js/pages/payment/ContractSummary.tsx");
/* harmony import */ var _PaymentBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PaymentBlock */ "./assets/js/pages/payment/PaymentBlock.tsx");
/* harmony import */ var _payments_manage_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payments-manage.scss */ "./assets/js/pages/payment/payments-manage.scss");
/* harmony import */ var _payments_manage_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_payments_manage_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/pages/payment/hooks/usePaymentParams */ "./assets/js/pages/payment/hooks/usePaymentParams.ts");
/* harmony import */ var _app_pages_payment_hooks_useGetManagePayment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/payment/hooks/useGetManagePayment */ "./assets/js/pages/payment/hooks/useGetManagePayment.ts");
/* harmony import */ var _app_pages_payment_hooks_useGetIban__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/pages/payment/hooks/useGetIban */ "./assets/js/pages/payment/hooks/useGetIban.ts");
/* harmony import */ var _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/pages/payment/steps/MyPaymentMode */ "./assets/js/pages/payment/steps/MyPaymentMode.tsx");
/* harmony import */ var _app_pages_payment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/pages/payment */ "./assets/js/pages/payment/index.tsx");
/* harmony import */ var _app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/pages/payment/PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
/* harmony import */ var _app_components_Skeleton_Payment_MyPaymentMode_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/Skeleton/Payment/MyPaymentMode/index */ "./assets/js/components/Skeleton/Payment/MyPaymentMode/index.tsx");
/* harmony import */ var _app_constants_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/constants/index */ "./assets/js/constants/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var SummaryBox = function SummaryBox(_ref) {
  var isOpen = _ref.isOpen;
  var _a, _b, _c, _d, _e, _f;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
      return isOpen ? '0' : '1';
    }),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setActiveKey(isOpen ? '0' : '1');
  }, [isOpen]);
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_pages_payment__WEBPACK_IMPORTED_MODULE_12__["PaymentContext"]),
    setManagePayment = _useContext.setManagePayment;
  var _usePaymentParams = Object(_app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    paymentMode = _usePaymentParams.paymentMode,
    eFacture = _usePaymentParams.eFacture;
  var _useGetManagePayment = Object(_app_pages_payment_hooks_useGetManagePayment__WEBPACK_IMPORTED_MODULE_9__["default"])({
      paymentMode: paymentMode,
      eFacture: eFacture,
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        if (data.content) {
          setManagePayment(data.content);
        }
      },
      onError: function onError() {
        history.push(_app_constants_index__WEBPACK_IMPORTED_MODULE_15__["ROUTES"].PAYMENT.ERROR);
      },
      enabled: paymentMode !== _app_constants_index__WEBPACK_IMPORTED_MODULE_15__["PAYMENT_MODE_LIST"].ETIP
    }),
    data = _useGetManagePayment.data,
    isLoading = _useGetManagePayment.isLoading;
  var _ref3 = (data === null || data === void 0 ? void 0 : data.data) || {},
    managePayment = _ref3.content;
  var _useGetIban = Object(_app_pages_payment_hooks_useGetIban__WEBPACK_IMPORTED_MODULE_10__["default"])({
      onSuccess: function onSuccess(_ref4) {
        var data = _ref4.data;
        // Retraitement
        var pmtDataFromGetIban = {
          hasMandate: data.has_mandate,
          contractData: {
            reference: data.reference,
            iban: data.iban,
            ibanHolder: data.titulaire,
            contractName: data.name,
            balanceAmount: data.balance,
            siteAddress: data.site_address,
            balanceDate: ''
          },
          monthlyPaymentData: {
            amount: '',
            computationModeLabel: '',
            computationModeCode: ''
          }
        };
        setManagePayment(pmtDataFromGetIban);
      },
      onError: function onError() {
        history.push(_app_constants_index__WEBPACK_IMPORTED_MODULE_15__["ROUTES"].PAYMENT.ERROR_ETIP);
      },
      enabled: paymentMode === _app_constants_index__WEBPACK_IMPORTED_MODULE_15__["PAYMENT_MODE_LIST"].ETIP
    }),
    dataGetIban = _useGetIban.data,
    isLoadingGetIban = _useGetIban.isLoading;
  var summaryBoxContent = {
    amount: ((_a = managePayment === null || managePayment === void 0 ? void 0 : managePayment.monthlyPaymentData) === null || _a === void 0 ? void 0 : _a.amount) || ((_b = dataGetIban === null || dataGetIban === void 0 ? void 0 : dataGetIban.data) === null || _b === void 0 ? void 0 : _b.balance) || '',
    name: (managePayment === null || managePayment === void 0 ? void 0 : managePayment.contractData.contractName) || ((_c = dataGetIban === null || dataGetIban === void 0 ? void 0 : dataGetIban.data) === null || _c === void 0 ? void 0 : _c.name) || '',
    address: (managePayment === null || managePayment === void 0 ? void 0 : managePayment.contractData.siteAddress) || ((_d = dataGetIban === null || dataGetIban === void 0 ? void 0 : dataGetIban.data) === null || _d === void 0 ? void 0 : _d.site_address) || '',
    reference: (managePayment === null || managePayment === void 0 ? void 0 : managePayment.contractData.reference) || ((_e = dataGetIban === null || dataGetIban === void 0 ? void 0 : dataGetIban.data) === null || _e === void 0 ? void 0 : _e.reference) || '',
    titleCode: paymentMode,
    paymentMode: paymentMode,
    computationModeCode: (_f = managePayment === null || managePayment === void 0 ? void 0 : managePayment.monthlyPaymentData) === null || _f === void 0 ? void 0 : _f.computationModeCode,
    paymentModeLabel: t('payment.summary_box.payment_mode_label', {
      context: 'selected'
    }),
    paymentModeValue: t('payment.summary_box.debit_type', {
      context: _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_11__["PAYMENT_MODE_ACTION"][paymentMode]
    }),
    showEtip: false,
    paymentModeShow: true
  };
  var dataAccordeon = [{
    fields: {
      title: t('payment.summary_box.title'),
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SummaryBoxContent, Object.assign({}, summaryBoxContent))
    }
  }];
  var setCurrentKey = function setCurrentKey(activeKeyState) {
    setActiveKey(activeKeyState);
  };
  if (isLoading || isLoadingGetIban) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_13__["default"], {
      "data-cy": "my-payment-loading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton_Payment_MyPaymentMode_index__WEBPACK_IMPORTED_MODULE_14__["IdentityBlockSkeleton"], null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "payments-manage-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: dataAccordeon,
    className: "rounded-3 mb-3",
    activeKey: activeKey,
    setCurrentKey: setCurrentKey,
    toggle: false,
    borderBottom: false,
    buttonArrow: true,
    isHistory: true
  }));
};
var SummaryBoxContent = function SummaryBoxContent(props) {
  var titleCode = props.titleCode,
    amount = props.amount,
    date = props.date,
    showEtip = props.showEtip,
    paymentMode = props.paymentMode,
    computationModeCode = props.computationModeCode,
    name = props.name,
    address = props.address,
    reference = props.reference,
    paymentModeShow = props.paymentModeShow,
    paymentModeLabel = props.paymentModeLabel,
    paymentModeValue = props.paymentModeValue;
  var grayBlockData = {
    titleCode: titleCode,
    amount: amount,
    date: date,
    showEtip: showEtip,
    paymentMode: paymentMode,
    computationModeCode: computationModeCode
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBlock__WEBPACK_IMPORTED_MODULE_6__["PaymentBlock"], Object.assign({}, grayBlockData)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 pt-3 px-0 pt-lg-0 pl-lg-3 pr-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContractSummary__WEBPACK_IMPORTED_MODULE_5__["ContractSummary"], {
    name: name,
    address: address,
    reference: reference
  }))), paymentModeShow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters",
    "data-cy": "payment-mode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    className: "text-dark mb-0"
  }, paymentModeLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "body",
    weight: "bold",
    className: "text-dark ml-lg-1 mb-0"
  }, paymentModeValue)));
};

/***/ }),

/***/ "./assets/js/pages/payment/hooks/useGetDocapostMandateDownload.ts":
/*!************************************************************************!*\
  !*** ./assets/js/pages/payment/hooks/useGetDocapostMandateDownload.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetDocapostMandateDownload; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");





function useGetDocapostMandateDownload() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API"].DOCAPOSTE.DOWNLOAD_MANDATE, {
      responseType: 'blob'
    });
  }, {
    onSuccess: function onSuccess(data) {
      _app_services_Utils__WEBPACK_IMPORTED_MODULE_4__["download"].fromFile(data);
    },
    onError: function onError() {
      history.push({
        pathname: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].PAYMENT.ERROR_ETIP
      });
    }
  });
}

/***/ }),

/***/ "./assets/js/pages/payment/hooks/useGetIban.ts":
/*!*****************************************************!*\
  !*** ./assets/js/pages/payment/hooks/useGetIban.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetIban; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");



function useGetIban(_ref) {
  var onSuccess = _ref.onSuccess,
    onError = _ref.onError,
    enabled = _ref.enabled;
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])('getIban', function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].DOCAPOSTE.GET_CONTRACT_IBAN, {
      params: {
        enable_tracking: '1'
      }
    });
  }, {
    onSuccess: onSuccess,
    onError: onError,
    enabled: enabled
  });
}

/***/ }),

/***/ "./assets/js/pages/payment/hooks/useGetManagePayment.ts":
/*!**************************************************************!*\
  !*** ./assets/js/pages/payment/hooks/useGetManagePayment.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetManagePayment; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/pages/payment/steps/MyPaymentMode */ "./assets/js/pages/payment/steps/MyPaymentMode.tsx");




function useGetManagePayment(_ref) {
  var paymentMode = _ref.paymentMode,
    eFacture = _ref.eFacture,
    onSuccess = _ref.onSuccess,
    onError = _ref.onError,
    enabled = _ref.enabled;
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])('getManagePayment', function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PAYMENT.GET_MANAGE_PAYMENT, {
      params: {
        paymentMode: _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_MODE_ACTION"][paymentMode],
        eInvoice: eFacture
      }
    });
  }, {
    onSuccess: onSuccess,
    onError: onError,
    enabled: enabled
  });
}

/***/ }),

/***/ "./assets/js/pages/payment/hooks/useModeListPayment.ts":
/*!*************************************************************!*\
  !*** ./assets/js/pages/payment/hooks/useModeListPayment.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useModeListPayment; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function useModeListPayment() {
  var _a;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
    pathname = _useLocation.pathname;
  var invoiceEfacturePath = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].ACCOUNT_INVOICES, {
    modal: 'modale-e-facture'
  });
  var invoiceHistoryPath = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].ACCOUNT_INVOICES);
  var pathNoRedirectError = [invoiceEfacturePath, invoiceHistoryPath];
  var getModeListPayment = Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])('getModeListPayment', function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PAYMENT.GET_PAYMENT_MODE_LIST);
  }, {
    onError: function onError() {
      if (pathNoRedirectError.includes(pathname)) {
        return;
      }
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.ERROR);
    }
  });
  var _ref = ((_a = getModeListPayment === null || getModeListPayment === void 0 ? void 0 : getModeListPayment.data) === null || _a === void 0 ? void 0 : _a.data) || {},
    modeListPaymentData = _ref.content;
  // Get first payment equal to true
  var _ref2 = modeListPaymentData || {},
    _ref2$paymentModesLis = _ref2.paymentModesList,
    paymentModesList = _ref2$paymentModesLis === void 0 ? {} : _ref2$paymentModesLis;
  var _ref3 = Object.entries(paymentModesList).find(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        v = _ref6[1];
      return v;
    }) || [null],
    _ref4 = _slicedToArray(_ref3, 1),
    promotedValue = _ref4[0];
  return Object.assign(Object.assign({}, getModeListPayment), {
    modeListPaymentData: modeListPaymentData,
    promotedValue: promotedValue
  });
}

/***/ }),

/***/ "./assets/js/pages/payment/hooks/usePostDocapostContractIban.ts":
/*!**********************************************************************!*\
  !*** ./assets/js/pages/payment/hooks/usePostDocapostContractIban.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePostDocapostContractIban; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");




function usePostDocapostContractIban() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function (params) {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API"].DOCAPOSTE.POST_IBAN, params);
  }, {
    onError: function onError() {
      history.push({
        pathname: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].PAYMENT.ERROR_ETIP
      });
    }
  });
}

/***/ }),

/***/ "./assets/js/pages/payment/hooks/usePostPaymentMessage.ts":
/*!****************************************************************!*\
  !*** ./assets/js/pages/payment/hooks/usePostPaymentMessage.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePostPaymentMessage; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/pages/payment/steps/MyPaymentMode */ "./assets/js/pages/payment/steps/MyPaymentMode.tsx");





function usePostPaymentMessage(_ref) {
  var managePayment = _ref.managePayment,
    paymentMode = _ref.paymentMode,
    eFacture = _ref.eFacture,
    firstOrigin = _ref.firstOrigin;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function (params) {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_2__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API"].PAYMENT.POST_PAYMENT_MSG, params);
  }, {
    onSuccess: function onSuccess(_ref2, variables) {
      var data = _ref2.data;
      var _ref3 = data || '',
        message = _ref3.message;
      if (message !== _app_constants__WEBPACK_IMPORTED_MODULE_3__["CODES"].OK) {
        history.push({
          pathname: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].PAYMENT.ERROR
        });
        return;
      }
      if (managePayment === null || managePayment === void 0 ? void 0 : managePayment.hasMandate) {
        var search = eFacture ? "?payment_mode=" + paymentMode + "&e-facture=true&mandat=false" : "?payment_mode=" + paymentMode + "&mandat=false";
        history.push({
          pathname: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].PAYMENT.CONFIRMATION,
          search: search
        });
      } else {
        var myPmtModeDatas = Object.assign({}, variables);
        var regex = /((X{4} ){5})/g;
        var isAnonIban = (variables.iban || '').match(regex);
        if (variables.iban && !isAnonIban) {
          var mergedIban = variables.iban;
          var splitIban = mergedIban.match(/.{1,4}/g) || [];
          splitIban.forEach(function (item, index) {
            var key = 'iban_field_' + (index + 1);
            myPmtModeDatas[key] = item;
          });
        }
        var paymentModeUrl = "payment_mode=".concat(paymentMode);
        var _search = eFacture ? "".concat(paymentModeUrl, "&e-facture=true") : paymentModeUrl;
        history.push({
          pathname: _app_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD,
          search: _search,
          state: {
            origin: _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_MANAGE"],
            firstOrigin: firstOrigin,
            myPmtModeDatas: myPmtModeDatas
          }
        });
      }
    }
  });
}

/***/ }),

/***/ "./assets/js/pages/payment/hooks/useResetButtons.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/pages/payment/hooks/useResetButtons.tsx ***!
  \***********************************************************/
/*! exports provided: useResetButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResetButtons", function() { return useResetButtons; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");



var useResetButtons = function useResetButtons() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var previousButton = props.previousButton,
    nextButton = props.nextButton;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var handlePreviousClick = function handlePreviousClick() {
    history.push(_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].DASHBOARD);
  };
  var handleNextClick = function handleNextClick() {
    var indexPayment = _constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT_INDEX;
    history.push(indexPayment);
  };
  var previousBtn = Object.assign({
    label: t('managePayments.validate.button_dashboard'),
    align: 'left',
    onClick: handlePreviousClick,
    enabled: true
  }, previousButton);
  var nextBtn = Object.assign({
    label: t('managePayments.validate.button_reset_payment'),
    align: 'right',
    onClick: handleNextClick
  }, nextButton);
  return {
    previousBtn: previousBtn,
    nextBtn: nextBtn
  };
};

/***/ }),

/***/ "./assets/js/pages/payment/hooks/useSteps.tsx":
/*!****************************************************!*\
  !*** ./assets/js/pages/payment/hooks/useSteps.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSteps; });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/payment/steps/MyPaymentMode */ "./assets/js/pages/payment/steps/MyPaymentMode.tsx");
/* harmony import */ var _app_pages_payment_steps_ConfirmationMandat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/pages/payment/steps/ConfirmationMandat */ "./assets/js/pages/payment/steps/ConfirmationMandat.tsx");
/* harmony import */ var _app_pages_payment_steps_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/pages/payment/steps/Error */ "./assets/js/pages/payment/steps/Error.tsx");
/* harmony import */ var _app_pages_payment_steps_ErrorCB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/pages/payment/steps/ErrorCB */ "./assets/js/pages/payment/steps/ErrorCB.tsx");
/* harmony import */ var _app_pages_payment_steps_ErrorEtip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/payment/steps/ErrorEtip */ "./assets/js/pages/payment/steps/ErrorEtip.tsx");
/* harmony import */ var _app_pages_payment_steps_PromotionBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/pages/payment/steps/PromotionBlock */ "./assets/js/pages/payment/steps/PromotionBlock.tsx");
/* harmony import */ var _app_pages_payment_steps_UnavailablePmtMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/pages/payment/steps/UnavailablePmtMode */ "./assets/js/pages/payment/steps/UnavailablePmtMode.tsx");
/* harmony import */ var _app_pages_payment_steps_SignMandate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/pages/payment/steps/SignMandate */ "./assets/js/pages/payment/steps/SignMandate.tsx");
/* harmony import */ var _app_pages_payment_steps_CancelCB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/payment/steps/CancelCB */ "./assets/js/pages/payment/steps/CancelCB.tsx");
/* harmony import */ var _app_pages_payment_steps_SuccessCB__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/pages/payment/steps/SuccessCB */ "./assets/js/pages/payment/steps/SuccessCB.tsx");











function useSteps() {
  return [{
    step: _app_pages_payment_steps_Error__WEBPACK_IMPORTED_MODULE_3__["Error"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.ERROR
  }, {
    step: _app_pages_payment_steps_ErrorEtip__WEBPACK_IMPORTED_MODULE_5__["ErrorEtip"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.ERROR_ETIP
  }, {
    step: _app_pages_payment_steps_SuccessCB__WEBPACK_IMPORTED_MODULE_10__["SuccessCB"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.CONFIRMATION_CB,
    isSuccess: true
  }, {
    step: _app_pages_payment_steps_ErrorCB__WEBPACK_IMPORTED_MODULE_4__["ErrorCB"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.CONFIRMATION_CB_FAILED,
    isSuccess: false
  }, {
    step: _app_pages_payment_steps_CancelCB__WEBPACK_IMPORTED_MODULE_9__["CancelCB"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.CANCEL_CB,
    isSuccess: false
  }, {
    step: _app_pages_payment_steps_ConfirmationMandat__WEBPACK_IMPORTED_MODULE_2__["ConfirmationMandat"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.CONFIRMATION,
    isSuccess: true,
    hasSummaryBox: true,
    isOpen: false
  }, {
    step: _app_pages_payment_steps_ConfirmationMandat__WEBPACK_IMPORTED_MODULE_2__["ConfirmationMandat"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.CONFIRMATION_WITHOUT_MANDAT,
    hasSummaryBox: true,
    isSuccess: false,
    isOpen: false
  }, {
    step: _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_1__["MyPaymentMode"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.ETIP,
    hasSummaryBox: true,
    isOpen: true
  }, {
    step: _app_pages_payment_steps_CancelCB__WEBPACK_IMPORTED_MODULE_9__["CancelCB"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.CANCEL_CB,
    isSuccess: false
  }, {
    step: _app_pages_payment_steps_SignMandate__WEBPACK_IMPORTED_MODULE_8__["default"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.SIGN_MANDAT,
    hasSummaryBox: true,
    isOpen: false
  }, {
    step: _app_pages_payment_steps_UnavailablePmtMode__WEBPACK_IMPORTED_MODULE_7__["UnavailablePmtMode"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.UNAVAILABLE_PMT_MODE
  }, {
    step: _app_pages_payment_steps_PromotionBlock__WEBPACK_IMPORTED_MODULE_6__["PromotionBlock"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT_INDEX
  }, {
    step: _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_1__["MyPaymentMode"],
    path: _app_constants__WEBPACK_IMPORTED_MODULE_0__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD
  }];
}

/***/ }),

/***/ "./assets/js/pages/payment/index.tsx":
/*!*******************************************!*\
  !*** ./assets/js/pages/payment/index.tsx ***!
  \*******************************************/
/*! exports provided: PaymentContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContext", function() { return PaymentContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/background/BackgroundBubbles */ "./assets/js/components/background/BackgroundBubbles/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _payments_manage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments-manage.scss */ "./assets/js/pages/payment/payments-manage.scss");
/* harmony import */ var _payments_manage_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_payments_manage_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_pages_payment_PaymentStepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/pages/payment/PaymentStepper */ "./assets/js/pages/payment/PaymentStepper.tsx");
/* harmony import */ var _hooks_useSteps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useSteps */ "./assets/js/pages/payment/hooks/useSteps.tsx");
/* harmony import */ var _app_pages_payment_SummaryBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/payment/SummaryBox */ "./assets/js/pages/payment/SummaryBox.tsx");
/* harmony import */ var _app_constants_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/constants/index */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/pages/payment/steps/MyPaymentMode */ "./assets/js/pages/payment/steps/MyPaymentMode.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var PaymentContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
function Payment() {
  var _a, _b;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__["useIsMobile"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState2 = _slicedToArray(_useState, 2),
    managePayment = _useState2[0],
    setManagePayment = _useState2[1];
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
    state = _useLocation.state,
    search = _useLocation.search,
    pathname = _useLocation.pathname;
  var steps = Object(_hooks_useSteps__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var step = steps.find(function (step) {
    return Array.isArray(step.path) ? step.path[0] === pathname : step.path === pathname;
  });
  var params = new URLSearchParams(search);
  var hasSummaryBox = (_a = step === null || step === void 0 ? void 0 : step.hasSummaryBox) !== null && _a !== void 0 ? _a : pathname === _app_constants_index__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD && params.has('payment_mode');
  var isOpen = (_b = step === null || step === void 0 ? void 0 : step.isOpen) !== null && _b !== void 0 ? _b : pathname === _app_constants_index__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD && params.has('payment_mode') && (state === null || state === void 0 ? void 0 : state.origin) !== _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_11__["ORIGIN_MANAGE"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaymentContext.Provider, {
    value: {
      managePayment: managePayment,
      setManagePayment: setManagePayment
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_background_BackgroundBubbles__WEBPACK_IMPORTED_MODULE_3__["BackgroundBubbles"], {
    id: "payment-manage-v3",
    type: "payment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H1",
    size: isMobile ? 'L' : 'XL',
    align: "center",
    color: "light",
    weight: "black",
    className: "mb-4 text-uppercase"
  }, t('payment.title')), hasSummaryBox && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_SummaryBox__WEBPACK_IMPORTED_MODULE_9__["SummaryBox"], {
    isOpen: isOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentStepper__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
}

/***/ }),

/***/ "./assets/js/pages/payment/payments-manage.scss":
/*!******************************************************!*\
  !*** ./assets/js/pages/payment/payments-manage.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/payment/steps/CancelCB.tsx":
/*!****************************************************!*\
  !*** ./assets/js/pages/payment/steps/CancelCB.tsx ***!
  \****************************************************/
/*! exports provided: CancelCB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelCB", function() { return CancelCB; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/Confirmation */ "./assets/js/components/Confirmation/index.tsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _PaymentBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useModeListPayment */ "./assets/js/pages/payment/hooks/useModeListPayment.ts");











var CancelCB = function CancelCB() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__["useIsMobile"])();
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
    state = _useLocation.state;
  var _ref = state || '',
    solde = _ref.solde;
  var handlePreviousClick = function handlePreviousClick() {
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].DASHBOARD);
  };
  var _useModeListPayment = Object(_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_10__["default"])(),
    modeListPaymentData = _useModeListPayment.modeListPaymentData,
    isLoading = _useModeListPayment.isLoading;
  var soldeApi = (modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.balanceAmount) || '';
  var handleNextClick = function handleNextClick() {
    var indexPayment = _app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT_INDEX;
    history.push(indexPayment);
  };
  var previousButton = {
    label: t('managePayments.validate.button_dashboard'),
    align: 'left',
    onClick: handlePreviousClick,
    enabled: true
  };
  var nextButton = {
    label: t('managePayments.validate.button_reset_payment'),
    align: 'right',
    onClick: handleNextClick
  };
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    transform = _useInterweave.transform;
  var descTransCancel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_5__["Markup"], {
    transform: transform,
    content: t('payment.confirmation_cb.message_cancel')
  });
  var amount = solde ? solde : soldeApi;
  var keyCancel = amount ? 'cancel' : 'cancel_no_amount';
  var title = t('payment.confirmation_cb.title_cancel', {
    amount: amount,
    context: keyCancel
  });
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      width: isMobile ? 256 : 622,
      height: 46,
      className: "mb-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      width: isMobile ? 256 : 622,
      height: 150
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Confirmation__WEBPACK_IMPORTED_MODULE_4__["Confirmation"], {
    isSuccess: false,
    title: title,
    desc: t('payment.confirmation_cb.message_cancel'),
    descTransError: descTransCancel,
    previousButton: previousButton,
    nextButton: nextButton
  }));
};

/***/ }),

/***/ "./assets/js/pages/payment/steps/ConfirmationMandat.tsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/payment/steps/ConfirmationMandat.tsx ***!
  \**************************************************************/
/*! exports provided: ConfirmationMandat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationMandat", function() { return ConfirmationMandat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/Confirmation */ "./assets/js/components/Confirmation/index.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/payment/hooks/usePaymentParams */ "./assets/js/pages/payment/hooks/usePaymentParams.ts");
/* harmony import */ var _PaymentBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
/* harmony import */ var _app_pages_payment_hooks_useGetDocapostMandateDownload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/pages/payment/hooks/useGetDocapostMandateDownload */ "./assets/js/pages/payment/hooks/useGetDocapostMandateDownload.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_payment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useGA/tags/payment */ "./assets/js/hooks/useGA/tags/payment.ts");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_AppContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/AppContext */ "./assets/js/AppContext.tsx");
















var ConfirmationMandat = function ConfirmationMandat(_ref) {
  var isSuccess = _ref.isSuccess;
  var _a, _b, _c;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_12__["useGA"])(),
    track = _useGA.track;
  var _usePaymentParams = Object(_app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    paymentMode = _usePaymentParams.paymentMode,
    eFacture = _usePaymentParams.eFacture,
    isWithMandat = _usePaymentParams.isWithMandat;
  var isEtip = paymentMode === 'etip';
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_AppContext__WEBPACK_IMPORTED_MODULE_15__["AppContext"]),
    payment = _useContext.payment;
  var handlePreviousClick = function handlePreviousClick() {
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].DASHBOARD);
  };
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])('postPaymentEInvoice', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PAYMENT.POST_PAYMENT_E_INVOICE);
    }, {
      enabled: eFacture
    }),
    dataPostPmt = _useQuery.data,
    loadIngEfacture = _useQuery.isLoading,
    isError = _useQuery.isError;
  var message = ((_a = dataPostPmt === null || dataPostPmt === void 0 ? void 0 : dataPostPmt.data) === null || _a === void 0 ? void 0 : _a.message) || '';
  var messageNotOk = dataPostPmt && message !== _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].PAYMENT_E_INVOICE_OK;
  var title = t('payment.confirmation.title', {
    context: isEtip ? 'etip' : ''
  });
  var eInvoiceDesc = t('payment.confirmation.einvoice', {
    context: messageNotOk || isError ? 'failed' : 'success'
  });
  var eTipDesc = t('payment.confirmation.etip_message', {
    context: isWithMandat ? 'mandate' : 'no_mandate'
  });
  var description = eFacture ? eInvoiceDesc : isEtip ? eTipDesc : t('payment.confirmation.message');
  var pathDownloadMandate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].DOWNLOAD_MANDATE_PDF);
  var _useGetDocapostMandat = Object(_app_pages_payment_hooks_useGetDocapostMandateDownload__WEBPACK_IMPORTED_MODULE_11__["default"])(),
    isLoadingMandate = _useGetDocapostMandat.isLoading,
    mutate = _useGetDocapostMandat.mutate;
  var handleNextClick = function handleNextClick() {
    if (isWithMandat) {
      if (isEtip) {
        mutate();
      } else {
        window.open(pathDownloadMandate, '_blank');
      }
    } else {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].DASHBOARD);
    }
  };
  var previousButton = {
    enabled: isWithMandat,
    label: t('managePayments.validate.button_dashboard'),
    align: 'left',
    onClick: handlePreviousClick
  };
  var nextButton = {
    label: isWithMandat ? t('managePayments.validate.button_mandate') : t('managePayments.validate.button_dashboard'),
    align: 'right',
    onClick: handleNextClick,
    loader: isLoadingMandate
  };
  var managePaymentObs = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_14__["default"])('getManagePayment');
  var getIbanObs = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_14__["default"])('getIban');
  var hasIbanFromApis = !!((_b = managePaymentObs.data) === null || _b === void 0 ? void 0 : _b.data.content.contractData.iban) || !!((_c = getIbanObs.data) === null || _c === void 0 ? void 0 : _c.data.iban);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('PAYMENT_5', {
      mode_paiement: (payment === null || payment === void 0 ? void 0 : payment.paymentMode) ? _app_hooks_useGA_tags_payment__WEBPACK_IMPORTED_MODULE_13__["PAYMENT_MODE_GA_LIST"][payment.paymentMode] : '',
      iban_mandat: (hasIbanFromApis ? 'avec_iban' : 'sans_iban') + ' ' + (isWithMandat ? 'avec_mandat' : 'sans_mandat')
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_10__["default"], null, loadIngEfacture ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    width: isMobile ? 256 : 622,
    height: 46,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    width: isMobile ? 256 : 622,
    height: 150
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Confirmation__WEBPACK_IMPORTED_MODULE_4__["Confirmation"], {
    isSuccess: isSuccess,
    title: title,
    desc: description,
    previousButton: previousButton,
    nextButton: nextButton
  })));
};

/***/ }),

/***/ "./assets/js/pages/payment/steps/Error.tsx":
/*!*************************************************!*\
  !*** ./assets/js/pages/payment/steps/Error.tsx ***!
  \*************************************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PaymentBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Error = function Error() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var handlePreviousClick = function handlePreviousClick() {
    window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].CUSTOMER_SERVICE;
  };
  var handleNextClick = function handleNextClick() {
    setIsLoading(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].DASHBOARD);
  };
  var previousButton = {
    enabled: true,
    label: t('payment.error.back_customer_service'),
    align: 'left',
    alignIcon: 'right',
    onClick: handlePreviousClick
  };
  var nextButton = {
    enabled: true,
    label: t('payment.error.back_dashboard'),
    align: 'right',
    loader: isLoading,
    onClick: handleNextClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-cy": "my-payment-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3 mb-lg-4"
  }, t('payment.error.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_3__["AlertBox"], {
    children: t('payment.error.message'),
    variant: "alert"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    next: nextButton,
    previous: previousButton
  }));
};

/***/ }),

/***/ "./assets/js/pages/payment/steps/ErrorCB.tsx":
/*!***************************************************!*\
  !*** ./assets/js/pages/payment/steps/ErrorCB.tsx ***!
  \***************************************************/
/*! exports provided: ErrorCB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCB", function() { return ErrorCB; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Confirmation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/Confirmation */ "./assets/js/components/Confirmation/index.tsx");
/* harmony import */ var _hooks_useResetButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useResetButtons */ "./assets/js/pages/payment/hooks/useResetButtons.tsx");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _PaymentBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useModeListPayment */ "./assets/js/pages/payment/hooks/useModeListPayment.ts");










var ErrorCB = function ErrorCB() {
  var _useResetButtons = Object(_hooks_useResetButtons__WEBPACK_IMPORTED_MODULE_3__["useResetButtons"])(),
    previousBtn = _useResetButtons.previousBtn,
    nextBtn = _useResetButtons.nextBtn;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__["useIsMobile"])();
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    transform = _useInterweave.transform;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useModeListPayment = Object(_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    modeListPaymentData = _useModeListPayment.modeListPaymentData,
    isLoading = _useModeListPayment.isLoading;
  var amount = (modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.balanceAmount) || '';
  var descTransError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_5__["Markup"], {
    transform: transform,
    content: t('payment.confirmation_cb.message_error')
  });
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      width: isMobile ? 256 : 622,
      height: 46,
      className: "mb-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      width: isMobile ? 256 : 622,
      height: 150
    }));
  }
  var keyError = amount ? 'error' : 'error_no_amount';
  var title = t('payment.confirmation_cb.title', {
    amount: amount,
    context: keyError
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Confirmation__WEBPACK_IMPORTED_MODULE_2__["Confirmation"], {
    isSuccess: false,
    title: title,
    subTitle: t('payment.confirmation_cb.sub_title_error'),
    descTransError: descTransError,
    previousButton: previousBtn,
    nextButton: nextBtn
  }));
};

/***/ }),

/***/ "./assets/js/pages/payment/steps/ErrorEtip.tsx":
/*!*****************************************************!*\
  !*** ./assets/js/pages/payment/steps/ErrorEtip.tsx ***!
  \*****************************************************/
/*! exports provided: ErrorEtip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEtip", function() { return ErrorEtip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PaymentBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ErrorEtip = function ErrorEtip() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var handleNextClick = function handleNextClick() {
    setIsLoading(true);
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].PAYMENT.INDEX);
  };
  var nextButton = {
    enabled: true,
    label: t('payment.error.back_retry'),
    align: 'right',
    loader: isLoading,
    onClick: handleNextClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-cy": "my-payment-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3 mb-lg-4"
  }, t('payment.error.title_etip')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_3__["AlertBox"], {
    children: t('payment.error.message_etip'),
    variant: "alert"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    next: nextButton
  }));
};

/***/ }),

/***/ "./assets/js/pages/payment/steps/MyPaymentMode.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/payment/steps/MyPaymentMode.tsx ***!
  \*********************************************************/
/*! exports provided: PAYMENT_MODE_ACTION, ORIGIN_MY_PAYMENT_MODE, ORIGIN_MANAGE, CheckEfactureParam, PaymentModeList, PaymentModeManage, MyPaymentMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_MODE_ACTION", function() { return PAYMENT_MODE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGIN_MY_PAYMENT_MODE", function() { return ORIGIN_MY_PAYMENT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGIN_MANAGE", function() { return ORIGIN_MANAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckEfactureParam", function() { return CheckEfactureParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModeList", function() { return PaymentModeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModeManage", function() { return PaymentModeManage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPaymentMode", function() { return MyPaymentMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_form_PhoneForm_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/form/PhoneForm/model */ "./assets/js/form/PhoneForm/model.js");
/* harmony import */ var _app_form_PhoneForm_PhoneInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/form/PhoneForm/PhoneInput */ "./assets/js/form/PhoneForm/PhoneInput.tsx");
/* harmony import */ var _app_models_IbanSepa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/models/IbanSepa */ "./assets/js/models/IbanSepa/index.ts");
/* harmony import */ var _app_models_IbanSepa_checkboxVerified__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/models/IbanSepa/checkboxVerified */ "./assets/js/models/IbanSepa/checkboxVerified.js");
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _app_components_RegisteredIbanBlock_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/RegisteredIbanBlock/index */ "./assets/js/components/RegisteredIbanBlock/index.tsx");
/* harmony import */ var _app_components_Skeleton_Payment_MyPaymentMode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/Skeleton/Payment/MyPaymentMode */ "./assets/js/components/Skeleton/Payment/MyPaymentMode/index.tsx");
/* harmony import */ var _app_components_Skeleton_PaymentModePromotion_paymentModePromotion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/Skeleton/PaymentModePromotion/paymentModePromotion */ "./assets/js/components/Skeleton/PaymentModePromotion/paymentModePromotion.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_pages_payment_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/pages/payment/hooks/useModeListPayment */ "./assets/js/pages/payment/hooks/useModeListPayment.ts");
/* harmony import */ var _app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/pages/payment/hooks/usePaymentParams */ "./assets/js/pages/payment/hooks/usePaymentParams.ts");
/* harmony import */ var _app_pages_payment_hooks_usePostPaymentMessage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/pages/payment/hooks/usePostPaymentMessage */ "./assets/js/pages/payment/hooks/usePostPaymentMessage.ts");
/* harmony import */ var _app_pages_payment_hooks_usePostDocapostContractIban__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/pages/payment/hooks/usePostDocapostContractIban */ "./assets/js/pages/payment/hooks/usePostDocapostContractIban.ts");
/* harmony import */ var _hooks_usePostDocapostSendOtp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../hooks/usePostDocapostSendOtp */ "./assets/js/pages/payment/hooks/usePostDocapostSendOtp.ts");
/* harmony import */ var _app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/pages/payment/PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
/* harmony import */ var _app_pages_payment_steps_PaymentList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @app/pages/payment/steps/PaymentList */ "./assets/js/pages/payment/steps/PaymentList.tsx");
/* harmony import */ var _app_pages_payment_steps_PromotionBlock__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @app/pages/payment/steps/PromotionBlock */ "./assets/js/pages/payment/steps/PromotionBlock.tsx");
/* harmony import */ var _app_pages_payment_SummaryBox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @app/pages/payment/SummaryBox */ "./assets/js/pages/payment/SummaryBox.tsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _app_components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/components/tsme-react-components/components/IbanForm */ "./assets/js/components/tsme-react-components/components/IbanForm/index.jsx");
/* harmony import */ var _app_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @app/components/tsme-react-components/components/IbanForm/iban-form-model */ "./assets/js/components/tsme-react-components/components/IbanForm/iban-form-model.jsx");
/* harmony import */ var _SignMandate__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SignMandate */ "./assets/js/pages/payment/steps/SignMandate.tsx");
/* harmony import */ var _app_components_payment_PaylineMonext__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @app/components/payment/PaylineMonext */ "./assets/js/components/payment/PaylineMonext.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
var _PAYMENT_MODE_ACTION;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

































var E_FACTURE_PARAM = 'e-facture';
var MENSUALISATION_PARAM = '?payment_mode=' + _app_constants__WEBPACK_IMPORTED_MODULE_16__["PAYMENT_MODE_MENSU"];
var PRELEVEMENT_PARAM = '?payment_mode=' + _app_constants__WEBPACK_IMPORTED_MODULE_16__["PAYMENT_MODE_PRELEV"];
var KEY_MANDAT_COMPLIANT = 'Compliant';
var KEY_MANDAT_VALID = 'Valid';
var PAYMENT_MODE_ACTION = (_PAYMENT_MODE_ACTION = {}, _defineProperty(_PAYMENT_MODE_ACTION, _app_constants__WEBPACK_IMPORTED_MODULE_16__["PAYMENT_MODE_MENSU"], 'M'), _defineProperty(_PAYMENT_MODE_ACTION, _app_constants__WEBPACK_IMPORTED_MODULE_16__["PAYMENT_MODE_PRELEV"], 'P'), _defineProperty(_PAYMENT_MODE_ACTION, _app_constants__WEBPACK_IMPORTED_MODULE_16__["PAYMENT_MODE_ETIP"], 'E'), _PAYMENT_MODE_ACTION);
var ORIGIN_MY_PAYMENT_MODE = 'originMyPaymentMode';
var ORIGIN_MANAGE = 'manage';
var CheckEfactureParam = function CheckEfactureParam() {
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])(),
    search = _useLocation.search;
  var params = new URLSearchParams(search);
  var eFacture = params.get(E_FACTURE_PARAM);
  return eFacture === 'false' || !eFacture ? '' : '&e-facture=true';
};
var PaymentModeList = function PaymentModeList() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var eFactureParam = CheckEfactureParam();
  var _useModeListPayment = Object(_app_pages_payment_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_18__["default"])(),
    modeListPaymentData = _useModeListPayment.modeListPaymentData,
    isLoading = _useModeListPayment.isLoading;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    runPaymentCB = _useState2[0],
    setRunPaymentCB = _useState2[1];
  if (isLoading || !modeListPaymentData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_23__["default"], {
      "data-cy": "my-payment-promo-loading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton_PaymentModePromotion_paymentModePromotion__WEBPACK_IMPORTED_MODULE_15__["default"], null));
  }
  var _modeListPaymentData$ = modeListPaymentData.paymentModesList,
    monthlyPayment = _modeListPaymentData$.monthlyPayment,
    directDebitPayment = _modeListPaymentData$.directDebitPayment;
  if (monthlyPayment && !directDebitPayment) {
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD + MENSUALISATION_PARAM + eFactureParam, {
      origin: ORIGIN_MY_PAYMENT_MODE
    });
  } else if (!monthlyPayment && directDebitPayment) {
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD + PRELEVEMENT_PARAM + eFactureParam, {
      origin: ORIGIN_MY_PAYMENT_MODE
    });
  } else if (!monthlyPayment && !directDebitPayment) {
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT_INDEX);
  }
  var currentPaymentModeCode = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.currentPaymentModeCode;
  var summaryBoxContentProps = {
    name: (_a = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.contractBlock) === null || _a === void 0 ? void 0 : _a.name,
    address: (_b = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.contractBlock) === null || _b === void 0 ? void 0 : _b.siteAddress,
    reference: (_c = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.contractBlock) === null || _c === void 0 ? void 0 : _c.fullReference,
    titleCode: (_d = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.grayBlock) === null || _d === void 0 ? void 0 : _d.titleCode,
    amount: (_f = (_e = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.grayBlock) === null || _e === void 0 ? void 0 : _e.content) === null || _f === void 0 ? void 0 : _f.amount,
    date: (_h = (_g = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.grayBlock) === null || _g === void 0 ? void 0 : _g.content) === null || _h === void 0 ? void 0 : _h.date,
    showEtip: modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.hasEtipSignedValidMandate,
    paymentModeShow: false,
    paymentModeLabel: t('payment.summary_box.payment_mode_label', {
      context: t('payment.summary_box.actual')
    }),
    paymentModeValue: t('payment.summary_box.debit_type', {
      context: currentPaymentModeCode
    })
  };
  var listPayment = {
    monthlyPayment: true,
    directDebitPayment: true
  };
  var listProps = {
    paymentModesList: listPayment,
    hasEtipSignedValidMandate: modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.hasEtipSignedValidMandate,
    monthlyPaymentAmount: modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.monthlyPaymentAmount,
    allModes: true,
    from: ORIGIN_MY_PAYMENT_MODE
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_payment_PaylineMonext__WEBPACK_IMPORTED_MODULE_31__["default"], {
    launch: runPaymentCB,
    setRunPaymentCB: setRunPaymentCB
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_SummaryBox__WEBPACK_IMPORTED_MODULE_26__["SummaryBoxContent"], Object.assign({}, summaryBoxContentProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_steps_PaymentList__WEBPACK_IMPORTED_MODULE_24__["default"], Object.assign({
    setRunPaymentCB: setRunPaymentCB
  }, listProps)));
};
var PaymentModeManage = function PaymentModeManage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_32__["useGA"])(),
    track = _useGA.track;
  var _ref = (_c = (_b = (_a = window.tsme_data) === null || _a === void 0 ? void 0 : _a.footer) === null || _b === void 0 ? void 0 : _b.links_bottom) === null || _c === void 0 ? void 0 : _c.privacy_policy,
    link = _ref.link;
  var _useLocation2 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])(),
    _useLocation2$state = _useLocation2.state,
    state = _useLocation2$state === void 0 ? {} : _useLocation2$state,
    pathname = _useLocation2.pathname;
  var myPmtModeDatas = state.myPmtModeDatas;
  var isEtip = pathname.includes(_app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.ETIP);
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    displayInternationalIban = _useState4[0],
    setDisplayInternationalIban = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isIbanInProgress = _useState6[0],
    setIsIbanInProgress = _useState6[1];
  var _usePaymentParams = Object(_app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_19__["default"])(),
    paymentMode = _usePaymentParams.paymentMode,
    eFacture = _usePaymentParams.eFacture;
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState8 = _slicedToArray(_useState7, 2),
    isIbanOk = _useState8[0],
    setIsIbanOk = _useState8[1];
  var managePaymentObs = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_17__["default"])('getManagePayment');
  var getIbanObs = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_17__["default"])('getIban');
  var hasIbanFromApis = !!((_d = managePaymentObs.data) === null || _d === void 0 ? void 0 : _d.data.content.contractData.iban) || !!((_e = getIbanObs.data) === null || _e === void 0 ? void 0 : _e.data.iban);
  var displayExistingIban = isIbanOk === undefined ? hasIbanFromApis : isIbanOk;
  var getIbanData = (_f = getIbanObs === null || getIbanObs === void 0 ? void 0 : getIbanObs.data) === null || _f === void 0 ? void 0 : _f.data;
  var isFirstLastName = isEtip && (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.has_mandate) && (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.status_mandate) === KEY_MANDAT_VALID && (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.is_iban_different_with_search_mandate) === true;
  var mngPmtFromGetIban = {
    hasMandate: (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.has_mandate) && (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.status_mandate) !== KEY_MANDAT_COMPLIANT || false,
    contractData: {
      reference: (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.reference) || '',
      iban: (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.iban) || '',
      ibanHolder: (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.titulaire) || '',
      contractName: (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.name) || '',
      balanceAmount: (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.balance) || '',
      siteAddress: (getIbanData === null || getIbanData === void 0 ? void 0 : getIbanData.site_address) || '',
      balanceDate: ''
    },
    monthlyPaymentData: {
      amount: '',
      computationModeLabel: '',
      computationModeCode: ''
    }
  };
  var managePayment = ((_g = managePaymentObs.data) === null || _g === void 0 ? void 0 : _g.data.content) ? managePaymentObs.data.data.content : mngPmtFromGetIban;
  var ibanProcessed = (_h = state === null || state === void 0 ? void 0 : state.myPmtModeDatas) === null || _h === void 0 ? void 0 : _h.iban;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if ((ibanProcessed === null || ibanProcessed === void 0 ? void 0 : ibanProcessed.match(/((X{4} ){5})/g)) === null) {
      setIsIbanOk(false);
    }
    if (ibanProcessed && !(ibanProcessed === null || ibanProcessed === void 0 ? void 0 : ibanProcessed.match(/(^FR|^..XX)/g))) {
      setDisplayInternationalIban(true);
    }
  }, [ibanProcessed]);
  var firstOrigin = state === null || state === void 0 ? void 0 : state.origin;
  var postPaymentMessage = Object(_app_pages_payment_hooks_usePostPaymentMessage__WEBPACK_IMPORTED_MODULE_20__["default"])({
    managePayment: managePayment,
    paymentMode: paymentMode,
    eFacture: eFacture,
    firstOrigin: firstOrigin
  });
  var postDocapostContractIban = Object(_app_pages_payment_hooks_usePostDocapostContractIban__WEBPACK_IMPORTED_MODULE_21__["default"])();
  var postDocapostSendOtp = Object(_hooks_usePostDocapostSendOtp__WEBPACK_IMPORTED_MODULE_22__["default"])();
  var isMandatOk = !!(managePayment === null || managePayment === void 0 ? void 0 : managePayment.hasMandate);
  var isComplete = displayExistingIban && !isMandatOk;
  var isValidate = displayExistingIban && isMandatOk && !isFirstLastName;
  var formContext = 'edit';
  if (isIbanInProgress) {
    formContext = 'modify';
  } else if (isComplete) {
    formContext = 'complete';
  } else if (isValidate) {
    formContext = 'validate';
  }
  var myPaymentModeSchema = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var ibanSchema = displayInternationalIban ? Object(_app_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_29__["internationalIbanInputSchema"])(t) : Object(_app_components_tsme_react_components_components_IbanForm_iban_form_model__WEBPACK_IMPORTED_MODULE_29__["ibanInputSchema"])(t);
    var phoneInputSchema = isEtip ? Object(_app_form_PhoneForm_model__WEBPACK_IMPORTED_MODULE_6__["frenchMobilePhoneInputSchema"])() : Object(_app_form_PhoneForm_model__WEBPACK_IMPORTED_MODULE_6__["phoneNumberInputSchema"])(t);
    if (isFirstLastName && hasIbanFromApis) {
      return _app_models_IbanSepa__WEBPACK_IMPORTED_MODULE_8__["accountOwnerSchema"].concat(_app_models_IbanSepa_checkboxVerified__WEBPACK_IMPORTED_MODULE_9__["checkboxVerifiedSchema"]);
    } else if (isFirstLastName && !hasIbanFromApis) {
      return _app_models_IbanSepa__WEBPACK_IMPORTED_MODULE_8__["accountOwnerSchema"].concat(ibanSchema);
    } else if (isValidate) {
      return _app_models_IbanSepa_checkboxVerified__WEBPACK_IMPORTED_MODULE_9__["checkboxVerifiedSchema"];
    } else if (isComplete) {
      return _app_models_IbanSepa__WEBPACK_IMPORTED_MODULE_8__["accountOwnerSchema"].concat(phoneInputSchema).concat(_app_models_IbanSepa_checkboxVerified__WEBPACK_IMPORTED_MODULE_9__["checkboxVerifiedSchema"]);
    } else if (!displayExistingIban && isMandatOk) {
      return _app_models_IbanSepa__WEBPACK_IMPORTED_MODULE_8__["accountOwnerSchema"].concat(ibanSchema);
    } else if (!displayExistingIban && !isMandatOk) {
      return _app_models_IbanSepa__WEBPACK_IMPORTED_MODULE_8__["accountOwnerSchema"].concat(phoneInputSchema).concat(ibanSchema);
    }
  }, [isFirstLastName, isValidate, isComplete, isMandatOk, displayInternationalIban, displayExistingIban]);
  var nextButton = {
    label: isEtip && isMandatOk ? t('managePayments.form.validate_and_pay') : t('managePayments.form.goNext'),
    align: 'right',
    loader: isEtip ? postDocapostContractIban.isLoading || postDocapostSendOtp.isLoading : postPaymentMessage.isLoading
  };
  var eFactureParam = CheckEfactureParam();
  var eFactFirstParam = eFactureParam !== '' ? '?e-facture=true' : '';
  var handlePreviousClick = function handlePreviousClick() {
    var _a;
    var origin = (_a = state.origin) !== null && _a !== void 0 ? _a : state.firstOrigin;
    if (!displayExistingIban && isIbanInProgress) {
      setIsIbanOk(true);
      setIsIbanInProgress(false);
    } else if (origin === _app_pages_payment_steps_PromotionBlock__WEBPACK_IMPORTED_MODULE_25__["ORIGIN_PROMOTION_BLOCK"]) {
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT_INDEX + eFactFirstParam);
    } else if (origin === ORIGIN_MY_PAYMENT_MODE) {
      history.push(Object(react_router__WEBPACK_IMPORTED_MODULE_2__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD + eFactFirstParam));
    }
  };
  var previousButton = {
    enabled: true,
    disabled: postPaymentMessage.isLoading,
    label: t('managePayments.form.goBack'),
    align: 'left',
    onClick: handlePreviousClick
  };
  var onClickModifyIban = function onClickModifyIban() {
    track('PAYMENT_6');
    setIsIbanOk(false);
    setIsIbanInProgress(true);
  };
  var handleSubmit = function handleSubmit(_a, _b) {
    var _c, _d, _e;
    var iban = _a.iban,
      surname = _a.surname,
      name = _a.name,
      phoneNumber = _a.phoneNumber,
      values = __rest(_a, ["iban", "surname", "name", "phoneNumber"]);
    var setFieldError = _b.setFieldError;
    var isMensuPrelev = _app_constants__WEBPACK_IMPORTED_MODULE_16__["PAYMENT_MODE_ETIP"] !== paymentMode;
    var ibanTemp = iban || ((_c = managePayment === null || managePayment === void 0 ? void 0 : managePayment.contractData) === null || _c === void 0 ? void 0 : _c.iban) || '';
    var currentIban = Object(_app_services_Utils__WEBPACK_IMPORTED_MODULE_10__["concatIban"])(values, 'iban_field', _app_constants__WEBPACK_IMPORTED_MODULE_16__["IBAN_FIELDS"]);
    if (isMensuPrelev) {
      var params = {
        paymentMode: PAYMENT_MODE_ACTION[paymentMode],
        iban: currentIban || ibanTemp
      };
      if (surname) {
        params['firstName'] = surname;
      }
      if (name) {
        params['lastName'] = name;
      }
      if (phoneNumber) {
        params['mobilePhone'] = phoneNumber;
      }
      postPaymentMessage.mutate(params, {
        onError: function onError(_ref2) {
          var response = _ref2.response;
          var _a;
          var data = response.data,
            status = response.status;
          if (status === 400 && ((_a = data === null || data === void 0 ? void 0 : data.validation_errors) === null || _a === void 0 ? void 0 : _a.mobilePhone)) {
            setFieldError('phoneNumber', t('phoneNumber.errors.invalid'));
          } else if (status >= 500) {
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.ERROR);
          }
        }
      });
    } else {
      // eTIP payment
      var _params = {};
      if (surname) {
        _params.first_name = surname;
      }
      if (name) {
        _params.last_name = name;
      }
      if (phoneNumber) {
        _params.mobile_phone = Object(_app_services_Utils__WEBPACK_IMPORTED_MODULE_10__["frenchMobileShort"])(phoneNumber);
      }
      if (!surname && !name && ((_d = managePayment === null || managePayment === void 0 ? void 0 : managePayment.contractData) === null || _d === void 0 ? void 0 : _d.ibanHolder)) {
        _params.holder = (_e = managePayment === null || managePayment === void 0 ? void 0 : managePayment.contractData) === null || _e === void 0 ? void 0 : _e.ibanHolder;
      }
      if (values.iban_field_1) {
        for (var _i2 = 0, _Object$entries = Object.entries(values); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (key.includes('iban_field_')) {
            _params[key] = value;
          }
        }
      }
      postDocapostContractIban.mutate(_params, {
        onSuccess: function onSuccess(_ref3) {
          var data = _ref3.data;
          var _ref4 = data || '',
            message = _ref4.message;
          if (message !== _app_constants__WEBPACK_IMPORTED_MODULE_16__["CODES"].OK) {
            history.push({
              pathname: _app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.ERROR_ETIP
            });
            return;
          }
          if (managePayment === null || managePayment === void 0 ? void 0 : managePayment.hasMandate) {
            var search = "?payment_mode=etip&mandat=false";
            history.push({
              pathname: _app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.CONFIRMATION,
              search: search
            });
          } else {
            postDocapostSendOtp.mutate(null, {
              onSuccess: function onSuccess() {
                var myPmtModeDatas = Object.assign({}, _params);
                if (_params.hasOwnProperty('first_name')) {
                  myPmtModeDatas.firstName = _params.first_name;
                }
                if (_params.hasOwnProperty('last_name')) {
                  myPmtModeDatas.lastName = _params.last_name;
                }
                if (_params.hasOwnProperty('mobile_phone')) {
                  myPmtModeDatas.mobilePhone = _params.mobile_phone;
                }
                history.push({
                  pathname: _app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.ETIP,
                  state: {
                    origin: ORIGIN_MANAGE,
                    firstOrigin: firstOrigin,
                    myPmtModeDatas: myPmtModeDatas
                  }
                });
              }
            });
          }
        },
        onError: function onError(_ref5) {
          var response = _ref5.response;
          var _a;
          var data = response.data,
            status = response.status;
          if (status === 400 && ((_a = data === null || data === void 0 ? void 0 : data.validation_errors) === null || _a === void 0 ? void 0 : _a.mobilePhone)) {
            setFieldError('phoneNumber', t('phoneNumber.errors.invalid'));
          } else if (status >= 500) {
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.ERROR_ETIP);
          } else {
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_16__["ROUTES"].PAYMENT.ERROR_ETIP);
          }
        }
      });
    }
  };
  if (!managePayment.contractData.reference) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_23__["default"], {
      "data-cy": "my-payment-loading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton_Payment_MyPaymentMode__WEBPACK_IMPORTED_MODULE_14__["default"], null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_23__["default"], {
    "data-cy": "my-payment-mode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_27__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3 mb-lg-4"
  }, t('payment.IBANForm.title', {
    context: formContext
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
      surname: (_k = (_j = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.firstName) !== null && _j !== void 0 ? _j : myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.first_name) !== null && _k !== void 0 ? _k : '',
      name: (_m = (_l = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.lastName) !== null && _l !== void 0 ? _l : myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.last_name) !== null && _m !== void 0 ? _m : '',
      phoneNumber: (_p = (_o = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.mobilePhone) !== null && _o !== void 0 ? _o : myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.mobile_phone) !== null && _p !== void 0 ? _p : '',
      iban: (_q = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.iban) !== null && _q !== void 0 ? _q : '',
      iban_field_1: (_r = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.iban_field_1) !== null && _r !== void 0 ? _r : '',
      iban_field_2: (_s = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.iban_field_2) !== null && _s !== void 0 ? _s : '',
      iban_field_3: (_t = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.iban_field_3) !== null && _t !== void 0 ? _t : '',
      iban_field_4: (_u = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.iban_field_4) !== null && _u !== void 0 ? _u : '',
      iban_field_5: (_v = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.iban_field_5) !== null && _v !== void 0 ? _v : '',
      iban_field_6: (_w = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.iban_field_6) !== null && _w !== void 0 ? _w : '',
      iban_field_7: (_x = myPmtModeDatas === null || myPmtModeDatas === void 0 ? void 0 : myPmtModeDatas.iban_field_7) !== null && _x !== void 0 ? _x : '',
      checkboxVerified: false
    },
    validationSchema: myPaymentModeSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: handleSubmit
  }, function (_ref6) {
    var errors = _ref6.errors,
      touched = _ref6.touched,
      handleBlur = _ref6.handleBlur,
      handleChange = _ref6.handleChange,
      handleSubmit = _ref6.handleSubmit,
      values = _ref6.values,
      setFieldValue = _ref6.setFieldValue;
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var onToggleVerified = function onToggleVerified(_ref7) {
      var target = _ref7.target;
      setFieldValue('checkboxVerified', target.checked, true);
    };
    var onChangeText = function onChangeText(e) {
      var value = e.target.value;
      e.target.value = Object(_app_services_Utils__WEBPACK_IMPORTED_MODULE_10__["capitalizeValue"])(value);
      handleChange(e);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "owner-info"
    }, (!displayExistingIban || !isMandatOk || isFirstLastName) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-9 mb-3 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_27__["SzInput"], {
      name: "name",
      id: "name",
      value: values.name,
      autocomplete: "family-name",
      onChange: onChangeText,
      onBlur: handleBlur,
      label: t('payment.IBANForm.ownerName'),
      placeholder: t('customerService.placeholder_lastName'),
      variant: "outlined",
      valid: !errors.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      customDisplay: touched.name && errors.name,
      field: "name"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-9 mb-3 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_27__["SzInput"], {
      name: "surname",
      id: "surname",
      value: values.surname,
      autocomplete: "given-name",
      onChange: onChangeText,
      onBlur: handleBlur,
      label: t('payment.IBANForm.ownerSurname'),
      placeholder: t('customerService.placeholder_firstName'),
      variant: "outlined",
      valid: !errors.surname
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      customDisplay: touched.surname && errors.surname,
      field: "surname"
    }))), !isValidate && !isMandatOk && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_PhoneForm_PhoneInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
      info: t('phoneNumber.info'),
      label: isEtip ? 'payment.etip.mobile_phone_label' : 'payment.IBANForm.phoneNumber',
      onlyFrenchMobile: isEtip
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-10 px-0",
      "data-cy": "privacy-policy"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_27__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "light"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
      i18nKey: "payment.IBANForm.privacy_policy",
      components: {
        redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
          decorate: true,
          to: link,
          target: "_blank",
          className: "sz-typo-caption font-family-medium"
        })
      }
    })))))), displayExistingIban ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_RegisteredIbanBlock_index__WEBPACK_IMPORTED_MODULE_13__["RegisteredIbanBlock"], {
      showOwner: isValidate,
      holderValue: ((_a = managePayment === null || managePayment === void 0 ? void 0 : managePayment.contractData) === null || _a === void 0 ? void 0 : _a.ibanHolder) || undefined,
      ibanValue: (_c = (_b = state === null || state === void 0 ? void 0 : state.myPmtModeDatas) === null || _b === void 0 ? void 0 : _b.iban) !== null && _c !== void 0 ? _c : (_d = managePayment === null || managePayment === void 0 ? void 0 : managePayment.contractData) === null || _d === void 0 ? void 0 : _d.iban
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_27__["SzButton"], {
      id: "ibanModify",
      onClick: onClickModifyIban,
      variant: "outlined",
      border: "soft",
      className: "mt-3",
      isDisabled: postPaymentMessage.isLoading
    }, t('payment.IBANForm.ibanModify')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-5 border-bottom border-light"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_27__["SzCheckbox"], {
      name: "checkboxVerified",
      id: "checkboxVerified",
      label: t('payment.IBANForm.checkboxValidateData'),
      type: "checkbox",
      checked: values.checkboxVerified,
      onChange: onToggleVerified,
      className: "mt-3 mb-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      customDisplay: touched.checkboxVerified && errors.checkboxVerified,
      field: "checkboxVerified"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_tsme_react_components_components_IbanForm__WEBPACK_IMPORTED_MODULE_28__["default"], {
      isInternational: !isEtip,
      displayInternationalIban: displayInternationalIban,
      setDisplayInternationalIban: setDisplayInternationalIban,
      disabledInternationalIban: postPaymentMessage.isLoading,
      validationError: (postPaymentMessage === null || postPaymentMessage === void 0 ? void 0 : postPaymentMessage.isError) && ((_h = (_g = (_f = (_e = postPaymentMessage === null || postPaymentMessage === void 0 ? void 0 : postPaymentMessage.error) === null || _e === void 0 ? void 0 : _e.response) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.validation_errors) === null || _h === void 0 ? void 0 : _h.iban),
      resetValidationError: function resetValidationError() {
        return postPaymentMessage.reset();
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_11__["default"], {
      next: nextButton,
      previous: previousButton
    }));
  })));
};
var MyPaymentMode = function MyPaymentMode() {
  var _useLocation3 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])(),
    state = _useLocation3.state;
  var _usePaymentParams2 = Object(_app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_19__["default"])(),
    paymentMode = _usePaymentParams2.paymentMode;
  if ((state === null || state === void 0 ? void 0 : state.origin) === ORIGIN_MANAGE) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignMandate__WEBPACK_IMPORTED_MODULE_30__["default"], null);
  } else if (paymentMode) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaymentModeManage, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaymentModeList, null);
};

/***/ }),

/***/ "./assets/js/pages/payment/steps/PaymentList.tsx":
/*!*******************************************************!*\
  !*** ./assets/js/pages/payment/steps/PaymentList.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_hooks_useGetAvailablePaymentModes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useGetAvailablePaymentModes */ "./assets/js/hooks/useGetAvailablePaymentModes.ts");
/* harmony import */ var _app_models_IbanSepa_SelectPaymentMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/models/IbanSepa/SelectPaymentMode */ "./assets/js/models/IbanSepa/SelectPaymentMode.js");
/* harmony import */ var _app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/pages/payment/steps/MyPaymentMode */ "./assets/js/pages/payment/steps/MyPaymentMode.tsx");
/* harmony import */ var _app_components_BlockRadio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/BlockRadio */ "./assets/js/components/BlockRadio/index.tsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_payment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/hooks/useGA/tags/payment */ "./assets/js/hooks/useGA/tags/payment.ts");
/* harmony import */ var _app_AppContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/AppContext */ "./assets/js/AppContext.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function PaymentList(props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_13__["useGA"])(),
    track = _useGA.track;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var paymentModesList = props.paymentModesList,
    hasEtipSignedValidMandate = props.hasEtipSignedValidMandate,
    monthlyPaymentAmount = props.monthlyPaymentAmount,
    allModes = props.allModes,
    from = props.from,
    setRunPaymentCB = props.setRunPaymentCB;
  var paymentModesFromApi = Object(_app_hooks_useGetAvailablePaymentModes__WEBPACK_IMPORTED_MODULE_6__["default"])(paymentModesList, hasEtipSignedValidMandate, monthlyPaymentAmount, allModes);
  var _paymentModesFromApi = _toArray(paymentModesFromApi),
    firstPaymentMode = _paymentModesFromApi[0],
    restPaymentModes = _paymentModesFromApi.slice(1);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var eFactureParam = Object(_app_pages_payment_steps_MyPaymentMode__WEBPACK_IMPORTED_MODULE_8__["CheckEfactureParam"])();
  var isMutatingBankCard = Object(react_query__WEBPACK_IMPORTED_MODULE_12__["useIsMutating"])({
    mutationKey: ['getBankCard']
  });
  var isIntranet = window.tsme_data.isIntranet;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_AppContext__WEBPACK_IMPORTED_MODULE_15__["AppContext"]),
    setPayment = _useContext.setPayment;
  var nextButton = {
    className: 'choose-paiement-mode',
    label: t('payment.promotion.button'),
    align: 'right',
    loader: isLoading || isMutatingBankCard === 1,
    disabled: isIntranet
  };
  var onSubmit = function onSubmit(_ref) {
    var paymentMode = _ref.paymentMode;
    setPayment({
      paymentMode: paymentMode
    });
    track('PAYMENT_3', {
      mode_paiement: _app_hooks_useGA_tags_payment__WEBPACK_IMPORTED_MODULE_14__["PAYMENT_MODE_GA_LIST"][paymentMode]
    });
    if (paymentMode !== _app_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE_LIST"].BANK_CARD_PAYMENT) {
      setIsLoading(true);
    }
    switch (paymentMode) {
      case _app_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE_LIST"].MONTHLY_PAYMENT:
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD + '?payment_mode=' + _app_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE_MENSU"] + eFactureParam, {
          origin: from
        });
        break;
      case _app_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE_LIST"].DIRECT_DEBIT_PAYMENT:
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD + '?payment_mode=' + _app_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE_PRELEV"] + eFactureParam, {
          origin: from
        });
        break;
      case _app_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE_LIST"].ETIP:
        history.push(_app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].PAYMENT.ETIP, {
          origin: from
        });
        break;
      case _app_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE_LIST"].TIPI:
        window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].MANAGE_PAYMENTS_URL.TIPI;
        break;
      case _app_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE_LIST"].BANK_CARD_PAYMENT:
        setRunPaymentCB(true);
        break;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4",
    "data-cy": "payment-list-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzTypographie"], {
    variant: "H2",
    size: "M",
    weight: "medium",
    className: "text-dark mb-0"
  }, t("payment.list.title"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      paymentMode: 'monthlyPayment'
    },
    validationSchema: _app_models_IbanSepa_SelectPaymentMode__WEBPACK_IMPORTED_MODULE_7__["SelectPaymentModeSchema"],
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: onSubmit
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
      values = _ref2.values,
      setFieldValue = _ref2.setFieldValue,
      errors = _ref2.errors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-4",
      "data-cy": "promoted-pmt-mode"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_BlockRadio__WEBPACK_IMPORTED_MODULE_9__["BlockRadio"], {
      id: firstPaymentMode.value,
      name: firstPaymentMode.value,
      label: firstPaymentMode.label,
      value: firstPaymentMode.value,
      isReco: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzTypographie"], {
      variant: "body",
      size: "M",
      weight: "regular",
      className: "text-dark mt-1"
    }, firstPaymentMode.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "border-top-gray sz-border-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzIcon"], {
      variant: "line",
      icon: "information-circle",
      className: "sz-typo-body sm text-dark mr-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "light",
      className: "text-dark"
    }, firstPaymentMode.info))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "other-pmt-mode-list"
    }, restPaymentModes.length && restPaymentModes.map(function (item, index) {
      var label = item.label,
        value = item.value,
        text = item.text;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_BlockRadio__WEBPACK_IMPORTED_MODULE_9__["BlockRadio"], {
        id: value,
        key: index,
        name: value,
        label: label,
        value: value,
        className: "my-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_11__["SzTypographie"], {
        variant: "caption",
        size: "M",
        weight: "regular",
        className: "text-dark mt-1"
      }, text));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      field: "paymentMode",
      customDisplay: errors.paymentMode
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_10__["default"], {
      next: nextButton
    }));
  }));
}

/***/ }),

/***/ "./assets/js/pages/payment/steps/PromotionBlock.tsx":
/*!**********************************************************!*\
  !*** ./assets/js/pages/payment/steps/PromotionBlock.tsx ***!
  \**********************************************************/
/*! exports provided: MODE_MENSUALISATION, MODE_PRELEVEMENT, PAYMENT_MODE_KEY, ORIGIN_PROMOTION_BLOCK, PromotionBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_MENSUALISATION", function() { return MODE_MENSUALISATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_PRELEVEMENT", function() { return MODE_PRELEVEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_MODE_KEY", function() { return PAYMENT_MODE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGIN_PROMOTION_BLOCK", function() { return ORIGIN_PROMOTION_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionBlock", function() { return PromotionBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_components_Skeleton_PaymentModePromotion_paymentModePromotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/Skeleton/PaymentModePromotion/paymentModePromotion */ "./assets/js/components/Skeleton/PaymentModePromotion/paymentModePromotion.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/ez-components/modules/Tips */ "./assets/js/ez-components/modules/Tips.jsx");
/* harmony import */ var _app_pages_payment_steps_PaymentList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/payment/steps/PaymentList */ "./assets/js/pages/payment/steps/PaymentList.tsx");
/* harmony import */ var _app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/pages/payment/PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
/* harmony import */ var _SummaryBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SummaryBox */ "./assets/js/pages/payment/SummaryBox.tsx");
/* harmony import */ var _app_pages_payment_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/pages/payment/hooks/useModeListPayment */ "./assets/js/pages/payment/hooks/useModeListPayment.ts");
/* harmony import */ var _app_components_payment_PaylineMonext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/payment/PaylineMonext */ "./assets/js/components/payment/PaylineMonext.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_payment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/hooks/useGA/tags/payment */ "./assets/js/hooks/useGA/tags/payment.ts");
/* harmony import */ var _app_AppContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/AppContext */ "./assets/js/AppContext.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var MODE_MENSUALISATION = 'M';
var MODE_PRELEVEMENT = 'P';
var PAYMENT_MODE_KEY = '?payment_mode=';
var ORIGIN_PROMOTION_BLOCK = 'promotionBlock';
var PromotionBlock = function PromotionBlock() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_15__["useGA"])(),
    track = _useGA.track;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoaderButton = _useState2[0],
    setIsLoaderButton = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    runPaymentCB = _useState4[0],
    setRunPaymentCB = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showList = _useState6[0],
    setShowList = _useState6[1];
  var _useModeListPayment = Object(_app_pages_payment_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    modeListPaymentData = _useModeListPayment.modeListPaymentData,
    isLoading = _useModeListPayment.isLoading,
    promotedValue = _useModeListPayment.promotedValue;
  var isMutatingBankCard = Object(react_query__WEBPACK_IMPORTED_MODULE_14__["useIsMutating"])({
    mutationKey: ['getBankCard']
  });
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_AppContext__WEBPACK_IMPORTED_MODULE_17__["AppContext"]),
    setPayment = _useContext.setPayment;
  if (isLoading || !modeListPaymentData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      "data-cy": "my-payment-promo-loading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton_PaymentModePromotion_paymentModePromotion__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  }
  var currentPaymentModeCode = modeListPaymentData.currentPaymentModeCode;
  var isPaymentModeMorP = [MODE_MENSUALISATION, MODE_PRELEVEMENT].includes(currentPaymentModeCode);
  if (!promotedValue && !isPaymentModeMorP) {
    track('PAYMENT_4', {
      mode_paiement: '',
      iban_mandat: '',
      code_erreur: 'paiements_indisponibles'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: _app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].PAYMENT.UNAVAILABLE_PMT_MODE
    });
  }
  var summaryBoxContentProps = {
    name: modeListPaymentData.contractBlock.name,
    address: modeListPaymentData.contractBlock.siteAddress,
    reference: modeListPaymentData.contractBlock.fullReference,
    titleCode: modeListPaymentData.grayBlock.titleCode,
    amount: modeListPaymentData.grayBlock.content.amount,
    date: modeListPaymentData.grayBlock.content.date,
    showEtip: modeListPaymentData.hasEtipSignedValidMandate,
    paymentModeShow: showList ? false : isPaymentModeMorP,
    paymentModeLabel: t('payment.summary_box.payment_mode_label', {
      context: t('payment.summary_box.actual')
    }),
    paymentModeValue: t('payment.summary_box.debit_type', {
      context: currentPaymentModeCode
    })
  };
  var listProps = {
    paymentModesList: modeListPaymentData.paymentModesList,
    hasEtipSignedValidMandate: modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.hasEtipSignedValidMandate,
    monthlyPaymentAmount: modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.monthlyPaymentAmount,
    allModes: true,
    from: ORIGIN_PROMOTION_BLOCK
  };
  var count = Object.values(modeListPaymentData.paymentModesList).filter(function (item) {
    return item;
  }).length;
  var showListButton = count >= 2;
  var textAlreadyBestMode = !promotedValue ? t('payment.promotion.alreadyBestMode', {
    context: currentPaymentModeCode === MODE_MENSUALISATION ? MODE_MENSUALISATION : MODE_PRELEVEMENT
  }) : '';
  var promotedValueContext = {
    context: promotedValue
  };
  var textTip = t('payment.promotion.tips', promotedValueContext);
  var showTips = promotedValue && !['etip', 'bankCardPayment'].includes(promotedValue);
  var textOtherInfoEtip = t('payment.promotion.text_other_info_etip', {
    context: modeListPaymentData.hasEtipSignedValidMandate ? 'mandat' : 'no_mandat'
  });
  var handleNextClick = function handleNextClick() {
    if (null !== promotedValue) {
      setPayment({
        paymentMode: promotedValue
      });
      track('PAYMENT_1', {
        mode_paiement: _app_hooks_useGA_tags_payment__WEBPACK_IMPORTED_MODULE_16__["PAYMENT_MODE_GA_LIST"][promotedValue]
      });
    }
    if (promotedValue !== _app_constants__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_MODE_LIST"].BANK_CARD_PAYMENT) {
      setIsLoaderButton(true);
    }
    switch (promotedValue) {
      case _app_constants__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_MODE_LIST"].MONTHLY_PAYMENT:
        history.push({
          pathname: _app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD,
          search: PAYMENT_MODE_KEY + _app_constants__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_MODE_MENSU"],
          state: {
            origin: ORIGIN_PROMOTION_BLOCK
          }
        });
        break;
      case _app_constants__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_MODE_LIST"].DIRECT_DEBIT_PAYMENT:
        history.push({
          pathname: _app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD,
          search: PAYMENT_MODE_KEY + _app_constants__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_MODE_PRELEV"],
          state: {
            origin: ORIGIN_PROMOTION_BLOCK
          }
        });
        break;
      case _app_constants__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_MODE_LIST"].ETIP:
        window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].PAYMENT.ETIP;
        break;
      case _app_constants__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_MODE_LIST"].TIPI:
        window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].MANAGE_PAYMENTS_URL.TIPI;
        break;
      case _app_constants__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_MODE_LIST"].BANK_CARD_PAYMENT:
        setRunPaymentCB(true);
        break;
    }
  };
  var nextButton = {
    label: t('payment.promotion.button'),
    align: 'right',
    loader: isLoaderButton || isMutatingBankCard === 1,
    onClick: handleNextClick
  };
  var handleOtherPaymentsClick = function handleOtherPaymentsClick() {
    track('PAYMENT_2');
    setShowList(true);
  };
  var otherPaymentsButton = {
    id: 'allPaymentMods',
    label: t('payment.promotion.buttonOtherPayments'),
    align: 'right',
    variant: 'tertiary',
    arrow: true,
    onClick: handleOtherPaymentsClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_payment_PaylineMonext__WEBPACK_IMPORTED_MODULE_13__["default"], {
    launch: runPaymentCB,
    setRunPaymentCB: setRunPaymentCB
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SummaryBox__WEBPACK_IMPORTED_MODULE_11__["SummaryBoxContent"], Object.assign({}, summaryBoxContentProps)), showList ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_steps_PaymentList__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({
    setRunPaymentCB: setRunPaymentCB
  }, listProps)) : promotedValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "promotionBlock border sz-border-1 border-expert-blue rounded-2 px-4 py-3 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-1"
  }, t('payment.promotion.title', promotedValueContext)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    variant: "body",
    className: "text-dark mb-3"
  }, t('payment.promotion.description', Object.assign(Object.assign({}, promotedValueContext), {
    monthlyAmount: modeListPaymentData.monthlyPaymentAmount
  }))), showTips && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_modules_Tips__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isGoodToKnow: false,
    className: "mb-3"
  }, textTip), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-row align-items-center top-grey-line pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzIcon"], {
    variant: "line",
    icon: "information-circle",
    className: "mr-3 mb-3 promotion-info-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    variant: "body",
    className: "text-dark promotion-info-text"
  }, t('payment.promotion.other_info', Object.assign(Object.assign({}, promotedValueContext), {
    text_other_info_etip: textOtherInfoEtip
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    next: nextButton
  })), showListButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    next: otherPaymentsButton
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_4__["AlertBox"], {
    variant: "info",
    className: "mt-4"
  }, textAlreadyBestMode));
};

/***/ }),

/***/ "./assets/js/pages/payment/steps/SignMandate.tsx":
/*!*******************************************************!*\
  !*** ./assets/js/pages/payment/steps/SignMandate.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignMandate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _PaymentBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
/* harmony import */ var _app_form_MandateForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/form/MandateForm */ "./assets/js/form/MandateForm.tsx");
/* harmony import */ var _app_components_DownloadMandate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/DownloadMandate */ "./assets/js/components/DownloadMandate.tsx");
/* harmony import */ var _app_hooks_useSetOtp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useSetOtp */ "./assets/js/hooks/useSetOtp.ts");
/* harmony import */ var _app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/pages/payment/hooks/usePaymentParams */ "./assets/js/pages/payment/hooks/usePaymentParams.ts");
/* harmony import */ var _app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks/useSearchParams */ "./assets/js/hooks/useSearchParams.ts");
/* harmony import */ var _app_components_Skeleton_Payment_MyPaymentMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/Skeleton/Payment/MyPaymentMode */ "./assets/js/components/Skeleton/Payment/MyPaymentMode/index.tsx");
/* harmony import */ var _app_pages_payment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/pages/payment */ "./assets/js/pages/payment/index.tsx");
/* harmony import */ var _app_services_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_hooks_useGA_tags_payment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useGA/tags/payment */ "./assets/js/hooks/useGA/tags/payment.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function SignMandate() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_12__["useGA"])(),
    track = _useGA.track;
  var _usePaymentParams = Object(_app_pages_payment_hooks_usePaymentParams__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    eFacture = _usePaymentParams.eFacture,
    isRouteEtip = _usePaymentParams.isRouteEtip,
    paymentMode = _usePaymentParams.paymentMode;
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
    state = _useLocation.state,
    search = _useLocation.search;
  var mobilePhone = state.myPmtModeDatas.mobilePhone;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_pages_payment__WEBPACK_IMPORTED_MODULE_10__["PaymentContext"]),
    managePayment = _useContext.managePayment;
  var searchParams = Object(_app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    errorReset = _useState2[0],
    setErrorReset = _useState2[1];
  var finalizePaymentMessage = Object(_app_hooks_useSetOtp__WEBPACK_IMPORTED_MODULE_6__["default"])({
    url: isRouteEtip ? _app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].DOCAPOSTE.SIGN_MANDATE : _app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PAYMENT.FINALIZE_PAYMENT_MSG,
    onSuccess: function onSuccess(_ref) {
      var data = _ref.data;
      var _ref2 = data || '',
        code = _ref2.code,
        message = _ref2.message;
      if (!isRouteEtip) {
        if (message !== _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].OK && message !== _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].KO_CODE_OTP) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.ERROR);
          return;
        } else if (message === _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].KO_CODE_OTP) {
          setErrorReset(true);
        }
      } else {
        if (code !== _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].SUCCESS && code !== _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].INCORRECT_INPUT) {
          history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.ERROR_ETIP);
          return;
        }
        if (code === _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].INCORRECT_INPUT) {
          setErrorReset(true);
        }
      }
      if (isRouteEtip ? code === _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].SUCCESS : message === _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].OK) {
        if (eFacture) {
          searchParams.set('e-facture', 'true');
        }
        if (isRouteEtip) {
          searchParams.set('payment_mode', 'etip');
        }
        searchParams.set('mandat', 'true');
        history.push({
          pathname: _app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.CONFIRMATION,
          search: searchParams.toString()
        });
      }
    },
    onError: function onError(_ref3) {
      var response = _ref3.response;
      var _a;
      track('PAYMENT_4', {
        mode_paiement: paymentMode ? _app_hooks_useGA_tags_payment__WEBPACK_IMPORTED_MODULE_13__["PAYMENT_MODE_GA_LIST"][paymentMode] : '',
        iban_mandat: 'has_iban no_mandate',
        code_erreur: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.code
      });
      if (isRouteEtip && response.status === 502 && response.data.code === _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].INCORRECT_INPUT || !isRouteEtip && response.data.message === _app_constants__WEBPACK_IMPORTED_MODULE_2__["CODES"].KO_CODE_OTP) {
        setErrorReset(true);
      } else {
        isRouteEtip ? history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.ERROR_ETIP) : history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.ERROR);
      }
    }
  });
  var onPrevClick = function onPrevClick() {
    var myPmtModeDatas = state.myPmtModeDatas,
      firstOrigin = state.firstOrigin;
    if (isRouteEtip) {
      history.push({
        pathname: _app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.ETIP,
        state: {
          myPmtModeDatas: myPmtModeDatas,
          firstOrigin: firstOrigin
        }
      });
    } else {
      history.push({
        pathname: _app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD,
        search: searchParams.toString(),
        state: {
          myPmtModeDatas: myPmtModeDatas,
          firstOrigin: firstOrigin
        }
      });
    }
  };
  var onSubmit = function onSubmit(props) {
    var paramName = isRouteEtip ? 'sms_code' : 'otpCode';
    finalizePaymentMessage.mutate(_defineProperty({}, paramName, props === null || props === void 0 ? void 0 : props.input));
  };
  var url = isRouteEtip ? _app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].DOCAPOSTE.DOWNLOAD_MANDATE_TPL : _app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PAYMENT.GET_TEMPLATE_PAYMENT;
  var onSuccess = function onSuccess(response) {
    _app_services_Utils__WEBPACK_IMPORTED_MODULE_11__["download"].fromFile(response);
  };
  if (!managePayment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "data-cy": "sign-mandate-loading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton_Payment_MyPaymentMode__WEBPACK_IMPORTED_MODULE_9__["default"], null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_DownloadMandate__WEBPACK_IMPORTED_MODULE_5__["DownloadMandate"], {
    url: url,
    pathname: _app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].PAYMENT.ERROR,
    search: search,
    mobilePhone: mobilePhone,
    isBlob: isRouteEtip,
    onSuccess: isRouteEtip ? onSuccess : undefined
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_MandateForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onPrevClick: onPrevClick,
    onSubmit: onSubmit,
    mobilePhone: mobilePhone,
    errorReset: errorReset,
    setErrorReset: setErrorReset,
    loadingSubmit: finalizePaymentMessage.isLoading
  }));
}

/***/ }),

/***/ "./assets/js/pages/payment/steps/SuccessCB.tsx":
/*!*****************************************************!*\
  !*** ./assets/js/pages/payment/steps/SuccessCB.tsx ***!
  \*****************************************************/
/*! exports provided: SuccessCB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessCB", function() { return SuccessCB; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/Confirmation */ "./assets/js/components/Confirmation/index.tsx");
/* harmony import */ var _PaymentBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useModeListPayment */ "./assets/js/pages/payment/hooks/useModeListPayment.ts");









var SuccessCB = function SuccessCB() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__["useIsMobile"])();
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
    state = _useLocation.state;
  var _ref = state || '',
    solde = _ref.solde;
  var handlePreviousClick = function handlePreviousClick() {
    history.push(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].DASHBOARD);
  };
  var _useModeListPayment = Object(_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    modeListPaymentData = _useModeListPayment.modeListPaymentData,
    isLoading = _useModeListPayment.isLoading;
  var soldeApi = (modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.balanceAmount) || '';
  var handleNextClick = function handleNextClick() {
    window.open(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].PAYMENT.DOWNLOAD_TICKET, '_blank');
  };
  var previousButton = {
    label: t('managePayments.validate.button_dashboard'),
    align: 'left',
    onClick: handlePreviousClick,
    enabled: true
  };
  var nextButton = {
    label: t('managePayments.validate.button_download_ticket_payline'),
    align: 'right',
    onClick: handleNextClick
  };
  var amount = solde ? solde : soldeApi;
  var keySuccess = amount ? 'success' : 'success_no_amount';
  var title = t('payment.confirmation_cb.title', {
    amount: amount,
    context: keySuccess
  });
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
      width: isMobile ? 256 : 622,
      height: 46,
      className: "mb-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
      width: isMobile ? 256 : 622,
      height: 150
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentBox__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Confirmation__WEBPACK_IMPORTED_MODULE_4__["Confirmation"], {
    isSuccess: true,
    title: title,
    desc: t('payment.confirmation_cb.message_success'),
    previousButton: previousButton,
    nextButton: nextButton
  }));
};

/***/ }),

/***/ "./assets/js/pages/payment/steps/UnavailablePmtMode.tsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/payment/steps/UnavailablePmtMode.tsx ***!
  \**************************************************************/
/*! exports provided: UnavailablePmtMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailablePmtMode", function() { return UnavailablePmtMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/pages/payment/PaymentBox */ "./assets/js/pages/payment/PaymentBox.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var UnavailablePmtMode = function UnavailablePmtMode() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var handleNextClick = function handleNextClick() {
    setIsLoading(true);
    window.location.href = _app_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].CUSTOMER_SERVICE;
  };
  var nextButton = {
    enabled: true,
    label: t('payment.error.back_customer_service'),
    align: 'right',
    loader: isLoading,
    onClick: handleNextClick
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentBox__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-3 mb-lg-4"
  }, t('payment.unavailable.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_4__["AlertBox"], {
    children: t('payment.unavailable.message'),
    variant: "alert"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    next: nextButton
  }));
};

/***/ })

}]);