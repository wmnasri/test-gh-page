(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./assets/js/components/PhoneButton/index.jsx":
/*!****************************************************!*\
  !*** ./assets/js/components/PhoneButton/index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);



function PhoneButton(_ref) {
  var phone = _ref.phone,
    infoTextColor = _ref.infoTextColor,
    infoPhone = _ref.infoPhone,
    name = _ref.name,
    descriptionId = _ref.descriptionId,
    onClick = _ref.onClick;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "phone-button-".concat(name),
    className: "phone-button text-decoration-none",
    href: "tel:".concat(phone.split(' ').join('')),
    "aria-labelledby": "".concat(descriptionId, " phone-button-").concat(name, " phone-button-info-").concat(name),
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-primary-dark rounded-5 px-4 py-3 d-flex align-items-baseline justify-content-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    variant: "line",
    icon: "phone-actions-voice-mail",
    className: "text-white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    weight: "medium",
    size: "L",
    color: "white",
    className: "ml-3 mb-0",
    tag: "p"
  }, phone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "caption",
    size: "M",
    color: infoTextColor || 'white',
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "phone-button-info-".concat(name)
  }, t('helpAndContact.contact.phone_info'))));
}

/***/ }),

/***/ "./assets/js/components/serviceClient/AddFile.jsx":
/*!********************************************************!*\
  !*** ./assets/js/components/serviceClient/AddFile.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddFile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function AddFile(props) {
  var isBrowser = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__["useIsDesktop"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
    _useState2 = _slicedToArray(_useState, 2),
    choosenFile = _useState2[0],
    setChoosenFile = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState4 = _slicedToArray(_useState3, 2),
    fileError = _useState4[0],
    setFileError = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    fileIsAccepted = _useState6[0],
    setFileIsAccepted = _useState6[1];
  var errorsFile = {
    'file-invalid-type': t('files.fileFormatNotSupported'),
    'file-too-large': t('files.fileSizeExceedsAuthorizedLimit')
  };
  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
      noClick: true,
      // Disable click and keydown behavior
      noKeyboard: true,
      multiple: false,
      // Only one file can be selected
      maxSize: _constants__WEBPACK_IMPORTED_MODULE_6__["MAX_UPLOAD_FILE_SIZE"],
      accept: 'image/jpeg, image/png, .pdf, .doc',
      onDropAccepted: function onDropAccepted(acceptedFiles) {
        setChoosenFile(acceptedFiles);
        setFileError('');
        setFileIsAccepted(true);
        props.onFileSelected(acceptedFiles);
      },
      onDropRejected: function onDropRejected(rejections) {
        var _rejections = _slicedToArray(rejections, 1),
          rejection = _rejections[0];
        setFileError(errorsFile[rejection.errors[0].code]);
      }
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    open = _useDropzone.open,
    fileRejections = _useDropzone.fileRejections;
  var removeFile = function removeFile(file) {
    return function () {
      var newFile = _toConsumableArray(choosenFile);
      newFile.splice(newFile.indexOf(file), 1);
      setChoosenFile(newFile);
      setFileError('');
      props.onFileSelected([]);
      props.onFileDeleted([]);
    };
  };
  var blocFileName = choosenFile.map(function (file) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
      key: file.name,
      variant: "h2",
      weight: "bold",
      className: "text-truncate"
    }, file.name);
  });
  var classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()('row', {
    'bg-light': props.bglight
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5 col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", getRootProps(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzButton"], {
    variant: "text",
    className: "m-0",
    icon: fileIsAccepted ? 'bin-2-alternate' : 'attachment',
    onClick: fileIsAccepted ? removeFile(0) : open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "button",
    weight: "light"
  }, fileIsAccepted ? t('files.delete', {
    context: isBrowser ? 'file' : ''
  }) : t('files.add', {
    context: isBrowser ? 'file' : ''
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-7 col-md-12 d-flex align-items-center"
  }, !fileIsAccepted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "caption",
    weight: "regular"
  }, t('files.extensionsAllowedAndMaxSize')), fileIsAccepted && blocFileName, fileError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_4__["SzTypographie"], {
    variant: "caption",
    color: "danger",
    className: "mb-2"
  }, fileError)));
}

/***/ }),

/***/ "./assets/js/components/serviceClient/ContactForm.jsx":
/*!************************************************************!*\
  !*** ./assets/js/components/serviceClient/ContactForm.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _ez_components_customerService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ez-components/customerService */ "./assets/js/ez-components/customerService/index.jsx");
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../form/FormError */ "./assets/js/form/FormError.tsx");
/* harmony import */ var _models_ContactForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/ContactForm */ "./assets/js/models/ContactForm.js");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _AddFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AddFile */ "./assets/js/components/serviceClient/AddFile.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["isLoading"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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













