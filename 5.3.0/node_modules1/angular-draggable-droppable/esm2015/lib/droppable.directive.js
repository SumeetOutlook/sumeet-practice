/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DroppableDirective {
    /**
     * @param {?} element
     * @param {?} draggableHelper
     * @param {?} zone
     * @param {?} renderer
     * @param {?} scrollContainer
     */
    constructor(element, draggableHelper, zone, renderer, scrollContainer) {
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
    ngOnInit() {
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe((/**
         * @param {?} drag$
         * @return {?}
         */
        (drag$) => {
            addClass(this.renderer, this.element, this.dragActiveClass);
            /** @type {?} */
            const droppableElement = {
                updateCache: true,
            };
            /** @type {?} */
            const deregisterScrollListener = this.renderer.listen(this.scrollContainer
                ? this.scrollContainer.elementRef.nativeElement
                : 'window', 'scroll', (/**
             * @return {?}
             */
            () => {
                droppableElement.updateCache = true;
            }));
            /** @type {?} */
            let currentDragDropData;
            /** @type {?} */
            const overlaps$ = drag$.pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ clientX, clientY, dropData }) => {
                currentDragDropData = dropData;
                if (droppableElement.updateCache) {
                    droppableElement.rect = this.element.nativeElement.getBoundingClientRect();
                    if (this.scrollContainer) {
                        droppableElement.scrollContainerRect = this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                    }
                    droppableElement.updateCache = false;
                }
                /** @type {?} */
                const isWithinElement = isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.rect)));
                if (droppableElement.scrollContainerRect) {
                    return (isWithinElement &&
                        isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.scrollContainerRect))));
                }
                else {
                    return isWithinElement;
                }
            })));
            /** @type {?} */
            const overlapsChanged$ = overlaps$.pipe(distinctUntilChanged());
            /** @type {?} */
            let dragOverActive;
            overlapsChanged$
                .pipe(filter((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            (overlapsNow) => overlapsNow)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                dragOverActive = true;
                addClass(this.renderer, this.element, this.dragOverClass);
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragEnter.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlaps$.pipe(filter((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            (overlapsNow) => overlapsNow))).subscribe((/**
             * @return {?}
             */
            () => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragOver.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlapsChanged$
                .pipe(pairwise(), filter((/**
             * @param {?} __0
             * @return {?}
             */
            ([didOverlap, overlapsNow]) => didOverlap && !overlapsNow)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                dragOverActive = false;
                removeClass(this.renderer, this.element, this.dragOverClass);
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragLeave.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            drag$.subscribe({
                complete: (/**
                 * @return {?}
                 */
                () => {
                    deregisterScrollListener();
                    removeClass(this.renderer, this.element, this.dragActiveClass);
                    if (dragOverActive) {
                        removeClass(this.renderer, this.element, this.dragOverClass);
                        this.zone.run((/**
                         * @return {?}
                         */
                        () => {
                            this.drop.next({
                                dropData: currentDragDropData,
                            });
                        }));
                    }
                }),
            });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
        }
    }
}
DroppableDirective.ɵfac = function DroppableDirective_Factory(t) { return new (t || DroppableDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DraggableHelper), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(DraggableScrollContainerDirective, 8)); };
DroppableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DroppableDirective, selectors: [["", "mwlDroppable", ""]], inputs: { dragOverClass: "dragOverClass", dragActiveClass: "dragActiveClass" }, outputs: { dragEnter: "dragEnter", dragLeave: "dragLeave", dragOver: "dragOver", drop: "drop" } });
/** @nocollapse */
DroppableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DraggableHelper },
    { type: NgZone },
    { type: Renderer2 },
    { type: DraggableScrollContainerDirective, decorators: [{ type: Optional }] }
];
DroppableDirective.propDecorators = {
    dragOverClass: [{ type: Input }],
    dragActiveClass: [{ type: Input }],
    dragEnter: [{ type: Output }],
    dragLeave: [{ type: Output }],
    dragOver: [{ type: Output }],
    drop: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJvcHBhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9DO0FBQ0c7QUFBc0I7QUFDaEI7QUFDQTtBQUNKOztBQUhMLFNBQVMsMkJBQTJCLENBQ2xDLE9BQWUsRUFDZixPQUFlLEVBQ2YsSUFBZ0I7QUFDZixJQUNELE9BQU8sQ0FDTCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUk7QUFDeEIsUUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUs7QUFDekIsUUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUc7QUFDdkIsUUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FDdkIsQ0FBQztBQUNKLENBQUM7QUFDRDtBQUNHO0FBQVc7QUFBZTtBQUE3QiwrQkFFQztBQUNEO0FBQ1k7QUFDUSxJQUpsQiw2QkFBWTtBQUNkO0FBS0EsTUFBTSxPQUFPLGtCQUFrQjtBQUFHO0FBQVE7QUFDckM7QUFDNEI7QUFBdUI7QUFFeEM7QUFHUDtBQUFRLElBMEJmLFlBQ1UsT0FBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsSUFBWSxFQUNa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QUFFQztBQUNFO0FBQ1c7QUFBUSxJQUFwQix1Q0FBb0Q7QUFDdEQ7QUFFQztBQUNFO0FBQ1c7QUFBUSxJQUFwQixzQ0FBbUQ7QUFDckQ7QUFFQztBQUNFO0FBQ1c7QUFBUSxJQUFwQixrQ0FBK0M7QUFBQztBQUFxQixJQUVyRSxxREFBc0M7QUFDeEM7QUFDTztBQUNFO0FBQWdCO0FBQVEsSUFBN0IscUNBQXdDO0FBQUM7QUFDdEM7QUFBaUI7QUFBZ0I7QUFDdEMsSUFERSw2Q0FBd0M7QUFBQztBQUN0QztBQUFpQjtBQUNWO0FBQVEsSUFEbEIsa0NBQW9CO0FBQUM7QUFDbEI7QUFBaUI7QUFDakI7QUFBUSxJQURYLHNDQUEyQjtBQUFDO0FBQ3pCO0FBQWlCO0FBQWdCO0FBQVEsSUFBNUMsNkNBQXNFO0FBQzFFO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgTmdab25lLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBwYWlyd2lzZSwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVIZWxwZXIgfSBmcm9tICcuL2RyYWdnYWJsZS1oZWxwZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnZ2FibGUtc2Nyb2xsLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlsJztcblxuZnVuY3Rpb24gaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICBjbGllbnRYOiBudW1iZXIsXG4gIGNsaWVudFk6IG51bWJlcixcbiAgcmVjdDogQ2xpZW50UmVjdFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgY2xpZW50WCA+PSByZWN0LmxlZnQgJiZcbiAgICBjbGllbnRYIDw9IHJlY3QucmlnaHQgJiZcbiAgICBjbGllbnRZID49IHJlY3QudG9wICYmXG4gICAgY2xpZW50WSA8PSByZWN0LmJvdHRvbVxuICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3BFdmVudDxUID0gYW55PiB7XG4gIGRyb3BEYXRhOiBUO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsRHJvcHBhYmxlXScsXG59KVxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEFkZGVkIHRvIHRoZSBlbGVtZW50IHdoZW4gYW4gZWxlbWVudCBpcyBkcmFnZ2VkIG92ZXIgaXRcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdPdmVyQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogQWRkZWQgdG8gdGhlIGVsZW1lbnQgYW55IHRpbWUgYSBkcmFnZ2FibGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkXG4gICAqL1xuICBASW5wdXQoKSBkcmFnQWN0aXZlQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBzdGFydHMgb3ZlcmxhcHBpbmcgdGhlIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBzdG9wcyBvdmVybGFwcGluZyB0aGUgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IGlzIG1vdmVkIG92ZXIgdGhlIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IGlzIGRyb3BwZWQgb24gdGhpcyBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLW91dHB1dC1uYW1lZC1hZnRlci1zdGFuZGFyZC1ldmVudFxuXG4gIGN1cnJlbnREcmFnU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGRyYWdnYWJsZUhlbHBlcjogRHJhZ2dhYmxlSGVscGVyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHNjcm9sbENvbnRhaW5lcjogRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnREcmFnU3Vic2NyaXB0aW9uID0gdGhpcy5kcmFnZ2FibGVIZWxwZXIuY3VycmVudERyYWcuc3Vic2NyaWJlKFxuICAgICAgKGRyYWckKSA9PiB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgdGhpcy5kcmFnQWN0aXZlQ2xhc3MpO1xuICAgICAgICBjb25zdCBkcm9wcGFibGVFbGVtZW50OiB7XG4gICAgICAgICAgcmVjdD86IENsaWVudFJlY3Q7XG4gICAgICAgICAgdXBkYXRlQ2FjaGU6IGJvb2xlYW47XG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyUmVjdD86IENsaWVudFJlY3Q7XG4gICAgICAgIH0gPSB7XG4gICAgICAgICAgdXBkYXRlQ2FjaGU6IHRydWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVyZWdpc3RlclNjcm9sbExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXJcbiAgICAgICAgICAgID8gdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgICA6ICd3aW5kb3cnLFxuICAgICAgICAgICdzY3JvbGwnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQudXBkYXRlQ2FjaGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY3VycmVudERyYWdEcm9wRGF0YTogYW55O1xuICAgICAgICBjb25zdCBvdmVybGFwcyQgPSBkcmFnJC5waXBlKFxuICAgICAgICAgIG1hcCgoeyBjbGllbnRYLCBjbGllbnRZLCBkcm9wRGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50RHJhZ0Ryb3BEYXRhID0gZHJvcERhdGE7XG4gICAgICAgICAgICBpZiAoZHJvcHBhYmxlRWxlbWVudC51cGRhdGVDYWNoZSkge1xuICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnJlY3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC5zY3JvbGxDb250YWluZXJSZWN0ID0gdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQudXBkYXRlQ2FjaGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzV2l0aGluRWxlbWVudCA9IGlzQ29vcmRpbmF0ZVdpdGhpblJlY3RhbmdsZShcbiAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC5yZWN0IGFzIENsaWVudFJlY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZHJvcHBhYmxlRWxlbWVudC5zY3JvbGxDb250YWluZXJSZWN0KSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgaXNXaXRoaW5FbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICAgICAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnNjcm9sbENvbnRhaW5lclJlY3QgYXMgQ2xpZW50UmVjdFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc1dpdGhpbkVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBvdmVybGFwc0NoYW5nZWQkID0gb3ZlcmxhcHMkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgICAgICAgbGV0IGRyYWdPdmVyQWN0aXZlOiBib29sZWFuOyAvLyBUT0RPIC0gc2VlIGlmIHRoZXJlJ3MgYSB3YXkgb2YgZG9pbmcgdGhpcyB2aWEgcnhqc1xuXG4gICAgICAgIG92ZXJsYXBzQ2hhbmdlZCRcbiAgICAgICAgICAucGlwZShmaWx0ZXIoKG92ZXJsYXBzTm93KSA9PiBvdmVybGFwc05vdykpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBkcmFnT3ZlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBhZGRDbGFzcyh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsIHRoaXMuZHJhZ092ZXJDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnRW50ZXIubmV4dCh7XG4gICAgICAgICAgICAgICAgZHJvcERhdGE6IGN1cnJlbnREcmFnRHJvcERhdGEsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgb3ZlcmxhcHMkLnBpcGUoZmlsdGVyKChvdmVybGFwc05vdykgPT4gb3ZlcmxhcHNOb3cpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmFnT3Zlci5uZXh0KHtcbiAgICAgICAgICAgICAgZHJvcERhdGE6IGN1cnJlbnREcmFnRHJvcERhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3ZlcmxhcHNDaGFuZ2VkJFxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgcGFpcndpc2UoKSxcbiAgICAgICAgICAgIGZpbHRlcigoW2RpZE92ZXJsYXAsIG92ZXJsYXBzTm93XSkgPT4gZGlkT3ZlcmxhcCAmJiAhb3ZlcmxhcHNOb3cpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgZHJhZ092ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgdGhpcy5kcmFnT3ZlckNsYXNzKTtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRyYWdMZWF2ZS5uZXh0KHtcbiAgICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkcmFnJC5zdWJzY3JpYmUoe1xuICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBkZXJlZ2lzdGVyU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgdGhpcy5kcmFnQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgaWYgKGRyYWdPdmVyQWN0aXZlKSB7XG4gICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgdGhpcy5kcmFnT3ZlckNsYXNzKTtcbiAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wLm5leHQoe1xuICAgICAgICAgICAgICAgICAgZHJvcERhdGE6IGN1cnJlbnREcmFnRHJvcERhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50RHJhZ1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50RHJhZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19