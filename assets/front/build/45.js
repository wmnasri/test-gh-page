(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./assets/js/components/SelectorItems/SelectorItems.scss":
/*!***************************************************************!*\
  !*** ./assets/js/components/SelectorItems/SelectorItems.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/SelectorItems/hooks/SelectorItem.ts":
/*!******************************************************************!*\
  !*** ./assets/js/components/SelectorItems/hooks/SelectorItem.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSelectorItem; });
function useSelectorItem(_ref) {
  var listRef = _ref.listRef,
    setIsHovered = _ref.setIsHovered,
    scroll = _ref.scroll,
    isOpen = _ref.isOpen,
    setIsOpen = _ref.setIsOpen;
  var makeScrollList = function makeScrollList(index) {
    var itemList = document.querySelectorAll('.list-contract-item');
    var elementTop = itemList[index].offsetTop;
    scroll(elementTop, listRef.current);
  };
  var onMouseOver = function onMouseOver(type, key) {
    var isEntering = type === 'enter';
    setIsHovered(isEntering ? key : null);
  };
  var selectPrevItem = function selectPrevItem(items) {
    setIsHovered(function (prev) {
      var index;
      if (!prev) {
        index = items.length - 1;
      } else if (prev === items.length - 1) {
        index = prev - 1;
      } else {
        index = prev - 1;
      }
      makeScrollList(index);
      return index;
    });
  };
  var selectNextItem = function selectNextItem(items) {
    setIsHovered(function (prev) {
      var index;
      if (prev === null) {
        index = 0;
      } else if (prev + 1 === items.length) {
        index = 0;
      } else {
        index = prev + 1;
      }
      makeScrollList(index);
      return index;
    });
  };
  var eventHandler = function eventHandler(e, items) {
    var keyCode = e.keyCode;
    if (isOpen) {
      // Escape
      if (keyCode === 27) {
        setIsOpen(false);
      }
      // Arrow down
      if (keyCode === 40) {
        selectNextItem(items);
      }
      // Arrow up
      if (keyCode === 38) {
        selectPrevItem(items);
      }
      if (keyCode === 9) {
        e.preventDefault();
        selectNextItem(items);
      }
    }
  };
  return {
    eventHandler: eventHandler,
    onMouseOver: onMouseOver
  };
}

/***/ }),

/***/ "./assets/js/components/SelectorItems/index.tsx":
/*!******************************************************!*\
  !*** ./assets/js/components/SelectorItems/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectorItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ahooks */ "./node_modules/ahooks/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks/useScrollTo */ "./assets/js/hooks/useScrollTo.js");
/* harmony import */ var _img_check_circle_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @img/check-circle-1.svg */ "./assets/img/check-circle-1.svg");
/* harmony import */ var _app_ez_components_ContractSelector_ContractSelector_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/ez-components/ContractSelector/ContractSelector.scss */ "./assets/js/ez-components/ContractSelector/ContractSelector.scss");
/* harmony import */ var _app_ez_components_ContractSelector_ContractSelector_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_ez_components_ContractSelector_ContractSelector_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SelectorItems_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectorItems.scss */ "./assets/js/components/SelectorItems/SelectorItems.scss");
/* harmony import */ var _SelectorItems_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SelectorItems_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_SelectorItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/SelectorItem */ "./assets/js/components/SelectorItems/hooks/SelectorItem.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function SelectorItems(_ref) {
  var className = _ref.className,
    btnId = _ref.btnId,
    displayItems = _ref.displayItems,
    items = _ref.items,
    getTitle = _ref.getTitle,
    actionItem = _ref.actionItem,
    loader = _ref.loader;
  var contractSelectorClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('selector-contract position-relative', className);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState4 = _slicedToArray(_useState3, 2),
    isHovered = _useState4[0],
    setIsHovered = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    _useState6 = _slicedToArray(_useState5, 2),
    isSelected = _useState6[0],
    setIsSelected = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(items),
    _useState8 = _slicedToArray(_useState7, 1),
    currentItems = _useState8[0];
  var listRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var scroll = Object(_app_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var _useSelectorItem = Object(_hooks_SelectorItem__WEBPACK_IMPORTED_MODULE_8__["default"])({
      listRef: listRef,
      setIsHovered: setIsHovered,
      scroll: scroll,
      isOpen: isOpen,
      setIsOpen: setIsOpen
    }),
    eventHandler = _useSelectorItem.eventHandler,
    onMouseOver = _useSelectorItem.onMouseOver;
  var btnElement = document.getElementById(btnId);
  var onClickAway = function onClickAway() {
    setIsOpen(false);
  };
  Object(ahooks__WEBPACK_IMPORTED_MODULE_1__["useClickAway"])(onClickAway, [btnElement, listRef]);
  var eventHand = function eventHand(e) {
    eventHandler(e, currentItems);
  };
  Object(ahooks__WEBPACK_IMPORTED_MODULE_1__["useKeyPress"])(['uparrow', 'downarrow', 'esc', 'tab'], eventHand);
  var openList = function openList() {
    setIsOpen(function (prev) {
      return !prev;
    });
  };
  var _selectItem = function selectItem(key, item) {
    setIsSelected(key);
    actionItem(item);
  };
  var updateItems = function updateItems(itemKey, itemSelected) {
    currentItems.splice(itemKey, 1);
    currentItems.unshift(itemSelected);
    setIsOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: contractSelectorClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], {
    icon: "arrow-down-1",
    onClick: openList,
    variant: "outlined",
    border: "rounded",
    alignIcon: "right",
    className: "contract-btn text-white ",
    "data-cy": "contract-selector-btn",
    id: btnId
  }, getTitle(currentItems[0])), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: listRef,
    className: "selector-contract-modal bg-white shadow rounded-1 position-absolute"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-contract rounded-1 position-relative"
  }, currentItems.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItems, {
      key: "list-item-".concat(key),
      itemKey: key,
      isCurrentItem: key === 0,
      onMouseOver: onMouseOver,
      updateItems: updateItems,
      item: item,
      isHovered: isHovered,
      selectItem: function selectItem() {
        _selectItem(key, item);
      },
      isLoading: loader && isSelected === key,
      displayItems: displayItems
    });
  }))));
}
function ListItems(_ref2) {
  var itemKey = _ref2.itemKey,
    onMouseOver = _ref2.onMouseOver,
    isCurrentItem = _ref2.isCurrentItem,
    item = _ref2.item,
    updateItems = _ref2.updateItems,
    selectItem = _ref2.selectItem,
    isHovered = _ref2.isHovered,
    isLoading = _ref2.isLoading,
    displayItems = _ref2.displayItems;
  var itemClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('list-contract-item position-relative border-bottom sz-border-1 d-flex p-3', {
    hovered: isHovered === itemKey,
    active: true
  });
  var onClick = function onClick() {
    if (!isCurrentItem) {
      updateItems(itemKey, item);
      selectItem(itemKey, item);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: itemClasses,
    onClick: onClick,
    role: "button",
    onKeyPress: onClick,
    onMouseEnter: function onMouseEnter() {
      return onMouseOver('enter', itemKey);
    },
    onMouseLeave: function onMouseLeave() {
      return onMouseOver('leave', itemKey);
    }
  }, displayItems(item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-contract-item-status d-flex flex-column ml-auto"
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzSpinner"], {
    className: "list-contract-item-spinner align-self-end"
  }), isCurrentItem && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-contract-item-selected align-self-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_check_circle_1_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: ""
  }))));
}