function ContactForm(_ref) {
  var address = _ref.address,
    email = _ref.email,
    mobile = _ref.mobile,
    reference = _ref.reference,
    city = _ref.city,
    zipcode = _ref.zipcode,
    inseecode = _ref.inseecode,
    subjects = _ref.subjects,
    idBanco = _ref.idBanco;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_11__["default"])(),
    track = _useGA.track;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
    _useState2 = _slicedToArray(_useState, 2),
    files = _useState2[0],
    setFiles = _useState2[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ez_components_customerService__WEBPACK_IMPORTED_MODULE_8__["CustomerServiceContext"]),
    _useContext2 = _slicedToArray(_useContext, 2),
    state = _useContext2[0],
    dispatch = _useContext2[1];
  var isErrorForm = state.isErrorForm;
  var _window$tsme_data = window.tsme_data,
    turnstile = _window$tsme_data.turnstile,
    footer = _window$tsme_data.footer;
  var privacy_policy = footer.links_bottom.privacy_policy;
  var recaptchaRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var MAX_UPLOAD_FILES = 3;
  var CIVILITY_EMPTY = 'unknown';
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (variables) {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_7__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_6__["API"].CUSTOMER_SERVICE_POST_VALIDATE_FORM, variables);
    }, {
      onSuccess: function onSuccess(data, variables) {
        var message = data.data.message;
        if ('KO' === message) {
          dispatch({
            type: 'isErrorForm'
          });
          return;
        }
        track('CUSTOMER_SERVICE_2', {
          sz_form_contact_object: variables.subject,
          sz_form_contact_cp: variables.postalCode,
          sz_form_contact_commune: variables.locality
        });
        dispatch({
          type: 'isSuccess'
        });
      },
      onError: function onError() {
        dispatch({
          type: 'isErrorForm'
        });
      }
    }),
    isLoading = _useMutation.isLoading,
    CustomerServiceValidateForm = _objectWithoutProperties(_useMutation, _excluded);
  var onSubmit = function onSubmit(values) {
    var _files$, _files$2, _files$3;
    var variables = _objectSpread(_objectSpread({}, values), {}, {
      localityId: inseecode,
      idBanco: idBanco,
      subject: values.subject.label,
      civility: CIVILITY_EMPTY,
      firstFile: (_files$ = files[0]) !== null && _files$ !== void 0 ? _files$ : [],
      secondFile: (_files$2 = files[1]) !== null && _files$2 !== void 0 ? _files$2 : [],
      thirdFile: (_files$3 = files[2]) !== null && _files$3 !== void 0 ? _files$3 : []
    });
    if (turnstile !== null && turnstile !== void 0 && turnstile.enable) {
      var _recaptchaRef$current;
      variables['g-recaptcha-response'] = recaptchaRef === null || recaptchaRef === void 0 ? void 0 : (_recaptchaRef$current = recaptchaRef.current) === null || _recaptchaRef$current === void 0 ? void 0 : _recaptchaRef$current.getValue();
    }
    CustomerServiceValidateForm.mutate(variables);
  };
  var handleFileSelected = function handleFileSelected(event, index) {
    if (!event) {
      return;
    }
    files[index] = event[0];
    setFiles(files);
  };
  var handleFileDeleted = function handleFileDeleted(index) {
    files[index] = [];
    setFiles(files);
  };
  var handleMoreFiles = function handleMoreFiles() {
    if (MAX_UPLOAD_FILES > files.length) {
      setFiles([].concat(_toConsumableArray(files), [[]]));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
      name: '',
      surname: '',
      mail: email || '',
      mobile: mobile || '',
      refCli: reference || '',
      address: address || '',
      postalCode: zipcode || '',
      locality: city || '',
      subject: null,
      message: ''
    },
    onSubmit: onSubmit,
    enableReinitialize: true,
    validationSchema: _models_ContactForm__WEBPACK_IMPORTED_MODULE_10__["ContactFormSchema"],
    validateOnBlur: true,
    validateOnMount: true
  }, function (_ref2) {
    var values = _ref2.values,
      errors = _ref2.errors,
      touched = _ref2.touched,
      handleChange = _ref2.handleChange,
      handleBlur = _ref2.handleBlur,
      handleSubmit = _ref2.handleSubmit,
      isValid = _ref2.isValid,
      setFieldValue = _ref2.setFieldValue,
      submitForm = _ref2.submitForm;
    var onChange = function onChange() {
      submitForm();
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cf-turnstile",
      "data-sitekey": turnstile === null || turnstile === void 0 ? void 0 : turnstile.siteKey,
      "data-theme": "light"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      name: "name",
      id: "name",
      value: values.name,
      autocomplete: "family-name",
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('customerService.label_lastName'),
      placeholder: t('customerService.placeholder_lastName'),
      variant: "outlined",
      valid: touched.name && !errors.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "name"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      name: "surname",
      id: "surname",
      value: values.surname,
      autocomplete: "given-name",
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('customerService.label_firstName'),
      placeholder: t('customerService.placeholder_firstName'),
      variant: "outlined",
      valid: !errors.surname
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "surname"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mt-2 mt-lg-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      name: "mail",
      id: "mail",
      value: values.mail,
      autocomplete: "email",
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('customerService.label_mail'),
      placeholder: t('customerService.placeholder_mail'),
      variant: "outlined",
      valid: !errors.mail
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "mail"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      name: "mobile",
      id: "mobile",
      value: values.mobile,
      autocomplete: "tel",
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('customerService.label_mobile'),
      placeholder: t('customerService.placeholder_mobile'),
      variant: "outlined",
      valid: !errors.mobile
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "mobile"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mt-2 mt-lg-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      name: "refCli",
      id: "refCli",
      autocomplete: "off",
      value: values.refCli,
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('customerService.label_refCli'),
      placeholder: t('customerService.placeholder_refCli'),
      variant: "outlined",
      valid: !errors.refCli
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "refCli"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      name: "address",
      id: "address",
      value: values.address,
      autocomplete: "address-line1",
      onChange: handleChange,
      onBlur: handleBlur,
      label: t('customerService.label_address'),
      placeholder: t('customerService.placeholder_address'),
      variant: "outlined",
      valid: !errors.address,
      readOnly: address
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "address"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mt-2 mt-lg-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      name: "postalCode",
      id: "postalCode",
      value: values.postalCode,
      autocomplete: "postal-code",
      label: t('customerService.label_postalCode'),
      variant: "outlined",
      valid: !errors.postalCode,
      readOnly: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzInput"], {
      name: "locality",
      id: "locality",
      value: values.locality,
      autocomplete: "country-name",
      label: t('customerService.label_locality'),
      variant: "outlined",
      valid: !errors.locality,
      readOnly: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mt-2 mt-lg-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      id: "subject-aria-label",
      className: "mb-1",
      htmlFor: "subjectInput"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      variant: "body",
      size: "M",
      className: "text-primary-dark mb-0"
    }, t('customerService.label_subject'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzSelect"], {
      name: "subject",
      id: "subject",
      placeholder: t('customerService.placeholder_subject'),
      value: values.subject,
      options: subjects,
      onChange: function onChange(selectedOption) {
        setFieldValue('subject', selectedOption);
      },
      onBlur: handleBlur,
      isSearchable: false,
      variant: "outlined",
      inputId: "subjectInput",
      "aria-labelledby": "subject-aria-label"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "subject"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mt-2 mt-lg-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTextArea"], {
      field: "message",
      label: t('customerService.label_subject'),
      name: "message",
      id: "message",
      placeholder: t('customerService.placeholder_textArea'),
      value: values.message,
      onChange: handleChange,
      maxLength: 4000,
      variant: "outlined",
      valid: touched.message && !errors.message
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      field: "message"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "sc-files",
      className: "mt-3"
    }, files.length < MAX_UPLOAD_FILES && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
      variant: "text",
      className: "",
      icon: "add-circle",
      alignIcon: "right",
      onClick: handleMoreFiles
    }, t('files.adding_files', {
      count: MAX_UPLOAD_FILES
    })), files.map(function (value, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddFile__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onFileSelected: function onFileSelected(e) {
          return handleFileSelected(e, index);
        },
        onFileDeleted: function onFileDeleted() {
          return handleFileDeleted(index);
        },
        key: index
      });
    })), privacy_policy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row mt-2 mt-lg-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      variant: "caption",
      size: "M",
      weight: "medium",
      className: "text-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
      i18nKey: "customerService.text_RGPD"
    }, "The purposes of the processing relating to your personal, digital and telephone data, as well as the recipients of this processing and the extent of your rights can be consulted in the", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: privacy_policy.link,
      className: "text-decoration-none font-bold"
    }, "Privacy Policy"), "of the site.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center mt-4 mt-lg-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
      type: "submit",
      variant: "contained",
      border: "soft",
      isDisabled: !isValid || Object.keys(touched).length === 0,
      loader: isLoading,
      tabIndex: !isValid || Object.keys(touched).length === 0 ? 0 : null
    }, t('customerService.button_submit'))), isErrorForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "my-3"
    }, t('errors.techError')), (turnstile === null || turnstile === void 0 ? void 0 : turnstile.enable) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: recaptchaRef,
      size: "invisible",
      sitekey: turnstile === null || turnstile === void 0 ? void 0 : turnstile.siteKey,
      badge: "bottomleft"
    }));
  });
}

