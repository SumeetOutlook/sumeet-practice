import { NgModule, HostListener, Injectable, Directive, Component, Input, Output, EventEmitter, ContentChildren, ElementRef, NgZone, ViewChild, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { DomHandler } from 'primeng/dom';
import { PaginatorModule } from 'primeng/paginator';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { ObjectUtils } from 'primeng/utils';
import { FilterUtils } from 'primeng/utils';
import { RippleModule } from 'primeng/ripple';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/paginator';
import * as ɵngcc3 from '@angular/cdk/scrolling';
import * as ɵngcc4 from 'primeng/ripple';

const _c0 = ["container"];
const _c1 = ["resizeHelper"];
const _c2 = ["reorderIndicatorUp"];
const _c3 = ["reorderIndicatorDown"];
const _c4 = ["table"];
const _c5 = ["scrollableView"];
const _c6 = ["scrollableFrozenView"];
function TreeTable_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵelement(2, "i");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap("p-treetable-loading-icon pi-spin " + ctx_r1.loadingIcon);
} }
function TreeTable_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTable_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtemplate(1, TreeTable_div_3_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.captionTemplate);
} }
function TreeTable_p_paginator_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 16);
    ɵngcc0.ɵɵlistener("onPageChange", function TreeTable_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onPageChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r3.rows)("first", ctx_r3.first)("totalRecords", ctx_r3.totalRecords)("pageLinkSize", ctx_r3.pageLinks)("alwaysShow", ctx_r3.alwaysShowPaginator)("rowsPerPageOptions", ctx_r3.rowsPerPageOptions)("templateLeft", ctx_r3.paginatorLeftTemplate)("templateRight", ctx_r3.paginatorRightTemplate)("dropdownAppendTo", ctx_r3.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r3.currentPageReportTemplate)("showCurrentPageReport", ctx_r3.showCurrentPageReport)("showJumpToPageDropdown", ctx_r3.showJumpToPageDropdown)("showPageLinks", ctx_r3.showPageLinks);
} }
function TreeTable_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTable_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTable_div_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c7 = function (a0) { return { $implicit: a0 }; };
function TreeTable_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵelementStart(1, "table", 18, 19);
    ɵngcc0.ɵɵtemplate(3, TreeTable_div_5_ng_container_3_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementStart(4, "thead", 21);
    ɵngcc0.ɵɵtemplate(5, TreeTable_div_5_ng_container_5_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(6, "tbody", 22);
    ɵngcc0.ɵɵelementStart(7, "tfoot", 23);
    ɵngcc0.ɵɵtemplate(8, TreeTable_div_5_ng_container_8_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r4.tableStyleClass)("ngStyle", ctx_r4.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(10, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.headerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(12, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTreeTableBody", ctx_r4.columns)("pTreeTableBodyTemplate", ctx_r4.bodyTemplate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(14, _c7, ctx_r4.columns));
} }
const _c8 = function (a0) { return { width: a0 }; };
function TreeTable_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 28, 29);
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ttScrollableView", ctx_r18.frozenColumns)("frozen", true)("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c8, ctx_r18.frozenWidth))("scrollHeight", ctx_r18.scrollHeight);
} }
const _c9 = function (a0, a1) { return { left: a0, width: a1 }; };
function TreeTable_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, TreeTable_div_6_div_1_Template, 2, 6, "div", 25);
    ɵngcc0.ɵɵelement(2, "div", 26, 27);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.frozenColumns || ctx_r5.frozenBodyTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ttScrollableView", ctx_r5.columns)("frozen", false)("scrollHeight", ctx_r5.scrollHeight)("ngStyle", ɵngcc0.ɵɵpureFunction2(5, _c9, ctx_r5.frozenWidth, "calc(100% - " + ctx_r5.frozenWidth + ")"));
} }
function TreeTable_p_paginator_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 30);
    ɵngcc0.ɵɵlistener("onPageChange", function TreeTable_p_paginator_7_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onPageChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r6.rows)("first", ctx_r6.first)("totalRecords", ctx_r6.totalRecords)("pageLinkSize", ctx_r6.pageLinks)("alwaysShow", ctx_r6.alwaysShowPaginator)("rowsPerPageOptions", ctx_r6.rowsPerPageOptions)("templateLeft", ctx_r6.paginatorLeftTemplate)("templateRight", ctx_r6.paginatorRightTemplate)("dropdownAppendTo", ctx_r6.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r6.currentPageReportTemplate)("showCurrentPageReport", ctx_r6.showCurrentPageReport)("showJumpToPageDropdown", ctx_r6.showJumpToPageDropdown)("showPageLinks", ctx_r6.showPageLinks);
} }
function TreeTable_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTable_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 31);
    ɵngcc0.ɵɵtemplate(1, TreeTable_div_8_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.summaryTemplate);
} }
function TreeTable_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 32, 33);
} }
function TreeTable_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 34, 35);
} }
function TreeTable_span_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 36, 37);
} }
const _c10 = function (a1, a2, a3, a4, a5) { return { "p-treetable p-component": true, "p-treetable-hoverable-rows": a1, "p-treetable-auto-layout": a2, "p-treetable-resizable": a3, "p-treetable-resizable-fit": a4, "p-treetable-flex-scrollable": a5 }; };
const _c11 = ["pTreeTableBody", ""];
function TTBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c12 = function (a0, a1, a2, a3) { return { $implicit: a0, node: a1, rowData: a2, columns: a3 }; };
function TTBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const serializedNode_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction4(2, _c12, serializedNode_r4, serializedNode_r4.node, serializedNode_r4.node.data, ctx_r6.columns));
} }
function TTBody_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TTBody_ng_container_0_ng_template_1_ng_container_0_Template, 2, 7, "ng-container", 0);
} if (rf & 2) {
    const serializedNode_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", serializedNode_r4.visible);
} }
function TTBody_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_0_ng_template_1_Template, 1, 1, "ng-template", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.tt.serializedValue)("ngForTrackBy", ctx_r0.tt.rowTrackBy);
} }
function TTBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const serializedNode_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r12 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r12.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction4(2, _c12, serializedNode_r10, serializedNode_r10.node, serializedNode_r10.node.data, ctx_r12.columns));
} }
function TTBody_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TTBody_ng_container_1_ng_template_1_ng_container_0_Template, 2, 7, "ng-container", 0);
} if (rf & 2) {
    const serializedNode_r10 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", serializedNode_r10.visible);
} }
function TTBody_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_1_ng_template_1_Template, 1, 1, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r1.tt.serializedValue)("cdkVirtualForTrackBy", ctx_r1.tt.rowTrackBy)("cdkVirtualForTemplateCacheSize", 0);
} }
function TTBody_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTBody_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.tt.emptyMessageTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c7, ctx_r2.columns));
} }
const _c13 = ["scrollHeader"];
const _c14 = ["scrollHeaderBox"];
const _c15 = ["scrollBody"];
const _c16 = ["scrollTable"];
const _c17 = ["loadingTable"];
const _c18 = ["scrollFooter"];
const _c19 = ["scrollFooterBox"];
const _c20 = ["scrollableAligner"];
const _c21 = ["ttScrollableView", ""];
function TTScrollableView_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_ng_container_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_ng_container_8_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 16, 17);
} }
const _c22 = function (a0, a1) { return { "max-height": a0, "overflow-y": a1 }; };
function TTScrollableView_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 10, 11);
    ɵngcc0.ɵɵelementStart(3, "table", 12, 13);
    ɵngcc0.ɵɵtemplate(5, TTScrollableView_ng_container_8_ng_container_5_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelement(6, "tbody", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, TTScrollableView_ng_container_8_div_7_Template, 2, 0, "div", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(10, _c22, ctx_r4.tt.scrollHeight !== "flex" ? ctx_r4.scrollHeight : undefined, !ctx_r4.frozen && ctx_r4.tt.scrollHeight ? "scroll" : undefined));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap(ctx_r4.tt.tableStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r4.tt.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.frozen ? ctx_r4.tt.frozenColGroupTemplate || ctx_r4.tt.colGroupTemplate : ctx_r4.tt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(13, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTreeTableBody", ctx_r4.columns)("pTreeTableBodyTemplate", ctx_r4.frozen ? ctx_r4.tt.frozenBodyTemplate || ctx_r4.tt.bodyTemplate : ctx_r4.tt.bodyTemplate)("frozen", ctx_r4.frozen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.frozen);
} }
function TTScrollableView_ng_template_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_ng_template_9_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 16, 17);
} }
function TTScrollableView_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 18);
    ɵngcc0.ɵɵelementStart(1, "table", 12, 13);
    ɵngcc0.ɵɵtemplate(3, TTScrollableView_ng_template_9_ng_container_3_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelement(4, "tbody", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, TTScrollableView_ng_template_9_div_5_Template, 2, 0, "div", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r6.tt.scrollHeight !== "flex" ? ctx_r6.scrollHeight : undefined);
    ɵngcc0.ɵɵproperty("itemSize", ctx_r6.tt.virtualRowHeight)("minBufferPx", ctx_r6.tt.minBufferPx)("maxBufferPx", ctx_r6.tt.maxBufferPx);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r6.tt.tableStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r6.tt.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.frozen ? ctx_r6.tt.frozenColGroupTemplate || ctx_r6.tt.colGroupTemplate : ctx_r6.tt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(14, _c7, ctx_r6.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTreeTableBody", ctx_r6.columns)("pTreeTableBodyTemplate", ctx_r6.frozen ? ctx_r6.tt.frozenBodyTemplate || ctx_r6.tt.bodyTemplate : ctx_r6.tt.bodyTemplate)("frozen", ctx_r6.frozen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.frozen);
} }
function TTScrollableView_div_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_div_11_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19, 20);
    ɵngcc0.ɵɵelementStart(2, "div", 21, 22);
    ɵngcc0.ɵɵelementStart(4, "table", 23);
    ɵngcc0.ɵɵtemplate(5, TTScrollableView_div_11_ng_container_5_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementStart(6, "tfoot", 24);
    ɵngcc0.ɵɵtemplate(7, TTScrollableView_div_11_ng_container_7_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r7.tt.tableStyleClass)("ngStyle", ctx_r7.tt.tableStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.frozen ? ctx_r7.tt.frozenColGroupTemplate || ctx_r7.tt.colGroupTemplate : ctx_r7.tt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(6, _c7, ctx_r7.columns));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.frozen ? ctx_r7.tt.frozenFooterTemplate || ctx_r7.tt.footerTemplate : ctx_r7.tt.footerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(8, _c7, ctx_r7.columns));
} }
const _c23 = function (a0, a1, a2) { return { "pi-sort-amount-up-alt": a0, "pi-sort-amount-down": a1, "pi-sort-alt": a2 }; };
const _c24 = ["box"];
const _c25 = function (a1, a2) { return { "p-checkbox-box": true, "p-highlight": a1, "p-disabled": a2 }; };
const _c26 = function (a0, a1) { return { "pi-check": a0, "pi-minus": a1 }; };
const _c27 = function (a0) { return { "pi pi-check": a0 }; };
function TreeTableCellEditor_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTableCellEditor_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TreeTableCellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.inputTemplate);
} }
function TreeTableCellEditor_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTableCellEditor_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TreeTableCellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.outputTemplate);
} }
export class TreeTableService {
    constructor() {
        this.sortSource = new Subject();
        this.selectionSource = new Subject();
        this.contextMenuSource = new Subject();
        this.uiUpdateSource = new Subject();
        this.totalRecordsSource = new Subject();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.uiUpdateSource$ = this.uiUpdateSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
    }
    onSort(sortMeta) {
        this.sortSource.next(sortMeta);
    }
    onSelectionChange() {
        this.selectionSource.next();
    }
    onContextMenu(node) {
        this.contextMenuSource.next(node);
    }
    onUIUpdate(value) {
        this.uiUpdateSource.next(value);
    }
    onTotalRecordsChange(value) {
        this.totalRecordsSource.next(value);
    }
}
TreeTableService.ɵfac = function TreeTableService_Factory(t) { return new (t || TreeTableService)(); };
TreeTableService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TreeTableService, factory: TreeTableService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTableService, [{
        type: Injectable
    }], function () { return []; }, null); })();
export class TreeTable {
    constructor(el, zone, tableService) {
        this.el = el;
        this.zone = zone;
        this.tableService = tableService;
        this.lazy = false;
        this.lazyLoadOnInit = true;
        this.first = 0;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.showPageLinks = true;
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new EventEmitter();
        this.contextMenuSelectionChange = new EventEmitter();
        this.contextMenuSelectionMode = "separate";
        this.compareSelectionBy = 'deepEquals';
        this.loadingIcon = 'pi pi-spinner';
        this.showLoader = true;
        this.virtualScrollDelay = 150;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';
        this.rowTrackBy = (index, item) => item;
        this.filters = {};
        this.filterDelay = 300;
        this.filterMode = 'lenient';
        this.onFilter = new EventEmitter();
        this.onNodeExpand = new EventEmitter();
        this.onNodeCollapse = new EventEmitter();
        this.onPage = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onLazyLoad = new EventEmitter();
        this.sortFunction = new EventEmitter();
        this.onColResize = new EventEmitter();
        this.onColReorder = new EventEmitter();
        this.onNodeSelect = new EventEmitter();
        this.onNodeUnselect = new EventEmitter();
        this.onContextMenuSelect = new EventEmitter();
        this.onHeaderCheckboxToggle = new EventEmitter();
        this.onEditInit = new EventEmitter();
        this.onEditComplete = new EventEmitter();
        this.onEditCancel = new EventEmitter();
        this._value = [];
        this._totalRecords = 0;
        this._sortOrder = 1;
        this.selectionKeys = {};
    }
    ngOnInit() {
        if (this.lazy && this.lazyLoadOnInit) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
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
                case 'emptymessage':
                    this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    this.paginatorRightTemplate = item.template;
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
            }
        });
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.value) {
            this._value = simpleChange.value.currentValue;
            if (!this.lazy) {
                this.totalRecords = (this._value ? this._value.length : 0);
                if (this.sortMode == 'single' && this.sortField)
                    this.sortSingle();
                else if (this.sortMode == 'multiple' && this.multiSortMeta)
                    this.sortMultiple();
                else if (this.hasFilter()) //sort already filters
                    this._filter();
            }
            this.updateSerializedValue();
            this.tableService.onUIUpdate(this.value);
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
    updateSerializedValue() {
        this.serializedValue = [];
        if (this.paginator)
            this.serializePageNodes();
        else
            this.serializeNodes(null, this.filteredNodes || this.value, 0, true);
    }
    serializeNodes(parent, nodes, level, visible) {
        if (nodes && nodes.length) {
            for (let node of nodes) {
                node.parent = parent;
                const rowNode = {
                    node: node,
                    parent: parent,
                    level: level,
                    visible: visible && (parent ? parent.expanded : true)
                };
                this.serializedValue.push(rowNode);
                if (rowNode.visible && node.expanded) {
                    this.serializeNodes(node, node.children, level + 1, rowNode.visible);
                }
            }
        }
    }
    serializePageNodes() {
        let data = this.filteredNodes || this.value;
        this.serializedValue = [];
        if (data && data.length) {
            const first = this.lazy ? 0 : this.first;
            for (let i = first; i < (first + this.rows); i++) {
                let node = data[i];
                if (node) {
                    this.serializedValue.push({
                        node: node,
                        parent: null,
                        level: 0,
                        visible: true
                    });
                    this.serializeNodes(node, node.children, 1, true);
                }
            }
        }
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
                for (let node of this._selection) {
                    this.selectionKeys[String(ObjectUtils.resolveFieldData(node.data, this.dataKey))] = 1;
                }
            }
            else {
                this.selectionKeys[String(ObjectUtils.resolveFieldData(this._selection.data, this.dataKey))] = 1;
            }
        }
    }
    onPageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy)
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        else
            this.serializePageNodes();
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
        this.tableService.onUIUpdate(this.value);
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
            if (this.resetPageOnSort && this.scrollable) {
                this.resetScrollTop();
            }
        }
        if (this.sortMode === 'multiple') {
            let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            let sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
                if (!metaKey) {
                    this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                    if (this.resetPageOnSort && this.scrollable) {
                        this.resetScrollTop();
                    }
                }
                else {
                    sortMeta.order = sortMeta.order * -1;
                }
            }
            else {
                if (!metaKey || !this.multiSortMeta) {
                    this._multiSortMeta = [];
                    if (this.resetPageOnSort && this.scrollable) {
                        this.resetScrollTop();
                    }
                }
                this.multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
            }
            this.sortMultiple();
        }
    }
    sortSingle() {
        if (this.sortField && this.sortOrder) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                this.sortNodes(this.value);
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
            this.updateSerializedValue();
        }
    }
    sortNodes(nodes) {
        if (!nodes || nodes.length === 0) {
            return;
        }
        if (this.customSort) {
            this.sortFunction.emit({
                data: nodes,
                mode: this.sortMode,
                field: this.sortField,
                order: this.sortOrder
            });
        }
        else {
            nodes.sort((node1, node2) => {
                let value1 = ObjectUtils.resolveFieldData(node1.data, this.sortField);
                let value2 = ObjectUtils.resolveFieldData(node2.data, this.sortField);
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return (this.sortOrder * result);
            });
        }
        for (let node of nodes) {
            this.sortNodes(node.children);
        }
    }
    sortMultiple() {
        if (this.multiSortMeta) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                this.sortMultipleNodes(this.value);
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            this.onSort.emit({
                multisortmeta: this.multiSortMeta
            });
            this.updateSerializedValue();
            this.tableService.onSort(this.multiSortMeta);
        }
    }
    sortMultipleNodes(nodes) {
        if (!nodes || nodes.length === 0) {
            return;
        }
        if (this.customSort) {
            this.sortFunction.emit({
                data: this.value,
                mode: this.sortMode,
                multiSortMeta: this.multiSortMeta
            });
        }
        else {
            nodes.sort((node1, node2) => {
                return this.multisortField(node1, node2, this.multiSortMeta, 0);
            });
        }
        for (let node of nodes) {
            this.sortMultipleNodes(node.children);
        }
    }
    multisortField(node1, node2, multiSortMeta, index) {
        let value1 = ObjectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
        let value2 = ObjectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);
        let result = null;
        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(node1, node2, multiSortMeta, index + 1)) : 0;
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
    isEmpty() {
        let data = this.filteredNodes || this.value;
        return data == null || data.length == 0;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onColumnResizeBegin(event) {
        let containerLeft = DomHandler.getOffset(this.containerViewChild.nativeElement).left;
        this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
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
        let newColumnWidth = columnWidth + delta;
        let minWidth = column.style.minWidth || 15;
        if (columnWidth + delta > parseInt(minWidth)) {
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
                            let scrollableBodyTable = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table');
                            let scrollableHeaderTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
                            let scrollableFooterTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
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
                if (this.scrollable) {
                    let scrollableView = this.findParentScrollableView(column);
                    let scrollableBody = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body');
                    let scrollableHeader = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-header');
                    let scrollableFooter = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-footer');
                    let scrollableBodyTable = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table');
                    let scrollableHeaderTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
                    let scrollableFooterTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
                    scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
                    scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    if (scrollableFooterTable) {
                        scrollableFooterTable.style.width = scrollableFooterTable.offsetWidth + delta + 'px';
                    }
                    let resizeColumnIndex = DomHandler.index(column);
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
                    this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
                }
                else {
                    this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                    column.style.width = newColumnWidth + 'px';
                    let containerWidth = this.tableViewChild.nativeElement.style.width;
                    this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                }
            }
            this.onColResize.emit({
                element: column,
                delta: delta
            });
        }
        this.resizeHelperViewChild.nativeElement.style.display = 'none';
        DomHandler.removeClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
    }
    findParentScrollableView(column) {
        if (column) {
            let parent = column.parentElement;
            while (parent && !DomHandler.hasClass(parent, 'p-treetable-scrollable-view')) {
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
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
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
            let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, 'ttreorderablecolumn');
            let dropIndex = DomHandler.indexWithinGroup(dropColumn, 'ttreorderablecolumn');
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
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    }
    handleRowClick(event) {
        let targetNode = event.originalEvent.target.nodeName;
        if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || (DomHandler.hasClass(event.originalEvent.target, 'p-clickable'))) {
            return;
        }
        if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            let rowNode = event.rowNode;
            let selected = this.isSelected(rowNode.node);
            let metaSelection = this.rowTouched ? false : this.metaKeySelection;
            let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowNode.node.data, this.dataKey)) : null;
            if (metaSelection) {
                let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                if (selected && metaKey) {
                    if (this.isSingleSelectionMode()) {
                        this._selection = null;
                        this.selectionKeys = {};
                        this.selectionChange.emit(null);
                    }
                    else {
                        let selectionIndex = this.findIndexInSelection(rowNode.node);
                        this._selection = this.selection.filter((val, i) => i != selectionIndex);
                        this.selectionChange.emit(this.selection);
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                    this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        this._selection = rowNode.node;
                        this.selectionChange.emit(rowNode.node);
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
                        this._selection = [...this.selection, rowNode.node];
                        this.selectionChange.emit(this.selection);
                        if (dataKeyValue) {
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                    this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                }
            }
            else {
                if (this.selectionMode === 'single') {
                    if (selected) {
                        this._selection = null;
                        this.selectionKeys = {};
                        this.selectionChange.emit(this.selection);
                        this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                    }
                    else {
                        this._selection = rowNode.node;
                        this.selectionChange.emit(this.selection);
                        this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                        if (dataKeyValue) {
                            this.selectionKeys = {};
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                }
                else if (this.selectionMode === 'multiple') {
                    if (selected) {
                        let selectionIndex = this.findIndexInSelection(rowNode.node);
                        this._selection = this.selection.filter((val, i) => i != selectionIndex);
                        this.selectionChange.emit(this.selection);
                        this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                    else {
                        this._selection = this.selection ? [...this.selection, rowNode.node] : [rowNode.node];
                        this.selectionChange.emit(this.selection);
                        this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                        if (dataKeyValue) {
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                }
            }
            this.tableService.onSelectionChange();
        }
        this.rowTouched = false;
    }
    handleRowTouchEnd(event) {
        this.rowTouched = true;
    }
    handleRowRightClick(event) {
        if (this.contextMenu) {
            const node = event.rowNode.node;
            if (this.contextMenuSelectionMode === 'separate') {
                this.contextMenuSelection = node;
                this.contextMenuSelectionChange.emit(node);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, node: node });
                this.contextMenu.show(event.originalEvent);
                this.tableService.onContextMenu(node);
            }
            else if (this.contextMenuSelectionMode === 'joint') {
                this.preventSelectionSetterPropagation = true;
                let selected = this.isSelected(node);
                let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
                if (!selected) {
                    if (this.isSingleSelectionMode()) {
                        this.selection = node;
                        this.selectionChange.emit(node);
                    }
                    else if (this.isMultipleSelectionMode()) {
                        this.selection = [node];
                        this.selectionChange.emit(this.selection);
                    }
                    if (dataKeyValue) {
                        this.selectionKeys[dataKeyValue] = 1;
                    }
                }
                this.contextMenu.show(event.originalEvent);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, node: node });
            }
        }
    }
    toggleNodeWithCheckbox(event) {
        this.selection = this.selection || [];
        this.preventSelectionSetterPropagation = true;
        let node = event.rowNode.node;
        let selected = this.isSelected(node);
        if (selected) {
            this.propagateSelectionDown(node, false);
            if (event.rowNode.parent) {
                this.propagateSelectionUp(node.parent, false);
            }
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({ originalEvent: event, node: node });
        }
        else {
            this.propagateSelectionDown(node, true);
            if (event.rowNode.parent) {
                this.propagateSelectionUp(node.parent, true);
            }
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({ originalEvent: event, node: node });
        }
        this.tableService.onSelectionChange();
    }
    toggleNodesWithCheckbox(event, check) {
        let data = this.filteredNodes || this.value;
        this._selection = check && data ? data.slice() : [];
        if (check) {
            if (data && data.length) {
                for (let node of data) {
                    this.propagateSelectionDown(node, true);
                }
            }
        }
        else {
            this._selection = [];
            this.selectionKeys = {};
        }
        this.preventSelectionSetterPropagation = true;
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
    }
    propagateSelectionUp(node, select) {
        if (node.children && node.children.length) {
            let selectedChildCount = 0;
            let childPartialSelected = false;
            let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
            for (let child of node.children) {
                if (this.isSelected(child))
                    selectedChildCount++;
                else if (child.partialSelected)
                    childPartialSelected = true;
            }
            if (select && selectedChildCount == node.children.length) {
                this._selection = [...this.selection || [], node];
                node.partialSelected = false;
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
            }
            else {
                if (!select) {
                    let index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this._selection = this.selection.filter((val, i) => i != index);
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                }
                if (childPartialSelected || selectedChildCount > 0 && selectedChildCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        let parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    }
    propagateSelectionDown(node, select) {
        let index = this.findIndexInSelection(node);
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
        if (select && index == -1) {
            this._selection = [...this.selection || [], node];
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
        }
        else if (!select && index > -1) {
            this._selection = this.selection.filter((val, i) => i != index);
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (let child of node.children) {
                this.propagateSelectionDown(child, select);
            }
        }
    }
    isSelected(node) {
        if (node && this.selection) {
            if (this.dataKey) {
                return this.selectionKeys[ObjectUtils.resolveFieldData(node.data, this.dataKey)] !== undefined;
            }
            else {
                if (this.selection instanceof Array)
                    return this.findIndexInSelection(node) > -1;
                else
                    return this.equals(node, this.selection);
            }
        }
        return false;
    }
    findIndexInSelection(node) {
        let index = -1;
        if (this.selection && this.selection.length) {
            for (let i = 0; i < this.selection.length; i++) {
                if (this.equals(node, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    isSingleSelectionMode() {
        return this.selectionMode === 'single';
    }
    isMultipleSelectionMode() {
        return this.selectionMode === 'multiple';
    }
    equals(node1, node2) {
        return this.compareSelectionBy === 'equals' ? (node1 === node2) : ObjectUtils.equals(node1.data, node2.data, this.dataKey);
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
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            if (!this.value) {
                return;
            }
            if (!this.hasFilter()) {
                this.filteredNodes = null;
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
                this.filteredNodes = [];
                const isStrictMode = this.filterMode === 'strict';
                let isValueChanged = false;
                for (let node of this.value) {
                    let copyNode = Object.assign({}, node);
                    let localMatch = true;
                    let globalMatch = false;
                    let paramsWithoutNode;
                    for (let prop in this.filters) {
                        if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                            let filterMeta = this.filters[prop];
                            let filterField = prop;
                            let filterValue = filterMeta.value;
                            let filterMatchMode = filterMeta.matchMode || 'startsWith';
                            let filterConstraint = FilterUtils[filterMatchMode];
                            paramsWithoutNode = { filterField, filterValue, filterConstraint, isStrictMode };
                            if ((isStrictMode && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode))) ||
                                (!isStrictMode && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode)))) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                    }
                    if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                        for (let j = 0; j < globalFilterFieldsArray.length; j++) {
                            let copyNodeForGlobal = Object.assign({}, copyNode);
                            let filterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                            let filterValue = this.filters['global'].value;
                            let filterConstraint = FilterUtils[this.filters['global'].matchMode];
                            paramsWithoutNode = { filterField, filterValue, filterConstraint, isStrictMode };
                            if ((isStrictMode && (this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode))) ||
                                (!isStrictMode && (this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode)))) {
                                globalMatch = true;
                                copyNode = copyNodeForGlobal;
                            }
                        }
                    }
                    let matches = localMatch;
                    if (this.filters['global']) {
                        matches = localMatch && globalMatch;
                    }
                    if (matches) {
                        this.filteredNodes.push(copyNode);
                    }
                    isValueChanged = isValueChanged || !localMatch || globalMatch || (localMatch && this.filteredNodes.length > 0) || (!globalMatch && this.filteredNodes.length === 0);
                }
                if (!isValueChanged) {
                    this.filteredNodes = null;
                }
                if (this.paginator) {
                    this.totalRecords = this.filteredNodes ? this.filteredNodes.length : this.value ? this.value.length : 0;
                }
            }
        }
        this.first = 0;
        const filteredValue = this.filteredNodes || this.value;
        this.onFilter.emit({
            filters: this.filters,
            filteredValue: filteredValue
        });
        this.tableService.onUIUpdate(filteredValue);
        this.updateSerializedValue();
        if (this.scrollable) {
            this.resetScrollTop();
        }
    }
    findFilteredNodes(node, paramsWithoutNode) {
        if (node) {
            let matched = false;
            if (node.children) {
                let childNodes = [...node.children];
                node.children = [];
                for (let childNode of childNodes) {
                    let copyChildNode = Object.assign({}, childNode);
                    if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                        matched = true;
                        node.children.push(copyChildNode);
                    }
                }
            }
            if (matched) {
                return true;
            }
        }
    }
    isFilterMatched(node, { filterField, filterValue, filterConstraint, isStrictMode }) {
        let matched = false;
        let dataFieldValue = ObjectUtils.resolveFieldData(node.data, filterField);
        if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
            matched = true;
        }
        if (!matched || (isStrictMode && !this.isNodeLeaf(node))) {
            matched = this.findFilteredNodes(node, { filterField, filterValue, filterConstraint, isStrictMode }) || matched;
        }
        return matched;
    }
    isNodeLeaf(node) {
        return node.leaf === false ? false : !(node.children && node.children.length);
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
    reset() {
        this._sortField = null;
        this._sortOrder = 1;
        this._multiSortMeta = null;
        this.tableService.onSort(null);
        this.filteredNodes = null;
        this.filters = {};
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.totalRecords = (this._value ? this._value.length : 0);
        }
    }
    updateEditingCell(cell) {
        this.editingCell = cell;
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
                    this.unbindDocumentEditListener();
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
    ngOnDestroy() {
        this.unbindDocumentEditListener();
        this.editingCell = null;
        this.initialized = null;
    }
}
TreeTable.ɵfac = function TreeTable_Factory(t) { return new (t || TreeTable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(TreeTableService)); };
TreeTable.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeTable, selectors: [["p-treeTable"]], contentQueries: function TreeTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function TreeTable_Query(rf, ctx) { if (rf & 1) {
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
    } }, inputs: { lazy: "lazy", lazyLoadOnInit: "lazyLoadOnInit", first: "first", pageLinks: "pageLinks", alwaysShowPaginator: "alwaysShowPaginator", paginatorPosition: "paginatorPosition", currentPageReportTemplate: "currentPageReportTemplate", showPageLinks: "showPageLinks", defaultSortOrder: "defaultSortOrder", sortMode: "sortMode", resetPageOnSort: "resetPageOnSort", contextMenuSelectionMode: "contextMenuSelectionMode", compareSelectionBy: "compareSelectionBy", loadingIcon: "loadingIcon", showLoader: "showLoader", virtualScrollDelay: "virtualScrollDelay", virtualRowHeight: "virtualRowHeight", columnResizeMode: "columnResizeMode", rowTrackBy: "rowTrackBy", filters: "filters", filterDelay: "filterDelay", filterMode: "filterMode", totalRecords: "totalRecords", value: "value", sortField: "sortField", sortOrder: "sortOrder", multiSortMeta: "multiSortMeta", selection: "selection", rows: "rows", contextMenuSelection: "contextMenuSelection", columns: "columns", style: "style", styleClass: "styleClass", tableStyle: "tableStyle", tableStyleClass: "tableStyleClass", autoLayout: "autoLayout", paginator: "paginator", rowsPerPageOptions: "rowsPerPageOptions", paginatorDropdownAppendTo: "paginatorDropdownAppendTo", showCurrentPageReport: "showCurrentPageReport", showJumpToPageDropdown: "showJumpToPageDropdown", customSort: "customSort", selectionMode: "selectionMode", dataKey: "dataKey", metaKeySelection: "metaKeySelection", rowHover: "rowHover", loading: "loading", scrollable: "scrollable", scrollHeight: "scrollHeight", virtualScroll: "virtualScroll", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx", frozenWidth: "frozenWidth", frozenColumns: "frozenColumns", resizableColumns: "resizableColumns", reorderableColumns: "reorderableColumns", contextMenu: "contextMenu", globalFilterFields: "globalFilterFields", filterLocale: "filterLocale" }, outputs: { selectionChange: "selectionChange", contextMenuSelectionChange: "contextMenuSelectionChange", onFilter: "onFilter", onNodeExpand: "onNodeExpand", onNodeCollapse: "onNodeCollapse", onPage: "onPage", onSort: "onSort", onLazyLoad: "onLazyLoad", sortFunction: "sortFunction", onColResize: "onColResize", onColReorder: "onColReorder", onNodeSelect: "onNodeSelect", onNodeUnselect: "onNodeUnselect", onContextMenuSelect: "onContextMenuSelect", onHeaderCheckboxToggle: "onHeaderCheckboxToggle", onEditInit: "onEditInit", onEditComplete: "onEditComplete", onEditCancel: "onEditCancel" }, features: [ɵngcc0.ɵɵProvidersFeature([TreeTableService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 12, vars: 20, consts: [["data-scrollselectors", ".p-treetable-scrollable-body", 3, "ngStyle", "ngClass"], ["container", ""], ["class", "p-treetable-loading", 4, "ngIf"], ["class", "p-treetable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-treetable-wrapper", 4, "ngIf"], ["class", "p-treetable-scrollable-wrapper", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-treetable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-down p-treetable-reorder-indicator-up", 4, "ngIf"], ["class", "pi pi-arrow-up p-treetable-reorder-indicator-down", 4, "ngIf"], [1, "p-treetable-loading"], [1, "p-treetable-loading-overlay", "p-component-overlay"], [1, "p-treetable-header"], [4, "ngTemplateOutlet"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-treetable-wrapper"], [3, "ngClass", "ngStyle"], ["table", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-treetable-thead"], [1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate"], [1, "p-treetable-tfoot"], [1, "p-treetable-scrollable-wrapper"], ["class", "p-treetable-scrollable-view p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight", 4, "ngIf"], [1, "p-treetable-scrollable-view", 3, "ttScrollableView", "frozen", "scrollHeight", "ngStyle"], ["scrollableView", ""], [1, "p-treetable-scrollable-view", "p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight"], ["scrollableFrozenView", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-treetable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], ["resizeHelper", ""], [1, "pi", "pi-arrow-down", "p-treetable-reorder-indicator-up"], ["reorderIndicatorUp", ""], [1, "pi", "pi-arrow-up", "p-treetable-reorder-indicator-down"], ["reorderIndicatorDown", ""]], template: function TreeTable_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, TreeTable_div_2_Template, 3, 2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, TreeTable_div_3_Template, 2, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(4, TreeTable_p_paginator_4_Template, 1, 13, "p-paginator", 4);
        ɵngcc0.ɵɵtemplate(5, TreeTable_div_5_Template, 9, 16, "div", 5);
        ɵngcc0.ɵɵtemplate(6, TreeTable_div_6_Template, 4, 8, "div", 6);
        ɵngcc0.ɵɵtemplate(7, TreeTable_p_paginator_7_Template, 1, 13, "p-paginator", 7);
        ɵngcc0.ɵɵtemplate(8, TreeTable_div_8_Template, 2, 1, "div", 8);
        ɵngcc0.ɵɵtemplate(9, TreeTable_div_9_Template, 2, 0, "div", 9);
        ɵngcc0.ɵɵtemplate(10, TreeTable_span_10_Template, 2, 0, "span", 10);
        ɵngcc0.ɵɵtemplate(11, TreeTable_span_11_Template, 2, 0, "span", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction5(14, _c10, ctx.rowHover || (ctx.selectionMode === "single" || ctx.selectionMode === "multiple"), ctx.autoLayout, ctx.resizableColumns, ctx.resizableColumns && ctx.columnResizeMode === "fit", ctx.scrollable && ctx.scrollHeight === "flex"));
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
    } }, directives: function () { return [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Paginator, TTBody, TTScrollableView]; }, styles: [".p-treetable{position:relative}.p-treetable table{border-collapse:collapse;table-layout:fixed;width:100%}.p-treetable .p-sortable-column{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-badge,.p-treetable .p-sortable-column .p-sortable-column-icon{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{-moz-user-select:none;-ms-flex-align:center;-ms-flex-pack:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative;user-select:none}.p-treetable-toggler,p-treetabletoggler+p-treetablecheckbox+span,p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-footer,.p-treetable-scrollable-header{overflow:hidden}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-view,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-treetable-flex-scrollable .p-treetable-scrollable-body{-ms-flex:1;flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-tbody>tr>td,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-thead>tr>th{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{border:1px solid rgba(0,0,0,0);cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5rem}.p-treetable .p-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.p-treetable .p-row-editor-cancel,.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-down,.p-treetable-reorder-indicator-up{display:none;position:absolute}.p-treetable .p-treetable-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}"], encapsulation: 2 });
TreeTable.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: TreeTableService }
];
TreeTable.propDecorators = {
    columns: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    tableStyle: [{ type: Input }],
    tableStyleClass: [{ type: Input }],
    autoLayout: [{ type: Input }],
    lazy: [{ type: Input }],
    lazyLoadOnInit: [{ type: Input }],
    paginator: [{ type: Input }],
    rows: [{ type: Input }],
    first: [{ type: Input }],
    pageLinks: [{ type: Input }],
    rowsPerPageOptions: [{ type: Input }],
    alwaysShowPaginator: [{ type: Input }],
    paginatorPosition: [{ type: Input }],
    paginatorDropdownAppendTo: [{ type: Input }],
    currentPageReportTemplate: [{ type: Input }],
    showCurrentPageReport: [{ type: Input }],
    showJumpToPageDropdown: [{ type: Input }],
    showPageLinks: [{ type: Input }],
    defaultSortOrder: [{ type: Input }],
    sortMode: [{ type: Input }],
    resetPageOnSort: [{ type: Input }],
    customSort: [{ type: Input }],
    selectionMode: [{ type: Input }],
    selectionChange: [{ type: Output }],
    contextMenuSelection: [{ type: Input }],
    contextMenuSelectionChange: [{ type: Output }],
    contextMenuSelectionMode: [{ type: Input }],
    dataKey: [{ type: Input }],
    metaKeySelection: [{ type: Input }],
    compareSelectionBy: [{ type: Input }],
    rowHover: [{ type: Input }],
    loading: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    showLoader: [{ type: Input }],
    scrollable: [{ type: Input }],
    scrollHeight: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    virtualScrollDelay: [{ type: Input }],
    virtualRowHeight: [{ type: Input }],
    minBufferPx: [{ type: Input }],
    maxBufferPx: [{ type: Input }],
    frozenWidth: [{ type: Input }],
    frozenColumns: [{ type: Input }],
    resizableColumns: [{ type: Input }],
    columnResizeMode: [{ type: Input }],
    reorderableColumns: [{ type: Input }],
    contextMenu: [{ type: Input }],
    rowTrackBy: [{ type: Input }],
    filters: [{ type: Input }],
    globalFilterFields: [{ type: Input }],
    filterDelay: [{ type: Input }],
    filterMode: [{ type: Input }],
    filterLocale: [{ type: Input }],
    onFilter: [{ type: Output }],
    onNodeExpand: [{ type: Output }],
    onNodeCollapse: [{ type: Output }],
    onPage: [{ type: Output }],
    onSort: [{ type: Output }],
    onLazyLoad: [{ type: Output }],
    sortFunction: [{ type: Output }],
    onColResize: [{ type: Output }],
    onColReorder: [{ type: Output }],
    onNodeSelect: [{ type: Output }],
    onNodeUnselect: [{ type: Output }],
    onContextMenuSelect: [{ type: Output }],
    onHeaderCheckboxToggle: [{ type: Output }],
    onEditInit: [{ type: Output }],
    onEditComplete: [{ type: Output }],
    onEditCancel: [{ type: Output }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    resizeHelperViewChild: [{ type: ViewChild, args: ['resizeHelper',] }],
    reorderIndicatorUpViewChild: [{ type: ViewChild, args: ['reorderIndicatorUp',] }],
    reorderIndicatorDownViewChild: [{ type: ViewChild, args: ['reorderIndicatorDown',] }],
    tableViewChild: [{ type: ViewChild, args: ['table',] }],
    scrollableViewChild: [{ type: ViewChild, args: ['scrollableView',] }],
    scrollableFrozenViewChild: [{ type: ViewChild, args: ['scrollableFrozenView',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    value: [{ type: Input }],
    totalRecords: [{ type: Input }],
    sortField: [{ type: Input }],
    sortOrder: [{ type: Input }],
    multiSortMeta: [{ type: Input }],
    selection: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTable, [{
        type: Component,
        args: [{
                selector: 'p-treeTable',
                template: `
        <div #container [ngStyle]="style" [class]="styleClass" data-scrollselectors=".p-treetable-scrollable-body"
                [ngClass]="{'p-treetable p-component': true,
                'p-treetable-hoverable-rows': (rowHover||(selectionMode === 'single' || selectionMode === 'multiple')),
                'p-treetable-auto-layout': autoLayout,
                'p-treetable-resizable': resizableColumns,
                'p-treetable-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),
                'p-treetable-flex-scrollable': (scrollable && scrollHeight === 'flex')}">
            <div class="p-treetable-loading" *ngIf="loading && showLoader">
                <div class="p-treetable-loading-overlay p-component-overlay">
                    <i [class]="'p-treetable-loading-icon pi-spin ' + loadingIcon"></i>
                </div>
            </div>
            <div *ngIf="captionTemplate" class="p-treetable-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="p-paginator-top" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate" [showCurrentPageReport]="showCurrentPageReport" [showJumpToPageDropdown]="showJumpToPageDropdown" [showPageLinks]="showPageLinks"></p-paginator>

            <div class="p-treetable-wrapper" *ngIf="!scrollable">
                <table #table [ngClass]="tableStyleClass" [ngStyle]="tableStyle">
                    <ng-container *ngTemplateOutlet="colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <thead class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="headerTemplate; context: {$implicit: columns}"></ng-container>
                    </thead>
                    <tbody class="p-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="bodyTemplate"></tbody>
                    <tfoot class="p-treetable-tfoot">
                        <ng-container *ngTemplateOutlet="footerTemplate; context {$implicit: columns}"></ng-container>
                    </tfoot>
                </table>
            </div>

            <div class="p-treetable-scrollable-wrapper" *ngIf="scrollable">
               <div class="p-treetable-scrollable-view p-treetable-frozen-view" *ngIf="frozenColumns||frozenBodyTemplate" #scrollableFrozenView [ttScrollableView]="frozenColumns" [frozen]="true" [ngStyle]="{width: frozenWidth}" [scrollHeight]="scrollHeight"></div>
               <div class="p-treetable-scrollable-view" #scrollableView [ttScrollableView]="columns" [frozen]="false" [scrollHeight]="scrollHeight" [ngStyle]="{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}"></div>
            </div>

            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="p-paginator-bottom" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate" [showCurrentPageReport]="showCurrentPageReport" [showJumpToPageDropdown]="showJumpToPageDropdown" [showPageLinks]="showPageLinks"></p-paginator>
            <div *ngIf="summaryTemplate" class="p-treetable-footer">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="p-column-resizer-helper" style="display:none" *ngIf="resizableColumns"></div>

            <span #reorderIndicatorUp class="pi pi-arrow-down p-treetable-reorder-indicator-up" *ngIf="reorderableColumns"></span>
            <span #reorderIndicatorDown class="pi pi-arrow-up p-treetable-reorder-indicator-down" *ngIf="reorderableColumns"></span>
        </div>
    `,
                providers: [TreeTableService],
                encapsulation: ViewEncapsulation.None,
                styles: [".p-treetable{position:relative}.p-treetable table{border-collapse:collapse;table-layout:fixed;width:100%}.p-treetable .p-sortable-column{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-badge,.p-treetable .p-sortable-column .p-sortable-column-icon{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{-moz-user-select:none;-ms-flex-align:center;-ms-flex-pack:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative;user-select:none}.p-treetable-toggler,p-treetabletoggler+p-treetablecheckbox+span,p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-footer,.p-treetable-scrollable-header{overflow:hidden}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-view,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-treetable-flex-scrollable .p-treetable-scrollable-body{-ms-flex:1;flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-tbody>tr>td,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-thead>tr>th{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{border:1px solid rgba(0,0,0,0);cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5rem}.p-treetable .p-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.p-treetable .p-row-editor-cancel,.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-down,.p-treetable-reorder-indicator-up{display:none;position:absolute}.p-treetable .p-treetable-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: TreeTableService }]; }, { lazy: [{
            type: Input
        }], lazyLoadOnInit: [{
            type: Input
        }], first: [{
            type: Input
        }], pageLinks: [{
            type: Input
        }], alwaysShowPaginator: [{
            type: Input
        }], paginatorPosition: [{
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
        }], compareSelectionBy: [{
            type: Input
        }], loadingIcon: [{
            type: Input
        }], showLoader: [{
            type: Input
        }], virtualScrollDelay: [{
            type: Input
        }], virtualRowHeight: [{
            type: Input
        }], columnResizeMode: [{
            type: Input
        }], rowTrackBy: [{
            type: Input
        }], filters: [{
            type: Input
        }], filterDelay: [{
            type: Input
        }], filterMode: [{
            type: Input
        }], onFilter: [{
            type: Output
        }], onNodeExpand: [{
            type: Output
        }], onNodeCollapse: [{
            type: Output
        }], onPage: [{
            type: Output
        }], onSort: [{
            type: Output
        }], onLazyLoad: [{
            type: Output
        }], sortFunction: [{
            type: Output
        }], onColResize: [{
            type: Output
        }], onColReorder: [{
            type: Output
        }], onNodeSelect: [{
            type: Output
        }], onNodeUnselect: [{
            type: Output
        }], onContextMenuSelect: [{
            type: Output
        }], onHeaderCheckboxToggle: [{
            type: Output
        }], onEditInit: [{
            type: Output
        }], onEditComplete: [{
            type: Output
        }], onEditCancel: [{
            type: Output
        }], totalRecords: [{
            type: Input
        }], value: [{
            type: Input
        }], sortField: [{
            type: Input
        }], sortOrder: [{
            type: Input
        }], multiSortMeta: [{
            type: Input
        }], selection: [{
            type: Input
        }], rows: [{
            type: Input
        }], contextMenuSelection: [{
            type: Input
        }], columns: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], tableStyle: [{
            type: Input
        }], tableStyleClass: [{
            type: Input
        }], autoLayout: [{
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
        }], customSort: [{
            type: Input
        }], selectionMode: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], metaKeySelection: [{
            type: Input
        }], rowHover: [{
            type: Input
        }], loading: [{
            type: Input
        }], scrollable: [{
            type: Input
        }], scrollHeight: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], minBufferPx: [{
            type: Input
        }], maxBufferPx: [{
            type: Input
        }], frozenWidth: [{
            type: Input
        }], frozenColumns: [{
            type: Input
        }], resizableColumns: [{
            type: Input
        }], reorderableColumns: [{
            type: Input
        }], contextMenu: [{
            type: Input
        }], globalFilterFields: [{
            type: Input
        }], filterLocale: [{
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
export class TTBody {
    constructor(tt, treeTableService, cd) {
        this.tt = tt;
        this.treeTableService = treeTableService;
        this.cd = cd;
        this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
            if (this.tt.virtualScroll) {
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
TTBody.ɵfac = function TTBody_Factory(t) { return new (t || TTBody)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TTBody.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTBody, selectors: [["", "pTreeTableBody", ""]], inputs: { columns: ["pTreeTableBody", "columns"], template: ["pTreeTableBodyTemplate", "template"], frozen: "frozen" }, attrs: _c11, decls: 3, vars: 3, consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"]], template: function TTBody_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TTBody_ng_container_0_Template, 2, 2, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_1_Template, 2, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(2, TTBody_ng_container_2_Template, 2, 4, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tt.virtualScroll);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.tt.virtualScroll);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.tt.isEmpty());
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc3.CdkVirtualForOf], encapsulation: 2 });
TTBody.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService },
    { type: ChangeDetectorRef }
];
TTBody.propDecorators = {
    columns: [{ type: Input, args: ["pTreeTableBody",] }],
    template: [{ type: Input, args: ["pTreeTableBodyTemplate",] }],
    frozen: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTBody, [{
        type: Component,
        args: [{
                selector: '[pTreeTableBody]',
                template: `
        <ng-container *ngIf="!tt.virtualScroll">
            <ng-template ngFor let-serializedNode let-rowIndex="index" [ngForOf]="tt.serializedValue" [ngForTrackBy]="tt.rowTrackBy">
                <ng-container *ngIf="serializedNode.visible">
                    <ng-container *ngTemplateOutlet="template; context: {$implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns}"></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="tt.virtualScroll">
            <ng-template cdkVirtualFor let-serializedNode let-rowIndex="index" [cdkVirtualForOf]="tt.serializedValue" [cdkVirtualForTrackBy]="tt.rowTrackBy" [cdkVirtualForTemplateCacheSize]="0">
                <ng-container *ngIf="serializedNode.visible">
                    <ng-container *ngTemplateOutlet="template; context: {$implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns}"></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="tt.isEmpty()">
            <ng-container *ngTemplateOutlet="tt.emptyMessageTemplate; context: {$implicit: columns}"></ng-container>
        </ng-container>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { columns: [{
            type: Input,
            args: ["pTreeTableBody"]
        }], template: [{
            type: Input,
            args: ["pTreeTableBodyTemplate"]
        }], frozen: [{
            type: Input
        }] }); })();
export class TTScrollableView {
    constructor(tt, el, zone) {
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    get scrollHeight() {
        return this._scrollHeight;
    }
    set scrollHeight(val) {
        this._scrollHeight = val;
        if (val != null && (val.includes('%') || val.includes('calc'))) {
            console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
        }
    }
    ngAfterViewInit() {
        if (!this.frozen) {
            if (this.tt.frozenColumns || this.tt.frozenBodyTemplate) {
                DomHandler.addClass(this.el.nativeElement, 'p-treetable-unfrozen-view');
            }
            let frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                if (this.tt.virtualScroll)
                    this.frozenSiblingBody = DomHandler.findSingle(frozenView, '.p-treetable-virtual-scrollable-body');
                else
                    this.frozenSiblingBody = DomHandler.findSingle(frozenView, '.p-treetable-scrollable-body');
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
                this.scrollHeaderBoxViewChild.nativeElement.addEventListener('scroll', this.headerScrollListener);
            }
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.footerScrollListener = this.onFooterScroll.bind(this);
                this.scrollFooterViewChild.nativeElement.addEventListener('scroll', this.footerScrollListener);
            }
            if (!this.frozen) {
                this.bodyScrollListener = this.onBodyScroll.bind(this);
                if (this.tt.virtualScroll)
                    this.virtualScrollBody.getElementRef().nativeElement.addEventListener('scroll', this.bodyScrollListener);
                else
                    this.scrollBodyViewChild.nativeElement.addEventListener('scroll', this.bodyScrollListener);
            }
        });
    }
    unbindEvents() {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
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
TTScrollableView.ɵfac = function TTScrollableView_Factory(t) { return new (t || TTScrollableView)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTScrollableView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTScrollableView, selectors: [["", "ttScrollableView", ""]], viewQuery: function TTScrollableView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c13, true);
        ɵngcc0.ɵɵviewQuery(_c14, true);
        ɵngcc0.ɵɵviewQuery(_c15, true);
        ɵngcc0.ɵɵviewQuery(_c16, true);
        ɵngcc0.ɵɵviewQuery(_c17, true);
        ɵngcc0.ɵɵviewQuery(_c18, true);
        ɵngcc0.ɵɵviewQuery(_c19, true);
        ɵngcc0.ɵɵviewQuery(_c20, true);
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollHeaderViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollHeaderBoxViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollBodyViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollTableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollLoadingTableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollFooterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollFooterBoxViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableAlignerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.virtualScrollBody = _t.first);
    } }, inputs: { scrollHeight: "scrollHeight", columns: ["ttScrollableView", "columns"], frozen: "frozen" }, attrs: _c21, decls: 12, vars: 13, consts: [[1, "p-treetable-scrollable-header"], ["scrollHeader", ""], [1, "p-treetable-scrollable-header-box"], ["scrollHeaderBox", ""], [1, "p-treetable-scrollable-header-table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-treetable-thead"], [4, "ngIf", "ngIfElse"], ["virtualScrollTemplate", ""], ["class", "p-treetable-scrollable-footer", 4, "ngIf"], [1, "p-treetable-scrollable-body", 3, "ngStyle"], ["scrollBody", ""], [3, "ngStyle"], ["scrollTable", ""], [1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate", "frozen"], ["style", "background-color:transparent", 4, "ngIf"], [2, "background-color", "transparent"], ["scrollableAligner", ""], [1, "p-treetable-virtual-scrollable-body", 3, "itemSize", "minBufferPx", "maxBufferPx"], [1, "p-treetable-scrollable-footer"], ["scrollFooter", ""], [1, "p-treetable-scrollable-footer-box"], ["scrollFooterBox", ""], [1, "p-treetable-scrollable-footer-table", 3, "ngClass", "ngStyle"], [1, "p-treetable-tfoot"]], template: function TTScrollableView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelementStart(4, "table", 4);
        ɵngcc0.ɵɵtemplate(5, TTScrollableView_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementStart(6, "thead", 6);
        ɵngcc0.ɵɵtemplate(7, TTScrollableView_ng_container_7_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, TTScrollableView_ng_container_8_Template, 8, 15, "ng-container", 7);
        ɵngcc0.ɵɵtemplate(9, TTScrollableView_ng_template_9_Template, 6, 16, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(11, TTScrollableView_div_11_Template, 8, 10, "div", 9);
    } if (rf & 2) {
        const _r5 = ɵngcc0.ɵɵreference(10);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngClass", ctx.tt.tableStyleClass)("ngStyle", ctx.tt.tableStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenColGroupTemplate || ctx.tt.colGroupTemplate : ctx.tt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenHeaderTemplate || ctx.tt.headerTemplate : ctx.tt.headerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(11, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tt.virtualScroll)("ngIfElse", _r5);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.tt.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, TTBody, ɵngcc3.CdkVirtualScrollViewport, ɵngcc3.CdkFixedSizeVirtualScroll], encapsulation: 2 });
TTScrollableView.ctorParameters = () => [
    { type: TreeTable },
    { type: ElementRef },
    { type: NgZone }
];
TTScrollableView.propDecorators = {
    columns: [{ type: Input, args: ["ttScrollableView",] }],
    frozen: [{ type: Input }],
    scrollHeaderViewChild: [{ type: ViewChild, args: ['scrollHeader',] }],
    scrollHeaderBoxViewChild: [{ type: ViewChild, args: ['scrollHeaderBox',] }],
    scrollBodyViewChild: [{ type: ViewChild, args: ['scrollBody',] }],
    scrollTableViewChild: [{ type: ViewChild, args: ['scrollTable',] }],
    scrollLoadingTableViewChild: [{ type: ViewChild, args: ['loadingTable',] }],
    scrollFooterViewChild: [{ type: ViewChild, args: ['scrollFooter',] }],
    scrollFooterBoxViewChild: [{ type: ViewChild, args: ['scrollFooterBox',] }],
    scrollableAlignerViewChild: [{ type: ViewChild, args: ['scrollableAligner',] }],
    virtualScrollBody: [{ type: ViewChild, args: [CdkVirtualScrollViewport,] }],
    scrollHeight: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTScrollableView, [{
        type: Component,
        args: [{
                selector: '[ttScrollableView]',
                template: `
        <div #scrollHeader class="p-treetable-scrollable-header">
            <div #scrollHeaderBox class="p-treetable-scrollable-header-box">
                <table class="p-treetable-scrollable-header-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <thead class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenHeaderTemplate||tt.headerTemplate : tt.headerTemplate; context {$implicit: columns}"></ng-container>
                    </thead>
                </table>
            </div>
        </div>
        <ng-container *ngIf="!tt.virtualScroll; else virtualScrollTemplate">
            <div #scrollBody class="p-treetable-scrollable-body" [ngStyle]="{'max-height': tt.scrollHeight !== 'flex' ? scrollHeight : undefined, 'overflow-y': !frozen && tt.scrollHeight ? 'scroll' : undefined}">
                <table #scrollTable [class]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <tbody class="p-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="frozen ? tt.frozenBodyTemplate||tt.bodyTemplate : tt.bodyTemplate" [frozen]="frozen"></tbody>
                </table>
                <div #scrollableAligner style="background-color:transparent" *ngIf="frozen"></div>
            </div>
        </ng-container>
        <ng-template #virtualScrollTemplate>
            <cdk-virtual-scroll-viewport [itemSize]="tt.virtualRowHeight" [style.height]="tt.scrollHeight !== 'flex' ? scrollHeight : undefined"
                    [minBufferPx]="tt.minBufferPx" [maxBufferPx]="tt.maxBufferPx" class="p-treetable-virtual-scrollable-body">
                <table #scrollTable [class]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <tbody class="p-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="frozen ? tt.frozenBodyTemplate||tt.bodyTemplate : tt.bodyTemplate" [frozen]="frozen"></tbody>
                </table>
                <div #scrollableAligner style="background-color:transparent" *ngIf="frozen"></div>
            </cdk-virtual-scroll-viewport>
        </ng-template>
        <div #scrollFooter *ngIf="tt.footerTemplate" class="p-treetable-scrollable-footer">
            <div #scrollFooterBox class="p-treetable-scrollable-footer-box">
                <table class="p-treetable-scrollable-footer-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <tfoot class="p-treetable-tfoot">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenFooterTemplate||tt.footerTemplate : tt.footerTemplate; context {$implicit: columns}"></ng-container>
                    </tfoot>
                </table>
            </div>
        </div>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { scrollHeight: [{
            type: Input
        }], columns: [{
            type: Input,
            args: ["ttScrollableView"]
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
        }], scrollLoadingTableViewChild: [{
            type: ViewChild,
            args: ['loadingTable']
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
export class TTSortableColumn {
    constructor(tt) {
        this.tt = tt;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.sortSource$.subscribe(sortMeta => {
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
        this.sorted = this.tt.isSorted(this.field);
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.updateSortState();
            this.tt.sort({
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
        return this.ttSortableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TTSortableColumn.ɵfac = function TTSortableColumn_Factory(t) { return new (t || TTSortableColumn)(ɵngcc0.ɵɵdirectiveInject(TreeTable)); };
TTSortableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTSortableColumn, selectors: [["", "ttSortableColumn", ""]], hostVars: 6, hostBindings: function TTSortableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function TTSortableColumn_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown.enter", function TTSortableColumn_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKey($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader");
        ɵngcc0.ɵɵclassProp("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
    } }, inputs: { field: ["ttSortableColumn", "field"], ttSortableColumnDisabled: "ttSortableColumnDisabled" } });
TTSortableColumn.ctorParameters = () => [
    { type: TreeTable }
];
TTSortableColumn.propDecorators = {
    field: [{ type: Input, args: ["ttSortableColumn",] }],
    ttSortableColumnDisabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onEnterKey: [{ type: HostListener, args: ['keydown.enter', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTSortableColumn, [{
        type: Directive,
        args: [{
                selector: '[ttSortableColumn]',
                host: {
                    '[class.p-sortable-column]': 'isEnabled()',
                    '[class.p-highlight]': 'sorted',
                    '[attr.tabindex]': 'isEnabled() ? "0" : null',
                    '[attr.role]': '"columnheader"'
                }
            }]
    }], function () { return [{ type: TreeTable }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onEnterKey: [{
            type: HostListener,
            args: ['keydown.enter', ['$event']]
        }], field: [{
            type: Input,
            args: ["ttSortableColumn"]
        }], ttSortableColumnDisabled: [{
            type: Input
        }] }); })();
export class TTSortIcon {
    constructor(tt, cd) {
        this.tt = tt;
        this.cd = cd;
        this.subscription = this.tt.tableService.sortSource$.subscribe(sortMeta => {
            this.updateSortState();
            this.cd.markForCheck();
        });
    }
    ngOnInit() {
        this.updateSortState();
    }
    onClick(event) {
        event.preventDefault();
    }
    updateSortState() {
        if (this.tt.sortMode === 'single') {
            this.sortOrder = this.tt.isSorted(this.field) ? this.tt.sortOrder : 0;
        }
        else if (this.tt.sortMode === 'multiple') {
            let sortMeta = this.tt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TTSortIcon.ɵfac = function TTSortIcon_Factory(t) { return new (t || TTSortIcon)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TTSortIcon.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTSortIcon, selectors: [["p-treeTableSortIcon"]], inputs: { field: "field", ariaLabelDesc: "ariaLabelDesc", ariaLabelAsc: "ariaLabelAsc" }, decls: 1, vars: 5, consts: [[1, "p-sortable-column-icon", "pi", "pi-fw", 3, "ngClass"]], template: function TTSortIcon_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "i", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(1, _c23, ctx.sortOrder === 1, ctx.sortOrder === 0 - 1, ctx.sortOrder === 0));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
TTSortIcon.ctorParameters = () => [
    { type: TreeTable },
    { type: ChangeDetectorRef }
];
TTSortIcon.propDecorators = {
    field: [{ type: Input }],
    ariaLabelDesc: [{ type: Input }],
    ariaLabelAsc: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTSortIcon, [{
        type: Component,
        args: [{
                selector: 'p-treeTableSortIcon',
                template: `
        <i class="p-sortable-column-icon pi pi-fw" [ngClass]="{'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0}"></i>
    `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ChangeDetectorRef }]; }, { field: [{
            type: Input
        }], ariaLabelDesc: [{
            type: Input
        }], ariaLabelAsc: [{
            type: Input
        }] }); })();
export class TTResizableColumn {
    constructor(tt, el, zone) {
        this.tt = tt;
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
        this.tt.onColumnResizeBegin(event);
        this.bindDocumentEvents();
    }
    onDocumentMouseMove(event) {
        this.tt.onColumnResize(event);
    }
    onDocumentMouseUp(event) {
        this.tt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    }
    isEnabled() {
        return this.ttResizableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
        }
        this.unbindDocumentEvents();
    }
}
TTResizableColumn.ɵfac = function TTResizableColumn_Factory(t) { return new (t || TTResizableColumn)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTResizableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTResizableColumn, selectors: [["", "ttResizableColumn", ""]], inputs: { ttResizableColumnDisabled: "ttResizableColumnDisabled" } });
TTResizableColumn.ctorParameters = () => [
    { type: TreeTable },
    { type: ElementRef },
    { type: NgZone }
];
TTResizableColumn.propDecorators = {
    ttResizableColumnDisabled: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTResizableColumn, [{
        type: Directive,
        args: [{
                selector: '[ttResizableColumn]'
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { ttResizableColumnDisabled: [{
            type: Input
        }] }); })();
export class TTReorderableColumn {
    constructor(tt, el, zone) {
        this.tt = tt;
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
        this.tt.onColumnDragStart(event, this.el.nativeElement);
    }
    onDragOver(event) {
        event.preventDefault();
    }
    onDragEnter(event) {
        this.tt.onColumnDragEnter(event, this.el.nativeElement);
    }
    onDragLeave(event) {
        this.tt.onColumnDragLeave(event);
    }
    onDrop(event) {
        if (this.isEnabled()) {
            this.tt.onColumnDrop(event, this.el.nativeElement);
        }
    }
    isEnabled() {
        return this.ttReorderableColumnDisabled !== true;
    }
    ngOnDestroy() {
        this.unbindEvents();
    }
}
TTReorderableColumn.ɵfac = function TTReorderableColumn_Factory(t) { return new (t || TTReorderableColumn)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTReorderableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTReorderableColumn, selectors: [["", "ttReorderableColumn", ""]], hostBindings: function TTReorderableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function TTReorderableColumn_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { ttReorderableColumnDisabled: "ttReorderableColumnDisabled" } });
TTReorderableColumn.ctorParameters = () => [
    { type: TreeTable },
    { type: ElementRef },
    { type: NgZone }
];
TTReorderableColumn.propDecorators = {
    ttReorderableColumnDisabled: [{ type: Input }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTReorderableColumn, [{
        type: Directive,
        args: [{
                selector: '[ttReorderableColumn]'
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }], ttReorderableColumnDisabled: [{
            type: Input
        }] }); })();
export class TTSelectableRow {
    constructor(tt, tableService) {
        this.tt = tt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.tt.isSelected(this.rowNode.node);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.tt.isSelected(this.rowNode.node);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.tt.handleRowClick({
                originalEvent: event,
                rowNode: this.rowNode
            });
        }
    }
    onEnterKey(event) {
        if (event.which === 13) {
            this.onClick(event);
        }
    }
    onTouchEnd(event) {
        if (this.isEnabled()) {
            this.tt.handleRowTouchEnd(event);
        }
    }
    isEnabled() {
        return this.ttSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TTSelectableRow.ɵfac = function TTSelectableRow_Factory(t) { return new (t || TTSelectableRow)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService)); };
TTSelectableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTSelectableRow, selectors: [["", "ttSelectableRow", ""]], hostVars: 2, hostBindings: function TTSelectableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function TTSelectableRow_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown", function TTSelectableRow_keydown_HostBindingHandler($event) { return ctx.onEnterKey($event); })("touchend", function TTSelectableRow_touchend_HostBindingHandler($event) { return ctx.onTouchEnd($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-highlight", ctx.selected);
    } }, inputs: { rowNode: ["ttSelectableRow", "rowNode"], ttSelectableRowDisabled: "ttSelectableRowDisabled" } });
TTSelectableRow.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService }
];
TTSelectableRow.propDecorators = {
    rowNode: [{ type: Input, args: ["ttSelectableRow",] }],
    ttSelectableRowDisabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onEnterKey: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onTouchEnd: [{ type: HostListener, args: ['touchend', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTSelectableRow, [{
        type: Directive,
        args: [{
                selector: '[ttSelectableRow]',
                host: {
                    '[class.p-highlight]': 'selected'
                }
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onEnterKey: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onTouchEnd: [{
            type: HostListener,
            args: ['touchend', ['$event']]
        }], rowNode: [{
            type: Input,
            args: ["ttSelectableRow"]
        }], ttSelectableRowDisabled: [{
            type: Input
        }] }); })();
export class TTSelectableRowDblClick {
    constructor(tt, tableService) {
        this.tt = tt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.tt.isSelected(this.rowNode.node);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.tt.isSelected(this.rowNode.node);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.tt.handleRowClick({
                originalEvent: event,
                rowNode: this.rowNode
            });
        }
    }
    isEnabled() {
        return this.ttSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TTSelectableRowDblClick.ɵfac = function TTSelectableRowDblClick_Factory(t) { return new (t || TTSelectableRowDblClick)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService)); };
TTSelectableRowDblClick.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTSelectableRowDblClick, selectors: [["", "ttSelectableRowDblClick", ""]], hostVars: 2, hostBindings: function TTSelectableRowDblClick_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("dblclick", function TTSelectableRowDblClick_dblclick_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-highlight", ctx.selected);
    } }, inputs: { rowNode: ["ttSelectableRowDblClick", "rowNode"], ttSelectableRowDisabled: "ttSelectableRowDisabled" } });
TTSelectableRowDblClick.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService }
];
TTSelectableRowDblClick.propDecorators = {
    rowNode: [{ type: Input, args: ["ttSelectableRowDblClick",] }],
    ttSelectableRowDisabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTSelectableRowDblClick, [{
        type: Directive,
        args: [{
                selector: '[ttSelectableRowDblClick]',
                host: {
                    '[class.p-highlight]': 'selected'
                }
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }]; }, { onClick: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }], rowNode: [{
            type: Input,
            args: ["ttSelectableRowDblClick"]
        }], ttSelectableRowDisabled: [{
            type: Input
        }] }); })();
export class TTContextMenuRow {
    constructor(tt, tableService, el) {
        this.tt = tt;
        this.tableService = tableService;
        this.el = el;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.contextMenuSource$.subscribe((node) => {
                this.selected = this.tt.equals(this.rowNode.node, node);
            });
        }
    }
    onContextMenu(event) {
        if (this.isEnabled()) {
            this.tt.handleRowRightClick({
                originalEvent: event,
                rowNode: this.rowNode
            });
            this.el.nativeElement.focus();
            event.preventDefault();
        }
    }
    isEnabled() {
        return this.ttContextMenuRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TTContextMenuRow.ɵfac = function TTContextMenuRow_Factory(t) { return new (t || TTContextMenuRow)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TTContextMenuRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTContextMenuRow, selectors: [["", "ttContextMenuRow", ""]], hostVars: 3, hostBindings: function TTContextMenuRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("contextmenu", function TTContextMenuRow_contextmenu_HostBindingHandler($event) { return ctx.onContextMenu($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : undefined);
        ɵngcc0.ɵɵclassProp("p-highlight-contextmenu", ctx.selected);
    } }, inputs: { rowNode: ["ttContextMenuRow", "rowNode"], ttContextMenuRowDisabled: "ttContextMenuRowDisabled" } });
TTContextMenuRow.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService },
    { type: ElementRef }
];
TTContextMenuRow.propDecorators = {
    rowNode: [{ type: Input, args: ["ttContextMenuRow",] }],
    ttContextMenuRowDisabled: [{ type: Input }],
    onContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTContextMenuRow, [{
        type: Directive,
        args: [{
                selector: '[ttContextMenuRow]',
                host: {
                    '[class.p-highlight-contextmenu]': 'selected',
                    '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
                }
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }, { type: ɵngcc0.ElementRef }]; }, { onContextMenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }], rowNode: [{
            type: Input,
            args: ["ttContextMenuRow"]
        }], ttContextMenuRowDisabled: [{
            type: Input
        }] }); })();
export class TTCheckbox {
    constructor(tt, tableService, cd) {
        this.tt = tt;
        this.tableService = tableService;
        this.cd = cd;
        this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.tt.isSelected(this.rowNode.node);
            this.cd.markForCheck();
        });
    }
    ngOnInit() {
        this.checked = this.tt.isSelected(this.rowNode.node);
    }
    onClick(event) {
        if (!this.disabled) {
            this.tt.toggleNodeWithCheckbox({
                originalEvent: event,
                rowNode: this.rowNode
            });
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
TTCheckbox.ɵfac = function TTCheckbox_Factory(t) { return new (t || TTCheckbox)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TTCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTCheckbox, selectors: [["p-treeTableCheckbox"]], viewQuery: function TTCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c24, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, inputs: { disabled: "disabled", rowNode: ["value", "rowNode"] }, decls: 6, vars: 10, consts: [[1, "p-checkbox", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", "pi", 3, "ngClass"]], template: function TTCheckbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TTCheckbox_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("focus", function TTCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TTCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c25, ctx.checked, ctx.disabled));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c26, ctx.checked, ctx.rowNode.node.partialSelected));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
TTCheckbox.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService },
    { type: ChangeDetectorRef }
];
TTCheckbox.propDecorators = {
    disabled: [{ type: Input }],
    rowNode: [{ type: Input, args: ["value",] }],
    boxViewChild: [{ type: ViewChild, args: ['box',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTCheckbox, [{
        type: Component,
        args: [{
                selector: 'p-treeTableCheckbox',
                template: `
        <div class="p-checkbox p-component" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()">
            </div>
            <div #box [ngClass]="{'p-checkbox-box':true,
                'p-highlight':checked, 'p-disabled':disabled}"  role="checkbox" [attr.aria-checked]="checked">
                <span class="p-checkbox-icon pi" [ngClass]="{'pi-check':checked, 'pi-minus': rowNode.node.partialSelected}"></span>
            </div>
        </div>
    `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: Input
        }], rowNode: [{
            type: Input,
            args: ["value"]
        }], boxViewChild: [{
            type: ViewChild,
            args: ['box']
        }] }); })();
export class TTHeaderCheckbox {
    constructor(tt, tableService, cd) {
        this.tt = tt;
        this.tableService = tableService;
        this.cd = cd;
        this.valueChangeSubscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
        this.selectionChangeSubscription = this.tt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
    }
    ngOnInit() {
        this.checked = this.updateCheckedState();
    }
    onClick(event, checked) {
        if (this.tt.value && this.tt.value.length > 0) {
            this.tt.toggleNodesWithCheckbox(event, !checked);
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
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    }
    updateCheckedState() {
        this.cd.markForCheck();
        let checked;
        const data = this.tt.filteredNodes || this.tt.value;
        if (data) {
            for (let node of data) {
                if (this.tt.isSelected(node)) {
                    checked = true;
                }
                else {
                    checked = false;
                    break;
                }
            }
        }
        else {
            checked = false;
        }
        return checked;
    }
}
TTHeaderCheckbox.ɵfac = function TTHeaderCheckbox_Factory(t) { return new (t || TTHeaderCheckbox)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TTHeaderCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTHeaderCheckbox, selectors: [["p-treeTableHeaderCheckbox"]], viewQuery: function TTHeaderCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c24, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, decls: 7, vars: 10, consts: [[1, "p-checkbox", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]], template: function TTHeaderCheckbox_Template(rf, ctx) { if (rf & 1) {
        const _r2 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TTHeaderCheckbox_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const _r0 = ɵngcc0.ɵɵreference(3); return ctx.onClick($event, _r0.checked); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("focus", function TTHeaderCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TTHeaderCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4, 5);
        ɵngcc0.ɵɵelement(6, "span", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", !ctx.tt.value || ctx.tt.value.length === 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c25, ctx.checked, !ctx.tt.value || ctx.tt.value.length === 0));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c27, ctx.checked));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
TTHeaderCheckbox.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService },
    { type: ChangeDetectorRef }
];
TTHeaderCheckbox.propDecorators = {
    boxViewChild: [{ type: ViewChild, args: ['box',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTHeaderCheckbox, [{
        type: Component,
        args: [{
                selector: 'p-treeTableHeaderCheckbox',
                template: `
        <div class="p-checkbox p-component" (click)="onClick($event, cb.checked)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="!tt.value||tt.value.length === 0">
            </div>
            <div #box [ngClass]="{'p-checkbox-box':true,
                'p-highlight':checked, 'p-disabled': (!tt.value || tt.value.length === 0)}"  role="checkbox" [attr.aria-checked]="checked">
                <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':checked}"></span>
            </div>
        </div>
    `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { boxViewChild: [{
            type: ViewChild,
            args: ['box']
        }] }); })();
export class TTEditableColumn {
    constructor(tt, el, zone) {
        this.tt = tt;
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
            this.tt.editingCellClick = true;
            if (this.tt.editingCell) {
                if (this.tt.editingCell !== this.el.nativeElement) {
                    if (!this.tt.isEditingCellValid()) {
                        return;
                    }
                    DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
                    this.openCell();
                }
            }
            else {
                this.openCell();
            }
        }
    }
    openCell() {
        this.tt.updateEditingCell(this.el.nativeElement);
        DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
        this.tt.onEditInit.emit({ field: this.field, data: this.data });
        this.tt.editingCellClick = true;
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                let focusable = DomHandler.findSingle(this.el.nativeElement, 'input, textarea');
                if (focusable) {
                    focusable.focus();
                }
            }, 50);
        });
    }
    closeEditingCell() {
        DomHandler.removeClass(this.tt.editingCell, 'p-checkbox-icon');
        this.tt.editingCell = null;
        this.tt.unbindDocumentEditListener();
    }
    onKeyDown(event) {
        if (this.isEnabled()) {
            //enter
            if (event.keyCode == 13) {
                if (this.tt.isEditingCellValid()) {
                    DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
                    this.closeEditingCell();
                    this.tt.onEditComplete.emit({ field: this.field, data: this.data });
                }
                event.preventDefault();
            }
            //escape
            else if (event.keyCode == 27) {
                if (this.tt.isEditingCellValid()) {
                    DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
                    this.closeEditingCell();
                    this.tt.onEditCancel.emit({ field: this.field, data: this.data });
                }
                event.preventDefault();
            }
            //tab
            else if (event.keyCode == 9) {
                this.tt.onEditComplete.emit({ field: this.field, data: this.data });
                if (event.shiftKey)
                    this.moveToPreviousCell(event);
                else
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
        let row = currentCell.parentElement;
        let targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            DomHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    moveToNextCell(event) {
        let currentCell = this.findCell(event.target);
        let row = currentCell.parentElement;
        let targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            DomHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    findPreviousEditableColumn(cell) {
        let prevCell = cell.previousElementSibling;
        if (!prevCell) {
            let previousRow = cell.parentElement ? cell.parentElement.previousElementSibling : null;
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
            let nextRow = cell.parentElement ? cell.parentElement.nextElementSibling : null;
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
        return this.ttEditableColumnDisabled !== true;
    }
}
TTEditableColumn.ɵfac = function TTEditableColumn_Factory(t) { return new (t || TTEditableColumn)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTEditableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTEditableColumn, selectors: [["", "ttEditableColumn", ""]], hostBindings: function TTEditableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function TTEditableColumn_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown", function TTEditableColumn_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { data: ["ttEditableColumn", "data"], field: ["ttEditableColumnField", "field"], ttEditableColumnDisabled: "ttEditableColumnDisabled" } });
TTEditableColumn.ctorParameters = () => [
    { type: TreeTable },
    { type: ElementRef },
    { type: NgZone }
];
TTEditableColumn.propDecorators = {
    data: [{ type: Input, args: ["ttEditableColumn",] }],
    field: [{ type: Input, args: ["ttEditableColumnField",] }],
    ttEditableColumnDisabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTEditableColumn, [{
        type: Directive,
        args: [{
                selector: '[ttEditableColumn]'
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], data: [{
            type: Input,
            args: ["ttEditableColumn"]
        }], field: [{
            type: Input,
            args: ["ttEditableColumnField"]
        }], ttEditableColumnDisabled: [{
            type: Input
        }] }); })();
export class TreeTableCellEditor {
    constructor(tt, editableColumn) {
        this.tt = tt;
        this.editableColumn = editableColumn;
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
}
TreeTableCellEditor.ɵfac = function TreeTableCellEditor_Factory(t) { return new (t || TreeTableCellEditor)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TTEditableColumn)); };
TreeTableCellEditor.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeTableCellEditor, selectors: [["p-treeTableCellEditor"]], contentQueries: function TreeTableCellEditor_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]], template: function TreeTableCellEditor_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TreeTableCellEditor_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, TreeTableCellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.tt.editingCell === ctx.editableColumn.el.nativeElement);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tt.editingCell || ctx.tt.editingCell !== ctx.editableColumn.el.nativeElement);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
TreeTableCellEditor.ctorParameters = () => [
    { type: TreeTable },
    { type: TTEditableColumn }
];
TreeTableCellEditor.propDecorators = {
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTableCellEditor, [{
        type: Component,
        args: [{
                selector: 'p-treeTableCellEditor',
                template: `
        <ng-container *ngIf="tt.editingCell === editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!tt.editingCell || tt.editingCell !== editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: TreeTable }, { type: TTEditableColumn }]; }, { templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class TTRow {
    constructor(tt, el, zone) {
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    onKeyDown(event) {
        switch (event.which) {
            //down arrow
            case 40:
                let nextRow = this.el.nativeElement.nextElementSibling;
                if (nextRow) {
                    nextRow.focus();
                }
                event.preventDefault();
                break;
            //down arrow
            case 38:
                let prevRow = this.el.nativeElement.previousElementSibling;
                if (prevRow) {
                    prevRow.focus();
                }
                event.preventDefault();
                break;
            //left arrow
            case 37:
                if (this.rowNode.node.expanded) {
                    this.tt.toggleRowIndex = DomHandler.index(this.el.nativeElement);
                    this.rowNode.node.expanded = false;
                    this.tt.onNodeCollapse.emit({
                        originalEvent: event,
                        node: this.rowNode.node
                    });
                    this.tt.updateSerializedValue();
                    this.tt.tableService.onUIUpdate(this.tt.value);
                    this.restoreFocus();
                }
                break;
            //right arrow
            case 39:
                if (!this.rowNode.node.expanded) {
                    this.tt.toggleRowIndex = DomHandler.index(this.el.nativeElement);
                    this.rowNode.node.expanded = true;
                    this.tt.onNodeExpand.emit({
                        originalEvent: event,
                        node: this.rowNode.node
                    });
                    this.tt.updateSerializedValue();
                    this.tt.tableService.onUIUpdate(this.tt.value);
                    this.restoreFocus();
                }
                break;
        }
    }
    restoreFocus() {
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                let row = DomHandler.findSingle(this.tt.containerViewChild.nativeElement, '.p-treetable-tbody').children[this.tt.toggleRowIndex];
                if (row) {
                    row.focus();
                }
            }, 25);
        });
    }
}
TTRow.ɵfac = function TTRow_Factory(t) { return new (t || TTRow)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTRow, selectors: [["", "ttRow", ""]], hostVars: 1, hostBindings: function TTRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function TTRow_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", "0");
    } }, inputs: { rowNode: ["ttRow", "rowNode"] } });
TTRow.ctorParameters = () => [
    { type: TreeTable },
    { type: ElementRef },
    { type: NgZone }
];
TTRow.propDecorators = {
    rowNode: [{ type: Input, args: ['ttRow',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTRow, [{
        type: Directive,
        args: [{
                selector: '[ttRow]',
                host: {
                    '[attr.tabindex]': '"0"'
                }
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], rowNode: [{
            type: Input,
            args: ['ttRow']
        }] }); })();
export class TreeTableToggler {
    constructor(tt) {
        this.tt = tt;
    }
    onClick(event) {
        this.rowNode.node.expanded = !this.rowNode.node.expanded;
        if (this.rowNode.node.expanded) {
            this.tt.onNodeExpand.emit({
                originalEvent: event,
                node: this.rowNode.node
            });
        }
        else {
            this.tt.onNodeCollapse.emit({
                originalEvent: event,
                node: this.rowNode.node
            });
        }
        this.tt.updateSerializedValue();
        this.tt.tableService.onUIUpdate(this.tt.value);
        event.preventDefault();
    }
}
TreeTableToggler.ɵfac = function TreeTableToggler_Factory(t) { return new (t || TreeTableToggler)(ɵngcc0.ɵɵdirectiveInject(TreeTable)); };
TreeTableToggler.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeTableToggler, selectors: [["p-treeTableToggler"]], inputs: { rowNode: "rowNode" }, decls: 2, vars: 5, consts: [["type", "button", "tabindex", "-1", "pRipple", "", 1, "p-treetable-toggler", "p-link", 3, "click"], [3, "ngClass"]], template: function TreeTableToggler_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function TreeTableToggler_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelement(1, "i", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("visibility", ctx.rowNode.node.leaf === false || ctx.rowNode.node.children && ctx.rowNode.node.children.length ? "visible" : "hidden")("margin-left", ctx.rowNode.level * 16 + "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.rowNode.node.expanded ? "pi pi-fw pi-chevron-down" : "pi pi-fw pi-chevron-right");
    } }, directives: [ɵngcc4.Ripple, ɵngcc1.NgClass], encapsulation: 2 });
TreeTableToggler.ctorParameters = () => [
    { type: TreeTable }
];
TreeTableToggler.propDecorators = {
    rowNode: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTableToggler, [{
        type: Component,
        args: [{
                selector: 'p-treeTableToggler',
                template: `
        <button type="button" class="p-treetable-toggler p-link" (click)="onClick($event)" tabindex="-1" pRipple
            [style.visibility]="rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden'" [style.marginLeft]="rowNode.level * 16 + 'px'">
            <i [ngClass]="rowNode.node.expanded ? 'pi pi-fw pi-chevron-down' : 'pi pi-fw pi-chevron-right'"></i>
        </button>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: TreeTable }]; }, { rowNode: [{
            type: Input
        }] }); })();
export class TreeTableModule {
}
TreeTableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TreeTableModule });
TreeTableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TreeTableModule_Factory(t) { return new (t || TreeTableModule)(); }, imports: [[CommonModule, PaginatorModule, ScrollingModule, RippleModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TreeTableModule, { declarations: function () { return [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor]; }, imports: function () { return [CommonModule, PaginatorModule, ScrollingModule, RippleModule]; }, exports: function () { return [TreeTable, SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTableModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PaginatorModule, ScrollingModule, RippleModule],
                exports: [TreeTable, SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, ScrollingModule],
                declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXRhYmxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvdHJlZXRhYmxlL3RyZWV0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QyxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUEwQixVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBNkQsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNVYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSTFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWdDaEIsTUFBTSxPQUFPLGVBQWU7QUFBRzsyQ0FMOUIsUUFBUSxTQUFDO0dBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsWUFBWSxDQUFDLGtCQUNwRSxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUMsbUJBQW1CLEVBQUMsZUFBZSxFQUFDO2lCQUF1QixFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxlQUFlLENBQUMsa0JBQ3BRLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLEtBQUssRUFBQyxtQkFBbUIsRUFBQyxlQUFlLEVBQUMsdUJBQXVCLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLG1CQUFtQixDQUFDLGNBQ3ZROzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIsIEluamVjdGFibGUsIERpcmVjdGl2ZSwgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbiwgVGVtcGxhdGVSZWYsIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgTmdab25lLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdwcmltZW5nL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBQcmltZVRlbXBsYXRlLCBTaGFyZWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBTb3J0TWV0YSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IEJsb2NrYWJsZVVJIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgRmlsdGVyTWV0YWRhdGEgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBPYmplY3RVdGlscyB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHsgRmlsdGVyVXRpbHMgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSwgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGVTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgc29ydFNvdXJjZSA9IG5ldyBTdWJqZWN0PFNvcnRNZXRhfFNvcnRNZXRhW10+KCk7XG4gICAgcHJpdmF0ZSBzZWxlY3Rpb25Tb3VyY2UgPSBuZXcgU3ViamVjdCgpO1xuICAgIHByaXZhdGUgY29udGV4dE1lbnVTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcHJpdmF0ZSB1aVVwZGF0ZVNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBwcml2YXRlIHRvdGFsUmVjb3Jkc1NvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIHNvcnRTb3VyY2UkID0gdGhpcy5zb3J0U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHNlbGVjdGlvblNvdXJjZSQgPSB0aGlzLnNlbGVjdGlvblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgICBjb250ZXh0TWVudVNvdXJjZSQgPSB0aGlzLmNvbnRleHRNZW51U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHVpVXBkYXRlU291cmNlJCA9IHRoaXMudWlVcGRhdGVTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgdG90YWxSZWNvcmRzU291cmNlJCA9IHRoaXMudG90YWxSZWNvcmRzU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgb25Tb3J0KHNvcnRNZXRhOiBTb3J0TWV0YXxTb3J0TWV0YVtdKSB7XG4gICAgICAgIHRoaXMuc29ydFNvdXJjZS5uZXh0KHNvcnRNZXRhKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdGlvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UubmV4dCgpO1xuICAgIH1cblxuICAgIG9uQ29udGV4dE1lbnUobm9kZTogYW55KSB7XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVTb3VyY2UubmV4dChub2RlKTtcbiAgICB9XG5cbiAgICBvblVJVXBkYXRlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy51aVVwZGF0ZVNvdXJjZS5uZXh0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBvblRvdGFsUmVjb3Jkc0NoYW5nZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG90YWxSZWNvcmRzU291cmNlLm5leHQodmFsdWUpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRyZWVUYWJsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjY29udGFpbmVyIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBkYXRhLXNjcm9sbHNlbGVjdG9ycz1cIi5wLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWJvZHlcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC10cmVldGFibGUgcC1jb21wb25lbnQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdwLXRyZWV0YWJsZS1ob3ZlcmFibGUtcm93cyc6IChyb3dIb3Zlcnx8KHNlbGVjdGlvbk1vZGUgPT09ICdzaW5nbGUnIHx8IHNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScpKSxcbiAgICAgICAgICAgICAgICAncC10cmVldGFibGUtYXV0by1sYXlvdXQnOiBhdXRvTGF5b3V0LFxuICAgICAgICAgICAgICAgICdwLXRyZWV0YWJsZS1yZXNpemFibGUnOiByZXNpemFibGVDb2x1bW5zLFxuICAgICAgICAgICAgICAgICdwLXRyZWV0YWJsZS1yZXNpemFibGUtZml0JzogKHJlc2l6YWJsZUNvbHVtbnMgJiYgY29sdW1uUmVzaXplTW9kZSA9PT0gJ2ZpdCcpLFxuICAgICAgICAgICAgICAgICdwLXRyZWV0YWJsZS1mbGV4LXNjcm9sbGFibGUnOiAoc2Nyb2xsYWJsZSAmJiBzY3JvbGxIZWlnaHQgPT09ICdmbGV4Jyl9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10cmVldGFibGUtbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZyAmJiBzaG93TG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdHJlZXRhYmxlLWxvYWRpbmctb3ZlcmxheSBwLWNvbXBvbmVudC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIFtjbGFzc109XCIncC10cmVldGFibGUtbG9hZGluZy1pY29uIHBpLXNwaW4gJyArIGxvYWRpbmdJY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2FwdGlvblRlbXBsYXRlXCIgY2xhc3M9XCJwLXRyZWV0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2FwdGlvblRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwLXBhZ2luYXRvciBbcm93c109XCJyb3dzXCIgW2ZpcnN0XT1cImZpcnN0XCIgW3RvdGFsUmVjb3Jkc109XCJ0b3RhbFJlY29yZHNcIiBbcGFnZUxpbmtTaXplXT1cInBhZ2VMaW5rc1wiIHN0eWxlQ2xhc3M9XCJwLXBhZ2luYXRvci10b3BcIiBbYWx3YXlzU2hvd109XCJhbHdheXNTaG93UGFnaW5hdG9yXCJcbiAgICAgICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cIm9uUGFnZUNoYW5nZSgkZXZlbnQpXCIgW3Jvd3NQZXJQYWdlT3B0aW9uc109XCJyb3dzUGVyUGFnZU9wdGlvbnNcIiAqbmdJZj1cInBhZ2luYXRvciAmJiAocGFnaW5hdG9yUG9zaXRpb24gPT09ICd0b3AnIHx8IHBhZ2luYXRvclBvc2l0aW9uID09J2JvdGgnKVwiXG4gICAgICAgICAgICAgICAgW3RlbXBsYXRlTGVmdF09XCJwYWdpbmF0b3JMZWZ0VGVtcGxhdGVcIiBbdGVtcGxhdGVSaWdodF09XCJwYWdpbmF0b3JSaWdodFRlbXBsYXRlXCIgW2Ryb3Bkb3duQXBwZW5kVG9dPVwicGFnaW5hdG9yRHJvcGRvd25BcHBlbmRUb1wiXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGVdPVwiY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZVwiIFtzaG93Q3VycmVudFBhZ2VSZXBvcnRdPVwic2hvd0N1cnJlbnRQYWdlUmVwb3J0XCIgW3Nob3dKdW1wVG9QYWdlRHJvcGRvd25dPVwic2hvd0p1bXBUb1BhZ2VEcm9wZG93blwiIFtzaG93UGFnZUxpbmtzXT1cInNob3dQYWdlTGlua3NcIj48L3AtcGFnaW5hdG9yPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10cmVldGFibGUtd3JhcHBlclwiICpuZ0lmPVwiIXNjcm9sbGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgI3RhYmxlIFtuZ0NsYXNzXT1cInRhYmxlU3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInRhYmxlU3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbEdyb3VwVGVtcGxhdGU7IGNvbnRleHQgeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwicC10cmVldGFibGUtdGhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJUZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwicC10cmVldGFibGUtdGJvZHlcIiBbcFRyZWVUYWJsZUJvZHldPVwiY29sdW1uc1wiIFtwVHJlZVRhYmxlQm9keVRlbXBsYXRlXT1cImJvZHlUZW1wbGF0ZVwiPjwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0Zm9vdCBjbGFzcz1cInAtdHJlZXRhYmxlLXRmb290XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyVGVtcGxhdGU7IGNvbnRleHQgeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRyZWV0YWJsZS1zY3JvbGxhYmxlLXdyYXBwZXJcIiAqbmdJZj1cInNjcm9sbGFibGVcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRyZWV0YWJsZS1zY3JvbGxhYmxlLXZpZXcgcC10cmVldGFibGUtZnJvemVuLXZpZXdcIiAqbmdJZj1cImZyb3plbkNvbHVtbnN8fGZyb3plbkJvZHlUZW1wbGF0ZVwiICNzY3JvbGxhYmxlRnJvemVuVmlldyBbdHRTY3JvbGxhYmxlVmlld109XCJmcm96ZW5Db2x1bW5zXCIgW2Zyb3plbl09XCJ0cnVlXCIgW25nU3R5bGVdPVwie3dpZHRoOiBmcm96ZW5XaWR0aH1cIiBbc2Nyb2xsSGVpZ2h0XT1cInNjcm9sbEhlaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdHJlZXRhYmxlLXNjcm9sbGFibGUtdmlld1wiICNzY3JvbGxhYmxlVmlldyBbdHRTY3JvbGxhYmxlVmlld109XCJjb2x1bW5zXCIgW2Zyb3plbl09XCJmYWxzZVwiIFtzY3JvbGxIZWlnaHRdPVwic2Nyb2xsSGVpZ2h0XCIgW25nU3R5bGVdPVwie2xlZnQ6IGZyb3plbldpZHRoLCB3aWR0aDogJ2NhbGMoMTAwJSAtICcrZnJvemVuV2lkdGgrJyknfVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwLXBhZ2luYXRvciBbcm93c109XCJyb3dzXCIgW2ZpcnN0XT1cImZpcnN0XCIgW3RvdGFsUmVjb3Jkc109XCJ0b3RhbFJlY29yZHNcIiBbcGFnZUxpbmtTaXplXT1cInBhZ2VMaW5rc1wiIHN0eWxlQ2xhc3M9XCJwLXBhZ2luYXRvci1ib3R0b21cIiBbYWx3YXlzU2hvd109XCJhbHdheXNTaG93UGFnaW5hdG9yXCJcbiAgICAgICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cIm9uUGFnZUNoYW5nZSgkZXZlbnQpXCIgW3Jvd3NQZXJQYWdlT3B0aW9uc109XCJyb3dzUGVyUGFnZU9wdGlvbnNcIiAqbmdJZj1cInBhZ2luYXRvciAmJiAocGFnaW5hdG9yUG9zaXRpb24gPT09ICdib3R0b20nIHx8IHBhZ2luYXRvclBvc2l0aW9uID09J2JvdGgnKVwiXG4gICAgICAgICAgICAgICAgW3RlbXBsYXRlTGVmdF09XCJwYWdpbmF0b3JMZWZ0VGVtcGxhdGVcIiBbdGVtcGxhdGVSaWdodF09XCJwYWdpbmF0b3JSaWdodFRlbXBsYXRlXCIgW2Ryb3Bkb3duQXBwZW5kVG9dPVwicGFnaW5hdG9yRHJvcGRvd25BcHBlbmRUb1wiXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGVdPVwiY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZVwiIFtzaG93Q3VycmVudFBhZ2VSZXBvcnRdPVwic2hvd0N1cnJlbnRQYWdlUmVwb3J0XCIgW3Nob3dKdW1wVG9QYWdlRHJvcGRvd25dPVwic2hvd0p1bXBUb1BhZ2VEcm9wZG93blwiIFtzaG93UGFnZUxpbmtzXT1cInNob3dQYWdlTGlua3NcIj48L3AtcGFnaW5hdG9yPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInN1bW1hcnlUZW1wbGF0ZVwiIGNsYXNzPVwicC10cmVldGFibGUtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInN1bW1hcnlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgI3Jlc2l6ZUhlbHBlciBjbGFzcz1cInAtY29sdW1uLXJlc2l6ZXItaGVscGVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiAqbmdJZj1cInJlc2l6YWJsZUNvbHVtbnNcIj48L2Rpdj5cblxuICAgICAgICAgICAgPHNwYW4gI3Jlb3JkZXJJbmRpY2F0b3JVcCBjbGFzcz1cInBpIHBpLWFycm93LWRvd24gcC10cmVldGFibGUtcmVvcmRlci1pbmRpY2F0b3ItdXBcIiAqbmdJZj1cInJlb3JkZXJhYmxlQ29sdW1uc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICNyZW9yZGVySW5kaWNhdG9yRG93biBjbGFzcz1cInBpIHBpLWFycm93LXVwIHAtdHJlZXRhYmxlLXJlb3JkZXItaW5kaWNhdG9yLWRvd25cIiAqbmdJZj1cInJlb3JkZXJhYmxlQ29sdW1uc1wiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtUcmVlVGFibGVTZXJ2aWNlXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL3RyZWV0YWJsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgQmxvY2thYmxlVUksIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0YWJsZVN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSB0YWJsZVN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGF1dG9MYXlvdXQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBsYXp5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBsYXp5TG9hZE9uSW5pdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBwYWdpbmF0b3I6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSByb3dzOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBmaXJzdDogbnVtYmVyID0gMDtcblxuICAgIEBJbnB1dCgpIHBhZ2VMaW5rczogbnVtYmVyID0gNTtcblxuICAgIEBJbnB1dCgpIHJvd3NQZXJQYWdlT3B0aW9uczogYW55W107XG5cbiAgICBASW5wdXQoKSBhbHdheXNTaG93UGFnaW5hdG9yOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHBhZ2luYXRvclBvc2l0aW9uOiBzdHJpbmcgPSAnYm90dG9tJztcblxuICAgIEBJbnB1dCgpIHBhZ2luYXRvckRyb3Bkb3duQXBwZW5kVG86IGFueTtcblxuICAgIEBJbnB1dCgpIGN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGU6IHN0cmluZyA9ICd7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbFBhZ2VzfSc7XG5cbiAgICBASW5wdXQoKSBzaG93Q3VycmVudFBhZ2VSZXBvcnQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBzaG93SnVtcFRvUGFnZURyb3Bkb3duOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2hvd1BhZ2VMaW5rczogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBkZWZhdWx0U29ydE9yZGVyOiBudW1iZXIgPSAxO1xuXG4gICAgQElucHV0KCkgc29ydE1vZGU6IHN0cmluZyA9ICdzaW5nbGUnO1xuXG4gICAgQElucHV0KCkgcmVzZXRQYWdlT25Tb3J0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGN1c3RvbVNvcnQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBzZWxlY3Rpb25Nb2RlOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgpIGNvbnRleHRNZW51U2VsZWN0aW9uOiBhbnk7XG5cbiAgICBAT3V0cHV0KCkgY29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KCkgY29udGV4dE1lbnVTZWxlY3Rpb25Nb2RlOiBzdHJpbmcgPSBcInNlcGFyYXRlXCI7XG5cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBtZXRhS2V5U2VsZWN0aW9uOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgY29tcGFyZVNlbGVjdGlvbkJ5OiBzdHJpbmcgPSAnZGVlcEVxdWFscyc7XG5cbiAgICBASW5wdXQoKSByb3dIb3ZlcjogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBsb2FkaW5nSWNvbjogc3RyaW5nID0gJ3BpIHBpLXNwaW5uZXInO1xuXG4gICAgQElucHV0KCkgc2hvd0xvYWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBzY3JvbGxhYmxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2Nyb2xsSGVpZ2h0OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbERlbGF5OiBudW1iZXIgPSAxNTA7XG5cbiAgICBASW5wdXQoKSB2aXJ0dWFsUm93SGVpZ2h0OiBudW1iZXIgPSAyODtcblxuICAgIEBJbnB1dCgpIG1pbkJ1ZmZlclB4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBtYXhCdWZmZXJQeDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgZnJvemVuV2lkdGg6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGZyb3plbkNvbHVtbnM6IGFueVtdO1xuXG4gICAgQElucHV0KCkgcmVzaXphYmxlQ29sdW1uczogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGNvbHVtblJlc2l6ZU1vZGU6IHN0cmluZyA9ICdmaXQnO1xuXG4gICAgQElucHV0KCkgcmVvcmRlcmFibGVDb2x1bW5zOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgY29udGV4dE1lbnU6IGFueTtcblxuICAgIEBJbnB1dCgpIHJvd1RyYWNrQnk6IEZ1bmN0aW9uID0gKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkgPT4gaXRlbTtcblxuICAgIEBJbnB1dCgpIGZpbHRlcnM6IHsgW3M6IHN0cmluZ106IEZpbHRlck1ldGFkYXRhOyB9ID0ge307XG5cbiAgICBASW5wdXQoKSBnbG9iYWxGaWx0ZXJGaWVsZHM6IHN0cmluZ1tdO1xuXG4gICAgQElucHV0KCkgZmlsdGVyRGVsYXk6IG51bWJlciA9IDMwMDtcblxuICAgIEBJbnB1dCgpIGZpbHRlck1vZGU6IHN0cmluZyA9ICdsZW5pZW50JztcblxuICAgIEBJbnB1dCgpIGZpbHRlckxvY2FsZTogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIG9uRmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbk5vZGVFeHBhbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uTm9kZUNvbGxhcHNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvblBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uU29ydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25MYXp5TG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgc29ydEZ1bmN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkNvbFJlc2l6ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Db2xSZW9yZGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbk5vZGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uTm9kZVVuc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51U2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkhlYWRlckNoZWNrYm94VG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkVkaXRJbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkVkaXRDb21wbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25FZGl0Q2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Jlc2l6ZUhlbHBlcicpIHJlc2l6ZUhlbHBlclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Jlb3JkZXJJbmRpY2F0b3JVcCcpIHJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Jlb3JkZXJJbmRpY2F0b3JEb3duJykgcmVvcmRlckluZGljYXRvckRvd25WaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCd0YWJsZScpIHRhYmxlVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsYWJsZVZpZXcnKSBzY3JvbGxhYmxlVmlld0NoaWxkO1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsYWJsZUZyb3plblZpZXcnKSBzY3JvbGxhYmxlRnJvemVuVmlld0NoaWxkO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPjtcblxuICAgIF92YWx1ZTogVHJlZU5vZGVbXSA9IFtdO1xuXG4gICAgc2VyaWFsaXplZFZhbHVlOiBhbnlbXTtcblxuICAgIF90b3RhbFJlY29yZHM6IG51bWJlciA9IDA7XG5cbiAgICBfbXVsdGlTb3J0TWV0YTogU29ydE1ldGFbXTtcblxuICAgIF9zb3J0RmllbGQ6IHN0cmluZztcblxuICAgIF9zb3J0T3JkZXI6IG51bWJlciA9IDE7XG5cbiAgICBmaWx0ZXJlZE5vZGVzOiBhbnlbXTtcblxuICAgIGZpbHRlclRpbWVvdXQ6IGFueTtcblxuICAgIGNvbEdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBjYXB0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGJvZHlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGxvYWRpbmdCb2R5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHN1bW1hcnlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGVtcHR5TWVzc2FnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcGFnaW5hdG9yTGVmdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcGFnaW5hdG9yUmlnaHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGZyb3plbkhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZnJvemVuQm9keVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZnJvemVuRm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBmcm96ZW5Db2xHcm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgbGFzdFJlc2l6ZXJIZWxwZXJYOiBudW1iZXI7XG5cbiAgICByZW9yZGVySWNvbldpZHRoOiBudW1iZXI7XG5cbiAgICByZW9yZGVySWNvbkhlaWdodDogbnVtYmVyO1xuXG4gICAgZHJhZ2dlZENvbHVtbjogYW55O1xuXG4gICAgZHJvcFBvc2l0aW9uOiBudW1iZXI7XG5cbiAgICBwcmV2ZW50U2VsZWN0aW9uU2V0dGVyUHJvcGFnYXRpb246IGJvb2xlYW47XG5cbiAgICBfc2VsZWN0aW9uOiBhbnk7XG5cbiAgICBzZWxlY3Rpb25LZXlzOiBhbnkgPSB7fTtcblxuICAgIHJvd1RvdWNoZWQ6IGJvb2xlYW47XG5cbiAgICBlZGl0aW5nQ2VsbDogRWxlbWVudDtcblxuICAgIGVkaXRpbmdDZWxsQ2xpY2s6IGJvb2xlYW47XG5cbiAgICBkb2N1bWVudEVkaXRMaXN0ZW5lcjogYW55O1xuXG4gICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgICB0b2dnbGVSb3dJbmRleDogbnVtYmVyO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxhenkgJiYgdGhpcy5sYXp5TG9hZE9uSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhcHRpb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHRpb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkaW5nYm9keSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0JvZHlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3N1bW1hcnknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdjb2xncm91cCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sR3JvdXBUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdlbXB0eW1lc3NhZ2UnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2luYXRvcmxlZnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvckxlZnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdwYWdpbmF0b3JyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yUmlnaHRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmcm96ZW5oZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plbkhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zyb3plbmJvZHknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plbkJvZHlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmcm96ZW5mb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plbkZvb3RlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zyb3plbmNvbGdyb3VwJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm96ZW5Db2xHcm91cFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lLCBwdWJsaWMgdGFibGVTZXJ2aWNlOiBUcmVlVGFibGVTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2UudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gc2ltcGxlQ2hhbmdlLnZhbHVlLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhenkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkcyA9ICh0aGlzLl92YWx1ZSA/IHRoaXMuX3ZhbHVlLmxlbmd0aCA6IDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ydE1vZGUgPT0gJ3NpbmdsZScgJiYgdGhpcy5zb3J0RmllbGQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFNpbmdsZSgpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc29ydE1vZGUgPT0gJ211bHRpcGxlJyAmJiB0aGlzLm11bHRpU29ydE1ldGEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydE11bHRpcGxlKCk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNGaWx0ZXIoKSkgICAgICAgLy9zb3J0IGFscmVhZHkgZmlsdGVyc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJpYWxpemVkVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uVUlVcGRhdGUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2ltcGxlQ2hhbmdlLnNvcnRGaWVsZCkge1xuICAgICAgICAgICAgdGhpcy5fc29ydEZpZWxkID0gc2ltcGxlQ2hhbmdlLnNvcnRGaWVsZC5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIC8vYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGxvYWQgcHJpb3IgdG8gbGF6eSBpbml0aWFsaXphdGlvbiBhdCBvbkluaXRcbiAgICAgICAgICAgIGlmICggIXRoaXMubGF6eSB8fCB0aGlzLmluaXRpYWxpemVkICkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRTaW5nbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2ltcGxlQ2hhbmdlLnNvcnRPcmRlcikge1xuICAgICAgICAgICAgdGhpcy5fc29ydE9yZGVyID0gc2ltcGxlQ2hhbmdlLnNvcnRPcmRlci5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIC8vYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGxvYWQgcHJpb3IgdG8gbGF6eSBpbml0aWFsaXphdGlvbiBhdCBvbkluaXRcbiAgICAgICAgICAgIGlmICggIXRoaXMubGF6eSB8fCB0aGlzLmluaXRpYWxpemVkICkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRTaW5nbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2ltcGxlQ2hhbmdlLm11bHRpU29ydE1ldGEpIHtcbiAgICAgICAgICAgIHRoaXMuX211bHRpU29ydE1ldGEgPSBzaW1wbGVDaGFuZ2UubXVsdGlTb3J0TWV0YS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydE11bHRpcGxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2ltcGxlQ2hhbmdlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gc2ltcGxlQ2hhbmdlLnNlbGVjdGlvbi5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcmV2ZW50U2VsZWN0aW9uU2V0dGVyUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbktleXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcmV2ZW50U2VsZWN0aW9uU2V0dGVyUHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCB2YWx1ZSgpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0IHZhbHVlKHZhbDogYW55W10pIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VyaWFsaXplZFZhbHVlKCkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnBhZ2luYXRvcilcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplUGFnZU5vZGVzKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplTm9kZXMobnVsbCwgdGhpcy5maWx0ZXJlZE5vZGVzfHx0aGlzLnZhbHVlLCAwLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemVOb2RlcyhwYXJlbnQsIG5vZGVzLCBsZXZlbCwgdmlzaWJsZSkge1xuICAgICAgICBpZiAobm9kZXMgJiYgbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dOb2RlID0ge1xuICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB2aXNpYmxlICYmIChwYXJlbnQgPyBwYXJlbnQuZXhwYW5kZWQgOiB0cnVlKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVkVmFsdWUucHVzaChyb3dOb2RlKTtcblxuICAgICAgICAgICAgICAgIGlmIChyb3dOb2RlLnZpc2libGUgJiYgbm9kZS5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbGl6ZU5vZGVzKG5vZGUsIG5vZGUuY2hpbGRyZW4sIGxldmVsICsgMSwgcm93Tm9kZS52aXNpYmxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXJpYWxpemVQYWdlTm9kZXMoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5maWx0ZXJlZE5vZGVzIHx8IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplZFZhbHVlID0gW107XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHRoaXMubGF6eSA/IDAgOiB0aGlzLmZpcnN0O1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBmaXJzdDsgaSA8IChmaXJzdCArIHRoaXMucm93cyk7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbGl6ZWRWYWx1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVOb2Rlcyhub2RlLCBub2RlLmNoaWxkcmVuLCAxLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgdG90YWxSZWNvcmRzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbFJlY29yZHM7XG4gICAgfVxuICAgIHNldCB0b3RhbFJlY29yZHModmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdG90YWxSZWNvcmRzID0gdmFsO1xuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblRvdGFsUmVjb3Jkc0NoYW5nZSh0aGlzLl90b3RhbFJlY29yZHMpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBzb3J0RmllbGQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRGaWVsZDtcbiAgICB9XG5cbiAgICBzZXQgc29ydEZpZWxkKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3NvcnRGaWVsZCA9IHZhbDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgc29ydE9yZGVyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXI7XG4gICAgfVxuICAgIHNldCBzb3J0T3JkZXIodmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc29ydE9yZGVyID0gdmFsO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBtdWx0aVNvcnRNZXRhKCk6IFNvcnRNZXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXVsdGlTb3J0TWV0YTtcbiAgICB9XG5cbiAgICBzZXQgbXVsdGlTb3J0TWV0YSh2YWw6IFNvcnRNZXRhW10pIHtcbiAgICAgICAgdGhpcy5fbXVsdGlTb3J0TWV0YSA9IHZhbDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgc2VsZWN0aW9uKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb247XG4gICAgfVxuXG4gICAgc2V0IHNlbGVjdGlvbih2YWw6IGFueSkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB2YWw7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0aW9uS2V5cygpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YUtleSAmJiB0aGlzLl9zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5cyA9IHt9O1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLl9zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW1N0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG5vZGUuZGF0YSwgdGhpcy5kYXRhS2V5KSldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbktleXNbU3RyaW5nKE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEodGhpcy5fc2VsZWN0aW9uLmRhdGEsIHRoaXMuZGF0YUtleSkpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBhZ2VDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5maXJzdCA9IGV2ZW50LmZpcnN0O1xuICAgICAgICB0aGlzLnJvd3MgPSBldmVudC5yb3dzO1xuXG4gICAgICAgIGlmICh0aGlzLmxhenkpXG4gICAgICAgICAgICB0aGlzLm9uTGF6eUxvYWQuZW1pdCh0aGlzLmNyZWF0ZUxhenlMb2FkTWV0YWRhdGEoKSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplUGFnZU5vZGVzKCk7XG5cbiAgICAgICAgdGhpcy5vblBhZ2UuZW1pdCh7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5maXJzdCxcbiAgICAgICAgICAgIHJvd3M6IHRoaXMucm93c1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblVJVXBkYXRlKHRoaXMudmFsdWUpO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnQoZXZlbnQpIHtcbiAgICAgICAgbGV0IG9yaWdpbmFsRXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50O1xuXG4gICAgICAgIGlmICh0aGlzLnNvcnRNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgdGhpcy5fc29ydE9yZGVyID0gKHRoaXMuc29ydEZpZWxkID09PSBldmVudC5maWVsZCkgPyB0aGlzLnNvcnRPcmRlciAqIC0xIDogdGhpcy5kZWZhdWx0U29ydE9yZGVyO1xuICAgICAgICAgICAgdGhpcy5fc29ydEZpZWxkID0gZXZlbnQuZmllbGQ7XG4gICAgICAgICAgICB0aGlzLnNvcnRTaW5nbGUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVzZXRQYWdlT25Tb3J0ICYmIHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgbGV0IG1ldGFLZXkgPSBvcmlnaW5hbEV2ZW50Lm1ldGFLZXkgfHwgb3JpZ2luYWxFdmVudC5jdHJsS2V5O1xuICAgICAgICAgICAgbGV0IHNvcnRNZXRhID0gdGhpcy5nZXRTb3J0TWV0YShldmVudC5maWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChzb3J0TWV0YSkge1xuICAgICAgICAgICAgICAgIGlmICghbWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tdWx0aVNvcnRNZXRhID0gW3sgZmllbGQ6IGV2ZW50LmZpZWxkLCBvcmRlcjogc29ydE1ldGEub3JkZXIgKiAtMSB9XVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc2V0UGFnZU9uU29ydCAmJiB0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydE1ldGEub3JkZXIgPSBzb3J0TWV0YS5vcmRlciAqIC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghbWV0YUtleSB8fCAhdGhpcy5tdWx0aVNvcnRNZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX211bHRpU29ydE1ldGEgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldFBhZ2VPblNvcnQgJiYgdGhpcy5zY3JvbGxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tdWx0aVNvcnRNZXRhLnB1c2goeyBmaWVsZDogZXZlbnQuZmllbGQsIG9yZGVyOiB0aGlzLmRlZmF1bHRTb3J0T3JkZXIgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc29ydE11bHRpcGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0U2luZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5zb3J0RmllbGQgJiYgdGhpcy5zb3J0T3JkZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTGF6eUxvYWQuZW1pdCh0aGlzLmNyZWF0ZUxhenlMb2FkTWV0YWRhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0Tm9kZXModGhpcy52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNGaWx0ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzb3J0TWV0YTogU29ydE1ldGEgPSB7XG4gICAgICAgICAgICAgICAgZmllbGQ6IHRoaXMuc29ydEZpZWxkLFxuICAgICAgICAgICAgICAgIG9yZGVyOiB0aGlzLnNvcnRPcmRlclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vblNvcnQuZW1pdChzb3J0TWV0YSk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNvcnQoc29ydE1ldGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJpYWxpemVkVmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnROb2Rlcyhub2Rlcykge1xuICAgICAgICBpZiAoIW5vZGVzIHx8IG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU29ydCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0RnVuY3Rpb24uZW1pdCh7XG4gICAgICAgICAgICAgICAgZGF0YTogbm9kZXMsXG4gICAgICAgICAgICAgICAgbW9kZTogdGhpcy5zb3J0TW9kZSxcbiAgICAgICAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0RmllbGQsXG4gICAgICAgICAgICAgICAgb3JkZXI6IHRoaXMuc29ydE9yZGVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzLnNvcnQoKG5vZGUxLCBub2RlMikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTEgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG5vZGUxLmRhdGEsIHRoaXMuc29ydEZpZWxkKTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUyID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShub2RlMi5kYXRhLCB0aGlzLnNvcnRGaWVsZCk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IC0xO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlMSAhPSBudWxsICYmIHZhbHVlMiA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlMSA9PSBudWxsICYmIHZhbHVlMiA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZTEgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZTIgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTEubG9jYWxlQ29tcGFyZSh2YWx1ZTIsIHVuZGVmaW5lZCwge251bWVyaWM6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICh2YWx1ZTEgPCB2YWx1ZTIpID8gLTEgOiAodmFsdWUxID4gdmFsdWUyKSA/IDEgOiAwO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLnNvcnRPcmRlciAqIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgdGhpcy5zb3J0Tm9kZXMobm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0TXVsdGlwbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpU29ydE1ldGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTGF6eUxvYWQuZW1pdCh0aGlzLmNyZWF0ZUxhenlMb2FkTWV0YWRhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICB0aGlzLnNvcnRNdWx0aXBsZU5vZGVzKHRoaXMudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9uU29ydC5lbWl0KHtcbiAgICAgICAgICAgICAgICBtdWx0aXNvcnRtZXRhOiB0aGlzLm11bHRpU29ydE1ldGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJpYWxpemVkVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uU29ydCh0aGlzLm11bHRpU29ydE1ldGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29ydE11bHRpcGxlTm9kZXMobm9kZXMpIHtcbiAgICAgICAgaWYgKCFub2RlcyB8fCBub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVNvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEZ1bmN0aW9uLmVtaXQoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgbW9kZTogdGhpcy5zb3J0TW9kZSxcbiAgICAgICAgICAgICAgICBtdWx0aVNvcnRNZXRhOiB0aGlzLm11bHRpU29ydE1ldGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZXMuc29ydCgobm9kZTEsIG5vZGUyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlzb3J0RmllbGQobm9kZTEsIG5vZGUyLCB0aGlzLm11bHRpU29ydE1ldGEsIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydE11bHRpcGxlTm9kZXMobm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtdWx0aXNvcnRGaWVsZChub2RlMSwgbm9kZTIsIG11bHRpU29ydE1ldGEsIGluZGV4KSB7XG4gICAgICAgIGxldCB2YWx1ZTEgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG5vZGUxLmRhdGEsIG11bHRpU29ydE1ldGFbaW5kZXhdLmZpZWxkKTtcbiAgICAgICAgbGV0IHZhbHVlMiA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEobm9kZTIuZGF0YSwgbXVsdGlTb3J0TWV0YVtpbmRleF0uZmllbGQpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyICE9IG51bGwpXG4gICAgICAgICAgICByZXN1bHQgPSAtMTtcbiAgICAgICAgZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpXG4gICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICBlbHNlIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgPT0gbnVsbClcbiAgICAgICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUxID09ICdzdHJpbmcnIHx8IHZhbHVlMSBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICAgICAgaWYgKHZhbHVlMS5sb2NhbGVDb21wYXJlICYmICh2YWx1ZTEgIT0gdmFsdWUyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAobXVsdGlTb3J0TWV0YVtpbmRleF0ub3JkZXIgKiB2YWx1ZTEubG9jYWxlQ29tcGFyZSh2YWx1ZTIsIHVuZGVmaW5lZCwge251bWVyaWM6IHRydWV9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAodmFsdWUxIDwgdmFsdWUyKSA/IC0xIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZTEgPT0gdmFsdWUyKSB7XG4gICAgICAgICAgICByZXR1cm4gKG11bHRpU29ydE1ldGEubGVuZ3RoIC0gMSkgPiAoaW5kZXgpID8gKHRoaXMubXVsdGlzb3J0RmllbGQobm9kZTEsIG5vZGUyLCBtdWx0aVNvcnRNZXRhLCBpbmRleCArIDEpKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG11bHRpU29ydE1ldGFbaW5kZXhdLm9yZGVyICogcmVzdWx0KTtcbiAgICB9XG5cbiAgICBnZXRTb3J0TWV0YShmaWVsZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpU29ydE1ldGEgJiYgdGhpcy5tdWx0aVNvcnRNZXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm11bHRpU29ydE1ldGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aVNvcnRNZXRhW2ldLmZpZWxkID09PSBmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aVNvcnRNZXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlzU29ydGVkKGZpZWxkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydE1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuc29ydEZpZWxkICYmIHRoaXMuc29ydEZpZWxkID09PSBmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgbGV0IHNvcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlTb3J0TWV0YSnCoHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tdWx0aVNvcnRNZXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpU29ydE1ldGFbaV0uZmllbGQgPT0gZmllbGQpwqB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc29ydGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3Q6IHRoaXMuZmlyc3QsXG4gICAgICAgICAgICByb3dzOiB0aGlzLnJvd3MsXG4gICAgICAgICAgICBzb3J0RmllbGQ6IHRoaXMuc29ydEZpZWxkLFxuICAgICAgICAgICAgc29ydE9yZGVyOiB0aGlzLnNvcnRPcmRlcixcbiAgICAgICAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcbiAgICAgICAgICAgIGdsb2JhbEZpbHRlcjogdGhpcy5maWx0ZXJzICYmIHRoaXMuZmlsdGVyc1snZ2xvYmFsJ10gPyB0aGlzLmZpbHRlcnNbJ2dsb2JhbCddLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgIG11bHRpU29ydE1ldGE6IHRoaXMubXVsdGlTb3J0TWV0YVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldFNjcm9sbFRvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbClcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9WaXJ0dWFsSW5kZXgoMCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe3RvcDogMH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY3JvbGxUb1ZpcnR1YWxJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGVWaWV3Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsYWJsZVZpZXdDaGlsZC5zY3JvbGxUb1ZpcnR1YWxJbmRleChpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxhYmxlRnJvemVuVmlld0NoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGFibGVGcm96ZW5WaWV3Q2hpbGQuc2Nyb2xsVG9WaXJ0dWFsSW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNjcm9sbFRvKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZVZpZXdDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlVmlld0NoaWxkLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZUZyb3plblZpZXdDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlRnJvemVuVmlld0NoaWxkLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmZpbHRlcmVkTm9kZXN8fHRoaXMudmFsdWU7XG4gICAgICAgIHJldHVybiBkYXRhID09IG51bGwgfHwgZGF0YS5sZW5ndGggPT0gMDtcbiAgICB9XG5cbiAgICBnZXRCbG9ja2FibGVFbGVtZW50KCk6IEhUTUxFbGVtZW50wqB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgb25Db2x1bW5SZXNpemVCZWdpbihldmVudCkge1xuICAgICAgICBsZXQgY29udGFpbmVyTGVmdCA9IERvbUhhbmRsZXIuZ2V0T2Zmc2V0KHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpLmxlZnQ7XG4gICAgICAgIHRoaXMubGFzdFJlc2l6ZXJIZWxwZXJYID0gKGV2ZW50LnBhZ2VYIC0gY29udGFpbmVyTGVmdCArIHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25Db2x1bW5SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckxlZnQgPSBEb21IYW5kbGVyLmdldE9mZnNldCh0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KS5sZWZ0O1xuICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLXVuc2VsZWN0YWJsZS10ZXh0Jyk7XG4gICAgICAgIHRoaXMucmVzaXplSGVscGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLnJlc2l6ZUhlbHBlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IDAgKyAncHgnO1xuICAgICAgICB0aGlzLnJlc2l6ZUhlbHBlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAoZXZlbnQucGFnZVggLSBjb250YWluZXJMZWZ0ICsgdGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0KSArICdweCc7XG5cbiAgICAgICAgdGhpcy5yZXNpemVIZWxwZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBvbkNvbHVtblJlc2l6ZUVuZChldmVudCwgY29sdW1uKSB7XG4gICAgICAgIGxldCBkZWx0YSA9IHRoaXMucmVzaXplSGVscGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCAtIHRoaXMubGFzdFJlc2l6ZXJIZWxwZXJYO1xuICAgICAgICBsZXQgY29sdW1uV2lkdGggPSBjb2x1bW4ub2Zmc2V0V2lkdGg7XG4gICAgICAgIGxldCBuZXdDb2x1bW5XaWR0aCA9IGNvbHVtbldpZHRoICsgZGVsdGE7XG4gICAgICAgIGxldCBtaW5XaWR0aCA9IGNvbHVtbi5zdHlsZS5taW5XaWR0aCB8fCAxNTtcblxuICAgICAgICBpZiAoY29sdW1uV2lkdGggKyBkZWx0YSA+IHBhcnNlSW50KG1pbldpZHRoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uUmVzaXplTW9kZSA9PT0gJ2ZpdCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dENvbHVtbiA9IGNvbHVtbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFuZXh0Q29sdW1uLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q29sdW1uID0gbmV4dENvbHVtbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRDb2x1bW5XaWR0aCA9IG5leHRDb2x1bW4ub2Zmc2V0V2lkdGggLSBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRDb2x1bW5NaW5XaWR0aCA9IG5leHRDb2x1bW4uc3R5bGUubWluV2lkdGggfHwgMTU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NvbHVtbldpZHRoID4gMTUgJiYgbmV4dENvbHVtbldpZHRoID4gcGFyc2VJbnQobmV4dENvbHVtbk1pbldpZHRoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlVmlldyA9IHRoaXMuZmluZFBhcmVudFNjcm9sbGFibGVWaWV3KGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVCb2R5VGFibGUgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICcucC10cmVldGFibGUtc2Nyb2xsYWJsZS1ib2R5IHRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVIZWFkZXJUYWJsZSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJ3RhYmxlLnAtdHJlZXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVGb290ZXJUYWJsZSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJ3RhYmxlLnAtdHJlZXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc2l6ZUNvbHVtbkluZGV4ID0gRG9tSGFuZGxlci5pbmRleChjb2x1bW4pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVDb2xHcm91cChzY3JvbGxhYmxlSGVhZGVyVGFibGUsIHJlc2l6ZUNvbHVtbkluZGV4LCBuZXdDb2x1bW5XaWR0aCwgbmV4dENvbHVtbldpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVCb2R5VGFibGUsIHJlc2l6ZUNvbHVtbkluZGV4LCBuZXdDb2x1bW5XaWR0aCwgbmV4dENvbHVtbldpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVGb290ZXJUYWJsZSwgcmVzaXplQ29sdW1uSW5kZXgsIG5ld0NvbHVtbldpZHRoLCBuZXh0Q29sdW1uV2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlLndpZHRoID0gbmV3Q29sdW1uV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRDb2x1bW4uc3R5bGUud2lkdGggPSBuZXh0Q29sdW1uV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY29sdW1uUmVzaXplTW9kZSA9PT0gJ2V4cGFuZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlVmlldyA9IHRoaXMuZmluZFBhcmVudFNjcm9sbGFibGVWaWV3KGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlQm9keSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJy5wLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWJvZHknKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVIZWFkZXIgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICcucC10cmVldGFibGUtc2Nyb2xsYWJsZS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVGb290ZXIgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICcucC10cmVldGFibGUtc2Nyb2xsYWJsZS1mb290ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVCb2R5VGFibGUgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICcucC10cmVldGFibGUtc2Nyb2xsYWJsZS1ib2R5IHRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlSGVhZGVyVGFibGUgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICd0YWJsZS5wLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWhlYWRlci10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsYWJsZUZvb3RlclRhYmxlID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVWaWV3LCAndGFibGUucC10cmVldGFibGUtc2Nyb2xsYWJsZS1mb290ZXItdGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUJvZHlUYWJsZS5zdHlsZS53aWR0aCA9IHNjcm9sbGFibGVCb2R5VGFibGUub2Zmc2V0V2lkdGggKyBkZWx0YSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVIZWFkZXJUYWJsZS5zdHlsZS53aWR0aCA9IHNjcm9sbGFibGVIZWFkZXJUYWJsZS5vZmZzZXRXaWR0aCArIGRlbHRhICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbGFibGVGb290ZXJUYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUZvb3RlclRhYmxlLnN0eWxlLndpZHRoID0gc2Nyb2xsYWJsZUZvb3RlclRhYmxlLm9mZnNldFdpZHRoICsgZGVsdGEgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNpemVDb2x1bW5JbmRleCA9IERvbUhhbmRsZXIuaW5kZXgoY29sdW1uKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxhYmxlQm9keVRhYmxlV2lkdGggPSBjb2x1bW4gPyBzY3JvbGxhYmxlQm9keVRhYmxlLm9mZnNldFdpZHRoICsgZGVsdGEgOiBuZXdDb2x1bW5XaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUhlYWRlclRhYmxlV2lkdGggPSBjb2x1bW4gPyBzY3JvbGxhYmxlSGVhZGVyVGFibGUub2Zmc2V0V2lkdGggKyBkZWx0YSA6IG5ld0NvbHVtbldpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0NvbnRhaW5lckluVmlld3BvcnQgPSB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoID49IHNjcm9sbGFibGVCb2R5VGFibGVXaWR0aDtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2V0V2lkdGggPSAoY29udGFpbmVyLCB0YWJsZSwgd2lkdGgsIGlzQ29udGFpbmVySW5WaWV3cG9ydCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lciAmJiB0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGlzQ29udGFpbmVySW5WaWV3cG9ydCA/IHdpZHRoICsgRG9tSGFuZGxlci5jYWxjdWxhdGVTY3JvbGxiYXJXaWR0aChzY3JvbGxhYmxlQm9keSkgKyAncHgnIDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lkdGgoc2Nyb2xsYWJsZUJvZHksIHNjcm9sbGFibGVCb2R5VGFibGUsIHNjcm9sbGFibGVCb2R5VGFibGVXaWR0aCwgaXNDb250YWluZXJJblZpZXdwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0V2lkdGgoc2Nyb2xsYWJsZUhlYWRlciwgc2Nyb2xsYWJsZUhlYWRlclRhYmxlLCBzY3JvbGxhYmxlSGVhZGVyVGFibGVXaWR0aCwgaXNDb250YWluZXJJblZpZXdwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0V2lkdGgoc2Nyb2xsYWJsZUZvb3Rlciwgc2Nyb2xsYWJsZUZvb3RlclRhYmxlLCBzY3JvbGxhYmxlSGVhZGVyVGFibGVXaWR0aCwgaXNDb250YWluZXJJblZpZXdwb3J0KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVIZWFkZXJUYWJsZSwgcmVzaXplQ29sdW1uSW5kZXgsIG5ld0NvbHVtbldpZHRoLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVDb2xHcm91cChzY3JvbGxhYmxlQm9keVRhYmxlLCByZXNpemVDb2x1bW5JbmRleCwgbmV3Q29sdW1uV2lkdGgsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVGb290ZXJUYWJsZSwgcmVzaXplQ29sdW1uSW5kZXgsIG5ld0NvbHVtbldpZHRoLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMudGFibGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIGRlbHRhICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlLndpZHRoID0gbmV3Q29sdW1uV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyV2lkdGggPSB0aGlzLnRhYmxlVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBjb250YWluZXJXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9uQ29sUmVzaXplLmVtaXQoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGNvbHVtbixcbiAgICAgICAgICAgICAgICBkZWx0YTogZGVsdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNpemVIZWxwZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLXVuc2VsZWN0YWJsZS10ZXh0Jyk7XG4gICAgfVxuXG4gICAgZmluZFBhcmVudFNjcm9sbGFibGVWaWV3KGNvbHVtbikge1xuICAgICAgICBpZiAoY29sdW1uKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gY29sdW1uLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB3aGlsZSAocGFyZW50ICYmICFEb21IYW5kbGVyLmhhc0NsYXNzKHBhcmVudCwgJ3AtdHJlZXRhYmxlLXNjcm9sbGFibGUtdmlldycpKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUNvbEdyb3VwKHRhYmxlLCByZXNpemVDb2x1bW5JbmRleCwgbmV3Q29sdW1uV2lkdGgsIG5leHRDb2x1bW5XaWR0aCkge1xuICAgICAgICBpZiAodGFibGUpIHtcbiAgICAgICAgICAgIGxldCBjb2xHcm91cCA9IHRhYmxlLmNoaWxkcmVuWzBdLm5vZGVOYW1lID09PSAnQ09MR1JPVVAnID8gdGFibGUuY2hpbGRyZW5bMF0gOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoY29sR3JvdXApIHtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gY29sR3JvdXAuY2hpbGRyZW5bcmVzaXplQ29sdW1uSW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0Q29sID0gY29sLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICBjb2wuc3R5bGUud2lkdGggPSBuZXdDb2x1bW5XaWR0aCArICdweCc7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dENvbCAmJiBuZXh0Q29sdW1uV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dENvbC5zdHlsZS53aWR0aCA9IG5leHRDb2x1bW5XaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJTY3JvbGxhYmxlIHRhYmxlcyByZXF1aXJlIGEgY29sZ3JvdXAgdG8gc3VwcG9ydCByZXNpemFibGUgY29sdW1uc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db2x1bW5EcmFnU3RhcnQoZXZlbnQsIGNvbHVtbkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVySWNvbldpZHRoID0gRG9tSGFuZGxlci5nZXRIaWRkZW5FbGVtZW50T3V0ZXJXaWR0aCh0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5yZW9yZGVySWNvbkhlaWdodCA9IERvbUhhbmRsZXIuZ2V0SGlkZGVuRWxlbWVudE91dGVySGVpZ2h0KHRoaXMucmVvcmRlckluZGljYXRvckRvd25WaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuZHJhZ2dlZENvbHVtbiA9IGNvbHVtbkVsZW1lbnQ7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2InKTsgICAgLy8gRm9yIGZpcmVmb3hcbiAgICB9XG5cbiAgICBvbkNvbHVtbkRyYWdFbnRlcihldmVudCwgZHJvcEhlYWRlcikge1xuICAgICAgICBpZiAodGhpcy5yZW9yZGVyYWJsZUNvbHVtbnMgJiYgdGhpcy5kcmFnZ2VkQ29sdW1uICYmIGRyb3BIZWFkZXIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyT2Zmc2V0ID0gRG9tSGFuZGxlci5nZXRPZmZzZXQodGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgZHJvcEhlYWRlck9mZnNldCA9IERvbUhhbmRsZXIuZ2V0T2Zmc2V0KGRyb3BIZWFkZXIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2VkQ29sdW1uICE9IGRyb3BIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0TGVmdCA9IGRyb3BIZWFkZXJPZmZzZXQubGVmdCAtIGNvbnRhaW5lck9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRUb3AgPSBjb250YWluZXJPZmZzZXQudG9wIC0gZHJvcEhlYWRlck9mZnNldC50b3A7XG4gICAgICAgICAgICAgICAgbGV0IGNvbHVtbkNlbnRlciA9IGRyb3BIZWFkZXJPZmZzZXQubGVmdCArIGRyb3BIZWFkZXIub2Zmc2V0V2lkdGggLyAyO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW9yZGVySW5kaWNhdG9yVXBWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBkcm9wSGVhZGVyT2Zmc2V0LnRvcCAtIGNvbnRhaW5lck9mZnNldC50b3AgLSAodGhpcy5yZW9yZGVySWNvbkhlaWdodCAtIDEpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gZHJvcEhlYWRlck9mZnNldC50b3AgLSBjb250YWluZXJPZmZzZXQudG9wICsgZHJvcEhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBhZ2VYID4gY29sdW1uQ2VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvclVwVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICh0YXJnZXRMZWZ0ICsgZHJvcEhlYWRlci5vZmZzZXRXaWR0aCAtIE1hdGguY2VpbCh0aGlzLnJlb3JkZXJJY29uV2lkdGggLyAyKSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICh0YXJnZXRMZWZ0ICsgZHJvcEhlYWRlci5vZmZzZXRXaWR0aCAtIE1hdGguY2VpbCh0aGlzLnJlb3JkZXJJY29uV2lkdGggLyAyKSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3BQb3NpdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAodGFyZ2V0TGVmdCAtIE1hdGguY2VpbCh0aGlzLnJlb3JkZXJJY29uV2lkdGggLyAyKSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICh0YXJnZXRMZWZ0IC0gTWF0aC5jZWlsKHRoaXMucmVvcmRlckljb25XaWR0aCAvIDIpKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcFBvc2l0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW9yZGVySW5kaWNhdG9yVXBWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sdW1uRHJhZ0xlYXZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlb3JkZXJhYmxlQ29sdW1ucyAmJiB0aGlzLmRyYWdnZWRDb2x1bW4pIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sdW1uRHJvcChldmVudCwgZHJvcENvbHVtbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2VkQ29sdW1uKSB7XG4gICAgICAgICAgICBsZXQgZHJhZ0luZGV4ID0gRG9tSGFuZGxlci5pbmRleFdpdGhpbkdyb3VwKHRoaXMuZHJhZ2dlZENvbHVtbiwgJ3R0cmVvcmRlcmFibGVjb2x1bW4nKTtcbiAgICAgICAgICAgIGxldCBkcm9wSW5kZXggPSBEb21IYW5kbGVyLmluZGV4V2l0aGluR3JvdXAoZHJvcENvbHVtbiwgJ3R0cmVvcmRlcmFibGVjb2x1bW4nKTtcbiAgICAgICAgICAgIGxldCBhbGxvd0Ryb3AgPSAoZHJhZ0luZGV4ICE9IGRyb3BJbmRleCk7XG4gICAgICAgICAgICBpZiAoYWxsb3dEcm9wICYmICgoZHJvcEluZGV4IC0gZHJhZ0luZGV4ID09IDEgJiYgdGhpcy5kcm9wUG9zaXRpb24gPT09IC0xKSB8fCAoZHJhZ0luZGV4IC0gZHJvcEluZGV4ID09IDEgJiYgdGhpcy5kcm9wUG9zaXRpb24gPT09IDEpKSkge1xuICAgICAgICAgICAgICAgIGFsbG93RHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWxsb3dEcm9wICYmICgoZHJvcEluZGV4IDwgZHJhZ0luZGV4ICYmIHRoaXMuZHJvcFBvc2l0aW9uID09PSAxKSkpIHtcbiAgICAgICAgICAgICAgICBkcm9wSW5kZXggPSBkcm9wSW5kZXggKyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWxsb3dEcm9wICYmICgoZHJvcEluZGV4ID4gZHJhZ0luZGV4ICYmIHRoaXMuZHJvcFBvc2l0aW9uID09PSAtMSkpKSB7XG4gICAgICAgICAgICAgICAgZHJvcEluZGV4ID0gZHJvcEluZGV4IC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93RHJvcCkge1xuICAgICAgICAgICAgICAgIE9iamVjdFV0aWxzLnJlb3JkZXJBcnJheSh0aGlzLmNvbHVtbnMsIGRyYWdJbmRleCwgZHJvcEluZGV4KTtcblxuICAgICAgICAgICAgICAgIHRoaXMub25Db2xSZW9yZGVyLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBkcmFnSW5kZXg6IGRyYWdJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZHJvcEluZGV4OiBkcm9wSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuY29sdW1uc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZENvbHVtbi5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZENvbHVtbiA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRyb3BQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVSb3dDbGljayhldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9ICg8SFRNTEVsZW1lbnQ+IGV2ZW50Lm9yaWdpbmFsRXZlbnQudGFyZ2V0KS5ub2RlTmFtZTtcbiAgICAgICAgaWYgKHRhcmdldE5vZGUgPT0gJ0lOUFVUJyB8fCB0YXJnZXROb2RlID09ICdCVVRUT04nIHx8IHRhcmdldE5vZGUgPT0gJ0EnIHx8IChEb21IYW5kbGVyLmhhc0NsYXNzKGV2ZW50Lm9yaWdpbmFsRXZlbnQudGFyZ2V0LCAncC1jbGlja2FibGUnKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudFNlbGVjdGlvblNldHRlclByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCByb3dOb2RlID0gZXZlbnQucm93Tm9kZTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChyb3dOb2RlLm5vZGUpO1xuICAgICAgICAgICAgbGV0IG1ldGFTZWxlY3Rpb24gPSB0aGlzLnJvd1RvdWNoZWQgPyBmYWxzZSA6IHRoaXMubWV0YUtleVNlbGVjdGlvbjtcbiAgICAgICAgICAgIGxldCBkYXRhS2V5VmFsdWUgPSB0aGlzLmRhdGFLZXkgPyBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShyb3dOb2RlLm5vZGUuZGF0YSwgdGhpcy5kYXRhS2V5KSkgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAobWV0YVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBtZXRhS2V5ID0gZXZlbnQub3JpZ2luYWxFdmVudC5tZXRhS2V5fHxldmVudC5vcmlnaW5hbEV2ZW50LmN0cmxLZXk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgbWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbk1vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3Rpb25JbmRleCA9IHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24ocm93Tm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcigodmFsLGkpID0+IGkgIT0gc2VsZWN0aW9uSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVVbnNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCBub2RlOiByb3dOb2RlLm5vZGUsIHR5cGU6ICdyb3cnfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbk1vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gcm93Tm9kZS5ub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChyb3dOb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzTXVsdGlwbGVTZWxlY3Rpb25Nb2RlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb258fFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IFsuLi50aGlzLnNlbGVjdGlvbiwgcm93Tm9kZS5ub2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlU2VsZWN0LmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsIG5vZGU6IHJvd05vZGUubm9kZSwgdHlwZTogJ3JvdycsIGluZGV4OiBldmVudC5yb3dJbmRleH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTm9kZVVuc2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCBub2RlOiByb3dOb2RlLm5vZGUsIHR5cGU6ICdyb3cnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gcm93Tm9kZS5ub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTm9kZVNlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgbm9kZTogcm93Tm9kZS5ub2RlLCB0eXBlOiAncm93JywgaW5kZXg6IGV2ZW50LnJvd0luZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0aW9uSW5kZXggPSB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKHJvd05vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5maWx0ZXIoKHZhbCwgaSkgPT4gaSAhPSBzZWxlY3Rpb25JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlVW5zZWxlY3QuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsIG5vZGU6IHJvd05vZGUubm9kZSwgdHlwZTogJ3JvdycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPyBbLi4udGhpcy5zZWxlY3Rpb24sIHJvd05vZGUubm9kZV0gOiBbcm93Tm9kZS5ub2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVTZWxlY3QuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsIG5vZGU6IHJvd05vZGUubm9kZSwgdHlwZTogJ3JvdycsIGluZGV4OiBldmVudC5yb3dJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbktleXNbZGF0YUtleVZhbHVlXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJvd1RvdWNoZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoYW5kbGVSb3dUb3VjaEVuZChldmVudCkge1xuICAgICAgICB0aGlzLnJvd1RvdWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGhhbmRsZVJvd1JpZ2h0Q2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dE1lbnUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5yb3dOb2RlLm5vZGU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHRNZW51U2VsZWN0aW9uTW9kZSA9PT0gJ3NlcGFyYXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVTZWxlY3Rpb24gPSBub2RlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2UuZW1pdChub2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29udGV4dE1lbnVTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgbm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnUuc2hvdyhldmVudC5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vbkNvbnRleHRNZW51KG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jb250ZXh0TWVudVNlbGVjdGlvbk1vZGUgPT09ICdqb2ludCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnRTZWxlY3Rpb25TZXR0ZXJQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKG5vZGUpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhS2V5VmFsdWUgPSB0aGlzLmRhdGFLZXkgPyBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShub2RlLmRhdGEsIHRoaXMuZGF0YUtleSkpIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25Nb2RlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc011bHRpcGxlU2VsZWN0aW9uTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtub2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudS5zaG93KGV2ZW50Lm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Db250ZXh0TWVudVNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCBub2RlOiBub2RlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVOb2RlV2l0aENoZWNrYm94KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb258fFtdO1xuICAgICAgICB0aGlzLnByZXZlbnRTZWxlY3Rpb25TZXR0ZXJQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgIGxldCBub2RlID0gZXZlbnQucm93Tm9kZS5ub2RlO1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQobm9kZSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZVNlbGVjdGlvbkRvd24obm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnJvd05vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVTZWxlY3Rpb25VcChub2RlLnBhcmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLm9uTm9kZVVuc2VsZWN0LmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBub2RlOiBub2RlfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZVNlbGVjdGlvbkRvd24obm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnQucm93Tm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZVNlbGVjdGlvblVwKG5vZGUucGFyZW50LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5vbk5vZGVTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTm9kZXNXaXRoQ2hlY2tib3goZXZlbnQ6IEV2ZW50LCBjaGVjazogYm9vbGVhbikge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZmlsdGVyZWROb2RlcyB8fCB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSBjaGVjayAmJiBkYXRhID8gZGF0YS5zbGljZSgpIDogW107XG4gICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVTZWxlY3Rpb25Eb3duKG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZlbnRTZWxlY3Rpb25TZXR0ZXJQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0aW9uKTtcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uub25TZWxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5vbkhlYWRlckNoZWNrYm94VG9nZ2xlLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBjaGVja2VkOiBjaGVja30pO1xuICAgIH1cblxuICAgIHByb3BhZ2F0ZVNlbGVjdGlvblVwKG5vZGU6IFRyZWVOb2RlLCBzZWxlY3Q6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZENoaWxkQ291bnQ6IG51bWJlciA9IDA7XG4gICAgICAgICAgICBsZXQgY2hpbGRQYXJ0aWFsU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBkYXRhS2V5VmFsdWUgPSB0aGlzLmRhdGFLZXkgPyBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShub2RlLmRhdGEsIHRoaXMuZGF0YUtleSkpIDogbnVsbDtcblxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQoY2hpbGQpKVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2hpbGRDb3VudCsrO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLnBhcnRpYWxTZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRQYXJ0aWFsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ICYmIHNlbGVjdGVkQ2hpbGRDb3VudCA9PSBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9ICBbLi4udGhpcy5zZWxlY3Rpb258fFtdLCBub2RlXTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcnRpYWxTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSAgdGhpcy5zZWxlY3Rpb24uZmlsdGVyKCh2YWwsaSkgPT4gaSE9aW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkUGFydGlhbFNlbGVjdGVkIHx8IHNlbGVjdGVkQ2hpbGRDb3VudCA+IDAgJiYgc2VsZWN0ZWRDaGlsZENvdW50ICE9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcnRpYWxTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcnRpYWxTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZVNlbGVjdGlvblVwKHBhcmVudCwgc2VsZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3BhZ2F0ZVNlbGVjdGlvbkRvd24obm9kZTogVHJlZU5vZGUsIHNlbGVjdDogYm9vbGVhbikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICBsZXQgZGF0YUtleVZhbHVlID0gdGhpcy5kYXRhS2V5ID8gU3RyaW5nKE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEobm9kZS5kYXRhLCB0aGlzLmRhdGFLZXkpKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKHNlbGVjdCAmJiBpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gIFsuLi50aGlzLnNlbGVjdGlvbnx8W10sbm9kZV1cbiAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbktleXNbZGF0YUtleVZhbHVlXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXNlbGVjdCAmJiBpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSAgdGhpcy5zZWxlY3Rpb24uZmlsdGVyKCh2YWwsaSkgPT4gaSE9aW5kZXgpO1xuICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGlvbktleXNbZGF0YUtleVZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUucGFydGlhbFNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZVNlbGVjdGlvbkRvd24oY2hpbGQsIHNlbGVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgJiYgdGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25LZXlzW09iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEobm9kZS5kYXRhLCB0aGlzLmRhdGFLZXkpXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGUpID4gLTE7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMobm9kZSwgdGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGU6IGFueSkge1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IC0xO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24gJiYgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXF1YWxzKG5vZGUsIHRoaXMuc2VsZWN0aW9uW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBpc1NpbmdsZVNlbGVjdGlvbk1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09ICdzaW5nbGUnO1xuICAgIH1cblxuICAgIGlzTXVsdGlwbGVTZWxlY3Rpb25Nb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSAnbXVsdGlwbGUnO1xuICAgIH1cblxuICAgIGVxdWFscyhub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVNlbGVjdGlvbkJ5ID09PSAnZXF1YWxzJyA/IChub2RlMSA9PT0gbm9kZTIpIDogT2JqZWN0VXRpbHMuZXF1YWxzKG5vZGUxLmRhdGEsIG5vZGUyLmRhdGEsIHRoaXMuZGF0YUtleSk7XG4gICAgfVxuXG4gICAgZmlsdGVyKHZhbHVlLCBmaWVsZCwgbWF0Y2hNb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZpbHRlclRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRmlsdGVyQmxhbmsodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcnNbZmllbGRdID0geyB2YWx1ZTogdmFsdWUsIG1hdGNoTW9kZTogbWF0Y2hNb2RlIH07XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJzW2ZpZWxkXSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyc1tmaWVsZF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcigpO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcy5maWx0ZXJEZWxheSk7XG4gICAgfVxuXG4gICAgZmlsdGVyR2xvYmFsKHZhbHVlLCBtYXRjaE1vZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXIodmFsdWUsICdnbG9iYWwnLCBtYXRjaE1vZGUpO1xuICAgIH1cblxuICAgIGlzRmlsdGVyQmxhbmsoZmlsdGVyOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCAmJiBmaWx0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyAmJiBmaWx0ZXIudHJpbSgpLmxlbmd0aCA9PSAwKSB8fCAoZmlsdGVyIGluc3RhbmNlb2YgQXJyYXkgJiYgZmlsdGVyLmxlbmd0aCA9PSAwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2ZpbHRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF6eSkge1xuICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzRmlsdGVyKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkTm9kZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGdsb2JhbEZpbHRlckZpZWxkc0FycmF5O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcnNbJ2dsb2JhbCddKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2x1bW5zICYmICF0aGlzLmdsb2JhbEZpbHRlckZpZWxkcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2xvYmFsIGZpbHRlcmluZyByZXF1aXJlcyBkeW5hbWljIGNvbHVtbnMgb3IgZ2xvYmFsRmlsdGVyRmllbGRzIHRvIGJlIGRlZmluZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbEZpbHRlckZpZWxkc0FycmF5ID0gdGhpcy5nbG9iYWxGaWx0ZXJGaWVsZHN8fHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1N0cmljdE1vZGUgPSB0aGlzLmZpbHRlck1vZGUgPT09ICdzdHJpY3QnO1xuICAgICAgICAgICAgICAgIGxldCBpc1ZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3B5Tm9kZSA9IHsuLi5ub2RlfTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2xvYmFsTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtc1dpdGhvdXROb2RlO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5maWx0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJzLmhhc093blByb3BlcnR5KHByb3ApICYmIHByb3AgIT09ICdnbG9iYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlck1ldGEgPSB0aGlzLmZpbHRlcnNbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlckZpZWxkID0gcHJvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyVmFsdWUgPSBmaWx0ZXJNZXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJNYXRjaE1vZGUgPSBmaWx0ZXJNZXRhLm1hdGNoTW9kZSB8fCAnc3RhcnRzV2l0aCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlckNvbnN0cmFpbnQgPSBGaWx0ZXJVdGlsc1tmaWx0ZXJNYXRjaE1vZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1dpdGhvdXROb2RlID0ge2ZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSwgZmlsdGVyQ29uc3RyYWludCwgaXNTdHJpY3RNb2RlfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGlzU3RyaWN0TW9kZSAmJiAhKHRoaXMuZmluZEZpbHRlcmVkTm9kZXMoY29weU5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSB8fCB0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Tm9kZSwgcGFyYW1zV2l0aG91dE5vZGUpKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFpc1N0cmljdE1vZGUgJiYgISh0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Tm9kZSwgcGFyYW1zV2l0aG91dE5vZGUpIHx8IHRoaXMuZmluZEZpbHRlcmVkTm9kZXMoY29weU5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbE1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2NhbE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcnNbJ2dsb2JhbCddICYmICFnbG9iYWxNYXRjaCAmJiBnbG9iYWxGaWx0ZXJGaWVsZHNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGdsb2JhbEZpbHRlckZpZWxkc0FycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHlOb2RlRm9yR2xvYmFsID0gey4uLmNvcHlOb2RlfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyRmllbGQgPSBnbG9iYWxGaWx0ZXJGaWVsZHNBcnJheVtqXS5maWVsZHx8Z2xvYmFsRmlsdGVyRmllbGRzQXJyYXlbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlclZhbHVlID0gdGhpcy5maWx0ZXJzWydnbG9iYWwnXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyQ29uc3RyYWludCA9IEZpbHRlclV0aWxzW3RoaXMuZmlsdGVyc1snZ2xvYmFsJ10ubWF0Y2hNb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNXaXRob3V0Tm9kZSA9IHtmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUsIGZpbHRlckNvbnN0cmFpbnQsIGlzU3RyaWN0TW9kZX07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGlzU3RyaWN0TW9kZSAmJiAodGhpcy5maW5kRmlsdGVyZWROb2Rlcyhjb3B5Tm9kZUZvckdsb2JhbCwgcGFyYW1zV2l0aG91dE5vZGUpIHx8IHRoaXMuaXNGaWx0ZXJNYXRjaGVkKGNvcHlOb2RlRm9yR2xvYmFsLCBwYXJhbXNXaXRob3V0Tm9kZSkpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWlzU3RyaWN0TW9kZSAmJiAodGhpcy5pc0ZpbHRlck1hdGNoZWQoY29weU5vZGVGb3JHbG9iYWwsIHBhcmFtc1dpdGhvdXROb2RlKSB8fCB0aGlzLmZpbmRGaWx0ZXJlZE5vZGVzKGNvcHlOb2RlRm9yR2xvYmFsLCBwYXJhbXNXaXRob3V0Tm9kZSkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weU5vZGUgPSBjb3B5Tm9kZUZvckdsb2JhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IGxvY2FsTWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcnNbJ2dsb2JhbCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbG9jYWxNYXRjaCAmJiBnbG9iYWxNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkTm9kZXMucHVzaChjb3B5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpc1ZhbHVlQ2hhbmdlZCA9IGlzVmFsdWVDaGFuZ2VkIHx8ICFsb2NhbE1hdGNoIHx8IGdsb2JhbE1hdGNoIHx8IChsb2NhbE1hdGNoICYmIHRoaXMuZmlsdGVyZWROb2Rlcy5sZW5ndGggPiAwKSB8fCAoIWdsb2JhbE1hdGNoICYmIHRoaXMuZmlsdGVyZWROb2Rlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbHVlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkTm9kZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHRoaXMuZmlsdGVyZWROb2RlcyA/IHRoaXMuZmlsdGVyZWROb2Rlcy5sZW5ndGggOiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlyc3QgPSAwO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkVmFsdWUgPSB0aGlzLmZpbHRlcmVkTm9kZXMgfHwgdGhpcy52YWx1ZTtcblxuICAgICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoe1xuICAgICAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAgICAgICAgZmlsdGVyZWRWYWx1ZTogZmlsdGVyZWRWYWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblVJVXBkYXRlKGZpbHRlcmVkVmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlcmlhbGl6ZWRWYWx1ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRGaWx0ZXJlZE5vZGVzKG5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlcyA9IFsuLi5ub2RlLmNoaWxkcmVuXTtcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGROb2RlIG9mIGNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHlDaGlsZE5vZGUgPSB7Li4uY2hpbGROb2RlfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJNYXRjaGVkKGNvcHlDaGlsZE5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2goY29weUNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0ZpbHRlck1hdGNoZWQobm9kZSwge2ZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSwgZmlsdGVyQ29uc3RyYWludCwgaXNTdHJpY3RNb2RlfSkge1xuICAgICAgICBsZXQgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgZGF0YUZpZWxkVmFsdWUgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG5vZGUuZGF0YSwgZmlsdGVyRmllbGQpO1xuICAgICAgICBpZiAoZmlsdGVyQ29uc3RyYWludChkYXRhRmllbGRWYWx1ZSwgZmlsdGVyVmFsdWUsIHRoaXMuZmlsdGVyTG9jYWxlKSkge1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1hdGNoZWQgfHwgKGlzU3RyaWN0TW9kZSAmJiAhdGhpcy5pc05vZGVMZWFmKG5vZGUpKSkge1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRoaXMuZmluZEZpbHRlcmVkTm9kZXMobm9kZSwge2ZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSwgZmlsdGVyQ29uc3RyYWludCwgaXNTdHJpY3RNb2RlfSkgfHwgbWF0Y2hlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH1cblxuICAgIGlzTm9kZUxlYWYobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5sZWFmID09PSBmYWxzZSA/IGZhbHNlIDogIShub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBoYXNGaWx0ZXIoKSB7XG4gICAgICAgIGxldCBlbXB0eSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5maWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhZW1wdHk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9zb3J0RmllbGQgPSBudWxsO1xuICAgICAgICB0aGlzLl9zb3J0T3JkZXIgPSAxO1xuICAgICAgICB0aGlzLl9tdWx0aVNvcnRNZXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uub25Tb3J0KG51bGwpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyZWROb2RlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHt9O1xuXG4gICAgICAgIHRoaXMuZmlyc3QgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgICAgIHRoaXMub25MYXp5TG9hZC5lbWl0KHRoaXMuY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxSZWNvcmRzID0gKHRoaXMuX3ZhbHVlID8gdGhpcy5fdmFsdWUubGVuZ3RoIDogMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0aW5nQ2VsbChjZWxsKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ0NlbGwgPSBjZWxsO1xuICAgICAgICB0aGlzLmJpbmREb2N1bWVudEVkaXRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGlzRWRpdGluZ0NlbGxWYWxpZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmVkaXRpbmdDZWxsICYmIERvbUhhbmRsZXIuZmluZCh0aGlzLmVkaXRpbmdDZWxsLCAnLm5nLWludmFsaWQubmctZGlydHknKS5sZW5ndGggPT09IDApO1xuICAgIH1cblxuICAgIGJpbmREb2N1bWVudEVkaXRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWRpdGluZ0NlbGwgJiYgIXRoaXMuZWRpdGluZ0NlbGxDbGljayAmJiB0aGlzLmlzRWRpdGluZ0NlbGxWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5lZGl0aW5nQ2VsbCwgJ3AtY2VsbC1lZGl0aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZ0NlbGwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50RWRpdExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nQ2VsbENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9jdW1lbnRFZGl0TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9jdW1lbnRFZGl0TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudEVkaXRMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudEVkaXRMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmVkaXRpbmdDZWxsID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IG51bGw7XG4gICAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW3BUcmVlVGFibGVCb2R5XScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0dC52aXJ0dWFsU2Nyb2xsXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXNlcmlhbGl6ZWROb2RlIGxldC1yb3dJbmRleD1cImluZGV4XCIgW25nRm9yT2ZdPVwidHQuc2VyaWFsaXplZFZhbHVlXCIgW25nRm9yVHJhY2tCeV09XCJ0dC5yb3dUcmFja0J5XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlcmlhbGl6ZWROb2RlLnZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBzZXJpYWxpemVkTm9kZSwgbm9kZTogc2VyaWFsaXplZE5vZGUubm9kZSwgcm93RGF0YTogc2VyaWFsaXplZE5vZGUubm9kZS5kYXRhLCBjb2x1bW5zOiBjb2x1bW5zfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0dC52aXJ0dWFsU2Nyb2xsXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgY2RrVmlydHVhbEZvciBsZXQtc2VyaWFsaXplZE5vZGUgbGV0LXJvd0luZGV4PVwiaW5kZXhcIiBbY2RrVmlydHVhbEZvck9mXT1cInR0LnNlcmlhbGl6ZWRWYWx1ZVwiIFtjZGtWaXJ0dWFsRm9yVHJhY2tCeV09XCJ0dC5yb3dUcmFja0J5XCIgW2Nka1ZpcnR1YWxGb3JUZW1wbGF0ZUNhY2hlU2l6ZV09XCIwXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlcmlhbGl6ZWROb2RlLnZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBzZXJpYWxpemVkTm9kZSwgbm9kZTogc2VyaWFsaXplZE5vZGUubm9kZSwgcm93RGF0YTogc2VyaWFsaXplZE5vZGUubm9kZS5kYXRhLCBjb2x1bW5zOiBjb2x1bW5zfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0dC5pc0VtcHR5KClcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0dC5lbXB0eU1lc3NhZ2VUZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRUQm9keSB7XG5cbiAgICBASW5wdXQoXCJwVHJlZVRhYmxlQm9keVwiKSBjb2x1bW5zOiBhbnlbXTtcblxuICAgIEBJbnB1dChcInBUcmVlVGFibGVCb2R5VGVtcGxhdGVcIikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBASW5wdXQoKSBmcm96ZW46IGJvb2xlYW47XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgdHJlZVRhYmxlU2VydmljZTogVHJlZVRhYmxlU2VydmljZSwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMudHQudGFibGVTZXJ2aWNlLnVpVXBkYXRlU291cmNlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudHQudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1t0dFNjcm9sbGFibGVWaWV3XScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjc2Nyb2xsSGVhZGVyIGNsYXNzPVwicC10cmVldGFibGUtc2Nyb2xsYWJsZS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgI3Njcm9sbEhlYWRlckJveCBjbGFzcz1cInAtdHJlZXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyLWJveFwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInAtdHJlZXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyLXRhYmxlXCIgW25nQ2xhc3NdPVwidHQudGFibGVTdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwidHQudGFibGVTdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZnJvemVuID8gdHQuZnJvemVuQ29sR3JvdXBUZW1wbGF0ZXx8dHQuY29sR3JvdXBUZW1wbGF0ZSA6IHR0LmNvbEdyb3VwVGVtcGxhdGU7IGNvbnRleHQgeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwicC10cmVldGFibGUtdGhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmcm96ZW4gPyB0dC5mcm96ZW5IZWFkZXJUZW1wbGF0ZXx8dHQuaGVhZGVyVGVtcGxhdGUgOiB0dC5oZWFkZXJUZW1wbGF0ZTsgY29udGV4dCB7JGltcGxpY2l0OiBjb2x1bW5zfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdHQudmlydHVhbFNjcm9sbDsgZWxzZSB2aXJ0dWFsU2Nyb2xsVGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxkaXYgI3Njcm9sbEJvZHkgY2xhc3M9XCJwLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWJvZHlcIiBbbmdTdHlsZV09XCJ7J21heC1oZWlnaHQnOiB0dC5zY3JvbGxIZWlnaHQgIT09ICdmbGV4JyA/IHNjcm9sbEhlaWdodCA6IHVuZGVmaW5lZCwgJ292ZXJmbG93LXknOiAhZnJvemVuICYmIHR0LnNjcm9sbEhlaWdodCA/ICdzY3JvbGwnIDogdW5kZWZpbmVkfVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSAjc2Nyb2xsVGFibGUgW2NsYXNzXT1cInR0LnRhYmxlU3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInR0LnRhYmxlU3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZyb3plbiA/IHR0LmZyb3plbkNvbEdyb3VwVGVtcGxhdGV8fHR0LmNvbEdyb3VwVGVtcGxhdGUgOiB0dC5jb2xHcm91cFRlbXBsYXRlOyBjb250ZXh0IHskaW1wbGljaXQ6IGNvbHVtbnN9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInAtdHJlZXRhYmxlLXRib2R5XCIgW3BUcmVlVGFibGVCb2R5XT1cImNvbHVtbnNcIiBbcFRyZWVUYWJsZUJvZHlUZW1wbGF0ZV09XCJmcm96ZW4gPyB0dC5mcm96ZW5Cb2R5VGVtcGxhdGV8fHR0LmJvZHlUZW1wbGF0ZSA6IHR0LmJvZHlUZW1wbGF0ZVwiIFtmcm96ZW5dPVwiZnJvemVuXCI+PC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDxkaXYgI3Njcm9sbGFibGVBbGlnbmVyIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFwiICpuZ0lmPVwiZnJvemVuXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdmlydHVhbFNjcm9sbFRlbXBsYXRlPlxuICAgICAgICAgICAgPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBbaXRlbVNpemVdPVwidHQudmlydHVhbFJvd0hlaWdodFwiIFtzdHlsZS5oZWlnaHRdPVwidHQuc2Nyb2xsSGVpZ2h0ICE9PSAnZmxleCcgPyBzY3JvbGxIZWlnaHQgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICBbbWluQnVmZmVyUHhdPVwidHQubWluQnVmZmVyUHhcIiBbbWF4QnVmZmVyUHhdPVwidHQubWF4QnVmZmVyUHhcIiBjbGFzcz1cInAtdHJlZXRhYmxlLXZpcnR1YWwtc2Nyb2xsYWJsZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlICNzY3JvbGxUYWJsZSBbY2xhc3NdPVwidHQudGFibGVTdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwidHQudGFibGVTdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZnJvemVuID8gdHQuZnJvemVuQ29sR3JvdXBUZW1wbGF0ZXx8dHQuY29sR3JvdXBUZW1wbGF0ZSA6IHR0LmNvbEdyb3VwVGVtcGxhdGU7IGNvbnRleHQgeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwicC10cmVldGFibGUtdGJvZHlcIiBbcFRyZWVUYWJsZUJvZHldPVwiY29sdW1uc1wiIFtwVHJlZVRhYmxlQm9keVRlbXBsYXRlXT1cImZyb3plbiA/IHR0LmZyb3plbkJvZHlUZW1wbGF0ZXx8dHQuYm9keVRlbXBsYXRlIDogdHQuYm9keVRlbXBsYXRlXCIgW2Zyb3plbl09XCJmcm96ZW5cIj48L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPGRpdiAjc2Nyb2xsYWJsZUFsaWduZXIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50XCIgKm5nSWY9XCJmcm96ZW5cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8ZGl2ICNzY3JvbGxGb290ZXIgKm5nSWY9XCJ0dC5mb290ZXJUZW1wbGF0ZVwiIGNsYXNzPVwicC10cmVldGFibGUtc2Nyb2xsYWJsZS1mb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgI3Njcm9sbEZvb3RlckJveCBjbGFzcz1cInAtdHJlZXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyLWJveFwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInAtdHJlZXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyLXRhYmxlXCIgW25nQ2xhc3NdPVwidHQudGFibGVTdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwidHQudGFibGVTdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZnJvemVuID8gdHQuZnJvemVuQ29sR3JvdXBUZW1wbGF0ZXx8dHQuY29sR3JvdXBUZW1wbGF0ZSA6IHR0LmNvbEdyb3VwVGVtcGxhdGU7IGNvbnRleHQgeyRpbXBsaWNpdDogY29sdW1uc31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHRmb290IGNsYXNzPVwicC10cmVldGFibGUtdGZvb3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmcm96ZW4gPyB0dC5mcm96ZW5Gb290ZXJUZW1wbGF0ZXx8dHQuZm9vdGVyVGVtcGxhdGUgOiB0dC5mb290ZXJUZW1wbGF0ZTsgY29udGV4dCB7JGltcGxpY2l0OiBjb2x1bW5zfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRUU2Nyb2xsYWJsZVZpZXcgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KFwidHRTY3JvbGxhYmxlVmlld1wiKSBjb2x1bW5zOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIGZyb3plbjogYm9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEhlYWRlcicpIHNjcm9sbEhlYWRlclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEhlYWRlckJveCcpIHNjcm9sbEhlYWRlckJveFZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEJvZHknKSBzY3JvbGxCb2R5Vmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsVGFibGUnKSBzY3JvbGxUYWJsZVZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2xvYWRpbmdUYWJsZScpIHNjcm9sbExvYWRpbmdUYWJsZVZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEZvb3RlcicpIHNjcm9sbEZvb3RlclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEZvb3RlckJveCcpIHNjcm9sbEZvb3RlckJveFZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGVBbGlnbmVyJykgc2Nyb2xsYWJsZUFsaWduZXJWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCkgdmlydHVhbFNjcm9sbEJvZHk6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcblxuICAgIGhlYWRlclNjcm9sbExpc3RlbmVyO1xuXG4gICAgYm9keVNjcm9sbExpc3RlbmVyO1xuXG4gICAgZm9vdGVyU2Nyb2xsTGlzdGVuZXI7XG5cbiAgICBmcm96ZW5TaWJsaW5nQm9keTogRWxlbWVudDtcblxuICAgIHRvdGFsUmVjb3Jkc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgX3Njcm9sbEhlaWdodDogc3RyaW5nO1xuXG4gICAgcHJldmVudEJvZHlTY3JvbGxQcm9wYWdhdGlvbjogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGdldCBzY3JvbGxIZWlnaHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbEhlaWdodDtcbiAgICB9XG4gICAgc2V0IHNjcm9sbEhlaWdodCh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB2YWw7XG4gICAgICAgIGlmICh2YWwgIT0gbnVsbCAmJiAodmFsLmluY2x1ZGVzKCclJykgfHwgdmFsLmluY2x1ZGVzKCdjYWxjJykpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGVyY2VudGFnZSBzY3JvbGwgaGVpZ2h0IGNhbGN1bGF0aW9uIGlzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIG1vcmUgcGVyZm9ybWFudCBDU1MgYmFzZWQgZmxleCBtb2RlLCB1c2Ugc2Nyb2xsSGVpZ2h0PVwiZmxleFwiIGluc3RlYWQuJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mcm96ZW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnR0LmZyb3plbkNvbHVtbnMgfHwgdGhpcy50dC5mcm96ZW5Cb2R5VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3AtdHJlZXRhYmxlLXVuZnJvemVuLXZpZXcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZyb3plblZpZXcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGlmIChmcm96ZW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHQudmlydHVhbFNjcm9sbClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm96ZW5TaWJsaW5nQm9keSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZShmcm96ZW5WaWV3LCAnLnAtdHJlZXRhYmxlLXZpcnR1YWwtc2Nyb2xsYWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plblNpYmxpbmdCb2R5ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKGZyb3plblZpZXcsICcucC10cmVldGFibGUtc2Nyb2xsYWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzY3JvbGxCYXJXaWR0aCA9IERvbUhhbmRsZXIuY2FsY3VsYXRlU2Nyb2xsYmFyV2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGVhZGVyQm94Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxGb290ZXJCb3hWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxGb290ZXJCb3hWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRm9vdGVyQm94Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZUFsaWduZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxhYmxlQWxpZ25lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlQWxpZ25lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IERvbUhhbmRsZXIuY2FsY3VsYXRlU2Nyb2xsYmFySGVpZ2h0KCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbEhlYWRlclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEhlYWRlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJTY3JvbGxMaXN0ZW5lciA9IHRoaXMub25IZWFkZXJTY3JvbGwuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEhlYWRlckJveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGVhZGVyU2Nyb2xsTGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyU2Nyb2xsTGlzdGVuZXIgPSB0aGlzLm9uRm9vdGVyU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmZvb3RlclNjcm9sbExpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmZyb3plbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keVNjcm9sbExpc3RlbmVyID0gdGhpcy5vbkJvZHlTY3JvbGwuYmluZCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR0LnZpcnR1YWxTY3JvbGwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbEJvZHkuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ib2R5U2Nyb2xsTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ib2R5U2Nyb2xsTGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhlYWRlclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEhlYWRlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhlYWRlckJveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGVhZGVyU2Nyb2xsTGlzdGVuZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRm9vdGVyVmlld0NoaWxkICYmIHRoaXMuc2Nyb2xsRm9vdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRm9vdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5mb290ZXJTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkICYmIHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEJvZHlWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmJvZHlTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsQm9keSAmJiB0aGlzLnZpcnR1YWxTY3JvbGxCb2R5LmdldEVsZW1lbnRSZWYoKSkge1xuICAgICAgICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsQm9keS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmJvZHlTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhlYWRlclNjcm9sbCgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcblxuICAgICAgICB0aGlzLnNjcm9sbEJvZHlWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldmVudEJvZHlTY3JvbGxQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Gb290ZXJTY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhlYWRlclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEhlYWRlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhlYWRlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2ZW50Qm9keVNjcm9sbFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkJvZHlTY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucHJldmVudEJvZHlTY3JvbGxQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50Qm9keVNjcm9sbFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIZWFkZXJCb3hWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gLTEgKiBldmVudC50YXJnZXQuc2Nyb2xsTGVmdCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxGb290ZXJCb3hWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gLTEgKiBldmVudC50YXJnZXQuc2Nyb2xsTGVmdCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mcm96ZW5TaWJsaW5nQm9keSkge1xuICAgICAgICAgICAgdGhpcy5mcm96ZW5TaWJsaW5nQm9keS5zY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9WaXJ0dWFsSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsQm9keSkge1xuICAgICAgICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsQm9keS5zY3JvbGxUb0luZGV4KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvKG9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbEJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbEJvZHkuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEJvZHlWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyhvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSBvcHRpb25zLmxlZnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gb3B0aW9ucy50b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICB0aGlzLmZyb3plblNpYmxpbmdCb2R5ID0gbnVsbDtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3R0U29ydGFibGVDb2x1bW5dJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1zb3J0YWJsZS1jb2x1bW5dJzogJ2lzRW5hYmxlZCgpJyxcbiAgICAgICAgJ1tjbGFzcy5wLWhpZ2hsaWdodF0nOiAnc29ydGVkJyxcbiAgICAgICAgJ1thdHRyLnRhYmluZGV4XSc6ICdpc0VuYWJsZWQoKSA/IFwiMFwiIDogbnVsbCcsXG4gICAgICAgICdbYXR0ci5yb2xlXSc6ICdcImNvbHVtbmhlYWRlclwiJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVFRTb3J0YWJsZUNvbHVtbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dChcInR0U29ydGFibGVDb2x1bW5cIikgZmllbGQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHR0U29ydGFibGVDb2x1bW5EaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIHNvcnRlZDogYm9vbGVhbjtcblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50dC50YWJsZVNlcnZpY2Uuc29ydFNvdXJjZSQuc3Vic2NyaWJlKHNvcnRNZXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnRTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU29ydFN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTb3J0U3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc29ydGVkID0gdGhpcy50dC5pc1NvcnRlZCh0aGlzLmZpZWxkKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMudHQuc29ydCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgZmllbGQ6IHRoaXMuZmllbGRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBEb21IYW5kbGVyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSlcbiAgICBvbkVudGVyS2V5KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMub25DbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50dFNvcnRhYmxlQ29sdW1uRGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRyZWVUYWJsZVNvcnRJY29uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSBjbGFzcz1cInAtc29ydGFibGUtY29sdW1uLWljb24gcGkgcGktZndcIiBbbmdDbGFzc109XCJ7J3BpLXNvcnQtYW1vdW50LXVwLWFsdCc6IHNvcnRPcmRlciA9PT0gMSwgJ3BpLXNvcnQtYW1vdW50LWRvd24nOiBzb3J0T3JkZXIgPT09IC0xLCAncGktc29ydC1hbHQnOiBzb3J0T3JkZXIgPT09IDB9XCI+PC9pPlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUVFNvcnRJY29uIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgZmllbGQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbERlc2M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbEFzYzogc3RyaW5nO1xuXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBzb3J0T3JkZXI6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50dC50YWJsZVNlcnZpY2Uuc29ydFNvdXJjZSQuc3Vic2NyaWJlKHNvcnRNZXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU29ydFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTb3J0U3RhdGUoKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTb3J0U3RhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnR0LnNvcnRNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgdGhpcy5zb3J0T3JkZXIgPSB0aGlzLnR0LmlzU29ydGVkKHRoaXMuZmllbGQpID8gdGhpcy50dC5zb3J0T3JkZXIgOiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHQuc29ydE1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgIGxldCBzb3J0TWV0YSA9IHRoaXMudHQuZ2V0U29ydE1ldGEodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnNvcnRPcmRlciA9IHNvcnRNZXRhID8gc29ydE1ldGEub3JkZXI6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0dFJlc2l6YWJsZUNvbHVtbl0nXG59KVxuZXhwb3J0IGNsYXNzIFRUUmVzaXphYmxlQ29sdW1uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIHR0UmVzaXphYmxlQ29sdW1uRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICByZXNpemVyOiBIVE1MU3BhbkVsZW1lbnQ7XG5cbiAgICByZXNpemVyTW91c2VEb3duTGlzdGVuZXI6IGFueTtcblxuICAgIGRvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXI6IGFueTtcblxuICAgIGRvY3VtZW50TW91c2VVcExpc3RlbmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHQ6IFRyZWVUYWJsZSwgcHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1yZXNpemFibGUtY29sdW1uJyk7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZXIuY2xhc3NOYW1lID0gJ3AtY29sdW1uLXJlc2l6ZXInO1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucmVzaXplcik7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVyTW91c2VEb3duTGlzdGVuZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMucmVzaXplck1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyID0gdGhpcy5vbkRvY3VtZW50TW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TW91c2VVcExpc3RlbmVyID0gdGhpcy5vbkRvY3VtZW50TW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZG9jdW1lbnRNb3VzZVVwTGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kb2N1bWVudE1vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZG9jdW1lbnRNb3VzZVVwTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudE1vdXNlVXBMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy50dC5vbkNvbHVtblJlc2l6ZUJlZ2luKGV2ZW50KTtcbiAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBvbkRvY3VtZW50TW91c2VNb3ZlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLnR0Lm9uQ29sdW1uUmVzaXplKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkRvY3VtZW50TW91c2VVcChldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy50dC5vbkNvbHVtblJlc2l6ZUVuZChldmVudCwgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudEV2ZW50cygpO1xuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHRSZXNpemFibGVDb2x1bW5EaXNhYmxlZCAhPT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzaXplck1vdXNlRG93bkxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZXNpemVyTW91c2VEb3duTGlzdGVuZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudEV2ZW50cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdHRSZW9yZGVyYWJsZUNvbHVtbl0nXG59KVxuZXhwb3J0IGNsYXNzIFRUUmVvcmRlcmFibGVDb2x1bW4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgdHRSZW9yZGVyYWJsZUNvbHVtbkRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgZHJhZ1N0YXJ0TGlzdGVuZXI6IGFueTtcblxuICAgIGRyYWdPdmVyTGlzdGVuZXI6IGFueTtcblxuICAgIGRyYWdFbnRlckxpc3RlbmVyOiBhbnk7XG5cbiAgICBkcmFnTGVhdmVMaXN0ZW5lcjogYW55O1xuXG4gICAgbW91c2VEb3duTGlzdGVuZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRMaXN0ZW5lciA9IHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydExpc3RlbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnT3Zlckxpc3RlbmVyID0gdGhpcy5vbkRyYWdFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlckxpc3RlbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnRW50ZXJMaXN0ZW5lciA9IHRoaXMub25EcmFnRW50ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmRyYWdFbnRlckxpc3RlbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnTGVhdmVMaXN0ZW5lciA9IHRoaXMub25EcmFnTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5tb3VzZURvd25MaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25MaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRyYWdPdmVyTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlckxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmFnRW50ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXJMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRyYWdFbnRlckxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRyYWdFbnRlckxpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmRyYWdFbnRlckxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VudGVyTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0xlYXZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5kcmFnTGVhdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gJ1RFWFRBUkVBJyB8fCBEb21IYW5kbGVyLmhhc0NsYXNzKGV2ZW50LnRhcmdldCwgJ3AtY29sdW1uLXJlc2l6ZXInKSlcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25EcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy50dC5vbkNvbHVtbkRyYWdTdGFydChldmVudCwgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25EcmFnRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy50dC5vbkNvbHVtbkRyYWdFbnRlcihldmVudCwgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBvbkRyYWdMZWF2ZShldmVudCkge1xuICAgICAgICB0aGlzLnR0Lm9uQ29sdW1uRHJhZ0xlYXZlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgICBvbkRyb3AoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudHQub25Db2x1bW5Ecm9wKGV2ZW50LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50dFJlb3JkZXJhYmxlQ29sdW1uRGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3R0U2VsZWN0YWJsZVJvd10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLWhpZ2hsaWdodF0nOiAnc2VsZWN0ZWQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUVFNlbGVjdGFibGVSb3cgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoXCJ0dFNlbGVjdGFibGVSb3dcIikgcm93Tm9kZTogYW55O1xuXG4gICAgQElucHV0KCkgdHRTZWxlY3RhYmxlUm93RGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyB0YWJsZVNlcnZpY2U6IFRyZWVUYWJsZVNlcnZpY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50dC50YWJsZVNlcnZpY2Uuc2VsZWN0aW9uU291cmNlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnR0LmlzU2VsZWN0ZWQodGhpcy5yb3dOb2RlLm5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnR0LmlzU2VsZWN0ZWQodGhpcy5yb3dOb2RlLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnR0LmhhbmRsZVJvd0NsaWNrKHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICByb3dOb2RlOiB0aGlzLnJvd05vZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25FbnRlcktleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbJyRldmVudCddKVxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnR0LmhhbmRsZVJvd1RvdWNoRW5kKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHRTZWxlY3RhYmxlUm93RGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0dFNlbGVjdGFibGVSb3dEYmxDbGlja10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLWhpZ2hsaWdodF0nOiAnc2VsZWN0ZWQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUVFNlbGVjdGFibGVSb3dEYmxDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dChcInR0U2VsZWN0YWJsZVJvd0RibENsaWNrXCIpIHJvd05vZGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHR0U2VsZWN0YWJsZVJvd0Rpc2FibGVkOiBib29sZWFuO1xuXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgdGFibGVTZXJ2aWNlOiBUcmVlVGFibGVTZXJ2aWNlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMudHQudGFibGVTZXJ2aWNlLnNlbGVjdGlvblNvdXJjZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50dC5pc1NlbGVjdGVkKHRoaXMucm93Tm9kZS5ub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50dC5pc1NlbGVjdGVkKHRoaXMucm93Tm9kZS5ub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy50dC5oYW5kbGVSb3dDbGljayh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgcm93Tm9kZTogdGhpcy5yb3dOb2RlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHRTZWxlY3RhYmxlUm93RGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0dENvbnRleHRNZW51Um93XScsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnAtaGlnaGxpZ2h0LWNvbnRleHRtZW51XSc6ICdzZWxlY3RlZCcsXG4gICAgICAgICdbYXR0ci50YWJpbmRleF0nOiAnaXNFbmFibGVkKCkgPyAwIDogdW5kZWZpbmVkJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVFRDb250ZXh0TWVudVJvdyB7XG5cbiAgICBASW5wdXQoXCJ0dENvbnRleHRNZW51Um93XCIpIHJvd05vZGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHR0Q29udGV4dE1lbnVSb3dEaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xuXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHQ6IFRyZWVUYWJsZSwgcHVibGljIHRhYmxlU2VydmljZTogVHJlZVRhYmxlU2VydmljZSwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnR0LnRhYmxlU2VydmljZS5jb250ZXh0TWVudVNvdXJjZSQuc3Vic2NyaWJlKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudHQuZXF1YWxzKHRoaXMucm93Tm9kZS5ub2RlLCBub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICAgIG9uQ29udGV4dE1lbnUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnR0LmhhbmRsZVJvd1JpZ2h0Q2xpY2soe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHJvd05vZGU6IHRoaXMucm93Tm9kZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50dENvbnRleHRNZW51Um93RGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdHJlZVRhYmxlQ2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94IHAtY29tcG9uZW50XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiIChmb2N1cyk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoKVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNib3ggW25nQ2xhc3NdPVwieydwLWNoZWNrYm94LWJveCc6dHJ1ZSxcbiAgICAgICAgICAgICAgICAncC1oaWdobGlnaHQnOmNoZWNrZWQsICdwLWRpc2FibGVkJzpkaXNhYmxlZH1cIiAgcm9sZT1cImNoZWNrYm94XCIgW2F0dHIuYXJpYS1jaGVja2VkXT1cImNoZWNrZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2hlY2tib3gtaWNvbiBwaVwiIFtuZ0NsYXNzXT1cInsncGktY2hlY2snOmNoZWNrZWQsICdwaS1taW51cyc6IHJvd05vZGUubm9kZS5wYXJ0aWFsU2VsZWN0ZWR9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUVENoZWNrYm94ICB7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dChcInZhbHVlXCIpIHJvd05vZGU6IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoJ2JveCcpIGJveFZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgdGFibGVTZXJ2aWNlOiBUcmVlVGFibGVTZXJ2aWNlLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50dC50YWJsZVNlcnZpY2Uuc2VsZWN0aW9uU291cmNlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy50dC5pc1NlbGVjdGVkKHRoaXMucm93Tm9kZS5ub2RlKTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLnR0LmlzU2VsZWN0ZWQodGhpcy5yb3dOb2RlLm5vZGUpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy50dC50b2dnbGVOb2RlV2l0aENoZWNrYm94KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICByb3dOb2RlOiB0aGlzLnJvd05vZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIERvbUhhbmRsZXIuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKCkge1xuICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuYm94Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLWZvY3VzJyk7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuYm94Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLWZvY3VzJyk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdHJlZVRhYmxlSGVhZGVyQ2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94IHAtY29tcG9uZW50XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50LCBjYi5jaGVja2VkKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2NiIHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImNoZWNrZWRcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIiBbZGlzYWJsZWRdPVwiIXR0LnZhbHVlfHx0dC52YWx1ZS5sZW5ndGggPT09IDBcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAjYm94IFtuZ0NsYXNzXT1cInsncC1jaGVja2JveC1ib3gnOnRydWUsXG4gICAgICAgICAgICAgICAgJ3AtaGlnaGxpZ2h0JzpjaGVja2VkLCAncC1kaXNhYmxlZCc6ICghdHQudmFsdWUgfHwgdHQudmFsdWUubGVuZ3RoID09PSAwKX1cIiAgcm9sZT1cImNoZWNrYm94XCIgW2F0dHIuYXJpYS1jaGVja2VkXT1cImNoZWNrZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2hlY2tib3gtaWNvblwiIFtuZ0NsYXNzXT1cInsncGkgcGktY2hlY2snOmNoZWNrZWR9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUVEhlYWRlckNoZWNrYm94ICB7XG5cbiAgICBAVmlld0NoaWxkKCdib3gnKSBib3hWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjaGVja2VkOiBib29sZWFuO1xuXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIHZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHQ6IFRyZWVUYWJsZSwgcHVibGljIHRhYmxlU2VydmljZTogVHJlZVRhYmxlU2VydmljZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMudHQudGFibGVTZXJ2aWNlLnVpVXBkYXRlU291cmNlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy51cGRhdGVDaGVja2VkU3RhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnR0LnRhYmxlU2VydmljZS5zZWxlY3Rpb25Tb3VyY2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLnVwZGF0ZUNoZWNrZWRTdGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy51cGRhdGVDaGVja2VkU3RhdGUoKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50OiBFdmVudCwgY2hlY2tlZCkge1xuICAgICAgICBpZiAodGhpcy50dC52YWx1ZSAmJiB0aGlzLnR0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudHQudG9nZ2xlTm9kZXNXaXRoQ2hlY2tib3goZXZlbnQsICFjaGVja2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERvbUhhbmRsZXIuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKCkge1xuICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuYm94Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLWZvY3VzJyk7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuYm94Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLWZvY3VzJyk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDaGVja2VkU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIGxldCBjaGVja2VkOiBib29sZWFuO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy50dC5maWx0ZXJlZE5vZGVzfHx0aGlzLnR0LnZhbHVlO1xuXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dC5pc1NlbGVjdGVkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlICB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3R0RWRpdGFibGVDb2x1bW5dJ1xufSlcbmV4cG9ydCBjbGFzcyBUVEVkaXRhYmxlQ29sdW1uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoXCJ0dEVkaXRhYmxlQ29sdW1uXCIpIGRhdGE6IGFueTtcblxuICAgIEBJbnB1dChcInR0RWRpdGFibGVDb2x1bW5GaWVsZFwiKSBmaWVsZDogYW55O1xuXG4gICAgQElucHV0KCkgdHRFZGl0YWJsZUNvbHVtbkRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHpvbmU6IE5nWm9uZSkge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1lZGl0YWJsZS1jb2x1bW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnR0LmVkaXRpbmdDZWxsQ2xpY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50dC5lZGl0aW5nQ2VsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR0LmVkaXRpbmdDZWxsICE9PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnR0LmlzRWRpdGluZ0NlbGxWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMudHQuZWRpdGluZ0NlbGwsICdwLWNlbGwtZWRpdGluZycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DZWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuQ2VsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbkNlbGwoKSB7XG4gICAgICAgIHRoaXMudHQudXBkYXRlRWRpdGluZ0NlbGwodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdwLWNlbGwtZWRpdGluZycpO1xuICAgICAgICB0aGlzLnR0Lm9uRWRpdEluaXQuZW1pdCh7IGZpZWxkOiB0aGlzLmZpZWxkLCBkYXRhOiB0aGlzLmRhdGF9KTtcbiAgICAgICAgdGhpcy50dC5lZGl0aW5nQ2VsbENsaWNrID0gdHJ1ZTtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmb2N1c2FibGUgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaW5wdXQsIHRleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlRWRpdGluZ0NlbGwoKSB7XG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy50dC5lZGl0aW5nQ2VsbCwgJ3AtY2hlY2tib3gtaWNvbicpO1xuICAgICAgICB0aGlzLnR0LmVkaXRpbmdDZWxsID0gbnVsbDtcbiAgICAgICAgdGhpcy50dC51bmJpbmREb2N1bWVudEVkaXRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgLy9lbnRlclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dC5pc0VkaXRpbmdDZWxsVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMudHQuZWRpdGluZ0NlbGwsICdwLWNlbGwtZWRpdGluZycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdGluZ0NlbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dC5vbkVkaXRDb21wbGV0ZS5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGRhdGE6IHRoaXMuZGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2VzY2FwZVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR0LmlzRWRpdGluZ0NlbGxWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy50dC5lZGl0aW5nQ2VsbCwgJ3AtY2VsbC1lZGl0aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0aW5nQ2VsbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR0Lm9uRWRpdENhbmNlbC5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGRhdGE6IHRoaXMuZGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3RhYlxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50dC5vbkVkaXRDb21wbGV0ZS5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGRhdGE6IHRoaXMuZGF0YSB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9QcmV2aW91c0NlbGwoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9OZXh0Q2VsbChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kQ2VsbChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB3aGlsZSAoY2VsbCAmJiAhRG9tSGFuZGxlci5oYXNDbGFzcyhjZWxsLCAncC1jZWxsLWVkaXRpbmcnKSkge1xuICAgICAgICAgICAgICAgIGNlbGwgPSBjZWxsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlVG9QcmV2aW91c0NlbGwoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDZWxsID0gdGhpcy5maW5kQ2VsbChldmVudC50YXJnZXQpO1xuICAgICAgICBsZXQgcm93ID0gY3VycmVudENlbGwucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHRhcmdldENlbGwgPSB0aGlzLmZpbmRQcmV2aW91c0VkaXRhYmxlQ29sdW1uKGN1cnJlbnRDZWxsKTtcblxuICAgICAgICBpZiAodGFyZ2V0Q2VsbCkge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5pbnZva2VFbGVtZW50TWV0aG9kKHRhcmdldENlbGwsICdjbGljaycpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVUb05leHRDZWxsKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50Q2VsbCA9IHRoaXMuZmluZENlbGwoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgbGV0IHJvdyA9IGN1cnJlbnRDZWxsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCB0YXJnZXRDZWxsID0gdGhpcy5maW5kTmV4dEVkaXRhYmxlQ29sdW1uKGN1cnJlbnRDZWxsKTtcblxuICAgICAgICBpZiAodGFyZ2V0Q2VsbCkge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5pbnZva2VFbGVtZW50TWV0aG9kKHRhcmdldENlbGwsICdjbGljaycpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRQcmV2aW91c0VkaXRhYmxlQ29sdW1uKGNlbGw6IEVsZW1lbnQpIHtcbiAgICAgICAgbGV0IHByZXZDZWxsID0gY2VsbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmICghcHJldkNlbGwpIHtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1JvdyA9IGNlbGwucGFyZW50RWxlbWVudCA/IGNlbGwucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1Jvdykge1xuICAgICAgICAgICAgICAgIHByZXZDZWxsID0gcHJldmlvdXNSb3cubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2Q2VsbCkge1xuICAgICAgICAgICAgaWYgKERvbUhhbmRsZXIuaGFzQ2xhc3MocHJldkNlbGwsICdwLWVkaXRhYmxlLWNvbHVtbicpKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2Q2VsbDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kUHJldmlvdXNFZGl0YWJsZUNvbHVtbihwcmV2Q2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmROZXh0RWRpdGFibGVDb2x1bW4oY2VsbDogRWxlbWVudCkge1xuICAgICAgICBsZXQgbmV4dENlbGwgPSBjZWxsLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAoIW5leHRDZWxsKSB7XG4gICAgICAgICAgICBsZXQgbmV4dFJvdyA9IGNlbGwucGFyZW50RWxlbWVudCA/IGNlbGwucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5leHRSb3cpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbCA9IG5leHRSb3cuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dENlbGwpIHtcbiAgICAgICAgICAgIGlmIChEb21IYW5kbGVyLmhhc0NsYXNzKG5leHRDZWxsLCAncC1lZGl0YWJsZS1jb2x1bW4nKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dENlbGw7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZE5leHRFZGl0YWJsZUNvbHVtbihuZXh0Q2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHRFZGl0YWJsZUNvbHVtbkRpc2FibGVkICE9PSB0cnVlO1xuICAgIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdHJlZVRhYmxlQ2VsbEVkaXRvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR0LmVkaXRpbmdDZWxsID09PSBlZGl0YWJsZUNvbHVtbi5lbC5uYXRpdmVFbGVtZW50XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaW5wdXRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0dC5lZGl0aW5nQ2VsbCB8fCB0dC5lZGl0aW5nQ2VsbCAhPT0gZWRpdGFibGVDb2x1bW4uZWwubmF0aXZlRWxlbWVudFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm91dHB1dFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGVDZWxsRWRpdG9yIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+O1xuXG4gICAgaW5wdXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIG91dHB1dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyBlZGl0YWJsZUNvbHVtbjogVFRFZGl0YWJsZUNvbHVtbikgeyB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnb3V0cHV0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3R0Um93XScsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2F0dHIudGFiaW5kZXhdJzogJ1wiMFwiJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVFRSb3cge1xuXG4gICAgQElucHV0KCd0dFJvdycpIHJvd05vZGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgLy9kb3duIGFycm93XG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIGxldCBuZXh0Um93ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAobmV4dFJvdykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Um93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL2Rvd24gYXJyb3dcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgbGV0IHByZXZSb3cgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAocHJldlJvdykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2Um93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm93Tm9kZS5ub2RlLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHQudG9nZ2xlUm93SW5kZXggPSBEb21IYW5kbGVyLmluZGV4KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93Tm9kZS5ub2RlLmV4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dC5vbk5vZGVDb2xsYXBzZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5yb3dOb2RlLm5vZGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dC51cGRhdGVTZXJpYWxpemVkVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dC50YWJsZVNlcnZpY2Uub25VSVVwZGF0ZSh0aGlzLnR0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9yaWdodCBhcnJvd1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucm93Tm9kZS5ub2RlLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHQudG9nZ2xlUm93SW5kZXggPSBEb21IYW5kbGVyLmluZGV4KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93Tm9kZS5ub2RlLmV4cGFuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR0Lm9uTm9kZUV4cGFuZC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5yb3dOb2RlLm5vZGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dC51cGRhdGVTZXJpYWxpemVkVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dC50YWJsZVNlcnZpY2Uub25VSVVwZGF0ZSh0aGlzLnR0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVGb2N1cygpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy50dC5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgJy5wLXRyZWV0YWJsZS10Ym9keScpLmNoaWxkcmVuW3RoaXMudHQudG9nZ2xlUm93SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10cmVlVGFibGVUb2dnbGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInAtdHJlZXRhYmxlLXRvZ2dsZXIgcC1saW5rXCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiIHRhYmluZGV4PVwiLTFcIiBwUmlwcGxlXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJyb3dOb2RlLm5vZGUubGVhZiA9PT0gZmFsc2UgfHwgKHJvd05vZGUubm9kZS5jaGlsZHJlbiAmJiByb3dOb2RlLm5vZGUuY2hpbGRyZW4ubGVuZ3RoKSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCIgW3N0eWxlLm1hcmdpbkxlZnRdPVwicm93Tm9kZS5sZXZlbCAqIDE2ICsgJ3B4J1wiPlxuICAgICAgICAgICAgPGkgW25nQ2xhc3NdPVwicm93Tm9kZS5ub2RlLmV4cGFuZGVkID8gJ3BpIHBpLWZ3IHBpLWNoZXZyb24tZG93bicgOiAncGkgcGktZncgcGktY2hldnJvbi1yaWdodCdcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGVUb2dnbGVyIHtcblxuICAgIEBJbnB1dCgpIHJvd05vZGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlKSB7fVxuXG4gICAgb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5yb3dOb2RlLm5vZGUuZXhwYW5kZWQgPSAhdGhpcy5yb3dOb2RlLm5vZGUuZXhwYW5kZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucm93Tm9kZS5ub2RlLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnR0Lm9uTm9kZUV4cGFuZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBub2RlOiB0aGlzLnJvd05vZGUubm9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnR0Lm9uTm9kZUNvbGxhcHNlLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMucm93Tm9kZS5ub2RlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHQudXBkYXRlU2VyaWFsaXplZFZhbHVlKCk7XG4gICAgICAgIHRoaXMudHQudGFibGVTZXJ2aWNlLm9uVUlVcGRhdGUodGhpcy50dC52YWx1ZSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxQYWdpbmF0b3JNb2R1bGUsU2Nyb2xsaW5nTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1RyZWVUYWJsZSxTaGFyZWRNb2R1bGUsVHJlZVRhYmxlVG9nZ2xlcixUVFNvcnRhYmxlQ29sdW1uLFRUU29ydEljb24sVFRSZXNpemFibGVDb2x1bW4sVFRSb3csVFRSZW9yZGVyYWJsZUNvbHVtbixUVFNlbGVjdGFibGVSb3csVFRTZWxlY3RhYmxlUm93RGJsQ2xpY2ssVFRDb250ZXh0TWVudVJvdyxUVENoZWNrYm94LFRUSGVhZGVyQ2hlY2tib3gsVFRFZGl0YWJsZUNvbHVtbixUcmVlVGFibGVDZWxsRWRpdG9yLFNjcm9sbGluZ01vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVHJlZVRhYmxlLFRyZWVUYWJsZVRvZ2dsZXIsVFRTY3JvbGxhYmxlVmlldyxUVEJvZHksVFRTb3J0YWJsZUNvbHVtbixUVFNvcnRJY29uLFRUUmVzaXphYmxlQ29sdW1uLFRUUm93LFRUUmVvcmRlcmFibGVDb2x1bW4sVFRTZWxlY3RhYmxlUm93LFRUU2VsZWN0YWJsZVJvd0RibENsaWNrLFRUQ29udGV4dE1lbnVSb3csVFRDaGVja2JveCxUVEhlYWRlckNoZWNrYm94LFRURWRpdGFibGVDb2x1bW4sVHJlZVRhYmxlQ2VsbEVkaXRvcl1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlTW9kdWxlIHsgfVxuIl19