(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-section-view-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (global, doc, eZ, React, ReactDOM) {
  var _this = this;
  var btns = doc.querySelectorAll('.btn--open-udw');
  var udwContainer = doc.getElementById('react-udw');
  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };
  var onConfirm = function onConfirm(form, content) {
    var field = form.querySelector("#".concat(form.getAttribute('name'), "_locations_location"));
    field.value = content.map(function (item) {
      return item.id;
    }).join();
    closeUDW();
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var form = event.target.closest('form');
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(_this, form),
      onCancel: onCancel
    }, config)), udwContainer);
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ 16:
/*!*****************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/var/www/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js");


/***/ })

},[[16,"runtime"]]]);