/***/ }),

/***/ "./assets/js/ez-components/customerService/customer-service.scss":
/*!***********************************************************************!*\
  !*** ./assets/js/ez-components/customerService/customer-service.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/ez-components/customerService/index.jsx":
/*!***********************************************************!*\
  !*** ./assets/js/ez-components/customerService/index.jsx ***!
  \***********************************************************/
/*! exports provided: initialState, CustomerServiceContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServiceContext", function() { return CustomerServiceContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomerService; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_Bubble__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Bubble */ "./assets/js/components/Bubble/index.jsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducer */ "./assets/js/ez-components/customerService/reducer.js");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result */ "./assets/js/ez-components/customerService/result/index.jsx");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search */ "./assets/js/ez-components/customerService/search/index.jsx");
/* harmony import */ var _search_inclusion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/inclusion */ "./assets/js/ez-components/customerService/search/inclusion.jsx");
/* harmony import */ var _customer_service_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-service.scss */ "./assets/js/ez-components/customerService/customer-service.scss");
/* harmony import */ var _customer_service_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_customer_service_scss__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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













var CONTACT_SERVICE_CLIENT = 'lderiuc_service_client';
var defaultInfosTown = {
  inseecode: null,
  zipcode: null,
  name: null,
  text: ''
};
var initialState = {
  clientData: null,
  contactData: null,
  infosStreet: null,
  infosTown: defaultInfosTown,
  isBotEnabled: false,
  isError: false,
  isDashboard: false,
  isInclusion: false,
  isLoading: false,
  isSearch: true,
  isSearching: false,
  isShowModal: false,
  isSearchAuto: true
};
var CustomerServiceContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext([]);
var CustomerServiceBackground = function CustomerServiceBackground() {
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useIsMobile"])();
  var isDesktop = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useIsDesktop"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "background-overflow"
  }, isDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "default",
    size: "lg",
    position: "19"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "green",
    size: "lg",
    position: "20"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "green",
    size: "sm",
    position: "21"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "light",
    size: "lg",
    position: "22"
  })), isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "dark",
    size: "sm",
    position: "24"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "light",
    size: "sm",
    position: "23"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-img-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-img-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-lg-block rounded-img-3"
  }));
};
function CustomerService() {
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    track = _useGA.track;
  var _window$tsme_data = window.tsme_data,
    isConnected = _window$tsme_data.isConnected,
    chatbot = _window$tsme_data.chatbot;
  var initializeState = function initializeState(initialState) {
    return _objectSpread(_objectSpread({}, initialState), {}, {
      isBotEnabled: chatbot === null || chatbot === void 0 ? void 0 : chatbot.enabled
    });
  };
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_8__["default"], initialState, initializeState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var customerServiceMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return [state, dispatch];
  }, [state, dispatch]);
  var _customerServiceMemo$ = customerServiceMemo[0],
    contactData = _customerServiceMemo$.contactData,
    infosStreet = _customerServiceMemo$.infosStreet,
    isSearchAuto = _customerServiceMemo$.isSearchAuto;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isConnected && !contactData) {
      dispatch({
        type: 'isLoading',
        payload: true
      });
      customerServiceData.mutate();
    }
  }, []);
  var initInfosTownFromConnected = function initInfosTownFromConnected(_ref) {
    var codeInsee = _ref.codeInsee,
      adresseDesserte = _ref.adresseDesserte;
    var cPDesserte = adresseDesserte.cPDesserte,
      villeDesserte = adresseDesserte.villeDesserte;
    var infosTown = {
      inseecode: codeInsee,
      zipcode: cPDesserte,
      name: villeDesserte,
      text: villeDesserte
    };
    dispatch({
      type: 'infosTown',
      payload: infosTown
    });
  };
  var customerServiceData = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(function (variables) {
    if (isConnected && isSearchAuto) {
      return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_5__["API"].CUSTOMER_SERVICE_DATA_CONNECTED);
    }
    var data = {
      idUrlFromTypePage: CONTACT_SERVICE_CLIENT
    };
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_5__["API"].CUSTOMER_SERVICE_DATA, _objectSpread(_objectSpread({}, data), variables));
  }, {
    onSuccess: function onSuccess(_ref2) {
      var data = _ref2.data;
      var response = data.response;
      if (response !== null && response !== void 0 && response.isError) {
        if (isConnected) {
          return;
        }
        dispatch({
          type: 'isError'
        });
      } else {
        if (isConnected && isSearchAuto) {
          initInfosTownFromConnected(response);
          var adresseDesserte = response.adresseDesserte,
            email = response.email,
            reference = response.reference,
            telPortable = response.telPortable,
            idBanco = response.idBanco;
          dispatch({
            type: 'clientData',
            payload: {
              adresseDesserte: adresseDesserte,
              email: email,
              reference: reference,
              telPortable: telPortable,
              idBanco: idBanco
            }
          });
        } else {
          var _idBanco = response.idBanco;
          dispatch({
            type: 'clientData',
            payload: {
              adresseDesserte: {},
              email: '',
              reference: '',
              telPortable: '',
              idBanco: _idBanco
            }
          });
        }
        dispatch({
          type: 'isError',
          payload: false
        });
        dispatch({
          type: 'contactData',
          payload: response === null || response === void 0 ? void 0 : response.contactDatas
        });
        dispatch({
          type: 'contactSubjects',
          payload: response === null || response === void 0 ? void 0 : response.subjects
        });
        track('CUSTOMER_SERVICE_1');
      }
    },
    onError: function onError() {
      if (!isConnected) {
        dispatch({
          type: 'isError'
        });
      }
    },
    onSettled: function onSettled() {
      dispatch({
        type: 'isLoading',
        payload: false
      });
      dispatch({
        type: 'isShowModal',
        payload: false
      });
      dispatch({
        type: 'isIncluded',
        payload: false
      });
    }
  });
  var getTownParams = function getTownParams(_ref3) {
    var inseecode = _ref3.inseecode,
      zipcode = _ref3.zipcode;
    return {
      codeInsee: inseecode,
      zipCode: zipcode
    };
  };
  var streetParams = {
    codeHexaviaAdresse: infosStreet === null || infosStreet === void 0 ? void 0 : infosStreet.streetId,
    numeroRue: infosStreet === null || infosStreet === void 0 ? void 0 : infosStreet.streetNumber
  };
  var onValidateStreet = function onValidateStreet(infosTown) {
    var townParams = getTownParams(infosTown);
    customerServiceData.mutate(_objectSpread(_objectSpread({}, townParams), streetParams));
  };
  var onValidateTown = function onValidateTown(infosTown) {
    var townParams = getTownParams(infosTown);
    customerServiceData.mutate(townParams);
  };
  var resetSearch = function resetSearch() {
    dispatch({
      type: 'reset'
    });
    customerServiceData.reset();
    dispatch({
      type: 'isSearchAuto',
      payload: false
    });
  };
  var isSuccess = state.isSuccess,
    isError = state.isError;
  var isRequestSent = isSuccess || isError;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomerServiceContext.Provider, {
    value: [].concat(_toConsumableArray(customerServiceMemo), [{
      onValidateStreet: onValidateStreet,
      onValidateTown: onValidateTown,
      resetSearch: resetSearch
    }])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container p-0 h-100 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomerServiceBackground, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container p-bottom py-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_inclusion__WEBPACK_IMPORTED_MODULE_11__["default"], {
    isLoading: customerServiceData.isLoading
  }), !isRequestSent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
}

