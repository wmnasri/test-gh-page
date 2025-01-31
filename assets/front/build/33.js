(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./assets/js/components/photoMeter/IndexEntry.jsx":
/*!********************************************************!*\
  !*** ./assets/js/components/photoMeter/IndexEntry.jsx ***!
  \********************************************************/
/*! exports provided: bai, hau, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bai", function() { return bai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hau", function() { return hau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _app_validation_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _img_move_in_releve_index_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @img/move-in/releve_index.png */ "./assets/img/move-in/releve_index.png");
/* harmony import */ var _app_services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/photoMeter/Meter */ "./assets/js/services/photoMeter/Meter.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ErrorPc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ErrorPc */ "./assets/js/components/photoMeter/ErrorPc.jsx");
/* harmony import */ var _IndexEntryModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./IndexEntryModal */ "./assets/js/components/photoMeter/IndexEntryModal.jsx");
/* harmony import */ var _LandingPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LandingPage */ "./assets/js/components/photoMeter/LandingPage.jsx");
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Stepper */ "./assets/js/components/photoMeter/Stepper.jsx");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./photoCompteur.scss */ "./assets/js/components/photoMeter/photoCompteur.scss");
/* harmony import */ var _photoCompteur_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_photoCompteur_scss__WEBPACK_IMPORTED_MODULE_18__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["data"],
  _excluded2 = ["data"],
  _excluded3 = ["isLoading", "data"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var bai = 'BAI';
var hau = 'HAU';
function IndexEntry() {
  var isDesktop = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_10__["useIsDesktop"])();
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_10__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
    reference = _useParams.reference;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    errorMessage = _useState2[0],
    setErrorMessage = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState4 = _slicedToArray(_useState3, 2),
    outOfBoundsWayForModal = _useState4[0],
    setoutOfBoundsWayForModal = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isShow = _useState6[0],
    setIsShow = _useState6[1];
  var errorLength = t('photoMeter.indexEntry.errorLength');
  var errorRequired = t('photoMeter.indexEntry.errorRequired');
  var ERROR_INDEX_INF = 'newidx_inf_lastidx';
  var ERROR_OUT_BOUNDS_MIN = 'out_of_bounds_min';
  var ERROR_OUT_BOUNDS_MAX = 'out_of_bounds_max';
  var ERROR_SESSION_EXPIRED = 'session_expired';
  var INDEX_LENGTH = 5;
  var SignupSchema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]({
    input0: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().length(1, errorLength).required(errorRequired),
    input1: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().length(1, errorLength).required(errorRequired),
    input2: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().length(1, errorLength).required(errorRequired),
    input3: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().length(1, errorLength).required(errorRequired),
    input4: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().length(1, errorLength).required(errorRequired)
  });
  var inputs = {
    input0: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),
    input1: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),
    input2: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),
    input3: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),
    input4: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null)
  };
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('getDataSession', _app_services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_12__["default"].getDataSession, {
      onSuccess: function onSuccess(data) {
        getConsoMutation.mutate(data);
      }
    }),
    dataSession = _useQuery.data;
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (params) {
      return _app_services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_12__["default"].getConsommation(params.numeroCompteur);
    }, {
      onSuccess: function onSuccess(response, params) {
        if (response.isError) {
          setErrorMessage(response.errorMessage);
        } else {
          deposeInfoMutation.mutate(params);
        }
      },
      onError: function onError() {
        setErrorMessage(t('photoMeter.indexEntry.technicalError'));
      }
    }),
    _useMutation$data = _useMutation.data,
    dataConso = _useMutation$data === void 0 ? {} : _useMutation$data,
    getConsoMutation = _objectWithoutProperties(_useMutation, _excluded);
  var _useMutation2 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (params) {
      return _app_services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_12__["default"].getDeposeInfo(params.numeroCompteur, params.rangCompteur);
    }, {
      onSuccess: function onSuccess(data) {
        if (data.isError) {
          setErrorMessage(data.errorMessage);
        }
      },
      onError: function onError() {
        setErrorMessage(t('photoMeter.indexEntry.technicalError'));
      }
    }),
    _useMutation2$data = _useMutation2.data,
    dataDeposeInfo = _useMutation2$data === void 0 ? {} : _useMutation2$data,
    deposeInfoMutation = _objectWithoutProperties(_useMutation2, _excluded2);
  var _useMutation3 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (params) {
      return _app_services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_12__["default"].checkIndexEntry(params);
    }, {
      onSuccess: function onSuccess(data, _ref) {
        var indexSaisi = _ref.indexSaisi;
        if (data.isError) {
          var isMinOutOfBounds = data.errorMessage === ERROR_OUT_BOUNDS_MIN;
          var isMaxOutOfBounds = data.errorMessage === ERROR_OUT_BOUNDS_MAX;
          if (isMinOutOfBounds || isMaxOutOfBounds) {
            var outOfBoundsWay = isMinOutOfBounds ? bai : hau;
            var paramsHorsBorne = {
              horsBorne: true,
              motifIndex: outOfBoundsWay
            };
            _app_services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_12__["default"].updateSession(paramsHorsBorne);
            setoutOfBoundsWayForModal(outOfBoundsWay);
            setIsShow(true);
          } else if (ERROR_SESSION_EXPIRED === data.errorMessage) {
            setErrorMessage(t('errors.techErrorContactCustomerService'));
          } else if (ERROR_INDEX_INF !== data.errorMessage) {
            setErrorMessage(data.errorMessage);
          }
        } else {
          var params = {
            index: String(indexSaisi)
          };
          _app_services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_12__["default"].updateSession(params).then(function () {
            history.push(_app_constants__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].PHOTO_COUNTER_PHOTO.replace(':reference', reference));
          });
        }
      }
    }),
    isLoading = _useMutation3.isLoading,
    _useMutation3$data = _useMutation3.data,
    dataIndexEntry = _useMutation3$data === void 0 ? {} : _useMutation3$data,
    checkIndexEntryMutation = _objectWithoutProperties(_useMutation3, _excluded3);
  var onSubmit = function onSubmit(values) {
    var indexSaisi = Object.values(values).join('');
    var borneMin = dataDeposeInfo.borneMin,
      borneMax = dataDeposeInfo.borneMax;
    var qualiteIndex = dataConso.qualiteIndex,
      indexCompteur = dataConso.indexCompteur;
    var params = {
      indexSaisi: indexSaisi,
      lastIndexQuality: qualiteIndex,
      lastIndex: indexCompteur,
      borneMin: borneMin,
      borneMax: borneMax
    };
    checkIndexEntryMutation.mutate(params);
  };
  var handleClose = function handleClose() {
    setIsShow(false);
  };
  if (dataConso.isError || dataDeposeInfo.isError || errorMessage) {
    var _ref2, _dataConso$errorMessa;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorPc__WEBPACK_IMPORTED_MODULE_14__["default"], {
      message: (_ref2 = (_dataConso$errorMessa = dataConso.errorMessage) !== null && _dataConso$errorMessa !== void 0 ? _dataConso$errorMessa : dataDeposeInfo.errorMessage) !== null && _ref2 !== void 0 ? _ref2 : errorMessage,
      indiceError: 0
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container step-depose-index px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center mt-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Stepper__WEBPACK_IMPORTED_MODULE_17__["default"], {
    indice: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: {
      input0: '',
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    },
    validationSchema: SignupSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: onSubmit
  }, function (_ref3) {
    var values = _ref3.values,
      errors = _ref3.errors,
      handleChange = _ref3.handleChange,
      handleSubmit = _ref3.handleSubmit,
      setErrors = _ref3.setErrors,
      resetForm = _ref3.resetForm;
    var indexSaisi = Object.values(values).join('');
    var errorMessage = dataIndexEntry.errorMessage;
    var isErrorIndexInf = errorMessage === ERROR_INDEX_INF;
    var hasError = Object.keys(errors).length > 0;
    var error = hasError || isErrorIndexInf;
    var result = SignupSchema.isValidSync(values);
    var isDisabledBtn = !result;
    var showReset = result;
    var onChange = function onChange(e) {
      e.preventDefault();
      e.stopPropagation();
      var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;
      var reg = /^\d?$/;
      var NextIndex = Object.keys(inputs).indexOf(name) + 1;
      var inputLength = Object.keys(inputs).length;
      var nextRefIndex = 'input' + NextIndex;
      if (errors[name]) {
        var newErrors = _objectSpread({}, errors);
        delete newErrors[name];
        setErrors(newErrors);
      }
      if (reg.test(value) || values[name].toString().length > value.toString().length) {
        handleChange(e);
        if (NextIndex < inputLength && value.length > 0) {
          inputs[nextRefIndex].current.focus();
        }
      }
    };
    var handleReset = function handleReset() {
      resetForm({
        errors: {}
      });
      checkIndexEntryMutation.reset();
      inputs['input0'].current.focus();
    };
    var isLoadingNextBtn = getConsoMutation.isLoading || deposeInfoMutation.isLoading;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzBox"], {
      className: "rounded-2 bg-white shadow-sm mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-10 m-auto ".concat(isDesktop ? 'py-4' : 'py-3')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzTypographie"], {
      weight: isDesktop ? 'medium' : 'regular'
    }, t('photoMeter.indexEntry.blackDigits')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])("row no-gutters pt-md-4 pb-md-3", {
        'bg-light-grey': isDesktop
      })
    }, isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzTypographie"], {
      weight: "bold",
      className: "d-md-none"
    }, t('photoMeter.indexEntry.meterNum', {
      num: dataSession.matriculeCompteur
    }))), isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-4 px-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzData"], {
      icon: "gauge-dashboard-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzData"].Text, null, t('photoMeter.indexEntry.numMeter')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzData"].Title, null, dataSession.matriculeCompteur))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-8 px-md-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, Object.keys(inputs).map(function (name) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzInput"], {
        key: name,
        ref: inputs[name],
        name: name,
        value: values[name],
        onChange: onChange,
        placeholder: "-",
        className: "p-0 border-blue-4 rounded number-box mr-2 text-center",
        pattern: "^\\d?$",
        maxLength: 1,
        error: error
      });
    }), Array.from({
      length: 3
    }).map(function (_, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzInput"], {
        key: key,
        className: "p-0 rounded fixed-box mr-2 text-center",
        value: "X",
        disabled: true
      });
    }), isDesktop && showReset && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzButton"], {
      variant: "text",
      id: "form-reset",
      icon: "diagram-round",
      onClick: handleReset
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzAlert"], {
      variant: "danger",
      className: "m-0 mt-4 rounded-1"
    }, hasError && errorRequired, isErrorIndexInf && t('photoMeter.indexEntry.errorInf')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "lastReading",
      className: "col-12 px-0 px-md-4 mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzTypographie"], {
      weight: "medium",
      className: "d-flex align-items-center ".concat(isMobile ? 'color-gray-01' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzIcon"], {
      variant: "line",
      icon: "messages-bubble-question",
      className: "d-none d-md-block mr-2 grey-01"
    }), dataConso.dateIndex && t('photoMeter.indexEntry.lastReading', {
      date: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(dataConso.dateIndex.date), _app_constants__WEBPACK_IMPORTED_MODULE_9__["FRENCH_FORMAT_DATE"])
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      className: "ml-1"
    }, (dataConso === null || dataConso === void 0 ? void 0 : dataConso.indexCompteur) && dataConso.indexCompteur.toString().padStart(INDEX_LENGTH, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 d-flex justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzHelper"], {
      className: "mt-4",
      title: t('photoMeter.landingPage.help.title'),
      type: "btn",
      label: t('photoMeter.indexEntry.helper')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingPage__WEBPACK_IMPORTED_MODULE_16__["HelpBody"], {
      imageReleveIndex: _img_move_in_releve_index_png__WEBPACK_IMPORTED_MODULE_11__["default"]
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-3 text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_13__["SzButton"], {
      variant: "contained",
      border: "soft",
      type: "submit",
      loader: isLoading || isLoadingNextBtn,
      isDisabled: hasError || isDisabledBtn
    }, t('photoMeter.indexEntry.continue'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexEntryModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
      isShow: isShow,
      reference: reference,
      indexSaisi: indexSaisi,
      outOfBoundsWayForModal: outOfBoundsWayForModal,
      handleClose: handleClose
    }));
  }));
}

