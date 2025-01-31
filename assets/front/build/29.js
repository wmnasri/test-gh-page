(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./assets/js/components/Upload.jsx":
/*!*****************************************!*\
  !*** ./assets/js/components/Upload.jsx ***!
  \*****************************************/
/*! exports provided: UploadContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadContext", function() { return UploadContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Upload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _hooks_useConvertCompress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useConvertCompress */ "./assets/js/hooks/useConvertCompress.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var UploadContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  files: []
});
var defaultAccept = '.heic, .heif, image/jpeg, image/png, image/jpg, application/pdf';
function Upload(_ref) {
  var _onDrop = _ref.onDrop,
    onFileReject = _ref.onFileReject,
    _ref$accept = _ref.accept,
    accept = _ref$accept === void 0 ? defaultAccept : _ref$accept;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
    _useState2 = _slicedToArray(_useState, 2),
    setFiles = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState4 = _slicedToArray(_useState3, 2),
    displayedFile = _useState4[0],
    setDisplayedFile = _useState4[1];
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__["useIsMobile"])();
  var dropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    accept: accept,
    maxSize: _app_constants__WEBPACK_IMPORTED_MODULE_6__["MAX_UPLOAD_FILE_SIZE"],
    maxFiles: 1,
    onDrop: function () {
      var _onDrop2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(acceptedFiles, fileRejections) {
        var newFiles, fileTemp, _yield$useConvertComp, objectURL, _objectURL;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (fileRejections.length > 0 && onFileReject instanceof Function) {
                onFileReject(fileRejections);
              }
              newFiles = [];
              fileTemp = acceptedFiles[0];
              if (!(fileTemp.type !== 'application/pdf')) {
                _context.next = 11;
                break;
              }
              _context.next = 6;
              return Object(_hooks_useConvertCompress__WEBPACK_IMPORTED_MODULE_3__["useConvertCompress"])(fileTemp);
            case 6:
              _yield$useConvertComp = _context.sent;
              objectURL = _yield$useConvertComp.objectURL;
              newFiles.push(Object.assign(fileTemp, {
                preview: objectURL
              }));
              _context.next = 13;
              break;
            case 11:
              _objectURL = URL.createObjectURL(fileTemp);
              newFiles.push(Object.assign(fileTemp, {
                preview: _objectURL
              }));
            case 13:
              setFiles(newFiles);
              if (_onDrop instanceof Function) {
                _onDrop(acceptedFiles);
              }
              setDisplayedFile(null);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function onDrop(_x2, _x3) {
        return _onDrop2.apply(this, arguments);
      }
      return onDrop;
    }()
  });
  var getInputProps = dropzone.getInputProps,
    open = dropzone.open,
    fileRejections = dropzone.fileRejections,
    acceptedFiles = dropzone.acceptedFiles;
  var handleClose = function handleClose() {
    URL.revokeObjectURL(displayedFile);
    setDisplayedFile(null);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UploadContext.Provider, {
    value: _objectSpread({}, dropzone)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzInput"], _extends({
    name: "upload"
  }, getInputProps(), {
    className: "transparent m-0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-3 p-md-4",
    style: {
      background: 'var(--gray-100)'
    }
  }, acceptedFiles.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "outlined",
    className: "cy-upload-attestation mx-auto m-md-0 mb-2",
    icon: 'camera-1',
    onClick: open
  }, t('upload.add_counter_photo', {
    context: isMobile && 'mobile'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "ml-4",
    variant: "caption",
    color: fileRejections.length > 0 ? 'danger' : 'disabled',
    weight: "regular"
  }, t('upload.authorized_type'))) : acceptedFiles.map(function (file) {
    var previewFile = function previewFile() {
      var objectURL = URL.createObjectURL(file);
      setDisplayedFile(objectURL);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: file.lastModified,
      className: "row no-gutters align-items-center justify-content-center justify-content-md-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "outlined",
      onClick: previewFile,
      className: "mb-3 mb-md-0",
      icon: "view-1"
    }, t('upload.display_photo')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "d-none d-md-block mr-auto ml-3 mb-0",
      weight: "bold"
    }, file.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
      variant: "text",
      icon: "pencil-write",
      onClick: open,
      alignIcon: "right"
    }, t('upload.update_photo')));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzModal"], {
    show: displayedFile !== null,
    handleClose: handleClose
  }, displayedFile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: displayedFile,
    width: "100%",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    className: "mt-3",
    variant: "text",
    icon: "pencil-write",
    onClick: open
  }, t('upload.update_photo')))));
}

/***/ }),

/***/ "./assets/js/components/serviceClient/CapAdress.jsx":
/*!**********************************************************!*\
  !*** ./assets/js/components/serviceClient/CapAdress.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Capaddress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tsme_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tsme-react-components */ "./assets/js/components/tsme-react-components/index.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var tsme_data = window.tsme_data;
