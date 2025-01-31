(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./assets/js/ez-components/stepper.jsx":
/*!*********************************************!*\
  !*** ./assets/js/ez-components/stepper.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzStepper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_form_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-form-stepper */ "./node_modules/react-form-stepper/dist/react-form-stepper.esm.js");



function EzStepper(_ref) {
  var activeStep = _ref.activeStep,
    steps = _ref.steps,
    stepsContent = _ref.stepsContent,
    stepClassName = _ref.stepClassName;
  var disabledColor = '#ADB5BD';
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelectorAll('#RFS-StepButton').forEach(function (element) {
      element.setAttribute('role', 'none');
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-ez-stepper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_form_stepper__WEBPACK_IMPORTED_MODULE_2__["Stepper"], {
    className: "px-0",
    activeStep: activeStep,
    steps: steps,
    connectorStyleConfig: {
      completedColor: '#3D466C',
      disabledColor: disabledColor
    },
    styleConfig: {
      activeBgColor: '#3D466C',
      completedBgColor: '#3D466C',
      inactiveBgColor: disabledColor
    },
    stepClassName: stepClassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only",
    tabIndex: "0"
  }, t('signUp.infoStep', {
    index: activeStep + 1,
    totalStep: steps.length
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-ez-stepper__content px-3"
  }, stepsContent[activeStep]));
}

/***/ }),

/***/ "./assets/js/pages/move-out/model.js":
/*!*******************************************!*\
  !*** ./assets/js/pages/move-out/model.js ***!
  \*******************************************/
/*! exports provided: setRefSchema, credentialsSchema, counterSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRefSchema", function() { return setRefSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credentialsSchema", function() { return credentialsSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterSchema", function() { return counterSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_components_tsme_react_components_models_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/tsme-react-components/models/validators */ "./assets/js/components/tsme-react-components/models/validators.tsx");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/models */ "./assets/js/models/index.ts");




var setRefSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  reference: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().isRef("La référence n'est pas valide.").required('Veuillez saisir une référence.')
});
var credentialsSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when(['cellPhone', 'phone'], {
    is: function is(cellPhone, phone) {
      return !cellPhone && !phone;
    },
    then: _app_models__WEBPACK_IMPORTED_MODULE_3__["email"].required('Veuillez renseigner un e-mail, un numéro de téléphone mobile ou fixe.')
  }).email("L'e-mail saisie n'est pas valide"),
  cellPhone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when(['email', 'phone'], {
    is: function is(email, phone) {
      return !email && !phone;
    },
    then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Veuillez renseigner un e-mail, un numéro de téléphone mobile ou fixe.')
  }).matches(_app_models__WEBPACK_IMPORTED_MODULE_3__["mobileOrPhoneAllowSpaces"], "Le numéro de téléphone n'est pas valide"),
  phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when(['email', 'cellPhone'], {
    is: function is(email, cellPhone) {
      return !email && !cellPhone;
    },
    then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Veuillez renseigner un e-mail, un numéro de téléphone mobile ou fixe.')
  }).matches(_app_models__WEBPACK_IMPORTED_MODULE_3__["mobileOrPhoneAllowSpaces"], "Le numéro de téléphone n'est pas valide")
}, [['email', 'cellPhone'], ['email', 'phone'], ['cellPhone', 'phone']]);
var errorLength = 'Un seul chiffre par cellule';
var errorRequired = 'Votre saisie est incomplète, merci de renseigner les 5 champs ci-dessus.';
var counterSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  input0: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().length(1, errorLength).required(errorRequired),
  input1: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().length(1, errorLength).required(errorRequired),
  input2: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().length(1, errorLength).required(errorRequired),
  input3: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().length(1, errorLength).required(errorRequired),
  input4: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().length(1, errorLength).required(errorRequired)
});

/***/ }),

/***/ "./assets/js/pages/sign-up/PasswordRules.scss":
/*!****************************************************!*\
  !*** ./assets/js/pages/sign-up/PasswordRules.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/sign-up/Step1.jsx":
/*!*******************************************!*\
  !*** ./assets/js/pages/sign-up/Step1.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _move_out_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../move-out/model */ "./assets/js/pages/move-out/model.js");
/* harmony import */ var _components_NewCustomerButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NewCustomerButton */ "./assets/js/components/NewCustomerButton.jsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ */ "./assets/js/pages/sign-up/index.jsx");
/* harmony import */ var _Step2_MultiChoice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Step2/MultiChoice */ "./assets/js/pages/sign-up/Step2/MultiChoice.jsx");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
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















function Step1() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_10__["SignupContext"]),
    dispatch = _useContext.dispatch,
    nextStep = _useContext.nextStep;
  var recaptchaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var recaptcha = window.tsme_data.recaptcha;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    formError = _useState2[0],
    setFormError = _useState2[1];
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_14__["default"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('SIGN_UP_1', {
      sz_funnel_creation_compte_step: 1
    });
  }, []);
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var reference, params;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              reference = _ref.reference;
              params = {
                'full-ref': Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["cleanText"])(reference)
              };
              if (!(recaptcha !== null && recaptcha !== void 0 && recaptcha.enabled)) {
                _context.next = 6;
                break;
              }
              _context.next = 5;
              return recaptchaRef.current.executeAsync();
            case 5:
              params['g-recaptcha-response'] = _context.sent;
            case 6:
              return _context.abrupt("return", _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_7__["REGISTER_CHECK_REF"], {
                params: params
              }));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), {
      onSuccess: function onSuccess(_ref3, _ref4) {
        var data = _ref3.data;
        var reference = _ref4.reference;
        var coordinates = data.coordinates,
          message = data.message;
        dispatch({
          type: 'reference',
          payload: reference
        });
        if (message === _constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK) {
          dispatch({
            type: 'coordinates',
            payload: coordinates
          });
          dispatch({
            type: 'activeType',
            payload: Object(_Step2_MultiChoice__WEBPACK_IMPORTED_MODULE_11__["getDefaultType"])(coordinates)
          });
          nextStep();
        } else {
          dispatch({
            type: 'isStep2IdBill',
            payload: true
          });
          nextStep();
        }
      },
      onError: function onError(_ref5) {
        var response = _ref5.response;
        var code = response.data.code;
        track('SIGN_UP_2', {
          sz_form_erreur_label: code,
          sz_form_erreur_type: 'Validation'
        });
        setFormError(Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["displayMessageByKey"])(code));
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      }
    }),
    isLoading = _useMutation.isLoading,
    mutate = _useMutation.mutate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {},
    validationSchema: _move_out_model__WEBPACK_IMPORTED_MODULE_8__["setRefSchema"],
    onSubmit: mutate,
    validateOnMount: true
  }, function (_ref6) {
    var values = _ref6.values,
      handleSubmit = _ref6.handleSubmit,
      handleChange = _ref6.handleChange,
      handleBlur = _ref6.handleBlur,
      isValid = _ref6.isValid;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      "data-cy": "sign-up-form-step-1",
      onSubmit: handleSubmit,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      id: "step-title",
      tabIndex: "-1"
    }, t('aria.step1'), " ", t('signUp.step1.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      align: "center",
      className: "text-dark",
      id: "step-title"
    }, t('signUp.step1.title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      name: "reference",
      id: "reference",
      autocomplete: "off",
      label: t('signUp.step1.label'),
      placeholder: t('signUp.step1.placeholder'),
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.reference,
      variant: "outlined",
      "aria-describedby": "reference-validation"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_13__["default"], {
      field: "reference"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      className: "text-dark",
      id: "reference-validation"
    }, t('signUp.step1.validation'))), formError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzAlert"], null, formError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
      variant: "contained",
      border: "soft",
      type: "submit",
      isDisabled: !isValid,
      loader: isLoading,
      id: "sign-up-step1-form-submit"
    }, t('signUp.step1.button', {
      context: 'submit'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewCustomerButton__WEBPACK_IMPORTED_MODULE_9__["default"], null), (recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.enabled) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: recaptchaRef,
      size: "invisible",
      sitekey: recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.invisiblePublicKey,
      badge: "bottomleft"
    })));
  });
}

/***/ }),

/***/ "./assets/js/pages/sign-up/Step2/IdBill.jsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/sign-up/Step2/IdBill.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdBill; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_idBill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/idBill */ "./assets/js/pages/sign-up/models/idBill.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./assets/js/pages/sign-up/index.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["isLoading"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function IdBill() {
  var recaptcha = window.tsme_data.recaptcha;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_7__["SignupContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch,
    nextStep = _useContext.nextStep;
  var reference = state.reference;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    formError = _useState2[0],
    setFormError = _useState2[1];
  var recaptchaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    track = _useGA.track;
  var reset = function reset() {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(body) {
        var params, url;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              params = _objectSpread({}, body);
              url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["REGISTER_CHECK_COORDINATES"], "?fullRef=").concat(reference);
              if (!(recaptcha !== null && recaptcha !== void 0 && recaptcha.enabled)) {
                _context.next = 6;
                break;
              }
              _context.next = 5;
              return recaptchaRef.current.executeAsync();
            case 5:
              params['g-recaptcha-response'] = _context.sent;
            case 6:
              return _context.abrupt("return", _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_9__["default"].post(url, _objectSpread({}, params)));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }(), {
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        var message = data.message,
          coordinates = data.coordinates;
        if (message === _constants__WEBPACK_IMPORTED_MODULE_8__["CODES"].OK) {
          nextStep();
        } else if (message === _constants__WEBPACK_IMPORTED_MODULE_8__["CODES"].KO_REF_CEL) {
          track('SIGN_UP_2', {
            sz_form_erreur_label: message,
            sz_form_erreur_type: 'Validation'
          });
          dispatch({
            type: 'alreadyAttached',
            payload: coordinates
          });
        } else {
          track('SIGN_UP_2', {
            sz_form_erreur_label: message,
            sz_form_erreur_type: 'Validation'
          });
          setFormError(Object(_services_Utils__WEBPACK_IMPORTED_MODULE_10__["displayMessageByKey"])(message));
          reset();
        }
      },
      onError: function onError(error) {
        var code = error.code,
          message = error.message;
        track('SIGN_UP_2', {
          sz_form_erreur_label: code,
          sz_form_erreur_type: 'Validation'
        });
        setFormError(Object(_services_Utils__WEBPACK_IMPORTED_MODULE_10__["displayMessageByKey"])(message));
        reset();
      }
    }),
    isLoading = _useMutation.isLoading,
    confirmCredentials = _objectWithoutProperties(_useMutation, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {},
    validationSchema: _models_idBill__WEBPACK_IMPORTED_MODULE_6__["idBillSchema"],
    onSubmit: confirmCredentials.mutate,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true
  }, function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContent, {
      isLoading: isLoading,
      formError: formError,
      recaptchaRef: recaptchaRef
    });
  });
}
var FormContent = function FormContent(_ref3) {
  var recaptchaRef = _ref3.recaptchaRef,
    isLoading = _ref3.isLoading,
    formError = _ref3.formError;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var recaptcha = window.tsme_data.recaptcha;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])(),
    values = _useFormikContext.values,
    handleSubmit = _useFormikContext.handleSubmit,
    handleChange = _useFormikContext.handleChange,
    handleBlur = _useFormikContext.handleBlur,
    isValid = _useFormikContext.isValid;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    "data-cy": "sign-up-form-step-2-ko-infos",
    onSubmit: handleSubmit,
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only",
    id: "step-title",
    tabIndex: "-1"
  }, t('aria.step2'), " ", t('signUp.step2.idBill.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    align: "center"
  }, t('signUp.step2.idBill.title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzInput"], {
    label: t('signUp.step2.idBill.id.label'),
    placeholder: t('signUp.step2.idBill.id.placeholder'),
    onChange: handleChange,
    onBlur: handleBlur,
    name: "identifiant",
    value: values.identifiant,
    variant: "outlined",
    infoPosition: "label",
    infoDetached: true,
    info: t('signUp.step2.idBill.id.info'),
    "aria-describedby": "id-info",
    aria: {
      describedById: 'id-info'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_11__["default"], {
    field: "identifiant"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzInput"], {
    label: t('signUp.step2.idBill.zipCode.label'),
    placeholder: t('signUp.step2.idBill.zipCode.placeholder'),
    onChange: handleChange,
    onBlur: handleBlur,
    name: "cp",
    variant: "outlined",
    value: values.cp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_11__["default"], {
    field: "cp"
  })), formError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzAlert"], null, formError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    variant: "contained",
    border: "soft",
    type: "submit",
    isDisabled: !isValid,
    loader: isLoading,
    id: "sign-up-step2-form-id-bill-submit"
  }, t('signUp.step2.button_submit'))), (recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.enabled) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: recaptchaRef,
    size: "invisible",
    sitekey: recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.invisiblePublicKey,
    badge: "bottomleft"
  }));
};

/***/ }),

/***/ "./assets/js/pages/sign-up/Step2/MultiChoice.jsx":
/*!*******************************************************!*\
  !*** ./assets/js/pages/sign-up/Step2/MultiChoice.jsx ***!
  \*******************************************************/
/*! exports provided: getDefaultType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultType", function() { return getDefaultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step2MultiChoice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .. */ "./assets/js/pages/sign-up/index.jsx");
/* harmony import */ var _move_out_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../move-out/model */ "./assets/js/pages/move-out/model.js");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["isLoading"],
  _excluded2 = ["values", "handleChange", "handleBlur", "handleSubmit", "submitForm", "isValid"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var TYPE_EMAIL = 'email';
var TYPE_PHONE = 'phone';
var TYPE_CELLPHONE = 'cellphone';
var getDefaultType = function getDefaultType(coordinates) {
  var cellphone = coordinates.cellphone,
    email = coordinates.email;
  if (cellphone) {
    return TYPE_CELLPHONE;
  } else if (email) {
    return TYPE_EMAIL;
  } else {
    return TYPE_PHONE;
  }
};
function Step2MultiChoice() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    formError = _useState2[0],
    setFormError = _useState2[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_8__["SignupContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch,
    nextStep = _useContext.nextStep;
  var reference = state.reference,
    activeType = state.activeType;
  var recaptcha = window.tsme_data.recaptcha;
  var recaptchaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    track = _useGA.track;
  var reset = function reset() {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(body) {
        var params, cellPhoneOnly, phoneOnly, emailOnly;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              params = _objectSpread({}, body);
              if (activeType === TYPE_CELLPHONE) {
                if ('cellphone' in params) {
                  if (!('cellPhone' in params)) {
                    params.cellPhone = params.cellphone;
                  }
                  delete params.cellphone;
                }
                cellPhoneOnly = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_10__["cleanText"])(params.cellPhone);
                params = {};
                params.cellPhone = cellPhoneOnly;
              }
              if (activeType === TYPE_PHONE) {
                phoneOnly = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_10__["cleanText"])(params.phone);
                params = {};
                params.phone = phoneOnly;
              }
              if (activeType === TYPE_EMAIL) {
                emailOnly = params.email;
                params = {};
                params.email = emailOnly;
              }
              params.fullRef = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_10__["cleanText"])(reference);
              if (!(recaptcha !== null && recaptcha !== void 0 && recaptcha.enabled)) {
                _context.next = 9;
                break;
              }
              _context.next = 8;
              return recaptchaRef.current.executeAsync();
            case 8:
              params['g-recaptcha-response'] = _context.sent;
            case 9:
              return _context.abrupt("return", _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_7__["REGISTER_CHECK_COORDINATES"], params));
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }(), {
      onSuccess: function onSuccess(_ref2) {
        var data = _ref2.data;
        var message = data.message,
          coordinates = data.coordinates;
        if (message === _constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].OK) {
          nextStep();
        } else if (message === _constants__WEBPACK_IMPORTED_MODULE_7__["CODES"].KO_REF_CEL) {
          track('SIGN_UP_2', {
            sz_form_erreur_label: message,
            sz_form_erreur_type: 'Validation'
          });
          dispatch({
            type: 'alreadyAttached',
            payload: coordinates
          });
        } else {
          track('SIGN_UP_2', {
            sz_form_erreur_label: message,
            sz_form_erreur_type: 'Validation'
          });
          var error = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_10__["displayMessageByKey"])(message);
          setFormError(error);
          reset();
        }
      },
      onError: function onError(error) {
        var code = error.code,
          message = error.message;
        track('SIGN_UP_2', {
          sz_form_erreur_label: code,
          sz_form_erreur_type: 'Validation'
        });
        setFormError(Object(_services_Utils__WEBPACK_IMPORTED_MODULE_10__["displayMessageByKey"])(message));
        reset();
      }
    }),
    isLoading = _useMutation.isLoading,
    ConfirmCredentials = _objectWithoutProperties(_useMutation, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {},
    onSubmit: ConfirmCredentials.mutate,
    validationSchema: _move_out_model__WEBPACK_IMPORTED_MODULE_9__["credentialsSchema"],
    validateOnMount: true,
    validateOnChange: true,
    enableReinitialize: true
  }, function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContent, {
      formError: formError,
      isLoading: isLoading,
      recaptchaRef: recaptchaRef
    });
  });
}
var FormContent = function FormContent(_ref3) {
  var recaptchaRef = _ref3.recaptchaRef,
    formError = _ref3.formError,
    isLoading = _ref3.isLoading;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_8__["SignupContext"]),
    state = _useContext2.state,
    dispatch = _useContext2.dispatch;
  var activeType = state.activeType,
    coordinates = state.coordinates;
  var cellphone = coordinates.cellphone,
    email = coordinates.email,
    phone = coordinates.phone;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])(),
    values = _useFormikContext.values,
    handleChange = _useFormikContext.handleChange,
    handleBlur = _useFormikContext.handleBlur,
    handleSubmit = _useFormikContext.handleSubmit,
    submitForm = _useFormikContext.submitForm,
    isValid = _useFormikContext.isValid,
    formik = _objectWithoutProperties(_useFormikContext, _excluded2);
  var recaptcha = window.tsme_data.recaptcha;
  var confirmType = [{
    type: TYPE_EMAIL,
    text: t('signUp.step2.confirmType.email')
  }, {
    type: TYPE_PHONE,
    text: t('signUp.step2.confirmType.phone')
  }, {
    type: TYPE_CELLPHONE,
    text: t('signUp.step2.confirmType.cellPhone')
  }];
  var _onClick = function onClick(e, type) {
    e.preventDefault();
    dispatch({
      type: 'activeType',
      payload: type
    });
    for (var _i2 = 0, _confirmType = confirmType; _i2 < _confirmType.length; _i2++) {
      var _type = _confirmType[_i2].type;
      formik.setFieldValue(_type, '');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    "data-cy": "sign-up-form-step-2",
    onSubmit: handleSubmit,
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only",
    id: "step-title",
    tabIndex: "-1"
  }, t('aria.step2'), " ", t('signUp.step2.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    align: "center"
  }, t('signUp.step2.title'))), cellphone && activeType === TYPE_CELLPHONE && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
    label: t('signUp.step2.cellPhone.label'),
    autocomplete: "tel",
    placeholder: cellphone,
    onChange: handleChange,
    onBlur: handleBlur,
    name: "cellPhone",
    id: "cellPhone",
    value: values.cellPhone,
    variant: "outlined",
    info: t('signUp.step2.cellPhone.toolTip'),
    infoPosition: "label",
    infoDetached: true,
    "aria-describedby": "cellPhone-info cellPhone-validation",
    aria: {
      describedById: 'cellPhone-info'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_11__["default"], {
    field: "cellPhone"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    id: "cellPhone-validation"
  }, t('signUp.step2.cellPhone.validation'))), email && activeType === TYPE_EMAIL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
    label: t('signUp.step2.email.label'),
    placeholder: email,
    onChange: handleChange,
    onBlur: handleBlur,
    name: "email",
    id: "email",
    autocomplete: "email",
    value: values.email,
    variant: "outlined",
    info: t('signUp.step2.email.toolTip'),
    infoPosition: "label",
    infoDetached: true,
    "aria-describedby": "email-info email-validation",
    aria: {
      describedById: 'email-info'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_11__["default"], {
    field: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    id: "email-validation"
  }, t('signUp.step2.email.validation'))), phone && activeType === TYPE_PHONE && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
    label: t('signUp.step2.phone.label'),
    placeholder: phone,
    onChange: handleChange,
    onBlur: handleBlur,
    name: "phone",
    id: "phone",
    autocomplete: "phone",
    value: values.phone,
    variant: "outlined",
    info: t('signUp.step2.phone.toolTip'),
    infoPosition: "label",
    infoDetached: true,
    "aria-describedby": "phone-info phone-validation",
    aria: {
      describedById: 'phone-info'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_11__["default"], {
    field: "phone"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    id: "phone-validation"
  }, t('signUp.step2.phone.validation'))), formError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzAlert"], null, formError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    variant: "contained",
    border: "soft",
    type: "submit",
    isDisabled: !isValid || Object.keys(values).length === 0,
    loader: isLoading,
    id: "sign-up-step2-form-multichoice-submit"
  }, t('signUp.step2.button_submit')), (recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.enabled) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: recaptchaRef,
    size: "invisible",
    sitekey: recaptcha === null || recaptcha === void 0 ? void 0 : recaptcha.invisiblePublicKey,
    badge: "bottomleft"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-3"
  }, confirmType.filter(function (_ref4) {
    var type = _ref4.type;
    return type !== activeType;
  }).map(function (_ref5) {
    var text = _ref5.text,
      type = _ref5.type;
    if (!coordinates[type]) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
      id: "confirmType_".concat(type),
      key: type,
      className: "px-0 d-block h-auto",
      variant: "text",
      onClick: function onClick(e) {
        return _onClick(e, type);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      variant: "caption",
      size: "M",
      className: "mt-2"
    }, text));
  })));
};

/***/ }),

/***/ "./assets/js/pages/sign-up/Step2/index.jsx":
/*!*************************************************!*\
  !*** ./assets/js/pages/sign-up/Step2/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _MultiChoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiChoice */ "./assets/js/pages/sign-up/Step2/MultiChoice.jsx");
/* harmony import */ var _IdBill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IdBill */ "./assets/js/pages/sign-up/Step2/IdBill.jsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./assets/js/pages/sign-up/index.jsx");





function Step2() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_4__["SignupContext"]),
    state = _useContext.state;
  var isStep2IdBill = state.isStep2IdBill;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    track = _useGA.track;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('SIGN_UP_1', {
      sz_funnel_creation_compte_step: 2
    });
  }, []);
  if (isStep2IdBill) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IdBill__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MultiChoice__WEBPACK_IMPORTED_MODULE_2__["default"], null);
}

/***/ }),

/***/ "./assets/js/pages/sign-up/Step3/MyIds.jsx":
/*!*************************************************!*\
  !*** ./assets/js/pages/sign-up/Step3/MyIds.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyIds; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/tsme-react-components/components/Password/utils */ "./assets/js/components/tsme-react-components/components/Password/utils.tsx");
/* harmony import */ var _components_tsme_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tsme-react-components */ "./assets/js/components/tsme-react-components/index.tsx");
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _PasswordRules_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PasswordRules.scss */ "./assets/js/pages/sign-up/PasswordRules.scss");
/* harmony import */ var _PasswordRules_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PasswordRules_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_components_InfoBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/InfoBox */ "./assets/js/components/InfoBox.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function MyIds(_ref) {
  var isEfacture = _ref.isEfacture,
    eFactureContact = _ref.eFactureContact;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])(),
    errors = _useFormikContext.errors,
    values = _useFormikContext.values,
    handleChange = _useFormikContext.handleChange,
    handleBlur = _useFormikContext.handleBlur,
    setFieldValue = _useFormikContext.setFieldValue;
  var refPassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPasswordRules = _useState2[0],
    setShowPasswordRules = _useState2[1];
  var passwordValidation = Object(_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_4__["checkPassRules"])(values.raw_password);
  var allTrue = Object.values(passwordValidation).every(function (value) {
    return value;
  });
  var messageErrorAccess = Object(_components_tsme_react_components_components_Password_utils__WEBPACK_IMPORTED_MODULE_4__["messageErrorPasswordAccess"])(passwordValidation);
  var aria = {
    showPasswordLabel: t('global.form.password', {
      context: 'show'
    }),
    hidePasswordLabel: t('global.form.password', {
      context: 'hide'
    })
  };
  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    setFieldValue('confirm_efacture', target.checked ? 1 : 0);
  };
  var onFocus = function onFocus() {
    if (!allTrue) {
      setShowPasswordRules(true);
    }
  };
  var onBlur = function onBlur(e) {
    setShowPasswordRules(false);
    handleBlur(e);
  };
  var preventCopyPaste = function preventCopyPaste(e) {
    e.preventDefault();
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (allTrue) {
      setShowPasswordRules(false);
    } else if (!allTrue && document.activeElement === refPassword.current) {
      setShowPasswordRules(true);
    }
  }, [passwordValidation]);
  var infoBoxData = {
    title: t('signUp.step3.eFacture.receive_on_mail'),
    eFactureContact: eFactureContact,
    checkboxLabel: t('signUp.step3.eFacture.confirm_login_mail'),
    checkboxValue: values.confirm_efacture,
    handleChange: onChange
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzInput"], {
    variant: "outlined",
    name: "email",
    id: "email",
    autocomplete: "email",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.email,
    label: t('signUp.step3.email.label'),
    error: errors === null || errors === void 0 ? void 0 : errors.email,
    onPaste: preventCopyPaste,
    "aria-required": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
    field: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzInput"], {
    variant: "outlined",
    name: "repeated_email",
    id: "repeated_email",
    autocomplete: "email",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.repeated_email,
    label: t('signUp.step3.email_confirm.label'),
    error: errors === null || errors === void 0 ? void 0 : errors.repeated_email,
    onPaste: preventCopyPaste,
    "aria-required": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
    field: "repeated_email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzInput"], {
    ref: refPassword,
    variant: "outlined",
    name: "raw_password",
    id: "raw_password",
    autocomplete: "off",
    type: "password",
    onChange: handleChange,
    onBlur: onBlur,
    onFocus: onFocus,
    value: values.raw_password,
    label: t('signUp.step3.password.label'),
    info: t('signUp.step3.password.info'),
    infoPosition: "label",
    infoDetached: true,
    showPassword: true,
    error: errors === null || errors === void 0 ? void 0 : errors.raw_password,
    onPaste: preventCopyPaste,
    "aria-describedby": "password-rules",
    "aria-required": "true",
    aria: aria
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_5__["PasswordRules"], {
    password: values.raw_password,
    className: 'position-absolute bg-blue-03 rounded-2',
    show: showPasswordRules
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
    field: "raw_password",
    messageAccess: messageErrorAccess
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzInput"], {
    variant: "outlined",
    name: "repeated_password",
    id: "repeated_password",
    autocomplete: "off",
    type: "password",
    onBlur: handleBlur,
    onChange: handleChange,
    value: values.repeated_password,
    label: t('signUp.step3.password_confirm.label'),
    showPassword: true,
    error: errors === null || errors === void 0 ? void 0 : errors.repeated_password,
    onPaste: preventCopyPaste,
    aria: aria
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_6__["default"], {
    field: "repeated_password"
  }), isEfacture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_InfoBox__WEBPACK_IMPORTED_MODULE_8__["InfoBox"], infoBoxData));
}

/***/ }),

/***/ "./assets/js/pages/sign-up/Step3/MyInfos.jsx":
/*!***************************************************!*\
  !*** ./assets/js/pages/sign-up/Step3/MyInfos.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyInfos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function MyInfos(_ref) {
  var displayPart2 = _ref.displayPart2,
    setCurrentKey = _ref.setCurrentKey;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var scroll = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(displayPart2),
    _useState2 = _slicedToArray(_useState, 2),
    hasScrolled = _useState2[0],
    setHasScrolled = _useState2[1];
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])(),
    isValid = _useFormikContext.isValid,
    values = _useFormikContext.values,
    errors = _useFormikContext.errors,
    touched = _useFormikContext.touched,
    handleChange = _useFormikContext.handleChange,
    handleBlur = _useFormikContext.handleBlur,
    setFieldValue = _useFormikContext.setFieldValue;
  var options = [{
    label: t('signUp.step3.description.home'),
    value: 'home'
  }, {
    label: t('signUp.step3.description.business'),
    value: 'business'
  }];
  var onChange = function onChange(value) {
    setFieldValue('type', value);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!hasScrolled) {
      var hasNoError = Object.keys(errors).length === 0;
      var hasNoTouched = Object.keys(touched).length === 0;
      if (isValid && hasNoError && !hasNoTouched) {
        var items = document.querySelectorAll('.accordion-card');
        setCurrentKey(['0', '1']);
        setHasScrolled(true);
        scroll(items[0].clientHeight + items[1].offsetTop);
      }
    }
  }, [isValid]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzInput"], {
    variant: "outlined",
    value: values.name,
    name: "name",
    id: "name",
    "aria-required": "true",
    onChange: handleChange,
    onBlur: handleBlur,
    label: t('signUp.step3.contractName.label'),
    placeholder: t('signUp.step3.contractName.placeholder')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    customDisplay: errors.name,
    field: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    id: "type-aria-label",
    htmlFor: "typeInput"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    size: "M",
    weight: "regular",
    tag: "span",
    color: "dark"
  }, t('signUp.step3.description.label'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzSelect"], {
    options: options,
    value: values.type,
    defaultValue: values.type,
    name: "type",
    id: "type",
    "aria-required": "true",
    onChange: onChange,
    onBlur: handleBlur,
    placeholder: t('signUp.step3.description.placeholder'),
    inputId: "typeInput",
    "aria-labelledby": "type-aria-label"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    customDisplay: errors.type,
    field: "type"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzInput"], {
    variant: "outlined",
    value: values.phone,
    name: "phone",
    id: "phone",
    autocomplete: "tel",
    onChange: handleChange,
    onBlur: handleBlur,
    label: t('signUp.step3.phone.label'),
    placeholder: t('signUp.step3.phone.placeholder'),
    info: t('signUp.step3.phone.info'),
    infoPosition: "label",
    infoDetached: true,
    "aria-describedby": "phone-info",
    aria: {
      describedById: 'phone-info'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    field: "phone"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzInput"], {
    variant: "outlined",
    value: values.cellphone,
    name: "cellphone",
    id: "cellphone",
    autocomplete: "tel",
    onChange: handleChange,
    onBlur: handleBlur,
    label: t('signUp.step3.mobile_phone.label'),
    placeholder: t('signUp.step3.mobile_phone.placeholder'),
    info: t('signUp.step3.phone.info'),
    infoPosition: "label",
    infoDetached: true,
    "aria-describedby": "cellphone-info",
    aria: {
      describedById: 'cellphone-info'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    field: "cellphone"
  }));
}

/***/ }),

/***/ "./assets/js/pages/sign-up/Step3/index.jsx":
/*!*************************************************!*\
  !*** ./assets/js/pages/sign-up/Step3/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step3; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _ez_components_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ez-components/accordion */ "./assets/js/ez-components/accordion/index.jsx");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _models_infosAccount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/infosAccount */ "./assets/js/pages/sign-up/models/infosAccount.js");
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ */ "./assets/js/pages/sign-up/index.jsx");
/* harmony import */ var _MyInfos__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MyInfos */ "./assets/js/pages/sign-up/Step3/MyInfos.jsx");
/* harmony import */ var _MyIds__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MyIds */ "./assets/js/pages/sign-up/Step3/MyIds.jsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["data"],
  _excluded2 = ["isLoading"];
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


















function merge() {
  for (var _len = arguments.length, schemas = new Array(_len), _key = 0; _key < _len; _key++) {
    schemas[_key] = arguments[_key];
  }
  var first = schemas[0],
    rest = schemas.slice(1);
  return rest.reduce(function (mergedSchemas, schema) {
    return mergedSchemas.concat(schema);
  }, first);
}
function Step3() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_14__["SignupContext"]),
    state = _useContext.state,
    goToStep = _useContext.goToStep,
    dispatch = _useContext.dispatch,
    displayErrorAlreadyExist = _useContext.displayErrorAlreadyExist;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_17__["default"])(),
    track = _useGA.track;
  var defaultFormValues = {
    email: '',
    repeated_email: '',
    raw_password: '',
    repeated_password: '',
    terms_validated: false
  };
  var paramsInitStep3 = state.paramsInitStep3;
  var displayPart2 = Object.keys(paramsInitStep3).length > 1;
  var defaultActiveKey = displayPart2 ? ['0', '1'] : ['0'];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultActiveKey),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isEfacture = _useState4[0],
    setIsEfacture = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState6 = _slicedToArray(_useState5, 2),
    errorMessage = _useState6[0],
    setErrorMessage = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState8 = _slicedToArray(_useState7, 2),
    eFactureContact = _useState8[0],
    setEfactureContact = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isErrorApi = _useState10[0],
    setIsErrorApi = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_objectSpread(_objectSpread({}, defaultFormValues), paramsInitStep3)),
    _useState12 = _slicedToArray(_useState11, 2),
    initialValues = _useState12[0],
    setInitialValues = _useState12[1];
  var footer = window.tsme_data.footer;
  var credits_url = footer.links_bottom.credits_url;
  var mergedModel = merge(_models_infosAccount__WEBPACK_IMPORTED_MODULE_11__["myInfosModel"], _models_infosAccount__WEBPACK_IMPORTED_MODULE_11__["myIdsModel"]);
  var activeModel = activeKey.length > 1 ? mergedModel : _models_infosAccount__WEBPACK_IMPORTED_MODULE_11__["myInfosModel"];
  var setCurrentKey = function setCurrentKey(activeKeyState) {
    setActiveKey(activeKeyState);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('SIGN_UP_1', {
      sz_funnel_creation_compte_step: 3
    });
    window.scrollTo(0, 0);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isEfacture) {
      activeModel = merge(activeModel, _models_infosAccount__WEBPACK_IMPORTED_MODULE_11__["efactureModel"]);
    }
  }, [isEfacture]);
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])('GetCustomerInfos', function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_9__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_10__["REGISTER_GET_CUSTOMER_INFOS"]);
    }, {
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !displayPart2,
      onSuccess: function onSuccess(_ref) {
        var data = _ref.data;
        setInitialValues(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            cellphone: data.response.mobilePhone || '',
            phone: data.response.phone || ''
          });
        });
      },
      onError: function onError() {
        goToStep(0);
      }
    }),
    dataCustomer = _useQuery.data,
    GetCustomerInfosQuery = _objectWithoutProperties(_useQuery, _excluded);
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(function (params) {
      var contract = ['name', 'type'];
      var contact = ['phone', 'cellphone', 'email', 'repeated_email'];
      var data = {};
      for (var key in params) {
        var isContract = contract.includes(key);
        var isContact = contact.includes(key);
        var contractName = "contract[".concat(key, "]");
        var contactName = "contact[".concat(key, "]");
        var name = isContract ? contractName : isContact ? contactName : key;
        if (key === 'type') {
          data[name] = params[key].value;
        } else {
          data[name] = params[key];
        }
        if (key === 'terms_validated') {
          data[name] = params[key] ? 1 : 0;
        }
      }
      setErrorMessage(null);
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_9__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_10__["REGISTER_VALIDATE_INFORMATIONS"], data);
    }, {
      onSuccess: function onSuccess(_ref2, params) {
        var _data$content, _data$content2;
        var data = _ref2.data;
        var newInitValues = _objectSpread({}, params);
        switch (data.message) {
          case _constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].KO_EFACTURE:
            track('SIGN_UP_2', {
              sz_form_erreur_label: data.message,
              sz_form_erreur_type: 'Validation'
            });
            setIsEfacture(true);
            setInitialValues(_objectSpread(_objectSpread({}, newInitValues), {}, {
              confirm_efacture: 0
            }));
            setEfactureContact(data === null || data === void 0 ? void 0 : (_data$content = data.content) === null || _data$content === void 0 ? void 0 : _data$content.email);
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].KO_CEL:
            track('SIGN_UP_2', {
              sz_form_erreur_label: data.message,
              sz_form_erreur_type: 'Validation'
            });
            dispatch({
              type: 'contactEmail',
              payload: data === null || data === void 0 ? void 0 : (_data$content2 = data.content) === null || _data$content2 === void 0 ? void 0 : _data$content2.email
            });
            dispatch({
              type: 'paramsInitStep3',
              payload: newInitValues
            });
            displayErrorAlreadyExist();
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].OK:
            finalizeMutation.mutate();
            break;
          default:
            setErrorMessage(t('errors.techError'));
            break;
        }
      },
      onError: function onError(_ref3) {
        var response = _ref3.response;
        if (response === undefined) {
          setIsErrorApi(true);
          setErrorMessage(t('errors.techError'));
        } else {
          var _response$data;
          setErrorMessage(Object(_services_Utils__WEBPACK_IMPORTED_MODULE_13__["displayMessageByKey"])((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.code));
        }
      }
    }),
    isLoading = _useMutation.isLoading,
    ValidateInfos = _objectWithoutProperties(_useMutation, _excluded2);
  var finalizeMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(function () {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_9__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_10__["REGISTER_FINALIZE"], {
      timeout: 30000
    });
  }, {
    onSuccess: function onSuccess(_ref4) {
      var data = _ref4.data;
      track('SIGN_UP_1', {
        sz_funnel_creation_compte_step: 'complete'
      });
      var _data$response = data === null || data === void 0 ? void 0 : data.response,
        targetUrl = _data$response.targetUrl;
      if (targetUrl) {
        window.location.href = targetUrl;
      } else {
        setErrorMessage(t('signUp.error.redirectUrlNotFound'));
      }
    },
    onError: function onError(_ref5) {
      var response = _ref5.response,
        code = _ref5.code;
      if (response === undefined && code === _constants__WEBPACK_IMPORTED_MODULE_10__["CODES"].ECONNABORTED) {
        setErrorMessage(t('errors.techError'));
      } else {
        var message = response.data.message;
        var errorExist = i18next__WEBPACK_IMPORTED_MODULE_2__["default"].exists("errors.".concat(message));
        var error = t("errors.".concat(errorExist ? message : 'techError'));
        setErrorMessage(error);
      }
    }
  });
  var data = [{
    fields: {
      title: t('signUp.step3.myInfos'),
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyInfos__WEBPACK_IMPORTED_MODULE_15__["default"], {
        displayPart2: displayPart2,
        setCurrentKey: setCurrentKey
      })
    }
  }, {
    fields: {
      title: t('signUp.step3.myIds'),
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyIds__WEBPACK_IMPORTED_MODULE_16__["default"], {
        eFactureContact: eFactureContact,
        isEfacture: isEfacture
      })
    }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: initialValues,
    onSubmit: ValidateInfos.mutate,
    validationSchema: activeModel,
    validateOnChange: true,
    enableReinitialize: true
  }, function (_ref6) {
    var handleSubmit = _ref6.handleSubmit,
      isValid = _ref6.isValid,
      values = _ref6.values,
      handleChange = _ref6.handleChange,
      validateField = _ref6.validateField;
    var onClick = function onClick() {
      validateField('name');
      validateField('type');
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      "data-cy": "sign-up-form-step-3",
      onSubmit: handleSubmit,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      id: "step-title",
      tabIndex: "-1"
    }, t('aria.step3'), " ", t('signUp.step3.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
      align: "center"
    }, t('signUp.step3.title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 pt-4",
      "data-cy": "customer-infos"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
      variant: "H3",
      size: "L",
      weight: "medium",
      tag: "h2"
    }, t('signUp.step3.myAccount')), GetCustomerInfosQuery.isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
      count: 2
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
      className: "m-0"
    }, dataCustomer === null || dataCustomer === void 0 ? void 0 : dataCustomer.data.response.identity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
      className: "m-0",
      color: "primary-dark"
    }, t('signUp.step3.billingAddress'), ' ', dataCustomer === null || dataCustomer === void 0 ? void 0 : dataCustomer.data.response.billAdress, ' ', dataCustomer === null || dataCustomer === void 0 ? void 0 : dataCustomer.data.response.billTown, ' ', dataCustomer === null || dataCustomer === void 0 ? void 0 : dataCustomer.data.response.billZipCode))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_accordion__WEBPACK_IMPORTED_MODULE_8__["default"], {
      borderTop: true,
      toggle: false,
      data: data,
      activeKey: activeKey,
      setCurrentKey: setCurrentKey,
      onClick: onClick,
      isFaq: true
    })), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzAlert"], null, errorMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzCheckbox"], {
      id: "terms_validated",
      name: "terms_validated",
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_7__["Markup"], {
        content: t('consent.cgu.title', {
          cguLink: credits_url === null || credits_url === void 0 ? void 0 : credits_url.link
        })
      })),
      type: "checkbox",
      checked: values.terms_validated,
      onChange: handleChange,
      className: "cgu"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_12__["default"], {
      field: "terms_validated"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzButton"], {
      type: "submit",
      variant: "contained",
      border: "soft",
      isDisabled: !isValid || Object.keys(values).length === 0,
      loader: !isErrorApi && (isLoading || finalizeMutation.isLoading || finalizeMutation.isSuccess),
      id: "sign-up-form-step3-submit"
    }, t('signUp.step3.button_submit'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
      variant: "caption",
      size: "M",
      className: "text-dark",
      weight: "regular"
    }, t('signUp.step3.info1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_6__["SzTypographie"], {
      variant: "caption",
      size: "M",
      className: "mt-3 text-dark",
      weight: "regular"
    }, t('signUp.step3.info2'))));
  });
}

