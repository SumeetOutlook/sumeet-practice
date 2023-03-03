import { __decorate } from "tslib";
import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './pager.component';

function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) { }
var _c0 = function (a0, a1, a2, a3, a4) { return { rowCount: a0, pageSize: a1, selectedCount: a2, curPage: a3, offset: a4 }; };
function DataTableFooterComponent_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(2, _c0, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
} }
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
} }
function DataTableFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.selectedMessage);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
} }
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-pager", 6);
    ɵngcc0.ɵɵlistener("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.page.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
} }
var _c1 = function (a0) { return { "selected-count": a0 }; };
var DataTableFooterComponent = /** @class */ (function () {
    function DataTableFooterComponent() {
        this.selectedCount = 0;
        this.page = new EventEmitter();
    }
    Object.defineProperty(DataTableFooterComponent.prototype, "isVisible", {
        get: function () {
            return this.rowCount / this.pageSize > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableFooterComponent.prototype, "curPage", {
        get: function () {
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "footerHeight", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "rowCount", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "pageSize", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "offset", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "pagerNextIcon", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "totalMessage", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "footerTemplate", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "selectedCount", void 0);
    __decorate([
        Input()
    ], DataTableFooterComponent.prototype, "selectedMessage", void 0);
    __decorate([
        Output()
    ], DataTableFooterComponent.prototype, "page", void 0);
DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) { return new (t || DataTableFooterComponent)(); };
DataTableFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableFooterComponent, selectors: [["datatable-footer"]], hostAttrs: [1, "datatable-footer"], inputs: { selectedCount: "selectedCount", footerHeight: "footerHeight", rowCount: "rowCount", pageSize: "pageSize", offset: "offset", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", totalMessage: "totalMessage", footerTemplate: "footerTemplate", selectedMessage: "selectedMessage" }, outputs: { page: "page" }, decls: 4, vars: 8, consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]], template: function DataTableFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);
        ɵngcc0.ɵɵtemplate(2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
        ɵngcc0.ɵɵtemplate(3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("height", ctx.footerHeight, "px");
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c1, ctx.selectedMessage));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.footerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.DataTablePagerComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableFooterComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-footer',
                template: "\n    <div\n      class=\"datatable-footer-inner\"\n      [ngClass]=\"{ 'selected-count': selectedMessage }\"\n      [style.height.px]=\"footerHeight\"\n    >\n      <ng-template\n        *ngIf=\"footerTemplate\"\n        [ngTemplateOutlet]=\"footerTemplate.template\"\n        [ngTemplateOutletContext]=\"{\n          rowCount: rowCount,\n          pageSize: pageSize,\n          selectedCount: selectedCount,\n          curPage: curPage,\n          offset: offset\n        }\"\n      >\n      </ng-template>\n      <div class=\"page-count\" *ngIf=\"!footerTemplate\">\n        <span *ngIf=\"selectedMessage\"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>\n        {{ rowCount?.toLocaleString() }} {{ totalMessage }}\n      </div>\n      <datatable-pager\n        *ngIf=\"!footerTemplate\"\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\"\n      >\n      </datatable-pager>\n    </div>\n  ",
                host: {
                    class: 'datatable-footer'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { selectedCount: [{
            type: Input
        }], page: [{
            type: Output
        }], footerHeight: [{
            type: Input
        }], rowCount: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], offset: [{
            type: Input
        }], pagerLeftArrowIcon: [{
            type: Input
        }], pagerRightArrowIcon: [{
            type: Input
        }], pagerPreviousIcon: [{
            type: Input
        }], pagerNextIcon: [{
            type: Input
        }], totalMessage: [{
            type: Input
        }], footerTemplate: [{
            type: Input
        }], selectedMessage: [{
            type: Input
        }] }); })();
    return DataTableFooterComponent;
}());
export { DataTableFooterComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDaEc7QUFDb0IsSUFEcEI7QUFBc0MsUUFZM0Isa0JBQWEsR0FBVyxDQUFDLENBQUM7QUFDckMsUUFFWSxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDekQsSUFRQSxDQUFDO0FBQ0QsSUFSRSxzQkFBSSwrQ0FBUztBQUFJLGFBQWpCO0FBQWMsWUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDN0MsUUFBRSxDQUFDO0FBRUg7QUFDQTtBQUEyQixPQUh4QjtBQUNILElBQ0Usc0JBQUksNkNBQU87QUFBSSxhQUFmO0FBQWMsWUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLFFBQUUsQ0FBQztBQUNGO0FBQ3dCO0FBQTJCLE9BRmpEO0FBQ0gsSUF2Qlc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyxrRUFBcUI7QUFDL0IsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLDhEQUFpQjtBQUMzQixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsOERBQWlCO0FBQzNCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyw0REFBZTtBQUN6QixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsd0VBQTJCO0FBQ3JDLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyx5RUFBNEI7QUFDdEMsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLHVFQUEwQjtBQUNwQyxJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsbUVBQXNCO0FBQ2hDLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyxrRUFBcUI7QUFDL0IsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLG9FQUF5QztBQUVwRCxJQUFXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsbUVBQTBCO0FBQ3BDLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyxxRUFBa0M7QUFFN0MsSUFBWTtBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFDLDBEQUE2QztJQWY1Qyx3QkFBd0Isd0JBNUNwQyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsa0JBQWtCLGNBQzVCLFFBQVE7QUFBRTs7c0RBb0NULGNBQ0QsSUFBSSxFQUFFO0tBQ0osS0FBSyxFQUFFLGtCQUFrQixjQUMxQixjQUNELGVBQWUsRUFBRTtXQUF1QixDQUFDLE1BQU0sVUFDaEQsQ0FBQyxRQUNXLHdCQUF3QixDQXdCcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsK0JBQUM7QUFDQSxDQURBLEFBeEJELElBd0JDO0FBQ0QsU0F6QmEsd0JBQXdCO0FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2Zvb3Rlci5kaXJlY3RpdmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YXRhYmxlLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJkYXRhdGFibGUtZm9vdGVyLWlubmVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ3NlbGVjdGVkLWNvdW50Jzogc2VsZWN0ZWRNZXNzYWdlIH1cIlxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJmb290ZXJIZWlnaHRcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAqbmdJZj1cImZvb3RlclRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyVGVtcGxhdGUudGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICAgIHJvd0NvdW50OiByb3dDb3VudCxcbiAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgICAgc2VsZWN0ZWRDb3VudDogc2VsZWN0ZWRDb3VudCxcbiAgICAgICAgICBjdXJQYWdlOiBjdXJQYWdlLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvdW50XCIgKm5nSWY9XCIhZm9vdGVyVGVtcGxhdGVcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJzZWxlY3RlZE1lc3NhZ2VcIj4ge3sgc2VsZWN0ZWRDb3VudD8udG9Mb2NhbGVTdHJpbmcoKSB9fSB7eyBzZWxlY3RlZE1lc3NhZ2UgfX0gLyA8L3NwYW4+XG4gICAgICAgIHt7IHJvd0NvdW50Py50b0xvY2FsZVN0cmluZygpIH19IHt7IHRvdGFsTWVzc2FnZSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGF0YXRhYmxlLXBhZ2VyXG4gICAgICAgICpuZ0lmPVwiIWZvb3RlclRlbXBsYXRlXCJcbiAgICAgICAgW3BhZ2VyTGVmdEFycm93SWNvbl09XCJwYWdlckxlZnRBcnJvd0ljb25cIlxuICAgICAgICBbcGFnZXJSaWdodEFycm93SWNvbl09XCJwYWdlclJpZ2h0QXJyb3dJY29uXCJcbiAgICAgICAgW3BhZ2VyUHJldmlvdXNJY29uXT1cInBhZ2VyUHJldmlvdXNJY29uXCJcbiAgICAgICAgW3BhZ2VyTmV4dEljb25dPVwicGFnZXJOZXh0SWNvblwiXG4gICAgICAgIFtwYWdlXT1cImN1clBhZ2VcIlxuICAgICAgICBbc2l6ZV09XCJwYWdlU2l6ZVwiXG4gICAgICAgIFtjb3VudF09XCJyb3dDb3VudFwiXG4gICAgICAgIFtoaWRkZW5dPVwiIWlzVmlzaWJsZVwiXG4gICAgICAgIChjaGFuZ2UpPVwicGFnZS5lbWl0KCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9kYXRhdGFibGUtcGFnZXI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1mb290ZXInXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUZvb3RlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGZvb3RlckhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSByb3dDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBvZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgcGFnZXJMZWZ0QXJyb3dJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VyUmlnaHRBcnJvd0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJQcmV2aW91c0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJOZXh0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB0b3RhbE1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZTtcblxuICBASW5wdXQoKSBzZWxlY3RlZENvdW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBzZWxlY3RlZE1lc3NhZ2U6IHN0cmluZyB8IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm93Q291bnQgLyB0aGlzLnBhZ2VTaXplID4gMTtcbiAgfVxuXG4gIGdldCBjdXJQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgMTtcbiAgfVxufVxuIl19