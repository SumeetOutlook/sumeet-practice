import { NgModule, Component, Input, Output, ChangeDetectorRef, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from 'primeng/dropdown';
import * as ɵngcc4 from '@angular/forms';
import * as ɵngcc5 from 'primeng/api';

function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function Paginator_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r1.paginatorState));
} }
function Paginator_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 18);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.currentPageReport);
} }
const _c1 = function (a0) { return { "p-highlight": a0 }; };
function Paginator_div_0_span_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 21);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_span_7_button_1_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const pageLink_r9 = ctx.$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(3); return ctx_r10.onPageLinkClick($event, pageLink_r9 - 1); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const pageLink_r9 = ctx.$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, pageLink_r9 - 1 == ctx_r8.getPage()));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(pageLink_r9);
} }
function Paginator_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 19);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_span_7_button_1_Template, 2, 4, "button", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.pageLinks);
} }
function Paginator_div_0_p_dropdown_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r12.currentPageReport);
} }
function Paginator_div_0_p_dropdown_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdown", 22);
    ɵngcc0.ɵɵlistener("onChange", function Paginator_div_0_p_dropdown_8_Template_p_dropdown_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.onPageDropdownChange($event); });
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_p_dropdown_8_ng_template_1_Template, 1, 1, "ng-template", 23);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("options", ctx_r4.pageItems)("ngModel", ctx_r4.getPage())("appendTo", ctx_r4.dropdownAppendTo)("scrollHeight", ctx_r4.dropdownScrollHeight);
} }
function Paginator_div_0_p_dropdown_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdown", 24);
    ɵngcc0.ɵɵlistener("ngModelChange", function Paginator_div_0_p_dropdown_13_Template_p_dropdown_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.rows = $event; })("onChange", function Paginator_div_0_p_dropdown_13_Template_p_dropdown_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.onRppChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("options", ctx_r5.rowsPerPageItems)("ngModel", ctx_r5.rows)("appendTo", ctx_r5.dropdownAppendTo)("scrollHeight", ctx_r5.dropdownScrollHeight);
} }
function Paginator_div_0_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Paginator_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_div_14_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.templateRight)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r6.paginatorState));
} }
const _c2 = function (a0) { return { "p-disabled": a0 }; };
function Paginator_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_div_1_Template, 2, 4, "div", 2);
    ɵngcc0.ɵɵtemplate(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵelementStart(3, "button", 4);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_Template_button_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.changePageToFirst($event); });
    ɵngcc0.ɵɵelement(4, "span", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "button", 6);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_Template_button_click_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.changePageToPrev($event); });
    ɵngcc0.ɵɵelement(6, "span", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, Paginator_div_0_span_7_Template, 2, 1, "span", 8);
    ɵngcc0.ɵɵtemplate(8, Paginator_div_0_p_dropdown_8_Template, 2, 4, "p-dropdown", 9);
    ɵngcc0.ɵɵelementStart(9, "button", 10);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_Template_button_click_9_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.changePageToNext($event); });
    ɵngcc0.ɵɵelement(10, "span", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(11, "button", 12);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_Template_button_click_11_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.changePageToLast($event); });
    ɵngcc0.ɵɵelement(12, "span", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(13, Paginator_div_0_p_dropdown_13_Template, 1, 4, "p-dropdown", 14);
    ɵngcc0.ɵɵtemplate(14, Paginator_div_0_div_14_Template, 2, 4, "div", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.style)("ngClass", "p-paginator p-component");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.templateLeft);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showCurrentPageReport);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.isFirstPage())("ngClass", ɵngcc0.ɵɵpureFunction1(18, _c2, ctx_r0.isFirstPage()));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.isFirstPage())("ngClass", ɵngcc0.ɵɵpureFunction1(20, _c2, ctx_r0.isFirstPage()));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showPageLinks);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showJumpToPageDropdown);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.isLastPage())("ngClass", ɵngcc0.ɵɵpureFunction1(22, _c2, ctx_r0.isLastPage()));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.isLastPage())("ngClass", ɵngcc0.ɵɵpureFunction1(24, _c2, ctx_r0.isLastPage()));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.rowsPerPageOptions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.templateRight);
} }
export class Paginator {
    constructor(cd) {
        this.cd = cd;
        this.pageLinkSize = 5;
        this.onPageChange = new EventEmitter();
        this.alwaysShow = true;
        this.dropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.totalRecords = 0;
        this.rows = 0;
        this.showPageLinks = true;
        this._first = 0;
        this._page = 0;
    }
    ngOnInit() {
        this.updatePaginatorState();
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.totalRecords) {
            this.updatePageLinks();
            this.updatePaginatorState();
            this.updateFirst();
            this.updateRowsPerPageOptions();
        }
        if (simpleChange.first) {
            this._first = simpleChange.first.currentValue;
            this.updatePageLinks();
            this.updatePaginatorState();
        }
        if (simpleChange.rows) {
            this.updatePageLinks();
            this.updatePaginatorState();
        }
        if (simpleChange.rowsPerPageOptions) {
            this.updateRowsPerPageOptions();
        }
    }
    get first() {
        return this._first;
    }
    set first(val) {
        this._first = val;
    }
    updateRowsPerPageOptions() {
        if (this.rowsPerPageOptions) {
            this.rowsPerPageItems = [];
            for (let opt of this.rowsPerPageOptions) {
                if (typeof opt == 'object' && opt['showAll']) {
                    this.rowsPerPageItems.unshift({ label: opt['showAll'], value: this.totalRecords });
                }
                else {
                    this.rowsPerPageItems.push({ label: String(opt), value: opt });
                }
            }
        }
    }
    isFirstPage() {
        return this.getPage() === 0;
    }
    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }
    getPageCount() {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    }
    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    }
    updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
        for (let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
        if (this.showJumpToPageDropdown) {
            this.pageItems = [];
            for (let i = 0; i < this.getPageCount(); i++) {
                this.pageItems.push({ label: String(i + 1), value: i });
            }
        }
    }
    changePage(p) {
        var pc = this.getPageCount();
        if (p >= 0 && p < pc) {
            this._first = this.rows * p;
            var state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
            this.updatePaginatorState();
        }
    }
    updateFirst() {
        const page = this.getPage();
        if (page > 0 && this.totalRecords && (this.first >= this.totalRecords)) {
            Promise.resolve(null).then(() => this.changePage(page - 1));
        }
    }
    getPage() {
        return Math.floor(this.first / this.rows);
    }
    changePageToFirst(event) {
        if (!this.isFirstPage()) {
            this.changePage(0);
        }
        event.preventDefault();
    }
    changePageToPrev(event) {
        this.changePage(this.getPage() - 1);
        event.preventDefault();
    }
    changePageToNext(event) {
        this.changePage(this.getPage() + 1);
        event.preventDefault();
    }
    changePageToLast(event) {
        if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
        }
        event.preventDefault();
    }
    onPageLinkClick(event, page) {
        this.changePage(page);
        event.preventDefault();
    }
    onRppChange(event) {
        this.changePage(this.getPage());
    }
    onPageDropdownChange(event) {
        this.changePage(event.value);
    }
    updatePaginatorState() {
        this.paginatorState = {
            page: this.getPage(),
            pageCount: this.getPageCount(),
            rows: this.rows,
            first: this.first,
            totalRecords: this.totalRecords
        };
    }
    get currentPageReport() {
        return this.currentPageReportTemplate
            .replace("{currentPage}", String(this.getPage() + 1))
            .replace("{totalPages}", String(this.getPageCount()))
            .replace("{first}", String(this._first + 1))
            .replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords)))
            .replace("{rows}", String(this.rows))
            .replace("{totalRecords}", String(this.totalRecords));
    }
}
Paginator.ɵfac = function Paginator_Factory(t) { return new (t || Paginator)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Paginator.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Paginator, selectors: [["p-paginator"]], inputs: { pageLinkSize: "pageLinkSize", alwaysShow: "alwaysShow", dropdownScrollHeight: "dropdownScrollHeight", currentPageReportTemplate: "currentPageReportTemplate", totalRecords: "totalRecords", rows: "rows", showPageLinks: "showPageLinks", first: "first", style: "style", styleClass: "styleClass", templateLeft: "templateLeft", templateRight: "templateRight", dropdownAppendTo: "dropdownAppendTo", showCurrentPageReport: "showCurrentPageReport", rowsPerPageOptions: "rowsPerPageOptions", showJumpToPageDropdown: "showJumpToPageDropdown" }, outputs: { onPageChange: "onPageChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-left-content", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-first", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-double-left"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-left"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-right"], ["type", "button", "pRipple", "", 1, "p-paginator-last", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-double-right"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-right-content", 4, "ngIf"], [1, "p-paginator-left-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page p-paginator-element p-link", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", "p-paginator-element", "p-link", 3, "ngClass", "click"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "onChange"], ["pTemplate", "selectedItem"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "ngModelChange", "onChange"], [1, "p-paginator-right-content"]], template: function Paginator_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, Paginator_div_0_Template, 15, 26, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc2.Ripple, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc3.Dropdown, ɵngcc4.NgControlStatus, ɵngcc4.NgModel, ɵngcc5.PrimeTemplate], styles: [".p-paginator{-ms-flex-align:center;-ms-flex-pack:center;-ms-flex-wrap:wrap;align-items:center;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:center}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-current,.p-paginator-first,.p-paginator-last,.p-paginator-next,.p-paginator-page,.p-paginator-prev{-moz-user-select:none;-ms-flex-align:center;-ms-flex-pack:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;line-height:1;overflow:hidden;position:relative;user-select:none}.p-paginator-element:focus{position:relative;z-index:1}"], encapsulation: 2, changeDetection: 0 });
Paginator.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
Paginator.propDecorators = {
    pageLinkSize: [{ type: Input }],
    onPageChange: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    alwaysShow: [{ type: Input }],
    templateLeft: [{ type: Input }],
    templateRight: [{ type: Input }],
    dropdownAppendTo: [{ type: Input }],
    dropdownScrollHeight: [{ type: Input }],
    currentPageReportTemplate: [{ type: Input }],
    showCurrentPageReport: [{ type: Input }],
    totalRecords: [{ type: Input }],
    rows: [{ type: Input }],
    rowsPerPageOptions: [{ type: Input }],
    showJumpToPageDropdown: [{ type: Input }],
    showPageLinks: [{ type: Input }],
    first: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Paginator, [{
        type: Component,
        args: [{
                selector: 'p-paginator',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-paginator p-component'" *ngIf="alwaysShow ? true : (pageLinks && pageLinks.length > 1)">
            <div class="p-paginator-left-content" *ngIf="templateLeft">
                <ng-container *ngTemplateOutlet="templateLeft; context: {$implicit: paginatorState}"></ng-container>
            </div>
            <span class="p-paginator-current" *ngIf="showCurrentPageReport">{{currentPageReport}}</span>
            <button type="button" [disabled]="isFirstPage()" (click)="changePageToFirst($event)" pRipple
                    class="p-paginator-first p-paginator-element p-link" [ngClass]="{'p-disabled':isFirstPage()}">
                <span class="p-paginator-icon pi pi-angle-double-left"></span>
            </button>
            <button type="button" [disabled]="isFirstPage()" (click)="changePageToPrev($event)" pRipple
                    class="p-paginator-prev p-paginator-element p-link" [ngClass]="{'p-disabled':isFirstPage()}">
                <span class="p-paginator-icon pi pi-angle-left"></span>
            </button>
            <span class="p-paginator-pages" *ngIf="showPageLinks">
                <button type="button" *ngFor="let pageLink of pageLinks" class="p-paginator-page p-paginator-element p-link" [ngClass]="{'p-highlight': (pageLink-1 == getPage())}"
                    (click)="onPageLinkClick($event, pageLink - 1)" pRipple>{{pageLink}}</button>
            </span>
            <p-dropdown [options]="pageItems" [ngModel]="getPage()" *ngIf="showJumpToPageDropdown"  styleClass="p-paginator-page-options"
                (onChange)="onPageDropdownChange($event)" [appendTo]="dropdownAppendTo" [scrollHeight]="dropdownScrollHeight">
                <ng-template pTemplate="selectedItem">{{currentPageReport}}</ng-template>
            </p-dropdown>
            <button type="button" [disabled]="isLastPage()" (click)="changePageToNext($event)" pRipple
                    class="p-paginator-next p-paginator-element p-link" [ngClass]="{'p-disabled':isLastPage()}">
                <span class="p-paginator-icon pi pi-angle-right"></span>
            </button>
            <button type="button" [disabled]="isLastPage()" (click)="changePageToLast($event)" pRipple
                    class="p-paginator-last p-paginator-element p-link" [ngClass]="{'p-disabled':isLastPage()}">
                <span class="p-paginator-icon pi pi-angle-double-right"></span>
            </button>
            <p-dropdown [options]="rowsPerPageItems" [(ngModel)]="rows" *ngIf="rowsPerPageOptions" styleClass="p-paginator-rpp-options"
                (onChange)="onRppChange($event)" [appendTo]="dropdownAppendTo" [scrollHeight]="dropdownScrollHeight"></p-dropdown>
            <div class="p-paginator-right-content" *ngIf="templateRight">
                <ng-container *ngTemplateOutlet="templateRight; context: {$implicit: paginatorState}"></ng-container>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-paginator{-ms-flex-align:center;-ms-flex-pack:center;-ms-flex-wrap:wrap;align-items:center;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:center}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-current,.p-paginator-first,.p-paginator-last,.p-paginator-next,.p-paginator-page,.p-paginator-prev{-moz-user-select:none;-ms-flex-align:center;-ms-flex-pack:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;line-height:1;overflow:hidden;position:relative;user-select:none}.p-paginator-element:focus{position:relative;z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { pageLinkSize: [{
            type: Input
        }], onPageChange: [{
            type: Output
        }], alwaysShow: [{
            type: Input
        }], dropdownScrollHeight: [{
            type: Input
        }], currentPageReportTemplate: [{
            type: Input
        }], totalRecords: [{
            type: Input
        }], rows: [{
            type: Input
        }], showPageLinks: [{
            type: Input
        }], first: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templateLeft: [{
            type: Input
        }], templateRight: [{
            type: Input
        }], dropdownAppendTo: [{
            type: Input
        }], showCurrentPageReport: [{
            type: Input
        }], rowsPerPageOptions: [{
            type: Input
        }], showJumpToPageDropdown: [{
            type: Input
        }] }); })();
export class PaginatorModule {
}
PaginatorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PaginatorModule });
PaginatorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PaginatorModule_Factory(t) { return new (t || PaginatorModule)(); }, imports: [[CommonModule, DropdownModule, FormsModule, SharedModule, RippleModule], DropdownModule, FormsModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PaginatorModule, { declarations: function () { return [Paginator]; }, imports: function () { return [CommonModule, DropdownModule, FormsModule, SharedModule, RippleModule]; }, exports: function () { return [Paginator, DropdownModule, FormsModule, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PaginatorModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DropdownModule, FormsModule, SharedModule, RippleModule],
                exports: [Paginator, DropdownModule, FormsModule, SharedModule],
                declarations: [Paginator]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdG9yL3BhZ2luYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBUSxLQUFLLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLFlBQVksRUFBcUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkwsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q3pDLE1BQU0sT0FBTyxTQUFTO0FBQUcsSUE4Q3JCLFlBQW9CLEVBQXFCO0FBQUksUUFBekIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQTVDakMsaUJBQVksR0FBVyxDQUFDLENBQUM7QUFDdEMsUUFDYyxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25FLFFBS2EsZUFBVSxHQUFZLElBQUksQ0FBQztBQUN4QyxRQU9hLHlCQUFvQixHQUFXLE9BQU8sQ0FBQztBQUNwRCxRQUNhLDhCQUF5QixHQUFXLCtCQUErQixDQUFDO0FBQ2pGLFFBR2EsaUJBQVksR0FBVyxDQUFDLENBQUM7QUFDdEMsUUFDYSxTQUFJLEdBQVcs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S0FBSztBQUFLLG1CQUVWLEtBQUs7QUFBSyxpQ0FFVixLQUFLO0FBQUsscUNBRVYsS0FBSztBQUFLLDRCQUVWLEtBQUs7QUFBSyxvQkE0Q1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWdLaEIsTUFBTSxPQUFPLGVBQWU7QUFBRzsyQ0FMOUIsUUFBUSxTQUFDO0dBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLFlBQVksQ0FBQyxrQkFDNUUsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsWUFBWSxDQUFDLGtCQUM1RCxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FDNUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsT25Jbml0LElucHV0LE91dHB1dCxDaGFuZ2VEZXRlY3RvclJlZixFdmVudEVtaXR0ZXIsVGVtcGxhdGVSZWYsT25DaGFuZ2VzLFNpbXBsZUNoYW5nZXMsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XG5pbXBvcnQge1NlbGVjdEl0ZW19IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7UmlwcGxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtcGFnaW5hdG9yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbbmdDbGFzc109XCIncC1wYWdpbmF0b3IgcC1jb21wb25lbnQnXCIgKm5nSWY9XCJhbHdheXNTaG93ID8gdHJ1ZSA6IChwYWdlTGlua3MgJiYgcGFnZUxpbmtzLmxlbmd0aCA+IDEpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1wYWdpbmF0b3ItbGVmdC1jb250ZW50XCIgKm5nSWY9XCJ0ZW1wbGF0ZUxlZnRcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVMZWZ0OyBjb250ZXh0OiB7JGltcGxpY2l0OiBwYWdpbmF0b3JTdGF0ZX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBhZ2luYXRvci1jdXJyZW50XCIgKm5nSWY9XCJzaG93Q3VycmVudFBhZ2VSZXBvcnRcIj57e2N1cnJlbnRQYWdlUmVwb3J0fX08L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwiaXNGaXJzdFBhZ2UoKVwiIChjbGljayk9XCJjaGFuZ2VQYWdlVG9GaXJzdCgkZXZlbnQpXCIgcFJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtcGFnaW5hdG9yLWZpcnN0IHAtcGFnaW5hdG9yLWVsZW1lbnQgcC1saW5rXCIgW25nQ2xhc3NdPVwieydwLWRpc2FibGVkJzppc0ZpcnN0UGFnZSgpfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1wYWdpbmF0b3ItaWNvbiBwaSBwaS1hbmdsZS1kb3VibGUtbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW2Rpc2FibGVkXT1cImlzRmlyc3RQYWdlKClcIiAoY2xpY2spPVwiY2hhbmdlUGFnZVRvUHJldigkZXZlbnQpXCIgcFJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtcGFnaW5hdG9yLXByZXYgcC1wYWdpbmF0b3ItZWxlbWVudCBwLWxpbmtcIiBbbmdDbGFzc109XCJ7J3AtZGlzYWJsZWQnOmlzRmlyc3RQYWdlKCl9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBhZ2luYXRvci1pY29uIHBpIHBpLWFuZ2xlLWxlZnRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1wYWdpbmF0b3ItcGFnZXNcIiAqbmdJZj1cInNob3dQYWdlTGlua3NcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdGb3I9XCJsZXQgcGFnZUxpbmsgb2YgcGFnZUxpbmtzXCIgY2xhc3M9XCJwLXBhZ2luYXRvci1wYWdlIHAtcGFnaW5hdG9yLWVsZW1lbnQgcC1saW5rXCIgW25nQ2xhc3NdPVwieydwLWhpZ2hsaWdodCc6IChwYWdlTGluay0xID09IGdldFBhZ2UoKSl9XCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUGFnZUxpbmtDbGljaygkZXZlbnQsIHBhZ2VMaW5rIC0gMSlcIiBwUmlwcGxlPnt7cGFnZUxpbmt9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHAtZHJvcGRvd24gW29wdGlvbnNdPVwicGFnZUl0ZW1zXCIgW25nTW9kZWxdPVwiZ2V0UGFnZSgpXCIgKm5nSWY9XCJzaG93SnVtcFRvUGFnZURyb3Bkb3duXCIgIHN0eWxlQ2xhc3M9XCJwLXBhZ2luYXRvci1wYWdlLW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJvblBhZ2VEcm9wZG93bkNoYW5nZSgkZXZlbnQpXCIgW2FwcGVuZFRvXT1cImRyb3Bkb3duQXBwZW5kVG9cIiBbc2Nyb2xsSGVpZ2h0XT1cImRyb3Bkb3duU2Nyb2xsSGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cInNlbGVjdGVkSXRlbVwiPnt7Y3VycmVudFBhZ2VSZXBvcnR9fTwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtZHJvcGRvd24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwiaXNMYXN0UGFnZSgpXCIgKGNsaWNrKT1cImNoYW5nZVBhZ2VUb05leHQoJGV2ZW50KVwiIHBSaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLXBhZ2luYXRvci1uZXh0IHAtcGFnaW5hdG9yLWVsZW1lbnQgcC1saW5rXCIgW25nQ2xhc3NdPVwieydwLWRpc2FibGVkJzppc0xhc3RQYWdlKCl9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBhZ2luYXRvci1pY29uIHBpIHBpLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwiaXNMYXN0UGFnZSgpXCIgKGNsaWNrKT1cImNoYW5nZVBhZ2VUb0xhc3QoJGV2ZW50KVwiIHBSaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLXBhZ2luYXRvci1sYXN0IHAtcGFnaW5hdG9yLWVsZW1lbnQgcC1saW5rXCIgW25nQ2xhc3NdPVwieydwLWRpc2FibGVkJzppc0xhc3RQYWdlKCl9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBhZ2luYXRvci1pY29uIHBpIHBpLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHAtZHJvcGRvd24gW29wdGlvbnNdPVwicm93c1BlclBhZ2VJdGVtc1wiIFsobmdNb2RlbCldPVwicm93c1wiICpuZ0lmPVwicm93c1BlclBhZ2VPcHRpb25zXCIgc3R5bGVDbGFzcz1cInAtcGFnaW5hdG9yLXJwcC1vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwib25ScHBDaGFuZ2UoJGV2ZW50KVwiIFthcHBlbmRUb109XCJkcm9wZG93bkFwcGVuZFRvXCIgW3Njcm9sbEhlaWdodF09XCJkcm9wZG93blNjcm9sbEhlaWdodFwiPjwvcC1kcm9wZG93bj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBhZ2luYXRvci1yaWdodC1jb250ZW50XCIgKm5nSWY9XCJ0ZW1wbGF0ZVJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlUmlnaHQ7IGNvbnRleHQ6IHskaW1wbGljaXQ6IHBhZ2luYXRvclN0YXRlfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0b3IuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgcGFnZUxpbmtTaXplOiBudW1iZXIgPSA1O1xuXG4gICAgQE91dHB1dCgpIG9uUGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYWx3YXlzU2hvdzogYm9vbGVhbiA9IHRydWU7XG4gICAgXG4gICAgQElucHV0KCkgdGVtcGxhdGVMZWZ0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIFxuICAgIEBJbnB1dCgpIHRlbXBsYXRlUmlnaHQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBASW5wdXQoKSBkcm9wZG93bkFwcGVuZFRvOiBhbnk7XG5cbiAgICBASW5wdXQoKSBkcm9wZG93blNjcm9sbEhlaWdodDogc3RyaW5nID0gJzIwMHB4JztcblxuICAgIEBJbnB1dCgpIGN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGU6IHN0cmluZyA9ICd7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbFBhZ2VzfSc7XG5cbiAgICBASW5wdXQoKSBzaG93Q3VycmVudFBhZ2VSZXBvcnQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB0b3RhbFJlY29yZHM6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSByb3dzOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIEBJbnB1dCgpIHJvd3NQZXJQYWdlT3B0aW9uczogYW55W107XG5cbiAgICBASW5wdXQoKSBzaG93SnVtcFRvUGFnZURyb3Bkb3duOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2hvd1BhZ2VMaW5rczogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwYWdlTGlua3M6IG51bWJlcltdO1xuXG4gICAgcGFnZUl0ZW1zOiBTZWxlY3RJdGVtW107XG5cbiAgICByb3dzUGVyUGFnZUl0ZW1zOiBTZWxlY3RJdGVtW107XG4gICAgXG4gICAgcGFnaW5hdG9yU3RhdGU6IGFueTtcblxuICAgIF9maXJzdDogbnVtYmVyID0gMDtcblxuICAgIF9wYWdlOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdG9yU3RhdGUoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2U6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS50b3RhbFJlY29yZHMpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZUxpbmtzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRvclN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpcnN0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJvd3NQZXJQYWdlT3B0aW9ucygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS5maXJzdCkge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3QgPSBzaW1wbGVDaGFuZ2UuZmlyc3QuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdG9yU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2Uucm93cykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdG9yU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2Uucm93c1BlclBhZ2VPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJvd3NQZXJQYWdlT3B0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IGZpcnN0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdDtcbiAgICB9XG4gICAgc2V0IGZpcnN0KHZhbDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZmlyc3QgPSB2YWw7XG4gICAgfVxuXG4gICAgdXBkYXRlUm93c1BlclBhZ2VPcHRpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5yb3dzUGVyUGFnZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucm93c1BlclBhZ2VJdGVtcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgb3B0IG9mIHRoaXMucm93c1BlclBhZ2VPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgJiYgb3B0WydzaG93QWxsJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzUGVyUGFnZUl0ZW1zLnVuc2hpZnQoe2xhYmVsOiBvcHRbJ3Nob3dBbGwnXSwgdmFsdWU6IHRoaXMudG90YWxSZWNvcmRzfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3NQZXJQYWdlSXRlbXMucHVzaCh7bGFiZWw6IFN0cmluZyhvcHQpLCB2YWx1ZTogb3B0fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNGaXJzdFBhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhZ2UoKSA9PT0gMDtcbiAgICB9XG5cbiAgICBpc0xhc3RQYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYWdlKCkgPT09IHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxO1xuICAgIH1cblxuICAgIGdldFBhZ2VDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnRvdGFsUmVjb3Jkcy90aGlzLnJvd3MpfHwxO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBhZ2VMaW5rQm91bmRhcmllcygpIHtcbiAgICAgICAgbGV0IG51bWJlck9mUGFnZXMgPSB0aGlzLmdldFBhZ2VDb3VudCgpLFxuICAgICAgICB2aXNpYmxlUGFnZXMgPSBNYXRoLm1pbih0aGlzLnBhZ2VMaW5rU2l6ZSwgbnVtYmVyT2ZQYWdlcyk7XG5cbiAgICAgICAgLy9jYWxjdWxhdGUgcmFuZ2UsIGtlZXAgY3VycmVudCBpbiBtaWRkbGUgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGxldCBzdGFydCA9IE1hdGgubWF4KDAsIE1hdGguY2VpbCh0aGlzLmdldFBhZ2UoKSAtICgodmlzaWJsZVBhZ2VzKSAvIDIpKSksXG4gICAgICAgIGVuZCA9IE1hdGgubWluKG51bWJlck9mUGFnZXMgLSAxLCBzdGFydCArIHZpc2libGVQYWdlcyAtIDEpO1xuXG4gICAgICAgIC8vY2hlY2sgd2hlbiBhcHByb2FjaGluZyB0byBsYXN0IHBhZ2VcbiAgICAgICAgdmFyIGRlbHRhID0gdGhpcy5wYWdlTGlua1NpemUgLSAoZW5kIC0gc3RhcnQgKyAxKTtcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgwLCBzdGFydCAtIGRlbHRhKTtcblxuICAgICAgICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xuICAgIH1cblxuICAgIHVwZGF0ZVBhZ2VMaW5rcygpIHtcbiAgICAgICAgdGhpcy5wYWdlTGlua3MgPSBbXTtcbiAgICAgICAgbGV0IGJvdW5kYXJpZXMgPSB0aGlzLmNhbGN1bGF0ZVBhZ2VMaW5rQm91bmRhcmllcygpLFxuICAgICAgICBzdGFydCA9IGJvdW5kYXJpZXNbMF0sXG4gICAgICAgIGVuZCA9IGJvdW5kYXJpZXNbMV07XG5cbiAgICAgICAgZm9yKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUxpbmtzLnB1c2goaSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd0p1bXBUb1BhZ2VEcm9wZG93bikge1xuICAgICAgICAgICAgdGhpcy5wYWdlSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRQYWdlQ291bnQoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSXRlbXMucHVzaCh7bGFiZWw6IFN0cmluZyhpICsgMSksIHZhbHVlOiBpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VQYWdlKHAgOm51bWJlcikge1xuICAgICAgICB2YXIgcGMgPSB0aGlzLmdldFBhZ2VDb3VudCgpO1xuXG4gICAgICAgIGlmIChwID49IDAgJiYgcCA8IHBjKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IHRoaXMucm93cyAqIHA7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgcGFnZTogcCxcbiAgICAgICAgICAgICAgICBmaXJzdDogdGhpcy5maXJzdCxcbiAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnJvd3MsXG4gICAgICAgICAgICAgICAgcGFnZUNvdW50OiBwY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZUxpbmtzKCk7XG5cbiAgICAgICAgICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQoc3RhdGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0b3JTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRmlyc3QoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgaWYgKHBhZ2UgPiAwICYmIHRoaXMudG90YWxSZWNvcmRzICYmICh0aGlzLmZpcnN0ID49IHRoaXMudG90YWxSZWNvcmRzKSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5jaGFuZ2VQYWdlKHBhZ2UgLSAxKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQYWdlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZmlyc3QgLyB0aGlzLnJvd3MpO1xuICAgIH1cblxuICAgIGNoYW5nZVBhZ2VUb0ZpcnN0KGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaXNGaXJzdFBhZ2UoKSl7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDApO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNoYW5nZVBhZ2VUb1ByZXYoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMuZ2V0UGFnZSgpIC0gMSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnZVRvTmV4dChldmVudCkge1xuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5nZXRQYWdlKCkgICsgMSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnZVRvTGFzdChldmVudCkge1xuICAgICAgaWYgKCF0aGlzLmlzTGFzdFBhZ2UoKSl7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvblBhZ2VMaW5rQ2xpY2soZXZlbnQsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHBhZ2UpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uUnBwQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLmdldFBhZ2UoKSk7XG4gICAgfVxuXG4gICAgb25QYWdlRHJvcGRvd25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKGV2ZW50LnZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlUGFnaW5hdG9yU3RhdGUoKSB7XG4gICAgICAgIHRoaXMucGFnaW5hdG9yU3RhdGUgPSB7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLmdldFBhZ2UoKSxcbiAgICAgICAgICAgIHBhZ2VDb3VudDogdGhpcy5nZXRQYWdlQ291bnQoKSxcbiAgICAgICAgICAgIHJvd3M6IHRoaXMucm93cyxcbiAgICAgICAgICAgIGZpcnN0OiB0aGlzLmZpcnN0LFxuICAgICAgICAgICAgdG90YWxSZWNvcmRzOiB0aGlzLnRvdGFsUmVjb3Jkc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRQYWdlUmVwb3J0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ7Y3VycmVudFBhZ2V9XCIsIFN0cmluZyh0aGlzLmdldFBhZ2UoKSArIDEpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwie3RvdGFsUGFnZXN9XCIsIFN0cmluZyh0aGlzLmdldFBhZ2VDb3VudCgpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShcIntmaXJzdH1cIiwgU3RyaW5nKHRoaXMuX2ZpcnN0ICsgMSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ7bGFzdH1cIiwgU3RyaW5nKE1hdGgubWluKHRoaXMuX2ZpcnN0ICsgdGhpcy5yb3dzLCB0aGlzLnRvdGFsUmVjb3JkcykpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwie3Jvd3N9XCIsIFN0cmluZyh0aGlzLnJvd3MpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwie3RvdGFsUmVjb3Jkc31cIiwgU3RyaW5nKHRoaXMudG90YWxSZWNvcmRzKSk7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsRHJvcGRvd25Nb2R1bGUsRm9ybXNNb2R1bGUsU2hhcmVkTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1BhZ2luYXRvcixEcm9wZG93bk1vZHVsZSxGb3Jtc01vZHVsZSxTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1BhZ2luYXRvcl1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yTW9kdWxlIHsgfVxuIl19