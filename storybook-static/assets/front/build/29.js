(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./assets/js/ez-components/modules/StickyAndBlock/Content.jsx":
/*!********************************************************************!*\
  !*** ./assets/js/ez-components/modules/StickyAndBlock/Content.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./assets/js/ez-components/modules/StickyAndBlock/index.jsx");
/* harmony import */ var _hooks_usePosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/usePosition */ "./assets/js/hooks/usePosition.js");




function Content(_ref) {
  var id = _ref.id,
    className = _ref.className,
    children = _ref.children,
    isLastElement = _ref.isLastElement;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_2__["StickyAndBlockContext"]),
    listenToScroll = _useContext.listenToScroll;
  var isActive = Object(_hooks_usePosition__WEBPACK_IMPORTED_MODULE_3__["default"])(ref.current, isLastElement);
  var classNames = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('block-content px-3 py-5 p-md-5 bg-white rounded-3 mt-3', className);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    listenToScroll(ref.current, isActive);
  }, [isActive]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: ref,
    id: id,
    className: classNames
  }, children);
}

/***/ }),

/***/ "./assets/js/ez-components/modules/StickyAndBlock/Link.jsx":
/*!*****************************************************************!*\
  !*** ./assets/js/ez-components/modules/StickyAndBlock/Link.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./assets/js/ez-components/modules/StickyAndBlock/index.jsx");




function StickyLink(_ref) {
  var children = _ref.children,
    hash = _ref.hash,
    index = _ref.index;
  var scroll = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_3__["StickyAndBlockContext"]),
    active = _useContext.active;
  var isActive = active >= index;
  var weight = isActive ? 'bold' : 'regular';
  var onClick = function onClick(e) {
    e.preventDefault();
    var hash = e.target.hash;
    var el = document.querySelector(hash);
    var position = el.getBoundingClientRect();
    var top = position.top;
    var screenSize = window.screen.height / 3;
    scroll(top + window.scrollY - screenSize);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "py-2 my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    tag: "span",
    weight: weight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    role: "button",
    "aria-pressed": active === index,
    onClick: onClick,
    href: hash,
    className: "text-decoration-none"
  }, children)));
}

/***/ }),

/***/ "./assets/js/ez-components/modules/StickyAndBlock/StickyList.jsx":
/*!***********************************************************************!*\
  !*** ./assets/js/ez-components/modules/StickyAndBlock/StickyList.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./assets/js/ez-components/modules/StickyAndBlock/index.jsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./assets/js/ez-components/modules/StickyAndBlock/Link.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var StickyContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: sticky;\n  top: ", ";\n"])), function (_ref) {
  var top = _ref.top;
  return top !== null && top !== void 0 ? top : '140px';
});
var ProgressBar = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  background-color: var(--gray-500);\n  &:after {\n    content: '';\n    position: absolute;\n    background-color: var(--expert-blue);\n    width: 4px;\n    height: ", "%;\n    transition: ease 0.25s height;\n  }\n"])), function (_ref2) {
  var percentage = _ref2.percentage;
  return percentage === 100 ? percentage : percentage - 10;
});
function StickyList(_ref3) {
  var small = _ref3.small,
    top = _ref3.top;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_2__["StickyAndBlockContext"]),
    links = _useContext.links,
    percentage = _useContext.percentage;
  var stickyListClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('d-none d-lg-block list', {
    'col-4 pt-4': !small,
    'col-3 pt-6': small
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: stickyListClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StickyContainer, {
    top: top
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressBar, {
    percentage: percentage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "Table of contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled pl-4"
  }, links.map(function (text, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "heading-".concat(key),
      hash: "#heading-".concat(key),
      index: key
    }, text);
  })))));
}

/***/ }),

/***/ "./assets/js/ez-components/modules/StickyAndBlock/index.jsx":
/*!******************************************************************!*\
  !*** ./assets/js/ez-components/modules/StickyAndBlock/index.jsx ***!
  \******************************************************************/
/*! exports provided: StickyAndBlockContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyAndBlockContext", function() { return StickyAndBlockContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModuleStickyAndBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _StickyList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StickyList */ "./assets/js/ez-components/modules/StickyAndBlock/StickyList.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./assets/js/ez-components/modules/StickyAndBlock/Content.jsx");
/* harmony import */ var _hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _Tips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Tips */ "./assets/js/ez-components/modules/Tips.jsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
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









var StickyAndBlockContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function ModuleStickyAndBlock(_ref) {
  var links = _ref.links,
    items = _ref.items,
    children = _ref.children,
    isLoading = _ref.isLoading,
    Skeleton = _ref.Skeleton;
  var listLength = links.length;
  var _useInterweave = Object(_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    transform = _useInterweave.transform;
  var getDefaultActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return Object.fromEntries(Array(listLength).fill(false).map(function (value, key) {
      return [key, value];
    }));
  }, [listLength]);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getDefaultActive),
    _useState2 = _slicedToArray(_useState, 2),
    activeList = _useState2[0],
    setActiveList = _useState2[1];
  var active = Object.values(activeList).lastIndexOf(true);
  var percentage = (active + 1) / listLength * 100;
  var listenToScroll = function listenToScroll(el, active) {
    var parentNode = el.parentNode;
    var index = Array.from(parentNode.children).indexOf(el);
    setActiveList(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, index, active));
    });
  };
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Skeleton, null);
  }
  if (children) {
    var contentClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])({
      'col-12 col-lg-9': listLength > 1,
      'col-12': listLength <= 1
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sticky-and-block row no-gutters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StickyAndBlockContext.Provider, {
      value: {
        listenToScroll: listenToScroll,
        percentage: percentage,
        links: links,
        active: active
      }
    }, listLength > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StickyList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      small: true,
      top: '195px'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: contentClasses
    }, children)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-and-block row no-gutters bg-blue-07"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StickyAndBlockContext.Provider, {
    value: {
      listenToScroll: listenToScroll,
      percentage: percentage,
      links: links,
      active: active
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StickyList__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8"
  }, items.map(function (values, key) {
    var title = values.title,
      subtitle = values.subtitle,
      description = values.description,
      btn = values.btn,
      tips = values.tips;
    var id = "heading-".concat(key);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: id,
      id: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "H1",
      size: "XL",
      tag: "h2",
      weight: "bold"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      variant: "H4",
      size: "L",
      weight: "regular",
      className: "mb-4"
    }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["default"], {
      transform: transform,
      content: description,
      noWrap: true
    }), tips && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tips__WEBPACK_IMPORTED_MODULE_7__["default"], null, tips), btn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "mt-4",
      variant: "outlined",
      border: "soft",
      to: btn.link
    }, btn.label));
  }))));
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

/***/ })

}]);