/***/ }),

/***/ "./assets/js/components/ecoWater/EcoWaterLameSkeleton.tsx":
/*!****************************************************************!*\
  !*** ./assets/js/components/ecoWater/EcoWaterLameSkeleton.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


var SkeletonCard = function SkeletonCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 150
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 20,
    width: "80%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 15,
    width: "60%",
    style: {
      marginTop: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 2,
    width: "100%",
    style: {
      marginTop: '10px'
    }
  })));
};
var EcoWaterLameSkeleton = function EcoWaterLameSkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-4 pr-3 pr-sm-0 pt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 25,
    width: '80%'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 25,
    width: '40%'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 10,
    width: '80%'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 10,
    width: '80%'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 10,
    width: '80%'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 10,
    width: '80%'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 10,
    width: '40%'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-50 ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkeletonCard, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-50  ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkeletonCard, null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (EcoWaterLameSkeleton);

/***/ }),

/***/ "./assets/js/components/masonry/MasonryCard.tsx":
/*!******************************************************!*\
  !*** ./assets/js/components/masonry/MasonryCard.tsx ***!
  \******************************************************/
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
/* harmony import */ var _app_components_Links_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/Links/Link */ "./assets/js/components/Links/Link.jsx");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");











var MasonryCard = function MasonryCard(_ref) {
  var image = _ref.image,
    title = _ref.title,
    context = _ref.context,
    scale = _ref.scale,
    link = _ref.link;
  var _a;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
    t = _useTranslation.t;
  var _useToRedirect = Object(_app_hooks_useToRedirect__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    toRedirect = _useToRedirect.toRedirect;
  var formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
  var card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry-card border-0 rounded-2 shadow-sm border-bottom border-bottom-gray bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry-card-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image.src,
    alt: (_a = image.alt) !== null && _a !== void 0 ? _a : 'Eco-Geste image',
    className: "curved-image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " text-center px-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center pb-3"
  }, context === _app_constants__WEBPACK_IMPORTED_MODULE_10__["TEMPLATES"].ECOPLANETE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Badge_EcoPlanetBadge__WEBPACK_IMPORTED_MODULE_3__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Badge_EcoGestBadge__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "separator mx-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center fw-bold"
  }, Array.from({
    length: 3
  }, function (_, i) {
    return context === _app_constants__WEBPACK_IMPORTED_MODULE_10__["TEMPLATES"].ECOPLANETE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_icons_WaterDropIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      color: i < scale ? 'black' : '#DEE2E6'
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_icons_EuroIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      color: i < scale ? 'black' : '#DEE2E6'
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "text-dark mb-0",
    variant: "H1"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    onClick: function onClick() {
      return link ? toRedirect(link) : null;
    },
    variant: "text",
    icon: "keyboard-arrow-right",
    alignIcon: "right",
    "data-cy": "edmc-dashboard-button",
    small: true,
    className: "text-small mt-1"
  }, t('ecoGeste.read')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-bar w-100",
    style: {
      background: context === _app_constants__WEBPACK_IMPORTED_MODULE_10__["TEMPLATES"].ECOPLANETE ? '#AADC14' : '#C65BAB'
    }
  }));
  return link ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Links_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    to: link,
    className: "text-decoration-none d-flex h-100",
    "data-cy": "card-".concat(formattedTitle)
  }, card) : card;
};
/* harmony default export */ __webpack_exports__["default"] = (MasonryCard);

/***/ }),

/***/ "./assets/js/components/masonry/MasonryEcoGeste.tsx":
/*!**********************************************************!*\
  !*** ./assets/js/components/masonry/MasonryEcoGeste.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_masonry_MasonryFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/masonry/MasonryFilter */ "./assets/js/components/masonry/MasonryFilter.tsx");
