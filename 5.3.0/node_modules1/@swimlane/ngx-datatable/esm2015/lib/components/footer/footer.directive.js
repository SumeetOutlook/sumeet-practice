import { __decorate } from "tslib";
import { Input, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DataTableFooterTemplateDirective } from './footer-template.directive';
import * as ɵngcc0 from '@angular/core';
let DatatableFooterDirective = class DatatableFooterDirective {
    get template() {
        return this._templateInput || this._templateQuery;
    }
};
DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) { return new (t || DatatableFooterDirective)(); };
DatatableFooterDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DatatableFooterDirective, selectors: [["ngx-datatable-footer"]], contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, DataTableFooterTemplateDirective, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._templateQuery = _t.first);
    } }, inputs: { footerHeight: "footerHeight", totalMessage: "totalMessage", selectedMessage: "selectedMessage", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", _templateInput: ["template", "_templateInput"] } });
__decorate([
    Input()
], DatatableFooterDirective.prototype, "footerHeight", void 0);
__decorate([
    Input()
], DatatableFooterDirective.prototype, "totalMessage", void 0);
__decorate([
    Input()
], DatatableFooterDirective.prototype, "selectedMessage", void 0);
__decorate([
    Input()
], DatatableFooterDirective.prototype, "pagerLeftArrowIcon", void 0);
__decorate([
    Input()
], DatatableFooterDirective.prototype, "pagerRightArrowIcon", void 0);
__decorate([
    Input()
], DatatableFooterDirective.prototype, "pagerPreviousIcon", void 0);
__decorate([
    Input()
], DatatableFooterDirective.prototype, "pagerNextIcon", void 0);
__decorate([
    Input('template')
], DatatableFooterDirective.prototype, "_templateInput", void 0);
__decorate([
    ContentChild(DataTableFooterTemplateDirective, { read: TemplateRef })
], DatatableFooterDirective.prototype, "_templateQuery", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatatableFooterDirective, [{
        type: Directive,
        args: [{ selector: 'ngx-datatable-footer' }]
    }], null, { footerHeight: [{
            type: Input
        }], totalMessage: [{
            type: Input
        }], selectedMessage: [{
            type: Input
        }], pagerLeftArrowIcon: [{
            type: Input
        }], pagerRightArrowIcon: [{
            type: Input
        }], pagerPreviousIcon: [{
            type: Input
        }], pagerNextIcon: [{
            type: Input
        }], _templateInput: [{
            type: Input,
            args: ['template']
        }], _templateQuery: [{
            type: ContentChild,
            args: [DataTableFooterTemplateDirective, { read: TemplateRef }]
        }] }); })();
export { DatatableFooterDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUcvRSxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtBQUNyQyxJQWNFLElBQUksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7QUFDdEQsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs7Ozs7OztxVUFBQTtBQWpCVTtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDhEQUFxQjtBQUNyQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDhEQUFxQjtBQUNyQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLGlFQUFrQztBQUNsQztBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLG9FQUEyQjtBQUMzQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLHFFQUE0QjtBQUM1QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLG1FQUEwQjtBQUMxQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLCtEQUFzQjtBQUcvQjtBQUFhLElBRFosS0FBSyxDQUFDLFVBQVUsQ0FBQztBQUNwQixnRUFBbUM7QUFHakM7QUFBYSxJQURaLFlBQVksQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUN4RSxnRUFBbUM7QUFidEIsd0JBQXdCLG9CQURwQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUU7S0FBc0IsRUFBRSxDQUFDLElBQ25DO1dBQXdCLENBa0JwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0FuQlksd0JBQXdCO0FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2Zvb3Rlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZ3gtZGF0YXRhYmxlLWZvb3RlcicgfSlcbmV4cG9ydCBjbGFzcyBEYXRhdGFibGVGb290ZXJEaXJlY3RpdmUge1xuICBASW5wdXQoKSBmb290ZXJIZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgdG90YWxNZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdGVkTWVzc2FnZTogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KCkgcGFnZXJMZWZ0QXJyb3dJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VyUmlnaHRBcnJvd0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJQcmV2aW91c0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJOZXh0SWNvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgndGVtcGxhdGUnKVxuICBfdGVtcGxhdGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKERhdGFUYWJsZUZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIF90ZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVJbnB1dCB8fCB0aGlzLl90ZW1wbGF0ZVF1ZXJ5O1xuICB9XG59XG4iXX0=