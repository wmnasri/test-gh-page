(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/@xstate/react/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/@xstate/react/es/index.js ***!
  \************************************************/
/*! exports provided: useMachine, asEffect, asLayoutEffect, useService, useActor, useInterpret, useSelector, useSpawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMachine */ "./node_modules/@xstate/react/es/useMachine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMachine", function() { return _useMachine__WEBPACK_IMPORTED_MODULE_0__["useMachine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asEffect", function() { return _useMachine__WEBPACK_IMPORTED_MODULE_0__["asEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asLayoutEffect", function() { return _useMachine__WEBPACK_IMPORTED_MODULE_0__["asLayoutEffect"]; });

/* harmony import */ var _useService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useService */ "./node_modules/@xstate/react/es/useService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useService", function() { return _useService__WEBPACK_IMPORTED_MODULE_1__["useService"]; });

/* harmony import */ var _useActor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useActor */ "./node_modules/@xstate/react/es/useActor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useActor", function() { return _useActor__WEBPACK_IMPORTED_MODULE_2__["useActor"]; });

/* harmony import */ var _useInterpret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useInterpret */ "./node_modules/@xstate/react/es/useInterpret.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterpret", function() { return _useInterpret__WEBPACK_IMPORTED_MODULE_3__["useInterpret"]; });

/* harmony import */ var _useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSelector */ "./node_modules/@xstate/react/es/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _useSelector__WEBPACK_IMPORTED_MODULE_4__["useSelector"]; });

/* harmony import */ var _useSpawn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useSpawn */ "./node_modules/@xstate/react/es/useSpawn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpawn", function() { return _useSpawn__WEBPACK_IMPORTED_MODULE_5__["useSpawn"]; });









/***/ }),

/***/ "./node_modules/@xstate/react/es/types.js":
/*!************************************************!*\
  !*** ./node_modules/@xstate/react/es/types.js ***!
  \************************************************/
/*! exports provided: ReactEffectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactEffectType", function() { return ReactEffectType; });
var ReactEffectType;
(function (ReactEffectType) {
    ReactEffectType[ReactEffectType["Effect"] = 1] = "Effect";
    ReactEffectType[ReactEffectType["LayoutEffect"] = 2] = "LayoutEffect";
})(ReactEffectType || (ReactEffectType = {}));


/***/ }),

/***/ "./node_modules/@xstate/react/es/useActor.js":
/*!***************************************************!*\
  !*** ./node_modules/@xstate/react/es/useActor.js ***!
  \***************************************************/
/*! exports provided: isActorWithState, useActor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActorWithState", function() { return isActorWithState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useActor", function() { return useActor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");
/* harmony import */ var _useConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useConstant */ "./node_modules/@xstate/react/es/useConstant.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function isActorWithState(actorRef) {
    return 'state' in actorRef;
}
function isDeferredActor(actorRef) {
    return 'deferred' in actorRef;
}
var noop = function () {
    /* ... */
};
function defaultGetSnapshot(actorRef) {
    return 'getSnapshot' in actorRef
        ? actorRef.getSnapshot()
        : isActorWithState(actorRef)
            ? actorRef.state
            : undefined;
}
function useActor(actorRef, getSnapshot) {
    if (getSnapshot === void 0) { getSnapshot = defaultGetSnapshot; }
    var actorRefRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(actorRef);
    var deferredEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return getSnapshot(actorRef); }), 2), current = _a[0], setCurrent = _a[1];
    var send = Object(_useConstant__WEBPACK_IMPORTED_MODULE_2__["default"])(function () { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var event = args[0];
        if ( true && args.length > 1) {
            console.warn("Unexpected payload: ".concat(JSON.stringify(args[1]), ". Only a single event object can be sent to actor send() functions."));
        }
        var currentActorRef = actorRefRef.current;
        // If the previous actor is a deferred actor,
        // queue the events so that they can be replayed
        // on the non-deferred actor.
        if (isDeferredActor(currentActorRef) && currentActorRef.deferred) {
            deferredEventsRef.current.push(event);
        }
        else {
            currentActorRef.send(event);
        }
    }; });
    Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        actorRefRef.current = actorRef;
        setCurrent(getSnapshot(actorRef));
        var subscription = actorRef.subscribe({
            next: function (emitted) { return setCurrent(emitted); },
            error: noop,
            complete: noop
        });
        // Dequeue deferred events from the previous deferred actorRef
        while (deferredEventsRef.current.length > 0) {
            var deferredEvent = deferredEventsRef.current.shift();
            actorRef.send(deferredEvent);
        }
        return function () {
            subscription.unsubscribe();
        };
    }, [actorRef]);
    return [current, send];
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useConstant.js":
/*!******************************************************!*\
  !*** ./node_modules/@xstate/react/es/useConstant.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useConstant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useConstant(fn) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (!ref.current) {
        ref.current = { v: fn() };
    }
    return ref.current.v;
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useInterpret.js":
/*!*******************************************************!*\
  !*** ./node_modules/@xstate/react/es/useInterpret.js ***!
  \*******************************************************/