/* harmony import */ var _app_components_masonry_MasonryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/masonry/MasonryCard */ "./assets/js/components/masonry/MasonryCard.tsx");
/* harmony import */ var _app_components_masonry_MasonryInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/masonry/MasonryInfo */ "./assets/js/components/masonry/MasonryInfo.tsx");
/* harmony import */ var _app_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/icons/PlusIcon */ "./assets/js/icons/PlusIcon.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-responsive-masonry */ "./node_modules/react-responsive-masonry/es/index.js");
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








var MasonryEcoGeste = function MasonryEcoGeste(_ref) {
  var title = _ref.title,
    dataCard = _ref.dataCard,
    dataWaterInfo = _ref.dataWaterInfo,
    filterBy = _ref.filterBy,
    sortBy = _ref.sortBy,
    isError = _ref.isError;
  var _a, _b;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dataCard || []),
    _useState2 = _slicedToArray(_useState, 2),
    filteredData = _useState2[0],
    setFilteredData = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dataWaterInfo || []),
    _useState4 = _slicedToArray(_useState3, 2),
    waterInfoData = _useState4[0],
    setWaterInfoData = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(sortBy === null || sortBy === void 0 ? void 0 : sortBy[0]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedSort = _useState8[0],
    setSelectedSort = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
    _useState10 = _slicedToArray(_useState9, 2),
    refreshKey = _useState10[0],
    setRefreshKey = _useState10[1]; //Force la mise à jour de Masonry
  var pageSize = 12;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setFilteredData((dataCard === null || dataCard === void 0 ? void 0 : dataCard.sort(function (a, b) {
      var dateA = new Date(a.date || '');
      var dateB = new Date(b.date || '');
      if (a.date !== b.date) {
        return dateB.getTime() - dateA.getTime();
      }
      return b.scale - a.scale;
    })) || []);
    setRefreshKey(function (prev) {
      return prev + 1;
    });
  }, [dataCard]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setWaterInfoData(dataWaterInfo || []);
    setRefreshKey(function (prev) {
      return prev + 1;
    });
  }, [dataWaterInfo]);
  var dataFilter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!filterBy) return ['all'];
    var values = [];
    dataCard === null || dataCard === void 0 ? void 0 : dataCard.forEach(function (card) {
      var value = card[filterBy];
      if (value !== undefined) {
        if (typeof value === 'string') {
          values.push(value);
        } else if (Array.isArray(value)) {
          value.forEach(function (item) {
            if (typeof item === 'string') values.push(item);
          });
        }
      }
    });
    return Array.from(new Set(values));
  }, [dataCard, filterBy]);
  var applySorting = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, sort) {
    if (!sort) {
      return data;
    }
    return _toConsumableArray(data).sort(function (a, b) {
      var dateA = new Date(a.date || '');
      var dateB = new Date(b.date || '');
      if (sort.key === 'date') {
        if (a.date !== b.date) {
          return dateB.getTime() - dateA.getTime();
        }
        return b.scale - a.scale;
      } else if (sort.key === 'scale') {
        if (a.scale !== b.scale) {
          return b.scale - a.scale;
        }
        return dateB.getTime() - dateA.getTime();
      }
      return 0;
    });
  }, []);
  var onSort = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    setSelectedSort(value);
    setFilteredData(function (prev) {
      return applySorting(prev, value);
    });
    setCurrentPage(1);
  }, [applySorting]);
  var onFilter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values) {
    if (!dataCard || !filterBy) {
      setFilteredData([]);
      return;
    }
    var filtered;
    if (values.length === 1 && values[0] === 'all') {
      filtered = dataCard;
    } else {
      var activeFilters = values.filter(function (value) {
        return value !== 'all';
      });
      filtered = dataCard.filter(function (card) {
        var value = card[filterBy];
        if (typeof value === 'string') {
          return activeFilters.includes(value);
        } else if (Array.isArray(value)) {
          return value.some(function (item) {
            return activeFilters.includes(item);
          });
        }
        return false;
      });
    }
    setFilteredData(applySorting(filtered, selectedSort));
    setCurrentPage(1);
  }, [dataCard, filterBy, selectedSort, applySorting]);
  var cards = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var start = 0;
    var end = currentPage * pageSize;
    var resultList = [];
    var infEauIndex = 0;
    for (var i = 0; i < (filteredData === null || filteredData === void 0 ? void 0 : filteredData.length); i++) {
      resultList.push(filteredData[i]);
      // Insérer une carte Inf’Eau à la 2ème position puis toutes les 5 positions
      if (resultList.length === 1 || resultList.length > 2 && (resultList.length - 1) % 5 === 0) {
        if (waterInfoData && infEauIndex < waterInfoData.length) {
          resultList.push(waterInfoData[infEauIndex]);
          infEauIndex++;
        }
      }
    }
    return resultList === null || resultList === void 0 ? void 0 : resultList.slice(start, end);
  }, [filteredData, pageSize, currentPage, waterInfoData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-transparent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-wrap align-items-center justify-content-center text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "H1",
    size: "L",
    tag: "h2"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_MasonryFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: dataFilter,
    sortByItems: sortBy,
    onFilter: onFilter,
    onSort: onSort
  })), isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "error-masonry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    variant: "body",
    size: "XL",
    weight: "regular",
    className: "mt-3 mt-lg-4"
  }, t('ecoGeste.error_masonry'))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_7__["ResponsiveMasonry"], {
    key: refreshKey,
    columnsCountBreakPoints: {
      345: 1,
      769: 3,
      1024: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sequential: true,
    className: "custom-masonry"
  }, cards === null || cards === void 0 ? void 0 : cards.map(function (item, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: idx,
      className: "masonry-item w-100"
    }, 'response' in item ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_MasonryInfo__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, item)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_MasonryCard__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, item)));
  }))), cards && currentPage * pageSize < ((_a = filteredData === null || filteredData === void 0 ? void 0 : filteredData.length) !== null && _a !== void 0 ? _a : 0) + ((_b = dataWaterInfo === null || dataWaterInfo === void 0 ? void 0 : dataWaterInfo.length) !== null && _b !== void 0 ? _b : 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative d-flex justify-content-center mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center justify-content-between rounded-1 px-3 py-2 text-white bg-contained cursor-pointer gap-2",
    onClick: function onClick() {
      return setCurrentPage(function (prev) {
        return prev + 1;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    tag: "span",
    weight: "medium"
  }, t('ecoGeste.readMore')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "text-bold ml-2"
  }))) : null)));
};
/* harmony default export */ __webpack_exports__["default"] = (MasonryEcoGeste);

