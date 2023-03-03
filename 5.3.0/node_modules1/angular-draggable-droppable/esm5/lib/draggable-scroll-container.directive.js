/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, } from '@angular/core';
/**
 * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
 * ```html
 * <div style="overflow: scroll" mwlDraggableScrollContainer>
 * <div mwlDraggable>Drag me!</div>
 * </div>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
var DraggableScrollContainerDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function DraggableScrollContainerDirective(elementRef) {
        this.elementRef = elementRef;
        /**
         * Trigger the DragStart after a long touch in scrollable container when true
         * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
         */
        this.activeLongPressDrag = false;
        /**
         * Configuration of a long touch
         * Duration in ms of a long touch before activating DragStart
         * Delta of the
         * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
         */
        this.longPressConfig = { duration: 300, delta: 30 };
    }
    /** @nocollapse */
    DraggableScrollContainerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DraggableScrollContainerDirective.propDecorators = {
        activeLongPressDrag: [{ type: Input }],
        longPressConfig: [{ type: Input }]
    };
DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(t) { return new (t || DraggableScrollContainerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DraggableScrollContainerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DraggableScrollContainerDirective, selectors: [["", "mwlDraggableScrollContainer", ""]], inputs: { activeLongPressDrag: "activeLongPressDrag", longPressConfig: "longPressConfig" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DraggableScrollContainerDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlDraggableScrollContainer]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { activeLongPressDrag: [{
            type: Input
        }], longPressConfig: [{
            type: Input
        }] }); })();
    return DraggableScrollContainerDirective;
}());
export { DraggableScrollContainerDirective };
if (false) {
    /**
     * Trigger the DragStart after a long touch in scrollable container when true
     * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
     * @type {?}
     */
    DraggableScrollContainerDirective.prototype.activeLongPressDrag;
    /**
     * Configuration of a long touch
     * Duration in ms of a long touch before activating DragStart
     * Delta of the
     * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
     * @type {?}
     */
    DraggableScrollContainerDirective.prototype.longPressConfig;
    /** @type {?} */
    DraggableScrollContainerDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlL2xpYi9kcmFnZ2FibGUtc2Nyb2xsLWNvbnRhaW5lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQUN2QjtBQUNHO0FBQ29IO0FBQzdHO0FBRVY7QUFBb0M7QUFFcEM7QUFDQzs7QUFDRDtBQUdRLElBZU47QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLDJDQUFtQixVQUFtQztBQUFJLFFBQXZDLGVBQVUsR0FBVixVQUFVLENBQXlCO0FBQUM7QUFFbkQ7QUFBc0Y7QUFBdUk7QUFBWSxRQWZwTyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7QUFDaEQ7QUFFSztBQUNNO0FBQ007QUFDTTtBQUVBO0FBQVksUUFBeEIsb0JBQWUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzFELElBSTJELENBQUMsQUFsQm5EO0FBQUM7OENBSFQsU0FBUyxTQUFDLGhFQUdzQjtRQUYvQixRQUFRLEVBQUUsbEJBSTRDLGdCQXBCdEQsVUFBVTtBQUNYO1VBZTBDLG1CQUMxQyw3QkFmQztBQUtELHNDQWdCRSxLQUFLO0FBQUssa0NBUVYsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7b0JBQU07QUFBQyxJQU1uQix3Q0FBQztBQUNBLENBREEsQUF0QkQsSUFzQkM7QUFDRCxTQXBCYSxpQ0FBaUM7QUFDN0M7QUFDTztBQUFRO0FBQ0U7QUFFSjtBQUFpQjtBQUFRLElBQXJDLGdFQUE4QztBQUNoRDtBQUVDO0FBQ0U7QUFDRTtBQUNFO0FBRUo7QUFBaUI7QUFBUSxJQUExQiw0REFBd0Q7QUFDMUQ7QUFHQyxJQUNhLHVEQUEwQztBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJZiB0aGUgd2luZG93IGlzbid0IHNjcm9sbGFibGUsIHRoZW4gcGxhY2UgdGhpcyBvbiB0aGUgc2Nyb2xsYWJsZSBjb250YWluZXIgdGhhdCBkcmFnZ2FibGUgZWxlbWVudHMgYXJlIGluc2lkZS4gZS5nLlxuICogYGBgaHRtbFxuICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3c6IHNjcm9sbFwiIG13bERyYWdnYWJsZVNjcm9sbENvbnRhaW5lcj5cbiAgICA8ZGl2IG13bERyYWdnYWJsZT5EcmFnIG1lITwvZGl2PlxuICA8L2Rpdj5cbiAgYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcmFnZ2FibGVTY3JvbGxDb250YWluZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIERyYWdTdGFydCBhZnRlciBhIGxvbmcgdG91Y2ggaW4gc2Nyb2xsYWJsZSBjb250YWluZXIgd2hlbiB0cnVlXG4gICAqIEBkZXByZWNhdGVkIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NSAodXNlIFt0b3VjaFN0YXJ0TG9uZ1ByZXNzXT1cIntkZWxheTogMzAwLCBkZWx0YTogMzB9XCIgb24gdGhlIG13bERyYWdnYWJsZSBlbGVtZW50IGluc3RlYWQpXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVMb25nUHJlc3NEcmFnOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gb2YgYSBsb25nIHRvdWNoXG4gICAqIER1cmF0aW9uIGluIG1zIG9mIGEgbG9uZyB0b3VjaCBiZWZvcmUgYWN0aXZhdGluZyBEcmFnU3RhcnRcbiAgICogRGVsdGEgb2YgdGhlXG4gICAqIEBkZXByZWNhdGVkIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NSAodXNlIFt0b3VjaFN0YXJ0TG9uZ1ByZXNzXT1cIntkZWxheTogMzAwLCBkZWx0YTogMzB9XCIgb24gdGhlIG13bERyYWdnYWJsZSBlbGVtZW50IGluc3RlYWQpXG4gICAqL1xuICBASW5wdXQoKSBsb25nUHJlc3NDb25maWcgPSB7IGR1cmF0aW9uOiAzMDAsIGRlbHRhOiAzMCB9O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHt9XG59XG4iXX0=