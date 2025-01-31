(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./assets/js/components/Skeleton/Modules/Hero.jsx":
/*!********************************************************!*\
  !*** ./assets/js/components/Skeleton/Modules/Hero.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroSkeleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Container */ "./assets/js/components/Container/index.tsx");



function HeroSkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    minHeight: '75vh'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: 125,
    height: 24,
    className: "mb-4",
    style: {
      borderRadius: '3rem'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "mb-5",
    width: '85%',
    height: 50
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "mb-3",
    width: '100%',
    height: 35,
    count: 6
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "mt-5",
    width: 150,
    height: 50
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 pt-lg-5 pl-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: '100%',
    height: '75%',
    style: {
      borderRadius: '1rem'
    }
  }))));
}

/***/ }),

/***/ "./assets/js/pages/maintenance/index.tsx":
/*!***********************************************!*\
  !*** ./assets/js/pages/maintenance/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaintenancePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Bubble__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/Bubble */ "./assets/js/components/Bubble/index.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _maintenance_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maintenance.scss */ "./assets/js/pages/maintenance/maintenance.scss");
/* harmony import */ var _maintenance_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_maintenance_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_components_Skeleton_Modules_Hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/Skeleton/Modules/Hero */ "./assets/js/components/Skeleton/Modules/Hero.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function MaintenancePage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    transform = _useInterweave.transform;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
    id = _useParams.id;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    loader = _useState2[0],
    setLoader = _useState2[1];
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_10__["useQuery"])('GetPageMaintenance', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_6__["API"].GET_PAGE_MAINTENANCE.replace(':id', id), {
        baseURL: Object(_app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__["getBaseUrl"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["PUBLIC_API"], false)
      });
    }),
    data = _useQuery.data,
    isFetching = _useQuery.isFetching,
    isSuccess = _useQuery.isSuccess;
  var _ref = (data === null || data === void 0 ? void 0 : data.data) || {},
    code = _ref.code,
    message = _ref.message,
    content = _ref.content;
  var validData = isSuccess && code === '00' && message === 'OK';
  var _ref2 = content || {},
    title = _ref2.title,
    description = _ref2.description;
  var _ref3 = (content === null || content === void 0 ? void 0 : content.image) || {},
    url = _ref3.url,
    alt = _ref3.alt;
  var _ref4 = (content === null || content === void 0 ? void 0 : content.button) || {},
    btnTitle = _ref4.title,
    btnUrl = _ref4.url;
  var handleClick = function handleClick() {
    setLoader(true);
    history.push(btnUrl);
  };
  if (isFetching) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Skeleton_Modules_Hero__WEBPACK_IMPORTED_MODULE_11__["default"], null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center maintenance"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row pt-3 ml-lg-5 justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-7 col-md-7 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "maintenance-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H2",
    size: "L"
  }, title || t('maintenance.default_title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "maintenance-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    tag: "h1",
    size: "M"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_8__["Markup"], {
    content: description || t('maintenance.default_description'),
    transform: transform
  }))), btnTitle && btnUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: handleClick,
    className: 'mt-4',
    loader: loader,
    "data-cy": "maintenance-btn"
  }, btnTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 col-md-4 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-glass-img"
  }), validData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-img-1",
    src: url,
    alt: alt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Bubble__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "green",
    size: "md",
    position: "36",
    className: " d-lg-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Bubble__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "blue-dark",
    size: "sm",
    position: "37",
    className: " d-lg-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Bubble__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "blue-sky",
    size: "sm",
    position: "38",
    className: " d-lg-block"
  })))));
}

/***/ }),

/***/ "./assets/js/pages/maintenance/maintenance.scss":
/*!******************************************************!*\
  !*** ./assets/js/pages/maintenance/maintenance.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);