/***/ }),

/***/ "./assets/js/components/masonry/MasonryFilter.tsx":
/*!********************************************************!*\
  !*** ./assets/js/components/masonry/MasonryFilter.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_masonry_MasonrySort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/masonry/MasonrySort */ "./assets/js/components/masonry/MasonrySort.tsx");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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






var MasonryFilter = function MasonryFilter(_ref) {
  var categories = _ref.categories,
    sortByItems = _ref.sortByItems,
    onFilter = _ref.onFilter,
    onSort = _ref.onSort;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['all']),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var isMobile = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_4__["useIsMobile"])();
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onFilter === null || onFilter === void 0 ? void 0 : onFilter(selected);
  }, [selected]);
  var itemClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('item-filter d-flex align-items-center rounded-5 px-3 border border-1 border-contained cursor-pointer m-1');
  var itemAllClassname = classnames__WEBPACK_IMPORTED_MODULE_2___default()(itemClassName, {
    'text-white bg-contained': selected.length === 1 && selected[0] === 'all'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry-filter position-relative d-flex flex-wrap justify-content-between align-items-center align-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative d-flex flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: itemAllClassname,
    onClick: function onClick() {
      return setSelected(['all']);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
    tag: "span",
    weight: "light"
  }, t('ecoGeste.readAll'))), categories && (categories === null || categories === void 0 ? void 0 : categories.length) > 1 ? categories.map(function (category, idx) {
    var categoryClassname = classnames__WEBPACK_IMPORTED_MODULE_2___default()(itemClassName, {
      'text-contained': !selected.includes(category),
      'text-white bg-contained': selected.includes(category)
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: idx,
      className: categoryClassname,
      onClick: function onClick() {
        return setSelected(function (prev) {
          return prev.includes(category) ? prev.filter(function (item) {
            return item !== category;
          }) : [].concat(_toConsumableArray(prev), [category]);
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_1__["SzTypographie"], {
      tag: "span",
      weight: "light"
    }, category));
  }) : null), sortByItems && onSort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex ".concat(isMobile ? ' flex-column flex-lg-row justify-content-end align-items-end w-100' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(isMobile ? 'my-4 w-100 border-bottom border-1 border-gray-100' : 'd-none')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_MasonrySort__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSort: onSort,
    sortByItems: sortByItems
  })) : null);
};
/* harmony default export */ __webpack_exports__["default"] = (MasonryFilter);

/***/ }),

/***/ "./assets/js/components/masonry/MasonryInfo.tsx":
/*!******************************************************!*\
  !*** ./assets/js/components/masonry/MasonryInfo.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_masonry_masonry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/masonry/masonry.scss */ "./assets/js/components/masonry/masonry.scss");
/* harmony import */ var _app_components_masonry_masonry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_components_masonry_masonry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_masonry_MasonryInfoFront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/masonry/MasonryInfoFront */ "./assets/js/components/masonry/MasonryInfoFront.tsx");
/* harmony import */ var _app_components_masonry_MasonryInfoBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/masonry/MasonryInfoBack */ "./assets/js/components/masonry/MasonryInfoBack.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MasonryInfo = function MasonryInfo(_ref) {
  var title = _ref.title,
    firstAnswer = _ref.firstAnswer,
    secondAnswer = _ref.secondAnswer,
    response = _ref.response;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showResponse = _useState2[0],
    setShowResponse = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(response[0]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedResponse = _useState4[0],
    setSelectedResponse = _useState4[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (response.length > 0) {
      setSelectedResponse(response[0]);
    }
  }, [response]);
  var cardContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var frontCardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var backCardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var adjustCardHeight = function adjustCardHeight() {
    if (cardContainerRef.current && frontCardRef.current && backCardRef.current) {
      var frontHeight = frontCardRef.current.offsetHeight;
      var backHeight = backCardRef.current.offsetHeight;
      var maxHeight = Math.max(frontHeight, backHeight);
      cardContainerRef.current.style.height = "".concat(maxHeight, "px");
      backCardRef.current.style.height = "".concat(maxHeight, "px");
      frontCardRef.current.style.height = "".concat(maxHeight, "px");
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    adjustCardHeight();
  }, [title, firstAnswer, secondAnswer, selectedResponse]);
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (answer) {
    var _a;
    setSelectedResponse((_a = response.find(function (item) {
      return item.status === answer.status;
    })) !== null && _a !== void 0 ? _a : response[0]);
    setShowResponse(true);
  }, [response]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry-info-container ".concat(showResponse ? 'flip' : ''),
    ref: cardContainerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-front",
    ref: frontCardRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_MasonryInfoFront__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    firstAnswer: firstAnswer,
    secondAnswer: secondAnswer,
    onClick: onClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-back",
    ref: backCardRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_MasonryInfoBack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    response: selectedResponse
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (MasonryInfo);

