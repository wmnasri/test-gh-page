(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@restart/ui/esm/Overlay.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Overlay.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useCallbackRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usePopper */ "./node_modules/@restart/ui/esm/usePopper.js");
/* harmony import */ var _useRootClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useRootClose */ "./node_modules/@restart/ui/esm/useRootClose.js");
/* harmony import */ var _useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useWaitForDOMRef */ "./node_modules/@restart/ui/esm/useWaitForDOMRef.js");
/* harmony import */ var _mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergeOptionsWithPopperConfig */ "./node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
const Overlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition
  } = props;
  const [rootElement, attachRef] = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [arrowElement, attachArrowRef] = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const mergedRef = Object(_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__["default"])(attachRef, outerRef);
  const container = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_6__["default"])(props.container);
  const target = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_6__["default"])(props.target);
  const [exited, setExited] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!props.show);
  const popper = Object(_usePopper__WEBPACK_IMPORTED_MODULE_4__["default"])(target, rootElement, Object(_mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_7__["default"])({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  const handleHidden = (...args) => {
    setExited(true);

    if (props.onExited) {
      props.onExited(...args);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  const mountOverlay = props.show || Transition && !exited;
  Object(_useRootClose__WEBPACK_IMPORTED_MODULE_5__["default"])(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });

  if (Transition) {
    const {
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onEntered
    } = props;
    child = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Transition, {
      in: props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: child
    });
  }

  return container ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js ***!
  \**********************************************************************/
/*! exports provided: toModifierMap, toModifierArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModifierMap", function() { return toModifierMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModifierArray", function() { return toModifierArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeOptionsWithPopperConfig; });
function toModifierMap(modifiers) {
  const result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(m => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map = {}) {
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(k => {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$eventListe, _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents,
        options: (_modifiers$eventListe = modifiers.eventListeners) == null ? void 0 : _modifiers$eventListe.options
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/popper.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/popper.js ***!
  \************************************************/
/*! exports provided: createPopper, placements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _popperjs_core_lib_modifiers_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/arrow */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _popperjs_core_lib_modifiers_computeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/computeStyles */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _popperjs_core_lib_modifiers_eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/eventListeners */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _popperjs_core_lib_modifiers_flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/flip */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _popperjs_core_lib_modifiers_hide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/hide */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popperjs_core_lib_modifiers_offset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/offset */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperjs_core_lib_modifiers_popperOffsets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/popperOffsets */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _popperjs_core_lib_modifiers_preventOverflow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/preventOverflow */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @popperjs/core/lib/enums */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_8__["placements"]; });

/* harmony import */ var _popperjs_core_lib_popper_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @popperjs/core/lib/popper-base */ "./node_modules/@popperjs/core/lib/popper-base.js");









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

const createPopper = Object(_popperjs_core_lib_popper_base__WEBPACK_IMPORTED_MODULE_9__["popperGenerator"])({
  defaultModifiers: [_popperjs_core_lib_modifiers_hide__WEBPACK_IMPORTED_MODULE_4__["default"], _popperjs_core_lib_modifiers_popperOffsets__WEBPACK_IMPORTED_MODULE_6__["default"], _popperjs_core_lib_modifiers_computeStyles__WEBPACK_IMPORTED_MODULE_1__["default"], _popperjs_core_lib_modifiers_eventListeners__WEBPACK_IMPORTED_MODULE_2__["default"], _popperjs_core_lib_modifiers_offset__WEBPACK_IMPORTED_MODULE_5__["default"], _popperjs_core_lib_modifiers_flip__WEBPACK_IMPORTED_MODULE_3__["default"], _popperjs_core_lib_modifiers_preventOverflow__WEBPACK_IMPORTED_MODULE_7__["default"], _popperjs_core_lib_modifiers_arrow__WEBPACK_IMPORTED_MODULE_0__["default"]]
});


/***/ }),

/***/ "./node_modules/@restart/ui/esm/useClickOutside.js":
/*!*********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/useClickOutside.js ***!
  \*********************************************************/