/***/ }),

/***/ "./assets/js/ez-components/customerService/reducer.js":
/*!************************************************************!*\
  !*** ./assets/js/ez-components/customerService/reducer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./assets/js/ez-components/customerService/index.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function reducer(state, action) {
  var _action$payload, _action$payload2, _action$payload3;
  switch (action.type) {
    case 'clientData':
      return _objectSpread(_objectSpread({}, state), {}, {
        clientData: action.payload
      });
    case 'contactData':
      return _objectSpread(_objectSpread({}, state), {}, {
        contactData: action.payload
      });
    case 'contactSubjects':
      return _objectSpread(_objectSpread({}, state), {}, {
        contactSubjects: action.payload
      });
    case 'infosTown':
      return _objectSpread(_objectSpread({}, state), {}, {
        infosTown: _objectSpread(_objectSpread({}, state.infosTown), action.payload)
      });
    case 'infosStreet':
      return _objectSpread(_objectSpread({}, state), {}, {
        infosStreet: action.payload
      });
    case 'isError':
      return _objectSpread(_objectSpread({}, state), {}, {
        isError: (_action$payload = action.payload) !== null && _action$payload !== void 0 ? _action$payload : true
      });
    case 'isErrorForm':
      return _objectSpread(_objectSpread({}, state), {}, {
        isErrorForm: (_action$payload2 = action.payload) !== null && _action$payload2 !== void 0 ? _action$payload2 : true
      });
    case 'isIncluded':
      return _objectSpread(_objectSpread({}, state), {}, {
        isIncluded: action.payload
      });
    case 'isInclusion':
      return _objectSpread(_objectSpread({}, state), {}, {
        isInclusion: action.payload
      });
    case 'isLoading':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: action.payload
      });
    case 'isSearch':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearch: action.payload
      });
    case 'isSearching':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearching: action.payload
      });
    case 'isShowModal':
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowModal: action.payload
      });
    case 'isSuccess':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSuccess: (_action$payload3 = action.payload) !== null && _action$payload3 !== void 0 ? _action$payload3 : true
      });
    case 'isSearchAuto':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearchAuto: action.payload
      });
    case 'reset':
      return _objectSpread({}, _index__WEBPACK_IMPORTED_MODULE_0__["initialState"]);
    default:
      throw new Error('Not a reducer');
  }
}

/***/ }),

/***/ "./assets/js/ez-components/customerService/result/error.jsx":
/*!******************************************************************!*\
  !*** ./assets/js/ez-components/customerService/result/error.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);



function ResultError() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 rounded-3 bg-white px-3 py-4 p-lg-5 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    color: "dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only",
    id: "contact-error",
    tabIndex: "-1"
  }, t('aria.contact_error')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: "edmc.error.cannot_respond_address"
  }, "We cannot respond to your request for this address", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    tag: "span",
    weight: "bold",
    className: "d-inline"
  }, "Please contact your customer service."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    color: "dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: "edmc.error.contact_customer_service"
  }, "For information on water and sanitation services,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    tag: "span",
    weight: "bold",
    className: "d-inline"
  }, "contact your town hall."))));
}

/***/ }),

/***/ "./assets/js/ez-components/customerService/result/index.jsx":
/*!******************************************************************!*\
  !*** ./assets/js/ez-components/customerService/result/index.jsx ***!
  \******************************************************************/
/*! exports provided: HelpBot, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpBot", function() { return HelpBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Result; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _components_PhoneButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/PhoneButton */ "./assets/js/components/PhoneButton/index.jsx");
/* harmony import */ var _components_serviceClient_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/serviceClient/ContactForm */ "./assets/js/components/serviceClient/ContactForm.jsx");
/* harmony import */ var _hooks_useLivingActorAssistant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLivingActorAssistant */ "./assets/js/hooks/useLivingActorAssistant/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index */ "./assets/js/ez-components/customerService/index.jsx");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error */ "./assets/js/ez-components/customerService/result/error.jsx");
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./success */ "./assets/js/ez-components/customerService/result/success.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _hooks_useGA_tags_helpAndContact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../hooks/useGA/tags/helpAndContact */ "./assets/js/hooks/useGA/tags/helpAndContact.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var PhoneContact = function PhoneContact() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_7__["CustomerServiceContext"]),
    _useContext2 = _slicedToArray(_useContext, 1),
    state = _useContext2[0];
  var contactData = state.contactData;
  var horaireCrc = contactData.horaireCrc,
    telCrcJour = contactData.telCrcJour;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    track = _useGA.track;
  if (!telCrcJour) {
    return null;
  }
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('HELP_CONTACT_4', {
      sz_click_cta_tel_type: _hooks_useGA_tags_helpAndContact__WEBPACK_IMPORTED_MODULE_14__["SZ_TEL_TYPE"].client
    });
  }, []);
  var onClick = function onClick() {
    track('HELP_CONTACT_5', {
      sz_click_cta_tel_type: _hooks_useGA_tags_helpAndContact__WEBPACK_IMPORTED_MODULE_14__["SZ_TEL_TYPE"].client
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "telclient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    id: "telclient-title",
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "text-center text-lg-left",
    tag: "h2"
  }, t('customerService.subtitle_phone')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center mt-2 mt-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    size: "XL",
    className: "text-dark",
    id: "customer-service-phone-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: "helpAndContact.contact.text_result",
    values: {
      horaireCrc: horaireCrc
    },
    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      weight: "bold",
      className: "d-inline",
      tag: "span"
    })]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhoneButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClick,
    descriptionId: "telclient-title",
    name: "contact",
    phone: telCrcJour,
    infoTextColor: "primary-dark"
  }))));
};
var HelpBot = function HelpBot() {
  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation2.t;
  var _useLivingActorAssist = Object(_hooks_useLivingActorAssistant__WEBPACK_IMPORTED_MODULE_6__["default"])({
      enableEmbedCall: false
    }),
    setValueLA = _useLivingActorAssist.setValueLA;
  var handleClick = function handleClick() {
    setValueLA(_constants__WEBPACK_IMPORTED_MODULE_3__["HELP_BOT"].EMERGENCY_SEQUENCE);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 text-center text-lg-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    size: "XL",
    className: "text-dark text-center text-lg-left"
  }, t('customerService.text_bot')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    variant: "contained",
    icon: "messages-bubble-question",
    border: "soft",
    alignIcon: "right",
    onClick: handleClick
  }, t('customerService.button_bot')));
};
var EmergencyContact = function EmergencyContact(_ref) {
  var helpBot = _ref.helpBot;
  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation3.t;
  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_7__["CustomerServiceContext"]),
    _useContext4 = _slicedToArray(_useContext3, 1),
    state = _useContext4[0];
  var contactData = state.contactData;
  var telCrcUrgence = contactData.telCrcUrgence;
  var _useGA2 = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    track = _useGA2.track;
  if (!telCrcUrgence) {
    return null;
  }
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    track('HELP_CONTACT_4', {
      sz_click_cta_tel_type: _hooks_useGA_tags_helpAndContact__WEBPACK_IMPORTED_MODULE_14__["SZ_TEL_TYPE"].urgent
    });
  }, []);
  var onClick = function onClick() {
    track('HELP_CONTACT_5', {
      sz_click_cta_tel_type: _hooks_useGA_tags_helpAndContact__WEBPACK_IMPORTED_MODULE_14__["SZ_TEL_TYPE"].urgent
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "telurgence"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    id: "telurgence-title",
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "text-center text-lg-left",
    tag: "h2"
  }, t('customerService.subtitle_emergency')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center mt-2 mt-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    size: "XL",
    className: "text-dark text-center text-lg-left",
    tabIndex: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: "customerService.text_emergency",
    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      weight: "bold",
      className: "d-inline",
      tag: "span"
    })]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhoneButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClick,
    descriptionId: "telurgence-title",
    name: "emergency",
    phone: telCrcUrgence,
    infoTextColor: "primary-dark"
  }))), helpBot && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelpBot, null));
};
var EmailContact = function EmailContact() {
  var _clientData$adresseDe, _clientData$adresseDe2, _clientData$adresseDe3;
  var _useTranslation4 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation4.t;
  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_7__["CustomerServiceContext"]),
    _useContext6 = _slicedToArray(_useContext5, 1),
    state = _useContext6[0];
  var clientData = state.clientData,
    contactSubjects = state.contactSubjects,
    infosTown = state.infosTown;
  var contactFormData = {
    address: clientData === null || clientData === void 0 ? void 0 : (_clientData$adresseDe = clientData.adresseDesserte) === null || _clientData$adresseDe === void 0 ? void 0 : _clientData$adresseDe.adresseDesserte1,
    email: clientData === null || clientData === void 0 ? void 0 : clientData.email,
    mobile: clientData === null || clientData === void 0 ? void 0 : clientData.telPortable,
    reference: (clientData === null || clientData === void 0 ? void 0 : clientData.reference) && '98' + (clientData === null || clientData === void 0 ? void 0 : clientData.reference),
    city: (clientData === null || clientData === void 0 ? void 0 : (_clientData$adresseDe2 = clientData.adresseDesserte) === null || _clientData$adresseDe2 === void 0 ? void 0 : _clientData$adresseDe2.villeDesserte) || (infosTown === null || infosTown === void 0 ? void 0 : infosTown.name),
    zipcode: (clientData === null || clientData === void 0 ? void 0 : (_clientData$adresseDe3 = clientData.adresseDesserte) === null || _clientData$adresseDe3 === void 0 ? void 0 : _clientData$adresseDe3.cPDesserte) || (infosTown === null || infosTown === void 0 ? void 0 : infosTown.zipcode),
    inseecode: infosTown === null || infosTown === void 0 ? void 0 : infosTown.inseecode,
    subjects: contactSubjects,
    idBanco: clientData === null || clientData === void 0 ? void 0 : clientData.idBanco
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "emailContact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, t('customerService.subtitle_email'), " ", t('aria.form')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "text-center text-lg-left",
    tag: "h2"
  }, t('customerService.subtitle_email')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    size: "XL",
    className: "text-dark text-center text-lg-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: "customerService.text_email"
  }, "Prefer to write to us?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    weight: "bold",
    tag: "span",
    className: "d-block"
  }, "Complete the following form by filling in all the requested fields:"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_serviceClient_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], contactFormData));
};
var Agency = function Agency() {
  var _useTranslation5 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation5.t;
  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_7__["CustomerServiceContext"]),
    _useContext8 = _slicedToArray(_useContext7, 1),
    state = _useContext8[0];
  var contactData = state.contactData;
  var communeAccueil = contactData.communeAccueil,
    horaireAccueil = contactData.horaireAccueil,
    rueAccueil = contactData.rueAccueil;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "agence"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "text-center",
    tag: "h2"
  }, t('customerService.subtitle_agency')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9 mx-auto mt-3 border-small border-primary-dark rounded-2 p-3 px-lg-4 py-lg-3 d-flex align-items-start align-items-lg-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    icon: "pin-location-1",
    variant: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "text-left text-lg-center ml-3 mb-0",
    tag: "p"
  }, rueAccueil, '' !== communeAccueil && " - ".concat(communeAccueil))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-10 mx-auto mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "body",
    size: "M",
    className: "text-dark text-center mb-0"
  }, horaireAccueil)));
};
var Info = function Info() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-blue-sky-light border-small border-blue-clear rounded-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-3 px-lg-4 py-lg-5 d-flex align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzIcon"], {
    className: "info-icon text-blue-sky",
    icon: "information-circle",
    variant: "bold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    size: "XL",
    className: "ml-4 mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    i18nKey: 'customerService.text_info'
  }, "Your customer service is your preferred contact for all your complaints. However, if you are not satisfied with the answers you have received,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _constants__WEBPACK_IMPORTED_MODULE_3__["AMICABLE_RECOURSE"],
    className: "underline"
  }, "other amicable recourses"), ' ', "are possible."))));
};
function Result() {
  var _useContext9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_7__["CustomerServiceContext"]),
    _useContext10 = _slicedToArray(_useContext9, 1),
    state = _useContext10[0];
  var contactData = state.contactData,
    clientData = state.clientData,
    infosTown = state.infosTown,
    isBotEnabled = state.isBotEnabled,
    isError = state.isError,
    isSuccess = state.isSuccess;
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useLocation"])(),
    hash = _useLocation.hash;
  var scroll = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var city = (clientData === null || clientData === void 0 ? void 0 : clientData.adresseDesserte.villeDesserte) || (infosTown === null || infosTown === void 0 ? void 0 : infosTown.name);
  var _useTranslation6 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation6.t;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (contactData && hash) {
      try {
        var element = document.getElementById(hash.substring(1));
        var offset = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["getElementPosition"])(element);
        scroll(offset);
      } catch (error) {
        console.error("Le scroll n'a pas pu être effectué");
      }
    }
  }, [contactData]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (contactData) {
      Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["setFocusOn"])('contact-result');
    }
    if (isSuccess) {
      Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["setFocusOn"])('contact-success');
    }
    if (isError) {
      Object(_services_Utils__WEBPACK_IMPORTED_MODULE_12__["setFocusOn"])('contact-error');
    }
  }, [contactData, isSuccess, isError]);
  if (isSuccess) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_success__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  }
  if (isError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_error__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }
  if (contactData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "customer-service-result",
      className: "col-12 rounded-3 bg-white px-3 py-4 px-lg-6 py-lg-5 mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      id: "contact-result",
      tabIndex: -1
    }, t('aria.city_result', {
      town: city
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PhoneContact, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "contact-divider w-100"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmergencyContact, {
      helpBot: isBotEnabled
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "contact-divider w-100"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmailContact, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "contact-divider w-100"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Agency, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "contact-divider w-100"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info, null));
  }
  return null;
}

/***/ }),

/***/ "./assets/js/ez-components/customerService/result/success.jsx":
/*!********************************************************************!*\
  !*** ./assets/js/ez-components/customerService/result/success.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultSuccess; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./assets/js/ez-components/customerService/index.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ResultSuccess() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_3__["CustomerServiceContext"]),
    _useContext2 = _slicedToArray(_useContext, 3),
    resetSearch = _useContext2[2].resetSearch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 rounded-3 bg-white px-3 py-4 p-lg-5 mt-3",
    "data-cy": "customer-service-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only",
    id: "contact-success",
    tabIndex: "-1"
  }, t('customerService.request_sent')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "black",
    className: "mb-4",
    tag: "h2"
  }, t('customerService.request_sent')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    variant: "text",
    icon: "messages-bubble-question",
    onClick: resetSearch
  }, t('customerService.new_request')));
}

/***/ }),

/***/ "./assets/js/ez-components/customerService/search/inclusion.jsx":
/*!**********************************************************************!*\
  !*** ./assets/js/ez-components/customerService/search/inclusion.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InclusionModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CapAddress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/CapAddress */ "./assets/js/components/CapAddress/index.jsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./assets/js/ez-components/customerService/index.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function InclusionModal(_ref) {
  var isLoading = _ref.isLoading;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSearching = _useState2[0],
    setIsSearching = _useState2[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_4__["CustomerServiceContext"]),
    _useContext2 = _slicedToArray(_useContext, 3),
    state = _useContext2[0],
    dispatch = _useContext2[1],
    onValidateStreet = _useContext2[2].onValidateStreet;
  var infosTown = state.infosTown,
    isShowModal = state.isShowModal;
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    _useState4 = _slicedToArray(_useState3, 2),
    addressValue = _useState4[0],
    setAddressValue = _useState4[1];
  var address = {
    locality: infosTown.name,
    localityId: infosTown.inseecode,
    postalCode: infosTown.zipcode
  };
  var handleClose = function handleClose() {
    setAddressValue('');
    dispatch({
      type: 'isLoading',
      payload: false
    });
    dispatch({
      type: 'isShowModal',
      payload: false
    });
  };
  var onClick = function onClick(infosStreet) {
    var text = infosStreet.text;
    setAddressValue(text);
    dispatch({
      type: 'infosStreet',
      payload: infosStreet
    });
    setIsSearching(false);
  };
  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    if (target.value.length > 2 && !isSearching) {
      setIsSearching(true);
    }
    setAddressValue(target.value);
  };
  var onClickValidate = function onClickValidate() {
    onValidateStreet(infosTown);
    setAddressValue('');
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var el = document.getElementById('searchInput-street');
    if (el) {
      el.focus();
    }
  }, [isShowModal]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzModal"], {
    show: isShowModal,
    handleClose: handleClose,
    size: 'lg',
    border: "smooth",
    centered: true,
    title: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium"
  }, t('inclusion.addressConcerned')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    color: "dark"
  }, t('inclusion.addressMoreInfo')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CapAddress__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "search-inclusion-address",
    value: addressValue,
    onChange: onChange,
    onClick: onClick,
    className: "pr-0",
    label: t('inclusion.address'),
    type: "street",
    address: address,
    isSearching: isSearching
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    "data-cy": "submit-inclusion-address",
    variant: "contained",
    border: "soft",
    onClick: onClickValidate,
    loader: isLoading
  }, t('validate')))));
}

