(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./assets/js/ez-components/EzCarousel/ez-carousel.scss":
/*!*************************************************************!*\
  !*** ./assets/js/ez-components/EzCarousel/ez-carousel.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/ez-components/EzCarousel/index.jsx":
/*!******************************************************!*\
  !*** ./assets/js/ez-components/EzCarousel/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/dist/react-spring.esm.js");
/* harmony import */ var _components_Links_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ez_carousel_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ez-carousel.scss */ "./assets/js/ez-components/EzCarousel/ez-carousel.scss");
/* harmony import */ var _ez_carousel_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ez_carousel_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function EzCarousel(_ref) {
  var data = _ref.data;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation.t;
  var itemSize = 300;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["useIsMobile"])();
  var defaultLeft = isMobile ? -10 : 0;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.length),
    _useState4 = _slicedToArray(_useState3, 1),
    dataLength = _useState4[0];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultLeft),
    _useState6 = _slicedToArray(_useState5, 2),
    prevLeft = _useState6[0],
    setPrevLeft = _useState6[1];
  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])(function () {
      return {
        config: {
          duration: 250
        },
        position: 'relative',
        left: defaultLeft,
        onRest: function onRest(_ref2) {
          var value = _ref2.value;
          setPrevLeft(value.left);
        }
      };
    }),
    _useSpring2 = _slicedToArray(_useSpring, 2),
    styles = _useSpring2[0],
    api = _useSpring2[1];
  var handlers = Object(react_swipeable__WEBPACK_IMPORTED_MODULE_2__["useSwipeable"])({
    trackMouse: true,
    onSwiped: function onSwiped(_ref3) {
      var dir = _ref3.dir;
      var newLeft = styles.left.get();
      var maxLeft = -Math.abs((data.length - 1) * itemSize);
      var lastItem = -(itemSize * (data.length - 1)) + defaultLeft;
      if (dir === 'Left') {
        // Swiping from last to first element
        if (newLeft <= maxLeft) {
          api.start({
            left: defaultLeft
          });
          setActive(1);
        } else if (prevLeft === 0 || newLeft < prevLeft) {
          api.start({
            left: -(itemSize * active) + defaultLeft
          });
          setActive(function (prev) {
            return prev + 1;
          });
        }
      }
      if (dir === 'Right') {
        // Swiping from first element to last one
        if (newLeft > defaultLeft) {
          api.start({
            left: lastItem
          });
          setActive(data.length);
        } else {
          // -2 because left start at 0 but active start at 1
          api.start({
            left: -(itemSize * (active - 2)) + defaultLeft
          });
          setActive(function (prev) {
            return prev - 1;
          });
        }
      }
    },
    onSwiping: function onSwiping(_ref4) {
      var dir = _ref4.dir,
        velocity = _ref4.velocity;
      var left = styles.left.get();
      var maxLeft = -Math.abs((data.length - 1) * itemSize);
      var bounceSize = isMobile ? 120 : 80;
      var baseSpeed = 115;
      if (dir === 'Left') {
        var newLeft = left - baseSpeed * velocity;
        if (maxLeft - bounceSize < newLeft) {
          api.start({
            left: newLeft
          });
        } else {
          api.start({
            left: maxLeft - bounceSize
          });
        }
      }
      if (dir === 'Right') {
        var _newLeft = left + baseSpeed * velocity;
        if (left < defaultLeft + bounceSize) {
          api.start({
            left: _newLeft
          });
        } else {
          api.start({
            left: defaultLeft + bounceSize
          });
        }
      }
    }
  });
  var handlePageChange = function handlePageChange(pageNumber) {
    var left = function left(page) {
      return -((page - 1) * itemSize) + defaultLeft;
    };
    setActive(function (prevPage) {
      if (prevPage === 1 && pageNumber === 1) {
        api.start({
          left: left(data.length)
        });
        return data.length;
      }
      if (prevPage === data.length && pageNumber === data.length) {
        api.start({
          left: defaultLeft
        });
        return 1;
      }
      api.start({
        left: left(pageNumber)
      });
      return pageNumber;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, handlers, {
    className: "tsme-carousel"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-carousel__wrapper overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    style: styles,
    className: "tsme-carousel__container d-inline-flex py-5 py-sm-4 px-0 px-sm-5"
  }, data.map(function (_ref5, key) {
    var fields = _ref5.fields;
    var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      tag: "h3",
      weight: "medium"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
      noWrap: true,
      content: fields.title
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tsme-carousel__item px-3",
      key: "tsme-carousel__item".concat(key)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      to: fields.link[0],
      className: "text-decoration-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
      background: fields.photo,
      title: title,
      imgProps: {
        draggable: 'false'
      },
      titleProps: {
        draggable: 'false',
        align: 'left',
        weight: 'medium'
      }
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-carousel__nav d-flex d-md-block justify-content-center pl-0 pr-4 pl-sm-5 pr-sm-0 ml-0 ml-sm-3 my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzPagination"], {
    totalItemsCount: dataLength,
    activePage: active,
    onChange: handlePageChange,
    itemsCountPerPage: 1,
    pageRangeDisplayed: 1,
    variant: "custom",
    aria: {
      prevLabel: t('aria.previous'),
      nextLabel: t('aria.next')
    }
  }))));
}

/***/ }),

/***/ "./assets/js/pages/home/home.scss":
/*!****************************************!*\
  !*** ./assets/js/pages/home/home.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/home/index.jsx":
/*!****************************************!*\
  !*** ./assets/js/pages/home/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var _ez_components_edmc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ez-components/edmc */ "./assets/js/ez-components/edmc/index.jsx");
/* harmony import */ var _ez_components_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ez-components/accordion */ "./assets/js/ez-components/accordion/index.jsx");
/* harmony import */ var _ez_components_EzCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ez-components/EzCarousel */ "./assets/js/ez-components/EzCarousel/index.jsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _components_Links_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Links/LinkBtn */ "./assets/js/components/Links/LinkBtn.jsx");
/* harmony import */ var _hooks_useGA__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useGA */ "./assets/js/hooks/useGA/index.ts");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _components_ecoWater_EcoWaterLame__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/ecoWater/EcoWaterLame */ "./assets/js/components/ecoWater/EcoWaterLame.tsx");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home.scss */ "./assets/js/pages/home/home.scss");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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

















var getBackground = function getBackground(color, defaultClassName) {
  return classnames__WEBPACK_IMPORTED_MODULE_3___default()('bg-' + color, defaultClassName);
};
function Intro(_ref) {
  var fields = _ref.fields,
    trio_shortcut = _ref.trio_shortcut;
  var _useGA = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    track = _useGA.track;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_14__["useIsMobile"])();
  var title = fields.title,
    image_desktop = fields.image_desktop,
    image_mobile = fields.image_mobile,
    alternative_text_desktop = fields.alternative_text_desktop,
    alternative_text_mobile = fields.alternative_text_mobile;
  var classes = function classes(key) {
    return classnames__WEBPACK_IMPORTED_MODULE_3___default()('trio-shortcut d-flex justify-content-start flex-column col-12 col-md-6 col-lg-4 px-3 py-4 pt-lg-4 pb-lg-5 px-md-4', {
      'col-sm-6': key < 2,
      'offset-sm-3 offset-md-0 col-sm-6 ml-auto mr-auto': key === 2
    });
  };
  var onClickTrio = function onClickTrio(sz_clic_home_3_choix_nom) {
    track('HOME_1', {
      sz_clic_home_3_choix_nom: sz_clic_home_3_choix_nom
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homepage-intro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: image_mobile,
    media: "(max-width: 767px)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: image_desktop,
    media: "(min-width: 768px)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "bg-homepage",
    src: image_desktop,
    alt: isMobile ? alternative_text_mobile : alternative_text_desktop
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container homepage-intro-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H1",
    size: isMobile ? 'L' : 'XL',
    className: "title-home text-uppercase text-center text-sm-left m-0",
    color: "white",
    weight: "black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    content: title
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container text-center py-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters bg-white position-relative",
    style: {
      minHeight: 285,
      borderRadius: '1rem',
      zIndex: 1
    }
  }, trio_shortcut.map(function (_ref2, key) {
    var fields = _ref2.fields;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: classes(key)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: fields.image,
      alt: "",
      style: {
        height: 40,
        margin: '0 auto 1rem'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      tag: "h2",
      variant: "H3",
      size: "L",
      weight: "medium"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
      noWrap: true,
      content: fields.title
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      className: "text-dark"
    }, fields.subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
      variant: "contained",
      border: "soft",
      className: "mt-auto mx-auto",
      to: fields.button[0],
      onClick: function onClick() {
        return onClickTrio(fields.title);
      }
    }, fields.button[1]));
  }))));
}
function Services(_ref3) {
  var background = _ref3.background,
    fields = _ref3.fields,
    link = _ref3.link;
  if (!fields) {
    return null;
  }
  var title = fields.title,
    text = fields.text,
    photo = fields.photo;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: getBackground(background, 'tsme-services')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container py-md-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-6 order-1 order-sm-0 mt-4 mt-sm-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: photo,
    alt: "",
    style: {
      borderRadius: '1rem',
      width: '100%'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 offset-sm-1 col-sm-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    content: title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    size: "XL",
    className: "text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    content: text
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row flex-column"
  }, link.map(function (_ref4, key) {
    var fields = _ref4.fields;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_LinkBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
      to: fields.link[0],
      icon: "keyboard-arrow-right",
      variant: "text",
      alignIcon: "right",
      key: "service-btn-".concat(key),
      className: " mr-auto text-decoration-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
      noWrap: true,
      content: fields.title
    }));
  }))))));
}
function Resources(_ref5) {
  var background = _ref5.background,
    fields = _ref5.fields,
    tile = _ref5.tile;
  var _useGA2 = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    track = _useGA2.track;
  if (!fields || !tile) {
    return null;
  }
  var title = fields.title,
    subtitle = fields.subtitle,
    button = fields.button;
  var onClickResources = function onClickResources() {
    track('HOME_4');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: getBackground(background, 'overflow-hidden position-relative')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-resources m-auto py-md-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: getBackground(background, 'col-12 col-sm-4 pr-3 pr-sm-0'),
    style: {
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    content: title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    size: "XL",
    className: "text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    content: subtitle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    border: "soft",
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_11__["default"], {
    to: button[0],
    onClick: onClickResources,
    className: "text-decoration-none text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    content: button[1]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_EzCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: tile
  })))));
}
function EcoGeste(_ref6) {
  var background = _ref6.background,
    fields = _ref6.fields,
    tile = _ref6.tile;
  if (!fields || !tile) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: getBackground(background, 'overflow-hidden position-relative')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-resources m-auto py-md-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ecoWater_EcoWaterLame__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: fields.title,
    description: fields.description,
    button: fields.button,
    cards: tile.map(function (item) {
      return _objectSpread({}, item.fields);
    })
  })));
}
function Actus(_ref7) {
  var background = _ref7.background,
    title = _ref7.title,
    items = _ref7.items;
  if (!items || items.length === 0) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: getBackground(background, 'position-relative')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container py-md-lg text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    content: title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-actus mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-md-center"
  }, items === null || items === void 0 ? void 0 : items.map(function (_ref8, key) {
    var description = _ref8.description,
      photo = _ref8.photo,
      title = _ref8.title,
      link = _ref8.link;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: link,
      key: title,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('text-decoration-none col-12 col-sm-6 col-md-4 mt-5', {
        'mt-xs-0': 0 < key
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzCard"], {
      background: photo,
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
        tag: "h3",
        weight: "medium"
      }, title),
      titleProps: {
        weight: 'medium',
        className: 'actu-title'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      align: "center",
      className: "actu-description text-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
      content: description,
      noHtml: true
    })))));
  })))));
}
function FAQ(_ref9) {
  var background = _ref9.background,
    item = _ref9.item,
    fields = _ref9.fields;
  var _useGA3 = Object(_hooks_useGA__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    track = _useGA3.track;
  if (!item || !fields) {
    return null;
  }
  var title = fields.title,
    button = fields.button;
  var onClickFAQ = function onClickFAQ() {
    track('HOME_5');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: getBackground(background, 'position-relative')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container py-md-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    content: title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_accordion__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: item,
    isFaq: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    className: "mt-4",
    border: "soft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Links_Link__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "text-decoration-none text-white",
    to: button[0],
    onClick: onClickFAQ
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    noWrap: true,
    content: button[1]
  })))));
}
function Home() {
  var defaultData = window.tsme_data.lameContents || {};
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultData),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])('HomeQuery', function () {
    return _services_AxiosInstance__WEBPACK_IMPORTED_MODULE_6__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_5__["API"].HOMEPAGE_LAMES);
  }, {
    onSuccess: function onSuccess(_ref10) {
      var data = _ref10.data;
      var lameContents = data.lameContents;
      window.tsme_data.lameContents = lameContents;
      setData(lameContents);
    },
    enabled: !window.tsme_data.lameContents
  });
  var calcHeight = Object.keys(data).length === 1;
  var PageContent = Object.entries(data).map(function (_ref11, index) {
    var _ref12 = _slicedToArray(_ref11, 2),
      lameKey = _ref12[0],
      lameValues = _ref12[1];
    var background = index % 2 > 0 ? 'white' : 'light';
    var lameProps = _objectSpread({
      background: background
    }, lameValues);
    switch (lameKey) {
      case 'lame_home_trio':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: lameKey
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Intro, lameProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_components_edmc__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
          calcHeight: calcHeight
        }, lameProps)));
      case 'lame_home_service':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Services, _extends({
          key: lameKey
        }, lameProps));
      case 'lame_home_ressource':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Resources, _extends({
          key: lameKey
        }, lameProps));
      case 'lame_home_eco_geste':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EcoGeste, _extends({
          key: lameKey
        }, lameProps));
      case 'lame_home_actu':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Actus, _extends({
          key: lameKey
        }, lameProps));
      case 'lame_home_accordeon':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FAQ, _extends({
          key: lameKey
        }, lameProps));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "containerHome",
    tag: "main",
    className: "homepage p-0",
    fullscreen: true
  }, PageContent);
}

/***/ })

}]);