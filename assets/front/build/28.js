(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./assets/js/components/Carousel/carousel.scss":
/*!*****************************************************!*\
  !*** ./assets/js/components/Carousel/carousel.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/Carousel/index.tsx":
/*!*************************************************!*\
  !*** ./assets/js/components/Carousel/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/dist/react-spring.esm.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel.scss */ "./assets/js/components/Carousel/carousel.scss");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_carousel_scss__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Carousel = function Carousel(_ref) {
  var data = _ref.data,
    children = _ref.children;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var itemSize = 300;
  var isMobile = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__["useIsMobile"])();
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
  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])(function () {
      return {
        config: {
          duration: 250
        },
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, handlers, {
    className: "carousel"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel__wrapper overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    style: {
      left: styles.left.to(function (value) {
        return "".concat(value, "px");
      }),
      position: 'relative'
    },
    className: "carousel__container d-inline-flex py-5 py-sm-4 px-0 px-sm-5"
  }, data.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "carousel__item px-3",
      key: "carousel__item".concat(key)
    }, children(item));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel__nav d-flex d-md-block justify-content-center pl-0 pr-4 pl-sm-5 pr-sm-0 ml-0 ml-sm-3 my-3"
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
};
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./assets/js/components/ecoWater/EcoWaterCard.tsx":
/*!********************************************************!*\
  !*** ./assets/js/components/ecoWater/EcoWaterCard.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_masonry_masonry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/masonry/masonry.scss */ "./assets/js/components/masonry/masonry.scss");
/* harmony import */ var _app_components_masonry_masonry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_components_masonry_masonry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_Badge_EcoPlanetBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/Badge/EcoPlanetBadge */ "./assets/js/components/Badge/EcoPlanetBadge.tsx");
/* harmony import */ var _app_icons_EuroIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/icons/EuroIcon */ "./assets/js/icons/EuroIcon.tsx");
/* harmony import */ var _app_components_Badge_EcoGestBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/Badge/EcoGestBadge */ "./assets/js/components/Badge/EcoGestBadge.tsx");
/* harmony import */ var _app_icons_WaterDropIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/icons/WaterDropIcon */ "./assets/js/icons/WaterDropIcon.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_hooks_useToRedirect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks/useToRedirect */ "./assets/js/hooks/useToRedirect.ts");
/* harmony import */ var _assets_js_services_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/js/services/Utils */ "./assets/js/services/Utils.js");
/* harmony import */ var _eco_water_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eco-water.scss */ "./assets/js/components/ecoWater/eco-water.scss");
/* harmony import */ var _eco_water_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eco_water_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");












var EcoWaterCard = function EcoWaterCard(_ref) {
  var photo = _ref.photo,
    title = _ref.title,
    type = _ref.type,
    scale = _ref.scale,
    link = _ref.link;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation.t;
  var _useToRedirect = Object(_app_hooks_useToRedirect__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    toRedirect = _useToRedirect.toRedirect;
  var formattedTitle = Object(_assets_js_services_Utils__WEBPACK_IMPORTED_MODULE_9__["strToDashLowerCase"])(title);
  var ecoWaterCardDataCy = "eco-card-btn-".concat(formattedTitle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-2 bg-white shadow-sm overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eco-water-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eco-water-card-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: photo === null || photo === void 0 ? void 0 : photo.url,
    alt: photo === null || photo === void 0 ? void 0 : photo.alt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center pb-3"
  }, type === _app_constants__WEBPACK_IMPORTED_MODULE_11__["TEMPLATES"].ECOPLANETE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Badge_EcoPlanetBadge__WEBPACK_IMPORTED_MODULE_3__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Badge_EcoGestBadge__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "separator mx-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center fw-bold"
  }, Array.from({
    length: 3
  }, function (_, i) {
    return type === _app_constants__WEBPACK_IMPORTED_MODULE_11__["TEMPLATES"].ECOPLANETE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_icons_WaterDropIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      color: i < scale ? 'black' : '#DEE2E6'
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_icons_EuroIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      color: i < scale ? 'black' : '#DEE2E6'
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "mb-0",
    variant: "H3",
    size: "L",
    weight: "medium"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    onClick: function onClick() {
      return link ? toRedirect(link) : null;
    },
    variant: "text",
    icon: "keyboard-arrow-right",
    alignIcon: "right",
    "data-cy": ecoWaterCardDataCy,
    small: true,
    className: "text-small mt-1"
  }, t('ecoGeste.read')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-bar",
    style: {
      background: type === _app_constants__WEBPACK_IMPORTED_MODULE_11__["TEMPLATES"].ECOPLANETE ? '#AADC14' : '#C65BAB'
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (EcoWaterCard);

/***/ }),

/***/ "./assets/js/components/ecoWater/EcoWaterLame.tsx":
/*!********************************************************!*\
  !*** ./assets/js/components/ecoWater/EcoWaterLame.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _EcoWaterCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EcoWaterCard */ "./assets/js/components/ecoWater/EcoWaterCard.tsx");
/* harmony import */ var _app_components_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/Carousel */ "./assets/js/components/Carousel/index.tsx");






var EcoWaterLame = function EcoWaterLame(_ref) {
  var title = _ref.title,
    description = _ref.description,
    button = _ref.button,
    cards = _ref.cards;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'col-12 col-sm-4 pr-3 pr-sm-0 pt-3',
    style: {
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H1",
    size: "L"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
    noWrap: true,
    content: title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    size: "XL",
    className: "text-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
    noWrap: true,
    content: description
  }))), button && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzButton"], {
    variant: "contained",
    border: "soft",
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: button[0],
    className: "text-decoration-none text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
    noWrap: true,
    content: button[1]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: cards
  }, function (item) {
    var formattedTitle = item.title.toLowerCase().replace(/\s+/g, '-');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      to: item.link[0],
      className: "text-decoration-none d-flex h-100",
      "data-cy": "card-lame-".concat(formattedTitle)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EcoWaterCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: item.title,
      photo: item.photo,
      type: item.type,
      scale: item.scale,
      link: item.link
    }));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (EcoWaterLame);

/***/ }),

/***/ "./assets/js/components/ecoWater/eco-water.scss":
/*!******************************************************!*\
  !*** ./assets/js/components/ecoWater/eco-water.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);