/*! exports provided: getRefTarget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRefTarget", function() { return getRefTarget; });
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);







const noop = () => {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const getRefTarget = ref => ref && ('current' in ref ? ref.current : ref);
const InitialTriggerEvents = {
  click: 'mousedown',
  mouseup: 'mousedown',
  pointerup: 'pointerdown'
};
/**
 * The `useClickOutside` hook registers your callback on the document that fires
 * when a pointer event is registered outside of the provided ref or element.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onClickOutside
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */

function useClickOutside(ref, onClickOutside = noop, {
  disabled,
  clickTrigger = 'click'
} = {}) {
  const preventMouseClickOutsideRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  const waitingForTrigger = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  const handleMouseCapture = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(e => {
    const currentTarget = getRefTarget(ref);
    warning__WEBPACK_IMPORTED_MODULE_5___default()(!!currentTarget, 'ClickOutside captured a close event but does not have a ref to compare it to. ' + 'useClickOutside(), should be passed a ref that resolves to a DOM node');
    preventMouseClickOutsideRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(currentTarget, e.target) || waitingForTrigger.current;
    waitingForTrigger.current = false;
  }, [ref]);
  const handleInitialMouse = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(e => {
    const currentTarget = getRefTarget(ref);

    if (currentTarget && Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(currentTarget, e.target)) {
      waitingForTrigger.current = true;
    }
  });
  const handleMouse = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(e => {
    if (!preventMouseClickOutsideRef.current) {
      onClickOutside(e);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (disabled || ref == null) return undefined;
    const doc = Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_2__["default"])(getRefTarget(ref)); // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    let currentEvent = (doc.defaultView || window).event;
    let removeInitialTriggerListener = null;

    if (InitialTriggerEvents[clickTrigger]) {
      removeInitialTriggerListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, InitialTriggerEvents[clickTrigger], handleInitialMouse, true);
    } // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.


    const removeMouseCaptureListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    let mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(el => Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(el, 'mousemove', noop));
    }

    return () => {
      removeInitialTriggerListener == null ? void 0 : removeInitialTriggerListener();
      removeMouseCaptureListener();
      removeMouseListener();
      mobileSafariHackListeners.forEach(remove => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleInitialMouse, handleMouse]);
}

/* harmony default export */ __webpack_exports__["default"] = (useClickOutside);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/usePopper.js":
/*!***************************************************!*\
  !*** ./node_modules/@restart/ui/esm/usePopper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dequal */ "./node_modules/dequal/dist/index.mjs");
/* harmony import */ var _restart_hooks_useSafeState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useSafeState */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useSafeState.js");
/* harmony import */ var _popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper */ "./node_modules/@restart/ui/esm/popper.js");
const _excluded = ["enabled", "placement", "strategy", "modifiers"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false,
  phase: 'afterWrite',
  fn: () => undefined
}; // until docjs supports type exports...

const ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;

    if ('removeAttribute' in reference) {
      const ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(id => id.trim() !== popper.id);
      if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;

    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      const ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
const EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
    enabled = true,
    placement = 'bottom',
    strategy = 'absolute',
    modifiers = EMPTY_MODIFIERS
  } = _ref,
      config = _objectWithoutPropertiesLoose(_ref, _excluded);

  const prevModifiers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modifiers);
  const popperInstanceRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = Object(_restart_hooks_useSafeState__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    name: 'updateStateModifier',
    enabled: true,
    phase: 'write',
    requires: ['computeStyles'],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach(element => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (!Object(dequal__WEBPACK_IMPORTED_MODULE_1__["dequal"])(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }

    return prevModifiers.current;
  }, [modifiers]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = Object(_popper__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(s => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* harmony default export */ __webpack_exports__["default"] = (usePopper);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/useRootClose.js":
/*!******************************************************!*\
  !*** ./node_modules/@restart/ui/esm/useRootClose.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useClickOutside */ "./node_modules/@restart/ui/esm/useClickOutside.js");





const escapeKeyCode = 27;

const noop = () => {};

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger
} = {}) {
  const onClose = onRootClose || noop;
  Object(_useClickOutside__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, onClose, {
    disabled,
    clickTrigger
  });
  const handleKeyUp = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(e => {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (disabled || ref == null) return undefined;
    const doc = Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_useClickOutside__WEBPACK_IMPORTED_MODULE_4__["getRefTarget"])(ref)); // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    let currentEvent = (doc.defaultView || window).event;
    const removeKeyupListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_0__["default"])(doc, 'keyup', e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    return () => {
      removeKeyupListener();
    };
  }, [ref, disabled, handleKeyUp]);
}

/* harmony default export */ __webpack_exports__["default"] = (useRootClose);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \***********************************************************************************/
/*! exports provided: mergeRefs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ __webpack_exports__["default"] = (useMergedRefs);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useSafeState.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useSafeState.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js");



function useSafeState(state) {
  var isMounted = Object(_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return [state[0], Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

/* harmony default export */ __webpack_exports__["default"] = (useSafeState);

/***/ }),

/***/ "./node_modules/dequal/dist/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/dist/index.mjs ***!
  \********************************************/
/*! exports provided: dequal */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dequal", function() { return dequal; });
var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Overlay.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Overlay.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_ui_Overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/ui/Overlay */ "./node_modules/@restart/ui/esm/Overlay.js");
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useCallbackRef */ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _restart_hooks_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/hooks/useIsomorphicEffect */ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useIsomorphicEffect.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _useOverlayOffset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useOverlayOffset */ "./node_modules/react-bootstrap/esm/useOverlayOffset.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/esm/Fade.js");
/* harmony import */ var _safeFindDOMNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./safeFindDOMNode */ "./node_modules/react-bootstrap/esm/safeFindDOMNode.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












const defaultProps = {
  transition: _Fade__WEBPACK_IMPORTED_MODULE_8__["default"],
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  const {
    ref
  } = props;
  const {
    ref: aRef
  } = arrowProps;

  props.ref = ref.__wrapped || (ref.__wrapped = r => ref(Object(_safeFindDOMNode__WEBPACK_IMPORTED_MODULE_9__["default"])(r)));

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = r => aRef(Object(_safeFindDOMNode__WEBPACK_IMPORTED_MODULE_9__["default"])(r)));
}

const Overlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](({
  children: overlay,
  transition,
  popperConfig = {},
  ...outerProps
}, outerRef) => {
  const popperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
  const [firstRenderedState, setFirstRenderedState] = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [ref, modifiers] = Object(_useOverlayOffset__WEBPACK_IMPORTED_MODULE_7__["default"])(outerProps.offset);
  const mergedRef = Object(_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_6__["default"])(outerRef, ref);
  const actualTransition = transition === true ? _Fade__WEBPACK_IMPORTED_MODULE_8__["default"] : transition || undefined;
  const handleFirstUpdate = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(state => {
    setFirstRenderedState(state);
    popperConfig == null ? void 0 : popperConfig.onFirstUpdate == null ? void 0 : popperConfig.onFirstUpdate(state);
  });
  Object(_restart_hooks_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (firstRenderedState) {
      popperRef.current.scheduleUpdate == null ? void 0 : popperRef.current.scheduleUpdate();
    }
  }, [firstRenderedState]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_restart_ui_Overlay__WEBPACK_IMPORTED_MODULE_2__["default"], { ...outerProps,
    ref: mergedRef,
    popperConfig: { ...popperConfig,
      modifiers: modifiers.concat(popperConfig.modifiers || []),
      onFirstUpdate: handleFirstUpdate
    },
    transition: actualTransition,
    children: (overlayProps, {
      arrowProps,
      popper: popperObj,
      show
    }) => {
      var _popperObj$state, _popperObj$state$modi;

      wrapRefs(overlayProps, arrowProps); // Need to get placement from popper object, handling case when overlay is flipped using 'flip' prop

      const updatedPlacement = popperObj == null ? void 0 : popperObj.placement;
      const popper = Object.assign(popperRef.current, {
        state: popperObj == null ? void 0 : popperObj.state,
        scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
        placement: updatedPlacement,
        outOfBoundaries: (popperObj == null ? void 0 : (_popperObj$state = popperObj.state) == null ? void 0 : (_popperObj$state$modi = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state$modi.isReferenceHidden) || false
      });
      if (typeof overlay === 'function') return overlay({ ...overlayProps,
        placement: updatedPlacement,
        show,
        ...(!transition && show && {
          className: 'show'
        }),
        popper,
        arrowProps
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](overlay, { ...overlayProps,
        placement: updatedPlacement,
        arrowProps,
        popper,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(overlay.props.className, !transition && show && 'show'),
        style: { ...overlay.props.style,
          ...overlayProps.style
        }
      });
    }
  });
});
Overlay.displayName = 'Overlay';
Overlay.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/OverlayTrigger.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/OverlayTrigger.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useTimeout */ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useTimeout.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap/esm/Overlay.js");
/* harmony import */ var _safeFindDOMNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./safeFindDOMNode */ "./node_modules/react-bootstrap/esm/safeFindDOMNode.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);













function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
} // Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.


