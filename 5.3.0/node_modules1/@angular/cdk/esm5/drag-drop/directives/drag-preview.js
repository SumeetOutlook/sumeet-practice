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
 */
import * as ɵngcc0 from '@angular/core';
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: Input }]
    };
CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) { return new (t || CdkDragPreview)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkDragPreview.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkDragPreview, selectors: [["ng-template", "cdkDragPreview", ""]], inputs: { data: "data" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkDragPreview, [{
        type: Directive,
        args: [{
                selector: 'ng-template[cdkDragPreview]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, { data: [{
            type: Input
        }] }); })();
    return CdkDragPreview;
}());
export { CdkDragPreview };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1wcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9kaXJlY3RpdmVzL2RyYWctcHJldmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBQ0g7QUFDcUMsSUFLbkMsd0JBQW1CLFdBQTJCO0FBQUksUUFBL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0FBQUMsSUFBRSxDQUFDLEFBSDNDO0FBQUM7MkJBSFQsU0FBUyxTQUFDLDdDQUdzQjtRQUYvQixRQUFRLEVBQUUsbEJBR3lDLGdCQVZsQyxXQUFXO0FBQUc7T0FPUSxrQkFDeEMsekJBUjBDO0FBRzVCLHVCQVFaLEtBQUs7QUFBSTs7Ozs7Ozs7OztvQkFBTTtBQUFDLElBRW5CLHFCQUFDO0FBQ0EsQ0FEQSxBQVBELElBT0M7QUFDRCxTQUxhLGNBQWM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIGEgdGVtcGxhdGUgZm9yIHRoZSBwcmV2aWV3XG4gKiBvZiBhIENka0RyYWcgd2hlbiBpdCBpcyBiZWluZyBkcmFnZ2VkLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtjZGtEcmFnUHJldmlld10nXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdQcmV2aWV3PFQgPSBhbnk+IHtcbiAgLyoqIENvbnRleHQgZGF0YSB0byBiZSBhZGRlZCB0byB0aGUgcHJldmlldyB0ZW1wbGF0ZSBpbnN0YW5jZS4gKi9cbiAgQElucHV0KCkgZGF0YTogVDtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxUPikge31cbn1cbiJdfQ==