import { NgModule, Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/router';

function PanelMenuSub_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 4);
} }
const _c0 = function (a0, a1) { return { "pi-angle-right": a0, "pi-angle-down": a1 }; };
function PanelMenuSub_ng_template_1_li_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !child_r1.expanded, child_r1.expanded));
} }
function PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c1 = function (a0) { return { "p-disabled": a0 }; };
function PanelMenuSub_ng_template_1_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9);
    ɵngcc0.ɵɵlistener("click", function PanelMenuSub_ng_template_1_li_1_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_span_1_Template, 1, 4, "span", 10);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = ɵngcc0.ɵɵreference(5);
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c1, child_r1.disabled));
    ɵngcc0.ɵɵattribute("href", child_r1.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", !ctx_r4.item.expanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("target", child_r1.target)("title", child_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r10);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !child_r1.expanded, child_r1.expanded));
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c2 = function () { return { exact: false }; };
function PanelMenuSub_ng_template_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵlistener("click", function PanelMenuSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.handleClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_2_span_1_Template, 1, 4, "span", 10);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = ɵngcc0.ɵɵreference(5);
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(20, _c2))("ngClass", ɵngcc0.ɵɵpureFunction1(21, _c1, child_r1.disabled))("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵngcc0.ɵɵattribute("tabindex", !ctx_r5.item.expanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("target", child_r1.target)("title", child_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r23);
} }
function PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-panelMenuSub", 20);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("item", child_r1)("expanded", child_r1.expanded)("transitionOptions", ctx_r6.transitionOptions);
} }
function PanelMenuSub_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 5);
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_Template, 6, 13, "a", 6);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_Template, 6, 23, "a", 7);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template, 1, 3, "p-panelMenuSub", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassProp("p-hidden", child_r1.visible === false);
    ɵngcc0.ɵɵproperty("ngClass", child_r1.styleClass)("ngStyle", child_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function PanelMenuSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PanelMenuSub_ng_template_1_li_0_Template, 1, 0, "li", 2);
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_Template, 4, 7, "li", 3);
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r1.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.separator);
} }
const _c3 = function (a1) { return { "p-submenu-list": true, "p-panelmenu-root-submenu": a1 }; };
const _c4 = function (a0) { return { transitionParams: a0, height: "*" }; };
const _c5 = function (a1) { return { value: "visible", params: a1 }; };
const _c6 = function (a0) { return { transitionParams: a0, height: "0" }; };
const _c7 = function (a1) { return { value: "hidden", params: a1 }; };
const _c8 = function (a0, a1) { return { "pi-chevron-right": a0, "pi-chevron-down": a1 }; };
function PanelMenu_ng_container_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !item_r1.expanded, item_r1.expanded));
} }
function PanelMenu_ng_container_1_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.icon);
} }
function PanelMenu_ng_container_1_a_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.label);
} }
function PanelMenu_ng_container_1_a_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function PanelMenu_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PanelMenu_ng_container_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const item_r1 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, item_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_a_3_span_1_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(2, PanelMenu_ng_container_1_a_3_span_2_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_3_span_3_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_3_ng_template_4_Template, 1, 1, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = ɵngcc0.ɵɵreference(5);
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵattribute("href", item_r1.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", item_r1.disabled ? null : "0")("id", item_r1.id)("target", item_r1.target)("title", item_r1.title)("aria-expanded", item_r1.expanded)("id", item_r1.id + "_header")("aria-controls", item_r1.id + "_content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r10);
} }
function PanelMenu_ng_container_1_a_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !item_r1.expanded, item_r1.expanded));
} }
function PanelMenu_ng_container_1_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.icon);
} }
function PanelMenu_ng_container_1_a_4_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.label);
} }
function PanelMenu_ng_container_1_a_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function PanelMenu_ng_container_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 16);
    ɵngcc0.ɵɵlistener("click", function PanelMenu_ng_container_1_a_4_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const item_r1 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.handleClick($event, item_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_a_4_span_1_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(2, PanelMenu_ng_container_1_a_4_span_2_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_4_span_3_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_4_ng_template_4_Template, 1, 1, "ng-template", null, 17, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = ɵngcc0.ɵɵreference(5);
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", item_r1.routerLink)("queryParams", item_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(18, _c2))("fragment", item_r1.fragment)("queryParamsHandling", item_r1.queryParamsHandling)("preserveFragment", item_r1.preserveFragment)("skipLocationChange", item_r1.skipLocationChange)("replaceUrl", item_r1.replaceUrl)("state", item_r1.state);
    ɵngcc0.ɵɵattribute("target", item_r1.target)("title", item_r1.title)("id", item_r1.id)("tabindex", item_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r23);
} }
function PanelMenu_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵlistener("@rootItem.done", function PanelMenu_ng_container_1_div_5_Template_div_animation_rootItem_done_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.onToggleDone(); });
    ɵngcc0.ɵɵelementStart(1, "div", 19);
    ɵngcc0.ɵɵelement(2, "p-panelMenuSub", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@rootItem", item_r1.expanded ? ɵngcc0.ɵɵpureFunction1(9, _c5, ɵngcc0.ɵɵpureFunction1(7, _c4, ctx_r6.animating ? ctx_r6.transitionOptions : "0ms")) : ɵngcc0.ɵɵpureFunction1(13, _c7, ɵngcc0.ɵɵpureFunction1(11, _c6, ctx_r6.transitionOptions)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("id", item_r1.id + "_content")("aria-labelledby", item_r1.id + "_header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", item_r1)("expanded", true)("transitionOptions", ctx_r6.transitionOptions)("root", true);
} }
const _c9 = function (a0) { return { "p-hidden": a0 }; };
const _c10 = function (a1, a2) { return { "p-component p-panelmenu-header": true, "p-highlight": a1, "p-disabled": a2 }; };
function PanelMenu_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_3_Template, 6, 12, "a", 4);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_4_Template, 6, 19, "a", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, PanelMenu_ng_container_1_div_5_Template, 3, 15, "div", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c9, item_r1.visible === false));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(item_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(10, _c10, item_r1.expanded, item_r1.disabled))("ngStyle", item_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
} }
export class BasePanelMenuItem {
    constructor(ref) {
        this.ref = ref;
    }
    handleClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        item.expanded = !item.expanded;
        this.ref.detectChanges();
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    }
}
export class PanelMenuSub extends BasePanelMenuItem {
    constructor(ref) {
        super(ref);
    }
}
PanelMenuSub.ɵfac = function PanelMenuSub_Factory(t) { return new (t || PanelMenuSub)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PanelMenuSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PanelMenuSub, selectors: [["p-panelMenuSub"]], inputs: { item: "item", expanded: "expanded", transitionOptions: "transitionOptions", root: "root" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 13, consts: [["role", "tree", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 4, "ngIf"], ["class", "p-menuitem", 3, "ngClass", "p-hidden", "ngStyle", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator"], [1, "p-menuitem", 3, "ngClass", "ngStyle"], ["class", "p-menuitem-link", "role", "treeitem", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-menuitem-link", "role", "treeitem", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "item", "expanded", "transitionOptions", 4, "ngIf"], ["role", "treeitem", 1, "p-menuitem-link", 3, "ngClass", "click"], ["class", "p-panelmenu-icon pi pi-fw", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-panelmenu-icon", "pi", "pi-fw", 3, "ngClass"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], ["role", "treeitem", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "item", "expanded", "transitionOptions"]], template: function PanelMenuSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_Template, 2, 2, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c3, ctx.root))("@submenu", ctx.expanded ? ɵngcc0.ɵɵpureFunction1(7, _c5, ɵngcc0.ɵɵpureFunction1(5, _c4, ctx.transitionOptions)) : ɵngcc0.ɵɵpureFunction1(11, _c7, ɵngcc0.ɵɵpureFunction1(9, _c6, ctx.transitionOptions)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive, PanelMenuSub], encapsulation: 2, data: { animation: [
            trigger('submenu', [
                state('hidden', style({
                    height: '0',
                    overflow: 'hidden'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                transition('void => *', animate(0))
            ])
        ] } });
PanelMenuSub.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PanelMenuSub.propDecorators = {
    item: [{ type: Input }],
    expanded: [{ type: Input }],
    transitionOptions: [{ type: Input }],
    root: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenuSub, [{
        type: Component,
        args: [{
                selector: 'p-panelMenuSub',
                template: `
        <ul [ngClass]="{'p-submenu-list': true, 'p-panelmenu-root-submenu': root}" [@submenu]="expanded ? {value: 'visible', params: {transitionParams: transitionOptions, height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}" role="tree">
            <ng-template ngFor let-child [ngForOf]="item.items">
                <li *ngIf="child.separator" class="p-menu-separator" role="separator">
                <li *ngIf="!child.separator" class="p-menuitem" [ngClass]="child.styleClass" [class.p-hidden]="child.visible === false" [ngStyle]="child.style">
                    <a *ngIf="!child.routerLink" [attr.href]="child.url" class="p-menuitem-link" [attr.tabindex]="!item.expanded ? null : child.disabled ? null : '0'" [attr.id]="child.id"
                        [ngClass]="{'p-disabled':child.disabled}" role="treeitem" [attr.aria-expanded]="child.expanded"
                        (click)="handleClick($event,child)" [attr.target]="child.target" [attr.title]="child.title">
                        <span class="p-panelmenu-icon pi pi-fw" [ngClass]="{'pi-angle-right':!child.expanded,'pi-angle-down':child.expanded}" *ngIf="child.items"></span>
                        <span class="p-menuitem-icon" [ngClass]="child.icon" *ngIf="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlLabel">{{child.label}}</span>
                        <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [queryParams]="child.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}" class="p-menuitem-link" 
                        [ngClass]="{'p-disabled':child.disabled}" [attr.tabindex]="!item.expanded ? null : child.disabled ? null : '0'" [attr.id]="child.id" role="treeitem" [attr.aria-expanded]="child.expanded"
                        (click)="handleClick($event,child)" [attr.target]="child.target" [attr.title]="child.title"
                        [fragment]="child.fragment" [queryParamsHandling]="child.queryParamsHandling" [preserveFragment]="child.preserveFragment" [skipLocationChange]="child.skipLocationChange" [replaceUrl]="child.replaceUrl" [state]="child.state">
                        <span class="p-panelmenu-icon pi pi-fw" [ngClass]="{'pi-angle-right':!child.expanded,'pi-angle-down':child.expanded}" *ngIf="child.items"></span>
                        <span class="p-menuitem-icon" [ngClass]="child.icon" *ngIf="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{child.label}}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                    </a>
                    <p-panelMenuSub [item]="child" [expanded]="child.expanded" [transitionOptions]="transitionOptions" *ngIf="child.items"></p-panelMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
                animations: [
                    trigger('submenu', [
                        state('hidden', style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                        transition('void => *', animate(0))
                    ])
                ],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { item: [{
            type: Input
        }], expanded: [{
            type: Input
        }], transitionOptions: [{
            type: Input
        }], root: [{
            type: Input
        }] }); })();
export class PanelMenu extends BasePanelMenuItem {
    constructor(ref) {
        super(ref);
        this.multiple = true;
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    }
    collapseAll() {
        for (let item of this.model) {
            if (item.expanded) {
                item.expanded = false;
            }
        }
    }
    handleClick(event, item) {
        if (!this.multiple) {
            for (let modelItem of this.model) {
                if (item !== modelItem && modelItem.expanded) {
                    modelItem.expanded = false;
                }
            }
        }
        this.animating = true;
        super.handleClick(event, item);
    }
    onToggleDone() {
        this.animating = false;
    }
}
PanelMenu.ɵfac = function PanelMenu_Factory(t) { return new (t || PanelMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PanelMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PanelMenu, selectors: [["p-panelMenu"]], inputs: { multiple: "multiple", transitionOptions: "transitionOptions", model: "model", style: "style", styleClass: "styleClass" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[3, "ngStyle", "ngClass"], [4, "ngFor", "ngForOf"], [1, "p-panelmenu-panel", 3, "ngClass"], [3, "ngClass", "ngStyle"], ["class", "p-panelmenu-header-link", 3, "click", 4, "ngIf"], ["class", "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["class", "p-toggleable-content", 4, "ngIf"], [1, "p-panelmenu-header-link", 3, "click"], ["class", "p-panelmenu-icon pi", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-panelmenu-icon", "pi", 3, "ngClass"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [1, "p-toggleable-content"], ["role", "region", 1, "p-panelmenu-content"], [3, "item", "expanded", "transitionOptions", "root"]], template: function PanelMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_Template, 6, 13, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive, PanelMenuSub], styles: [".p-panelmenu .p-panelmenu-header-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;user-select:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{list-style:none;margin:0;padding:0}.p-panelmenu .p-menuitem-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;text-decoration:none;user-select:none}.p-panelmenu .p-menuitem-text{line-height:1}"], encapsulation: 2, data: { animation: [
            trigger('rootItem', [
                state('hidden', style({
                    height: '0',
                    overflow: 'hidden'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                transition('void => *', animate(0))
            ])
        ] }, changeDetection: 0 });
PanelMenu.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PanelMenu.propDecorators = {
    model: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    multiple: [{ type: Input }],
    transitionOptions: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenu, [{
        type: Component,
        args: [{
                selector: 'p-panelMenu',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-panelmenu p-component'">
            <ng-container *ngFor="let item of model;let f=first;let l=last;">
                <div class="p-panelmenu-panel" [ngClass]="{'p-hidden': item.visible === false}">
                    <div [ngClass]="{'p-component p-panelmenu-header':true, 'p-highlight':item.expanded,'p-disabled':item.disabled}" [class]="item.styleClass" [ngStyle]="item.style">
                        <a *ngIf="!item.routerLink" [attr.href]="item.url" (click)="handleClick($event,item)" [attr.tabindex]="item.disabled ? null : '0'" [attr.id]="item.id"
                           [attr.target]="item.target" [attr.title]="item.title" class="p-panelmenu-header-link" [attr.aria-expanded]="item.expanded" [attr.id]="item.id + '_header'" [attr.aria-controls]="item.id +'_content'">
                            <span *ngIf="item.items" class="p-panelmenu-icon pi" [ngClass]="{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}"></span>
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{item.label}}</span>
                            <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                        </a>
                        <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}"
                           (click)="handleClick($event,item)" [attr.target]="item.target" [attr.title]="item.title" class="p-panelmenu-header-link" [attr.id]="item.id" [attr.tabindex]="item.disabled ? null : '0'"
                           [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment" [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state">
                            <span *ngIf="item.items" class="p-panelmenu-icon pi" [ngClass]="{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}"></span>
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{item.label}}</span>
                            <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                        </a>
                    </div>
                    <div *ngIf="item.items" class="p-toggleable-content" [@rootItem]="item.expanded ? {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}"  (@rootItem.done)="onToggleDone()">
                        <div class="p-panelmenu-content" role="region" [attr.id]="item.id +'_content' " [attr.aria-labelledby]="item.id +'_header'">
                            <p-panelMenuSub [item]="item" [expanded]="true" [transitionOptions]="transitionOptions" [root]="true"></p-panelMenuSub>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
                animations: [
                    trigger('rootItem', [
                        state('hidden', style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                        transition('void => *', animate(0))
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-panelmenu .p-panelmenu-header-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;user-select:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{list-style:none;margin:0;padding:0}.p-panelmenu .p-menuitem-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;text-decoration:none;user-select:none}.p-panelmenu .p-menuitem-text{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { multiple: [{
            type: Input
        }], transitionOptions: [{
            type: Input
        }], model: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class PanelMenuModule {
}
PanelMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PanelMenuModule });
PanelMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PanelMenuModule_Factory(t) { return new (t || PanelMenuModule)(); }, imports: [[CommonModule, RouterModule], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PanelMenuModule, { declarations: function () { return [PanelMenu, PanelMenuSub]; }, imports: function () { return [CommonModule, RouterModule]; }, exports: function () { return [PanelMenu, RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule],
                exports: [PanelMenu, RouterModule],
                declarations: [PanelMenu, PanelMenuSub]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWxtZW51LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFuZWxtZW51L3BhbmVsbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLE1BQU0sT0FBTyxpQkFBaUI7QUFDOUIsSUFDSSxZQUFvQixHQUFzQjtBQUFJLFFBQTFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsSUFBRSxDQUFDO0FBQ2xELElBQ0ksV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJO0FBQzNCLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzNCLFlBQVksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25DLFlBQVksT0FBTztBQUNuQixTQUFT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QUFNLE9BQU8sZUFBZTtBQUFHOzJDQUw5QixRQUFRLFNBQUM7R0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLGtCQUNwQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUMsWUFBWSxDQUFDLGtCQUNqQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUMsWUFBWSxDQUFDLGNBQ3pDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LElucHV0LENoYW5nZURldGVjdG9yUmVmLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RyaWdnZXIsc3RhdGUsc3R5bGUsdHJhbnNpdGlvbixhbmltYXRlfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUGFuZWxNZW51SXRlbSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG4gICAgICAgIFxuICAgIGhhbmRsZUNsaWNrKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpdGVtLmV4cGFuZGVkID0gIWl0ZW0uZXhwYW5kZWQ7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghaXRlbS51cmwpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKGl0ZW0uY29tbWFuZCkge1xuICAgICAgICAgICAgaXRlbS5jb21tYW5kKHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXBhbmVsTWVudVN1YicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHVsIFtuZ0NsYXNzXT1cInsncC1zdWJtZW51LWxpc3QnOiB0cnVlLCAncC1wYW5lbG1lbnUtcm9vdC1zdWJtZW51Jzogcm9vdH1cIiBbQHN1Ym1lbnVdPVwiZXhwYW5kZWQgPyB7dmFsdWU6ICd2aXNpYmxlJywgcGFyYW1zOiB7dHJhbnNpdGlvblBhcmFtczogdHJhbnNpdGlvbk9wdGlvbnMsIGhlaWdodDogJyonfX0gOiB7dmFsdWU6ICdoaWRkZW4nLCBwYXJhbXM6IHt0cmFuc2l0aW9uUGFyYW1zOiB0cmFuc2l0aW9uT3B0aW9ucywgaGVpZ2h0OiAnMCd9fVwiIHJvbGU9XCJ0cmVlXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWNoaWxkIFtuZ0Zvck9mXT1cIml0ZW0uaXRlbXNcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJjaGlsZC5zZXBhcmF0b3JcIiBjbGFzcz1cInAtbWVudS1zZXBhcmF0b3JcIiByb2xlPVwic2VwYXJhdG9yXCI+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiIWNoaWxkLnNlcGFyYXRvclwiIGNsYXNzPVwicC1tZW51aXRlbVwiIFtuZ0NsYXNzXT1cImNoaWxkLnN0eWxlQ2xhc3NcIiBbY2xhc3MucC1oaWRkZW5dPVwiY2hpbGQudmlzaWJsZSA9PT0gZmFsc2VcIiBbbmdTdHlsZV09XCJjaGlsZC5zdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiFjaGlsZC5yb3V0ZXJMaW5rXCIgW2F0dHIuaHJlZl09XCJjaGlsZC51cmxcIiBjbGFzcz1cInAtbWVudWl0ZW0tbGlua1wiIFthdHRyLnRhYmluZGV4XT1cIiFpdGVtLmV4cGFuZGVkID8gbnVsbCA6IGNoaWxkLmRpc2FibGVkID8gbnVsbCA6ICcwJ1wiIFthdHRyLmlkXT1cImNoaWxkLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1kaXNhYmxlZCc6Y2hpbGQuZGlzYWJsZWR9XCIgcm9sZT1cInRyZWVpdGVtXCIgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJjaGlsZC5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50LGNoaWxkKVwiIFthdHRyLnRhcmdldF09XCJjaGlsZC50YXJnZXRcIiBbYXR0ci50aXRsZV09XCJjaGlsZC50aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBhbmVsbWVudS1pY29uIHBpIHBpLWZ3XCIgW25nQ2xhc3NdPVwieydwaS1hbmdsZS1yaWdodCc6IWNoaWxkLmV4cGFuZGVkLCdwaS1hbmdsZS1kb3duJzpjaGlsZC5leHBhbmRlZH1cIiAqbmdJZj1cImNoaWxkLml0ZW1zXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLWljb25cIiBbbmdDbGFzc109XCJjaGlsZC5pY29uXCIgKm5nSWY9XCJjaGlsZC5pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIiAqbmdJZj1cImNoaWxkLmVzY2FwZSAhPT0gZmFsc2U7IGVsc2UgaHRtbExhYmVsXCI+e3tjaGlsZC5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNodG1sTGFiZWw+PHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cImNoaWxkLmxhYmVsXCI+PC9zcGFuPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJjaGlsZC5yb3V0ZXJMaW5rXCIgW3JvdXRlckxpbmtdPVwiY2hpbGQucm91dGVyTGlua1wiIFtxdWVyeVBhcmFtc109XCJjaGlsZC5xdWVyeVBhcmFtc1wiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cIidwLW1lbnVpdGVtLWxpbmstYWN0aXZlJ1wiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJjaGlsZC5yb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc3x8e2V4YWN0OmZhbHNlfVwiIGNsYXNzPVwicC1tZW51aXRlbS1saW5rXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtZGlzYWJsZWQnOmNoaWxkLmRpc2FibGVkfVwiIFthdHRyLnRhYmluZGV4XT1cIiFpdGVtLmV4cGFuZGVkID8gbnVsbCA6IGNoaWxkLmRpc2FibGVkID8gbnVsbCA6ICcwJ1wiIFthdHRyLmlkXT1cImNoaWxkLmlkXCIgcm9sZT1cInRyZWVpdGVtXCIgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJjaGlsZC5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50LGNoaWxkKVwiIFthdHRyLnRhcmdldF09XCJjaGlsZC50YXJnZXRcIiBbYXR0ci50aXRsZV09XCJjaGlsZC50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZnJhZ21lbnRdPVwiY2hpbGQuZnJhZ21lbnRcIiBbcXVlcnlQYXJhbXNIYW5kbGluZ109XCJjaGlsZC5xdWVyeVBhcmFtc0hhbmRsaW5nXCIgW3ByZXNlcnZlRnJhZ21lbnRdPVwiY2hpbGQucHJlc2VydmVGcmFnbWVudFwiIFtza2lwTG9jYXRpb25DaGFuZ2VdPVwiY2hpbGQuc2tpcExvY2F0aW9uQ2hhbmdlXCIgW3JlcGxhY2VVcmxdPVwiY2hpbGQucmVwbGFjZVVybFwiIFtzdGF0ZV09XCJjaGlsZC5zdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBhbmVsbWVudS1pY29uIHBpIHBpLWZ3XCIgW25nQ2xhc3NdPVwieydwaS1hbmdsZS1yaWdodCc6IWNoaWxkLmV4cGFuZGVkLCdwaS1hbmdsZS1kb3duJzpjaGlsZC5leHBhbmRlZH1cIiAqbmdJZj1cImNoaWxkLml0ZW1zXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLWljb25cIiBbbmdDbGFzc109XCJjaGlsZC5pY29uXCIgKm5nSWY9XCJjaGlsZC5pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIiAqbmdJZj1cImNoaWxkLmVzY2FwZSAhPT0gZmFsc2U7IGVsc2UgaHRtbFJvdXRlTGFiZWxcIj57e2NoaWxkLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2h0bWxSb3V0ZUxhYmVsPjxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS10ZXh0XCIgW2lubmVySFRNTF09XCJjaGlsZC5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxwLXBhbmVsTWVudVN1YiBbaXRlbV09XCJjaGlsZFwiIFtleHBhbmRlZF09XCJjaGlsZC5leHBhbmRlZFwiIFt0cmFuc2l0aW9uT3B0aW9uc109XCJ0cmFuc2l0aW9uT3B0aW9uc1wiICpuZ0lmPVwiY2hpbGQuaXRlbXNcIj48L3AtcGFuZWxNZW51U3ViPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3VsPlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdzdWJtZW51JywgW1xuICAgICAgICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJyonXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlIDw9PiBoaWRkZW4nLCBbc3R5bGUoe292ZXJmbG93OiAnaGlkZGVuJ30pLCBhbmltYXRlKCd7e3RyYW5zaXRpb25QYXJhbXN9fScpXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBhbmltYXRlKDApKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbE1lbnVTdWIgZXh0ZW5kcyBCYXNlUGFuZWxNZW51SXRlbSB7XG4gICAgXG4gICAgQElucHV0KCkgaXRlbTogTWVudUl0ZW07XG4gICAgXG4gICAgQElucHV0KCkgZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uT3B0aW9uczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcm9vdDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVmKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1wYW5lbE1lbnUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtuZ0NsYXNzXT1cIidwLXBhbmVsbWVudSBwLWNvbXBvbmVudCdcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbW9kZWw7bGV0IGY9Zmlyc3Q7bGV0IGw9bGFzdDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1wYW5lbG1lbnUtcGFuZWxcIiBbbmdDbGFzc109XCJ7J3AtaGlkZGVuJzogaXRlbS52aXNpYmxlID09PSBmYWxzZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J3AtY29tcG9uZW50IHAtcGFuZWxtZW51LWhlYWRlcic6dHJ1ZSwgJ3AtaGlnaGxpZ2h0JzppdGVtLmV4cGFuZGVkLCdwLWRpc2FibGVkJzppdGVtLmRpc2FibGVkfVwiIFtjbGFzc109XCJpdGVtLnN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJpdGVtLnN0eWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiFpdGVtLnJvdXRlckxpbmtcIiBbYXR0ci5ocmVmXT1cIml0ZW0udXJsXCIgKGNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudCxpdGVtKVwiIFthdHRyLnRhYmluZGV4XT1cIml0ZW0uZGlzYWJsZWQgPyBudWxsIDogJzAnXCIgW2F0dHIuaWRdPVwiaXRlbS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci50YXJnZXRdPVwiaXRlbS50YXJnZXRcIiBbYXR0ci50aXRsZV09XCJpdGVtLnRpdGxlXCIgY2xhc3M9XCJwLXBhbmVsbWVudS1oZWFkZXItbGlua1wiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiaXRlbS5leHBhbmRlZFwiIFthdHRyLmlkXT1cIml0ZW0uaWQgKyAnX2hlYWRlcidcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cIml0ZW0uaWQgKydfY29udGVudCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIml0ZW0uaXRlbXNcIiBjbGFzcz1cInAtcGFuZWxtZW51LWljb24gcGlcIiBbbmdDbGFzc109XCJ7J3BpLWNoZXZyb24tcmlnaHQnOiFpdGVtLmV4cGFuZGVkLCdwaS1jaGV2cm9uLWRvd24nOml0ZW0uZXhwYW5kZWR9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS1pY29uXCIgW25nQ2xhc3NdPVwiaXRlbS5pY29uXCIgKm5nSWY9XCJpdGVtLmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIiAqbmdJZj1cIml0ZW0uZXNjYXBlICE9PSBmYWxzZTsgZWxzZSBodG1sTGFiZWxcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2h0bWxMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaXRlbS5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJpdGVtLnJvdXRlckxpbmtcIiBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIiBbcXVlcnlQYXJhbXNdPVwiaXRlbS5xdWVyeVBhcmFtc1wiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cIidwLW1lbnVpdGVtLWxpbmstYWN0aXZlJ1wiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJpdGVtLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zfHx7ZXhhY3Q6ZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQsaXRlbSlcIiBbYXR0ci50YXJnZXRdPVwiaXRlbS50YXJnZXRcIiBbYXR0ci50aXRsZV09XCJpdGVtLnRpdGxlXCIgY2xhc3M9XCJwLXBhbmVsbWVudS1oZWFkZXItbGlua1wiIFthdHRyLmlkXT1cIml0ZW0uaWRcIiBbYXR0ci50YWJpbmRleF09XCJpdGVtLmRpc2FibGVkID8gbnVsbCA6ICcwJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbZnJhZ21lbnRdPVwiaXRlbS5mcmFnbWVudFwiIFtxdWVyeVBhcmFtc0hhbmRsaW5nXT1cIml0ZW0ucXVlcnlQYXJhbXNIYW5kbGluZ1wiIFtwcmVzZXJ2ZUZyYWdtZW50XT1cIml0ZW0ucHJlc2VydmVGcmFnbWVudFwiIFtza2lwTG9jYXRpb25DaGFuZ2VdPVwiaXRlbS5za2lwTG9jYXRpb25DaGFuZ2VcIiBbcmVwbGFjZVVybF09XCJpdGVtLnJlcGxhY2VVcmxcIiBbc3RhdGVdPVwiaXRlbS5zdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5pdGVtc1wiIGNsYXNzPVwicC1wYW5lbG1lbnUtaWNvbiBwaVwiIFtuZ0NsYXNzXT1cInsncGktY2hldnJvbi1yaWdodCc6IWl0ZW0uZXhwYW5kZWQsJ3BpLWNoZXZyb24tZG93bic6aXRlbS5leHBhbmRlZH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLWljb25cIiBbbmdDbGFzc109XCJpdGVtLmljb25cIiAqbmdJZj1cIml0ZW0uaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiICpuZ0lmPVwiaXRlbS5lc2NhcGUgIT09IGZhbHNlOyBlbHNlIGh0bWxSb3V0ZUxhYmVsXCI+e3tpdGVtLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNodG1sUm91dGVMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaXRlbS5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uaXRlbXNcIiBjbGFzcz1cInAtdG9nZ2xlYWJsZS1jb250ZW50XCIgW0Byb290SXRlbV09XCJpdGVtLmV4cGFuZGVkID8ge3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3RyYW5zaXRpb25QYXJhbXM6IGFuaW1hdGluZyA/IHRyYW5zaXRpb25PcHRpb25zIDogJzBtcycsIGhlaWdodDogJyonfX0gOiB7dmFsdWU6ICdoaWRkZW4nLCBwYXJhbXM6IHt0cmFuc2l0aW9uUGFyYW1zOiB0cmFuc2l0aW9uT3B0aW9ucywgaGVpZ2h0OiAnMCd9fVwiICAoQHJvb3RJdGVtLmRvbmUpPVwib25Ub2dnbGVEb25lKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBhbmVsbWVudS1jb250ZW50XCIgcm9sZT1cInJlZ2lvblwiIFthdHRyLmlkXT1cIml0ZW0uaWQgKydfY29udGVudCcgXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIml0ZW0uaWQgKydfaGVhZGVyJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXBhbmVsTWVudVN1YiBbaXRlbV09XCJpdGVtXCIgW2V4cGFuZGVkXT1cInRydWVcIiBbdHJhbnNpdGlvbk9wdGlvbnNdPVwidHJhbnNpdGlvbk9wdGlvbnNcIiBbcm9vdF09XCJ0cnVlXCI+PC9wLXBhbmVsTWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcigncm9vdEl0ZW0nLCBbXG4gICAgICAgICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnKidcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPD0+IGhpZGRlbicsIFtzdHlsZSh7b3ZlcmZsb3c6ICdoaWRkZW4nfSksIGFuaW1hdGUoJ3t7dHJhbnNpdGlvblBhcmFtc319JyldKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIGFuaW1hdGUoMCkpXG4gICAgICAgIF0pXG4gICAgXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFuZWxtZW51LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsTWVudSBleHRlbmRzIEJhc2VQYW5lbE1lbnVJdGVtIHtcbiAgICBcbiAgICBASW5wdXQoKSBtb2RlbDogTWVudUl0ZW1bXTtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJzQwMG1zIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKSc7XG4gICAgXG4gICAgcHVibGljIGFuaW1hdGluZzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVmKTtcbiAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgY29sbGFwc2VBbGwoKSB7XG4gICAgXHRmb3IobGV0IGl0ZW0gb2YgdGhpcy5tb2RlbCkge1xuICAgIFx0XHRpZiAoaXRlbS5leHBhbmRlZCkge1xuICAgIFx0XHRcdGl0ZW0uZXhwYW5kZWQgPSBmYWxzZTtcbiAgICBcdFx0fVxuICAgIFx0fVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGV2ZW50LCBpdGVtKSB7XG4gICAgXHRpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGZvcihsZXQgbW9kZWxJdGVtIG9mIHRoaXMubW9kZWwpIHtcbiAgICAgICAgXHRcdGlmIChpdGVtICE9PSBtb2RlbEl0ZW0gJiYgbW9kZWxJdGVtLmV4cGFuZGVkKSB7XG4gICAgICAgIFx0XHRcdG1vZGVsSXRlbS5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH1cbiAgICBcdH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgc3VwZXIuaGFuZGxlQ2xpY2soZXZlbnQsIGl0ZW0pO1xuICAgIH1cbiAgICBcbiAgICBvblRvZ2dsZURvbmUoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxSb3V0ZXJNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtQYW5lbE1lbnUsUm91dGVyTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtQYW5lbE1lbnUsUGFuZWxNZW51U3ViXVxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbE1lbnVNb2R1bGUgeyB9XG4iXX0=