/***/ }),

/***/ "./assets/js/pages/sign-up/error/ConfirmDetachModal.jsx":
/*!**************************************************************!*\
  !*** ./assets/js/pages/sign-up/error/ConfirmDetachModal.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .. */ "./assets/js/pages/sign-up/index.jsx");








var ConfirmDetachModal = function ConfirmDetachModal(_ref) {
  var show = _ref.show,
    handleClose = _ref.handleClose,
    setIsErrorDetach = _ref.setIsErrorDetach;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_7__["SignupContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch,
    goToStep = _useContext.goToStep;
  var alreadyAttached = state.alreadyAttached,
    reference = state.reference;
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function () {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_5__["REGISTER_DETACH_CONTRACT"]);
    }, {
      onSuccess: function onSuccess() {
        dispatch({
          type: 'alreadyAttached',
          payload: false
        });
        goToStep(2);
      },
      onError: function onError() {
        setIsErrorDetach(true);
        handleClose();
      }
    }),
    isLoading = _useMutation.isLoading,
    mutate = _useMutation.mutate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzModal"], {
    show: show,
    handleClose: handleClose,
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzTypographie"], {
    color: "dark"
  }, t('signUp.error.detachContract.modal.title', {
    ref: reference,
    email: alreadyAttached.login
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-3 mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], {
    variant: "contained",
    border: "soft",
    loader: isLoading,
    onClick: mutate,
    className: "col-12 col-md-6 mt-2 mt-md-0 mb-2"
  }, t('signUp.error.detachContract.modal.confirm')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "col-12 col-md-6",
    variant: "text",
    icon: "logout-2",
    border: "soft",
    alignIcon: "left",
    to: _constants__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].SIGN_UP
  }, t('signUp.error.detachContract.modal.cancel')))));
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmDetachModal);

/***/ }),

/***/ "./assets/js/pages/sign-up/error/ErrorAlreadyAttached.jsx":
/*!****************************************************************!*\
  !*** ./assets/js/pages/sign-up/error/ErrorAlreadyAttached.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorSignUpAlreadyAttached; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./assets/js/pages/sign-up/index.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _ConfirmDetachModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConfirmDetachModal */ "./assets/js/pages/sign-up/error/ConfirmDetachModal.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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









function ErrorSignUpAlreadyAttached() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_5__["SignupContext"]),
    dispatch = _useContext.dispatch,
    goToStep = _useContext.goToStep,
    state = _useContext.state;
  var alreadyAttached = state.alreadyAttached,
    reference = state.reference;
  var login = alreadyAttached.login,
    identity = alreadyAttached.identity,
    adressSite = alreadyAttached.adressSite;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isErrorDetach = _useState4[0],
    setIsErrorDetach = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
      isLoadingSignIn: false,
      isLoadingRecoverPassword: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    loadersButton = _useState6[0],
    setLoadersButton = _useState6[1];
  var routeLogin = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["generatePath"])(_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN);
  var blockActionsClassName = 'border-top sz-border-1 pt-4 mt-4';
  var handleRecoverPassword = function handleRecoverPassword() {
    setLoadersButton(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        isLoadingRecoverPassword: true
      });
    });
  };
  var handleSignIn = function handleSignIn() {
    setLoadersButton(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        isLoadingSignIn: true
      });
    });
  };
  var handleModifyReference = function handleModifyReference() {
    dispatch({
      type: 'alreadyAttached',
      payload: null
    });
    goToStep(0);
  };
  var openModalDetach = function openModalDetach() {
    setShowModal(true);
  };
  var handleClose = function handleClose() {
    setShowModal(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-3 py-4 p-md-5 bg-white rounded-3",
    "data-cy": "error-already-attached"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "text-center mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: 'signUp.error.contractAlreadyAttachedToAccount',
    values: {
      reference: reference,
      account: login
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "text",
    className: "text-dark text-center"
  }, t('signUp.error.chooseFromOptionsBelow', {
    count: 3
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 mt-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "normal",
    className: "mb-2"
  }, t('signUp.error.myInformations.title')), reference && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "text",
    className: "text-dark m-0"
  }, t('signUp.error.myInformations.contract', {
    reference: reference
  })), identity && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "text",
    className: "text-dark m-0"
  }, identity), adressSite && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "text",
    className: "text-dark m-0"
  }, t('signUp.error.myInformations.address', {
    adressSite: adressSite
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: blockActionsClassName,
    "data-cy": "err-already-att-detach-contract-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H5",
    weight: "bold",
    size: "L",
    className: "mb-2 text-uppercase"
  }, t('signUp.error.detachContract.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    weight: "light"
  }, t('signUp.error.detachContract.content')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    to: routeLogin,
    variant: "contained",
    border: "soft",
    onClick: handleSignIn,
    loader: loadersButton.isLoadingSignIn
  }, t('signUp.error.detachContract.button'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: blockActionsClassName,
    "data-cy": "err-already-att-recover-credentials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H5",
    weight: "bold",
    size: "L",
    className: "mb-2 text-uppercase"
  }, t('signUp.error.recoverCredentials.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    weight: "light"
  }, t('signUp.error.recoverCredentials.content')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    to: _constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].LOGIN_LOST_ID,
    variant: "contained",
    border: "soft",
    onClick: handleRecoverPassword,
    loader: loadersButton.isLoadingRecoverPassword
  }, t('signUp.error.recoverCredentials.button'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: blockActionsClassName,
    "data-cy": "err-already-att-detach-contract"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H5",
    weight: "bold",
    size: "L",
    className: "mb-2 text-uppercase"
  }, t('signUp.error.detachContract.detachTitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    size: "L",
    weight: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: t('signUp.error.detachContract.detachSubTitle', {
      ref: reference,
      contractName: reference,
      user: alreadyAttached.login
    })
  })), isErrorDetach && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzAlert"], {
    className: "col-12 mt-3",
    variant: "danger"
  }, t('errors.techError')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: openModalDetach
  }, t('signUp.error.detachContract.detachBtn'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfirmDetachModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: showModal,
    handleClose: handleClose,
    setIsErrorDetach: setIsErrorDetach
  })));
}

/***/ }),

/***/ "./assets/js/pages/sign-up/error/ErrorAlreadyExist.jsx":
/*!*************************************************************!*\
  !*** ./assets/js/pages/sign-up/error/ErrorAlreadyExist.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorSignUpAlreadyExist; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./assets/js/pages/sign-up/index.jsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");






function ErrorSignUpAlreadyExist() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_4__["SignupContext"]),
    dispatch = _useContext.dispatch,
    goToStep = _useContext.goToStep,
    state = _useContext.state;
  var contactEmail = state.contactEmail;
  var handleCancelCreateNewAccount = function handleCancelCreateNewAccount() {
    dispatch({
      type: 'alreadyExist',
      payload: false
    });
    goToStep(2);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H1",
    size: "XL",
    weight: "bold",
    color: "light",
    className: "mb-4 text-center text-uppercase"
  }, t('signUp.error.accountAlreadyExist')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-3 py-4 p-md-5 bg-white rounded-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "text-center mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: "signUp.error.emailAlreadyExist",
    values: {
      contactEmail: contactEmail
    },
    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      weight: "bold",
      className: "text-break"
    })]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "text",
    className: "text-dark text-center"
  }, t('signUp.error.chooseFromOptionsBelow', {
    count: 3
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 mt-lg-5",
    "data-cy": "err-already-exist-add-contract"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H5",
    weight: "bold",
    size: "L",
    className: "mb-2 text-uppercase"
  }, t('signUp.error.addContract')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "text",
    className: "text-dark mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: "signUp.error.addContractToAccount",
    values: {
      contactEmail: contactEmail
    },
    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null)]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    border: "soft",
    to: _constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].ADD_CONTRACT
  }, t('signUp.error.logInAddContract'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-top pt-4 mt-4",
    "data-cy": "err-already-exist-recover-credentials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H5",
    weight: "bold",
    size: "L",
    className: "mb-2 text-uppercase"
  }, t('signUp.error.recoverCredentials.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "text",
    className: "text-dark mb-3"
  }, t('signUp.error.recoverCredentials.content')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    to: _constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].LOGIN_LOST_ID,
    variant: "contained",
    border: "soft"
  }, t('signUp.error.recoverCredentials.button'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-top pt-4 mt-4",
    "data-cy": "err-already-exist-new-account"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H5",
    weight: "bold",
    size: "L",
    className: "mb-2 text-uppercase"
  }, t('signUp.error.createNewAccount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "text",
    className: "text-dark mb-3"
  }, t('signUp.error.openNewAccountWithEmail')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    variant: "contained",
    border: "soft",
    onClick: handleCancelCreateNewAccount
  }, t('signUp.error.cancelCreateNewAccount')))));
}

/***/ }),

/***/ "./assets/js/pages/sign-up/index.jsx":
/*!*******************************************!*\
  !*** ./assets/js/pages/sign-up/index.jsx ***!
  \*******************************************/
/*! exports provided: SignupContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupContext", function() { return SignupContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ez_components_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ez-components/stepper */ "./assets/js/ez-components/stepper.jsx");
/* harmony import */ var _AccountInfos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccountInfos */ "./assets/js/pages/sign-up/AccountInfos.jsx");
/* harmony import */ var _Step1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step1 */ "./assets/js/pages/sign-up/Step1.jsx");
/* harmony import */ var _Step2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Step2 */ "./assets/js/pages/sign-up/Step2/index.jsx");
/* harmony import */ var _Step3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Step3 */ "./assets/js/pages/sign-up/Step3/index.jsx");
/* harmony import */ var _js_components_Bubble__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../js/components/Bubble */ "./assets/js/components/Bubble/index.jsx");
/* harmony import */ var _error_ErrorAlreadyAttached__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/ErrorAlreadyAttached */ "./assets/js/pages/sign-up/error/ErrorAlreadyAttached.jsx");
/* harmony import */ var _error_ErrorAlreadyExist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/ErrorAlreadyExist */ "./assets/js/pages/sign-up/error/ErrorAlreadyExist.jsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _sign_up_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sign-up.scss */ "./assets/js/pages/sign-up/sign-up.scss");
/* harmony import */ var _sign_up_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sign_up_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
















var initialState = {
  activeStep: 0,
  coordinates: null,
  isStep2IdBill: false,
  alreadyAttached: false,
  alreadyExist: false,
  isEfacture: false,
  contactEmail: null,
  nextStep: function nextStep() {},
  prevStep: function prevStep() {},
  paramsInitStep3: {}
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'activeStep':
      return _objectSpread(_objectSpread({}, state), {}, {
        activeStep: action.payload
      });
    case 'activeType':
      return _objectSpread(_objectSpread({}, state), {}, {
        activeType: action.payload
      });
    case 'contactEmail':
      return _objectSpread(_objectSpread({}, state), {}, {
        contactEmail: action.payload
      });
    case 'reference':
      return _objectSpread(_objectSpread({}, state), {}, {
        reference: action.payload
      });
    case 'alreadyAttached':
      return _objectSpread(_objectSpread({}, state), {}, {
        alreadyAttached: action.payload
      });
    case 'alreadyExist':
      return _objectSpread(_objectSpread({}, state), {}, {
        alreadyExist: action.payload
      });
    case 'isEfacture':
      return _objectSpread(_objectSpread({}, state), {}, {
        isEfacture: action.payload
      });
    case 'paramsInitStep3':
      return _objectSpread(_objectSpread({}, state), {}, {
        paramsInitStep3: action.payload
      });
    case 'coordinates':
      return _objectSpread(_objectSpread({}, state), {}, {
        coordinates: action.payload
      });
    case 'isStep2IdBill':
      return _objectSpread(_objectSpread({}, state), {}, {
        isStep2IdBill: action.payload
      });
    default:
      throw new Error('Not a reducer');
  }
};
var SignupContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialState);
function Signup() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var SignupReducerMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      state: state,
      dispatch: dispatch
    };
  }, [state, dispatch]);
  var activeStep = state.activeStep,
    alreadyAttached = state.alreadyAttached,
    alreadyExist = state.alreadyExist;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (alreadyAttached || alreadyExist) {
      window.scrollTo(0, 0);
    }
  }, [alreadyAttached, alreadyExist]);
  var stepTitle = 'step-title';
  var nextStep = function nextStep() {
    var newActiveStep = activeStep + 1;
    dispatch({
      type: 'activeStep',
      payload: newActiveStep
    });
    Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["setFocusOn"])(stepTitle);
  };
  var prevStep = function prevStep() {
    var newActiveStep = activeStep + 1;
    dispatch({
      type: 'activeStep',
      payload: newActiveStep
    });
    Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["setFocusOn"])(stepTitle);
  };
  var goToStep = function goToStep(step) {
    dispatch({
      type: 'activeStep',
      payload: step
    });
    Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["setFocusOn"])(stepTitle);
  };
  var displayErrorAlreadyExist = function displayErrorAlreadyExist() {
    dispatch({
      type: 'alreadyExist',
      payload: true
    });
  };
  var displayErrorAttached = function displayErrorAttached() {
    dispatch({
      type: 'alreadyAttached',
      payload: true
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignupContext.Provider, {
    value: _objectSpread(_objectSpread({}, SignupReducerMemo), {}, {
      nextStep: nextStep,
      prevStep: prevStep,
      goToStep: goToStep,
      displayErrorAlreadyExist: displayErrorAlreadyExist,
      displayErrorAttached: displayErrorAttached
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "signup container-fluid p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container px-md-0 pt-5 pb-large pb-lg-5 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignUpBackground, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignUpBody, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountInfos__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}
var SignUpBody = function SignUpBody() {
  var _history$location$sta;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SignupContext),
    state = _useContext.state;
  var activeStep = state.activeStep,
    alreadyAttached = state.alreadyAttached,
    alreadyExist = state.alreadyExist;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["useHistory"])();
  var steps = [1, 2, 3];
  var stepsContent = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step1__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step2__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step3__WEBPACK_IMPORTED_MODULE_7__["default"], null)];
  var isFromLoginReset = ((_history$location$sta = history.location.state) === null || _history$location$sta === void 0 ? void 0 : _history$location$sta.from) === _app_constants__WEBPACK_IMPORTED_MODULE_15__["LOGIN_RESET"];
  if (alreadyExist) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-slim m-auto position-relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_error_ErrorAlreadyExist__WEBPACK_IMPORTED_MODULE_10__["default"], null));
  }
  if (alreadyAttached) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      variant: "H1",
      size: "XL",
      weight: "bold",
      color: "light",
      className: "mb-4 text-center text-uppercase"
    }, t('signUp.error.contractAlreadyAttached')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-slim m-auto position-relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_error_ErrorAlreadyAttached__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H1",
    size: "L",
    color: "white",
    className: "text-center text-uppercase"
  }, t('signUp.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stepper-container bg-white mx-auto mt-3 px-sm-5 py-4 pb-sm-5 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_stepper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeStep: isFromLoginReset ? 2 : activeStep,
    steps: steps,
    stepsContent: stepsContent,
    stepClassName: "disabled-pointer"
  })));
};
var SignUpBackground = function SignUpBackground() {
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_11__["useIsMobile"])();
  var logo_background = window.tsme_data.header.logo_background;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_js_components_Bubble__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "green",
    size: "sm",
    position: "1",
    className: "d-none d-lg-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_js_components_Bubble__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "dark",
    size: isMobile ? 'sm' : 'md',
    position: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_js_components_Bubble__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "light",
    size: isMobile ? 'sm' : 'lg',
    position: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-img-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-img-2 d-none d-lg-block"
  }), logo_background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s-suez",
    style: {
      backgroundImage: "url(".concat(logo_background, ")")
    }
  }));
};

/***/ }),

/***/ "./assets/js/pages/sign-up/models/idBill.js":
/*!**************************************************!*\
  !*** ./assets/js/pages/sign-up/models/idBill.js ***!
  \**************************************************/
/*! exports provided: idBillSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idBillSchema", function() { return idBillSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../validation/yup */ "./assets/js/validation/yup.js");


var idBillSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  identifiant: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().max(4, "L'identifiant n'est pas valide.").required("L'identifiant doit être rempli."),
  cp: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Le code postal doit être rempli.').max(7, "Le code postal n'est pas valide.")
});

/***/ }),

/***/ "./assets/js/pages/sign-up/models/infosAccount.js":
/*!********************************************************!*\
  !*** ./assets/js/pages/sign-up/models/infosAccount.js ***!
  \********************************************************/
/*! exports provided: myInfosModel, myIdsModel, efactureModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myInfosModel", function() { return myInfosModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myIdsModel", function() { return myIdsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "efactureModel", function() { return efactureModel; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./assets/js/models/index.ts");



var myInfosModel = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().max(30, 'Le nom de contrat est trop long').required('Ce champ est obligatoire.'),
  type: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().required('Ce champ est obligatoire.'),
  phone: _models__WEBPACK_IMPORTED_MODULE_2__["phone"],
  cellphone: _models__WEBPACK_IMPORTED_MODULE_2__["mobilePhone"]
});
var myIdsModel = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  email: _models__WEBPACK_IMPORTED_MODULE_2__["email"],
  repeated_email: Object(_models__WEBPACK_IMPORTED_MODULE_2__["repeated_email"])(),
  raw_password: _models__WEBPACK_IMPORTED_MODULE_2__["password"],
  repeated_password: Object(_models__WEBPACK_IMPORTED_MODULE_2__["repeated_password"])('raw_password'),
  terms_validated: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().required('Les conditions générales doivent être acceptées.').oneOf([true], 'Les conditions générales doivent être acceptées.')
});
var efactureModel = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  confirm_efacture: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().required()
});

/***/ }),

/***/ "./assets/js/pages/sign-up/sign-up.scss":
/*!**********************************************!*\
  !*** ./assets/js/pages/sign-up/sign-up.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);