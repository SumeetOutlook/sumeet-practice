/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/virtual-scroll-viewport.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, Optional, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { animationFrameScheduler, asapScheduler, Observable, Subject, Subscription, } from 'rxjs';
import { auditTime, startWith, takeUntil } from 'rxjs/operators';
import { ScrollDispatcher } from './scroll-dispatcher';
import { CdkScrollable } from './scrollable';
import { VIRTUAL_SCROLL_STRATEGY } from './virtual-scroll-strategy';
import { ViewportRuler } from './viewport-ruler';
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';

const _c0 = ["contentWrapper"];
const _c1 = ["*"];
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
/**
 * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
 */
export class CdkVirtualScrollViewport extends CdkScrollable {
    /**
     * @param {?} elementRef
     * @param {?} _changeDetectorRef
     * @param {?} ngZone
     * @param {?} _scrollStrategy
     * @param {?} dir
     * @param {?} scrollDispatcher
     * @param {?=} viewportRuler
     */
    constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, 
    /**
     * @deprecated `viewportRuler` parameter to become required.
     * @breaking-change 11.0.0
     */
    viewportRuler) {
        super(elementRef, scrollDispatcher, ngZone, dir);
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */
        this._detachedSubject = new Subject();
        /**
         * Emits when the rendered range changes.
         */
        this._renderedRangeSubject = new Subject();
        this._orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /**
         * Emits when the index of the first element visible in the viewport changes.
         */
        this.scrolledIndexChange = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => this._scrollStrategy.scrolledIndexChange.subscribe((/**
         * @param {?} index
         * @return {?}
         */
        index => Promise.resolve().then((/**
         * @return {?}
         */
        () => this.ngZone.run((/**
         * @return {?}
         */
        () => observer.next(index)))))))));
        /**
         * A stream that emits whenever the rendered range changes.
         */
        this.renderedRangeStream = this._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        this._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */
        this._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */
        this._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */
        this._renderedRange = { start: 0, end: 0 };
        /**
         * The length of the data bound to this viewport (in number of items).
         */
        this._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */
        this._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */
        this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        this._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */
        this._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */
        this._runAfterChangeDetection = [];
        /**
         * Subscription to changes in the viewport size.
         */
        this._viewportChanges = Subscription.EMPTY;
        if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        // @breaking-change 11.0.0 Remove null check for `viewportRuler`.
        if (viewportRuler) {
            this._viewportChanges = viewportRuler.change().subscribe((/**
             * @return {?}
             */
            () => {
                this.checkViewportSize();
            }));
        }
    }
    /**
     * The direction the viewport scrolls.
     * @return {?}
     */
    get orientation() {
        return this._orientation;
    }
    /**
     * @param {?} orientation
     * @return {?}
     */
    set orientation(orientation) {
        if (this._orientation !== orientation) {
            this._orientation = orientation;
            this._calculateSpacerSize();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._measureViewportSize();
            this._scrollStrategy.attach(this);
            this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            startWith((/** @type {?} */ (null))), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            auditTime(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @return {?}
             */
            () => this._scrollStrategy.onContentScrolled()));
            this._markChangeDetectionNeeded();
        }))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        this._viewportChanges.unsubscribe();
        super.ngOnDestroy();
    }
    /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    attach(forOf) {
        if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._forOf = forOf;
            this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                /** @type {?} */
                const newLength = data.length;
                if (newLength !== this._dataLength) {
                    this._dataLength = newLength;
                    this._scrollStrategy.onDataLengthChanged();
                }
                this._doChangeDetection();
            }));
        }));
    }
    /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    detach() {
        this._forOf = null;
        this._detachedSubject.next();
    }
    /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    getDataLength() {
        return this._dataLength;
    }
    /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    getViewportSize() {
        return this._viewportSize;
    }
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    getRenderedRange() {
        return this._renderedRange;
    }
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            this._calculateSpacerSize();
            this._markChangeDetectionNeeded();
        }
    }
    /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            () => this._scrollStrategy.onContentRendered()));
        }
    }
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    }
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    setRenderedContentOffset(offset, to = 'to-start') {
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        /** @type {?} */
        const isHorizontal = this.orientation == 'horizontal';
        /** @type {?} */
        const axis = isHorizontal ? 'X' : 'Y';
        /** @type {?} */
        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        /** @type {?} */
        let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += ` translate${axis}(-100%)`;
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            () => {
                if (this._renderedContentOffsetNeedsRewrite) {
                    this._renderedContentOffset -= this.measureRenderedContentSize();
                    this._renderedContentOffsetNeedsRewrite = false;
                    this.setRenderedContentOffset(this._renderedContentOffset);
                }
                else {
                    this._scrollStrategy.onRenderedOffsetChanged();
                }
            }));
        }
    }
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    scrollToOffset(offset, behavior = 'auto') {
        /** @type {?} */
        const options = { behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    }
    /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    scrollToIndex(index, behavior = 'auto') {
        this._scrollStrategy.scrollToIndex(index, behavior);
    }
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    measureScrollOffset(from) {
        return super.measureScrollOffset(from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
    }
    /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    measureRenderedContentSize() {
        /** @type {?} */
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    }
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    measureRangeSize(range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    }
    /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    checkViewportSize() {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    }
    /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    _measureViewportSize() {
        /** @type {?} */
        const viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    }
    /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this._doChangeDetection();
            }))));
        }
    }
    /**
     * Run change detection.
     * @private
     * @return {?}
     */
    _doChangeDetection() {
        this._isChangeDetectionPending = false;
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run((/**
         * @return {?}
         */
        () => this._changeDetectorRef.markForCheck()));
        /** @type {?} */
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
            fn();
        }
    }
    /**
     * Calculates the `style.width` and `style.height` for the spacer element.
     * @private
     * @return {?}
     */
    _calculateSpacerSize() {
        this._totalContentHeight =
            this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
        this._totalContentWidth =
            this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
    }
}
CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) { return new (t || CdkVirtualScrollViewport)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(VIRTUAL_SCROLL_STRATEGY, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ScrollDispatcher), ɵngcc0.ɵɵdirectiveInject(ViewportRuler, 8)); };
CdkVirtualScrollViewport.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkVirtualScrollViewport, selectors: [["cdk-virtual-scroll-viewport"]], viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentWrapper = _t.first);
    } }, hostAttrs: [1, "cdk-virtual-scroll-viewport"], hostVars: 4, hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
    } }, inputs: { orientation: "orientation" }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: CdkScrollable,
                useExisting: CdkVirtualScrollViewport
            }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]], template: function CdkVirtualScrollViewport_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵstyleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
    } }, styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
