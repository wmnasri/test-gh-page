(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./assets/img/invoice-history/invoices-explain.png":
/*!*********************************************************!*\
  !*** ./assets/img/invoice-history/invoices-explain.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/invoices-explain.png");

/***/ }),

/***/ "./assets/js/components/SzChartConso/index.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/components/SzChartConso/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SzChartConso; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_export_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-export-csv */ "./node_modules/highcharts-export-csv/export-csv.js");
/* harmony import */ var highcharts_export_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_export_csv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _SzHighChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SzHighChart */ "./assets/js/components/SzHighChart/index.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }







if (_typeof(highcharts__WEBPACK_IMPORTED_MODULE_2___default.a) === 'object') {
  highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default.a);
  highcharts_export_csv__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default.a);
}
function SzChartConso(_ref) {
  var data = _ref.data;
  var TYPE_OPERATION = 'operation';
  var isMobile = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_5__["useIsMobile"])();
  var isDesktop = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_5__["useIsDesktop"])();
  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var NUMBER_DATA_MAX_CHART = isDesktop ? 13 : 6;

  // 1er index = 0
  var getStartIndex = function getStartIndex() {
    var startIndex = 0;
    var _ref2 = data || '',
      indexMaxDue = _ref2.indexMaxDue,
      indexMaxOperation = _ref2.indexMaxOperation,
      indexMaxData = _ref2.indexMaxData;
    if (isMobile && indexMaxDue > 5) {
      startIndex = indexMaxOperation - 1;
    } else {
      startIndex = indexMaxData - NUMBER_DATA_MAX_CHART;
    }
    if (startIndex < 0) {
      return 0;
    }
    return startIndex;
  };

  // index comprit entre 0 et NUMBER_DATA_MAX_CHART
  var getIndexToolTip = function getIndexToolTip() {
    var indexToolTip = null;
    var startIndex = getStartIndex();
    var _ref3 = data || '',
      indexMaxDue = _ref3.indexMaxDue,
      indexMaxOperation = _ref3.indexMaxOperation;
    if (isMobile && indexMaxDue > 5) {
      indexToolTip = 0;
    } else if (indexMaxOperation > 0) {
      indexToolTip = indexMaxOperation - startIndex - 1;
    }
    if (indexToolTip < 0) {
      return null;
    }
    return indexToolTip;
  };
  var formatDataLabel = function formatDataLabel(props) {
    var _currentValue;
    if (!props || Object.keys(props).length === 0) {
      return null;
    }
    var y = props.y;
    var currentValue = y;
    if (y < 0) {
      currentValue = -y;
    }
    if (!Number.isInteger(currentValue)) {
      currentValue = currentValue.toFixed(2);
    }
    return (_currentValue = currentValue) === null || _currentValue === void 0 ? void 0 : _currentValue.toString().replace('.', ',');
  };
  var initColor = function initColor(initData) {
    if (initData.length === 0) {
      return [];
    }
    return initData === null || initData === void 0 ? void 0 : initData.map(function (obj) {
      var colorOperation = {
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 1
        },
        stops: [[0, '#1A7DD2'],
        // Start color
        [1, '#37DDFF'] // End color
        ]
      };

      return _objectSpread(_objectSpread({}, obj), {}, {
        color: (obj === null || obj === void 0 ? void 0 : obj.source) === TYPE_OPERATION ? colorOperation : '#E9ECEF'
      });
    });
  };
  var formaterXAxis = function formaterXAxis(value) {
    return highcharts__WEBPACK_IMPORTED_MODULE_2___default.a.dateFormat('%d/%m<br/>%Y', new Date(value));
  };
  var options = {
    xAxis: {
      crosshair: false,
      type: 'category',
      labels: {
        style: {
          fontSize: '12px'
        },
        formatter: function formatter(props) {
          var regex = /^\d{4}-\d{2}-\d{2}$/;
          var value = regex.test(props) ? props : this.value;
          return formaterXAxis(value);
        }
      }
    },
    plotOptions: {
      column: {
        borderWidth: 3,
        pointWidth: 22
      }
    },
    series: []
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SzHighChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: _app_constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_CHART_CONSO"],
    chartRef: chartRef,
    data: data,
    className: "mx-auto col-lg-11",
    maxRangeData: 13,
    maxRangeDataMobile: 6,
    options: options,
    getStartIndex: getStartIndex,
    getIndexToolTip: getIndexToolTip,
    initColor: initColor,
    formatDataLabel: formatDataLabel
  });
}

/***/ }),

/***/ "./assets/js/hooks/useGeneratePathWithQuery.ts":
/*!*****************************************************!*\
  !*** ./assets/js/hooks/useGeneratePathWithQuery.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGeneratePathWithQuery; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function useGeneratePathWithQuery() {
  return function generatePathWithQuery(_ref) {
    var path = _ref.path,
      params = _ref.params,
      queryParams = _ref.queryParams;
    var basePath = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["generatePath"])(path, params);
    var searchParams = new URLSearchParams(queryParams);
    return "".concat(basePath, "?").concat(searchParams.toString());
  };
}

/***/ }),

/***/ "./assets/js/models/invoiceHistory/index.ts":
/*!**************************************************!*\
  !*** ./assets/js/models/invoiceHistory/index.ts ***!
  \**************************************************/
/*! exports provided: eFactureSubscriptionSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eFactureSubscriptionSchema", function() { return eFactureSubscriptionSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");


var eFactureSubscriptionSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  consent: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().oneOf([true], 'mandatory_field')
});

/***/ }),

/***/ "./assets/js/pages/invoice-history/DownloadInvoiceModalContent.tsx":
/*!*************************************************************************!*\
  !*** ./assets/js/pages/invoice-history/DownloadInvoiceModalContent.tsx ***!
  \*************************************************************************/
/*! exports provided: DownloadInvoiceModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadInvoiceModalContent", function() { return DownloadInvoiceModalContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _app_ez_components_PushItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/ez-components/PushItem */ "./assets/js/ez-components/PushItem/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var AmountInfoBlock = function AmountInfoBlock(_ref) {
  var date = _ref.date,
    type = _ref.type,
    amount = _ref.amount;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-gray-200 rounded-2 p-3 px-lg-4 py-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "bold",
    className: "text-blue-electric mb-0",
    tag: "span"
  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold",
    className: "mb-2"
  }, t('invoiceHistory.invoiceList.modal.amount', {
    amount: amount
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-0"
  }, type));
};
var DownloadInvoiceModalContent = function DownloadInvoiceModalContent(_ref2) {
  var insert = _ref2.insert,
    invoiceNumber = _ref2.invoiceNumber,
    invoiceAmount = _ref2.invoiceAmount,
    invoiceType = _ref2.invoiceType,
    invoiceDate = _ref2.invoiceDate,
    push = _ref2.push;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_3__["useGA"])(),
    track = _useGA.track;
  var isMobile = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_3__["useIsMobile"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isInvoiceLoading = _useState2[0],
    setInvoiceLoading = _useState2[1];
  var ModalBlockClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('col-12 col-lg-8 mt-4 mt-lg-0 ml-0 ml-lg-4 pt-4 pt-lg-0 px-0 pl-lg-4 d-flex flex-column align-items-start border-1 border-gray-100', {
    'border-top': isMobile,
    'border-left': !isMobile
  });
  var pushItemClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('push-item overflow-hidden d-flex bg-white rounded-2 cursor-pointer mb-4');
  var handleDownloadInvoice = function handleDownloadInvoice() {
    setInvoiceLoading(true);
    track('INVOICE_CONSULTATION_1', {
      nature_facture: invoiceType
    });
    var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].ACCOUNT_INVOICES_INVOICE_VIEW, {
      invoice: invoiceNumber !== null && invoiceNumber !== void 0 ? invoiceNumber : ''
    });
    window.open(path, '_blank');
    setInvoiceLoading(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L",
    className: "mb-4"
  }, t('invoiceHistory.invoiceList.modal.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AmountInfoBlock, {
    amount: invoiceAmount,
    type: invoiceType,
    date: invoiceDate
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    icon: "download-bottom",
    alignIcon: "right",
    border: "soft",
    className: "mt-3",
    onClick: handleDownloadInvoice,
    loader: isInvoiceLoading,
    "data-cy": "download-invoice"
  }, t('invoiceHistory.invoiceList.modal.downloadBtn'))), (insert || push) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ModalBlockClasses
  }, push && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_PushItem__WEBPACK_IMPORTED_MODULE_5__["PushItem"], {
    data: push,
    style: pushItemClasses
  }), insert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "attachment",
    variant: "bold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H5",
    size: "L",
    weight: "bold",
    className: "text-uppercase mb-0 ml-2"
  }, t('invoiceHistory.invoiceList.modal.attachments'))), insert.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InsertItem, {
      invoiceNumber: invoiceNumber,
      data: item,
      key: key
    });
  })))));
};
var InsertItem = function InsertItem(_ref3) {
  var invoiceNumber = _ref3.invoiceNumber,
    data = _ref3.data;
  var lbEncart = data.lbEncart,
    urlEncart = data.urlEncart;
  var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].ACCOUNT_INVOICES_ENCART_VIEW, {
    invoice: invoiceNumber !== null && invoiceNumber !== void 0 ? invoiceNumber : '',
    insert: urlEncart
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "text",
    to: path,
    target: "_blank",
    "data-cy": "insert-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "caption",
    size: "M",
    weight: "regular",
    className: "mb-0"
  }, lbEncart));
};

/***/ }),

/***/ "./assets/js/pages/invoice-history/EFactureModalContent.tsx":
/*!******************************************************************!*\
  !*** ./assets/js/pages/invoice-history/EFactureModalContent.tsx ***!
  \******************************************************************/
/*! exports provided: EFactureModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFactureModalContent", function() { return EFactureModalContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/FormButtons */ "./assets/js/components/FormButtons/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _app_models_invoiceHistory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/models/invoiceHistory */ "./assets/js/models/invoiceHistory/index.ts");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_pages_payment_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/pages/payment/hooks/useModeListPayment */ "./assets/js/pages/payment/hooks/useModeListPayment.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_form_FormError__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




















var EFactureModalContent = function EFactureModalContent(_ref) {
  var closeModal = _ref.closeModal;
  var _a, _b;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    transform = _useInterweave.transform;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  var _useModeListPayment = Object(_app_pages_payment_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    modeListPaymentData = _useModeListPayment.modeListPaymentData,
    isLoading = _useModeListPayment.isLoading,
    isError = _useModeListPayment.isError;
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_17__["default"])('GetDataPushService'),
    refetch = _useQueryObserver.refetch;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isBtnLoading = _useState2[0],
    setIsBtnLoading = _useState2[1];
  var footer = window.tsme_data.footer;
  var CGULink = (_b = (_a = footer === null || footer === void 0 ? void 0 : footer.links_bottom) === null || _a === void 0 ? void 0 : _a.credits_url) === null || _b === void 0 ? void 0 : _b.link;
  var _ref2 = modeListPaymentData || {},
    currentPaymentModeCode = _ref2.currentPaymentModeCode;
  var isDebit = ['M', 'P'].includes(currentPaymentModeCode !== null && currentPaymentModeCode !== void 0 ? currentPaymentModeCode : '');
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_18__["useGA"])(),
    track = _useGA.track;
  var _c = Object(react_query__WEBPACK_IMPORTED_MODULE_14__["useMutation"])(function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_15__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_9__["API"].PAYMENT.POST_PAYMENT_E_INVOICE);
    }, {
      onSuccess: function onSuccess() {
        refetch();
        history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].ACCOUNT_INVOICES, {
          modal: 'modale-e-facture',
          status: 'confirmation'
        }));
      },
      onError: function onError() {
        history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].ACCOUNT_INVOICES, {
          modal: 'modale-e-facture',
          status: 'erreur'
        }));
      }
    }),
    isEfactureError = _c.isError,
    error = _c.error,
    reset = _c.reset,
    isEfactureLoading = _c.isLoading,
    isSuccess = _c.isSuccess,
    postEInvoice = __rest(_c, ["isError", "error", "reset", "isLoading", "isSuccess"]);
  var nextButton = {
    label: t('invoiceHistory.EFactureModal.button', {
      context: isDebit ? 'subscribe' : 'redirect'
    }),
    align: 'right',
    loader: isBtnLoading || isEfactureLoading
  };
  var initialValues = {
    consent: false
  };
  var onSubmit = function onSubmit() {
    if (!isDebit) {
      track('INVOICE_CONSULTATION_3', {
        etat_prelevement_auto: 'prelevement_auto_pas_ok'
      });
      setIsBtnLoading(true);
      history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].PAYMENT.MY_PAYMENT_METHOD_EFACTURE);
    } else {
      track('INVOICE_CONSULTATION_3', {
        etat_prelevement_auto: 'prelevement_auto_ok'
      });
      postEInvoice.mutate();
    }
  };
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_12___default.a, {
      count: 1,
      width: "50%",
      height: 28,
      className: "mb-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_12___default.a, {
      count: 1,
      width: "100%",
      height: 300
    }));
  }
  if (isEfactureError || isError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "H3",
      weight: "medium",
      size: "L"
    }, t('invoiceHistory.EFactureModal.technical_error.title', {
      date: _app_constants__WEBPACK_IMPORTED_MODULE_9__["date"],
      time: _app_constants__WEBPACK_IMPORTED_MODULE_9__["time"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_10__["AlertBox"], {
      variant: "alert",
      className: "my-3 my-lg-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      size: "M",
      weight: "regular",
      tag: "span"
    }, t('invoiceHistory.EFactureModal.technical_error.description', {
      context: isEfactureError ? 'subscribe' : 'init'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-lg-right mt-4 mt-lg-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "contained",
      border: "soft",
      type: "button",
      onClick: closeModal,
      "data-cy": "close-e-facture-modal"
    }, t('close'))));
  }
  if (isSuccess) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "H3",
      weight: "medium",
      size: "L"
    }, t('invoiceHistory.EFactureModal.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_10__["AlertBox"], {
      variant: "success",
      className: "my-3 my-lg-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "body",
      size: "M",
      weight: "regular",
      tag: "span"
    }, t('invoiceHistory.EFactureModal.confirmation'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-lg-right mt-4 mt-lg-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "contained",
      border: "soft",
      type: "button",
      "data-cy": "close-e-facture-modal",
      onClick: closeModal
    }, t('close'))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L"
  }, t('invoiceHistory.EFactureModal.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular",
    className: "text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    content: t('invoiceHistory.EFactureModal.description'),
    transform: transform
  })), !isDebit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_10__["AlertBox"], {
    variant: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    content: t('invoiceHistory.EFactureModal.info'),
    transform: transform
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: initialValues,
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: _app_models_invoiceHistory__WEBPACK_IMPORTED_MODULE_11__["eFactureSubscriptionSchema"],
    onSubmit: onSubmit
  }, function (_ref3) {
    var handleSubmit = _ref3.handleSubmit,
      values = _ref3.values,
      setFieldValue = _ref3.setFieldValue,
      errors = _ref3.errors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      id: "e-facture-subscribe",
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-4 px-0 pt-3 border-top border-1 border-gray-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCheckbox"], {
      id: "consent",
      name: "consent",
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
        variant: "body",
        weight: "regular",
        className: "text-dark"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
        i18nKey: 'invoiceHistory.EFactureModal.CGU',
        components: {
          redirect: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
            decorate: true,
            to: CGULink,
            className: "text-dark"
          })
        }
      })),
      type: "checkbox",
      checked: values.consent,
      onChange: function onChange(e) {
        setFieldValue('consent', e.target.checked, true);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_form_FormError__WEBPACK_IMPORTED_MODULE_16__["default"], {
      field: "consent",
      customDisplay: errors.consent
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_FormButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      next: nextButton
    }));
  }));
};

/***/ }),

/***/ "./assets/js/pages/invoice-history/InvoiceList.tsx":
/*!*********************************************************!*\
  !*** ./assets/js/pages/invoice-history/InvoiceList.tsx ***!
  \*********************************************************/
/*! exports provided: InvoiceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceList", function() { return InvoiceList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _EFactureModalContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EFactureModalContent */ "./assets/js/pages/invoice-history/EFactureModalContent.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _InvoiceTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InvoiceTable */ "./assets/js/pages/invoice-history/InvoiceTable.tsx");
/* harmony import */ var _hooks_useInvoicesList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useInvoicesList */ "./assets/js/pages/invoice-history/hooks/useInvoicesList.ts");
/* harmony import */ var _app_hooks_useToRedirect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useToRedirect */ "./assets/js/hooks/useToRedirect.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var PushInsert = function PushInsert(pushServiceData) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPushInsertModal = _useState2[0],
    setShowPushInsertModal = _useState2[1];
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])();
  var _useToRedirect = Object(_app_hooks_useToRedirect__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    toRedirect = _useToRedirect.toRedirect;
  var pathname = location.pathname;
  var icon = pushServiceData.icon,
    title = pushServiceData.title,
    description = pushServiceData.description,
    cta = pushServiceData.cta;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_14__["useGA"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (pathname === '/mon-compte-en-ligne/mes-factures/modale-e-facture') {
      setShowPushInsertModal(true);
    }
  }, [pathname]);
  var handleCloseModal = function handleCloseModal() {
    setShowPushInsertModal(false);
    history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].ACCOUNT_INVOICES));
  };
  var handlePushCtaClick = function handlePushCtaClick() {
    track('INVOICE_CONSULTATION_2');
    toRedirect(cta.url);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "push-insert rounded-2 bg-blue-03 p-3 p-lg-4 ml-lg-5 mb-3 mb-lg-0 d-flex flex-column text-center align-items-center order-1 order-lg-0 mx-3 mx-lg-0",
    "data-cy": "push-insert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "push-icon-container bg-white rounded-circle p-3 d-flex align-items-center justify-content-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icon.src,
    alt: icon.alt,
    className: "push-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H4",
    weight: "medium",
    size: "L"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: "text-dark",
    tag: "span"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_10__["Markup"], {
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: handlePushCtaClick,
    "data-cy": "push-service"
  }, cta.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    size: "lg",
    show: showPushInsertModal,
    handleClose: handleCloseModal,
    backdrop: true,
    centered: true,
    scrollable: true,
    border: "smooth",
    fullscreen: "md",
    title: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EFactureModalContent__WEBPACK_IMPORTED_MODULE_6__["EFactureModalContent"], {
    closeModal: handleCloseModal
  })));
};
var InvoiceList = function InvoiceList() {
  var _a, _b, _c, _d, _e, _f, _g;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useIsMobile"])();
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentPage = _useState4[0],
    setCurrentPage = _useState4[1];
  var itemsPerPage = 4;
  var handlePageChange = function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  };
  var _useInvoicesList = Object(_hooks_useInvoicesList__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    invoicesListData = _useInvoicesList.data,
    isInvoicesError = _useInvoicesList.isError,
    isInvoicesLoading = _useInvoicesList.isLoading;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_7__["useQuery"])('GetDataPushService', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_8__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API"].INVOICE_HISTORY.PUSH, {
        params: {
          type: 'service'
        }
      });
    }),
    pushServiceData = _useQuery.data,
    isLoadingPushService = _useQuery.isLoading;
  var invoiceData = ((_b = (_a = invoicesListData === null || invoicesListData === void 0 ? void 0 : invoicesListData.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.clientFacturesPro) || [];
  var invoiceList = ((_c = invoiceData[0]) === null || _c === void 0 ? void 0 : _c.facturesPro) || [];
  var displayPushServiceData = Object.keys(((_e = (_d = pushServiceData === null || pushServiceData === void 0 ? void 0 : pushServiceData.data) === null || _d === void 0 ? void 0 : _d.content) === null || _e === void 0 ? void 0 : _e.dataPush) || {}).length > 0;
  var pushServiceDataContent = ((_g = (_f = pushServiceData === null || pushServiceData === void 0 ? void 0 : pushServiceData.data) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.dataPush) || {};
  if (isInvoicesLoading || isLoadingPushService) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 px-0 mx-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-white rounded-2 p-4 p-lg-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9___default.a, {
      width: isMobile ? '100%' : '30%',
      height: 30,
      className: "mb-3 mb-lg-4"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9___default.a, {
      width: '100%',
      height: 300
    })));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-0 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white rounded-2 py-4 p-lg-5",
    "data-cy": "invoice-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "pl-3 pl-lg-0 mb-3 mb-lg-4"
  }, t('invoiceHistory.invoiceList.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-lg-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invoice-table-container order-2 order-lg-0"
  }, !isInvoicesError && (invoiceList === null || invoiceList === void 0 ? void 0 : invoiceList.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InvoiceTable__WEBPACK_IMPORTED_MODULE_11__["InvoiceTable"], {
    invoiceData: invoiceList,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    handlePageChange: handlePageChange
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-3 mb-lg-4"
  }, t('invoiceHistory.invoiceList.subtitle', {
    context: isInvoicesError ? 'error' : 'empty'
  }))), displayPushServiceData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PushInsert, Object.assign({}, pushServiceDataContent)))));
};

/***/ }),

/***/ "./assets/js/pages/invoice-history/InvoiceTable.tsx":
/*!**********************************************************!*\
  !*** ./assets/js/pages/invoice-history/InvoiceTable.tsx ***!
  \**********************************************************/
/*! exports provided: InvoiceTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceTable", function() { return InvoiceTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _DownloadInvoiceModalContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DownloadInvoiceModalContent */ "./assets/js/pages/invoice-history/DownloadInvoiceModalContent.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks/useQueryObserver */ "./assets/js/hooks/useQueryObserver.ts");
/* harmony import */ var _app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _app_hooks_useGeneratePathWithQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/hooks/useGeneratePathWithQuery */ "./assets/js/hooks/useGeneratePathWithQuery.ts");
/* harmony import */ var _app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/hooks/useSearchParams */ "./assets/js/hooks/useSearchParams.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















var InvoiceTableItem = function InvoiceTableItem(_ref) {
  var style = _ref.style,
    data = _ref.data,
    handleClick = _ref.handleClick,
    loading = _ref.loading;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var dateFacture = data.dateFacture,
    motifFacturation = data.motifFacturation,
    montantFacture = data.montantFacture;
  var keyInvoiceType = i18n.exists("invoiceHistory.invoiceLabels.".concat(motifFacturation));
  var invoiceType = keyInvoiceType ? t("invoiceHistory.invoiceLabels.".concat(motifFacturation)) : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: style,
    "data-cy": "invoice-list-item"
  }, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: "text-dark mb-1 mb-lg-0"
  }, dateFacture, " - ", invoiceType) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: "text-dark mb-0"
  }, dateFacture), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "regular",
    className: "text-dark mb-0"
  }, invoiceType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    weight: "bold",
    className: "mb-0"
  }, montantFacture, " \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
    "data-cy": "invoice-dl-btn",
    variant: "text",
    className: "px-0",
    icon: "download-bottom",
    alignIcon: "right",
    onClick: function onClick() {
      return handleClick(data);
    },
    loader: loading
  }, t('download')));
};
var InvoiceTable = function InvoiceTable(_ref2) {
  var invoiceData = _ref2.invoiceData,
    currentPage = _ref2.currentPage,
    itemsPerPage = _ref2.itemsPerPage,
    handlePageChange = _ref2.handlePageChange;
  var _a, _b, _c, _d;
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation2.t,
    i18n = _useTranslation2.i18n;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useParams"])(),
    modal = _useParams.modal;
  var generatePathWithQuery = Object(_app_hooks_useGeneratePathWithQuery__WEBPACK_IMPORTED_MODULE_13__["default"])();
  var searchParams = Object(_app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var invoiceItemNumber = searchParams.get('facture');
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_15__["useGA"])(),
    track = _useGA.track;
  var indexByInvoiceNumber = invoiceData.findIndex(function (invoice) {
    return invoice.numeroFacture === invoiceItemNumber;
  });
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(indexByInvoiceNumber),
    _useState2 = _slicedToArray(_useState, 2),
    indexBtn = _useState2[0],
    setIndexBtn = _useState2[1];
  var defaultInvoice = {
    numeroFacture: null,
    montantFacture: null,
    motifFacturation: null,
    dateFacture: null
  };
  var selectedInvoice = indexBtn > -1 ? invoiceData[indexBtn] : defaultInvoice;
  var totalPages = Math.ceil(invoiceData.length / itemsPerPage);
  var currentPageAdjusted = Math.max(1, Math.min(currentPage, totalPages));
  var startIndex = (currentPageAdjusted - 1) * itemsPerPage;
  var endIndex = Math.min(startIndex + itemsPerPage, invoiceData.length);
  var indexCurrentBtn = indexBtn % itemsPerPage;
  var _useQueryObserver = Object(_app_hooks_useQueryObserver__WEBPACK_IMPORTED_MODULE_11__["default"])('GetDataPushHorizontal'),
    pushData = _useQueryObserver.data;
  var pushDataContent = ((_b = (_a = pushData === null || pushData === void 0 ? void 0 : pushData.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.dataPush) || [];
  var filteredPushModale = pushDataContent.find(function (item) {
    return item.push_modale;
  });
  var keyInvoiceType = i18n.exists("invoiceHistory.invoiceLabels.".concat(selectedInvoice === null || selectedInvoice === void 0 ? void 0 : selectedInvoice.motifFacturation));
  var invoiceType = keyInvoiceType ? t("invoiceHistory.invoiceLabels.".concat(selectedInvoice === null || selectedInvoice === void 0 ? void 0 : selectedInvoice.motifFacturation)) : '';
  var handlePageChangeInternal = function handlePageChangeInternal(pageNumber) {
    handlePageChange(pageNumber);
  };
  var handleCloseModal = function handleCloseModal() {
    history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].ACCOUNT_INVOICES));
  };
  var _e = Object(react_query__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(function (params) {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_10__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_7__["API"].INVOICE_HISTORY.INSERTS, params);
    }, {
      onSuccess: function onSuccess(_ref3, _ref4) {
        var data = _ref3.data;
        var invoiceNumber = _ref4.invoiceNumber;
        var _a, _b;
        if (((_b = (_a = data.content) === null || _a === void 0 ? void 0 : _a.ListeEncarts) === null || _b === void 0 ? void 0 : _b.length) > 0) {
          var path = generatePathWithQuery({
            path: _app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].ACCOUNT_INVOICES,
            params: {
              modal: _app_constants__WEBPACK_IMPORTED_MODULE_7__["downloadInvoice"]
            },
            queryParams: {
              facture: invoiceNumber
            }
          });
          history.push(path);
        } else {
          var _path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].ACCOUNT_INVOICES_INVOICE_VIEW, {
            invoice: invoiceNumber
          });
          window.open(_path, '_blank');
        }
      },
      onError: function onError(_error, _ref5) {
        var invoiceNumber = _ref5.invoiceNumber;
        var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].ACCOUNT_INVOICES_INVOICE_VIEW, {
          invoice: invoiceNumber
        });
        window.open(path, '_blank');
      }
    }),
    insertsData = _e.data,
    isInsertsError = _e.isError,
    error = _e.error,
    reset = _e.reset,
    isInsertsLoading = _e.isLoading,
    isSuccess = _e.isSuccess,
    getInvoiceInserts = __rest(_e, ["data", "isError", "error", "reset", "isLoading", "isSuccess"]);
  var handleDlBtnClick = function handleDlBtnClick(invoice, index) {
    setIndexBtn(startIndex + index);
    var numeroFacture = invoice.numeroFacture,
      dateFacture = invoice.dateFacture,
      motifFacturation = invoice.motifFacturation;
    var invoiceType = t("invoiceHistory.invoiceLabels.".concat(motifFacturation));
    var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parse"])(dateFacture, 'dd/MM/yyyy', new Date());
    track('INVOICE_CONSULTATION_1', {
      nature_facture: invoiceType
    });
    getInvoiceInserts.mutate({
      invoiceNumber: numeroFacture,
      invoiceDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(date, 'dd-MM-yyyy')
    });
  };
  var insertsContentData = ((_d = (_c = insertsData === null || insertsData === void 0 ? void 0 : insertsData.data) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.ListeEncarts) || [];
  var displayModal = modal === _app_constants__WEBPACK_IMPORTED_MODULE_7__["downloadInvoice"];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _ref6 = selectedInvoice || {},
      numeroFacture = _ref6.numeroFacture,
      dateFacture = _ref6.dateFacture;
    var date = dateFacture ? Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parse"])(dateFacture, 'dd/MM/yyyy', new Date()) : '';
    if (displayModal) {
      if (indexByInvoiceNumber === -1) {
        var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].ACCOUNT_INVOICES);
        history.push(path);
      } else if (indexByInvoiceNumber >= 0 && numeroFacture) {
        getInvoiceInserts.mutate({
          invoiceNumber: numeroFacture,
          invoiceDate: date ? Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(date, 'dd-MM-yyyy') : ''
        });
      }
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, invoiceData.slice(startIndex, endIndex).map(function (item, index) {
    var tableItemClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('invoice-table border-1 border-gray-100 align-items-baseline py-2 px-3 pl-lg-3', {
      'border-top': index !== endIndex - 1,
      'border-top border-bottom': index === endIndex - 1
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InvoiceTableItem, {
      key: index,
      data: item,
      style: tableItemClasses,
      handleClick: function handleClick(item) {
        return handleDlBtnClick(item, index);
      },
      loading: isInsertsLoading && indexCurrentBtn === index
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex col-5 justify-content-center mx-auto px-0 mt-4",
    id: "invoice-pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzPagination"], {
    totalItemsCount: totalPages,
    activePage: currentPageAdjusted,
    onChange: handlePageChangeInternal,
    itemsCountPerPage: itemsPerPage,
    pageRangeDisplayed: totalPages,
    enableDisabled: true,
    variant: "custom",
    aria: {
      prevLabel: 'Previous',
      nextLabel: 'Next'
    },
    prevButtonId: "invoice-pagination-prev",
    nextButtonId: "invoice-pagination-next"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    size: "lg",
    show: displayModal,
    handleClose: handleCloseModal,
    backdrop: true,
    centered: true,
    scrollable: true,
    border: "smooth",
    fullscreen: "md",
    title: ""
  }, (selectedInvoice === null || selectedInvoice === void 0 ? void 0 : selectedInvoice.numeroFacture) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DownloadInvoiceModalContent__WEBPACK_IMPORTED_MODULE_8__["DownloadInvoiceModalContent"], {
    insert: insertsContentData,
    invoiceAmount: selectedInvoice === null || selectedInvoice === void 0 ? void 0 : selectedInvoice.montantFacture,
    invoiceType: invoiceType,
    invoiceDate: selectedInvoice === null || selectedInvoice === void 0 ? void 0 : selectedInvoice.dateFacture,
    invoiceNumber: selectedInvoice.numeroFacture,
    push: filteredPushModale
  }) : null));
};

/***/ }),

/***/ "./assets/js/pages/invoice-history/PaymentHistoryChart.tsx":
/*!*****************************************************************!*\
  !*** ./assets/js/pages/invoice-history/PaymentHistoryChart.tsx ***!
  \*****************************************************************/
/*! exports provided: PaymentHistoryChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryChart", function() { return PaymentHistoryChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_SzChartConso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/SzChartConso */ "./assets/js/components/SzChartConso/index.jsx");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/constants/index */ "./assets/js/constants/index.ts");









var PaymentHistoryChart = function PaymentHistoryChart(_ref) {
  var className = _ref.className;
  var _a, _b, _c;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  var pathName = location.pathname;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_6__["useQuery"])('dataHistoPayment', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].get(_app_constants_index__WEBPACK_IMPORTED_MODULE_8__["API"].PAYMENT.GET_PAYMENT_HISTO);
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading,
    error = _useQuery.error;
  var histoPaymentContent = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.content) || {};
  var histoPaymentMessage = ((_c = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) || '';
  var displayPaymentHistoChart = typeof histoPaymentMessage !== 'undefined' && !(histoPaymentMessage === null || histoPaymentMessage === void 0 ? void 0 : histoPaymentMessage.startsWith('KO_ROLE_'));
  if ((histoPaymentMessage === null || histoPaymentMessage === void 0 ? void 0 : histoPaymentMessage.startsWith('KO_ROLE_')) && pathName === _app_constants_index__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].TIMELINE_AND_OPERATIONS) {
    window.location.href = _app_constants_index__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].DASHBOARD;
  }
  return displayPaymentHistoChart ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white rounded-2 py-4 px-3 p-lg-5 mt-3 mt-lg-4",
    "data-cy": "bloc-payment-histo"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: 300
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "mb-2"
  }, t('invoiceHistory.paymentList.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-3 mb-lg-4"
  }, t('invoiceHistory.paymentList.subtitle')), (histoPaymentContent === null || histoPaymentContent === void 0 ? void 0 : histoPaymentContent.indexMaxData) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 pr-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_SzChartConso__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: histoPaymentContent
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    weight: "regular",
    className: "text-dark mb-3 mb-lg-4"
  }, t('invoiceHistory.paymentList.empty'))))) : null;
};

/***/ }),

/***/ "./assets/js/pages/invoice-history/PushBlock.tsx":
/*!*******************************************************!*\
  !*** ./assets/js/pages/invoice-history/PushBlock.tsx ***!
  \*******************************************************/
/*! exports provided: PushBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushBlock", function() { return PushBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_ez_components_PushItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/ez-components/PushItem */ "./assets/js/ez-components/PushItem/index.tsx");
/* harmony import */ var _invoice_history_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoice-history.scss */ "./assets/js/pages/invoice-history/invoice-history.scss");
/* harmony import */ var _invoice_history_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_invoice_history_scss__WEBPACK_IMPORTED_MODULE_8__);









var PushBlock = function PushBlock() {
  var _a, _b, _c, _d, _e;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__["useIsMobile"])();
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])('GetDataPushHorizontal', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API"].INVOICE_HISTORY.PUSH, {
        params: {
          type: 'horizontal'
        }
      });
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading,
    isSuccess = _useQuery.isSuccess;
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 px-0 mt-4 rounded-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
      width: "100%",
      height: 200
    }));
  }
  if (isSuccess && ((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.dataPush) === null || _c === void 0 ? void 0 : _c.length) > 0) {
    var pushHorizontalContent = (_e = (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.content) === null || _e === void 0 ? void 0 : _e.dataPush;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "push-block d-flex flex-column flex-lg-row"
    }, pushHorizontalContent.map(function (item, index) {
      var pushItemClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('push-item-invoices overflow-hidden d-flex bg-white rounded-2 cursor-pointer', {
        'mt-3': isMobile,
        'mt-4': !isMobile,
        'mr-4': !isMobile && index !== pushHorizontalContent.length - 1
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_PushItem__WEBPACK_IMPORTED_MODULE_7__["PushItem"], {
        data: item,
        key: index,
        style: pushItemClasses
      });
    }));
  }
  return null;
};

/***/ }),

/***/ "./assets/js/pages/invoice-history/hooks/useInvoicesList.ts":
/*!******************************************************************!*\
  !*** ./assets/js/pages/invoice-history/hooks/useInvoicesList.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useInvoicesList; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");




function useInvoicesList() {
  var currentDate = new Date();
  var year = currentDate.getFullYear() - 2;
  var dateTwoYearsAgo = new Date(year, 0, 1);
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])('InvoiceList', function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].INVOICE_HISTORY.INVOICES_LIST, {
      minBillingDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(dateTwoYearsAgo, 'yyyy-MM-dd'),
      currentPage: 1,
      itemsPerPage: 999
    });
  });
}

/***/ }),

/***/ "./assets/js/pages/invoice-history/index.tsx":
/*!***************************************************!*\
  !*** ./assets/js/pages/invoice-history/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InvoiceHistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_background_BackgroundEllipse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/background/BackgroundEllipse */ "./assets/js/components/background/BackgroundEllipse/index.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _img_invoice_history_invoices_explain_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @img/invoice-history/invoices-explain.png */ "./assets/img/invoice-history/invoices-explain.png");
/* harmony import */ var _InvoiceList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InvoiceList */ "./assets/js/pages/invoice-history/InvoiceList.tsx");
/* harmony import */ var _PushBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PushBlock */ "./assets/js/pages/invoice-history/PushBlock.tsx");
/* harmony import */ var _app_components_background_BackgroundWave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/background/BackgroundWave */ "./assets/js/components/background/BackgroundWave/index.tsx");
/* harmony import */ var _app_ez_components_ModuleCardFaq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/ez-components/ModuleCardFaq */ "./assets/js/ez-components/ModuleCardFaq/index.tsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _app_pages_payment_PaymentBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/pages/payment/PaymentBlock */ "./assets/js/pages/payment/PaymentBlock.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _invoice_history_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./invoice-history.scss */ "./assets/js/pages/invoice-history/invoice-history.scss");
/* harmony import */ var _invoice_history_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_invoice_history_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _PaymentHistoryChart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PaymentHistoryChart */ "./assets/js/pages/invoice-history/PaymentHistoryChart.tsx");
/* harmony import */ var _payment_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../payment/hooks/useModeListPayment */ "./assets/js/pages/payment/hooks/useModeListPayment.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _app_pages_payment_steps_PromotionBlock__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/pages/payment/steps/PromotionBlock */ "./assets/js/pages/payment/steps/PromotionBlock.tsx");
























function InvoiceHistory() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__["useIsMobile"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  var pathName = location.pathname;
  var isTimelinePage = pathName === _app_constants__WEBPACK_IMPORTED_MODULE_12__["ROUTES"].TIMELINE_AND_OPERATIONS;
  var _useGA = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_22__["useGA"])(),
    track = _useGA.track;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_17__["useQuery"])('GetDataPushMore', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_15__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_12__["API"].INVOICE_HISTORY.PUSH, {
        params: {
          type: 'more'
        }
      });
    }),
    pushMoreData = _useQuery.data,
    isLoadingPushMore = _useQuery.isLoading,
    isErrorPushMore = _useQuery.isError;
  var _useModeListPayment = Object(_payment_hooks_useModeListPayment__WEBPACK_IMPORTED_MODULE_21__["default"])(),
    modeListPaymentData = _useModeListPayment.modeListPaymentData,
    isLoadingPaymentData = _useModeListPayment.isLoading,
    promotedValue = _useModeListPayment.promotedValue;
  var currentPaymentModeCode = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.currentPaymentModeCode;
  var paymentMode = _app_constants__WEBPACK_IMPORTED_MODULE_12__["PAYMENT_MODES_CODES"][currentPaymentModeCode];
  var currentPaymentCodesPrelev = [_app_pages_payment_steps_PromotionBlock__WEBPACK_IMPORTED_MODULE_23__["MODE_MENSUALISATION"], _app_pages_payment_steps_PromotionBlock__WEBPACK_IMPORTED_MODULE_23__["MODE_PRELEVEMENT"]];
  var nullOrNegative = ['-', '0'];
  var balanceAmountPositive = typeof (modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.balanceAmount) !== 'undefined' && (modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.balanceAmount) !== null && !nullOrNegative.includes(modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.balanceAmount.charAt(0));
  var noModeAvailable = (modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.paymentModesList) && Object.values(modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.paymentModesList).every(function (v) {
    return !v;
  });
  var showPayBillButton = !currentPaymentCodesPrelev.includes(currentPaymentModeCode) && balanceAmountPositive && !noModeAvailable;
  var paymentBlockData = {
    titleCode: (_a = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.grayBlock) === null || _a === void 0 ? void 0 : _a.titleCode,
    amount: (_c = (_b = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.grayBlock) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.amount,
    date: (_e = (_d = modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.grayBlock) === null || _d === void 0 ? void 0 : _d.content) === null || _e === void 0 ? void 0 : _e.date,
    showEtip: modeListPaymentData === null || modeListPaymentData === void 0 ? void 0 : modeListPaymentData.hasEtipSignedValidMandate,
    paymentMode: paymentMode,
    currentPaymentModeCode: currentPaymentModeCode,
    showPayBillButton: showPayBillButton
  };
  var openCard = function openCard(modalContent) {
    var _a, _b;
    track('INVOICE_CONSULTATION_4', {
      nom_modale: modalContent === null || modalContent === void 0 ? void 0 : modalContent.type,
      cas_client: (_b = (_a = pushMoreData === null || pushMoreData === void 0 ? void 0 : pushMoreData.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.clientContext
    });
  };
  var allowedPaymentCode = ['M', 'P'];
  var noDisplayPaymentBloc = !allowedPaymentCode.includes(currentPaymentModeCode) && promotedValue === null;
  var otherQuestionContainerClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_16__["default"])('tsme-container pt-0 pb-6 text-center', {
    'pt-0': ((_h = (_g = (_f = pushMoreData === null || pushMoreData === void 0 ? void 0 : pushMoreData.data) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.dataPush) === null || _h === void 0 ? void 0 : _h.length) > 0,
    'pt-4': ((_l = (_k = (_j = pushMoreData === null || pushMoreData === void 0 ? void 0 : pushMoreData.data) === null || _j === void 0 ? void 0 : _j.content) === null || _k === void 0 ? void 0 : _k.dataPush) === null || _l === void 0 ? void 0 : _l.length) <= 0 || isErrorPushMore
  });
  var consoBlockClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_16__["default"])('px-0 pr-lg-4 pl-lg-0 col-lg-8', {
    'col-12': !paymentBlockData || isMobile,
    'col-lg-8': paymentBlockData
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fullscreen: true,
    className: "p-0",
    tag: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_background_BackgroundEllipse__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ellipseImg: _img_invoice_history_invoices_explain_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    zIndex: true,
    tag: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-5 pt-md-3 pt-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H1",
    size: isMobile ? 'L' : 'XL',
    color: "light",
    className: "text-uppercase",
    weight: "black"
  }, isTimelinePage ? t('timelineAndOperations.title') : t('invoiceHistory.title'))), !isTimelinePage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 mt-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InvoiceList__WEBPACK_IMPORTED_MODULE_8__["InvoiceList"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PushBlock__WEBPACK_IMPORTED_MODULE_9__["PushBlock"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row align-items-lg-start justify-content-lg-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentHistoryChart__WEBPACK_IMPORTED_MODULE_20__["PaymentHistoryChart"], {
    className: consoBlockClasses
  }), isLoadingPaymentData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 px-0 mt-3 mt-lg-4 rounded-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_19___default.a, {
    width: "100%",
    height: 360
  })) : paymentBlockData && !noDisplayPaymentBloc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_pages_payment_PaymentBlock__WEBPACK_IMPORTED_MODULE_14__["PaymentBlock"], Object.assign({}, paymentBlockData, {
    invoiceVariant: true
  }))) : null)), !isTimelinePage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_background_BackgroundWave__WEBPACK_IMPORTED_MODULE_10__["default"], null, isLoadingPushMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-0 mt-4 rounded-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_19___default.a, {
    width: "100%",
    height: 200
  })) : ((_p = (_o = (_m = pushMoreData === null || pushMoreData === void 0 ? void 0 : pushMoreData.data) === null || _m === void 0 ? void 0 : _m.content) === null || _o === void 0 ? void 0 : _o.dataPush) === null || _p === void 0 ? void 0 : _p.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_ez_components_ModuleCardFaq__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: t('pedagoFacture.board.card_contract_module_title'),
    items: (_r = (_q = pushMoreData === null || pushMoreData === void 0 ? void 0 : pushMoreData.data) === null || _q === void 0 ? void 0 : _q.content) === null || _r === void 0 ? void 0 : _r.dataPush,
    openCard: openCard
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: otherQuestionContainerClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "outlined",
    border: "soft",
    className: "border-white bg-transparent mb-1 mb-lg-0 text-white",
    to: _app_constants__WEBPACK_IMPORTED_MODULE_12__["ROUTES"].HELP_AND_CONTACT,
    id: "invoice-explanation-other-question-btn",
    onClick: function onClick() {
      var _a, _b;
      track('INVOICE_CONSULTATION_5', {
        cas_client: (_b = (_a = pushMoreData === null || pushMoreData === void 0 ? void 0 : pushMoreData.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.clientContext
      });
    }
  }, t('pedagoFacture.board.otherQuestionBtn')))) : null));
}

/***/ }),

/***/ "./assets/js/pages/invoice-history/invoice-history.scss":
/*!**************************************************************!*\
  !*** ./assets/js/pages/invoice-history/invoice-history.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);