/***/ }),

/***/ "./assets/js/ez-components/customerService/search/index.jsx":
/*!******************************************************************!*\
  !*** ./assets/js/ez-components/customerService/search/index.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_CapAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/CapAddress */ "./assets/js/components/CapAddress/index.jsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index */ "./assets/js/ez-components/customerService/index.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Search() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index__WEBPACK_IMPORTED_MODULE_7__["CustomerServiceContext"]),
    _useContext2 = _slicedToArray(_useContext, 3),
    state = _useContext2[0],
    dispatch = _useContext2[1],
    _useContext2$ = _useContext2[2],
    onValidateTown = _useContext2$.onValidateTown,
    resetSearch = _useContext2$.resetSearch;
  var infosContract = state.infosContract,
    infosTown = state.infosTown,
    isSearching = state.isSearching,
    isLoading = state.isLoading,
    contactData = state.contactData,
    isSuccess = state.isSuccess,
    isError = state.isError;
  var isResult = contactData || isSuccess || isError;
  var InclusionMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(function (_ref) {
    var inseecode = _ref.inseecode;
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_4__["API"].CUSTOMER_SERVICE_GET_CONTROL_INCLUSION, {
      params: {
        inseeCode: inseecode
      }
    });
  }, {
    onSuccess: function onSuccess(_ref2, params) {
      var data = _ref2.data;
      var isError = data.isError,
        isTownIncluded = data.isTownIncluded;
      if (isError) {
        dispatch({
          type: 'isError'
        });
      } else if (isTownIncluded) {
        dispatch({
          type: 'isIncluded',
          payload: isTownIncluded
        });
        dispatch({
          type: 'isShowModal',
          payload: true
        });
      } else {
        onValidateTown(params);
      }
    },
    onError: function onError() {
      dispatch({
        type: 'isError'
      });
    },
    onSettled: function onSettled() {
      dispatch({
        type: 'isLoading',
        payload: false
      });
    }
  });
  var setInfosTown = function setInfosTown(infosTown, isSearching, isLoading) {
    dispatch({
      type: 'infosTown',
      payload: infosTown
    });
    dispatch({
      type: 'isSearching',
      payload: isSearching
    });
    dispatch({
      type: 'isLoading',
      payload: isLoading
    });
  };
  var onClick = function onClick(infosTown) {
    setInfosTown(infosTown, false, true);
    InclusionMutation.mutate(infosTown);
  };
  var onChange = function onChange(_ref3) {
    var target = _ref3.target;
    setInfosTown({
      text: target.value
    }, true, false);
  };
  var onClickAway = function onClickAway() {
    dispatch({
      type: 'isSearching',
      payload: false
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H1",
    size: "XL",
    weight: "black",
    color: "white",
    className: "text-center text-uppercase"
  }, t('customerService.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mt-4 mt-lg-5 p-3 py-4 py-lg-5 rounded-3 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "H3",
    size: "L",
    weight: "medium",
    className: "text-center mb-4",
    tag: "h2"
  }, t('customerService.subtitle', {
    context: 'address'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-5 offset-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    variant: "body",
    size: "L",
    className: "mb-2 text-center text-dark"
  }, t('customerService.label', {
    context: 'search'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-5 offset-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CapAddress__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "search-address",
    value: (infosTown === null || infosTown === void 0 ? void 0 : infosTown.text) || (infosContract === null || infosContract === void 0 ? void 0 : infosContract.municipality_label) || '',
    onChange: onChange,
    placeholder: t('edmc.search.search_address'),
    className: "pr-0",
    type: "town",
    onClick: onClick,
    withCapaddress: false,
    isSearching: isSearching,
    isLoading: isLoading,
    onClickAway: onClickAway,
    disabled: isResult
  })), isResult && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 text-center text-lg-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    variant: "text",
    className: "text-primary-dark sz-typo-caption md",
    size: "S",
    onClick: resetSearch,
    "data-cy": "change-city"
  }, t('helpAndContact.contact.button_change'))))));
}

