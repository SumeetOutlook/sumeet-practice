import { NgModule, Component, HostListener, Directive, Optional, Input, Output, EventEmitter, ElementRef, ContentChildren, ViewChild, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { DomHandler } from 'primeng/dom';
import { ObjectUtils } from 'primeng/utils';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterUtils } from 'primeng/utils';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/paginator';
import * as ɵngcc3 from '@angular/cdk/scrolling';

const _c0 = ["container"];
const _c1 = ["resizeHelper"];
const _c2 = ["reorderIndicatorUp"];
const _c3 = ["reorderIndicatorDown"];
const _c4 = ["table"];
const _c5 = ["scrollableView"];
const _c6 = ["scrollableFrozenView"];
function Table_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("p-datatable-loading-icon pi-spin " + ctx_r1.loadingIcon);
} }
function Table_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Table_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtemplate(1, Table_div_3_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.captionTemplate);
} }
function Table_p_paginator_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 15);
    ɵngcc0.ɵɵlistener("onPageChange", function Table_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onPageChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r3.rows)("first", ctx_r3.first)("totalRecords", ctx_r3.totalRecords)("pageLinkSize", ctx_r3.pageLinks)("alwaysShow", ctx_r3.alwaysShowPaginator)("rowsPerPageOptions", ctx_r3.rowsPerPageOptions)("templateLeft", ctx_r3.paginatorLeftTemplate)("templateRight", ctx_r3.paginatorRightTemplate)("dropdownAppendTo", ctx_r3.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r3.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r3.currentPageReportTemplate)("showCurrentPageReport", ctx_r3.showCurrentPageReport)("showJumpToPageDropdown", ctx_r3.showJumpToPageDropdown)("showPageLinks", ctx_r3.showPageLinks);
} }
function Table_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Table_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Table_div_5_tfoot_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c7 = function (a0) { return { $implicit: a0 }; };
function Table_div_5_tfoot_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tfoot", 23);
    ɵngcc0.ɵɵtemplate(1, Table_div_5_tfoot_7_ng_container_1_Template, 1, 0, "ng-container", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r17.footerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c7, ctx_r17.columns));
} }
function Table_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "table", 17, 18);
    ɵngcc0.ɵɵtemplate(3, Table_div_5_ng_container_3_Template, 1, 0, "ng-container", 19);
    ɵngcc0.ɵɵelementStart(4, "thead", 20);
    ɵngcc0.ɵɵtemplate(5, Table_div_5_ng_container_5_Template, 1, 0, "ng-container", 19);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(6, "tbody", 21);
    ɵngcc0.ɵɵtemplate(7, Table_div_5_tfoot_7_Template, 2, 4, "tfoot", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r4.tableStyleClass)("ngStyle", ctx_r4.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.headerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(11, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTableBody", ctx_r4.columns)("pTableBodyTemplate", ctx_r4.bodyTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.footerTemplate);
} }
const _c8 = function (a0) { return { width: a0 }; };
function Table_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 28, 29);
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("pScrollableView", ctx_r19.frozenColumns)("frozen", true)("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c8, ctx_r19.frozenWidth))("scrollHeight", ctx_r19.scrollHeight);
} }
const _c9 = function (a0, a1) { return { left: a0, width: a1 }; };
function Table_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, Table_div_6_div_1_Template, 2, 6, "div", 25);
    ɵngcc0.ɵɵelement(2, "div", 26, 27);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.frozenColumns || ctx_r5.frozenBodyTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pScrollableView", ctx_r5.columns)("frozen", false)("scrollHeight", ctx_r5.scrollHeight)("ngStyle", ɵngcc0.ɵɵpureFunction2(5, _c9, ctx_r5.frozenWidth, "calc(100% - " + ctx_r5.frozenWidth + ")"));
} }
function Table_p_paginator_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 30);
    ɵngcc0.ɵɵlistener("onPageChange", function Table_p_paginator_7_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.onPageChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r6.rows)("first", ctx_r6.first)("totalRecords", ctx_r6.totalRecords)("pageLinkSize", ctx_r6.pageLinks)("alwaysShow", ctx_r6.alwaysShowPaginator)("rowsPerPageOptions", ctx_r6.rowsPerPageOptions)("templateLeft", ctx_r6.paginatorLeftTemplate)("templateRight", ctx_r6.paginatorRightTemplate)("dropdownAppendTo", ctx_r6.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r6.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r6.currentPageReportTemplate)("showCurrentPageReport", ctx_r6.showCurrentPageReport)("showJumpToPageDropdown", ctx_r6.showJumpToPageDropdown)("showPageLinks", ctx_r6.showPageLinks);
} }
function Table_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Table_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 31);
    ɵngcc0.ɵɵtemplate(1, Table_div_8_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.summaryTemplate);
} }
function Table_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 32, 33);
} }
function Table_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 34, 35);
} }
function Table_span_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 36, 37);
} }
const _c10 = function (a1, a2, a3, a4, a5, a6, a7) { return { "p-datatable p-component": true, "p-datatable-hoverable-rows": a1, "p-datatable-auto-layout": a2, "p-datatable-resizable": a3, "p-datatable-resizable-fit": a4, "p-datatable-scrollable": a5, "p-datatable-flex-scrollable": a6, "p-datatable-responsive": a7 }; };
const _c11 = ["pTableBody", ""];
function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c12 = function (a0, a1, a2, a3) { return { $implicit: a0, rowIndex: a1, columns: a2, editing: a3 }; };
function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
} if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction4(2, _c12, rowData_r6, ctx_r5.dt.paginator ? ctx_r5.dt.first + rowIndex_r7 : rowIndex_r7, ctx_r5.columns, ctx_r5.dt.editMode === "row" && ctx_r5.dt.isRowEditing(rowData_r6)));
} }
function TableBody_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_Template, 1, 7, "ng-template", 1);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.dt.paginator && !ctx_r0.dt.lazy ? ɵngcc0.ɵɵpipeBind3(2, 2, ctx_r0.dt.filteredValue || ctx_r0.dt.value, ctx_r0.dt.first, ctx_r0.dt.first + ctx_r0.dt.rows) : ctx_r0.dt.filteredValue || ctx_r0.dt.value)("ngForTrackBy", ctx_r0.dt.rowTrackBy);
} }
function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
} if (rf & 2) {
    const rowData_r10 = ctx.$implicit;
    const rowIndex_r11 = ctx.index;
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", rowData_r10 ? ctx_r9.template : ctx_r9.dt.loadingBodyTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction4(2, _c12, rowData_r10, ctx_r9.dt.paginator ? ctx_r9.dt.first + rowIndex_r11 : rowIndex_r11, ctx_r9.columns, ctx_r9.dt.editMode === "row" && ctx_r9.dt.isRowEditing(rowData_r10)));
} }
function TableBody_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_Template, 1, 7, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r1.dt.filteredValue || ctx_r1.dt.value)("cdkVirtualForTrackBy", ctx_r1.dt.rowTrackBy)("cdkVirtualForTemplateCacheSize", 0);
} }
function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c13 = function (a0, a1, a2) { return { $implicit: a0, rowIndex: a1, columns: a2 }; };
function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext();
    const rowData_r14 = ctx_r19.$implicit;
    const rowIndex_r15 = ctx_r19.index;
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r17.dt.expandedRowTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c13, rowData_r14, ctx_r17.dt.paginator ? ctx_r17.dt.first + rowIndex_r15 : rowIndex_r15, ctx_r17.columns));
} }
const _c14 = function (a0, a1, a2, a3, a4) { return { $implicit: a0, rowIndex: a1, columns: a2, expanded: a3, editing: a4 }; };
function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 6, "ng-container", 0);
} if (rf & 2) {
    const rowData_r14 = ctx.$implicit;
    const rowIndex_r15 = ctx.index;
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r13.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(3, _c14, rowData_r14, ctx_r13.dt.paginator ? ctx_r13.dt.first + rowIndex_r15 : rowIndex_r15, ctx_r13.columns, ctx_r13.dt.isRowExpanded(rowData_r14), ctx_r13.dt.editMode === "row" && ctx_r13.dt.isRowEditing(rowData_r14)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r13.dt.isRowExpanded(rowData_r14));
} }
function TableBody_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_Template, 2, 9, "ng-template", 1);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.dt.paginator && !ctx_r2.dt.lazy ? ɵngcc0.ɵɵpipeBind3(2, 2, ctx_r2.dt.filteredValue || ctx_r2.dt.value, ctx_r2.dt.first, ctx_r2.dt.first + ctx_r2.dt.rows) : ctx_r2.dt.filteredValue || ctx_r2.dt.value)("ngForTrackBy", ctx_r2.dt.rowTrackBy);
} }
function TableBody_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c15 = function (a0, a1) { return { $implicit: a0, frozen: a1 }; };
function TableBody_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.loadingBodyTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c15, ctx_r3.columns, ctx_r3.frozen));
} }
function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TableBody_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.dt.emptyMessageTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c15, ctx_r4.columns, ctx_r4.frozen));
} }
const _c16 = ["scrollHeader"];
const _c17 = ["scrollHeaderBox"];
const _c18 = ["scrollBody"];
const _c19 = ["scrollTable"];
const _c20 = ["scrollFooter"];
const _c21 = ["scrollFooterBox"];
const _c22 = ["scrollableAligner"];
const _c23 = ["pScrollableView", ""];
function ScrollableView_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ScrollableView_ng_template_9_ng_container_0_Template, 1, 0, "ng-container", 5);
} if (rf & 2) {
    const rowData_r12 = ctx.$implicit;
    const rowIndex_r13 = ctx.index;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.dt.frozenRowsTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c13, rowData_r12, rowIndex_r13, ctx_r4.columns));
} }
function ScrollableView_ng_container_10_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_container_10_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23, 24);
} }
const _c24 = function (a0, a1) { return { "max-height": a0, "overflow-y": a1 }; };
function ScrollableView_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 17, 18);
    ɵngcc0.ɵɵelementStart(3, "table", 19, 20);
    ɵngcc0.ɵɵtemplate(5, ScrollableView_ng_container_10_ng_container_5_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelement(6, "tbody", 21);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, ScrollableView_ng_container_10_div_7_Template, 2, 0, "div", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(10, _c24, ctx_r5.dt.scrollHeight !== "flex" ? ctx_r5.scrollHeight : undefined, !ctx_r5.frozen && ctx_r5.dt.scrollHeight ? "scroll" : undefined));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap(ctx_r5.dt.tableStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r5.dt.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.frozen ? ctx_r5.dt.frozenColGroupTemplate || ctx_r5.dt.colGroupTemplate : ctx_r5.dt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(13, _c7, ctx_r5.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTableBody", ctx_r5.columns)("pTableBodyTemplate", ctx_r5.frozen ? ctx_r5.dt.frozenBodyTemplate || ctx_r5.dt.bodyTemplate : ctx_r5.dt.bodyTemplate)("frozen", ctx_r5.frozen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.frozen);
} }
function ScrollableView_ng_template_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_template_11_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23, 24);
} }
function ScrollableView_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 25);
    ɵngcc0.ɵɵlistener("scrolledIndexChange", function ScrollableView_ng_template_11_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onScrollIndexChange($event); });
    ɵngcc0.ɵɵelementStart(1, "table", 19, 20);
    ɵngcc0.ɵɵtemplate(3, ScrollableView_ng_template_11_ng_container_3_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelement(4, "tbody", 21);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, ScrollableView_ng_template_11_div_5_Template, 2, 0, "div", 22);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r7.dt.scrollHeight !== "flex" ? ctx_r7.scrollHeight : undefined);
    ɵngcc0.ɵɵproperty("itemSize", ctx_r7.dt.virtualRowHeight)("minBufferPx", ctx_r7.dt.minBufferPx)("maxBufferPx", ctx_r7.dt.maxBufferPx);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r7.dt.tableStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r7.dt.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.frozen ? ctx_r7.dt.frozenColGroupTemplate || ctx_r7.dt.colGroupTemplate : ctx_r7.dt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(14, _c7, ctx_r7.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTableBody", ctx_r7.columns)("pTableBodyTemplate", ctx_r7.frozen ? ctx_r7.dt.frozenBodyTemplate || ctx_r7.dt.bodyTemplate : ctx_r7.dt.bodyTemplate)("frozen", ctx_r7.frozen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.frozen);
} }
function ScrollableView_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c25 = function (a0, a1, a2) { return { "pi-sort-amount-up-alt": a0, "pi-sort-amount-down": a1, "pi-sort-alt": a2 }; };
function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function CellEditor_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.inputTemplate);
} }
function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function CellEditor_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.outputTemplate);
} }
const _c26 = ["box"];
const _c27 = function (a1, a2) { return { "p-radiobutton-box p-component": true, "p-highlight": a1, "p-disabled": a2 }; };
const _c28 = function (a1, a2) { return { "p-checkbox-box p-component": true, "p-highlight": a1, "p-disabled": a2 }; };
const _c29 = function (a0) { return { "pi pi-check": a0 }; };
const _c30 = function (a1, a2) { return { "p-checkbox-box": true, "p-highlight": a1, "p-disabled": a2 }; };
export class TableService {
    constructor() {
        this.sortSource = new Subject();
        this.selectionSource = new Subject();
        this.contextMenuSource = new Subject();
        this.valueSource = new Subject();
        this.totalRecordsSource = new Subject();
        this.columnsSource = new Subject();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.valueSource$ = this.valueSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
        this.columnsSource$ = this.columnsSource.asObservable();
    }
    onSort(sortMeta) {
        this.sortSource.next(sortMeta);
    }
    onSelectionChange() {
        this.selectionSource.next();
    }
    onContextMenu(data) {
        this.contextMenuSource.next(data);
    }
    onValueChange(value) {
        this.valueSource.next(value);
    }
    onTotalRecordsChange(value) {
        this.totalRecordsSource.next(value);
    }
    onColumnsChange(columns) {
        this.columnsSource.next(columns);
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(); };
TableService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TableService, factory: TableService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableService, [{
        type: Injectable
    }], function () { return []; }, null); })();