/***/ }),

/***/ "./assets/js/components/masonry/MasonryInfoBack.tsx":
/*!**********************************************************!*\
  !*** ./assets/js/components/masonry/MasonryInfoBack.tsx ***!
  \**********************************************************/
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
/* harmony import */ var _app_components_masonry_ShapeSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/masonry/ShapeSvg */ "./assets/js/components/masonry/ShapeSvg.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! interweave */ "./node_modules/interweave/esm/index.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");







var MasonryInfoBack = function MasonryInfoBack(_ref) {
  var response = _ref.response,
    classname = _ref.classname;
  var _useInterweave = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_6__["useInterweave"])(),
    transform = _useInterweave.transform;
  var masonryCardClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()('masonry-card border-0 rounded-2 shadow-sm border-bottom border-bottom-gray position-relative bg-brand-light', classname);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: masonryCardClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " text-center mx-auto pt-5 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "text-uppercase",
    variant: "H1"
  }, response.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mx-auto px-3 w-100 pt-2 pb-3 content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(interweave__WEBPACK_IMPORTED_MODULE_5__["Markup"], {
    noWrap: true,
    transform: transform,
    content: response.description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_ShapeSvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "var(--brand-default)",
    className: "shape light opacity"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_ShapeSvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "var(--brand-dark)",
    className: "shape dark opacity"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MasonryInfoBack);

/***/ }),

/***/ "./assets/js/components/masonry/MasonryInfoFront.tsx":
/*!***********************************************************!*\
  !*** ./assets/js/components/masonry/MasonryInfoFront.tsx ***!
  \***********************************************************/
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
/* harmony import */ var _app_components_masonry_ShapeSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/masonry/ShapeSvg */ "./assets/js/components/masonry/ShapeSvg.tsx");
/* harmony import */ var _app_icons_WaterDropInfoIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/icons/WaterDropInfoIcon */ "./assets/js/icons/WaterDropInfoIcon.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);







var MasonryInfoFront = function MasonryInfoFront(_ref) {
  var title = _ref.title,
    firstAnswer = _ref.firstAnswer,
    secondAnswer = _ref.secondAnswer,
    _onClick = _ref.onClick,
    classname = _ref.classname;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
    t = _useTranslation.t;
  var masonryCardClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()('masonry-card border-0 rounded-2 shadow-sm border-bottom border-bottom-gray bg-brand-light', classname);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: masonryCardClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative text-center mx-auto pt-4 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center badge bg-white rounded-5 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_icons_WaterDropInfoIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "#111"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    tag: "span",
    weight: "bold"
  }, t('ecoGeste.infeau')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content px-3 text-center py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    className: "mb-0",
    variant: "H4",
    weight: "medium"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "answer pb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    onClick: function onClick() {
      return _onClick === null || _onClick === void 0 ? void 0 : _onClick(firstAnswer);
    },
    variant: "outlined",
    className: "rounded-5"
  }, firstAnswer.answer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzButton"], {
    onClick: function onClick() {
      return _onClick === null || _onClick === void 0 ? void 0 : _onClick(secondAnswer);
    },
    variant: "outlined",
    className: "rounded-5"
  }, secondAnswer.answer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_ShapeSvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "var(--brand-default)",
    className: "shape light"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_ShapeSvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "var(--brand-dark)",
    className: "shape dark"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MasonryInfoFront);

/***/ }),

/***/ "./assets/js/components/masonry/MasonrySkeleton.tsx":
/*!**********************************************************!*\
  !*** ./assets/js/components/masonry/MasonrySkeleton.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


var SkeletonCard = function SkeletonCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 150
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 20,
    width: "80%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 15,
    width: "60%",
    style: {
      marginTop: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 40,
    width: "100%",
    style: {
      marginTop: '15px'
    }
  })));
};
var SkeletonFilter = function SkeletonFilter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 30,
    width: "90px",
    className: "mr-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 30,
    width: "90px",
    className: "mr-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 30,
    width: "90px",
    className: "mr-2"
  }));
};
var MasonrySkeleton = function MasonrySkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-transparent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-wrap align-items-center justify-content-center text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 15,
    width: "300px"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkeletonFilter, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry-item w-100 ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkeletonCard, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry-item w-100 ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkeletonCard, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry-item w-100 ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkeletonCard, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry-item w-100 ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkeletonCard, null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (MasonrySkeleton);

/***/ }),

/***/ "./assets/js/components/masonry/MasonrySort.tsx":
/*!******************************************************!*\
  !*** ./assets/js/components/masonry/MasonrySort.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_SelectorItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/SelectorItems */ "./assets/js/components/SelectorItems/index.tsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




var MasonrySort = function MasonrySort(_ref) {
  var sortByItems = _ref.sortByItems,
    onSort = _ref.onSort;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry-sort position-relative d-flex flex-wrap align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_2__["SzTypographie"], {
    tag: "span",
    weight: "light"
  }, t('ecoGeste.sortBy'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "masonry-sort"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_SelectorItems__WEBPACK_IMPORTED_MODULE_1__["default"], {
    actionItem: onSort,
    getTitle: function getTitle(item) {
      return item.label;
    },
    items: sortByItems,
    displayItems: function displayItems(item) {
      return item.label;
    },
    btnId: "sort"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (MasonrySort);

/***/ }),

/***/ "./assets/js/components/masonry/ShapeSvg.tsx":
/*!***************************************************!*\
  !*** ./assets/js/components/masonry/ShapeSvg.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ShapeSvg = function ShapeSvg(_a) {
  var _a$color = _a.color,
    color = _a$color === void 0 ? '#6095D6' : _a$color,
    props = __rest(_a, ["color"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", Object.assign({
    width: "297",
    height: "84",
    viewBox: "0 0 297 84",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M439.102 71.2779C554.664 164.072 188.622 436.003 58.5263 434.366C-71.5693 432.728 -130.445 355.832 -128.812 226.132C-127.18 96.4322 -110.86 21.9648 -31.9053 3.27801C47.0498 -15.4088 85.0454 57.2327 146.584 66.0815C208.122 74.9302 323.54 -21.516 439.102 71.2779Z",
    fill: color
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ShapeSvg);

/***/ }),

