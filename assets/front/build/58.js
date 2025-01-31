(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./assets/img/cross-circle.svg":
/*!*************************************!*\
  !*** ./assets/img/cross-circle.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/front/build/cross-circle.svg");

/***/ }),

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

/***/ "./assets/js/components/DemoComposant.tsx":
/*!************************************************!*\
  !*** ./assets/js/components/DemoComposant.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DemoComposant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./assets/js/components/Container/index.tsx");
/* harmony import */ var _pages_invoice_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/invoice-detail */ "./assets/js/pages/invoice-detail/index.tsx");
/* harmony import */ var _app_components_CapAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/CapAddress */ "./assets/js/components/CapAddress/index.jsx");
/* harmony import */ var _AlertBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AlertBox */ "./assets/js/components/AlertBox/index.tsx");
/* harmony import */ var _SzChartConso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SzChartConso */ "./assets/js/components/SzChartConso/index.jsx");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_components_BlockEquivalences__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/BlockEquivalences */ "./assets/js/components/BlockEquivalences/index.tsx");
/* harmony import */ var _Highchart_AlertGauge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Highchart/AlertGauge */ "./assets/js/components/Highchart/AlertGauge/index.tsx");
/* harmony import */ var _CardAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CardAlert */ "./assets/js/components/CardAlert/index.tsx");
/* harmony import */ var _img_consumption_history_alertes_fuite_green_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @img/consumption-history/alertes-fuite-green.svg */ "./assets/img/consumption-history/alertes-fuite-green.svg");
/* harmony import */ var _img_consumption_history_alertes_fuite_red_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @img/consumption-history/alertes-fuite-red.svg */ "./assets/img/consumption-history/alertes-fuite-red.svg");
/* harmony import */ var _img_consumption_history_alertes_fuite_gray_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @img/consumption-history/alertes-fuite-gray.svg */ "./assets/img/consumption-history/alertes-fuite-gray.svg");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var consoData = {
  indexMaxOperation: 17,
  indexMaxDue: 7,
  indexMaxData: 24,
  data: [{
    y: 2.2,
    name: '2023-04-01',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: -42,
    name: '2023-04-02',
    source: 'operation',
    type: 'Facture'
  }, {
    y: 39.2,
    name: '2023-04-03',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 38,
    name: '2023-04-04',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 22,
    name: '2023-04-05',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 34.3,
    name: '2023-04-06',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 33.7,
    name: '2023-04-07',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 2.2,
    name: '2023-04-08',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: -42,
    name: '2023-04-09',
    source: 'operation',
    type: 'Facture'
  }, {
    y: 35.6,
    name: '2023-04-10',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 34.3,
    name: '2023-04-11',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 17,
    name: '2023-04-12',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 20,
    name: '2023-04-13',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: -5,
    name: '2023-04-14',
    source: 'operation',
    type: 'Facture'
  }, {
    y: 10,
    name: '2023-04-15',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 34.3,
    name: '2023-04-16',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 33.2,
    name: '2023-04-17',
    source: 'operation',
    type: 'Prélèvement Automatique'
  }, {
    y: 2.2,
    name: '2023-04-18',
    source: 'due',
    type: 'Prélèvement Automatique'
  }, {
    y: -42,
    name: '2023-04-19',
    source: 'due',
    type: 'Facture'
  }, {
    y: 16,
    name: '2023-04-20',
    source: 'due',
    type: 'Prélèvement Automatique'
  }, {
    y: 34.3,
    name: '2023-04-21',
    source: 'due',
    type: 'Prélèvement Automatique'
  }, {
    y: 18,
    name: '2023-04-22',
    source: 'due',
    type: 'Prélèvement Automatique'
  }, {
    y: 2.2,
    name: '2023-04-23',
    source: 'due',
    type: 'Prélèvement Automatique'
  }, {
    y: -42,
    name: '2023-04-24',
    source: 'due',
    type: 'Facture'
  }]
};
function DemoComposant() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
    test = _useParams.test;
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_14__["useTranslation"])(),
    t = _useTranslation.t;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenEditModal = _useState2[0],
    setIsOpenEditModal = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpenSubscribeModal = _useState4[0],
    setIsOpenSubscribeModal = _useState4[1];
  var handleCloseEditModal = function handleCloseEditModal() {
    setIsOpenEditModal(false);
  };
  var handleCloseSubscribeModal = function handleCloseSubscribeModal() {
    setIsOpenSubscribeModal(false);
  };
  if (test === 'alerte') {
    var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('150'),
      _useState6 = _slicedToArray(_useState5, 2),
      consoMax = _useState6[0],
      setConsoMax = _useState6[1];
    var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('50'),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];
    var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('90'),
      _useState10 = _slicedToArray(_useState9, 1),
      seuil = _useState10[0];
    var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      editable = _useState12[0],
      setEditable = _useState12[1];
    var onChange = function onChange(e) {
      // const last = e.target.value.at(-1);
      // const old = [...e.target.value];
      // TODO : Ces règles seront terminées dans le ticket suivant
      // const cleanValue = cleanUpValue(e.target.value);
      // const accepted = [',', '.'];
      // || /\b/.test(last)
      // if (!last || /\w/.test(last)) {
      //   e.target.value = e.target.value.slice(0, -1);
      //   return;
      // }
      // if (!accepted.includes(last)) {
      //   old[e.target.value.length - 1] = last.replace(/\D/, '');
      // }
      // if (last === '.') {
      //   old[e.target.value.length - 1] = last.replace(/\./, ',');
      // }
      // const newValue = old.join('');
      // e.target.value = newValue;
      // setSeuil(e.target.value);
    };
    var onClick = function onClick() {
      setEditable(function (prev) {
        return !prev;
      });
    };
    var onChangeValue = function onChangeValue(e) {
      var value = e.target.value;
      setValue(value);
    };
    var onChangeConso = function onChangeConso(e) {
      var value = e.target.value;
      setConsoMax(value);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-white d-flex flex-column align-items-center justify-content-center border-rounded",
      style: {
        width: '400px',
        height: '400px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Highchart_AlertGauge__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: editable ? 'visual' : 'editable',
      currentConso: +value || null,
      consoMax: +consoMax,
      seuil: +seuil,
      editable: editable,
      onChange: onChange,
      imageId: "alert-img"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzButton"], {
      onClick: onClick
    }, editable ? 'Visual' : 'Editer')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-5"
    }, !editable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzInput"], {
      type: "number",
      label: "Conso actuelle",
      onChange: onChangeValue,
      value: value
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzInput"], {
      type: "number",
      label: "Conso max",
      onChange: onChangeConso,
      value: consoMax
    }))));
  }
  if (test === 'capAdress') {
    var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState14 = _slicedToArray(_useState13, 2),
      city = _useState14[0],
      setCity = _useState14[1];
    var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState16 = _slicedToArray(_useState15, 2),
      address = _useState16[0],
      setAddress = _useState16[1];
    var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isSearchingCity = _useState18[0],
      setIsSearchingCity = _useState18[1];
    var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState20 = _slicedToArray(_useState19, 2),
      isSearchingAddress = _useState20[0],
      setIsSearchingAddress = _useState20[1];
    var onChangeCity = function onChangeCity(_ref) {
      var target = _ref.target;
      setIsSearchingCity(true);
      setCity(target.value);
    };
    var onClickCity = function onClickCity(_ref2) {
      var text = _ref2.text;
      setCity(text);
      setIsSearchingCity(false);
    };
    var onChangeAddress = function onChangeAddress(_ref3) {
      var target = _ref3.target;
      setIsSearchingAddress(true);
      setAddress(target.value);
    };
    var onClickAddress = function onClickAddress(_ref4) {
      var text = _ref4.text;
      setAddress(text);
      setIsSearchingAddress(false);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fullscreen: true,
      className: "m-auto",
      tag: "div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_CapAddress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      containerClassName: "",
      type: "town",
      name: "city",
      value: city,
      onChange: onChangeCity,
      onClick: onClickCity,
      isSearching: isSearchingCity
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_CapAddress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "street",
      containerClassName: "",
      name: "address",
      value: address,
      onChange: onChangeAddress,
      onClick: onClickAddress,
      isSearching: isSearchingAddress,
      address: address
    })));
  } else if ('alert' === test) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6 m-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertBox__WEBPACK_IMPORTED_MODULE_5__["AlertBox"], {
      className: "m-4"
    }, "Ne vous en faites pas, tout va bien se passer. Ne reculez pas!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertBox__WEBPACK_IMPORTED_MODULE_5__["AlertBox"], {
      className: "m-4",
      variant: "alert"
    }, "Fuyez pauvres fous!..."));
  } else if ('highchart' === test) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fullscreen: true,
      className: "m-auto",
      tag: "div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzCard"], {
      className: "cy-result-page my-5 px-0 px-md-4 bg-white align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SzChartConso__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: consoData
    })));
  } else if ('equivalence' === test) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fullscreen: true,
      className: "m-auto",
      tag: "div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzCard"], {
      className: "my-5 px-0 px-md-4 bg-white align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-3 px-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_BlockEquivalences__WEBPACK_IMPORTED_MODULE_8__["BlockEquivalences"], null))));
  } else if ('card-alert' === test) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fullscreen: true,
      className: "m-auto",
      tag: "div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row no-gutters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-4 px-0 mr-lg-3 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
      dataCy: "waterleak-alert-card",
      title: t('histoConso.cardAlert.waterleak.title'),
      badgeLabel: t('histoConso.cardAlert.badge_alert'),
      badgeColor: "red",
      description: t('histoConso.cardAlert.waterleak.description_alert', {
        date: '30 septembre 2024'
      }),
      ctaLabel: t('histoConso.cardAlert.waterleak.cta'),
      ctaLink: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_15__["ROUTES"].EDITO, {
        slug: 'gerer-fuite'
      }),
      isEditable: true,
      editBtnId: "edit-waterleak-alert-alert",
      onClickEdit: function onClickEdit() {
        setIsOpenEditModal(true);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_consumption_history_alertes_fuite_red_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-4 px-0 mr-lg-3 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
      dataCy: "waterleak-alert-card",
      title: t('histoConso.cardAlert.waterleak.title'),
      description: t('histoConso.cardAlert.waterleak.description_no_alert'),
      ctaLabel: t('histoConso.cardAlert.waterleak.cta'),
      ctaLink: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["generatePath"])(_app_constants__WEBPACK_IMPORTED_MODULE_15__["ROUTES"].EDITO, {
        slug: 'gerer-fuite'
      }),
      isEditable: true,
      editBtnId: "edit-waterleak-alert-success",
      onClickEdit: function onClickEdit() {
        setIsOpenEditModal(true);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_consumption_history_alertes_fuite_green_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-4 px-0 mr-lg-3 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
      dataCy: "waterleak-alert-card",
      title: t('histoConso.cardAlert.waterleak.title'),
      description: t('histoConso.cardAlert.waterleak.description_inactive'),
      errorDescription: t('histoConso.cardAlert.waterleak.description_unavailable')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_consumption_history_alertes_fuite_gray_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
      alt: ""
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-lg-4 px-0 mr-lg-3 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
      dataCy: "waterleak-alert-card",
      title: t('histoConso.cardAlert.waterleak.title'),
      description: t('histoConso.cardAlert.waterleak.description_inactive'),
      btnLabel: t('histoConso.cardAlert.btn'),
      badgeLabel: t('histoConso.cardAlert.badge_inactive'),
      badgeColor: "gray-01",
      onClickBtn: function onClickBtn() {
        return setIsOpenSubscribeModal(true);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_consumption_history_alertes_fuite_gray_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
      alt: ""
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzModal"], {
      show: isOpenEditModal,
      handleClose: handleCloseEditModal,
      size: "lg",
      backdrop: true,
      centered: true,
      scrollable: true,
      border: "smooth",
      fullscreen: "md",
      title: "Modale \xE9dition"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "contenu modale \xE9dition")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_7__["SzModal"], {
      show: isOpenSubscribeModal,
      handleClose: handleCloseSubscribeModal,
      size: "lg",
      backdrop: true,
      centered: true,
      scrollable: true,
      border: "smooth",
      fullscreen: "md",
      title: "Modale activation"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "contenu modale activation")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullscreen: true,
    className: "p-0",
    tag: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_invoice_detail__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./assets/js/components/FormButtons/index.tsx":
/*!****************************************************!*\
  !*** ./assets/js/components/FormButtons/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suezenv/react-theme-components */ "./node_modules/@suezenv/react-theme-components/build/index.js");
