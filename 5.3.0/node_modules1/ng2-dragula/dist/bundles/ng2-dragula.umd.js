(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),exports, require('dragula'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng2-dragula', ['@angular/core','exports', 'dragula', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory(global.ng.core,(global['ng2-dragula'] = {}),global.dragula,global.ng.core,global.rxjs,global.rxjs.operators));
}(this, (function (ɵngcc0,exports,dragulaExpt,core,rxjs,operators) { 'use strict';

    var dragulaExpt__default = 'default' in dragulaExpt ? dragulaExpt['default'] : dragulaExpt;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Group = (function () {
        function Group(name, drake, options) {
            this.name = name;
            this.drake = drake;
            this.options = options;
            this.initEvents = false;
        }
        return Group;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var EventTypes = {
        Cancel: "cancel",
        Cloned: "cloned",
        Drag: "drag",
        DragEnd: "dragend",
        Drop: "drop",
        Out: "out",
        Over: "over",
        Remove: "remove",
        Shadow: "shadow",
        DropModel: "dropModel",
        RemoveModel: "removeModel",
    };
    /** @type {?} */
    var AllEvents = Object.keys(EventTypes).map(function (k) { return (EventTypes[(k)]); });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var dragula = dragulaExpt__default || dragulaExpt;
    var DrakeFactory = (function () {
        function DrakeFactory(build) {
            if (build === void 0) {
                build = dragula;
            }
            this.build = build;
        }
        return DrakeFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var filterEvent = function (eventType, filterDragType, projector) {
        return function (input) {
            return input.pipe(operators.filter(function (_a) {
                var event = _a.event, name = _a.name;
                return event === eventType
                    && (filterDragType === undefined || name === filterDragType);
            }), operators.map(function (_a) {
                var name = _a.name, args = _a.args;
                return projector(name, args);
            }));
        };
    };
    /** @type {?} */
    var elContainerSourceProjector = function (name, _a) {
        var _b = __read(_a, 3), el = _b[0], container = _b[1], source = _b[2];
        return ({ name: name, el: el, container: container, source: source });
    };
    var DragulaService = (function () {
        function DragulaService(drakeFactory) {
            if (drakeFactory === void 0) {
                drakeFactory = null;
            }
            var _this = this;
            this.drakeFactory = drakeFactory;
            this.dispatch$ = new rxjs.Subject();
            this.drag = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, function (name, _a) {
                    var _b = __read(_a, 2), el = _b[0], source = _b[1];
                    return ({ name: name, el: el, source: source });
                }));
            };
            this.dragend = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, function (name, _a) {
                    var _b = __read(_a, 1), el = _b[0];
                    return ({ name: name, el: el });
                }));
            };
            this.drop = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, function (name, _a) {
                    var _b = __read(_a, 4), el = _b[0], target = _b[1], source = _b[2], sibling = _b[3];
                    return { name: name, el: el, target: target, source: source, sibling: sibling };
                }));
            };
            this.elContainerSource = function (eventType) {
                return function (groupName) {
                    return _this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
                };
            };
            this.cancel = this.elContainerSource(EventTypes.Cancel);
            this.remove = this.elContainerSource(EventTypes.Remove);
            this.shadow = this.elContainerSource(EventTypes.Shadow);
            this.over = this.elContainerSource(EventTypes.Over);
            this.out = this.elContainerSource(EventTypes.Out);
            this.cloned = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, function (name, _a) {
                    var _b = __read(_a, 3), clone = _b[0], original = _b[1], cloneType = _b[2];
                    return { name: name, clone: clone, original: original, cloneType: cloneType };
                }));
            };
            this.dropModel = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, function (name, _a) {
                    var _b = __read(_a, 9), el = _b[0], target = _b[1], source = _b[2], sibling = _b[3], item = _b[4], sourceModel = _b[5], targetModel = _b[6], sourceIndex = _b[7], targetIndex = _b[8];
                    return { name: name, el: el, target: target, source: source, sibling: sibling, item: item, sourceModel: sourceModel, targetModel: targetModel, sourceIndex: sourceIndex, targetIndex: targetIndex };
                }));
            };
            this.removeModel = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, function (name, _a) {
                    var _b = __read(_a, 6), el = _b[0], container = _b[1], source = _b[2], item = _b[3], sourceModel = _b[4], sourceIndex = _b[5];
                    return { name: name, el: el, container: container, source: source, item: item, sourceModel: sourceModel, sourceIndex: sourceIndex };
                }));
            };
            this.groups = {};
            if (this.drakeFactory === null) {
                this.drakeFactory = new DrakeFactory();
            }
        }
        /**
         * Public mainly for testing purposes. Prefer `createGroup()`.
         * @param {?} group
         * @return {?}
         */
        DragulaService.prototype.add = /**
         * Public mainly for testing purposes. Prefer `createGroup()`.
         * @param {?} group
         * @return {?}
         */
            function (group) {
                /** @type {?} */
                var existingGroup = this.find(group.name);
                if (existingGroup) {
                    throw new Error('Group named: "' + group.name + '" already exists.');
                }
                this.groups[group.name] = group;
                this.handleModels(group);
                this.setupEvents(group);
                return group;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        DragulaService.prototype.find = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.groups[name];
            };
        /**
         * @param {?} name
         * @return {?}
         */
        DragulaService.prototype.destroy = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
                var group = this.find(name);
                if (!group) {
                    return;
                }
                group.drake && group.drake.destroy();
                delete this.groups[name];
            };
        /**
         * Creates a group with the specified name and options.
         *
         * Note: formerly known as `setOptions`
         * @template T
         * @param {?} name
         * @param {?} options
         * @return {?}
         */
        DragulaService.prototype.createGroup = /**
         * Creates a group with the specified name and options.
         *
         * Note: formerly known as `setOptions`
         * @template T
         * @param {?} name
         * @param {?} options
         * @return {?}
         */
            function (name, options) {
                return this.add(new Group(name, this.drakeFactory.build([], options), options));
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        DragulaService.prototype.handleModels = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var _this = this;
                var name = _a.name, drake = _a.drake, options = _a.options;
                /** @type {?} */
                var dragElm;
                /** @type {?} */
                var dragIndex;
                /** @type {?} */
                var dropIndex;
                drake.on('remove', function (el, container, source) {
                    if (!drake.models) {
                        return;
                    }
                    /** @type {?} */
                    var sourceModel = drake.models[drake.containers.indexOf(source)];
                    sourceModel = sourceModel.slice(0);
                    /** @type {?} */
                    var item = sourceModel.splice(dragIndex, 1)[0];
                    // console.log('REMOVE');
                    // console.log(sourceModel);
                    // console.log('REMOVE');
                    // console.log(sourceModel);
                    _this.dispatch$.next({
                        event: EventTypes.RemoveModel,
                        name: name,
                        args: [el, container, source, item, sourceModel, dragIndex]
                    });
                });
                drake.on('drag', function (el, source) {
                    if (!drake.models) {
                        return;
                    }
                    dragElm = el;
                    dragIndex = _this.domIndexOf(el, source);
                });
                drake.on('drop', function (dropElm, target, source, sibling) {
                    if (!drake.models || !target) {
                        return;
                    }
                    dropIndex = _this.domIndexOf(dropElm, target);
                    /** @type {?} */
                    var sourceModel = drake.models[drake.containers.indexOf(source)];
                    /** @type {?} */
                    var targetModel = drake.models[drake.containers.indexOf(target)];
                    /** @type {?} */
                    var item;
                    if (target === source) {
                        sourceModel = sourceModel.slice(0);
                        item = sourceModel.splice(dragIndex, 1)[0];
                        sourceModel.splice(dropIndex, 0, item);
                        // this was true before we cloned and updated sourceModel,
                        // but targetModel still has the old value
                        targetModel = sourceModel;
                    }
                    else {
                        /** @type {?} */
                        var isCopying = dragElm !== dropElm;
                        item = sourceModel[dragIndex];
                        if (isCopying) {
                            if (!options.copyItem) {
                                throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
                            }
                            item = options.copyItem(item);
                        }
                        if (!isCopying) {
                            sourceModel = sourceModel.slice(0);
                            sourceModel.splice(dragIndex, 1);
                        }
                        targetModel = targetModel.slice(0);
                        targetModel.splice(dropIndex, 0, item);
                        if (isCopying) {
                            try {
                                target.removeChild(dropElm);
                            }
                            catch (e) { }
                        }
                    }
                    _this.dispatch$.next({
                        event: EventTypes.DropModel,
                        name: name,
                        args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
                    });
                });
            };
        /**
         * @param {?} group
         * @return {?}
         */
        DragulaService.prototype.setupEvents = /**
         * @param {?} group
         * @return {?}
         */
            function (group) {
                var _this = this;
                if (group.initEvents) {
                    return;
                }
                group.initEvents = true;
                /** @type {?} */
                var name = group.name;
                /** @type {?} */
                var emitter = function (event) {
                    group.drake.on(event, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        _this.dispatch$.next({ event: event, name: name, args: args });
                    });
                };
                AllEvents.forEach(emitter);
            };
        /**
         * @param {?} child
         * @param {?} parent
         * @return {?}
         */
        DragulaService.prototype.domIndexOf = /**
         * @param {?} child
         * @param {?} parent
         * @return {?}
         */
            function (child, parent) {
                return Array.prototype.indexOf.call(parent.children, child);
            };
        /** @nocollapse */
        DragulaService.ctorParameters = function () {
            return [
                { type: DrakeFactory, decorators: [{ type: core.Optional }] }
            ];
        };
DragulaService.ɵfac = function DragulaService_Factory(t) { return new (t || DragulaService)(ɵngcc0.ɵɵinject(DrakeFactory, 8)); };
DragulaService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DragulaService, factory: function (t) { return DragulaService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragulaService, [{
        type: core.Injectable
    }], function () { return [{ type: DrakeFactory, decorators: [{
                type: core.Optional
            }] }]; }, null); })();
        return DragulaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DragulaDirective = (function () {
        function DragulaDirective(el, dragulaService) {
            this.el = el;
            this.dragulaService = dragulaService;
            this.dragulaModelChange = new core.EventEmitter();
        }
        Object.defineProperty(DragulaDirective.prototype, "container", {
            get: /**
             * @return {?}
             */ function () {
                return this.el && this.el.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        DragulaDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes && changes.dragula) {
                    var _a = changes.dragula, prev = _a.previousValue, current = _a.currentValue, firstChange = _a.firstChange;
                    /** @type {?} */
                    var hadPreviousValue = !!prev;
                    /** @type {?} */
                    var hasNewValue = !!current;
                    // something -> null       =>  teardown only
                    // something -> something  =>  teardown, then setup
                    //      null -> something  =>  setup only
                    //
                    //      null -> null (precluded by fact of change being present)
                    if (hadPreviousValue) {
                        this.teardown(prev);
                    }
                    if (hasNewValue) {
                        this.setup();
                    }
                }
                else if (changes && changes.dragulaModel) {
                    var _b = changes.dragulaModel, prev = _b.previousValue, current = _b.currentValue, firstChange = _b.firstChange;
                    var drake = this.group.drake;
                    if (this.dragula && drake) {
                        drake.models = drake.models || [];
                        /** @type {?} */
                        var prevIndex = drake.models.indexOf(prev);
                        if (prevIndex !== -1) {
                            // delete the previous
                            drake.models.splice(prevIndex, 1);
                            // maybe insert a new one at the same spot
                            if (!!current) {
                                drake.models.splice(prevIndex, 0, current);
                            }
                        }
                        else if (!!current) {
                            // no previous one to remove; just push this one.
                            drake.models.push(current);
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        DragulaDirective.prototype.setup = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var checkModel = function (group) {
                    if (_this.dragulaModel) {
                        if (group.drake.models) {
                            group.drake.models.push(_this.dragulaModel);
                        }
                        else {
                            group.drake.models = [_this.dragulaModel];
                        }
                    }
                };
                /** @type {?} */
                var group = this.dragulaService.find(this.dragula);
                if (!group) {
                    /** @type {?} */
                    var options = {};
                    group = this.dragulaService.createGroup(this.dragula, options);
                }
                // ensure model and container element are pushed
                checkModel(group);
                group.drake.containers.push(this.container);
                this.subscribe(this.dragula);
                this.group = group;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        DragulaDirective.prototype.subscribe = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                var _this = this;
                this.subs = new rxjs.Subscription();
                this.subs.add(this.dragulaService
                    .dropModel(name)
                    .subscribe(function (_a) {
                    var source = _a.source, target = _a.target, sourceModel = _a.sourceModel, targetModel = _a.targetModel;
                    if (source === _this.el.nativeElement) {
                        _this.dragulaModelChange.emit(sourceModel);
                    }
                    else if (target === _this.el.nativeElement) {
                        _this.dragulaModelChange.emit(targetModel);
                    }
                }));
                this.subs.add(this.dragulaService
                    .removeModel(name)
                    .subscribe(function (_a) {
                    var source = _a.source, sourceModel = _a.sourceModel;
                    if (source === _this.el.nativeElement) {
                        _this.dragulaModelChange.emit(sourceModel);
                    }
                }));
            };
        /**
         * @param {?} groupName
         * @return {?}
         */
        DragulaDirective.prototype.teardown = /**
         * @param {?} groupName
         * @return {?}
         */
            function (groupName) {
                if (this.subs) {
                    this.subs.unsubscribe();
                }
                /** @type {?} */
                var group = this.dragulaService.find(groupName);
                if (group) {
                    /** @type {?} */
                    var itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);
                    if (itemToRemove !== -1) {
                        group.drake.containers.splice(itemToRemove, 1);
                    }
                    if (this.dragulaModel && group.drake && group.drake.models) {
                        /** @type {?} */
                        var modelIndex = group.drake.models.indexOf(this.dragulaModel);
                        if (modelIndex !== -1) {
                            group.drake.models.splice(modelIndex, 1);
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        DragulaDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.teardown(this.dragula);
            };
        /** @nocollapse */
        DragulaDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragulaService }
            ];
        };
        DragulaDirective.propDecorators = {
            dragula: [{ type: core.Input }],
            dragulaModel: [{ type: core.Input }],
            dragulaModelChange: [{ type: core.Output }]
        };
DragulaDirective.ɵfac = function DragulaDirective_Factory(t) { return new (t || DragulaDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DragulaService)); };
DragulaDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DragulaDirective, selectors: [["", "dragula", ""]], inputs: { dragula: "dragula", dragulaModel: "dragulaModel" }, outputs: { dragulaModelChange: "dragulaModelChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragulaDirective, [{
        type: core.Directive,
        args: [{ selector: '[dragula]' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: DragulaService }]; }, { dragulaModelChange: [{
            type: core.Output
        }], dragula: [{
            type: core.Input
        }], dragulaModel: [{
            type: core.Input
        }] }); })();
        return DragulaDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DragulaModule = (function () {
        function DragulaModule() {
        }
        /**
         * @return {?}
         */
        DragulaModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: DragulaModule,
                    providers: [DragulaService]
                };
            };
DragulaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DragulaModule });
DragulaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DragulaModule_Factory(t) { return new (t || DragulaModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DragulaModule, { declarations: [DragulaDirective], exports: [DragulaDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragulaModule, [{
        type: core.NgModule,
        args: [{
                exports: [DragulaDirective],
                declarations: [DragulaDirective]
            }]
    }], function () { return []; }, null); })();
        return DragulaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var MockDrakeFactory = new DrakeFactory(function (containers, options) {
        return new MockDrake(containers, options);
    });
    /**
     * You can use MockDrake to simulate Drake events.
     *
     * The three methods that actually do anything are `on(event, listener)`,
     * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
     * events, and if you injected MockDrake properly with MockDrakeFactory or
     * mocked the DragulaService.find() method, then you can make ng2-dragula think
     * drags and drops are happening.
     *
     * Caveats:
     *
     * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
     * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
     *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
     * 3. None of the other methods do anything.
     *    That's ok, because ng2-dragula doesn't use them.
     */
    var /**
     * You can use MockDrake to simulate Drake events.
     *
     * The three methods that actually do anything are `on(event, listener)`,
     * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
     * events, and if you injected MockDrake properly with MockDrakeFactory or
     * mocked the DragulaService.find() method, then you can make ng2-dragula think
     * drags and drops are happening.
     *
     * Caveats:
     *
     * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
     * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
     *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
     * 3. None of the other methods do anything.
     *    That's ok, because ng2-dragula doesn't use them.
     */ MockDrake = (function () {
        /**
         * @param containers A list of container elements.
         * @param options These will NOT be used. At all.
         * @param models Nonstandard, but useful for testing using `new MockDrake()` directly.
         *               Note, default value is undefined, like a real Drake. Don't change that.
         */
        function MockDrake(containers, options, models) {
            if (containers === void 0) {
                containers = [];
            }
            if (options === void 0) {
                options = {};
            }
            this.containers = containers;
            this.options = options;
            this.models = models;
            /* Doesn't represent anything meaningful. */
            this.dragging = false;
            this.emitter$ = new rxjs.Subject();
            this.subs = new rxjs.Subscription();
        }
        /* Does nothing useful. */
        /**
         * @param {?} item
         * @return {?}
         */
        MockDrake.prototype.start = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.dragging = true;
            };
        /* Does nothing useful. */
        /**
         * @return {?}
         */
        MockDrake.prototype.end = /**
         * @return {?}
         */
            function () {
                this.dragging = false;
            };
        /**
         * @param {?=} revert
         * @return {?}
         */
        MockDrake.prototype.cancel = /**
         * @param {?=} revert
         * @return {?}
         */
            function (revert) {
                this.dragging = false;
            };
        /* Does nothing useful. */
        /**
         * @return {?}
         */
        MockDrake.prototype.remove = /**
         * @return {?}
         */
            function () {
                this.dragging = false;
            };
        /**
         * @param {?} event
         * @param {?} callback
         * @return {?}
         */
        MockDrake.prototype.on = /**
         * @param {?} event
         * @param {?} callback
         * @return {?}
         */
            function (event, callback) {
                this.subs.add(this.emitter$
                    .pipe(operators.filter(function (_a) {
                    var eventType = _a.eventType;
                    return eventType === event;
                }))
                    .subscribe(function (_a) {
                    var args = _a.args;
                    callback.apply(void 0, __spread(args));
                }));
            };
        /**
         * @return {?}
         */
        MockDrake.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.subs.unsubscribe();
            };
        /**
         * This is the most useful method. You can use it to manually fire events that would normally
         * be fired by a real drake.
         *
         * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
         * DragulaService uses to implement [dragulaModel].
         *
         * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
         *
         * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
         */
        /**
         * This is the most useful method. You can use it to manually fire events that would normally
         * be fired by a real drake.
         *
         * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
         * DragulaService uses to implement [dragulaModel].
         *
         * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
         *
         * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
         * @param {?} eventType
         * @param {...?} args
         * @return {?}
         */
        MockDrake.prototype.emit = /**
         * This is the most useful method. You can use it to manually fire events that would normally
         * be fired by a real drake.
         *
         * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
         * DragulaService uses to implement [dragulaModel].
         *
         * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
         *
         * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
         * @param {?} eventType
         * @param {...?} args
         * @return {?}
         */
            function (eventType) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.emitter$.next({ eventType: eventType, args: args });
            };
        return MockDrake;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.DragulaDirective = DragulaDirective;
    exports.DragulaService = DragulaService;
    exports.DragulaModule = DragulaModule;
    exports.dragula = dragula;
    exports.DrakeFactory = DrakeFactory;
    exports.Group = Group;
    exports.EventTypes = EventTypes;
    exports.MockDrake = MockDrake;
    exports.MockDrakeFactory = MockDrakeFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyYWd1bGEudW1kLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6L25nMi1kcmFndWxhL0dyb3VwLnRzIiwibmc6L25nMi1kcmFndWxhL0V2ZW50VHlwZXMudHMiLCJuZzovbmcyLWRyYWd1bGEvRHJha2VGYWN0b3J5LnRzIiwibmc6L25nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5zZXJ2aWNlLnRzIiwibmc6L25nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5kaXJlY3RpdmUudHMiLCJuZzovbmcyLWRyYWd1bGEvY29tcG9uZW50cy9kcmFndWxhLm1vZHVsZS50cyIsIm5nOi9uZzItZHJhZ3VsYS9Nb2NrRHJha2UudHMiXSwibmFtZXMiOlsiKChkcmFndWxhRXhwdCkpLmRlZmF1bHQiLCJmaWx0ZXIiLCJtYXAiLCJTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIk9wdGlvbmFsIiwiRXZlbnRFbWl0dGVyIiwiU3Vic2NyaXB0aW9uIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUE7QUFDQTtBQUNJO0FBQ0k7QUFDSTtBQUVHO0FBQUM7QUFDSTtBQUNJO0FBQ0k7QUFFRztBQUFDO0FBRS9CO0FBQXVDO0FBQ3hDLG9CQXVHdUIsQ0FBQyxFQUFFLENBQUM7QUFDM0IsUUFBSSxJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvRCxRQUFJLElBQUksQ0FBQyxDQUFDO0FBQUUsWUFBQSxPQUFPLENBQUMsQ0FBQztBQUNyQixRQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLFFBQUks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QUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFDdklBLEFBQUEsQUFFQSxBQUNBLEFBQ0EsQUFDQSxBQUZBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUpBLEFBQUEsQUFLQSxBQVRBLEFBVUEsQUNUQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFDWkEsQUFDQSxBQUFBLEFBQUEsQUFBQUQsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVJBLEFBU0EsQUNFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBQyxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0FDLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBUkEsQUFRQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFxRkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBSkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQTlFQSxBQUFBQyxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFGQSxBQUVBLEFBREEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUZBLEFBRUEsQUFEQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUZBLEFBRUEsQUFEQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUZBLEFBRUEsQUFEQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUF4TkFDLEFBQUEsQUF2QkEsQUFBQSxBQTBHQUMsQUFBQSxBQWhIQSxBQ0FBLEFBbUJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFUQSxBQUFBQyxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBQyxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFoSUFDLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFOQUMsQUFBQSxBQUNBLEFBQUEsQUFPQUMsQUFBQSxBQUNBQSxBQUFBLEFBQ0FDLEFBQUEsQUFWQSxBQ0FBLEFBU0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBVkFDLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBUEEsQUNPQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFrQkEsQUFBQSxBQU9BLEFBQ0EsQUFDQSxBQUNBLEFBRkEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQXNCQSxBQUFBVCxBQUFBLEFBQUEsQUFFQSxBQUFBSSxBQUFBLEFBQUEsQUEzQkEsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBTixBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBYUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQTlGQSxBQWdHQSIsInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSBcIi4vRHJha2VXaXRoTW9kZWxzXCI7XG5pbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gXCIuL0RyYWd1bGFPcHRpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gIHB1YmxpYyBpbml0RXZlbnRzOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRyYWtlOiBEcmFrZVdpdGhNb2RlbHMsXG4gICAgcHVibGljIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zXG4gICkge31cbn1cbiIsImV4cG9ydCBlbnVtIEV2ZW50VHlwZXMge1xuICAgIENhbmNlbCA9IFwiY2FuY2VsXCIsXG4gICAgQ2xvbmVkID0gXCJjbG9uZWRcIixcbiAgICBEcmFnID0gXCJkcmFnXCIsXG4gICAgRHJhZ0VuZCA9IFwiZHJhZ2VuZFwiLFxuICAgIERyb3AgPSBcImRyb3BcIixcbiAgICBPdXQgPSBcIm91dFwiLFxuICAgIE92ZXIgPSBcIm92ZXJcIixcbiAgICBSZW1vdmUgPSBcInJlbW92ZVwiLFxuICAgIFNoYWRvdyA9IFwic2hhZG93XCIsXG4gICAgRHJvcE1vZGVsID0gXCJkcm9wTW9kZWxcIixcbiAgICBSZW1vdmVNb2RlbCA9IFwicmVtb3ZlTW9kZWxcIixcbn1cblxuZXhwb3J0IGNvbnN0IEFsbEV2ZW50czogRXZlbnRUeXBlc1tdID0gT2JqZWN0LmtleXMoRXZlbnRUeXBlcykubWFwKGsgPT4gRXZlbnRUeXBlc1trIGFzIGFueV0gYXMgRXZlbnRUeXBlcyk7XG5cbiIsImltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgKiBhcyBkcmFndWxhRXhwdCBmcm9tICdkcmFndWxhJztcbmV4cG9ydCBjb25zdCBkcmFndWxhOiAoY29udGFpbmVycz86IGFueSwgb3B0aW9ucz86IGFueSkgPT4gYW55ID0gKGRyYWd1bGFFeHB0IGFzIGFueSkuZGVmYXVsdCB8fCBkcmFndWxhRXhwdDtcblxuZXhwb3J0IHR5cGUgRHJha2VCdWlsZGVyID0gKGNvbnRhaW5lcnM6IGFueVtdLCBvcHRpb25zOiBEcmFndWxhT3B0aW9ucykgPT4gRHJha2VXaXRoTW9kZWxzO1xuXG5leHBvcnQgY2xhc3MgRHJha2VGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBidWlsZDogRHJha2VCdWlsZGVyID0gZHJhZ3VsYSkge31cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uL0dyb3VwJztcbmltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi4vRHJhZ3VsYU9wdGlvbnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFR5cGVzLCBBbGxFdmVudHMgfSBmcm9tICcuLi9FdmVudFR5cGVzJztcbmltcG9ydCB7IERyYWtlRmFjdG9yeSB9IGZyb20gJy4uL0RyYWtlRmFjdG9yeSc7XG5cbnR5cGUgRmlsdGVyUHJvamVjdG9yPFQgZXh0ZW5kcyB7IG5hbWU6IHN0cmluZzsgfT4gPSAobmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT4gVDtcbnR5cGUgRGlzcGF0Y2ggPSB7IGV2ZW50OiBFdmVudFR5cGVzOyBuYW1lOiBzdHJpbmc7IGFyZ3M6IGFueVtdOyB9O1xuXG5jb25zdCBmaWx0ZXJFdmVudCA9IDxUIGV4dGVuZHMgeyBuYW1lOiBzdHJpbmc7IH0+KFxuICBldmVudFR5cGU6IEV2ZW50VHlwZXMsXG4gIGZpbHRlckRyYWdUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHByb2plY3RvcjogRmlsdGVyUHJvamVjdG9yPFQ+XG4pID0+IChpbnB1dDogT2JzZXJ2YWJsZTxEaXNwYXRjaD4pOiBPYnNlcnZhYmxlPFQ+ID0+IHtcbiAgcmV0dXJuIGlucHV0LnBpcGUoXG4gICAgZmlsdGVyKCh7IGV2ZW50LCBuYW1lIH0pID0+IHtcbiAgICAgIHJldHVybiBldmVudCA9PT0gZXZlbnRUeXBlXG4gICAgICAgICAgJiYgKGZpbHRlckRyYWdUeXBlID09PSB1bmRlZmluZWQgfHwgbmFtZSA9PT0gZmlsdGVyRHJhZ1R5cGUpO1xuICAgIH0pLFxuICAgIG1hcCgoeyBuYW1lLCBhcmdzIH0pID0+IHByb2plY3RvcihuYW1lLCBhcmdzKSlcbiAgKTtcbn1cblxuY29uc3QgZWxDb250YWluZXJTb3VyY2VQcm9qZWN0b3IgPVxuICAobmFtZTogc3RyaW5nLCBbZWwsIGNvbnRhaW5lciwgc291cmNlXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnRdKSA9PlxuICAgICh7IG5hbWUsIGVsLCBjb250YWluZXIsIHNvdXJjZSB9KTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWd1bGFTZXJ2aWNlIHtcblxuICAvKiBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYSNkcmFrZW9uLWV2ZW50cyAqL1xuXG4gIHByaXZhdGUgZGlzcGF0Y2gkID0gbmV3IFN1YmplY3Q8RGlzcGF0Y2g+KCk7XG5cbiAgcHVibGljIGRyYWcgPSAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5EcmFnLFxuICAgICAgZ3JvdXBOYW1lLFxuICAgICAgKG5hbWUsIFtlbCwgc291cmNlXTogW0VsZW1lbnQsIEVsZW1lbnRdKSA9PiAoeyBuYW1lLCBlbCwgc291cmNlIH0pXG4gICAgKVxuICApO1xuXG4gIHB1YmxpYyBkcmFnZW5kID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJhZ0VuZCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbZWxdOiBbRWxlbWVudF0pID0+ICh7IG5hbWUsIGVsIH0pXG4gICAgKVxuICApO1xuXG4gIHB1YmxpYyBkcm9wID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJvcCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZ1xuICAgICAgXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnRdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZyB9O1xuICAgICAgfSlcbiAgKTtcblxuICBwcml2YXRlIGVsQ29udGFpbmVyU291cmNlID1cbiAgICAoZXZlbnRUeXBlOiBFdmVudFR5cGVzKSA9PlxuICAgIChncm91cE5hbWU/OiBzdHJpbmcpID0+XG4gICAgdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICAgIGZpbHRlckV2ZW50KGV2ZW50VHlwZSwgZ3JvdXBOYW1lLCBlbENvbnRhaW5lclNvdXJjZVByb2plY3RvcilcbiAgICApO1xuXG4gIHB1YmxpYyBjYW5jZWwgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuQ2FuY2VsKTtcbiAgcHVibGljIHJlbW92ZSA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5SZW1vdmUpO1xuICBwdWJsaWMgc2hhZG93ID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLlNoYWRvdyk7XG4gIHB1YmxpYyBvdmVyID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLk92ZXIpO1xuICBwdWJsaWMgb3V0ID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLk91dCk7XG5cbiAgcHVibGljIGNsb25lZCA9IChncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkNsb25lZCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGNsb25lLCBvcmlnaW5hbCwgY2xvbmVUeXBlXG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgJ21pcnJvcicgfCAnY29weSddKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGNsb25lLCBvcmlnaW5hbCwgY2xvbmVUeXBlIH1cbiAgICAgIH0pXG4gICk7XG5cbiAgcHVibGljIGRyb3BNb2RlbCA9IDxUID0gYW55Pihncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkRyb3BNb2RlbCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBzb3VyY2VJbmRleCwgdGFyZ2V0SW5kZXhcbiAgICAgIF06IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBULCBUW10sIFRbXSwgbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBzb3VyY2VJbmRleCwgdGFyZ2V0SW5kZXggfVxuICAgICAgfSlcbiAgKTtcblxuICBwdWJsaWMgcmVtb3ZlTW9kZWwgPSA8VCA9IGFueT4oZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5SZW1vdmVNb2RlbCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIHNvdXJjZUluZGV4XG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwgVCwgVFtdLCBudW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIHNvdXJjZUluZGV4IH1cbiAgICAgIH1cbiAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBncm91cHM6IHsgW2s6IHN0cmluZ106IEdyb3VwIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvciAoQE9wdGlvbmFsKCkgcHJpdmF0ZSBkcmFrZUZhY3Rvcnk6IERyYWtlRmFjdG9yeSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5kcmFrZUZhY3RvcnkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZHJha2VGYWN0b3J5ID0gbmV3IERyYWtlRmFjdG9yeSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQdWJsaWMgbWFpbmx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLiBQcmVmZXIgYGNyZWF0ZUdyb3VwKClgLiAqL1xuICBwdWJsaWMgYWRkKGdyb3VwOiBHcm91cCk6IEdyb3VwIHtcbiAgICBsZXQgZXhpc3RpbmdHcm91cCA9IHRoaXMuZmluZChncm91cC5uYW1lKTtcbiAgICBpZiAoZXhpc3RpbmdHcm91cCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcm91cCBuYW1lZDogXCInICsgZ3JvdXAubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICB9XG4gICAgdGhpcy5ncm91cHNbZ3JvdXAubmFtZV0gPSBncm91cDtcbiAgICB0aGlzLmhhbmRsZU1vZGVscyhncm91cCk7XG4gICAgdGhpcy5zZXR1cEV2ZW50cyhncm91cCk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgcHVibGljIGZpbmQobmFtZTogc3RyaW5nKTogR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmdyb3Vwc1tuYW1lXTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBncm91cCA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdyb3VwLmRyYWtlICYmIGdyb3VwLmRyYWtlLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5ncm91cHNbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdyb3VwIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBvcHRpb25zLlxuICAgKlxuICAgKiBOb3RlOiBmb3JtZXJseSBrbm93biBhcyBgc2V0T3B0aW9uc2BcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVHcm91cDxUID0gYW55PihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zPFQ+KTogR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmFkZChuZXcgR3JvdXAoXG4gICAgICBuYW1lLFxuICAgICAgdGhpcy5kcmFrZUZhY3RvcnkuYnVpbGQoW10sIG9wdGlvbnMpLFxuICAgICAgb3B0aW9uc1xuICAgICkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNb2RlbHMoeyBuYW1lLCBkcmFrZSwgb3B0aW9ucyB9OiBHcm91cCk6IHZvaWQge1xuICAgIGxldCBkcmFnRWxtOiBhbnk7XG4gICAgbGV0IGRyYWdJbmRleDogbnVtYmVyO1xuICAgIGxldCBkcm9wSW5kZXg6IG51bWJlcjtcbiAgICBkcmFrZS5vbigncmVtb3ZlJywgKGVsOiBhbnksIGNvbnRhaW5lcjogYW55LCBzb3VyY2U6IGFueSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIHNvdXJjZU1vZGVsID0gc291cmNlTW9kZWwuc2xpY2UoMCk7IC8vIGNsb25lIGl0XG4gICAgICBjb25zdCBpdGVtID0gc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSlbMF07XG4gICAgICAvLyBjb25zb2xlLmxvZygnUkVNT1ZFJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2VNb2RlbCk7XG4gICAgICB0aGlzLmRpc3BhdGNoJC5uZXh0KHtcbiAgICAgICAgZXZlbnQ6IEV2ZW50VHlwZXMuUmVtb3ZlTW9kZWwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFyZ3M6IFsgZWwsIGNvbnRhaW5lciwgc291cmNlLCBpdGVtLCBzb3VyY2VNb2RlbCwgZHJhZ0luZGV4IF1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRyYWtlLm9uKCdkcmFnJywgKGVsOiBhbnksIHNvdXJjZTogYW55KSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcmFnRWxtID0gZWw7XG4gICAgICBkcmFnSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZWwsIHNvdXJjZSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2Ryb3AnLCAoZHJvcEVsbTogYW55LCB0YXJnZXQ6IEVsZW1lbnQsIHNvdXJjZTogRWxlbWVudCwgc2libGluZz86IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcEluZGV4ID0gdGhpcy5kb21JbmRleE9mKGRyb3BFbG0sIHRhcmdldCk7XG4gICAgICBsZXQgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgbGV0IHRhcmdldE1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEUk9QJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2VNb2RlbCk7XG4gICAgICBsZXQgaXRlbTogYW55O1xuICAgICAgaWYgKHRhcmdldCA9PT0gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZU1vZGVsID0gc291cmNlTW9kZWwuc2xpY2UoMClcbiAgICAgICAgaXRlbSA9IHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdO1xuICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgLy8gdGhpcyB3YXMgdHJ1ZSBiZWZvcmUgd2UgY2xvbmVkIGFuZCB1cGRhdGVkIHNvdXJjZU1vZGVsLFxuICAgICAgICAvLyBidXQgdGFyZ2V0TW9kZWwgc3RpbGwgaGFzIHRoZSBvbGQgdmFsdWVcbiAgICAgICAgdGFyZ2V0TW9kZWwgPSBzb3VyY2VNb2RlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpc0NvcHlpbmcgPSBkcmFnRWxtICE9PSBkcm9wRWxtO1xuICAgICAgICBpdGVtID0gc291cmNlTW9kZWxbZHJhZ0luZGV4XTtcbiAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5jb3B5SXRlbSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWYgeW91IGhhdmUgZW5hYmxlZCBgY29weWAgb24gYSBncm91cCwgeW91IG11c3QgcHJvdmlkZSBhIGBjb3B5SXRlbWAgZnVuY3Rpb24uXCIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0gPSBvcHRpb25zLmNvcHlJdGVtKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0NvcHlpbmcpIHtcbiAgICAgICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZU1vZGVsLnNsaWNlKDApXG4gICAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0TW9kZWwgPSB0YXJnZXRNb2RlbC5zbGljZSgwKVxuICAgICAgICB0YXJnZXRNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoZHJvcEVsbSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7XG4gICAgICAgIGV2ZW50OiBFdmVudFR5cGVzLkRyb3BNb2RlbCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYXJnczogWyBkcm9wRWxtLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBkcmFnSW5kZXgsIGRyb3BJbmRleCBdXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBFdmVudHMoZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgaWYgKGdyb3VwLmluaXRFdmVudHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ3JvdXAuaW5pdEV2ZW50cyA9IHRydWU7XG4gICAgY29uc3QgbmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgbGV0IHRoYXQ6IGFueSA9IHRoaXM7XG4gICAgbGV0IGVtaXR0ZXIgPSAoZXZlbnQ6IEV2ZW50VHlwZXMpID0+IHtcbiAgICAgIGdyb3VwLmRyYWtlLm9uKGV2ZW50LCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7IGV2ZW50LCBuYW1lLCBhcmdzIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBBbGxFdmVudHMuZm9yRWFjaChlbWl0dGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9tSW5kZXhPZihjaGlsZDogYW55LCBwYXJlbnQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9kcmFndWxhLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSAnLi4vRHJha2VXaXRoTW9kZWxzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9Hcm91cCc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RyYWd1bGFdJ30pXG5leHBvcnQgY2xhc3MgRHJhZ3VsYURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIGRyYWd1bGE6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGRyYWd1bGFNb2RlbDogYW55W107XG4gIEBPdXRwdXQoKSBwdWJsaWMgZHJhZ3VsYU1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGdldCBjb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkcmFndWxhU2VydmljZTogRHJhZ3VsYVNlcnZpY2UpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7ZHJhZ3VsYT86IFNpbXBsZUNoYW5nZSwgZHJhZ3VsYU1vZGVsPzogU2ltcGxlQ2hhbmdlfSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYSkge1xuICAgICAgY29uc3QgeyBwcmV2aW91c1ZhbHVlOiBwcmV2LCBjdXJyZW50VmFsdWU6IGN1cnJlbnQsIGZpcnN0Q2hhbmdlIH0gPSBjaGFuZ2VzLmRyYWd1bGE7XG4gICAgICBsZXQgaGFkUHJldmlvdXNWYWx1ZSA9ICEhcHJldjtcbiAgICAgIGxldCBoYXNOZXdWYWx1ZSA9ICEhY3VycmVudDtcbiAgICAgIC8vIHNvbWV0aGluZyAtPiBudWxsICAgICAgID0+ICB0ZWFyZG93biBvbmx5XG4gICAgICAvLyBzb21ldGhpbmcgLT4gc29tZXRoaW5nICA9PiAgdGVhcmRvd24sIHRoZW4gc2V0dXBcbiAgICAgIC8vICAgICAgbnVsbCAtPiBzb21ldGhpbmcgID0+ICBzZXR1cCBvbmx5XG4gICAgICAvL1xuICAgICAgLy8gICAgICBudWxsIC0+IG51bGwgKHByZWNsdWRlZCBieSBmYWN0IG9mIGNoYW5nZSBiZWluZyBwcmVzZW50KVxuICAgICAgaWYgKGhhZFByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgdGhpcy50ZWFyZG93bihwcmV2KTtcbiAgICAgIH1cbiAgICAgIGlmIChoYXNOZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICAvLyB0aGlzIGNvZGUgb25seSBydW5zIHdoZW4geW91J3JlIG5vdCBjaGFuZ2luZyB0aGUgZ3JvdXAgbmFtZVxuICAgICAgLy8gYmVjYXVzZSBpZiB5b3UncmUgY2hhbmdpbmcgdGhlIGdyb3VwIG5hbWUsIHlvdSdsbCBiZSBkb2luZyBzZXR1cCBvciB0ZWFyZG93blxuICAgICAgLy8gaXQgYWxzbyBvbmx5IHJ1bnMgaWYgdGhlcmUgaXMgYSBncm91cCBuYW1lIHRvIGF0dGFjaCB0by5cbiAgICAgIGNvbnN0IHsgcHJldmlvdXNWYWx1ZTogcHJldiwgY3VycmVudFZhbHVlOiBjdXJyZW50LCBmaXJzdENoYW5nZSB9ID0gY2hhbmdlcy5kcmFndWxhTW9kZWw7XG4gICAgICBjb25zdCB7IGRyYWtlIH0gPSB0aGlzLmdyb3VwO1xuICAgICAgaWYgKHRoaXMuZHJhZ3VsYSAmJiBkcmFrZSkge1xuICAgICAgICBkcmFrZS5tb2RlbHMgPSBkcmFrZS5tb2RlbHMgfHwgW107XG4gICAgICAgIGxldCBwcmV2SW5kZXggPSBkcmFrZS5tb2RlbHMuaW5kZXhPZihwcmV2KTtcbiAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAvLyBkZWxldGUgdGhlIHByZXZpb3VzXG4gICAgICAgICAgZHJha2UubW9kZWxzLnNwbGljZShwcmV2SW5kZXgsIDEpO1xuICAgICAgICAgIC8vIG1heWJlIGluc2VydCBhIG5ldyBvbmUgYXQgdGhlIHNhbWUgc3BvdFxuICAgICAgICAgIGlmICghIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIGRyYWtlLm1vZGVscy5zcGxpY2UocHJldkluZGV4LCAwLCBjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoISFjdXJyZW50KSB7XG4gICAgICAgICAgLy8gbm8gcHJldmlvdXMgb25lIHRvIHJlbW92ZTsganVzdCBwdXNoIHRoaXMgb25lLlxuICAgICAgICAgIGRyYWtlLm1vZGVscy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsbCBuZ09uSW5pdCAnc2V0dXAnIGJlY2F1c2Ugd2Ugd2FudCB0byBjYWxsIGl0IGluIG5nT25DaGFuZ2VzXG4gIC8vIGFuZCBpdCB3b3VsZCBvdGhlcndpc2UgcnVuIHR3aWNlXG4gIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcbiAgICBsZXQgY2hlY2tNb2RlbCA9IChncm91cDogR3JvdXApID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgICBpZiAoZ3JvdXAuZHJha2UubW9kZWxzKSB7XG4gICAgICAgICAgZ3JvdXAuZHJha2UubW9kZWxzLnB1c2godGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscyA9IFt0aGlzLmRyYWd1bGFNb2RlbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZmluZCBvciBjcmVhdGUgYSBncm91cFxuICAgIGxldCBncm91cCA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuZmluZCh0aGlzLmRyYWd1bGEpO1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBncm91cCA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuY3JlYXRlR3JvdXAodGhpcy5kcmFndWxhLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgbW9kZWwgYW5kIGNvbnRhaW5lciBlbGVtZW50IGFyZSBwdXNoZWRcbiAgICBjaGVja01vZGVsKGdyb3VwKTtcbiAgICBncm91cC5kcmFrZS5jb250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuc3Vic2NyaWJlKHRoaXMuZHJhZ3VsYSk7XG5cbiAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gIH1cblxuICBwdWJsaWMgc3Vic2NyaWJlKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICB0aGlzLnN1YnMuYWRkKFxuICAgICAgdGhpcy5kcmFndWxhU2VydmljZVxuICAgICAgLmRyb3BNb2RlbChuYW1lKVxuICAgICAgLnN1YnNjcmliZSgoeyBzb3VyY2UsIHRhcmdldCwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsIH0pID0+IHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5kcmFndWxhTW9kZWxDaGFuZ2UuZW1pdChzb3VyY2VNb2RlbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmRyYWd1bGFNb2RlbENoYW5nZS5lbWl0KHRhcmdldE1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuc3Vicy5hZGQoXG4gICAgICB0aGlzLmRyYWd1bGFTZXJ2aWNlXG4gICAgICAucmVtb3ZlTW9kZWwobmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgc291cmNlLCBzb3VyY2VNb2RlbCB9KSA9PiB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuZHJhZ3VsYU1vZGVsQ2hhbmdlLmVtaXQoc291cmNlTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdGVhcmRvd24oZ3JvdXBOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQoZ3JvdXBOYW1lKTtcbiAgICBpZiAoZ3JvdXApIHtcbiAgICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IGdyb3VwLmRyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKGl0ZW1Ub1JlbW92ZSAhPT0gLTEpIHtcbiAgICAgICAgZ3JvdXAuZHJha2UuY29udGFpbmVycy5zcGxpY2UoaXRlbVRvUmVtb3ZlLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCAmJiBncm91cC5kcmFrZSAmJiBncm91cC5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgbGV0IG1vZGVsSW5kZXggPSBncm91cC5kcmFrZS5tb2RlbHMuaW5kZXhPZih0aGlzLmRyYWd1bGFNb2RlbCk7XG4gICAgICAgIGlmIChtb2RlbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscy5zcGxpY2UobW9kZWxJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50ZWFyZG93bih0aGlzLmRyYWd1bGEpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFndWxhRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFndWxhLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcmFndWxhU2VydmljZSB9IGZyb20gJy4vZHJhZ3VsYS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0RyYWd1bGFEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtEcmFndWxhRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ3VsYU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRHJhZ3VsYU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RyYWd1bGFTZXJ2aWNlXVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFR5cGVzIH0gZnJvbSAnLi9FdmVudFR5cGVzJztcbmltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBEcmFrZUZhY3RvcnkgfSBmcm9tICcuL0RyYWtlRmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBNb2NrRHJha2VGYWN0b3J5ID0gbmV3IERyYWtlRmFjdG9yeSgoY29udGFpbmVycywgb3B0aW9ucykgPT4ge1xuICByZXR1cm4gbmV3IE1vY2tEcmFrZShjb250YWluZXJzLCBvcHRpb25zKTtcbn0pO1xuXG4vKiogWW91IGNhbiB1c2UgTW9ja0RyYWtlIHRvIHNpbXVsYXRlIERyYWtlIGV2ZW50cy5cbiAqXG4gKiBUaGUgdGhyZWUgbWV0aG9kcyB0aGF0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGFyZSBgb24oZXZlbnQsIGxpc3RlbmVyKWAsXG4gKiBgZGVzdHJveSgpYCwgYW5kIGEgbmV3IG1ldGhvZCwgYGVtaXQoKWAuIFVzZSBgZW1pdCgpYCB0byBtYW51YWxseSBlbWl0IERyYWtlXG4gKiBldmVudHMsIGFuZCBpZiB5b3UgaW5qZWN0ZWQgTW9ja0RyYWtlIHByb3Blcmx5IHdpdGggTW9ja0RyYWtlRmFjdG9yeSBvclxuICogbW9ja2VkIHRoZSBEcmFndWxhU2VydmljZS5maW5kKCkgbWV0aG9kLCB0aGVuIHlvdSBjYW4gbWFrZSBuZzItZHJhZ3VsYSB0aGlua1xuICogZHJhZ3MgYW5kIGRyb3BzIGFyZSBoYXBwZW5pbmcuXG4gKlxuICogQ2F2ZWF0czpcbiAqXG4gKiAxLiBZT1UgTVVTVCBNQUtFIFRIRSBET00gQ0hBTkdFUyBZT1VSU0VMRi5cbiAqIDIuIFJFUEVBVDogWU9VIE1VU1QgTUFLRSBUSEUgRE9NIENIQU5HRVMgWU9VUlNFTEYuXG4gKiAgICBUaGF0IG1lYW5zIGBzb3VyY2UucmVtb3ZlQ2hpbGQoZWwpYCwgYW5kIGB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVsKWAuXG4gKiAzLiBOb25lIG9mIHRoZSBvdGhlciBtZXRob2RzIGRvIGFueXRoaW5nLlxuICogICAgVGhhdCdzIG9rLCBiZWNhdXNlIG5nMi1kcmFndWxhIGRvZXNuJ3QgdXNlIHRoZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrRHJha2UgaW1wbGVtZW50cyBEcmFrZVdpdGhNb2RlbHMge1xuICAvKipcbiAgICogQHBhcmFtIGNvbnRhaW5lcnMgQSBsaXN0IG9mIGNvbnRhaW5lciBlbGVtZW50cy5cbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlc2Ugd2lsbCBOT1QgYmUgdXNlZC4gQXQgYWxsLlxuICAgKiBAcGFyYW0gbW9kZWxzIE5vbnN0YW5kYXJkLCBidXQgdXNlZnVsIGZvciB0ZXN0aW5nIHVzaW5nIGBuZXcgTW9ja0RyYWtlKClgIGRpcmVjdGx5LlxuICAgKiAgICAgICAgICAgICAgIE5vdGUsIGRlZmF1bHQgdmFsdWUgaXMgdW5kZWZpbmVkLCBsaWtlIGEgcmVhbCBEcmFrZS4gRG9uJ3QgY2hhbmdlIHRoYXQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29udGFpbmVyczogRWxlbWVudFtdID0gW10sXG4gICAgcHVibGljIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zID0ge30sXG4gICAgcHVibGljIG1vZGVscz86IGFueVtdW11cbiAgKSB7fVxuXG4gIC8qIERvZXNuJ3QgcmVwcmVzZW50IGFueXRoaW5nIG1lYW5pbmdmdWwuICovXG4gIGRyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgc3RhcnQoaXRlbTogRWxlbWVudCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgZW5kKCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIGNhbmNlbChyZXZlcnQ6IGJvb2xlYW4pOiBhbnk7XG4gIGNhbmNlbCgpOiBhbnk7XG4gIGNhbmNlbChyZXZlcnQ/OiBhbnkpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgcmVtb3ZlKCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQmFzaWMgYnV0IGZ1bGx5IGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciBzaGltXG4gIHByaXZhdGUgZW1pdHRlciQgPSBuZXcgU3ViamVjdDx7IGV2ZW50VHlwZTogRXZlbnRUeXBlcywgYXJnczogYW55W10gfT4oKTtcblxuICBwcml2YXRlIHN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55IHtcbiAgICB0aGlzLnN1YnMuYWRkKHRoaXMuZW1pdHRlciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgZXZlbnRUeXBlIH0pID0+IGV2ZW50VHlwZSA9PT0gZXZlbnQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IGFyZ3MgfSkgPT4ge1xuICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogYW55IHtcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBtb3N0IHVzZWZ1bCBtZXRob2QuIFlvdSBjYW4gdXNlIGl0IHRvIG1hbnVhbGx5IGZpcmUgZXZlbnRzIHRoYXQgd291bGQgbm9ybWFsbHlcbiAgICogYmUgZmlyZWQgYnkgYSByZWFsIGRyYWtlLlxuICAgKlxuICAgKiBZb3UncmUgbGlrZWx5IG1vc3QgaW50ZXJlc3RlZCBpbiBmaXJpbmcgYGRyYWdgLCBgcmVtb3ZlYCBhbmQgYGRyb3BgLCB0aGUgdGhyZWUgZXZlbnRzXG4gICAqIERyYWd1bGFTZXJ2aWNlIHVzZXMgdG8gaW1wbGVtZW50IFtkcmFndWxhTW9kZWxdLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEjZHJha2Vvbi1ldmVudHMgZm9yIHdoYXQgeW91IHNob3VsZCBlbWl0IChhbmQgaW4gd2hhdCBvcmRlcikuXG4gICAqXG4gICAqIChOb3RlIGFsc28sIGZpcmluZyBkcm9wTW9kZWwgYW5kIHJlbW92ZU1vZGVsIHdvbid0IHdvcmsuIFlvdSB3b3VsZCBoYXZlIHRvIG1vY2sgRHJhZ3VsYVNlcnZpY2UgZm9yIHRoYXQuKVxuICAgKi9cbiAgZW1pdChldmVudFR5cGU6IEV2ZW50VHlwZXMsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgdGhpcy5lbWl0dGVyJC5uZXh0KHsgZXZlbnRUeXBlLCBhcmdzIH0pXG4gIH1cblxufVxuIl19