/***/ "./assets/js/icons/PlusIcon.tsx":
/*!**************************************!*\
  !*** ./assets/js/icons/PlusIcon.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PlusIcon = function PlusIcon(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 16 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 16 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1.40887 9H16.4089",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.90887 1.5V16.5",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (PlusIcon);

/***/ }),

/***/ "./assets/js/icons/WaterDropInfoIcon.tsx":
/*!***********************************************!*\
  !*** ./assets/js/icons/WaterDropInfoIcon.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var WaterDropInfoIcon = function WaterDropInfoIcon(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 16 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 16 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.75 22.2604C8.73172 22.6194 7.64221 22.7291 6.57279 22.5802C5.50338 22.4314 4.48524 22.0283 3.60374 21.4048C2.72224 20.7813 2.00308 19.9555 1.50654 18.9967C1.01001 18.0379 0.750578 16.9741 0.75 15.8944C0.75 11.0244 5.198 3.68235 6.873 1.09435C6.94009 0.98883 7.03273 0.901948 7.14233 0.841753C7.25193 0.781559 7.37496 0.75 7.5 0.75C7.62504 0.75 7.74807 0.781559 7.85767 0.841753C7.96727 0.901948 8.05991 0.98883 8.127 1.09435C9.61323 3.3851 10.9407 5.77503 12.1 8.24735",
    stroke: "#030F40",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.5 19.6443C6.50596 19.6443 5.55258 19.2497 4.84941 18.5471C4.14623 17.8444 3.7508 16.8914 3.75 15.8973",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.75 20.9973C17.1424 20.9973 18.4777 20.4442 19.4623 19.4596C20.4469 18.4751 21 17.1397 21 15.7473C21 14.3549 20.4469 13.0196 19.4623 12.035C18.4777 11.0504 17.1424 10.4973 15.75 10.4973C14.3576 10.4973 13.0223 11.0504 12.0377 12.035C11.0531 13.0196 10.5 14.3549 10.5 15.7473C10.5 17.1397 11.0531 18.4751 12.0377 19.4596C13.0223 20.4442 14.3576 20.9973 15.75 20.9973Z",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M23.2499 23.2474L19.4619 19.4594",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.25 14.6223C14.1505 14.6223 14.0552 14.5828 13.9848 14.5125C13.9145 14.4422 13.875 14.3468 13.875 14.2473C13.875 14.1479 13.9145 14.0525 13.9848 13.9821C14.0552 13.9118 14.1505 13.8723 14.25 13.8723",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.25 14.6223C14.3495 14.6223 14.4448 14.5828 14.5152 14.5125C14.5855 14.4422 14.625 14.3468 14.625 14.2473C14.625 14.1479 14.5855 14.0525 14.5152 13.9821C14.4448 13.9118 14.3495 13.8723 14.25 13.8723",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.25 17.6223C17.1505 17.6223 17.0552 17.5828 16.9848 17.5125C16.9145 17.4422 16.875 17.3468 16.875 17.2473C16.875 17.1479 16.9145 17.0525 16.9848 16.9821C17.0552 16.9118 17.1505 16.8723 17.25 16.8723",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.25 17.6223C17.3495 17.6223 17.4448 17.5828 17.5152 17.5125C17.5855 17.4422 17.625 17.3468 17.625 17.2473C17.625 17.1479 17.5855 17.0525 17.5152 16.9821C17.4448 16.9118 17.3495 16.8723 17.25 16.8723",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (WaterDropInfoIcon);

/***/ }),

/***/ "./assets/js/pages/save-water/SaveWater.tsx":
/*!**************************************************!*\
  !*** ./assets/js/pages/save-water/SaveWater.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaveWater; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _app_components_masonry_MasonryEcoGeste__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/masonry/MasonryEcoGeste */ "./assets/js/components/masonry/MasonryEcoGeste.tsx");
/* harmony import */ var _app_components_ecoWater_EcoWaterLame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/ecoWater/EcoWaterLame */ "./assets/js/components/ecoWater/EcoWaterLame.tsx");
/* harmony import */ var _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/AxiosInstance */ "./assets/js/services/AxiosInstance.jsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var _app_components_masonry_MasonrySkeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/masonry/MasonrySkeleton */ "./assets/js/components/masonry/MasonrySkeleton.tsx");
/* harmony import */ var _app_components_ecoWater_EcoWaterLameSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/ecoWater/EcoWaterLameSkeleton */ "./assets/js/components/ecoWater/EcoWaterLameSkeleton.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function SaveWater() {
  var _a, _b;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEditoDataEmpty = _useState2[0],
    setIsEditoDataEmpty = _useState2[1];
  var _ref = window.tsme_data || {},
    lameContents = _ref.lameContents,
    listEdito = _ref.listEdito,
    waterInfo = _ref.waterInfo,
    brand = _ref.brand;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])(),
    t = _useTranslation.t;
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])('lameContent', function () {
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].get(_app_constants__WEBPACK_IMPORTED_MODULE_6__["API"].HOMEPAGE_LAMES);
    }, {
      initialData: {
        data: {
          lameContents: lameContents
        }
      }
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading,
    isErrorLameContent = _useQuery.isError;
  var _useQuery2 = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])('waterInfoContent', function () {
      var _a;
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].get(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["API"].WATER_INFO, {
        brandCode: (_a = brand === null || brand === void 0 ? void 0 : brand.code) !== null && _a !== void 0 ? _a : _app_constants__WEBPACK_IMPORTED_MODULE_6__["BRAND_CODE_SUEZ"]
      }));
    }, {
      initialData: {
        data: {
          content: waterInfo
        }
      }
    }),
    waterInfoData = _useQuery2.data,
    waterInfoLoading = _useQuery2.isLoading;
  var _useQuery3 = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])('saveWaterContent', function () {
      var _a;
      return _app_services_AxiosInstance__WEBPACK_IMPORTED_MODULE_4__["default"].get("".concat(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_6__["API"].EDITO_LIST, {
        brandCode: (_a = brand === null || brand === void 0 ? void 0 : brand.code) !== null && _a !== void 0 ? _a : _app_constants__WEBPACK_IMPORTED_MODULE_6__["BRAND_CODE_SUEZ"]
      }), "?type=").concat(_app_constants__WEBPACK_IMPORTED_MODULE_6__["TEMPLATES"].ECOGESTE, ",").concat(_app_constants__WEBPACK_IMPORTED_MODULE_6__["TEMPLATES"].ECOPLANETE));
    }, {
      initialData: {
        data: {
          content: listEdito
        }
      }
    }),
    saveWaterData = _useQuery3.data,
    saveWaterLoading = _useQuery3.isLoading,
    isErrorSaveWater = _useQuery3.isError;
  var cards = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var _ref2 = saveWaterData.data || [],
      content = _ref2.content,
      message = _ref2.message;
    if (message === 'KO_EDITO' || saveWaterData.data.content.length <= 0) {
      setIsEditoDataEmpty(true);
      return;
    }
    return content.filter(function (item) {
      return [_app_constants__WEBPACK_IMPORTED_MODULE_6__["TEMPLATES"].ECOGESTE, _app_constants__WEBPACK_IMPORTED_MODULE_6__["TEMPLATES"].ECOPLANETE].includes(item.type);
    }).map(function (item) {
      return {
        image: item.image,
        title: item.title,
        context: item.type,
        scale: item.scale,
        categories: item.categories,
        date: item.publication_date,
        link: "/edito/".concat(item.slug)
      };
    });
  }, [saveWaterData]);
  var cardWaterInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var _ref3 = waterInfoData.data || [],
      waterInfoContent = _ref3.content;
    if (waterInfoData.data.length <= 0) {
      return;
    }
    return waterInfoContent.map(function (item) {
      var randomAnswer = Math.random() > 0.5 ? {
        firstAnswer: {
          answer: item.choice_ok,
          status: true
        },
        secondAnswer: {
          answer: item.choice_ko,
          status: false
        }
      } : {
        firstAnswer: {
          answer: item.choice_ko,
          status: false
        },
        secondAnswer: {
          answer: item.choice_ok,
          status: true
        }
      };
      return Object.assign({
        title: item.question,
        response: [{
          title: item.answer_ok_title,
          description: item.response,
          status: true
        }, {
          title: item.answer_ko_title,
          description: item.response,
          status: false
        }]
      }, randomAnswer);
    }).sort(function () {
      return Math.random() - 0.5;
    });
  }, [waterInfoData]);
  var _ref4 = ((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.lameContents) === null || _b === void 0 ? void 0 : _b.lame_home_eco_geste) || {},
    fields = _ref4.fields,
    tile = _ref4.tile;
  var displayEcoWaterLame = !isErrorLameContent && tile.length > 0;
  if (isLoading || saveWaterLoading || waterInfoLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      fullscreen: true,
      className: "bg-white p-0",
      minHeight: "50vh"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      minHeight: "50vh"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_ecoWater_EcoWaterLameSkeleton__WEBPACK_IMPORTED_MODULE_8__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      fullscreen: true,
      className: "gabarit-edito p-0",
      tag: "main"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      minHeight: "75vh"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_MasonrySkeleton__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, displayEcoWaterLame && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fullscreen: true,
    className: "bg-white p-0",
    minHeight: !isEditoDataEmpty ? '10vh' : 'initial',
    id: "eco-water-lame"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    minHeight: "10vh"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_ecoWater_EcoWaterLame__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: fields.title,
    description: fields.description,
    cards: tile.map(function (item) {
      return Object.assign({}, item.fields);
    })
  }))), !isEditoDataEmpty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fullscreen: true,
    className: "gabarit-edito p-0",
    tag: "main",
    id: "eco-water-masonry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    minHeight: "10vh"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_masonry_MasonryEcoGeste__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: t('ecoGeste.title_masonry'),
    filterBy: "categories",
    dataCard: cards,
    dataWaterInfo: cardWaterInfo,
    isError: isErrorSaveWater,
    sortBy: [{
      key: 'date',
      label: t('ecoGeste.sortDateDesc')
    }, {
      key: 'scale',
      label: t('ecoGeste.sortScale')
    }]
  }))));
}

/***/ }),

/***/ "./node_modules/react-responsive-masonry/es/Masonry/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-responsive-masonry/es/Masonry/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Masonry = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Masonry, _React$Component);

  function Masonry() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      columns: [],
      childRefs: [],
      hasDistributed: false
    };
    return _this;
  }

  var _proto = Masonry.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (!this.state.hasDistributed && !this.props.sequential) this.distributeChildren();
  };

  Masonry.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var children = props.children,
        columnsCount = props.columnsCount;
    if (state && children === state.children) return null;
    return _extends({}, Masonry.getEqualCountColumns(children, columnsCount), {
      children: children,
      hasDistributed: false
    });
  };

  _proto.distributeChildren = function distributeChildren() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        columnsCount = _this$props.columnsCount;
    var columnHeights = Array(columnsCount).fill(0);
    var isReady = this.state.childRefs.every(function (ref) {
      return ref.current.getBoundingClientRect().height;
    });
    if (!isReady) return;
    var columns = Array.from({
      length: columnsCount
    }, function () {
      return [];
    });
    var validIndex = 0;
    react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(children, function (child) {
      if (child && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(child)) {
        // .current is undefined if ref was passed to a functional component without forwardRef
        // now passing ref into a wrapper div so it should always be defined
        var childHeight = _this2.state.childRefs[validIndex].current.getBoundingClientRect().height;

        var minHeightColumnIndex = columnHeights.indexOf(Math.min.apply(Math, columnHeights));
        columnHeights[minHeightColumnIndex] += childHeight;
        columns[minHeightColumnIndex].push(child);
        validIndex++;
      }
    });
    this.setState(function (p) {
      return _extends({}, p, {
        columns: columns,
        hasDistributed: true
      });
    });
  };

  Masonry.getEqualCountColumns = function getEqualCountColumns(children, columnsCount) {
    var columns = Array.from({
      length: columnsCount
    }, function () {
      return [];
    });
    var validIndex = 0;
    var childRefs = [];
    react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(children, function (child) {
      if (child && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(child)) {
        var ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
        childRefs.push(ref);
        columns[validIndex % columnsCount].push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "stretch"
          },
          key: validIndex,
          ref: ref
        }, child) // React.cloneElement(child, {ref}) // cannot attach refs to functional components without forwardRef
        );
        validIndex++;
      }
    });
    return {
      columns: columns,
      childRefs: childRefs
    };
  };

  _proto.renderColumns = function renderColumns() {
    var _this$props2 = this.props,
        gutter = _this$props2.gutter,
        itemTag = _this$props2.itemTag,
        itemStyle = _this$props2.itemStyle;
    return this.state.columns.map(function (column, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(itemTag, {
        key: i,
        style: _extends({
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "stretch",
          flex: 1,
          width: 0,
          gap: gutter
        }, itemStyle)
      }, column.map(function (item) {
        return item;
      }));
    });
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        gutter = _this$props3.gutter,
        className = _this$props3.className,
        style = _this$props3.style,
        containerTag = _this$props3.containerTag;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(containerTag, {
      style: _extends({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "stretch",
        boxSizing: "border-box",
        width: "100%",
        gap: gutter
      }, style),
      className: className
    }, this.renderColumns());
  };

  return Masonry;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Masonry.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node]).isRequired,
  columnsCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  gutter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  containerTag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  itemTag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  itemStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  sequential: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
} : undefined;
Masonry.defaultProps = {
  columnsCount: 3,
  gutter: "0",
  className: null,
  style: {},
  containerTag: "div",
  itemTag: "div",
  itemStyle: {},
  sequential: false
};
/* harmony default export */ __webpack_exports__["default"] = (Masonry);

/***/ }),

/***/ "./node_modules/react-responsive-masonry/es/ResponsiveMasonry/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-responsive-masonry/es/ResponsiveMasonry/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_COLUMNS_COUNT = 1;
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

var useHasMounted = function useHasMounted() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hasMounted = _useState[0],
      setHasMounted = _useState[1];

  useIsomorphicLayoutEffect(function () {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

var useWindowWidth = function useWindowWidth() {
  var hasMounted = useHasMounted();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(typeof window !== "undefined" ? window.innerWidth : 0),
      width = _useState2[0],
      setWidth = _useState2[1];

  var handleResize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!hasMounted) return;
    setWidth(window.innerWidth);
  }, [hasMounted]);
  useIsomorphicLayoutEffect(function () {
    if (hasMounted) {
      window.addEventListener("resize", handleResize);
      handleResize();
      return function () {
        return window.removeEventListener("resize", handleResize);
      };
    }
  }, [hasMounted, handleResize]);
  return width;
};

var MasonryResponsive = function MasonryResponsive(_ref) {
  var _ref$columnsCountBrea = _ref.columnsCountBreakPoints,
      columnsCountBreakPoints = _ref$columnsCountBrea === void 0 ? {
    350: 1,
    750: 2,
    900: 3
  } : _ref$columnsCountBrea,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? null : _ref$style;
  var windowWidth = useWindowWidth();
  var columnsCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var breakPoints = Object.keys(columnsCountBreakPoints).sort(function (a, b) {
      return a - b;
    });
    var count = breakPoints.length > 0 ? columnsCountBreakPoints[breakPoints[0]] : DEFAULT_COLUMNS_COUNT;
    breakPoints.forEach(function (breakPoint) {
      if (breakPoint < windowWidth) {
        count = columnsCountBreakPoints[breakPoint];
      }
    });
    return count;
  }, [windowWidth, columnsCountBreakPoints]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      key: index,
      columnsCount: columnsCount
    });
  }));
};

MasonryResponsive.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,
  columnsCountBreakPoints: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (MasonryResponsive);

/***/ }),

/***/ "./node_modules/react-responsive-masonry/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-responsive-masonry/es/index.js ***!
  \***********************************************************/
/*! exports provided: default, ResponsiveMasonry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-responsive-masonry/es/Masonry/index.js");
/* harmony import */ var _ResponsiveMasonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveMasonry */ "./node_modules/react-responsive-masonry/es/ResponsiveMasonry/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMasonry", function() { return _ResponsiveMasonry__WEBPACK_IMPORTED_MODULE_1__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Masonry__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);