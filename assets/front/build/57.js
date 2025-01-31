(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./assets/img/icons/house.svg":
/*!************************************!*\
  !*** ./assets/img/icons/house.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/house.svg");

/***/ }),

/***/ "./assets/img/page-404/4.svg":
/*!***********************************!*\
  !*** ./assets/img/page-404/4.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/4.svg");

/***/ }),

/***/ "./assets/img/page-404/commune-kid.png":
/*!*********************************************!*\
  !*** ./assets/img/page-404/commune-kid.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/commune-kid.png");

/***/ }),

/***/ "./assets/js/pages/error/NotFound.tsx":
/*!********************************************!*\
  !*** ./assets/js/pages/error/NotFound.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_components_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/Box */ "./assets/js/components/Box/index.jsx");
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/hooks/useResponsive */ "./assets/js/hooks/useResponsive.ts");
/* harmony import */ var _NotFoundImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NotFoundImg */ "./assets/js/pages/error/NotFoundImg.tsx");
/* harmony import */ var _img_icons_house_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @img/icons/house.svg */ "./assets/img/icons/house.svg");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _not_found_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found.scss */ "./assets/js/pages/error/not-found.scss");
/* harmony import */ var _not_found_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_not_found_scss__WEBPACK_IMPORTED_MODULE_12__);













function NotFound() {
  var _a;
  var isMobile = Object(_app_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_8__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
    t = _useTranslation.t;
  var _ref = ((_a = window.tsme_data) === null || _a === void 0 ? void 0 : _a.notFoundPage) || {},
    image = _ref.image,
    title = _ref.title,
    cards = _ref.cards,
    description = _ref.description;
  var boxClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('shadow-sm mb-3', {
    'mr-3': !isMobile,
    'h-100': isMobile
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tag: "main",
    id: "404-page",
    className: "overflow-x-clip px-0 pb-md-md",
    fullscreen: true,
    minHeight: !isMobile ? 'calc(-196px + 100vh)' : 'initial'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tsme-container pt-0 pt-lg-6 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-lg-row px-0 align-items-center align-items-md-start align-items-xl-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-9 col-xl-7 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-container mb-4 mb-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-8 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H2",
    size: "XL",
    weight: "bold",
    tag: "h1"
  }, title || t('errors.404.title_default'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-10 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "XL",
    weight: "regular",
    tag: "span"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
    content: description || t('errors.404.description_default')
  })))), cards && cards.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters d-flex flex-wrap"
  }, cards.map(function (_ref2) {
    var label = _ref2.label,
      url = _ref2.url,
      picto = _ref2.picto;
    var formattedID = "redirect-".concat(label.toLowerCase().replace(/\s+/g, '-'));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorLinkCard, {
      key: formattedID,
      className: boxClasses,
      url: url,
      id: formattedID,
      img: picto.url,
      alt: picto.alt || '',
      label: label
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorLinkCard, {
    className: boxClasses,
    url: _app_constants__WEBPACK_IMPORTED_MODULE_11__["ROUTES"].HOME,
    img: _img_icons_house_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "",
    label: t('errors.404.link_default'),
    id: "redirect-home"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "not-found-img-container col-12 col-lg-3 col-xl-5 mx-auto mx-lg-0 px-0 pl-xl-4 pr-xl-0 mt-5 mt-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotFoundImg__WEBPACK_IMPORTED_MODULE_9__["NotFoundImg"], {
    variableImg: image
  })))));
}
var ErrorLinkCard = function ErrorLinkCard(_ref3) {
  var url = _ref3.url,
    img = _ref3.img,
    alt = _ref3.alt,
    label = _ref3.label,
    className = _ref3.className,
    id = _ref3.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 mb-3 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backgroundColor: "white",
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    to: url,
    className: "d-flex align-items-center p-3 p-lg-4 cursor-pointer h-100",
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-gray-200 rounded-circle d-flex align-items-center justify-content-center p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    alt: alt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    className: "error-box-label text-dark ml-3 mb-0 mr-3 mr-sm-0",
    size: "XL"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzIcon"], {
    icon: "arrow-right-1",
    variant: "line",
    className: "error-card-icon"
  }))));
};

/***/ }),

/***/ "./assets/js/pages/error/NotFoundImg.tsx":
/*!***********************************************!*\
  !*** ./assets/js/pages/error/NotFoundImg.tsx ***!
  \***********************************************/
/*! exports provided: NotFoundImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundImg", function() { return NotFoundImg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_page_404_4_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @img/page-404/4.svg */ "./assets/img/page-404/4.svg");
/* harmony import */ var _img_page_404_commune_kid_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @img/page-404/commune-kid.png */ "./assets/img/page-404/commune-kid.png");
/* harmony import */ var _app_components_Bubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/Bubble */ "./assets/js/components/Bubble/index.jsx");




var NotFoundImg = function NotFoundImg(_ref) {
  var variableImg = _ref.variableImg;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "not-found-img position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "bg-img-1",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Bubble__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "green",
    size: "md",
    position: "34"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Bubble__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "light",
    size: "lg",
    position: "33"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Bubble__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "dark",
    size: "sm",
    position: "35"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_page_404_4_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "",
    className: "four"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: variableImg && (variableImg === null || variableImg === void 0 ? void 0 : variableImg.url) ? variableImg.url : _img_page_404_commune_kid_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: variableImg && (variableImg === null || variableImg === void 0 ? void 0 : variableImg.alt) ? variableImg.alt : '',
    className: "variable-img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_page_404_4_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "",
    className: "four overlay"
  })));
};

/***/ }),

/***/ "./assets/js/pages/error/not-found.scss":
/*!**********************************************!*\
  !*** ./assets/js/pages/error/not-found.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);