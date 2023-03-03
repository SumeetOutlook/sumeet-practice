/**
 * @fileoverview added by tsickle
 * Generated from: src/material/sidenav/drawer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * \@docs-private
 * @param {?} position
 * @return {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/scrolling';
import * as ɵngcc2 from '@angular/cdk/a11y';
import * as ɵngcc3 from '@angular/cdk/platform';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from '@angular/common';

const _c0 = ["*"];
function MatDrawerContainer_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("click", function MatDrawerContainer_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2._onBackdropClicked(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("mat-drawer-shown", ctx_r0._isShowingBackdrop());
} }
function MatDrawerContainer_mat_drawer_content_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-drawer-content");
    ɵngcc0.ɵɵprojection(1, 2);
    ɵngcc0.ɵɵelementEnd();
} }
const _c1 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
const _c2 = ["mat-drawer", "mat-drawer-content", "*"];
export function throwMatDuplicatedDrawerError(position) {
    throw Error(`A drawer was already declared for 'position="${position}"'`);
}
/**
 * Configures whether drawers should use auto sizing by default.
 * @type {?}
 */
export const MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken('MAT_DRAWER_DEFAULT_AUTOSIZE', {
    providedIn: 'root',
    factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY,
});
/**
 * Used to provide a drawer container to a drawer while avoiding circular references.
 * \@docs-private
 * @type {?}
 */
export const MAT_DRAWER_CONTAINER = new InjectionToken('MAT_DRAWER_CONTAINER');
/**
 * \@docs-private
 * @return {?}
 */
export function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
    return false;
}
export class MatDrawerContent extends CdkScrollable {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _container
     * @param {?} elementRef
     * @param {?} scrollDispatcher
     * @param {?} ngZone
     */
    constructor(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
        super(elementRef, scrollDispatcher, ngZone);
        this._changeDetectorRef = _changeDetectorRef;
        this._container = _container;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._container._contentMarginChanges.subscribe((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
    }
}
MatDrawerContent.ɵfac = function MatDrawerContent_Factory(t) { return new (t || MatDrawerContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(forwardRef(( /**
                 * @return {?}
                 */() => MatDrawerContainer))), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ScrollDispatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
MatDrawerContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDrawerContent, selectors: [["mat-drawer-content"]], hostAttrs: [1, "mat-drawer-content"], hostVars: 4, hostBindings: function MatDrawerContent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
    } }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatDrawerContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatDrawerContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: MatDrawerContainer, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => MatDrawerContainer)),] }] },
    { type: ElementRef },
    { type: ScrollDispatcher },
    { type: NgZone }
];
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
                args: [forwardRef(( /**
                                     * @return {?}
                                     */() => MatDrawerContainer))]
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.ScrollDispatcher }, { type: ɵngcc0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatDrawerContent.prototype._changeDetectorRef;
    /** @type {?} */
    MatDrawerContent.prototype._container;
}
/**
 * This component corresponds to a drawer that can be opened on the drawer container.
 */
export class MatDrawer {
    /**
     * @param {?} _elementRef
     * @param {?} _focusTrapFactory
     * @param {?} _focusMonitor
     * @param {?} _platform
     * @param {?} _ngZone
     * @param {?} _doc
     * @param {?=} _container
     */
    constructor(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _doc, _container) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._focusMonitor = _focusMonitor;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._doc = _doc;
        this._container = _container;
        this._elementFocusedBeforeDrawerWasOpened = null;
        /**
         * Whether the drawer is initialized. Used for disabling the initial animation.
         */
        this._enableAnimations = false;
        this._position = 'start';
        this._mode = 'over';
        this._disableClose = false;
        this._opened = false;
        /**
         * Emits whenever the drawer has started animating.
         */
        this._animationStarted = new Subject();
        /**
         * Emits whenever the drawer is done animating.
         */
        this._animationEnd = new Subject();
        /**
         * Current state of the sidenav animation.
         */
        // @HostBinding is used in the class as it is expected to be extended.  Since @Component decorator
        // metadata is not inherited by child classes, instead the host binding data is defined in a way
        // that can be inherited.
        // tslint:disable:no-host-decorator-in-concrete
        this._animationState = 'void';
        /**
         * Event emitted when the drawer open state is changed.
         */
        this.openedChange = 
        // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
        new EventEmitter(/* isAsync */ true);
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new Subject();
        /**
         * Event emitted when the drawer's position changes.
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onPositionChanged = new EventEmitter();
        /**
         * An observable that emits when the drawer mode changes. This is used by the drawer container to
         * to know when to when the mode changes so it can adapt the margins on the content.
         */
        this._modeChanged = new Subject();
        this.openedChange.subscribe((/**
         * @param {?} opened
         * @return {?}
         */
        (opened) => {
            if (opened) {
                if (this._doc) {
                    this._elementFocusedBeforeDrawerWasOpened = (/** @type {?} */ (this._doc.activeElement));
                }
                this._takeFocus();
            }
            else {
                this._restoreFocus();
            }
        }));
        /**
         * Listen to `keydown` events outside the zone so that change detection is not run every
         * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
         * and we don't have close disabled.
         */
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            ((/** @type {?} */ (fromEvent(this._elementRef.nativeElement, 'keydown')))).pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
            })), takeUntil(this._destroyed)).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this.close();
                event.stopPropagation();
                event.preventDefault();
            }))));
        }));
        // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
        this._animationEnd.pipe(distinctUntilChanged((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            const { fromState, toState } = event;
            if ((toState.indexOf('open') === 0 && fromState === 'void') ||
                (toState === 'void' && fromState.indexOf('open') === 0)) {
                this.openedChange.emit(this._opened);
            }
        }));
    }
    /**
     * The side that the drawer is attached to.
     * @return {?}
     */
    get position() { return this._position; }
    /**
     * @param {?} value
     * @return {?}
     */
    set position(value) {
        // Make sure we have a valid value.
        value = value === 'end' ? 'end' : 'start';
        if (value != this._position) {
            this._position = value;
            this.onPositionChanged.emit();
        }
    }
    /**
     * Mode of the drawer; one of 'over', 'push' or 'side'.
     * @return {?}
     */
    get mode() { return this._mode; }
    /**
     * @param {?} value
     * @return {?}
     */
    set mode(value) {
        this._mode = value;
        this._updateFocusTrapState();
        this._modeChanged.next();
    }
    /**
     * Whether the drawer can be closed with the escape key or by clicking on the backdrop.
     * @return {?}
     */
    get disableClose() { return this._disableClose; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disableClose(value) { this._disableClose = coerceBooleanProperty(value); }
    /**
     * Whether the drawer should focus the first focusable element automatically when opened.
     * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
     * enabled, focus will be moved into the sidenav in `side` mode as well.
     * @return {?}
     */
    get autoFocus() {
        /** @type {?} */
        const value = this._autoFocus;
        // Note that usually we disable auto focusing in `side` mode, because we don't know how the
        // sidenav is being used, but in some cases it still makes sense to do it. If the consumer
        // explicitly enabled `autoFocus`, we take it as them always wanting to enable it.
        return value == null ? this.mode !== 'side' : value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoFocus(value) { this._autoFocus = coerceBooleanProperty(value); }
    /**
     * Whether the drawer is opened. We overload this because we trigger an event when it
     * starts or end.
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) { this.toggle(coerceBooleanProperty(value)); }
    /**
     * Event emitted when the drawer has been opened.
     * @return {?}
     */
    get _openedStream() {
        return this.openedChange.pipe(filter((/**
         * @param {?} o
         * @return {?}
         */
        o => o)), map((/**
         * @return {?}
         */
        () => { })));
    }
    /**
     * Event emitted when the drawer has started opening.
     * @return {?}
     */
    get openedStart() {
        return this._animationStarted.pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e.fromState !== e.toState && e.toState.indexOf('open') === 0)), map((/**
         * @return {?}
         */
        () => { })));
    }
    /**
     * Event emitted when the drawer has been closed.
     * @return {?}
     */
    get _closedStream() {
        return this.openedChange.pipe(filter((/**
         * @param {?} o
         * @return {?}
         */
        o => !o)), map((/**
         * @return {?}
         */
        () => { })));
    }
    /**
     * Event emitted when the drawer has started closing.
     * @return {?}
     */
    get closedStart() {
        return this._animationStarted.pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e.fromState !== e.toState && e.toState === 'void')), map((/**
         * @return {?}
         */
        () => { })));
    }
    /**
     * Moves focus into the drawer. Note that this works even if
     * the focus trap is disabled in `side` mode.
     * @private
     * @return {?}
     */
    _takeFocus() {
        if (!this.autoFocus || !this._focusTrap) {
            return;
        }
        this._focusTrap.focusInitialElementWhenReady().then((/**
         * @param {?} hasMovedFocus
         * @return {?}
         */
        hasMovedFocus => {
            // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
            // still works. We need to check that `focus` is a function due to Universal.
            if (!hasMovedFocus && typeof this._elementRef.nativeElement.focus === 'function') {
                this._elementRef.nativeElement.focus();
            }
        }));
    }
    /**
     * If focus is currently inside the drawer, restores it to where it was before the drawer
     * opened.
     * @private
     * @return {?}
     */
    _restoreFocus() {
        if (!this.autoFocus) {
            return;
        }
        /** @type {?} */
        const activeEl = this._doc && this._doc.activeElement;
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
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        this._updateFocusTrapState();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        // Enable the animations after the lifecycle hooks have run, in order to avoid animating
        // drawers that are open by default. When we're on the server, we shouldn't enable the
        // animations, because we don't want the drawer to animate the first time the user sees
        // the page.
        if (this._platform.isBrowser) {
            this._enableAnimations = true;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
        this._animationStarted.complete();
        this._animationEnd.complete();
        this._modeChanged.complete();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Open the drawer.
     * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     * @return {?}
     */
    open(openedVia) {
        return this.toggle(true, openedVia);
    }
    /**
     * Close the drawer.
     * @return {?}
     */
    close() {
        return this.toggle(false);
    }
    /**
     * Toggle this drawer.
     * @param {?=} isOpen Whether the drawer should be open.
     * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     * @return {?}
     */
    toggle(isOpen = !this.opened, openedVia = 'program') {
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
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.openedChange.pipe(take(1)).subscribe((/**
             * @param {?} open
             * @return {?}
             */
            open => resolve(open ? 'open' : 'close')));
        }));
    }
    /**
     * @return {?}
     */
    get _width() {
        return this._elementRef.nativeElement ? (this._elementRef.nativeElement.offsetWidth || 0) : 0;
    }
    /**
     * Updates the enabled state of the focus trap.
     * @private
     * @return {?}
     */
    _updateFocusTrapState() {
        if (this._focusTrap) {
            // The focus trap is only enabled when the drawer is open in any mode other than side.
            this._focusTrap.enabled = this.opened && this.mode !== 'side';
        }
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @param {?} event
     * @return {?}
     */
    _animationStartListener(event) {
        this._animationStarted.next(event);
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @param {?} event
     * @return {?}
     */
    _animationDoneListener(event) {
        this._animationEnd.next(event);
    }
}
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
/** @nocollapse */
MatDrawer.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusTrapFactory },
    { type: FocusMonitor },
    { type: Platform },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: MatDrawerContainer, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DRAWER_CONTAINER,] }] }
];
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
if (false) {
    /** @type {?} */
    MatDrawer.ngAcceptInputType_disableClose;
    /** @type {?} */
    MatDrawer.ngAcceptInputType_autoFocus;
    /** @type {?} */
    MatDrawer.ngAcceptInputType_opened;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._focusTrap;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._elementFocusedBeforeDrawerWasOpened;
    /**
     * Whether the drawer is initialized. Used for disabling the initial animation.
     * @type {?}
     * @private
     */
    MatDrawer.prototype._enableAnimations;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._position;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._disableClose;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._autoFocus;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._opened;
    /**
     * How the sidenav was opened (keypress, mouse click etc.)
     * @type {?}
     * @private
     */
    MatDrawer.prototype._openedVia;
    /**
     * Emits whenever the drawer has started animating.
     * @type {?}
     */
    MatDrawer.prototype._animationStarted;
    /**
     * Emits whenever the drawer is done animating.
     * @type {?}
     */
    MatDrawer.prototype._animationEnd;
    /**
     * Current state of the sidenav animation.
     * @type {?}
     */
    MatDrawer.prototype._animationState;
    /**
     * Event emitted when the drawer open state is changed.
     * @type {?}
     */
    MatDrawer.prototype.openedChange;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     * @private
     */
    MatDrawer.prototype._destroyed;
    /**
     * Event emitted when the drawer's position changes.
     * @type {?}
     */
    MatDrawer.prototype.onPositionChanged;
    /**
     * An observable that emits when the drawer mode changes. This is used by the drawer container to
     * to know when to when the mode changes so it can adapt the margins on the content.
     * @type {?}
     */
    MatDrawer.prototype._modeChanged;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._focusTrapFactory;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._platform;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MatDrawer.prototype._doc;
    /**
     * @deprecated `_container` parameter to be made required.
     * \@breaking-change 10.0.0
     * @type {?}
     */
    MatDrawer.prototype._container;
}
/**
 * `<mat-drawer-container>` component.
 *
 * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
 * and coordinates the backdrop and content styling.
 */