function handleMouseOverOut( // eslint-disable-next-line @typescript-eslint/no-shadow
handler, args, relatedNative) {
  const [e] = args;
  const target = e.currentTarget;
  const related = e.relatedTarget || e.nativeEvent[relatedNative];

  if ((!related || related !== target) && !Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(target, related)) {
    handler(...args);
  }
}

const defaultProps = {
  defaultShow: false,
  trigger: ['hover', 'focus']
};

function OverlayTrigger({
  trigger,
  overlay,
  children,
  popperConfig = {},
  show: propsShow,
  defaultShow = false,
  onToggle,
  delay: propsDelay,
  placement,
  flip = placement && placement.indexOf('auto') !== -1,
  ...props
}) {
  const triggerNodeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const mergedRef = Object(_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_5__["default"])(triggerNodeRef, children.ref);
  const timeout = Object(_restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const hoverStateRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  const [show, setShow] = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_4__["useUncontrolledProp"])(propsShow, defaultShow, onToggle);
  const delay = normalizeDelay(propsDelay);
  const {
    onFocus,
    onBlur,
    onClick
  } = typeof children !== 'function' ? react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(children).props : {};

  const attachRef = r => {
    mergedRef(Object(_safeFindDOMNode__WEBPACK_IMPORTED_MODULE_7__["default"])(r));
  };

  const handleShow = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    timeout.clear();
    hoverStateRef.current = 'show';

    if (!delay.show) {
      setShow(true);
      return;
    }

    timeout.set(() => {
      if (hoverStateRef.current === 'show') setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  const handleHide = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    timeout.clear();
    hoverStateRef.current = 'hide';

    if (!delay.hide) {
      setShow(false);
      return;
    }

    timeout.set(() => {
      if (hoverStateRef.current === 'hide') setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  const handleFocus = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((...args) => {
    handleShow();
    onFocus == null ? void 0 : onFocus(...args);
  }, [handleShow, onFocus]);
  const handleBlur = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((...args) => {
    handleHide();
    onBlur == null ? void 0 : onBlur(...args);
  }, [handleHide, onBlur]);
  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((...args) => {
    setShow(!show);
    onClick == null ? void 0 : onClick(...args);
  }, [onClick, setShow, show]);
  const handleMouseOver = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((...args) => {
    handleMouseOverOut(handleShow, args, 'fromElement');
  }, [handleShow]);
  const handleMouseOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((...args) => {
    handleMouseOverOut(handleHide, args, 'toElement');
  }, [handleHide]);
  const triggers = trigger == null ? [] : [].concat(trigger);
  const triggerProps = {
    ref: attachRef
  };

  if (triggers.indexOf('click') !== -1) {
    triggerProps.onClick = handleClick;
  }

  if (triggers.indexOf('focus') !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }

  if (triggers.indexOf('hover') !== -1) {
     true ? warning__WEBPACK_IMPORTED_MODULE_3___default()(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : undefined;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [typeof children === 'function' ? children(triggerProps) : /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(children, triggerProps), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Overlay__WEBPACK_IMPORTED_MODULE_6__["default"], { ...props,
      show: show,
      onHide: handleHide,
      flip: flip,
      placement: placement,
      popperConfig: popperConfig,
      target: triggerNodeRef.current,
      children: overlay
    })]
  });
}

OverlayTrigger.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (OverlayTrigger);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Popover.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Popover.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _PopoverHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopoverHeader */ "./node_modules/react-bootstrap/esm/PopoverHeader.js");
/* harmony import */ var _PopoverBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PopoverBody */ "./node_modules/react-bootstrap/esm/PopoverBody.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./node_modules/react-bootstrap/esm/helpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const defaultProps = {
  placement: 'right'
};
const Popover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](({
  bsPrefix,
  placement,
  className,
  style,
  children,
  body,
  arrowProps,
  popper: _,
  show: _1,
  ...props
}, ref) => {
  const decoratedBsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["useBootstrapPrefix"])(bsPrefix, 'popover');
  const isRTL = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["useIsRTL"])();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getOverlayDirection"])(primaryPlacement, isRTL);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
    ref: ref,
    role: "tooltip",
    style: style,
    "x-placement": primaryPlacement,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      className: "popover-arrow",
      ...arrowProps
    }), body ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_PopoverBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: children
    }) : children]
  });
});
Popover.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(Popover, {
  Header: _PopoverHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
  Body: _PopoverBody__WEBPACK_IMPORTED_MODULE_4__["default"],
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/PopoverBody.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/PopoverBody.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('popover-body'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/PopoverHeader.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/PopoverHeader.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('popover-header'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Tooltip.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Tooltip.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./node_modules/react-bootstrap/esm/helpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const defaultProps = {
  placement: 'right'
};
const Tooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](({
  bsPrefix,
  placement,
  className,
  style,
  children,
  arrowProps,
  popper: _,
  show: _2,
  ...props
}, ref) => {
  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["useBootstrapPrefix"])(bsPrefix, 'tooltip');
  const isRTL = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["useIsRTL"])();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getOverlayDirection"])(primaryPlacement, isRTL);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      className: `${bsPrefix}-inner`,
      children: children
    })]
  });
});
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/helpers.js ***!
  \*****************************************************/
