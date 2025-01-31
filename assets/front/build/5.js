(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/img/light-bulb-shine.svg":
/*!*****************************************!*\
  !*** ./assets/img/light-bulb-shine.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/light-bulb-shine.svg");

/***/ }),

/***/ "./assets/img/minus.svg":
/*!******************************!*\
  !*** ./assets/img/minus.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/minus.svg");

/***/ }),

/***/ "./assets/img/plus.svg":
/*!*****************************!*\
  !*** ./assets/img/plus.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/plus.svg");

/***/ }),

/***/ "./assets/js/ez-components/accordion/accordion.scss":
/*!**********************************************************!*\
  !*** ./assets/js/ez-components/accordion/accordion.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/ez-components/accordion/index.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/ez-components/accordion/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzAccordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _modules_Tips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/Tips */ "./assets/js/ez-components/modules/Tips.jsx");
/* harmony import */ var _hooks_useInterweave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../img/plus.svg */ "./assets/img/plus.svg");
/* harmony import */ var _img_minus_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../img/minus.svg */ "./assets/img/minus.svg");
/* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accordion.scss */ "./assets/js/ez-components/accordion/accordion.scss");
/* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_accordion_scss__WEBPACK_IMPORTED_MODULE_12__);
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













function EzAccordion(_ref) {
  var data = _ref.data,
    children = _ref.children,
    _ref$borderTop = _ref.borderTop,
    borderTop = _ref$borderTop === void 0 ? false : _ref$borderTop,
    _ref$borderBottom = _ref.borderBottom,
    borderBottom = _ref$borderBottom === void 0 ? true : _ref$borderBottom,
    _ref$toggle = _ref.toggle,
    toggle = _ref$toggle === void 0 ? true : _ref$toggle,
    _ref$activeKey = _ref.activeKey,
    activeKey = _ref$activeKey === void 0 ? '0' : _ref$activeKey,
    _ref$setCurrentKey = _ref.setCurrentKey,
    setCurrentKey = _ref$setCurrentKey === void 0 ? function () {} : _ref$setCurrentKey,
    _ref$buttonArrow = _ref.buttonArrow,
    buttonArrow = _ref$buttonArrow === void 0 ? false : _ref$buttonArrow,
    _ref$isFaq = _ref.isFaq,
    isFaq = _ref$isFaq === void 0 ? false : _ref$isFaq,
    _ref$isTable = _ref.isTable,
    isTable = _ref$isTable === void 0 ? false : _ref$isTable,
    _ref$isSteps = _ref.isSteps,
    isSteps = _ref$isSteps === void 0 ? false : _ref$isSteps,
    _ref$isHistory = _ref.isHistory,
    isHistory = _ref$isHistory === void 0 ? false : _ref$isHistory,
    _ref$isNotif = _ref.isNotif,
    isNotif = _ref$isNotif === void 0 ? false : _ref$isNotif,
    className = _ref.className,
    btnChildren = _ref.btnChildren,
    onClick = _ref.onClick;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__["useIsMobile"])();
  var _useInterweave = Object(_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    transform = _useInterweave.transform;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(activeKey),
    _useState2 = _slicedToArray(_useState, 2),
    activeKeyState = _useState2[0],
    setActiveKey = _useState2[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setActiveKey(activeKey);
  }, [activeKey]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCurrentKey(activeKeyState);
  }, [activeKeyState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    defaultActiveKey: activeKey,
    activeKey: activeKeyState,
    className: className ? className : 'mt-4',
    id: "accordion"
  }, children && children, (data || []).map(function (_ref2, key) {
    var _fields$photo$alt;
    var fields = _ref2.fields;
    var className = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      'accordion-card border-top sz-border-1': borderTop && key === 0,
      'accordion-card border-bottom sz-border-1': borderBottom,
      'accordion-table px-3 px-md-0 border-table': !borderBottom && isTable,
      'accordion-card accordion-steps': isSteps || isHistory,
      'rounded-3': isHistory,
      'bg-gray-100': isTable && "".concat(key) === activeKeyState,
      'accordion-card': isNotif
    });
    var headerClassNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()('p-0', {
      'pr-1': !isTable,
      'pr-0': isTable
    });
    var bodyClassNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      'pl-1 pb-4': !isTable && !isNotif,
      'pb-2': isNotif,
      'px-md-5 pt-2 pb-4': isTable,
      'px-3 px-lg-5': isSteps,
      'px-3 px-lg-4.5': isHistory
    });
    var text = isMobile ? fields.short_text : fields.long_text;
    var decoratedOnClick = function decoratedOnClick() {
      var handleActiveKey = function handleActiveKey() {
        var newActive = "".concat(key) === activeKeyState ? null : "".concat(key);
        if (onClick) {
          onClick(newActive);
        }
        return newActive;
      };
      if (!toggle) {
        handleActiveKey = function handleActiveKey(prev) {
          var newList = _toConsumableArray(prev);
          var index = newList.indexOf("".concat(key));
          if (index > -1) {
            newList.splice(index, 1);
          } else {
            newList.push("".concat(key));
          }
          if (onClick) {
            onClick(newList);
          }
          return newList;
        };
      }
      setActiveKey(handleActiveKey);
    };
    var StepHeader = function StepHeader() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rounded-circle bg-step-number px-3 py-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
        variant: isMobile ? 'body' : 'H3',
        weight: isMobile ? 'bold' : 'medium',
        size: isMobile ? 'M' : 'L',
        className: "step-number mb-0"
      }, key + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
        variant: "H3",
        weight: "medium",
        size: "L",
        className: "ml-3 mb-0"
      }, fields.title));
    };
    var HeaderHistory = function HeaderHistory() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
        className: "m-0 ml-lg-3 text-dark"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
        noWrap: true,
        content: fields.title
      }));
    };
    var DefaultHeader = function DefaultHeader() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
        variant: "H3",
        align: "left",
        className: "m-0",
        size: "M",
        weight: "medium"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
        noWrap: true,
        content: fields.title
      }));
    };
    var InitHeader = function InitHeader(_ref3) {
      var isTable = _ref3.isTable,
        title = _ref3.title,
        isSteps = _ref3.isSteps,
        isHistory = _ref3.isHistory;
      if (isTable) {
        return title;
      }
      if (isSteps) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StepHeader, null);
      }
      if (isHistory) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderHistory, null);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultHeader, null);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: className,
      key: "accordion-card-".concat(key)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      className: headerClassNames,
      id: "heading-".concat(key)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomToggle, {
      activeKeyState: activeKeyState,
      eventKey: "".concat(key),
      decoratedOnClick: decoratedOnClick,
      buttonArrow: buttonArrow,
      isFaq: isFaq,
      btnChildren: btnChildren,
      isTable: isTable,
      isSteps: isSteps
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InitHeader, {
      isTable: isTable,
      title: fields.title,
      isSteps: isSteps,
      isHistory: isHistory
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Collapse, {
      eventKey: "".concat(key),
      id: "collapse-".concat(key),
      "aria-labelledby": "heading-".concat(key),
      "data-parent": "#accordion"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      className: bodyClassNames
    }, fields.content && fields.content, text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
      size: "XL",
      className: "text-dark pr-5",
      tag: "div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
      noWrap: true,
      content: text
    })), fields.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
      noWrap: true,
      transform: transform,
      content: fields.description
    }), fields.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      alignIcon: "right",
      className: "px-0",
      icon: "keyboard-arrow-right",
      to: fields.link[0]
    }, fields.link[1]), fields.btn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "outlined",
      className: "rounded-1",
      to: fields.btn.link
    }, fields.btn.label), fields.photo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 mt-3 p-0 rounded-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "d-block w-100",
      src: fields.photo.src,
      alt: (_fields$photo$alt = fields.photo.alt) !== null && _fields$photo$alt !== void 0 ? _fields$photo$alt : ''
    })), fields.tips && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Tips__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "mt-3"
    }, fields.tips))));
  }));
}
var CustomToggle = function CustomToggle(_ref4) {
  var eventKey = _ref4.eventKey,
    activeKeyState = _ref4.activeKeyState,
    children = _ref4.children,
    decoratedOnClick = _ref4.decoratedOnClick,
    buttonArrow = _ref4.buttonArrow,
    isFaq = _ref4.isFaq,
    isTable = _ref4.isTable,
    isSteps = _ref4.isSteps,
    btnChildren = _ref4.btnChildren;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var setCurrentEventKey = function setCurrentEventKey(activeKeyState, eventKey) {
    if (Array.isArray(activeKeyState)) {
      return activeKeyState.includes(eventKey);
    }
    return activeKeyState === eventKey;
  };
  var isCurrentEventKey = setCurrentEventKey(activeKeyState, eventKey);
  var accordionButtonClassNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()('accordion-button', {
    'accordion-faq': isFaq,
    'accordion-notif': !isFaq && !isTable && !isSteps,
    'accordion-table': isTable,
    'accordion-steps-button': isSteps,
    active: isCurrentEventKey
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: accordionButtonClassNames,
    onClick: decoratedOnClick,
    "data-toggle": "collapse",
    "data-target": "#collapse-".concat(eventKey),
    "aria-expanded": isCurrentEventKey,
    "aria-controls": "#collapse-".concat(eventKey),
    tabIndex: "-1"
  }, children, btnChildren, buttonArrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    variant: "text",
    small: true,
    icon: isCurrentEventKey ? 'arrow-up-1' : 'arrow-down-1',
    className: "ml-auto",
    "aria-label": isCurrentEventKey ? t('aria.close-collapse') : t('aria.open-collapse')
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzButton"], {
    variant: "contained",
    border: "rounded",
    className: "ml-auto",
    small: true,
    "aria-label": isCurrentEventKey ? t('aria.close-collapse') : t('aria.open-collapse')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: 22,
    src: isCurrentEventKey ? _img_minus_svg__WEBPACK_IMPORTED_MODULE_11__["default"] : _img_plus_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: ""
  })));
};

/***/ }),

