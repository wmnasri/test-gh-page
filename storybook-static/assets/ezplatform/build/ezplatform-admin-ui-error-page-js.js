(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-error-page-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function (doc) {
  var notificationsContainer = doc.querySelector('.ez-notifications-container');
  var notifications = JSON.parse(notificationsContainer.dataset.notifications);
  var template = notificationsContainer.dataset.template;
  var escapeHTML = function escapeHTML(string) {
    var stringTempNode = doc.createElement('div');
    stringTempNode.appendChild(doc.createTextNode(string));
    return stringTempNode.innerHTML;
  };
  var addNotification = function addNotification(_ref) {
    var detail = _ref.detail;
    var label = detail.label,
      message = detail.message;
    var templateLabel = label === 'error' ? 'danger' : label;
    var container = doc.createElement('div');
    var finalMessage = escapeHTML(message);
    var notification = template.replace('{{ label }}', templateLabel).replace('{{ message }}', finalMessage).replace('{{ badge }}', label);
    container.insertAdjacentHTML('beforeend', notification);
    var notificationNode = container.querySelector('.alert');
    notificationsContainer.append(notificationNode);
  };
  Object.entries(notifications).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      label = _ref3[0],
      messages = _ref3[1];
    messages.forEach(function (message) {
      return addNotification({
        detail: {
          label: label,
          message: message
        }
      });
    });
  });
})(window.document);

/***/ }),

/***/ 4:
/*!***************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/var/www/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js");


/***/ })

},[[4,"runtime"]]]);