/***/ }),

/***/ "./assets/js/form/FormError.tsx":
/*!**************************************!*\
  !*** ./assets/js/form/FormError.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




function FormError(_ref) {
  var field = _ref.field,
    _ref$messageAccess = _ref.messageAccess,
    messageAccess = _ref$messageAccess === void 0 ? '' : _ref$messageAccess,
    customDisplay = _ref.customDisplay,
    className = _ref.className;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])(),
    errors = _useFormikContext.errors,
    values = _useFormikContext.values,
    touched = _useFormikContext.touched;
  var condition = values[field] && errors[field] && touched[field];
  if (customDisplay || condition) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-cy": "error-".concat(field),
      role: "alert",
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
      variant: "caption",
      color: "danger",
      className: "mb-2"
    }, t(errors[field])), messageAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, messageAccess));
  }
  return null;
}

/***/ }),

/***/ "./assets/js/models/ContactForm.js":
/*!*****************************************!*\
  !*** ./assets/js/models/ContactForm.js ***!
  \*****************************************/
/*! exports provided: ContactFormSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormSchema", function() { return ContactFormSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validation_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/yup */ "./assets/js/validation/yup.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./assets/js/models/index.ts");



var ContactFormSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Veuillez saisir votre nom'),
  surname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Veuillez saisir votre prénom'),
  mail: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email('E-mail invalide').required('Veuillez saisir votre e-mail'),
  mobile: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(_index__WEBPACK_IMPORTED_MODULE_2__["mobileMatch"], 'Le numéro de téléphone mobile n\'est pas valide').required('Veuillez saisir votre mobile'),
  refCli: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(
  // match an empty string (^$) or (|) a valid client ref (^[9][8][\d]{10}$)
  /^$|^98\d{10}$/, {
    message: 'La référence client est un nombre à 12 chiffres et débutant par 98',
    excludeEmptyString: true
  }),
  address: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().max(250, 'L\'adresse ne peut dépasser 250 caractères'),
  subject: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().required('Veuillez choisir l\'objet'),
  message: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().max(4000, 'Le message ne peut dépasser 4000 caractères').required('Veuillez saisir votre message')
});

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

/***/ "./assets/js/pages/customer-service/index.jsx":
/*!****************************************************!*\
  !*** ./assets/js/pages/customer-service/index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomerServicePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _ez_components_customerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ez-components/customerService */ "./assets/js/ez-components/customerService/index.jsx");



function CustomerServicePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    tag: "main",
    className: "customer-service",
    fullscreen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_customerService__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ })

}]);