export class MatDrawerContainer {
    /**
     * @param {?} _dir
     * @param {?} _element
     * @param {?} _ngZone
     * @param {?} _changeDetectorRef
     * @param {?} viewportRuler
     * @param {?=} defaultAutosize
     * @param {?=} _animationMode
     */
    constructor(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler, defaultAutosize = false, _animationMode) {
        this._dir = _dir;
        this._element = _element;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        /**
         * Drawers that belong to this container.
         */
        this._drawers = new QueryList();
        /**
         * Event emitted when the drawer backdrop is clicked.
         */
        this.backdropClick = new EventEmitter();
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new Subject();
        /**
         * Emits on every ngDoCheck. Used for debouncing reflows.
         */
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
            _dir.change.pipe(takeUntil(this._destroyed)).subscribe((/**
             * @return {?}
             */
            () => {
                this._validateDrawers();
                this.updateContentMargins();
            }));
        }
        // Since the minimum width of the sidenav depends on the viewport width,
        // we need to recompute the margins if the viewport changes.
        viewportRuler.change()
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateContentMargins()));
        this._autosize = defaultAutosize;
    }
    /**
     * The drawer child with the `start` position.
     * @return {?}
     */
    get start() { return this._start; }
    /**
     * The drawer child with the `end` position.
     * @return {?}
     */
    get end() { return this._end; }
    /**
     * Whether to automatically resize the container whenever
     * the size of any of its drawers changes.
     *
     * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
     * the drawers on every change detection cycle. Can be configured globally via the
     * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
     * @return {?}
     */
    get autosize() { return this._autosize; }
    /**
     * @param {?} value
     * @return {?}
     */
    set autosize(value) { this._autosize = coerceBooleanProperty(value); }
    /**
     * Whether the drawer container should have a backdrop while one of the sidenavs is open.
     * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
     * mode as well.
     * @return {?}
     */
    get hasBackdrop() {
        if (this._backdropOverride == null) {
            return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
        }
        return this._backdropOverride;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasBackdrop(value) {
        this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
    }
    /**
     * Reference to the CdkScrollable instance that wraps the scrollable content.
     * @return {?}
     */
    get scrollable() {
        return this._userContent || this._content;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._allDrawers.changes
            .pipe(startWith(this._allDrawers), takeUntil(this._destroyed))
            .subscribe((/**
         * @param {?} drawer
         * @return {?}
         */
        (drawer) => {
            // @breaking-change 10.0.0 Remove `_container` check once container parameter is required.
            this._drawers.reset(drawer.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !item._container || item._container === this)));
            this._drawers.notifyOnChanges();
        }));
        this._drawers.changes.pipe(startWith(null)).subscribe((/**
         * @return {?}
         */
        () => {
            this._validateDrawers();
            this._drawers.forEach((/**
             * @param {?} drawer
             * @return {?}
             */
            (drawer) => {
                this._watchDrawerToggle(drawer);
                this._watchDrawerPosition(drawer);
                this._watchDrawerMode(drawer);
            }));
            if (!this._drawers.length ||
                this._isDrawerOpen(this._start) ||
                this._isDrawerOpen(this._end)) {
                this.updateContentMargins();
            }
            this._changeDetectorRef.markForCheck();
        }));
        this._doCheckSubject.pipe(debounceTime(10), // Arbitrary debounce time, less than a frame at 60fps
        takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => this.updateContentMargins()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._contentMarginChanges.complete();
        this._doCheckSubject.complete();
        this._drawers.destroy();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Calls `open` of both start and end drawers
     * @return {?}
     */
    open() {
        this._drawers.forEach((/**
         * @param {?} drawer
         * @return {?}
         */
        drawer => drawer.open()));
    }
    /**
     * Calls `close` of both start and end drawers
     * @return {?}
     */
    close() {
        this._drawers.forEach((/**
         * @param {?} drawer
         * @return {?}
         */
        drawer => drawer.close()));
    }
    /**
     * Recalculates and updates the inline styles for the content. Note that this should be used
     * sparingly, because it causes a reflow.
     * @return {?}
     */
    updateContentMargins() {
        // 1. For drawers in `over` mode, they don't affect the content.
        // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
        //    left margin (for left drawer) or right margin (for right the drawer).
        // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
        //    adding to the left or right margin and simultaneously subtracting the same amount of
        //    margin from the other side.
        /** @type {?} */
        let left = 0;
        /** @type {?} */
        let right = 0;
        if (this._left && this._left.opened) {
            if (this._left.mode == 'side') {
                left += this._left._width;
            }
            else if (this._left.mode == 'push') {
                /** @type {?} */
                const width = this._left._width;
                left += width;
                right -= width;
            }
        }
        if (this._right && this._right.opened) {
            if (this._right.mode == 'side') {
                right += this._right._width;
            }
            else if (this._right.mode == 'push') {
                /** @type {?} */
                const width = this._right._width;
                right += width;
                left -= width;
            }
        }
        // If either `right` or `left` is zero, don't set a style to the element. This
        // allows users to specify a custom size via CSS class in SSR scenarios where the
        // measured widths will always be zero. Note that we reset to `null` here, rather
        // than below, in order to ensure that the types in the `if` below are consistent.
        left = left || (/** @type {?} */ (null));
        right = right || (/** @type {?} */ (null));
        if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
            this._contentMargins = { left, right };
            // Pull back into the NgZone since in some cases we could be outside. We need to be careful
            // to do it only when something changed, otherwise we can end up hitting the zone too often.
            this._ngZone.run((/**
             * @return {?}
             */
            () => this._contentMarginChanges.next(this._contentMargins)));
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // If users opted into autosizing, do a check every change detection cycle.
        if (this._autosize && this._isPushed()) {
            // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._doCheckSubject.next()));
        }
    }
    /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     * @private
     * @param {?} drawer
     * @return {?}
     */
    _watchDrawerToggle(drawer) {
        drawer._animationStarted.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.fromState !== event.toState)), takeUntil(this._drawers.changes))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Set the transition class on the container so that the animations occur. This should not
            // be set initially because animations should only be triggered via a change in state.
            if (event.toState !== 'open-instant' && this._animationMode !== 'NoopAnimations') {
                this._element.nativeElement.classList.add('mat-drawer-transition');
            }
            this.updateContentMargins();
            this._changeDetectorRef.markForCheck();
        }));
        if (drawer.mode !== 'side') {
            drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe((/**
             * @return {?}
             */
            () => this._setContainerClass(drawer.opened)));
        }
    }
    /**
     * Subscribes to drawer onPositionChanged event in order to
     * re-validate drawers when the position changes.
     * @private
     * @param {?} drawer
     * @return {?}
     */
    _watchDrawerPosition(drawer) {
        if (!drawer) {
            return;
        }
        // NOTE: We need to wait for the microtask queue to be empty before validating,
        // since both drawers may be swapping positions at the same time.
        drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe((/**
         * @return {?}
         */
        () => {
            this._ngZone.onMicrotaskEmpty.asObservable().pipe(take(1)).subscribe((/**
             * @return {?}
             */
            () => {
                this._validateDrawers();
            }));
        }));
    }
    /**
     * Subscribes to changes in drawer mode so we can run change detection.
     * @private
     * @param {?} drawer
     * @return {?}
     */
    _watchDrawerMode(drawer) {
        if (drawer) {
            drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.updateContentMargins();
                this._changeDetectorRef.markForCheck();
            }));
        }
    }
    /**
     * Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element.
     * @private
     * @param {?} isAdd
     * @return {?}
     */
    _setContainerClass(isAdd) {
        /** @type {?} */
        const classList = this._element.nativeElement.classList;
        /** @type {?} */
        const className = 'mat-drawer-container-has-open';
        if (isAdd) {
            classList.add(className);
        }
        else {
            classList.remove(className);
        }
    }
    /**
     * Validate the state of the drawer children components.
     * @private
     * @return {?}
     */
    _validateDrawers() {
        this._start = this._end = null;
        // Ensure that we have at most one start and one end drawer.
        this._drawers.forEach((/**
         * @param {?} drawer
         * @return {?}
         */
        drawer => {
            if (drawer.position == 'end') {
                if (this._end != null) {
                    throwMatDuplicatedDrawerError('end');
                }
                this._end = drawer;
            }
            else {
                if (this._start != null) {
                    throwMatDuplicatedDrawerError('start');
                }
                this._start = drawer;
            }
        }));
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
    }
    /**
     * Whether the container is being pushed to the side by one of the drawers.
     * @private
     * @return {?}
     */
    _isPushed() {
        return (this._isDrawerOpen(this._start) && this._start.mode != 'over') ||
            (this._isDrawerOpen(this._end) && this._end.mode != 'over');
    }
    /**
     * @return {?}
     */
    _onBackdropClicked() {
        this.backdropClick.emit();
        this._closeModalDrawer();
    }
    /**
     * @return {?}
     */
    _closeModalDrawer() {
        // Close all open drawers where closing is not disabled and the mode is not `side`.
        [this._start, this._end]
            .filter((/**
         * @param {?} drawer
         * @return {?}
         */
        drawer => drawer && !drawer.disableClose && this._canHaveBackdrop(drawer)))
            .forEach((/**
         * @param {?} drawer
         * @return {?}
         */
        drawer => (/** @type {?} */ (drawer)).close()));
    }
    /**
     * @return {?}
     */
    _isShowingBackdrop() {
        return (this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start)) ||
            (this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end));
    }
    /**
     * @private
     * @param {?} drawer
     * @return {?}
     */
    _canHaveBackdrop(drawer) {
        return drawer.mode !== 'side' || !!this._backdropOverride;
    }
    /**
     * @private
     * @param {?} drawer
     * @return {?}
     */
    _isDrawerOpen(drawer) {
        return drawer != null && drawer.opened;
    }
}
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
/** @nocollapse */
MatDrawerContainer.ctorParameters = () => [
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: ViewportRuler },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DRAWER_DEFAULT_AUTOSIZE,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
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
if (false) {
    /** @type {?} */
    MatDrawerContainer.ngAcceptInputType_autosize;
    /** @type {?} */
    MatDrawerContainer.ngAcceptInputType_hasBackdrop;
    /**
     * All drawers in the container. Includes drawers from inside nested containers.
     * @type {?}
     */
    MatDrawerContainer.prototype._allDrawers;
    /**
     * Drawers that belong to this container.
     * @type {?}
     */
    MatDrawerContainer.prototype._drawers;
    /** @type {?} */
    MatDrawerContainer.prototype._content;
    /** @type {?} */
    MatDrawerContainer.prototype._userContent;
    /**
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._autosize;
    /** @type {?} */
    MatDrawerContainer.prototype._backdropOverride;
    /**
     * Event emitted when the drawer backdrop is clicked.
     * @type {?}
     */
    MatDrawerContainer.prototype.backdropClick;
    /**
     * The drawer at the start/end position, independent of direction.
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._start;
    /**
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._end;
    /**
     * The drawer at the left/right. When direction changes, these will change as well.
     * They're used as aliases for the above to set the left/right style properly.
     * In LTR, _left == _start and _right == _end.
     * In RTL, _left == _end and _right == _start.
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._left;
    /**
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._right;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._destroyed;
    /**
     * Emits on every ngDoCheck. Used for debouncing reflows.
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._doCheckSubject;
    /**
     * Margins to be applied to the content. These are used to push / shrink the drawer content when a
     * drawer is open. We use margin rather than transform even for push mode because transform breaks
     * fixed position elements inside of the transformed element.
     * @type {?}
     */
    MatDrawerContainer.prototype._contentMargins;
    /** @type {?} */
    MatDrawerContainer.prototype._contentMarginChanges;
    /**
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._element;
    /**
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    MatDrawerContainer.prototype._animationMode;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvc2lkZW5hdi9kcmF3ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxPQUFPLEVBQUMsWUFBWSxFQUEwQixnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFFZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLEVBQ0osU0FBUyxFQUNULG9CQUFvQixHQUNyQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBQyxtQkFBbUIs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RTtBQUNFO0FBRUo7QUFBaUI7QUFBUSxJQUF4Qiw2Q0FBcUY7QUFDdkY7QUFDb0IsSUFBbEIsbURBQXdGO0FBQzFGO0FBQ087QUFBaUI7QUFBZ0I7QUFBUSxJQUtsQyxrQ0FBd0M7QUFBQztBQUNoRDtBQUFpQjtBQUFnQjtBQUFRLElBQWxDLHNDQUF5QztBQUFDO0FBQ2pEO0FBQWlCO0FBQ3ZCO0FBQVEsSUFESyxxQ0FBdUI7QUFBQztBQUMvQjtBQUFpQjtBQUFnQjtBQUFRLElBQWxDLGdEQUE2QztBQUFDO0FBQ3JEO0FBQWlCO0FBQWdCO0FBQ3BDLElBQ1UsNENBQTBFO0FBQUM7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBbmltYXRpb25FdmVudH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNPcmlnaW4sIEZvY3VzVHJhcCwgRm9jdXNUcmFwRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RVNDQVBFLCBoYXNNb2RpZmllcktleX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge0Nka1Njcm9sbGFibGUsIFNjcm9sbERpc3BhdGNoZXIsIFZpZXdwb3J0UnVsZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2Zyb21FdmVudCwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3RhcnRXaXRoLFxuICB0YWtlLFxuICB0YWtlVW50aWwsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge21hdERyYXdlckFuaW1hdGlvbnN9IGZyb20gJy4vZHJhd2VyLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXhjZXB0aW9uIHdoZW4gdHdvIE1hdERyYXdlciBhcmUgbWF0Y2hpbmcgdGhlIHNhbWUgcG9zaXRpb24uXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd01hdER1cGxpY2F0ZWREcmF3ZXJFcnJvcihwb3NpdGlvbjogc3RyaW5nKSB7XG4gIHRocm93IEVycm9yKGBBIGRyYXdlciB3YXMgYWxyZWFkeSBkZWNsYXJlZCBmb3IgJ3Bvc2l0aW9uPVwiJHtwb3NpdGlvbn1cIidgKTtcbn1cblxuXG4vKiogUmVzdWx0IG9mIHRoZSB0b2dnbGUgcHJvbWlzZSB0aGF0IGluZGljYXRlcyB0aGUgc3RhdGUgb2YgdGhlIGRyYXdlci4gKi9cbmV4cG9ydCB0eXBlIE1hdERyYXdlclRvZ2dsZVJlc3VsdCA9ICdvcGVuJyB8ICdjbG9zZSc7XG5cbi8qKiBEcmF3ZXIgYW5kIFNpZGVOYXYgZGlzcGxheSBtb2Rlcy4gKi9cbmV4cG9ydCB0eXBlIE1hdERyYXdlck1vZGUgPSAnb3ZlcicgfCAncHVzaCcgfCAnc2lkZSc7XG5cbi8qKiBDb25maWd1cmVzIHdoZXRoZXIgZHJhd2VycyBzaG91bGQgdXNlIGF1dG8gc2l6aW5nIGJ5IGRlZmF1bHQuICovXG5leHBvcnQgY29uc3QgTUFUX0RSQVdFUl9ERUZBVUxUX0FVVE9TSVpFID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oJ01BVF9EUkFXRVJfREVGQVVMVF9BVVRPU0laRScsIHtcbiAgICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICAgIGZhY3Rvcnk6IE1BVF9EUkFXRVJfREVGQVVMVF9BVVRPU0laRV9GQUNUT1JZLFxuICAgIH0pO1xuXG5cbi8qKlxuICogVXNlZCB0byBwcm92aWRlIGEgZHJhd2VyIGNvbnRhaW5lciB0byBhIGRyYXdlciB3aGlsZSBhdm9pZGluZyBjaXJjdWxhciByZWZlcmVuY2VzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgTUFUX0RSQVdFUl9DT05UQUlORVIgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ01BVF9EUkFXRVJfQ09OVEFJTkVSJyk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTUFUX0RSQVdFUl9ERUZBVUxUX0FVVE9TSVpFX0ZBQ1RPUlkoKTogYm9vbGVhbiB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWRyYXdlci1jb250ZW50JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtZHJhd2VyLWNvbnRlbnQnLFxuICAgICdbc3R5bGUubWFyZ2luLWxlZnQucHhdJzogJ19jb250YWluZXIuX2NvbnRlbnRNYXJnaW5zLmxlZnQnLFxuICAgICdbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XSc6ICdfY29udGFpbmVyLl9jb250ZW50TWFyZ2lucy5yaWdodCcsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREcmF3ZXJDb250ZW50IGV4dGVuZHMgQ2RrU2Nyb2xsYWJsZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBNYXREcmF3ZXJDb250YWluZXIpKSBwdWJsaWMgX2NvbnRhaW5lcjogTWF0RHJhd2VyQ29udGFpbmVyLFxuICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICBzY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxuICAgICAgbmdab25lOiBOZ1pvbmUpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzY3JvbGxEaXNwYXRjaGVyLCBuZ1pvbmUpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5fY29udGVudE1hcmdpbkNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG5cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBjb3JyZXNwb25kcyB0byBhIGRyYXdlciB0aGF0IGNhbiBiZSBvcGVuZWQgb24gdGhlIGRyYXdlciBjb250YWluZXIuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1kcmF3ZXInLFxuICBleHBvcnRBczogJ21hdERyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnZHJhd2VyLmh0bWwnLFxuICBhbmltYXRpb25zOiBbbWF0RHJhd2VyQW5pbWF0aW9ucy50cmFuc2Zvcm1EcmF3ZXJdLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1kcmF3ZXInLFxuICAgIC8vIG11c3QgcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIGFsaWduaW5nIHRleHQgYmFzZWQgb24gdmFsdWVcbiAgICAnW2F0dHIuYWxpZ25dJzogJ251bGwnLFxuICAgICdbY2xhc3MubWF0LWRyYXdlci1lbmRdJzogJ3Bvc2l0aW9uID09PSBcImVuZFwiJyxcbiAgICAnW2NsYXNzLm1hdC1kcmF3ZXItb3Zlcl0nOiAnbW9kZSA9PT0gXCJvdmVyXCInLFxuICAgICdbY2xhc3MubWF0LWRyYXdlci1wdXNoXSc6ICdtb2RlID09PSBcInB1c2hcIicsXG4gICAgJ1tjbGFzcy5tYXQtZHJhd2VyLXNpZGVdJzogJ21vZGUgPT09IFwic2lkZVwiJyxcbiAgICAnW2NsYXNzLm1hdC1kcmF3ZXItb3BlbmVkXSc6ICdvcGVuZWQnLFxuICAgICd0YWJJbmRleCc6ICctMScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREcmF3ZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9mb2N1c1RyYXA6IEZvY3VzVHJhcDtcbiAgcHJpdmF0ZSBfZWxlbWVudEZvY3VzZWRCZWZvcmVEcmF3ZXJXYXNPcGVuZWQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRyYXdlciBpcyBpbml0aWFsaXplZC4gVXNlZCBmb3IgZGlzYWJsaW5nIHRoZSBpbml0aWFsIGFuaW1hdGlvbi4gKi9cbiAgcHJpdmF0ZSBfZW5hYmxlQW5pbWF0aW9ucyA9IGZhbHNlO1xuXG4gIC8qKiBUaGUgc2lkZSB0aGF0IHRoZSBkcmF3ZXIgaXMgYXR0YWNoZWQgdG8uICovXG4gIEBJbnB1dCgpXG4gIGdldCBwb3NpdGlvbigpOiAnc3RhcnQnIHwgJ2VuZCcgeyByZXR1cm4gdGhpcy5fcG9zaXRpb247IH1cbiAgc2V0IHBvc2l0aW9uKHZhbHVlOiAnc3RhcnQnIHwgJ2VuZCcpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIHZhbHVlLlxuICAgIHZhbHVlID0gdmFsdWUgPT09ICdlbmQnID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgIGlmICh2YWx1ZSAhPSB0aGlzLl9wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgIHRoaXMub25Qb3NpdGlvbkNoYW5nZWQuZW1pdCgpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9wb3NpdGlvbjogJ3N0YXJ0JyB8ICdlbmQnID0gJ3N0YXJ0JztcblxuICAvKiogTW9kZSBvZiB0aGUgZHJhd2VyOyBvbmUgb2YgJ292ZXInLCAncHVzaCcgb3IgJ3NpZGUnLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbW9kZSgpOiBNYXREcmF3ZXJNb2RlIHsgcmV0dXJuIHRoaXMuX21vZGU7IH1cbiAgc2V0IG1vZGUodmFsdWU6IE1hdERyYXdlck1vZGUpIHtcbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gICAgdGhpcy5fdXBkYXRlRm9jdXNUcmFwU3RhdGUoKTtcbiAgICB0aGlzLl9tb2RlQ2hhbmdlZC5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfbW9kZTogTWF0RHJhd2VyTW9kZSA9ICdvdmVyJztcblxuICAvKiogV2hldGhlciB0aGUgZHJhd2VyIGNhbiBiZSBjbG9zZWQgd2l0aCB0aGUgZXNjYXBlIGtleSBvciBieSBjbGlja2luZyBvbiB0aGUgYmFja2Ryb3AuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlQ2xvc2UoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlQ2xvc2U7IH1cbiAgc2V0IGRpc2FibGVDbG9zZSh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9kaXNhYmxlQ2xvc2UgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIHByaXZhdGUgX2Rpc2FibGVDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkcmF3ZXIgc2hvdWxkIGZvY3VzIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBhdXRvbWF0aWNhbGx5IHdoZW4gb3BlbmVkLlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZSBpbiB3aGVuIGBtb2RlYCBpcyBzZXQgdG8gYHNpZGVgLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYHRydWVgLiBJZiBleHBsaWNpdGx5XG4gICAqIGVuYWJsZWQsIGZvY3VzIHdpbGwgYmUgbW92ZWQgaW50byB0aGUgc2lkZW5hdiBpbiBgc2lkZWAgbW9kZSBhcyB3ZWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2F1dG9Gb2N1cztcblxuICAgIC8vIE5vdGUgdGhhdCB1c3VhbGx5IHdlIGRpc2FibGUgYXV0byBmb2N1c2luZyBpbiBgc2lkZWAgbW9kZSwgYmVjYXVzZSB3ZSBkb24ndCBrbm93IGhvdyB0aGVcbiAgICAvLyBzaWRlbmF2IGlzIGJlaW5nIHVzZWQsIGJ1dCBpbiBzb21lIGNhc2VzIGl0IHN0aWxsIG1ha2VzIHNlbnNlIHRvIGRvIGl0LiBJZiB0aGUgY29uc3VtZXJcbiAgICAvLyBleHBsaWNpdGx5IGVuYWJsZWQgYGF1dG9Gb2N1c2AsIHdlIHRha2UgaXQgYXMgdGhlbSBhbHdheXMgd2FudGluZyB0byBlbmFibGUgaXQuXG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB0aGlzLm1vZGUgIT09ICdzaWRlJyA6IHZhbHVlO1xuICB9XG4gIHNldCBhdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fYXV0b0ZvY3VzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9hdXRvRm9jdXM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGRyYXdlciBpcyBvcGVuZWQuIFdlIG92ZXJsb2FkIHRoaXMgYmVjYXVzZSB3ZSB0cmlnZ2VyIGFuIGV2ZW50IHdoZW4gaXRcbiAgICogc3RhcnRzIG9yIGVuZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9vcGVuZWQ7IH1cbiAgc2V0IG9wZW5lZCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLnRvZ2dsZShjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpKTsgfVxuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogSG93IHRoZSBzaWRlbmF2IHdhcyBvcGVuZWQgKGtleXByZXNzLCBtb3VzZSBjbGljayBldGMuKSAqL1xuICBwcml2YXRlIF9vcGVuZWRWaWE6IEZvY3VzT3JpZ2luIHwgbnVsbDtcblxuICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGRyYXdlciBoYXMgc3RhcnRlZCBhbmltYXRpbmcuICovXG4gIF9hbmltYXRpb25TdGFydGVkID0gbmV3IFN1YmplY3Q8QW5pbWF0aW9uRXZlbnQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBkcmF3ZXIgaXMgZG9uZSBhbmltYXRpbmcuICovXG4gIF9hbmltYXRpb25FbmQgPSBuZXcgU3ViamVjdDxBbmltYXRpb25FdmVudD4oKTtcblxuICAvKiogQ3VycmVudCBzdGF0ZSBvZiB0aGUgc2lkZW5hdiBhbmltYXRpb24uICovXG4gIC8vIEBIb3N0QmluZGluZyBpcyB1c2VkIGluIHRoZSBjbGFzcyBhcyBpdCBpcyBleHBlY3RlZCB0byBiZSBleHRlbmRlZC4gIFNpbmNlIEBDb21wb25lbnQgZGVjb3JhdG9yXG4gIC8vIG1ldGFkYXRhIGlzIG5vdCBpbmhlcml0ZWQgYnkgY2hpbGQgY2xhc3NlcywgaW5zdGVhZCB0aGUgaG9zdCBiaW5kaW5nIGRhdGEgaXMgZGVmaW5lZCBpbiBhIHdheVxuICAvLyB0aGF0IGNhbiBiZSBpbmhlcml0ZWQuXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWhvc3QtZGVjb3JhdG9yLWluLWNvbmNyZXRlXG4gIEBIb3N0QmluZGluZygnQHRyYW5zZm9ybScpXG4gIF9hbmltYXRpb25TdGF0ZTogJ29wZW4taW5zdGFudCcgfCAnb3BlbicgfCAndm9pZCcgPSAndm9pZCc7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgZHJhd2VyIG9wZW4gc3RhdGUgaXMgY2hhbmdlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5lZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID1cbiAgICAgIC8vIE5vdGUgdGhpcyBoYXMgdG8gYmUgYXN5bmMgaW4gb3JkZXIgdG8gYXZvaWQgc29tZSBpc3N1ZXMgd2l0aCB0d28tYmluZGluZ3MgKHNlZSAjODg3MikuXG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KC8qIGlzQXN5bmMgKi90cnVlKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBkcmF3ZXIgaGFzIGJlZW4gb3BlbmVkLiAqL1xuICBAT3V0cHV0KCdvcGVuZWQnKVxuICBnZXQgX29wZW5lZFN0cmVhbSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5vcGVuZWRDaGFuZ2UucGlwZShmaWx0ZXIobyA9PiBvKSwgbWFwKCgpID0+IHt9KSk7XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBkcmF3ZXIgaGFzIHN0YXJ0ZWQgb3BlbmluZy4gKi9cbiAgQE91dHB1dCgpXG4gIGdldCBvcGVuZWRTdGFydCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uU3RhcnRlZC5waXBlKFxuICAgICAgZmlsdGVyKGUgPT4gZS5mcm9tU3RhdGUgIT09IGUudG9TdGF0ZSAmJiBlLnRvU3RhdGUuaW5kZXhPZignb3BlbicpID09PSAwKSxcbiAgICAgIG1hcCgoKSA9PiB7fSlcbiAgICApO1xuICB9XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgZHJhd2VyIGhhcyBiZWVuIGNsb3NlZC4gKi9cbiAgQE91dHB1dCgnY2xvc2VkJylcbiAgZ2V0IF9jbG9zZWRTdHJlYW0oKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbmVkQ2hhbmdlLnBpcGUoZmlsdGVyKG8gPT4gIW8pLCBtYXAoKCkgPT4ge30pKTtcbiAgfVxuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGRyYXdlciBoYXMgc3RhcnRlZCBjbG9zaW5nLiAqL1xuICBAT3V0cHV0KClcbiAgZ2V0IGNsb3NlZFN0YXJ0KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25TdGFydGVkLnBpcGUoXG4gICAgICBmaWx0ZXIoZSA9PiBlLmZyb21TdGF0ZSAhPT0gZS50b1N0YXRlICYmIGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSxcbiAgICAgIG1hcCgoKSA9PiB7fSlcbiAgICApO1xuICB9XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgZHJhd2VyJ3MgcG9zaXRpb24gY2hhbmdlcy4gKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgncG9zaXRpb25DaGFuZ2VkJykgb25Qb3NpdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4gdGhlIGRyYXdlciBtb2RlIGNoYW5nZXMuIFRoaXMgaXMgdXNlZCBieSB0aGUgZHJhd2VyIGNvbnRhaW5lciB0b1xuICAgKiB0byBrbm93IHdoZW4gdG8gd2hlbiB0aGUgbW9kZSBjaGFuZ2VzIHNvIGl0IGNhbiBhZGFwdCB0aGUgbWFyZ2lucyBvbiB0aGUgY29udGVudC5cbiAgICovXG4gIHJlYWRvbmx5IF9tb2RlQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2ZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSxcbiAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAqIEBkZXByZWNhdGVkIGBfY29udGFpbmVyYCBwYXJhbWV0ZXIgdG8gYmUgbWFkZSByZXF1aXJlZC5cbiAgICAgICAgICAgICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RSQVdFUl9DT05UQUlORVIpIHB1YmxpYyBfY29udGFpbmVyPzogTWF0RHJhd2VyQ29udGFpbmVyKSB7XG5cbiAgICB0aGlzLm9wZW5lZENoYW5nZS5zdWJzY3JpYmUoKG9wZW5lZDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKG9wZW5lZCkge1xuICAgICAgICBpZiAodGhpcy5fZG9jKSB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudEZvY3VzZWRCZWZvcmVEcmF3ZXJXYXNPcGVuZWQgPSB0aGlzLl9kb2MuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Rha2VGb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVzdG9yZUZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYGtleWRvd25gIGV2ZW50cyBvdXRzaWRlIHRoZSB6b25lIHNvIHRoYXQgY2hhbmdlIGRldGVjdGlvbiBpcyBub3QgcnVuIGV2ZXJ5XG4gICAgICogdGltZSBhIGtleSBpcyBwcmVzc2VkLiBJbnN0ZWFkIHdlIHJlLWVudGVyIHRoZSB6b25lIG9ubHkgaWYgdGhlIGBFU0NgIGtleSBpcyBwcmVzc2VkXG4gICAgICogYW5kIHdlIGRvbid0IGhhdmUgY2xvc2UgZGlzYWJsZWQuXG4gICAgICovXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgKGZyb21FdmVudCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdrZXlkb3duJykgYXMgT2JzZXJ2YWJsZTxLZXlib2FyZEV2ZW50PikucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgIXRoaXMuZGlzYWJsZUNsb3NlICYmICFoYXNNb2RpZmllcktleShldmVudCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpXG4gICAgICAgICkuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICAvLyBXZSBuZWVkIGEgU3ViamVjdCB3aXRoIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBiZWNhdXNlIHRoZSBgZG9uZWAgZXZlbnRcbiAgICAvLyBmaXJlcyB0d2ljZSBvbiBzb21lIGJyb3dzZXJzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjQwODRcbiAgICB0aGlzLl9hbmltYXRpb25FbmQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHguZnJvbVN0YXRlID09PSB5LmZyb21TdGF0ZSAmJiB4LnRvU3RhdGUgPT09IHkudG9TdGF0ZTtcbiAgICB9KSkuc3Vic2NyaWJlKChldmVudDogQW5pbWF0aW9uRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHtmcm9tU3RhdGUsIHRvU3RhdGV9ID0gZXZlbnQ7XG5cbiAgICAgIGlmICgodG9TdGF0ZS5pbmRleE9mKCdvcGVuJykgPT09IDAgJiYgZnJvbVN0YXRlID09PSAndm9pZCcpIHx8XG4gICAgICAgICAgKHRvU3RhdGUgPT09ICd2b2lkJyAmJiBmcm9tU3RhdGUuaW5kZXhPZignb3BlbicpID09PSAwKSkge1xuICAgICAgICB0aGlzLm9wZW5lZENoYW5nZS5lbWl0KHRoaXMuX29wZW5lZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgZm9jdXMgaW50byB0aGUgZHJhd2VyLiBOb3RlIHRoYXQgdGhpcyB3b3JrcyBldmVuIGlmXG4gICAqIHRoZSBmb2N1cyB0cmFwIGlzIGRpc2FibGVkIGluIGBzaWRlYCBtb2RlLlxuICAgKi9cbiAgcHJpdmF0ZSBfdGFrZUZvY3VzKCkge1xuICAgIGlmICghdGhpcy5hdXRvRm9jdXMgfHwgIXRoaXMuX2ZvY3VzVHJhcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2ZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCkudGhlbihoYXNNb3ZlZEZvY3VzID0+IHtcbiAgICAgIC8vIElmIHRoZXJlIHdlcmUgbm8gZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgc2lkZW5hdiBpdHNlbGYgc28gdGhlIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgIC8vIHN0aWxsIHdvcmtzLiBXZSBuZWVkIHRvIGNoZWNrIHRoYXQgYGZvY3VzYCBpcyBhIGZ1bmN0aW9uIGR1ZSB0byBVbml2ZXJzYWwuXG4gICAgICBpZiAoIWhhc01vdmVkRm9jdXMgJiYgdHlwZW9mIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBmb2N1cyBpcyBjdXJyZW50bHkgaW5zaWRlIHRoZSBkcmF3ZXIsIHJlc3RvcmVzIGl0IHRvIHdoZXJlIGl0IHdhcyBiZWZvcmUgdGhlIGRyYXdlclxuICAgKiBvcGVuZWQuXG4gICAqL1xuICBwcml2YXRlIF9yZXN0b3JlRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUVsID0gdGhpcy5fZG9jICYmIHRoaXMuX2RvYy5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKGFjdGl2ZUVsICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhhY3RpdmVFbCkpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50Rm9jdXNlZEJlZm9yZURyYXdlcldhc09wZW5lZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLl9lbGVtZW50Rm9jdXNlZEJlZm9yZURyYXdlcldhc09wZW5lZCwgdGhpcy5fb3BlbmVkVmlhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudEZvY3VzZWRCZWZvcmVEcmF3ZXJXYXNPcGVuZWQgPSBudWxsO1xuICAgIHRoaXMuX29wZW5lZFZpYSA9IG51bGw7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fZm9jdXNUcmFwID0gdGhpcy5fZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl91cGRhdGVGb2N1c1RyYXBTdGF0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIC8vIEVuYWJsZSB0aGUgYW5pbWF0aW9ucyBhZnRlciB0aGUgbGlmZWN5Y2xlIGhvb2tzIGhhdmUgcnVuLCBpbiBvcmRlciB0byBhdm9pZCBhbmltYXRpbmdcbiAgICAvLyBkcmF3ZXJzIHRoYXQgYXJlIG9wZW4gYnkgZGVmYXVsdC4gV2hlbiB3ZSdyZSBvbiB0aGUgc2VydmVyLCB3ZSBzaG91bGRuJ3QgZW5hYmxlIHRoZVxuICAgIC8vIGFuaW1hdGlvbnMsIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0aGUgZHJhd2VyIHRvIGFuaW1hdGUgdGhlIGZpcnN0IHRpbWUgdGhlIHVzZXIgc2Vlc1xuICAgIC8vIHRoZSBwYWdlLlxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2VuYWJsZUFuaW1hdGlvbnMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9mb2N1c1RyYXApIHtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcC5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYW5pbWF0aW9uU3RhcnRlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2FuaW1hdGlvbkVuZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX21vZGVDaGFuZ2VkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBkcmF3ZXIuXG4gICAqIEBwYXJhbSBvcGVuZWRWaWEgV2hldGhlciB0aGUgZHJhd2VyIHdhcyBvcGVuZWQgYnkgYSBrZXkgcHJlc3MsIG1vdXNlIGNsaWNrIG9yIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqIFVzZWQgZm9yIGZvY3VzIG1hbmFnZW1lbnQgYWZ0ZXIgdGhlIHNpZGVuYXYgaXMgY2xvc2VkLlxuICAgKi9cbiAgb3BlbihvcGVuZWRWaWE/OiBGb2N1c09yaWdpbik6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMudG9nZ2xlKHRydWUsIG9wZW5lZFZpYSk7XG4gIH1cblxuICAvKiogQ2xvc2UgdGhlIGRyYXdlci4gKi9cbiAgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy50b2dnbGUoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGlzIGRyYXdlci5cbiAgICogQHBhcmFtIGlzT3BlbiBXaGV0aGVyIHRoZSBkcmF3ZXIgc2hvdWxkIGJlIG9wZW4uXG4gICAqIEBwYXJhbSBvcGVuZWRWaWEgV2hldGhlciB0aGUgZHJhd2VyIHdhcyBvcGVuZWQgYnkgYSBrZXkgcHJlc3MsIG1vdXNlIGNsaWNrIG9yIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqIFVzZWQgZm9yIGZvY3VzIG1hbmFnZW1lbnQgYWZ0ZXIgdGhlIHNpZGVuYXYgaXMgY2xvc2VkLlxuICAgKi9cbiAgdG9nZ2xlKGlzT3BlbjogYm9vbGVhbiA9ICF0aGlzLm9wZW5lZCwgb3BlbmVkVmlhOiBGb2N1c09yaWdpbiA9ICdwcm9ncmFtJyk6XG4gICAgUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcblxuICAgIHRoaXMuX29wZW5lZCA9IGlzT3BlbjtcblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gdGhpcy5fZW5hYmxlQW5pbWF0aW9ucyA/ICdvcGVuJyA6ICdvcGVuLWluc3RhbnQnO1xuICAgICAgdGhpcy5fb3BlbmVkVmlhID0gb3BlbmVkVmlhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25TdGF0ZSA9ICd2b2lkJztcbiAgICAgIHRoaXMuX3Jlc3RvcmVGb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZUZvY3VzVHJhcFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMub3BlbmVkQ2hhbmdlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKG9wZW4gPT4gcmVzb2x2ZShvcGVuID8gJ29wZW4nIDogJ2Nsb3NlJykpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IF93aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgPyAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IDApIDogMDtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBlbmFibGVkIHN0YXRlIG9mIHRoZSBmb2N1cyB0cmFwLiAqL1xuICBwcml2YXRlIF91cGRhdGVGb2N1c1RyYXBTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNUcmFwKSB7XG4gICAgICAvLyBUaGUgZm9jdXMgdHJhcCBpcyBvbmx5IGVuYWJsZWQgd2hlbiB0aGUgZHJhd2VyIGlzIG9wZW4gaW4gYW55IG1vZGUgb3RoZXIgdGhhbiBzaWRlLlxuICAgICAgdGhpcy5fZm9jdXNUcmFwLmVuYWJsZWQgPSB0aGlzLm9wZW5lZCAmJiB0aGlzLm1vZGUgIT09ICdzaWRlJztcbiAgICB9XG4gIH1cblxuICAvLyBXZSBoYXZlIHRvIHVzZSBhIGBIb3N0TGlzdGVuZXJgIGhlcmUgaW4gb3JkZXIgdG8gc3VwcG9ydCBib3RoIEl2eSBhbmQgVmlld0VuZ2luZS5cbiAgLy8gSW4gSXZ5IHRoZSBgaG9zdGAgYmluZGluZ3Mgd2lsbCBiZSBtZXJnZWQgd2hlbiB0aGlzIGNsYXNzIGlzIGV4dGVuZGVkLCB3aGVyZWFzIGluXG4gIC8vIFZpZXdFbmdpbmUgdGhleSdyZSBvdmVyd3JpdHRlbi5cbiAgLy8gVE9ETyhjcmlzYmV0byk6IHdlIG1vdmUgdGhpcyBiYWNrIGludG8gYGhvc3RgIG9uY2UgSXZ5IGlzIHR1cm5lZCBvbiBieSBkZWZhdWx0LlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcignQHRyYW5zZm9ybS5zdGFydCcsIFsnJGV2ZW50J10pXG4gIF9hbmltYXRpb25TdGFydExpc3RlbmVyKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIHRoaXMuX2FuaW1hdGlvblN0YXJ0ZWQubmV4dChldmVudCk7XG4gIH1cblxuICAvLyBXZSBoYXZlIHRvIHVzZSBhIGBIb3N0TGlzdGVuZXJgIGhlcmUgaW4gb3JkZXIgdG8gc3VwcG9ydCBib3RoIEl2eSBhbmQgVmlld0VuZ2luZS5cbiAgLy8gSW4gSXZ5IHRoZSBgaG9zdGAgYmluZGluZ3Mgd2lsbCBiZSBtZXJnZWQgd2hlbiB0aGlzIGNsYXNzIGlzIGV4dGVuZGVkLCB3aGVyZWFzIGluXG4gIC8vIFZpZXdFbmdpbmUgdGhleSdyZSBvdmVyd3JpdHRlbi5cbiAgLy8gVE9ETyhjcmlzYmV0byk6IHdlIG1vdmUgdGhpcyBiYWNrIGludG8gYGhvc3RgIG9uY2UgSXZ5IGlzIHR1cm5lZCBvbiBieSBkZWZhdWx0LlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcignQHRyYW5zZm9ybS5kb25lJywgWyckZXZlbnQnXSlcbiAgX2FuaW1hdGlvbkRvbmVMaXN0ZW5lcihldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICB0aGlzLl9hbmltYXRpb25FbmQubmV4dChldmVudCk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZUNsb3NlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvRm9jdXM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29wZW5lZDogQm9vbGVhbklucHV0O1xufVxuXG5cbi8qKlxuICogYDxtYXQtZHJhd2VyLWNvbnRhaW5lcj5gIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIG9uZSBvciB0d28gYDxtYXQtZHJhd2VyPmBzIHRoYXQgdmFsaWRhdGVzIHRoZSBzdGF0ZSBpbnRlcm5hbGx5XG4gKiBhbmQgY29vcmRpbmF0ZXMgdGhlIGJhY2tkcm9wIGFuZCBjb250ZW50IHN0eWxpbmcuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1kcmF3ZXItY29udGFpbmVyJyxcbiAgZXhwb3J0QXM6ICdtYXREcmF3ZXJDb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJ2RyYXdlci1jb250YWluZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkcmF3ZXIuY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWRyYXdlci1jb250YWluZXInLFxuICAgICdbY2xhc3MubWF0LWRyYXdlci1jb250YWluZXItZXhwbGljaXQtYmFja2Ryb3BdJzogJ19iYWNrZHJvcE92ZXJyaWRlJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBNQVRfRFJBV0VSX0NPTlRBSU5FUixcbiAgICB1c2VFeGlzdGluZzogTWF0RHJhd2VyQ29udGFpbmVyXG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIE1hdERyYXdlckNvbnRhaW5lciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG4gIC8qKiBBbGwgZHJhd2VycyBpbiB0aGUgY29udGFpbmVyLiBJbmNsdWRlcyBkcmF3ZXJzIGZyb20gaW5zaWRlIG5lc3RlZCBjb250YWluZXJzLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE1hdERyYXdlciwge1xuICAgIC8vIFdlIG5lZWQgdG8gdXNlIGBkZXNjZW5kYW50czogdHJ1ZWAsIGJlY2F1c2UgSXZ5IHdpbGwgbm8gbG9uZ2VyIG1hdGNoXG4gICAgLy8gaW5kaXJlY3QgZGVzY2VuZGFudHMgaWYgaXQncyBsZWZ0IGFzIGZhbHNlLlxuICAgIGRlc2NlbmRhbnRzOiB0cnVlXG4gIH0pXG4gIF9hbGxEcmF3ZXJzOiBRdWVyeUxpc3Q8TWF0RHJhd2VyPjtcblxuICAvKiogRHJhd2VycyB0aGF0IGJlbG9uZyB0byB0aGlzIGNvbnRhaW5lci4gKi9cbiAgX2RyYXdlcnMgPSBuZXcgUXVlcnlMaXN0PE1hdERyYXdlcj4oKTtcblxuICBAQ29udGVudENoaWxkKE1hdERyYXdlckNvbnRlbnQpIF9jb250ZW50OiBNYXREcmF3ZXJDb250ZW50O1xuICBAVmlld0NoaWxkKE1hdERyYXdlckNvbnRlbnQpIF91c2VyQ29udGVudDogTWF0RHJhd2VyQ29udGVudDtcblxuICAvKiogVGhlIGRyYXdlciBjaGlsZCB3aXRoIHRoZSBgc3RhcnRgIHBvc2l0aW9uLiAqL1xuICBnZXQgc3RhcnQoKTogTWF0RHJhd2VyIHwgbnVsbCB7IHJldHVybiB0aGlzLl9zdGFydDsgfVxuXG4gIC8qKiBUaGUgZHJhd2VyIGNoaWxkIHdpdGggdGhlIGBlbmRgIHBvc2l0aW9uLiAqL1xuICBnZXQgZW5kKCk6IE1hdERyYXdlciB8IG51bGwgeyByZXR1cm4gdGhpcy5fZW5kOyB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSByZXNpemUgdGhlIGNvbnRhaW5lciB3aGVuZXZlclxuICAgKiB0aGUgc2l6ZSBvZiBhbnkgb2YgaXRzIGRyYXdlcnMgY2hhbmdlcy5cbiAgICpcbiAgICogKipVc2UgYXQgeW91ciBvd24gcmlzayEqKiBFbmFibGluZyB0aGlzIG9wdGlvbiBjYW4gY2F1c2UgbGF5b3V0IHRocmFzaGluZyBieSBtZWFzdXJpbmdcbiAgICogdGhlIGRyYXdlcnMgb24gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS4gQ2FuIGJlIGNvbmZpZ3VyZWQgZ2xvYmFsbHkgdmlhIHRoZVxuICAgKiBgTUFUX0RSQVdFUl9ERUZBVUxUX0FVVE9TSVpFYCB0b2tlbi5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBhdXRvc2l6ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2F1dG9zaXplOyB9XG4gIHNldCBhdXRvc2l6ZSh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9hdXRvc2l6ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgcHJpdmF0ZSBfYXV0b3NpemU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGRyYXdlciBjb250YWluZXIgc2hvdWxkIGhhdmUgYSBiYWNrZHJvcCB3aGlsZSBvbmUgb2YgdGhlIHNpZGVuYXZzIGlzIG9wZW4uXG4gICAqIElmIGV4cGxpY2l0bHkgc2V0IHRvIGB0cnVlYCwgdGhlIGJhY2tkcm9wIHdpbGwgYmUgZW5hYmxlZCBmb3IgZHJhd2VycyBpbiB0aGUgYHNpZGVgXG4gICAqIG1vZGUgYXMgd2VsbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNCYWNrZHJvcCgpIHtcbiAgICBpZiAodGhpcy5fYmFja2Ryb3BPdmVycmlkZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gIXRoaXMuX3N0YXJ0IHx8IHRoaXMuX3N0YXJ0Lm1vZGUgIT09ICdzaWRlJyB8fCAhdGhpcy5fZW5kIHx8IHRoaXMuX2VuZC5tb2RlICE9PSAnc2lkZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2JhY2tkcm9wT3ZlcnJpZGU7XG4gIH1cbiAgc2V0IGhhc0JhY2tkcm9wKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9iYWNrZHJvcE92ZXJyaWRlID0gdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIF9iYWNrZHJvcE92ZXJyaWRlOiBib29sZWFuIHwgbnVsbDtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBkcmF3ZXIgYmFja2Ryb3AgaXMgY2xpY2tlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJhY2tkcm9wQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogVGhlIGRyYXdlciBhdCB0aGUgc3RhcnQvZW5kIHBvc2l0aW9uLCBpbmRlcGVuZGVudCBvZiBkaXJlY3Rpb24uICovXG4gIHByaXZhdGUgX3N0YXJ0OiBNYXREcmF3ZXIgfCBudWxsO1xuICBwcml2YXRlIF9lbmQ6IE1hdERyYXdlciB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBkcmF3ZXIgYXQgdGhlIGxlZnQvcmlnaHQuIFdoZW4gZGlyZWN0aW9uIGNoYW5nZXMsIHRoZXNlIHdpbGwgY2hhbmdlIGFzIHdlbGwuXG4gICAqIFRoZXkncmUgdXNlZCBhcyBhbGlhc2VzIGZvciB0aGUgYWJvdmUgdG8gc2V0IHRoZSBsZWZ0L3JpZ2h0IHN0eWxlIHByb3Blcmx5LlxuICAgKiBJbiBMVFIsIF9sZWZ0ID09IF9zdGFydCBhbmQgX3JpZ2h0ID09IF9lbmQuXG4gICAqIEluIFJUTCwgX2xlZnQgPT0gX2VuZCBhbmQgX3JpZ2h0ID09IF9zdGFydC5cbiAgICovXG4gIHByaXZhdGUgX2xlZnQ6IE1hdERyYXdlciB8IG51bGw7XG4gIHByaXZhdGUgX3JpZ2h0OiBNYXREcmF3ZXIgfCBudWxsO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBFbWl0cyBvbiBldmVyeSBuZ0RvQ2hlY2suIFVzZWQgZm9yIGRlYm91bmNpbmcgcmVmbG93cy4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZG9DaGVja1N1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBNYXJnaW5zIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGNvbnRlbnQuIFRoZXNlIGFyZSB1c2VkIHRvIHB1c2ggLyBzaHJpbmsgdGhlIGRyYXdlciBjb250ZW50IHdoZW4gYVxuICAgKiBkcmF3ZXIgaXMgb3Blbi4gV2UgdXNlIG1hcmdpbiByYXRoZXIgdGhhbiB0cmFuc2Zvcm0gZXZlbiBmb3IgcHVzaCBtb2RlIGJlY2F1c2UgdHJhbnNmb3JtIGJyZWFrc1xuICAgKiBmaXhlZCBwb3NpdGlvbiBlbGVtZW50cyBpbnNpZGUgb2YgdGhlIHRyYW5zZm9ybWVkIGVsZW1lbnQuXG4gICAqL1xuICBfY29udGVudE1hcmdpbnM6IHtsZWZ0OiBudW1iZXJ8bnVsbCwgcmlnaHQ6IG51bWJlcnxudWxsfSA9IHtsZWZ0OiBudWxsLCByaWdodDogbnVsbH07XG5cbiAgcmVhZG9ubHkgX2NvbnRlbnRNYXJnaW5DaGFuZ2VzID0gbmV3IFN1YmplY3Q8e2xlZnQ6IG51bWJlcnxudWxsLCByaWdodDogbnVtYmVyfG51bGx9PigpO1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIENka1Njcm9sbGFibGUgaW5zdGFuY2UgdGhhdCB3cmFwcyB0aGUgc2Nyb2xsYWJsZSBjb250ZW50LiAqL1xuICBnZXQgc2Nyb2xsYWJsZSgpOiBDZGtTY3JvbGxhYmxlIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckNvbnRlbnQgfHwgdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICB2aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxuICAgICAgICAgICAgICBASW5qZWN0KE1BVF9EUkFXRVJfREVGQVVMVF9BVVRPU0laRSkgZGVmYXVsdEF1dG9zaXplID0gZmFsc2UsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwcml2YXRlIF9hbmltYXRpb25Nb2RlPzogc3RyaW5nKSB7XG5cbiAgICAvLyBJZiBhIGBEaXJgIGRpcmVjdGl2ZSBleGlzdHMgdXAgdGhlIHRyZWUsIGxpc3RlbiBkaXJlY3Rpb24gY2hhbmdlc1xuICAgIC8vIGFuZCB1cGRhdGUgdGhlIGxlZnQvcmlnaHQgcHJvcGVydGllcyB0byBwb2ludCB0byB0aGUgcHJvcGVyIHN0YXJ0L2VuZC5cbiAgICBpZiAoX2Rpcikge1xuICAgICAgX2Rpci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVEcmF3ZXJzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudE1hcmdpbnMoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNpbmNlIHRoZSBtaW5pbXVtIHdpZHRoIG9mIHRoZSBzaWRlbmF2IGRlcGVuZHMgb24gdGhlIHZpZXdwb3J0IHdpZHRoLFxuICAgIC8vIHdlIG5lZWQgdG8gcmVjb21wdXRlIHRoZSBtYXJnaW5zIGlmIHRoZSB2aWV3cG9ydCBjaGFuZ2VzLlxuICAgIHZpZXdwb3J0UnVsZXIuY2hhbmdlKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUNvbnRlbnRNYXJnaW5zKCkpO1xuXG4gICAgdGhpcy5fYXV0b3NpemUgPSBkZWZhdWx0QXV0b3NpemU7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fYWxsRHJhd2Vycy5jaGFuZ2VzXG4gICAgICAucGlwZShzdGFydFdpdGgodGhpcy5fYWxsRHJhd2VycyksIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoZHJhd2VyOiBRdWVyeUxpc3Q8TWF0RHJhd2VyPikgPT4ge1xuICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMCBSZW1vdmUgYF9jb250YWluZXJgIGNoZWNrIG9uY2UgY29udGFpbmVyIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICAgICAgdGhpcy5fZHJhd2Vycy5yZXNldChkcmF3ZXIuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uX2NvbnRhaW5lciB8fCBpdGVtLl9jb250YWluZXIgPT09IHRoaXMpKTtcbiAgICAgICAgdGhpcy5fZHJhd2Vycy5ub3RpZnlPbkNoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fZHJhd2Vycy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdmFsaWRhdGVEcmF3ZXJzKCk7XG5cbiAgICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaCgoZHJhd2VyOiBNYXREcmF3ZXIpID0+IHtcbiAgICAgICAgdGhpcy5fd2F0Y2hEcmF3ZXJUb2dnbGUoZHJhd2VyKTtcbiAgICAgICAgdGhpcy5fd2F0Y2hEcmF3ZXJQb3NpdGlvbihkcmF3ZXIpO1xuICAgICAgICB0aGlzLl93YXRjaERyYXdlck1vZGUoZHJhd2VyKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoaXMuX2RyYXdlcnMubGVuZ3RoIHx8XG4gICAgICAgICAgdGhpcy5faXNEcmF3ZXJPcGVuKHRoaXMuX3N0YXJ0KSB8fFxuICAgICAgICAgIHRoaXMuX2lzRHJhd2VyT3Blbih0aGlzLl9lbmQpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudE1hcmdpbnMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9kb0NoZWNrU3ViamVjdC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDEwKSwgLy8gQXJiaXRyYXJ5IGRlYm91bmNlIHRpbWUsIGxlc3MgdGhhbiBhIGZyYW1lIGF0IDYwZnBzXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlQ29udGVudE1hcmdpbnMoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9jb250ZW50TWFyZ2luQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2RvQ2hlY2tTdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZHJhd2Vycy5kZXN0cm95KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBDYWxscyBgb3BlbmAgb2YgYm90aCBzdGFydCBhbmQgZW5kIGRyYXdlcnMgKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLl9kcmF3ZXJzLmZvckVhY2goZHJhd2VyID0+IGRyYXdlci5vcGVuKCkpO1xuICB9XG5cbiAgLyoqIENhbGxzIGBjbG9zZWAgb2YgYm90aCBzdGFydCBhbmQgZW5kIGRyYXdlcnMgKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZHJhd2Vycy5mb3JFYWNoKGRyYXdlciA9PiBkcmF3ZXIuY2xvc2UoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIGFuZCB1cGRhdGVzIHRoZSBpbmxpbmUgc3R5bGVzIGZvciB0aGUgY29udGVudC4gTm90ZSB0aGF0IHRoaXMgc2hvdWxkIGJlIHVzZWRcbiAgICogc3BhcmluZ2x5LCBiZWNhdXNlIGl0IGNhdXNlcyBhIHJlZmxvdy5cbiAgICovXG4gIHVwZGF0ZUNvbnRlbnRNYXJnaW5zKCkge1xuICAgIC8vIDEuIEZvciBkcmF3ZXJzIGluIGBvdmVyYCBtb2RlLCB0aGV5IGRvbid0IGFmZmVjdCB0aGUgY29udGVudC5cbiAgICAvLyAyLiBGb3IgZHJhd2VycyBpbiBgc2lkZWAgbW9kZSB0aGV5IHNob3VsZCBzaHJpbmsgdGhlIGNvbnRlbnQuIFdlIGRvIHRoaXMgYnkgYWRkaW5nIHRvIHRoZVxuICAgIC8vICAgIGxlZnQgbWFyZ2luIChmb3IgbGVmdCBkcmF3ZXIpIG9yIHJpZ2h0IG1hcmdpbiAoZm9yIHJpZ2h0IHRoZSBkcmF3ZXIpLlxuICAgIC8vIDMuIEZvciBkcmF3ZXJzIGluIGBwdXNoYCBtb2RlIHRoZSBzaG91bGQgc2hpZnQgdGhlIGNvbnRlbnQgd2l0aG91dCByZXNpemluZyBpdC4gV2UgZG8gdGhpcyBieVxuICAgIC8vICAgIGFkZGluZyB0byB0aGUgbGVmdCBvciByaWdodCBtYXJnaW4gYW5kIHNpbXVsdGFuZW91c2x5IHN1YnRyYWN0aW5nIHRoZSBzYW1lIGFtb3VudCBvZlxuICAgIC8vICAgIG1hcmdpbiBmcm9tIHRoZSBvdGhlciBzaWRlLlxuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBsZXQgcmlnaHQgPSAwO1xuXG4gICAgaWYgKHRoaXMuX2xlZnQgJiYgdGhpcy5fbGVmdC5vcGVuZWQpIHtcbiAgICAgIGlmICh0aGlzLl9sZWZ0Lm1vZGUgPT0gJ3NpZGUnKSB7XG4gICAgICAgIGxlZnQgKz0gdGhpcy5fbGVmdC5fd2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2xlZnQubW9kZSA9PSAncHVzaCcpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl9sZWZ0Ll93aWR0aDtcbiAgICAgICAgbGVmdCArPSB3aWR0aDtcbiAgICAgICAgcmlnaHQgLT0gd2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3JpZ2h0ICYmIHRoaXMuX3JpZ2h0Lm9wZW5lZCkge1xuICAgICAgaWYgKHRoaXMuX3JpZ2h0Lm1vZGUgPT0gJ3NpZGUnKSB7XG4gICAgICAgIHJpZ2h0ICs9IHRoaXMuX3JpZ2h0Ll93aWR0aDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmlnaHQubW9kZSA9PSAncHVzaCcpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl9yaWdodC5fd2lkdGg7XG4gICAgICAgIHJpZ2h0ICs9IHdpZHRoO1xuICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGVpdGhlciBgcmlnaHRgIG9yIGBsZWZ0YCBpcyB6ZXJvLCBkb24ndCBzZXQgYSBzdHlsZSB0byB0aGUgZWxlbWVudC4gVGhpc1xuICAgIC8vIGFsbG93cyB1c2VycyB0byBzcGVjaWZ5IGEgY3VzdG9tIHNpemUgdmlhIENTUyBjbGFzcyBpbiBTU1Igc2NlbmFyaW9zIHdoZXJlIHRoZVxuICAgIC8vIG1lYXN1cmVkIHdpZHRocyB3aWxsIGFsd2F5cyBiZSB6ZXJvLiBOb3RlIHRoYXQgd2UgcmVzZXQgdG8gYG51bGxgIGhlcmUsIHJhdGhlclxuICAgIC8vIHRoYW4gYmVsb3csIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSB0eXBlcyBpbiB0aGUgYGlmYCBiZWxvdyBhcmUgY29uc2lzdGVudC5cbiAgICBsZWZ0ID0gbGVmdCB8fCBudWxsITtcbiAgICByaWdodCA9IHJpZ2h0IHx8IG51bGwhO1xuXG4gICAgaWYgKGxlZnQgIT09IHRoaXMuX2NvbnRlbnRNYXJnaW5zLmxlZnQgfHwgcmlnaHQgIT09IHRoaXMuX2NvbnRlbnRNYXJnaW5zLnJpZ2h0KSB7XG4gICAgICB0aGlzLl9jb250ZW50TWFyZ2lucyA9IHtsZWZ0LCByaWdodH07XG5cbiAgICAgIC8vIFB1bGwgYmFjayBpbnRvIHRoZSBOZ1pvbmUgc2luY2UgaW4gc29tZSBjYXNlcyB3ZSBjb3VsZCBiZSBvdXRzaWRlLiBXZSBuZWVkIHRvIGJlIGNhcmVmdWxcbiAgICAgIC8vIHRvIGRvIGl0IG9ubHkgd2hlbiBzb21ldGhpbmcgY2hhbmdlZCwgb3RoZXJ3aXNlIHdlIGNhbiBlbmQgdXAgaGl0dGluZyB0aGUgem9uZSB0b28gb2Z0ZW4uXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHRoaXMuX2NvbnRlbnRNYXJnaW5DaGFuZ2VzLm5leHQodGhpcy5fY29udGVudE1hcmdpbnMpKTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgLy8gSWYgdXNlcnMgb3B0ZWQgaW50byBhdXRvc2l6aW5nLCBkbyBhIGNoZWNrIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUuXG4gICAgaWYgKHRoaXMuX2F1dG9zaXplICYmIHRoaXMuX2lzUHVzaGVkKCkpIHtcbiAgICAgIC8vIFJ1biBvdXRzaWRlIHRoZSBOZ1pvbmUsIG90aGVyd2lzZSB0aGUgZGVib3VuY2VyIHdpbGwgdGhyb3cgdXMgaW50byBhbiBpbmZpbml0ZSBsb29wLlxuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2RvQ2hlY2tTdWJqZWN0Lm5leHQoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgdG8gZHJhd2VyIGV2ZW50cyBpbiBvcmRlciB0byBzZXQgYSBjbGFzcyBvbiB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudCB3aGVuIHRoZVxuICAgKiBkcmF3ZXIgaXMgb3BlbiBhbmQgdGhlIGJhY2tkcm9wIGlzIHZpc2libGUuIFRoaXMgZW5zdXJlcyBhbnkgb3ZlcmZsb3cgb24gdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gICAqIGlzIHByb3Blcmx5IGhpZGRlbi5cbiAgICovXG4gIHByaXZhdGUgX3dhdGNoRHJhd2VyVG9nZ2xlKGRyYXdlcjogTWF0RHJhd2VyKTogdm9pZCB7XG4gICAgZHJhd2VyLl9hbmltYXRpb25TdGFydGVkLnBpcGUoXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBBbmltYXRpb25FdmVudCkgPT4gZXZlbnQuZnJvbVN0YXRlICE9PSBldmVudC50b1N0YXRlKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kcmF3ZXJzLmNoYW5nZXMpLFxuICAgIClcbiAgICAuc3Vic2NyaWJlKChldmVudDogQW5pbWF0aW9uRXZlbnQpID0+IHtcbiAgICAgIC8vIFNldCB0aGUgdHJhbnNpdGlvbiBjbGFzcyBvbiB0aGUgY29udGFpbmVyIHNvIHRoYXQgdGhlIGFuaW1hdGlvbnMgb2NjdXIuIFRoaXMgc2hvdWxkIG5vdFxuICAgICAgLy8gYmUgc2V0IGluaXRpYWxseSBiZWNhdXNlIGFuaW1hdGlvbnMgc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkIHZpYSBhIGNoYW5nZSBpbiBzdGF0ZS5cbiAgICAgIGlmIChldmVudC50b1N0YXRlICE9PSAnb3Blbi1pbnN0YW50JyAmJiB0aGlzLl9hbmltYXRpb25Nb2RlICE9PSAnTm9vcEFuaW1hdGlvbnMnKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYXQtZHJhd2VyLXRyYW5zaXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVDb250ZW50TWFyZ2lucygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoZHJhd2VyLm1vZGUgIT09ICdzaWRlJykge1xuICAgICAgZHJhd2VyLm9wZW5lZENoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl9kcmF3ZXJzLmNoYW5nZXMpKS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICB0aGlzLl9zZXRDb250YWluZXJDbGFzcyhkcmF3ZXIub3BlbmVkKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgdG8gZHJhd2VyIG9uUG9zaXRpb25DaGFuZ2VkIGV2ZW50IGluIG9yZGVyIHRvXG4gICAqIHJlLXZhbGlkYXRlIGRyYXdlcnMgd2hlbiB0aGUgcG9zaXRpb24gY2hhbmdlcy5cbiAgICovXG4gIHByaXZhdGUgX3dhdGNoRHJhd2VyUG9zaXRpb24oZHJhd2VyOiBNYXREcmF3ZXIpOiB2b2lkIHtcbiAgICBpZiAoIWRyYXdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBOT1RFOiBXZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gYmUgZW1wdHkgYmVmb3JlIHZhbGlkYXRpbmcsXG4gICAgLy8gc2luY2UgYm90aCBkcmF3ZXJzIG1heSBiZSBzd2FwcGluZyBwb3NpdGlvbnMgYXQgdGhlIHNhbWUgdGltZS5cbiAgICBkcmF3ZXIub25Qb3NpdGlvbkNoYW5nZWQucGlwZSh0YWtlVW50aWwodGhpcy5fZHJhd2Vycy5jaGFuZ2VzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX25nWm9uZS5vbk1pY3JvdGFza0VtcHR5LmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVEcmF3ZXJzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBTdWJzY3JpYmVzIHRvIGNoYW5nZXMgaW4gZHJhd2VyIG1vZGUgc28gd2UgY2FuIHJ1biBjaGFuZ2UgZGV0ZWN0aW9uLiAqL1xuICBwcml2YXRlIF93YXRjaERyYXdlck1vZGUoZHJhd2VyOiBNYXREcmF3ZXIpOiB2b2lkIHtcbiAgICBpZiAoZHJhd2VyKSB7XG4gICAgICBkcmF3ZXIuX21vZGVDaGFuZ2VkLnBpcGUodGFrZVVudGlsKG1lcmdlKHRoaXMuX2RyYXdlcnMuY2hhbmdlcywgdGhpcy5fZGVzdHJveWVkKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ29udGVudE1hcmdpbnMoKTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlICdtYXQtZHJhd2VyLW9wZW5lZCcgY2xhc3Mgb24gdGhlIG1haW4gJ21hdC1kcmF3ZXItY29udGFpbmVyJyBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9zZXRDb250YWluZXJDbGFzcyhpc0FkZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gJ21hdC1kcmF3ZXItY29udGFpbmVyLWhhcy1vcGVuJztcblxuICAgIGlmIChpc0FkZCkge1xuICAgICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFZhbGlkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgZHJhd2VyIGNoaWxkcmVuIGNvbXBvbmVudHMuICovXG4gIHByaXZhdGUgX3ZhbGlkYXRlRHJhd2VycygpIHtcbiAgICB0aGlzLl9zdGFydCA9IHRoaXMuX2VuZCA9IG51bGw7XG5cbiAgICAvLyBFbnN1cmUgdGhhdCB3ZSBoYXZlIGF0IG1vc3Qgb25lIHN0YXJ0IGFuZCBvbmUgZW5kIGRyYXdlci5cbiAgICB0aGlzLl9kcmF3ZXJzLmZvckVhY2goZHJhd2VyID0+IHtcbiAgICAgIGlmIChkcmF3ZXIucG9zaXRpb24gPT0gJ2VuZCcpIHtcbiAgICAgICAgaWYgKHRoaXMuX2VuZCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhyb3dNYXREdXBsaWNhdGVkRHJhd2VyRXJyb3IoJ2VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VuZCA9IGRyYXdlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGFydCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhyb3dNYXREdXBsaWNhdGVkRHJhd2VyRXJyb3IoJ3N0YXJ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhcnQgPSBkcmF3ZXI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yaWdodCA9IHRoaXMuX2xlZnQgPSBudWxsO1xuXG4gICAgLy8gRGV0ZWN0IGlmIHdlJ3JlIExUUiBvciBSVEwuXG4gICAgaWYgKHRoaXMuX2RpciAmJiB0aGlzLl9kaXIudmFsdWUgPT09ICdydGwnKSB7XG4gICAgICB0aGlzLl9sZWZ0ID0gdGhpcy5fZW5kO1xuICAgICAgdGhpcy5fcmlnaHQgPSB0aGlzLl9zdGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGVmdCA9IHRoaXMuX3N0YXJ0O1xuICAgICAgdGhpcy5fcmlnaHQgPSB0aGlzLl9lbmQ7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbnRhaW5lciBpcyBiZWluZyBwdXNoZWQgdG8gdGhlIHNpZGUgYnkgb25lIG9mIHRoZSBkcmF3ZXJzLiAqL1xuICBwcml2YXRlIF9pc1B1c2hlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2lzRHJhd2VyT3Blbih0aGlzLl9zdGFydCkgJiYgdGhpcy5fc3RhcnQubW9kZSAhPSAnb3ZlcicpIHx8XG4gICAgICAgICAgICh0aGlzLl9pc0RyYXdlck9wZW4odGhpcy5fZW5kKSAmJiB0aGlzLl9lbmQubW9kZSAhPSAnb3ZlcicpO1xuICB9XG5cbiAgX29uQmFja2Ryb3BDbGlja2VkKCkge1xuICAgIHRoaXMuYmFja2Ryb3BDbGljay5lbWl0KCk7XG4gICAgdGhpcy5fY2xvc2VNb2RhbERyYXdlcigpO1xuICB9XG5cbiAgX2Nsb3NlTW9kYWxEcmF3ZXIoKSB7XG4gICAgLy8gQ2xvc2UgYWxsIG9wZW4gZHJhd2VycyB3aGVyZSBjbG9zaW5nIGlzIG5vdCBkaXNhYmxlZCBhbmQgdGhlIG1vZGUgaXMgbm90IGBzaWRlYC5cbiAgICBbdGhpcy5fc3RhcnQsIHRoaXMuX2VuZF1cbiAgICAgIC5maWx0ZXIoZHJhd2VyID0+IGRyYXdlciAmJiAhZHJhd2VyLmRpc2FibGVDbG9zZSAmJiB0aGlzLl9jYW5IYXZlQmFja2Ryb3AoZHJhd2VyKSlcbiAgICAgIC5mb3JFYWNoKGRyYXdlciA9PiBkcmF3ZXIhLmNsb3NlKCkpO1xuICB9XG5cbiAgX2lzU2hvd2luZ0JhY2tkcm9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5faXNEcmF3ZXJPcGVuKHRoaXMuX3N0YXJ0KSAmJiB0aGlzLl9jYW5IYXZlQmFja2Ryb3AodGhpcy5fc3RhcnQpKSB8fFxuICAgICAgICAgICAodGhpcy5faXNEcmF3ZXJPcGVuKHRoaXMuX2VuZCkgJiYgdGhpcy5fY2FuSGF2ZUJhY2tkcm9wKHRoaXMuX2VuZCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FuSGF2ZUJhY2tkcm9wKGRyYXdlcjogTWF0RHJhd2VyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRyYXdlci5tb2RlICE9PSAnc2lkZScgfHwgISF0aGlzLl9iYWNrZHJvcE92ZXJyaWRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNEcmF3ZXJPcGVuKGRyYXdlcjogTWF0RHJhd2VyIHwgbnVsbCk6IGRyYXdlciBpcyBNYXREcmF3ZXIge1xuICAgIHJldHVybiBkcmF3ZXIgIT0gbnVsbCAmJiBkcmF3ZXIub3BlbmVkO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9zaXplOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oYXNCYWNrZHJvcDogQm9vbGVhbklucHV0O1xufVxuIl19