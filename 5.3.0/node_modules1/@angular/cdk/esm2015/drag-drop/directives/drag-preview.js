/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-preview.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, TemplateRef, Input } from '@angular/core';
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
import * as ɵngcc0 from '@angular/core';
export class CdkDragPreview {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) { return new (t || CdkDragPreview)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkDragPreview.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkDragPreview, selectors: [["ng-template", "cdkDragPreview", ""]], inputs: { data: "data" } });
/** @nocollapse */
CdkDragPreview.ctorParameters = () => [
    { type: TemplateRef }
];
CdkDragPreview.propDecorators = {
    data: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkDragPreview, [{
        type: Directive,
        args: [{
                selector: 'ng-template[cdkDragPreview]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, { data: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * Context data to be added to the preview template instance.
     * @type {?}
     */
    CdkDragPreview.prototype.data;
    /** @type {?} */
    CdkDragPreview.prototype.templateRef;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1wcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9kaXJlY3RpdmVzL2RyYWctcHJldmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQ7QUFDRztBQUN1RDtBQUNqQjtBQUUvQjs7QUFHVixNQUFNLE9BQU8sY0FBYztBQUFHO0FBQVE7QUFDVDtBQUFRLElBRW5DLFlBQW1CLFdBQTJCO0FBQUksUUFBL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0FBQUMsSUFBRSxDQUFDO0FBQ3BEOzBDQVBDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsNkJBQTZCLGNBQ3hDO3VKQUNJO0FBQUM7QUFBbUI7QUFDQyxZQVZQLFdBQVc7QUFBRztBQUFHO0FBR2hDLG1CQVFELEtBQUs7QUFBSTs7Ozs7Ozs7b0JBQUU7QUFBQztBQUNQO0FBQVE7QUFFVztBQUFpQjtBQUFRLElBSGxELDhCQUFpQjtBQUNuQjtBQUFxQixJQUFQLHFDQUFrQztBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhIHRlbXBsYXRlIGZvciB0aGUgcHJldmlld1xuICogb2YgYSBDZGtEcmFnIHdoZW4gaXQgaXMgYmVpbmcgZHJhZ2dlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbY2RrRHJhZ1ByZXZpZXddJ1xufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnUHJldmlldzxUID0gYW55PiB7XG4gIC8qKiBDb250ZXh0IGRhdGEgdG8gYmUgYWRkZWQgdG8gdGhlIHByZXZpZXcgdGVtcGxhdGUgaW5zdGFuY2UuICovXG4gIEBJbnB1dCgpIGRhdGE6IFQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8VD4pIHt9XG59XG4iXX0=