/***/ "./assets/js/ez-components/modules/Tips.jsx":
/*!**************************************************!*\
  !*** ./assets/js/ez-components/modules/Tips.jsx ***!
  \**************************************************/
/*! exports provided: Separator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Separator", function() { return Separator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModuleTips; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _hooks_useInterweave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useInterweave */ "./assets/js/hooks/useInterweave.jsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _img_light_bulb_shine_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../img/light-bulb-shine.svg */ "./assets/img/light-bulb-shine.svg");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var TipsWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: ", ";\n"])), function (_ref) {
  var fullWidth = _ref.fullWidth;
  return fullWidth ? '100%' : '824px';
});
var Separator = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n"])), function (_ref2) {
  var horizontal = _ref2.horizontal;
  return !horizontal ? '2px' : 'inherit';
}, function (_ref3) {
  var horizontal = _ref3.horizontal;
  return horizontal ? '2px' : 'inherit';
});
function ModuleTips(_ref4) {
  var className = _ref4.className,
    children = _ref4.children,
    _ref4$variant = _ref4.variant,
    variant = _ref4$variant === void 0 ? 'info' : _ref4$variant,
    _ref4$isGoodToKnow = _ref4.isGoodToKnow,
    isGoodToKnow = _ref4$isGoodToKnow === void 0 ? true : _ref4$isGoodToKnow,
    borderRadius = _ref4.borderRadius,
    smallIconContainer = _ref4.smallIconContainer,
    iconSize = _ref4.iconSize,
    fullWidth = _ref4.fullWidth,
    smallPadding = _ref4.smallPadding;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _useInterweave = Object(_hooks_useInterweave__WEBPACK_IMPORTED_MODULE_7__["default"])(_constants__WEBPACK_IMPORTED_MODULE_6__["MODULES"].TIPS),
    transform = _useInterweave.transform;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__["useIsMobile"])();
  var classNames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('tips row no-gutters', className, borderRadius, {
    'bg-green-03': variant === 'success',
    'bg-blue-03': variant === 'info',
    'rounded-3': !borderRadius,
    'px-3 py-4': !smallPadding,
    'p-3': smallPadding
  });
  var separatorClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])({
    'bg-green-02': variant === 'success',
    'bg-blue-electric': variant === 'info'
  });
  var tipsIconContainerClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('tips-icon', {
    'col-12 col-sm-2': isMobile || !smallIconContainer
  });
  var widthMobile = 21;
  var widthDesktop = 40;
  var width = iconSize || (isMobile ? widthMobile : widthDesktop);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TipsWrapper, {
    className: classNames,
    fullWidth: fullWidth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: tipsIconContainerClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters align-items-center justify-content-center h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tips-icon d-flex flex-sm-column align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_light_bulb_shine_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
    width: width,
    alt: ""
  }), isGoodToKnow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_5__["SzTypographie"], {
    weight: "medium",
    size: "S",
    className: "ml-2 ml-sm-0 mb-0"
  }, t('tips'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Separator, {
    horizontal: true,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(separatorClasses, 'col ml-3 d-sm-none')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Separator, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(separatorClasses, 'd-none d-sm-block mx-3')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col tips-content py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["default"], {
    transform: transform,
    content: children,
    noWrap: true
  })));
}

/***/ })

}]);