(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/@xstate/graph/es/graph.js":
/*!************************************************!*\
  !*** ./node_modules/@xstate/graph/es/graph.js ***!
  \************************************************/
/*! exports provided: toEventObject, getStateNodes, getChildren, serializeState, serializeEvent, deserializeEventString, getAdjacencyMap, getShortestPaths, getSimplePaths, getSimplePathsAsArray, toDirectedGraph, getPathFromEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEventObject", function() { return toEventObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateNodes", function() { return getStateNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeState", function() { return serializeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeEvent", function() { return serializeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeEventString", function() { return deserializeEventString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjacencyMap", function() { return getAdjacencyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShortestPaths", function() { return getShortestPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSimplePaths", function() { return getSimplePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSimplePathsAsArray", function() { return getSimplePathsAsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDirectedGraph", function() { return toDirectedGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathFromEvents", function() { return getPathFromEvents; });
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
function flatten(array) {
    var _a;
    return (_a = []).concat.apply(_a, __spreadArray([], __read(array), false));
}
function toEventObject(event) {
    if (typeof event === 'string' || typeof event === 'number') {
        return { type: event };
    }
    return event;
}
var EMPTY_MAP = {};
/**
 * Returns all state nodes of the given `node`.
 * @param stateNode State node to recursively get child state nodes from
 */
function getStateNodes(stateNode) {
    var states = stateNode.states;
    var nodes = Object.keys(states).reduce(function (accNodes, stateKey) {
        var childStateNode = states[stateKey];
        var childStateNodes = getStateNodes(childStateNode);
        accNodes.push.apply(accNodes, __spreadArray([childStateNode], __read(childStateNodes), false));
        return accNodes;
    }, []);
    return nodes;
}
function getChildren(stateNode) {
    if (!stateNode.states) {
        return [];
    }
    var children = Object.keys(stateNode.states).map(function (key) {
        return stateNode.states[key];
    });
    return children;
}
function serializeState(state) {
    var value = state.value, context = state.context;
    return context === undefined
        ? JSON.stringify(value)
        : JSON.stringify(value) + ' | ' + JSON.stringify(context);
}
function serializeEvent(event) {
    return JSON.stringify(event);
}
function deserializeEventString(eventString) {
    return JSON.parse(eventString);
}
var defaultValueAdjMapOptions = {
    events: {},
    filter: function () { return true; },
    stateSerializer: serializeState,
    eventSerializer: serializeEvent
};
function getValueAdjMapOptions(options) {
    return __assign(__assign({}, defaultValueAdjMapOptions), options);
}
function getAdjacencyMap(node, options) {
    var optionsWithDefaults = getValueAdjMapOptions(options);
    var filter = optionsWithDefaults.filter, stateSerializer = optionsWithDefaults.stateSerializer, eventSerializer = optionsWithDefaults.eventSerializer;
    var events = optionsWithDefaults.events;
    var adjacency = {};
    function findAdjacencies(state) {
        var e_1, _a;
        var nextEvents = state.nextEvents;
        var stateHash = stateSerializer(state);
        if (adjacency[stateHash]) {
            return;
        }
        adjacency[stateHash] = {};
        var potentialEvents = flatten(nextEvents.map(function (nextEvent) {
            var getNextEvents = events[nextEvent];
            if (!getNextEvents) {
                return [{ type: nextEvent }];
            }
            if (typeof getNextEvents === 'function') {
                return getNextEvents(state);
            }
            return getNextEvents;
        })).map(function (event) { return toEventObject(event); });
        try {
            for (var potentialEvents_1 = __values(potentialEvents), potentialEvents_1_1 = potentialEvents_1.next(); !potentialEvents_1_1.done; potentialEvents_1_1 = potentialEvents_1.next()) {
                var event_1 = potentialEvents_1_1.value;
                var nextState = void 0;
                try {
                    nextState = node.transition(state, event_1);
                }
                catch (e) {
                    throw new Error("Unable to transition from state ".concat(stateSerializer(state), " on event ").concat(eventSerializer(event_1), ": ").concat(e.message));
                }
                if ((!filter || filter(nextState)) &&
                    stateHash !== stateSerializer(nextState)) {
                    adjacency[stateHash][eventSerializer(event_1)] = {
                        state: nextState,
                        event: event_1
                    };
                    findAdjacencies(nextState);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (potentialEvents_1_1 && !potentialEvents_1_1.done && (_a = potentialEvents_1.return)) _a.call(potentialEvents_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    findAdjacencies(node.initialState);
    return adjacency;
}
function getShortestPaths(machine, options) {
    var e_2, _a, e_3, _b;
    if (!machine.states) {
        return EMPTY_MAP;
    }
    var optionsWithDefaults = getValueAdjMapOptions(options);
    var adjacency = getAdjacencyMap(machine, optionsWithDefaults);
    // weight, state, event
    var weightMap = new Map();
    var stateMap = new Map();
    var initialVertex = optionsWithDefaults.stateSerializer(machine.initialState);
    stateMap.set(initialVertex, machine.initialState);
    weightMap.set(initialVertex, [0, undefined, undefined]);
    var unvisited = new Set();
    var visited = new Set();
    unvisited.add(initialVertex);
    while (unvisited.size > 0) {
        try {
            for (var unvisited_1 = (e_2 = void 0, __values(unvisited)), unvisited_1_1 = unvisited_1.next(); !unvisited_1_1.done; unvisited_1_1 = unvisited_1.next()) {
                var vertex = unvisited_1_1.value;
                var _c = __read(weightMap.get(vertex), 1), weight = _c[0];
                try {
                    for (var _d = (e_3 = void 0, __values(Object.keys(adjacency[vertex]))), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var event_2 = _e.value;
                        var nextSegment = adjacency[vertex][event_2];
                        var nextVertex = optionsWithDefaults.stateSerializer(nextSegment.state);
                        stateMap.set(nextVertex, nextSegment.state);
                        if (!weightMap.has(nextVertex)) {
                            weightMap.set(nextVertex, [weight + 1, vertex, event_2]);
                        }
                        else {
                            var _f = __read(weightMap.get(nextVertex), 1), nextWeight = _f[0];
                            if (nextWeight > weight + 1) {
                                weightMap.set(nextVertex, [weight + 1, vertex, event_2]);
                            }
                        }
                        if (!visited.has(nextVertex)) {
                            unvisited.add(nextVertex);
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                visited.add(vertex);
                unvisited.delete(vertex);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (unvisited_1_1 && !unvisited_1_1.done && (_a = unvisited_1.return)) _a.call(unvisited_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    var statePathMap = {};
    weightMap.forEach(function (_a, stateSerial) {
        var _b = __read(_a, 3), weight = _b[0], fromState = _b[1], fromEvent = _b[2];
        var state = stateMap.get(stateSerial);
        statePathMap[stateSerial] = {
            state: state,
            paths: !fromState
                ? [
                    {
                        state: state,
                        segments: [],
                        weight: weight
                    }
                ]
                : [
                    {
                        state: state,
                        segments: statePathMap[fromState].paths[0].segments.concat({
                            state: stateMap.get(fromState),
                            event: deserializeEventString(fromEvent)
                        }),
                        weight: weight
                    }
                ]
        };
    });
    return statePathMap;
}
function getSimplePaths(machine, options) {
    var e_4, _a;
    var optionsWithDefaults = getValueAdjMapOptions(options);
    var stateSerializer = optionsWithDefaults.stateSerializer;
    if (!machine.states) {
        return EMPTY_MAP;
    }
    // @ts-ignore - excessively deep
    var adjacency = getAdjacencyMap(machine, optionsWithDefaults);
    var stateMap = new Map();
    var visited = new Set();
    var path = [];
    var paths = {};
    function util(fromState, toStateSerial) {
        var e_5, _a;
        var fromStateSerial = stateSerializer(fromState);
        visited.add(fromStateSerial);
        if (fromStateSerial === toStateSerial) {
            if (!paths[toStateSerial]) {
                paths[toStateSerial] = {
                    state: stateMap.get(toStateSerial),
                    paths: []
                };
            }
            paths[toStateSerial].paths.push({
                state: fromState,
                weight: path.length,
                segments: __spreadArray([], __read(path), false)
            });
        }
        else {
            try {
                for (var _b = __values(Object.keys(adjacency[fromStateSerial])), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subEvent = _c.value;
                    var nextSegment = adjacency[fromStateSerial][subEvent];
                    if (!nextSegment) {
                        continue;
                    }
                    var nextStateSerial = stateSerializer(nextSegment.state);
                    stateMap.set(nextStateSerial, nextSegment.state);
                    if (!visited.has(nextStateSerial)) {
                        path.push({
                            state: stateMap.get(fromStateSerial),
                            event: deserializeEventString(subEvent)
                        });
                        util(nextSegment.state, toStateSerial);
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        path.pop();
        visited.delete(fromStateSerial);
    }
    var initialStateSerial = stateSerializer(machine.initialState);
    stateMap.set(initialStateSerial, machine.initialState);
    try {
        for (var _b = __values(Object.keys(adjacency)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var nextStateSerial = _c.value;
            util(machine.initialState, nextStateSerial);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return paths;
}
function getSimplePathsAsArray(machine, options) {
    var result = getSimplePaths(machine, options);
    return Object.keys(result).map(function (key) { return result[key]; });
}
function toDirectedGraph(stateNode) {
    var edges = flatten(stateNode.transitions.map(function (t, transitionIndex) {
        var targets = t.target ? t.target : [stateNode];
        return targets.map(function (target, targetIndex) {
            var edge = {
                id: "".concat(stateNode.id, ":").concat(transitionIndex, ":").concat(targetIndex),
                source: stateNode,
                target: target,
                transition: t,
                label: {
                    text: t.eventType,
                    toJSON: function () { return ({ text: t.eventType }); }
                },
                toJSON: function () {
                    var label = edge.label;
                    return { source: stateNode.id, target: target.id, label: label };
                }
            };
            return edge;
        });
    }));
    var graph = {
        id: stateNode.id,
        stateNode: stateNode,
        children: getChildren(stateNode).map(toDirectedGraph),
        edges: edges,
        toJSON: function () {
            var id = graph.id, children = graph.children, graphEdges = graph.edges;
            return { id: id, children: children, edges: graphEdges };
        }
    };
    return graph;
}
function getPathFromEvents(machine, events) {
    var e_6, _a;
    var optionsWithDefaults = getValueAdjMapOptions({
        events: events.reduce(function (events, event) {
            var _a;
            var _b;
            (_a = events[_b = event.type]) !== null && _a !== void 0 ? _a : (events[_b] = []);
            events[event.type].push(event);
            return events;
        }, {})
    });
    var stateSerializer = optionsWithDefaults.stateSerializer, eventSerializer = optionsWithDefaults.eventSerializer;
    if (!machine.states) {
        return {
            state: machine.initialState,
            segments: [],
            weight: 0
        };
    }
    var adjacency = getAdjacencyMap(machine, optionsWithDefaults);
    var stateMap = new Map();
    var path = [];
    var initialStateSerial = stateSerializer(machine.initialState);
    stateMap.set(initialStateSerial, machine.initialState);
    var stateSerial = initialStateSerial;
    var state = machine.initialState;
    try {
        for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
            var event_3 = events_1_1.value;
            path.push({
                state: stateMap.get(stateSerial),
                event: event_3
            });
            var eventSerial = eventSerializer(event_3);
            var nextSegment = adjacency[stateSerial][eventSerial];
            if (!nextSegment) {
                throw new Error("Invalid transition from ".concat(stateSerial, " with ").concat(eventSerial));
            }
            var nextStateSerial = stateSerializer(nextSegment.state);
            stateMap.set(nextStateSerial, nextSegment.state);
            stateSerial = nextStateSerial;
            state = nextSegment.state;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return {
        state: state,
        segments: path,
        weight: path.length
    };
}


/***/ }),

/***/ "./node_modules/@xstate/graph/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/@xstate/graph/es/index.js ***!
  \************************************************/
/*! exports provided: getStateNodes, getPathFromEvents, getSimplePaths, getShortestPaths, serializeEvent, serializeState, toDirectedGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph */ "./node_modules/@xstate/graph/es/graph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStateNodes", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["getStateNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPathFromEvents", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["getPathFromEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSimplePaths", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["getSimplePaths"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShortestPaths", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["getShortestPaths"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeEvent", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["serializeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeState", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["serializeState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDirectedGraph", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["toDirectedGraph"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/@xstate/graph/es/types.js");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "./node_modules/@xstate/graph/es/types.js":
/*!************************************************!*\
  !*** ./node_modules/@xstate/graph/es/types.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/xstate-router/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/xstate-router/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const path_to_regexp_1 = __webpack_require__(/*! path-to-regexp */ "./node_modules/xstate-router/node_modules/path-to-regexp/dist.es2015/index.js");
const react_2 = __webpack_require__(/*! @xstate/react */ "./node_modules/xstate-router/node_modules/@xstate/react/lib/index.js");
const xstate_1 = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
const graph_1 = __webpack_require__(/*! @xstate/graph */ "./node_modules/@xstate/graph/es/index.js");
const actions_1 = __webpack_require__(/*! xstate/lib/actions */ "./node_modules/xstate/lib/actions.js");
const history_1 = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
function matchURI(path, uri) {
    if (path === undefined) {
        return {};
    }
    const keys = [];
    const pattern = path_to_regexp_1.pathToRegexp(path, keys);
    const match = pattern.exec(uri);
    if (!match)
        return null;
    const params = Object.create(null);
    for (let i = 1; i < match.length; i++) {
        params[keys[i - 1].name] = match[i] !== undefined ? match[i] : undefined;
    }
    return params;
}
exports.matchURI = matchURI;
function buildURI(path, match) {
    const keys = [];
    const pattern = path_to_regexp_1.pathToRegexp(path, keys); // TODO: Use caching
    const regexp = pattern.exec(path);
    if (!regexp)
        return path;
    let result = '';
    var lastIndex = 0;
    for (let i = 1; i < regexp.length; i++) {
        const param = regexp[i]; // e.g. :whatever
        const paramName = param.substr(1); // e.g. whatever
        const pos = path.indexOf(param, lastIndex);
        result += path.substring(lastIndex, pos) + match[paramName];
        lastIndex = pos + param.length;
    }
    result += path.substr(lastIndex);
    return result;
}
exports.buildURI = buildURI;
function resolve(routes, location, handleError) {
    for (const route of routes) {
        const uri = location.pathname;
        const params = matchURI(route[1], uri);
        if (params)
            return params;
    }
    if (!handleError) {
        return resolve(routes, location, true);
    }
}
exports.resolve = resolve;
exports.routerEvent = 'route-changed';
function getRoutes(config) {
    const nodes = graph_1.getStateNodes(xstate_1.Machine(config));
    const routes = [];
    for (const node of nodes) {
        if (node.meta && node.meta.path) {
            routes.push([node.path, node.meta.path]);
        }
    }
    return routes;
}
exports.getRoutes = getRoutes;
function addRouterEvents(history, configObj, routes) {
    const config = Object.assign({}, configObj);
    if (!config.on) {
        config.on = {};
    }
    else {
        config.on = Object.assign({}, config.on);
    }
    const given = exports.routerEvent in config.on ? config.on[exports.routerEvent] : [];
    const on = given instanceof Array ? given : [given];
    on.push({
        cond: (context, event) => event.dueToStateTransition,
        actions: actions_1.assign(() => ({
            location: history.location,
            match: resolve(routes, history.location)
        }))
    });
    for (const route of routes) {
        on.push({
            target: '#(machine).' + route[0].join('.'),
            cond: (context, event) => event.dueToStateTransition === false && event.route && event.route === route[1],
            actions: actions_1.assign(() => ({
                location: history.location,
                match: matchURI(route[1], history.location.pathname)
            }))
        });
    }
    config.on[exports.routerEvent] = on;
    return config;
}
exports.addRouterEvents = addRouterEvents;
function createRouterMachine({ config, options = {}, initialContext = {}, history = history_1.createBrowserHistory(), }) {
    const routes = getRoutes(config);
    const enhancedConfig = addRouterEvents(history, config, routes);
    const currentLocation = history.location;
    const enhancedContext = Object.assign(Object.assign({}, initialContext), { match: resolve(routes, currentLocation), location: currentLocation, history });
    return xstate_1.Machine(enhancedConfig, options, enhancedContext);
}
exports.createRouterMachine = createRouterMachine;
function routerMachine({ config, options = {}, initialContext = {}, history = history_1.createBrowserHistory(), }, interpreterOptions) {
    const machine = createRouterMachine({ config, options, initialContext, history });
    const service = xstate_1.interpret(machine, interpreterOptions);
    service.start();
    handleTransitionEvents(service, history, getRoutes(config));
    return service;
}
exports.routerMachine = routerMachine;
function useRouterMachine({ config, options = {}, initialContext = {}, history = history_1.createBrowserHistory(), }, interpreterOptions) {
    const machine = createRouterMachine({ config, options, initialContext, history });
    const [state, send, service] = react_2.useMachine(machine, interpreterOptions);
    react_1.useEffect(() => {
        handleTransitionEvents(service, history, getRoutes(config));
    }, []);
    return { state, send, service };
}
exports.useRouterMachine = useRouterMachine;
function handleTransitionEvents(service, history, routes) {
    let debounceHistoryFlag = false;
    let debounceState = false;
    handleRouterTransition(history.location);
    service.onTransition(state => {
        const stateNode = getCurrentStateNode(service, state);
        const path = findPathRecursive(stateNode);
        if (debounceState
            // debounce only if no target for event was given e.g. in case of 
            // fetching 'route-changed' events by the user
            && debounceState[1] === path) {
            debounceState = false;
            return;
        }
        if (!matchURI(path, history.location.pathname)) {
            debounceHistoryFlag = true;
            const uri = buildURI(path, state.context.match);
            history.push(uri);
            service.send({ type: exports.routerEvent, dueToStateTransition: true, route: path, service: service });
        }
    });
    history.listen(location => {
        if (!service.initialized) {
            service.start();
        }
        if (debounceHistoryFlag) {
            debounceHistoryFlag = false;
            return;
        }
        handleRouterTransition(location, true);
    });
    function handleRouterTransition(location, debounceHistory) {
        let matchingRoute;
        for (const route of routes) {
            const params = matchURI(route[1], location.pathname);
            if (params) {
                matchingRoute = route;
                break;
            }
        }
        if (matchingRoute) {
            debounceState = matchingRoute[1]; // debounce only for this route
            service.send({ type: exports.routerEvent, dueToStateTransition: false, route: matchingRoute[1], service: service });
            const state = service.state.value;
            if (!xstate_1.matchesState(state, matchingRoute[0].join('.'))) {
                const stateNode = getCurrentStateNode(service, service.state);
                if (stateNode.meta && stateNode.meta.path) {
                    if (debounceHistory) {
                        debounceHistoryFlag = true;
                    }
                    history.replace(stateNode.meta.path);
                }
            }
        }
    }
}
exports.handleTransitionEvents = handleTransitionEvents;
function findPathRecursive(stateNode) {
    let actual = stateNode;
    while (actual.parent) {
        if (actual.meta && actual.meta.path) {
            return actual.meta.path;
        }
        actual = actual.parent;
    }
}
exports.findPathRecursive = findPathRecursive;
function getCurrentStateNode(service, state) {
    const strings = state.toStrings();
    const stateNode = service.machine.getStateNodeByPath(strings[strings.length - 1]);
    return stateNode;
}


/***/ }),

/***/ "./node_modules/xstate-router/node_modules/@xstate/react/lib/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/xstate-router/node_modules/@xstate/react/lib/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
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
var __rest = (this && this.__rest) || function (s, e) {
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
var __read = (this && this.__read) || function (o, n) {
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var xstate_1 = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
var defaultOptions = {
    immediate: false
};
function useMachine(machine, options) {
    if (options === void 0) { options = defaultOptions; }
    var context = options.context, guards = options.guards, actions = options.actions, activities = options.activities, services = options.services, delays = options.delays, immediate = options.immediate, rehydratedState = options.state, interpreterOptions = __rest(options, ["context", "guards", "actions", "activities", "services", "delays", "immediate", "state"]);
    var machineConfig = {
        context: context,
        guards: guards,
        actions: actions,
        activities: activities,
        services: services,
        delays: delays
    };
    // Reference the machine
    var machineRef = react_1.useRef(null);
    // Create the machine only once
    // See https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
    if (machineRef.current === null) {
        machineRef.current = machine.withConfig(machineConfig, __assign(__assign({}, machine.context), context));
    }
    // Reference the service
    var serviceRef = react_1.useRef(null);
    // Create the service only once
    if (serviceRef.current === null) {
        serviceRef.current = xstate_1.interpret(machineRef.current, interpreterOptions).onTransition(function (state) {
            // Update the current machine state when a transition occurs
            if (state.changed) {
                setCurrent(state);
            }
        });
    }
    var service = serviceRef.current;
    // Make sure actions and services are kept updated when they change.
    // This mutation assignment is safe because the service instance is only used
    // in one place -- this hook's caller.
    react_1.useEffect(function () {
        Object.assign(service.machine.options.actions, actions);
    }, [actions]);
    react_1.useEffect(function () {
        Object.assign(service.machine.options.services, services);
    }, [services]);
    // Keep track of the current machine state
    var initialState = rehydratedState
        ? xstate_1.State.create(rehydratedState)
        : service.initialState;
    var _a = __read(react_1.useState(function () { return initialState; }), 2), current = _a[0], setCurrent = _a[1];
    // Start service immediately (before mount) if specified in options
    if (immediate) {
        service.start();
    }
    react_1.useEffect(function () {
        // Start the service when the component mounts.
        // Note: the service will start only if it hasn't started already.
        //
        // If a rehydrated state was provided, use the resolved `initialState`.
        service.start(rehydratedState ? initialState : undefined);
        return function () {
            // Stop the service when the component unmounts
            service.stop();
        };
    }, []);
    return [current, service.send, service];
}
exports.useMachine = useMachine;
function useService(service) {
    var _a = __read(react_1.useState(service.state), 2), current = _a[0], setCurrent = _a[1];
    react_1.useEffect(function () {
        // Set to current service state as there is a possibility
        // of a transition occurring between the initial useState()
        // initialization and useEffect() commit.
        setCurrent(service.state);
        var listener = function (state) {
            if (state.changed) {
                setCurrent(state);
            }
        };
        var sub = service.subscribe(listener);
        return function () {
            sub.unsubscribe();
        };
    }, [service]);
    return [current, service.send, service];
}
exports.useService = useService;
var useActor_1 = __webpack_require__(/*! ./useActor */ "./node_modules/xstate-router/node_modules/@xstate/react/lib/useActor.js");
exports.useActor = useActor_1.useActor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/xstate-router/node_modules/@xstate/react/lib/useActor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/xstate-router/node_modules/@xstate/react/lib/useActor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function useActor(actor) {
    var _a = __read(react_1.useState(undefined), 2), current = _a[0], setCurrent = _a[1];
    var actorRef = react_1.useRef(actor);
    react_1.useEffect(function () {
        if (actor) {
            actorRef.current = actor;
            var sub_1 = actor.subscribe(setCurrent);
            return function () {
                sub_1.unsubscribe();
            };
        }
    }, [actor]);
    return [current, actorRef.current ? actorRef.current.send : function () { return void 0; }];
}
exports.useActor = useActor;
//# sourceMappingURL=useActor.js.map

/***/ }),

/***/ "./node_modules/xstate-router/node_modules/path-to-regexp/dist.es2015/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/xstate-router/node_modules/path-to-regexp/dist.es2015/index.js ***!
  \*************************************************************************************/
/*! exports provided: parse, compile, tokensToFunction, match, regexpToFunction, tokensToRegexp, pathToRegexp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToFunction", function() { return tokensToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexpToFunction", function() { return regexpToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToRegexp", function() { return tokensToRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToRegexp", function() { return pathToRegexp; });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: "",
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    }
                    else {
                        route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                    }
                }
                else {
                    if (token.modifier === "+" || token.modifier === "*") {
                        route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                    }
                    else {
                        route += "(".concat(token.pattern, ")").concat(token.modifier);
                    }
                }
            }
            else {
                route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
        }
    }
    if (end) {
        if (!strict)
            route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1
            : endToken === undefined;
        if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map

/***/ })

}]);