/*! exports provided: useInterpret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterpret", function() { return useInterpret; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var _useConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useConstant */ "./node_modules/@xstate/react/es/useConstant.js");
/* harmony import */ var _useReactEffectActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useReactEffectActions */ "./node_modules/@xstate/react/es/useReactEffectActions.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





// copied from core/src/utils.ts
// it avoids a breaking change between this package and XState which is its peer dep
function toObserver(nextHandler, errorHandler, completionHandler) {
    if (typeof nextHandler === 'object') {
        return nextHandler;
    }
    var noop = function () { return void 0; };
    return {
        next: nextHandler,
        error: errorHandler || noop,
        complete: completionHandler || noop
    };
}
function useInterpret(getMachine, options, observerOrListener) {
    if (options === void 0) { options = {}; }
    var machine = Object(_useConstant__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
        return typeof getMachine === 'function' ? getMachine() : getMachine;
    });
    if ( true &&
        typeof getMachine !== 'function') {
        var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(machine), 1), initialMachine = _a[0];
        if (getMachine !== initialMachine) {
            console.warn('Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
                'Please make sure that you pass the same Machine as argument each time.');
        }
    }
    var context = options.context, guards = options.guards, actions = options.actions, activities = options.activities, services = options.services, delays = options.delays, rehydratedState = options.state, interpreterOptions = __rest(options, ["context", "guards", "actions", "activities", "services", "delays", "state"]);
    var service = Object(_useConstant__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
        var machineConfig = {
            context: context,
            guards: guards,
            actions: actions,
            activities: activities,
            services: services,
            delays: delays
        };
        var machineWithConfig = machine.withConfig(machineConfig, function () { return (__assign(__assign({}, machine.context), context)); });
        return Object(xstate__WEBPACK_IMPORTED_MODULE_2__["interpret"])(machineWithConfig, __assign({ deferEvents: true }, interpreterOptions));
    });
    Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var sub;
        if (observerOrListener) {
            sub = service.subscribe(toObserver(observerOrListener));
        }
        return function () {
            sub === null || sub === void 0 ? void 0 : sub.unsubscribe();
        };
    }, [observerOrListener]);
    Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        service.start(rehydratedState ? xstate__WEBPACK_IMPORTED_MODULE_2__["State"].create(rehydratedState) : undefined);
        return function () {
            service.stop();
        };
    }, []);
    // Make sure options are kept updated when they change.
    // This mutation assignment is safe because the service instance is only used
    // in one place -- this hook's caller.
    Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        Object.assign(service.machine.options.actions, actions);
        Object.assign(service.machine.options.guards, guards);
        Object.assign(service.machine.options.activities, activities);
        Object.assign(service.machine.options.services, services);
        Object.assign(service.machine.options.delays, delays);
    }, [actions, guards, activities, services, delays]);
    Object(_useReactEffectActions__WEBPACK_IMPORTED_MODULE_4__["useReactEffectActions"])(service);
    return service;
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useMachine.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xstate/react/es/useMachine.js ***!
  \*****************************************************/
