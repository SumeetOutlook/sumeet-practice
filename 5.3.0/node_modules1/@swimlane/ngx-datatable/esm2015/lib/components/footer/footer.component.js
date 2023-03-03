import { __decorate } from "tslib";
import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './pager.component';

function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2, a3, a4) { return { rowCount: a0, pageSize: a1, selectedCount: a2, curPage: a3, offset: a4 }; };
function DataTableFooterComponent_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(2, _c0, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
} }
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
} }
function DataTableFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.selectedMessage);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
} }
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-pager", 6);
    ɵngcc0.ɵɵlistener("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.page.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
} }
const _c1 = function (a0) { return { "selected-count": a0 }; };
let DataTableFooterComponent = class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new EventEmitter();
    }
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    get curPage() {
        return this.offset + 1;
    }
};
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableFooterComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-footer',
                template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
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
export { DataTableFooterComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDaEcsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7QUFDckMsSUFEQTtBQUFnQixRQVlMLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0FBQ3JDLFFBRVksU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3pELElBUUEsQ0FBQztBQUNELElBUkUsSUFBSSxTQUFTO0FBQUssUUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxPQUFPO0FBQUssUUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3FKQUFBO0FBdkJVO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsOERBQXFCO0FBQ3JCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsMERBQWlCO0FBQ2pCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsMERBQWlCO0FBQ2pCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsd0RBQWU7QUFDZjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLG9FQUEyQjtBQUMzQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLHFFQUE0QjtBQUM1QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLG1FQUEwQjtBQUMxQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLCtEQUFzQjtBQUN0QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDhEQUFxQjtBQUNyQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLGdFQUF5QztBQUV6QztBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLCtEQUEwQjtBQUMxQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLGlFQUFrQztBQUVqQztBQUFhLElBQXRCLE1BQU0sRUFBRTtBQUFDLHNEQUE2QztBQWY1Qyx3QkFBd0Isb0JBNUNwQyxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7U0FBa0IsVUFDNUI7RUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBb0NUO1NBQ0QsSUFBSSxFQUFFLGNBQ0osS0FBSyxFQUFFOztTQUFrQixVQUMxQjtJQUNEOztHQUFlLEVBQUU7SUFBdUIsQ0FBQyxNQUFNLE1BQ2hELENBQUMsSUFDVztBQUF3QixDQXdCcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0F6Qlksd0JBQXdCO0FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2Zvb3Rlci5kaXJlY3RpdmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YXRhYmxlLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJkYXRhdGFibGUtZm9vdGVyLWlubmVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ3NlbGVjdGVkLWNvdW50Jzogc2VsZWN0ZWRNZXNzYWdlIH1cIlxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJmb290ZXJIZWlnaHRcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAqbmdJZj1cImZvb3RlclRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyVGVtcGxhdGUudGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICAgIHJvd0NvdW50OiByb3dDb3VudCxcbiAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgICAgc2VsZWN0ZWRDb3VudDogc2VsZWN0ZWRDb3VudCxcbiAgICAgICAgICBjdXJQYWdlOiBjdXJQYWdlLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvdW50XCIgKm5nSWY9XCIhZm9vdGVyVGVtcGxhdGVcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJzZWxlY3RlZE1lc3NhZ2VcIj4ge3sgc2VsZWN0ZWRDb3VudD8udG9Mb2NhbGVTdHJpbmcoKSB9fSB7eyBzZWxlY3RlZE1lc3NhZ2UgfX0gLyA8L3NwYW4+XG4gICAgICAgIHt7IHJvd0NvdW50Py50b0xvY2FsZVN0cmluZygpIH19IHt7IHRvdGFsTWVzc2FnZSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGF0YXRhYmxlLXBhZ2VyXG4gICAgICAgICpuZ0lmPVwiIWZvb3RlclRlbXBsYXRlXCJcbiAgICAgICAgW3BhZ2VyTGVmdEFycm93SWNvbl09XCJwYWdlckxlZnRBcnJvd0ljb25cIlxuICAgICAgICBbcGFnZXJSaWdodEFycm93SWNvbl09XCJwYWdlclJpZ2h0QXJyb3dJY29uXCJcbiAgICAgICAgW3BhZ2VyUHJldmlvdXNJY29uXT1cInBhZ2VyUHJldmlvdXNJY29uXCJcbiAgICAgICAgW3BhZ2VyTmV4dEljb25dPVwicGFnZXJOZXh0SWNvblwiXG4gICAgICAgIFtwYWdlXT1cImN1clBhZ2VcIlxuICAgICAgICBbc2l6ZV09XCJwYWdlU2l6ZVwiXG4gICAgICAgIFtjb3VudF09XCJyb3dDb3VudFwiXG4gICAgICAgIFtoaWRkZW5dPVwiIWlzVmlzaWJsZVwiXG4gICAgICAgIChjaGFuZ2UpPVwicGFnZS5lbWl0KCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9kYXRhdGFibGUtcGFnZXI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1mb290ZXInXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUZvb3RlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGZvb3RlckhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSByb3dDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBvZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgcGFnZXJMZWZ0QXJyb3dJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VyUmlnaHRBcnJvd0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJQcmV2aW91c0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJOZXh0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB0b3RhbE1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZTtcblxuICBASW5wdXQoKSBzZWxlY3RlZENvdW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBzZWxlY3RlZE1lc3NhZ2U6IHN0cmluZyB8IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm93Q291bnQgLyB0aGlzLnBhZ2VTaXplID4gMTtcbiAgfVxuXG4gIGdldCBjdXJQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgMTtcbiAgfVxufVxuIl19