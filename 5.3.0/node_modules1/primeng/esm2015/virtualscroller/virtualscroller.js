import { NgModule, Component, ElementRef, Input, Output, ViewChild, EventEmitter, ContentChild, ContentChildren, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header, Footer, PrimeTemplate, SharedModule } from 'primeng/api';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/cdk/scrolling';

function VirtualScroller_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function VirtualScroller_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, VirtualScroller_div_1_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
function VirtualScroller_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "height": a0 }; };
const _c1 = function (a0, a1, a2, a3, a4, a5, a6) { return { $implicit: a0, index: a1, count: a2, first: a3, last: a4, even: a5, odd: a6 }; };
function VirtualScroller_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵtemplate(2, VirtualScroller_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const c_r8 = ctx.count;
    const f_r9 = ctx.first;
    const l_r10 = ctx.last;
    const e_r11 = ctx.even;
    const o_r12 = ctx.odd;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r3.itemSize + "px"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r6 ? ctx_r3.itemTemplate : ctx_r3.loadingItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction7(5, _c1, item_r6, i_r7, c_r8, f_r9, l_r10, e_r11, o_r12));
} }
function VirtualScroller_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function VirtualScroller_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, VirtualScroller_div_8_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.footerTemplate);
} }
const _c2 = [[["p-header"]], [["p-footer"]]];
const _c3 = ["p-header", "p-footer"];
export class VirtualScroller {
    constructor(el) {
        this.el = el;
        this.trackBy = (index, item) => item;
        this.onLazyLoad = new EventEmitter();
        this._totalRecords = 0;
        this.page = 0;
        this._first = 0;
        this.loadedPages = [];
    }
    get totalRecords() {
        return this._totalRecords;
    }
    set totalRecords(val) {
        this._totalRecords = val;
        console.log("totalRecords is deprecated, provide a value with the length of virtual items instead.");
    }
    get first() {
        return this._first;
    }
    set first(val) {
        this._first = val;
        console.log("first property is deprecated, use scrollToIndex function to scroll a specific item.");
    }
    get cache() {
        return this._cache;
    }
    set cache(val) {
        this._cache = val;
        console.log("cache is deprecated as it is always on.");
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'loadingItem':
                    this.loadingItemTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    onScrollIndexChange(index) {
        if (this.lazy) {
            let pageRange = this.createPageRange(Math.floor(index / this.rows));
            pageRange.forEach(page => this.loadPage(page));
        }
    }
    createPageRange(page) {
        let range = [];
        if (page !== 0) {
            range.push(page - 1);
        }
        range.push(page);
        if (page !== (Math.ceil(this.value.length / this.rows) - 1)) {
            range.push(page + 1);
        }
        return range;
    }
    loadPage(page) {
        if (!this.loadedPages.includes(page)) {
            this.onLazyLoad.emit({ first: this.rows * page, rows: this.rows });
            this.loadedPages.push(page);
        }
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    //@deprecated
    scrollTo(index, mode) {
        this.scrollToIndex(index, mode);
    }
    scrollToIndex(index, mode) {
        if (this.viewport) {
            this.viewport.scrollToIndex(index, mode);
        }
    }
    clearCache() {
        this.loadedPages = [];
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.value) {
            if (!this.lazy) {
                this.clearCache();
            }
        }
    }
}
VirtualScroller.ɵfac = function VirtualScroller_Factory(t) { return new (t || VirtualScroller)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
VirtualScroller.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: VirtualScroller, selectors: [["p-virtualScroller"]], contentQueries: function VirtualScroller_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.header = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function VirtualScroller_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewport = _t.first);
    } }, inputs: { trackBy: "trackBy", totalRecords: "totalRecords", first: "first", cache: "cache", value: "value", itemSize: "itemSize", style: "style", styleClass: "styleClass", scrollHeight: "scrollHeight", lazy: "lazy", rows: "rows", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, outputs: { onLazyLoad: "onLazyLoad" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 9, vars: 14, consts: [[3, "ngClass", "ngStyle"], ["class", "p-virtualscroller-header", 4, "ngIf"], [1, "p-virtualscroller-content"], ["content", ""], [1, "p-virtualscroller-list"], [3, "ngStyle", "itemSize", "minBufferPx", "maxBufferPx", "scrolledIndexChange"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], ["class", "p-virtualscroller-footer", 4, "ngIf"], [1, "p-virtualscroller-header"], [4, "ngTemplateOutlet"], [1, "p-virtualscroller-item", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-virtualscroller-footer"]], template: function VirtualScroller_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, VirtualScroller_div_1_Template, 3, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "cdk-virtual-scroll-viewport", 5, 6);
        ɵngcc0.ɵɵlistener("scrolledIndexChange", function VirtualScroller_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_5_listener($event) { return ctx.onScrollIndexChange($event); });
        ɵngcc0.ɵɵtemplate(7, VirtualScroller_ng_container_7_Template, 3, 13, "ng-container", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, VirtualScroller_div_8_Template, 3, 1, "div", 8);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-virtualscroller p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.header || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(12, _c0, ctx.scrollHeight))("itemSize", ctx.itemSize)("minBufferPx", ctx.minBufferPx)("maxBufferPx", ctx.maxBufferPx);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx.value)("cdkVirtualForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footer || ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc2.CdkVirtualScrollViewport, ɵngcc2.CdkFixedSizeVirtualScroll, ɵngcc2.CdkVirtualForOf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
VirtualScroller.ctorParameters = () => [
    { type: ElementRef }
];
VirtualScroller.propDecorators = {
    value: [{ type: Input }],
    itemSize: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    scrollHeight: [{ type: Input }],
    lazy: [{ type: Input }],
    rows: [{ type: Input }],
    minBufferPx: [{ type: Input }],
    maxBufferPx: [{ type: Input }],
    trackBy: [{ type: Input }],
    header: [{ type: ContentChild, args: [Header,] }],
    footer: [{ type: ContentChild, args: [Footer,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    viewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport,] }],
    onLazyLoad: [{ type: Output }],
    totalRecords: [{ type: Input }],
    first: [{ type: Input }],
    cache: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VirtualScroller, [{
        type: Component,
        args: [{
                selector: 'p-virtualScroller',
                template: `
        <div [ngClass]="'p-virtualscroller p-component'" [ngStyle]="style" [class]="styleClass">
            <div class="p-virtualscroller-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div #content class="p-virtualscroller-content">
                <div class="p-virtualscroller-list">
                    <cdk-virtual-scroll-viewport #viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" [minBufferPx]="minBufferPx" [maxBufferPx]="maxBufferPx" (scrolledIndexChange)="onScrollIndexChange($event)">
                        <ng-container *cdkVirtualFor="let item of value; trackBy: trackBy; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd;">
                            <div [ngStyle]="{'height': itemSize + 'px'}" class="p-virtualscroller-item">
                                <ng-container *ngTemplateOutlet="item ? itemTemplate : loadingItemTemplate; context: {$implicit: item, index: i, count: c, first: f, last: l, even: e, odd: o}"></ng-container>
                            </div>
                        </ng-container>
                    </cdk-virtual-scroll-viewport>
                </div>
            </div>
            <div class="p-virtualscroller-footer" *ngIf="footer || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { trackBy: [{
            type: Input
        }], onLazyLoad: [{
            type: Output
        }], totalRecords: [{
            type: Input
        }], first: [{
            type: Input
        }], cache: [{
            type: Input
        }], value: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], scrollHeight: [{
            type: Input
        }], lazy: [{
            type: Input
        }], rows: [{
            type: Input
        }], minBufferPx: [{
            type: Input
        }], maxBufferPx: [{
            type: Input
        }], header: [{
            type: ContentChild,
            args: [Header]
        }], footer: [{
            type: ContentChild,
            args: [Footer]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }], viewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }] }); })();
export class VirtualScrollerModule {
}
VirtualScrollerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: VirtualScrollerModule });
VirtualScrollerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function VirtualScrollerModule_Factory(t) { return new (t || VirtualScrollerModule)(); }, imports: [[CommonModule, ScrollingModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(VirtualScrollerModule, { declarations: function () { return [VirtualScroller]; }, imports: function () { return [CommonModule, ScrollingModule]; }, exports: function () { return [VirtualScroller, SharedModule, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VirtualScrollerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ScrollingModule],
                exports: [VirtualScroller, SharedModule, ScrollingModule],
                declarations: [VirtualScroller]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbHNjcm9sbGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvdmlydHVhbHNjcm9sbGVyL3ZpcnR1YWxzY3JvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQWtCLEtBQUssRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUF1Qix1QkFBdUIsRUFBMEIsaUJBQWlCLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzFQLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCaEYsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQWtEM0IsWUFBbUIsRUFBYztBQUFJLFFBQWxCLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQTlCekIsWUFBTyxHQUFhLENBQUMsS0FBYSxFQUFFLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQ3BFLFFBU2MsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2pFLFFBU0ksa0JBQWEsR0FBVyxDQUFDLENBQUM7QUFDOUIsUUFDSSxTQUFJLEdBQVcsQ0FBQyxDQUFDO0FBQ3JCLFFBQ0ksV0FBTSxHQUFXLENBQUMsQ0FBQztBQUN2QixRQUNJLGdCQUFXLEdBQWEsRUFBRSxDQUFDO0FBQy9CLElBR3dDLENBQUM7QUFDekMsSUFDSSxJQUFhLFlBQVk7QUFBSyxRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDbEMsSUFBSSxDQUFDO0FBQ0wsSUFBSSxJQUFJLFlBQVksQ0FBQyxHQUFXO0FBQ2hDLFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDakMsUUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLHVGQUF1RixDQUFDLENBQUM7QUFDN0csSUFBSSxDQUFDO0FBQ0wsSUFDSSxJQUFhLEtBQUs7QUFBSyxRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0IsSUFBSSxDQUFDO0FBQ0wsSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFVO0FBQ3hCLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDMUIsUUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLHFGQUFxRixDQUFDLENBQUM7QUFDM0csSUFBSSxDQUFDO0FBQ0wsSUFDSSxJQUFhLEtBQUs7QUFBSyxRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0IsSUFBSSxDQUFDO0FBQ0wsSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFZO0FBQzFCLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDMUIsUUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDL0QsSUFBSSxDQUFDO0FBQ0wsSUFDSSxrQkFBa0I7QUFDdEIsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO0FBQ3hDLFlBQVksUUFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7QUFDbkMsZ0JBQWdCLEtBQUssTUFBTTtBQUMzQixvQkFBb0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3RELG9CQUFnQixNQUFNO0FBQ3RCLGdCQUNnQixLQUFLLGFBQWE7QUFDbEMsb0JBQW9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzdELG9CQUFnQixNQUFNO0FBQ3RCLGdCQUNnQixLQUFLLFFBQVE7QUFDN0Isb0JBQW9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN4RCxvQkFBZ0IsTUFBTTtBQUN0QixnQkFDZ0IsS0FBSyxRQUFRO0FBQzdCLG9CQUFvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDeEQsb0JBQWdCLE1BQU07QUFDdEIsZ0JBQ2dCO0FBQ2hCLG9CQUFvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEQsb0JBQWdCLE1BQU07QUFDdEIsYUFBYTtBQUNiLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxJQUFJLENBQUM7QUFDTCxJQUNJLG1CQUFtQixDQUFDLEtBQWE7QUFDckMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDdkIsWUFBWSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLFlBQVksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRCxTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0wsSUFDSSxlQUFlLENBQUMsSUFBWTtBQUNoQyxRQUFRLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztBQUNqQyxRQUNRLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtBQUN4QixZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFNBQVM7QUFDVCxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsUUFBUSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ3JFLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsU0FBUztBQUNULFFBQ1EsT0FBTyxLQUFLLENBQUM7QUFDckIsSUFBSSxDQUFDO0FBQ0wsSUFDSSxRQUFRLENBQUMsSUFBWTtBQUN6QixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM5QyxZQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUM3RSxZQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLG1CQUFtQjtBQUFLLFFBQ3BCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELElBQUksQ0FBQztBQUNMLElBQ0ksYUFBYTtBQUNqQixJQUFJLFFBQVEsQ0FBQyxLQUFhLEVBQUUsSUFBcUI7QUFBSSxRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4QyxJQUFJLENBQUM7QUFDTCxJQUNJLGFBQWEsQ0FBQyxLQUFhLEVBQUUsSUFBcUI7QUFBSSxRQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDM0IsWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckQsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksVUFBVTtBQUNkLFFBQVEsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDOUIsSUFBSSxDQUFDO0FBQ0wsSUFDSSxXQUFXLENBQUMsWUFBMkI7QUFDM0MsUUFBUSxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUU7QUFDaEMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtBQUM1QixnQkFBZ0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2xDLGFBQWE7QUFDYixTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0w7MkNBeExDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUUsbUJBQW1CLGtCQUM3QixRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozt3cUJBc0JSLGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPLGtCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0TUFDSTtBQUFDO0FBQXlDLFlBbENwQixVQUFVO0FBQUc7QUFBRztBQUFtQyxvQkFvQ3pFLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSywyQkFFVixLQUFLO0FBQUssbUJBRVYsS0FBSztBQUFLLG1CQUVWLEtBQUs7QUFBSywwQkFFVixLQUFLO0FBQUssMEJBRVYsS0FBSztBQUFLLHNCQUVWLEtBQUs7QUFBSyxxQkFFVixZQUFZLFNBQUMsTUFBTTtBQUFPLHFCQUUxQixZQUFZLFNBQUMsTUFBTTtBQUFPLHdCQUUxQixlQUFlLFNBQUMsYUFBYTtBQUFPLHVCQUVwQyxTQUFTLFNBQUMsd0JBQXdCO0FBQU8seUJBRXpDLE1BQU07QUFBSywyQkFzQlgsS0FBSztBQUFLLG9CQVFWLEtBQUs7QUFBSyxvQkFRVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBK0ZoQixNQUFNLE9BQU8scUJBQXFCO0FBQUc7aURBTHBDLFFBQVEsU0FBQyxrQkFDTjtJQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsZUFBZSxDQUFDLGtCQUN2QyxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLGVBQWUsQ0FBQyxrQkFDdkQsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLGNBQ2xDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LEVsZW1lbnRSZWYsQWZ0ZXJDb250ZW50SW5pdCxJbnB1dCxPdXRwdXQsVmlld0NoaWxkLEV2ZW50RW1pdHRlcixDb250ZW50Q2hpbGQsQ29udGVudENoaWxkcmVuLFF1ZXJ5TGlzdCxUZW1wbGF0ZVJlZixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxPbkNoYW5nZXMsU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtIZWFkZXIsRm9vdGVyLFByaW1lVGVtcGxhdGUsU2hhcmVkTW9kdWxlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1Njcm9sbGluZ01vZHVsZSxDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtCbG9ja2FibGVVSX0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdmlydHVhbFNjcm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3AtdmlydHVhbHNjcm9sbGVyIHAtY29tcG9uZW50J1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXZpcnR1YWxzY3JvbGxlci1oZWFkZXJcIiAqbmdJZj1cImhlYWRlciB8fCBoZWFkZXJUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250ZW50IGNsYXNzPVwicC12aXJ0dWFsc2Nyb2xsZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXZpcnR1YWxzY3JvbGxlci1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgI3ZpZXdwb3J0IFtuZ1N0eWxlXT1cInsnaGVpZ2h0Jzogc2Nyb2xsSGVpZ2h0fVwiIFtpdGVtU2l6ZV09XCJpdGVtU2l6ZVwiIFttaW5CdWZmZXJQeF09XCJtaW5CdWZmZXJQeFwiIFttYXhCdWZmZXJQeF09XCJtYXhCdWZmZXJQeFwiIChzY3JvbGxlZEluZGV4Q2hhbmdlKT1cIm9uU2Nyb2xsSW5kZXhDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIHZhbHVlOyB0cmFja0J5OiB0cmFja0J5OyBsZXQgaSA9IGluZGV4OyBsZXQgYyA9IGNvdW50OyBsZXQgZiA9IGZpcnN0OyBsZXQgbCA9IGxhc3Q7IGxldCBlID0gZXZlbjsgbGV0IG8gPSBvZGQ7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6IGl0ZW1TaXplICsgJ3B4J31cIiBjbGFzcz1cInAtdmlydHVhbHNjcm9sbGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0gPyBpdGVtVGVtcGxhdGUgOiBsb2FkaW5nSXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBpdGVtLCBpbmRleDogaSwgY291bnQ6IGMsIGZpcnN0OiBmLCBsYXN0OiBsLCBldmVuOiBlLCBvZGQ6IG99XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXZpcnR1YWxzY3JvbGxlci1mb290ZXJcIiAqbmdJZj1cImZvb3RlciB8fCBmb290ZXJUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVmlydHVhbFNjcm9sbGVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCxCbG9ja2FibGVVSSxPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgdmFsdWU6IGFueVtdO1xuXG4gICAgQElucHV0KCkgaXRlbVNpemU6IG51bWJlcjsgXG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIHNjcm9sbEhlaWdodDogYW55O1xuXG4gICAgQElucHV0KCkgbGF6eTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHJvd3M6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIG1pbkJ1ZmZlclB4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBtYXhCdWZmZXJQeDogbnVtYmVyO1xuICBcbiAgICBASW5wdXQoKSB0cmFja0J5OiBGdW5jdGlvbiA9IChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IGl0ZW07XG4gICAgICAgICAgICAgICAgXG4gICAgQENvbnRlbnRDaGlsZChIZWFkZXIpIGhlYWRlcjogSGVhZGVyO1xuXG4gICAgQENvbnRlbnRDaGlsZChGb290ZXIpIGZvb3RlcjogRm9vdGVyO1xuICAgIFxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KSB2aWV3cG9ydDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xuXG4gICAgQE91dHB1dCgpIG9uTGF6eUxvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGxvYWRpbmdJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBfdG90YWxSZWNvcmRzOiBudW1iZXIgPSAwO1xuXG4gICAgcGFnZTogbnVtYmVyID0gMDtcblxuICAgIF9maXJzdDogbnVtYmVyID0gMDtcblxuICAgIGxvYWRlZFBhZ2VzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgX2NhY2hlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gICAgQElucHV0KCkgZ2V0IHRvdGFsUmVjb3JkcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxSZWNvcmRzO1xuICAgIH1cbiAgICBzZXQgdG90YWxSZWNvcmRzKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsUmVjb3JkcyA9IHZhbDtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b3RhbFJlY29yZHMgaXMgZGVwcmVjYXRlZCwgcHJvdmlkZSBhIHZhbHVlIHdpdGggdGhlIGxlbmd0aCBvZiB2aXJ0dWFsIGl0ZW1zIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBmaXJzdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3Q7XG4gICAgfVxuICAgIHNldCBmaXJzdCh2YWw6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0ID0gdmFsO1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0IHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQsIHVzZSBzY3JvbGxUb0luZGV4IGZ1bmN0aW9uIHRvIHNjcm9sbCBhIHNwZWNpZmljIGl0ZW0uXCIpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBjYWNoZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlO1xuICAgIH1cbiAgICBzZXQgY2FjaGUodmFsOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlID0gdmFsO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhY2hlIGlzIGRlcHJlY2F0ZWQgYXMgaXQgaXMgYWx3YXlzIG9uLlwiKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkaW5nSXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0l0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zvb3Rlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TY3JvbGxJbmRleENoYW5nZShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgICAgIGxldCBwYWdlUmFuZ2UgPSB0aGlzLmNyZWF0ZVBhZ2VSYW5nZShNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5yb3dzKSk7XG4gICAgICAgICAgICBwYWdlUmFuZ2UuZm9yRWFjaChwYWdlID0+IHRoaXMubG9hZFBhZ2UocGFnZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlUGFnZVJhbmdlKHBhZ2U6IG51bWJlcikge1xuICAgICAgICBsZXQgcmFuZ2U6IG51bWJlcltdID0gW107XG5cbiAgICAgICAgaWYgKHBhZ2UgIT09IDApIHtcbiAgICAgICAgICAgIHJhbmdlLnB1c2gocGFnZSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJhbmdlLnB1c2gocGFnZSk7XG4gICAgICAgIGlmIChwYWdlICE9PSAoTWF0aC5jZWlsKHRoaXMudmFsdWUubGVuZ3RoIC8gdGhpcy5yb3dzKSAtIDEpKSB7XG4gICAgICAgICAgICByYW5nZS5wdXNoKHBhZ2UgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByYW5nZTtcbiAgICB9XG5cbiAgICBsb2FkUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlZFBhZ2VzLmluY2x1ZGVzKHBhZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGF6eUxvYWQuZW1pdCh7Zmlyc3Q6IHRoaXMucm93cyAqIHBhZ2UsIHJvd3M6IHRoaXMucm93c30pO1xuICAgICAgICAgICAgdGhpcy5sb2FkZWRQYWdlcy5wdXNoKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QmxvY2thYmxlRWxlbWVudCgpOiBIVE1MRWxlbWVudMKge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIC8vQGRlcHJlY2F0ZWRcbiAgICBzY3JvbGxUbyhpbmRleDogbnVtYmVyLCBtb2RlPzogU2Nyb2xsQmVoYXZpb3IpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KGluZGV4LCBtb2RlKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIG1vZGU/OiBTY3JvbGxCZWhhdmlvcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy52aWV3cG9ydCkge1xuICAgICAgICAgICAgdGhpcy52aWV3cG9ydC5zY3JvbGxUb0luZGV4KGluZGV4LCBtb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMubG9hZGVkUGFnZXMgPSBbXTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2U6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxhenkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFNjcm9sbGluZ01vZHVsZV0sXG4gICAgZXhwb3J0czogW1ZpcnR1YWxTY3JvbGxlcixTaGFyZWRNb2R1bGUsU2Nyb2xsaW5nTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtWaXJ0dWFsU2Nyb2xsZXJdXG59KVxuZXhwb3J0IGNsYXNzIFZpcnR1YWxTY3JvbGxlck1vZHVsZSB7IH1cbiJdfQ==