/*! exports provided: asEffect, asLayoutEffect, useMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asEffect", function() { return asEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asLayoutEffect", function() { return asLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMachine", function() { return useMachine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@xstate/react/es/types.js");
/* harmony import */ var _useInterpret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useInterpret */ "./node_modules/@xstate/react/es/useInterpret.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




function createReactActionFunction(exec, tag) {
    var effectExec = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // don't execute; just return
        return function () {
            return exec.apply(void 0, __spreadArray([], __read(args), false));
        };
    };
    Object.defineProperties(effectExec, {
        name: { value: "effect:".concat(exec.name) },
        __effect: { value: tag }
    });
    return effectExec;
}
function asEffect(exec) {
    return createReactActionFunction(exec, _types__WEBPACK_IMPORTED_MODULE_2__["ReactEffectType"].Effect);
}
function asLayoutEffect(exec) {
    return createReactActionFunction(exec, _types__WEBPACK_IMPORTED_MODULE_2__["ReactEffectType"].LayoutEffect);
}
function useMachine(getMachine, options) {
    if (options === void 0) { options = {}; }
    var listener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nextState) {
        // Only change the current state if:
        // - the incoming state is the "live" initial state (since it might have new actors)
        // - OR the incoming state actually changed.
        //
        // The "live" initial state will have .changed === undefined.
        var initialStateChanged = nextState.changed === undefined &&
            Object.keys(nextState.children).length;
        if (nextState.changed || initialStateChanged) {
            setState(nextState);
        }
    }, []);
    var service = Object(_useInterpret__WEBPACK_IMPORTED_MODULE_3__["useInterpret"])(getMachine, options, listener);
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        var initialState = service.machine.initialState;
        return (options.state
            ? xstate__WEBPACK_IMPORTED_MODULE_1__["State"].create(options.state)
            : initialState);
    }), 2), state = _a[0], setState = _a[1];
    return [state, service.send, service];
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useReactEffectActions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@xstate/react/es/useReactEffectActions.js ***!
  \****************************************************************/
/*! exports provided: useReactEffectActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReactEffectActions", function() { return useReactEffectActions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@xstate/react/es/types.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@xstate/react/es/utils.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




function executeEffect(action, state) {
    var exec = action.exec;
    var originalExec = exec(state.context, state._event.data, {
        action: action,
        state: state,
        _event: state._event
    });
    originalExec();
}
function useReactEffectActions(service) {
    var effectActionsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
    var layoutEffectActionsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
    Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var sub = service.subscribe(function (currentState) {
            var _a, _b;
            if (currentState.actions.length) {
                var reactEffectActions = currentState.actions.filter(function (action) {
                    return (typeof action.exec === 'function' &&
                        '__effect' in action.exec);
                });
                var _c = __read(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["partition"])(reactEffectActions, function (action) {
                    return action.exec.__effect === _types__WEBPACK_IMPORTED_MODULE_2__["ReactEffectType"].Effect;
                }), 2), effectActions = _c[0], layoutEffectActions = _c[1];
                (_a = effectActionsRef.current).push.apply(_a, __spreadArray([], __read(effectActions.map(function (effectAction) { return [effectAction, currentState]; })), false));
                (_b = layoutEffectActionsRef.current).push.apply(_b, __spreadArray([], __read(layoutEffectActions.map(function (layoutEffectAction) { return [layoutEffectAction, currentState]; })), false));
            }
        });
        return function () {
            sub.unsubscribe();
        };
    }, []);
    // this is somewhat weird - this should always be flushed within useLayoutEffect
    // but we don't want to receive warnings about useLayoutEffect being used on the server
    // so we have to use `useIsomorphicLayoutEffect` to silence those warnings
    Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        while (layoutEffectActionsRef.current.length) {
            var _a = __read(layoutEffectActionsRef.current.shift(), 2), layoutEffectAction = _a[0], effectState = _a[1];
            executeEffect(layoutEffectAction, effectState);
        }
    }); // https://github.com/davidkpiano/xstate/pull/1202#discussion_r429677773
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        while (effectActionsRef.current.length) {
            var _a = __read(effectActionsRef.current.shift(), 2), effectAction = _a[0], effectState = _a[1];
            executeEffect(effectAction, effectState);
        }
    });
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useSelector.js":
/*!******************************************************!*\
  !*** ./node_modules/@xstate/react/es/useSelector.js ***!
  \******************************************************/
/*! exports provided: useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_subscription__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");
/* harmony import */ var _useActor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useActor */ "./node_modules/@xstate/react/es/useActor.js");
/* harmony import */ var _useService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useService */ "./node_modules/@xstate/react/es/useService.js");





function isService(actor) {
    return 'state' in actor && 'machine' in actor;
}
var defaultCompare = function (a, b) { return a === b; };
var defaultGetSnapshot = function (a) {
    return isService(a)
        ? Object(_useService__WEBPACK_IMPORTED_MODULE_4__["getServiceSnapshot"])(a)
        : Object(_useActor__WEBPACK_IMPORTED_MODULE_3__["isActorWithState"])(a)
            ? a.state
            : undefined;
};
function useSelector(actor, selector, compare, getSnapshot) {
    if (compare === void 0) { compare = defaultCompare; }
    if (getSnapshot === void 0) { getSnapshot = defaultGetSnapshot; }
    var latestSelectorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(selector);
    var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var snapshot = getSnapshot(actor);
        var current = selector(snapshot);
        var notifySubscriber;
        return {
            getSnapshot: function () { return snapshot; },
            getCurrentValue: function () { return current; },
            setCurrentValue: function (newCurrent) {
                current = newCurrent;
                notifySubscriber === null || notifySubscriber === void 0 ? void 0 : notifySubscriber();
            },
            subscribe: function (callback) {
                notifySubscriber = callback;
                var sub = actor.subscribe(function (emitted) {
                    snapshot = emitted;
                    var next = latestSelectorRef.current(emitted);
                    if (!compare(current, next)) {
                        current = next;
                        callback();
                    }
                });
                return function () {
                    sub.unsubscribe();
                };
            }
        };
        // intentionally omit `getSnapshot` and `compare`
        // - `getSnapshot`: it is only supposed to read the "initial" snapshot of an actor
        // - `compare`: is really supposed to be idempotent and the same throughout the lifetime of this hook (the same assumption is made in React Redux v7)
    }, [actor]);
    var currentSelected = Object(use_subscription__WEBPACK_IMPORTED_MODULE_1__["useSubscription"])(subscription);
    var currentChanged = false;
    if (latestSelectorRef.current !== selector) {
        var selected = selector(subscription.getSnapshot());
        if (!compare(currentSelected, selected)) {
            currentChanged = true;
            currentSelected = selected;
        }
    }
    Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        latestSelectorRef.current = selector;
        // this condition should not be required, but setState bailouts are currently buggy: https://github.com/facebook/react/issues/22654
        if (currentChanged) {
            // required so we don't cause a rerender by setting state (this could create infinite rerendering loop with inline selectors)
            // at the same time we need to update the value within the subscription so new emits can compare against what has been returned to the user as current value
            subscription.setCurrentValue(currentSelected);
        }
    });
    return currentSelected;
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useService.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xstate/react/es/useService.js ***!
  \*****************************************************/
/*! exports provided: getServiceSnapshot, useService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceSnapshot", function() { return getServiceSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useService", function() { return useService; });
/* harmony import */ var _useActor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useActor */ "./node_modules/@xstate/react/es/useActor.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function getServiceSnapshot(service) {
    // TODO: remove compat lines in a new major, replace literal number with InterpreterStatus then as well
    return ('status' in service ? service.status : service._status) !== 0
        ? service.state
        : service.machine.initialState;
}
/**
 * @deprecated Use `useActor` instead.
 *
 * @param service The interpreted machine
 * @returns A tuple of the current `state` of the service and the service's `send(event)` method
 */
function useService(service) {
    if ( true && !('machine' in service)) {
        throw new Error("Attempted to use an actor-like object instead of a service in the useService() hook. Please use the useActor() hook instead.");
    }
    var _a = __read(Object(_useActor__WEBPACK_IMPORTED_MODULE_0__["useActor"])(service), 1), state = _a[0];
    return [state, service.send];
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useSpawn.js":
/*!***************************************************!*\
  !*** ./node_modules/@xstate/react/es/useSpawn.js ***!
  \***************************************************/
/*! exports provided: useSpawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpawn", function() { return useSpawn; });
/* harmony import */ var xstate_lib_behaviors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate/lib/behaviors */ "./node_modules/xstate/lib/behaviors.js");
/* harmony import */ var xstate_lib_behaviors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate_lib_behaviors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConstant */ "./node_modules/@xstate/react/es/useConstant.js");


/**
 * React hook that spawns an `ActorRef` with the specified `behavior`.
 * The returned `ActorRef` can be used with the `useActor(actorRef)` hook.
 *
 * @param behavior The actor behavior to spawn
 * @returns An ActorRef with the specified `behavior`
 */
function useSpawn(behavior) {
    var actorRef = Object(_useConstant__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        return Object(xstate_lib_behaviors__WEBPACK_IMPORTED_MODULE_0__["spawnBehavior"])(behavior);
    });
    return actorRef;
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/utils.js":
/*!************************************************!*\
  !*** ./node_modules/@xstate/react/es/utils.js ***!
  \************************************************/
/*! exports provided: partition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function partition(items, predicate) {
    var e_1, _a;
    var _b = __read([[], []], 2), truthy = _b[0], falsy = _b[1];
    try {
        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var item = items_1_1.value;
            if (predicate(item)) {
                truthy.push(item);
            }
            else {
                falsy.push(item);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return [truthy, falsy];
}


/***/ }),

/***/ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var index =  react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] ;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var shim = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;
  return shim.useSyncExternalStore(subscribe, getCurrentValue);
}

exports.useSubscription = useSubscription;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js");
}


/***/ }),

/***/ "./node_modules/xstate/lib/Actor.js":
/*!******************************************!*\
  !*** ./node_modules/xstate/lib/Actor.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/lib/_virtual/_tslib.js");
var utils = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/lib/utils.js");
var serviceScope = __webpack_require__(/*! ./serviceScope.js */ "./node_modules/xstate/lib/serviceScope.js");

function createNullActor(id) {
  var _a;

  return _a = {
    id: id,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    getSnapshot: function () {
      return undefined;
    },
    toJSON: function () {
      return {
        id: id
      };
    }
  }, _a[utils.symbolObservable] = function () {
    return this;
  }, _a;
}
/**
 * Creates a deferred actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */

function createInvocableActor(invokeDefinition, machine, context, _event) {
  var _a;

  var invokeSrc = utils.toInvokeSource(invokeDefinition.src);
  var serviceCreator = (_a = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a === void 0 ? void 0 : _a[invokeSrc.type];
  var resolvedData = invokeDefinition.data ? utils.mapContext(invokeDefinition.data, context, _event) : undefined;
  var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id); // @ts-ignore

  tempActor.meta = invokeDefinition;
  return tempActor;
}
function createDeferredActor(entity, id, data) {
  var tempActor = createNullActor(id); // @ts-ignore

  tempActor.deferred = true;

  if (utils.isMachine(entity)) {
    // "mute" the existing service scope so potential spawned actors within the `.initialState` stay deferred here
    var initialState_1 = tempActor.state = serviceScope.provide(undefined, function () {
      return (data ? entity.withContext(data) : entity).initialState;
    });

    tempActor.getSnapshot = function () {
      return initialState_1;
    };
  }

  return tempActor;
}
function isActor(item) {
  try {
    return typeof item.send === 'function';
  } catch (e) {
    return false;
  }
}
function isSpawnedActor(item) {
  return isActor(item) && 'id' in item;
} // TODO: refactor the return type, this could be written in a better way but it's best to avoid unneccessary breaking changes now

function toActorRef(actorRefLike) {
  var _a;

  return _tslib.__assign((_a = {
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    id: 'anonymous',
    getSnapshot: function () {
      return undefined;
    }
  }, _a[utils.symbolObservable] = function () {
    return this;
  }, _a), actorRefLike);
}

exports.createDeferredActor = createDeferredActor;
exports.createInvocableActor = createInvocableActor;
exports.createNullActor = createNullActor;
exports.isActor = isActor;
exports.isSpawnedActor = isSpawnedActor;
exports.toActorRef = toActorRef;


/***/ }),

/***/ "./node_modules/xstate/lib/behaviors.js":
/*!**********************************************!*\
  !*** ./node_modules/xstate/lib/behaviors.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var actions = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/lib/actions.js");
var Actor = __webpack_require__(/*! ./Actor.js */ "./node_modules/xstate/lib/Actor.js");
var utils = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/lib/utils.js");

/**
 * Returns an actor behavior from a reducer and its initial state.
 *
 * @param transition The pure reducer that returns the next state given the current state and event.
 * @param initialState The initial state of the reducer.
 * @returns An actor behavior
 */

function fromReducer(transition, initialState) {
  return {
    transition: transition,
    initialState: initialState
  };
}
function fromPromise(promiseFn) {
  var initialState = {
    error: undefined,
    data: undefined,
    status: 'pending'
  };
  return {
    transition: function (state, event, _a) {
      var parent = _a.parent,
          id = _a.id,
          observers = _a.observers;

      switch (event.type) {
        case 'fulfill':
          parent === null || parent === void 0 ? void 0 : parent.send(actions.doneInvoke(id, event.data));
          return {
            error: undefined,
            data: event.data,
            status: 'fulfilled'
          };

        case 'reject':
          parent === null || parent === void 0 ? void 0 : parent.send(actions.error(id, event.error));
          observers.forEach(function (observer) {
            observer.error(event.error);
          });
          return {
            error: event.error,
            data: undefined,
            status: 'rejected'
          };

        default:
          return state;
      }
    },
    initialState: initialState,
    start: function (_a) {
      var self = _a.self;
      promiseFn().then(function (data) {
        self.send({
          type: 'fulfill',
          data: data
        });
      }, function (reason) {
        self.send({
          type: 'reject',
          error: reason
        });
      });
      return initialState;
    }
  };
}
function spawnBehavior(behavior, options) {
  if (options === void 0) {
    options = {};
  }

  var state = behavior.initialState;
  var observers = new Set();
  var mailbox = [];
  var flushing = false;

  var flush = function () {
    if (flushing) {
      return;
    }

    flushing = true;

    while (mailbox.length > 0) {
      var event_1 = mailbox.shift();
      state = behavior.transition(state, event_1, actorCtx);
      observers.forEach(function (observer) {
        return observer.next(state);
      });
    }

    flushing = false;
  };

  var actor = Actor.toActorRef({
    id: options.id,
    send: function (event) {
      mailbox.push(event);
      flush();
    },
    getSnapshot: function () {
      return state;
    },
    subscribe: function (next, handleError, complete) {
      var observer = utils.toObserver(next, handleError, complete);
      observers.add(observer);
      observer.next(state);
      return {
        unsubscribe: function () {
          observers.delete(observer);
        }
      };
    }
  });
  var actorCtx = {
    parent: options.parent,
    self: actor,
    id: options.id || 'anonymous',
    observers: observers
  };
  state = behavior.start ? behavior.start(actorCtx) : state;
  return actor;
}

exports.fromPromise = fromPromise;
exports.fromReducer = fromReducer;
exports.spawnBehavior = spawnBehavior;


/***/ }),

/***/ "./node_modules/xstate/lib/serviceScope.js":
/*!*************************************************!*\
  !*** ./node_modules/xstate/lib/serviceScope.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Maintains a stack of the current service in scope.
 * This is used to provide the correct service to spawn().
 */
var serviceStack = [];
var provide = function (service, fn) {
  serviceStack.push(service);
  var result = fn(service);
  serviceStack.pop();
  return result;
};
var consume = function (fn) {
  return fn(serviceStack[serviceStack.length - 1]);
};

exports.consume = consume;
exports.provide = provide;


/***/ })

}]);