/***/ }),

/***/ "./assets/js/components/photoMeter/IndexEntryModal.jsx":
/*!*************************************************************!*\
  !*** ./assets/js/components/photoMeter/IndexEntryModal.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexEntryModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/photoMeter/Meter */ "./assets/js/services/photoMeter/Meter.js");
/* harmony import */ var _ErrorPc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorPc */ "./assets/js/components/photoMeter/ErrorPc.jsx");
/* harmony import */ var _IndexEntry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IndexEntry */ "./assets/js/components/photoMeter/IndexEntry.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function IndexEntryModal(_ref) {
  var reference = _ref.reference,
    isShow = _ref.isShow,
    indexSaisi = _ref.indexSaisi,
    outOfBoundsWayForModal = _ref.outOfBoundsWayForModal,
    handleClose = _ref.handleClose;
  var isDesktop = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_7__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
    _useState2 = _slicedToArray(_useState, 2),
    isDisabledBtn = _useState2[0],
    setIsDisabledBtn = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
    _useState4 = _slicedToArray(_useState3, 1),
    checked = _useState4[0];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showLoader = _useState6[0],
    setshowLoader = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState8 = _slicedToArray(_useState7, 2),
    errorMessage = _useState8[0],
    setErrorMessage = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState10 = _slicedToArray(_useState9, 2),
    displayPageError = _useState10[0],
    setDisplayPageError = _useState10[1];
  var infOrSup = outOfBoundsWayForModal === _IndexEntry__WEBPACK_IMPORTED_MODULE_10__["bai"] ? t('photoMeter.indexEntryModal.boundSub') : t('photoMeter.indexEntryModal.boundSup');
  var fullTextInfOrSup = t('photoMeter.indexEntryModal.fullTextInfOrSup', {
    infOrSup: infOrSup
  });
  var onSubmit = function onSubmit() {
    setshowLoader(true);
    _services_photoMeter_Meter__WEBPACK_IMPORTED_MODULE_8__["default"].validationMotif().then(function (data) {
      if (data.isError === true) {
        setshowLoader(false);
        setErrorMessage(data.errorMessage);
        setDisplayPageError(true);
      } else {
        var path = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["generatePath"])(_constants__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].PHOTO_COUNTER_PHOTO, {
          reference: reference
        });
        history.push(path);
      }
    });
  };
  var body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "indexEntryModal",
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      motif: ''
    },
    validationSchema: false,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: onSubmit
  }, function (_ref2) {
    var handleChange = _ref2.handleChange,
      handleSubmit = _ref2.handleSubmit;
    var onChange = function onChange(e) {
      setIsDisabledBtn(!isDisabledBtn);
      handleChange(e);
    };
    if (displayPageError) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorPc__WEBPACK_IMPORTED_MODULE_9__["default"], {
        message: errorMessage,
        indiceError: 1
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "alert",
      className: "col-12 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzAlert"], {
      variant: "danger",
      className: "p-2 rounded-1"
    }, fullTextInfOrSup)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "indexEntry",
      className: "col-12 my-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzBox"], {
      className: "p-3 border border-1 border-gray-100 bg-gray-100 rounded-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzData"], {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzData"].Text, null, t('photoMeter.indexEntryModal.yourInput')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzData"].Title, null, indexSaisi)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 my-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzBox"], {
      className: "p-3 border border-1 border-gray-50"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzCheckbox"], {
      id: "foyer",
      name: "motif",
      label: t('photoMeter.indexEntryModal.confirmReading'),
      className: "custom-control-vertical",
      value: "codeMotif1",
      checked: checked,
      onChange: onChange
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row my-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 d-flex justify-content-center justify-content-md-end order-md-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
      variant: "contained",
      border: "soft",
      className: "my-2",
      type: "submit",
      isDisabled: isDisabledBtn,
      loader: showLoader
    }, t('photoMeter.indexEntryModal.confirm'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 d-flex justify-content-center justify-content-md-start order-md-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
      id: "modify-entry",
      variant: "text",
      className: "my-2",
      icon: isDesktop ? 'arrow-left' : '',
      onClick: handleClose
    }, t('photoMeter.indexEntryModal.editInput'))))));
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzModal"], {
    show: isShow,
    handleClose: handleClose,
    size: "lg",
    backdrop: "static",
    className: "modal-index",
    fullscreen: "md",
    title: "",
    centered: true
  }, body);
}

/***/ })

}]);