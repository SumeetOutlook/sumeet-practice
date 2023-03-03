import { __extends } from "tslib";
import { FocusMonitor, FocusTrapFactory } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { CdkScrollable, ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, Inject, InjectionToken, Input, NgZone, Optional, Output, QueryList, ViewChild, ViewEncapsulation, HostListener, HostBinding, } from '@angular/core';
import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, filter, map, startWith, take, takeUntil, distinctUntilChanged, } from 'rxjs/operators';
import { matDrawerAnimations } from './drawer-animations';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/**
 * Throws an exception when two MatDrawer are matching the same position.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/scrolling';
import * as ɵngcc2 from '@angular/cdk/a11y';
import * as ɵngcc3 from '@angular/cdk/platform';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from '@angular/common';

var _c0 = ["*"];
function MatDrawerContainer_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("click", function MatDrawerContainer_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2._onBackdropClicked(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("mat-drawer-shown", ctx_r0._isShowingBackdrop());
} }
function MatDrawerContainer_mat_drawer_content_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-drawer-content");
    ɵngcc0.ɵɵprojection(1, 2);
    ɵngcc0.ɵɵelementEnd();
} }
var _c1 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
var _c2 = ["mat-drawer", "mat-drawer-content", "*"];
export function throwMatDuplicatedDrawerError(position) {
    throw Error("A drawer was already declared for 'position=\"" + position + "\"'");
}
/** Configures whether drawers should use auto sizing by default. */
export var MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken('MAT_DRAWER_DEFAULT_AUTOSIZE', {
    providedIn: 'root',
    factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY,
});
/**
 * Used to provide a drawer container to a drawer while avoiding circular references.
 * @docs-private
 */
export var MAT_DRAWER_CONTAINER = new InjectionToken('MAT_DRAWER_CONTAINER');
/** @docs-private */
export function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
    return false;
}
var MatDrawerContent = /** @class */ (function (_super) {
    __extends(MatDrawerContent, _super);
    function MatDrawerContent(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
        var _this = _super.call(this, elementRef, scrollDispatcher, ngZone) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._container = _container;
        return _this;
    }
    MatDrawerContent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._container._contentMarginChanges.subscribe(function () {
            _this._changeDetectorRef.markForCheck();
        });
    };
    /** @nocollapse */
    MatDrawerContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: MatDrawerContainer, decorators: [{ type: Inject, args: [forwardRef(function () { return MatDrawerContainer; }),] }] },
        { type: ElementRef },
        { type: ScrollDispatcher },
        { type: NgZone }
    ]; };
MatDrawerContent.ɵfac = function MatDrawerContent_Factory(t) { return new (t || MatDrawerContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(forwardRef(function () { return MatDrawerContainer; })), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ScrollDispatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
MatDrawerContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDrawerContent, selectors: [["mat-drawer-content"]], hostAttrs: [1, "mat-drawer-content"], hostVars: 4, hostBindings: function MatDrawerContent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
    } }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatDrawerContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDrawerContent, [{
        type: Component,
        args: [{
                selector: 'mat-drawer-content',
                template: '<ng-content></ng-content>',
                host: {
                    'class': 'mat-drawer-content',
                    '[style.margin-left.px]': '_container._contentMargins.left',
                    '[style.margin-right.px]': '_container._contentMargins.right'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: MatDrawerContainer, decorators: [{
                type: Inject,
                args: [forwardRef(function () { return MatDrawerContainer; })]
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.ScrollDispatcher }, { type: ɵngcc0.NgZone }]; }, null); })();
    return MatDrawerContent;
}(CdkScrollable));
export { MatDrawerContent };
/**
 * This component corresponds to a drawer that can be opened on the drawer container.
 */
var MatDrawer = /** @class */ (function () {
    function MatDrawer(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _doc, 
    /**
     * @deprecated `_container` parameter to be made required.
     * @breaking-change 10.0.0
     */
    _container) {
        var _this = this;
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._focusMonitor = _focusMonitor;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._doc = _doc;
        this._container = _container;
        this._elementFocusedBeforeDrawerWasOpened = null;
        /** Whether the drawer is initialized. Used for disabling the initial animation. */
        this._enableAnimations = false;
        this._position = 'start';
        this._mode = 'over';
        this._disableClose = false;
        this._opened = false;
        /** Emits whenever the drawer has started animating. */
        this._animationStarted = new Subject();
        /** Emits whenever the drawer is done animating. */
        this._animationEnd = new Subject();
        /** Current state of the sidenav animation. */
        // @HostBinding is used in the class as it is expected to be extended.  Since @Component decorator
        // metadata is not inherited by child classes, instead the host binding data is defined in a way
        // that can be inherited.
        // tslint:disable:no-host-decorator-in-concrete
        this._animationState = 'void';
        /** Event emitted when the drawer open state is changed. */
        this.openedChange = 
        // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
        new EventEmitter(/* isAsync */ true);
        /** Emits when the component is destroyed. */
        this._destroyed = new Subject();
        /** Event emitted when the drawer's position changes. */
        // tslint:disable-next-line:no-output-on-prefix
        this.onPositionChanged = new EventEmitter();
        /**
         * An observable that emits when the drawer mode changes. This is used by the drawer container to
         * to know when to when the mode changes so it can adapt the margins on the content.
         */
        this._modeChanged = new Subject();
        this.openedChange.subscribe(function (opened) {
            if (opened) {
                if (_this._doc) {
                    _this._elementFocusedBeforeDrawerWasOpened = _this._doc.activeElement;
                }
                _this._takeFocus();
            }
            else {
                _this._restoreFocus();
            }
        });
        /**
         * Listen to `keydown` events outside the zone so that change detection is not run every
         * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
         * and we don't have close disabled.
         */
        this._ngZone.runOutsideAngular(function () {
            fromEvent(_this._elementRef.nativeElement, 'keydown').pipe(filter(function (event) {
                return event.keyCode === ESCAPE && !_this.disableClose && !hasModifierKey(event);
            }), takeUntil(_this._destroyed)).subscribe(function (event) { return _this._ngZone.run(function () {
                _this.close();
                event.stopPropagation();
                event.preventDefault();
            }); });
        });
        // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
        this._animationEnd.pipe(distinctUntilChanged(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(function (event) {
            var fromState = event.fromState, toState = event.toState;
            if ((toState.indexOf('open') === 0 && fromState === 'void') ||
                (toState === 'void' && fromState.indexOf('open') === 0)) {
                _this.openedChange.emit(_this._opened);
            }
        });
    }
    Object.defineProperty(MatDrawer.prototype, "position", {
        /** The side that the drawer is attached to. */
        get: function () { return this._position; },
        set: function (value) {
            // Make sure we have a valid value.
            value = value === 'end' ? 'end' : 'start';
            if (value != this._position) {
                this._position = value;
                this.onPositionChanged.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "mode", {
        /** Mode of the drawer; one of 'over', 'push' or 'side'. */
        get: function () { return this._mode; },
        set: function (value) {
            this._mode = value;
            this._updateFocusTrapState();
            this._modeChanged.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "disableClose", {
        /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
        get: function () { return this._disableClose; },
        set: function (value) { this._disableClose = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "autoFocus", {
        /**
         * Whether the drawer should focus the first focusable element automatically when opened.
         * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
         * enabled, focus will be moved into the sidenav in `side` mode as well.
         */
        get: function () {
            var value = this._autoFocus;
            // Note that usually we disable auto focusing in `side` mode, because we don't know how the
            // sidenav is being used, but in some cases it still makes sense to do it. If the consumer
            // explicitly enabled `autoFocus`, we take it as them always wanting to enable it.
            return value == null ? this.mode !== 'side' : value;
        },
        set: function (value) { this._autoFocus = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "opened", {
        /**
         * Whether the drawer is opened. We overload this because we trigger an event when it
         * starts or end.
         */
        get: function () { return this._opened; },
        set: function (value) { this.toggle(coerceBooleanProperty(value)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "_openedStream", {
        /** Event emitted when the drawer has been opened. */
        get: function () {
            return this.openedChange.pipe(filter(function (o) { return o; }), map(function () { }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "openedStart", {
        /** Event emitted when the drawer has started opening. */
        get: function () {
            return this._animationStarted.pipe(filter(function (e) { return e.fromState !== e.toState && e.toState.indexOf('open') === 0; }), map(function () { }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "_closedStream", {
        /** Event emitted when the drawer has been closed. */
        get: function () {
            return this.openedChange.pipe(filter(function (o) { return !o; }), map(function () { }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawer.prototype, "closedStart", {
        /** Event emitted when the drawer has started closing. */
        get: function () {
            return this._animationStarted.pipe(filter(function (e) { return e.fromState !== e.toState && e.toState === 'void'; }), map(function () { }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Moves focus into the drawer. Note that this works even if
     * the focus trap is disabled in `side` mode.
     */
    MatDrawer.prototype._takeFocus = function () {
        var _this = this;
        if (!this.autoFocus || !this._focusTrap) {
            return;
        }
        this._focusTrap.focusInitialElementWhenReady().then(function (hasMovedFocus) {
            // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
            // still works. We need to check that `focus` is a function due to Universal.
            if (!hasMovedFocus && typeof _this._elementRef.nativeElement.focus === 'function') {
                _this._elementRef.nativeElement.focus();
            }
        });
    };
    /**
     * If focus is currently inside the drawer, restores it to where it was before the drawer
     * opened.
     */
    MatDrawer.prototype._restoreFocus = function () {
        if (!this.autoFocus) {
            return;
        }
        var activeEl = this._doc && this._doc.activeElement;
        if (activeEl && this._elementRef.nativeElement.contains(activeEl)) {
            if (this._elementFocusedBeforeDrawerWasOpened instanceof HTMLElement) {
                this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, this._openedVia);
            }
            else {
                this._elementRef.nativeElement.blur();
            }
        }
        this._elementFocusedBeforeDrawerWasOpened = null;
        this._openedVia = null;
    };
    MatDrawer.prototype.ngAfterContentInit = function () {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        this._updateFocusTrapState();
    };
    MatDrawer.prototype.ngAfterContentChecked = function () {
        // Enable the animations after the lifecycle hooks have run, in order to avoid animating
        // drawers that are open by default. When we're on the server, we shouldn't enable the
        // animations, because we don't want the drawer to animate the first time the user sees
        // the page.
        if (this._platform.isBrowser) {
            this._enableAnimations = true;
        }
    };
    MatDrawer.prototype.ngOnDestroy = function () {
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
        this._animationStarted.complete();
        this._animationEnd.complete();
        this._modeChanged.complete();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /**
     * Open the drawer.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */
    MatDrawer.prototype.open = function (openedVia) {
        return this.toggle(true, openedVia);
    };
    /** Close the drawer. */
    MatDrawer.prototype.close = function () {
        return this.toggle(false);
    };
    /**
     * Toggle this drawer.
     * @param isOpen Whether the drawer should be open.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */
    MatDrawer.prototype.toggle = function (isOpen, openedVia) {
        var _this = this;
        if (isOpen === void 0) { isOpen = !this.opened; }
        if (openedVia === void 0) { openedVia = 'program'; }
        this._opened = isOpen;
        if (isOpen) {
            this._animationState = this._enableAnimations ? 'open' : 'open-instant';
            this._openedVia = openedVia;
        }
        else {
            this._animationState = 'void';
            this._restoreFocus();
        }
        this._updateFocusTrapState();
        return new Promise(function (resolve) {
            _this.openedChange.pipe(take(1)).subscribe(function (open) { return resolve(open ? 'open' : 'close'); });
        });
    };
    Object.defineProperty(MatDrawer.prototype, "_width", {
        get: function () {
            return this._elementRef.nativeElement ? (this._elementRef.nativeElement.offsetWidth || 0) : 0;
        },
        enumerable: true,
        configurable: true
    });
    /** Updates the enabled state of the focus trap. */
    MatDrawer.prototype._updateFocusTrapState = function () {
        if (this._focusTrap) {
            // The focus trap is only enabled when the drawer is open in any mode other than side.
            this._focusTrap.enabled = this.opened && this.mode !== 'side';
        }
    };
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    MatDrawer.prototype._animationStartListener = function (event) {
        this._animationStarted.next(event);
    };
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    MatDrawer.prototype._animationDoneListener = function (event) {
        this._animationEnd.next(event);
    };
    /** @nocollapse */
    MatDrawer.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusTrapFactory },
        { type: FocusMonitor },
        { type: Platform },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: MatDrawerContainer, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DRAWER_CONTAINER,] }] }
    ]; };
    MatDrawer.propDecorators = {
        position: [{ type: Input }],
        mode: [{ type: Input }],
        disableClose: [{ type: Input }],
        autoFocus: [{ type: Input }],
        opened: [{ type: Input }],
        _animationState: [{ type: HostBinding, args: ['@transform',] }],
        openedChange: [{ type: Output }],
        _openedStream: [{ type: Output, args: ['opened',] }],
        openedStart: [{ type: Output }],
        _closedStream: [{ type: Output, args: ['closed',] }],
        closedStart: [{ type: Output }],
        onPositionChanged: [{ type: Output, args: ['positionChanged',] }],
        _animationStartListener: [{ type: HostListener, args: ['@transform.start', ['$event'],] }],
        _animationDoneListener: [{ type: HostListener, args: ['@transform.done', ['$event'],] }]
    };
MatDrawer.ɵfac = function MatDrawer_Factory(t) { return new (t || MatDrawer)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(MAT_DRAWER_CONTAINER, 8)); };
MatDrawer.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDrawer, selectors: [["mat-drawer"]], hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"], hostVars: 12, hostBindings: function MatDrawer_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵcomponentHostSyntheticListener("@transform.start", function MatDrawer_animation_transform_start_HostBindingHandler($event) { return ctx._animationStartListener($event); })("@transform.done", function MatDrawer_animation_transform_done_HostBindingHandler($event) { return ctx._animationDoneListener($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("align", null);
        ɵngcc0.ɵɵupdateSyntheticHostBinding("@transform", ctx._animationState);
        ɵngcc0.ɵɵclassProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened);
    } }, inputs: { position: "position", mode: "mode", disableClose: "disableClose", autoFocus: "autoFocus", opened: "opened" }, outputs: { openedChange: "openedChange", onPositionChanged: "positionChanged", _openedStream: "opened", openedStart: "openedStart", _closedStream: "closed", closedStart: "closedStart" }, exportAs: ["matDrawer"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-drawer-inner-container"]], template: function MatDrawer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, data: { animation: [matDrawerAnimations.transformDrawer] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDrawer, [{
        type: Component,
        args: [{
                selector: 'mat-drawer',
                exportAs: 'matDrawer',
                template: "<div class=\"mat-drawer-inner-container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                animations: [matDrawerAnimations.transformDrawer],
                host: {
                    'class': 'mat-drawer',
                    // must prevent the browser from aligning text based on value
                    '[attr.align]': 'null',
                    '[class.mat-drawer-end]': 'position === "end"',
                    '[class.mat-drawer-over]': 'mode === "over"',
                    '[class.mat-drawer-push]': 'mode === "push"',
                    '[class.mat-drawer-side]': 'mode === "side"',
                    '[class.mat-drawer-opened]': 'opened',
                    'tabIndex': '-1'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc2.FocusTrapFactory }, { type: ɵngcc2.FocusMonitor }, { type: ɵngcc3.Platform }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: MatDrawerContainer, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_DRAWER_CONTAINER]
            }] }]; }, { _animationState: [{
            type: HostBinding,
            args: ['@transform']
        }], openedChange: [{
            type: Output
        }], onPositionChanged: [{
            type: Output,
            args: ['positionChanged']
        }], position: [{
            type: Input
        }], mode: [{
            type: Input
        }], disableClose: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], opened: [{
            type: Input
        }], _openedStream: [{
            type: Output,
            args: ['opened']
        }], openedStart: [{
            type: Output
        }], _closedStream: [{
            type: Output,
            args: ['closed']
        }], closedStart: [{
            type: Output
        }], _animationStartListener: [{
            type: HostListener,
            args: ['@transform.start', ['$event']]
        }], _animationDoneListener: [{
            type: HostListener,
            args: ['@transform.done', ['$event']]
        }] }); })();
    return MatDrawer;
}());
export { MatDrawer };
/**
 * `<mat-drawer-container>` component.
 *
 * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
 * and coordinates the backdrop and content styling.
 */
var MatDrawerContainer = /** @class */ (function () {
    function MatDrawerContainer(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler, defaultAutosize, _animationMode) {
        var _this = this;
        if (defaultAutosize === void 0) { defaultAutosize = false; }
        this._dir = _dir;
        this._element = _element;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        /** Drawers that belong to this container. */
        this._drawers = new QueryList();
        /** Event emitted when the drawer backdrop is clicked. */
        this.backdropClick = new EventEmitter();
        /** Emits when the component is destroyed. */
        this._destroyed = new Subject();
        /** Emits on every ngDoCheck. Used for debouncing reflows. */
        this._doCheckSubject = new Subject();
        /**
         * Margins to be applied to the content. These are used to push / shrink the drawer content when a
         * drawer is open. We use margin rather than transform even for push mode because transform breaks
         * fixed position elements inside of the transformed element.
         */
        this._contentMargins = { left: null, right: null };
        this._contentMarginChanges = new Subject();
        // If a `Dir` directive exists up the tree, listen direction changes
        // and update the left/right properties to point to the proper start/end.
        if (_dir) {
            _dir.change.pipe(takeUntil(this._destroyed)).subscribe(function () {
                _this._validateDrawers();
                _this.updateContentMargins();
            });
        }
        // Since the minimum width of the sidenav depends on the viewport width,
        // we need to recompute the margins if the viewport changes.
        viewportRuler.change()
            .pipe(takeUntil(this._destroyed))
            .subscribe(function () { return _this.updateContentMargins(); });
        this._autosize = defaultAutosize;
    }
    Object.defineProperty(MatDrawerContainer.prototype, "start", {
        /** The drawer child with the `start` position. */
        get: function () { return this._start; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawerContainer.prototype, "end", {
        /** The drawer child with the `end` position. */
        get: function () { return this._end; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawerContainer.prototype, "autosize", {
        /**
         * Whether to automatically resize the container whenever
         * the size of any of its drawers changes.
         *
         * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
         * the drawers on every change detection cycle. Can be configured globally via the
         * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
         */
        get: function () { return this._autosize; },
        set: function (value) { this._autosize = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawerContainer.prototype, "hasBackdrop", {
        /**
         * Whether the drawer container should have a backdrop while one of the sidenavs is open.
         * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
         * mode as well.
         */
        get: function () {
            if (this._backdropOverride == null) {
                return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
            }
            return this._backdropOverride;
        },
        set: function (value) {
            this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDrawerContainer.prototype, "scrollable", {
        /** Reference to the CdkScrollable instance that wraps the scrollable content. */
        get: function () {
            return this._userContent || this._content;
        },
        enumerable: true,
        configurable: true
    });
    MatDrawerContainer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._allDrawers.changes
            .pipe(startWith(this._allDrawers), takeUntil(this._destroyed))
            .subscribe(function (drawer) {
            // @breaking-change 10.0.0 Remove `_container` check once container parameter is required.
            _this._drawers.reset(drawer.filter(function (item) { return !item._container || item._container === _this; }));
            _this._drawers.notifyOnChanges();
        });
        this._drawers.changes.pipe(startWith(null)).subscribe(function () {
            _this._validateDrawers();
            _this._drawers.forEach(function (drawer) {
                _this._watchDrawerToggle(drawer);
                _this._watchDrawerPosition(drawer);
                _this._watchDrawerMode(drawer);
            });
            if (!_this._drawers.length ||
                _this._isDrawerOpen(_this._start) ||
                _this._isDrawerOpen(_this._end)) {
                _this.updateContentMargins();
            }
            _this._changeDetectorRef.markForCheck();
        });
        this._doCheckSubject.pipe(debounceTime(10), // Arbitrary debounce time, less than a frame at 60fps
        takeUntil(this._destroyed)).subscribe(function () { return _this.updateContentMargins(); });
    };
    MatDrawerContainer.prototype.ngOnDestroy = function () {
        this._contentMarginChanges.complete();
        this._doCheckSubject.complete();
        this._drawers.destroy();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Calls `open` of both start and end drawers */
    MatDrawerContainer.prototype.open = function () {
        this._drawers.forEach(function (drawer) { return drawer.open(); });
    };
    /** Calls `close` of both start and end drawers */
    MatDrawerContainer.prototype.close = function () {
        this._drawers.forEach(function (drawer) { return drawer.close(); });
    };
    /**
     * Recalculates and updates the inline styles for the content. Note that this should be used
     * sparingly, because it causes a reflow.
     */
    MatDrawerContainer.prototype.updateContentMargins = function () {
        var _this = this;
        // 1. For drawers in `over` mode, they don't affect the content.
        // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
        //    left margin (for left drawer) or right margin (for right the drawer).
        // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
        //    adding to the left or right margin and simultaneously subtracting the same amount of
        //    margin from the other side.
        var left = 0;
        var right = 0;
        if (this._left && this._left.opened) {
            if (this._left.mode == 'side') {
                left += this._left._width;
            }
            else if (this._left.mode == 'push') {
                var width = this._left._width;
                left += width;
                right -= width;
            }
        }
        if (this._right && this._right.opened) {
            if (this._right.mode == 'side') {
                right += this._right._width;
            }
            else if (this._right.mode == 'push') {
                var width = this._right._width;
                right += width;
                left -= width;
            }
        }
        // If either `right` or `left` is zero, don't set a style to the element. This
        // allows users to specify a custom size via CSS class in SSR scenarios where the
        // measured widths will always be zero. Note that we reset to `null` here, rather
        // than below, in order to ensure that the types in the `if` below are consistent.
        left = left || null;
        right = right || null;
        if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
            this._contentMargins = { left: left, right: right };
            // Pull back into the NgZone since in some cases we could be outside. We need to be careful
            // to do it only when something changed, otherwise we can end up hitting the zone too often.
            this._ngZone.run(function () { return _this._contentMarginChanges.next(_this._contentMargins); });
        }
    };
    MatDrawerContainer.prototype.ngDoCheck = function () {
        var _this = this;
        // If users opted into autosizing, do a check every change detection cycle.
        if (this._autosize && this._isPushed()) {
            // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
            this._ngZone.runOutsideAngular(function () { return _this._doCheckSubject.next(); });
        }
    };
    /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     */
    MatDrawerContainer.prototype._watchDrawerToggle = function (drawer) {
        var _this = this;
        drawer._animationStarted.pipe(filter(function (event) { return event.fromState !== event.toState; }), takeUntil(this._drawers.changes))
            .subscribe(function (event) {
            // Set the transition class on the container so that the animations occur. This should not
            // be set initially because animations should only be triggered via a change in state.
            if (event.toState !== 'open-instant' && _this._animationMode !== 'NoopAnimations') {
                _this._element.nativeElement.classList.add('mat-drawer-transition');
            }
            _this.updateContentMargins();
            _this._changeDetectorRef.markForCheck();
        });
        if (drawer.mode !== 'side') {
            drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(function () {
                return _this._setContainerClass(drawer.opened);
            });
        }
    };
    /**
     * Subscribes to drawer onPositionChanged event in order to
     * re-validate drawers when the position changes.
     */
    MatDrawerContainer.prototype._watchDrawerPosition = function (drawer) {
        var _this = this;
        if (!drawer) {
            return;
        }
        // NOTE: We need to wait for the microtask queue to be empty before validating,
        // since both drawers may be swapping positions at the same time.
        drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(function () {
            _this._ngZone.onMicrotaskEmpty.asObservable().pipe(take(1)).subscribe(function () {
                _this._validateDrawers();
            });
        });
    };
    /** Subscribes to changes in drawer mode so we can run change detection. */
    MatDrawerContainer.prototype._watchDrawerMode = function (drawer) {
        var _this = this;
        if (drawer) {
            drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed)))
                .subscribe(function () {
                _this.updateContentMargins();
                _this._changeDetectorRef.markForCheck();
            });
        }
    };
    /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
    MatDrawerContainer.prototype._setContainerClass = function (isAdd) {
        var classList = this._element.nativeElement.classList;
        var className = 'mat-drawer-container-has-open';
        if (isAdd) {
            classList.add(className);
        }
        else {
            classList.remove(className);
        }
    };
    /** Validate the state of the drawer children components. */
    MatDrawerContainer.prototype._validateDrawers = function () {
        var _this = this;
        this._start = this._end = null;
        // Ensure that we have at most one start and one end drawer.
        this._drawers.forEach(function (drawer) {
            if (drawer.position == 'end') {
                if (_this._end != null) {
                    throwMatDuplicatedDrawerError('end');
                }
                _this._end = drawer;
            }
            else {
                if (_this._start != null) {
                    throwMatDuplicatedDrawerError('start');
                }
                _this._start = drawer;
            }
        });
        this._right = this._left = null;
        // Detect if we're LTR or RTL.
        if (this._dir && this._dir.value === 'rtl') {
            this._left = this._end;
            this._right = this._start;
        }
        else {
            this._left = this._start;
            this._right = this._end;
        }
    };
    /** Whether the container is being pushed to the side by one of the drawers. */
    MatDrawerContainer.prototype._isPushed = function () {
        return (this._isDrawerOpen(this._start) && this._start.mode != 'over') ||
            (this._isDrawerOpen(this._end) && this._end.mode != 'over');
    };
    MatDrawerContainer.prototype._onBackdropClicked = function () {
        this.backdropClick.emit();
        this._closeModalDrawer();
    };
    MatDrawerContainer.prototype._closeModalDrawer = function () {
        var _this = this;
        // Close all open drawers where closing is not disabled and the mode is not `side`.
        [this._start, this._end]
            .filter(function (drawer) { return drawer && !drawer.disableClose && _this._canHaveBackdrop(drawer); })
            .forEach(function (drawer) { return drawer.close(); });
    };
    MatDrawerContainer.prototype._isShowingBackdrop = function () {
        return (this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start)) ||
            (this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end));
    };
    MatDrawerContainer.prototype._canHaveBackdrop = function (drawer) {
        return drawer.mode !== 'side' || !!this._backdropOverride;
    };
    MatDrawerContainer.prototype._isDrawerOpen = function (drawer) {
        return drawer != null && drawer.opened;
    };
    /** @nocollapse */
    MatDrawerContainer.ctorParameters = function () { return [
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: ViewportRuler },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DRAWER_DEFAULT_AUTOSIZE,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatDrawerContainer.propDecorators = {
        _allDrawers: [{ type: ContentChildren, args: [MatDrawer, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }],
        _content: [{ type: ContentChild, args: [MatDrawerContent,] }],
        _userContent: [{ type: ViewChild, args: [MatDrawerContent,] }],
        autosize: [{ type: Input }],
        hasBackdrop: [{ type: Input }],
        backdropClick: [{ type: Output }]
    };
MatDrawerContainer.ɵfac = function MatDrawerContainer_Factory(t) { return new (t || MatDrawerContainer)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ViewportRuler), ɵngcc0.ɵɵdirectiveInject(MAT_DRAWER_DEFAULT_AUTOSIZE), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatDrawerContainer.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDrawerContainer, selectors: [["mat-drawer-container"]], contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatDrawerContent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatDrawer, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._content = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._allDrawers = _t);
    } }, viewQuery: function MatDrawerContainer_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatDrawerContent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._userContent = _t.first);
    } }, hostAttrs: [1, "mat-drawer-container"], hostVars: 2, hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
    } }, inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" }, outputs: { backdropClick: "backdropClick" }, exportAs: ["matDrawerContainer"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: MAT_DRAWER_CONTAINER,
                useExisting: MatDrawerContainer
            }])], ngContentSelectors: _c2, decls: 4, vars: 2, consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], [4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"]], template: function MatDrawerContainer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵtemplate(0, MatDrawerContainer_div_0_Template, 1, 2, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵprojection(2, 1);
        ɵngcc0.ɵɵtemplate(3, MatDrawerContainer_mat_drawer_content_3_Template, 2, 0, "mat-drawer-content", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasBackdrop);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx._content);
    } }, directives: [ɵngcc5.NgIf, MatDrawerContent], styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDrawerContainer, [{
        type: Component,
        args: [{
                selector: 'mat-drawer-container',
                exportAs: 'matDrawerContainer',
                template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-drawer\"></ng-content>\n\n<ng-content select=\"mat-drawer-content\">\n</ng-content>\n<mat-drawer-content *ngIf=\"!_content\">\n  <ng-content></ng-content>\n</mat-drawer-content>\n",
                host: {
                    'class': 'mat-drawer-container',
                    '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{
                        provide: MAT_DRAWER_CONTAINER,
                        useExisting: MatDrawerContainer
                    }],
                styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"]
            }]
    }], function () { return [{ type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.ViewportRuler }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { backdropClick: [{
            type: Output
        }], autosize: [{
            type: Input
        }], hasBackdrop: [{
            type: Input
        }], _allDrawers: [{
            type: ContentChildren,
            args: [MatDrawer, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                }]
        }], _content: [{
            type: ContentChild,
            args: [MatDrawerContent]
        }], _userContent: [{
            type: ViewChild,
            args: [MatDrawerContent]
        }] }); })();
    return MatDrawerContainer;
}());
export { MatDrawerContainer };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvc2lkZW5hdi9kcmF3ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVFBLE9BQU8sRUFBQyxZQUFZLEVBQTBCLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDekYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUVmLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFDLG1CQUFt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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUF0RFo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFzRGtCO0FBQUMsSUE2U3BCLHlCQUFDO0FBQ0EsQ0FEQSxBQWxYRCxJQWtYQztBQUNELFNBbldhLGtCQUFrQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FuaW1hdGlvbkV2ZW50fSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7Rm9jdXNNb25pdG9yLCBGb2N1c09yaWdpbiwgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5fSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtFU0NBUEUsIGhhc01vZGlmaWVyS2V5fSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7Q2RrU2Nyb2xsYWJsZSwgU2Nyb2xsRGlzcGF0Y2hlciwgVmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBIb3N0TGlzdGVuZXIsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzdGFydFdpdGgsXG4gIHRha2UsXG4gIHRha2VVbnRpbCxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7bWF0RHJhd2VyQW5pbWF0aW9uc30gZnJvbSAnLi9kcmF3ZXItYW5pbWF0aW9ucyc7XG5pbXBvcnQge0FOSU1BVElPTl9NT0RVTEVfVFlQRX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuXG4vKipcbiAqIFRocm93cyBhbiBleGNlcHRpb24gd2hlbiB0d28gTWF0RHJhd2VyIGFyZSBtYXRjaGluZyB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm93TWF0RHVwbGljYXRlZERyYXdlckVycm9yKHBvc2l0aW9uOiBzdHJpbmcpIHtcbiAgdGhyb3cgRXJyb3IoYEEgZHJhd2VyIHdhcyBhbHJlYWR5IGRlY2xhcmVkIGZvciAncG9zaXRpb249XCIke3Bvc2l0aW9ufVwiJ2ApO1xufVxuXG5cbi8qKiBSZXN1bHQgb2YgdGhlIHRvZ2dsZSBwcm9taXNlIHRoYXQgaW5kaWNhdGVzIHRoZSBzdGF0ZSBvZiB0aGUgZHJhd2VyLiAqL1xuZXhwb3J0IHR5cGUgTWF0RHJhd2VyVG9nZ2xlUmVzdWx0ID0gJ29wZW4nIHwgJ2Nsb3NlJztcblxuLyoqIERyYXdlciBhbmQgU2lkZU5hdiBkaXNwbGF5IG1vZGVzLiAqL1xuZXhwb3J0IHR5cGUgTWF0RHJhd2VyTW9kZSA9ICdvdmVyJyB8ICdwdXNoJyB8ICdzaWRlJztcblxuLyoqIENvbmZpZ3VyZXMgd2hldGhlciBkcmF3ZXJzIHNob3VsZCB1c2UgYXV0byBzaXppbmcgYnkgZGVmYXVsdC4gKi9cbmV4cG9ydCBjb25zdCBNQVRfRFJBV0VSX0RFRkFVTFRfQVVUT1NJWkUgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxib29sZWFuPignTUFUX0RSQVdFUl9ERUZBVUxUX0FVVE9TSVpFJywge1xuICAgICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICAgICAgZmFjdG9yeTogTUFUX0RSQVdFUl9ERUZBVUxUX0FVVE9TSVpFX0ZBQ1RPUlksXG4gICAgfSk7XG5cblxuLyoqXG4gKiBVc2VkIHRvIHByb3ZpZGUgYSBkcmF3ZXIgY29udGFpbmVyIHRvIGEgZHJhd2VyIHdoaWxlIGF2b2lkaW5nIGNpcmN1bGFyIHJlZmVyZW5jZXMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBNQVRfRFJBV0VSX0NPTlRBSU5FUiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTUFUX0RSQVdFUl9DT05UQUlORVInKTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBNQVRfRFJBV0VSX0RFRkFVTFRfQVVUT1NJWkVfRkFDVE9SWSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZHJhd2VyLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1kcmF3ZXItY29udGVudCcsXG4gICAgJ1tzdHlsZS5tYXJnaW4tbGVmdC5weF0nOiAnX2NvbnRhaW5lci5fY29udGVudE1hcmdpbnMubGVmdCcsXG4gICAgJ1tzdHlsZS5tYXJnaW4tcmlnaHQucHhdJzogJ19jb250YWluZXIuX2NvbnRlbnRNYXJnaW5zLnJpZ2h0JyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1hdERyYXdlckNvbnRlbnQgZXh0ZW5kcyBDZGtTY3JvbGxhYmxlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE1hdERyYXdlckNvbnRhaW5lcikpIHB1YmxpYyBfY29udGFpbmVyOiBNYXREcmF3ZXJDb250YWluZXIsXG4gICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgIHNjcm9sbERpc3BhdGNoZXI6IFNjcm9sbERpc3BhdGNoZXIsXG4gICAgICBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNjcm9sbERpc3BhdGNoZXIsIG5nWm9uZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyLl9jb250ZW50TWFyZ2luQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGNvcnJlc3BvbmRzIHRvIGEgZHJhd2VyIHRoYXQgY2FuIGJlIG9wZW5lZCBvbiB0aGUgZHJhd2VyIGNvbnRhaW5lci5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWRyYXdlcicsXG4gIGV4cG9ydEFzOiAnbWF0RHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICdkcmF3ZXIuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFttYXREcmF3ZXJBbmltYXRpb25zLnRyYW5zZm9ybURyYXdlcl0sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWRyYXdlcicsXG4gICAgLy8gbXVzdCBwcmV2ZW50IHRoZSBicm93c2VyIGZyb20gYWxpZ25pbmcgdGV4dCBiYXNlZCBvbiB2YWx1ZVxuICAgICdbYXR0ci5hbGlnbl0nOiAnbnVsbCcsXG4gICAgJ1tjbGFzcy5tYXQtZHJhd2VyLWVuZF0nOiAncG9zaXRpb24gPT09IFwiZW5kXCInLFxuICAgICdbY2xhc3MubWF0LWRyYXdlci1vdmVyXSc6ICdtb2RlID09PSBcIm92ZXJcIicsXG4gICAgJ1tjbGFzcy5tYXQtZHJhd2VyLXB1c2hdJzogJ21vZGUgPT09IFwicHVzaFwiJyxcbiAgICAnW2NsYXNzLm1hdC1kcmF3ZXItc2lkZV0nOiAnbW9kZSA9PT0gXCJzaWRlXCInLFxuICAgICdbY2xhc3MubWF0LWRyYXdlci1vcGVuZWRdJzogJ29wZW5lZCcsXG4gICAgJ3RhYkluZGV4JzogJy0xJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1hdERyYXdlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2ZvY3VzVHJhcDogRm9jdXNUcmFwO1xuICBwcml2YXRlIF9lbGVtZW50Rm9jdXNlZEJlZm9yZURyYXdlcldhc09wZW5lZDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAvKiogV2hldGhlciB0aGUgZHJhd2VyIGlzIGluaXRpYWxpemVkLiBVc2VkIGZvciBkaXNhYmxpbmcgdGhlIGluaXRpYWwgYW5pbWF0aW9uLiAqL1xuICBwcml2YXRlIF9lbmFibGVBbmltYXRpb25zID0gZmFsc2U7XG5cbiAgLyoqIFRoZSBzaWRlIHRoYXQgdGhlIGRyYXdlciBpcyBhdHRhY2hlZCB0by4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBvc2l0aW9uKCk6ICdzdGFydCcgfCAnZW5kJyB7IHJldHVybiB0aGlzLl9wb3NpdGlvbjsgfVxuICBzZXQgcG9zaXRpb24odmFsdWU6ICdzdGFydCcgfCAnZW5kJykge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgdmFsdWUuXG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gJ2VuZCcgPyAnZW5kJyA6ICdzdGFydCc7XG4gICAgaWYgKHZhbHVlICE9IHRoaXMuX3Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgdGhpcy5vblBvc2l0aW9uQ2hhbmdlZC5lbWl0KCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiAnc3RhcnQnIHwgJ2VuZCcgPSAnc3RhcnQnO1xuXG4gIC8qKiBNb2RlIG9mIHRoZSBkcmF3ZXI7IG9uZSBvZiAnb3ZlcicsICdwdXNoJyBvciAnc2lkZScuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtb2RlKCk6IE1hdERyYXdlck1vZGUgeyByZXR1cm4gdGhpcy5fbW9kZTsgfVxuICBzZXQgbW9kZSh2YWx1ZTogTWF0RHJhd2VyTW9kZSkge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgICB0aGlzLl91cGRhdGVGb2N1c1RyYXBTdGF0ZSgpO1xuICAgIHRoaXMuX21vZGVDaGFuZ2VkLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiBNYXREcmF3ZXJNb2RlID0gJ292ZXInO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBkcmF3ZXIgY2FuIGJlIGNsb3NlZCB3aXRoIHRoZSBlc2NhcGUga2V5IG9yIGJ5IGNsaWNraW5nIG9uIHRoZSBiYWNrZHJvcC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVDbG9zZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVDbG9zZTsgfVxuICBzZXQgZGlzYWJsZUNsb3NlKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2Rpc2FibGVDbG9zZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgcHJpdmF0ZSBfZGlzYWJsZUNsb3NlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGRyYXdlciBzaG91bGQgZm9jdXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGF1dG9tYXRpY2FsbHkgd2hlbiBvcGVuZWQuXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlIGluIHdoZW4gYG1vZGVgIGlzIHNldCB0byBgc2lkZWAsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgdHJ1ZWAuIElmIGV4cGxpY2l0bHlcbiAgICogZW5hYmxlZCwgZm9jdXMgd2lsbCBiZSBtb3ZlZCBpbnRvIHRoZSBzaWRlbmF2IGluIGBzaWRlYCBtb2RlIGFzIHdlbGwuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgYXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fYXV0b0ZvY3VzO1xuXG4gICAgLy8gTm90ZSB0aGF0IHVzdWFsbHkgd2UgZGlzYWJsZSBhdXRvIGZvY3VzaW5nIGluIGBzaWRlYCBtb2RlLCBiZWNhdXNlIHdlIGRvbid0IGtub3cgaG93IHRoZVxuICAgIC8vIHNpZGVuYXYgaXMgYmVpbmcgdXNlZCwgYnV0IGluIHNvbWUgY2FzZXMgaXQgc3RpbGwgbWFrZXMgc2Vuc2UgdG8gZG8gaXQuIElmIHRoZSBjb25zdW1lclxuICAgIC8vIGV4cGxpY2l0bHkgZW5hYmxlZCBgYXV0b0ZvY3VzYCwgd2UgdGFrZSBpdCBhcyB0aGVtIGFsd2F5cyB3YW50aW5nIHRvIGVuYWJsZSBpdC5cbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHRoaXMubW9kZSAhPT0gJ3NpZGUnIDogdmFsdWU7XG4gIH1cbiAgc2V0IGF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9hdXRvRm9jdXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIHByaXZhdGUgX2F1dG9Gb2N1czogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgZHJhd2VyIGlzIG9wZW5lZC4gV2Ugb3ZlcmxvYWQgdGhpcyBiZWNhdXNlIHdlIHRyaWdnZXIgYW4gZXZlbnQgd2hlbiBpdFxuICAgKiBzdGFydHMgb3IgZW5kLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX29wZW5lZDsgfVxuICBzZXQgb3BlbmVkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMudG9nZ2xlKGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSkpOyB9XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBIb3cgdGhlIHNpZGVuYXYgd2FzIG9wZW5lZCAoa2V5cHJlc3MsIG1vdXNlIGNsaWNrIGV0Yy4pICovXG4gIHByaXZhdGUgX29wZW5lZFZpYTogRm9jdXNPcmlnaW4gfCBudWxsO1xuXG4gIC8qKiBFbWl0cyB3aGVuZXZlciB0aGUgZHJhd2VyIGhhcyBzdGFydGVkIGFuaW1hdGluZy4gKi9cbiAgX2FuaW1hdGlvblN0YXJ0ZWQgPSBuZXcgU3ViamVjdDxBbmltYXRpb25FdmVudD4oKTtcblxuICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGRyYXdlciBpcyBkb25lIGFuaW1hdGluZy4gKi9cbiAgX2FuaW1hdGlvbkVuZCA9IG5ldyBTdWJqZWN0PEFuaW1hdGlvbkV2ZW50PigpO1xuXG4gIC8qKiBDdXJyZW50IHN0YXRlIG9mIHRoZSBzaWRlbmF2IGFuaW1hdGlvbi4gKi9cbiAgLy8gQEhvc3RCaW5kaW5nIGlzIHVzZWQgaW4gdGhlIGNsYXNzIGFzIGl0IGlzIGV4cGVjdGVkIHRvIGJlIGV4dGVuZGVkLiAgU2luY2UgQENvbXBvbmVudCBkZWNvcmF0b3JcbiAgLy8gbWV0YWRhdGEgaXMgbm90IGluaGVyaXRlZCBieSBjaGlsZCBjbGFzc2VzLCBpbnN0ZWFkIHRoZSBob3N0IGJpbmRpbmcgZGF0YSBpcyBkZWZpbmVkIGluIGEgd2F5XG4gIC8vIHRoYXQgY2FuIGJlIGluaGVyaXRlZC5cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RCaW5kaW5nKCdAdHJhbnNmb3JtJylcbiAgX2FuaW1hdGlvblN0YXRlOiAnb3Blbi1pbnN0YW50JyB8ICdvcGVuJyB8ICd2b2lkJyA9ICd2b2lkJztcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBkcmF3ZXIgb3BlbiBzdGF0ZSBpcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbmVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPVxuICAgICAgLy8gTm90ZSB0aGlzIGhhcyB0byBiZSBhc3luYyBpbiBvcmRlciB0byBhdm9pZCBzb21lIGlzc3VlcyB3aXRoIHR3by1iaW5kaW5ncyAoc2VlICM4ODcyKS5cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oLyogaXNBc3luYyAqL3RydWUpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGRyYXdlciBoYXMgYmVlbiBvcGVuZWQuICovXG4gIEBPdXRwdXQoJ29wZW5lZCcpXG4gIGdldCBfb3BlbmVkU3RyZWFtKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm9wZW5lZENoYW5nZS5waXBlKGZpbHRlcihvID0+IG8pLCBtYXAoKCkgPT4ge30pKTtcbiAgfVxuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGRyYXdlciBoYXMgc3RhcnRlZCBvcGVuaW5nLiAqL1xuICBAT3V0cHV0KClcbiAgZ2V0IG9wZW5lZFN0YXJ0KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25TdGFydGVkLnBpcGUoXG4gICAgICBmaWx0ZXIoZSA9PiBlLmZyb21TdGF0ZSAhPT0gZS50b1N0YXRlICYmIGUudG9TdGF0ZS5pbmRleE9mKCdvcGVuJykgPT09IDApLFxuICAgICAgbWFwKCgpID0+IHt9KVxuICAgICk7XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBkcmF3ZXIgaGFzIGJlZW4gY2xvc2VkLiAqL1xuICBAT3V0cHV0KCdjbG9zZWQnKVxuICBnZXQgX2Nsb3NlZFN0cmVhbSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5vcGVuZWRDaGFuZ2UucGlwZShmaWx0ZXIobyA9PiAhbyksIG1hcCgoKSA9PiB7fSkpO1xuICB9XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgZHJhd2VyIGhhcyBzdGFydGVkIGNsb3NpbmcuICovXG4gIEBPdXRwdXQoKVxuICBnZXQgY2xvc2VkU3RhcnQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvblN0YXJ0ZWQucGlwZShcbiAgICAgIGZpbHRlcihlID0+IGUuZnJvbVN0YXRlICE9PSBlLnRvU3RhdGUgJiYgZS50b1N0YXRlID09PSAndm9pZCcpLFxuICAgICAgbWFwKCgpID0+IHt9KVxuICAgICk7XG4gIH1cblxuICAvKiogRW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBkcmF3ZXIncyBwb3NpdGlvbiBjaGFuZ2VzLiAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCdwb3NpdGlvbkNoYW5nZWQnKSBvblBvc2l0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiB0aGUgZHJhd2VyIG1vZGUgY2hhbmdlcy4gVGhpcyBpcyB1c2VkIGJ5IHRoZSBkcmF3ZXIgY29udGFpbmVyIHRvXG4gICAqIHRvIGtub3cgd2hlbiB0byB3aGVuIHRoZSBtb2RlIGNoYW5nZXMgc28gaXQgY2FuIGFkYXB0IHRoZSBtYXJnaW5zIG9uIHRoZSBjb250ZW50LlxuICAgKi9cbiAgcmVhZG9ubHkgX21vZGVDaGFuZ2VkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55LFxuICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICogQGRlcHJlY2F0ZWQgYF9jb250YWluZXJgIHBhcmFtZXRlciB0byBiZSBtYWRlIHJlcXVpcmVkLlxuICAgICAgICAgICAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRFJBV0VSX0NPTlRBSU5FUikgcHVibGljIF9jb250YWluZXI/OiBNYXREcmF3ZXJDb250YWluZXIpIHtcblxuICAgIHRoaXMub3BlbmVkQ2hhbmdlLnN1YnNjcmliZSgob3BlbmVkOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAob3BlbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9kb2MpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50Rm9jdXNlZEJlZm9yZURyYXdlcldhc09wZW5lZCA9IHRoaXMuX2RvYy5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdGFrZUZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZXN0b3JlRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBga2V5ZG93bmAgZXZlbnRzIG91dHNpZGUgdGhlIHpvbmUgc28gdGhhdCBjaGFuZ2UgZGV0ZWN0aW9uIGlzIG5vdCBydW4gZXZlcnlcbiAgICAgKiB0aW1lIGEga2V5IGlzIHByZXNzZWQuIEluc3RlYWQgd2UgcmUtZW50ZXIgdGhlIHpvbmUgb25seSBpZiB0aGUgYEVTQ2Aga2V5IGlzIHByZXNzZWRcbiAgICAgKiBhbmQgd2UgZG9uJ3QgaGF2ZSBjbG9zZSBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAoZnJvbUV2ZW50KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nKSBhcyBPYnNlcnZhYmxlPEtleWJvYXJkRXZlbnQ+KS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiAhdGhpcy5kaXNhYmxlQ2xvc2UgJiYgIWhhc01vZGlmaWVyS2V5KGV2ZW50KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZClcbiAgICAgICAgKS5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIC8vIFdlIG5lZWQgYSBTdWJqZWN0IHdpdGggZGlzdGluY3RVbnRpbENoYW5nZWQsIGJlY2F1c2UgdGhlIGBkb25lYCBldmVudFxuICAgIC8vIGZpcmVzIHR3aWNlIG9uIHNvbWUgYnJvd3NlcnMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yNDA4NFxuICAgIHRoaXMuX2FuaW1hdGlvbkVuZC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geC5mcm9tU3RhdGUgPT09IHkuZnJvbVN0YXRlICYmIHgudG9TdGF0ZSA9PT0geS50b1N0YXRlO1xuICAgIH0pKS5zdWJzY3JpYmUoKGV2ZW50OiBBbmltYXRpb25FdmVudCkgPT4ge1xuICAgICAgY29uc3Qge2Zyb21TdGF0ZSwgdG9TdGF0ZX0gPSBldmVudDtcblxuICAgICAgaWYgKCh0b1N0YXRlLmluZGV4T2YoJ29wZW4nKSA9PT0gMCAmJiBmcm9tU3RhdGUgPT09ICd2b2lkJykgfHxcbiAgICAgICAgICAodG9TdGF0ZSA9PT0gJ3ZvaWQnICYmIGZyb21TdGF0ZS5pbmRleE9mKCdvcGVuJykgPT09IDApKSB7XG4gICAgICAgIHRoaXMub3BlbmVkQ2hhbmdlLmVtaXQodGhpcy5fb3BlbmVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyBmb2N1cyBpbnRvIHRoZSBkcmF3ZXIuIE5vdGUgdGhhdCB0aGlzIHdvcmtzIGV2ZW4gaWZcbiAgICogdGhlIGZvY3VzIHRyYXAgaXMgZGlzYWJsZWQgaW4gYHNpZGVgIG1vZGUuXG4gICAqL1xuICBwcml2YXRlIF90YWtlRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9Gb2N1cyB8fCAhdGhpcy5fZm9jdXNUcmFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKS50aGVuKGhhc01vdmVkRm9jdXMgPT4ge1xuICAgICAgLy8gSWYgdGhlcmUgd2VyZSBubyBmb2N1c2FibGUgZWxlbWVudHMsIGZvY3VzIHRoZSBzaWRlbmF2IGl0c2VsZiBzbyB0aGUga2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgICAgLy8gc3RpbGwgd29ya3MuIFdlIG5lZWQgdG8gY2hlY2sgdGhhdCBgZm9jdXNgIGlzIGEgZnVuY3Rpb24gZHVlIHRvIFVuaXZlcnNhbC5cbiAgICAgIGlmICghaGFzTW92ZWRGb2N1cyAmJiB0eXBlb2YgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGZvY3VzIGlzIGN1cnJlbnRseSBpbnNpZGUgdGhlIGRyYXdlciwgcmVzdG9yZXMgaXQgdG8gd2hlcmUgaXQgd2FzIGJlZm9yZSB0aGUgZHJhd2VyXG4gICAqIG9wZW5lZC5cbiAgICovXG4gIHByaXZhdGUgX3Jlc3RvcmVGb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRWwgPSB0aGlzLl9kb2MgJiYgdGhpcy5fZG9jLmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAoYWN0aXZlRWwgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGFjdGl2ZUVsKSkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnRGb2N1c2VkQmVmb3JlRHJhd2VyV2FzT3BlbmVkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuX2VsZW1lbnRGb2N1c2VkQmVmb3JlRHJhd2VyV2FzT3BlbmVkLCB0aGlzLl9vcGVuZWRWaWEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50Rm9jdXNlZEJlZm9yZURyYXdlcldhc09wZW5lZCA9IG51bGw7XG4gICAgdGhpcy5fb3BlbmVkVmlhID0gbnVsbDtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9mb2N1c1RyYXAgPSB0aGlzLl9mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3VwZGF0ZUZvY3VzVHJhcFN0YXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgLy8gRW5hYmxlIHRoZSBhbmltYXRpb25zIGFmdGVyIHRoZSBsaWZlY3ljbGUgaG9va3MgaGF2ZSBydW4sIGluIG9yZGVyIHRvIGF2b2lkIGFuaW1hdGluZ1xuICAgIC8vIGRyYXdlcnMgdGhhdCBhcmUgb3BlbiBieSBkZWZhdWx0LiBXaGVuIHdlJ3JlIG9uIHRoZSBzZXJ2ZXIsIHdlIHNob3VsZG4ndCBlbmFibGUgdGhlXG4gICAgLy8gYW5pbWF0aW9ucywgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRoZSBkcmF3ZXIgdG8gYW5pbWF0ZSB0aGUgZmlyc3QgdGltZSB0aGUgdXNlciBzZWVzXG4gICAgLy8gdGhlIHBhZ2UuXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fZW5hYmxlQW5pbWF0aW9ucyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5fZm9jdXNUcmFwLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hbmltYXRpb25TdGFydGVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uRW5kLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fbW9kZUNoYW5nZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIGRyYXdlci5cbiAgICogQHBhcmFtIG9wZW5lZFZpYSBXaGV0aGVyIHRoZSBkcmF3ZXIgd2FzIG9wZW5lZCBieSBhIGtleSBwcmVzcywgbW91c2UgY2xpY2sgb3IgcHJvZ3JhbW1hdGljYWxseS5cbiAgICogVXNlZCBmb3IgZm9jdXMgbWFuYWdlbWVudCBhZnRlciB0aGUgc2lkZW5hdiBpcyBjbG9zZWQuXG4gICAqL1xuICBvcGVuKG9wZW5lZFZpYT86IEZvY3VzT3JpZ2luKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy50b2dnbGUodHJ1ZSwgb3BlbmVkVmlhKTtcbiAgfVxuXG4gIC8qKiBDbG9zZSB0aGUgZHJhd2VyLiAqL1xuICBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoaXMgZHJhd2VyLlxuICAgKiBAcGFyYW0gaXNPcGVuIFdoZXRoZXIgdGhlIGRyYXdlciBzaG91bGQgYmUgb3Blbi5cbiAgICogQHBhcmFtIG9wZW5lZFZpYSBXaGV0aGVyIHRoZSBkcmF3ZXIgd2FzIG9wZW5lZCBieSBhIGtleSBwcmVzcywgbW91c2UgY2xpY2sgb3IgcHJvZ3JhbW1hdGljYWxseS5cbiAgICogVXNlZCBmb3IgZm9jdXMgbWFuYWdlbWVudCBhZnRlciB0aGUgc2lkZW5hdiBpcyBjbG9zZWQuXG4gICAqL1xuICB0b2dnbGUoaXNPcGVuOiBib29sZWFuID0gIXRoaXMub3BlbmVkLCBvcGVuZWRWaWE6IEZvY3VzT3JpZ2luID0gJ3Byb2dyYW0nKTpcbiAgICBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuXG4gICAgdGhpcy5fb3BlbmVkID0gaXNPcGVuO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uU3RhdGUgPSB0aGlzLl9lbmFibGVBbmltYXRpb25zID8gJ29wZW4nIDogJ29wZW4taW5zdGFudCc7XG4gICAgICB0aGlzLl9vcGVuZWRWaWEgPSBvcGVuZWRWaWE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gJ3ZvaWQnO1xuICAgICAgdGhpcy5fcmVzdG9yZUZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlRm9jdXNUcmFwU3RhdGUoKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5vcGVuZWRDaGFuZ2UucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUob3BlbiA9PiByZXNvbHZlKG9wZW4gPyAnb3BlbicgOiAnY2xvc2UnKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgX3dpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA/ICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCkgOiAwO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGVuYWJsZWQgc3RhdGUgb2YgdGhlIGZvY3VzIHRyYXAuICovXG4gIHByaXZhdGUgX3VwZGF0ZUZvY3VzVHJhcFN0YXRlKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c1RyYXApIHtcbiAgICAgIC8vIFRoZSBmb2N1cyB0cmFwIGlzIG9ubHkgZW5hYmxlZCB3aGVuIHRoZSBkcmF3ZXIgaXMgb3BlbiBpbiBhbnkgbW9kZSBvdGhlciB0aGFuIHNpZGUuXG4gICAgICB0aGlzLl9mb2N1c1RyYXAuZW5hYmxlZCA9IHRoaXMub3BlbmVkICYmIHRoaXMubW9kZSAhPT0gJ3NpZGUnO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIGhhdmUgdG8gdXNlIGEgYEhvc3RMaXN0ZW5lcmAgaGVyZSBpbiBvcmRlciB0byBzdXBwb3J0IGJvdGggSXZ5IGFuZCBWaWV3RW5naW5lLlxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBiaW5kaW5ncyB3aWxsIGJlIG1lcmdlZCB3aGVuIHRoaXMgY2xhc3MgaXMgZXh0ZW5kZWQsIHdoZXJlYXMgaW5cbiAgLy8gVmlld0VuZ2luZSB0aGV5J3JlIG92ZXJ3cml0dGVuLlxuICAvLyBUT0RPKGNyaXNiZXRvKTogd2UgbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAgb25jZSBJdnkgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdAdHJhbnNmb3JtLnN0YXJ0JywgWyckZXZlbnQnXSlcbiAgX2FuaW1hdGlvblN0YXJ0TGlzdGVuZXIoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgdGhpcy5fYW5pbWF0aW9uU3RhcnRlZC5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIC8vIFdlIGhhdmUgdG8gdXNlIGEgYEhvc3RMaXN0ZW5lcmAgaGVyZSBpbiBvcmRlciB0byBzdXBwb3J0IGJvdGggSXZ5IGFuZCBWaWV3RW5naW5lLlxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBiaW5kaW5ncyB3aWxsIGJlIG1lcmdlZCB3aGVuIHRoaXMgY2xhc3MgaXMgZXh0ZW5kZWQsIHdoZXJlYXMgaW5cbiAgLy8gVmlld0VuZ2luZSB0aGV5J3JlIG92ZXJ3cml0dGVuLlxuICAvLyBUT0RPKGNyaXNiZXRvKTogd2UgbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAgb25jZSBJdnkgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdAdHJhbnNmb3JtLmRvbmUnLCBbJyRldmVudCddKVxuICBfYW5pbWF0aW9uRG9uZUxpc3RlbmVyKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIHRoaXMuX2FuaW1hdGlvbkVuZC5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlQ2xvc2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9Gb2N1czogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3BlbmVkOiBCb29sZWFuSW5wdXQ7XG59XG5cblxuLyoqXG4gKiBgPG1hdC1kcmF3ZXItY29udGFpbmVyPmAgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgaXMgdGhlIHBhcmVudCBjb21wb25lbnQgdG8gb25lIG9yIHR3byBgPG1hdC1kcmF3ZXI+YHMgdGhhdCB2YWxpZGF0ZXMgdGhlIHN0YXRlIGludGVybmFsbHlcbiAqIGFuZCBjb29yZGluYXRlcyB0aGUgYmFja2Ryb3AgYW5kIGNvbnRlbnQgc3R5bGluZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWRyYXdlci1jb250YWluZXInLFxuICBleHBvcnRBczogJ21hdERyYXdlckNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnZHJhd2VyLWNvbnRhaW5lci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RyYXdlci5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtZHJhd2VyLWNvbnRhaW5lcicsXG4gICAgJ1tjbGFzcy5tYXQtZHJhd2VyLWNvbnRhaW5lci1leHBsaWNpdC1iYWNrZHJvcF0nOiAnX2JhY2tkcm9wT3ZlcnJpZGUnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE1BVF9EUkFXRVJfQ09OVEFJTkVSLFxuICAgIHVzZUV4aXN0aW5nOiBNYXREcmF3ZXJDb250YWluZXJcbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgTWF0RHJhd2VyQ29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgLyoqIEFsbCBkcmF3ZXJzIGluIHRoZSBjb250YWluZXIuIEluY2x1ZGVzIGRyYXdlcnMgZnJvbSBpbnNpZGUgbmVzdGVkIGNvbnRhaW5lcnMuICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0RHJhd2VyLCB7XG4gICAgLy8gV2UgbmVlZCB0byB1c2UgYGRlc2NlbmRhbnRzOiB0cnVlYCwgYmVjYXVzZSBJdnkgd2lsbCBubyBsb25nZXIgbWF0Y2hcbiAgICAvLyBpbmRpcmVjdCBkZXNjZW5kYW50cyBpZiBpdCdzIGxlZnQgYXMgZmFsc2UuXG4gICAgZGVzY2VuZGFudHM6IHRydWVcbiAgfSlcbiAgX2FsbERyYXdlcnM6IFF1ZXJ5TGlzdDxNYXREcmF3ZXI+O1xuXG4gIC8qKiBEcmF3ZXJzIHRoYXQgYmVsb25nIHRvIHRoaXMgY29udGFpbmVyLiAqL1xuICBfZHJhd2VycyA9IG5ldyBRdWVyeUxpc3Q8TWF0RHJhd2VyPigpO1xuXG4gIEBDb250ZW50Q2hpbGQoTWF0RHJhd2VyQ29udGVudCkgX2NvbnRlbnQ6IE1hdERyYXdlckNvbnRlbnQ7XG4gIEBWaWV3Q2hpbGQoTWF0RHJhd2VyQ29udGVudCkgX3VzZXJDb250ZW50OiBNYXREcmF3ZXJDb250ZW50O1xuXG4gIC8qKiBUaGUgZHJhd2VyIGNoaWxkIHdpdGggdGhlIGBzdGFydGAgcG9zaXRpb24uICovXG4gIGdldCBzdGFydCgpOiBNYXREcmF3ZXIgfCBudWxsIHsgcmV0dXJuIHRoaXMuX3N0YXJ0OyB9XG5cbiAgLyoqIFRoZSBkcmF3ZXIgY2hpbGQgd2l0aCB0aGUgYGVuZGAgcG9zaXRpb24uICovXG4gIGdldCBlbmQoKTogTWF0RHJhd2VyIHwgbnVsbCB7IHJldHVybiB0aGlzLl9lbmQ7IH1cblxuICAvKipcbiAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IHJlc2l6ZSB0aGUgY29udGFpbmVyIHdoZW5ldmVyXG4gICAqIHRoZSBzaXplIG9mIGFueSBvZiBpdHMgZHJhd2VycyBjaGFuZ2VzLlxuICAgKlxuICAgKiAqKlVzZSBhdCB5b3VyIG93biByaXNrISoqIEVuYWJsaW5nIHRoaXMgb3B0aW9uIGNhbiBjYXVzZSBsYXlvdXQgdGhyYXNoaW5nIGJ5IG1lYXN1cmluZ1xuICAgKiB0aGUgZHJhd2VycyBvbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlLiBDYW4gYmUgY29uZmlndXJlZCBnbG9iYWxseSB2aWEgdGhlXG4gICAqIGBNQVRfRFJBV0VSX0RFRkFVTFRfQVVUT1NJWkVgIHRva2VuLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9zaXplKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYXV0b3NpemU7IH1cbiAgc2V0IGF1dG9zaXplKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2F1dG9zaXplID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9hdXRvc2l6ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgZHJhd2VyIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBhIGJhY2tkcm9wIHdoaWxlIG9uZSBvZiB0aGUgc2lkZW5hdnMgaXMgb3Blbi5cbiAgICogSWYgZXhwbGljaXRseSBzZXQgdG8gYHRydWVgLCB0aGUgYmFja2Ryb3Agd2lsbCBiZSBlbmFibGVkIGZvciBkcmF3ZXJzIGluIHRoZSBgc2lkZWBcbiAgICogbW9kZSBhcyB3ZWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGhhc0JhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcE92ZXJyaWRlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAhdGhpcy5fc3RhcnQgfHwgdGhpcy5fc3RhcnQubW9kZSAhPT0gJ3NpZGUnIHx8ICF0aGlzLl9lbmQgfHwgdGhpcy5fZW5kLm1vZGUgIT09ICdzaWRlJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYmFja2Ryb3BPdmVycmlkZTtcbiAgfVxuICBzZXQgaGFzQmFja2Ryb3AodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2JhY2tkcm9wT3ZlcnJpZGUgPSB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgX2JhY2tkcm9wT3ZlcnJpZGU6IGJvb2xlYW4gfCBudWxsO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGRyYXdlciBiYWNrZHJvcCBpcyBjbGlja2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYmFja2Ryb3BDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBUaGUgZHJhd2VyIGF0IHRoZSBzdGFydC9lbmQgcG9zaXRpb24sIGluZGVwZW5kZW50IG9mIGRpcmVjdGlvbi4gKi9cbiAgcHJpdmF0ZSBfc3RhcnQ6IE1hdERyYXdlciB8IG51bGw7XG4gIHByaXZhdGUgX2VuZDogTWF0RHJhd2VyIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIGRyYXdlciBhdCB0aGUgbGVmdC9yaWdodC4gV2hlbiBkaXJlY3Rpb24gY2hhbmdlcywgdGhlc2Ugd2lsbCBjaGFuZ2UgYXMgd2VsbC5cbiAgICogVGhleSdyZSB1c2VkIGFzIGFsaWFzZXMgZm9yIHRoZSBhYm92ZSB0byBzZXQgdGhlIGxlZnQvcmlnaHQgc3R5bGUgcHJvcGVybHkuXG4gICAqIEluIExUUiwgX2xlZnQgPT0gX3N0YXJ0IGFuZCBfcmlnaHQgPT0gX2VuZC5cbiAgICogSW4gUlRMLCBfbGVmdCA9PSBfZW5kIGFuZCBfcmlnaHQgPT0gX3N0YXJ0LlxuICAgKi9cbiAgcHJpdmF0ZSBfbGVmdDogTWF0RHJhd2VyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfcmlnaHQ6IE1hdERyYXdlciB8IG51bGw7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIG9uIGV2ZXJ5IG5nRG9DaGVjay4gVXNlZCBmb3IgZGVib3VuY2luZyByZWZsb3dzLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kb0NoZWNrU3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIE1hcmdpbnMgdG8gYmUgYXBwbGllZCB0byB0aGUgY29udGVudC4gVGhlc2UgYXJlIHVzZWQgdG8gcHVzaCAvIHNocmluayB0aGUgZHJhd2VyIGNvbnRlbnQgd2hlbiBhXG4gICAqIGRyYXdlciBpcyBvcGVuLiBXZSB1c2UgbWFyZ2luIHJhdGhlciB0aGFuIHRyYW5zZm9ybSBldmVuIGZvciBwdXNoIG1vZGUgYmVjYXVzZSB0cmFuc2Zvcm0gYnJlYWtzXG4gICAqIGZpeGVkIHBvc2l0aW9uIGVsZW1lbnRzIGluc2lkZSBvZiB0aGUgdHJhbnNmb3JtZWQgZWxlbWVudC5cbiAgICovXG4gIF9jb250ZW50TWFyZ2luczoge2xlZnQ6IG51bWJlcnxudWxsLCByaWdodDogbnVtYmVyfG51bGx9ID0ge2xlZnQ6IG51bGwsIHJpZ2h0OiBudWxsfTtcblxuICByZWFkb25seSBfY29udGVudE1hcmdpbkNoYW5nZXMgPSBuZXcgU3ViamVjdDx7bGVmdDogbnVtYmVyfG51bGwsIHJpZ2h0OiBudW1iZXJ8bnVsbH0+KCk7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgQ2RrU2Nyb2xsYWJsZSBpbnN0YW5jZSB0aGF0IHdyYXBzIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQuICovXG4gIGdldCBzY3JvbGxhYmxlKCk6IENka1Njcm9sbGFibGUge1xuICAgIHJldHVybiB0aGlzLl91c2VyQ29udGVudCB8fCB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgICAgICAgICAgIEBJbmplY3QoTUFUX0RSQVdFUl9ERUZBVUxUX0FVVE9TSVpFKSBkZWZhdWx0QXV0b3NpemUgPSBmYWxzZSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgX2FuaW1hdGlvbk1vZGU/OiBzdHJpbmcpIHtcblxuICAgIC8vIElmIGEgYERpcmAgZGlyZWN0aXZlIGV4aXN0cyB1cCB0aGUgdHJlZSwgbGlzdGVuIGRpcmVjdGlvbiBjaGFuZ2VzXG4gICAgLy8gYW5kIHVwZGF0ZSB0aGUgbGVmdC9yaWdodCBwcm9wZXJ0aWVzIHRvIHBvaW50IHRvIHRoZSBwcm9wZXIgc3RhcnQvZW5kLlxuICAgIGlmIChfZGlyKSB7XG4gICAgICBfZGlyLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl92YWxpZGF0ZURyYXdlcnMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50TWFyZ2lucygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2luY2UgdGhlIG1pbmltdW0gd2lkdGggb2YgdGhlIHNpZGVuYXYgZGVwZW5kcyBvbiB0aGUgdmlld3BvcnQgd2lkdGgsXG4gICAgLy8gd2UgbmVlZCB0byByZWNvbXB1dGUgdGhlIG1hcmdpbnMgaWYgdGhlIHZpZXdwb3J0IGNoYW5nZXMuXG4gICAgdmlld3BvcnRSdWxlci5jaGFuZ2UoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlQ29udGVudE1hcmdpbnMoKSk7XG5cbiAgICB0aGlzLl9hdXRvc2l6ZSA9IGRlZmF1bHRBdXRvc2l6ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9hbGxEcmF3ZXJzLmNoYW5nZXNcbiAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLl9hbGxEcmF3ZXJzKSwgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChkcmF3ZXI6IFF1ZXJ5TGlzdDxNYXREcmF3ZXI+KSA9PiB7XG4gICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wIFJlbW92ZSBgX2NvbnRhaW5lcmAgY2hlY2sgb25jZSBjb250YWluZXIgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAgICB0aGlzLl9kcmF3ZXJzLnJlc2V0KGRyYXdlci5maWx0ZXIoaXRlbSA9PiAhaXRlbS5fY29udGFpbmVyIHx8IGl0ZW0uX2NvbnRhaW5lciA9PT0gdGhpcykpO1xuICAgICAgICB0aGlzLl9kcmF3ZXJzLm5vdGlmeU9uQ2hhbmdlcygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9kcmF3ZXJzLmNoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl92YWxpZGF0ZURyYXdlcnMoKTtcblxuICAgICAgdGhpcy5fZHJhd2Vycy5mb3JFYWNoKChkcmF3ZXI6IE1hdERyYXdlcikgPT4ge1xuICAgICAgICB0aGlzLl93YXRjaERyYXdlclRvZ2dsZShkcmF3ZXIpO1xuICAgICAgICB0aGlzLl93YXRjaERyYXdlclBvc2l0aW9uKGRyYXdlcik7XG4gICAgICAgIHRoaXMuX3dhdGNoRHJhd2VyTW9kZShkcmF3ZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghdGhpcy5fZHJhd2Vycy5sZW5ndGggfHxcbiAgICAgICAgICB0aGlzLl9pc0RyYXdlck9wZW4odGhpcy5fc3RhcnQpIHx8XG4gICAgICAgICAgdGhpcy5faXNEcmF3ZXJPcGVuKHRoaXMuX2VuZCkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50TWFyZ2lucygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2RvQ2hlY2tTdWJqZWN0LnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMTApLCAvLyBBcmJpdHJhcnkgZGVib3VuY2UgdGltZSwgbGVzcyB0aGFuIGEgZnJhbWUgYXQgNjBmcHNcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDb250ZW50TWFyZ2lucygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NvbnRlbnRNYXJnaW5DaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZG9DaGVja1N1YmplY3QuY29tcGxldGUoKTtcbiAgICB0aGlzLl9kcmF3ZXJzLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIENhbGxzIGBvcGVuYCBvZiBib3RoIHN0YXJ0IGFuZCBlbmQgZHJhd2VycyAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaChkcmF3ZXIgPT4gZHJhd2VyLm9wZW4oKSk7XG4gIH1cblxuICAvKiogQ2FsbHMgYGNsb3NlYCBvZiBib3RoIHN0YXJ0IGFuZCBlbmQgZHJhd2VycyAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kcmF3ZXJzLmZvckVhY2goZHJhd2VyID0+IGRyYXdlci5jbG9zZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZXMgYW5kIHVwZGF0ZXMgdGhlIGlubGluZSBzdHlsZXMgZm9yIHRoZSBjb250ZW50LiBOb3RlIHRoYXQgdGhpcyBzaG91bGQgYmUgdXNlZFxuICAgKiBzcGFyaW5nbHksIGJlY2F1c2UgaXQgY2F1c2VzIGEgcmVmbG93LlxuICAgKi9cbiAgdXBkYXRlQ29udGVudE1hcmdpbnMoKSB7XG4gICAgLy8gMS4gRm9yIGRyYXdlcnMgaW4gYG92ZXJgIG1vZGUsIHRoZXkgZG9uJ3QgYWZmZWN0IHRoZSBjb250ZW50LlxuICAgIC8vIDIuIEZvciBkcmF3ZXJzIGluIGBzaWRlYCBtb2RlIHRoZXkgc2hvdWxkIHNocmluayB0aGUgY29udGVudC4gV2UgZG8gdGhpcyBieSBhZGRpbmcgdG8gdGhlXG4gICAgLy8gICAgbGVmdCBtYXJnaW4gKGZvciBsZWZ0IGRyYXdlcikgb3IgcmlnaHQgbWFyZ2luIChmb3IgcmlnaHQgdGhlIGRyYXdlcikuXG4gICAgLy8gMy4gRm9yIGRyYXdlcnMgaW4gYHB1c2hgIG1vZGUgdGhlIHNob3VsZCBzaGlmdCB0aGUgY29udGVudCB3aXRob3V0IHJlc2l6aW5nIGl0LiBXZSBkbyB0aGlzIGJ5XG4gICAgLy8gICAgYWRkaW5nIHRvIHRoZSBsZWZ0IG9yIHJpZ2h0IG1hcmdpbiBhbmQgc2ltdWx0YW5lb3VzbHkgc3VidHJhY3RpbmcgdGhlIHNhbWUgYW1vdW50IG9mXG4gICAgLy8gICAgbWFyZ2luIGZyb20gdGhlIG90aGVyIHNpZGUuXG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCByaWdodCA9IDA7XG5cbiAgICBpZiAodGhpcy5fbGVmdCAmJiB0aGlzLl9sZWZ0Lm9wZW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2xlZnQubW9kZSA9PSAnc2lkZScpIHtcbiAgICAgICAgbGVmdCArPSB0aGlzLl9sZWZ0Ll93aWR0aDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGVmdC5tb2RlID09ICdwdXNoJykge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuX2xlZnQuX3dpZHRoO1xuICAgICAgICBsZWZ0ICs9IHdpZHRoO1xuICAgICAgICByaWdodCAtPSB3aWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmlnaHQgJiYgdGhpcy5fcmlnaHQub3BlbmVkKSB7XG4gICAgICBpZiAodGhpcy5fcmlnaHQubW9kZSA9PSAnc2lkZScpIHtcbiAgICAgICAgcmlnaHQgKz0gdGhpcy5fcmlnaHQuX3dpZHRoO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9yaWdodC5tb2RlID09ICdwdXNoJykge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3JpZ2h0Ll93aWR0aDtcbiAgICAgICAgcmlnaHQgKz0gd2lkdGg7XG4gICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgZWl0aGVyIGByaWdodGAgb3IgYGxlZnRgIGlzIHplcm8sIGRvbid0IHNldCBhIHN0eWxlIHRvIHRoZSBlbGVtZW50LiBUaGlzXG4gICAgLy8gYWxsb3dzIHVzZXJzIHRvIHNwZWNpZnkgYSBjdXN0b20gc2l6ZSB2aWEgQ1NTIGNsYXNzIGluIFNTUiBzY2VuYXJpb3Mgd2hlcmUgdGhlXG4gICAgLy8gbWVhc3VyZWQgd2lkdGhzIHdpbGwgYWx3YXlzIGJlIHplcm8uIE5vdGUgdGhhdCB3ZSByZXNldCB0byBgbnVsbGAgaGVyZSwgcmF0aGVyXG4gICAgLy8gdGhhbiBiZWxvdywgaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHR5cGVzIGluIHRoZSBgaWZgIGJlbG93IGFyZSBjb25zaXN0ZW50LlxuICAgIGxlZnQgPSBsZWZ0IHx8IG51bGwhO1xuICAgIHJpZ2h0ID0gcmlnaHQgfHwgbnVsbCE7XG5cbiAgICBpZiAobGVmdCAhPT0gdGhpcy5fY29udGVudE1hcmdpbnMubGVmdCB8fCByaWdodCAhPT0gdGhpcy5fY29udGVudE1hcmdpbnMucmlnaHQpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnRNYXJnaW5zID0ge2xlZnQsIHJpZ2h0fTtcblxuICAgICAgLy8gUHVsbCBiYWNrIGludG8gdGhlIE5nWm9uZSBzaW5jZSBpbiBzb21lIGNhc2VzIHdlIGNvdWxkIGJlIG91dHNpZGUuIFdlIG5lZWQgdG8gYmUgY2FyZWZ1bFxuICAgICAgLy8gdG8gZG8gaXQgb25seSB3aGVuIHNvbWV0aGluZyBjaGFuZ2VkLCBvdGhlcndpc2Ugd2UgY2FuIGVuZCB1cCBoaXR0aW5nIHRoZSB6b25lIHRvbyBvZnRlbi5cbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5fY29udGVudE1hcmdpbkNoYW5nZXMubmV4dCh0aGlzLl9jb250ZW50TWFyZ2lucykpO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICAvLyBJZiB1c2VycyBvcHRlZCBpbnRvIGF1dG9zaXppbmcsIGRvIGEgY2hlY2sgZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS5cbiAgICBpZiAodGhpcy5fYXV0b3NpemUgJiYgdGhpcy5faXNQdXNoZWQoKSkge1xuICAgICAgLy8gUnVuIG91dHNpZGUgdGhlIE5nWm9uZSwgb3RoZXJ3aXNlIHRoZSBkZWJvdW5jZXIgd2lsbCB0aHJvdyB1cyBpbnRvIGFuIGluZmluaXRlIGxvb3AuXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fZG9DaGVja1N1YmplY3QubmV4dCgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlcyB0byBkcmF3ZXIgZXZlbnRzIGluIG9yZGVyIHRvIHNldCBhIGNsYXNzIG9uIHRoZSBtYWluIGNvbnRhaW5lciBlbGVtZW50IHdoZW4gdGhlXG4gICAqIGRyYXdlciBpcyBvcGVuIGFuZCB0aGUgYmFja2Ryb3AgaXMgdmlzaWJsZS4gVGhpcyBlbnN1cmVzIGFueSBvdmVyZmxvdyBvbiB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICogaXMgcHJvcGVybHkgaGlkZGVuLlxuICAgKi9cbiAgcHJpdmF0ZSBfd2F0Y2hEcmF3ZXJUb2dnbGUoZHJhd2VyOiBNYXREcmF3ZXIpOiB2b2lkIHtcbiAgICBkcmF3ZXIuX2FuaW1hdGlvblN0YXJ0ZWQucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSA9PiBldmVudC5mcm9tU3RhdGUgIT09IGV2ZW50LnRvU3RhdGUpLFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2RyYXdlcnMuY2hhbmdlcyksXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBBbmltYXRpb25FdmVudCkgPT4ge1xuICAgICAgLy8gU2V0IHRoZSB0cmFuc2l0aW9uIGNsYXNzIG9uIHRoZSBjb250YWluZXIgc28gdGhhdCB0aGUgYW5pbWF0aW9ucyBvY2N1ci4gVGhpcyBzaG91bGQgbm90XG4gICAgICAvLyBiZSBzZXQgaW5pdGlhbGx5IGJlY2F1c2UgYW5pbWF0aW9ucyBzaG91bGQgb25seSBiZSB0cmlnZ2VyZWQgdmlhIGEgY2hhbmdlIGluIHN0YXRlLlxuICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgIT09ICdvcGVuLWluc3RhbnQnICYmIHRoaXMuX2FuaW1hdGlvbk1vZGUgIT09ICdOb29wQW5pbWF0aW9ucycpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21hdC1kcmF3ZXItdHJhbnNpdGlvbicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnRNYXJnaW5zKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIGlmIChkcmF3ZXIubW9kZSAhPT0gJ3NpZGUnKSB7XG4gICAgICBkcmF3ZXIub3BlbmVkQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX2RyYXdlcnMuY2hhbmdlcykpLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuX3NldENvbnRhaW5lckNsYXNzKGRyYXdlci5vcGVuZWQpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlcyB0byBkcmF3ZXIgb25Qb3NpdGlvbkNoYW5nZWQgZXZlbnQgaW4gb3JkZXIgdG9cbiAgICogcmUtdmFsaWRhdGUgZHJhd2VycyB3aGVuIHRoZSBwb3NpdGlvbiBjaGFuZ2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBfd2F0Y2hEcmF3ZXJQb3NpdGlvbihkcmF3ZXI6IE1hdERyYXdlcik6IHZvaWQge1xuICAgIGlmICghZHJhd2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE5PVEU6IFdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIG1pY3JvdGFzayBxdWV1ZSB0byBiZSBlbXB0eSBiZWZvcmUgdmFsaWRhdGluZyxcbiAgICAvLyBzaW5jZSBib3RoIGRyYXdlcnMgbWF5IGJlIHN3YXBwaW5nIHBvc2l0aW9ucyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIGRyYXdlci5vblBvc2l0aW9uQ2hhbmdlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9kcmF3ZXJzLmNoYW5nZXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fbmdab25lLm9uTWljcm90YXNrRW1wdHkuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl92YWxpZGF0ZURyYXdlcnMoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFN1YnNjcmliZXMgdG8gY2hhbmdlcyBpbiBkcmF3ZXIgbW9kZSBzbyB3ZSBjYW4gcnVuIGNoYW5nZSBkZXRlY3Rpb24uICovXG4gIHByaXZhdGUgX3dhdGNoRHJhd2VyTW9kZShkcmF3ZXI6IE1hdERyYXdlcik6IHZvaWQge1xuICAgIGlmIChkcmF3ZXIpIHtcbiAgICAgIGRyYXdlci5fbW9kZUNoYW5nZWQucGlwZSh0YWtlVW50aWwobWVyZ2UodGhpcy5fZHJhd2Vycy5jaGFuZ2VzLCB0aGlzLl9kZXN0cm95ZWQpKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDb250ZW50TWFyZ2lucygpO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogVG9nZ2xlcyB0aGUgJ21hdC1kcmF3ZXItb3BlbmVkJyBjbGFzcyBvbiB0aGUgbWFpbiAnbWF0LWRyYXdlci1jb250YWluZXInIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3NldENvbnRhaW5lckNsYXNzKGlzQWRkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAnbWF0LWRyYXdlci1jb250YWluZXItaGFzLW9wZW4nO1xuXG4gICAgaWYgKGlzQWRkKSB7XG4gICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKiogVmFsaWRhdGUgdGhlIHN0YXRlIG9mIHRoZSBkcmF3ZXIgY2hpbGRyZW4gY29tcG9uZW50cy4gKi9cbiAgcHJpdmF0ZSBfdmFsaWRhdGVEcmF3ZXJzKCkge1xuICAgIHRoaXMuX3N0YXJ0ID0gdGhpcy5fZW5kID0gbnVsbDtcblxuICAgIC8vIEVuc3VyZSB0aGF0IHdlIGhhdmUgYXQgbW9zdCBvbmUgc3RhcnQgYW5kIG9uZSBlbmQgZHJhd2VyLlxuICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaChkcmF3ZXIgPT4ge1xuICAgICAgaWYgKGRyYXdlci5wb3NpdGlvbiA9PSAnZW5kJykge1xuICAgICAgICBpZiAodGhpcy5fZW5kICE9IG51bGwpIHtcbiAgICAgICAgICB0aHJvd01hdER1cGxpY2F0ZWREcmF3ZXJFcnJvcignZW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW5kID0gZHJhd2VyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0ICE9IG51bGwpIHtcbiAgICAgICAgICB0aHJvd01hdER1cGxpY2F0ZWREcmF3ZXJFcnJvcignc3RhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGFydCA9IGRyYXdlcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3JpZ2h0ID0gdGhpcy5fbGVmdCA9IG51bGw7XG5cbiAgICAvLyBEZXRlY3QgaWYgd2UncmUgTFRSIG9yIFJUTC5cbiAgICBpZiAodGhpcy5fZGlyICYmIHRoaXMuX2Rpci52YWx1ZSA9PT0gJ3J0bCcpIHtcbiAgICAgIHRoaXMuX2xlZnQgPSB0aGlzLl9lbmQ7XG4gICAgICB0aGlzLl9yaWdodCA9IHRoaXMuX3N0YXJ0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sZWZ0ID0gdGhpcy5fc3RhcnQ7XG4gICAgICB0aGlzLl9yaWdodCA9IHRoaXMuX2VuZDtcbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgY29udGFpbmVyIGlzIGJlaW5nIHB1c2hlZCB0byB0aGUgc2lkZSBieSBvbmUgb2YgdGhlIGRyYXdlcnMuICovXG4gIHByaXZhdGUgX2lzUHVzaGVkKCkge1xuICAgIHJldHVybiAodGhpcy5faXNEcmF3ZXJPcGVuKHRoaXMuX3N0YXJ0KSAmJiB0aGlzLl9zdGFydC5tb2RlICE9ICdvdmVyJykgfHxcbiAgICAgICAgICAgKHRoaXMuX2lzRHJhd2VyT3Blbih0aGlzLl9lbmQpICYmIHRoaXMuX2VuZC5tb2RlICE9ICdvdmVyJyk7XG4gIH1cblxuICBfb25CYWNrZHJvcENsaWNrZWQoKSB7XG4gICAgdGhpcy5iYWNrZHJvcENsaWNrLmVtaXQoKTtcbiAgICB0aGlzLl9jbG9zZU1vZGFsRHJhd2VyKCk7XG4gIH1cblxuICBfY2xvc2VNb2RhbERyYXdlcigpIHtcbiAgICAvLyBDbG9zZSBhbGwgb3BlbiBkcmF3ZXJzIHdoZXJlIGNsb3NpbmcgaXMgbm90IGRpc2FibGVkIGFuZCB0aGUgbW9kZSBpcyBub3QgYHNpZGVgLlxuICAgIFt0aGlzLl9zdGFydCwgdGhpcy5fZW5kXVxuICAgICAgLmZpbHRlcihkcmF3ZXIgPT4gZHJhd2VyICYmICFkcmF3ZXIuZGlzYWJsZUNsb3NlICYmIHRoaXMuX2NhbkhhdmVCYWNrZHJvcChkcmF3ZXIpKVxuICAgICAgLmZvckVhY2goZHJhd2VyID0+IGRyYXdlciEuY2xvc2UoKSk7XG4gIH1cblxuICBfaXNTaG93aW5nQmFja2Ryb3AoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLl9pc0RyYXdlck9wZW4odGhpcy5fc3RhcnQpICYmIHRoaXMuX2NhbkhhdmVCYWNrZHJvcCh0aGlzLl9zdGFydCkpIHx8XG4gICAgICAgICAgICh0aGlzLl9pc0RyYXdlck9wZW4odGhpcy5fZW5kKSAmJiB0aGlzLl9jYW5IYXZlQmFja2Ryb3AodGhpcy5fZW5kKSk7XG4gIH1cblxuICBwcml2YXRlIF9jYW5IYXZlQmFja2Ryb3AoZHJhd2VyOiBNYXREcmF3ZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZHJhd2VyLm1vZGUgIT09ICdzaWRlJyB8fCAhIXRoaXMuX2JhY2tkcm9wT3ZlcnJpZGU7XG4gIH1cblxuICBwcml2YXRlIF9pc0RyYXdlck9wZW4oZHJhd2VyOiBNYXREcmF3ZXIgfCBudWxsKTogZHJhd2VyIGlzIE1hdERyYXdlciB7XG4gICAgcmV0dXJuIGRyYXdlciAhPSBudWxsICYmIGRyYXdlci5vcGVuZWQ7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b3NpemU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hhc0JhY2tkcm9wOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=