export class Table {
    constructor(el, zone, tableService, cd) {
        this.el = el;
        this.zone = zone;
        this.tableService = tableService;
        this.cd = cd;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.paginatorDropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.showPageLinks = true;
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new EventEmitter();
        this.contextMenuSelectionChange = new EventEmitter();
        this.contextMenuSelectionMode = "separate";
        this.rowTrackBy = (index, item) => item;
        this.lazy = false;
        this.lazyLoadOnInit = true;
        this.compareSelectionBy = 'deepEquals';
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.filters = {};
        this.filterDelay = 300;
        this.expandedRowKeys = {};
        this.editingRowKeys = {};
        this.rowExpandMode = 'multiple';
        this.virtualScrollDelay = 150;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';
        this.loadingIcon = 'pi pi-spinner';
        this.showLoader = true;
        this.stateStorage = 'session';
        this.editMode = 'cell';
        this.onRowSelect = new EventEmitter();
        this.onRowUnselect = new EventEmitter();
        this.onPage = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onLazyLoad = new EventEmitter();
        this.onRowExpand = new EventEmitter();
        this.onRowCollapse = new EventEmitter();
        this.onContextMenuSelect = new EventEmitter();
        this.onColResize = new EventEmitter();
        this.onColReorder = new EventEmitter();
        this.onRowReorder = new EventEmitter();
        this.onEditInit = new EventEmitter();
        this.onEditComplete = new EventEmitter();
        this.onEditCancel = new EventEmitter();
        this.onHeaderCheckboxToggle = new EventEmitter();
        this.sortFunction = new EventEmitter();
        this.firstChange = new EventEmitter();
        this.rowsChange = new EventEmitter();
        this.onStateSave = new EventEmitter();
        this.onStateRestore = new EventEmitter();
        this._value = [];
        this._totalRecords = 0;
        this._first = 0;
        this.selectionKeys = {};
        this._sortOrder = 1;
    }
    ngOnInit() {
        if (this.lazy && this.lazyLoadOnInit) {
            if (!this.virtualScroll) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            if (this.restoringFilter) {
                this.restoringFilter = false;
            }
        }
        this.initialized = true;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'caption':
                    this.captionTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'body':
                    this.bodyTemplate = item.template;
                    break;
                case 'loadingbody':
                    this.loadingBodyTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'summary':
                    this.summaryTemplate = item.template;
                    break;
                case 'colgroup':
                    this.colGroupTemplate = item.template;
                    break;
                case 'rowexpansion':
                    this.expandedRowTemplate = item.template;
                    break;
                case 'frozenrows':
                    this.frozenRowsTemplate = item.template;
                    break;
                case 'frozenheader':
                    this.frozenHeaderTemplate = item.template;
                    break;
                case 'frozenbody':
                    this.frozenBodyTemplate = item.template;
                    break;
                case 'frozenfooter':
                    this.frozenFooterTemplate = item.template;
                    break;
                case 'frozencolgroup':
                    this.frozenColGroupTemplate = item.template;
                    break;
                case 'emptymessage':
                    this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    this.paginatorRightTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewInit() {
        if (this.isStateful() && this.resizableColumns) {
            this.restoreColumnWidths();
        }
    }
    clearCache() {
        if (this.scrollable) {
            if (this.scrollableViewChild) {
                this.scrollableViewChild.clearCache();
            }
            if (this.scrollableFrozenViewChild) {
                this.scrollableViewChild.clearCache();
            }
        }
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.value) {
            if (this.isStateful() && !this.stateRestored) {
                this.restoreState();
            }
            this._value = simpleChange.value.currentValue;
            if (!this.lazy) {
                this.clearCache();
                this.totalRecords = (this._value ? this._value.length : 0);
                if (this.sortMode == 'single' && this.sortField)
                    this.sortSingle();
                else if (this.sortMode == 'multiple' && this.multiSortMeta)
                    this.sortMultiple();
                else if (this.hasFilter()) //sort already filters
                    this._filter();
            }
            this.tableService.onValueChange(simpleChange.value.currentValue);
        }
        if (simpleChange.columns) {
            this._columns = simpleChange.columns.currentValue;
            this.tableService.onColumnsChange(simpleChange.columns.currentValue);
            if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
                this.restoreColumnOrder();
            }
        }
        if (simpleChange.sortField) {
            this._sortField = simpleChange.sortField.currentValue;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        }
        if (simpleChange.sortOrder) {
            this._sortOrder = simpleChange.sortOrder.currentValue;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        }
        if (simpleChange.multiSortMeta) {
            this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
            if (this.sortMode === 'multiple') {
                this.sortMultiple();
            }
        }
        if (simpleChange.selection) {
            this._selection = simpleChange.selection.currentValue;
            if (!this.preventSelectionSetterPropagation) {
                this.updateSelectionKeys();
                this.tableService.onSelectionChange();
            }
            this.preventSelectionSetterPropagation = false;
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
    }
    get columns() {
        return this._columns;
    }
    set columns(cols) {
        this._columns = cols;
    }
    get first() {
        return this._first;
    }
    set first(val) {
        this._first = val;
    }
    get rows() {
        return this._rows;
    }
    set rows(val) {
        this._rows = val;
    }
    get totalRecords() {
        return this._totalRecords;
    }
    set totalRecords(val) {
        this._totalRecords = val;
        this.tableService.onTotalRecordsChange(this._totalRecords);
    }
    get sortField() {
        return this._sortField;
    }
    set sortField(val) {
        this._sortField = val;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(val) {
        this._sortOrder = val;
    }
    get multiSortMeta() {
        return this._multiSortMeta;
    }
    set multiSortMeta(val) {
        this._multiSortMeta = val;
    }
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
    }
    updateSelectionKeys() {
        if (this.dataKey && this._selection) {
            this.selectionKeys = {};
            if (Array.isArray(this._selection)) {
                for (let data of this._selection) {
                    this.selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.selectionKeys[String(ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
            }
        }
    }
    onPageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
        this.firstChange.emit(this.first);
        this.rowsChange.emit(this.rows);
        this.tableService.onValueChange(this.value);
        if (this.isStateful()) {
            this.saveState();
        }
        this.anchorRowIndex = null;
        if (this.scrollable) {
            this.resetScrollTop();
        }
    }
    sort(event) {
        let originalEvent = event.originalEvent;
        if (this.sortMode === 'single') {
            this._sortOrder = (this.sortField === event.field) ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();
            if (this.resetPageOnSort) {
                this._first = 0;
                this.firstChange.emit(this._first);
                if (this.scrollable) {
                    this.resetScrollTop();
                }
            }
        }
        if (this.sortMode === 'multiple') {
            let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            let sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
                if (!metaKey) {
                    this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                    if (this.resetPageOnSort) {
                        this._first = 0;
                        this.firstChange.emit(this._first);
                        if (this.scrollable) {
                            this.resetScrollTop();
                        }
                    }
                }
                else {
                    sortMeta.order = sortMeta.order * -1;
                }
            }
            else {
                if (!metaKey || !this.multiSortMeta) {
                    this._multiSortMeta = [];
                    if (this.resetPageOnSort) {
                        this._first = 0;
                        this.firstChange.emit(this._first);
                    }
                }
                this._multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
            }
            this.sortMultiple();
        }
        if (this.isStateful()) {
            this.saveState();
        }
        this.anchorRowIndex = null;
    }
    sortSingle() {
        if (this.sortField && this.sortOrder) {
            if (this.restoringSort) {
                this.restoringSort = false;
            }
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                if (this.customSort) {
                    this.sortFunction.emit({
                        data: this.value,
                        mode: this.sortMode,
                        field: this.sortField,
                        order: this.sortOrder
                    });
                }
                else {
                    this.value.sort((data1, data2) => {
                        let value1 = ObjectUtils.resolveFieldData(data1, this.sortField);
                        let value2 = ObjectUtils.resolveFieldData(data2, this.sortField);
                        let result = null;
                        if (value1 == null && value2 != null)
                            result = -1;
                        else if (value1 != null && value2 == null)
                            result = 1;
                        else if (value1 == null && value2 == null)
                            result = 0;
                        else if (typeof value1 === 'string' && typeof value2 === 'string')
                            result = value1.localeCompare(value2);
                        else
                            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                        return (this.sortOrder * result);
                    });
                    this._value = [...this.value];
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            let sortMeta = {
                field: this.sortField,
                order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
        }
    }
    sortMultiple() {
        if (this.multiSortMeta) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                if (this.customSort) {
                    this.sortFunction.emit({
                        data: this.value,
                        mode: this.sortMode,
                        multiSortMeta: this.multiSortMeta
                    });
                }
                else {
                    this.value.sort((data1, data2) => {
                        return this.multisortField(data1, data2, this.multiSortMeta, 0);
                    });
                    this._value = [...this.value];
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            this.onSort.emit({
                multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
        }
    }
    multisortField(data1, data2, multiSortMeta, index) {
        let value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
        let value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
        let result = null;
        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
        }
        return (multiSortMeta[index].order * result);
    }
    getSortMeta(field) {
        if (this.multiSortMeta && this.multiSortMeta.length) {
            for (let i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field === field) {
                    return this.multiSortMeta[i];
                }
            }
        }
        return null;
    }
    isSorted(field) {
        if (this.sortMode === 'single') {
            return (this.sortField && this.sortField === field);
        }
        else if (this.sortMode === 'multiple') {
            let sorted = false;
            if (this.multiSortMeta) {
                for (let i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == field) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    }
    handleRowClick(event) {
        let target = event.originalEvent.target;
        let targetNode = target.nodeName;
        let parentNode = target.parentElement && target.parentElement.nodeName;
        if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' ||
            parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' ||
            (DomHandler.hasClass(event.originalEvent.target, 'p-clickable'))) {
            return;
        }
        if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
                DomHandler.clearSelection();
                if (this.rangeRowIndex != null) {
                    this.clearSelectionRange(event.originalEvent);
                }
                this.rangeRowIndex = event.rowIndex;
                this.selectRange(event.originalEvent, event.rowIndex);
            }
            else {
                let rowData = event.rowData;
                let selected = this.isSelected(rowData);
                let metaSelection = this.rowTouched ? false : this.metaKeySelection;
                let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
                this.anchorRowIndex = event.rowIndex;
                this.rangeRowIndex = event.rowIndex;
                if (metaSelection) {
                    let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(null);
                        }
                        else {
                            let selectionIndex = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter((val, i) => i != selectionIndex);
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this._selection = rowData;
                            this.selectionChange.emit(rowData);
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        else if (this.isMultipleSelectionMode()) {
                            if (metaKey) {
                                this._selection = this.selection || [];
                            }
                            else {
                                this._selection = [];
                                this.selectionKeys = {};
                            }
                            this._selection = [...this.selection, rowData];
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                    }
                }
                else {
                    if (this.selectionMode === 'single') {
                        if (selected) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(this.selection);
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                        }
                        else {
                            this._selection = rowData;
                            this.selectionChange.emit(this.selection);
                            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                    else if (this.selectionMode === 'multiple') {
                        if (selected) {
                            let selectionIndex = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter((val, i) => i != selectionIndex);
                            this.selectionChange.emit(this.selection);
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        else {
                            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
                            this.selectionChange.emit(this.selection);
                            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                }
            }
            this.tableService.onSelectionChange();
            if (this.isStateful()) {
                this.saveState();
            }
        }
        this.rowTouched = false;
    }
    handleRowTouchEnd(event) {
        this.rowTouched = true;
    }
    handleRowRightClick(event) {
        if (this.contextMenu) {
            const rowData = event.rowData;
            if (this.contextMenuSelectionMode === 'separate') {
                this.contextMenuSelection = rowData;
                this.contextMenuSelectionChange.emit(rowData);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, data: rowData, index: event.rowIndex });
                this.contextMenu.show(event.originalEvent);
                this.tableService.onContextMenu(rowData);
            }
            else if (this.contextMenuSelectionMode === 'joint') {
                this.preventSelectionSetterPropagation = true;
                let selected = this.isSelected(rowData);
                let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
                if (!selected) {
                    if (this.isSingleSelectionMode()) {
                        this.selection = rowData;
                        this.selectionChange.emit(rowData);
                    }
                    else if (this.isMultipleSelectionMode()) {
                        this.selection = [rowData];
                        this.selectionChange.emit(this.selection);
                    }
                    if (dataKeyValue) {
                        this.selectionKeys[dataKeyValue] = 1;
                    }
                }
                this.contextMenu.show(event.originalEvent);
                this.onContextMenuSelect.emit({ originalEvent: event, data: rowData, index: event.rowIndex });
            }
        }
    }
    selectRange(event, rowIndex) {
        let rangeStart, rangeEnd;
        if (this.anchorRowIndex > rowIndex) {
            rangeStart = rowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else if (this.anchorRowIndex < rowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = rowIndex;
        }
        else {
            rangeStart = rowIndex;
            rangeEnd = rowIndex;
        }
        if (this.lazy && this.paginator) {
            rangeStart -= this.first;
            rangeEnd -= this.first;
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
            if (!this.isSelected(rangeRowData)) {
                this._selection = [...this.selection, rangeRowData];
                let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
                this.onRowSelect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
            }
        }
        this.selectionChange.emit(this.selection);
    }
    clearSelectionRange(event) {
        let rangeStart, rangeEnd;
        if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            let rangeRowData = this.value[i];
            let selectionIndex = this.findIndexInSelection(rangeRowData);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
            this.onRowUnselect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
        }
    }
    isSelected(rowData) {
        if (rowData && this.selection) {
            if (this.dataKey) {
                return this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined;
            }
            else {
                if (this.selection instanceof Array)
                    return this.findIndexInSelection(rowData) > -1;
                else
                    return this.equals(rowData, this.selection);
            }
        }
        return false;
    }
    findIndexInSelection(rowData) {
        let index = -1;
        if (this.selection && this.selection.length) {
            for (let i = 0; i < this.selection.length; i++) {
                if (this.equals(rowData, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    toggleRowWithRadio(event, rowData) {
        this.preventSelectionSetterPropagation = true;
        if (this.selection != rowData) {
            this._selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'radiobutton' });
            if (this.dataKey) {
                this.selectionKeys = {};
                this.selectionKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
            }
        }
        else {
            this._selection = null;
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'radiobutton' });
        }
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
            this.saveState();
        }
    }
    toggleRowWithCheckbox(event, rowData) {
        this.selection = this.selection || [];
        let selected = this.isSelected(rowData);
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.preventSelectionSetterPropagation = true;
        if (selected) {
            let selectionIndex = this.findIndexInSelection(rowData);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        else {
            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
        }
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
            this.saveState();
        }
    }
    toggleRowsWithCheckbox(event, check) {
        this._selection = check ? this.filteredValue ? this.filteredValue.slice() : this.value.slice() : [];
        this.preventSelectionSetterPropagation = true;
        this.updateSelectionKeys();
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
        if (this.isStateful()) {
            this.saveState();
        }
    }
    equals(data1, data2) {
        return this.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.dataKey);
    }
    filter(value, field, matchMode) {
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        if (!this.isFilterBlank(value)) {
            this.filters[field] = { value: value, matchMode: matchMode };
        }
        else if (this.filters[field]) {
            delete this.filters[field];
        }
        this.filterTimeout = setTimeout(() => {
            this._filter();
            this.filterTimeout = null;
        }, this.filterDelay);
        this.anchorRowIndex = null;
    }
    filterGlobal(value, matchMode) {
        this.filter(value, 'global', matchMode);
    }
    isFilterBlank(filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    }
    _filter() {
        if (!this.restoringFilter) {
            this.first = 0;
            this.firstChange.emit(this.first);
        }
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            if (!this.value) {
                return;
            }
            if (!this.hasFilter()) {
                this.filteredValue = null;
                if (this.paginator) {
                    this.totalRecords = this.value ? this.value.length : 0;
                }
            }
            else {
                let globalFilterFieldsArray;
                if (this.filters['global']) {
                    if (!this.columns && !this.globalFilterFields)
                        throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                    else
                        globalFilterFieldsArray = this.globalFilterFields || this.columns;
                }
                this.filteredValue = [];
                for (let i = 0; i < this.value.length; i++) {
                    let localMatch = true;
                    let globalMatch = false;
                    let localFiltered = false;
                    for (let prop in this.filters) {
                        if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                            localFiltered = true;
                            let filterMeta = this.filters[prop];
                            let filterField = prop;
                            let filterValue = filterMeta.value;
                            let filterMatchMode = filterMeta.matchMode || 'startsWith';
                            let dataFieldValue = ObjectUtils.resolveFieldData(this.value[i], filterField);
                            let filterConstraint = FilterUtils[filterMatchMode];
                            if (!filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                    }
                    if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                        for (let j = 0; j < globalFilterFieldsArray.length; j++) {
                            let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                            globalMatch = FilterUtils[this.filters['global'].matchMode](ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value, this.filterLocale);
                            if (globalMatch) {
                                break;
                            }
                        }
                    }
                    let matches;
                    if (this.filters['global']) {
                        matches = localFiltered ? (localFiltered && localMatch && globalMatch) : globalMatch;
                    }
                    else {
                        matches = localFiltered && localMatch;
                    }
                    if (matches) {
                        this.filteredValue.push(this.value[i]);
                    }
                }
                if (this.filteredValue.length === this.value.length) {
                    this.filteredValue = null;
                }
                if (this.paginator) {
                    this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
                }
            }
        }
        this.onFilter.emit({
            filters: this.filters,
            filteredValue: this.filteredValue || this.value
        });
        this.tableService.onValueChange(this.value);
        if (this.isStateful() && !this.restoringFilter) {
            this.saveState();
        }
        if (this.restoringFilter) {
            this.restoringFilter = false;
        }
        this.cd.markForCheck();
        if (this.scrollable) {
            this.resetScrollTop();
        }
    }
    hasFilter() {
        let empty = true;
        for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty;
    }
    createLazyLoadMetadata() {
        return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
        };
    }
    clear() {
        this._sortField = null;
        this._sortOrder = this.defaultSortOrder;
        this._multiSortMeta = null;
        this.tableService.onSort(null);
        this.filteredValue = null;
        this.filters = {};
        this.first = 0;
        this.firstChange.emit(this.first);
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.totalRecords = (this._value ? this._value.length : 0);
        }
    }
    reset() {
        console.warn("reset function is deprecated, use clear instead.");
        this.clear();
    }
    exportCSV(options) {
        let data;
        let csv = '';
        let columns = this.frozenColumns ? [...this.frozenColumns, ...this.columns] : this.columns;
        if (options && options.selectionOnly) {
            data = this.selection || [];
        }
        else {
            data = this.filteredValue || this.value;
            if (this.frozenValue) {
                data = data ? [...this.frozenValue, ...data] : this.frozenValue;
            }
        }
        //headers
        for (let i = 0; i < columns.length; i++) {
            let column = columns[i];
            if (column.exportable !== false && column.field) {
                csv += '"' + (column.header || column.field) + '"';
                if (i < (columns.length - 1)) {
                    csv += this.csvSeparator;
                }
            }
        }
        //body
        data.forEach((record, i) => {
            csv += '\n';
            for (let i = 0; i < columns.length; i++) {
                let column = columns[i];
                if (column.exportable !== false && column.field) {
                    let cellData = ObjectUtils.resolveFieldData(record, column.field);
                    if (cellData != null) {
                        if (this.exportFunction) {
                            cellData = this.exportFunction({
                                data: cellData,
                                field: column.field
                            });
                        }
                        else
                            cellData = String(cellData).replace(/"/g, '""');
                    }
                    else
                        cellData = '';
                    csv += '"' + cellData + '"';
                    if (i < (columns.length - 1)) {
                        csv += this.csvSeparator;
                    }
                }
            }
        });
        let blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
        }
        else {
            let link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', this.exportFilename + '.csv');
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    }
    resetScrollTop() {
        if (this.virtualScroll)
            this.scrollToVirtualIndex(0);
        else
            this.scrollTo({ top: 0 });
    }
    scrollToVirtualIndex(index) {
        if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollToVirtualIndex(index);
        }
        if (this.scrollableFrozenViewChild) {
            this.scrollableFrozenViewChild.scrollToVirtualIndex(index);
        }
    }
    scrollTo(options) {
        if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollTo(options);
        }
        if (this.scrollableFrozenViewChild) {
            this.scrollableFrozenViewChild.scrollTo(options);
        }
    }
    updateEditingCell(cell, data, field, index) {
        this.editingCell = cell;
        this.editingCellData = data;
        this.editingCellField = field;
        this.editingCellRowIndex = index;
        this.bindDocumentEditListener();
    }
    isEditingCellValid() {
        return (this.editingCell && DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0);
    }
    bindDocumentEditListener() {
        if (!this.documentEditListener) {
            this.documentEditListener = (event) => {
                if (this.editingCell && !this.editingCellClick && this.isEditingCellValid()) {
                    DomHandler.removeClass(this.editingCell, 'p-cell-editing');
                    this.editingCell = null;
                    this.onEditComplete.emit({ field: this.editingCellField, data: this.editingCellData, originalEvent: event, index: this.editingCellRowIndex });
                    this.editingCellField = null;
                    this.editingCellData = null;
                    this.editingCellRowIndex = null;
                    this.unbindDocumentEditListener();
                    this.cd.markForCheck();
                }
                this.editingCellClick = false;
            };
            document.addEventListener('click', this.documentEditListener);
        }
    }
    unbindDocumentEditListener() {
        if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
        }
    }
    initRowEdit(rowData) {
        let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
        this.editingRowKeys[dataKeyValue] = true;
    }
    saveRowEdit(rowData, rowElement) {
        if (DomHandler.find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
            let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
            delete this.editingRowKeys[dataKeyValue];
        }
    }
    cancelRowEdit(rowData) {
        let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
        delete this.editingRowKeys[dataKeyValue];
    }
    toggleRow(rowData, event) {
        if (!this.dataKey) {
            throw new Error('dataKey must be defined to use row expansion');
        }
        let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
        if (this.expandedRowKeys[dataKeyValue] != null) {
            delete this.expandedRowKeys[dataKeyValue];
            this.onRowCollapse.emit({
                originalEvent: event,
                data: rowData
            });
        }
        else {
            if (this.rowExpandMode === 'single') {
                this.expandedRowKeys = {};
            }
            this.expandedRowKeys[dataKeyValue] = true;
            this.onRowExpand.emit({
                originalEvent: event,
                data: rowData
            });
        }
        if (event) {
            event.preventDefault();
        }
        if (this.isStateful()) {
            this.saveState();
        }
    }
    isRowExpanded(rowData) {
        return this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
    }
    isRowEditing(rowData) {
        return this.editingRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
    }
    isSingleSelectionMode() {
        return this.selectionMode === 'single';
    }
    isMultipleSelectionMode() {
        return this.selectionMode === 'multiple';
    }
    onColumnResizeBegin(event) {
        let containerLeft = DomHandler.getOffset(this.containerViewChild.nativeElement).left;
        this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
        this.onColumnResize(event);
        event.preventDefault();
    }
    onColumnResize(event) {
        let containerLeft = DomHandler.getOffset(this.containerViewChild.nativeElement).left;
        DomHandler.addClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
        this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
        this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
        this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
        this.resizeHelperViewChild.nativeElement.style.display = 'block';
    }
    onColumnResizeEnd(event, column) {
        let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
        let columnWidth = column.offsetWidth;
        let minWidth = parseInt(column.style.minWidth || 15);
        if (columnWidth + delta < minWidth) {
            delta = minWidth - columnWidth;
        }
        const newColumnWidth = columnWidth + delta;
        if (newColumnWidth >= minWidth) {
            if (this.columnResizeMode === 'fit') {
                let nextColumn = column.nextElementSibling;
                while (!nextColumn.offsetParent) {
                    nextColumn = nextColumn.nextElementSibling;
                }
                if (nextColumn) {
                    let nextColumnWidth = nextColumn.offsetWidth - delta;
                    let nextColumnMinWidth = nextColumn.style.minWidth || 15;
                    if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                        if (this.scrollable) {
                            let scrollableView = this.findParentScrollableView(column);
                            let scrollableBodyTable = DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-body table') || DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-body table');
                            let scrollableHeaderTable = DomHandler.findSingle(scrollableView, 'table.p-datatable-scrollable-header-table');
                            let scrollableFooterTable = DomHandler.findSingle(scrollableView, 'table.p-datatable-scrollable-footer-table');
                            let resizeColumnIndex = DomHandler.index(column);
                            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        }
                        else {
                            column.style.width = newColumnWidth + 'px';
                            if (nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                if (newColumnWidth >= minWidth) {
                    if (this.scrollable) {
                        this.setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta);
                    }
                    else {
                        this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                        column.style.width = newColumnWidth + 'px';
                        let containerWidth = this.tableViewChild.nativeElement.style.width;
                        this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                    }
                }
            }
            this.onColResize.emit({
                element: column,
                delta: delta
            });
            if (this.isStateful()) {
                this.saveState();
            }
        }
        this.resizeHelperViewChild.nativeElement.style.display = 'none';
        DomHandler.removeClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
    }
    setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta) {
        let scrollableView = column ? this.findParentScrollableView(column) : this.containerViewChild.nativeElement;
        let scrollableBody = DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-body') || DomHandler.findSingle(scrollableView, 'cdk-virtual-scroll-viewport');
        let scrollableHeader = DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-header');
        let scrollableFooter = DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-footer');
        let scrollableBodyTable = DomHandler.findSingle(scrollableBody, '.p-datatable-scrollable-body table') || DomHandler.findSingle(scrollableView, 'cdk-virtual-scroll-viewport table');
        let scrollableHeaderTable = DomHandler.findSingle(scrollableHeader, 'table.p-datatable-scrollable-header-table');
        let scrollableFooterTable = DomHandler.findSingle(scrollableFooter, 'table.p-datatable-scrollable-footer-table');
        const scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
        const scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
        const isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;
        let setWidth = (container, table, width, isContainerInViewport) => {
            if (container && table) {
                container.style.width = isContainerInViewport ? width + DomHandler.calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
                table.style.width = width + 'px';
            }
        };
        setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
        setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
        setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
        if (column) {
            let resizeColumnIndex = DomHandler.index(column);
            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
        }
    }
    findParentScrollableView(column) {
        if (column) {
            let parent = column.parentElement;
            while (parent && !DomHandler.hasClass(parent, 'p-datatable-scrollable-view')) {
                parent = parent.parentElement;
            }
            return parent;
        }
        else {
            return null;
        }
    }
    resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
        if (table) {
            let colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            if (colGroup) {
                let col = colGroup.children[resizeColumnIndex];
                let nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';
                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                }
            }
            else {
                throw "Scrollable tables require a colgroup to support resizable columns";
            }
        }
    }
    onColumnDragStart(event, columnElement) {
        this.reorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
        this.reorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
        this.draggedColumn = columnElement;
        event.dataTransfer.setData('text', 'b'); // For firefox
    }
    onColumnDragEnter(event, dropHeader) {
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            let containerOffset = DomHandler.getOffset(this.containerViewChild.nativeElement);
            let dropHeaderOffset = DomHandler.getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
                let dropIndex = DomHandler.indexWithinGroup(dropHeader, 'preorderablecolumn');
                let targetLeft = dropHeaderOffset.left - containerOffset.left;
                let targetTop = containerOffset.top - dropHeaderOffset.top;
                let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }
                if ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dropIndex - dragIndex === -1 && this.dropPosition === 1)) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                    this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                    this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
                }
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    }
    onColumnDragLeave(event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        }
    }
    onColumnDrop(event, dropColumn) {
        event.preventDefault();
        if (this.draggedColumn) {
            let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
            let dropIndex = DomHandler.indexWithinGroup(dropColumn, 'preorderablecolumn');
            let allowDrop = (dragIndex != dropIndex);
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop && ((dropIndex < dragIndex && this.dropPosition === 1))) {
                dropIndex = dropIndex + 1;
            }
            if (allowDrop && ((dropIndex > dragIndex && this.dropPosition === -1))) {
                dropIndex = dropIndex - 1;
            }
            if (allowDrop) {
                ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
                if (this.isStateful()) {
                    this.zone.runOutsideAngular(() => {
                        setTimeout(() => {
                            this.saveState();
                        });
                    });
                }
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    }
    onRowDragStart(event, index) {
        this.rowDragging = true;
        this.draggedRowIndex = index;
        event.dataTransfer.setData('text', 'b'); // For firefox
    }
    onRowDragOver(event, index, rowElement) {
        if (this.rowDragging && this.draggedRowIndex !== index) {
            let rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop();
            let pageY = event.pageY;
            let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
            let prevRowElement = rowElement.previousElementSibling;
            if (pageY < rowMidY) {
                DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
                this.droppedRowIndex = index;
                if (prevRowElement)
                    DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                else
                    DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
            }
            else {
                if (prevRowElement)
                    DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                else
                    DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
                this.droppedRowIndex = index + 1;
                DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
            }
        }
    }
    onRowDragLeave(event, rowElement) {
        let prevRowElement = rowElement.previousElementSibling;
        if (prevRowElement) {
            DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
        }
        DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
        DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
    }
    onRowDragEnd(event) {
        this.rowDragging = false;
        this.draggedRowIndex = null;
        this.droppedRowIndex = null;
    }
    onRowDrop(event, rowElement) {
        if (this.droppedRowIndex != null) {
            let dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
            ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
            this.onRowReorder.emit({
                dragIndex: this.draggedRowIndex,
                dropIndex: dropIndex
            });
        }
        //cleanup
        this.onRowDragLeave(event, rowElement);
        this.onRowDragEnd(event);
    }
    isEmpty() {
        let data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    getStorage() {
        switch (this.stateStorage) {
            case 'local':
                return window.localStorage;
            case 'session':
                return window.sessionStorage;
            default:
                throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
        }
    }
    isStateful() {
        return this.stateKey != null;
    }
    saveState() {
        const storage = this.getStorage();
        let state = {};
        if (this.paginator) {
            state.first = this.first;
            state.rows = this.rows;
        }
        if (this.sortField) {
            state.sortField = this.sortField;
            state.sortOrder = this.sortOrder;
        }
        if (this.multiSortMeta) {
            state.multiSortMeta = this.multiSortMeta;
        }
        if (this.hasFilter()) {
            state.filters = this.filters;
        }
        if (this.resizableColumns) {
            this.saveColumnWidths(state);
        }
        if (this.reorderableColumns) {
            this.saveColumnOrder(state);
        }
        if (this.selection) {
            state.selection = this.selection;
        }
        if (Object.keys(this.expandedRowKeys).length) {
            state.expandedRowKeys = this.expandedRowKeys;
        }
        if (Object.keys(state).length) {
            storage.setItem(this.stateKey, JSON.stringify(state));
        }
        this.onStateSave.emit(state);
    }
    clearState() {
        const storage = this.getStorage();
        if (this.stateKey) {
            storage.removeItem(this.stateKey);
        }
    }
    restoreState() {
        const storage = this.getStorage();
        const stateString = storage.getItem(this.stateKey);
        if (stateString) {
            let state = JSON.parse(stateString);
            if (this.paginator) {
                if (this.first !== undefined) {
                    this.first = state.first;
                    this.firstChange.emit(this.first);
                }
                if (this.rows !== undefined) {
                    this.rows = state.rows;
                    this.rowsChange.emit(this.rows);
                }
            }
            if (state.sortField) {
                this.restoringSort = true;
                this._sortField = state.sortField;
                this._sortOrder = state.sortOrder;
            }
            if (state.multiSortMeta) {
                this.restoringSort = true;
                this._multiSortMeta = state.multiSortMeta;
            }
            if (state.filters) {
                this.restoringFilter = true;
                this.filters = state.filters;
            }
            if (this.resizableColumns) {
                this.columnWidthsState = state.columnWidths;
                this.tableWidthState = state.tableWidth;
            }
            if (state.expandedRowKeys) {
                this.expandedRowKeys = state.expandedRowKeys;
            }
            if (state.selection) {
                Promise.resolve(null).then(() => this.selectionChange.emit(state.selection));
            }
            this.stateRestored = true;
            this.onStateRestore.emit(state);
        }
    }
    saveColumnWidths(state) {
        let widths = [];
        let headers = DomHandler.find(this.containerViewChild.nativeElement, '.p-datatable-thead > tr:first-child > th');
        headers.map(header => widths.push(DomHandler.getOuterWidth(header)));
        state.columnWidths = widths.join(',');
        if (this.columnResizeMode === 'expand') {
            state.tableWidth = this.scrollable ? DomHandler.findSingle(this.containerViewChild.nativeElement, '.p-datatable-scrollable-header-table').style.width :
                DomHandler.getOuterWidth(this.tableViewChild.nativeElement) + 'px';
        }
    }
    restoreColumnWidths() {
        if (this.columnWidthsState) {
            let widths = this.columnWidthsState.split(',');
            if (this.columnResizeMode === 'expand' && this.tableWidthState) {
                if (this.scrollable) {
                    this.setScrollableItemsWidthOnExpandResize(null, this.tableWidthState, 0);
                }
                else {
                    this.tableViewChild.nativeElement.style.width = this.tableWidthState;
                    this.containerViewChild.nativeElement.style.width = this.tableWidthState;
                }
            }
            if (this.scrollable) {
                let headerCols = DomHandler.find(this.containerViewChild.nativeElement, '.p-datatable-scrollable-header-table > colgroup > col');
                let bodyCols = DomHandler.find(this.containerViewChild.nativeElement, '.p-datatable-scrollable-body table > colgroup > col');
                headerCols.map((col, index) => col.style.width = widths[index] + 'px');
                bodyCols.map((col, index) => col.style.width = widths[index] + 'px');
            }
            else {
                let headers = DomHandler.find(this.tableViewChild.nativeElement, '.p-datatable-thead > tr:first-child > th');
                headers.map((header, index) => header.style.width = widths[index] + 'px');
            }
        }
    }
    saveColumnOrder(state) {
        if (this.columns) {
            let columnOrder = [];
            this.columns.map(column => {
                columnOrder.push(column.field || column.key);
            });
            state.columnOrder = columnOrder;
        }
    }
    restoreColumnOrder() {
        const storage = this.getStorage();
        const stateString = storage.getItem(this.stateKey);
        if (stateString) {
            let state = JSON.parse(stateString);
            let columnOrder = state.columnOrder;
            if (columnOrder) {
                let reorderedColumns = [];
                columnOrder.map(key => reorderedColumns.push(this.findColumnByKey(key)));
                this.columnOrderStateRestored = true;
                this.columns = reorderedColumns;
            }
        }
    }
    findColumnByKey(key) {
        if (this.columns) {
            for (let col of this.columns) {
                if (col.key === key || col.field === key)
                    return col;
                else
                    continue;
            }
        }
        else {
            return null;
        }
    }
    ngOnDestroy() {
        this.unbindDocumentEditListener();
        this.editingCell = null;
        this.initialized = null;
    }
}
Table.ɵfac = function Table_Factory(t) { return new (t || Table)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Table.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Table, selectors: [["p-table"]], contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Table_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.resizeHelperViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.reorderIndicatorUpViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.reorderIndicatorDownViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableFrozenViewChild = _t.first);
    } }, inputs: { pageLinks: "pageLinks", alwaysShowPaginator: "alwaysShowPaginator", paginatorPosition: "paginatorPosition", paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight", currentPageReportTemplate: "currentPageReportTemplate", showPageLinks: "showPageLinks", defaultSortOrder: "defaultSortOrder", sortMode: "sortMode", resetPageOnSort: "resetPageOnSort", contextMenuSelectionMode: "contextMenuSelectionMode", rowTrackBy: "rowTrackBy", lazy: "lazy", lazyLoadOnInit: "lazyLoadOnInit", compareSelectionBy: "compareSelectionBy", csvSeparator: "csvSeparator", exportFilename: "exportFilename", filters: "filters", filterDelay: "filterDelay", expandedRowKeys: "expandedRowKeys", editingRowKeys: "editingRowKeys", rowExpandMode: "rowExpandMode", virtualScrollDelay: "virtualScrollDelay", virtualRowHeight: "virtualRowHeight", columnResizeMode: "columnResizeMode", loadingIcon: "loadingIcon", showLoader: "showLoader", stateStorage: "stateStorage", editMode: "editMode", totalRecords: "totalRecords", value: "value", columns: "columns", first: "first", rows: "rows", sortField: "sortField", sortOrder: "sortOrder", multiSortMeta: "multiSortMeta", selection: "selection", contextMenuSelection: "contextMenuSelection", frozenColumns: "frozenColumns", frozenValue: "frozenValue", style: "style", styleClass: "styleClass", tableStyle: "tableStyle", tableStyleClass: "tableStyleClass", paginator: "paginator", rowsPerPageOptions: "rowsPerPageOptions", paginatorDropdownAppendTo: "paginatorDropdownAppendTo", showCurrentPageReport: "showCurrentPageReport", showJumpToPageDropdown: "showJumpToPageDropdown", selectionMode: "selectionMode", dataKey: "dataKey", metaKeySelection: "metaKeySelection", globalFilterFields: "globalFilterFields", filterLocale: "filterLocale", scrollable: "scrollable", scrollHeight: "scrollHeight", virtualScroll: "virtualScroll", frozenWidth: "frozenWidth", responsive: "responsive", contextMenu: "contextMenu", resizableColumns: "resizableColumns", reorderableColumns: "reorderableColumns", loading: "loading", rowHover: "rowHover", customSort: "customSort", autoLayout: "autoLayout", exportFunction: "exportFunction", stateKey: "stateKey", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, outputs: { selectionChange: "selectionChange", contextMenuSelectionChange: "contextMenuSelectionChange", onRowSelect: "onRowSelect", onRowUnselect: "onRowUnselect", onPage: "onPage", onSort: "onSort", onFilter: "onFilter", onLazyLoad: "onLazyLoad", onRowExpand: "onRowExpand", onRowCollapse: "onRowCollapse", onContextMenuSelect: "onContextMenuSelect", onColResize: "onColResize", onColReorder: "onColReorder", onRowReorder: "onRowReorder", onEditInit: "onEditInit", onEditComplete: "onEditComplete", onEditCancel: "onEditCancel", onHeaderCheckboxToggle: "onHeaderCheckboxToggle", sortFunction: "sortFunction", firstChange: "firstChange", rowsChange: "rowsChange", onStateSave: "onStateSave", onStateRestore: "onStateRestore" }, features: [ɵngcc0.ɵɵProvidersFeature([TableService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 12, vars: 22, consts: [["data-scrollselectors", ".p-datatable-scrollable-body, .p-datatable-unfrozen-view .p-datatable-scrollable-body", 3, "ngStyle", "ngClass"], ["container", ""], ["class", "p-datatable-loading-overlay p-component-overlay", 4, "ngIf"], ["class", "p-datatable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-datatable-wrapper", 4, "ngIf"], ["class", "p-datatable-scrollable-wrapper", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-datatable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-down p-datatable-reorder-indicator-up", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-up p-datatable-reorder-indicator-down", "style", "display:none", 4, "ngIf"], [1, "p-datatable-loading-overlay", "p-component-overlay"], [1, "p-datatable-header"], [4, "ngTemplateOutlet"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-datatable-wrapper"], ["role", "grid", 3, "ngClass", "ngStyle"], ["table", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-datatable-thead"], [1, "p-datatable-tbody", 3, "pTableBody", "pTableBodyTemplate"], ["class", "p-datatable-tfoot", 4, "ngIf"], [1, "p-datatable-tfoot"], [1, "p-datatable-scrollable-wrapper"], ["class", "p-datatable-scrollable-view p-datatable-frozen-view", 3, "pScrollableView", "frozen", "ngStyle", "scrollHeight", 4, "ngIf"], [1, "p-datatable-scrollable-view", 3, "pScrollableView", "frozen", "scrollHeight", "ngStyle"], ["scrollableView", ""], [1, "p-datatable-scrollable-view", "p-datatable-frozen-view", 3, "pScrollableView", "frozen", "ngStyle", "scrollHeight"], ["scrollableFrozenView", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-datatable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], ["resizeHelper", ""], [1, "pi", "pi-arrow-down", "p-datatable-reorder-indicator-up", 2, "display", "none"], ["reorderIndicatorUp", ""], [1, "pi", "pi-arrow-up", "p-datatable-reorder-indicator-down", 2, "display", "none"], ["reorderIndicatorDown", ""]], template: function Table_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, Table_div_2_Template, 2, 2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, Table_div_3_Template, 2, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(4, Table_p_paginator_4_Template, 1, 14, "p-paginator", 4);
        ɵngcc0.ɵɵtemplate(5, Table_div_5_Template, 8, 13, "div", 5);
        ɵngcc0.ɵɵtemplate(6, Table_div_6_Template, 4, 8, "div", 6);
        ɵngcc0.ɵɵtemplate(7, Table_p_paginator_7_Template, 1, 14, "p-paginator", 7);
        ɵngcc0.ɵɵtemplate(8, Table_div_8_Template, 2, 1, "div", 8);
        ɵngcc0.ɵɵtemplate(9, Table_div_9_Template, 2, 0, "div", 9);
        ɵngcc0.ɵɵtemplate(10, Table_span_10_Template, 2, 0, "span", 10);
        ɵngcc0.ɵɵtemplate(11, Table_span_11_Template, 2, 0, "span", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction7(14, _c10, ctx.rowHover || ctx.selectionMode, ctx.autoLayout, ctx.resizableColumns, ctx.resizableColumns && ctx.columnResizeMode === "fit", ctx.scrollable, ctx.scrollable && ctx.scrollHeight === "flex", ctx.responsive));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading && ctx.showLoader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.captionTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.scrollable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.scrollable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.summaryTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.resizableColumns);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.reorderableColumns);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.reorderableColumns);
    } }, directives: function () { return [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Paginator, TableBody, ScrollableView]; }, styles: [".p-datatable{position:relative}.p-datatable table{border-collapse:collapse;table-layout:fixed;width:100%}.p-datatable .p-sortable-column{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-badge,.p-datatable .p-sortable-column .p-sortable-column-icon{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center}.p-datatable-auto-layout>.p-datatable-wrapper{overflow-x:auto}.p-datatable-auto-layout>.p-datatable-wrapper>table{table-layout:auto}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable-wrapper{position:relative}.p-datatable-scrollable-footer,.p-datatable-scrollable-header{overflow:hidden}.p-datatable-scrollable-body{overflow:auto;position:relative}.p-datatable-scrollable-body>table>.p-datatable-tbody>tr:first-child>td{border-top:0}.p-datatable-virtual-table{position:absolute}.p-datatable-frozen-view .p-datatable-scrollable-body{overflow:hidden}.p-datatable-frozen-view>.p-datatable-scrollable-body>table>.p-datatable-tbody>tr>td:last-child{border-right:0}.p-datatable-unfrozen-view{position:absolute;top:0}.p-datatable-flex-scrollable,.p-datatable-flex-scrollable .p-datatable-scrollable-view,.p-datatable-flex-scrollable .p-datatable-scrollable-wrapper{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-datatable-flex-scrollable .p-datatable-scrollable-body,.p-datatable-flex-scrollable .p-datatable-virtual-scrollable-body{-ms-flex:1;flex:1}.p-datatable-resizable>.p-datatable-wrapper{overflow-x:auto}.p-datatable-resizable .p-datatable-tbody>tr>td,.p-datatable-resizable .p-datatable-tfoot>tr>td,.p-datatable-resizable .p-datatable-thead>tr>th{overflow:hidden;white-space:nowrap}.p-datatable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{border:1px solid rgba(0,0,0,0);cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5rem}.p-datatable .p-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.p-datatable .p-row-editor-cancel,.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-down,.p-datatable-reorder-indicator-up{display:none;position:absolute}.p-datatable .p-datatable-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td .p-column-title{display:none}@media screen and (max-width:40em){.p-datatable.p-datatable-responsive .p-datatable-tfoot>tr>td,.p-datatable.p-datatable-responsive .p-datatable-thead>tr>th{display:none!important}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td{border:0;clear:left;display:block;float:left;text-align:left;width:100%}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td .p-column-title{display:inline-block;font-weight:700;margin:-.4em 1em -.4em -.4rem;min-width:30%;padding:.4rem}}"], encapsulation: 2 });
Table.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: TableService },
    { type: ChangeDetectorRef }
];
Table.propDecorators = {
    frozenColumns: [{ type: Input }],
    frozenValue: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    tableStyle: [{ type: Input }],
    tableStyleClass: [{ type: Input }],
    paginator: [{ type: Input }],
    pageLinks: [{ type: Input }],
    rowsPerPageOptions: [{ type: Input }],
    alwaysShowPaginator: [{ type: Input }],
    paginatorPosition: [{ type: Input }],
    paginatorDropdownAppendTo: [{ type: Input }],
    paginatorDropdownScrollHeight: [{ type: Input }],
    currentPageReportTemplate: [{ type: Input }],
    showCurrentPageReport: [{ type: Input }],
    showJumpToPageDropdown: [{ type: Input }],
    showPageLinks: [{ type: Input }],
    defaultSortOrder: [{ type: Input }],
    sortMode: [{ type: Input }],
    resetPageOnSort: [{ type: Input }],
    selectionMode: [{ type: Input }],
    selectionChange: [{ type: Output }],
    contextMenuSelection: [{ type: Input }],
    contextMenuSelectionChange: [{ type: Output }],
    contextMenuSelectionMode: [{ type: Input }],
    dataKey: [{ type: Input }],
    metaKeySelection: [{ type: Input }],
    rowTrackBy: [{ type: Input }],
    lazy: [{ type: Input }],
    lazyLoadOnInit: [{ type: Input }],
    compareSelectionBy: [{ type: Input }],
    csvSeparator: [{ type: Input }],
    exportFilename: [{ type: Input }],
    filters: [{ type: Input }],
    globalFilterFields: [{ type: Input }],
    filterDelay: [{ type: Input }],
    filterLocale: [{ type: Input }],
    expandedRowKeys: [{ type: Input }],
    editingRowKeys: [{ type: Input }],
    rowExpandMode: [{ type: Input }],
    scrollable: [{ type: Input }],
    scrollHeight: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    virtualScrollDelay: [{ type: Input }],
    virtualRowHeight: [{ type: Input }],
    frozenWidth: [{ type: Input }],
    responsive: [{ type: Input }],
    contextMenu: [{ type: Input }],
    resizableColumns: [{ type: Input }],
    columnResizeMode: [{ type: Input }],
    reorderableColumns: [{ type: Input }],
    loading: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    showLoader: [{ type: Input }],
    rowHover: [{ type: Input }],
    customSort: [{ type: Input }],
    autoLayout: [{ type: Input }],
    exportFunction: [{ type: Input }],
    stateKey: [{ type: Input }],
    stateStorage: [{ type: Input }],
    editMode: [{ type: Input }],
    minBufferPx: [{ type: Input }],
    maxBufferPx: [{ type: Input }],
    onRowSelect: [{ type: Output }],
    onRowUnselect: [{ type: Output }],
    onPage: [{ type: Output }],
    onSort: [{ type: Output }],
    onFilter: [{ type: Output }],
    onLazyLoad: [{ type: Output }],
    onRowExpand: [{ type: Output }],
    onRowCollapse: [{ type: Output }],
    onContextMenuSelect: [{ type: Output }],
    onColResize: [{ type: Output }],
    onColReorder: [{ type: Output }],
    onRowReorder: [{ type: Output }],
    onEditInit: [{ type: Output }],
    onEditComplete: [{ type: Output }],
    onEditCancel: [{ type: Output }],
    onHeaderCheckboxToggle: [{ type: Output }],
    sortFunction: [{ type: Output }],
    firstChange: [{ type: Output }],
    rowsChange: [{ type: Output }],
    onStateSave: [{ type: Output }],
    onStateRestore: [{ type: Output }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    resizeHelperViewChild: [{ type: ViewChild, args: ['resizeHelper',] }],
    reorderIndicatorUpViewChild: [{ type: ViewChild, args: ['reorderIndicatorUp',] }],
    reorderIndicatorDownViewChild: [{ type: ViewChild, args: ['reorderIndicatorDown',] }],
    tableViewChild: [{ type: ViewChild, args: ['table',] }],
    scrollableViewChild: [{ type: ViewChild, args: ['scrollableView',] }],
    scrollableFrozenViewChild: [{ type: ViewChild, args: ['scrollableFrozenView',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    value: [{ type: Input }],
    columns: [{ type: Input }],
    first: [{ type: Input }],
    rows: [{ type: Input }],
    totalRecords: [{ type: Input }],
    sortField: [{ type: Input }],
    sortOrder: [{ type: Input }],
    multiSortMeta: [{ type: Input }],
    selection: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Table, [{
        type: Component,
        args: [{
                selector: 'p-table',
                template: `
        <div #container [ngStyle]="style" [class]="styleClass" data-scrollselectors=".p-datatable-scrollable-body, .p-datatable-unfrozen-view .p-datatable-scrollable-body"
            [ngClass]="{'p-datatable p-component': true,
                'p-datatable-hoverable-rows': (rowHover||selectionMode),
                'p-datatable-auto-layout': autoLayout,
                'p-datatable-resizable': resizableColumns,
                'p-datatable-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),
                'p-datatable-scrollable': scrollable,
                'p-datatable-flex-scrollable': (scrollable && scrollHeight === 'flex'),
                'p-datatable-responsive': responsive}">
            <div class="p-datatable-loading-overlay p-component-overlay" *ngIf="loading && showLoader">
                <i [class]="'p-datatable-loading-icon pi-spin ' + loadingIcon"></i>
            </div>
            <div *ngIf="captionTemplate" class="p-datatable-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="p-paginator-top" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo" [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate" [showCurrentPageReport]="showCurrentPageReport" [showJumpToPageDropdown]="showJumpToPageDropdown" [showPageLinks]="showPageLinks"></p-paginator>

            <div class="p-datatable-wrapper" *ngIf="!scrollable">
                <table role="grid" #table [ngClass]="tableStyleClass" [ngStyle]="tableStyle">
                    <ng-container *ngTemplateOutlet="colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <thead class="p-datatable-thead">
                        <ng-container *ngTemplateOutlet="headerTemplate; context: {$implicit: columns}"></ng-container>
                    </thead>
                    <tbody class="p-datatable-tbody" [pTableBody]="columns" [pTableBodyTemplate]="bodyTemplate"></tbody>
                    <tfoot *ngIf="footerTemplate" class="p-datatable-tfoot">
                        <ng-container *ngTemplateOutlet="footerTemplate; context {$implicit: columns}"></ng-container>
                    </tfoot>
                </table>
            </div>

            <div class="p-datatable-scrollable-wrapper" *ngIf="scrollable">
               <div class="p-datatable-scrollable-view p-datatable-frozen-view" *ngIf="frozenColumns||frozenBodyTemplate" #scrollableFrozenView [pScrollableView]="frozenColumns" [frozen]="true" [ngStyle]="{width: frozenWidth}" [scrollHeight]="scrollHeight"></div>
               <div class="p-datatable-scrollable-view" #scrollableView [pScrollableView]="columns" [frozen]="false" [scrollHeight]="scrollHeight" [ngStyle]="{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}"></div>
            </div>

            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="p-paginator-bottom" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo" [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate" [showCurrentPageReport]="showCurrentPageReport" [showJumpToPageDropdown]="showJumpToPageDropdown" [showPageLinks]="showPageLinks"></p-paginator>

            <div *ngIf="summaryTemplate" class="p-datatable-footer">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="p-column-resizer-helper" style="display:none" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp class="pi pi-arrow-down p-datatable-reorder-indicator-up" style="display:none" *ngIf="reorderableColumns"></span>
            <span #reorderIndicatorDown class="pi pi-arrow-up p-datatable-reorder-indicator-down" style="display:none" *ngIf="reorderableColumns"></span>
        </div>
    `,
                providers: [TableService],
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-datatable{position:relative}.p-datatable table{border-collapse:collapse;table-layout:fixed;width:100%}.p-datatable .p-sortable-column{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-badge,.p-datatable .p-sortable-column .p-sortable-column-icon{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center}.p-datatable-auto-layout>.p-datatable-wrapper{overflow-x:auto}.p-datatable-auto-layout>.p-datatable-wrapper>table{table-layout:auto}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable-wrapper{position:relative}.p-datatable-scrollable-footer,.p-datatable-scrollable-header{overflow:hidden}.p-datatable-scrollable-body{overflow:auto;position:relative}.p-datatable-scrollable-body>table>.p-datatable-tbody>tr:first-child>td{border-top:0}.p-datatable-virtual-table{position:absolute}.p-datatable-frozen-view .p-datatable-scrollable-body{overflow:hidden}.p-datatable-frozen-view>.p-datatable-scrollable-body>table>.p-datatable-tbody>tr>td:last-child{border-right:0}.p-datatable-unfrozen-view{position:absolute;top:0}.p-datatable-flex-scrollable,.p-datatable-flex-scrollable .p-datatable-scrollable-view,.p-datatable-flex-scrollable .p-datatable-scrollable-wrapper{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-datatable-flex-scrollable .p-datatable-scrollable-body,.p-datatable-flex-scrollable .p-datatable-virtual-scrollable-body{-ms-flex:1;flex:1}.p-datatable-resizable>.p-datatable-wrapper{overflow-x:auto}.p-datatable-resizable .p-datatable-tbody>tr>td,.p-datatable-resizable .p-datatable-tfoot>tr>td,.p-datatable-resizable .p-datatable-thead>tr>th{overflow:hidden;white-space:nowrap}.p-datatable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{border:1px solid rgba(0,0,0,0);cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5rem}.p-datatable .p-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.p-datatable .p-row-editor-cancel,.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-down,.p-datatable-reorder-indicator-up{display:none;position:absolute}.p-datatable .p-datatable-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td .p-column-title{display:none}@media screen and (max-width:40em){.p-datatable.p-datatable-responsive .p-datatable-tfoot>tr>td,.p-datatable.p-datatable-responsive .p-datatable-thead>tr>th{display:none!important}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td{border:0;clear:left;display:block;float:left;text-align:left;width:100%}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td .p-column-title{display:inline-block;font-weight:700;margin:-.4em 1em -.4em -.4rem;min-width:30%;padding:.4rem}}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { pageLinks: [{
            type: Input
        }], alwaysShowPaginator: [{
            type: Input
        }], paginatorPosition: [{
            type: Input
        }], paginatorDropdownScrollHeight: [{
            type: Input
        }], currentPageReportTemplate: [{
            type: Input
        }], showPageLinks: [{
            type: Input
        }], defaultSortOrder: [{
            type: Input
        }], sortMode: [{
            type: Input
        }], resetPageOnSort: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], contextMenuSelectionChange: [{
            type: Output
        }], contextMenuSelectionMode: [{
            type: Input
        }], rowTrackBy: [{
            type: Input
        }], lazy: [{
            type: Input
        }], lazyLoadOnInit: [{
            type: Input
        }], compareSelectionBy: [{
            type: Input
        }], csvSeparator: [{
            type: Input
        }], exportFilename: [{
            type: Input
        }], filters: [{
            type: Input
        }], filterDelay: [{
            type: Input
        }], expandedRowKeys: [{
            type: Input
        }], editingRowKeys: [{
            type: Input
        }], rowExpandMode: [{
            type: Input
        }], virtualScrollDelay: [{
            type: Input
        }], virtualRowHeight: [{
            type: Input
        }], columnResizeMode: [{
            type: Input
        }], loadingIcon: [{
            type: Input
        }], showLoader: [{
            type: Input
        }], stateStorage: [{
            type: Input
        }], editMode: [{
            type: Input
        }], onRowSelect: [{
            type: Output
        }], onRowUnselect: [{
            type: Output
        }], onPage: [{
            type: Output
        }], onSort: [{
            type: Output
        }], onFilter: [{
            type: Output
        }], onLazyLoad: [{
            type: Output
        }], onRowExpand: [{
            type: Output
        }], onRowCollapse: [{
            type: Output
        }], onContextMenuSelect: [{
            type: Output
        }], onColResize: [{
            type: Output
        }], onColReorder: [{
            type: Output
        }], onRowReorder: [{
            type: Output
        }], onEditInit: [{
            type: Output
        }], onEditComplete: [{
            type: Output
        }], onEditCancel: [{
            type: Output
        }], onHeaderCheckboxToggle: [{
            type: Output
        }], sortFunction: [{
            type: Output
        }], firstChange: [{
            type: Output
        }], rowsChange: [{
            type: Output
        }], onStateSave: [{
            type: Output
        }], onStateRestore: [{
            type: Output
        }], totalRecords: [{
            type: Input
        }], value: [{
            type: Input
        }], columns: [{
            type: Input
        }], first: [{
            type: Input
        }], rows: [{
            type: Input
        }], sortField: [{
            type: Input
        }], sortOrder: [{
            type: Input
        }], multiSortMeta: [{
            type: Input
        }], selection: [{
            type: Input
        }], contextMenuSelection: [{
            type: Input
        }], frozenColumns: [{
            type: Input
        }], frozenValue: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], tableStyle: [{
            type: Input
        }], tableStyleClass: [{
            type: Input
        }], paginator: [{
            type: Input
        }], rowsPerPageOptions: [{
            type: Input
        }], paginatorDropdownAppendTo: [{
            type: Input
        }], showCurrentPageReport: [{
            type: Input
        }], showJumpToPageDropdown: [{
            type: Input
        }], selectionMode: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], metaKeySelection: [{
            type: Input
        }], globalFilterFields: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], scrollable: [{
            type: Input
        }], scrollHeight: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], frozenWidth: [{
            type: Input
        }], responsive: [{
            type: Input
        }], contextMenu: [{
            type: Input
        }], resizableColumns: [{
            type: Input
        }], reorderableColumns: [{
            type: Input
        }], loading: [{
            type: Input
        }], rowHover: [{
            type: Input
        }], customSort: [{
            type: Input
        }], autoLayout: [{
            type: Input
        }], exportFunction: [{
            type: Input
        }], stateKey: [{
            type: Input
        }], minBufferPx: [{
            type: Input
        }], maxBufferPx: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], resizeHelperViewChild: [{
            type: ViewChild,
            args: ['resizeHelper']
        }], reorderIndicatorUpViewChild: [{
            type: ViewChild,
            args: ['reorderIndicatorUp']
        }], reorderIndicatorDownViewChild: [{
            type: ViewChild,
            args: ['reorderIndicatorDown']
        }], tableViewChild: [{
            type: ViewChild,
            args: ['table']
        }], scrollableViewChild: [{
            type: ViewChild,
            args: ['scrollableView']
        }], scrollableFrozenViewChild: [{
            type: ViewChild,
            args: ['scrollableFrozenView']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class TableBody {
    constructor(dt, tableService, cd) {
        this.dt = dt;
        this.tableService = tableService;
        this.cd = cd;
        this.subscription = this.dt.tableService.valueSource$.subscribe(() => {
            if (this.dt.virtualScroll) {
                this.cd.detectChanges();
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TableBody.ɵfac = function TableBody_Factory(t) { return new (t || TableBody)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TableBody.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableBody, selectors: [["", "pTableBody", ""]], inputs: { columns: ["pTableBody", "columns"], template: ["pTableBodyTemplate", "template"], frozen: "frozen" }, attrs: _c11, decls: 5, vars: 5, consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"]], template: function TableBody_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TableBody_ng_container_0_Template, 3, 6, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_1_Template, 2, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(2, TableBody_ng_container_2_Template, 3, 6, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(3, TableBody_ng_container_3_Template, 2, 5, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.dt.expandedRowTemplate && !ctx.dt.virtualScroll);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.dt.expandedRowTemplate && ctx.dt.virtualScroll);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dt.expandedRowTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dt.loading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dt.isEmpty() && !ctx.dt.loading);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc3.CdkVirtualForOf], pipes: [ɵngcc1.SlicePipe], encapsulation: 2 });
TableBody.ctorParameters = () => [
    { type: Table },
    { type: TableService },
    { type: ChangeDetectorRef }
];
TableBody.propDecorators = {
    columns: [{ type: Input, args: ["pTableBody",] }],
    template: [{ type: Input, args: ["pTableBodyTemplate",] }],
    frozen: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableBody, [{
        type: Component,
        args: [{
                selector: '[pTableBody]',
                template: `
        <ng-container *ngIf="!dt.expandedRowTemplate && !dt.virtualScroll">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngTemplateOutlet="template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}"></ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="!dt.expandedRowTemplate && dt.virtualScroll">
            <ng-template cdkVirtualFor let-rowData let-rowIndex="index" [cdkVirtualForOf]="dt.filteredValue||dt.value" [cdkVirtualForTrackBy]="dt.rowTrackBy" [cdkVirtualForTemplateCacheSize]="0">
                <ng-container *ngTemplateOutlet="rowData ? template: dt.loadingBodyTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}"></ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.expandedRowTemplate">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngTemplateOutlet="template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}"></ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container *ngTemplateOutlet="dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}"></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.loading">
            <ng-container *ngTemplateOutlet="dt.loadingBodyTemplate; context: {$implicit: columns, frozen: frozen}"></ng-container>
        </ng-container>
        <ng-container *ngIf="dt.isEmpty() && !dt.loading">
            <ng-container *ngTemplateOutlet="dt.emptyMessageTemplate; context: {$implicit: columns, frozen: frozen}"></ng-container>
        </ng-container>
    `,
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { columns: [{
            type: Input,
            args: ["pTableBody"]
        }], template: [{
            type: Input,
            args: ["pTableBodyTemplate"]
        }], frozen: [{
            type: Input
        }] }); })();
export class ScrollableView {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
        this.loadedPages = [];
    }
    get scrollHeight() {
        return this._scrollHeight;
    }
    set scrollHeight(val) {
        this._scrollHeight = val;
        if (val != null && (val.includes('%') || val.includes('calc'))) {
            console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
        }
        if (this.dt.virtualScroll && this.virtualScrollBody) {
            this.virtualScrollBody.checkViewportSize();
        }
    }
    ngAfterViewInit() {
        if (!this.frozen) {
            if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
                DomHandler.addClass(this.el.nativeElement, 'p-datatable-unfrozen-view');
            }
            let frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                if (this.dt.virtualScroll)
                    this.frozenSiblingBody = DomHandler.findSingle(frozenView, '.p-datatable-virtual-scrollable-body');
                else
                    this.frozenSiblingBody = DomHandler.findSingle(frozenView, '.p-datatable-scrollable-body');
            }
            let scrollBarWidth = DomHandler.calculateScrollbarWidth();
            this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
            }
        }
        else {
            if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
                this.scrollableAlignerViewChild.nativeElement.style.height = DomHandler.calculateScrollbarHeight() + 'px';
            }
        }
        this.bindEvents();
    }
    bindEvents() {
        this.zone.runOutsideAngular(() => {
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                this.headerScrollListener = this.onHeaderScroll.bind(this);
                this.scrollHeaderViewChild.nativeElement.addEventListener('scroll', this.headerScrollListener);
            }
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.footerScrollListener = this.onFooterScroll.bind(this);
                this.scrollFooterViewChild.nativeElement.addEventListener('scroll', this.footerScrollListener);
            }
            if (!this.frozen) {
                this.bodyScrollListener = this.onBodyScroll.bind(this);
                if (this.dt.virtualScroll)
                    this.virtualScrollBody.getElementRef().nativeElement.addEventListener('scroll', this.bodyScrollListener);
                else
                    this.scrollBodyViewChild.nativeElement.addEventListener('scroll', this.bodyScrollListener);
            }
        });
    }
    unbindEvents() {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
        }
        if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            this.scrollBodyViewChild.nativeElement.removeEventListener('scroll', this.bodyScrollListener);
        }
        if (this.virtualScrollBody && this.virtualScrollBody.getElementRef()) {
            this.virtualScrollBody.getElementRef().nativeElement.removeEventListener('scroll', this.bodyScrollListener);
        }
    }
    onHeaderScroll() {
        const scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    }
    onFooterScroll() {
        const scrollLeft = this.scrollFooterViewChild.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    }
    onBodyScroll(event) {
        if (this.preventBodyScrollPropagation) {
            this.preventBodyScrollPropagation = false;
            return;
        }
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
        }
        if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = event.target.scrollTop;
        }
    }
    onScrollIndexChange(index) {
        if (this.dt.lazy) {
            let pageRange = this.createPageRange(Math.floor(index / this.dt.rows));
            pageRange.forEach(page => this.loadPage(page));
        }
    }
    createPageRange(page) {
        let range = [];
        if (page !== 0) {
            range.push(page - 1);
        }
        range.push(page);
        if (page !== (this.getPageCount() - 1)) {
            range.push(page + 1);
        }
        return range;
    }
    loadPage(page) {
        if (!this.loadedPages.includes(page)) {
            this.dt.onLazyLoad.emit({
                first: this.dt.rows * page,
                rows: this.dt.rows,
                sortField: this.dt.sortField,
                sortOrder: this.dt.sortOrder,
                filters: this.dt.filters,
                globalFilter: this.dt.filters && this.dt.filters['global'] ? this.dt.filters['global'].value : null,
                multiSortMeta: this.dt.multiSortMeta
            });
            this.loadedPages.push(page);
        }
    }
    clearCache() {
        this.loadedPages = [];
    }
    getPageCount() {
        let dataToRender = this.dt.filteredValue || this.dt.value;
        let dataLength = dataToRender ? dataToRender.length : 0;
        return Math.ceil(dataLength / this.dt.rows);
    }
    scrollToVirtualIndex(index) {
        if (this.virtualScrollBody) {
            this.virtualScrollBody.scrollToIndex(index);
        }
    }
    scrollTo(options) {
        if (this.virtualScrollBody) {
            this.virtualScrollBody.scrollTo(options);
        }
        else {
            if (this.scrollBodyViewChild.nativeElement.scrollTo) {
                this.scrollBodyViewChild.nativeElement.scrollTo(options);
            }
            else {
                this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
                this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
            }
        }
    }
    ngOnDestroy() {
        this.unbindEvents();
        this.frozenSiblingBody = null;
    }
}
ScrollableView.ɵfac = function ScrollableView_Factory(t) { return new (t || ScrollableView)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ScrollableView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ScrollableView, selectors: [["", "pScrollableView", ""]], viewQuery: function ScrollableView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c16, true);
        ɵngcc0.ɵɵviewQuery(_c17, true);
        ɵngcc0.ɵɵviewQuery(_c18, true);
        ɵngcc0.ɵɵviewQuery(_c19, true);
        ɵngcc0.ɵɵviewQuery(_c20, true);
        ɵngcc0.ɵɵviewQuery(_c21, true);
        ɵngcc0.ɵɵviewQuery(_c22, true);
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollHeaderViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollHeaderBoxViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollBodyViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollTableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollFooterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollFooterBoxViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableAlignerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.virtualScrollBody = _t.first);
    } }, inputs: { scrollHeight: "scrollHeight", columns: ["pScrollableView", "columns"], frozen: "frozen" }, attrs: _c23, decls: 21, vars: 24, consts: [[1, "p-datatable-scrollable-header"], ["scrollHeader", ""], [1, "p-datatable-scrollable-header-box"], ["scrollHeaderBox", ""], [1, "p-datatable-scrollable-header-table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-datatable-thead"], [1, "p-datatable-tbody"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf", "ngIfElse"], ["virtualScrollTemplate", ""], [1, "p-datatable-scrollable-footer"], ["scrollFooter", ""], [1, "p-datatable-scrollable-footer-box"], ["scrollFooterBox", ""], [1, "p-datatable-scrollable-footer-table", 3, "ngClass", "ngStyle"], [1, "p-datatable-tfoot"], [1, "p-datatable-scrollable-body", 3, "ngStyle"], ["scrollBody", ""], [3, "ngStyle"], ["scrollTable", ""], [1, "p-datatable-tbody", 3, "pTableBody", "pTableBodyTemplate", "frozen"], ["style", "background-color:transparent", 4, "ngIf"], [2, "background-color", "transparent"], ["scrollableAligner", ""], [1, "p-datatable-virtual-scrollable-body", 3, "itemSize", "minBufferPx", "maxBufferPx", "scrolledIndexChange"]], template: function ScrollableView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelementStart(4, "table", 4);
        ɵngcc0.ɵɵtemplate(5, ScrollableView_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementStart(6, "thead", 6);
        ɵngcc0.ɵɵtemplate(7, ScrollableView_ng_container_7_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "tbody", 7);
        ɵngcc0.ɵɵtemplate(9, ScrollableView_ng_template_9_Template, 1, 6, "ng-template", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, ScrollableView_ng_container_10_Template, 8, 15, "ng-container", 9);
        ɵngcc0.ɵɵtemplate(11, ScrollableView_ng_template_11_Template, 6, 16, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(13, "div", 11, 12);
        ɵngcc0.ɵɵelementStart(15, "div", 13, 14);
        ɵngcc0.ɵɵelementStart(17, "table", 15);
        ɵngcc0.ɵɵtemplate(18, ScrollableView_ng_container_18_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementStart(19, "tfoot", 16);
        ɵngcc0.ɵɵtemplate(20, ScrollableView_ng_container_20_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r6 = ɵngcc0.ɵɵreference(12);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dt.tableStyleClass)("ngStyle", ctx.dt.tableStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenColGroupTemplate || ctx.dt.colGroupTemplate : ctx.dt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(16, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenHeaderTemplate || ctx.dt.headerTemplate : ctx.dt.headerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(18, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.dt.frozenValue)("ngForTrackBy", ctx.dt.rowTrackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.dt.virtualScroll)("ngIfElse", _r6);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dt.tableStyleClass)("ngStyle", ctx.dt.tableStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenColGroupTemplate || ctx.dt.colGroupTemplate : ctx.dt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(20, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenFooterTemplate || ctx.dt.footerTemplate : ctx.dt.footerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(22, _c7, ctx.columns));
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc1.NgIf, TableBody, ɵngcc3.CdkVirtualScrollViewport, ɵngcc3.CdkFixedSizeVirtualScroll], encapsulation: 2 });
ScrollableView.ctorParameters = () => [
    { type: Table },
    { type: ElementRef },
    { type: NgZone }
];
ScrollableView.propDecorators = {
    columns: [{ type: Input, args: ["pScrollableView",] }],
    frozen: [{ type: Input }],
    scrollHeaderViewChild: [{ type: ViewChild, args: ['scrollHeader',] }],
    scrollHeaderBoxViewChild: [{ type: ViewChild, args: ['scrollHeaderBox',] }],
    scrollBodyViewChild: [{ type: ViewChild, args: ['scrollBody',] }],
    scrollTableViewChild: [{ type: ViewChild, args: ['scrollTable',] }],
    scrollFooterViewChild: [{ type: ViewChild, args: ['scrollFooter',] }],
    scrollFooterBoxViewChild: [{ type: ViewChild, args: ['scrollFooterBox',] }],
    scrollableAlignerViewChild: [{ type: ViewChild, args: ['scrollableAligner',] }],
    virtualScrollBody: [{ type: ViewChild, args: [CdkVirtualScrollViewport,] }],
    scrollHeight: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollableView, [{
        type: Component,
        args: [{
                selector: '[pScrollableView]',
                template: `
        <div #scrollHeader class="p-datatable-scrollable-header">
            <div #scrollHeaderBox class="p-datatable-scrollable-header-box">
                <table class="p-datatable-scrollable-header-table" [ngClass]="dt.tableStyleClass" [ngStyle]="dt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <thead class="p-datatable-thead">
                        <ng-container *ngTemplateOutlet="frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}"></ng-container>
                    </thead>
                    <tbody class="p-datatable-tbody">
                        <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="dt.frozenValue" [ngForTrackBy]="dt.rowTrackBy">
                            <ng-container *ngTemplateOutlet="dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}"></ng-container>
                        </ng-template>
                    </tbody>
                </table>
            </div>
        </div>
        <ng-container *ngIf="!dt.virtualScroll; else virtualScrollTemplate">
            <div #scrollBody class="p-datatable-scrollable-body" [ngStyle]="{'max-height': dt.scrollHeight !== 'flex' ? scrollHeight : undefined, 'overflow-y': !frozen && dt.scrollHeight ? 'scroll' : undefined}">
                <table #scrollTable [class]="dt.tableStyleClass" [ngStyle]="dt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <tbody class="p-datatable-tbody" [pTableBody]="columns" [pTableBodyTemplate]="frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate" [frozen]="frozen"></tbody>
                </table>
                <div #scrollableAligner style="background-color:transparent" *ngIf="frozen"></div>
            </div>
        </ng-container>
        <ng-template #virtualScrollTemplate>
            <cdk-virtual-scroll-viewport [itemSize]="dt.virtualRowHeight" [style.height]="dt.scrollHeight !== 'flex' ? scrollHeight : undefined"
                    [minBufferPx]="dt.minBufferPx" [maxBufferPx]="dt.maxBufferPx" (scrolledIndexChange)="onScrollIndexChange($event)" class="p-datatable-virtual-scrollable-body">
                <table #scrollTable [class]="dt.tableStyleClass" [ngStyle]="dt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <tbody class="p-datatable-tbody" [pTableBody]="columns" [pTableBodyTemplate]="frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate" [frozen]="frozen"></tbody>
                </table>
                <div #scrollableAligner style="background-color:transparent" *ngIf="frozen"></div>
            </cdk-virtual-scroll-viewport>
        </ng-template>
        <div #scrollFooter class="p-datatable-scrollable-footer">
            <div #scrollFooterBox class="p-datatable-scrollable-footer-box">
                <table class="p-datatable-scrollable-footer-table" [ngClass]="dt.tableStyleClass" [ngStyle]="dt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <tfoot class="p-datatable-tfoot">
                        <ng-container *ngTemplateOutlet="frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}"></ng-container>
                    </tfoot>
                </table>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { scrollHeight: [{
            type: Input
        }], columns: [{
            type: Input,
            args: ["pScrollableView"]
        }], frozen: [{
            type: Input
        }], scrollHeaderViewChild: [{
            type: ViewChild,
            args: ['scrollHeader']
        }], scrollHeaderBoxViewChild: [{
            type: ViewChild,
            args: ['scrollHeaderBox']
        }], scrollBodyViewChild: [{
            type: ViewChild,
            args: ['scrollBody']
        }], scrollTableViewChild: [{
            type: ViewChild,
            args: ['scrollTable']
        }], scrollFooterViewChild: [{
            type: ViewChild,
            args: ['scrollFooter']
        }], scrollFooterBoxViewChild: [{
            type: ViewChild,
            args: ['scrollFooterBox']
        }], scrollableAlignerViewChild: [{
            type: ViewChild,
            args: ['scrollableAligner']
        }], virtualScrollBody: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }] }); })();
export class SortableColumn {
    constructor(dt) {
        this.dt = dt;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
                this.updateSortState();
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.updateSortState();
        }
    }
    updateSortState() {
        this.sorted = this.dt.isSorted(this.field);
        this.sortOrder = this.sorted ? (this.dt.sortOrder === 1 ? 'ascending' : 'descending') : 'none';
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.updateSortState();
            this.dt.sort({
                originalEvent: event,
                field: this.field
            });
            DomHandler.clearSelection();
        }
    }
    onEnterKey(event) {
        this.onClick(event);
    }
    isEnabled() {
        return this.pSortableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
SortableColumn.ɵfac = function SortableColumn_Factory(t) { return new (t || SortableColumn)(ɵngcc0.ɵɵdirectiveInject(Table)); };
SortableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SortableColumn, selectors: [["", "pSortableColumn", ""]], hostVars: 7, hostBindings: function SortableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function SortableColumn_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKey($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.sortOrder);
        ɵngcc0.ɵɵclassProp("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
    } }, inputs: { field: ["pSortableColumn", "field"], pSortableColumnDisabled: "pSortableColumnDisabled" } });
SortableColumn.ctorParameters = () => [
    { type: Table }
];
SortableColumn.propDecorators = {
    field: [{ type: Input, args: ["pSortableColumn",] }],
    pSortableColumnDisabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onEnterKey: [{ type: HostListener, args: ['keydown.enter', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SortableColumn, [{
        type: Directive,
        args: [{
                selector: '[pSortableColumn]',
                host: {
                    '[class.p-sortable-column]': 'isEnabled()',
                    '[class.p-highlight]': 'sorted',
                    '[attr.tabindex]': 'isEnabled() ? "0" : null',
                    '[attr.role]': '"columnheader"',
                    '[attr.aria-sort]': 'sortOrder'
                }
            }]
    }], function () { return [{ type: Table }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onEnterKey: [{
            type: HostListener,
            args: ['keydown.enter', ['$event']]
        }], field: [{
            type: Input,
            args: ["pSortableColumn"]
        }], pSortableColumnDisabled: [{
            type: Input
        }] }); })();
export class SortIcon {
    constructor(dt, cd) {
        this.dt = dt;
        this.cd = cd;
        this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
            this.updateSortState();
        });
    }
    ngOnInit() {
        this.updateSortState();
    }
    onClick(event) {
        event.preventDefault();
    }
    updateSortState() {
        if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
        }
        else if (this.dt.sortMode === 'multiple') {
            let sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
        this.cd.markForCheck();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
SortIcon.ɵfac = function SortIcon_Factory(t) { return new (t || SortIcon)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SortIcon.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SortIcon, selectors: [["p-sortIcon"]], inputs: { field: "field" }, decls: 1, vars: 5, consts: [[1, "p-sortable-column-icon", "pi", "pi-fw", 3, "ngClass"]], template: function SortIcon_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "i", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(1, _c25, ctx.sortOrder === 1, ctx.sortOrder === 0 - 1, ctx.sortOrder === 0));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
SortIcon.ctorParameters = () => [
    { type: Table },
    { type: ChangeDetectorRef }
];
SortIcon.propDecorators = {
    field: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SortIcon, [{
        type: Component,
        args: [{
                selector: 'p-sortIcon',
                template: `
        <i class="p-sortable-column-icon pi pi-fw" [ngClass]="{'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0}"></i>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ChangeDetectorRef }]; }, { field: [{
            type: Input
        }] }); })();
export class SelectableRow {
    constructor(dt, tableService) {
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.dt.isSelected(this.data);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    }
    onTouchEnd(event) {
        if (this.isEnabled()) {
            this.dt.handleRowTouchEnd(event);
        }
    }
    onArrowDownKeyDown(event) {
        if (!this.isEnabled()) {
            return;
        }
        const row = event.currentTarget;
        const nextRow = this.findNextSelectableRow(row);
        if (nextRow) {
            nextRow.focus();
        }
        event.preventDefault();
    }
    onArrowUpKeyDown(event) {
        if (!this.isEnabled()) {
            return;
        }
        const row = event.currentTarget;
        const prevRow = this.findPrevSelectableRow(row);
        if (prevRow) {
            prevRow.focus();
        }
        event.preventDefault();
    }
    onEnterKeyDown(event) {
        if (!this.isEnabled()) {
            return;
        }
        this.dt.handleRowClick({
            originalEvent: event,
            rowData: this.data,
            rowIndex: this.index
        });
    }
    findNextSelectableRow(row) {
        let nextRow = row.nextElementSibling;
        if (nextRow) {
            if (DomHandler.hasClass(nextRow, 'p-selectable-row'))
                return nextRow;
            else
                return this.findNextSelectableRow(nextRow);
        }
        else {
            return null;
        }
    }
    findPrevSelectableRow(row) {
        let prevRow = row.previousElementSibling;
        if (prevRow) {
            if (DomHandler.hasClass(prevRow, 'p-selectable-row'))
                return prevRow;
            else
                return this.findPrevSelectableRow(prevRow);
        }
        else {
            return null;
        }
    }
    isEnabled() {
        return this.pSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
SelectableRow.ɵfac = function SelectableRow_Factory(t) { return new (t || SelectableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService)); };
SelectableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SelectableRow, selectors: [["", "pSelectableRow", ""]], hostVars: 5, hostBindings: function SelectableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function SelectableRow_click_HostBindingHandler($event) { return ctx.onClick($event); })("touchend", function SelectableRow_touchend_HostBindingHandler($event) { return ctx.onTouchEnd($event); })("keydown.arrowdown", function SelectableRow_keydown_arrowdown_HostBindingHandler($event) { return ctx.onArrowDownKeyDown($event); })("keydown.arrowup", function SelectableRow_keydown_arrowup_HostBindingHandler($event) { return ctx.onArrowUpKeyDown($event); })("keydown.enter", function SelectableRow_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKeyDown($event); })("keydown.shift.enter", function SelectableRow_keydown_shift_enter_HostBindingHandler($event) { return ctx.onEnterKeyDown($event); })("keydown.meta.enter", function SelectableRow_keydown_meta_enter_HostBindingHandler($event) { return ctx.onEnterKeyDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : undefined);
        ɵngcc0.ɵɵclassProp("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    } }, inputs: { data: ["pSelectableRow", "data"], index: ["pSelectableRowIndex", "index"], pSelectableRowDisabled: "pSelectableRowDisabled" } });
SelectableRow.ctorParameters = () => [
    { type: Table },
    { type: TableService }
];
SelectableRow.propDecorators = {
    data: [{ type: Input, args: ["pSelectableRow",] }],
    index: [{ type: Input, args: ["pSelectableRowIndex",] }],
    pSelectableRowDisabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onTouchEnd: [{ type: HostListener, args: ['touchend', ['$event'],] }],
    onArrowDownKeyDown: [{ type: HostListener, args: ['keydown.arrowdown', ['$event'],] }],
    onArrowUpKeyDown: [{ type: HostListener, args: ['keydown.arrowup', ['$event'],] }],
    onEnterKeyDown: [{ type: HostListener, args: ['keydown.enter', ['$event'],] }, { type: HostListener, args: ['keydown.shift.enter', ['$event'],] }, { type: HostListener, args: ['keydown.meta.enter', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectableRow, [{
        type: Directive,
        args: [{
                selector: '[pSelectableRow]',
                host: {
                    '[class.p-selectable-row]': 'isEnabled()',
                    '[class.p-highlight]': 'selected',
                    '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
                }
            }]
    }], function () { return [{ type: Table }, { type: TableService }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onTouchEnd: [{
            type: HostListener,
            args: ['touchend', ['$event']]
        }], onArrowDownKeyDown: [{
            type: HostListener,
            args: ['keydown.arrowdown', ['$event']]
        }], onArrowUpKeyDown: [{
            type: HostListener,
            args: ['keydown.arrowup', ['$event']]
        }], onEnterKeyDown: [{
            type: HostListener,
            args: ['keydown.enter', ['$event']]
        }, {
            type: HostListener,
            args: ['keydown.shift.enter', ['$event']]
        }, {
            type: HostListener,
            args: ['keydown.meta.enter', ['$event']]
        }], data: [{
            type: Input,
            args: ["pSelectableRow"]
        }], index: [{
            type: Input,
            args: ["pSelectableRowIndex"]
        }], pSelectableRowDisabled: [{
            type: Input
        }] }); })();
export class SelectableRowDblClick {
    constructor(dt, tableService) {
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.dt.isSelected(this.data);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    }
    isEnabled() {
        return this.pSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
SelectableRowDblClick.ɵfac = function SelectableRowDblClick_Factory(t) { return new (t || SelectableRowDblClick)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService)); };
SelectableRowDblClick.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SelectableRowDblClick, selectors: [["", "pSelectableRowDblClick", ""]], hostVars: 4, hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    } }, inputs: { data: ["pSelectableRowDblClick", "data"], index: ["pSelectableRowIndex", "index"], pSelectableRowDisabled: "pSelectableRowDisabled" } });
SelectableRowDblClick.ctorParameters = () => [
    { type: Table },
    { type: TableService }
];
SelectableRowDblClick.propDecorators = {
    data: [{ type: Input, args: ["pSelectableRowDblClick",] }],
    index: [{ type: Input, args: ["pSelectableRowIndex",] }],
    pSelectableRowDisabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectableRowDblClick, [{
        type: Directive,
        args: [{
                selector: '[pSelectableRowDblClick]',
                host: {
                    '[class.p-selectable-row]': 'isEnabled()',
                    '[class.p-highlight]': 'selected'
                }
            }]
    }], function () { return [{ type: Table }, { type: TableService }]; }, { onClick: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }], data: [{
            type: Input,
            args: ["pSelectableRowDblClick"]
        }], index: [{
            type: Input,
            args: ["pSelectableRowIndex"]
        }], pSelectableRowDisabled: [{
            type: Input
        }] }); })();
export class ContextMenuRow {
    constructor(dt, tableService, el) {
        this.dt = dt;
        this.tableService = tableService;
        this.el = el;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.contextMenuSource$.subscribe((data) => {
                this.selected = this.dt.equals(this.data, data);
            });
        }
    }
    onContextMenu(event) {
        if (this.isEnabled()) {
            this.dt.handleRowRightClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
            this.el.nativeElement.focus();
            event.preventDefault();
        }
    }
    isEnabled() {
        return this.pContextMenuRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ContextMenuRow.ɵfac = function ContextMenuRow_Factory(t) { return new (t || ContextMenuRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ContextMenuRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ContextMenuRow, selectors: [["", "pContextMenuRow", ""]], hostVars: 3, hostBindings: function ContextMenuRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) { return ctx.onContextMenu($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : undefined);
        ɵngcc0.ɵɵclassProp("p-highlight-contextmenu", ctx.selected);
    } }, inputs: { data: ["pContextMenuRow", "data"], index: ["pContextMenuRowIndex", "index"], pContextMenuRowDisabled: "pContextMenuRowDisabled" } });
ContextMenuRow.ctorParameters = () => [
    { type: Table },
    { type: TableService },
    { type: ElementRef }
];
ContextMenuRow.propDecorators = {
    data: [{ type: Input, args: ["pContextMenuRow",] }],
    index: [{ type: Input, args: ["pContextMenuRowIndex",] }],
    pContextMenuRowDisabled: [{ type: Input }],
    onContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContextMenuRow, [{
        type: Directive,
        args: [{
                selector: '[pContextMenuRow]',
                host: {
                    '[class.p-highlight-contextmenu]': 'selected',
                    '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
                }
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ElementRef }]; }, { onContextMenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }], data: [{
            type: Input,
            args: ["pContextMenuRow"]
        }], index: [{
            type: Input,
            args: ["pContextMenuRowIndex"]
        }], pContextMenuRowDisabled: [{
            type: Input
        }] }); })();
export class RowToggler {
    constructor(dt) {
        this.dt = dt;
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.dt.toggleRow(this.data, event);
            event.preventDefault();
        }
    }
    isEnabled() {
        return this.pRowTogglerDisabled !== true;
    }
}
RowToggler.ɵfac = function RowToggler_Factory(t) { return new (t || RowToggler)(ɵngcc0.ɵɵdirectiveInject(Table)); };
RowToggler.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RowToggler, selectors: [["", "pRowToggler", ""]], hostBindings: function RowToggler_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function RowToggler_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { data: ["pRowToggler", "data"], pRowTogglerDisabled: "pRowTogglerDisabled" } });
RowToggler.ctorParameters = () => [
    { type: Table }
];
RowToggler.propDecorators = {
    data: [{ type: Input, args: ['pRowToggler',] }],
    pRowTogglerDisabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RowToggler, [{
        type: Directive,
        args: [{
                selector: '[pRowToggler]'
            }]
    }], function () { return [{ type: Table }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], data: [{
            type: Input,
            args: ['pRowToggler']
        }], pRowTogglerDisabled: [{
            type: Input
        }] }); })();
export class ResizableColumn {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            DomHandler.addClass(this.el.nativeElement, 'p-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'p-column-resizer';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(() => {
                this.resizerMouseDownListener = this.onMouseDown.bind(this);
                this.resizer.addEventListener('mousedown', this.resizerMouseDownListener);
            });
        }
    }
    bindDocumentEvents() {
        this.zone.runOutsideAngular(() => {
            this.documentMouseMoveListener = this.onDocumentMouseMove.bind(this);
            document.addEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseUpListener = this.onDocumentMouseUp.bind(this);
            document.addEventListener('mouseup', this.documentMouseUpListener);
        });
    }
    unbindDocumentEvents() {
        if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
        }
        if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
        }
    }
    onMouseDown(event) {
        if (event.which === 1) {
            this.dt.onColumnResizeBegin(event);
            this.bindDocumentEvents();
        }
    }
    onDocumentMouseMove(event) {
        this.dt.onColumnResize(event);
    }
    onDocumentMouseUp(event) {
        this.dt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    }
    isEnabled() {
        return this.pResizableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
        }
        this.unbindDocumentEvents();
    }
}
ResizableColumn.ɵfac = function ResizableColumn_Factory(t) { return new (t || ResizableColumn)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ResizableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ResizableColumn, selectors: [["", "pResizableColumn", ""]], inputs: { pResizableColumnDisabled: "pResizableColumnDisabled" } });
ResizableColumn.ctorParameters = () => [
    { type: Table },
    { type: ElementRef },
    { type: NgZone }
];
ResizableColumn.propDecorators = {
    pResizableColumnDisabled: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResizableColumn, [{
        type: Directive,
        args: [{
                selector: '[pResizableColumn]'
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { pResizableColumnDisabled: [{
            type: Input
        }] }); })();
export class ReorderableColumn {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            this.bindEvents();
        }
    }
    bindEvents() {
        this.zone.runOutsideAngular(() => {
            this.mouseDownListener = this.onMouseDown.bind(this);
            this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
            this.dragStartListener = this.onDragStart.bind(this);
            this.el.nativeElement.addEventListener('dragstart', this.dragStartListener);
            this.dragOverListener = this.onDragEnter.bind(this);
            this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
            this.dragEnterListener = this.onDragEnter.bind(this);
            this.el.nativeElement.addEventListener('dragenter', this.dragEnterListener);
            this.dragLeaveListener = this.onDragLeave.bind(this);
            this.el.nativeElement.addEventListener('dragleave', this.dragLeaveListener);
        });
    }
    unbindEvents() {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    }
    onMouseDown(event) {
        if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.hasClass(event.target, 'p-column-resizer'))
            this.el.nativeElement.draggable = false;
        else
            this.el.nativeElement.draggable = true;
    }
    onDragStart(event) {
        this.dt.onColumnDragStart(event, this.el.nativeElement);
    }
    onDragOver(event) {
        event.preventDefault();
    }
    onDragEnter(event) {
        this.dt.onColumnDragEnter(event, this.el.nativeElement);
    }
    onDragLeave(event) {
        this.dt.onColumnDragLeave(event);
    }
    onDrop(event) {
        if (this.isEnabled()) {
            this.dt.onColumnDrop(event, this.el.nativeElement);
        }
    }
    isEnabled() {
        return this.pReorderableColumnDisabled !== true;
    }
    ngOnDestroy() {
        this.unbindEvents();
    }
}
ReorderableColumn.ɵfac = function ReorderableColumn_Factory(t) { return new (t || ReorderableColumn)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ReorderableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ReorderableColumn, selectors: [["", "pReorderableColumn", ""]], hostBindings: function ReorderableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function ReorderableColumn_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { pReorderableColumnDisabled: "pReorderableColumnDisabled" } });
ReorderableColumn.ctorParameters = () => [
    { type: Table },
    { type: ElementRef },
    { type: NgZone }
];
ReorderableColumn.propDecorators = {
    pReorderableColumnDisabled: [{ type: Input }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReorderableColumn, [{
        type: Directive,
        args: [{
                selector: '[pReorderableColumn]'
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }], pReorderableColumnDisabled: [{
            type: Input
        }] }); })();
