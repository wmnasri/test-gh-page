(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/components/AlertBox/index.tsx":
/*!*************************************************!*\
  !*** ./assets/js/components/AlertBox/index.tsx ***!
  \*************************************************/
/*! exports provided: ALERT_SUCCESS, ALERT_ALERT, ALERT_INFO, ALERT_WARNING, AlertBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_SUCCESS", function() { return ALERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_ALERT", function() { return ALERT_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_INFO", function() { return ALERT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_WARNING", function() { return ALERT_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBox", function() { return AlertBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_cross_circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @img/cross-circle.svg */ "./assets/img/cross-circle.svg");




var ALERT_SUCCESS = 'success';
var ALERT_ALERT = 'alert';
var ALERT_INFO = 'info';
var ALERT_WARNING = 'warning';
var AlertBox = function AlertBox(_ref) {
  var children = _ref.children,
    className = _ref.className,
    fontSize = _ref.fontSize,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? ALERT_SUCCESS : _ref$variant;
  var alertBoxClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('d-flex p-4 mb-3 border-s border border-1 rounded-1', {
    'border-green-05 bg-lighten-30-green-light': ALERT_SUCCESS === variant,
    'border-red bg-lighten-30-red-light': ALERT_ALERT === variant,
    'border-blue-02 bg-blue-03': ALERT_INFO === variant,
    'border-warning bg-warning-light': ALERT_WARNING === variant
  }, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: alertBoxClasses,
    "data-cy": "alert-box-".concat(variant)
  }, ALERT_SUCCESS === variant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    className: "text-success text-xlarge mr-4",
    icon: "check-circle-1",
    variant: "bold"
  })), ALERT_ALERT === variant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "text-danger text-xlarge mr-4",
    src: _img_cross_circle_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: ""
  })), ALERT_INFO === variant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    className: "text-info text-xlarge mr-4",
    icon: "information-circle",
    variant: "bold"
  })), ALERT_WARNING === variant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    className: "text-warning text-xlarge mr-4",
    icon: "alert-triangle",
    variant: "bold"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "m-0 new-line text-break align-self-center d-block",
    tag: "span",
    size: fontSize
  }, children));
};

/***/ }),

/***/ "./assets/js/models/personalInfos/index.ts":
/*!*************************************************!*\
  !*** ./assets/js/models/personalInfos/index.ts ***!
  \*************************************************/
/*! exports provided: updateEmailSchema, updateLoginSchema, updateContractNameSchema, updateMobilePhoneSchema, updatePhoneSchema, onConnectCoachSchema, onConnectCoachSchemaHistoConso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmailSchema", function() { return updateEmailSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLoginSchema", function() { return updateLoginSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContractNameSchema", function() { return updateContractNameSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMobilePhoneSchema", function() { return updateMobilePhoneSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePhoneSchema", function() { return updatePhoneSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onConnectCoachSchema", function() { return onConnectCoachSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onConnectCoachSchemaHistoConso", function() { return onConnectCoachSchemaHistoConso; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/models */ "./assets/js/models/index.ts");



var updateEmailSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  email: _app_models__WEBPACK_IMPORTED_MODULE_2__["email"],
  repeated_email: Object(_app_models__WEBPACK_IMPORTED_MODULE_2__["repeated_email"])()
});
var updateLoginSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  old_password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('mandatory_field'),
  password: _app_models__WEBPACK_IMPORTED_MODULE_2__["password"],
  repeated_password: Object(_app_models__WEBPACK_IMPORTED_MODULE_2__["repeated_password"])('password')
});
var updateContractNameSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  contract_name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().max(30, 'personalInfos.form.contract.error').required('mandatory_field')
});
var updateMobilePhoneSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  mobile_phone: _app_models__WEBPACK_IMPORTED_MODULE_2__["mobilePhone"].required('mandatory_field')
});
var updatePhoneSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  phone: _app_models__WEBPACK_IMPORTED_MODULE_2__["phone"].required('mandatory_field')
});
var commonSchemaFieldsConnectCoach = {
  peopleCount: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('mandatory_field'),
  housingType: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('mandatory_field')
};
var onConnectCoachSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"](Object.assign({}, commonSchemaFieldsConnectCoach));
var onConnectCoachSchemaHistoConso = yup__WEBPACK_IMPORTED_MODULE_0__["object"](Object.assign(Object.assign({}, commonSchemaFieldsConnectCoach), {
  consentGiven: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().oneOf([true], 'mandatory_field').required('mandatory_field')
}));

/***/ }),

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

/***/ "./assets/js/pages/personal-infos/hooks/useGetServicesStatus.ts":
/*!**********************************************************************!*\
  !*** ./assets/js/pages/personal-infos/hooks/useGetServicesStatus.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetServicesStatus; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");



function useGetServicesStatus(props) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultParams = '?services[]=efacture&services[]=alerte_fuite&services[]=alerte_conso&services[]=smartcoach';
  var currentParams = params ? params : defaultParams;
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])('getServicesStatus', function () {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].SERVICES.STATUS + encodeURI(currentParams));
  }, props || {});
}

/***/ }),

/***/ "./assets/js/pages/personal-infos/hooks/usePostCustomerAdditionalInfos.ts":
/*!********************************************************************************!*\
  !*** ./assets/js/pages/personal-infos/hooks/usePostCustomerAdditionalInfos.ts ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePostCustomerAdditionalInfos; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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



function usePostCustomerAdditionalInfos(queryName) {
  var _this = this;
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQueryClient"])();
  var fetchAddInfos = function fetchAddInfos(params) {
    return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_1__["default"].post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API"].SMARTCOACH.CUSTOMER_ADDITIONAL_INFOS, params);
  };
  return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(function (params) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var resp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchAddInfos(params);
          case 2:
            resp = _context.sent;
            queryClient.setQueryData([queryName], resp);
            return _context.abrupt("return", resp);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
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

/***/ "./assets/js/pages/personal-infos/modals/UpdateStatus.tsx":
/*!****************************************************************!*\
  !*** ./assets/js/pages/personal-infos/modals/UpdateStatus.tsx ***!
  \****************************************************************/
/*! exports provided: UpdateStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var UpdateStatus = function UpdateStatus(_ref) {
  var _ref$sourceType = _ref.sourceType,
    sourceType = _ref$sourceType === void 0 ? 'infoPerso' : _ref$sourceType,
    type = _ref.type,
    updatedValue = _ref.updatedValue,
    success = _ref.success,
    context = _ref.context,
    _ref$toRedirect = _ref.toRedirect,
    toRedirect = _ref$toRedirect === void 0 ? Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].ACCOUNT_PERSONAL_INFORMATIONS) : _ref$toRedirect,
    trackingSuccess = _ref.trackingSuccess,
    trackingError = _ref.trackingError,
    onHideCloseModal = _ref.onHideCloseModal,
    setShowModal = _ref.setShowModal;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useInterweave = Object(_app_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    transform = _useInterweave.transform;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5),
    _useState2 = _slicedToArray(_useState, 2),
    countdown = _useState2[0],
    setCountdown = _useState2[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (onHideCloseModal) {
      onHideCloseModal(true);
      var timer = setInterval(function () {
        setCountdown(function (prev) {
          if (prev <= 1) {
            clearInterval(timer);
            history.push(toRedirect);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return function () {
        return clearInterval(timer);
      };
    }
    return;
  }, [onHideCloseModal, history, toRedirect]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (success && trackingSuccess) {
      trackingSuccess();
    }
    if (!success && trackingError) {
      trackingError();
    }
  }, [type, updatedValue, success]);
  var errorTitle = sourceType === 'histoConso' ? t("histoConso.".concat(type, ".technical_error.title")) : t('personalInfos.form.technical_error.title', {
    date: _app_constants__WEBPACK_IMPORTED_MODULE_7__["date"],
    time: _app_constants__WEBPACK_IMPORTED_MODULE_7__["time"]
  });
  var isPhone = type === 'phone' || type === 'mobilePhone';
  var phoneTitle = t("personalInfos.form.".concat(type, ".validation.title"), {
    context: context
  });
  var title = t("personalInfos.form.".concat(type, ".title"), {
    context: context
  });
  switch (sourceType) {
    case 'histoConso':
      title = t("histoConso.".concat(type, ".title"));
      break;
    case 'infoPerso':
      if (isPhone) {
        title = phoneTitle;
      }
      break;
  }
  var getErrorDesc = function getErrorDesc() {
    if (sourceType === 'histoConso') {
      return t("histoConso.".concat(type, ".technical_error.description"));
    } else if (type === 'on-connect-desactivation') {
      return t('personalInfos.form.on-connect-desactivation.technical_error');
    } else {
      return t('personalInfos.form.technical_error.description', {
        field: t("personalInfos.form.".concat(type, ".technical_error")),
        context: 'e-facture' === type ? 'efacture' : ''
      });
    }
  };
  var errorDesc = getErrorDesc();
  var phoneBody = t("personalInfos.form.".concat(type, ".validation.body"), {
    context: context
  });
  var bodyText = t("personalInfos.form.".concat(type, ".validated"));
  switch (sourceType) {
    case 'histoConso':
      bodyText = t("histoConso.".concat(type, ".validated"), {
        countdown: countdown,
        plural: countdown > 1 ? 's' : ''
      });
      break;
    case 'infoPerso':
      if (isPhone) {
        bodyText = phoneBody;
      }
      break;
  }
  var phoneUpdate = t("personalInfos.form.".concat(type, ".validation.updated"), {
    updatedValue: updatedValue
  });
  var updatedKey = t("personalInfos.form.".concat(type, ".updated"), {
    updatedValue: updatedValue
  });
  var closeModal = function closeModal() {
    if (toRedirect) {
      history.push(toRedirect);
    }
    if (setShowModal) {
      setShowModal(false);
    }
    return;
  };
  var variant = success ? _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_5__["ALERT_SUCCESS"] : _app_components_AlertBox__WEBPACK_IMPORTED_MODULE_5__["ALERT_ALERT"];
  var noUpdatedTypes = ['password', 'on-connect', 'on-connect-desactivation'];
  var showUpdated = success && !(noUpdatedTypes === null || noUpdatedTypes === void 0 ? void 0 : noUpdatedTypes.includes(type)) && context !== 'erase_ok';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, success ? title : errorTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_AlertBox__WEBPACK_IMPORTED_MODULE_5__["AlertBox"], {
    className: "my-3 my-lg-4",
    variant: variant
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "M",
    weight: "regular",
    tag: "span"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    content: success ? bodyText : errorDesc,
    transform: transform
  }))), showUpdated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "regular",
    tag: "span"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    content: isPhone ? phoneUpdate : updatedKey,
    transform: transform
  })), sourceType === 'histoConso' && onHideCloseModal ? countdown === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg-right mt-4 mt-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    border: "soft",
    type: "button",
    id: "close-btn",
    onClick: closeModal
  }, t('histoConso.on-connect.continue'))) : null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg-right mt-4 mt-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    border: "soft",
    type: "button",
    id: "close-btn",
    onClick: closeModal
  }, t('close'))));
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