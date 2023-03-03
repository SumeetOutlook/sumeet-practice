import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DataTablePagerComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r3); const pg_r1 = ctx.$implicit; const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.selectPage(pg_r1.number); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", pg_r1.number === ctx_r0.page);
    ɵngcc0.ɵɵattribute("aria-label", "page " + pg_r1.number);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", pg_r1.text, " ");
} }
let DataTablePagerComponent = class DataTablePagerComponent {
    constructor() {
        this.change = new EventEmitter();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    set size(val) {
        this._size = val;
        this.pages = this.calcPages();
    }
    get size() {
        return this._size;
    }
    set count(val) {
        this._count = val;
        this.pages = this.calcPages();
    }
    get count() {
        return this._count;
    }
    set page(val) {
        this._page = val;
        this.pages = this.calcPages();
    }
    get page() {
        return this._page;
    }
    get totalPages() {
        const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
    }
    canPrevious() {
        return this.page > 1;
    }
    canNext() {
        return this.page < this.totalPages;
    }
    prevPage() {
        this.selectPage(this.page - 1);
    }
    nextPage() {
        this.selectPage(this.page + 1);
    }
    selectPage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page
            });
        }
    }
    calcPages(page) {
        const pages = [];
        let startPage = 1;
        let endPage = this.totalPages;
        const maxSize = 5;
        const isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (let num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    }
};
DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) { return new (t || DataTablePagerComponent)(); };
DataTablePagerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTablePagerComponent, selectors: [["datatable-pager"]], hostAttrs: [1, "datatable-pager"], inputs: { size: "size", count: "count", page: "page", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon" }, outputs: { change: "change" }, decls: 14, vars: 21, consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]], template: function DataTablePagerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵelementStart(1, "li");
        ɵngcc0.ɵɵelementStart(2, "a", 1);
        ɵngcc0.ɵɵlistener("click", function DataTablePagerComponent_Template_a_click_2_listener() { return ctx.selectPage(1); });
        ɵngcc0.ɵɵelement(3, "i");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "li");
        ɵngcc0.ɵɵelementStart(5, "a", 2);
        ɵngcc0.ɵɵlistener("click", function DataTablePagerComponent_Template_a_click_5_listener() { return ctx.prevPage(); });
        ɵngcc0.ɵɵelement(6, "i");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
        ɵngcc0.ɵɵelementStart(8, "li");
        ɵngcc0.ɵɵelementStart(9, "a", 4);
        ɵngcc0.ɵɵlistener("click", function DataTablePagerComponent_Template_a_click_9_listener() { return ctx.nextPage(); });
        ɵngcc0.ɵɵelement(10, "i");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "li");
        ɵngcc0.ɵɵelementStart(12, "a", 5);
        ɵngcc0.ɵɵlistener("click", function DataTablePagerComponent_Template_a_click_12_listener() { return ctx.selectPage(ctx.totalPages); });
        ɵngcc0.ɵɵelement(13, "i");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("disabled", !ctx.canPrevious());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMap(ctx.pagerPreviousIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("disabled", !ctx.canPrevious());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMap(ctx.pagerLeftArrowIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.pages);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("disabled", !ctx.canNext());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMap(ctx.pagerRightArrowIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("disabled", !ctx.canNext());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMap(ctx.pagerNextIcon);
    } }, directives: [ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
__decorate([
    Input()
], DataTablePagerComponent.prototype, "pagerLeftArrowIcon", void 0);
__decorate([
    Input()
], DataTablePagerComponent.prototype, "pagerRightArrowIcon", void 0);
__decorate([
    Input()
], DataTablePagerComponent.prototype, "pagerPreviousIcon", void 0);
__decorate([
    Input()
], DataTablePagerComponent.prototype, "pagerNextIcon", void 0);
__decorate([
    Input()
], DataTablePagerComponent.prototype, "size", null);
__decorate([
    Input()
], DataTablePagerComponent.prototype, "count", null);
__decorate([
    Input()
], DataTablePagerComponent.prototype, "page", null);
__decorate([
    Output()
], DataTablePagerComponent.prototype, "change", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTablePagerComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-pager',
                template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
                host: {
                    class: 'datatable-pager'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { change: [{
            type: Output
        }], size: [{
            type: Input
        }], count: [{
            type: Input
        }], page: [{
            type: Input
        }], pagerLeftArrowIcon: [{
            type: Input
        }], pagerRightArrowIcon: [{
            type: Input
        }], pagerPreviousIcon: [{
            type: Input
        }], pagerNextIcon: [{
            type: Input
        }] }); })();
export { DataTablePagerComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvZm9vdGVyL3BhZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q2hHLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0FBQ3BDLElBREE7QUFBZ0IsUUF5Q0osV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNELFFBQ0UsV0FBTSxHQUFXLENBQUMsQ0FBQztBQUNyQixRQUFFLFVBQUssR0FBVyxDQUFDLENBQUM7QUFDcEIsUUFBRSxVQUFLLEdBQVcsQ0FBQyxDQUFDO0FBQ3BCLElBMkRBLENBQUM7QUFDRCxJQW5HRSxJQUFJLElBQUksQ0FBQyxHQUFXO0FBQ3RCLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDckIsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksSUFBSTtBQUFLLFFBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3RCLElBQUUsQ0FBQztBQUNILElBRUUsSUFBSSxLQUFLLENBQUMsR0FBVztBQUN2QixRQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLEtBQUs7QUFBSyxRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJQUVFLElBQUksSUFBSSxD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RCxDQUFDLElBQ1csdUJBQXVCO0FBeUduQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLFNBMUdZLHVCQUF1QjtBQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtcGFnZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx1bCBjbGFzcz1cInBhZ2VyXCI+XG4gICAgICA8bGkgW2NsYXNzLmRpc2FibGVkXT1cIiFjYW5QcmV2aW91cygpXCI+XG4gICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiZ28gdG8gZmlyc3QgcGFnZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwic2VsZWN0UGFnZSgxKVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwie3sgcGFnZXJQcmV2aW91c0ljb24gfX1cIj48L2k+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgW2NsYXNzLmRpc2FibGVkXT1cIiFjYW5QcmV2aW91cygpXCI+XG4gICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiZ28gdG8gcHJldmlvdXMgcGFnZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwicHJldlBhZ2UoKVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwie3sgcGFnZXJMZWZ0QXJyb3dJY29uIH19XCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidwYWdlICcgKyBwZy5udW1iZXJcIlxuICAgICAgICBjbGFzcz1cInBhZ2VzXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IHBnIG9mIHBhZ2VzXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJwZy5udW1iZXIgPT09IHBhZ2VcIlxuICAgICAgPlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGcubnVtYmVyKVwiPlxuICAgICAgICAgIHt7IHBnLnRleHQgfX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBbY2xhc3MuZGlzYWJsZWRdPVwiIWNhbk5leHQoKVwiPlxuICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cImdvIHRvIG5leHQgcGFnZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwibmV4dFBhZ2UoKVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwie3sgcGFnZXJSaWdodEFycm93SWNvbiB9fVwiPjwvaT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBbY2xhc3MuZGlzYWJsZWRdPVwiIWNhbk5leHQoKVwiPlxuICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cImdvIHRvIGxhc3QgcGFnZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwic2VsZWN0UGFnZSh0b3RhbFBhZ2VzKVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwie3sgcGFnZXJOZXh0SWNvbiB9fVwiPjwvaT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdkYXRhdGFibGUtcGFnZXInXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVBhZ2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGFnZXJMZWZ0QXJyb3dJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VyUmlnaHRBcnJvd0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJQcmV2aW91c0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJOZXh0SWNvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5jYWxjUGFnZXMoKTtcbiAgfVxuXG4gIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY291bnQodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb3VudCA9IHZhbDtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5jYWxjUGFnZXMoKTtcbiAgfVxuXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwYWdlKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZSA9IHZhbDtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5jYWxjUGFnZXMoKTtcbiAgfVxuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5zaXplIDwgMSA/IDEgOiBNYXRoLmNlaWwodGhpcy5jb3VudCAvIHRoaXMuc2l6ZSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KGNvdW50IHx8IDAsIDEpO1xuICB9XG5cbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX2NvdW50OiBudW1iZXIgPSAwO1xuICBfcGFnZTogbnVtYmVyID0gMTtcbiAgX3NpemU6IG51bWJlciA9IDA7XG4gIHBhZ2VzOiBhbnk7XG5cbiAgY2FuUHJldmlvdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA+IDE7XG4gIH1cblxuICBjYW5OZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPCB0aGlzLnRvdGFsUGFnZXM7XG4gIH1cblxuICBwcmV2UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdFBhZ2UodGhpcy5wYWdlIC0gMSk7XG4gIH1cblxuICBuZXh0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdFBhZ2UodGhpcy5wYWdlICsgMSk7XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChwYWdlID4gMCAmJiBwYWdlIDw9IHRoaXMudG90YWxQYWdlcyAmJiBwYWdlICE9PSB0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG5cbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICBwYWdlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjYWxjUGFnZXMocGFnZT86IG51bWJlcik6IGFueVtdIHtcbiAgICBjb25zdCBwYWdlcyA9IFtdO1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xuICAgIGNvbnN0IG1heFNpemUgPSA1O1xuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPSBtYXhTaXplIDwgdGhpcy50b3RhbFBhZ2VzO1xuXG4gICAgcGFnZSA9IHBhZ2UgfHwgdGhpcy5wYWdlO1xuXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIHN0YXJ0UGFnZSA9IHBhZ2UgLSBNYXRoLmZsb29yKG1heFNpemUgLyAyKTtcbiAgICAgIGVuZFBhZ2UgPSBwYWdlICsgTWF0aC5mbG9vcihtYXhTaXplIC8gMik7XG5cbiAgICAgIGlmIChzdGFydFBhZ2UgPCAxKSB7XG4gICAgICAgIHN0YXJ0UGFnZSA9IDE7XG4gICAgICAgIGVuZFBhZ2UgPSBNYXRoLm1pbihzdGFydFBhZ2UgKyBtYXhTaXplIC0gMSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICAgIH0gZWxzZSBpZiAoZW5kUGFnZSA+IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heCh0aGlzLnRvdGFsUGFnZXMgLSBtYXhTaXplICsgMSwgMSk7XG4gICAgICAgIGVuZFBhZ2UgPSB0aGlzLnRvdGFsUGFnZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcbiAgICAgIHBhZ2VzLnB1c2goe1xuICAgICAgICBudW1iZXI6IG51bSxcbiAgICAgICAgdGV4dDogPHN0cmluZz4oPGFueT5udW0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cbn1cbiJdfQ==