/* harmony import */ var _suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function FormButtons(_a) {
  var _a$marginTop = _a.marginTop,
    marginTop = _a$marginTop === void 0 ? true : _a$marginTop,
    buttonsProps = __rest(_a, ["marginTop"]);
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
    t = _useTranslation.t;
  var _b = buttonsProps.previous || {},
    _b$label = _b.label,
    prevLabel = _b$label === void 0 ? t('go_back') : _b$label,
    _b$enabled = _b.enabled,
    prevEnabled = _b$enabled === void 0 ? false : _b$enabled,
    _b$prevArrow = _b.prevArrow,
    prevArrow = _b$prevArrow === void 0 ? true : _b$prevArrow,
    defaultPrev = __rest(_b, ["label", "enabled", "prevArrow"]);
  var _c = buttonsProps.next || {},
    _c$label = _c.label,
    nextLabel = _c$label === void 0 ? t('validate') : _c$label,
    _c$arrow = _c.arrow,
    arrow = _c$arrow === void 0 ? false : _c$arrow,
    _c$enabled = _c.enabled,
    nextEnabled = _c$enabled === void 0 ? true : _c$enabled,
    defaultNext = __rest(_c, ["label", "arrow", "enabled"]);
  var leftArrow = 'keyboard-arrow-left';
  var rightArrow = 'keyboard-arrow-right';
  var prevIcon = (defaultPrev === null || defaultPrev === void 0 ? void 0 : defaultPrev.alignIcon) === 'right' ? rightArrow : leftArrow;
  var previous = Object.assign({
    id: 'previousButton',
    variant: 'text',
    align: 'left',
    icon: prevArrow ? prevIcon : undefined,
    alignIcon: 'left',
    onClick: function onClick() {},
    loader: false,
    disabled: defaultPrev.loader || false
  }, defaultPrev);
  var next = Object.assign({
    id: 'nextButton',
    variant: 'contained',
    align: 'left',
    icon: arrow ? rightArrow : undefined,
    onClick: function onClick() {},
    disabled: defaultNext.loader || false,
    type: 'submit'
  }, defaultNext);
  var buttonClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('row', {
    'mt-3 mt-lg-4': marginTop
  });
  var previousClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('col-12 order-lg-0', {
    'col-lg-6': nextEnabled,
    'text-lg-right': 'right' === previous.align
  });
  var nextClassnames = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('col-12 mb-2 mb-lg-0 order-lg-1', {
    'col-lg-6': prevEnabled,
    'text-lg-right': 'right' === next.align
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: buttonClassnames
  }, nextEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: nextClassnames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], Object.assign({
    id: next.id,
    border: "soft",
    alignIcon: "right",
    isDisabled: next.disabled
  }, next, {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
    }
  }), nextLabel)), prevEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: previousClassnames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suezenv_react_theme_components__WEBPACK_IMPORTED_MODULE_3__["SzButton"], Object.assign({
    id: previous.id,
    border: "soft",
    className: "pl-0",
    isDisabled: previous.disabled
  }, previous), prevLabel)));
}

/***/ }),

/***/ "./assets/js/components/SzChartConso/index.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/components/SzChartConso/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SzChartConso; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/constants */ "./assets/js/constants/index.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_export_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-export-csv */ "./node_modules/highcharts-export-csv/export-csv.js");
/* harmony import */ var highcharts_export_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_export_csv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/hooks */ "./assets/js/hooks/index.ts");
/* harmony import */ var _SzHighChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SzHighChart */ "./assets/js/components/SzHighChart/index.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }







if (_typeof(highcharts__WEBPACK_IMPORTED_MODULE_2___default.a) === 'object') {
  highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default.a);
  highcharts_export_csv__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default.a);
}
function SzChartConso(_ref) {
  var data = _ref.data;
  var TYPE_OPERATION = 'operation';
  var isMobile = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_5__["useIsMobile"])();
  var isDesktop = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_5__["useIsDesktop"])();
  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var NUMBER_DATA_MAX_CHART = isDesktop ? 13 : 6;

  // 1er index = 0
  var getStartIndex = function getStartIndex() {
    var startIndex = 0;
    var _ref2 = data || '',
      indexMaxDue = _ref2.indexMaxDue,
      indexMaxOperation = _ref2.indexMaxOperation,
      indexMaxData = _ref2.indexMaxData;
    if (isMobile && indexMaxDue > 5) {
      startIndex = indexMaxOperation - 1;
    } else {
      startIndex = indexMaxData - NUMBER_DATA_MAX_CHART;
    }
    if (startIndex < 0) {
      return 0;
    }
    return startIndex;
  };

  // index comprit entre 0 et NUMBER_DATA_MAX_CHART
  var getIndexToolTip = function getIndexToolTip() {
    var indexToolTip = null;
    var startIndex = getStartIndex();
    var _ref3 = data || '',
      indexMaxDue = _ref3.indexMaxDue,
      indexMaxOperation = _ref3.indexMaxOperation;
    if (isMobile && indexMaxDue > 5) {
      indexToolTip = 0;
    } else if (indexMaxOperation > 0) {
      indexToolTip = indexMaxOperation - startIndex - 1;
    }
    if (indexToolTip < 0) {
      return null;
    }
    return indexToolTip;
  };
  var formatDataLabel = function formatDataLabel(props) {
    var _currentValue;
    if (!props || Object.keys(props).length === 0) {
      return null;
    }
    var y = props.y;
    var currentValue = y;
    if (y < 0) {
      currentValue = -y;
    }
    if (!Number.isInteger(currentValue)) {
      currentValue = currentValue.toFixed(2);
    }
    return (_currentValue = currentValue) === null || _currentValue === void 0 ? void 0 : _currentValue.toString().replace('.', ',');
  };
  var initColor = function initColor(initData) {
    if (initData.length === 0) {
      return [];
    }
    return initData === null || initData === void 0 ? void 0 : initData.map(function (obj) {
      var colorOperation = {
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 1
        },
        stops: [[0, '#1A7DD2'],
        // Start color
        [1, '#37DDFF'] // End color
        ]
      };

      return _objectSpread(_objectSpread({}, obj), {}, {
        color: (obj === null || obj === void 0 ? void 0 : obj.source) === TYPE_OPERATION ? colorOperation : '#E9ECEF'
      });
    });
  };
  var formaterXAxis = function formaterXAxis(value) {
    return highcharts__WEBPACK_IMPORTED_MODULE_2___default.a.dateFormat('%d/%m<br/>%Y', new Date(value));
  };
  var options = {
    xAxis: {
      crosshair: false,
      type: 'category',
      labels: {
        style: {
          fontSize: '12px'
        },
        formatter: function formatter(props) {
          var regex = /^\d{4}-\d{2}-\d{2}$/;
          var value = regex.test(props) ? props : this.value;
          return formaterXAxis(value);
        }
      }
    },
    plotOptions: {
      column: {
        borderWidth: 3,
        pointWidth: 22
      }
    },
    series: []
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SzHighChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: _app_constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_CHART_CONSO"],
    chartRef: chartRef,
    data: data,
    className: "mx-auto col-lg-11",
    maxRangeData: 13,
    maxRangeDataMobile: 6,
    options: options,
    getStartIndex: getStartIndex,
    getIndexToolTip: getIndexToolTip,
    initColor: initColor,
    formatDataLabel: formatDataLabel
  });
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

/***/ })

}]);