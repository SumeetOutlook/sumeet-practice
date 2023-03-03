import { NgModule, Component, Input, Output, EventEmitter, ContentChildren, Inject, ElementRef, forwardRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { TreeDragDropService } from 'primeng/api';
import { ObjectUtils } from 'primeng/utils';
import { DomHandler } from 'primeng/dom';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from 'primeng/api';
import * as ɵngcc4 from '@angular/cdk/scrolling';

const _c0 = function (a0) { return { "p-treenode-droppoint-active": a0 }; };
function UITreeNode_ng_template_0_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵlistener("drop", function UITreeNode_ng_template_0_li_0_Template_li_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.onDropPoint($event, 0 - 1); })("dragover", function UITreeNode_ng_template_0_li_0_Template_li_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onDropPointDragOver($event); })("dragenter", function UITreeNode_ng_template_0_li_0_Template_li_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onDropPointDragEnter($event, 0 - 1); })("dragleave", function UITreeNode_ng_template_0_li_0_Template_li_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.onDropPointDragLeave($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, ctx_r1.draghoverPrev));
} }
const _c1 = function (a0, a1) { return { "p-highlight": a0, "p-indeterminate": a1 }; };
const _c2 = function (a0, a1) { return { "pi-check": a0, "pi-minus": a1 }; };
function UITreeNode_ng_template_0_li_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵelementStart(1, "div", 14);
    ɵngcc0.ɵɵelement(2, "span", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-checked", ctx_r10.isSelected());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c1, ctx_r10.isSelected(), ctx_r10.node.partialSelected));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(6, _c2, ctx_r10.isSelected(), ctx_r10.node.partialSelected));
} }
function UITreeNode_ng_template_0_li_1_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span");
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMap(ctx_r11.getIcon());
} }
function UITreeNode_ng_template_0_li_1_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r12.node.label);
} }
function UITreeNode_ng_template_0_li_1_span_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function UITreeNode_ng_template_0_li_1_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_span_8_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r13.tree.getTemplateForNode(ctx_r13.node))("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, ctx_r13.node));
} }
function UITreeNode_ng_template_0_li_1_ul_9_p_treeNode_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-treeNode", 19);
} if (rf & 2) {
    const childNode_r17 = ctx.$implicit;
    const firstChild_r18 = ctx.first;
    const lastChild_r19 = ctx.last;
    const index_r20 = ctx.index;
    const ctx_r16 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵstyleProp("height", ctx_r16.tree.virtualNodeHeight, "px");
    ɵngcc0.ɵɵproperty("node", childNode_r17)("parentNode", ctx_r16.node)("firstChild", firstChild_r18)("lastChild", lastChild_r19)("index", index_r20)("level", ctx_r16.level + 1);
} }
function UITreeNode_ng_template_0_li_1_ul_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 17);
    ɵngcc0.ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_ul_9_p_treeNode_1_Template, 1, 8, "p-treeNode", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("display", ctx_r14.node.expanded ? "block" : "none");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r14.node.children)("ngForTrackBy", ctx_r14.tree.trackBy);
} }
const _c4 = function (a1, a2) { return ["p-treenode", a1, a2]; };
const _c5 = function (a0, a1, a2) { return { "p-treenode-selectable": a0, "p-treenode-dragover": a1, "p-highlight": a2 }; };
const _c6 = function (a0, a1) { return { "pi-chevron-right": a0, "pi-chevron-down": a1 }; };
function UITreeNode_ng_template_0_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 5);
    ɵngcc0.ɵɵelementStart(1, "div", 6);
    ɵngcc0.ɵɵlistener("click", function UITreeNode_ng_template_0_li_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(2); return ctx_r21.onNodeClick($event); })("contextmenu", function UITreeNode_ng_template_0_li_1_Template_div_contextmenu_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r23 = ɵngcc0.ɵɵnextContext(2); return ctx_r23.onNodeRightClick($event); })("touchend", function UITreeNode_ng_template_0_li_1_Template_div_touchend_1_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r24 = ɵngcc0.ɵɵnextContext(2); return ctx_r24.onNodeTouchEnd(); })("drop", function UITreeNode_ng_template_0_li_1_Template_div_drop_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.onDropNode($event); })("dragover", function UITreeNode_ng_template_0_li_1_Template_div_dragover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.onDropNodeDragOver($event); })("dragenter", function UITreeNode_ng_template_0_li_1_Template_div_dragenter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27.onDropNodeDragEnter($event); })("dragleave", function UITreeNode_ng_template_0_li_1_Template_div_dragleave_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onDropNodeDragLeave($event); })("dragstart", function UITreeNode_ng_template_0_li_1_Template_div_dragstart_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r29 = ɵngcc0.ɵɵnextContext(2); return ctx_r29.onDragStart($event); })("dragend", function UITreeNode_ng_template_0_li_1_Template_div_dragend_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r30 = ɵngcc0.ɵɵnextContext(2); return ctx_r30.onDragStop($event); })("keydown", function UITreeNode_ng_template_0_li_1_Template_div_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r31 = ɵngcc0.ɵɵnextContext(2); return ctx_r31.onKeyDown($event); });
    ɵngcc0.ɵɵelementStart(2, "button", 7);
    ɵngcc0.ɵɵlistener("click", function UITreeNode_ng_template_0_li_1_Template_button_click_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r32 = ɵngcc0.ɵɵnextContext(2); return ctx_r32.toggle($event); });
    ɵngcc0.ɵɵelement(3, "span", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, UITreeNode_ng_template_0_li_1_div_4_Template, 3, 9, "div", 9);
    ɵngcc0.ɵɵtemplate(5, UITreeNode_ng_template_0_li_1_span_5_Template, 1, 2, "span", 3);
    ɵngcc0.ɵɵelementStart(6, "span", 10);
    ɵngcc0.ɵɵtemplate(7, UITreeNode_ng_template_0_li_1_span_7_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(8, UITreeNode_ng_template_0_li_1_span_8_Template, 2, 4, "span", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(9, UITreeNode_ng_template_0_li_1_ul_9_Template, 2, 4, "ul", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c4, ctx_r2.node.styleClass || "", ctx_r2.isLeaf() ? "p-treenode-leaf" : ""));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("padding-left", ctx_r2.level * ctx_r2.indentation + "rem");
    ɵngcc0.ɵɵproperty("draggable", ctx_r2.tree.draggableNodes)("ngClass", ɵngcc0.ɵɵpureFunction3(19, _c5, ctx_r2.tree.selectionMode && ctx_r2.node.selectable !== false, ctx_r2.draghoverNode, ctx_r2.isSelected()));
    ɵngcc0.ɵɵattribute("tabindex", 0)("aria-posinset", ctx_r2.index + 1)("aria-expanded", ctx_r2.node.expanded)("aria-selected", ctx_r2.isSelected())("aria-label", ctx_r2.node.label);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(23, _c6, !ctx_r2.node.expanded, ctx_r2.node.expanded));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.tree.selectionMode == "checkbox");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.node.icon || ctx_r2.node.expandedIcon || ctx_r2.node.collapsedIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.tree.virtualScroll && ctx_r2.node.children && ctx_r2.node.expanded);
} }
function UITreeNode_ng_template_0_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵlistener("drop", function UITreeNode_ng_template_0_li_2_Template_li_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.onDropPoint($event, 1); })("dragover", function UITreeNode_ng_template_0_li_2_Template_li_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r35 = ɵngcc0.ɵɵnextContext(2); return ctx_r35.onDropPointDragOver($event); })("dragenter", function UITreeNode_ng_template_0_li_2_Template_li_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r36 = ɵngcc0.ɵɵnextContext(2); return ctx_r36.onDropPointDragEnter($event, 1); })("dragleave", function UITreeNode_ng_template_0_li_2_Template_li_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r37 = ɵngcc0.ɵɵnextContext(2); return ctx_r37.onDropPointDragLeave($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, ctx_r3.draghoverNext));
} }
const _c7 = function (a0) { return { "p-treenode-connector-line": a0 }; };
function UITreeNode_ng_template_0_table_3_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 25);
    ɵngcc0.ɵɵelementStart(1, "table", 26);
    ɵngcc0.ɵɵelementStart(2, "tbody");
    ɵngcc0.ɵɵelementStart(3, "tr");
    ɵngcc0.ɵɵelement(4, "td", 27);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "tr");
    ɵngcc0.ɵɵelement(6, "td", 27);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c7, !ctx_r38.firstChild));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c7, !ctx_r38.lastChild));
} }
const _c8 = function (a0, a1) { return { "pi-plus": a0, "pi-minus": a1 }; };
function UITreeNode_ng_template_0_table_3_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 28);
    ɵngcc0.ɵɵlistener("click", function UITreeNode_ng_template_0_table_3_span_6_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r44 = ɵngcc0.ɵɵnextContext(3); return ctx_r44.toggle($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !ctx_r39.node.expanded, ctx_r39.node.expanded));
} }
function UITreeNode_ng_template_0_table_3_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span");
} if (rf & 2) {
    const ctx_r40 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMap(ctx_r40.getIcon());
} }
function UITreeNode_ng_template_0_table_3_span_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r41.node.label);
} }
function UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function UITreeNode_ng_template_0_table_3_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r42.tree.getTemplateForNode(ctx_r42.node))("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, ctx_r42.node));
} }
function UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-treeNode", 32);
} if (rf & 2) {
    const childNode_r48 = ctx.$implicit;
    const firstChild_r49 = ctx.first;
    const lastChild_r50 = ctx.last;
    ɵngcc0.ɵɵproperty("node", childNode_r48)("firstChild", firstChild_r49)("lastChild", lastChild_r50);
} }
function UITreeNode_ng_template_0_table_3_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 29);
    ɵngcc0.ɵɵelementStart(1, "div", 30);
    ɵngcc0.ɵɵtemplate(2, UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template, 1, 3, "p-treeNode", 31);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r43 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("display", ctx_r43.node.expanded ? "table-cell" : "none");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r43.node.children)("ngForTrackBy", ctx_r43.tree.trackBy);
} }
const _c9 = function (a0) { return { "p-treenode-collapsed": a0 }; };
const _c10 = function (a0, a1) { return { "p-treenode-selectable": a0, "p-highlight": a1 }; };
function UITreeNode_ng_template_0_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r52 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "table");
    ɵngcc0.ɵɵelementStart(1, "tbody");
    ɵngcc0.ɵɵelementStart(2, "tr");
    ɵngcc0.ɵɵtemplate(3, UITreeNode_ng_template_0_table_3_td_3_Template, 7, 6, "td", 20);
    ɵngcc0.ɵɵelementStart(4, "td", 21);
    ɵngcc0.ɵɵelementStart(5, "div", 22);
    ɵngcc0.ɵɵlistener("click", function UITreeNode_ng_template_0_table_3_Template_div_click_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); const ctx_r51 = ɵngcc0.ɵɵnextContext(2); return ctx_r51.onNodeClick($event); })("contextmenu", function UITreeNode_ng_template_0_table_3_Template_div_contextmenu_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); const ctx_r53 = ɵngcc0.ɵɵnextContext(2); return ctx_r53.onNodeRightClick($event); })("touchend", function UITreeNode_ng_template_0_table_3_Template_div_touchend_5_listener() { ɵngcc0.ɵɵrestoreView(_r52); const ctx_r54 = ɵngcc0.ɵɵnextContext(2); return ctx_r54.onNodeTouchEnd(); })("keydown", function UITreeNode_ng_template_0_table_3_Template_div_keydown_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); const ctx_r55 = ɵngcc0.ɵɵnextContext(2); return ctx_r55.onNodeKeydown($event); });
    ɵngcc0.ɵɵtemplate(6, UITreeNode_ng_template_0_table_3_span_6_Template, 1, 4, "span", 23);
    ɵngcc0.ɵɵtemplate(7, UITreeNode_ng_template_0_table_3_span_7_Template, 1, 2, "span", 3);
    ɵngcc0.ɵɵelementStart(8, "span", 10);
    ɵngcc0.ɵɵtemplate(9, UITreeNode_ng_template_0_table_3_span_9_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(10, UITreeNode_ng_template_0_table_3_span_10_Template, 2, 4, "span", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(11, UITreeNode_ng_template_0_table_3_td_11_Template, 3, 4, "td", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r4.node.styleClass);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.root);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c9, !ctx_r4.node.expanded));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(12, _c10, ctx_r4.tree.selectionMode, ctx_r4.isSelected()));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.isLeaf());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.node.icon || ctx_r4.node.expandedIcon || ctx_r4.node.collapsedIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.node.children && ctx_r4.node.expanded);
} }
function UITreeNode_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, UITreeNode_ng_template_0_li_0_Template, 1, 3, "li", 1);
    ɵngcc0.ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_Template, 10, 26, "li", 2);
    ɵngcc0.ɵɵtemplate(2, UITreeNode_ng_template_0_li_2_Template, 1, 3, "li", 1);
    ɵngcc0.ɵɵtemplate(3, UITreeNode_ng_template_0_table_3_Template, 12, 15, "table", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.tree.droppableNodes);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.tree.horizontal);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.tree.droppableNodes && ctx_r0.lastChild);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.tree.horizontal);
} }
function Tree_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("p-tree-loading-icon pi-spin " + ctx_r2.loadingIcon);
} }
function Tree_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "input", 10, 11);
    ɵngcc0.ɵɵlistener("keydown.enter", function Tree_div_0_div_2_Template_input_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); return $event.preventDefault(); })("input", function Tree_div_0_div_2_Template_input_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11._filter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "span", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r3.filterPlaceholder);
} }
function Tree_div_0_ng_container_3_ul_2_p_treeNode_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-treeNode", 17);
} if (rf & 2) {
    const node_r14 = ctx.$implicit;
    const firstChild_r15 = ctx.first;
    const lastChild_r16 = ctx.last;
    const index_r17 = ctx.index;
    ɵngcc0.ɵɵproperty("node", node_r14)("firstChild", firstChild_r15)("lastChild", lastChild_r16)("index", index_r17)("level", 0);
} }
function Tree_div_0_ng_container_3_ul_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 15);
    ɵngcc0.ɵɵtemplate(1, Tree_div_0_ng_container_3_ul_2_p_treeNode_1_Template, 1, 5, "p-treeNode", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r12.ariaLabel)("aria-labelledby", ctx_r12.ariaLabelledBy);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r12.getRootNode())("ngForTrackBy", ctx_r12.trackBy);
} }
function Tree_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵtemplate(2, Tree_div_0_ng_container_3_ul_2_Template, 2, 4, "ul", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r4.scrollHeight);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.getRootNode());
} }
function Tree_div_0_ng_template_4_ul_1_p_treeNode_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-treeNode", 20);
} if (rf & 2) {
    const rowNode_r20 = ctx.$implicit;
    const firstChild_r21 = ctx.first;
    const lastChild_r22 = ctx.last;
    const index_r23 = ctx.index;
    const ctx_r19 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵstyleProp("height", ctx_r19.virtualNodeHeight, "px");
    ɵngcc0.ɵɵproperty("level", rowNode_r20.level)("rowNode", rowNode_r20)("node", rowNode_r20.node)("firstChild", firstChild_r21)("lastChild", lastChild_r22)("index", index_r23)("indentation", ctx_r19.indentation);
} }
function Tree_div_0_ng_template_4_ul_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 15);
    ɵngcc0.ɵɵtemplate(1, Tree_div_0_ng_template_4_ul_1_p_treeNode_1_Template, 1, 9, "p-treeNode", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r18.ariaLabel)("aria-labelledby", ctx_r18.ariaLabelledBy);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r18.serializedValue)("cdkVirtualForTrackBy", ctx_r18.trackBy)("cdkVirtualForTemplateCacheSize", 0);
} }
function Tree_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 18);
    ɵngcc0.ɵɵtemplate(1, Tree_div_0_ng_template_4_ul_1_Template, 2, 5, "ul", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("height", ctx_r6.scrollHeight);
    ɵngcc0.ɵɵproperty("itemSize", ctx_r6.virtualNodeHeight)("minBufferPx", ctx_r6.minBufferPx)("maxBufferPx", ctx_r6.maxBufferPx);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.getRootNode());
} }
function Tree_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.emptyMessage);
} }
const _c11 = function (a1, a2, a3, a4) { return { "p-tree p-component": true, "p-tree-selectable": a1, "p-treenode-dragover": a2, "p-tree-loading": a3, "p-tree-flex-scrollable": a4 }; };
function Tree_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("drop", function Tree_div_0_Template_div_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onDrop($event); })("dragover", function Tree_div_0_Template_div_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onDragOver($event); })("dragenter", function Tree_div_0_Template_div_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.onDragEnter($event); })("dragleave", function Tree_div_0_Template_div_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.onDragLeave($event); });
    ɵngcc0.ɵɵtemplate(1, Tree_div_0_div_1_Template, 2, 2, "div", 3);
    ɵngcc0.ɵɵtemplate(2, Tree_div_0_div_2_Template, 4, 1, "div", 4);
    ɵngcc0.ɵɵtemplate(3, Tree_div_0_ng_container_3_Template, 3, 3, "ng-container", 5);
    ɵngcc0.ɵɵtemplate(4, Tree_div_0_ng_template_4_Template, 2, 6, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(6, Tree_div_0_div_6_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r5 = ɵngcc0.ɵɵreference(5);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(9, _c11, ctx_r0.selectionMode, ctx_r0.dragHover, ctx_r0.loading, ctx_r0.scrollHeight === "flex"))("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.loading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.filter);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.virtualScroll)("ngIfElse", _r5);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.loading && (ctx_r0.value == null || ctx_r0.value.length === 0));
} }
function Tree_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("p-tree-loading-icon pi-spin " + ctx_r29.loadingIcon);
} }
function Tree_div_1_table_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "table");
    ɵngcc0.ɵɵelement(1, "p-treeNode", 26);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("node", ctx_r30.value[0])("root", true);
} }
function Tree_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r31.emptyMessage);
} }
const _c12 = function (a1) { return { "p-tree p-tree-horizontal p-component": true, "p-tree-selectable": a1 }; };
function Tree_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵtemplate(1, Tree_div_1_div_1_Template, 2, 2, "div", 23);
    ɵngcc0.ɵɵtemplate(2, Tree_div_1_table_2_Template, 2, 2, "table", 24);
    ɵngcc0.ɵɵtemplate(3, Tree_div_1_div_3_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c12, ctx_r1.selectionMode))("ngStyle", ctx_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.loading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.value && ctx_r1.value[0]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.loading && (ctx_r1.value == null || ctx_r1.value.length === 0));
} }
export class UITreeNode {
    constructor(tree) {
        this.tree = tree;
    }
    ngOnInit() {
        this.node.parent = this.parentNode;
        if (this.parentNode) {
            this.tree.syncNodeOption(this.node, this.tree.value, 'parent', this.tree.getNodeWithKey(this.parentNode.key, this.tree.value));
        }
    }
    getIcon() {
        let icon;
        if (this.node.icon)
            icon = this.node.icon;
        else
            icon = this.node.expanded && this.node.children && this.node.children.length ? this.node.expandedIcon : this.node.collapsedIcon;
        return UITreeNode.ICON_CLASS + ' ' + icon;
    }
    isLeaf() {
        return this.tree.isNodeLeaf(this.node);
    }
    toggle(event) {
        if (this.node.expanded)
            this.collapse(event);
        else
            this.expand(event);
    }
    expand(event) {
        this.node.expanded = true;
        if (this.tree.virtualScroll) {
            this.tree.updateSerializedValue();
        }
        this.tree.onNodeExpand.emit({ originalEvent: event, node: this.node });
    }
    collapse(event) {
        this.node.expanded = false;
        if (this.tree.virtualScroll) {
            this.tree.updateSerializedValue();
        }
        this.tree.onNodeCollapse.emit({ originalEvent: event, node: this.node });
    }
    onNodeClick(event) {
        this.tree.onNodeClick(event, this.node);
    }
    onNodeKeydown(event) {
        if (event.which === 13) {
            this.tree.onNodeClick(event, this.node);
        }
    }
    onNodeTouchEnd() {
        this.tree.onNodeTouchEnd();
    }
    onNodeRightClick(event) {
        this.tree.onNodeRightClick(event, this.node);
    }
    isSelected() {
        return this.tree.isSelected(this.node);
    }
    onDropPoint(event, position) {
        event.preventDefault();
        let dragNode = this.tree.dragNode;
        let dragNodeIndex = this.tree.dragNodeIndex;
        let dragNodeScope = this.tree.dragNodeScope;
        let isValidDropPointIndex = this.tree.dragNodeTree === this.tree ? (position === 1 || dragNodeIndex !== this.index - 1) : true;
        if (this.tree.allowDrop(dragNode, this.node, dragNodeScope) && isValidDropPointIndex) {
            let dropParams = Object.assign({}, this.createDropPointEventMetadata(position));
            if (this.tree.validateDrop) {
                this.tree.onNodeDrop.emit({
                    originalEvent: event,
                    dragNode: dragNode,
                    dropNode: this.node,
                    dropIndex: this.index,
                    accept: () => {
                        this.processPointDrop(dropParams);
                    }
                });
            }
            else {
                this.processPointDrop(dropParams);
                this.tree.onNodeDrop.emit({
                    originalEvent: event,
                    dragNode: dragNode,
                    dropNode: this.node,
                    dropIndex: this.index
                });
            }
        }
        this.draghoverPrev = false;
        this.draghoverNext = false;
    }
    processPointDrop(event) {
        let newNodeList = event.dropNode.parent ? event.dropNode.parent.children : this.tree.value;
        event.dragNodeSubNodes.splice(event.dragNodeIndex, 1);
        let dropIndex = this.index;
        if (event.position < 0) {
            dropIndex = (event.dragNodeSubNodes === newNodeList) ? ((event.dragNodeIndex > event.index) ? event.index : event.index - 1) : event.index;
            newNodeList.splice(dropIndex, 0, event.dragNode);
        }
        else {
            dropIndex = newNodeList.length;
            newNodeList.push(event.dragNode);
        }
        this.tree.dragDropService.stopDrag({
            node: event.dragNode,
            subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
            index: event.dragNodeIndex
        });
    }
    createDropPointEventMetadata(position) {
        return {
            dragNode: this.tree.dragNode,
            dragNodeIndex: this.tree.dragNodeIndex,
            dragNodeSubNodes: this.tree.dragNodeSubNodes,
            dropNode: this.node,
            index: this.index,
            position: position
        };
    }
    onDropPointDragOver(event) {
        event.dataTransfer.dropEffect = 'move';
        event.preventDefault();
    }
    onDropPointDragEnter(event, position) {
        if (this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
            if (position < 0)
                this.draghoverPrev = true;
            else
                this.draghoverNext = true;
        }
    }
    onDropPointDragLeave(event) {
        this.draghoverPrev = false;
        this.draghoverNext = false;
    }
    onDragStart(event) {
        if (this.tree.draggableNodes && this.node.draggable !== false) {
            event.dataTransfer.setData("text", "data");
            this.tree.dragDropService.startDrag({
                tree: this,
                node: this.node,
                subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
                index: this.index,
                scope: this.tree.draggableScope
            });
        }
        else {
            event.preventDefault();
        }
    }
    onDragStop(event) {
        this.tree.dragDropService.stopDrag({
            node: this.node,
            subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
            index: this.index
        });
    }
    onDropNodeDragOver(event) {
        event.dataTransfer.dropEffect = 'move';
        if (this.tree.droppableNodes) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onDropNode(event) {
        if (this.tree.droppableNodes && this.node.droppable !== false) {
            let dragNode = this.tree.dragNode;
            if (this.tree.allowDrop(dragNode, this.node, this.tree.dragNodeScope)) {
                let dropParams = Object.assign({}, this.createDropNodeEventMetadata());
                if (this.tree.validateDrop) {
                    this.tree.onNodeDrop.emit({
                        originalEvent: event,
                        dragNode: dragNode,
                        dropNode: this.node,
                        index: this.index,
                        accept: () => {
                            this.processNodeDrop(dropParams);
                        }
                    });
                }
                else {
                    this.processNodeDrop(dropParams);
                    this.tree.onNodeDrop.emit({
                        originalEvent: event,
                        dragNode: dragNode,
                        dropNode: this.node,
                        index: this.index
                    });
                }
            }
        }
        event.preventDefault();
        event.stopPropagation();
        this.draghoverNode = false;
    }
    createDropNodeEventMetadata() {
        return {
            dragNode: this.tree.dragNode,
            dragNodeIndex: this.tree.dragNodeIndex,
            dragNodeSubNodes: this.tree.dragNodeSubNodes,
            dropNode: this.node
        };
    }
    processNodeDrop(event) {
        let dragNodeIndex = event.dragNodeIndex;
        event.dragNodeSubNodes.splice(dragNodeIndex, 1);
        if (event.dropNode.children)
            event.dropNode.children.push(event.dragNode);
        else
            event.dropNode.children = [event.dragNode];
        this.tree.dragDropService.stopDrag({
            node: event.dragNode,
            subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
            index: dragNodeIndex
        });
    }
    onDropNodeDragEnter(event) {
        if (this.tree.droppableNodes && this.node.droppable !== false && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
            this.draghoverNode = true;
        }
    }
    onDropNodeDragLeave(event) {
        if (this.tree.droppableNodes) {
            let rect = event.currentTarget.getBoundingClientRect();
            if (event.x > rect.left + rect.width || event.x < rect.left || event.y >= Math.floor(rect.top + rect.height) || event.y < rect.top) {
                this.draghoverNode = false;
            }
        }
    }
    onKeyDown(event) {
        const nodeElement = event.target.parentElement.parentElement;
        if (nodeElement.nodeName !== 'P-TREENODE') {
            return;
        }
        switch (event.which) {
            //down arrow
            case 40:
                const listElement = (this.tree.droppableNodes) ? nodeElement.children[1].children[1] : nodeElement.children[0].children[1];
                if (listElement && listElement.children.length > 0) {
                    this.focusNode(listElement.children[0]);
                }
                else {
                    const nextNodeElement = nodeElement.nextElementSibling;
                    if (nextNodeElement) {
                        this.focusNode(nextNodeElement);
                    }
                    else {
                        let nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
                        if (nextSiblingAncestor) {
                            this.focusNode(nextSiblingAncestor);
                        }
                    }
                }
                event.preventDefault();
                break;
            //up arrow
            case 38:
                if (nodeElement.previousElementSibling) {
                    this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
                }
                else {
                    let parentNodeElement = this.getParentNodeElement(nodeElement);
                    if (parentNodeElement) {
                        this.focusNode(parentNodeElement);
                    }
                }
                event.preventDefault();
                break;
            //right arrow
            case 39:
                if (!this.node.expanded && !this.tree.isNodeLeaf(this.node)) {
                    this.expand(event);
                }
                event.preventDefault();
                break;
            //left arrow
            case 37:
                if (this.node.expanded) {
                    this.collapse(event);
                }
                else {
                    let parentNodeElement = this.getParentNodeElement(nodeElement);
                    if (parentNodeElement) {
                        this.focusNode(parentNodeElement);
                    }
                }
                event.preventDefault();
                break;
            //enter
            case 13:
                this.tree.onNodeClick(event, this.node);
                event.preventDefault();
                break;
            default:
                //no op
                break;
        }
    }
    findNextSiblingOfAncestor(nodeElement) {
        let parentNodeElement = this.getParentNodeElement(nodeElement);
        if (parentNodeElement) {
            if (parentNodeElement.nextElementSibling)
                return parentNodeElement.nextElementSibling;
            else
                return this.findNextSiblingOfAncestor(parentNodeElement);
        }
        else {
            return null;
        }
    }
    findLastVisibleDescendant(nodeElement) {
        const listElement = Array.from(nodeElement.children).find(el => DomHandler.hasClass(el, 'p-treenode'));
        const childrenListElement = listElement.children[1];
        if (childrenListElement && childrenListElement.children.length > 0) {
            const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
            return this.findLastVisibleDescendant(lastChildElement);
        }
        else {
            return nodeElement;
        }
    }
    getParentNodeElement(nodeElement) {
        const parentNodeElement = nodeElement.parentElement.parentElement.parentElement;
        return parentNodeElement.tagName === 'P-TREENODE' ? parentNodeElement : null;
    }
    focusNode(element) {
        if (this.tree.droppableNodes)
            element.children[1].children[0].focus();
        else
            element.children[0].children[0].focus();
    }
}
UITreeNode.ɵfac = function UITreeNode_Factory(t) { return new (t || UITreeNode)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => Tree))); };
UITreeNode.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UITreeNode, selectors: [["p-treeNode"]], inputs: { rowNode: "rowNode", node: "node", parentNode: "parentNode", root: "root", index: "index", firstChild: "firstChild", lastChild: "lastChild", level: "level", indentation: "indentation" }, decls: 1, vars: 1, consts: [[3, "ngIf"], ["class", "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave"], ["role", "treeitem", 3, "ngClass"], [1, "p-treenode-content", 3, "draggable", "ngClass", "click", "contextmenu", "touchend", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend", "keydown"], ["type", "button", "pRipple", "", 1, "p-tree-toggler", "p-link", 3, "click"], [1, "p-tree-toggler-icon", "pi", "pi-fw", 3, "ngClass"], ["class", "p-checkbox p-component", 4, "ngIf"], [1, "p-treenode-label"], [4, "ngIf"], ["class", "p-treenode-children", "style", "display: none;", "role", "group", 3, "display", 4, "ngIf"], [1, "p-checkbox", "p-component"], [1, "p-checkbox-box", 3, "ngClass"], [1, "p-checkbox-icon", "pi", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", 1, "p-treenode-children", 2, "display", "none"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "height", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "level"], ["class", "p-treenode-connector", 4, "ngIf"], [1, "p-treenode", 3, "ngClass"], ["tabindex", "0", 1, "p-treenode-content", 3, "ngClass", "click", "contextmenu", "touchend", "keydown"], ["class", "p-tree-toggler pi pi-fw", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-treenode-children-container", 3, "display", 4, "ngIf"], [1, "p-treenode-connector"], [1, "p-treenode-connector-table"], [3, "ngClass"], [1, "p-tree-toggler", "pi", "pi-fw", 3, "ngClass", "click"], [1, "p-treenode-children-container"], [1, "p-treenode-children"], [3, "node", "firstChild", "lastChild", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild"]], template: function UITreeNode_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, UITreeNode_ng_template_0_Template, 4, 4, "ng-template", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.node);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc2.Ripple, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, UITreeNode], encapsulation: 2 });
UITreeNode.ICON_CLASS = 'p-treenode-icon ';
UITreeNode.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => Tree),] }] }
];
UITreeNode.propDecorators = {
    rowNode: [{ type: Input }],
    node: [{ type: Input }],
    parentNode: [{ type: Input }],
    root: [{ type: Input }],
    index: [{ type: Input }],
    firstChild: [{ type: Input }],
    lastChild: [{ type: Input }],
    level: [{ type: Input }],
    indentation: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UITreeNode, [{
        type: Component,
        args: [{
                selector: 'p-treeNode',
                template: `
        <ng-template [ngIf]="node">
            <li *ngIf="tree.droppableNodes" class="p-treenode-droppoint" [ngClass]="{'p-treenode-droppoint-active':draghoverPrev}"
            (drop)="onDropPoint($event,-1)" (dragover)="onDropPointDragOver($event)" (dragenter)="onDropPointDragEnter($event,-1)" (dragleave)="onDropPointDragLeave($event)"></li>
            <li *ngIf="!tree.horizontal" role="treeitem" [ngClass]="['p-treenode',node.styleClass||'', isLeaf() ? 'p-treenode-leaf': '']">
                <div class="p-treenode-content" [style.paddingLeft]="(level * indentation)  + 'rem'" (click)="onNodeClick($event)" (contextmenu)="onNodeRightClick($event)" (touchend)="onNodeTouchEnd()"
                    (drop)="onDropNode($event)" (dragover)="onDropNodeDragOver($event)" (dragenter)="onDropNodeDragEnter($event)" (dragleave)="onDropNodeDragLeave($event)"
                    [draggable]="tree.draggableNodes" (dragstart)="onDragStart($event)" (dragend)="onDragStop($event)" [attr.tabindex]="0"
                    [ngClass]="{'p-treenode-selectable':tree.selectionMode && node.selectable !== false,'p-treenode-dragover':draghoverNode, 'p-highlight':isSelected()}"
                    (keydown)="onKeyDown($event)" [attr.aria-posinset]="this.index + 1" [attr.aria-expanded]="this.node.expanded" [attr.aria-selected]="isSelected()" [attr.aria-label]="node.label">
                    <button type="button" class="p-tree-toggler p-link" (click)="toggle($event)" pRipple>
                        <span class="p-tree-toggler-icon pi pi-fw" [ngClass]="{'pi-chevron-right':!node.expanded,'pi-chevron-down':node.expanded}"></span>
                    </button>
                    <div class="p-checkbox p-component" *ngIf="tree.selectionMode == 'checkbox'" [attr.aria-checked]="isSelected()">
                        <div class="p-checkbox-box" [ngClass]="{'p-highlight': isSelected(), 'p-indeterminate': node.partialSelected}">
                            <span class="p-checkbox-icon pi" [ngClass]="{'pi-check':isSelected(),'pi-minus':node.partialSelected}"></span>
                        </div>
                    </div>
                    <span [class]="getIcon()" *ngIf="node.icon||node.expandedIcon||node.collapsedIcon"></span>
                    <span class="p-treenode-label">
                            <span *ngIf="!tree.getTemplateForNode(node)">{{node.label}}</span>
                            <span *ngIf="tree.getTemplateForNode(node)">
                                <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: {$implicit: node}"></ng-container>
                            </span>
                    </span>
                </div>
                <ul class="p-treenode-children" style="display: none;" *ngIf="!tree.virtualScroll && node.children && node.expanded" [style.display]="node.expanded ? 'block' : 'none'" role="group">
                    <p-treeNode *ngFor="let childNode of node.children;let firstChild=first;let lastChild=last; let index=index; trackBy: tree.trackBy" [node]="childNode" [parentNode]="node"
                        [firstChild]="firstChild" [lastChild]="lastChild" [index]="index" [style.height.px]="tree.virtualNodeHeight" [level]="level + 1"></p-treeNode>
                </ul>
            </li>
            <li *ngIf="tree.droppableNodes&&lastChild" class="p-treenode-droppoint" [ngClass]="{'p-treenode-droppoint-active':draghoverNext}"
            (drop)="onDropPoint($event,1)" (dragover)="onDropPointDragOver($event)" (dragenter)="onDropPointDragEnter($event,1)" (dragleave)="onDropPointDragLeave($event)"></li>
            <table *ngIf="tree.horizontal" [class]="node.styleClass">
                <tbody>
                    <tr>
                        <td class="p-treenode-connector" *ngIf="!root">
                            <table class="p-treenode-connector-table">
                                <tbody>
                                    <tr>
                                        <td [ngClass]="{'p-treenode-connector-line':!firstChild}"></td>
                                    </tr>
                                    <tr>
                                        <td [ngClass]="{'p-treenode-connector-line':!lastChild}"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td class="p-treenode" [ngClass]="{'p-treenode-collapsed':!node.expanded}">
                            <div class="p-treenode-content" tabindex="0" [ngClass]="{'p-treenode-selectable':tree.selectionMode,'p-highlight':isSelected()}" (click)="onNodeClick($event)" (contextmenu)="onNodeRightClick($event)"
                                (touchend)="onNodeTouchEnd()" (keydown)="onNodeKeydown($event)">
                                <span class="p-tree-toggler pi pi-fw" [ngClass]="{'pi-plus':!node.expanded,'pi-minus':node.expanded}" *ngIf="!isLeaf()" (click)="toggle($event)"></span>
                                <span [class]="getIcon()" *ngIf="node.icon||node.expandedIcon||node.collapsedIcon"></span>
                                <span class="p-treenode-label">
                                    <span *ngIf="!tree.getTemplateForNode(node)">{{node.label}}</span>
                                    <span *ngIf="tree.getTemplateForNode(node)">
                                        <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: {$implicit: node}"></ng-container>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td class="p-treenode-children-container" *ngIf="node.children && node.expanded" [style.display]="node.expanded ? 'table-cell' : 'none'">
                            <div class="p-treenode-children">
                                <p-treeNode *ngFor="let childNode of node.children;let firstChild=first;let lastChild=last; trackBy: tree.trackBy" [node]="childNode"
                                        [firstChild]="firstChild" [lastChild]="lastChild"></p-treeNode>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ng-template>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => Tree)]
            }] }]; }, { rowNode: [{
            type: Input
        }], node: [{
            type: Input
        }], parentNode: [{
            type: Input
        }], root: [{
            type: Input
        }], index: [{
            type: Input
        }], firstChild: [{
            type: Input
        }], lastChild: [{
            type: Input
        }], level: [{
            type: Input
        }], indentation: [{
            type: Input
        }] }); })();
export class Tree {
    constructor(el, dragDropService) {
        this.el = el;
        this.dragDropService = dragDropService;
        this.selectionChange = new EventEmitter();
        this.onNodeSelect = new EventEmitter();
        this.onNodeUnselect = new EventEmitter();
        this.onNodeExpand = new EventEmitter();
        this.onNodeCollapse = new EventEmitter();
        this.onNodeContextMenuSelect = new EventEmitter();
        this.onNodeDrop = new EventEmitter();
        this.layout = 'vertical';
        this.metaKeySelection = true;
        this.propagateSelectionUp = true;
        this.propagateSelectionDown = true;
        this.loadingIcon = 'pi pi-spinner';
        this.emptyMessage = 'No records found';
        this.filterBy = 'label';
        this.filterMode = 'lenient';
        this.indentation = 1.5;
        this.trackBy = (index, item) => item;
        this.onFilter = new EventEmitter();
    }
    ngOnInit() {
        if (this.droppableNodes) {
            this.dragStartSubscription = this.dragDropService.dragStart$.subscribe(event => {
                this.dragNodeTree = event.tree;
                this.dragNode = event.node;
                this.dragNodeSubNodes = event.subNodes;
                this.dragNodeIndex = event.index;
                this.dragNodeScope = event.scope;
            });
            this.dragStopSubscription = this.dragDropService.dragStop$.subscribe(event => {
                this.dragNodeTree = null;
                this.dragNode = null;
                this.dragNodeSubNodes = null;
                this.dragNodeIndex = null;
                this.dragNodeScope = null;
                this.dragHover = false;
            });
        }
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.value) {
            this.updateSerializedValue();
        }
        if (simpleChange.scrollHeight && this.virtualScrollBody) {
            this.virtualScrollBody.checkViewportSize();
        }
    }
    get horizontal() {
        return this.layout == 'horizontal';
    }
    ngAfterContentInit() {
        if (this.templates.length) {
            this.templateMap = {};
        }
        this.templates.forEach((item) => {
            this.templateMap[item.name] = item.template;
        });
    }
    updateSerializedValue() {
        this.serializedValue = [];
        this.serializeNodes(null, this.getRootNode(), 0, true);
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
    onNodeClick(event, node) {
        let eventTarget = event.target;
        if (DomHandler.hasClass(eventTarget, 'p-tree-toggler') || DomHandler.hasClass(eventTarget, 'p-tree-toggler-icon')) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            if (this.hasFilteredNodes()) {
                node = this.getNodeWithKey(node.key, this.value);
                if (!node) {
                    return;
                }
            }
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);
            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    if (this.propagateSelectionDown)
                        this.propagateDown(node, false);
                    else
                        this.selection = this.selection.filter((val, i) => i != index);
                    if (this.propagateSelectionUp && node.parent) {
                        this.propagateUp(node.parent, false);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    if (this.propagateSelectionDown)
                        this.propagateDown(node, true);
                    else
                        this.selection = [...this.selection || [], node];
                    if (this.propagateSelectionUp && node.parent) {
                        this.propagateUp(node.parent, true);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else {
                let metaSelection = this.nodeTouched ? false : this.metaKeySelection;
                if (metaSelection) {
                    let metaKey = (event.metaKey || event.ctrlKey);
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(null);
                        }
                        else {
                            this.selection = this.selection.filter((val, i) => i != index);
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeUnselect.emit({ originalEvent: event, node: node });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(node);
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection || [];
                            this.selection = [...this.selection, node];
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeSelect.emit({ originalEvent: event, node: node });
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this.selection = null;
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = node;
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    else {
                        if (selected) {
                            this.selection = this.selection.filter((val, i) => i != index);
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = [...this.selection || [], node];
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    this.selectionChange.emit(this.selection);
                }
            }
        }
        this.nodeTouched = false;
    }
    onNodeTouchEnd() {
        this.nodeTouched = true;
    }
    onNodeRightClick(event, node) {
        if (this.contextMenu) {
            let eventTarget = event.target;
            if (eventTarget.className && eventTarget.className.indexOf('p-tree-toggler') === 0) {
                return;
            }
            else {
                let index = this.findIndexInSelection(node);
                let selected = (index >= 0);
                if (!selected) {
                    if (this.isSingleSelectionMode())
                        this.selectionChange.emit(node);
                    else
                        this.selectionChange.emit([node]);
                }
                this.contextMenu.show(event);
                this.onNodeContextMenuSelect.emit({ originalEvent: event, node: node });
            }
        }
    }
    findIndexInSelection(node) {
        let index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                let areNodesEqual = (this.selection.key && this.selection.key === node.key) || this.selection == node;
                index = areNodesEqual ? 0 : -1;
            }
            else {
                for (let i = 0; i < this.selection.length; i++) {
                    let selectedNode = this.selection[i];
                    let areNodesEqual = (selectedNode.key && selectedNode.key === node.key) || selectedNode == node;
                    if (areNodesEqual) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    }
    syncNodeOption(node, parentNodes, option, value) {
        // to synchronize the node option between the filtered nodes and the original nodes(this.value)
        const _node = this.hasFilteredNodes() ? this.getNodeWithKey(node.key, parentNodes) : null;
        if (_node) {
            _node[option] = value || node[option];
        }
    }
    hasFilteredNodes() {
        return this.filter && this.filteredNodes && this.filteredNodes.length;
    }
    getNodeWithKey(key, nodes) {
        for (let node of nodes) {
            if (node.key === key) {
                return node;
            }
            if (node.children) {
                let matchedNode = this.getNodeWithKey(key, node.children);
                if (matchedNode) {
                    return matchedNode;
                }
            }
        }
    }
    propagateUp(node, select) {
        if (node.children && node.children.length) {
            let selectedCount = 0;
            let childPartialSelected = false;
            for (let child of node.children) {
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            if (select && selectedCount == node.children.length) {
                this.selection = [...this.selection || [], node];
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    let index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this.selection = this.selection.filter((val, i) => i != index);
                    }
                }
                if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
            this.syncNodeOption(node, this.filteredNodes, 'partialSelected');
        }
        let parent = node.parent;
        if (parent) {
            this.propagateUp(parent, select);
        }
    }
    propagateDown(node, select) {
        let index = this.findIndexInSelection(node);
        if (select && index == -1) {
            this.selection = [...this.selection || [], node];
        }
        else if (!select && index > -1) {
            this.selection = this.selection.filter((val, i) => i != index);
        }
        node.partialSelected = false;
        this.syncNodeOption(node, this.filteredNodes, 'partialSelected');
        if (node.children && node.children.length) {
            for (let child of node.children) {
                this.propagateDown(child, select);
            }
        }
    }
    isSelected(node) {
        return this.findIndexInSelection(node) != -1;
    }
    isSingleSelectionMode() {
        return this.selectionMode && this.selectionMode == 'single';
    }
    isMultipleSelectionMode() {
        return this.selectionMode && this.selectionMode == 'multiple';
    }
    isCheckboxSelectionMode() {
        return this.selectionMode && this.selectionMode == 'checkbox';
    }
    isNodeLeaf(node) {
        return node.leaf == false ? false : !(node.children && node.children.length);
    }
    getRootNode() {
        return this.filteredNodes ? this.filteredNodes : this.value;
    }
    getTemplateForNode(node) {
        if (this.templateMap)
            return node.type ? this.templateMap[node.type] : this.templateMap['default'];
        else
            return null;
    }
    onDragOver(event) {
        if (this.droppableNodes && (!this.value || this.value.length === 0)) {
            event.dataTransfer.dropEffect = 'move';
            event.preventDefault();
        }
    }
    onDrop(event) {
        if (this.droppableNodes && (!this.value || this.value.length === 0)) {
            event.preventDefault();
            let dragNode = this.dragNode;
            if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
                let dragNodeIndex = this.dragNodeIndex;
                this.dragNodeSubNodes.splice(dragNodeIndex, 1);
                this.value = this.value || [];
                this.value.push(dragNode);
                this.dragDropService.stopDrag({
                    node: dragNode
                });
            }
        }
    }
    onDragEnter(event) {
        if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
            this.dragHover = true;
        }
    }
    onDragLeave(event) {
        if (this.droppableNodes) {
            let rect = event.currentTarget.getBoundingClientRect();
            if (event.x > rect.left + rect.width || event.x < rect.left || event.y > rect.top + rect.height || event.y < rect.top) {
                this.dragHover = false;
            }
        }
    }
    allowDrop(dragNode, dropNode, dragNodeScope) {
        if (!dragNode) {
            //prevent random html elements to be dragged
            return false;
        }
        else if (this.isValidDragScope(dragNodeScope)) {
            let allow = true;
            if (dropNode) {
                if (dragNode === dropNode) {
                    allow = false;
                }
                else {
                    let parent = dropNode.parent;
                    while (parent != null) {
                        if (parent === dragNode) {
                            allow = false;
                            break;
                        }
                        parent = parent.parent;
                    }
                }
            }
            return allow;
        }
        else {
            return false;
        }
    }
    isValidDragScope(dragScope) {
        let dropScope = this.droppableScope;
        if (dropScope) {
            if (typeof dropScope === 'string') {
                if (typeof dragScope === 'string')
                    return dropScope === dragScope;
                else if (dragScope instanceof Array)
                    return dragScope.indexOf(dropScope) != -1;
            }
            else if (dropScope instanceof Array) {
                if (typeof dragScope === 'string') {
                    return dropScope.indexOf(dragScope) != -1;
                }
                else if (dragScope instanceof Array) {
                    for (let s of dropScope) {
                        for (let ds of dragScope) {
                            if (s === ds) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    _filter(event) {
        let filterValue = event.target.value;
        if (filterValue === '') {
            this.filteredNodes = null;
        }
        else {
            this.filteredNodes = [];
            const searchFields = this.filterBy.split(',');
            const filterText = ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(this.filterLocale);
            const isStrictMode = this.filterMode === 'strict';
            for (let node of this.value) {
                let copyNode = Object.assign({}, node);
                let paramsWithoutNode = { searchFields, filterText, isStrictMode };
                if ((isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode))) ||
                    (!isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode)))) {
                    this.filteredNodes.push(copyNode);
                }
            }
        }
        this.updateSerializedValue();
        this.onFilter.emit({
            filter: filterValue,
            filteredValue: this.filteredNodes
        });
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
                node.expanded = true;
                return true;
            }
        }
    }
    isFilterMatched(node, { searchFields, filterText, isStrictMode }) {
        let matched = false;
        for (let field of searchFields) {
            let fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(node, field))).toLocaleLowerCase(this.filterLocale);
            if (fieldValue.indexOf(filterText) > -1) {
                matched = true;
            }
        }
        if (!matched || (isStrictMode && !this.isNodeLeaf(node))) {
            matched = this.findFilteredNodes(node, { searchFields, filterText, isStrictMode }) || matched;
        }
        return matched;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    ngOnDestroy() {
        if (this.dragStartSubscription) {
            this.dragStartSubscription.unsubscribe();
        }
        if (this.dragStopSubscription) {
            this.dragStopSubscription.unsubscribe();
        }
    }
}
Tree.ɵfac = function Tree_Factory(t) { return new (t || Tree)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.TreeDragDropService, 8)); };
Tree.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Tree, selectors: [["p-tree"]], contentQueries: function Tree_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Tree_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.virtualScrollBody = _t.first);
    } }, inputs: { layout: "layout", metaKeySelection: "metaKeySelection", propagateSelectionUp: "propagateSelectionUp", propagateSelectionDown: "propagateSelectionDown", loadingIcon: "loadingIcon", emptyMessage: "emptyMessage", filterBy: "filterBy", filterMode: "filterMode", indentation: "indentation", trackBy: "trackBy", selection: "selection", value: "value", selectionMode: "selectionMode", style: "style", styleClass: "styleClass", contextMenu: "contextMenu", draggableScope: "draggableScope", droppableScope: "droppableScope", draggableNodes: "draggableNodes", droppableNodes: "droppableNodes", loading: "loading", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", validateDrop: "validateDrop", filter: "filter", filterPlaceholder: "filterPlaceholder", filterLocale: "filterLocale", scrollHeight: "scrollHeight", virtualScroll: "virtualScroll", virtualNodeHeight: "virtualNodeHeight", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, outputs: { selectionChange: "selectionChange", onNodeSelect: "onNodeSelect", onNodeUnselect: "onNodeUnselect", onNodeExpand: "onNodeExpand", onNodeCollapse: "onNodeCollapse", onNodeContextMenuSelect: "onNodeContextMenuSelect", onNodeDrop: "onNodeDrop", onFilter: "onFilter" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "ngClass", "ngStyle", "class", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle", "drop", "dragover", "dragenter", "dragleave"], ["class", "p-tree-loading-overlay p-component-overlay", 4, "ngIf"], ["class", "p-tree-filter-container", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], ["class", "p-tree-empty-message", 4, "ngIf"], [1, "p-tree-loading-overlay", "p-component-overlay"], [1, "p-tree-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-tree-filter", "p-inputtext", "p-component", 3, "keydown.enter", "input"], ["filter", ""], [1, "p-tree-filter-icon", "pi", "pi-search"], [1, "p-tree-wrapper"], ["class", "p-tree-container", "role", "tree", 4, "ngIf"], ["role", "tree", 1, "p-tree-container"], [3, "node", "firstChild", "lastChild", "index", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild", "index", "level"], [1, "p-tree-wrapper", 3, "itemSize", "minBufferPx", "maxBufferPx"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "height", "indentation", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "indentation"], [1, "p-tree-empty-message"], [3, "ngClass", "ngStyle"], ["class", "p-tree-loading-mask p-component-overlay", 4, "ngIf"], [4, "ngIf"], [1, "p-tree-loading-mask", "p-component-overlay"], [3, "node", "root"]], template: function Tree_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, Tree_div_0_Template, 7, 14, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Tree_div_1_Template, 4, 9, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.horizontal);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.horizontal);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, UITreeNode, ɵngcc4.CdkVirtualScrollViewport, ɵngcc4.CdkFixedSizeVirtualScroll, ɵngcc4.CdkVirtualForOf], styles: [".p-tree-container{overflow:auto}.p-tree-container,.p-treenode-children{list-style-type:none;margin:0;padding:0}.p-tree-wrapper{overflow:auto}.p-tree-toggler,.p-treenode-selectable{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-tree-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-tree-filter{width:100%}.p-tree-filter-container{display:block;position:relative;width:100%}.p-tree-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-tree-loading{min-height:4rem;position:relative}.p-tree .p-tree-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}.p-tree-flex-scrollable{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-tree-flex-scrollable .p-tree-wrapper{-ms-flex:1;flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0}.p-tree-horizontal{overflow:auto;padding-left:0;padding-right:0;width:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal td,.p-tree.p-tree-horizontal tr{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-weight:400;padding:.4em 1em .4em .2em}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(\"data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=\") repeat-x scroll 50% rgba(0,0,0,0);padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed,.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{margin:0;padding:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(\"data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=\") repeat-y scroll 0 0 rgba(0,0,0,0);width:1px}.p-tree.p-tree-horizontal table{height:0}"], encapsulation: 2 });
Tree.ctorParameters = () => [
    { type: ElementRef },
    { type: TreeDragDropService, decorators: [{ type: Optional }] }
];
Tree.propDecorators = {
    value: [{ type: Input }],
    selectionMode: [{ type: Input }],
    selection: [{ type: Input }],
    selectionChange: [{ type: Output }],
    onNodeSelect: [{ type: Output }],
    onNodeUnselect: [{ type: Output }],
    onNodeExpand: [{ type: Output }],
    onNodeCollapse: [{ type: Output }],
    onNodeContextMenuSelect: [{ type: Output }],
    onNodeDrop: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    contextMenu: [{ type: Input }],
    layout: [{ type: Input }],
    draggableScope: [{ type: Input }],
    droppableScope: [{ type: Input }],
    draggableNodes: [{ type: Input }],
    droppableNodes: [{ type: Input }],
    metaKeySelection: [{ type: Input }],
    propagateSelectionUp: [{ type: Input }],
    propagateSelectionDown: [{ type: Input }],
    loading: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    emptyMessage: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    validateDrop: [{ type: Input }],
    filter: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterMode: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    filterLocale: [{ type: Input }],
    scrollHeight: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    virtualNodeHeight: [{ type: Input }],
    minBufferPx: [{ type: Input }],
    maxBufferPx: [{ type: Input }],
    indentation: [{ type: Input }],
    trackBy: [{ type: Input }],
    onFilter: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    virtualScrollBody: [{ type: ViewChild, args: [CdkVirtualScrollViewport,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Tree, [{
        type: Component,
        args: [{
                selector: 'p-tree',
                template: `
        <div [ngClass]="{'p-tree p-component':true,'p-tree-selectable':selectionMode,
                'p-treenode-dragover':dragHover,'p-tree-loading': loading, 'p-tree-flex-scrollable': scrollHeight === 'flex'}" 
            [ngStyle]="style" [class]="styleClass" *ngIf="!horizontal"
            (drop)="onDrop($event)" (dragover)="onDragOver($event)" (dragenter)="onDragEnter($event)" (dragleave)="onDragLeave($event)">
            <div class="p-tree-loading-overlay p-component-overlay" *ngIf="loading">
                <i [class]="'p-tree-loading-icon pi-spin ' + loadingIcon"></i>
            </div>
            <div *ngIf="filter" class="p-tree-filter-container">
                <input #filter type="text" autocomplete="off" class="p-tree-filter p-inputtext p-component" [attr.placeholder]="filterPlaceholder"
                    (keydown.enter)="$event.preventDefault()" (input)="_filter($event)">
                    <span class="p-tree-filter-icon pi pi-search"></span>
            </div>
            <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                <div class="p-tree-wrapper" [style.max-height]="scrollHeight">
                    <ul class="p-tree-container" *ngIf="getRootNode()" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy">
                        <p-treeNode *ngFor="let node of getRootNode(); let firstChild=first;let lastChild=last; let index=index; trackBy: trackBy" [node]="node"
                                    [firstChild]="firstChild" [lastChild]="lastChild" [index]="index" [level]="0"></p-treeNode>
                    </ul>
                </div>
            </ng-container>
            <ng-template #virtualScrollList>
                <cdk-virtual-scroll-viewport class="p-tree-wrapper" [style.height]="scrollHeight" [itemSize]="virtualNodeHeight" [minBufferPx]="minBufferPx" [maxBufferPx]="maxBufferPx">
                    <ul class="p-tree-container" *ngIf="getRootNode()" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy">
                        <p-treeNode *cdkVirtualFor="let rowNode of serializedValue; let firstChild=first; let lastChild=last; let index=index; trackBy: trackBy; templateCacheSize: 0"  [level]="rowNode.level"
                                    [rowNode]="rowNode" [node]="rowNode.node" [firstChild]="firstChild" [lastChild]="lastChild" [index]="index" [style.height.px]="virtualNodeHeight" [indentation]="indentation"></p-treeNode>
                    </ul>
                </cdk-virtual-scroll-viewport>
            </ng-template>
            <div class="p-tree-empty-message" *ngIf="!loading && (value == null || value.length === 0)">{{emptyMessage}}</div>
        </div>
        <div [ngClass]="{'p-tree p-tree-horizontal p-component':true,'p-tree-selectable':selectionMode}"  [ngStyle]="style" [class]="styleClass" *ngIf="horizontal">
            <div class="p-tree-loading-mask p-component-overlay" *ngIf="loading">
                <i [class]="'p-tree-loading-icon pi-spin ' + loadingIcon"></i>
            </div>
            <table *ngIf="value&&value[0]">
                <p-treeNode [node]="value[0]" [root]="true"></p-treeNode>
            </table>
            <div class="p-tree-empty-message" *ngIf="!loading && (value == null || value.length === 0)">{{emptyMessage}}</div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-tree-container{overflow:auto}.p-tree-container,.p-treenode-children{list-style-type:none;margin:0;padding:0}.p-tree-wrapper{overflow:auto}.p-tree-toggler,.p-treenode-selectable{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-tree-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-tree-filter{width:100%}.p-tree-filter-container{display:block;position:relative;width:100%}.p-tree-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-tree-loading{min-height:4rem;position:relative}.p-tree .p-tree-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}.p-tree-flex-scrollable{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-tree-flex-scrollable .p-tree-wrapper{-ms-flex:1;flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0}.p-tree-horizontal{overflow:auto;padding-left:0;padding-right:0;width:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal td,.p-tree.p-tree-horizontal tr{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-weight:400;padding:.4em 1em .4em .2em}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(\"data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=\") repeat-x scroll 50% rgba(0,0,0,0);padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed,.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{margin:0;padding:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(\"data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=\") repeat-y scroll 0 0 rgba(0,0,0,0);width:1px}.p-tree.p-tree-horizontal table{height:0}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc3.TreeDragDropService, decorators: [{
                type: Optional
            }] }]; }, { selectionChange: [{
            type: Output
        }], onNodeSelect: [{
            type: Output
        }], onNodeUnselect: [{
            type: Output
        }], onNodeExpand: [{
            type: Output
        }], onNodeCollapse: [{
            type: Output
        }], onNodeContextMenuSelect: [{
            type: Output
        }], onNodeDrop: [{
            type: Output
        }], layout: [{
            type: Input
        }], metaKeySelection: [{
            type: Input
        }], propagateSelectionUp: [{
            type: Input
        }], propagateSelectionDown: [{
            type: Input
        }], loadingIcon: [{
            type: Input
        }], emptyMessage: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], filterMode: [{
            type: Input
        }], indentation: [{
            type: Input
        }], trackBy: [{
            type: Input
        }], onFilter: [{
            type: Output
        }], selection: [{
            type: Input
        }], value: [{
            type: Input
        }], selectionMode: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], contextMenu: [{
            type: Input
        }], draggableScope: [{
            type: Input
        }], droppableScope: [{
            type: Input
        }], draggableNodes: [{
            type: Input
        }], droppableNodes: [{
            type: Input
        }], loading: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], validateDrop: [{
            type: Input
        }], filter: [{
            type: Input
        }], filterPlaceholder: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], scrollHeight: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], virtualNodeHeight: [{
            type: Input
        }], minBufferPx: [{
            type: Input
        }], maxBufferPx: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }], virtualScrollBody: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }] }); })();
export class TreeModule {
}
TreeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TreeModule });
TreeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TreeModule_Factory(t) { return new (t || TreeModule)(); }, imports: [[CommonModule, ScrollingModule, RippleModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TreeModule, { declarations: function () { return [Tree, UITreeNode]; }, imports: function () { return [CommonModule, ScrollingModule, RippleModule]; }, exports: function () { return [Tree, SharedModule, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ScrollingModule, RippleModule],
                exports: [Tree, SharedModule, ScrollingModule],
                declarations: [Tree, UITreeNode]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3RyZWUvdHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQTRCLE1BQU0sRUFBQyxZQUFZLEVBQzNFLGVBQWUsRUFBdUIsTUFBTSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQWdCLGlCQUFpQixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDakYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUdoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUVWLEtBQUs7QUFBSyw2QkFFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFLLHFCQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLGdDQUVWLEtBQUs7QUFBSywyQkFFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFLLDRCQUVWLEtBQUs7QUFBSyxnQ0FFVixLQUFLO0FBQUssMEJBRVYsS0FBSztBQUFLLDBCQUVWLEtBQUs7QUFBSywwQkFFVixLQUFLO0FBQUssc0JBRVYsS0FBSztBQUFLLHVCQUVWLE1BQU07QUFBSyx3QkFFWCxlQUFlLFNBQUMsYUFBYTtBQUFPLGdDQUVwQyxTQUFTLFNBQUMsd0JBQXdCO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQW1qQi9DLE1BQU0sT0FBTyxVQUFVO0FBQUc7c0NBTHpCLFFBQVEsU0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsWUFBWSxDQUFDLGtCQUNwRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLGVBQWUsQ0FBQyxrQkFDNUMsWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFDLFVBQVUsQ0FBQyxjQUNsQzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxJbnB1dCxBZnRlckNvbnRlbnRJbml0LE9uRGVzdHJveSxPdXRwdXQsRXZlbnRFbWl0dGVyLE9uSW5pdCxPbkNoYW5nZXMsXG4gICAgQ29udGVudENoaWxkcmVuLFF1ZXJ5TGlzdCxUZW1wbGF0ZVJlZixJbmplY3QsRWxlbWVudFJlZixmb3J3YXJkUmVmLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsIFNjcm9sbGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7UHJpbWVUZW1wbGF0ZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtUcmVlRHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Jsb2NrYWJsZVVJfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge09iamVjdFV0aWxzfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRyZWVOb2RlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwibm9kZVwiPlxuICAgICAgICAgICAgPGxpICpuZ0lmPVwidHJlZS5kcm9wcGFibGVOb2Rlc1wiIGNsYXNzPVwicC10cmVlbm9kZS1kcm9wcG9pbnRcIiBbbmdDbGFzc109XCJ7J3AtdHJlZW5vZGUtZHJvcHBvaW50LWFjdGl2ZSc6ZHJhZ2hvdmVyUHJldn1cIlxuICAgICAgICAgICAgKGRyb3ApPVwib25Ecm9wUG9pbnQoJGV2ZW50LC0xKVwiIChkcmFnb3Zlcik9XCJvbkRyb3BQb2ludERyYWdPdmVyKCRldmVudClcIiAoZHJhZ2VudGVyKT1cIm9uRHJvcFBvaW50RHJhZ0VudGVyKCRldmVudCwtMSlcIiAoZHJhZ2xlYXZlKT1cIm9uRHJvcFBvaW50RHJhZ0xlYXZlKCRldmVudClcIj48L2xpPlxuICAgICAgICAgICAgPGxpICpuZ0lmPVwiIXRyZWUuaG9yaXpvbnRhbFwiIHJvbGU9XCJ0cmVlaXRlbVwiIFtuZ0NsYXNzXT1cIlsncC10cmVlbm9kZScsbm9kZS5zdHlsZUNsYXNzfHwnJywgaXNMZWFmKCkgPyAncC10cmVlbm9kZS1sZWFmJzogJyddXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdHJlZW5vZGUtY29udGVudFwiIFtzdHlsZS5wYWRkaW5nTGVmdF09XCIobGV2ZWwgKiBpbmRlbnRhdGlvbikgICsgJ3JlbSdcIiAoY2xpY2spPVwib25Ob2RlQ2xpY2soJGV2ZW50KVwiIChjb250ZXh0bWVudSk9XCJvbk5vZGVSaWdodENsaWNrKCRldmVudClcIiAodG91Y2hlbmQpPVwib25Ob2RlVG91Y2hFbmQoKVwiXG4gICAgICAgICAgICAgICAgICAgIChkcm9wKT1cIm9uRHJvcE5vZGUoJGV2ZW50KVwiIChkcmFnb3Zlcik9XCJvbkRyb3BOb2RlRHJhZ092ZXIoJGV2ZW50KVwiIChkcmFnZW50ZXIpPVwib25Ecm9wTm9kZURyYWdFbnRlcigkZXZlbnQpXCIgKGRyYWdsZWF2ZSk9XCJvbkRyb3BOb2RlRHJhZ0xlYXZlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICBbZHJhZ2dhYmxlXT1cInRyZWUuZHJhZ2dhYmxlTm9kZXNcIiAoZHJhZ3N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCRldmVudClcIiAoZHJhZ2VuZCk9XCJvbkRyYWdTdG9wKCRldmVudClcIiBbYXR0ci50YWJpbmRleF09XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLXRyZWVub2RlLXNlbGVjdGFibGUnOnRyZWUuc2VsZWN0aW9uTW9kZSAmJiBub2RlLnNlbGVjdGFibGUgIT09IGZhbHNlLCdwLXRyZWVub2RlLWRyYWdvdmVyJzpkcmFnaG92ZXJOb2RlLCAncC1oaWdobGlnaHQnOmlzU2VsZWN0ZWQoKX1cIlxuICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiIFthdHRyLmFyaWEtcG9zaW5zZXRdPVwidGhpcy5pbmRleCArIDFcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cInRoaXMubm9kZS5leHBhbmRlZFwiIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZCgpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJub2RlLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicC10cmVlLXRvZ2dsZXIgcC1saW5rXCIgKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC10cmVlLXRvZ2dsZXItaWNvbiBwaSBwaS1md1wiIFtuZ0NsYXNzXT1cInsncGktY2hldnJvbi1yaWdodCc6IW5vZGUuZXhwYW5kZWQsJ3BpLWNoZXZyb24tZG93bic6bm9kZS5leHBhbmRlZH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveCBwLWNvbXBvbmVudFwiICpuZ0lmPVwidHJlZS5zZWxlY3Rpb25Nb2RlID09ICdjaGVja2JveCdcIiBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiaXNTZWxlY3RlZCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveC1ib3hcIiBbbmdDbGFzc109XCJ7J3AtaGlnaGxpZ2h0JzogaXNTZWxlY3RlZCgpLCAncC1pbmRldGVybWluYXRlJzogbm9kZS5wYXJ0aWFsU2VsZWN0ZWR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWNoZWNrYm94LWljb24gcGlcIiBbbmdDbGFzc109XCJ7J3BpLWNoZWNrJzppc1NlbGVjdGVkKCksJ3BpLW1pbnVzJzpub2RlLnBhcnRpYWxTZWxlY3RlZH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtjbGFzc109XCJnZXRJY29uKClcIiAqbmdJZj1cIm5vZGUuaWNvbnx8bm9kZS5leHBhbmRlZEljb258fG5vZGUuY29sbGFwc2VkSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXRyZWVub2RlLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhdHJlZS5nZXRUZW1wbGF0ZUZvck5vZGUobm9kZSlcIj57e25vZGUubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRyZWUuZ2V0VGVtcGxhdGVGb3JOb2RlKG5vZGUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmVlLmdldFRlbXBsYXRlRm9yTm9kZShub2RlKTsgY29udGV4dDogeyRpbXBsaWNpdDogbm9kZX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwLXRyZWVub2RlLWNoaWxkcmVuXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiICpuZ0lmPVwiIXRyZWUudmlydHVhbFNjcm9sbCAmJiBub2RlLmNoaWxkcmVuICYmIG5vZGUuZXhwYW5kZWRcIiBbc3R5bGUuZGlzcGxheV09XCJub2RlLmV4cGFuZGVkID8gJ2Jsb2NrJyA6ICdub25lJ1wiIHJvbGU9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8cC10cmVlTm9kZSAqbmdGb3I9XCJsZXQgY2hpbGROb2RlIG9mIG5vZGUuY2hpbGRyZW47bGV0IGZpcnN0Q2hpbGQ9Zmlyc3Q7bGV0IGxhc3RDaGlsZD1sYXN0OyBsZXQgaW5kZXg9aW5kZXg7IHRyYWNrQnk6IHRyZWUudHJhY2tCeVwiIFtub2RlXT1cImNoaWxkTm9kZVwiIFtwYXJlbnROb2RlXT1cIm5vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2ZpcnN0Q2hpbGRdPVwiZmlyc3RDaGlsZFwiIFtsYXN0Q2hpbGRdPVwibGFzdENoaWxkXCIgW2luZGV4XT1cImluZGV4XCIgW3N0eWxlLmhlaWdodC5weF09XCJ0cmVlLnZpcnR1YWxOb2RlSGVpZ2h0XCIgW2xldmVsXT1cImxldmVsICsgMVwiPjwvcC10cmVlTm9kZT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSAqbmdJZj1cInRyZWUuZHJvcHBhYmxlTm9kZXMmJmxhc3RDaGlsZFwiIGNsYXNzPVwicC10cmVlbm9kZS1kcm9wcG9pbnRcIiBbbmdDbGFzc109XCJ7J3AtdHJlZW5vZGUtZHJvcHBvaW50LWFjdGl2ZSc6ZHJhZ2hvdmVyTmV4dH1cIlxuICAgICAgICAgICAgKGRyb3ApPVwib25Ecm9wUG9pbnQoJGV2ZW50LDEpXCIgKGRyYWdvdmVyKT1cIm9uRHJvcFBvaW50RHJhZ092ZXIoJGV2ZW50KVwiIChkcmFnZW50ZXIpPVwib25Ecm9wUG9pbnREcmFnRW50ZXIoJGV2ZW50LDEpXCIgKGRyYWdsZWF2ZSk9XCJvbkRyb3BQb2ludERyYWdMZWF2ZSgkZXZlbnQpXCI+PC9saT5cbiAgICAgICAgICAgIDx0YWJsZSAqbmdJZj1cInRyZWUuaG9yaXpvbnRhbFwiIFtjbGFzc109XCJub2RlLnN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInAtdHJlZW5vZGUtY29ubmVjdG9yXCIgKm5nSWY9XCIhcm9vdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInAtdHJlZW5vZGUtY29ubmVjdG9yLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgW25nQ2xhc3NdPVwieydwLXRyZWVub2RlLWNvbm5lY3Rvci1saW5lJzohZmlyc3RDaGlsZH1cIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgW25nQ2xhc3NdPVwieydwLXRyZWVub2RlLWNvbm5lY3Rvci1saW5lJzohbGFzdENoaWxkfVwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicC10cmVlbm9kZVwiIFtuZ0NsYXNzXT1cInsncC10cmVlbm9kZS1jb2xsYXBzZWQnOiFub2RlLmV4cGFuZGVkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRyZWVub2RlLWNvbnRlbnRcIiB0YWJpbmRleD1cIjBcIiBbbmdDbGFzc109XCJ7J3AtdHJlZW5vZGUtc2VsZWN0YWJsZSc6dHJlZS5zZWxlY3Rpb25Nb2RlLCdwLWhpZ2hsaWdodCc6aXNTZWxlY3RlZCgpfVwiIChjbGljayk9XCJvbk5vZGVDbGljaygkZXZlbnQpXCIgKGNvbnRleHRtZW51KT1cIm9uTm9kZVJpZ2h0Q2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0b3VjaGVuZCk9XCJvbk5vZGVUb3VjaEVuZCgpXCIgKGtleWRvd24pPVwib25Ob2RlS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC10cmVlLXRvZ2dsZXIgcGkgcGktZndcIiBbbmdDbGFzc109XCJ7J3BpLXBsdXMnOiFub2RlLmV4cGFuZGVkLCdwaS1taW51cyc6bm9kZS5leHBhbmRlZH1cIiAqbmdJZj1cIiFpc0xlYWYoKVwiIChjbGljayk9XCJ0b2dnbGUoJGV2ZW50KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2NsYXNzXT1cImdldEljb24oKVwiICpuZ0lmPVwibm9kZS5pY29ufHxub2RlLmV4cGFuZGVkSWNvbnx8bm9kZS5jb2xsYXBzZWRJY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdHJlZW5vZGUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIXRyZWUuZ2V0VGVtcGxhdGVGb3JOb2RlKG5vZGUpXCI+e3tub2RlLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRyZWUuZ2V0VGVtcGxhdGVGb3JOb2RlKG5vZGUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRyZWUuZ2V0VGVtcGxhdGVGb3JOb2RlKG5vZGUpOyBjb250ZXh0OiB7JGltcGxpY2l0OiBub2RlfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicC10cmVlbm9kZS1jaGlsZHJlbi1jb250YWluZXJcIiAqbmdJZj1cIm5vZGUuY2hpbGRyZW4gJiYgbm9kZS5leHBhbmRlZFwiIFtzdHlsZS5kaXNwbGF5XT1cIm5vZGUuZXhwYW5kZWQgPyAndGFibGUtY2VsbCcgOiAnbm9uZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10cmVlbm9kZS1jaGlsZHJlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC10cmVlTm9kZSAqbmdGb3I9XCJsZXQgY2hpbGROb2RlIG9mIG5vZGUuY2hpbGRyZW47bGV0IGZpcnN0Q2hpbGQ9Zmlyc3Q7bGV0IGxhc3RDaGlsZD1sYXN0OyB0cmFja0J5OiB0cmVlLnRyYWNrQnlcIiBbbm9kZV09XCJjaGlsZE5vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaXJzdENoaWxkXT1cImZpcnN0Q2hpbGRcIiBbbGFzdENoaWxkXT1cImxhc3RDaGlsZFwiPjwvcC10cmVlTm9kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFVJVHJlZU5vZGUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc3RhdGljIElDT05fQ0xBU1M6IHN0cmluZyA9ICdwLXRyZWVub2RlLWljb24gJztcblxuICAgIEBJbnB1dCgpIHJvd05vZGU6IGFueTtcblxuICAgIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xuXG4gICAgQElucHV0KCkgcGFyZW50Tm9kZTogVHJlZU5vZGU7XG5cbiAgICBASW5wdXQoKSByb290OiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGZpcnN0Q2hpbGQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBsYXN0Q2hpbGQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBsZXZlbDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgaW5kZW50YXRpb246IG51bWJlcjtcblxuICAgIHRyZWU6IFRyZWU7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVHJlZSkpIHRyZWUpIHtcbiAgICAgICAgdGhpcy50cmVlID0gdHJlZSBhcyBUcmVlO1xuICAgIH1cblxuICAgIGRyYWdob3ZlclByZXY6IGJvb2xlYW47XG5cbiAgICBkcmFnaG92ZXJOZXh0OiBib29sZWFuO1xuXG4gICAgZHJhZ2hvdmVyTm9kZTogYm9vbGVhblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy50cmVlLnN5bmNOb2RlT3B0aW9uKHRoaXMubm9kZSwgdGhpcy50cmVlLnZhbHVlLCAncGFyZW50JywgdGhpcy50cmVlLmdldE5vZGVXaXRoS2V5KHRoaXMucGFyZW50Tm9kZS5rZXksIHRoaXMudHJlZS52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SWNvbigpIHtcbiAgICAgICAgbGV0IGljb246IHN0cmluZztcblxuICAgICAgICBpZiAodGhpcy5ub2RlLmljb24pXG4gICAgICAgICAgICBpY29uID0gdGhpcy5ub2RlLmljb247XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGljb24gPSB0aGlzLm5vZGUuZXhwYW5kZWQgJiYgdGhpcy5ub2RlLmNoaWxkcmVuICYmIHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGggPyB0aGlzLm5vZGUuZXhwYW5kZWRJY29uIDogdGhpcy5ub2RlLmNvbGxhcHNlZEljb247XG5cbiAgICAgICAgcmV0dXJuIFVJVHJlZU5vZGUuSUNPTl9DTEFTUyArICcgJyArIGljb247XG4gICAgfVxuXG4gICAgaXNMZWFmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmlzTm9kZUxlYWYodGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuZXhwYW5kZWQpXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlKGV2ZW50KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5leHBhbmQoZXZlbnQpO1xuICAgIH1cblxuICAgIGV4cGFuZChldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlLmV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMudHJlZS52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLnRyZWUudXBkYXRlU2VyaWFsaXplZFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmVlLm9uTm9kZUV4cGFuZC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogdGhpcy5ub2RlfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMubm9kZS5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy50cmVlLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgIHRoaXMudHJlZS51cGRhdGVTZXJpYWxpemVkVmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyZWUub25Ob2RlQ29sbGFwc2UuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IHRoaXMubm9kZX0pO1xuICAgIH1cblxuICAgIG9uTm9kZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMudHJlZS5vbk5vZGVDbGljayhldmVudCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBvbk5vZGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudHJlZS5vbk5vZGVDbGljayhldmVudCwgdGhpcy5ub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTm9kZVRvdWNoRW5kKCkge1xuICAgICAgICB0aGlzLnRyZWUub25Ob2RlVG91Y2hFbmQoKTtcbiAgICB9XG5cbiAgICBvbk5vZGVSaWdodENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMudHJlZS5vbk5vZGVSaWdodENsaWNrKGV2ZW50LCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWUuaXNTZWxlY3RlZCh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIG9uRHJvcFBvaW50KGV2ZW50OiBFdmVudCwgcG9zaXRpb246IG51bWJlcikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZHJhZ05vZGUgPSB0aGlzLnRyZWUuZHJhZ05vZGU7XG4gICAgICAgIGxldCBkcmFnTm9kZUluZGV4ID0gdGhpcy50cmVlLmRyYWdOb2RlSW5kZXg7XG4gICAgICAgIGxldCBkcmFnTm9kZVNjb3BlID0gdGhpcy50cmVlLmRyYWdOb2RlU2NvcGU7XG4gICAgICAgIGxldCBpc1ZhbGlkRHJvcFBvaW50SW5kZXggPSB0aGlzLnRyZWUuZHJhZ05vZGVUcmVlID09PSB0aGlzLnRyZWUgPyAocG9zaXRpb24gPT09IDEgfHwgZHJhZ05vZGVJbmRleCAhPT0gdGhpcy5pbmRleCAtIDEpIDogdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy50cmVlLmFsbG93RHJvcChkcmFnTm9kZSwgdGhpcy5ub2RlLCBkcmFnTm9kZVNjb3BlKSAmJiBpc1ZhbGlkRHJvcFBvaW50SW5kZXgpIHtcbiAgICAgICAgICAgIGxldCBkcm9wUGFyYW1zID0gey4uLnRoaXMuY3JlYXRlRHJvcFBvaW50RXZlbnRNZXRhZGF0YShwb3NpdGlvbil9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy50cmVlLnZhbGlkYXRlRHJvcCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJlZS5vbk5vZGVEcm9wLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgZHJhZ05vZGU6IGRyYWdOb2RlLFxuICAgICAgICAgICAgICAgICAgICBkcm9wTm9kZTogdGhpcy5ub2RlLFxuICAgICAgICAgICAgICAgICAgICBkcm9wSW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUG9pbnREcm9wKGRyb3BQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NQb2ludERyb3AoZHJvcFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmVlLm9uTm9kZURyb3AuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBkcmFnTm9kZTogZHJhZ05vZGUsXG4gICAgICAgICAgICAgICAgICAgIGRyb3BOb2RlOiB0aGlzLm5vZGUsXG4gICAgICAgICAgICAgICAgICAgIGRyb3BJbmRleDogdGhpcy5pbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmFnaG92ZXJQcmV2ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJhZ2hvdmVyTmV4dCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb2Nlc3NQb2ludERyb3AoZXZlbnQpIHtcbiAgICAgICAgbGV0IG5ld05vZGVMaXN0ID0gZXZlbnQuZHJvcE5vZGUucGFyZW50ID8gZXZlbnQuZHJvcE5vZGUucGFyZW50LmNoaWxkcmVuIDogdGhpcy50cmVlLnZhbHVlO1xuICAgICAgICBldmVudC5kcmFnTm9kZVN1Yk5vZGVzLnNwbGljZShldmVudC5kcmFnTm9kZUluZGV4LCAxKTtcbiAgICAgICAgbGV0IGRyb3BJbmRleCA9IHRoaXMuaW5kZXg7XG5cbiAgICAgICAgaWYgKGV2ZW50LnBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgICAgZHJvcEluZGV4ID0gKGV2ZW50LmRyYWdOb2RlU3ViTm9kZXMgPT09IG5ld05vZGVMaXN0KSA/ICgoZXZlbnQuZHJhZ05vZGVJbmRleCA+IGV2ZW50LmluZGV4KSA/IGV2ZW50LmluZGV4IDogZXZlbnQuaW5kZXggLSAxKSA6IGV2ZW50LmluZGV4O1xuICAgICAgICAgICAgbmV3Tm9kZUxpc3Quc3BsaWNlKGRyb3BJbmRleCwgMCwgZXZlbnQuZHJhZ05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZHJvcEluZGV4ID0gbmV3Tm9kZUxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgbmV3Tm9kZUxpc3QucHVzaChldmVudC5kcmFnTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyZWUuZHJhZ0Ryb3BTZXJ2aWNlLnN0b3BEcmFnKHtcbiAgICAgICAgICAgIG5vZGU6IGV2ZW50LmRyYWdOb2RlLFxuICAgICAgICAgICAgc3ViTm9kZXM6IGV2ZW50LmRyb3BOb2RlLnBhcmVudCA/IGV2ZW50LmRyb3BOb2RlLnBhcmVudC5jaGlsZHJlbiA6IHRoaXMudHJlZS52YWx1ZSxcbiAgICAgICAgICAgIGluZGV4OiBldmVudC5kcmFnTm9kZUluZGV4XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZURyb3BQb2ludEV2ZW50TWV0YWRhdGEocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRyYWdOb2RlOiB0aGlzLnRyZWUuZHJhZ05vZGUsXG4gICAgICAgICAgICBkcmFnTm9kZUluZGV4OiAgdGhpcy50cmVlLmRyYWdOb2RlSW5kZXgsXG4gICAgICAgICAgICBkcmFnTm9kZVN1Yk5vZGVzOiB0aGlzLnRyZWUuZHJhZ05vZGVTdWJOb2RlcyxcbiAgICAgICAgICAgIGRyb3BOb2RlOiB0aGlzLm5vZGUsXG4gICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uRHJvcFBvaW50RHJhZ092ZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25Ecm9wUG9pbnREcmFnRW50ZXIoZXZlbnQ6IEV2ZW50LCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnRyZWUuYWxsb3dEcm9wKHRoaXMudHJlZS5kcmFnTm9kZSwgdGhpcy5ub2RlLCB0aGlzLnRyZWUuZHJhZ05vZGVTY29wZSkpIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnaG92ZXJQcmV2ID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdob3Zlck5leHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ecm9wUG9pbnREcmFnTGVhdmUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuZHJhZ2hvdmVyUHJldiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYWdob3Zlck5leHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkRyYWdTdGFydChldmVudCkge1xuICAgICAgICBpZiAodGhpcy50cmVlLmRyYWdnYWJsZU5vZGVzICYmIHRoaXMubm9kZS5kcmFnZ2FibGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgXCJkYXRhXCIpO1xuXG4gICAgICAgICAgICB0aGlzLnRyZWUuZHJhZ0Ryb3BTZXJ2aWNlLnN0YXJ0RHJhZyh7XG4gICAgICAgICAgICAgICAgdHJlZTogdGhpcyxcbiAgICAgICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUsXG4gICAgICAgICAgICAgICAgc3ViTm9kZXM6IHRoaXMubm9kZS5wYXJlbnQgPyB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuIDogdGhpcy50cmVlLnZhbHVlLFxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgIHNjb3BlOiB0aGlzLnRyZWUuZHJhZ2dhYmxlU2NvcGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRHJhZ1N0b3AoZXZlbnQpIHtcbiAgICAgICAgdGhpcy50cmVlLmRyYWdEcm9wU2VydmljZS5zdG9wRHJhZyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUsXG4gICAgICAgICAgICBzdWJOb2RlczogdGhpcy5ub2RlLnBhcmVudCA/IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4gOiB0aGlzLnRyZWUudmFsdWUsXG4gICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRyb3BOb2RlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgICAgIGlmICh0aGlzLnRyZWUuZHJvcHBhYmxlTm9kZXMpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRHJvcE5vZGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudHJlZS5kcm9wcGFibGVOb2RlcyAmJiB0aGlzLm5vZGUuZHJvcHBhYmxlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGRyYWdOb2RlID0gdGhpcy50cmVlLmRyYWdOb2RlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50cmVlLmFsbG93RHJvcChkcmFnTm9kZSwgdGhpcy5ub2RlLCB0aGlzLnRyZWUuZHJhZ05vZGVTY29wZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZHJvcFBhcmFtcyA9IHsuLi50aGlzLmNyZWF0ZURyb3BOb2RlRXZlbnRNZXRhZGF0YSgpfTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyZWUudmFsaWRhdGVEcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJlZS5vbk5vZGVEcm9wLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnTm9kZTogZHJhZ05vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wTm9kZTogdGhpcy5ub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NOb2RlRHJvcChkcm9wUGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NOb2RlRHJvcChkcm9wUGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmVlLm9uTm9kZURyb3AuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdOb2RlOiBkcmFnTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BOb2RlOiB0aGlzLm5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5kcmFnaG92ZXJOb2RlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY3JlYXRlRHJvcE5vZGVFdmVudE1ldGFkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZHJhZ05vZGU6IHRoaXMudHJlZS5kcmFnTm9kZSxcbiAgICAgICAgICAgIGRyYWdOb2RlSW5kZXg6ICB0aGlzLnRyZWUuZHJhZ05vZGVJbmRleCxcbiAgICAgICAgICAgIGRyYWdOb2RlU3ViTm9kZXM6IHRoaXMudHJlZS5kcmFnTm9kZVN1Yk5vZGVzLFxuICAgICAgICAgICAgZHJvcE5vZGU6IHRoaXMubm9kZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb2Nlc3NOb2RlRHJvcChldmVudCkge1xuICAgICAgICBsZXQgZHJhZ05vZGVJbmRleCA9IGV2ZW50LmRyYWdOb2RlSW5kZXg7XG4gICAgICAgIGV2ZW50LmRyYWdOb2RlU3ViTm9kZXMuc3BsaWNlKGRyYWdOb2RlSW5kZXgsIDEpO1xuXG4gICAgICAgIGlmIChldmVudC5kcm9wTm9kZS5jaGlsZHJlbilcbiAgICAgICAgICAgIGV2ZW50LmRyb3BOb2RlLmNoaWxkcmVuLnB1c2goZXZlbnQuZHJhZ05vZGUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBldmVudC5kcm9wTm9kZS5jaGlsZHJlbiA9IFtldmVudC5kcmFnTm9kZV07XG5cbiAgICAgICAgdGhpcy50cmVlLmRyYWdEcm9wU2VydmljZS5zdG9wRHJhZyh7XG4gICAgICAgICAgICBub2RlOiBldmVudC5kcmFnTm9kZSxcbiAgICAgICAgICAgIHN1Yk5vZGVzOiBldmVudC5kcm9wTm9kZS5wYXJlbnQgPyBldmVudC5kcm9wTm9kZS5wYXJlbnQuY2hpbGRyZW4gOiB0aGlzLnRyZWUudmFsdWUsXG4gICAgICAgICAgICBpbmRleDogZHJhZ05vZGVJbmRleFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRyb3BOb2RlRHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRyZWUuZHJvcHBhYmxlTm9kZXMgJiYgdGhpcy5ub2RlLmRyb3BwYWJsZSAhPT0gZmFsc2UgJiYgdGhpcy50cmVlLmFsbG93RHJvcCh0aGlzLnRyZWUuZHJhZ05vZGUsIHRoaXMubm9kZSwgdGhpcy50cmVlLmRyYWdOb2RlU2NvcGUpKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdob3Zlck5vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ecm9wTm9kZURyYWdMZWF2ZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy50cmVlLmRyb3BwYWJsZU5vZGVzKSB7XG4gICAgICAgICAgICBsZXQgcmVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQueCA+IHJlY3QubGVmdCArIHJlY3Qud2lkdGggfHwgZXZlbnQueCA8IHJlY3QubGVmdCB8fCBldmVudC55ID49IE1hdGguZmxvb3IocmVjdC50b3AgKyByZWN0LmhlaWdodCkgfHwgZXZlbnQueSA8IHJlY3QudG9wKSB7XG4gICAgICAgICAgICAgICB0aGlzLmRyYWdob3Zlck5vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBub2RlRWxlbWVudCA9ICg8SFRNTERpdkVsZW1lbnQ+IGV2ZW50LnRhcmdldCkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChub2RlRWxlbWVudC5ub2RlTmFtZSAhPT0gJ1AtVFJFRU5PREUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAvL2Rvd24gYXJyb3dcbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSAodGhpcy50cmVlLmRyb3BwYWJsZU5vZGVzKSA/IG5vZGVFbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdIDogbm9kZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RFbGVtZW50ICYmIGxpc3RFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05vZGUobGlzdEVsZW1lbnQuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dE5vZGVFbGVtZW50ID0gbm9kZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dE5vZGVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTm9kZShuZXh0Tm9kZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nQW5jZXN0b3IgPSB0aGlzLmZpbmROZXh0U2libGluZ09mQW5jZXN0b3Iobm9kZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTaWJsaW5nQW5jZXN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTm9kZShuZXh0U2libGluZ0FuY2VzdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy91cCBhcnJvd1xuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBpZiAobm9kZUVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTm9kZSh0aGlzLmZpbmRMYXN0VmlzaWJsZURlc2NlbmRhbnQobm9kZUVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGVFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlRWxlbWVudChub2RlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05vZGUocGFyZW50Tm9kZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL3JpZ2h0IGFycm93XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmV4cGFuZGVkICYmICF0aGlzLnRyZWUuaXNOb2RlTGVhZih0aGlzLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGVFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlRWxlbWVudChub2RlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05vZGUocGFyZW50Tm9kZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL2VudGVyXG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIHRoaXMudHJlZS5vbk5vZGVDbGljayhldmVudCwgdGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy9ubyBvcFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kTmV4dFNpYmxpbmdPZkFuY2VzdG9yKG5vZGVFbGVtZW50KSB7XG4gICAgICAgIGxldCBwYXJlbnROb2RlRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50Tm9kZUVsZW1lbnQobm9kZUVsZW1lbnQpO1xuICAgICAgICBpZiAocGFyZW50Tm9kZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudE5vZGVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kTmV4dFNpYmxpbmdPZkFuY2VzdG9yKHBhcmVudE5vZGVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZExhc3RWaXNpYmxlRGVzY2VuZGFudChub2RlRWxlbWVudCkge1xuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IDxIVE1MRWxlbWVudD4gQXJyYXkuZnJvbShub2RlRWxlbWVudC5jaGlsZHJlbikuZmluZChlbCA9PiBEb21IYW5kbGVyLmhhc0NsYXNzKGVsLCAncC10cmVlbm9kZScpKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5MaXN0RWxlbWVudCA9IGxpc3RFbGVtZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICBpZiAoY2hpbGRyZW5MaXN0RWxlbWVudCAmJiBjaGlsZHJlbkxpc3RFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZEVsZW1lbnQgPSBjaGlsZHJlbkxpc3RFbGVtZW50LmNoaWxkcmVuW2NoaWxkcmVuTGlzdEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRMYXN0VmlzaWJsZURlc2NlbmRhbnQobGFzdENoaWxkRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQYXJlbnROb2RlRWxlbWVudChub2RlRWxlbWVudCkge1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlRWxlbWVudCA9IG5vZGVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIHJldHVybiBwYXJlbnROb2RlRWxlbWVudC50YWdOYW1lID09PSAnUC1UUkVFTk9ERScgPyBwYXJlbnROb2RlRWxlbWVudCA6IG51bGw7XG4gICAgfVxuXG4gICAgZm9jdXNOb2RlKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudHJlZS5kcm9wcGFibGVOb2RlcylcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5mb2N1cygpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRyZWUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydwLXRyZWUgcC1jb21wb25lbnQnOnRydWUsJ3AtdHJlZS1zZWxlY3RhYmxlJzpzZWxlY3Rpb25Nb2RlLFxuICAgICAgICAgICAgICAgICdwLXRyZWVub2RlLWRyYWdvdmVyJzpkcmFnSG92ZXIsJ3AtdHJlZS1sb2FkaW5nJzogbG9hZGluZywgJ3AtdHJlZS1mbGV4LXNjcm9sbGFibGUnOiBzY3JvbGxIZWlnaHQgPT09ICdmbGV4J31cIiBcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiAqbmdJZj1cIiFob3Jpem9udGFsXCJcbiAgICAgICAgICAgIChkcm9wKT1cIm9uRHJvcCgkZXZlbnQpXCIgKGRyYWdvdmVyKT1cIm9uRHJhZ092ZXIoJGV2ZW50KVwiIChkcmFnZW50ZXIpPVwib25EcmFnRW50ZXIoJGV2ZW50KVwiIChkcmFnbGVhdmUpPVwib25EcmFnTGVhdmUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdHJlZS1sb2FkaW5nLW92ZXJsYXkgcC1jb21wb25lbnQtb3ZlcmxheVwiICpuZ0lmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpIFtjbGFzc109XCIncC10cmVlLWxvYWRpbmctaWNvbiBwaS1zcGluICcgKyBsb2FkaW5nSWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImZpbHRlclwiIGNsYXNzPVwicC10cmVlLWZpbHRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2ZpbHRlciB0eXBlPVwidGV4dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNsYXNzPVwicC10cmVlLWZpbHRlciBwLWlucHV0dGV4dCBwLWNvbXBvbmVudFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cImZpbHRlclBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIiAoaW5wdXQpPVwiX2ZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC10cmVlLWZpbHRlci1pY29uIHBpIHBpLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF2aXJ0dWFsU2Nyb2xsOyBlbHNlIHZpcnR1YWxTY3JvbGxMaXN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdHJlZS13cmFwcGVyXCIgW3N0eWxlLm1heC1oZWlnaHRdPVwic2Nyb2xsSGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInAtdHJlZS1jb250YWluZXJcIiAqbmdJZj1cImdldFJvb3ROb2RlKClcIiByb2xlPVwidHJlZVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC10cmVlTm9kZSAqbmdGb3I9XCJsZXQgbm9kZSBvZiBnZXRSb290Tm9kZSgpOyBsZXQgZmlyc3RDaGlsZD1maXJzdDtsZXQgbGFzdENoaWxkPWxhc3Q7IGxldCBpbmRleD1pbmRleDsgdHJhY2tCeTogdHJhY2tCeVwiIFtub2RlXT1cIm5vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpcnN0Q2hpbGRdPVwiZmlyc3RDaGlsZFwiIFtsYXN0Q2hpbGRdPVwibGFzdENoaWxkXCIgW2luZGV4XT1cImluZGV4XCIgW2xldmVsXT1cIjBcIj48L3AtdHJlZU5vZGU+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjdmlydHVhbFNjcm9sbExpc3Q+XG4gICAgICAgICAgICAgICAgPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBjbGFzcz1cInAtdHJlZS13cmFwcGVyXCIgW3N0eWxlLmhlaWdodF09XCJzY3JvbGxIZWlnaHRcIiBbaXRlbVNpemVdPVwidmlydHVhbE5vZGVIZWlnaHRcIiBbbWluQnVmZmVyUHhdPVwibWluQnVmZmVyUHhcIiBbbWF4QnVmZmVyUHhdPVwibWF4QnVmZmVyUHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicC10cmVlLWNvbnRhaW5lclwiICpuZ0lmPVwiZ2V0Um9vdE5vZGUoKVwiIHJvbGU9XCJ0cmVlXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLXRyZWVOb2RlICpjZGtWaXJ0dWFsRm9yPVwibGV0IHJvd05vZGUgb2Ygc2VyaWFsaXplZFZhbHVlOyBsZXQgZmlyc3RDaGlsZD1maXJzdDsgbGV0IGxhc3RDaGlsZD1sYXN0OyBsZXQgaW5kZXg9aW5kZXg7IHRyYWNrQnk6IHRyYWNrQnk7IHRlbXBsYXRlQ2FjaGVTaXplOiAwXCIgIFtsZXZlbF09XCJyb3dOb2RlLmxldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dOb2RlXT1cInJvd05vZGVcIiBbbm9kZV09XCJyb3dOb2RlLm5vZGVcIiBbZmlyc3RDaGlsZF09XCJmaXJzdENoaWxkXCIgW2xhc3RDaGlsZF09XCJsYXN0Q2hpbGRcIiBbaW5kZXhdPVwiaW5kZXhcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cInZpcnR1YWxOb2RlSGVpZ2h0XCIgW2luZGVudGF0aW9uXT1cImluZGVudGF0aW9uXCI+PC9wLXRyZWVOb2RlPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRyZWUtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwiIWxvYWRpbmcgJiYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUubGVuZ3RoID09PSAwKVwiPnt7ZW1wdHlNZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydwLXRyZWUgcC10cmVlLWhvcml6b250YWwgcC1jb21wb25lbnQnOnRydWUsJ3AtdHJlZS1zZWxlY3RhYmxlJzpzZWxlY3Rpb25Nb2RlfVwiICBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKm5nSWY9XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10cmVlLWxvYWRpbmctbWFzayBwLWNvbXBvbmVudC1vdmVybGF5XCIgKm5nSWY9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGkgW2NsYXNzXT1cIidwLXRyZWUtbG9hZGluZy1pY29uIHBpLXNwaW4gJyArIGxvYWRpbmdJY29uXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGFibGUgKm5nSWY9XCJ2YWx1ZSYmdmFsdWVbMF1cIj5cbiAgICAgICAgICAgICAgICA8cC10cmVlTm9kZSBbbm9kZV09XCJ2YWx1ZVswXVwiIFtyb290XT1cInRydWVcIj48L3AtdHJlZU5vZGU+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdHJlZS1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCIhbG9hZGluZyAmJiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT09IDApXCI+e3tlbXB0eU1lc3NhZ2V9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL3RyZWUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHJlZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyxPbkRlc3Ryb3ksQmxvY2thYmxlVUkge1xuXG4gICAgQElucHV0KCkgdmFsdWU6IFRyZWVOb2RlW107XG5cbiAgICBASW5wdXQoKSBzZWxlY3Rpb25Nb2RlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzZWxlY3Rpb246IGFueTtcblxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uTm9kZVNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Ob2RlVW5zZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uTm9kZUV4cGFuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Ob2RlQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uTm9kZUNvbnRleHRNZW51U2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbk5vZGVEcm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBjb250ZXh0TWVudTogYW55O1xuXG4gICAgQElucHV0KCkgbGF5b3V0OiBzdHJpbmcgPSAndmVydGljYWwnO1xuXG4gICAgQElucHV0KCkgZHJhZ2dhYmxlU2NvcGU6IGFueTtcblxuICAgIEBJbnB1dCgpIGRyb3BwYWJsZVNjb3BlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBkcmFnZ2FibGVOb2RlczogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGRyb3BwYWJsZU5vZGVzOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgbWV0YUtleVNlbGVjdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBwcm9wYWdhdGVTZWxlY3Rpb25VcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBwcm9wYWdhdGVTZWxlY3Rpb25Eb3duOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBsb2FkaW5nSWNvbjogc3RyaW5nID0gJ3BpIHBpLXNwaW5uZXInO1xuXG4gICAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmcgPSAnTm8gcmVjb3JkcyBmb3VuZCc7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB2YWxpZGF0ZURyb3A6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJCeTogc3RyaW5nID0gJ2xhYmVsJztcblxuICAgIEBJbnB1dCgpIGZpbHRlck1vZGU6IHN0cmluZyA9ICdsZW5pZW50JztcblxuICAgIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJMb2NhbGU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNjcm9sbEhlaWdodDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHZpcnR1YWxOb2RlSGVpZ2h0OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBtaW5CdWZmZXJQeDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgbWF4QnVmZmVyUHg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGluZGVudGF0aW9uOiBudW1iZXIgPSAxLjU7XG5cbiAgICBASW5wdXQoKSB0cmFja0J5OiBGdW5jdGlvbiA9IChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IGl0ZW07XG5cbiAgICBAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZChDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHZpcnR1YWxTY3JvbGxCb2R5OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG5cbiAgICBzZXJpYWxpemVkVmFsdWU6IGFueVtdO1xuXG4gICAgcHVibGljIHRlbXBsYXRlTWFwOiBhbnk7XG5cbiAgICBwdWJsaWMgbm9kZVRvdWNoZWQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgZHJhZ05vZGVUcmVlOiBUcmVlO1xuXG4gICAgcHVibGljIGRyYWdOb2RlOiBUcmVlTm9kZTtcblxuICAgIHB1YmxpYyBkcmFnTm9kZVN1Yk5vZGVzOiBUcmVlTm9kZVtdO1xuXG4gICAgcHVibGljIGRyYWdOb2RlSW5kZXg6IG51bWJlcjtcblxuICAgIHB1YmxpYyBkcmFnTm9kZVNjb3BlOiBhbnk7XG5cbiAgICBwdWJsaWMgZHJhZ0hvdmVyOiBib29sZWFuO1xuXG4gICAgcHVibGljIGRyYWdTdGFydFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgcHVibGljIGRyYWdTdG9wU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBwdWJsaWMgZmlsdGVyZWROb2RlczogVHJlZU5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHVibGljIGRyYWdEcm9wU2VydmljZTogVHJlZURyYWdEcm9wU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5kcm9wcGFibGVOb2Rlcykge1xuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRTdWJzY3JpcHRpb24gPSB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnU3RhcnQkLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ05vZGVUcmVlID0gZXZlbnQudHJlZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdOb2RlID0gZXZlbnQubm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdOb2RlU3ViTm9kZXMgPSBldmVudC5zdWJOb2RlcztcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdOb2RlSW5kZXggPSBldmVudC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdOb2RlU2NvcGUgPSBldmVudC5zY29wZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdTdG9wU3Vic2NyaXB0aW9uID0gdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ1N0b3AkLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ05vZGVUcmVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdOb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdOb2RlU3ViTm9kZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ05vZGVJbmRleCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnTm9kZVNjb3BlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdIb3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2U6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJpYWxpemVkVmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2Uuc2Nyb2xsSGVpZ2h0ICYmIHRoaXMudmlydHVhbFNjcm9sbEJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbEJvZHkuY2hlY2tWaWV3cG9ydFNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBob3Jpem9udGFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQgPT0gJ2hvcml6b250YWwnO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZU1hcCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZU1hcFtpdGVtLm5hbWVdID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VyaWFsaXplZFZhbHVlKCkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZWRWYWx1ZSA9IFtdO1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZU5vZGVzKG51bGwsIHRoaXMuZ2V0Um9vdE5vZGUoKSwgMCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplTm9kZXMocGFyZW50LCBub2RlcywgbGV2ZWwsIHZpc2libGUpIHtcbiAgICAgICAgaWYgKG5vZGVzICYmIG5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93Tm9kZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdmlzaWJsZSAmJiAocGFyZW50ID8gcGFyZW50LmV4cGFuZGVkIDogdHJ1ZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplZFZhbHVlLnB1c2gocm93Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocm93Tm9kZS52aXNpYmxlICYmIG5vZGUuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVOb2Rlcyhub2RlLCBub2RlLmNoaWxkcmVuLCBsZXZlbCArIDEsIHJvd05vZGUudmlzaWJsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ob2RlQ2xpY2soZXZlbnQsIG5vZGU6IFRyZWVOb2RlKSB7XG4gICAgICAgIGxldCBldmVudFRhcmdldCA9ICg8RWxlbWVudD4gZXZlbnQudGFyZ2V0KTtcblxuICAgICAgICBpZiAoRG9tSGFuZGxlci5oYXNDbGFzcyhldmVudFRhcmdldCwgJ3AtdHJlZS10b2dnbGVyJykgfHwgRG9tSGFuZGxlci5oYXNDbGFzcyhldmVudFRhcmdldCwgJ3AtdHJlZS10b2dnbGVyLWljb24nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcmVkTm9kZXMoKSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLmdldE5vZGVXaXRoS2V5KG5vZGUua2V5LCB0aGlzLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gKGluZGV4ID49IDApO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoZWNrYm94U2VsZWN0aW9uTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZVNlbGVjdGlvbkRvd24pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZURvd24obm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcigodmFsLGkpID0+IGkhPWluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wYWdhdGVTZWxlY3Rpb25VcCAmJiBub2RlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVVcChub2RlLnBhcmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlVW5zZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZVNlbGVjdGlvbkRvd24pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZURvd24obm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWy4uLnRoaXMuc2VsZWN0aW9ufHxbXSxub2RlXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wYWdhdGVTZWxlY3Rpb25VcCAmJiBub2RlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVVcChub2RlLnBhcmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbWV0YVNlbGVjdGlvbiA9IHRoaXMubm9kZVRvdWNoZWQgPyBmYWxzZSA6IHRoaXMubWV0YUtleVNlbGVjdGlvbjtcblxuICAgICAgICAgICAgICAgIGlmIChtZXRhU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXRhS2V5ID0gKGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBtZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbk1vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcigodmFsLGkpID0+IGkhPWluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVVbnNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25Nb2RlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc011bHRpcGxlU2VsZWN0aW9uTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSAoIW1ldGFLZXkpID8gW10gOiB0aGlzLnNlbGVjdGlvbnx8W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbLi4udGhpcy5zZWxlY3Rpb24sbm9kZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlU2VsZWN0LmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBub2RlOiBub2RlfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVVbnNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlU2VsZWN0LmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBub2RlOiBub2RlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcigodmFsLGkpID0+IGkhPWluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTm9kZVVuc2VsZWN0LmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBub2RlOiBub2RlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFsuLi50aGlzLnNlbGVjdGlvbnx8W10sbm9kZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZVRvdWNoZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk5vZGVUb3VjaEVuZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlVG91Y2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Ob2RlUmlnaHRDbGljayhldmVudDogTW91c2VFdmVudCwgbm9kZTogVHJlZU5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dE1lbnUpIHtcbiAgICAgICAgICAgIGxldCBldmVudFRhcmdldCA9ICg8RWxlbWVudD4gZXZlbnQudGFyZ2V0KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTmFtZSAmJiBldmVudFRhcmdldC5jbGFzc05hbWUuaW5kZXhPZigncC10cmVlLXRvZ2dsZXInKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gKGluZGV4ID49IDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbk1vZGUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoW25vZGVdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRNZW51LnNob3coZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlQ29udGV4dE1lbnVTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGU6IFRyZWVOb2RlKSB7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSAmJiB0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25Nb2RlKCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJlTm9kZXNFcXVhbCA9ICh0aGlzLnNlbGVjdGlvbi5rZXkgJiYgdGhpcy5zZWxlY3Rpb24ua2V5ID09PSBub2RlLmtleSkgfHwgdGhpcy5zZWxlY3Rpb24gPT0gbm9kZTtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGFyZU5vZGVzRXF1YWwgPyAwIDogLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSAgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWROb2RlID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcmVOb2Rlc0VxdWFsID0gKHNlbGVjdGVkTm9kZS5rZXkgJiYgc2VsZWN0ZWROb2RlLmtleSA9PT0gbm9kZS5rZXkpIHx8IHNlbGVjdGVkTm9kZSA9PSBub2RlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJlTm9kZXNFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgc3luY05vZGVPcHRpb24obm9kZSwgcGFyZW50Tm9kZXMsIG9wdGlvbiwgdmFsdWU/OiBhbnkpIHtcbiAgICAgICAgLy8gdG8gc3luY2hyb25pemUgdGhlIG5vZGUgb3B0aW9uIGJldHdlZW4gdGhlIGZpbHRlcmVkIG5vZGVzIGFuZCB0aGUgb3JpZ2luYWwgbm9kZXModGhpcy52YWx1ZSlcbiAgICAgICAgY29uc3QgX25vZGUgPSB0aGlzLmhhc0ZpbHRlcmVkTm9kZXMoKSA/IHRoaXMuZ2V0Tm9kZVdpdGhLZXkobm9kZS5rZXksIHBhcmVudE5vZGVzKSA6IG51bGw7XG4gICAgICAgIGlmIChfbm9kZSkge1xuICAgICAgICAgICAgX25vZGVbb3B0aW9uXSA9IHZhbHVlfHxub2RlW29wdGlvbl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNGaWx0ZXJlZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXJlZE5vZGVzICYmIHRoaXMuZmlsdGVyZWROb2Rlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0Tm9kZVdpdGhLZXkoa2V5OiBzdHJpbmcsIG5vZGVzOiBUcmVlTm9kZVtdKSB7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoZWROb2RlID0gdGhpcy5nZXROb2RlV2l0aEtleShrZXksIG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlZE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvcGFnYXRlVXAobm9kZTogVHJlZU5vZGUsIHNlbGVjdDogYm9vbGVhbikge1xuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ291bnQ6IG51bWJlciA9IDA7XG4gICAgICAgICAgICBsZXQgY2hpbGRQYXJ0aWFsU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcihsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQucGFydGlhbFNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkUGFydGlhbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3QgJiYgc2VsZWN0ZWRDb3VudCA9PSBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWy4uLnRoaXMuc2VsZWN0aW9ufHxbXSxub2RlXTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcnRpYWxTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhJblNlbGVjdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZmlsdGVyKCh2YWwsaSkgPT4gaSE9aW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkUGFydGlhbFNlbGVjdGVkIHx8IHNlbGVjdGVkQ291bnQgPiAwICYmIHNlbGVjdGVkQ291bnQgIT0gbm9kZS5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFydGlhbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFydGlhbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3luY05vZGVPcHRpb24obm9kZSwgdGhpcy5maWx0ZXJlZE5vZGVzLCAncGFydGlhbFNlbGVjdGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlVXAocGFyZW50LCBzZWxlY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvcGFnYXRlRG93bihub2RlOiBUcmVlTm9kZSwgc2VsZWN0OiBib29sZWFuKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdCAmJiBpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbLi4udGhpcy5zZWxlY3Rpb258fFtdLG5vZGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFzZWxlY3QgJiYgaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5maWx0ZXIoKHZhbCxpKSA9PiBpIT1pbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnBhcnRpYWxTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc3luY05vZGVPcHRpb24obm9kZSwgdGhpcy5maWx0ZXJlZE5vZGVzLCAncGFydGlhbFNlbGVjdGVkJyk7XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvcihsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlRG93bihjaGlsZCwgc2VsZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQobm9kZTogVHJlZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZSkgIT0gLTE7XG4gICAgfVxuXG4gICAgaXNTaW5nbGVTZWxlY3Rpb25Nb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Nb2RlICYmIHRoaXMuc2VsZWN0aW9uTW9kZSA9PSAnc2luZ2xlJztcbiAgICB9XG5cbiAgICBpc011bHRpcGxlU2VsZWN0aW9uTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZSAmJiB0aGlzLnNlbGVjdGlvbk1vZGUgPT0gJ211bHRpcGxlJztcbiAgICB9XG5cbiAgICBpc0NoZWNrYm94U2VsZWN0aW9uTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZSAmJiB0aGlzLnNlbGVjdGlvbk1vZGUgPT0gJ2NoZWNrYm94JztcbiAgICB9XG5cbiAgICBpc05vZGVMZWFmKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUubGVhZiA9PSBmYWxzZSA/IGZhbHNlIDogIShub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBnZXRSb290Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWROb2RlcyA/IHRoaXMuZmlsdGVyZWROb2RlcyA6IHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGVGb3JOb2RlKG5vZGU6IFRyZWVOb2RlKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlTWFwKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA/IHRoaXMudGVtcGxhdGVNYXBbbm9kZS50eXBlXSA6IHRoaXMudGVtcGxhdGVNYXBbJ2RlZmF1bHQnXTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgb25EcmFnT3ZlcihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kcm9wcGFibGVOb2RlcyAmJiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRyb3AoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcHBhYmxlTm9kZXMgJiYgKCF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBkcmFnTm9kZSA9IHRoaXMuZHJhZ05vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd0Ryb3AoZHJhZ05vZGUsIG51bGwsIHRoaXMuZHJhZ05vZGVTY29wZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZHJhZ05vZGVJbmRleCA9IHRoaXMuZHJhZ05vZGVJbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdOb2RlU3ViTm9kZXMuc3BsaWNlKGRyYWdOb2RlSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlfHxbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLnB1c2goZHJhZ05vZGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uuc3RvcERyYWcoe1xuICAgICAgICAgICAgICAgICAgICBub2RlOiBkcmFnTm9kZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EcmFnRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcHBhYmxlTm9kZXMgJiYgdGhpcy5hbGxvd0Ryb3AodGhpcy5kcmFnTm9kZSwgbnVsbCwgdGhpcy5kcmFnTm9kZVNjb3BlKSkge1xuICAgICAgICAgICAgdGhpcy5kcmFnSG92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcHBhYmxlTm9kZXMpIHtcbiAgICAgICAgICAgIGxldCByZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmIChldmVudC54ID4gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCB8fCBldmVudC54IDwgcmVjdC5sZWZ0IHx8IGV2ZW50LnkgPiByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IHx8IGV2ZW50LnkgPCByZWN0LnRvcCkge1xuICAgICAgICAgICAgICAgdGhpcy5kcmFnSG92ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsbG93RHJvcChkcmFnTm9kZTogVHJlZU5vZGUsIGRyb3BOb2RlOiBUcmVlTm9kZSwgZHJhZ05vZGVTY29wZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghZHJhZ05vZGUpIHtcbiAgICAgICAgICAgIC8vcHJldmVudCByYW5kb20gaHRtbCBlbGVtZW50cyB0byBiZSBkcmFnZ2VkXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1ZhbGlkRHJhZ1Njb3BlKGRyYWdOb2RlU2NvcGUpKSB7XG4gICAgICAgICAgICBsZXQgYWxsb3c6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGRyb3BOb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRyYWdOb2RlID09PSBkcm9wTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBhbGxvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IGRyb3BOb2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgPT09IGRyYWdOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhbGxvdztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVmFsaWREcmFnU2NvcGUoZHJhZ1Njb3BlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGRyb3BTY29wZSA9IHRoaXMuZHJvcHBhYmxlU2NvcGU7XG5cbiAgICAgICAgaWYgKGRyb3BTY29wZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkcm9wU2NvcGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkcmFnU2NvcGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHJvcFNjb3BlID09PSBkcmFnU2NvcGU7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZHJhZ1Njb3BlIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPEFycmF5PGFueT4+ZHJhZ1Njb3BlKS5pbmRleE9mKGRyb3BTY29wZSkgIT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkcm9wU2NvcGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHJhZ1Njb3BlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxBcnJheTxhbnk+PmRyb3BTY29wZSkuaW5kZXhPZihkcmFnU2NvcGUpICE9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkcmFnU2NvcGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHMgb2YgZHJvcFNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGRzIG9mIGRyYWdTY29wZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzID09PSBkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9maWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IGZpbHRlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoZmlsdGVyVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTm9kZXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZE5vZGVzID0gW107XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hGaWVsZHM6IHN0cmluZ1tdID0gdGhpcy5maWx0ZXJCeS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyVGV4dCA9IE9iamVjdFV0aWxzLnJlbW92ZUFjY2VudHMoZmlsdGVyVmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuZmlsdGVyTG9jYWxlKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU3RyaWN0TW9kZSA9IHRoaXMuZmlsdGVyTW9kZSA9PT0gJ3N0cmljdCc7XG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBjb3B5Tm9kZSA9IHsuLi5ub2RlfTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zV2l0aG91dE5vZGUgPSB7c2VhcmNoRmllbGRzLCBmaWx0ZXJUZXh0LCBpc1N0cmljdE1vZGV9O1xuICAgICAgICAgICAgICAgIGlmICgoaXNTdHJpY3RNb2RlICYmICh0aGlzLmZpbmRGaWx0ZXJlZE5vZGVzKGNvcHlOb2RlLCBwYXJhbXNXaXRob3V0Tm9kZSkgfHwgdGhpcy5pc0ZpbHRlck1hdGNoZWQoY29weU5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICghaXNTdHJpY3RNb2RlICYmICh0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Tm9kZSwgcGFyYW1zV2l0aG91dE5vZGUpIHx8IHRoaXMuZmluZEZpbHRlcmVkTm9kZXMoY29weU5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWROb2Rlcy5wdXNoKGNvcHlOb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVNlcmlhbGl6ZWRWYWx1ZSgpO1xuICAgICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoe1xuICAgICAgICAgICAgZmlsdGVyOiBmaWx0ZXJWYWx1ZSxcbiAgICAgICAgICAgIGZpbHRlcmVkVmFsdWU6IHRoaXMuZmlsdGVyZWROb2Rlc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kRmlsdGVyZWROb2Rlcyhub2RlLCBwYXJhbXNXaXRob3V0Tm9kZSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbGV0IG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSBbLi4ubm9kZS5jaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkTm9kZSBvZiBjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3B5Q2hpbGROb2RlID0gey4uLmNoaWxkTm9kZX07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Q2hpbGROb2RlLCBwYXJhbXNXaXRob3V0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKGNvcHlDaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNGaWx0ZXJNYXRjaGVkKG5vZGUsIHtzZWFyY2hGaWVsZHMsIGZpbHRlclRleHQsIGlzU3RyaWN0TW9kZX0pIHtcbiAgICAgICAgbGV0IG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCBmaWVsZCBvZiBzZWFyY2hGaWVsZHMpIHtcbiAgICAgICAgICAgIGxldCBmaWVsZFZhbHVlID0gT2JqZWN0VXRpbHMucmVtb3ZlQWNjZW50cyhTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShub2RlLCBmaWVsZCkpKS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSk7XG4gICAgICAgICAgICBpZiAoZmllbGRWYWx1ZS5pbmRleE9mKGZpbHRlclRleHQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWF0Y2hlZCB8fCAoaXNTdHJpY3RNb2RlICYmICF0aGlzLmlzTm9kZUxlYWYobm9kZSkpKSB7XG4gICAgICAgICAgICBtYXRjaGVkID0gdGhpcy5maW5kRmlsdGVyZWROb2Rlcyhub2RlLCB7c2VhcmNoRmllbGRzLCBmaWx0ZXJUZXh0LCBpc1N0cmljdE1vZGV9KSB8fCBtYXRjaGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgfVxuXG4gICAgZ2V0QmxvY2thYmxlRWxlbWVudCgpOiBIVE1MRWxlbWVudMKge1xuICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ1N0YXJ0U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ1N0b3BTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0b3BTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxTY3JvbGxpbmdNb2R1bGUsUmlwcGxlTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbVHJlZSxTaGFyZWRNb2R1bGUsU2Nyb2xsaW5nTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtUcmVlLFVJVHJlZU5vZGVdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUgeyB9XG4iXX0=