export class EditableColumn {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            DomHandler.addClass(this.el.nativeElement, 'p-editable-column');
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.dt.editingCellClick = true;
            if (this.dt.editingCell) {
                if (this.dt.editingCell !== this.el.nativeElement) {
                    if (!this.dt.isEditingCellValid()) {
                        return;
                    }
                    this.closeEditingCell(true, event);
                    this.openCell();
                }
            }
            else {
                this.openCell();
            }
        }
    }
    openCell() {
        this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
        DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
        this.dt.onEditInit.emit({ field: this.field, data: this.data, index: this.rowIndex });
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                let focusCellSelector = this.pFocusCellSelector || 'input, textarea, select';
                let focusableElement = DomHandler.findSingle(this.el.nativeElement, focusCellSelector);
                if (focusableElement) {
                    focusableElement.focus();
                }
            }, 50);
        });
    }
    closeEditingCell(completed, event) {
        if (completed)
            this.dt.onEditComplete.emit({ field: this.dt.editingCellField, data: this.dt.editingCellData, originalEvent: event, index: this.rowIndex });
        else
            this.dt.onEditCancel.emit({ field: this.dt.editingCellField, data: this.dt.editingCellData, originalEvent: event, index: this.rowIndex });
        DomHandler.removeClass(this.dt.editingCell, 'p-cell-editing');
        this.dt.editingCell = null;
        this.dt.editingCellData = null;
        this.dt.editingCellField = null;
        this.dt.unbindDocumentEditListener();
    }
    onEnterKeyDown(event) {
        if (this.isEnabled()) {
            if (this.dt.isEditingCellValid()) {
                this.closeEditingCell(true, event);
            }
            event.preventDefault();
        }
    }
    onEscapeKeyDown(event) {
        if (this.isEnabled()) {
            if (this.dt.isEditingCellValid()) {
                this.closeEditingCell(false, event);
            }
            event.preventDefault();
        }
    }
    onShiftKeyDown(event) {
        if (this.isEnabled()) {
            if (event.shiftKey)
                this.moveToPreviousCell(event);
            else {
                this.moveToNextCell(event);
            }
        }
    }
    findCell(element) {
        if (element) {
            let cell = element;
            while (cell && !DomHandler.hasClass(cell, 'p-cell-editing')) {
                cell = cell.parentElement;
            }
            return cell;
        }
        else {
            return null;
        }
    }
    moveToPreviousCell(event) {
        let currentCell = this.findCell(event.target);
        if (currentCell) {
            let targetCell = this.findPreviousEditableColumn(currentCell);
            if (targetCell) {
                if (this.dt.isEditingCellValid()) {
                    this.closeEditingCell(true, event);
                }
                DomHandler.invokeElementMethod(event.target, 'blur');
                DomHandler.invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        }
    }
    moveToNextCell(event) {
        let currentCell = this.findCell(event.target);
        if (currentCell) {
            let targetCell = this.findNextEditableColumn(currentCell);
            if (targetCell) {
                if (this.dt.isEditingCellValid()) {
                    this.closeEditingCell(true, event);
                }
                DomHandler.invokeElementMethod(event.target, 'blur');
                DomHandler.invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        }
    }
    findPreviousEditableColumn(cell) {
        let prevCell = cell.previousElementSibling;
        if (!prevCell) {
            let previousRow = cell.parentElement.previousElementSibling;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
        if (prevCell) {
            if (DomHandler.hasClass(prevCell, 'p-editable-column'))
                return prevCell;
            else
                return this.findPreviousEditableColumn(prevCell);
        }
        else {
            return null;
        }
    }
    findNextEditableColumn(cell) {
        let nextCell = cell.nextElementSibling;
        if (!nextCell) {
            let nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
        if (nextCell) {
            if (DomHandler.hasClass(nextCell, 'p-editable-column'))
                return nextCell;
            else
                return this.findNextEditableColumn(nextCell);
        }
        else {
            return null;
        }
    }
    isEnabled() {
        return this.pEditableColumnDisabled !== true;
    }
}
EditableColumn.ɵfac = function EditableColumn_Factory(t) { return new (t || EditableColumn)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
EditableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EditableColumn, selectors: [["", "pEditableColumn", ""]], hostBindings: function EditableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function EditableColumn_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKeyDown($event); })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeKeyDown($event); })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) { return ctx.onShiftKeyDown($event); })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) { return ctx.onShiftKeyDown($event); })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) { return ctx.onShiftKeyDown($event); });
    } }, inputs: { data: ["pEditableColumn", "data"], field: ["pEditableColumnField", "field"], rowIndex: ["pEditableColumnRowIndex", "rowIndex"], pEditableColumnDisabled: "pEditableColumnDisabled", pFocusCellSelector: "pFocusCellSelector" } });
EditableColumn.ctorParameters = () => [
    { type: Table },
    { type: ElementRef },
    { type: NgZone }
];
EditableColumn.propDecorators = {
    data: [{ type: Input, args: ["pEditableColumn",] }],
    field: [{ type: Input, args: ["pEditableColumnField",] }],
    rowIndex: [{ type: Input, args: ["pEditableColumnRowIndex",] }],
    pEditableColumnDisabled: [{ type: Input }],
    pFocusCellSelector: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onEnterKeyDown: [{ type: HostListener, args: ['keydown.enter', ['$event'],] }],
    onEscapeKeyDown: [{ type: HostListener, args: ['keydown.escape', ['$event'],] }],
    onShiftKeyDown: [{ type: HostListener, args: ['keydown.tab', ['$event'],] }, { type: HostListener, args: ['keydown.shift.tab', ['$event'],] }, { type: HostListener, args: ['keydown.meta.tab', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EditableColumn, [{
        type: Directive,
        args: [{
                selector: '[pEditableColumn]'
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onEnterKeyDown: [{
            type: HostListener,
            args: ['keydown.enter', ['$event']]
        }], onEscapeKeyDown: [{
            type: HostListener,
            args: ['keydown.escape', ['$event']]
        }], onShiftKeyDown: [{
            type: HostListener,
            args: ['keydown.tab', ['$event']]
        }, {
            type: HostListener,
            args: ['keydown.shift.tab', ['$event']]
        }, {
            type: HostListener,
            args: ['keydown.meta.tab', ['$event']]
        }], data: [{
            type: Input,
            args: ["pEditableColumn"]
        }], field: [{
            type: Input,
            args: ["pEditableColumnField"]
        }], rowIndex: [{
            type: Input,
            args: ["pEditableColumnRowIndex"]
        }], pEditableColumnDisabled: [{
            type: Input
        }], pFocusCellSelector: [{
            type: Input
        }] }); })();
export class EditableRow {
    constructor(el) {
        this.el = el;
    }
    isEnabled() {
        return this.pEditableRowDisabled !== true;
    }
}
EditableRow.ɵfac = function EditableRow_Factory(t) { return new (t || EditableRow)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
EditableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EditableRow, selectors: [["", "pEditableRow", ""]], inputs: { data: ["pEditableRow", "data"], pEditableRowDisabled: "pEditableRowDisabled" } });
EditableRow.ctorParameters = () => [
    { type: ElementRef }
];
EditableRow.propDecorators = {
    data: [{ type: Input, args: ["pEditableRow",] }],
    pEditableRowDisabled: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EditableRow, [{
        type: Directive,
        args: [{
                selector: '[pEditableRow]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { data: [{
            type: Input,
            args: ["pEditableRow"]
        }], pEditableRowDisabled: [{
            type: Input
        }] }); })();
export class InitEditableRow {
    constructor(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    onClick(event) {
        this.dt.initRowEdit(this.editableRow.data);
        event.preventDefault();
    }
}
InitEditableRow.ɵfac = function InitEditableRow_Factory(t) { return new (t || InitEditableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(EditableRow)); };
InitEditableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InitEditableRow, selectors: [["", "pInitEditableRow", ""]], hostBindings: function InitEditableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function InitEditableRow_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
InitEditableRow.ctorParameters = () => [
    { type: Table },
    { type: EditableRow }
];
InitEditableRow.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InitEditableRow, [{
        type: Directive,
        args: [{
                selector: '[pInitEditableRow]'
            }]
    }], function () { return [{ type: Table }, { type: EditableRow }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
export class SaveEditableRow {
    constructor(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    onClick(event) {
        this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
        event.preventDefault();
    }
}
SaveEditableRow.ɵfac = function SaveEditableRow_Factory(t) { return new (t || SaveEditableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(EditableRow)); };
SaveEditableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SaveEditableRow, selectors: [["", "pSaveEditableRow", ""]], hostBindings: function SaveEditableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function SaveEditableRow_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
SaveEditableRow.ctorParameters = () => [
    { type: Table },
    { type: EditableRow }
];
SaveEditableRow.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SaveEditableRow, [{
        type: Directive,
        args: [{
                selector: '[pSaveEditableRow]'
            }]
    }], function () { return [{ type: Table }, { type: EditableRow }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
export class CancelEditableRow {
    constructor(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    onClick(event) {
        this.dt.cancelRowEdit(this.editableRow.data);
        event.preventDefault();
    }
}
CancelEditableRow.ɵfac = function CancelEditableRow_Factory(t) { return new (t || CancelEditableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(EditableRow)); };
CancelEditableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CancelEditableRow, selectors: [["", "pCancelEditableRow", ""]], hostBindings: function CancelEditableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CancelEditableRow_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
CancelEditableRow.ctorParameters = () => [
    { type: Table },
    { type: EditableRow }
];
CancelEditableRow.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CancelEditableRow, [{
        type: Directive,
        args: [{
                selector: '[pCancelEditableRow]'
            }]
    }], function () { return [{ type: Table }, { type: EditableRow }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
export class CellEditor {
    constructor(dt, editableColumn, editableRow) {
        this.dt = dt;
        this.editableColumn = editableColumn;
        this.editableRow = editableRow;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'input':
                    this.inputTemplate = item.template;
                    break;
                case 'output':
                    this.outputTemplate = item.template;
                    break;
            }
        });
    }
    get editing() {
        return (this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement) ||
            (this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data));
    }
}
CellEditor.ɵfac = function CellEditor_Factory(t) { return new (t || CellEditor)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(EditableColumn, 8), ɵngcc0.ɵɵdirectiveInject(EditableRow, 8)); };
CellEditor.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CellEditor, selectors: [["p-cellEditor"]], contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]], template: function CellEditor_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.editing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editing);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
CellEditor.ctorParameters = () => [
    { type: Table },
    { type: EditableColumn, decorators: [{ type: Optional }] },
    { type: EditableRow, decorators: [{ type: Optional }] }
];
CellEditor.propDecorators = {
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CellEditor, [{
        type: Component,
        args: [{
                selector: 'p-cellEditor',
                template: `
        <ng-container *ngIf="editing">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!editing">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: EditableColumn, decorators: [{
                type: Optional
            }] }, { type: EditableRow, decorators: [{
                type: Optional
            }] }]; }, { templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class TableRadioButton {
    constructor(dt, tableService, cd) {
        this.dt = dt;
        this.tableService = tableService;
        this.cd = cd;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.dt.isSelected(this.value);
            this.cd.markForCheck();
        });
    }
    ngOnInit() {
        this.checked = this.dt.isSelected(this.value);
    }
    onClick(event) {
        if (!this.disabled) {
            this.dt.toggleRowWithRadio({
                originalEvent: event,
                rowIndex: this.index
            }, this.value);
        }
        DomHandler.clearSelection();
    }
    onFocus() {
        DomHandler.addClass(this.boxViewChild.nativeElement, 'p-focus');
    }
    onBlur() {
        DomHandler.removeClass(this.boxViewChild.nativeElement, 'p-focus');
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TableRadioButton.ɵfac = function TableRadioButton_Factory(t) { return new (t || TableRadioButton)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TableRadioButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableRadioButton, selectors: [["p-tableRadioButton"]], viewQuery: function TableRadioButton_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c26, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, inputs: { disabled: "disabled", value: "value", index: "index", inputId: "inputId", name: "name", ariaLabel: "ariaLabel" }, decls: 6, vars: 10, consts: [[1, "p-radiobutton", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "radio", 3, "checked", "disabled", "focus", "blur"], ["role", "radio", 3, "ngClass"], ["box", ""], [1, "p-radiobutton-icon"]], template: function TableRadioButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TableRadioButton_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("focus", function TableRadioButton_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TableRadioButton_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵelement(5, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c27, ctx.checked, ctx.disabled));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
TableRadioButton.ctorParameters = () => [
    { type: Table },
    { type: TableService },
    { type: ChangeDetectorRef }
];
TableRadioButton.propDecorators = {
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    index: [{ type: Input }],
    inputId: [{ type: Input }],
    name: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    boxViewChild: [{ type: ViewChild, args: ['box',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableRadioButton, [{
        type: Component,
        args: [{
                selector: 'p-tableRadioButton',
                template: `
        <div class="p-radiobutton p-component" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="radio" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()"
                [disabled]="disabled" [attr.aria-label]="ariaLabel">
            </div>
            <div #box [ngClass]="{'p-radiobutton-box p-component':true,
                'p-highlight':checked, 'p-disabled':disabled}" role="radio" [attr.aria-checked]="checked">
                <div class="p-radiobutton-icon"></div>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: Input
        }], value: [{
            type: Input
        }], index: [{
            type: Input
        }], inputId: [{
            type: Input
        }], name: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], boxViewChild: [{
            type: ViewChild,
            args: ['box']
        }] }); })();
export class TableCheckbox {
    constructor(dt, tableService, cd) {
        this.dt = dt;
        this.tableService = tableService;
        this.cd = cd;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.dt.isSelected(this.value);
            this.cd.markForCheck();
        });
    }
    ngOnInit() {
        this.checked = this.dt.isSelected(this.value);
    }
    onClick(event) {
        if (!this.disabled) {
            this.dt.toggleRowWithCheckbox({
                originalEvent: event,
                rowIndex: this.index
            }, this.value);
        }
        DomHandler.clearSelection();
    }
    onFocus() {
        DomHandler.addClass(this.boxViewChild.nativeElement, 'p-focus');
    }
    onBlur() {
        DomHandler.removeClass(this.boxViewChild.nativeElement, 'p-focus');
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TableCheckbox.ɵfac = function TableCheckbox_Factory(t) { return new (t || TableCheckbox)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TableCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableCheckbox, selectors: [["p-tableCheckbox"]], viewQuery: function TableCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c26, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, inputs: { disabled: "disabled", value: "value", index: "index", inputId: "inputId", name: "name", required: "required", ariaLabel: "ariaLabel" }, decls: 6, vars: 14, consts: [[1, "p-checkbox", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]], template: function TableCheckbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TableCheckbox_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("focus", function TableCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TableCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("required", ctx.required)("aria-label", ctx.ariaLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c28, ctx.checked, ctx.disabled));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c29, ctx.checked));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
TableCheckbox.ctorParameters = () => [
    { type: Table },
    { type: TableService },
    { type: ChangeDetectorRef }
];
TableCheckbox.propDecorators = {
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    index: [{ type: Input }],
    inputId: [{ type: Input }],
    name: [{ type: Input }],
    required: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    boxViewChild: [{ type: ViewChild, args: ['box',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableCheckbox, [{
        type: Component,
        args: [{
                selector: 'p-tableCheckbox',
                template: `
        <div class="p-checkbox p-component" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="disabled"
                [attr.required]="required" [attr.aria-label]="ariaLabel">
            </div>
            <div #box [ngClass]="{'p-checkbox-box p-component':true,
                'p-highlight':checked, 'p-disabled':disabled}" role="checkbox" [attr.aria-checked]="checked">
                <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':checked}"></span>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: Input
        }], value: [{
            type: Input
        }], index: [{
            type: Input
        }], inputId: [{
            type: Input
        }], name: [{
            type: Input
        }], required: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], boxViewChild: [{
            type: ViewChild,
            args: ['box']
        }] }); })();
export class TableHeaderCheckbox {
    constructor(dt, tableService, cd) {
        this.dt = dt;
        this.tableService = tableService;
        this.cd = cd;
        this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
        this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
    }
    ngOnInit() {
        this.checked = this.updateCheckedState();
    }
    onClick(event) {
        if (!this.disabled) {
            if (this.dt.value && this.dt.value.length > 0) {
                this.dt.toggleRowsWithCheckbox(event, !this.checked);
            }
        }
        DomHandler.clearSelection();
    }
    onFocus() {
        DomHandler.addClass(this.boxViewChild.nativeElement, 'p-focus');
    }
    onBlur() {
        DomHandler.removeClass(this.boxViewChild.nativeElement, 'p-focus');
    }
    isDisabled() {
        return this.disabled || !this.dt.value || !this.dt.value.length;
    }
    ngOnDestroy() {
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    }
    updateCheckedState() {
        this.cd.markForCheck();
        if (this.dt.filteredValue) {
            const val = this.dt.filteredValue;
            return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.isAllFilteredValuesChecked());
        }
        else {
            const val = this.dt.value;
            return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === val.length);
        }
    }
    isAllFilteredValuesChecked() {
        if (!this.dt.filteredValue) {
            return false;
        }
        else {
            for (let rowData of this.dt.filteredValue) {
                if (!this.dt.isSelected(rowData)) {
                    return false;
                }
            }
            return true;
        }
    }
}
TableHeaderCheckbox.ɵfac = function TableHeaderCheckbox_Factory(t) { return new (t || TableHeaderCheckbox)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TableHeaderCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableHeaderCheckbox, selectors: [["p-tableHeaderCheckbox"]], viewQuery: function TableHeaderCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c26, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, inputs: { disabled: "disabled", inputId: "inputId", name: "name", ariaLabel: "ariaLabel" }, decls: 7, vars: 13, consts: [[1, "p-checkbox", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]], template: function TableHeaderCheckbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TableHeaderCheckbox_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("focus", function TableHeaderCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TableHeaderCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4, 5);
        ɵngcc0.ɵɵelement(6, "span", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.isDisabled());
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c30, ctx.checked, ctx.isDisabled()));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c29, ctx.checked));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
TableHeaderCheckbox.ctorParameters = () => [
    { type: Table },
    { type: TableService },
    { type: ChangeDetectorRef }
];
TableHeaderCheckbox.propDecorators = {
    boxViewChild: [{ type: ViewChild, args: ['box',] }],
    disabled: [{ type: Input }],
    inputId: [{ type: Input }],
    name: [{ type: Input }],
    ariaLabel: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableHeaderCheckbox, [{
        type: Component,
        args: [{
                selector: 'p-tableHeaderCheckbox',
                template: `
        <div class="p-checkbox p-component" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()"
                [disabled]="isDisabled()" [attr.aria-label]="ariaLabel">
            </div>
            <div #box [ngClass]="{'p-checkbox-box':true,
                'p-highlight':checked, 'p-disabled': isDisabled()}" role="checkbox" [attr.aria-checked]="checked">
                <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':checked}"></span>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { boxViewChild: [{
            type: ViewChild,
            args: ['box']
        }], disabled: [{
            type: Input
        }], inputId: [{
            type: Input
        }], name: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }] }); })();
export class ReorderableRowHandle {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        DomHandler.addClass(this.el.nativeElement, 'p-datatable-reorderablerow-handle');
    }
}
ReorderableRowHandle.ɵfac = function ReorderableRowHandle_Factory(t) { return new (t || ReorderableRowHandle)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ReorderableRowHandle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ReorderableRowHandle, selectors: [["", "pReorderableRowHandle", ""]], inputs: { index: ["pReorderableRowHandle", "index"] } });
ReorderableRowHandle.ctorParameters = () => [
    { type: ElementRef }
];
ReorderableRowHandle.propDecorators = {
    index: [{ type: Input, args: ["pReorderableRowHandle",] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReorderableRowHandle, [{
        type: Directive,
        args: [{
                selector: '[pReorderableRowHandle]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { index: [{
            type: Input,
            args: ["pReorderableRowHandle"]
        }] }); })();
export class ReorderableRow {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            this.el.nativeElement.droppable = true;
            this.bindEvents();
        }
    }
    bindEvents() {
        this.zone.runOutsideAngular(() => {
            this.mouseDownListener = this.onMouseDown.bind(this);
            this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
            this.dragStartListener = this.onDragStart.bind(this);
            this.el.nativeElement.addEventListener('dragstart', this.dragStartListener);
            this.dragEndListener = this.onDragEnd.bind(this);
            this.el.nativeElement.addEventListener('dragend', this.dragEndListener);
            this.dragOverListener = this.onDragOver.bind(this);
            this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
            this.dragLeaveListener = this.onDragLeave.bind(this);
            this.el.nativeElement.addEventListener('dragleave', this.dragLeaveListener);
        });
    }
    unbindEvents() {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragStartListener) {
            document.removeEventListener('dragstart', this.dragStartListener);
            this.dragStartListener = null;
        }
        if (this.dragEndListener) {
            document.removeEventListener('dragend', this.dragEndListener);
            this.dragEndListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    }
    onMouseDown(event) {
        if (DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle'))
            this.el.nativeElement.draggable = true;
        else
            this.el.nativeElement.draggable = false;
    }
    onDragStart(event) {
        this.dt.onRowDragStart(event, this.index);
    }
    onDragEnd(event) {
        this.dt.onRowDragEnd(event);
        this.el.nativeElement.draggable = false;
    }
    onDragOver(event) {
        this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
        event.preventDefault();
    }
    onDragLeave(event) {
        this.dt.onRowDragLeave(event, this.el.nativeElement);
    }
    isEnabled() {
        return this.pReorderableRowDisabled !== true;
    }
    onDrop(event) {
        if (this.isEnabled() && this.dt.rowDragging) {
            this.dt.onRowDrop(event, this.el.nativeElement);
        }
        event.preventDefault();
    }
}
ReorderableRow.ɵfac = function ReorderableRow_Factory(t) { return new (t || ReorderableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ReorderableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ReorderableRow, selectors: [["", "pReorderableRow", ""]], hostBindings: function ReorderableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function ReorderableRow_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { index: ["pReorderableRow", "index"], pReorderableRowDisabled: "pReorderableRowDisabled" } });
ReorderableRow.ctorParameters = () => [
    { type: Table },
    { type: ElementRef },
    { type: NgZone }
];
ReorderableRow.propDecorators = {
    index: [{ type: Input, args: ["pReorderableRow",] }],
    pReorderableRowDisabled: [{ type: Input }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReorderableRow, [{
        type: Directive,
        args: [{
                selector: '[pReorderableRow]'
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }], index: [{
            type: Input,
            args: ["pReorderableRow"]
        }], pReorderableRowDisabled: [{
            type: Input
        }] }); })();
