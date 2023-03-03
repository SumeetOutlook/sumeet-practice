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
export class DraggableScrollContainerDirective {
    /**
     * @hidden
     * @param {?} elementRef
     */
    constructor(elementRef) {
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
}
DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(t) { return new (t || DraggableScrollContainerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DraggableScrollContainerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DraggableScrollContainerDirective, selectors: [["", "mwlDraggableScrollContainer", ""]], inputs: { activeLongPressDrag: "activeLongPressDrag", longPressConfig: "longPressConfig" } });
/** @nocollapse */
DraggableScrollContainerDirective.ctorParameters = () => [
    { type: ElementRef }
];
DraggableScrollContainerDirective.propDecorators = {
    activeLongPressDrag: [{ type: Input }],
    longPressConfig: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlL2xpYi9kcmFnZ2FibGUtc2Nyb2xsLWNvbnRhaW5lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQUN2QjtBQUNHO0FBQ29IO0FBQzdHO0FBRVY7QUFBb0M7QUFFcEM7QUFDQzs7QUFJRCxNQUFNLE9BQU8saUNBQWlDO0FBQzlDO0FBQ0U7QUFBZTtBQUE2QjtBQUFRLElBZ0JwRCxZQUFtQixVQUFtQztBQUFJLFFBQXZDLGVBQVUsR0FBVixVQUFVLENBQXlCO0FBQUM7QUFFbkQ7QUFBc0Y7QUFBdUk7QUFBWSxRQWZwTyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7QUFDaEQ7QUFFSztBQUNNO0FBQ007QUFDTTtBQUVBO0FBQVksUUFBeEIsb0JBQWUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzFELElBSTJELENBQUM7QUFDNUQ7NkRBdEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsK0JBQStCLGVBQzFDO2lRQUNJO0FBQUM7QUFBbUI7QUFFSSxZQXBCM0IsVUFBVTtBQUNYO0FBQUc7QUFJVyxrQ0FrQlosS0FBSztBQUFLLDhCQVFWLEtBQUs7QUFBSTs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQWE7QUFBUTtBQUtIO0FBRW9FO0FBQWlCO0FBQVEsSUFmNUgsZ0VBQThDO0FBQ2hEO0FBRUM7QUFDRTtBQUNFO0FBQ0U7QUFFSjtBQUFpQjtBQUFRLElBQTFCLDREQUF3RDtBQUMxRDtBQUdDLElBQ2EsdURBQTBDO0FBQUM7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIElmIHRoZSB3aW5kb3cgaXNuJ3Qgc2Nyb2xsYWJsZSwgdGhlbiBwbGFjZSB0aGlzIG9uIHRoZSBzY3JvbGxhYmxlIGNvbnRhaW5lciB0aGF0IGRyYWdnYWJsZSBlbGVtZW50cyBhcmUgaW5zaWRlLiBlLmcuXG4gKiBgYGBodG1sXG4gIDxkaXYgc3R5bGU9XCJvdmVyZmxvdzogc2Nyb2xsXCIgbXdsRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyPlxuICAgIDxkaXYgbXdsRHJhZ2dhYmxlPkRyYWcgbWUhPC9kaXY+XG4gIDwvZGl2PlxuICBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bERyYWdnYWJsZVNjcm9sbENvbnRhaW5lcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUge1xuICAvKipcbiAgICogVHJpZ2dlciB0aGUgRHJhZ1N0YXJ0IGFmdGVyIGEgbG9uZyB0b3VjaCBpbiBzY3JvbGxhYmxlIGNvbnRhaW5lciB3aGVuIHRydWVcbiAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGluIHY1ICh1c2UgW3RvdWNoU3RhcnRMb25nUHJlc3NdPVwie2RlbGF5OiAzMDAsIGRlbHRhOiAzMH1cIiBvbiB0aGUgbXdsRHJhZ2dhYmxlIGVsZW1lbnQgaW5zdGVhZClcbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZUxvbmdQcmVzc0RyYWc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBvZiBhIGxvbmcgdG91Y2hcbiAgICogRHVyYXRpb24gaW4gbXMgb2YgYSBsb25nIHRvdWNoIGJlZm9yZSBhY3RpdmF0aW5nIERyYWdTdGFydFxuICAgKiBEZWx0YSBvZiB0aGVcbiAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGluIHY1ICh1c2UgW3RvdWNoU3RhcnRMb25nUHJlc3NdPVwie2RlbGF5OiAzMDAsIGRlbHRhOiAzMH1cIiBvbiB0aGUgbXdsRHJhZ2dhYmxlIGVsZW1lbnQgaW5zdGVhZClcbiAgICovXG4gIEBJbnB1dCgpIGxvbmdQcmVzc0NvbmZpZyA9IHsgZHVyYXRpb246IDMwMCwgZGVsdGE6IDMwIH07XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cbn1cbiJdfQ==