/*! exports provided: BsPrefixComponent, getOverlayDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsPrefixComponent", function() { return BsPrefixComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverlayDirection", function() { return getOverlayDirection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class BsPrefixComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {} // Need to use this instead of typeof Component to get proper type checking.

function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;

  if (placement === 'left') {
    bsDirection = isRTL ? 'end' : 'start';
  } else if (placement === 'right') {
    bsDirection = isRTL ? 'start' : 'end';
  }

  return bsDirection;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/useOverlayOffset.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/useOverlayOffset.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useOverlayOffset; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_helpers_hasClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popover */ "./node_modules/react-bootstrap/esm/Popover.js");



 // This is meant for internal use.
// This applies a custom offset to the overlay if it's a popover.

function useOverlayOffset(customOffset) {
  const overlayRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const popoverClass = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["useBootstrapPrefix"])(undefined, 'popover');
  const offset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    name: 'offset',
    options: {
      offset: () => {
        if (overlayRef.current && Object(dom_helpers_hasClass__WEBPACK_IMPORTED_MODULE_1__["default"])(overlayRef.current, popoverClass)) {
          return customOffset || _Popover__WEBPACK_IMPORTED_MODULE_3__["default"].POPPER_OFFSET;
        }

        return customOffset || [0, 0];
      }
    }
  }), [customOffset, popoverClass]);
  return [overlayRef, [offset]];
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useIsomorphicEffect.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useIsomorphicEffect.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isReactNative = typeof global !== 'undefined' && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ __webpack_exports__["default"] = (isDOM || isReactNative ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useMounted.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useMounted.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useTimeout.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useTimeout.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _useWillUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWillUnmount */ "./node_modules/react-bootstrap/node_modules/@restart/hooks/esm/useWillUnmount.js");



/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;

function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */


function useTimeout() {
  var isMounted = Object(_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])(); // types are confused between node and web here IDK

  var handleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_useWillUnmount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return clearTimeout(handleRef.current);
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };

    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }

      if (!isMounted()) return;
      clear();

      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }

    return {
      set: set,
      clear: clear
    };
  }, []);
}

/***/ })

}]);