export class TableModule {
}
TableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TableModule });
TableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TableModule_Factory(t) { return new (t || TableModule)(); }, imports: [[CommonModule, PaginatorModule, ScrollingModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TableModule, { declarations: function () { return [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow]; }, imports: function () { return [CommonModule, PaginatorModule, ScrollingModule]; }, exports: function () { return [Table, SharedModule, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PaginatorModule, ScrollingModule],
                exports: [Table, SharedModule, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ScrollingModule],
                declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQW9DLFNBQVMsRUFBRSxRQUFRLEVBQzdGLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQTBCLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQTRCLHVCQUF1QixFQUFTLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlOLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SyxxQkFrR1YsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNoQzs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFjTixNQUFNLE9BQU8sV0FBVztBQUFHO3VDQUwxQixRQUFRLFNBQUM7T0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGVBQWUsQ0FBQyxrQkFDdkQsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLGlCQUFpQixFQUFDO0dBQWMsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxvQkFBb0IsRUFBQyxjQUFjLEVBQUMscUJBQXFCLEVBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsZUFBZSxDQUFDLGtCQUNwVixZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxpQkFBaUIsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxvQkFBb0IsRUFBQyxjQUFjLEVBQUMscUJBQXFCLEVBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsaUJBQWlCLENBQUMsY0FDeFY7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIE9wdGlvbmFsLCBBZnRlckNvbnRlbnRJbml0LFxuICAgIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkcmVuLCBUZW1wbGF0ZVJlZiwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFF1ZXJ5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpbWVUZW1wbGF0ZSwgU2hhcmVkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgUGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wYWdpbmF0b3InO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IE9iamVjdFV0aWxzIH0gZnJvbSAncHJpbWVuZy91dGlscyc7XG5pbXBvcnQgeyBTb3J0TWV0YSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFRhYmxlU3RhdGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBGaWx0ZXJNZXRhZGF0YSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJsb2NrYWJsZVVJIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGaWx0ZXJVdGlscyB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlLCBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYmxlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHNvcnRTb3VyY2UgPSBuZXcgU3ViamVjdDxTb3J0TWV0YXxTb3J0TWV0YVtdPigpO1xuICAgIHByaXZhdGUgc2VsZWN0aW9uU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgICBwcml2YXRlIGNvbnRleHRNZW51U291cmNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHByaXZhdGUgdmFsdWVTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcHJpdmF0ZSB0b3RhbFJlY29yZHNTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcHJpdmF0ZSBjb2x1bW5zU291cmNlID0gbmV3IFN1YmplY3QoKTtcblxuICAgIHNvcnRTb3VyY2UkID0gdGhpcy5zb3J0U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHNlbGVjdGlvblNvdXJjZSQgPSB0aGlzLnNlbGVjdGlvblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgICBjb250ZXh0TWVudVNvdXJjZSQgPSB0aGlzLmNvbnRleHRNZW51U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHZhbHVlU291cmNlJCA9IHRoaXMudmFsdWVTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgdG90YWxSZWNvcmRzU291cmNlJCA9IHRoaXMudG90YWxSZWNvcmRzU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIGNvbHVtbnNTb3VyY2UkID0gdGhpcy5jb2x1bW5zU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgb25Tb3J0KHNvcnRNZXRhOiBTb3J0TWV0YXxTb3J0TWV0YVtdKSB7XG4gICAgICAgIHRoaXMuc29ydFNvdXJjZS5uZXh0KHNvcnRNZXRhKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdGlvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UubmV4dCgpO1xuICAgIH1cblxuICAgIG9uQ29udGV4dE1lbnUoZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVTb3VyY2UubmV4dChkYXRhKTtcbiAgICB9XG5cbiAgICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWx1ZVNvdXJjZS5uZXh0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBvblRvdGFsUmVjb3Jkc0NoYW5nZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG90YWxSZWNvcmRzU291cmNlLm5leHQodmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ29sdW1uc0NoYW5nZShjb2x1bW5zOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmNvbHVtbnNTb3VyY2UubmV4dChjb2x1bW5zKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10YWJsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjY29udGFpbmVyIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBkYXRhLXNjcm9sbHNlbGVjdG9ycz1cIi5wLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWJvZHksIC5wLWRhdGF0YWJsZS11bmZyb3plbi12aWV3IC5wLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWJvZHlcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLWRhdGF0YWJsZSBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3AtZGF0YXRhYmxlLWhvdmVyYWJsZS1yb3dzJzogKHJvd0hvdmVyfHxzZWxlY3Rpb25Nb2RlKSxcbiAgICAgICAgICAgICAgICAncC1kYXRhdGFibGUtYXV0by1sYXlvdXQnOiBhdXRvTGF5b3V0LFxuICAgICAgICAgICAgICAgICdwLWRhdGF0YWJsZS1yZXNpemFibGUnOiByZXNpemFibGVDb2x1bW5zLFxuICAgICAgICAgICAgICAgICdwLWRhdGF0YWJsZS1yZXNpemFibGUtZml0JzogKHJlc2l6YWJsZUNvbHVtbnMgJiYgY29sdW1uUmVzaXplTW9kZSA9PT0gJ2ZpdCcpLFxuICAgICAgICAgICAgICAgICdwLWRhdGF0YWJsZS1zY3JvbGxhYmxlJzogc2Nyb2xsYWJsZSxcbiAgICAgICAgICAgICAgICAncC1kYXRhdGFibGUtZmxleC1zY3JvbGxhYmxlJzogKHNjcm9sbGFibGUgJiYgc2Nyb2xsSGVpZ2h0ID09PSAnZmxleCcpLFxuICAgICAgICAgICAgICAgICdwLWRhdGF0YWJsZS1yZXNwb25zaXZlJzogcmVzcG9uc2l2ZX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRhdGF0YWJsZS1sb2FkaW5nLW92ZXJsYXkgcC1jb21wb25lbnQtb3ZlcmxheVwiICpuZ0lmPVwibG9hZGluZyAmJiBzaG93TG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgPGkgW2NsYXNzXT1cIidwLWRhdGF0YWJsZS1sb2FkaW5nLWljb24gcGktc3BpbiAnICsgbG9hZGluZ0ljb25cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjYXB0aW9uVGVtcGxhdGVcIiBjbGFzcz1cInAtZGF0YXRhYmxlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjYXB0aW9uVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAtcGFnaW5hdG9yIFtyb3dzXT1cInJvd3NcIiBbZmlyc3RdPVwiZmlyc3RcIiBbdG90YWxSZWNvcmRzXT1cInRvdGFsUmVjb3Jkc1wiIFtwYWdlTGlua1NpemVdPVwicGFnZUxpbmtzXCIgc3R5bGVDbGFzcz1cInAtcGFnaW5hdG9yLXRvcFwiIFthbHdheXNTaG93XT1cImFsd2F5c1Nob3dQYWdpbmF0b3JcIlxuICAgICAgICAgICAgICAgIChvblBhZ2VDaGFuZ2UpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIiBbcm93c1BlclBhZ2VPcHRpb25zXT1cInJvd3NQZXJQYWdlT3B0aW9uc1wiICpuZ0lmPVwicGFnaW5hdG9yICYmIChwYWdpbmF0b3JQb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcGFnaW5hdG9yUG9zaXRpb24gPT0nYm90aCcpXCJcbiAgICAgICAgICAgICAgICBbdGVtcGxhdGVMZWZ0XT1cInBhZ2luYXRvckxlZnRUZW1wbGF0ZVwiIFt0ZW1wbGF0ZVJpZ2h0XT1cInBhZ2luYXRvclJpZ2h0VGVtcGxhdGVcIiBbZHJvcGRvd25BcHBlbmRUb109XCJwYWdpbmF0b3JEcm9wZG93bkFwcGVuZFRvXCIgW2Ryb3Bkb3duU2Nyb2xsSGVpZ2h0XT1cInBhZ2luYXRvckRyb3Bkb3duU2Nyb2xsSGVpZ2h0XCJcbiAgICAgICAgICAgICAgICBbY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZV09XCJjdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlXCIgW3Nob3dDdXJyZW50UGFnZVJlcG9ydF09XCJzaG93Q3VycmVudFBhZ2VSZXBvcnRcIiBbc2hvd0p1bXBUb1BhZ2VEcm9wZG93bl09XCJzaG93SnVtcFRvUGFnZURyb3Bkb3duXCIgW3Nob3dQYWdlTGlua3NdPVwic2hvd1BhZ2VMaW5rc1wiPjwvcC1wYWdpbmF0b3I+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRhdGF0YWJsZS13cmFwcGVyXCIgKm5nSWY9XCIhc2Nyb2xsYWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiICN0YWJsZSBbbmdDbGFzc109XCJ0YWJsZVN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJ0YWJsZVN0eWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb2xHcm91cFRlbXBsYXRlOyBjb250ZXh0IHskaW1wbGljaXQ6IGNvbHVtbnN9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInAtZGF0YXRhYmxlLXRoZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGNvbHVtbnN9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInAtZGF0YXRhYmxlLXRib2R5XCIgW3BUYWJsZUJvZHldPVwiY29sdW1uc1wiIFtwVGFibGVCb2R5VGVtcGxhdGVdPVwiYm9keVRlbXBsYXRlXCI+PC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRmb290ICpuZ0lmPVwiZm9vdGVyVGVtcGxhdGVcIiBjbGFzcz1cInAtZGF0YXRhYmxlLXRmb290XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyVGVtcGxhdGU7IGNvbnRleHQgeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRhdGF0YWJsZS1zY3JvbGxhYmxlLXdyYXBwZXJcIiAqbmdJZj1cInNjcm9sbGFibGVcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRhdGF0YWJsZS1zY3JvbGxhYmxlLXZpZXcgcC1kYXRhdGFibGUtZnJvemVuLXZpZXdcIiAqbmdJZj1cImZyb3plbkNvbHVtbnN8fGZyb3plbkJvZHlUZW1wbGF0ZVwiICNzY3JvbGxhYmxlRnJvemVuVmlldyBbcFNjcm9sbGFibGVWaWV3XT1cImZyb3plbkNvbHVtbnNcIiBbZnJvemVuXT1cInRydWVcIiBbbmdTdHlsZV09XCJ7d2lkdGg6IGZyb3plbldpZHRofVwiIFtzY3JvbGxIZWlnaHRdPVwic2Nyb2xsSGVpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kYXRhdGFibGUtc2Nyb2xsYWJsZS12aWV3XCIgI3Njcm9sbGFibGVWaWV3IFtwU2Nyb2xsYWJsZVZpZXddPVwiY29sdW1uc1wiIFtmcm96ZW5dPVwiZmFsc2VcIiBbc2Nyb2xsSGVpZ2h0XT1cInNjcm9sbEhlaWdodFwiIFtuZ1N0eWxlXT1cIntsZWZ0OiBmcm96ZW5XaWR0aCwgd2lkdGg6ICdjYWxjKDEwMCUgLSAnK2Zyb3plbldpZHRoKycpJ31cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cC1wYWdpbmF0b3IgW3Jvd3NdPVwicm93c1wiIFtmaXJzdF09XCJmaXJzdFwiIFt0b3RhbFJlY29yZHNdPVwidG90YWxSZWNvcmRzXCIgW3BhZ2VMaW5rU2l6ZV09XCJwYWdlTGlua3NcIiBzdHlsZUNsYXNzPVwicC1wYWdpbmF0b3ItYm90dG9tXCIgW2Fsd2F5c1Nob3ddPVwiYWx3YXlzU2hvd1BhZ2luYXRvclwiXG4gICAgICAgICAgICAgICAgKG9uUGFnZUNoYW5nZSk9XCJvblBhZ2VDaGFuZ2UoJGV2ZW50KVwiIFtyb3dzUGVyUGFnZU9wdGlvbnNdPVwicm93c1BlclBhZ2VPcHRpb25zXCIgKm5nSWY9XCJwYWdpbmF0b3IgJiYgKHBhZ2luYXRvclBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBwYWdpbmF0b3JQb3NpdGlvbiA9PSdib3RoJylcIlxuICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZUxlZnRdPVwicGFnaW5hdG9yTGVmdFRlbXBsYXRlXCIgW3RlbXBsYXRlUmlnaHRdPVwicGFnaW5hdG9yUmlnaHRUZW1wbGF0ZVwiIFtkcm9wZG93bkFwcGVuZFRvXT1cInBhZ2luYXRvckRyb3Bkb3duQXBwZW5kVG9cIiBbZHJvcGRvd25TY3JvbGxIZWlnaHRdPVwicGFnaW5hdG9yRHJvcGRvd25TY3JvbGxIZWlnaHRcIlxuICAgICAgICAgICAgICAgIFtjdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlXT1cImN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGVcIiBbc2hvd0N1cnJlbnRQYWdlUmVwb3J0XT1cInNob3dDdXJyZW50UGFnZVJlcG9ydFwiIFtzaG93SnVtcFRvUGFnZURyb3Bkb3duXT1cInNob3dKdW1wVG9QYWdlRHJvcGRvd25cIiBbc2hvd1BhZ2VMaW5rc109XCJzaG93UGFnZUxpbmtzXCI+PC9wLXBhZ2luYXRvcj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInN1bW1hcnlUZW1wbGF0ZVwiIGNsYXNzPVwicC1kYXRhdGFibGUtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInN1bW1hcnlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgI3Jlc2l6ZUhlbHBlciBjbGFzcz1cInAtY29sdW1uLXJlc2l6ZXItaGVscGVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiAqbmdJZj1cInJlc2l6YWJsZUNvbHVtbnNcIj48L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuICNyZW9yZGVySW5kaWNhdG9yVXAgY2xhc3M9XCJwaSBwaS1hcnJvdy1kb3duIHAtZGF0YXRhYmxlLXJlb3JkZXItaW5kaWNhdG9yLXVwXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiAqbmdJZj1cInJlb3JkZXJhYmxlQ29sdW1uc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICNyZW9yZGVySW5kaWNhdG9yRG93biBjbGFzcz1cInBpIHBpLWFycm93LXVwIHAtZGF0YXRhYmxlLXJlb3JkZXItaW5kaWNhdG9yLWRvd25cIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiICpuZ0lmPVwicmVvcmRlcmFibGVDb2x1bW5zXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1RhYmxlU2VydmljZV0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIEJsb2NrYWJsZVVJLCBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgZnJvemVuQ29sdW1uczogYW55W107XG5cbiAgICBASW5wdXQoKSBmcm96ZW5WYWx1ZTogYW55W107XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGFibGVTdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgdGFibGVTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBwYWdpbmF0b3I6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBwYWdlTGlua3M6IG51bWJlciA9IDU7XG5cbiAgICBASW5wdXQoKSByb3dzUGVyUGFnZU9wdGlvbnM6IGFueVtdO1xuXG4gICAgQElucHV0KCkgYWx3YXlzU2hvd1BhZ2luYXRvcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBwYWdpbmF0b3JQb3NpdGlvbjogc3RyaW5nID0gJ2JvdHRvbSc7XG5cbiAgICBASW5wdXQoKSBwYWdpbmF0b3JEcm9wZG93bkFwcGVuZFRvOiBhbnk7XG5cbiAgICBASW5wdXQoKSBwYWdpbmF0b3JEcm9wZG93blNjcm9sbEhlaWdodDogc3RyaW5nID0gJzIwMHB4JztcblxuICAgIEBJbnB1dCgpIGN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGU6IHN0cmluZyA9ICd7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbFBhZ2VzfSc7XG5cbiAgICBASW5wdXQoKSBzaG93Q3VycmVudFBhZ2VSZXBvcnQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBzaG93SnVtcFRvUGFnZURyb3Bkb3duOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2hvd1BhZ2VMaW5rczogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBkZWZhdWx0U29ydE9yZGVyOiBudW1iZXIgPSAxO1xuXG4gICAgQElucHV0KCkgc29ydE1vZGU6IHN0cmluZyA9ICdzaW5nbGUnO1xuXG4gICAgQElucHV0KCkgcmVzZXRQYWdlT25Tb3J0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGlvbk1vZGU6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KCkgY29udGV4dE1lbnVTZWxlY3Rpb246IGFueTtcblxuICAgIEBPdXRwdXQoKSBjb250ZXh0TWVudVNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKSBjb250ZXh0TWVudVNlbGVjdGlvbk1vZGU6IHN0cmluZyA9IFwic2VwYXJhdGVcIjtcblxuICAgIEBJbnB1dCgpIGRhdGFLZXk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG1ldGFLZXlTZWxlY3Rpb246IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSByb3dUcmFja0J5OiBGdW5jdGlvbiA9IChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IGl0ZW07XG5cbiAgICBASW5wdXQoKSBsYXp5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBsYXp5TG9hZE9uSW5pdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBjb21wYXJlU2VsZWN0aW9uQnk6IHN0cmluZyA9ICdkZWVwRXF1YWxzJztcblxuICAgIEBJbnB1dCgpIGNzdlNlcGFyYXRvcjogc3RyaW5nID0gJywnO1xuXG4gICAgQElucHV0KCkgZXhwb3J0RmlsZW5hbWU6IHN0cmluZyA9ICdkb3dubG9hZCc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJzOiB7IFtzOiBzdHJpbmddOiBGaWx0ZXJNZXRhZGF0YTsgfSA9IHt9O1xuXG4gICAgQElucHV0KCkgZ2xvYmFsRmlsdGVyRmllbGRzOiBzdHJpbmdbXTtcblxuICAgIEBJbnB1dCgpIGZpbHRlckRlbGF5OiBudW1iZXIgPSAzMDA7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJMb2NhbGU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGV4cGFuZGVkUm93S2V5czogeyBbczogc3RyaW5nXTogYm9vbGVhbjsgfSA9IHt9O1xuXG4gICAgQElucHV0KCkgZWRpdGluZ1Jvd0tleXM6IHsgW3M6IHN0cmluZ106IGJvb2xlYW47IH0gPSB7fTtcblxuICAgIEBJbnB1dCgpIHJvd0V4cGFuZE1vZGU6IHN0cmluZyA9ICdtdWx0aXBsZSc7XG5cbiAgICBASW5wdXQoKSBzY3JvbGxhYmxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2Nyb2xsSGVpZ2h0OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbERlbGF5OiBudW1iZXIgPSAxNTA7XG5cbiAgICBASW5wdXQoKSB2aXJ0dWFsUm93SGVpZ2h0OiBudW1iZXIgPSAyODtcblxuICAgIEBJbnB1dCgpIGZyb3plbldpZHRoOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByZXNwb25zaXZlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgY29udGV4dE1lbnU6IGFueTtcblxuICAgIEBJbnB1dCgpIHJlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBjb2x1bW5SZXNpemVNb2RlOiBzdHJpbmcgPSAnZml0JztcblxuICAgIEBJbnB1dCgpIHJlb3JkZXJhYmxlQ29sdW1uczogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBsb2FkaW5nSWNvbjogc3RyaW5nID0gJ3BpIHBpLXNwaW5uZXInO1xuXG4gICAgQElucHV0KCkgc2hvd0xvYWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSByb3dIb3ZlcjogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGN1c3RvbVNvcnQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBhdXRvTGF5b3V0OiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZXhwb3J0RnVuY3Rpb247XG5cbiAgICBASW5wdXQoKSBzdGF0ZUtleTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc3RhdGVTdG9yYWdlOiBzdHJpbmcgPSAnc2Vzc2lvbic7XG5cbiAgICBASW5wdXQoKSBlZGl0TW9kZTogc3RyaW5nID0gJ2NlbGwnO1xuXG4gICAgQElucHV0KCkgbWluQnVmZmVyUHg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIG1heEJ1ZmZlclB4OiBudW1iZXI7XG5cbiAgICBAT3V0cHV0KCkgb25Sb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uUm93VW5zZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uUGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Tb3J0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25MYXp5TG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Sb3dFeHBhbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uUm93Q29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQ29sUmVzaXplOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkNvbFJlb3JkZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uUm93UmVvcmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25FZGl0SW5pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25FZGl0Q29tcGxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uRWRpdENhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25IZWFkZXJDaGVja2JveFRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgc29ydEZ1bmN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBmaXJzdENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcm93c0NoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25TdGF0ZVNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uU3RhdGVSZXN0b3JlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Jlc2l6ZUhlbHBlcicpIHJlc2l6ZUhlbHBlclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Jlb3JkZXJJbmRpY2F0b3JVcCcpIHJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Jlb3JkZXJJbmRpY2F0b3JEb3duJykgcmVvcmRlckluZGljYXRvckRvd25WaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCd0YWJsZScpIHRhYmxlVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsYWJsZVZpZXcnKSBzY3JvbGxhYmxlVmlld0NoaWxkO1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsYWJsZUZyb3plblZpZXcnKSBzY3JvbGxhYmxlRnJvemVuVmlld0NoaWxkO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPjtcblxuICAgIF92YWx1ZTogYW55W10gPSBbXTtcblxuICAgIF9jb2x1bW5zOiBhbnlbXTtcblxuICAgIF90b3RhbFJlY29yZHM6IG51bWJlciA9IDA7XG5cbiAgICBfZmlyc3Q6IG51bWJlciA9IDA7XG5cbiAgICBfcm93czogbnVtYmVyO1xuXG4gICAgZmlsdGVyZWRWYWx1ZTogYW55W107XG5cbiAgICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGJvZHlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGxvYWRpbmdCb2R5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBjYXB0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBmcm96ZW5Sb3dzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHN1bW1hcnlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbEdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBleHBhbmRlZFJvd1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZnJvemVuSGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBmcm96ZW5Cb2R5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBmcm96ZW5Gb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGZyb3plbkNvbEdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBlbXB0eU1lc3NhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHBhZ2luYXRvckxlZnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHBhZ2luYXRvclJpZ2h0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBzZWxlY3Rpb25LZXlzOiBhbnkgPSB7fTtcblxuICAgIGxhc3RSZXNpemVySGVscGVyWDogbnVtYmVyO1xuXG4gICAgcmVvcmRlckljb25XaWR0aDogbnVtYmVyO1xuXG4gICAgcmVvcmRlckljb25IZWlnaHQ6IG51bWJlcjtcblxuICAgIGRyYWdnZWRDb2x1bW46IGFueTtcblxuICAgIGRyYWdnZWRSb3dJbmRleDogbnVtYmVyO1xuXG4gICAgZHJvcHBlZFJvd0luZGV4OiBudW1iZXI7XG5cbiAgICByb3dEcmFnZ2luZzogYm9vbGVhbjtcblxuICAgIGRyb3BQb3NpdGlvbjogbnVtYmVyO1xuXG4gICAgZWRpdGluZ0NlbGw6IEVsZW1lbnQ7XG5cbiAgICBlZGl0aW5nQ2VsbERhdGE6IGFueTtcblxuICAgIGVkaXRpbmdDZWxsRmllbGQ6IGFueTtcblxuICAgIGVkaXRpbmdDZWxsUm93SW5kZXg6IG51bWJlcjtcblxuICAgIGVkaXRpbmdDZWxsQ2xpY2s6IGJvb2xlYW47XG5cbiAgICBkb2N1bWVudEVkaXRMaXN0ZW5lcjogYW55O1xuXG4gICAgX211bHRpU29ydE1ldGE6IFNvcnRNZXRhW107XG5cbiAgICBfc29ydEZpZWxkOiBzdHJpbmc7XG5cbiAgICBfc29ydE9yZGVyOiBudW1iZXIgPSAxO1xuXG4gICAgcHJldmVudFNlbGVjdGlvblNldHRlclByb3BhZ2F0aW9uOiBib29sZWFuO1xuXG4gICAgX3NlbGVjdGlvbjogYW55O1xuXG4gICAgYW5jaG9yUm93SW5kZXg6IG51bWJlcjtcblxuICAgIHJhbmdlUm93SW5kZXg6IG51bWJlcjtcblxuICAgIGZpbHRlclRpbWVvdXQ6IGFueTtcblxuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuXG4gICAgcm93VG91Y2hlZDogYm9vbGVhbjtcblxuICAgIHJlc3RvcmluZ1NvcnQ6IGJvb2xlYW47XG5cbiAgICByZXN0b3JpbmdGaWx0ZXI6IGJvb2xlYW47XG5cbiAgICBzdGF0ZVJlc3RvcmVkOiBib29sZWFuO1xuXG4gICAgY29sdW1uT3JkZXJTdGF0ZVJlc3RvcmVkOiBib29sZWFuO1xuXG4gICAgY29sdW1uV2lkdGhzU3RhdGU6IHN0cmluZztcblxuICAgIHRhYmxlV2lkdGhTdGF0ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lLCBwdWJsaWMgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF6eSAmJiB0aGlzLmxhenlMb2FkT25Jbml0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25MYXp5TG9hZC5lbWl0KHRoaXMuY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucmVzdG9yaW5nRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JpbmdGaWx0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhcHRpb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHRpb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkaW5nYm9keSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0JvZHlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3N1bW1hcnknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdjb2xncm91cCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sR3JvdXBUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyb3dleHBhbnNpb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZGVkUm93VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZnJvemVucm93cyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuUm93c1RlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zyb3plbmhlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuSGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZnJvemVuYm9keSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuQm9keVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zyb3plbmZvb3Rlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuRm9vdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZnJvemVuY29sZ3JvdXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plbkNvbEdyb3VwVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1wdHltZXNzYWdlJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eU1lc3NhZ2VUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdwYWdpbmF0b3JsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3JMZWZ0VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncGFnaW5hdG9ycmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvclJpZ2h0VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGVmdWwoKSAmJiB0aGlzLnJlc2l6YWJsZUNvbHVtbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZUNvbHVtbldpZHRocygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJDYWNoZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZVZpZXdDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsYWJsZVZpZXdDaGlsZC5jbGVhckNhY2hlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGVGcm96ZW5WaWV3Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGFibGVWaWV3Q2hpbGQuY2xlYXJDYWNoZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2UudmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhdGVmdWwoKSAmJiAhdGhpcy5zdGF0ZVJlc3RvcmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlU3RhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBzaW1wbGVDaGFuZ2UudmFsdWUuY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMubGF6eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxSZWNvcmRzID0gKHRoaXMuX3ZhbHVlID8gdGhpcy5fdmFsdWUubGVuZ3RoIDogMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0TW9kZSA9PSAnc2luZ2xlJyAmJiB0aGlzLnNvcnRGaWVsZClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0U2luZ2xlKCk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zb3J0TW9kZSA9PSAnbXVsdGlwbGUnICYmIHRoaXMubXVsdGlTb3J0TWV0YSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0TXVsdGlwbGUoKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmhhc0ZpbHRlcigpKSAgICAgICAvL3NvcnQgYWxyZWFkeSBmaWx0ZXJzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblZhbHVlQ2hhbmdlKHNpbXBsZUNoYW5nZS52YWx1ZS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS5jb2x1bW5zKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW5zID0gc2ltcGxlQ2hhbmdlLmNvbHVtbnMuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uub25Db2x1bW5zQ2hhbmdlKHNpbXBsZUNoYW5nZS5jb2x1bW5zLmN1cnJlbnRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9jb2x1bW5zICYmIHRoaXMuaXNTdGF0ZWZ1bCgpICYmIHRoaXMucmVvcmRlcmFibGVDb2x1bW5zICYmICF0aGlzLmNvbHVtbk9yZGVyU3RhdGVSZXN0b3JlZCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVDb2x1bW5PcmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS5zb3J0RmllbGQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnRGaWVsZCA9IHNpbXBsZUNoYW5nZS5zb3J0RmllbGQuY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICAvL2F2b2lkIHRyaWdnZXJpbmcgbGF6eSBsb2FkIHByaW9yIHRvIGxhenkgaW5pdGlhbGl6YXRpb24gYXQgb25Jbml0XG4gICAgICAgICAgICBpZiAoICF0aGlzLmxhenkgfHwgdGhpcy5pbml0aWFsaXplZCApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0TW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0U2luZ2xlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS5zb3J0T3JkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnRPcmRlciA9IHNpbXBsZUNoYW5nZS5zb3J0T3JkZXIuY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICAvL2F2b2lkIHRyaWdnZXJpbmcgbGF6eSBsb2FkIHByaW9yIHRvIGxhenkgaW5pdGlhbGl6YXRpb24gYXQgb25Jbml0XG4gICAgICAgICAgICBpZiAoICF0aGlzLmxhenkgfHwgdGhpcy5pbml0aWFsaXplZCApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0TW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0U2luZ2xlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS5tdWx0aVNvcnRNZXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9tdWx0aVNvcnRNZXRhID0gc2ltcGxlQ2hhbmdlLm11bHRpU29ydE1ldGEuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuc29ydE1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRNdWx0aXBsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHNpbXBsZUNoYW5nZS5zZWxlY3Rpb24uY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJldmVudFNlbGVjdGlvblNldHRlclByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb25LZXlzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uub25TZWxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJldmVudFNlbGVjdGlvblNldHRlclByb3BhZ2F0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgdmFsdWUoKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2YWw6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBjb2x1bW5zKCk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfVxuICAgIHNldCBjb2x1bW5zKGNvbHM6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2NvbHVtbnMgPSBjb2xzO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBmaXJzdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3Q7XG4gICAgfVxuICAgIHNldCBmaXJzdCh2YWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9maXJzdCA9IHZhbDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgcm93cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgICB9XG4gICAgc2V0IHJvd3ModmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcm93cyA9IHZhbDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgdG90YWxSZWNvcmRzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbFJlY29yZHM7XG4gICAgfVxuICAgIHNldCB0b3RhbFJlY29yZHModmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdG90YWxSZWNvcmRzID0gdmFsO1xuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblRvdGFsUmVjb3Jkc0NoYW5nZSh0aGlzLl90b3RhbFJlY29yZHMpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBzb3J0RmllbGQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRGaWVsZDtcbiAgICB9XG5cbiAgICBzZXQgc29ydEZpZWxkKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3NvcnRGaWVsZCA9IHZhbDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgc29ydE9yZGVyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXI7XG4gICAgfVxuICAgIHNldCBzb3J0T3JkZXIodmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc29ydE9yZGVyID0gdmFsO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBtdWx0aVNvcnRNZXRhKCk6IFNvcnRNZXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXVsdGlTb3J0TWV0YTtcbiAgICB9XG5cbiAgICBzZXQgbXVsdGlTb3J0TWV0YSh2YWw6IFNvcnRNZXRhW10pIHtcbiAgICAgICAgdGhpcy5fbXVsdGlTb3J0TWV0YSA9IHZhbDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgc2VsZWN0aW9uKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb247XG4gICAgfVxuXG4gICAgc2V0IHNlbGVjdGlvbih2YWw6IGFueSkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB2YWw7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0aW9uS2V5cygpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YUtleSAmJiB0aGlzLl9zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5cyA9IHt9O1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgZGF0YSBvZiB0aGlzLl9zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW1N0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKGRhdGEsIHRoaXMuZGF0YUtleSkpXSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW1N0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHRoaXMuX3NlbGVjdGlvbiwgdGhpcy5kYXRhS2V5KSldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGFnZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLmZpcnN0ID0gZXZlbnQuZmlyc3Q7XG4gICAgICAgIHRoaXMucm93cyA9IGV2ZW50LnJvd3M7XG5cbiAgICAgICAgaWYgKHRoaXMubGF6eSkge1xuICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblBhZ2UuZW1pdCh7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5maXJzdCxcbiAgICAgICAgICAgIHJvd3M6IHRoaXMucm93c1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZpcnN0Q2hhbmdlLmVtaXQodGhpcy5maXJzdCk7XG4gICAgICAgIHRoaXMucm93c0NoYW5nZS5lbWl0KHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uVmFsdWVDaGFuZ2UodGhpcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZWZ1bCgpKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmNob3JSb3dJbmRleCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldFNjcm9sbFRvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29ydChldmVudCkge1xuICAgICAgICBsZXQgb3JpZ2luYWxFdmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc29ydE1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3J0T3JkZXIgPSAodGhpcy5zb3J0RmllbGQgPT09IGV2ZW50LmZpZWxkKSA/IHRoaXMuc29ydE9yZGVyICogLTEgOiB0aGlzLmRlZmF1bHRTb3J0T3JkZXI7XG4gICAgICAgICAgICB0aGlzLl9zb3J0RmllbGQgPSBldmVudC5maWVsZDtcbiAgICAgICAgICAgIHRoaXMuc29ydFNpbmdsZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNldFBhZ2VPblNvcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maXJzdCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdENoYW5nZS5lbWl0KHRoaXMuX2ZpcnN0KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgbGV0IG1ldGFLZXkgPSBvcmlnaW5hbEV2ZW50Lm1ldGFLZXkgfHwgb3JpZ2luYWxFdmVudC5jdHJsS2V5O1xuICAgICAgICAgICAgbGV0IHNvcnRNZXRhID0gdGhpcy5nZXRTb3J0TWV0YShldmVudC5maWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChzb3J0TWV0YSkge1xuICAgICAgICAgICAgICAgIGlmICghbWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tdWx0aVNvcnRNZXRhID0gW3sgZmllbGQ6IGV2ZW50LmZpZWxkLCBvcmRlcjogc29ydE1ldGEub3JkZXIgKiAtMSB9XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldFBhZ2VPblNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpcnN0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDaGFuZ2UuZW1pdCh0aGlzLl9maXJzdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRNZXRhLm9yZGVyID0gc29ydE1ldGEub3JkZXIgKiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGFLZXkgfHwgIXRoaXMubXVsdGlTb3J0TWV0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tdWx0aVNvcnRNZXRhID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzZXRQYWdlT25Tb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9maXJzdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2hhbmdlLmVtaXQodGhpcy5fZmlyc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX211bHRpU29ydE1ldGEucHVzaCh7IGZpZWxkOiBldmVudC5maWVsZCwgb3JkZXI6IHRoaXMuZGVmYXVsdFNvcnRPcmRlciB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zb3J0TXVsdGlwbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGVmdWwoKSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5jaG9yUm93SW5kZXggPSBudWxsO1xuICAgIH1cblxuICAgIHNvcnRTaW5nbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvcnRGaWVsZCAmJiB0aGlzLnNvcnRPcmRlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdG9yaW5nU29ydCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yaW5nU29ydCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RnVuY3Rpb24uZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogdGhpcy5zb3J0TW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiB0aGlzLnNvcnRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiB0aGlzLnNvcnRPcmRlclxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuc29ydCgoZGF0YTEsIGRhdGEyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUxID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShkYXRhMSwgdGhpcy5zb3J0RmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlMiA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEoZGF0YTIsIHRoaXMuc29ydEZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZTEgIT0gbnVsbCAmJiB2YWx1ZTIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZTEgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZTIgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlMS5sb2NhbGVDb21wYXJlKHZhbHVlMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHZhbHVlMSA8IHZhbHVlMikgPyAtMSA6ICh2YWx1ZTEgPiB2YWx1ZTIpID8gMSA6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zb3J0T3JkZXIgKiByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IFsuLi50aGlzLnZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNGaWx0ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzb3J0TWV0YTogU29ydE1ldGEgPSB7XG4gICAgICAgICAgICAgICAgZmllbGQ6IHRoaXMuc29ydEZpZWxkLFxuICAgICAgICAgICAgICAgIG9yZGVyOiB0aGlzLnNvcnRPcmRlclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vblNvcnQuZW1pdChzb3J0TWV0YSk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNvcnQoc29ydE1ldGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29ydE11bHRpcGxlKCkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aVNvcnRNZXRhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RnVuY3Rpb24uZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogdGhpcy5zb3J0TW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpU29ydE1ldGE6IHRoaXMubXVsdGlTb3J0TWV0YVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuc29ydCgoZGF0YTEsIGRhdGEyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXNvcnRGaWVsZChkYXRhMSwgZGF0YTIsIHRoaXMubXVsdGlTb3J0TWV0YSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gWy4uLnRoaXMudmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vblNvcnQuZW1pdCh7XG4gICAgICAgICAgICAgICAgbXVsdGlzb3J0bWV0YTogdGhpcy5tdWx0aVNvcnRNZXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uU29ydCh0aGlzLm11bHRpU29ydE1ldGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbXVsdGlzb3J0RmllbGQoZGF0YTEsIGRhdGEyLCBtdWx0aVNvcnRNZXRhLCBpbmRleCkge1xuICAgICAgICBsZXQgdmFsdWUxID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShkYXRhMSwgbXVsdGlTb3J0TWV0YVtpbmRleF0uZmllbGQpO1xuICAgICAgICBsZXQgdmFsdWUyID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShkYXRhMiwgbXVsdGlTb3J0TWV0YVtpbmRleF0uZmllbGQpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyICE9IG51bGwpXG4gICAgICAgICAgICByZXN1bHQgPSAtMTtcbiAgICAgICAgZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpXG4gICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICBlbHNlIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgPT0gbnVsbClcbiAgICAgICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZTEgPT0gJ3N0cmluZycgfHwgdmFsdWUxIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUxLmxvY2FsZUNvbXBhcmUgJiYgKHZhbHVlMSAhPSB2YWx1ZTIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChtdWx0aVNvcnRNZXRhW2luZGV4XS5vcmRlciAqIHZhbHVlMS5sb2NhbGVDb21wYXJlKHZhbHVlMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gKHZhbHVlMSA8IHZhbHVlMikgPyAtMSA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUxID09IHZhbHVlMikge1xuICAgICAgICAgICAgcmV0dXJuIChtdWx0aVNvcnRNZXRhLmxlbmd0aCAtIDEpID4gKGluZGV4KSA/ICh0aGlzLm11bHRpc29ydEZpZWxkKGRhdGExLCBkYXRhMiwgbXVsdGlTb3J0TWV0YSwgaW5kZXggKyAxKSkgOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChtdWx0aVNvcnRNZXRhW2luZGV4XS5vcmRlciAqIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZ2V0U29ydE1ldGEoZmllbGQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5tdWx0aVNvcnRNZXRhICYmIHRoaXMubXVsdGlTb3J0TWV0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tdWx0aVNvcnRNZXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlTb3J0TWV0YVtpXS5maWVsZCA9PT0gZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlTb3J0TWV0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpc1NvcnRlZChmaWVsZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnNvcnRNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnNvcnRGaWVsZCAmJiB0aGlzLnNvcnRGaWVsZCA9PT0gZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc29ydE1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgIGxldCBzb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpU29ydE1ldGEpwqB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubXVsdGlTb3J0TWV0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aVNvcnRNZXRhW2ldLmZpZWxkID09IGZpZWxkKcKge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNvcnRlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVJvd0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSAoPEhUTUxFbGVtZW50PiBldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldCk7XG4gICAgICAgIGxldCB0YXJnZXROb2RlID0gdGFyZ2V0Lm5vZGVOYW1lO1xuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50ICYmIHRhcmdldC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lO1xuICAgICAgICBpZiAodGFyZ2V0Tm9kZSA9PSAnSU5QVVQnIHx8IHRhcmdldE5vZGUgPT0gJ0JVVFRPTicgfHwgdGFyZ2V0Tm9kZSA9PSAnQScgfHxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPT0gJ0lOUFVUJyB8fCBwYXJlbnROb2RlID09ICdCVVRUT04nIHx8IHBhcmVudE5vZGUgPT0gJ0EnIHx8XG4gICAgICAgICAgICAoRG9tSGFuZGxlci5oYXNDbGFzcyhldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldCwgJ3AtY2xpY2thYmxlJykpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnRTZWxlY3Rpb25TZXR0ZXJQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5pc011bHRpcGxlU2VsZWN0aW9uTW9kZSgpICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5hbmNob3JSb3dJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJhbmdlUm93SW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uUmFuZ2UoZXZlbnQub3JpZ2luYWxFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZVJvd0luZGV4ID0gZXZlbnQucm93SW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RSYW5nZShldmVudC5vcmlnaW5hbEV2ZW50LCBldmVudC5yb3dJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcm93RGF0YSA9IGV2ZW50LnJvd0RhdGE7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKHJvd0RhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBtZXRhU2VsZWN0aW9uID0gdGhpcy5yb3dUb3VjaGVkID8gZmFsc2UgOiB0aGlzLm1ldGFLZXlTZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFLZXlWYWx1ZSA9IHRoaXMuZGF0YUtleSA/IFN0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHJvd0RhdGEsIHRoaXMuZGF0YUtleSkpIDogbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmFuY2hvclJvd0luZGV4ID0gZXZlbnQucm93SW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZVJvd0luZGV4ID0gZXZlbnQucm93SW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAobWV0YVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWV0YUtleSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQubWV0YUtleXx8ZXZlbnQub3JpZ2luYWxFdmVudC5jdHJsS2V5O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBtZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbk1vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3Rpb25JbmRleCA9IHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24ocm93RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZmlsdGVyKCh2YWwsaSkgPT4gaSE9c2VsZWN0aW9uSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJvd1Vuc2VsZWN0LmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsIGRhdGE6IHJvd0RhdGEsIHR5cGU6ICdyb3cnfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbk1vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHJvd0RhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChyb3dEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbktleXNbZGF0YUtleVZhbHVlXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc011bHRpcGxlU2VsZWN0aW9uTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGFLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb258fFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IFsuLi50aGlzLnNlbGVjdGlvbixyb3dEYXRhXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Sb3dTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgZGF0YTogcm93RGF0YSwgdHlwZTogJ3JvdycsIGluZGV4OiBldmVudC5yb3dJbmRleH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbktleXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUm93VW5zZWxlY3QuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsIGRhdGE6IHJvd0RhdGEsIHR5cGU6ICdyb3cnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gcm93RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUm93U2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCBkYXRhOiByb3dEYXRhLCB0eXBlOiAncm93JywgaW5kZXg6IGV2ZW50LnJvd0luZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSAnbXVsdGlwbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0aW9uSW5kZXggPSB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKHJvd0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcigodmFsLCBpKSA9PiBpICE9IHNlbGVjdGlvbkluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUm93VW5zZWxlY3QuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsIGRhdGE6IHJvd0RhdGEsIHR5cGU6ICdyb3cnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID8gWy4uLnRoaXMuc2VsZWN0aW9uLCByb3dEYXRhXSA6IFtyb3dEYXRhXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUm93U2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCBkYXRhOiByb3dEYXRhLCB0eXBlOiAncm93JywgaW5kZXg6IGV2ZW50LnJvd0luZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uub25TZWxlY3Rpb25DaGFuZ2UoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZWZ1bCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm93VG91Y2hlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGhhbmRsZVJvd1RvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucm93VG91Y2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaGFuZGxlUm93UmlnaHRDbGljayhldmVudCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0TWVudSkge1xuICAgICAgICAgICAgY29uc3Qgcm93RGF0YSA9IGV2ZW50LnJvd0RhdGE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHRNZW51U2VsZWN0aW9uTW9kZSA9PT0gJ3NlcGFyYXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVTZWxlY3Rpb24gPSByb3dEYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2UuZW1pdChyb3dEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29udGV4dE1lbnVTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgZGF0YTogcm93RGF0YSwgaW5kZXg6IGV2ZW50LnJvd0luZGV4fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudS5zaG93KGV2ZW50Lm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uQ29udGV4dE1lbnUocm93RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRleHRNZW51U2VsZWN0aW9uTW9kZSA9PT0gJ2pvaW50Jykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmVudFNlbGVjdGlvblNldHRlclByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQocm93RGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFLZXlWYWx1ZSA9IHRoaXMuZGF0YUtleSA/IFN0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHJvd0RhdGEsIHRoaXMuZGF0YUtleSkpIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25Nb2RlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gcm93RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQocm93RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc011bHRpcGxlU2VsZWN0aW9uTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtyb3dEYXRhXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudS5zaG93KGV2ZW50Lm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Db250ZXh0TWVudVNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgZGF0YTogcm93RGF0YSwgaW5kZXg6IGV2ZW50LnJvd0luZGV4fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RSYW5nZShldmVudDogTW91c2VFdmVudCwgcm93SW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XG5cbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yUm93SW5kZXggPiByb3dJbmRleCkge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IHJvd0luZGV4O1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSB0aGlzLmFuY2hvclJvd0luZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYW5jaG9yUm93SW5kZXggPCByb3dJbmRleCkge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IHRoaXMuYW5jaG9yUm93SW5kZXg7XG4gICAgICAgICAgICByYW5nZUVuZCA9IHJvd0luZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IHJvd0luZGV4O1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSByb3dJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhenkgJiYgdGhpcy5wYWdpbmF0b3IpIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgLT0gdGhpcy5maXJzdDtcbiAgICAgICAgICAgIHJhbmdlRW5kIC09IHRoaXMuZmlyc3Q7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGkgPSByYW5nZVN0YXJ0OyBpIDw9IHJhbmdlRW5kOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYW5nZVJvd0RhdGEgPSB0aGlzLmZpbHRlcmVkVmFsdWUgPyB0aGlzLmZpbHRlcmVkVmFsdWVbaV0gOiB0aGlzLnZhbHVlW2ldO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2VsZWN0ZWQocmFuZ2VSb3dEYXRhKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IFsuLi50aGlzLnNlbGVjdGlvbiwgcmFuZ2VSb3dEYXRhXTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUtleVZhbHVlOiBzdHJpbmcgPSB0aGlzLmRhdGFLZXkgPyBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShyYW5nZVJvd0RhdGEsIHRoaXMuZGF0YUtleSkpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUtleVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vblJvd1NlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgZGF0YTogcmFuZ2VSb3dEYXRhLCB0eXBlOiAncm93J30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3Rpb25SYW5nZShldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBsZXQgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XG5cbiAgICAgICAgaWYgKHRoaXMucmFuZ2VSb3dJbmRleCA+IHRoaXMuYW5jaG9yUm93SW5kZXgpIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSB0aGlzLmFuY2hvclJvd0luZGV4O1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSB0aGlzLnJhbmdlUm93SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yYW5nZVJvd0luZGV4IDwgdGhpcy5hbmNob3JSb3dJbmRleCkge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IHRoaXMucmFuZ2VSb3dJbmRleDtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gdGhpcy5hbmNob3JSb3dJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSB0aGlzLnJhbmdlUm93SW5kZXg7XG4gICAgICAgICAgICByYW5nZUVuZCA9IHRoaXMucmFuZ2VSb3dJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaSA9IHJhbmdlU3RhcnQ7IGkgPD0gcmFuZ2VFbmQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmdlUm93RGF0YSA9IHRoaXMudmFsdWVbaV07XG4gICAgICAgICAgICBsZXQgc2VsZWN0aW9uSW5kZXggPSB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKHJhbmdlUm93RGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5maWx0ZXIoKHZhbCxpKSA9PiBpIT1zZWxlY3Rpb25JbmRleCk7XG4gICAgICAgICAgICBsZXQgZGF0YUtleVZhbHVlOiBzdHJpbmcgPSB0aGlzLmRhdGFLZXkgPyBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShyYW5nZVJvd0RhdGEsIHRoaXMuZGF0YUtleSkpIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uUm93VW5zZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIGRhdGE6IHJhbmdlUm93RGF0YSwgdHlwZTogJ3Jvdyd9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQocm93RGF0YSkge1xuICAgICAgICBpZiAocm93RGF0YSAmJiB0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbktleXNbT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShyb3dEYXRhLCB0aGlzLmRhdGFLZXkpXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKHJvd0RhdGEpID4gLTE7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMocm93RGF0YSwgdGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpbmRJbmRleEluU2VsZWN0aW9uKHJvd0RhdGE6IGFueSkge1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IC0xO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24gJiYgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXF1YWxzKHJvd0RhdGEsIHRoaXMuc2VsZWN0aW9uW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICB0b2dnbGVSb3dXaXRoUmFkaW8oZXZlbnQ6IGFueSwgcm93RGF0YTphbnkpIHtcbiAgICAgICAgdGhpcy5wcmV2ZW50U2VsZWN0aW9uU2V0dGVyUHJvcGFnYXRpb24gPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbiAhPSByb3dEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSByb3dEYXRhO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLm9uUm93U2VsZWN0LmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsIGluZGV4OiBldmVudC5yb3dJbmRleCwgZGF0YTogcm93RGF0YSwgdHlwZTogJ3JhZGlvYnV0dG9uJ30pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW1N0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHJvd0RhdGEsIHRoaXMuZGF0YUtleSkpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLm9uUm93VW5zZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgaW5kZXg6IGV2ZW50LnJvd0luZGV4LCBkYXRhOiByb3dEYXRhLCB0eXBlOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGVmdWwoKSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVJvd1dpdGhDaGVja2JveChldmVudCwgcm93RGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb258fFtdO1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQocm93RGF0YSk7XG4gICAgICAgIGxldCBkYXRhS2V5VmFsdWUgPSB0aGlzLmRhdGFLZXkgPyBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShyb3dEYXRhLCB0aGlzLmRhdGFLZXkpKSA6IG51bGw7XG4gICAgICAgIHRoaXMucHJldmVudFNlbGVjdGlvblNldHRlclByb3BhZ2F0aW9uID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3Rpb25JbmRleCA9IHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24ocm93RGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5maWx0ZXIoKHZhbCwgaSkgPT4gaSAhPSBzZWxlY3Rpb25JbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMub25Sb3dVbnNlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgaW5kZXg6IGV2ZW50LnJvd0luZGV4LCBkYXRhOiByb3dEYXRhLCB0eXBlOiAnY2hlY2tib3gnIH0pO1xuICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGlvbktleXNbZGF0YUtleVZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID8gWy4uLnRoaXMuc2VsZWN0aW9uLCByb3dEYXRhXSA6IFtyb3dEYXRhXTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5vblJvd1NlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgaW5kZXg6IGV2ZW50LnJvd0luZGV4LCBkYXRhOiByb3dEYXRhLCB0eXBlOiAnY2hlY2tib3gnIH0pO1xuICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZWZ1bCgpKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlUm93c1dpdGhDaGVja2JveChldmVudDogRXZlbnQsIGNoZWNrOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IGNoZWNrID8gdGhpcy5maWx0ZXJlZFZhbHVlID8gdGhpcy5maWx0ZXJlZFZhbHVlLnNsaWNlKCk6IHRoaXMudmFsdWUuc2xpY2UoKSA6IFtdO1xuICAgICAgICB0aGlzLnByZXZlbnRTZWxlY3Rpb25TZXR0ZXJQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uS2V5cygpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGlvbik7XG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIHRoaXMub25IZWFkZXJDaGVja2JveFRvZ2dsZS5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgY2hlY2tlZDogY2hlY2t9KTtcblxuICAgICAgICBpZiAodGhpcy5pc1N0YXRlZnVsKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlcXVhbHMoZGF0YTEsIGRhdGEyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVTZWxlY3Rpb25CeSA9PT0gJ2VxdWFscycgPyAoZGF0YTEgPT09IGRhdGEyKSA6IE9iamVjdFV0aWxzLmVxdWFscyhkYXRhMSwgZGF0YTIsIHRoaXMuZGF0YUtleSk7XG4gICAgfVxuXG4gICAgZmlsdGVyKHZhbHVlLCBmaWVsZCwgbWF0Y2hNb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZpbHRlclRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRmlsdGVyQmxhbmsodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcnNbZmllbGRdID0geyB2YWx1ZTogdmFsdWUsIG1hdGNoTW9kZTogbWF0Y2hNb2RlIH07XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJzW2ZpZWxkXSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyc1tmaWVsZF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcigpO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcy5maWx0ZXJEZWxheSk7XG5cbiAgICAgICAgdGhpcy5hbmNob3JSb3dJbmRleCA9IG51bGw7XG4gICAgfVxuXG4gICAgZmlsdGVyR2xvYmFsKHZhbHVlLCBtYXRjaE1vZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXIodmFsdWUsICdnbG9iYWwnLCBtYXRjaE1vZGUpO1xuICAgIH1cblxuICAgIGlzRmlsdGVyQmxhbmsoZmlsdGVyOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCAmJiBmaWx0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyAmJiBmaWx0ZXIudHJpbSgpLmxlbmd0aCA9PSAwKSB8fCAoZmlsdGVyIGluc3RhbmNlb2YgQXJyYXkgJiYgZmlsdGVyLmxlbmd0aCA9PSAwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2ZpbHRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlc3RvcmluZ0ZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5maXJzdCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hhbmdlLmVtaXQodGhpcy5maXJzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgICAgICB0aGlzLm9uTGF6eUxvYWQuZW1pdCh0aGlzLmNyZWF0ZUxhenlMb2FkTWV0YWRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGaWx0ZXIoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxSZWNvcmRzID0gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyc1snZ2xvYmFsJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbHVtbnMgJiYgIXRoaXMuZ2xvYmFsRmlsdGVyRmllbGRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHbG9iYWwgZmlsdGVyaW5nIHJlcXVpcmVzIGR5bmFtaWMgY29sdW1ucyBvciBnbG9iYWxGaWx0ZXJGaWVsZHMgdG8gYmUgZGVmaW5lZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXkgPSB0aGlzLmdsb2JhbEZpbHRlckZpZWxkc3x8dGhpcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdsb2JhbE1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbEZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLmZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcnMuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgcHJvcCAhPT0gJ2dsb2JhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbEZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyTWV0YSA9IHRoaXMuZmlsdGVyc1twcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyRmllbGQgPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGZpbHRlck1ldGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlck1hdGNoTW9kZSA9IGZpbHRlck1ldGEubWF0Y2hNb2RlIHx8ICdzdGFydHNXaXRoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUZpZWxkVmFsdWUgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHRoaXMudmFsdWVbaV0sIGZpbHRlckZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyQ29uc3RyYWludCA9IEZpbHRlclV0aWxzW2ZpbHRlck1hdGNoTW9kZV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlckNvbnN0cmFpbnQoZGF0YUZpZWxkVmFsdWUsIGZpbHRlclZhbHVlLCB0aGlzLmZpbHRlckxvY2FsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbG9jYWxNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJzWydnbG9iYWwnXSAmJiAhZ2xvYmFsTWF0Y2ggJiYgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBnbG9iYWxGaWx0ZXJGaWVsZHNBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnbG9iYWxGaWx0ZXJGaWVsZCA9IGdsb2JhbEZpbHRlckZpZWxkc0FycmF5W2pdLmZpZWxkfHxnbG9iYWxGaWx0ZXJGaWVsZHNBcnJheVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxNYXRjaCA9IEZpbHRlclV0aWxzW3RoaXMuZmlsdGVyc1snZ2xvYmFsJ10ubWF0Y2hNb2RlXShPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHRoaXMudmFsdWVbaV0sIGdsb2JhbEZpbHRlckZpZWxkKSwgdGhpcy5maWx0ZXJzWydnbG9iYWwnXS52YWx1ZSwgdGhpcy5maWx0ZXJMb2NhbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaGVzOiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJzWydnbG9iYWwnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IGxvY2FsRmlsdGVyZWQgPyAobG9jYWxGaWx0ZXJlZCAmJiBsb2NhbE1hdGNoICYmIGdsb2JhbE1hdGNoKSA6IGdsb2JhbE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IGxvY2FsRmlsdGVyZWQgJiYgbG9jYWxNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkVmFsdWUucHVzaCh0aGlzLnZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmVkVmFsdWUubGVuZ3RoID09PSB0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHRoaXMuZmlsdGVyZWRWYWx1ZSA/IHRoaXMuZmlsdGVyZWRWYWx1ZS5sZW5ndGggOiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25GaWx0ZXIuZW1pdCh7XG4gICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXG4gICAgICAgICAgICBmaWx0ZXJlZFZhbHVlOiB0aGlzLmZpbHRlcmVkVmFsdWUgfHwgdGhpcy52YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGVmdWwoKSAmJiAhdGhpcy5yZXN0b3JpbmdGaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yZXN0b3JpbmdGaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yaW5nRmlsdGVyID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0ZpbHRlcigpIHtcbiAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLmZpbHRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFlbXB0eTtcbiAgICB9XG5cbiAgICBjcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5maXJzdCxcbiAgICAgICAgICAgIHJvd3M6IHRoaXMucm93cyxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogdGhpcy5zb3J0RmllbGQsXG4gICAgICAgICAgICBzb3J0T3JkZXI6IHRoaXMuc29ydE9yZGVyLFxuICAgICAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAgICAgICAgZ2xvYmFsRmlsdGVyOiB0aGlzLmZpbHRlcnMgJiYgdGhpcy5maWx0ZXJzWydnbG9iYWwnXSA/IHRoaXMuZmlsdGVyc1snZ2xvYmFsJ10udmFsdWUgOiBudWxsLFxuICAgICAgICAgICAgbXVsdGlTb3J0TWV0YTogdGhpcy5tdWx0aVNvcnRNZXRhXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLl9zb3J0RmllbGQgPSBudWxsO1xuICAgICAgICB0aGlzLl9zb3J0T3JkZXIgPSB0aGlzLmRlZmF1bHRTb3J0T3JkZXI7XG4gICAgICAgIHRoaXMuX211bHRpU29ydE1ldGEgPSBudWxsO1xuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNvcnQobnVsbCk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0ge307XG5cbiAgICAgICAgdGhpcy5maXJzdCA9IDA7XG4gICAgICAgIHRoaXMuZmlyc3RDaGFuZ2UuZW1pdCh0aGlzLmZpcnN0KTtcblxuICAgICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgICAgICB0aGlzLm9uTGF6eUxvYWQuZW1pdCh0aGlzLmNyZWF0ZUxhenlMb2FkTWV0YWRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkcyA9ICh0aGlzLl92YWx1ZSA/IHRoaXMuX3ZhbHVlLmxlbmd0aCA6IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJyZXNldCBmdW5jdGlvbiBpcyBkZXByZWNhdGVkLCB1c2UgY2xlYXIgaW5zdGVhZC5cIik7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwb3J0Q1NWKG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIGxldCBjc3YgPSAnJztcbiAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLmZyb3plbkNvbHVtbnMgPyBbLi4udGhpcy5mcm96ZW5Db2x1bW5zLCAuLi50aGlzLmNvbHVtbnNdIDogdGhpcy5jb2x1bW5zO1xuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2VsZWN0aW9uT25seSkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuc2VsZWN0aW9uIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZmlsdGVyZWRWYWx1ZSB8fCB0aGlzLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5mcm96ZW5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhID8gWy4uLnRoaXMuZnJvemVuVmFsdWUsIC4uLmRhdGFdIDogdGhpcy5mcm96ZW5WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaGVhZGVyc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvbHVtbi5leHBvcnRhYmxlICE9PSBmYWxzZSAmJiBjb2x1bW4uZmllbGQpIHtcbiAgICAgICAgICAgICAgICBjc3YgKz0gJ1wiJyArIChjb2x1bW4uaGVhZGVyIHx8IGNvbHVtbi5maWVsZCkgKyAnXCInO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPCAoY29sdW1ucy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjc3YgKz0gdGhpcy5jc3ZTZXBhcmF0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9ib2R5XG4gICAgICAgIGRhdGEuZm9yRWFjaCgocmVjb3JkLCBpKSA9PiB7XG4gICAgICAgICAgICBjc3YgKz0gJ1xcbic7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmV4cG9ydGFibGUgIT09IGZhbHNlICYmIGNvbHVtbi5maWVsZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbERhdGEgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHJlY29yZCwgY29sdW1uLmZpZWxkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbERhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwb3J0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsRGF0YSA9IHRoaXMuZXhwb3J0RnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjZWxsRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxEYXRhID0gU3RyaW5nKGNlbGxEYXRhKS5yZXBsYWNlKC9cIi9nLCAnXCJcIicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxEYXRhID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgY3N2ICs9ICdcIicgKyBjZWxsRGF0YSArICdcIic7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCAoY29sdW1ucy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3N2ICs9IHRoaXMuY3N2U2VwYXJhdG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtjc3ZdLCB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGJsb2IsIHRoaXMuZXhwb3J0RmlsZW5hbWUgKyAnLmNzdicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgICBpZiAobGluay5kb3dubG9hZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCB0aGlzLmV4cG9ydEZpbGVuYW1lICsgJy5jc3YnKTtcbiAgICAgICAgICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjc3YgPSAnZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCcgKyBjc3Y7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oZW5jb2RlVVJJKGNzdikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldFNjcm9sbFRvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbClcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9WaXJ0dWFsSW5kZXgoMCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe3RvcDogMH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY3JvbGxUb1ZpcnR1YWxJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGVWaWV3Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsYWJsZVZpZXdDaGlsZC5zY3JvbGxUb1ZpcnR1YWxJbmRleChpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxhYmxlRnJvemVuVmlld0NoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGFibGVGcm96ZW5WaWV3Q2hpbGQuc2Nyb2xsVG9WaXJ0dWFsSW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNjcm9sbFRvKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZVZpZXdDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlVmlld0NoaWxkLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZUZyb3plblZpZXdDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlRnJvemVuVmlld0NoaWxkLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdGluZ0NlbGwoY2VsbCwgZGF0YSwgZmllbGQsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ0NlbGwgPSBjZWxsO1xuICAgICAgICB0aGlzLmVkaXRpbmdDZWxsRGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZWRpdGluZ0NlbGxGaWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLmVkaXRpbmdDZWxsUm93SW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBpc0VkaXRpbmdDZWxsVmFsaWQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5lZGl0aW5nQ2VsbCAmJiBEb21IYW5kbGVyLmZpbmQodGhpcy5lZGl0aW5nQ2VsbCwgJy5uZy1pbnZhbGlkLm5nLWRpcnR5JykubGVuZ3RoID09PSAwKTtcbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2N1bWVudEVkaXRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudEVkaXRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVkaXRpbmdDZWxsICYmICF0aGlzLmVkaXRpbmdDZWxsQ2xpY2sgJiYgdGhpcy5pc0VkaXRpbmdDZWxsVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWRpdGluZ0NlbGwsICdwLWNlbGwtZWRpdGluZycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdDZWxsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVkaXRDb21wbGV0ZS5lbWl0KHsgZmllbGQ6IHRoaXMuZWRpdGluZ0NlbGxGaWVsZCwgZGF0YTogdGhpcy5lZGl0aW5nQ2VsbERhdGEsIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBpbmRleDogdGhpcy5lZGl0aW5nQ2VsbFJvd0luZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdDZWxsRmllbGQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdDZWxsRGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZ0NlbGxSb3dJbmRleCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdDZWxsQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudEVkaXRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudEVkaXRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRFZGl0TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudEVkaXRMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRSb3dFZGl0KHJvd0RhdGE6IGFueSkge1xuICAgICAgICBsZXQgZGF0YUtleVZhbHVlID0gU3RyaW5nKE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocm93RGF0YSwgdGhpcy5kYXRhS2V5KSk7XG4gICAgICAgIHRoaXMuZWRpdGluZ1Jvd0tleXNbZGF0YUtleVZhbHVlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2F2ZVJvd0VkaXQocm93RGF0YTogYW55LCByb3dFbGVtZW50OiBIVE1MVGFibGVSb3dFbGVtZW50KSB7XG4gICAgICAgIGlmIChEb21IYW5kbGVyLmZpbmQocm93RWxlbWVudCwgJy5uZy1pbnZhbGlkLm5nLWRpcnR5JykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgZGF0YUtleVZhbHVlID0gU3RyaW5nKE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocm93RGF0YSwgdGhpcy5kYXRhS2V5KSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lZGl0aW5nUm93S2V5c1tkYXRhS2V5VmFsdWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsUm93RWRpdChyb3dEYXRhOiBhbnkpIHtcbiAgICAgICAgbGV0IGRhdGFLZXlWYWx1ZSA9IFN0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHJvd0RhdGEsIHRoaXMuZGF0YUtleSkpO1xuICAgICAgICBkZWxldGUgdGhpcy5lZGl0aW5nUm93S2V5c1tkYXRhS2V5VmFsdWVdO1xuICAgIH1cblxuICAgIHRvZ2dsZVJvdyhyb3dEYXRhOiBhbnksIGV2ZW50PzogRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFLZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGF0YUtleSBtdXN0IGJlIGRlZmluZWQgdG8gdXNlIHJvdyBleHBhbnNpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhS2V5VmFsdWUgPSBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShyb3dEYXRhLCB0aGlzLmRhdGFLZXkpKTtcblxuICAgICAgICBpZiAodGhpcy5leHBhbmRlZFJvd0tleXNbZGF0YUtleVZhbHVlXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5leHBhbmRlZFJvd0tleXNbZGF0YUtleVZhbHVlXTtcbiAgICAgICAgICAgIHRoaXMub25Sb3dDb2xsYXBzZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBkYXRhOiByb3dEYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd0V4cGFuZE1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRlZFJvd0tleXMgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZFJvd0tleXNbZGF0YUtleVZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uUm93RXhwYW5kLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGRhdGE6IHJvd0RhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZWZ1bCgpKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNSb3dFeHBhbmRlZChyb3dEYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kZWRSb3dLZXlzW1N0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHJvd0RhdGEsIHRoaXMuZGF0YUtleSkpXSA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc1Jvd0VkaXRpbmcocm93RGF0YTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRpbmdSb3dLZXlzW1N0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHJvd0RhdGEsIHRoaXMuZGF0YUtleSkpXSA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc1NpbmdsZVNlbGVjdGlvbk1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09ICdzaW5nbGUnO1xuICAgIH1cblxuICAgIGlzTXVsdGlwbGVTZWxlY3Rpb25Nb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSAnbXVsdGlwbGUnO1xuICAgIH1cblxuICAgIG9uQ29sdW1uUmVzaXplQmVnaW4oZXZlbnQpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckxlZnQgPSBEb21IYW5kbGVyLmdldE9mZnNldCh0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KS5sZWZ0O1xuICAgICAgICB0aGlzLmxhc3RSZXNpemVySGVscGVyWCA9IChldmVudC5wYWdlWCAtIGNvbnRhaW5lckxlZnQgKyB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQpO1xuICAgICAgICB0aGlzLm9uQ29sdW1uUmVzaXplKGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkNvbHVtblJlc2l6ZShldmVudCkge1xuICAgICAgICBsZXQgY29udGFpbmVyTGVmdCA9IERvbUhhbmRsZXIuZ2V0T2Zmc2V0KHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpLmxlZnQ7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgJ3AtdW5zZWxlY3RhYmxlLXRleHQnKTtcbiAgICAgICAgdGhpcy5yZXNpemVIZWxwZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMucmVzaXplSGVscGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gMCArICdweCc7XG4gICAgICAgIHRoaXMucmVzaXplSGVscGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IChldmVudC5wYWdlWCAtIGNvbnRhaW5lckxlZnQgKyB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQpICsgJ3B4JztcblxuICAgICAgICB0aGlzLnJlc2l6ZUhlbHBlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIG9uQ29sdW1uUmVzaXplRW5kKGV2ZW50LCBjb2x1bW4pIHtcbiAgICAgICAgbGV0IGRlbHRhID0gdGhpcy5yZXNpemVIZWxwZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0IC0gdGhpcy5sYXN0UmVzaXplckhlbHBlclg7XG4gICAgICAgIGxldCBjb2x1bW5XaWR0aCA9IGNvbHVtbi5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IG1pbldpZHRoID0gcGFyc2VJbnQoY29sdW1uLnN0eWxlLm1pbldpZHRoIHx8IDE1KTtcblxuICAgICAgICBpZiAoY29sdW1uV2lkdGggKyBkZWx0YSA8IG1pbldpZHRoKSB7XG4gICAgICAgICAgICBkZWx0YSA9IG1pbldpZHRoIC0gY29sdW1uV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdDb2x1bW5XaWR0aCA9IGNvbHVtbldpZHRoICsgZGVsdGE7XG5cbiAgICAgICAgaWYgKG5ld0NvbHVtbldpZHRoID49IG1pbldpZHRoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5SZXNpemVNb2RlID09PSAnZml0Jykge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0Q29sdW1uID0gY29sdW1uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICB3aGlsZSAoIW5leHRDb2x1bW4ub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRDb2x1bW4gPSBuZXh0Q29sdW1uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dENvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dENvbHVtbldpZHRoID0gbmV4dENvbHVtbi5vZmZzZXRXaWR0aCAtIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dENvbHVtbk1pbldpZHRoID0gbmV4dENvbHVtbi5zdHlsZS5taW5XaWR0aCB8fCAxNTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q29sdW1uV2lkdGggPiAxNSAmJiBuZXh0Q29sdW1uV2lkdGggPiBwYXJzZUludChuZXh0Q29sdW1uTWluV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVWaWV3ID0gdGhpcy5maW5kUGFyZW50U2Nyb2xsYWJsZVZpZXcoY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsYWJsZUJvZHlUYWJsZSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJy5wLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWJvZHkgdGFibGUnKSB8fCBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICcucC1kYXRhdGFibGUtc2Nyb2xsYWJsZS1ib2R5IHRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVIZWFkZXJUYWJsZSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJ3RhYmxlLnAtZGF0YXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVGb290ZXJUYWJsZSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJ3RhYmxlLnAtZGF0YXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc2l6ZUNvbHVtbkluZGV4ID0gRG9tSGFuZGxlci5pbmRleChjb2x1bW4pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVDb2xHcm91cChzY3JvbGxhYmxlSGVhZGVyVGFibGUsIHJlc2l6ZUNvbHVtbkluZGV4LCBuZXdDb2x1bW5XaWR0aCwgbmV4dENvbHVtbldpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVCb2R5VGFibGUsIHJlc2l6ZUNvbHVtbkluZGV4LCBuZXdDb2x1bW5XaWR0aCwgbmV4dENvbHVtbldpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVGb290ZXJUYWJsZSwgcmVzaXplQ29sdW1uSW5kZXgsIG5ld0NvbHVtbldpZHRoLCBuZXh0Q29sdW1uV2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlLndpZHRoID0gbmV3Q29sdW1uV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRDb2x1bW4uc3R5bGUud2lkdGggPSBuZXh0Q29sdW1uV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY29sdW1uUmVzaXplTW9kZSA9PT0gJ2V4cGFuZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3Q29sdW1uV2lkdGggPj0gbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTY3JvbGxhYmxlSXRlbXNXaWR0aE9uRXhwYW5kUmVzaXplKGNvbHVtbiwgbmV3Q29sdW1uV2lkdGgsIGRlbHRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMudGFibGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIGRlbHRhICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZS53aWR0aCA9IG5ld0NvbHVtbldpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJXaWR0aCA9IHRoaXMudGFibGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBjb250YWluZXJXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub25Db2xSZXNpemUuZW1pdCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogY29sdW1uLFxuICAgICAgICAgICAgICAgIGRlbHRhOiBkZWx0YVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhdGVmdWwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2l6ZUhlbHBlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgJ3AtdW5zZWxlY3RhYmxlLXRleHQnKTtcbiAgICB9XG5cbiAgICBzZXRTY3JvbGxhYmxlSXRlbXNXaWR0aE9uRXhwYW5kUmVzaXplKGNvbHVtbiwgbmV3Q29sdW1uV2lkdGgsIGRlbHRhKSB7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlVmlldyA9IGNvbHVtbiA/IHRoaXMuZmluZFBhcmVudFNjcm9sbGFibGVWaWV3KGNvbHVtbikgOiB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgc2Nyb2xsYWJsZUJvZHkgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICcucC1kYXRhdGFibGUtc2Nyb2xsYWJsZS1ib2R5JykgfHwgRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVWaWV3LCAnY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0Jyk7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlSGVhZGVyID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVWaWV3LCAnLnAtZGF0YXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyJyk7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlRm9vdGVyID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVWaWV3LCAnLnAtZGF0YXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyJyk7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlQm9keVRhYmxlID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVCb2R5LCAnLnAtZGF0YXRhYmxlLXNjcm9sbGFibGUtYm9keSB0YWJsZScpIHx8IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJ2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB0YWJsZScpO1xuICAgICAgICBsZXQgc2Nyb2xsYWJsZUhlYWRlclRhYmxlID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVIZWFkZXIsICd0YWJsZS5wLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWhlYWRlci10YWJsZScpO1xuICAgICAgICBsZXQgc2Nyb2xsYWJsZUZvb3RlclRhYmxlID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVGb290ZXIsICd0YWJsZS5wLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWZvb3Rlci10YWJsZScpO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGVCb2R5VGFibGVXaWR0aCA9IGNvbHVtbiA/IHNjcm9sbGFibGVCb2R5VGFibGUub2Zmc2V0V2lkdGggKyBkZWx0YSA6IG5ld0NvbHVtbldpZHRoO1xuICAgICAgICBjb25zdCBzY3JvbGxhYmxlSGVhZGVyVGFibGVXaWR0aCA9IGNvbHVtbiA/IHNjcm9sbGFibGVIZWFkZXJUYWJsZS5vZmZzZXRXaWR0aCArIGRlbHRhIDogbmV3Q29sdW1uV2lkdGg7XG4gICAgICAgIGNvbnN0IGlzQ29udGFpbmVySW5WaWV3cG9ydCA9IHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggPj0gc2Nyb2xsYWJsZUJvZHlUYWJsZVdpZHRoO1xuXG4gICAgICAgIGxldCBzZXRXaWR0aCA9IChjb250YWluZXIsIHRhYmxlLCB3aWR0aCwgaXNDb250YWluZXJJblZpZXdwb3J0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyICYmIHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gaXNDb250YWluZXJJblZpZXdwb3J0ID8gd2lkdGggKyBEb21IYW5kbGVyLmNhbGN1bGF0ZVNjcm9sbGJhcldpZHRoKHNjcm9sbGFibGVCb2R5KSArICdweCcgOiAnYXV0bydcbiAgICAgICAgICAgICAgICB0YWJsZS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzZXRXaWR0aChzY3JvbGxhYmxlQm9keSwgc2Nyb2xsYWJsZUJvZHlUYWJsZSwgc2Nyb2xsYWJsZUJvZHlUYWJsZVdpZHRoLCBpc0NvbnRhaW5lckluVmlld3BvcnQpO1xuICAgICAgICBzZXRXaWR0aChzY3JvbGxhYmxlSGVhZGVyLCBzY3JvbGxhYmxlSGVhZGVyVGFibGUsIHNjcm9sbGFibGVIZWFkZXJUYWJsZVdpZHRoLCBpc0NvbnRhaW5lckluVmlld3BvcnQpO1xuICAgICAgICBzZXRXaWR0aChzY3JvbGxhYmxlRm9vdGVyLCBzY3JvbGxhYmxlRm9vdGVyVGFibGUsIHNjcm9sbGFibGVIZWFkZXJUYWJsZVdpZHRoLCBpc0NvbnRhaW5lckluVmlld3BvcnQpO1xuXG4gICAgICAgIGlmIChjb2x1bW4pIHtcbiAgICAgICAgICAgIGxldCByZXNpemVDb2x1bW5JbmRleCA9IERvbUhhbmRsZXIuaW5kZXgoY29sdW1uKTtcblxuICAgICAgICAgICAgdGhpcy5yZXNpemVDb2xHcm91cChzY3JvbGxhYmxlSGVhZGVyVGFibGUsIHJlc2l6ZUNvbHVtbkluZGV4LCBuZXdDb2x1bW5XaWR0aCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVCb2R5VGFibGUsIHJlc2l6ZUNvbHVtbkluZGV4LCBuZXdDb2x1bW5XaWR0aCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVGb290ZXJUYWJsZSwgcmVzaXplQ29sdW1uSW5kZXgsIG5ld0NvbHVtbldpZHRoLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRQYXJlbnRTY3JvbGxhYmxlVmlldyhjb2x1bW4pIHtcbiAgICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGNvbHVtbi5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhRG9tSGFuZGxlci5oYXNDbGFzcyhwYXJlbnQsICdwLWRhdGF0YWJsZS1zY3JvbGxhYmxlLXZpZXcnKSkge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNpemVDb2xHcm91cCh0YWJsZSwgcmVzaXplQ29sdW1uSW5kZXgsIG5ld0NvbHVtbldpZHRoLCBuZXh0Q29sdW1uV2lkdGgpIHtcbiAgICAgICAgaWYgKHRhYmxlKSB7XG4gICAgICAgICAgICBsZXQgY29sR3JvdXAgPSB0YWJsZS5jaGlsZHJlblswXS5ub2RlTmFtZSA9PT0gJ0NPTEdST1VQJyA/IHRhYmxlLmNoaWxkcmVuWzBdIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKGNvbEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGNvbEdyb3VwLmNoaWxkcmVuW3Jlc2l6ZUNvbHVtbkluZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dENvbCA9IGNvbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgY29sLnN0eWxlLndpZHRoID0gbmV3Q29sdW1uV2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDb2wgJiYgbmV4dENvbHVtbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRDb2wuc3R5bGUud2lkdGggPSBuZXh0Q29sdW1uV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IFwiU2Nyb2xsYWJsZSB0YWJsZXMgcmVxdWlyZSBhIGNvbGdyb3VwIHRvIHN1cHBvcnQgcmVzaXphYmxlIGNvbHVtbnNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sdW1uRHJhZ1N0YXJ0KGV2ZW50LCBjb2x1bW5FbGVtZW50KSB7XG4gICAgICAgIHRoaXMucmVvcmRlckljb25XaWR0aCA9IERvbUhhbmRsZXIuZ2V0SGlkZGVuRWxlbWVudE91dGVyV2lkdGgodGhpcy5yZW9yZGVySW5kaWNhdG9yVXBWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMucmVvcmRlckljb25IZWlnaHQgPSBEb21IYW5kbGVyLmdldEhpZGRlbkVsZW1lbnRPdXRlckhlaWdodCh0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmRyYWdnZWRDb2x1bW4gPSBjb2x1bW5FbGVtZW50O1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdiJyk7ICAgIC8vIEZvciBmaXJlZm94XG4gICAgfVxuXG4gICAgb25Db2x1bW5EcmFnRW50ZXIoZXZlbnQsIGRyb3BIZWFkZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucmVvcmRlcmFibGVDb2x1bW5zICYmIHRoaXMuZHJhZ2dlZENvbHVtbiAmJiBkcm9wSGVhZGVyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lck9mZnNldCA9IERvbUhhbmRsZXIuZ2V0T2Zmc2V0KHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IGRyb3BIZWFkZXJPZmZzZXQgPSBEb21IYW5kbGVyLmdldE9mZnNldChkcm9wSGVhZGVyKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dlZENvbHVtbiAhPSBkcm9wSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRyYWdJbmRleCA9IERvbUhhbmRsZXIuaW5kZXhXaXRoaW5Hcm91cCh0aGlzLmRyYWdnZWRDb2x1bW4sICdwcmVvcmRlcmFibGVjb2x1bW4nKTtcbiAgICAgICAgICAgICAgICBsZXQgZHJvcEluZGV4ID0gRG9tSGFuZGxlci5pbmRleFdpdGhpbkdyb3VwKGRyb3BIZWFkZXIsICdwcmVvcmRlcmFibGVjb2x1bW4nKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0TGVmdCA9IGRyb3BIZWFkZXJPZmZzZXQubGVmdCAtIGNvbnRhaW5lck9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRUb3AgPSBjb250YWluZXJPZmZzZXQudG9wIC0gZHJvcEhlYWRlck9mZnNldC50b3A7XG4gICAgICAgICAgICAgICAgbGV0IGNvbHVtbkNlbnRlciA9IGRyb3BIZWFkZXJPZmZzZXQubGVmdCArIGRyb3BIZWFkZXIub2Zmc2V0V2lkdGggLyAyO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW9yZGVySW5kaWNhdG9yVXBWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBkcm9wSGVhZGVyT2Zmc2V0LnRvcCAtIGNvbnRhaW5lck9mZnNldC50b3AgLSAodGhpcy5yZW9yZGVySWNvbkhlaWdodCAtIDEpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gZHJvcEhlYWRlck9mZnNldC50b3AgLSBjb250YWluZXJPZmZzZXQudG9wICsgZHJvcEhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBhZ2VYID4gY29sdW1uQ2VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvclVwVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICh0YXJnZXRMZWZ0ICsgZHJvcEhlYWRlci5vZmZzZXRXaWR0aCAtIE1hdGguY2VpbCh0aGlzLnJlb3JkZXJJY29uV2lkdGggLyAyKSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICh0YXJnZXRMZWZ0ICsgZHJvcEhlYWRlci5vZmZzZXRXaWR0aCAtIE1hdGguY2VpbCh0aGlzLnJlb3JkZXJJY29uV2lkdGggLyAyKSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3BQb3NpdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAodGFyZ2V0TGVmdCAtIE1hdGguY2VpbCh0aGlzLnJlb3JkZXJJY29uV2lkdGggLyAyKSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICh0YXJnZXRMZWZ0IC0gTWF0aC5jZWlsKHRoaXMucmVvcmRlckljb25XaWR0aCAvIDIpKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcFBvc2l0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKChkcm9wSW5kZXggLSBkcmFnSW5kZXggPT09IDEgJiYgdGhpcy5kcm9wUG9zaXRpb24gPT09IC0xKSB8fCAoZHJvcEluZGV4IC0gZHJhZ0luZGV4ID09PSAtMSAmJiB0aGlzLmRyb3BQb3NpdGlvbiA9PT0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW9yZGVySW5kaWNhdG9yVXBWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvclVwVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvckRvd25WaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sdW1uRHJhZ0xlYXZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlb3JkZXJhYmxlQ29sdW1ucyAmJiB0aGlzLmRyYWdnZWRDb2x1bW4pIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sdW1uRHJvcChldmVudCwgZHJvcENvbHVtbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2VkQ29sdW1uKSB7XG4gICAgICAgICAgICBsZXQgZHJhZ0luZGV4ID0gRG9tSGFuZGxlci5pbmRleFdpdGhpbkdyb3VwKHRoaXMuZHJhZ2dlZENvbHVtbiwgJ3ByZW9yZGVyYWJsZWNvbHVtbicpO1xuICAgICAgICAgICAgbGV0IGRyb3BJbmRleCA9IERvbUhhbmRsZXIuaW5kZXhXaXRoaW5Hcm91cChkcm9wQ29sdW1uLCAncHJlb3JkZXJhYmxlY29sdW1uJyk7XG4gICAgICAgICAgICBsZXQgYWxsb3dEcm9wID0gKGRyYWdJbmRleCAhPSBkcm9wSW5kZXgpO1xuICAgICAgICAgICAgaWYgKGFsbG93RHJvcCAmJiAoKGRyb3BJbmRleCAtIGRyYWdJbmRleCA9PSAxICYmIHRoaXMuZHJvcFBvc2l0aW9uID09PSAtMSkgfHwgKGRyYWdJbmRleCAtIGRyb3BJbmRleCA9PSAxICYmIHRoaXMuZHJvcFBvc2l0aW9uID09PSAxKSkpIHtcbiAgICAgICAgICAgICAgICBhbGxvd0Ryb3AgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93RHJvcCAmJiAoKGRyb3BJbmRleCA8IGRyYWdJbmRleCAmJiB0aGlzLmRyb3BQb3NpdGlvbiA9PT0gMSkpKSB7XG4gICAgICAgICAgICAgICAgZHJvcEluZGV4ID0gZHJvcEluZGV4ICsgMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93RHJvcCAmJiAoKGRyb3BJbmRleCA+IGRyYWdJbmRleCAmJiB0aGlzLmRyb3BQb3NpdGlvbiA9PT0gLTEpKSkge1xuICAgICAgICAgICAgICAgIGRyb3BJbmRleCA9IGRyb3BJbmRleCAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd0Ryb3ApIHtcbiAgICAgICAgICAgICAgICBPYmplY3RVdGlscy5yZW9yZGVyQXJyYXkodGhpcy5jb2x1bW5zLCBkcmFnSW5kZXgsIGRyb3BJbmRleCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29sUmVvcmRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ0luZGV4OiBkcmFnSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGRyb3BJbmRleDogZHJvcEluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbHVtbnNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhdGVmdWwoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvclVwVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvckRvd25WaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkQ29sdW1uLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkQ29sdW1uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZHJvcFBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUm93RHJhZ1N0YXJ0KGV2ZW50LCBpbmRleCkge1xuICAgICAgICB0aGlzLnJvd0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kcmFnZ2VkUm93SW5kZXggPSBpbmRleDtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnYicpOyAgICAvLyBGb3IgZmlyZWZveFxuICAgIH1cblxuICAgIG9uUm93RHJhZ092ZXIoZXZlbnQsIGluZGV4LCByb3dFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJvd0RyYWdnaW5nICYmIHRoaXMuZHJhZ2dlZFJvd0luZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgbGV0IHJvd1kgPSBEb21IYW5kbGVyLmdldE9mZnNldChyb3dFbGVtZW50KS50b3AgKyBEb21IYW5kbGVyLmdldFdpbmRvd1Njcm9sbFRvcCgpO1xuICAgICAgICAgICAgbGV0IHBhZ2VZID0gZXZlbnQucGFnZVk7XG4gICAgICAgICAgICBsZXQgcm93TWlkWSA9IHJvd1kgKyBEb21IYW5kbGVyLmdldE91dGVySGVpZ2h0KHJvd0VsZW1lbnQpIC8gMjtcbiAgICAgICAgICAgIGxldCBwcmV2Um93RWxlbWVudCA9IHJvd0VsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgaWYgKHBhZ2VZIDwgcm93TWlkWSkge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3Mocm93RWxlbWVudCwgJ3AtZGF0YXRhYmxlLWRyYWdwb2ludC1ib3R0b20nKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcHBlZFJvd0luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZSb3dFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHByZXZSb3dFbGVtZW50LCAncC1kYXRhdGFibGUtZHJhZ3BvaW50LWJvdHRvbScpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyhyb3dFbGVtZW50LCAncC1kYXRhdGFibGUtZHJhZ3BvaW50LXRvcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZSb3dFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHByZXZSb3dFbGVtZW50LCAncC1kYXRhdGFibGUtZHJhZ3BvaW50LWJvdHRvbScpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyhyb3dFbGVtZW50LCAncC1kYXRhdGFibGUtZHJhZ3BvaW50LXRvcCcpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wcGVkUm93SW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyhyb3dFbGVtZW50LCAncC1kYXRhdGFibGUtZHJhZ3BvaW50LWJvdHRvbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Sb3dEcmFnTGVhdmUoZXZlbnQsIHJvd0VsZW1lbnQpIHtcbiAgICAgICAgbGV0IHByZXZSb3dFbGVtZW50ID0gcm93RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBpZiAocHJldlJvd0VsZW1lbnQpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MocHJldlJvd0VsZW1lbnQsICdwLWRhdGF0YWJsZS1kcmFncG9pbnQtYm90dG9tJyk7XG4gICAgICAgIH1cblxuICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHJvd0VsZW1lbnQsICdwLWRhdGF0YWJsZS1kcmFncG9pbnQtYm90dG9tJyk7XG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3Mocm93RWxlbWVudCwgJ3AtZGF0YXRhYmxlLWRyYWdwb2ludC10b3AnKTtcbiAgICB9XG5cbiAgICBvblJvd0RyYWdFbmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yb3dEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYWdnZWRSb3dJbmRleCA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJvcHBlZFJvd0luZGV4ID0gbnVsbDtcbiAgICB9XG5cbiAgICBvblJvd0Ryb3AoZXZlbnQsIHJvd0VsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcHBlZFJvd0luZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBkcm9wSW5kZXggPSAodGhpcy5kcmFnZ2VkUm93SW5kZXggPiB0aGlzLmRyb3BwZWRSb3dJbmRleCkgPyB0aGlzLmRyb3BwZWRSb3dJbmRleCA6ICh0aGlzLmRyb3BwZWRSb3dJbmRleCA9PT0gMCkgPyAwIDogdGhpcy5kcm9wcGVkUm93SW5kZXggLSAxO1xuICAgICAgICAgICAgT2JqZWN0VXRpbHMucmVvcmRlckFycmF5KHRoaXMudmFsdWUsIHRoaXMuZHJhZ2dlZFJvd0luZGV4LCBkcm9wSW5kZXgpO1xuXG4gICAgICAgICAgICB0aGlzLm9uUm93UmVvcmRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICBkcmFnSW5kZXg6IHRoaXMuZHJhZ2dlZFJvd0luZGV4LFxuICAgICAgICAgICAgICAgIGRyb3BJbmRleDogZHJvcEluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL2NsZWFudXBcbiAgICAgICAgdGhpcy5vblJvd0RyYWdMZWF2ZShldmVudCwgcm93RWxlbWVudCk7XG4gICAgICAgIHRoaXMub25Sb3dEcmFnRW5kKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZmlsdGVyZWRWYWx1ZXx8dGhpcy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGRhdGEgPT0gbnVsbCB8fCBkYXRhLmxlbmd0aCA9PSAwO1xuICAgIH1cblxuICAgIGdldEJsb2NrYWJsZUVsZW1lbnQoKTogSFRNTEVsZW1lbnTCoHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICBnZXRTdG9yYWdlKCkge1xuICAgICAgICBzd2l0Y2godGhpcy5zdGF0ZVN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvY2FsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcblxuICAgICAgICAgICAgY2FzZSAnc2Vzc2lvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5zdGF0ZVN0b3JhZ2UgKyAnIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciB0aGUgc3RhdGUgc3RvcmFnZSwgc3VwcG9ydGVkIHZhbHVlcyBhcmUgXCJsb2NhbFwiIGFuZCBcInNlc3Npb25cIi4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU3RhdGVmdWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlS2V5ICE9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZVN0YXRlKCkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIGxldCBzdGF0ZTogVGFibGVTdGF0ZSA9IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLnBhZ2luYXRvcikge1xuICAgICAgICAgICAgc3RhdGUuZmlyc3QgPSB0aGlzLmZpcnN0O1xuICAgICAgICAgICAgc3RhdGUucm93cyA9IHRoaXMucm93cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNvcnRGaWVsZCkge1xuICAgICAgICAgICAgc3RhdGUuc29ydEZpZWxkID0gdGhpcy5zb3J0RmllbGQ7XG4gICAgICAgICAgICBzdGF0ZS5zb3J0T3JkZXIgPSB0aGlzLnNvcnRPcmRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm11bHRpU29ydE1ldGEpIHtcbiAgICAgICAgICAgIHN0YXRlLm11bHRpU29ydE1ldGEgPSB0aGlzLm11bHRpU29ydE1ldGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXNGaWx0ZXIoKSkge1xuICAgICAgICAgICAgc3RhdGUuZmlsdGVycyA9IHRoaXMuZmlsdGVycztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJlc2l6YWJsZUNvbHVtbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUNvbHVtbldpZHRocyhzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yZW9yZGVyYWJsZUNvbHVtbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUNvbHVtbk9yZGVyKHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5leHBhbmRlZFJvd0tleXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RhdGUuZXhwYW5kZWRSb3dLZXlzID0gdGhpcy5leHBhbmRlZFJvd0tleXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RhdGVLZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uU3RhdGVTYXZlLmVtaXQoc3RhdGUpO1xuICAgIH1cblxuICAgIGNsZWFyU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2UoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZUtleSkge1xuICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuc3RhdGVLZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZVN0YXRlKCkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IHN0YXRlU3RyaW5nID0gc3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RhdGVLZXkpO1xuXG4gICAgICAgIGlmIChzdGF0ZVN0cmluZykge1xuICAgICAgICAgICAgbGV0IHN0YXRlOiBUYWJsZVN0YXRlID0gSlNPTi5wYXJzZShzdGF0ZVN0cmluZyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvcikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdCA9IHN0YXRlLmZpcnN0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2hhbmdlLmVtaXQodGhpcy5maXJzdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm93cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHN0YXRlLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93c0NoYW5nZS5lbWl0KHRoaXMucm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhdGUuc29ydEZpZWxkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JpbmdTb3J0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0RmllbGQgPSBzdGF0ZS5zb3J0RmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydE9yZGVyID0gc3RhdGUuc29ydE9yZGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhdGUubXVsdGlTb3J0TWV0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yaW5nU29ydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fbXVsdGlTb3J0TWV0YSA9IHN0YXRlLm11bHRpU29ydE1ldGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZS5maWx0ZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JpbmdGaWx0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycyA9IHN0YXRlLmZpbHRlcnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6YWJsZUNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbldpZHRoc1N0YXRlID0gc3RhdGUuY29sdW1uV2lkdGhzO1xuICAgICAgICAgICAgICAgIHRoaXMudGFibGVXaWR0aFN0YXRlID0gc3RhdGUudGFibGVXaWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXRlLmV4cGFuZGVkUm93S2V5cykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRSb3dLZXlzID0gc3RhdGUuZXhwYW5kZWRSb3dLZXlzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhdGUuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzdGF0ZS5zZWxlY3Rpb24pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGF0ZVJlc3RvcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5vblN0YXRlUmVzdG9yZS5lbWl0KHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVDb2x1bW5XaWR0aHMoc3RhdGUpIHtcbiAgICAgICAgbGV0IHdpZHRocyA9IFtdO1xuICAgICAgICBsZXQgaGVhZGVycyA9IERvbUhhbmRsZXIuZmluZCh0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAnLnAtZGF0YXRhYmxlLXRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCcpO1xuICAgICAgICBoZWFkZXJzLm1hcChoZWFkZXIgPT4gd2lkdGhzLnB1c2goRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKGhlYWRlcikpKTtcbiAgICAgICAgc3RhdGUuY29sdW1uV2lkdGhzID0gd2lkdGhzLmpvaW4oJywnKTtcblxuICAgICAgICBpZiAodGhpcy5jb2x1bW5SZXNpemVNb2RlID09PSAnZXhwYW5kJykge1xuICAgICAgICAgICAgc3RhdGUudGFibGVXaWR0aCA9IHRoaXMuc2Nyb2xsYWJsZSA/IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAnLnAtZGF0YXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyLXRhYmxlJykuc3R5bGUud2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHRoaXMudGFibGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbHVtbldpZHRocygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uV2lkdGhzU3RhdGUpIHtcbiAgICAgICAgICAgIGxldCB3aWR0aHMgPSB0aGlzLmNvbHVtbldpZHRoc1N0YXRlLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtblJlc2l6ZU1vZGUgPT09ICdleHBhbmQnICYmIHRoaXMudGFibGVXaWR0aFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNjcm9sbGFibGVJdGVtc1dpZHRoT25FeHBhbmRSZXNpemUobnVsbCwgdGhpcy50YWJsZVdpZHRoU3RhdGUsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy50YWJsZVdpZHRoU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLnRhYmxlV2lkdGhTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaGVhZGVyQ29scyA9IERvbUhhbmRsZXIuZmluZCh0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAnLnAtZGF0YXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyLXRhYmxlID4gY29sZ3JvdXAgPiBjb2wnKTtcbiAgICAgICAgICAgICAgICBsZXQgYm9keUNvbHMgPSBEb21IYW5kbGVyLmZpbmQodGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgJy5wLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWJvZHkgdGFibGUgPiBjb2xncm91cCA+IGNvbCcpO1xuXG4gICAgICAgICAgICAgICAgaGVhZGVyQ29scy5tYXAoKGNvbCwgaW5kZXgpID0+IGNvbC5zdHlsZS53aWR0aCA9IHdpZHRoc1tpbmRleF0gKyAncHgnKTtcbiAgICAgICAgICAgICAgICBib2R5Q29scy5tYXAoKGNvbCwgaW5kZXgpID0+IGNvbC5zdHlsZS53aWR0aCA9IHdpZHRoc1tpbmRleF0gKyAncHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBoZWFkZXJzID0gRG9tSGFuZGxlci5maW5kKHRoaXMudGFibGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgJy5wLWRhdGF0YWJsZS10aGVhZCA+IHRyOmZpcnN0LWNoaWxkID4gdGgnKTtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLm1hcCgoaGVhZGVyLCBpbmRleCkgPT4gaGVhZGVyLnN0eWxlLndpZHRoID0gd2lkdGhzW2luZGV4XSArICdweCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZUNvbHVtbk9yZGVyKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbnMpIHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5PcmRlcjogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgICAgICAgICBjb2x1bW5PcmRlci5wdXNoKGNvbHVtbi5maWVsZHx8Y29sdW1uLmtleSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzdGF0ZS5jb2x1bW5PcmRlciA9IGNvbHVtbk9yZGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbHVtbk9yZGVyKCkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IHN0YXRlU3RyaW5nID0gc3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RhdGVLZXkpO1xuICAgICAgICBpZiAoc3RhdGVTdHJpbmcpIHtcbiAgICAgICAgICAgIGxldCBzdGF0ZTogVGFibGVTdGF0ZSA9IEpTT04ucGFyc2Uoc3RhdGVTdHJpbmcpO1xuICAgICAgICAgICAgbGV0IGNvbHVtbk9yZGVyID0gc3RhdGUuY29sdW1uT3JkZXI7XG4gICAgICAgICAgICBpZiAoY29sdW1uT3JkZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVvcmRlcmVkQ29sdW1ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbHVtbk9yZGVyLm1hcChrZXkgPT4gcmVvcmRlcmVkQ29sdW1ucy5wdXNoKHRoaXMuZmluZENvbHVtbkJ5S2V5KGtleSkpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbk9yZGVyU3RhdGVSZXN0b3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gcmVvcmRlcmVkQ29sdW1ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRDb2x1bW5CeUtleShrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1ucykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sIG9mIHRoaXMuY29sdW1ucykge1xuICAgICAgICAgICAgICAgIGlmIChjb2wua2V5ID09PSBrZXkgfHwgY29sLmZpZWxkID09PSBrZXkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5lZGl0aW5nQ2VsbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBudWxsO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdbcFRhYmxlQm9keV0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZHQuZXhwYW5kZWRSb3dUZW1wbGF0ZSAmJiAhZHQudmlydHVhbFNjcm9sbFwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1yb3dEYXRhIGxldC1yb3dJbmRleD1cImluZGV4XCIgW25nRm9yT2ZdPVwiKGR0LnBhZ2luYXRvciAmJiAhZHQubGF6eSkgPyAoKGR0LmZpbHRlcmVkVmFsdWV8fGR0LnZhbHVlKSB8IHNsaWNlOmR0LmZpcnN0OihkdC5maXJzdCArIGR0LnJvd3MpKSA6IChkdC5maWx0ZXJlZFZhbHVlfHxkdC52YWx1ZSlcIiBbbmdGb3JUcmFja0J5XT1cImR0LnJvd1RyYWNrQnlcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IHJvd0RhdGEsIHJvd0luZGV4OiBkdC5wYWdpbmF0b3IgPyAoZHQuZmlyc3QgKyByb3dJbmRleCkgOiByb3dJbmRleCwgY29sdW1uczogY29sdW1ucywgZWRpdGluZzogKGR0LmVkaXRNb2RlID09PSAncm93JyAmJiBkdC5pc1Jvd0VkaXRpbmcocm93RGF0YSkpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZHQuZXhwYW5kZWRSb3dUZW1wbGF0ZSAmJiBkdC52aXJ0dWFsU2Nyb2xsXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgY2RrVmlydHVhbEZvciBsZXQtcm93RGF0YSBsZXQtcm93SW5kZXg9XCJpbmRleFwiIFtjZGtWaXJ0dWFsRm9yT2ZdPVwiZHQuZmlsdGVyZWRWYWx1ZXx8ZHQudmFsdWVcIiBbY2RrVmlydHVhbEZvclRyYWNrQnldPVwiZHQucm93VHJhY2tCeVwiIFtjZGtWaXJ0dWFsRm9yVGVtcGxhdGVDYWNoZVNpemVdPVwiMFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyb3dEYXRhID8gdGVtcGxhdGU6IGR0LmxvYWRpbmdCb2R5VGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IHJvd0RhdGEsIHJvd0luZGV4OiBkdC5wYWdpbmF0b3IgPyAoZHQuZmlyc3QgKyByb3dJbmRleCkgOiByb3dJbmRleCwgY29sdW1uczogY29sdW1ucywgZWRpdGluZzogKGR0LmVkaXRNb2RlID09PSAncm93JyAmJiBkdC5pc1Jvd0VkaXRpbmcocm93RGF0YSkpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkdC5leHBhbmRlZFJvd1RlbXBsYXRlXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXJvd0RhdGEgbGV0LXJvd0luZGV4PVwiaW5kZXhcIiBbbmdGb3JPZl09XCIoZHQucGFnaW5hdG9yICYmICFkdC5sYXp5KSA/ICgoZHQuZmlsdGVyZWRWYWx1ZXx8ZHQudmFsdWUpIHwgc2xpY2U6ZHQuZmlyc3Q6KGR0LmZpcnN0ICsgZHQucm93cykpIDogKGR0LmZpbHRlcmVkVmFsdWV8fGR0LnZhbHVlKVwiIFtuZ0ZvclRyYWNrQnldPVwiZHQucm93VHJhY2tCeVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogcm93RGF0YSwgcm93SW5kZXg6IGR0LnBhZ2luYXRvciA/IChkdC5maXJzdCArIHJvd0luZGV4KSA6IHJvd0luZGV4LCBjb2x1bW5zOiBjb2x1bW5zLCBleHBhbmRlZDogZHQuaXNSb3dFeHBhbmRlZChyb3dEYXRhKSwgZWRpdGluZzogKGR0LmVkaXRNb2RlID09PSAncm93JyAmJiBkdC5pc1Jvd0VkaXRpbmcocm93RGF0YSkpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkdC5pc1Jvd0V4cGFuZGVkKHJvd0RhdGEpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkdC5leHBhbmRlZFJvd1RlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiByb3dEYXRhLCByb3dJbmRleDogZHQucGFnaW5hdG9yID8gKGR0LmZpcnN0ICsgcm93SW5kZXgpIDogcm93SW5kZXgsIGNvbHVtbnM6IGNvbHVtbnN9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImR0LmxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkdC5sb2FkaW5nQm9keVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBjb2x1bW5zLCBmcm96ZW46IGZyb3plbn1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkdC5pc0VtcHR5KCkgJiYgIWR0LmxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkdC5lbXB0eU1lc3NhZ2VUZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogY29sdW1ucywgZnJvemVuOiBmcm96ZW59XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVCb2R5IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dChcInBUYWJsZUJvZHlcIikgY29sdW1uczogYW55W107XG5cbiAgICBASW5wdXQoXCJwVGFibGVCb2R5VGVtcGxhdGVcIikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBASW5wdXQoKSBmcm96ZW46IGJvb2xlYW47XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkdDogVGFibGUsIHB1YmxpYyB0YWJsZVNlcnZpY2U6IFRhYmxlU2VydmljZSwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZHQudGFibGVTZXJ2aWNlLnZhbHVlU291cmNlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHQudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1twU2Nyb2xsYWJsZVZpZXddJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNzY3JvbGxIZWFkZXIgY2xhc3M9XCJwLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiAjc2Nyb2xsSGVhZGVyQm94IGNsYXNzPVwicC1kYXRhdGFibGUtc2Nyb2xsYWJsZS1oZWFkZXItYm94XCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwicC1kYXRhdGFibGUtc2Nyb2xsYWJsZS1oZWFkZXItdGFibGVcIiBbbmdDbGFzc109XCJkdC50YWJsZVN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJkdC50YWJsZVN0eWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmcm96ZW4gPyBkdC5mcm96ZW5Db2xHcm91cFRlbXBsYXRlfHxkdC5jb2xHcm91cFRlbXBsYXRlIDogZHQuY29sR3JvdXBUZW1wbGF0ZTsgY29udGV4dCB7JGltcGxpY2l0OiBjb2x1bW5zfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJwLWRhdGF0YWJsZS10aGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZyb3plbiA/IGR0LmZyb3plbkhlYWRlclRlbXBsYXRlfHxkdC5oZWFkZXJUZW1wbGF0ZSA6IGR0LmhlYWRlclRlbXBsYXRlOyBjb250ZXh0IHskaW1wbGljaXQ6IGNvbHVtbnN9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInAtZGF0YXRhYmxlLXRib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXJvd0RhdGEgbGV0LXJvd0luZGV4PVwiaW5kZXhcIiBbbmdGb3JPZl09XCJkdC5mcm96ZW5WYWx1ZVwiIFtuZ0ZvclRyYWNrQnldPVwiZHQucm93VHJhY2tCeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkdC5mcm96ZW5Sb3dzVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IHJvd0RhdGEsIHJvd0luZGV4OiByb3dJbmRleCwgY29sdW1uczogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFkdC52aXJ0dWFsU2Nyb2xsOyBlbHNlIHZpcnR1YWxTY3JvbGxUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPGRpdiAjc2Nyb2xsQm9keSBjbGFzcz1cInAtZGF0YXRhYmxlLXNjcm9sbGFibGUtYm9keVwiIFtuZ1N0eWxlXT1cInsnbWF4LWhlaWdodCc6IGR0LnNjcm9sbEhlaWdodCAhPT0gJ2ZsZXgnID8gc2Nyb2xsSGVpZ2h0IDogdW5kZWZpbmVkLCAnb3ZlcmZsb3cteSc6ICFmcm96ZW4gJiYgZHQuc2Nyb2xsSGVpZ2h0ID8gJ3Njcm9sbCcgOiB1bmRlZmluZWR9XCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlICNzY3JvbGxUYWJsZSBbY2xhc3NdPVwiZHQudGFibGVTdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwiZHQudGFibGVTdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZnJvemVuID8gZHQuZnJvemVuQ29sR3JvdXBUZW1wbGF0ZXx8ZHQuY29sR3JvdXBUZW1wbGF0ZSA6IGR0LmNvbEdyb3VwVGVtcGxhdGU7IGNvbnRleHQgeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwicC1kYXRhdGFibGUtdGJvZHlcIiBbcFRhYmxlQm9keV09XCJjb2x1bW5zXCIgW3BUYWJsZUJvZHlUZW1wbGF0ZV09XCJmcm96ZW4gPyBkdC5mcm96ZW5Cb2R5VGVtcGxhdGV8fGR0LmJvZHlUZW1wbGF0ZSA6IGR0LmJvZHlUZW1wbGF0ZVwiIFtmcm96ZW5dPVwiZnJvemVuXCI+PC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDxkaXYgI3Njcm9sbGFibGVBbGlnbmVyIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFwiICpuZ0lmPVwiZnJvemVuXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdmlydHVhbFNjcm9sbFRlbXBsYXRlPlxuICAgICAgICAgICAgPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBbaXRlbVNpemVdPVwiZHQudmlydHVhbFJvd0hlaWdodFwiIFtzdHlsZS5oZWlnaHRdPVwiZHQuc2Nyb2xsSGVpZ2h0ICE9PSAnZmxleCcgPyBzY3JvbGxIZWlnaHQgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICBbbWluQnVmZmVyUHhdPVwiZHQubWluQnVmZmVyUHhcIiBbbWF4QnVmZmVyUHhdPVwiZHQubWF4QnVmZmVyUHhcIiAoc2Nyb2xsZWRJbmRleENoYW5nZSk9XCJvblNjcm9sbEluZGV4Q2hhbmdlKCRldmVudClcIiBjbGFzcz1cInAtZGF0YXRhYmxlLXZpcnR1YWwtc2Nyb2xsYWJsZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlICNzY3JvbGxUYWJsZSBbY2xhc3NdPVwiZHQudGFibGVTdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwiZHQudGFibGVTdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZnJvemVuID8gZHQuZnJvemVuQ29sR3JvdXBUZW1wbGF0ZXx8ZHQuY29sR3JvdXBUZW1wbGF0ZSA6IGR0LmNvbEdyb3VwVGVtcGxhdGU7IGNvbnRleHQgeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwicC1kYXRhdGFibGUtdGJvZHlcIiBbcFRhYmxlQm9keV09XCJjb2x1bW5zXCIgW3BUYWJsZUJvZHlUZW1wbGF0ZV09XCJmcm96ZW4gPyBkdC5mcm96ZW5Cb2R5VGVtcGxhdGV8fGR0LmJvZHlUZW1wbGF0ZSA6IGR0LmJvZHlUZW1wbGF0ZVwiIFtmcm96ZW5dPVwiZnJvemVuXCI+PC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDxkaXYgI3Njcm9sbGFibGVBbGlnbmVyIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFwiICpuZ0lmPVwiZnJvemVuXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiAjc2Nyb2xsRm9vdGVyIGNsYXNzPVwicC1kYXRhdGFibGUtc2Nyb2xsYWJsZS1mb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgI3Njcm9sbEZvb3RlckJveCBjbGFzcz1cInAtZGF0YXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyLWJveFwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInAtZGF0YXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyLXRhYmxlXCIgW25nQ2xhc3NdPVwiZHQudGFibGVTdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwiZHQudGFibGVTdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZnJvemVuID8gZHQuZnJvemVuQ29sR3JvdXBUZW1wbGF0ZXx8ZHQuY29sR3JvdXBUZW1wbGF0ZSA6IGR0LmNvbEdyb3VwVGVtcGxhdGU7IGNvbnRleHQgeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHRmb290IGNsYXNzPVwicC1kYXRhdGFibGUtdGZvb3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmcm96ZW4gPyBkdC5mcm96ZW5Gb290ZXJUZW1wbGF0ZXx8ZHQuZm9vdGVyVGVtcGxhdGUgOiBkdC5mb290ZXJUZW1wbGF0ZTsgY29udGV4dCB7JGltcGxpY2l0OiBjb2x1bW5zfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxhYmxlVmlldyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsT25EZXN0cm95IHtcblxuICAgIEBJbnB1dChcInBTY3JvbGxhYmxlVmlld1wiKSBjb2x1bW5zOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIGZyb3plbjogYm9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEhlYWRlcicpIHNjcm9sbEhlYWRlclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEhlYWRlckJveCcpIHNjcm9sbEhlYWRlckJveFZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEJvZHknKSBzY3JvbGxCb2R5Vmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsVGFibGUnKSBzY3JvbGxUYWJsZVZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEZvb3RlcicpIHNjcm9sbEZvb3RlclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEZvb3RlckJveCcpIHNjcm9sbEZvb3RlckJveFZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGVBbGlnbmVyJykgc2Nyb2xsYWJsZUFsaWduZXJWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCkgdmlydHVhbFNjcm9sbEJvZHk6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcblxuICAgIGhlYWRlclNjcm9sbExpc3RlbmVyOiBhbnk7XG5cbiAgICBib2R5U2Nyb2xsTGlzdGVuZXI6IGFueTtcblxuICAgIGZvb3RlclNjcm9sbExpc3RlbmVyOiBhbnk7XG5cbiAgICBmcm96ZW5TaWJsaW5nQm9keTogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBwcmV2ZW50Qm9keVNjcm9sbFByb3BhZ2F0aW9uOiBib29sZWFuO1xuXG4gICAgbG9hZGVkUGFnZXM6IG51bWJlcltdID0gW107XG5cbiAgICBfc2Nyb2xsSGVpZ2h0OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBnZXQgc2Nyb2xsSGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICAgIHNldCBzY3JvbGxIZWlnaHQodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdmFsO1xuICAgICAgICBpZiAodmFsICE9IG51bGwgJiYgKHZhbC5pbmNsdWRlcygnJScpIHx8IHZhbC5pbmNsdWRlcygnY2FsYycpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BlcmNlbnRhZ2Ugc2Nyb2xsIGhlaWdodCBjYWxjdWxhdGlvbiBpcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBtb3JlIHBlcmZvcm1hbnQgQ1NTIGJhc2VkIGZsZXggbW9kZSwgdXNlIHNjcm9sbEhlaWdodD1cImZsZXhcIiBpbnN0ZWFkLicpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kdC52aXJ0dWFsU2Nyb2xsICYmIHRoaXMudmlydHVhbFNjcm9sbEJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbEJvZHkuY2hlY2tWaWV3cG9ydFNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkdDogVGFibGUsIHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHpvbmU6IE5nWm9uZSkge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZyb3plbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHQuZnJvemVuQ29sdW1ucyB8fCB0aGlzLmR0LmZyb3plbkJvZHlUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1kYXRhdGFibGUtdW5mcm96ZW4tdmlldycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZnJvemVuVmlldyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKGZyb3plblZpZXcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kdC52aXJ0dWFsU2Nyb2xsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plblNpYmxpbmdCb2R5ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKGZyb3plblZpZXcsICcucC1kYXRhdGFibGUtdmlydHVhbC1zY3JvbGxhYmxlLWJvZHknKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuU2libGluZ0JvZHkgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoZnJvemVuVmlldywgJy5wLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNjcm9sbEJhcldpZHRoID0gRG9tSGFuZGxlci5jYWxjdWxhdGVTY3JvbGxiYXJXaWR0aCgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIZWFkZXJCb3hWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxCYXJXaWR0aCArICdweCc7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbEZvb3RlckJveFZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEZvb3RlckJveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxGb290ZXJCb3hWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxCYXJXaWR0aCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxhYmxlQWxpZ25lclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbGFibGVBbGlnbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGFibGVBbGlnbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gRG9tSGFuZGxlci5jYWxjdWxhdGVTY3JvbGxiYXJIZWlnaHQoKSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkICYmIHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclNjcm9sbExpc3RlbmVyID0gdGhpcy5vbkhlYWRlclNjcm9sbC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oZWFkZXJTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb290ZXJTY3JvbGxMaXN0ZW5lciA9IHRoaXMub25Gb290ZXJTY3JvbGwuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZm9vdGVyU2Nyb2xsTGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZnJvemVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5U2Nyb2xsTGlzdGVuZXIgPSB0aGlzLm9uQm9keVNjcm9sbC5iaW5kKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHQudmlydHVhbFNjcm9sbClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsQm9keS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmJvZHlTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEJvZHlWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmJvZHlTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkICYmIHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oZWFkZXJTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmZvb3RlclNjcm9sbExpc3RlbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEJvZHlWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuYm9keVNjcm9sbExpc3RlbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGxCb2R5ICYmIHRoaXMudmlydHVhbFNjcm9sbEJvZHkuZ2V0RWxlbWVudFJlZigpKSB7XG4gICAgICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGxCb2R5LmdldEVsZW1lbnRSZWYoKS5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuYm9keVNjcm9sbExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGVhZGVyU2Nyb2xsKCkge1xuICAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2ZW50Qm9keVNjcm9sbFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkZvb3RlclNjcm9sbCgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsRm9vdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgdGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkICYmIHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZlbnRCb2R5U2Nyb2xsUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uQm9keVNjcm9sbChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wcmV2ZW50Qm9keVNjcm9sbFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnRCb2R5U2Nyb2xsUHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhlYWRlclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEhlYWRlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhlYWRlckJveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAtMSAqIGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEZvb3RlckJveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAtMSAqIGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZyb3plblNpYmxpbmdCb2R5KSB7XG4gICAgICAgICAgICB0aGlzLmZyb3plblNpYmxpbmdCb2R5LnNjcm9sbFRvcCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNjcm9sbEluZGV4Q2hhbmdlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZHQubGF6eSkge1xuICAgICAgICAgICAgbGV0IHBhZ2VSYW5nZSA9IHRoaXMuY3JlYXRlUGFnZVJhbmdlKE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLmR0LnJvd3MpKTtcbiAgICAgICAgICAgIHBhZ2VSYW5nZS5mb3JFYWNoKHBhZ2UgPT4gdGhpcy5sb2FkUGFnZShwYWdlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVQYWdlUmFuZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCByYW5nZTogbnVtYmVyW10gPSBbXTtcblxuICAgICAgICBpZiAocGFnZSAhPT0gMCkge1xuICAgICAgICAgICAgcmFuZ2UucHVzaChwYWdlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmFuZ2UucHVzaChwYWdlKTtcbiAgICAgICAgaWYgKHBhZ2UgIT09ICh0aGlzLmdldFBhZ2VDb3VudCgpIC0gMSkpIHtcbiAgICAgICAgICAgIHJhbmdlLnB1c2gocGFnZSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH1cblxuICAgIGxvYWRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGVkUGFnZXMuaW5jbHVkZXMocGFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZHQub25MYXp5TG9hZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBmaXJzdDogdGhpcy5kdC5yb3dzICogcGFnZSxcbiAgICAgICAgICAgICAgICByb3dzOiB0aGlzLmR0LnJvd3MsXG4gICAgICAgICAgICAgICAgc29ydEZpZWxkOiB0aGlzLmR0LnNvcnRGaWVsZCxcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXI6IHRoaXMuZHQuc29ydE9yZGVyLFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IHRoaXMuZHQuZmlsdGVycyxcbiAgICAgICAgICAgICAgICBnbG9iYWxGaWx0ZXI6IHRoaXMuZHQuZmlsdGVycyAmJiB0aGlzLmR0LmZpbHRlcnNbJ2dsb2JhbCddID8gdGhpcy5kdC5maWx0ZXJzWydnbG9iYWwnXS52YWx1ZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbXVsdGlTb3J0TWV0YTogdGhpcy5kdC5tdWx0aVNvcnRNZXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkUGFnZXMucHVzaChwYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMubG9hZGVkUGFnZXMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRQYWdlQ291bnQoKSB7XG4gICAgICAgIGxldCBkYXRhVG9SZW5kZXIgPSB0aGlzLmR0LmZpbHRlcmVkVmFsdWUgfHwgdGhpcy5kdC52YWx1ZTtcbiAgICAgICAgbGV0IGRhdGFMZW5ndGggPSBkYXRhVG9SZW5kZXIgPyBkYXRhVG9SZW5kZXIubGVuZ3RoOiAwO1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKGRhdGFMZW5ndGggLyB0aGlzLmR0LnJvd3MpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvVmlydHVhbEluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbEJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbEJvZHkuc2Nyb2xsVG9JbmRleChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUbyhvcHRpb25zKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGxCb2R5KSB7XG4gICAgICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGxCb2R5LnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEJvZHlWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gb3B0aW9ucy5sZWZ0O1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IG9wdGlvbnMudG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuZnJvemVuU2libGluZ0JvZHkgPSBudWxsO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcFNvcnRhYmxlQ29sdW1uXScsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnAtc29ydGFibGUtY29sdW1uXSc6ICdpc0VuYWJsZWQoKScsXG4gICAgICAgICdbY2xhc3MucC1oaWdobGlnaHRdJzogJ3NvcnRlZCcsXG4gICAgICAgICdbYXR0ci50YWJpbmRleF0nOiAnaXNFbmFibGVkKCkgPyBcIjBcIiA6IG51bGwnLFxuICAgICAgICAnW2F0dHIucm9sZV0nOiAnXCJjb2x1bW5oZWFkZXJcIicsXG4gICAgICAgICdbYXR0ci5hcmlhLXNvcnRdJzogJ3NvcnRPcmRlcidcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlQ29sdW1uIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KFwicFNvcnRhYmxlQ29sdW1uXCIpIGZpZWxkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBwU29ydGFibGVDb2x1bW5EaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIHNvcnRlZDogYm9vbGVhbjtcblxuICAgIHNvcnRPcmRlcjogc3RyaW5nO1xuXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZHQ6IFRhYmxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZHQudGFibGVTZXJ2aWNlLnNvcnRTb3VyY2UkLnN1YnNjcmliZShzb3J0TWV0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0U3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnRTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU29ydFN0YXRlKCkge1xuICAgICAgICB0aGlzLnNvcnRlZCA9IHRoaXMuZHQuaXNTb3J0ZWQodGhpcy5maWVsZCk7XG4gICAgICAgIHRoaXMuc29ydE9yZGVyID0gdGhpcy5zb3J0ZWQgPyAodGhpcy5kdC5zb3J0T3JkZXIgPT09IDEgPyAnYXNjZW5kaW5nJyA6ICdkZXNjZW5kaW5nJykgOiAnbm9uZSc7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU29ydFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmR0LnNvcnQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgRG9tSGFuZGxlci5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbnRlcicsIFsnJGV2ZW50J10pXG4gICAgb25FbnRlcktleShldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLm9uQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucFNvcnRhYmxlQ29sdW1uRGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1zb3J0SWNvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGkgY2xhc3M9XCJwLXNvcnRhYmxlLWNvbHVtbi1pY29uIHBpIHBpLWZ3XCIgW25nQ2xhc3NdPVwieydwaS1zb3J0LWFtb3VudC11cC1hbHQnOiBzb3J0T3JkZXIgPT09IDEsICdwaS1zb3J0LWFtb3VudC1kb3duJzogc29ydE9yZGVyID09PSAtMSwgJ3BpLXNvcnQtYWx0Jzogc29ydE9yZGVyID09PSAwfVwiPjwvaT5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU29ydEljb24gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBmaWVsZDogc3RyaW5nO1xuXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBzb3J0T3JkZXI6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkdDogVGFibGUsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmR0LnRhYmxlU2VydmljZS5zb3J0U291cmNlJC5zdWJzY3JpYmUoc29ydE1ldGEgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0U3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU29ydFN0YXRlKCk7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU29ydFN0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5kdC5zb3J0TW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydE9yZGVyID0gdGhpcy5kdC5pc1NvcnRlZCh0aGlzLmZpZWxkKSA/IHRoaXMuZHQuc29ydE9yZGVyIDogMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmR0LnNvcnRNb2RlID09PSAnbXVsdGlwbGUnKSB7XG4gICAgICAgICAgICBsZXQgc29ydE1ldGEgPSB0aGlzLmR0LmdldFNvcnRNZXRhKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5zb3J0T3JkZXIgPSBzb3J0TWV0YSA/IHNvcnRNZXRhLm9yZGVyOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twU2VsZWN0YWJsZVJvd10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLXNlbGVjdGFibGUtcm93XSc6ICdpc0VuYWJsZWQoKScsXG4gICAgICAgICdbY2xhc3MucC1oaWdobGlnaHRdJzogJ3NlbGVjdGVkJyxcbiAgICAgICAgJ1thdHRyLnRhYmluZGV4XSc6ICdpc0VuYWJsZWQoKSA/IDAgOiB1bmRlZmluZWQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RhYmxlUm93IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KFwicFNlbGVjdGFibGVSb3dcIikgZGF0YTogYW55O1xuXG4gICAgQElucHV0KFwicFNlbGVjdGFibGVSb3dJbmRleFwiKSBpbmRleDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgcFNlbGVjdGFibGVSb3dEaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xuXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZHQ6IFRhYmxlLCBwdWJsaWMgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5kdC50YWJsZVNlcnZpY2Uuc2VsZWN0aW9uU291cmNlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmR0LmlzU2VsZWN0ZWQodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kdC5pc1NlbGVjdGVkKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZHQuaGFuZGxlUm93Q2xpY2soe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHJvd0RhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICByb3dJbmRleDogdGhpcy5pbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaGVuZCcsIFsnJGV2ZW50J10pXG4gICAgb25Ub3VjaEVuZChldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZHQuaGFuZGxlUm93VG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2Rvd24nLCBbJyRldmVudCddKVxuICAgIG9uQXJyb3dEb3duS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdyA9IDxIVE1MVGFibGVSb3dFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG5leHRSb3cgPSB0aGlzLmZpbmROZXh0U2VsZWN0YWJsZVJvdyhyb3cpO1xuXG4gICAgICAgIGlmIChuZXh0Um93KSB7XG4gICAgICAgICAgICBuZXh0Um93LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3d1cCcsIFsnJGV2ZW50J10pXG4gICAgb25BcnJvd1VwS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdyA9IDxIVE1MVGFibGVSb3dFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IHByZXZSb3cgPSB0aGlzLmZpbmRQcmV2U2VsZWN0YWJsZVJvdyhyb3cpO1xuXG4gICAgICAgIGlmIChwcmV2Um93KSB7XG4gICAgICAgICAgICBwcmV2Um93LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc2hpZnQuZW50ZXInLCBbJyRldmVudCddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24ubWV0YS5lbnRlcicsIFsnJGV2ZW50J10pXG4gICAgb25FbnRlcktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmR0LmhhbmRsZVJvd0NsaWNrKHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgcm93RGF0YTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgcm93SW5kZXg6IHRoaXMuaW5kZXhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZE5leHRTZWxlY3RhYmxlUm93KHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCk6IEhUTUxUYWJsZVJvd0VsZW1lbnQge1xuICAgICAgICBsZXQgbmV4dFJvdyA9IDxIVE1MVGFibGVSb3dFbGVtZW50PiByb3cubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBpZiAobmV4dFJvdykge1xuICAgICAgICAgICAgaWYgKERvbUhhbmRsZXIuaGFzQ2xhc3MobmV4dFJvdywgJ3Atc2VsZWN0YWJsZS1yb3cnKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFJvdztcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kTmV4dFNlbGVjdGFibGVSb3cobmV4dFJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRQcmV2U2VsZWN0YWJsZVJvdyhyb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQpOiBIVE1MVGFibGVSb3dFbGVtZW50IHtcbiAgICAgICAgbGV0IHByZXZSb3cgPSA8SFRNTFRhYmxlUm93RWxlbWVudD4gcm93LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmIChwcmV2Um93KSB7XG4gICAgICAgICAgICBpZiAoRG9tSGFuZGxlci5oYXNDbGFzcyhwcmV2Um93LCAncC1zZWxlY3RhYmxlLXJvdycpKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2Um93O1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRQcmV2U2VsZWN0YWJsZVJvdyhwcmV2Um93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wU2VsZWN0YWJsZVJvd0Rpc2FibGVkICE9PSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcFNlbGVjdGFibGVSb3dEYmxDbGlja10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLXNlbGVjdGFibGUtcm93XSc6ICdpc0VuYWJsZWQoKScsXG4gICAgICAgICdbY2xhc3MucC1oaWdobGlnaHRdJzogJ3NlbGVjdGVkJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0YWJsZVJvd0RibENsaWNrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KFwicFNlbGVjdGFibGVSb3dEYmxDbGlja1wiKSBkYXRhOiBhbnk7XG5cbiAgICBASW5wdXQoXCJwU2VsZWN0YWJsZVJvd0luZGV4XCIpIGluZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBwU2VsZWN0YWJsZVJvd0Rpc2FibGVkOiBib29sZWFuO1xuXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkdDogVGFibGUsIHB1YmxpYyB0YWJsZVNlcnZpY2U6IFRhYmxlU2VydmljZSkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmR0LnRhYmxlU2VydmljZS5zZWxlY3Rpb25Tb3VyY2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZHQuaXNTZWxlY3RlZCh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmR0LmlzU2VsZWN0ZWQodGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5kdC5oYW5kbGVSb3dDbGljayh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgcm93RGF0YTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgICAgIHJvd0luZGV4OiB0aGlzLmluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucFNlbGVjdGFibGVSb3dEaXNhYmxlZCAhPT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BDb250ZXh0TWVudVJvd10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLWhpZ2hsaWdodC1jb250ZXh0bWVudV0nOiAnc2VsZWN0ZWQnLFxuICAgICAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2lzRW5hYmxlZCgpID8gMCA6IHVuZGVmaW5lZCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51Um93IHtcblxuICAgIEBJbnB1dChcInBDb250ZXh0TWVudVJvd1wiKSBkYXRhOiBhbnk7XG5cbiAgICBASW5wdXQoXCJwQ29udGV4dE1lbnVSb3dJbmRleFwiKSBpbmRleDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgcENvbnRleHRNZW51Um93RGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGR0OiBUYWJsZSwgcHVibGljIHRhYmxlU2VydmljZTogVGFibGVTZXJ2aWNlLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZHQudGFibGVTZXJ2aWNlLmNvbnRleHRNZW51U291cmNlJC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kdC5lcXVhbHModGhpcy5kYXRhLCBkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICAgIG9uQ29udGV4dE1lbnUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmR0LmhhbmRsZVJvd1JpZ2h0Q2xpY2soe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHJvd0RhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICByb3dJbmRleDogdGhpcy5pbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucENvbnRleHRNZW51Um93RGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twUm93VG9nZ2xlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFJvd1RvZ2dsZXIge1xuXG4gICAgQElucHV0KCdwUm93VG9nZ2xlcicpIGRhdGE6IGFueTtcblxuICAgIEBJbnB1dCgpIHBSb3dUb2dnbGVyRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZHQ6IFRhYmxlKSB7IH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5kdC50b2dnbGVSb3codGhpcy5kYXRhLCBldmVudCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wUm93VG9nZ2xlckRpc2FibGVkICE9PSB0cnVlO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcFJlc2l6YWJsZUNvbHVtbl0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6YWJsZUNvbHVtbiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBwUmVzaXphYmxlQ29sdW1uRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICByZXNpemVyOiBIVE1MU3BhbkVsZW1lbnQ7XG5cbiAgICByZXNpemVyTW91c2VEb3duTGlzdGVuZXI6IGFueTtcblxuICAgIGRvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXI6IGFueTtcblxuICAgIGRvY3VtZW50TW91c2VVcExpc3RlbmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZHQ6IFRhYmxlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdwLXJlc2l6YWJsZS1jb2x1bW4nKTtcbiAgICAgICAgICAgIHRoaXMucmVzaXplciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmVzaXplci5jbGFzc05hbWUgPSAncC1jb2x1bW4tcmVzaXplcic7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZXNpemVyKTtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZXJNb3VzZURvd25MaXN0ZW5lciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZXNpemVyTW91c2VEb3duTGlzdGVuZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIgPSB0aGlzLm9uRG9jdW1lbnRNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwTGlzdGVuZXIgPSB0aGlzLm9uRG9jdW1lbnRNb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kb2N1bWVudE1vdXNlVXBMaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuYmluZERvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50TW91c2VVcExpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kb2N1bWVudE1vdXNlVXBMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TW91c2VVcExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5kdC5vbkNvbHVtblJlc2l6ZUJlZ2luKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRvY3VtZW50TW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuZHQub25Db2x1bW5SZXNpemUoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uRG9jdW1lbnRNb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuZHQub25Db2x1bW5SZXNpemVFbmQoZXZlbnQsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBSZXNpemFibGVDb2x1bW5EaXNhYmxlZCAhPT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzaXplck1vdXNlRG93bkxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZXNpemVyTW91c2VEb3duTGlzdGVuZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudEV2ZW50cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcFJlb3JkZXJhYmxlQ29sdW1uXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVvcmRlcmFibGVDb2x1bW4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgcFJlb3JkZXJhYmxlQ29sdW1uRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBkcmFnU3RhcnRMaXN0ZW5lcjogYW55O1xuXG4gICAgZHJhZ092ZXJMaXN0ZW5lcjogYW55O1xuXG4gICAgZHJhZ0VudGVyTGlzdGVuZXI6IGFueTtcblxuICAgIGRyYWdMZWF2ZUxpc3RlbmVyOiBhbnk7XG5cbiAgICBtb3VzZURvd25MaXN0ZW5lcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGR0OiBUYWJsZSwgcHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duTGlzdGVuZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25MaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0TGlzdGVuZXIgPSB0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRMaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJMaXN0ZW5lciA9IHRoaXMub25EcmFnRW50ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXJMaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ0VudGVyTGlzdGVuZXIgPSB0aGlzLm9uRHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXJMaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlTGlzdGVuZXIgPSB0aGlzLm9uRHJhZ0xlYXZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVMaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmFnT3Zlckxpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXJMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRyYWdPdmVyTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VudGVyTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuZHJhZ0VudGVyTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5kcmFnRW50ZXJMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmFnRW50ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXJMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRyYWdFbnRlckxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRyYWdMZWF2ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBldmVudC50YXJnZXQubm9kZU5hbWUgPT09ICdURVhUQVJFQScgfHwgRG9tSGFuZGxlci5oYXNDbGFzcyhldmVudC50YXJnZXQsICdwLWNvbHVtbi1yZXNpemVyJykpXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZHQub25Db2x1bW5EcmFnU3RhcnQoZXZlbnQsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgb25EcmFnT3ZlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uRHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZHQub25Db2x1bW5EcmFnRW50ZXIoZXZlbnQsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5kdC5vbkNvbHVtbkRyYWdMZWF2ZShldmVudCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gICAgb25Ecm9wKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmR0Lm9uQ29sdW1uRHJvcChldmVudCwgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucFJlb3JkZXJhYmxlQ29sdW1uRGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BFZGl0YWJsZUNvbHVtbl0nXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRhYmxlQ29sdW1uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoXCJwRWRpdGFibGVDb2x1bW5cIikgZGF0YTogYW55O1xuXG4gICAgQElucHV0KFwicEVkaXRhYmxlQ29sdW1uRmllbGRcIikgZmllbGQ6IGFueTtcblxuICAgIEBJbnB1dChcInBFZGl0YWJsZUNvbHVtblJvd0luZGV4XCIpIHJvd0luZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBwRWRpdGFibGVDb2x1bW5EaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHBGb2N1c0NlbGxTZWxlY3Rvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGR0OiBUYWJsZSwgcHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdwLWVkaXRhYmxlLWNvbHVtbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZHQuZWRpdGluZ0NlbGxDbGljayA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmR0LmVkaXRpbmdDZWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHQuZWRpdGluZ0NlbGwgIT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZHQuaXNFZGl0aW5nQ2VsbFZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0aW5nQ2VsbCh0cnVlLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNlbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5DZWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuQ2VsbCgpIHtcbiAgICAgICAgdGhpcy5kdC51cGRhdGVFZGl0aW5nQ2VsbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZGF0YSwgdGhpcy5maWVsZCwgdGhpcy5yb3dJbmRleCk7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1jZWxsLWVkaXRpbmcnKTtcbiAgICAgICAgdGhpcy5kdC5vbkVkaXRJbml0LmVtaXQoe2ZpZWxkOiB0aGlzLmZpZWxkLCBkYXRhOiB0aGlzLmRhdGEsIGluZGV4OiB0aGlzLnJvd0luZGV4fSk7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZm9jdXNDZWxsU2VsZWN0b3IgPSB0aGlzLnBGb2N1c0NlbGxTZWxlY3RvciB8fCAnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnO1xuICAgICAgICAgICAgICAgIGxldCBmb2N1c2FibGVFbGVtZW50ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgZm9jdXNDZWxsU2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VFZGl0aW5nQ2VsbChjb21wbGV0ZWQsIGV2ZW50KSB7XG4gICAgICAgIGlmIChjb21wbGV0ZWQpXG4gICAgICAgICAgICB0aGlzLmR0Lm9uRWRpdENvbXBsZXRlLmVtaXQoe2ZpZWxkOiB0aGlzLmR0LmVkaXRpbmdDZWxsRmllbGQsIGRhdGE6IHRoaXMuZHQuZWRpdGluZ0NlbGxEYXRhLCBvcmlnaW5hbEV2ZW50OiBldmVudCwgaW5kZXg6IHRoaXMucm93SW5kZXh9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5kdC5vbkVkaXRDYW5jZWwuZW1pdCh7ZmllbGQ6IHRoaXMuZHQuZWRpdGluZ0NlbGxGaWVsZCwgZGF0YTogdGhpcy5kdC5lZGl0aW5nQ2VsbERhdGEsIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBpbmRleDogdGhpcy5yb3dJbmRleH0pO1xuXG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5kdC5lZGl0aW5nQ2VsbCwgJ3AtY2VsbC1lZGl0aW5nJyk7XG4gICAgICAgIHRoaXMuZHQuZWRpdGluZ0NlbGwgPSBudWxsO1xuICAgICAgICB0aGlzLmR0LmVkaXRpbmdDZWxsRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuZHQuZWRpdGluZ0NlbGxGaWVsZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZHQudW5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSlcbiAgICBvbkVudGVyS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHQuaXNFZGl0aW5nQ2VsbFZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdGluZ0NlbGwodHJ1ZSwgZXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxuICAgIG9uRXNjYXBlS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHQuaXNFZGl0aW5nQ2VsbFZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdGluZ0NlbGwoZmFsc2UsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24udGFiJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNoaWZ0LnRhYicsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5tZXRhLnRhYicsIFsnJGV2ZW50J10pXG4gICAgb25TaGlmdEtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSlcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1ByZXZpb3VzQ2VsbChldmVudCk7XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvTmV4dENlbGwoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZENlbGwoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgd2hpbGUgKGNlbGwgJiYgIURvbUhhbmRsZXIuaGFzQ2xhc3MoY2VsbCwgJ3AtY2VsbC1lZGl0aW5nJykpIHtcbiAgICAgICAgICAgICAgICBjZWxsID0gY2VsbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVRvUHJldmlvdXNDZWxsKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50Q2VsbCA9IHRoaXMuZmluZENlbGwoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgaWYgKGN1cnJlbnRDZWxsKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q2VsbCA9IHRoaXMuZmluZFByZXZpb3VzRWRpdGFibGVDb2x1bW4oY3VycmVudENlbGwpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Q2VsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmR0LmlzRWRpdGluZ0NlbGxWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0aW5nQ2VsbCh0cnVlLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5pbnZva2VFbGVtZW50TWV0aG9kKGV2ZW50LnRhcmdldCwgJ2JsdXInKTtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmludm9rZUVsZW1lbnRNZXRob2QodGFyZ2V0Q2VsbCwgJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVUb05leHRDZWxsKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50Q2VsbCA9IHRoaXMuZmluZENlbGwoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgaWYgKGN1cnJlbnRDZWxsKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q2VsbCA9IHRoaXMuZmluZE5leHRFZGl0YWJsZUNvbHVtbihjdXJyZW50Q2VsbCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRDZWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHQuaXNFZGl0aW5nQ2VsbFZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUVkaXRpbmdDZWxsKHRydWUsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmludm9rZUVsZW1lbnRNZXRob2QoZXZlbnQudGFyZ2V0LCAnYmx1cicpO1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0YXJnZXRDZWxsLCAnY2xpY2snKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFByZXZpb3VzRWRpdGFibGVDb2x1bW4oY2VsbDogRWxlbWVudCkge1xuICAgICAgICBsZXQgcHJldkNlbGwgPSBjZWxsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKCFwcmV2Q2VsbCkge1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzUm93ID0gY2VsbC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNSb3cpIHtcbiAgICAgICAgICAgICAgICBwcmV2Q2VsbCA9IHByZXZpb3VzUm93Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldkNlbGwpIHtcbiAgICAgICAgICAgIGlmIChEb21IYW5kbGVyLmhhc0NsYXNzKHByZXZDZWxsLCAncC1lZGl0YWJsZS1jb2x1bW4nKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldkNlbGw7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZFByZXZpb3VzRWRpdGFibGVDb2x1bW4ocHJldkNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kTmV4dEVkaXRhYmxlQ29sdW1uKGNlbGw6IEVsZW1lbnQpIHtcbiAgICAgICAgbGV0IG5leHRDZWxsID0gY2VsbC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKCFuZXh0Q2VsbCkge1xuICAgICAgICAgICAgbGV0IG5leHRSb3cgPSBjZWxsLnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKG5leHRSb3cpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbCA9IG5leHRSb3cuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dENlbGwpIHtcbiAgICAgICAgICAgIGlmIChEb21IYW5kbGVyLmhhc0NsYXNzKG5leHRDZWxsLCAncC1lZGl0YWJsZS1jb2x1bW4nKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dENlbGw7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZE5leHRFZGl0YWJsZUNvbHVtbihuZXh0Q2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucEVkaXRhYmxlQ29sdW1uRGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BFZGl0YWJsZVJvd10nXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRhYmxlUm93IHtcblxuICAgIEBJbnB1dChcInBFZGl0YWJsZVJvd1wiKSBkYXRhOiBhbnk7XG5cbiAgICBASW5wdXQoKSBwRWRpdGFibGVSb3dEaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge31cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucEVkaXRhYmxlUm93RGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BJbml0RWRpdGFibGVSb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBJbml0RWRpdGFibGVSb3cge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGR0OiBUYWJsZSwgcHVibGljIGVkaXRhYmxlUm93OiBFZGl0YWJsZVJvdykge31cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLmR0LmluaXRSb3dFZGl0KHRoaXMuZWRpdGFibGVSb3cuZGF0YSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BTYXZlRWRpdGFibGVSb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBTYXZlRWRpdGFibGVSb3cge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGR0OiBUYWJsZSwgcHVibGljIGVkaXRhYmxlUm93OiBFZGl0YWJsZVJvdykge31cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLmR0LnNhdmVSb3dFZGl0KHRoaXMuZWRpdGFibGVSb3cuZGF0YSwgdGhpcy5lZGl0YWJsZVJvdy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BDYW5jZWxFZGl0YWJsZVJvd10nXG59KVxuZXhwb3J0IGNsYXNzIENhbmNlbEVkaXRhYmxlUm93IHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkdDogVGFibGUsIHB1YmxpYyBlZGl0YWJsZVJvdzogRWRpdGFibGVSb3cpIHt9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5kdC5jYW5jZWxSb3dFZGl0KHRoaXMuZWRpdGFibGVSb3cuZGF0YSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtY2VsbEVkaXRvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRpbmdcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVkaXRpbmdcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJvdXRwdXRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICBgLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbEVkaXRvciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPjtcblxuICAgIGlucHV0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBvdXRwdXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkdDogVGFibGUsIEBPcHRpb25hbCgpIHB1YmxpYyBlZGl0YWJsZUNvbHVtbjogRWRpdGFibGVDb2x1bW4sIEBPcHRpb25hbCgpIHB1YmxpYyBlZGl0YWJsZVJvdzogRWRpdGFibGVSb3cpIHsgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ291dHB1dCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGVkaXRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5kdC5lZGl0aW5nQ2VsbCAmJiB0aGlzLmVkaXRhYmxlQ29sdW1uICYmIHRoaXMuZHQuZWRpdGluZ0NlbGwgPT09IHRoaXMuZWRpdGFibGVDb2x1bW4uZWwubmF0aXZlRWxlbWVudCkgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5lZGl0YWJsZVJvdyAmJiB0aGlzLmR0LmVkaXRNb2RlID09PSAncm93JyAmJiB0aGlzLmR0LmlzUm93RWRpdGluZyh0aGlzLmVkaXRhYmxlUm93LmRhdGEpKTtcbiAgICB9XG5cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRhYmxlUmFkaW9CdXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLXJhZGlvYnV0dG9uIHAtY29tcG9uZW50XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIFtjaGVja2VkXT1cImNoZWNrZWRcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgI2JveCBbbmdDbGFzc109XCJ7J3AtcmFkaW9idXR0b24tYm94IHAtY29tcG9uZW50Jzp0cnVlLFxuICAgICAgICAgICAgICAgICdwLWhpZ2hsaWdodCc6Y2hlY2tlZCwgJ3AtZGlzYWJsZWQnOmRpc2FibGVkfVwiIHJvbGU9XCJyYWRpb1wiIFthdHRyLmFyaWEtY2hlY2tlZF09XCJjaGVja2VkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcmFkaW9idXR0b24taWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVJhZGlvQnV0dG9uICB7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgICBAVmlld0NoaWxkKCdib3gnKSBib3hWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjaGVja2VkOiBib29sZWFuO1xuXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZHQ6IFRhYmxlLCBwdWJsaWMgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmR0LnRhYmxlU2VydmljZS5zZWxlY3Rpb25Tb3VyY2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmR0LmlzU2VsZWN0ZWQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5kdC5pc1NlbGVjdGVkKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5kdC50b2dnbGVSb3dXaXRoUmFkaW8oe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHJvd0luZGV4OiB0aGlzLmluZGV4XG4gICAgICAgICAgICB9LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBEb21IYW5kbGVyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLmJveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAncC1mb2N1cycpO1xuICAgIH1cblxuICAgIG9uQmx1cigpIHtcbiAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLmJveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAncC1mb2N1cycpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRhYmxlQ2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94IHAtY29tcG9uZW50XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIFtjaGVja2VkXT1cImNoZWNrZWRcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIFthdHRyLnJlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAjYm94IFtuZ0NsYXNzXT1cInsncC1jaGVja2JveC1ib3ggcC1jb21wb25lbnQnOnRydWUsXG4gICAgICAgICAgICAgICAgJ3AtaGlnaGxpZ2h0JzpjaGVja2VkLCAncC1kaXNhYmxlZCc6ZGlzYWJsZWR9XCIgcm9sZT1cImNoZWNrYm94XCIgW2F0dHIuYXJpYS1jaGVja2VkXT1cImNoZWNrZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2hlY2tib3gtaWNvblwiIFtuZ0NsYXNzXT1cInsncGkgcGktY2hlY2snOmNoZWNrZWR9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNoZWNrYm94ICB7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIEBWaWV3Q2hpbGQoJ2JveCcpIGJveFZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkdDogVGFibGUsIHB1YmxpYyB0YWJsZVNlcnZpY2U6IFRhYmxlU2VydmljZSwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZHQudGFibGVTZXJ2aWNlLnNlbGVjdGlvblNvdXJjZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZHQuaXNTZWxlY3RlZCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmR0LmlzU2VsZWN0ZWQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmR0LnRvZ2dsZVJvd1dpdGhDaGVja2JveCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgcm93SW5kZXg6IHRoaXMuaW5kZXhcbiAgICAgICAgICAgIH0sIHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIERvbUhhbmRsZXIuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKCkge1xuICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuYm94Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLWZvY3VzJyk7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuYm94Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLWZvY3VzJyk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdGFibGVIZWFkZXJDaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtY2hlY2tib3ggcC1jb21wb25lbnRcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjY2IgdHlwZT1cImNoZWNrYm94XCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIFtjaGVja2VkXT1cImNoZWNrZWRcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKClcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNib3ggW25nQ2xhc3NdPVwieydwLWNoZWNrYm94LWJveCc6dHJ1ZSxcbiAgICAgICAgICAgICAgICAncC1oaWdobGlnaHQnOmNoZWNrZWQsICdwLWRpc2FibGVkJzogaXNEaXNhYmxlZCgpfVwiIHJvbGU9XCJjaGVja2JveFwiIFthdHRyLmFyaWEtY2hlY2tlZF09XCJjaGVja2VkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWNoZWNrYm94LWljb25cIiBbbmdDbGFzc109XCJ7J3BpIHBpLWNoZWNrJzpjaGVja2VkfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXJDaGVja2JveCAge1xuXG4gICAgQFZpZXdDaGlsZCgnYm94JykgYm94Vmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgICBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIHZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZHQ6IFRhYmxlLCBwdWJsaWMgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZHQudGFibGVTZXJ2aWNlLnZhbHVlU291cmNlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy51cGRhdGVDaGVja2VkU3RhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmR0LnRhYmxlU2VydmljZS5zZWxlY3Rpb25Tb3VyY2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLnVwZGF0ZUNoZWNrZWRTdGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy51cGRhdGVDaGVja2VkU3RhdGUoKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmR0LnZhbHVlICYmIHRoaXMuZHQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHQudG9nZ2xlUm93c1dpdGhDaGVja2JveChldmVudCwgIXRoaXMuY2hlY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBEb21IYW5kbGVyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLmJveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAncC1mb2N1cycpO1xuICAgIH1cblxuICAgIG9uQmx1cigpIHtcbiAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLmJveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAncC1mb2N1cycpO1xuICAgIH1cblxuICAgIGlzRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmR0LnZhbHVlIHx8ICF0aGlzLmR0LnZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNoZWNrZWRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgICBpZiAodGhpcy5kdC5maWx0ZXJlZFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmR0LmZpbHRlcmVkVmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gKHZhbCAmJiB2YWwubGVuZ3RoID4gMCAmJiB0aGlzLmR0LnNlbGVjdGlvbiAmJiB0aGlzLmR0LnNlbGVjdGlvbi5sZW5ndGggPiAwICYmIHRoaXMuaXNBbGxGaWx0ZXJlZFZhbHVlc0NoZWNrZWQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmR0LnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuICh2YWwgJiYgdmFsLmxlbmd0aCA+IDAgJiYgdGhpcy5kdC5zZWxlY3Rpb24gJiYgdGhpcy5kdC5zZWxlY3Rpb24ubGVuZ3RoID4gMCAmJiB0aGlzLmR0LnNlbGVjdGlvbi5sZW5ndGggPT09IHZhbC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNBbGxGaWx0ZXJlZFZhbHVlc0NoZWNrZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5kdC5maWx0ZXJlZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCByb3dEYXRhIG9mIHRoaXMuZHQuZmlsdGVyZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kdC5pc1NlbGVjdGVkKHJvd0RhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twUmVvcmRlcmFibGVSb3dIYW5kbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZW9yZGVyYWJsZVJvd0hhbmRsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KFwicFJlb3JkZXJhYmxlUm93SGFuZGxlXCIpIGluZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1kYXRhdGFibGUtcmVvcmRlcmFibGVyb3ctaGFuZGxlJyk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twUmVvcmRlcmFibGVSb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBSZW9yZGVyYWJsZVJvdyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KFwicFJlb3JkZXJhYmxlUm93XCIpIGluZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBwUmVvcmRlcmFibGVSb3dEaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIG1vdXNlRG93bkxpc3RlbmVyOiBhbnk7XG5cbiAgICBkcmFnU3RhcnRMaXN0ZW5lcjogYW55O1xuXG4gICAgZHJhZ0VuZExpc3RlbmVyOiBhbnk7XG5cbiAgICBkcmFnT3Zlckxpc3RlbmVyOiBhbnk7XG5cbiAgICBkcmFnTGVhdmVMaXN0ZW5lcjogYW55O1xuXG4gICAgZHJvcExpc3RlbmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZHQ6IFRhYmxlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZHJvcHBhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duTGlzdGVuZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25MaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0TGlzdGVuZXIgPSB0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRMaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ0VuZExpc3RlbmVyID0gdGhpcy5vbkRyYWdFbmQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kTGlzdGVuZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdPdmVyTGlzdGVuZXIgPSB0aGlzLm9uRHJhZ092ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXJMaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlTGlzdGVuZXIgPSB0aGlzLm9uRHJhZ0xlYXZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVMaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmFnU3RhcnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRyYWdFbmRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuZHJhZ0VuZExpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VuZExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRyYWdPdmVyTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlckxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmFnTGVhdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRyYWdMZWF2ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChEb21IYW5kbGVyLmhhc0NsYXNzKGV2ZW50LnRhcmdldCwgJ3AtZGF0YXRhYmxlLXJlb3JkZXJhYmxlcm93LWhhbmRsZScpKVxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkRyYWdTdGFydChldmVudCkge1xuICAgICAgICB0aGlzLmR0Lm9uUm93RHJhZ1N0YXJ0KGV2ZW50LCB0aGlzLmluZGV4KTtcbiAgICB9XG5cbiAgICBvbkRyYWdFbmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5kdC5vblJvd0RyYWdFbmQoZXZlbnQpO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25EcmFnT3ZlcihldmVudCkge1xuICAgICAgICB0aGlzLmR0Lm9uUm93RHJhZ092ZXIoZXZlbnQsIHRoaXMuaW5kZXgsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5kdC5vblJvd0RyYWdMZWF2ZShldmVudCwgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBSZW9yZGVyYWJsZVJvd0Rpc2FibGVkICE9PSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICAgIG9uRHJvcChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSAmJiB0aGlzLmR0LnJvd0RyYWdnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmR0Lm9uUm93RHJvcChldmVudCwgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxQYWdpbmF0b3JNb2R1bGUsU2Nyb2xsaW5nTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbVGFibGUsU2hhcmVkTW9kdWxlLFNvcnRhYmxlQ29sdW1uLFNlbGVjdGFibGVSb3csUm93VG9nZ2xlcixDb250ZXh0TWVudVJvdyxSZXNpemFibGVDb2x1bW4sUmVvcmRlcmFibGVDb2x1bW4sRWRpdGFibGVDb2x1bW4sQ2VsbEVkaXRvcixTb3J0SWNvbixUYWJsZVJhZGlvQnV0dG9uLFRhYmxlQ2hlY2tib3gsVGFibGVIZWFkZXJDaGVja2JveCxSZW9yZGVyYWJsZVJvd0hhbmRsZSxSZW9yZGVyYWJsZVJvdyxTZWxlY3RhYmxlUm93RGJsQ2xpY2ssRWRpdGFibGVSb3csSW5pdEVkaXRhYmxlUm93LFNhdmVFZGl0YWJsZVJvdyxDYW5jZWxFZGl0YWJsZVJvdyxTY3JvbGxpbmdNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1RhYmxlLFNvcnRhYmxlQ29sdW1uLFNlbGVjdGFibGVSb3csUm93VG9nZ2xlcixDb250ZXh0TWVudVJvdyxSZXNpemFibGVDb2x1bW4sUmVvcmRlcmFibGVDb2x1bW4sRWRpdGFibGVDb2x1bW4sQ2VsbEVkaXRvcixUYWJsZUJvZHksU2Nyb2xsYWJsZVZpZXcsU29ydEljb24sVGFibGVSYWRpb0J1dHRvbixUYWJsZUNoZWNrYm94LFRhYmxlSGVhZGVyQ2hlY2tib3gsUmVvcmRlcmFibGVSb3dIYW5kbGUsUmVvcmRlcmFibGVSb3csU2VsZWN0YWJsZVJvd0RibENsaWNrLEVkaXRhYmxlUm93LEluaXRFZGl0YWJsZVJvdyxTYXZlRWRpdGFibGVSb3csQ2FuY2VsRWRpdGFibGVSb3ddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHsgfVxuIl19