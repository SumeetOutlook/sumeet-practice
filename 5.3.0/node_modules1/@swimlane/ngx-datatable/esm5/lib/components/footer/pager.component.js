import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DataTablePagerComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r3); var pg_r1 = ctx.$implicit; var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.selectPage(pg_r1.number); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var pg_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", pg_r1.number === ctx_r0.page);
    ɵngcc0.ɵɵattribute("aria-label", "page " + pg_r1.number);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", pg_r1.text, " ");
} }
var DataTablePagerComponent = /** @class */ (function () {
    function DataTablePagerComponent() {
        this.change = new EventEmitter();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    Object.defineProperty(DataTablePagerComponent.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (val) {
            this._size = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (val) {
            this._count = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (val) {
            this._page = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "totalPages", {
        get: function () {
            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
            return Math.max(count || 0, 1);
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagerComponent.prototype.canPrevious = function () {
        return this.page > 1;
    };
    DataTablePagerComponent.prototype.canNext = function () {
        return this.page < this.totalPages;
    };
    DataTablePagerComponent.prototype.prevPage = function () {
        this.selectPage(this.page - 1);
    };
    DataTablePagerComponent.prototype.nextPage = function () {
        this.selectPage(this.page + 1);
    };
    DataTablePagerComponent.prototype.selectPage = function (page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page: page
            });
        }
    };
    DataTablePagerComponent.prototype.calcPages = function (page) {
        var pages = [];
        var startPage = 1;
        var endPage = this.totalPages;
        var maxSize = 5;
        var isMaxSized = maxSize < this.totalPages;
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
        for (var num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTablePagerComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-pager',
                template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to first page\" href=\"javascript:void(0)\" (click)=\"selectPage(1)\">\n          <i class=\"{{ pagerPreviousIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to previous page\" href=\"javascript:void(0)\" (click)=\"prevPage()\">\n          <i class=\"{{ pagerLeftArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li\n        role=\"button\"\n        [attr.aria-label]=\"'page ' + pg.number\"\n        class=\"pages\"\n        *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\"\n      >\n        <a href=\"javascript:void(0)\" (click)=\"selectPage(pg.number)\">\n          {{ pg.text }}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to next page\" href=\"javascript:void(0)\" (click)=\"nextPage()\">\n          <i class=\"{{ pagerRightArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to last page\" href=\"javascript:void(0)\" (click)=\"selectPage(totalPages)\">\n          <i class=\"{{ pagerNextIcon }}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
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
    return DataTablePagerComponent;
}());
export { DataTablePagerComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvZm9vdGVyL3BhZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q2hHO0FBQ29CLElBRHBCO0FBQXFDLFFBeUN6QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsUUFDRSxXQUFNLEdBQVcsQ0FBQyxDQUFDO0FBQ3JCLFFBQUUsVUFBSyxHQUFXLENBQUMsQ0FBQztBQUNwQixRQUFFLFVBQUssR0FBVyxDQUFDLENBQUM7QUFDcEIsSUEyREEsQ0FBQztBQUNELElBbkdFLHNCQUFJLHlDQUFJO0FBQUksYUFLWjtBQUFjLFlBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3RCLFFBQUUsQ0FBQztBQUVILGFBVEUsVUFBUyxHQUFXO0FBQ3RCLFlBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDckIsWUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsQyxRQUFFLENBQUM7QUFFSDtBQUNHO0FBR0QsT0FOQztBQUNILElBTUUsc0JBQUksMENBQUs7QUFBSSxhQUtiO0FBQWMsWUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkIsUUFBRSxDQUFDO0FBRUgsYUFURSxVQUFVLEdBQVc7QUFDdkIsWUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUN0QixZQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2xDLFFBQUUsQ0FBQztBQUVIO0FBQ0U7QUFHRixPQU5HO0FBQ0gs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RTtBQUNKLEtBQUssRUFBRSxpQkFBaUI7T0FDekIsY0FDRCxlQUFlLEVBQUU7cUJBQXVCLENBQUMsTUFBTSxVQUNoRCxDQUFDO0tBQ1csdUJBQXVCLENBeUduQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsOEJBQUM7QUFDQSxDQURBLEFBekdELElBeUdDO0FBQ0QsU0ExR2EsdUJBQXVCO0FBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1wYWdlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHVsIGNsYXNzPVwicGFnZXJcIj5cbiAgICAgIDxsaSBbY2xhc3MuZGlzYWJsZWRdPVwiIWNhblByZXZpb3VzKClcIj5cbiAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJnbyB0byBmaXJzdCBwYWdlXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJzZWxlY3RQYWdlKDEpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJ7eyBwYWdlclByZXZpb3VzSWNvbiB9fVwiPjwvaT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBbY2xhc3MuZGlzYWJsZWRdPVwiIWNhblByZXZpb3VzKClcIj5cbiAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJnbyB0byBwcmV2aW91cyBwYWdlXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJwcmV2UGFnZSgpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJ7eyBwYWdlckxlZnRBcnJvd0ljb24gfX1cIj48L2k+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGlcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3BhZ2UgJyArIHBnLm51bWJlclwiXG4gICAgICAgIGNsYXNzPVwicGFnZXNcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgcGcgb2YgcGFnZXNcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInBnLm51bWJlciA9PT0gcGFnZVwiXG4gICAgICA+XG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwZy5udW1iZXIpXCI+XG4gICAgICAgICAge3sgcGcudGV4dCB9fVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIFtjbGFzcy5kaXNhYmxlZF09XCIhY2FuTmV4dCgpXCI+XG4gICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiZ28gdG8gbmV4dCBwYWdlXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJuZXh0UGFnZSgpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJ7eyBwYWdlclJpZ2h0QXJyb3dJY29uIH19XCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIFtjbGFzcy5kaXNhYmxlZF09XCIhY2FuTmV4dCgpXCI+XG4gICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiZ28gdG8gbGFzdCBwYWdlXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHRvdGFsUGFnZXMpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJ7eyBwYWdlck5leHRJY29uIH19XCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1wYWdlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUGFnZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBwYWdlckxlZnRBcnJvd0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJSaWdodEFycm93SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlclByZXZpb3VzSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlck5leHRJY29uOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmNhbGNQYWdlcygpO1xuICB9XG5cbiAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb3VudCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX2NvdW50ID0gdmFsO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmNhbGNQYWdlcygpO1xuICB9XG5cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBhZ2UodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlID0gdmFsO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmNhbGNQYWdlcygpO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLnNpemUgPCAxID8gMSA6IE1hdGguY2VpbCh0aGlzLmNvdW50IC8gdGhpcy5zaXplKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoY291bnQgfHwgMCwgMSk7XG4gIH1cblxuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfY291bnQ6IG51bWJlciA9IDA7XG4gIF9wYWdlOiBudW1iZXIgPSAxO1xuICBfc2l6ZTogbnVtYmVyID0gMDtcbiAgcGFnZXM6IGFueTtcblxuICBjYW5QcmV2aW91cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID4gMTtcbiAgfVxuXG4gIGNhbk5leHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA8IHRoaXMudG90YWxQYWdlcztcbiAgfVxuXG4gIHByZXZQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0UGFnZSh0aGlzLnBhZ2UgLSAxKTtcbiAgfVxuXG4gIG5leHRQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0UGFnZSh0aGlzLnBhZ2UgKyAxKTtcbiAgfVxuXG4gIHNlbGVjdFBhZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHBhZ2UgPiAwICYmIHBhZ2UgPD0gdGhpcy50b3RhbFBhZ2VzICYmIHBhZ2UgIT09IHRoaXMucGFnZSkge1xuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcblxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICAgIHBhZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNQYWdlcyhwYWdlPzogbnVtYmVyKTogYW55W10ge1xuICAgIGNvbnN0IHBhZ2VzID0gW107XG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XG4gICAgbGV0IGVuZFBhZ2UgPSB0aGlzLnRvdGFsUGFnZXM7XG4gICAgY29uc3QgbWF4U2l6ZSA9IDU7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9IG1heFNpemUgPCB0aGlzLnRvdGFsUGFnZXM7XG5cbiAgICBwYWdlID0gcGFnZSB8fCB0aGlzLnBhZ2U7XG5cbiAgICBpZiAoaXNNYXhTaXplZCkge1xuICAgICAgc3RhcnRQYWdlID0gcGFnZSAtIE1hdGguZmxvb3IobWF4U2l6ZSAvIDIpO1xuICAgICAgZW5kUGFnZSA9IHBhZ2UgKyBNYXRoLmZsb29yKG1heFNpemUgLyAyKTtcblxuICAgICAgaWYgKHN0YXJ0UGFnZSA8IDEpIHtcbiAgICAgICAgc3RhcnRQYWdlID0gMTtcbiAgICAgICAgZW5kUGFnZSA9IE1hdGgubWluKHN0YXJ0UGFnZSArIG1heFNpemUgLSAxLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgICAgfSBlbHNlIGlmIChlbmRQYWdlID4gdGhpcy50b3RhbFBhZ2VzKSB7XG4gICAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KHRoaXMudG90YWxQYWdlcyAtIG1heFNpemUgKyAxLCAxKTtcbiAgICAgICAgZW5kUGFnZSA9IHRoaXMudG90YWxQYWdlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xuICAgICAgcGFnZXMucHVzaCh7XG4gICAgICAgIG51bWJlcjogbnVtLFxuICAgICAgICB0ZXh0OiA8c3RyaW5nPig8YW55Pm51bSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlcztcbiAgfVxufVxuIl19