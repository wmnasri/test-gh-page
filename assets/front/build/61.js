(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./assets/js/components/consent/message/index.jsx":
/*!********************************************************!*\
  !*** ./assets/js/components/consent/message/index.jsx ***!
  \********************************************************/
/*! exports provided: ConsentMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsentMessage", function() { return ConsentMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./assets/js/components/consent/message/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);





var ConsentMessage = function ConsentMessage(_ref) {
  var statusCode = _ref.statusCode,
    _ref$isValidateConsen = _ref.isValidateConsent,
    isValidateConsent = _ref$isValidateConsen === void 0 ? false : _ref$isValidateConsen,
    _ref$isKoConsent = _ref.isKoConsent,
    isKoConsent = _ref$isKoConsent === void 0 ? false : _ref$isKoConsent,
    _ref$isEmbed = _ref.isEmbed,
    isEmbed = _ref$isEmbed === void 0 ? false : _ref$isEmbed;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var status = parseInt(statusCode);
  var isError404 = !isValidateConsent && !isKoConsent && (status === 404 || !status);
  var isErrorServer = status >= 400 && status !== 404;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "consent-message-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, isValidateConsent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzIcon"], {
    variant: "bold",
    icon: "check-circle-1"
  }), (isErrorServer || isError404) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzIcon"], {
    variant: "bold",
    icon: "remove"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, isValidateConsent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "title"
  }, t('consent.confirmation.success.title')), isKoConsent && (!isEmbed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "title"
  }, t('consent.confirmation.ko_content')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "title"
  }, t('consent.ko_content'))), isError404 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
    content: t('consent.confirmation.404.title')
  })), isErrorServer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    className: "title"
  }, t('consent.confirmation.500.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], null, t('consent.confirmation.500.description'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "line"
  }))));
};

/***/ }),

/***/ "./assets/js/components/consent/message/index.module.scss":
/*!****************************************************************!*\
  !*** ./assets/js/components/consent/message/index.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./assets/js/pages/consent/index.tsx":
/*!*******************************************!*\
  !*** ./assets/js/pages/consent/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_services_consent_consentService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/consent/consentService */ "./assets/js/services/consent/consentService.js");
/* harmony import */ var _app_components_consent_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/consent/message */ "./assets/js/components/consent/message/index.jsx");
/* harmony import */ var _app_hooks_consents_useGetConsentQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks/consents/useGetConsentQuery */ "./assets/js/hooks/consents/useGetConsentQuery.ts");
/* harmony import */ var _app_hooks_consents_useValidateConsent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/hooks/consents/useValidateConsent */ "./assets/js/hooks/consents/useValidateConsent.js");
/* harmony import */ var _ConsentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConsentForm */ "./assets/js/pages/consent/ConsentForm.tsx");
/* harmony import */ var _app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/hooks/useSearchParams */ "./assets/js/hooks/useSearchParams.ts");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.scss */ "./assets/js/pages/consent/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_13__);
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
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














var ConsentPage = function ConsentPage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  var recaptchaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var searchParams = Object(_app_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_11__["useIsMobile"])();
  var reference = searchParams.get('reference') || null;
  var codeParcours = 'landingPage';
  var _window$tsme_data = window.tsme_data,
    recaptchaInvisiblePublicKey = _window$tsme_data.recaptchaInvisiblePublicKey,
    recaptchaEnabled = _window$tsme_data.recaptchaEnabled;
  var params = {
    codeParcours: codeParcours,
    reference: reference,
    typeUsage: searchParams.get('type_usage') || null,
    codeUsage: searchParams.get('code_usage') || null
  };
  var _k = Object(_app_hooks_consents_useGetConsentQuery__WEBPACK_IMPORTED_MODULE_6__["default"])({
      params: params,
      options: {
        enabled: null !== reference
      }
    }),
    consentQueryData = _k.data,
    isErrorConsent = _k.isError,
    getConsentQuery = __rest(_k, ["data", "isError"]);
  var isConsentKO = ((_a = consentQueryData === null || consentQueryData === void 0 ? void 0 : consentQueryData.data) === null || _a === void 0 ? void 0 : _a.message) === _app_constants__WEBPACK_IMPORTED_MODULE_3__["CODES"].KO_CONSENT;
  var _l = Object(_app_hooks_consents_useValidateConsent__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    isValidateError = _l.isError,
    validateConsent = __rest(_l, ["isError"]);
  var isValidateOk = ((_c = (_b = validateConsent === null || validateConsent === void 0 ? void 0 : validateConsent.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) === 'OK';
  var showMessage = isConsentKO || isErrorConsent || isValidateOk || isValidateError;
  var onSubmit = function onSubmit(values) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _m, _o, _p, formData, hasFormData, hasCodeUsages;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            formData = Object(_app_services_consent_consentService__WEBPACK_IMPORTED_MODULE_4__["formatSendingData"])({
              params: values,
              reference: reference,
              codeParcours: codeParcours
            });
            hasFormData = ((_m = Object.keys(formData)) === null || _m === void 0 ? void 0 : _m.length) > 0;
            hasCodeUsages = ((_o = formData === null || formData === void 0 ? void 0 : formData.codeUsages) === null || _o === void 0 ? void 0 : _o.length) > 0;
            if (!recaptchaEnabled) {
              _context.next = 7;
              break;
            }
            _context.next = 6;
            return (_p = recaptchaRef === null || recaptchaRef === void 0 ? void 0 : recaptchaRef.current) === null || _p === void 0 ? void 0 : _p.executeAsync();
          case 6:
            params['g-recaptcha-response'] = _context.sent;
          case 7:
            if (hasFormData && hasCodeUsages) {
              validateConsent.mutate(formData);
            }
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  var consents = Object(_app_services_consent_consentService__WEBPACK_IMPORTED_MODULE_4__["initValues"])({
    translate: t,
    data: Object(_app_services_consent_consentService__WEBPACK_IMPORTED_MODULE_4__["formatData"])(((_d = consentQueryData === null || consentQueryData === void 0 ? void 0 : consentQueryData.data) === null || _d === void 0 ? void 0 : _d.typesUsages) || {})
  });
  var dynamicValidationSchema = Object(_app_services_consent_consentService__WEBPACK_IMPORTED_MODULE_4__["generateSchema"])({
    consents: consents
  });
  if (getConsentQuery.isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10___default.a, {
      width: isMobile ? '100%' : 744,
      height: 300,
      className: "d-flex mb-4 mx-auto"
    }));
  }
  if (showMessage || !reference || isErrorConsent) {
    var statusConsent = ((_e = validateConsent === null || validateConsent === void 0 ? void 0 : validateConsent.data) === null || _e === void 0 ? void 0 : _e.status) || ((_g = (_f = validateConsent === null || validateConsent === void 0 ? void 0 : validateConsent.error) === null || _f === void 0 ? void 0 : _f.response) === null || _g === void 0 ? void 0 : _g.status) || ((_j = (_h = getConsentQuery === null || getConsentQuery === void 0 ? void 0 : getConsentQuery.error) === null || _h === void 0 ? void 0 : _h.response) === null || _j === void 0 ? void 0 : _j.status) || null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_consent_message__WEBPACK_IMPORTED_MODULE_5__["ConsentMessage"], {
      statusCode: statusConsent,
      isValidateConsent: validateConsent === null || validateConsent === void 0 ? void 0 : validateConsent.isSuccess,
      isKoConsent: isConsentKO
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "consents-page tsme-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConsentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "page",
    dynamicValidationSchema: dynamicValidationSchema,
    onSubmit: onSubmit
  }, recaptchaEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: recaptchaRef,
    size: "invisible",
    sitekey: recaptchaInvisiblePublicKey,
    // TODO : isolated n'existe pas dans la version que l'on utilise actuellement
    // isolated="true"
    badge: "bottomleft"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ConsentPage);

/***/ })

}]);