CdkVirtualScrollViewport.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [VIRTUAL_SCROLL_STRATEGY,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ScrollDispatcher },
    { type: ViewportRuler, decorators: [{ type: Optional }] }
];
CdkVirtualScrollViewport.propDecorators = {
    orientation: [{ type: Input }],
    scrolledIndexChange: [{ type: Output }],
    _contentWrapper: [{ type: ViewChild, args: ['contentWrapper', { static: true },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkVirtualScrollViewport, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-viewport',
                template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
                host: {
                    'class': 'cdk-virtual-scroll-viewport',
                    '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                    '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: CdkScrollable,
                        useExisting: CdkVirtualScrollViewport
                    }],
                styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [VIRTUAL_SCROLL_STRATEGY]
            }] }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }, { type: ScrollDispatcher }, { type: ViewportRuler, decorators: [{
                type: Optional
            }] }]; }, { scrolledIndexChange: [{
            type: Output
        }], orientation: [{
            type: Input
        }], _contentWrapper: [{
            type: ViewChild,
            args: ['contentWrapper', { static: true }]
        }] }); })();
if (false) {
    /**
     * Emits when the viewport is detached from a CdkVirtualForOf.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._detachedSubject;
    /**
     * Emits when the rendered range changes.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedRangeSubject;
    /**
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._orientation;
    /**
     * Emits when the index of the first element visible in the viewport changes.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype.scrolledIndexChange;
    /**
     * The element that wraps the rendered content.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype._contentWrapper;
    /**
     * A stream that emits whenever the rendered range changes.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype.renderedRangeStream;
    /**
     * The total size of all content (in pixels), including content that is not currently rendered.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._totalContentSize;
    /**
     * A string representing the `style.width` property value to be used for the spacer element.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype._totalContentWidth;
    /**
     * A string representing the `style.height` property value to be used for the spacer element.
     * @type {?}
     */
    CdkVirtualScrollViewport.prototype._totalContentHeight;
    /**
     * The CSS transform applied to the rendered subset of items so that they appear within the bounds
     * of the visible viewport.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedContentTransform;
    /**
     * The currently rendered range of indices.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedRange;
    /**
     * The length of the data bound to this viewport (in number of items).
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._dataLength;
    /**
     * The size of the viewport (in pixels).
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._viewportSize;
    /**
     * the currently attached CdkVirtualForOf.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._forOf;
    /**
     * The last rendered content offset that was set.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedContentOffset;
    /**
     * Whether the last rendered content offset was to the end of the content (and therefore needs to
     * be rewritten as an offset to the start of the content).
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._renderedContentOffsetNeedsRewrite;
    /**
     * Whether there is a pending change detection cycle.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._isChangeDetectionPending;
    /**
     * A list of functions to run after the next change detection cycle.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._runAfterChangeDetection;
    /**
     * Subscription to changes in the viewport size.
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._viewportChanges;
    /** @type {?} */
    CdkVirtualScrollViewport.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    CdkVirtualScrollViewport.prototype._scrollStrategy;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwtdmlld3BvcnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2Nyb2xsaW5nL3ZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGFBQWEsRUFDYixVQUFVLEVBQ1YsT0FBTyxFQUVQLFlBQVksR0FDYixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQTBCLE1BQU0sY0FBYyxDQUFDO0FBRXBFLE9BQU8sRUFBQyx1QkFBdUIsRUFBd0IsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0M7QUFDRztBQUF5QztBQUM1QjtBQUFpQjtBQUFlOzs7Ozs7QUFBaEQsU0FBUyxXQUFXLENBQUMsRUFBYSxFQUFFLEVBQWE7QUFBSSxJQUNuRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDbEQsQ0FBQztBQUNEO0FBQ0c7QUFDNkQ7QUFDTztBQUNqQjtBQUU5QztBQUFJLE1BQU4s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QUFBaUI7QUFDdEI7QUFFQyxJQUhDLDBEQUFtQztBQUNyQztBQUVDO0FBQ0U7QUFDRTtBQUNXO0FBQWdCO0FBQVEsSUFBdEMsc0VBQW1EO0FBQ3JEO0FBQ087QUFDRjtBQUFpQjtBQUFnQjtBQUV0QyxJQUZFLDZEQUEwQztBQUM1QztBQUNPO0FBQ0Y7QUFBaUI7QUFBZ0I7QUFBUSxJQUE1Qyw0REFBa0Q7QUFDcEQ7QUFDTztBQUNGO0FBQWlCO0FBQWdCO0FBQVEsSUFBNUMsb0RBQThDO0FBQ2hEO0FBQ29CLElBQU4sOENBQTBDO0FBQUM7QUFDbEQ7QUFBaUI7QUFBZ0I7QUFBUSxJQUFsQyxzREFBNkM7QUFBQztBQUNyRDtBQUFpQjtBQUNkO0FBQVEsSUFBSixtREFDa0Q7QUFBQztBQUNoRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0xpc3RSYW5nZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLFxuICBhc2FwU2NoZWR1bGVyLFxuICBPYnNlcnZhYmxlLFxuICBTdWJqZWN0LFxuICBPYnNlcnZlcixcbiAgU3Vic2NyaXB0aW9uLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7YXVkaXRUaW1lLCBzdGFydFdpdGgsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTY3JvbGxEaXNwYXRjaGVyfSBmcm9tICcuL3Njcm9sbC1kaXNwYXRjaGVyJztcbmltcG9ydCB7Q2RrU2Nyb2xsYWJsZSwgRXh0ZW5kZWRTY3JvbGxUb09wdGlvbnN9IGZyb20gJy4vc2Nyb2xsYWJsZSc7XG5pbXBvcnQge0Nka1ZpcnR1YWxGb3JPZn0gZnJvbSAnLi92aXJ0dWFsLWZvci1vZic7XG5pbXBvcnQge1ZJUlRVQUxfU0NST0xMX1NUUkFURUdZLCBWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3l9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtWaWV3cG9ydFJ1bGVyfSBmcm9tICcuL3ZpZXdwb3J0LXJ1bGVyJztcblxuLyoqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gcmFuZ2VzIGFyZSBlcXVhbC4gKi9cbmZ1bmN0aW9uIHJhbmdlc0VxdWFsKHIxOiBMaXN0UmFuZ2UsIHIyOiBMaXN0UmFuZ2UpOiBib29sZWFuIHtcbiAgcmV0dXJuIHIxLnN0YXJ0ID09IHIyLnN0YXJ0ICYmIHIxLmVuZCA9PSByMi5lbmQ7XG59XG5cbi8qKlxuICogU2NoZWR1bGVyIHRvIGJlIHVzZWQgZm9yIHNjcm9sbCBldmVudHMuIE5lZWRzIHRvIGZhbGwgYmFjayB0b1xuICogc29tZXRoaW5nIHRoYXQgZG9lc24ndCByZWx5IG9uIHJlcXVlc3RBbmltYXRpb25GcmFtZSBvbiBlbnZpcm9ubWVudHNcbiAqIHRoYXQgZG9uJ3Qgc3VwcG9ydCBpdCAoZS5nLiBzZXJ2ZXItc2lkZSByZW5kZXJpbmcpLlxuICovXG5jb25zdCBTQ1JPTExfU0NIRURVTEVSID1cbiAgICB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJyA/IGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIDogYXNhcFNjaGVkdWxlcjtcblxuXG4vKiogQSB2aWV3cG9ydCB0aGF0IHZpcnR1YWxpemVzIGl0cyBzY3JvbGxpbmcgd2l0aCB0aGUgaGVscCBvZiBgQ2RrVmlydHVhbEZvck9mYC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCcsXG4gIHRlbXBsYXRlVXJsOiAndmlydHVhbC1zY3JvbGwtdmlld3BvcnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd2aXJ0dWFsLXNjcm9sbC12aWV3cG9ydC5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQnLFxuICAgICdbY2xhc3MuY2RrLXZpcnR1YWwtc2Nyb2xsLW9yaWVudGF0aW9uLWhvcml6b250YWxdJzogJ29yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIicsXG4gICAgJ1tjbGFzcy5jZGstdmlydHVhbC1zY3JvbGwtb3JpZW50YXRpb24tdmVydGljYWxdJzogJ29yaWVudGF0aW9uICE9PSBcImhvcml6b250YWxcIicsXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogQ2RrU2Nyb2xsYWJsZSxcbiAgICB1c2VFeGlzdGluZzogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LFxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgZXh0ZW5kcyBDZGtTY3JvbGxhYmxlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogRW1pdHMgd2hlbiB0aGUgdmlld3BvcnQgaXMgZGV0YWNoZWQgZnJvbSBhIENka1ZpcnR1YWxGb3JPZi4gKi9cbiAgcHJpdmF0ZSBfZGV0YWNoZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgcmVuZGVyZWQgcmFuZ2UgY2hhbmdlcy4gKi9cbiAgcHJpdmF0ZSBfcmVuZGVyZWRSYW5nZVN1YmplY3QgPSBuZXcgU3ViamVjdDxMaXN0UmFuZ2U+KCk7XG5cbiAgLyoqIFRoZSBkaXJlY3Rpb24gdGhlIHZpZXdwb3J0IHNjcm9sbHMuICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZW50YXRpb247XG4gIH1cbiAgc2V0IG9yaWVudGF0aW9uKG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnKSB7XG4gICAgaWYgKHRoaXMuX29yaWVudGF0aW9uICE9PSBvcmllbnRhdGlvbikge1xuICAgICAgdGhpcy5fb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVNwYWNlclNpemUoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xuXG4gIC8vIE5vdGU6IHdlIGRvbid0IHVzZSB0aGUgdHlwaWNhbCBFdmVudEVtaXR0ZXIgaGVyZSBiZWNhdXNlIHdlIG5lZWQgdG8gc3Vic2NyaWJlIHRvIHRoZSBzY3JvbGxcbiAgLy8gc3RyYXRlZ3kgbGF6aWx5IChpLmUuIG9ubHkgaWYgdGhlIHVzZXIgaXMgYWN0dWFsbHkgbGlzdGVuaW5nIHRvIHRoZSBldmVudHMpLiBXZSBkbyB0aGlzIGJlY2F1c2VcbiAgLy8gZGVwZW5kaW5nIG9uIGhvdyB0aGUgc3RyYXRlZ3kgY2FsY3VsYXRlcyB0aGUgc2Nyb2xsZWQgaW5kZXgsIGl0IG1heSBjb21lIGF0IGEgY29zdCB0b1xuICAvLyBwZXJmb3JtYW5jZS5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBlbGVtZW50IHZpc2libGUgaW4gdGhlIHZpZXdwb3J0IGNoYW5nZXMuICovXG4gIEBPdXRwdXQoKSBzY3JvbGxlZEluZGV4Q2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj4gPVxuICAgICAgbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxudW1iZXI+KSA9PlxuICAgICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5zY3JvbGxlZEluZGV4Q2hhbmdlLnN1YnNjcmliZShpbmRleCA9PlxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gb2JzZXJ2ZXIubmV4dChpbmRleCkpKSkpO1xuXG4gIC8qKiBUaGUgZWxlbWVudCB0aGF0IHdyYXBzIHRoZSByZW5kZXJlZCBjb250ZW50LiAqL1xuICBAVmlld0NoaWxkKCdjb250ZW50V3JhcHBlcicsIHtzdGF0aWM6IHRydWV9KSBfY29udGVudFdyYXBwZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIC8qKiBBIHN0cmVhbSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSByZW5kZXJlZCByYW5nZSBjaGFuZ2VzLiAqL1xuICByZW5kZXJlZFJhbmdlU3RyZWFtOiBPYnNlcnZhYmxlPExpc3RSYW5nZT4gPSB0aGlzLl9yZW5kZXJlZFJhbmdlU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAvKipcbiAgICogVGhlIHRvdGFsIHNpemUgb2YgYWxsIGNvbnRlbnQgKGluIHBpeGVscyksIGluY2x1ZGluZyBjb250ZW50IHRoYXQgaXMgbm90IGN1cnJlbnRseSByZW5kZXJlZC5cbiAgICovXG4gIHByaXZhdGUgX3RvdGFsQ29udGVudFNpemUgPSAwO1xuXG4gIC8qKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGBzdHlsZS53aWR0aGAgcHJvcGVydHkgdmFsdWUgdG8gYmUgdXNlZCBmb3IgdGhlIHNwYWNlciBlbGVtZW50LiAqL1xuICBfdG90YWxDb250ZW50V2lkdGggPSAnJztcblxuICAvKiogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBgc3R5bGUuaGVpZ2h0YCBwcm9wZXJ0eSB2YWx1ZSB0byBiZSB1c2VkIGZvciB0aGUgc3BhY2VyIGVsZW1lbnQuICovXG4gIF90b3RhbENvbnRlbnRIZWlnaHQgPSAnJztcblxuICAvKipcbiAgICogVGhlIENTUyB0cmFuc2Zvcm0gYXBwbGllZCB0byB0aGUgcmVuZGVyZWQgc3Vic2V0IG9mIGl0ZW1zIHNvIHRoYXQgdGhleSBhcHBlYXIgd2l0aGluIHRoZSBib3VuZHNcbiAgICogb2YgdGhlIHZpc2libGUgdmlld3BvcnQuXG4gICAqL1xuICBwcml2YXRlIF9yZW5kZXJlZENvbnRlbnRUcmFuc2Zvcm06IHN0cmluZztcblxuICAvKiogVGhlIGN1cnJlbnRseSByZW5kZXJlZCByYW5nZSBvZiBpbmRpY2VzLiAqL1xuICBwcml2YXRlIF9yZW5kZXJlZFJhbmdlOiBMaXN0UmFuZ2UgPSB7c3RhcnQ6IDAsIGVuZDogMH07XG5cbiAgLyoqIFRoZSBsZW5ndGggb2YgdGhlIGRhdGEgYm91bmQgdG8gdGhpcyB2aWV3cG9ydCAoaW4gbnVtYmVyIG9mIGl0ZW1zKS4gKi9cbiAgcHJpdmF0ZSBfZGF0YUxlbmd0aCA9IDA7XG5cbiAgLyoqIFRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS4gKi9cbiAgcHJpdmF0ZSBfdmlld3BvcnRTaXplID0gMDtcblxuICAvKiogdGhlIGN1cnJlbnRseSBhdHRhY2hlZCBDZGtWaXJ0dWFsRm9yT2YuICovXG4gIHByaXZhdGUgX2Zvck9mOiBDZGtWaXJ0dWFsRm9yT2Y8YW55PiB8IG51bGw7XG5cbiAgLyoqIFRoZSBsYXN0IHJlbmRlcmVkIGNvbnRlbnQgb2Zmc2V0IHRoYXQgd2FzIHNldC4gKi9cbiAgcHJpdmF0ZSBfcmVuZGVyZWRDb250ZW50T2Zmc2V0ID0gMDtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgbGFzdCByZW5kZXJlZCBjb250ZW50IG9mZnNldCB3YXMgdG8gdGhlIGVuZCBvZiB0aGUgY29udGVudCAoYW5kIHRoZXJlZm9yZSBuZWVkcyB0b1xuICAgKiBiZSByZXdyaXR0ZW4gYXMgYW4gb2Zmc2V0IHRvIHRoZSBzdGFydCBvZiB0aGUgY29udGVudCkuXG4gICAqL1xuICBwcml2YXRlIF9yZW5kZXJlZENvbnRlbnRPZmZzZXROZWVkc1Jld3JpdGUgPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGVyZSBpcyBhIHBlbmRpbmcgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS4gKi9cbiAgcHJpdmF0ZSBfaXNDaGFuZ2VEZXRlY3Rpb25QZW5kaW5nID0gZmFsc2U7XG5cbiAgLyoqIEEgbGlzdCBvZiBmdW5jdGlvbnMgdG8gcnVuIGFmdGVyIHRoZSBuZXh0IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUuICovXG4gIHByaXZhdGUgX3J1bkFmdGVyQ2hhbmdlRGV0ZWN0aW9uOiBGdW5jdGlvbltdID0gW107XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBjaGFuZ2VzIGluIHRoZSB2aWV3cG9ydCBzaXplLiAqL1xuICBwcml2YXRlIF92aWV3cG9ydENoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFZJUlRVQUxfU0NST0xMX1NUUkFURUdZKVxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3k6IFZpcnR1YWxTY3JvbGxTdHJhdGVneSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICAgICAgICAgICAgc2Nyb2xsRGlzcGF0Y2hlcjogU2Nyb2xsRGlzcGF0Y2hlcixcbiAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAqIEBkZXByZWNhdGVkIGB2aWV3cG9ydFJ1bGVyYCBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAgICAgICAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDExLjAuMFxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgdmlld3BvcnRSdWxlcj86IFZpZXdwb3J0UnVsZXIpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzY3JvbGxEaXNwYXRjaGVyLCBuZ1pvbmUsIGRpcik7XG5cbiAgICBpZiAoIV9zY3JvbGxTdHJhdGVneSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0Vycm9yOiBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgcmVxdWlyZXMgdGhlIFwiaXRlbVNpemVcIiBwcm9wZXJ0eSB0byBiZSBzZXQuJyk7XG4gICAgfVxuXG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSAxMS4wLjAgUmVtb3ZlIG51bGwgY2hlY2sgZm9yIGB2aWV3cG9ydFJ1bGVyYC5cbiAgICBpZiAodmlld3BvcnRSdWxlcikge1xuICAgICAgdGhpcy5fdmlld3BvcnRDaGFuZ2VzID0gdmlld3BvcnRSdWxlci5jaGFuZ2UoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrVmlld3BvcnRTaXplKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgLy8gSXQncyBzdGlsbCB0b28gZWFybHkgdG8gbWVhc3VyZSB0aGUgdmlld3BvcnQgYXQgdGhpcyBwb2ludC4gRGVmZXJyaW5nIHdpdGggYSBwcm9taXNlIGFsbG93c1xuICAgIC8vIHRoZSBWaWV3cG9ydCB0byBiZSByZW5kZXJlZCB3aXRoIHRoZSBjb3JyZWN0IHNpemUgYmVmb3JlIHdlIG1lYXN1cmUuIFdlIHJ1biB0aGlzIG91dHNpZGUgdGhlXG4gICAgLy8gem9uZSB0byBhdm9pZCBjYXVzaW5nIG1vcmUgY2hhbmdlIGRldGVjdGlvbiBjeWNsZXMuIFdlIGhhbmRsZSB0aGUgY2hhbmdlIGRldGVjdGlvbiBsb29wXG4gICAgLy8gb3Vyc2VsdmVzIGluc3RlYWQuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9tZWFzdXJlVmlld3BvcnRTaXplKCk7XG4gICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5hdHRhY2godGhpcyk7XG5cbiAgICAgIHRoaXMuZWxlbWVudFNjcm9sbGVkKClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgLy8gU3RhcnQgb2ZmIHdpdGggYSBmYWtlIHNjcm9sbCBldmVudCBzbyB3ZSBwcm9wZXJseSBkZXRlY3Qgb3VyIGluaXRpYWwgcG9zaXRpb24uXG4gICAgICAgICAgICAgIHN0YXJ0V2l0aChudWxsISksXG4gICAgICAgICAgICAgIC8vIENvbGxlY3QgbXVsdGlwbGUgZXZlbnRzIGludG8gb25lIHVudGlsIHRoZSBuZXh0IGFuaW1hdGlvbiBmcmFtZS4gVGhpcyB3YXkgaWZcbiAgICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG11bHRpcGxlIHNjcm9sbCBldmVudHMgaW4gdGhlIHNhbWUgZnJhbWUgd2Ugb25seSBuZWVkIHRvIHJlY2hlY2tcbiAgICAgICAgICAgICAgLy8gb3VyIGxheW91dCBvbmNlLlxuICAgICAgICAgICAgICBhdWRpdFRpbWUoMCwgU0NST0xMX1NDSEVEVUxFUikpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zY3JvbGxTdHJhdGVneS5vbkNvbnRlbnRTY3JvbGxlZCgpKTtcblxuICAgICAgdGhpcy5fbWFya0NoYW5nZURldGVjdGlvbk5lZWRlZCgpO1xuICAgIH0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kuZGV0YWNoKCk7XG5cbiAgICAvLyBDb21wbGV0ZSBhbGwgc3ViamVjdHNcbiAgICB0aGlzLl9yZW5kZXJlZFJhbmdlU3ViamVjdC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2RldGFjaGVkU3ViamVjdC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX3ZpZXdwb3J0Q2hhbmdlcy51bnN1YnNjcmliZSgpO1xuXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKiBBdHRhY2hlcyBhIGBDZGtWaXJ0dWFsRm9yT2ZgIHRvIHRoaXMgdmlld3BvcnQuICovXG4gIGF0dGFjaChmb3JPZjogQ2RrVmlydHVhbEZvck9mPGFueT4pIHtcbiAgICBpZiAodGhpcy5fZm9yT2YpIHtcbiAgICAgIHRocm93IEVycm9yKCdDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgaXMgYWxyZWFkeSBhdHRhY2hlZC4nKTtcbiAgICB9XG5cbiAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIGRhdGEgc3RyZWFtIG9mIHRoZSBDZGtWaXJ0dWFsRm9yT2YgdG8ga2VlcCB0cmFjayBvZiB3aGVuIHRoZSBkYXRhIGxlbmd0aFxuICAgIC8vIGNoYW5nZXMuIFJ1biBvdXRzaWRlIHRoZSB6b25lIHRvIGF2b2lkIHRyaWdnZXJpbmcgY2hhbmdlIGRldGVjdGlvbiwgc2luY2Ugd2UncmUgbWFuYWdpbmcgdGhlXG4gICAgLy8gY2hhbmdlIGRldGVjdGlvbiBsb29wIG91cnNlbHZlcy5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9mb3JPZiA9IGZvck9mO1xuICAgICAgdGhpcy5fZm9yT2YuZGF0YVN0cmVhbS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXRhY2hlZFN1YmplY3QpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0xlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBpZiAobmV3TGVuZ3RoICE9PSB0aGlzLl9kYXRhTGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IG5ld0xlbmd0aDtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5vbkRhdGFMZW5ndGhDaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZG9DaGFuZ2VEZXRlY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIERldGFjaGVzIHRoZSBjdXJyZW50IGBDZGtWaXJ0dWFsRm9yT2ZgLiAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5fZm9yT2YgPSBudWxsO1xuICAgIHRoaXMuX2RldGFjaGVkU3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhIGJvdW5kIHRvIHRoaXMgdmlld3BvcnQgKGluIG51bWJlciBvZiBpdGVtcykuICovXG4gIGdldERhdGFMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YUxlbmd0aDtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS4gKi9cbiAgZ2V0Vmlld3BvcnRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdwb3J0U2l6ZTtcbiAgfVxuXG4gIC8vIFRPRE8obW1hbGVyYmEpOiBUaGlzIGlzIHRlY2huaWNhbGx5IG91dCBvZiBzeW5jIHdpdGggd2hhdCdzIHJlYWxseSByZW5kZXJlZCB1bnRpbCBhIHJlbmRlclxuICAvLyBjeWNsZSBoYXBwZW5zLiBJJ20gYmVpbmcgY2FyZWZ1bCB0byBvbmx5IGNhbGwgaXQgYWZ0ZXIgdGhlIHJlbmRlciBjeWNsZSBpcyBjb21wbGV0ZSBhbmQgYmVmb3JlXG4gIC8vIHNldHRpbmcgaXQgdG8gc29tZXRoaW5nIGVsc2UsIGJ1dCBpdHMgZXJyb3IgcHJvbmUgYW5kIHNob3VsZCBwcm9iYWJseSBiZSBzcGxpdCBpbnRvXG4gIC8vIGBwZW5kaW5nUmFuZ2VgIGFuZCBgcmVuZGVyZWRSYW5nZWAsIHRoZSBsYXR0ZXIgcmVmbGVjdGluZyB3aGF0cyBhY3R1YWxseSBpbiB0aGUgRE9NLlxuXG4gIC8qKiBHZXQgdGhlIGN1cnJlbnQgcmVuZGVyZWQgcmFuZ2Ugb2YgaXRlbXMuICovXG4gIGdldFJlbmRlcmVkUmFuZ2UoKTogTGlzdFJhbmdlIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyZWRSYW5nZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0b3RhbCBzaXplIG9mIGFsbCBjb250ZW50IChpbiBwaXhlbHMpLCBpbmNsdWRpbmcgY29udGVudCB0aGF0IGlzIG5vdCBjdXJyZW50bHlcbiAgICogcmVuZGVyZWQuXG4gICAqL1xuICBzZXRUb3RhbENvbnRlbnRTaXplKHNpemU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl90b3RhbENvbnRlbnRTaXplICE9PSBzaXplKSB7XG4gICAgICB0aGlzLl90b3RhbENvbnRlbnRTaXplID0gc2l6ZTtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVNwYWNlclNpemUoKTtcbiAgICAgIHRoaXMuX21hcmtDaGFuZ2VEZXRlY3Rpb25OZWVkZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudGx5IHJlbmRlcmVkIHJhbmdlIG9mIGluZGljZXMuICovXG4gIHNldFJlbmRlcmVkUmFuZ2UocmFuZ2U6IExpc3RSYW5nZSkge1xuICAgIGlmICghcmFuZ2VzRXF1YWwodGhpcy5fcmVuZGVyZWRSYW5nZSwgcmFuZ2UpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlZFJhbmdlU3ViamVjdC5uZXh0KHRoaXMuX3JlbmRlcmVkUmFuZ2UgPSByYW5nZSk7XG4gICAgICB0aGlzLl9tYXJrQ2hhbmdlRGV0ZWN0aW9uTmVlZGVkKCgpID0+IHRoaXMuX3Njcm9sbFN0cmF0ZWd5Lm9uQ29udGVudFJlbmRlcmVkKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBvZmZzZXQgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHZpZXdwb3J0IHRvIHRoZSBzdGFydCBvZiB0aGUgcmVuZGVyZWQgZGF0YSAoaW4gcGl4ZWxzKS5cbiAgICovXG4gIGdldE9mZnNldFRvUmVuZGVyZWRDb250ZW50U3RhcnQoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVkQ29udGVudE9mZnNldE5lZWRzUmV3cml0ZSA/IG51bGwgOiB0aGlzLl9yZW5kZXJlZENvbnRlbnRPZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgb2Zmc2V0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSB2aWV3cG9ydCB0byBlaXRoZXIgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgcmVuZGVyZWQgZGF0YVxuICAgKiAoaW4gcGl4ZWxzKS5cbiAgICovXG4gIHNldFJlbmRlcmVkQ29udGVudE9mZnNldChvZmZzZXQ6IG51bWJlciwgdG86ICd0by1zdGFydCcgfCAndG8tZW5kJyA9ICd0by1zdGFydCcpIHtcbiAgICAvLyBGb3IgYSBob3Jpem9udGFsIHZpZXdwb3J0IGluIGEgcmlnaHQtdG8tbGVmdCBsYW5ndWFnZSB3ZSBuZWVkIHRvIHRyYW5zbGF0ZSBhbG9uZyB0aGUgeC1heGlzXG4gICAgLy8gaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbi5cbiAgICBjb25zdCBpc1J0bCA9IHRoaXMuZGlyICYmIHRoaXMuZGlyLnZhbHVlID09ICdydGwnO1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMub3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IGF4aXMgPSBpc0hvcml6b250YWwgPyAnWCcgOiAnWSc7XG4gICAgY29uc3QgYXhpc0RpcmVjdGlvbiA9IGlzSG9yaXpvbnRhbCAmJiBpc1J0bCA/IC0xIDogMTtcbiAgICBsZXQgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSR7YXhpc30oJHtOdW1iZXIoYXhpc0RpcmVjdGlvbiAqIG9mZnNldCl9cHgpYDtcbiAgICB0aGlzLl9yZW5kZXJlZENvbnRlbnRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgaWYgKHRvID09PSAndG8tZW5kJykge1xuICAgICAgdHJhbnNmb3JtICs9IGAgdHJhbnNsYXRlJHtheGlzfSgtMTAwJSlgO1xuICAgICAgLy8gVGhlIHZpZXdwb3J0IHNob3VsZCByZXdyaXRlIHRoaXMgYXMgYSBgdG8tc3RhcnRgIG9mZnNldCBvbiB0aGUgbmV4dCByZW5kZXIgY3ljbGUuIE90aGVyd2lzZVxuICAgICAgLy8gZWxlbWVudHMgd2lsbCBhcHBlYXIgdG8gZXhwYW5kIGluIHRoZSB3cm9uZyBkaXJlY3Rpb24gKGUuZy4gYG1hdC1leHBhbnNpb24tcGFuZWxgIHdvdWxkXG4gICAgICAvLyBleHBhbmQgdXB3YXJkKS5cbiAgICAgIHRoaXMuX3JlbmRlcmVkQ29udGVudE9mZnNldE5lZWRzUmV3cml0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZW5kZXJlZENvbnRlbnRUcmFuc2Zvcm0gIT0gdHJhbnNmb3JtKSB7XG4gICAgICAvLyBXZSBrbm93IHRoaXMgdmFsdWUgaXMgc2FmZSBiZWNhdXNlIHdlIHBhcnNlIGBvZmZzZXRgIHdpdGggYE51bWJlcigpYCBiZWZvcmUgcGFzc2luZyBpdFxuICAgICAgLy8gaW50byB0aGUgc3RyaW5nLlxuICAgICAgdGhpcy5fcmVuZGVyZWRDb250ZW50VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgdGhpcy5fbWFya0NoYW5nZURldGVjdGlvbk5lZWRlZCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJlZENvbnRlbnRPZmZzZXROZWVkc1Jld3JpdGUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlZENvbnRlbnRPZmZzZXQgLT0gdGhpcy5tZWFzdXJlUmVuZGVyZWRDb250ZW50U2l6ZSgpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVkQ29udGVudE9mZnNldE5lZWRzUmV3cml0ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2V0UmVuZGVyZWRDb250ZW50T2Zmc2V0KHRoaXMuX3JlbmRlcmVkQ29udGVudE9mZnNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kub25SZW5kZXJlZE9mZnNldENoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdG8gdGhlIGdpdmVuIG9mZnNldCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgdmlld3BvcnQuIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBpcyBub3QgYWx3YXlzXG4gICAqIHRoZSBzYW1lIGFzIHNldHRpbmcgYHNjcm9sbFRvcGAgb3IgYHNjcm9sbExlZnRgLiBJbiBhIGhvcml6b250YWwgdmlld3BvcnQgd2l0aCByaWdodC10by1sZWZ0XG4gICAqIGRpcmVjdGlvbiwgdGhpcyB3b3VsZCBiZSB0aGUgZXF1aXZhbGVudCBvZiBzZXR0aW5nIGEgZmljdGlvbmFsIGBzY3JvbGxSaWdodGAgcHJvcGVydHkuXG4gICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB0byBzY3JvbGwgdG8uXG4gICAqIEBwYXJhbSBiZWhhdmlvciBUaGUgU2Nyb2xsQmVoYXZpb3IgdG8gdXNlIHdoZW4gc2Nyb2xsaW5nLiBEZWZhdWx0IGlzIGJlaGF2aW9yIGlzIGBhdXRvYC5cbiAgICovXG4gIHNjcm9sbFRvT2Zmc2V0KG9mZnNldDogbnVtYmVyLCBiZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IgPSAnYXV0bycpIHtcbiAgICBjb25zdCBvcHRpb25zOiBFeHRlbmRlZFNjcm9sbFRvT3B0aW9ucyA9IHtiZWhhdmlvcn07XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgb3B0aW9ucy5zdGFydCA9IG9mZnNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy50b3AgPSBvZmZzZXQ7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0byB0aGUgb2Zmc2V0IGZvciB0aGUgZ2l2ZW4gaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxuICAgKiBAcGFyYW0gYmVoYXZpb3IgVGhlIFNjcm9sbEJlaGF2aW9yIHRvIHVzZSB3aGVuIHNjcm9sbGluZy4gRGVmYXVsdCBpcyBiZWhhdmlvciBpcyBgYXV0b2AuXG4gICAqL1xuICBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsICBiZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IgPSAnYXV0bycpIHtcbiAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS5zY3JvbGxUb0luZGV4KGluZGV4LCBiZWhhdmlvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS5cbiAgICogQHBhcmFtIGZyb20gVGhlIGVkZ2UgdG8gbWVhc3VyZSB0aGUgb2Zmc2V0IGZyb20uIERlZmF1bHRzIHRvICd0b3AnIGluIHZlcnRpY2FsIG1vZGUgYW5kICdzdGFydCdcbiAgICogICAgIGluIGhvcml6b250YWwgbW9kZS5cbiAgICovXG4gIG1lYXN1cmVTY3JvbGxPZmZzZXQoZnJvbT86ICd0b3AnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ3N0YXJ0JyB8ICdlbmQnKTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3VwZXIubWVhc3VyZVNjcm9sbE9mZnNldChcbiAgICAgICAgZnJvbSA/IGZyb20gOiB0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAnc3RhcnQnIDogJ3RvcCcpO1xuICB9XG5cbiAgLyoqIE1lYXN1cmUgdGhlIGNvbWJpbmVkIHNpemUgb2YgYWxsIG9mIHRoZSByZW5kZXJlZCBpdGVtcy4gKi9cbiAgbWVhc3VyZVJlbmRlcmVkQ29udGVudFNpemUoKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb250ZW50RWwgPSB0aGlzLl9jb250ZW50V3JhcHBlci5uYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBjb250ZW50RWwub2Zmc2V0V2lkdGggOiBjb250ZW50RWwub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1lYXN1cmUgdGhlIHRvdGFsIGNvbWJpbmVkIHNpemUgb2YgdGhlIGdpdmVuIHJhbmdlLiBUaHJvd3MgaWYgdGhlIHJhbmdlIGluY2x1ZGVzIGl0ZW1zIHRoYXQgYXJlXG4gICAqIG5vdCByZW5kZXJlZC5cbiAgICovXG4gIG1lYXN1cmVSYW5nZVNpemUocmFuZ2U6IExpc3RSYW5nZSk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLl9mb3JPZikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mb3JPZi5tZWFzdXJlUmFuZ2VTaXplKHJhbmdlLCB0aGlzLm9yaWVudGF0aW9uKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGUgdGhlIHZpZXdwb3J0IGRpbWVuc2lvbnMgYW5kIHJlLXJlbmRlci4gKi9cbiAgY2hlY2tWaWV3cG9ydFNpemUoKSB7XG4gICAgLy8gVE9ETzogQ2xlYW51cCBsYXRlciB3aGVuIGFkZCBsb2dpYyBmb3IgaGFuZGxpbmcgY29udGVudCByZXNpemVcbiAgICB0aGlzLl9tZWFzdXJlVmlld3BvcnRTaXplKCk7XG4gICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kub25EYXRhTGVuZ3RoQ2hhbmdlZCgpO1xuICB9XG5cbiAgLyoqIE1lYXN1cmUgdGhlIHZpZXdwb3J0IHNpemUuICovXG4gIHByaXZhdGUgX21lYXN1cmVWaWV3cG9ydFNpemUoKSB7XG4gICAgY29uc3Qgdmlld3BvcnRFbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX3ZpZXdwb3J0U2l6ZSA9IHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/XG4gICAgICAgIHZpZXdwb3J0RWwuY2xpZW50V2lkdGggOiB2aWV3cG9ydEVsLmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIC8qKiBRdWV1ZSB1cCBjaGFuZ2UgZGV0ZWN0aW9uIHRvIHJ1bi4gKi9cbiAgcHJpdmF0ZSBfbWFya0NoYW5nZURldGVjdGlvbk5lZWRlZChydW5BZnRlcj86IEZ1bmN0aW9uKSB7XG4gICAgaWYgKHJ1bkFmdGVyKSB7XG4gICAgICB0aGlzLl9ydW5BZnRlckNoYW5nZURldGVjdGlvbi5wdXNoKHJ1bkFmdGVyKTtcbiAgICB9XG5cbiAgICAvLyBVc2UgYSBQcm9taXNlIHRvIGJhdGNoIHRvZ2V0aGVyIGNhbGxzIHRvIGBfZG9DaGFuZ2VEZXRlY3Rpb25gLiBUaGlzIHdheSBpZiB3ZSBzZXQgYSBidW5jaCBvZlxuICAgIC8vIHByb3BlcnRpZXMgc2VxdWVudGlhbGx5IHdlIG9ubHkgaGF2ZSB0byBydW4gYF9kb0NoYW5nZURldGVjdGlvbmAgb25jZSBhdCB0aGUgZW5kLlxuICAgIGlmICghdGhpcy5faXNDaGFuZ2VEZXRlY3Rpb25QZW5kaW5nKSB7XG4gICAgICB0aGlzLl9pc0NoYW5nZURldGVjdGlvblBlbmRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2RvQ2hhbmdlRGV0ZWN0aW9uKCk7XG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uLiAqL1xuICBwcml2YXRlIF9kb0NoYW5nZURldGVjdGlvbigpIHtcbiAgICB0aGlzLl9pc0NoYW5nZURldGVjdGlvblBlbmRpbmcgPSBmYWxzZTtcblxuICAgIC8vIEFwcGx5IHRoZSBjb250ZW50IHRyYW5zZm9ybS4gVGhlIHRyYW5zZm9ybSBjYW4ndCBiZSBzZXQgdmlhIGFuIEFuZ3VsYXIgYmluZGluZyBiZWNhdXNlXG4gICAgLy8gYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlIGlzIGJhbm5lZCBpbiBHb29nbGUuIEhvd2V2ZXIgdGhlIHZhbHVlIGlzIHNhZmUsIGl0J3MgY29tcG9zZWQgb2ZcbiAgICAvLyBzdHJpbmcgbGl0ZXJhbHMsIGEgdmFyaWFibGUgdGhhdCBjYW4gb25seSBiZSAnWCcgb3IgJ1knLCBhbmQgdXNlciBpbnB1dCB0aGF0IGlzIHJ1biB0aHJvdWdoXG4gICAgLy8gdGhlIGBOdW1iZXJgIGZ1bmN0aW9uIGZpcnN0IHRvIGNvZXJjZSBpdCB0byBhIG51bWVyaWMgdmFsdWUuXG4gICAgdGhpcy5fY29udGVudFdyYXBwZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLl9yZW5kZXJlZENvbnRlbnRUcmFuc2Zvcm07XG4gICAgLy8gQXBwbHkgY2hhbmdlcyB0byBBbmd1bGFyIGJpbmRpbmdzLiBOb3RlOiBXZSBtdXN0IGNhbGwgYG1hcmtGb3JDaGVja2AgdG8gcnVuIGNoYW5nZSBkZXRlY3Rpb25cbiAgICAvLyBmcm9tIHRoZSByb290LCBzaW5jZSB0aGUgcmVwZWF0ZWQgaXRlbXMgYXJlIGNvbnRlbnQgcHJvamVjdGVkIGluLiBDYWxsaW5nIGBkZXRlY3RDaGFuZ2VzYFxuICAgIC8vIGluc3RlYWQgZG9lcyBub3QgcHJvcGVybHkgY2hlY2sgdGhlIHByb2plY3RlZCBjb250ZW50LlxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG5cbiAgICBjb25zdCBydW5BZnRlckNoYW5nZURldGVjdGlvbiA9IHRoaXMuX3J1bkFmdGVyQ2hhbmdlRGV0ZWN0aW9uO1xuICAgIHRoaXMuX3J1bkFmdGVyQ2hhbmdlRGV0ZWN0aW9uID0gW107XG4gICAgZm9yIChjb25zdCBmbiBvZiBydW5BZnRlckNoYW5nZURldGVjdGlvbikge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2FsY3VsYXRlcyB0aGUgYHN0eWxlLndpZHRoYCBhbmQgYHN0eWxlLmhlaWdodGAgZm9yIHRoZSBzcGFjZXIgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlU3BhY2VyU2l6ZSgpIHtcbiAgICB0aGlzLl90b3RhbENvbnRlbnRIZWlnaHQgPVxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAnJyA6IGAke3RoaXMuX3RvdGFsQ29udGVudFNpemV9cHhgO1xuICAgIHRoaXMuX3RvdGFsQ29udGVudFdpZHRoID1cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gYCR7dGhpcy5fdG90YWxDb250ZW50U2l6ZX1weGAgOiAnJztcbiAgfVxufVxuIl19