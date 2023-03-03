/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Output, EventEmitter, NgZone, Input, Renderer2, Optional, } from '@angular/core';
import { distinctUntilChanged, pairwise, filter, map } from 'rxjs/operators';
import { DraggableHelper } from './draggable-helper.provider';
import { DraggableScrollContainerDirective } from './draggable-scroll-container.directive';
import { addClass, removeClass } from './util';
/**
 * @param {?} clientX
 * @param {?} clientY
 * @param {?} rect
 * @return {?}
 */
import * as ɵngcc0 from '@angular/core';
function isCoordinateWithinRectangle(clientX, clientY, rect) {
    return (clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom);
}
/**
 * @record
 * @template T
 */
export function DropEvent() { }
if (false) {
    /** @type {?} */
    DropEvent.prototype.dropData;
}
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.renderer = renderer;
        this.scrollContainer = scrollContainer;
        /**
         * Called when a draggable element starts overlapping the element
         */
        this.dragEnter = new EventEmitter();
        /**
         * Called when a draggable element stops overlapping the element
         */
        this.dragLeave = new EventEmitter();
        /**
         * Called when a draggable element is moved over the element
         */
        this.dragOver = new EventEmitter();
        /**
         * Called when a draggable element is dropped on this element
         */
        this.drop = new EventEmitter(); // tslint:disable-line no-output-named-after-standard-event
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe((/**
         * @param {?} drag$
         * @return {?}
         */
        function (drag$) {
            addClass(_this.renderer, _this.element, _this.dragActiveClass);
            /** @type {?} */
            var droppableElement = {
                updateCache: true,
            };
            /** @type {?} */
            var deregisterScrollListener = _this.renderer.listen(_this.scrollContainer
                ? _this.scrollContainer.elementRef.nativeElement
                : 'window', 'scroll', (/**
             * @return {?}
             */
            function () {
                droppableElement.updateCache = true;
            }));
            /** @type {?} */
            var currentDragDropData;
            /** @type {?} */
            var overlaps$ = drag$.pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData;
                currentDragDropData = dropData;
                if (droppableElement.updateCache) {
                    droppableElement.rect = _this.element.nativeElement.getBoundingClientRect();
                    if (_this.scrollContainer) {
                        droppableElement.scrollContainerRect = _this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                    }
                    droppableElement.updateCache = false;
                }
                /** @type {?} */
                var isWithinElement = isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.rect)));
                if (droppableElement.scrollContainerRect) {
                    return (isWithinElement &&
                        isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.scrollContainerRect))));
                }
                else {
                    return isWithinElement;
                }
            })));
            /** @type {?} */
            var overlapsChanged$ = overlaps$.pipe(distinctUntilChanged());
            /** @type {?} */
            var dragOverActive;
            overlapsChanged$
                .pipe(filter((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            function (overlapsNow) { return overlapsNow; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                dragOverActive = true;
                addClass(_this.renderer, _this.element, _this.dragOverClass);
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragEnter.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlaps$.pipe(filter((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            function (overlapsNow) { return overlapsNow; }))).subscribe((/**
             * @return {?}
             */
            function () {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragOver.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlapsChanged$
                .pipe(pairwise(), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), didOverlap = _b[0], overlapsNow = _b[1];
                return didOverlap && !overlapsNow;
            })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                dragOverActive = false;
                removeClass(_this.renderer, _this.element, _this.dragOverClass);
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragLeave.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            drag$.subscribe({
                complete: (/**
                 * @return {?}
                 */
                function () {
                    deregisterScrollListener();
                    removeClass(_this.renderer, _this.element, _this.dragActiveClass);
                    if (dragOverActive) {
                        removeClass(_this.renderer, _this.element, _this.dragOverClass);
                        _this.zone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.drop.next({
                                dropData: currentDragDropData,
                            });
                        }));
                    }
                }),
            });
        }));
    };
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
        }
    };
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DraggableHelper },
        { type: NgZone },
        { type: Renderer2 },
        { type: DraggableScrollContainerDirective, decorators: [{ type: Optional }] }
    ]; };
    DroppableDirective.propDecorators = {
        dragOverClass: [{ type: Input }],
        dragActiveClass: [{ type: Input }],
        dragEnter: [{ type: Output }],
        dragLeave: [{ type: Output }],
        dragOver: [{ type: Output }],
        drop: [{ type: Output }]
    };
DroppableDirective.ɵfac = function DroppableDirective_Factory(t) { return new (t || DroppableDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DraggableHelper), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(DraggableScrollContainerDirective, 8)); };
DroppableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DroppableDirective, selectors: [["", "mwlDroppable", ""]], inputs: { dragOverClass: "dragOverClass", dragActiveClass: "dragActiveClass" }, outputs: { dragEnter: "dragEnter", dragLeave: "dragLeave", dragOver: "dragOver", drop: "drop" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DroppableDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlDroppable]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: DraggableHelper }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.Renderer2 }, { type: DraggableScrollContainerDirective, decorators: [{
                type: Optional
            }] }]; }, { dragEnter: [{
            type: Output
        }], dragLeave: [{
            type: Output
        }], dragOver: [{
            type: Output
        }], drop: [{
            type: Output
        }], dragOverClass: [{
            type: Input
        }], dragActiveClass: [{
            type: Input
        }] }); })();
    return DroppableDirective;
}());
export { DroppableDirective };
if (false) {
    /**
     * Added to the element when an element is dragged over it
     * @type {?}
     */
    DroppableDirective.prototype.dragOverClass;
    /**
     * Added to the element any time a draggable element is being dragged
     * @type {?}
     */
    DroppableDirective.prototype.dragActiveClass;
    /**
     * Called when a draggable element starts overlapping the element
     * @type {?}
     */
    DroppableDirective.prototype.dragEnter;
    /**
     * Called when a draggable element stops overlapping the element
     * @type {?}
     */
    DroppableDirective.prototype.dragLeave;
    /**
     * Called when a draggable element is moved over the element
     * @type {?}
     */
    DroppableDirective.prototype.dragOver;
    /**
     * Called when a draggable element is dropped on this element
     * @type {?}
     */
    DroppableDirective.prototype.drop;
    /** @type {?} */
    DroppableDirective.prototype.currentDragSubscription;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.draggableHelper;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.scrollContainer;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJvcHBhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUVWLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQztBQUNHO0FBQXNCO0FBQ2hCO0FBQ0E7QUFDSjs7QUFITCxTQUFTLDJCQUEyQixDQUNsQyxPQUFlLEVBQ2YsT0FBZSxFQUNmLElBQWdCO0FBQ2YsSUFDRCxPQUFPLENBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJO0FBQ3hCLFFBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLO0FBQ3pCLFFBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHO0FBQ3ZCLFFBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQ3ZCLENBQUM7QUFDSixDQUFDO0FBQ0Q7QUFDRztBQUFXO0FBQWU7QUFBN0IsK0JBRUM7QUFDRDtBQUNZO0FBQ1EsSUFKbEIsNkJBQVk7QUFDZDtBQUVBO0FBR1EsSUFpQ04sNEJBQ1UsT0FBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsSUFBWSxFQUNaLFFBQW1CLEVBQ1AsZUFBa0Q7QUFDdkUsUUFMUyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtBQUFD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LElBQXBCLHVDQUFvRDtBQUN0RDtBQUVDO0FBQ0U7QUFDVztBQUFRLElBQXBCLHVDQUFvRDtBQUN0RDtBQUVDO0FBQ0U7QUFDVztBQUFRLElBQXBCLHNDQUFtRDtBQUNyRDtBQUVDO0FBQ0U7QUFDVztBQUFRLElBQXBCLGtDQUErQztBQUFDO0FBQXFCLElBRXJFLHFEQUFzQztBQUN4QztBQUNPO0FBQ0U7QUFBZ0I7QUFBUSxJQUE3QixxQ0FBd0M7QUFBQztBQUN0QztBQUFpQjtBQUFnQjtBQUN0QyxJQURFLDZDQUF3QztBQUFDO0FBQ3RDO0FBQWlCO0FBQ1Y7QUFBUSxJQURsQixrQ0FBb0I7QUFBQztBQUNsQjtBQUFpQjtBQUNqQjtBQUFRLElBRFgsc0NBQTJCO0FBQUM7QUFDekI7QUFBaUI7QUFBZ0I7QUFBUSxJQUE1Qyw2Q0FBc0U7QUFDMUU7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBOZ1pvbmUsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHBhaXJ3aXNlLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERyYWdnYWJsZUhlbHBlciB9IGZyb20gJy4vZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlcic7XG5pbXBvcnQgeyBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWdnYWJsZS1zY3JvbGwtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWwnO1xuXG5mdW5jdGlvbiBpc0Nvb3JkaW5hdGVXaXRoaW5SZWN0YW5nbGUoXG4gIGNsaWVudFg6IG51bWJlcixcbiAgY2xpZW50WTogbnVtYmVyLFxuICByZWN0OiBDbGllbnRSZWN0XG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBjbGllbnRYID49IHJlY3QubGVmdCAmJlxuICAgIGNsaWVudFggPD0gcmVjdC5yaWdodCAmJlxuICAgIGNsaWVudFkgPj0gcmVjdC50b3AgJiZcbiAgICBjbGllbnRZIDw9IHJlY3QuYm90dG9tXG4gICk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcEV2ZW50PFQgPSBhbnk+IHtcbiAgZHJvcERhdGE6IFQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcm9wcGFibGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQWRkZWQgdG8gdGhlIGVsZW1lbnQgd2hlbiBhbiBlbGVtZW50IGlzIGRyYWdnZWQgb3ZlciBpdFxuICAgKi9cbiAgQElucHV0KCkgZHJhZ092ZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGRlZCB0byB0aGUgZWxlbWVudCBhbnkgdGltZSBhIGRyYWdnYWJsZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWRcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdBY3RpdmVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IHN0YXJ0cyBvdmVybGFwcGluZyB0aGUgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IHN0b3BzIG92ZXJsYXBwaW5nIHRoZSBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgbW92ZWQgb3ZlciB0aGUgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgZHJvcHBlZCBvbiB0aGlzIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRXZlbnQ+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tb3V0cHV0LW5hbWVkLWFmdGVyLXN0YW5kYXJkLWV2ZW50XG5cbiAgY3VycmVudERyYWdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgZHJhZ2dhYmxlSGVscGVyOiBEcmFnZ2FibGVIZWxwZXIsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgc2Nyb2xsQ29udGFpbmVyOiBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VycmVudERyYWdTdWJzY3JpcHRpb24gPSB0aGlzLmRyYWdnYWJsZUhlbHBlci5jdXJyZW50RHJhZy5zdWJzY3JpYmUoXG4gICAgICAoZHJhZyQpID0+IHtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdBY3RpdmVDbGFzcyk7XG4gICAgICAgIGNvbnN0IGRyb3BwYWJsZUVsZW1lbnQ6IHtcbiAgICAgICAgICByZWN0PzogQ2xpZW50UmVjdDtcbiAgICAgICAgICB1cGRhdGVDYWNoZTogYm9vbGVhbjtcbiAgICAgICAgICBzY3JvbGxDb250YWluZXJSZWN0PzogQ2xpZW50UmVjdDtcbiAgICAgICAgfSA9IHtcbiAgICAgICAgICB1cGRhdGVDYWNoZTogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkZXJlZ2lzdGVyU2Nyb2xsTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lclxuICAgICAgICAgICAgPyB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgIDogJ3dpbmRvdycsXG4gICAgICAgICAgJ3Njcm9sbCcsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC51cGRhdGVDYWNoZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBjdXJyZW50RHJhZ0Ryb3BEYXRhOiBhbnk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXBzJCA9IGRyYWckLnBpcGUoXG4gICAgICAgICAgbWFwKCh7IGNsaWVudFgsIGNsaWVudFksIGRyb3BEYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnREcmFnRHJvcERhdGEgPSBkcm9wRGF0YTtcbiAgICAgICAgICAgIGlmIChkcm9wcGFibGVFbGVtZW50LnVwZGF0ZUNhY2hlKSB7XG4gICAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQucmVjdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnNjcm9sbENvbnRhaW5lclJlY3QgPSB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC51cGRhdGVDYWNoZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNXaXRoaW5FbGVtZW50ID0gaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnJlY3QgYXMgQ2xpZW50UmVjdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkcm9wcGFibGVFbGVtZW50LnNjcm9sbENvbnRhaW5lclJlY3QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBpc1dpdGhpbkVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICBpc0Nvb3JkaW5hdGVXaXRoaW5SZWN0YW5nbGUoXG4gICAgICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQuc2Nyb2xsQ29udGFpbmVyUmVjdCBhcyBDbGllbnRSZWN0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzV2l0aGluRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXBzQ2hhbmdlZCQgPSBvdmVybGFwcyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgICAgICBsZXQgZHJhZ092ZXJBY3RpdmU6IGJvb2xlYW47IC8vIFRPRE8gLSBzZWUgaWYgdGhlcmUncyBhIHdheSBvZiBkb2luZyB0aGlzIHZpYSByeGpzXG5cbiAgICAgICAgb3ZlcmxhcHNDaGFuZ2VkJFxuICAgICAgICAgIC5waXBlKGZpbHRlcigob3ZlcmxhcHNOb3cpID0+IG92ZXJsYXBzTm93KSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGRyYWdPdmVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZENsYXNzKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgdGhpcy5kcmFnT3ZlckNsYXNzKTtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRyYWdFbnRlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBvdmVybGFwcyQucGlwZShmaWx0ZXIoKG92ZXJsYXBzTm93KSA9PiBvdmVybGFwc05vdykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYWdPdmVyLm5leHQoe1xuICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvdmVybGFwc0NoYW5nZWQkXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBwYWlyd2lzZSgpLFxuICAgICAgICAgICAgZmlsdGVyKChbZGlkT3ZlcmxhcCwgb3ZlcmxhcHNOb3ddKSA9PiBkaWRPdmVybGFwICYmICFvdmVybGFwc05vdylcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBkcmFnT3ZlckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdPdmVyQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlLm5leHQoe1xuICAgICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRyYWckLnN1YnNjcmliZSh7XG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICBpZiAoZHJhZ092ZXJBY3RpdmUpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdPdmVyQ2xhc3MpO1xuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3AubmV4dCh7XG4gICAgICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnREcmFnU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmN1cnJlbnREcmFnU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=