var apiUrlCapadresse = tsme_data.apiUrlCapadresse;
function Capaddress(_ref) {
  var className = _ref.className,
    onClick = _ref.onClick,
    type = _ref.type,
    inputOutput = _ref.inputOutput,
    _ref$address = _ref.address,
    address = _ref$address === void 0 ? {} : _ref$address,
    isLoader = _ref.isLoader;
  var addressesList = Object(_components_tsme_react_components__WEBPACK_IMPORTED_MODULE_1__["useCapaddress"])(apiUrlCapadresse, type, inputOutput, address);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    loader = _useState2[0],
    setLoader = _useState2[1];
  var refsLoader = {};
  var onCurrentClick = function onCurrentClick(item, type, key) {
    refsLoader["refLoader".concat(key)] = true;
    setLoader(refsLoader);
    onClick(item, type);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('capaddress position-absolute list-group overflow-auto', className),
    style: {
      maxHeight: 250,
      zIndex: 100
    }
  }, addressesList.map(function (item, index) {
    var inputOutput = item.inputOutput;
    var inputOutputFormat = inputOutput === null || inputOutput === void 0 ? void 0 : inputOutput.substring(0, inputOutput === null || inputOutput === void 0 ? void 0 : inputOutput.indexOf('\t'));
    refsLoader["refLoader".concat(index)] = false;
    return inputOutput ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: index,
      type: "button",
      className: "capaddress-item list-group-item list-group-item-action",
      onClick: function onClick(e) {
        return onCurrentClick(item, type, index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "col-11 mt-2"
    }, inputOutputFormat || inputOutput), isLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzSpinner"], {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('spinner-border float-right', !loader["refLoader".concat(index)] && 'd-none'),
      variant: 'dark'
    }))) : null;
  }));
}

/***/ }),

/***/ "./assets/js/models/index.ts":
/*!***********************************!*\
  !*** ./assets/js/models/index.ts ***!
  \***********************************/
/*! exports provided: fixFMatch, mobileMatch, phoneMatch, mobileOrPhoneAllowSpaces, urlMatch, mailMatch, nameRegex, ownerNameRegex, ownerSurnameRegex, frenchZipCodeRegex, mobilePhone, phone, email, repeated_email, password, checkBoxValidation, repeated_password, frenchZipCodeSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixFMatch", function() { return fixFMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMatch", function() { return mobileMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneMatch", function() { return phoneMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileOrPhoneAllowSpaces", function() { return mobileOrPhoneAllowSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlMatch", function() { return urlMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mailMatch", function() { return mailMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameRegex", function() { return nameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ownerNameRegex", function() { return ownerNameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ownerSurnameRegex", function() { return ownerSurnameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchZipCodeRegex", function() { return frenchZipCodeRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobilePhone", function() { return mobilePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phone", function() { return phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeated_email", function() { return repeated_email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBoxValidation", function() { return checkBoxValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeated_password", function() { return repeated_password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchZipCodeSchema", function() { return frenchZipCodeSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_components_tsme_react_components_models_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/tsme-react-components/models/validators */ "./assets/js/components/tsme-react-components/models/validators.tsx");



var fixFMatch = /^(0)\s*([1-5]|9)\s*([0-9]\s*){8}$/;
var mobileMatch = /^(0)\s*(6|7)\s*([0-9]\s*){8}$/;
var phoneMatch = /^0[0-9]{9}$/;
var mobileOrPhoneAllowSpaces = /^0[\s.]*([0-9][\s.]*){9}$/;
var urlMatch = /(http:\/|https:\/)?(\/[^\s"'<>]+)+\/?/;
var mailMatch = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var nameRegex = new RegExp(/^[A-Za-z\s]{0,24}$/);
var ownerNameRegex = new RegExp(/^[0-9A-Za-z\s]{0,50}$/);
var ownerSurnameRegex = new RegExp(/^[0-9A-Za-z\s]{0,49}$/);
var frenchZipCodeRegex = new RegExp(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/);
var mobilePhone = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(mobileMatch, 'errors.mobilePhone.invalid');
var phone = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(fixFMatch, 'errors.phone.invalid');
var email = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email('errors.email.invalid').required('mandatory_field');
var repeated_email = function repeated_email() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'email';
  return yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(1, 'errors.email.invalid').oneOf([yup__WEBPACK_IMPORTED_MODULE_0__["ref"](ref)], 'errors.email.mismatch').required('mandatory_field');
};
var password = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().isPassword('errors.password.invalid');
var checkBoxValidation = function checkBoxValidation(error) {
  return yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().oneOf([true], error);
};
var repeated_password = function repeated_password(ref) {
  return yup__WEBPACK_IMPORTED_MODULE_0__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_0__["ref"](ref)], 'errors.password.mismatch').required('errors.password.required');
};
var frenchZipCodeSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  zipCode: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(frenchZipCodeRegex, 'loginReset.form.errors.invalidZipcode').required('mandatory_field')
});

/***/ }),

/***/ "./assets/js/pages/move-out/Stepper/ResiliationDate/ResiliationDate.scss":
/*!*******************************************************************************!*\
  !*** ./assets/js/pages/move-out/Stepper/ResiliationDate/ResiliationDate.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ })

}]);