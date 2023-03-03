import { NgModule, Component, ElementRef, Input, Output, Renderer2, EventEmitter, forwardRef, ViewChild, ChangeDetectorRef, ContentChildren, ContentChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { ObjectUtils } from 'primeng/utils';
import { SharedModule, PrimeTemplate, Footer, Header } from 'primeng/api';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FilterUtils } from 'primeng/utils';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/tooltip';
import * as ɵngcc3 from 'primeng/ripple';
import * as ɵngcc4 from '@angular/cdk/scrolling';

function MultiSelectItem_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.option.label);
} }
function MultiSelectItem_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "height": a0 }; };
const _c1 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
const _c2 = function (a0) { return { "p-highlight": a0 }; };
const _c3 = function (a0) { return { "pi pi-check": a0 }; };
const _c4 = function (a0) { return { $implicit: a0 }; };
const _c5 = ["container"];
const _c6 = ["filterInput"];
const _c7 = ["in"];
function MultiSelect_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.valuesAsString || "empty");
} }
function MultiSelect_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MultiSelect_div_11_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c8 = function (a0, a1) { return { "p-highlight": a0, "p-focus": a1 }; };
function MultiSelect_div_11_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 26);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "input", 27);
    ɵngcc0.ɵɵlistener("focus", function MultiSelect_div_11_div_1_div_3_Template_input_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(3); return ctx_r14.onHeaderCheckboxFocus(); })("blur", function MultiSelect_div_11_div_1_div_3_Template_input_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r16 = ɵngcc0.ɵɵnextContext(3); return ctx_r16.onHeaderCheckboxBlur(); })("keydown.space", function MultiSelect_div_11_div_1_div_3_Template_input_keydown_space_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r17 = ɵngcc0.ɵɵnextContext(3); return ctx_r17.toggleAll($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 28);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_div_11_div_1_div_3_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r18 = ɵngcc0.ɵɵnextContext(3); return ctx_r18.toggleAll($event); });
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("checked", ctx_r12.isAllChecked());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c8, ctx_r12.isAllChecked(), ctx_r12.headerCheckboxFocus));
    ɵngcc0.ɵɵattribute("aria-checked", ctx_r12.isAllChecked());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c3, ctx_r12.isAllChecked()));
} }
function MultiSelect_div_11_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 30);
    ɵngcc0.ɵɵelementStart(1, "input", 31, 32);
    ɵngcc0.ɵɵlistener("input", function MultiSelect_div_11_div_1_div_4_Template_input_input_1_listener() { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(3); return ctx_r20.onFilter(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "span", 33);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r13.filterValue || "");
    ɵngcc0.ɵɵattribute("placeholder", ctx_r13.filterPlaceHolder)("aria-label", ctx_r13.ariaFilterLabel);
} }
function MultiSelect_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_div_1_ng_container_2_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵtemplate(3, MultiSelect_div_11_div_1_div_3_Template, 5, 9, "div", 22);
    ɵngcc0.ɵɵtemplate(4, MultiSelect_div_11_div_1_div_4_Template, 4, 3, "div", 23);
    ɵngcc0.ɵɵelementStart(5, "button", 24);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_div_11_div_1_Template_button_click_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(2); return ctx_r22.close($event); });
    ɵngcc0.ɵɵelement(6, "span", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.showToggleAll && !ctx_r5.selectionLimit);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.filter);
} }
function MultiSelect_div_11_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-multiSelectItem", 35);
    ɵngcc0.ɵɵlistener("onClick", function MultiSelect_div_11_ng_container_4_ng_template_1_Template_p_multiSelectItem_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r27 = ɵngcc0.ɵɵnextContext(3); return ctx_r27.onOptionClick($event); })("onKeydown", function MultiSelect_div_11_ng_container_4_ng_template_1_Template_p_multiSelectItem_onKeydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r29 = ɵngcc0.ɵɵnextContext(3); return ctx_r29.onOptionKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    const ctx_r24 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("option", option_r25)("selected", ctx_r24.isSelected(option_r25.value))("maxSelectionLimitReached", ctx_r24.maxSelectionLimitReached)("template", ctx_r24.itemTemplate);
} }
function MultiSelect_div_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", 34);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.visibleOptions);
} }
function MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "p-multiSelectItem", 40);
    ɵngcc0.ɵɵlistener("onClick", function MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); const ctx_r40 = ɵngcc0.ɵɵnextContext(4); return ctx_r40.onOptionClick($event); })("onKeydown", function MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onKeydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); const ctx_r42 = ɵngcc0.ɵɵnextContext(4); return ctx_r42.onOptionKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r33 = ctx.$implicit;
    const ctx_r32 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("option", option_r33)("selected", ctx_r32.isSelected(option_r33.value))("maxSelectionLimitReached", ctx_r32.maxSelectionLimitReached)("template", ctx_r32.itemTemplate)("itemSize", ctx_r32.itemSize);
} }
function MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 37, 38);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 5, "ng-container", 39);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r30.scrollHeight))("itemSize", ctx_r30.itemSize);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r30.visibleOptions);
} }
function MultiSelect_div_11_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 36);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.virtualScroll && ctx_r8.visibleOptions && ctx_r8.visibleOptions.length);
} }
function MultiSelect_div_11_li_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 41);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.emptyFilterMessage);
} }
function MultiSelect_div_11_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MultiSelect_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 42);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_div_8_ng_container_2_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.footerTemplate);
} }
const _c9 = function () { return ["p-multiselect-panel p-component"]; };
const _c10 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c11 = function (a1) { return { value: "visible", params: a1 }; };
function MultiSelect_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function MultiSelect_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r44 = ɵngcc0.ɵɵnextContext(); return ctx_r44.onOverlayAnimationStart($event); })("keydown", function MultiSelect_div_11_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r46 = ɵngcc0.ɵɵnextContext(); return ctx_r46.onKeydown($event); });
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_div_1_Template, 7, 3, "div", 13);
    ɵngcc0.ɵɵelementStart(2, "div", 14);
    ɵngcc0.ɵɵelementStart(3, "ul", 15);
    ɵngcc0.ɵɵtemplate(4, MultiSelect_div_11_ng_container_4_Template, 2, 1, "ng-container", 16);
    ɵngcc0.ɵɵtemplate(5, MultiSelect_div_11_ng_template_5_Template, 1, 1, "ng-template", null, 17, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(7, MultiSelect_div_11_li_7_Template, 2, 1, "li", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, MultiSelect_div_11_div_8_Template, 3, 1, "div", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = ɵngcc0.ɵɵreference(6);
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r4.panelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(12, _c9))("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(16, _c11, ɵngcc0.ɵɵpureFunction2(13, _c10, ctx_r4.showTransitionOptions, ctx_r4.hideTransitionOptions)))("ngStyle", ctx_r4.panelStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.showHeader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r4.virtualScroll ? "auto" : ctx_r4.scrollHeight || "auto");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.virtualScroll)("ngIfElse", _r7);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.filter && ctx_r4.visibleOptions && ctx_r4.visibleOptions.length === 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.footerFacet || ctx_r4.footerTemplate);
} }
const _c12 = [[["p-header"]], [["p-footer"]]];
const _c13 = function (a1, a2, a3) { return { "p-multiselect p-component": true, "p-multiselect-open": a1, "p-focus": a2, "p-disabled": a3 }; };
const _c14 = function (a0, a1) { return { "p-placeholder": a0, "p-multiselect-label-empty": a1 }; };
const _c15 = function () { return { "p-multiselect-trigger": true }; };
const _c16 = ["p-header", "p-footer"];
export const MULTISELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelect),
    multi: true
};
export class MultiSelectItem {
    constructor() {
        this.onClick = new EventEmitter();
        this.onKeydown = new EventEmitter();
    }
    onOptionClick(event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    }
    onOptionKeydown(event) {
        this.onKeydown.emit({
            originalEvent: event,
            option: this.option
        });
    }
}
MultiSelectItem.ɵfac = function MultiSelectItem_Factory(t) { return new (t || MultiSelectItem)(); };
MultiSelectItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultiSelectItem, selectors: [["p-multiSelectItem"]], inputs: { option: "option", selected: "selected", disabled: "disabled", itemSize: "itemSize", template: "template", maxSelectionLimitReached: "maxSelectionLimitReached" }, outputs: { onClick: "onClick", onKeydown: "onKeydown" }, decls: 6, vars: 20, consts: [[1, "p-multiselect-item", 3, "ngStyle", "ngClass", "click", "keydown"], [1, "p-checkbox", "p-component"], [1, "p-checkbox-box", 3, "ngClass"], [1, "p-checkbox-icon", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function MultiSelectItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "li", 0);
        ɵngcc0.ɵɵlistener("click", function MultiSelectItem_Template_li_click_0_listener($event) { return ctx.onOptionClick($event); })("keydown", function MultiSelectItem_Template_li_keydown_0_listener($event) { return ctx.onOptionKeydown($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, MultiSelectItem_span_4_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵtemplate(5, MultiSelectItem_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(9, _c0, ctx.itemSize + "px"))("ngClass", ɵngcc0.ɵɵpureFunction2(11, _c1, ctx.selected, ctx.option.disabled || ctx.maxSelectionLimitReached && !ctx.selected));
        ɵngcc0.ɵɵattribute("aria-label", ctx.option.label)("tabindex", ctx.option.disabled ? null : "0");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(14, _c2, ctx.selected));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(16, _c3, ctx.selected));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(18, _c4, ctx.option));
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
MultiSelectItem.propDecorators = {
    option: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    itemSize: [{ type: Input }],
    template: [{ type: Input }],
    maxSelectionLimitReached: [{ type: Input }],
    onClick: [{ type: Output }],
    onKeydown: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectItem, [{
        type: Component,
        args: [{
                selector: 'p-multiSelectItem',
                template: `
        <li class="p-multiselect-item" (click)="onOptionClick($event)" (keydown)="onOptionKeydown($event)" [attr.aria-label]="option.label"
            [attr.tabindex]="option.disabled ? null : '0'" [ngStyle]="{'height': itemSize + 'px'}"
            [ngClass]="{'p-highlight': selected, 'p-disabled': (option.disabled || (maxSelectionLimitReached && !selected))}">
            <div class="p-checkbox p-component">
                <div class="p-checkbox-box" [ngClass]="{'p-highlight': selected}">
                    <span class="p-checkbox-icon" [ngClass]="{'pi pi-check': selected}"></span>
                </div>
            </div>
            <span *ngIf="!template">{{option.label}}</span>
            <ng-container *ngTemplateOutlet="template; context: {$implicit: option}"></ng-container>
        </li>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { onClick: [{
            type: Output
        }], onKeydown: [{
            type: Output
        }], option: [{
            type: Input
        }], selected: [{
            type: Input
        }], disabled: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], template: [{
            type: Input
        }], maxSelectionLimitReached: [{
            type: Input
        }] }); })();
export class MultiSelect {
    constructor(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.scrollHeight = '200px';
        this.filter = true;
        this.displaySelectedLabel = true;
        this.maxSelectedLabels = 3;
        this.selectedItemsLabel = '{0} items selected';
        this.showToggleAll = true;
        this.emptyFilterMessage = 'No results found';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.showHeader = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.filterBy = 'label';
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.autofocusFilter = true;
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onPanelShow = new EventEmitter();
        this.onPanelHide = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.disabledSelectedOptions = [];
    }
    set defaultLabel(val) {
        this._defaultLabel = val;
        this.updateLabel();
    }
    get defaultLabel() {
        return this._defaultLabel;
    }
    set placeholder(val) {
        this._placeholder = val;
        this.updateLabel();
    }
    get placeholder() {
        return this._placeholder;
    }
    get options() {
        return this._options;
    }
    set options(val) {
        let opts = this.optionLabel ? ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
        this.visibleOptions = opts;
        this._options = opts;
        this.updateLabel();
        if (this.filterValue && this.filterValue.length) {
            this.activateFilter();
        }
    }
    ngOnInit() {
        this.updateLabel();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'selectedItems':
                    this.selectedItemsTemplate = item.template;
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
    ngAfterViewInit() {
        if (this.overlayVisible) {
            this.show();
        }
    }
    ngAfterViewChecked() {
        if (this.filtered) {
            this.alignOverlay();
            this.filtered = false;
        }
    }
    writeValue(value) {
        this.value = value;
        this.updateLabel();
        this.updateFilledState();
        this.setDisabledSelectedOptions();
        this.checkSelectionLimit();
        this.cd.markForCheck();
    }
    checkSelectionLimit() {
        if (this.selectionLimit && (this.value && this.value.length === this.selectionLimit)) {
            this.maxSelectionLimitReached = true;
        }
        else {
            this.maxSelectionLimitReached = false;
        }
    }
    updateFilledState() {
        this.filled = (this.value && this.value.length > 0);
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    onOptionClick(event) {
        let option = event.option;
        if (option.disabled) {
            return;
        }
        const optionValue = option.value;
        let selectionIndex = this.findSelectionIndex(optionValue);
        if (selectionIndex != -1) {
            this.value = this.value.filter((val, i) => i != selectionIndex);
            if (this.selectionLimit) {
                this.maxSelectionLimitReached = false;
            }
        }
        else {
            if (!this.selectionLimit || (!this.value || this.value.length < this.selectionLimit)) {
                this.value = [...this.value || [], optionValue];
            }
            this.checkSelectionLimit();
        }
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event.originalEvent, value: this.value, itemValue: optionValue });
        this.updateLabel();
        this.updateFilledState();
    }
    isSelected(value) {
        return this.findSelectionIndex(value) != -1;
    }
    findSelectionIndex(val) {
        let index = -1;
        if (this.value) {
            for (let i = 0; i < this.value.length; i++) {
                if (ObjectUtils.equals(this.value[i], val, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    toggleAll(event) {
        if (this.isAllChecked()) {
            if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                let value = [];
                value = [...this.disabledSelectedOptions];
                this.value = value;
            }
            else {
                this.value = [];
            }
        }
        else {
            let opts = this.getVisibleOptions();
            if (opts) {
                let value = [];
                if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                    value = [...this.disabledSelectedOptions];
                }
                for (let i = 0; i < opts.length; i++) {
                    let option = opts[i];
                    if (!option.disabled) {
                        value.push(opts[i].value);
                    }
                }
                this.value = value;
            }
        }
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event, value: this.value });
        this.updateFilledState();
        this.updateLabel();
    }
    isAllChecked() {
        if (this.filterValue && this.filterValue.trim().length) {
            return this.value && this.visibleOptions && this.visibleOptions.length && this.isAllVisibleOptionsChecked();
        }
        else {
            let optionCount = this.getEnabledOptionCount();
            let disabledSelectedOptionCount = this.disabledSelectedOptions.length;
            return this.value && this.options && (this.value.length > 0 && this.value.length == optionCount + disabledSelectedOptionCount);
        }
    }
    isAllVisibleOptionsChecked() {
        if (!this.visibleOptions || this.visibleOptions.length === 0) {
            return false;
        }
        else {
            for (let option of this.visibleOptions) {
                if (!this.isSelected(option.value)) {
                    return false;
                }
            }
            return true;
        }
    }
    getEnabledOptionCount() {
        if (this.options) {
            let count = 0;
            for (let opt of this.options) {
                if (!opt.disabled) {
                    count++;
                }
            }
            return count;
        }
        else {
            return 0;
        }
    }
    setDisabledSelectedOptions() {
        if (this.options) {
            this.disabledSelectedOptions = [];
            if (this.value) {
                for (let opt of this.options) {
                    if (opt.disabled && this.isSelected(opt.value)) {
                        this.disabledSelectedOptions.push(opt.value);
                    }
                }
            }
        }
    }
    show() {
        if (!this.overlayVisible) {
            this.overlayVisible = true;
        }
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.bindScrollListener();
                if (this.filterInputChild && this.filterInputChild.nativeElement) {
                    this.preventModelTouched = true;
                    if (this.autofocusFilter) {
                        this.filterInputChild.nativeElement.focus();
                    }
                }
                this.onPanelShow.emit();
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    }
    appendOverlay() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                DomHandler.appendChild(this.overlay, this.appendTo);
            if (!this.overlay.style.minWidth) {
                this.overlay.style.minWidth = DomHandler.getWidth(this.containerViewChild.nativeElement) + 'px';
            }
        }
    }
    restoreOverlayAppend() {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    }
    alignOverlay() {
        if (this.overlay) {
            if (this.appendTo)
                DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
            else
                DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
    }
    hide() {
        this.overlayVisible = false;
        this.unbindDocumentClickListener();
        if (this.resetFilterOnHide) {
            this.filterInputChild.nativeElement.value = '';
            this.onFilter();
        }
        this.onPanelHide.emit();
        this.cd.markForCheck();
    }
    close(event) {
        this.hide();
        event.preventDefault();
        event.stopPropagation();
    }
    onMouseclick(event, input) {
        if (this.disabled || this.readonly || event.target.isSameNode(this.accessibleViewChild.nativeElement)) {
            return;
        }
        this.onClick.emit(event);
        if (!this.isOverlayClick(event)) {
            if (this.overlayVisible) {
                this.hide();
            }
            else {
                input.focus();
                this.show();
            }
        }
    }
    isOverlayClick(event) {
        return (this.overlay && this.overlay.contains(event.target));
    }
    isOutsideClicked(event) {
        return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.isOverlayClick(event));
    }
    onInputFocus(event) {
        this.focus = true;
        this.onFocus.emit({ originalEvent: event });
    }
    onInputBlur(event) {
        this.focus = false;
        this.onBlur.emit({ originalEvent: event });
        if (!this.preventModelTouched) {
            this.onModelTouched();
        }
        this.preventModelTouched = false;
    }
    onOptionKeydown(event) {
        if (this.readonly) {
            return;
        }
        switch (event.originalEvent.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(event.originalEvent.target.parentElement);
                if (nextItem) {
                    nextItem.focus();
                }
                event.originalEvent.preventDefault();
                break;
            //up
            case 38:
                var prevItem = this.findPrevItem(event.originalEvent.target.parentElement);
                if (prevItem) {
                    prevItem.focus();
                }
                event.originalEvent.preventDefault();
                break;
            //enter
            case 13:
                this.onOptionClick(event);
                event.originalEvent.preventDefault();
                break;
        }
    }
    findNextItem(item) {
        let nextItem = item.nextElementSibling;
        if (nextItem)
            return DomHandler.hasClass(nextItem.children[0], 'p-disabled') || DomHandler.isHidden(nextItem.children[0]) ? this.findNextItem(nextItem) : nextItem.children[0];
        else
            return null;
    }
    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        if (prevItem)
            return DomHandler.hasClass(prevItem.children[0], 'p-disabled') || DomHandler.isHidden(prevItem.children[0]) ? this.findPrevItem(prevItem) : prevItem.children[0];
        else
            return null;
    }
    onKeydown(event) {
        switch (event.which) {
            //down
            case 40:
                if (!this.overlayVisible && event.altKey) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //space
            case 32:
                if (!this.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //escape
            case 27:
                this.hide();
                break;
        }
    }
    updateLabel() {
        if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
            let label = '';
            for (let i = 0; i < this.value.length; i++) {
                let itemLabel = this.findLabelByValue(this.value[i]);
                if (itemLabel) {
                    if (label.length > 0) {
                        label = label + ', ';
                    }
                    label = label + itemLabel;
                }
            }
            if (this.value.length <= this.maxSelectedLabels) {
                this.valuesAsString = label;
            }
            else {
                let pattern = /{(.*?)}/;
                if (pattern.test(this.selectedItemsLabel)) {
                    this.valuesAsString = this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0], this.value.length + '');
                }
                else {
                    this.valuesAsString = this.selectedItemsLabel;
                }
            }
        }
        else {
            this.valuesAsString = this.placeholder || this.defaultLabel;
        }
    }
    findLabelByValue(val) {
        let label = null;
        for (let i = 0; i < this.options.length; i++) {
            let option = this.options[i];
            if (val == null && option.value == null || ObjectUtils.equals(val, option.value, this.dataKey)) {
                label = option.label;
                break;
            }
        }
        return label;
    }
    onFilter() {
        let inputValue = this.filterInputChild.nativeElement.value;
        if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this.filterValue = null;
            this.visibleOptions = this.options;
            this.filtered = false;
        }
    }
    activateFilter() {
        if (this.options && this.options.length) {
            let searchFields = this.filterBy.split(',');
            this.visibleOptions = FilterUtils.filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
            this.filtered = true;
        }
    }
    getVisibleOptions() {
        return this.visibleOptions || this.options;
    }
    onHeaderCheckboxFocus() {
        this.headerCheckboxFocus = true;
    }
    onHeaderCheckboxBlur() {
        this.headerCheckboxFocus = false;
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
                if (this.isOutsideClicked(event)) {
                    this.hide();
                }
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    onWindowResize() {
        if (!DomHandler.isAndroid()) {
            this.hide();
        }
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, () => {
                if (this.overlayVisible) {
                    this.hide();
                }
            });
        }
        this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    onOverlayHide() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
        this.overlay = null;
        this.onModelTouched();
    }
    ngOnDestroy() {
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
    }
}
MultiSelect.ɵfac = function MultiSelect_Factory(t) { return new (t || MultiSelect)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MultiSelect.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultiSelect, selectors: [["p-multiSelect"]], contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function MultiSelect_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
        ɵngcc0.ɵɵviewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.filterInputChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.accessibleViewChild = _t.first);
    } }, hostVars: 4, hostBindings: function MultiSelect_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus);
    } }, inputs: { scrollHeight: "scrollHeight", filter: "filter", displaySelectedLabel: "displaySelectedLabel", maxSelectedLabels: "maxSelectedLabels", selectedItemsLabel: "selectedItemsLabel", showToggleAll: "showToggleAll", emptyFilterMessage: "emptyFilterMessage", resetFilterOnHide: "resetFilterOnHide", dropdownIcon: "dropdownIcon", showHeader: "showHeader", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", filterBy: "filterBy", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", filterMatchMode: "filterMatchMode", tooltip: "tooltip", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", autofocusFilter: "autofocusFilter", defaultLabel: "defaultLabel", placeholder: "placeholder", options: "options", disabled: "disabled", overlayVisible: "overlayVisible", style: "style", styleClass: "styleClass", panelStyle: "panelStyle", panelStyleClass: "panelStyleClass", inputId: "inputId", readonly: "readonly", filterPlaceHolder: "filterPlaceHolder", filterLocale: "filterLocale", tabindex: "tabindex", appendTo: "appendTo", dataKey: "dataKey", name: "name", ariaLabelledBy: "ariaLabelledBy", selectionLimit: "selectionLimit", optionLabel: "optionLabel", virtualScroll: "virtualScroll", itemSize: "itemSize", ariaFilterLabel: "ariaFilterLabel", tooltipStyleClass: "tooltipStyleClass" }, outputs: { onChange: "onChange", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onPanelShow: "onPanelShow", onPanelHide: "onPanelHide" }, features: [ɵngcc0.ɵɵProvidersFeature([MULTISELECT_VALUE_ACCESSOR])], ngContentSelectors: _c16, decls: 12, vars: 31, consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "readonly", "aria-haspopup", "listbox", "role", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [1, "p-multiselect-label-container", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [1, "p-multiselect-label", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "p-multiselect-trigger-icon", 3, "ngClass"], [3, "ngClass", "ngStyle", "class", "keydown", 4, "ngIf"], [3, "ngClass", "ngStyle", "keydown"], ["class", "p-multiselect-header", 4, "ngIf"], [1, "p-multiselect-items-wrapper"], ["role", "listbox", "aria-multiselectable", "true", 1, "p-multiselect-items", "p-component"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], ["class", "p-multiselect-empty-message", 4, "ngIf"], ["class", "p-multiselect-footer", 4, "ngIf"], [1, "p-multiselect-header"], [4, "ngTemplateOutlet"], ["class", "p-checkbox p-component", 4, "ngIf"], ["class", "p-multiselect-filter-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-multiselect-close", "p-link", 3, "click"], [1, "p-multiselect-close-icon", "pi", "pi-times"], [1, "p-checkbox", "p-component"], ["type", "checkbox", "readonly", "readonly", 3, "checked", "focus", "blur", "keydown.space"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], [1, "p-multiselect-filter-container"], ["type", "text", "role", "textbox", 1, "p-multiselect-filter", "p-inputtext", "p-component", 3, "value", "input"], ["filterInput", ""], [1, "p-multiselect-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [3, "option", "selected", "maxSelectionLimitReached", "template", "onClick", "onKeydown"], [3, "ngStyle", "itemSize", 4, "ngIf"], [3, "ngStyle", "itemSize"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [3, "option", "selected", "maxSelectionLimitReached", "template", "itemSize", "onClick", "onKeydown"], [1, "p-multiselect-empty-message"], [1, "p-multiselect-footer"]], template: function MultiSelect_Template(rf, ctx) { if (rf & 1) {
        const _r47 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵprojectionDef(_c12);
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function MultiSelect_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r47); const _r1 = ɵngcc0.ɵɵreference(4); return ctx.onMouseclick($event, _r1); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("focus", function MultiSelect_Template_input_focus_3_listener($event) { return ctx.onInputFocus($event); })("blur", function MultiSelect_Template_input_blur_3_listener($event) { return ctx.onInputBlur($event); })("keydown", function MultiSelect_Template_input_keydown_3_listener($event) { return ctx.onKeydown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵtemplate(7, MultiSelect_ng_container_7_Template, 2, 1, "ng-container", 7);
        ɵngcc0.ɵɵtemplate(8, MultiSelect_ng_container_8_Template, 1, 0, "ng-container", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelement(10, "span", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, MultiSelect_div_11_Template, 9, 18, "div", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(21, _c13, ctx.overlayVisible, ctx.focus, ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(25, _c14, ctx.valuesAsString === (ctx.defaultLabel || ctx.placeholder), (ctx.valuesAsString == null || ctx.valuesAsString.length === 0) && (ctx.placeholder == null || ctx.placeholder.length === 0)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.selectedItemsTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.selectedItemsTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(28, _c4, ctx.value));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(30, _c15));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dropdownIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.Tooltip, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc3.Ripple, ɵngcc1.NgForOf, MultiSelectItem, ɵngcc4.CdkVirtualScrollViewport, ɵngcc4.CdkFixedSizeVirtualScroll, ɵngcc4.CdkVirtualForOf], styles: [".p-multiselect{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;user-select:none}.p-multiselect-trigger{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;flex-shrink:0;justify-content:center}.p-multiselect-label-container{-ms-flex:1 1 auto;cursor:pointer;flex:1 1 auto;overflow:hidden}.p-multiselect-label{cursor:pointer;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect .p-multiselect-panel{min-width:100%}.p-multiselect-panel{position:absolute}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{list-style-type:none;margin:0;padding:0}.p-multiselect-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-multiselect-header,.p-multiselect-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-multiselect-header{-ms-flex-pack:justify;justify-content:space-between}.p-multiselect-filter-container{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}.p-multiselect-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-multiselect,.p-multiselect-close{display:-ms-flexbox;display:flex}"], encapsulation: 2, data: { animation: [
            trigger('overlayAnimation', [
                transition(':enter', [
                    style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animate('{{showTransitionParams}}')
                ]),
                transition(':leave', [
                    animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
MultiSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
MultiSelect.propDecorators = {
    scrollHeight: [{ type: Input }],
    defaultLabel: [{ type: Input }],
    placeholder: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    panelStyle: [{ type: Input }],
    panelStyleClass: [{ type: Input }],
    inputId: [{ type: Input }],
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    filter: [{ type: Input }],
    filterPlaceHolder: [{ type: Input }],
    filterLocale: [{ type: Input }],
    overlayVisible: [{ type: Input }],
    tabindex: [{ type: Input }],
    appendTo: [{ type: Input }],
    dataKey: [{ type: Input }],
    name: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    displaySelectedLabel: [{ type: Input }],
    maxSelectedLabels: [{ type: Input }],
    selectionLimit: [{ type: Input }],
    selectedItemsLabel: [{ type: Input }],
    showToggleAll: [{ type: Input }],
    emptyFilterMessage: [{ type: Input }],
    resetFilterOnHide: [{ type: Input }],
    dropdownIcon: [{ type: Input }],
    optionLabel: [{ type: Input }],
    showHeader: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    filterBy: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    itemSize: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    ariaFilterLabel: [{ type: Input }],
    filterMatchMode: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    tooltipPositionStyle: [{ type: Input }],
    tooltipStyleClass: [{ type: Input }],
    autofocusFilter: [{ type: Input }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    filterInputChild: [{ type: ViewChild, args: ['filterInput',] }],
    accessibleViewChild: [{ type: ViewChild, args: ['in',] }],
    footerFacet: [{ type: ContentChild, args: [Footer,] }],
    headerFacet: [{ type: ContentChild, args: [Header,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    onChange: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onClick: [{ type: Output }],
    onPanelShow: [{ type: Output }],
    onPanelHide: [{ type: Output }],
    options: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelect, [{
        type: Component,
        args: [{
                selector: 'p-multiSelect',
                template: `
        <div #container [ngClass]="{'p-multiselect p-component':true,'p-multiselect-open':overlayVisible,'p-focus':focus,'p-disabled': disabled}" [ngStyle]="style" [class]="styleClass"
            (click)="onMouseclick($event,in)">
            <div class="p-hidden-accessible">
                <input #in type="text" readonly="readonly" [attr.id]="inputId" [attr.name]="name" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)"
                       [disabled]="disabled" [attr.tabindex]="tabindex" (keydown)="onKeydown($event)" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible"
                       [attr.aria-labelledby]="ariaLabelledBy" role="listbox">
            </div>
            <div class="p-multiselect-label-container" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <div class="p-multiselect-label" [ngClass]="{'p-placeholder': valuesAsString === (defaultLabel || placeholder), 'p-multiselect-label-empty': ((valuesAsString == null || valuesAsString.length === 0) && (placeholder == null || placeholder.length === 0))}">
                    <ng-container *ngIf="!selectedItemsTemplate">{{valuesAsString || 'empty'}}</ng-container>
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: {$implicit: value}"></ng-container>
                </div>
            </div>
            <div [ngClass]="{'p-multiselect-trigger':true}">
                <span class="p-multiselect-trigger-icon" [ngClass]="dropdownIcon"></span>
            </div>
            <div *ngIf="overlayVisible" [ngClass]="['p-multiselect-panel p-component']" [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                [ngStyle]="panelStyle" [class]="panelStyleClass" (keydown)="onKeydown($event)">
                <div class="p-multiselect-header" *ngIf="showHeader">
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <div class="p-checkbox p-component" *ngIf="showToggleAll && !selectionLimit">
                        <div class="p-hidden-accessible">
                            <input type="checkbox" readonly="readonly" [checked]="isAllChecked()" (focus)="onHeaderCheckboxFocus()" (blur)="onHeaderCheckboxBlur()" (keydown.space)="toggleAll($event)">
                        </div>
                        <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="isAllChecked()" [ngClass]="{'p-highlight':isAllChecked(), 'p-focus': headerCheckboxFocus}" (click)="toggleAll($event)">
                            <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':isAllChecked()}"></span>
                        </div>
                    </div>
                    <div class="p-multiselect-filter-container" *ngIf="filter">
                        <input #filterInput type="text" role="textbox" [value]="filterValue||''" (input)="onFilter()" class="p-multiselect-filter p-inputtext p-component" [attr.placeholder]="filterPlaceHolder" [attr.aria-label]="ariaFilterLabel">
                        <span class="p-multiselect-filter-icon pi pi-search"></span>
                    </div>
                    <button class="p-multiselect-close p-link" type="button" (click)="close($event)" pRipple>
                        <span class="p-multiselect-close-icon pi pi-times"></span>
                    </button>
                </div>
                <div class="p-multiselect-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : (scrollHeight||'auto')">
                    <ul class="p-multiselect-items p-component" role="listbox" aria-multiselectable="true">
                        <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                            <ng-template ngFor let-option let-i="index" [ngForOf]="visibleOptions">
                                <p-multiSelectItem [option]="option" [selected]="isSelected(option.value)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)"
                                        [maxSelectionLimitReached]="maxSelectionLimitReached" [template]="itemTemplate"></p-multiSelectItem>
                            </ng-template>
                        </ng-container>
                        <ng-template #virtualScrollList>
                            <cdk-virtual-scroll-viewport #viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && visibleOptions && visibleOptions.length">
                                <ng-container *cdkVirtualFor="let option of visibleOptions; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">
                                    <p-multiSelectItem [option]="option" [selected]="isSelected(option.value)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)"
                                        [maxSelectionLimitReached]="maxSelectionLimitReached" [template]="itemTemplate" [itemSize]="itemSize"></p-multiSelectItem>
                                </ng-container>
                            </cdk-virtual-scroll-viewport>
                        </ng-template>
                        <li *ngIf="filter && visibleOptions && visibleOptions.length === 0" class="p-multiselect-empty-message">{{emptyFilterMessage}}</li>
                    </ul>
                </div>
                <div class="p-multiselect-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
                animations: [
                    trigger('overlayAnimation', [
                        transition(':enter', [
                            style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animate('{{showTransitionParams}}')
                        ]),
                        transition(':leave', [
                            animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                        ])
                    ])
                ],
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': 'focus'
                },
                providers: [MULTISELECT_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-multiselect{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;user-select:none}.p-multiselect-trigger{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;flex-shrink:0;justify-content:center}.p-multiselect-label-container{-ms-flex:1 1 auto;cursor:pointer;flex:1 1 auto;overflow:hidden}.p-multiselect-label{cursor:pointer;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect .p-multiselect-panel{min-width:100%}.p-multiselect-panel{position:absolute}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{list-style-type:none;margin:0;padding:0}.p-multiselect-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-multiselect-header,.p-multiselect-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-multiselect-header{-ms-flex-pack:justify;justify-content:space-between}.p-multiselect-filter-container{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}.p-multiselect-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-multiselect,.p-multiselect-close{display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { scrollHeight: [{
            type: Input
        }], filter: [{
            type: Input
        }], displaySelectedLabel: [{
            type: Input
        }], maxSelectedLabels: [{
            type: Input
        }], selectedItemsLabel: [{
            type: Input
        }], showToggleAll: [{
            type: Input
        }], emptyFilterMessage: [{
            type: Input
        }], resetFilterOnHide: [{
            type: Input
        }], dropdownIcon: [{
            type: Input
        }], showHeader: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], filterMatchMode: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], tooltipPositionStyle: [{
            type: Input
        }], autofocusFilter: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onClick: [{
            type: Output
        }], onPanelShow: [{
            type: Output
        }], onPanelHide: [{
            type: Output
        }], defaultLabel: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], options: [{
            type: Input
        }], disabled: [{
            type: Input
        }], overlayVisible: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], panelStyle: [{
            type: Input
        }], panelStyleClass: [{
            type: Input
        }], inputId: [{
            type: Input
        }], readonly: [{
            type: Input
        }], filterPlaceHolder: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], name: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], selectionLimit: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], ariaFilterLabel: [{
            type: Input
        }], tooltipStyleClass: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], filterInputChild: [{
            type: ViewChild,
            args: ['filterInput']
        }], accessibleViewChild: [{
            type: ViewChild,
            args: ['in']
        }], footerFacet: [{
            type: ContentChild,
            args: [Footer]
        }], headerFacet: [{
            type: ContentChild,
            args: [Header]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class MultiSelectModule {
}
MultiSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MultiSelectModule });
MultiSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MultiSelectModule_Factory(t) { return new (t || MultiSelectModule)(); }, imports: [[CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MultiSelectModule, { declarations: function () { return [MultiSelect, MultiSelectItem]; }, imports: function () { return [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule]; }, exports: function () { return [MultiSelect, SharedModule, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule],
                exports: [MultiSelect, SharedModule, ScrollingModule],
                declarations: [MultiSelect, MultiSelectItem]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXdFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFDbEosVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBZSxlQUFlLEVBQWEsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZLLE9BQU8sRUFBRSxPQUFPLEVBQU8sS0FBSyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQWdCLE1BQU0scUJBQXFCLENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TywrQkFFNUIsU0FBUyxTQUFDLGFBQWE7QUFBTyxrQ0FFOUIsU0FBUyxTQUFDLElBQUk7QUFBTywwQkFFckIsWUFBWSxTQUFDLE1BQU07QUFBTywwQkFFMUIsWUFBWSxTQUFDLE1BQU07QUFBTyx3QkFFMUIsZUFBZSxTQUFDLGFBQWE7QUFBTyx1QkFFcEMsTUFBTTtBQUFLLHNCQUVYLE1BQU07QUFBSyxxQkFFWCxNQUFNO0FBQUssc0JBRVgsTUFBTTtBQUFLLDBCQUVYLE1BQU07QUFBSywwQkFFWCxNQUFNO0FBQUssc0JBZ0RYLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBNGtCaEIsTUFBTSxPQUFPLGlCQUFpQjtBQUFHOzZDQUxoQyxRQUFRLFNBQUM7Q0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsWUFBWSxDQUFDLGtCQUMvRSxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLGVBQWUsQ0FBQyxrQkFDbkQsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFDLGVBQWUsQ0FBQyxjQUM5Qzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFdmVudEVtaXR0ZXIsXG4gICAgZm9yd2FyZFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlcixzdGF0ZSxzdHlsZSx0cmFuc2l0aW9uLGFuaW1hdGUsQW5pbWF0aW9uRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBEb21IYW5kbGVyLCBDb25uZWN0ZWRPdmVybGF5U2Nyb2xsSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IE9iamVjdFV0aWxzIH0gZnJvbSAncHJpbWVuZy91dGlscyc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUsIFByaW1lVGVtcGxhdGUsIEZvb3RlciwgSGVhZGVyIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBGaWx0ZXJVdGlscyB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdG9vbHRpcCc7XG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5cbmV4cG9ydCBjb25zdCBNVUxUSVNFTEVDVF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTXVsdGlTZWxlY3QpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLW11bHRpU2VsZWN0SXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGxpIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1pdGVtXCIgKGNsaWNrKT1cIm9uT3B0aW9uQ2xpY2soJGV2ZW50KVwiIChrZXlkb3duKT1cIm9uT3B0aW9uS2V5ZG93bigkZXZlbnQpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJvcHRpb24ubGFiZWxcIlxuICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwib3B0aW9uLmRpc2FibGVkID8gbnVsbCA6ICcwJ1wiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogaXRlbVNpemUgKyAncHgnfVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtaGlnaGxpZ2h0Jzogc2VsZWN0ZWQsICdwLWRpc2FibGVkJzogKG9wdGlvbi5kaXNhYmxlZCB8fCAobWF4U2VsZWN0aW9uTGltaXRSZWFjaGVkICYmICFzZWxlY3RlZCkpfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtY2hlY2tib3ggcC1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveC1ib3hcIiBbbmdDbGFzc109XCJ7J3AtaGlnaGxpZ2h0Jzogc2VsZWN0ZWR9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1jaGVja2JveC1pY29uXCIgW25nQ2xhc3NdPVwieydwaSBwaS1jaGVjayc6IHNlbGVjdGVkfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIj57e29wdGlvbi5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBvcHRpb259XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbGk+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU2VsZWN0SXRlbSB7XG5cbiAgICBASW5wdXQoKSBvcHRpb246IGFueTtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBpdGVtU2l6ZTogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBASW5wdXQoKSBtYXhTZWxlY3Rpb25MaW1pdFJlYWNoZWQ6IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25LZXlkb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIG9uT3B0aW9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgb3B0aW9uOiB0aGlzLm9wdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbktleWRvd24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25LZXlkb3duLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICBvcHRpb246IHRoaXMub3B0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLW11bHRpU2VsZWN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNjb250YWluZXIgW25nQ2xhc3NdPVwieydwLW11bHRpc2VsZWN0IHAtY29tcG9uZW50Jzp0cnVlLCdwLW11bHRpc2VsZWN0LW9wZW4nOm92ZXJsYXlWaXNpYmxlLCdwLWZvY3VzJzpmb2N1cywncC1kaXNhYmxlZCc6IGRpc2FibGVkfVwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uTW91c2VjbGljaygkZXZlbnQsaW4pXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjaW4gdHlwZT1cInRleHRcIiByZWFkb25seT1cInJlYWRvbmx5XCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIChmb2N1cyk9XCJvbklucHV0Rm9jdXMoJGV2ZW50KVwiIChibHVyKT1cIm9uSW5wdXRCbHVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiIChrZXlkb3duKT1cIm9uS2V5ZG93bigkZXZlbnQpXCIgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCIgcm9sZT1cImxpc3Rib3hcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtbGFiZWwtY29udGFpbmVyXCIgW3BUb29sdGlwXT1cInRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiIFtwb3NpdGlvblN0eWxlXT1cInRvb2x0aXBQb3NpdGlvblN0eWxlXCIgW3Rvb2x0aXBTdHlsZUNsYXNzXT1cInRvb2x0aXBTdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtbGFiZWxcIiBbbmdDbGFzc109XCJ7J3AtcGxhY2Vob2xkZXInOiB2YWx1ZXNBc1N0cmluZyA9PT0gKGRlZmF1bHRMYWJlbCB8fCBwbGFjZWhvbGRlciksICdwLW11bHRpc2VsZWN0LWxhYmVsLWVtcHR5JzogKCh2YWx1ZXNBc1N0cmluZyA9PSBudWxsIHx8IHZhbHVlc0FzU3RyaW5nLmxlbmd0aCA9PT0gMCkgJiYgKHBsYWNlaG9sZGVyID09IG51bGwgfHwgcGxhY2Vob2xkZXIubGVuZ3RoID09PSAwKSl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2VsZWN0ZWRJdGVtc1RlbXBsYXRlXCI+e3t2YWx1ZXNBc1N0cmluZyB8fCAnZW1wdHknfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNlbGVjdGVkSXRlbXNUZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogdmFsdWV9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydwLW11bHRpc2VsZWN0LXRyaWdnZXInOnRydWV9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW11bHRpc2VsZWN0LXRyaWdnZXItaWNvblwiIFtuZ0NsYXNzXT1cImRyb3Bkb3duSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm92ZXJsYXlWaXNpYmxlXCIgW25nQ2xhc3NdPVwiWydwLW11bHRpc2VsZWN0LXBhbmVsIHAtY29tcG9uZW50J11cIiBbQG92ZXJsYXlBbmltYXRpb25dPVwie3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3Nob3dUcmFuc2l0aW9uUGFyYW1zOiBzaG93VHJhbnNpdGlvbk9wdGlvbnMsIGhpZGVUcmFuc2l0aW9uUGFyYW1zOiBoaWRlVHJhbnNpdGlvbk9wdGlvbnN9fVwiIChAb3ZlcmxheUFuaW1hdGlvbi5zdGFydCk9XCJvbk92ZXJsYXlBbmltYXRpb25TdGFydCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJwYW5lbFN0eWxlXCIgW2NsYXNzXT1cInBhbmVsU3R5bGVDbGFzc1wiIChrZXlkb3duKT1cIm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtaGVhZGVyXCIgKm5nSWY9XCJzaG93SGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtY2hlY2tib3ggcC1jb21wb25lbnRcIiAqbmdJZj1cInNob3dUb2dnbGVBbGwgJiYgIXNlbGVjdGlvbkxpbWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiByZWFkb25seT1cInJlYWRvbmx5XCIgW2NoZWNrZWRdPVwiaXNBbGxDaGVja2VkKClcIiAoZm9jdXMpPVwib25IZWFkZXJDaGVja2JveEZvY3VzKClcIiAoYmx1cik9XCJvbkhlYWRlckNoZWNrYm94Qmx1cigpXCIgKGtleWRvd24uc3BhY2UpPVwidG9nZ2xlQWxsKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtY2hlY2tib3gtYm94XCIgcm9sZT1cImNoZWNrYm94XCIgW2F0dHIuYXJpYS1jaGVja2VkXT1cImlzQWxsQ2hlY2tlZCgpXCIgW25nQ2xhc3NdPVwieydwLWhpZ2hsaWdodCc6aXNBbGxDaGVja2VkKCksICdwLWZvY3VzJzogaGVhZGVyQ2hlY2tib3hGb2N1c31cIiAoY2xpY2spPVwidG9nZ2xlQWxsKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2hlY2tib3gtaWNvblwiIFtuZ0NsYXNzXT1cInsncGkgcGktY2hlY2snOmlzQWxsQ2hlY2tlZCgpfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZmlsdGVyLWNvbnRhaW5lclwiICpuZ0lmPVwiZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2ZpbHRlcklucHV0IHR5cGU9XCJ0ZXh0XCIgcm9sZT1cInRleHRib3hcIiBbdmFsdWVdPVwiZmlsdGVyVmFsdWV8fCcnXCIgKGlucHV0KT1cIm9uRmlsdGVyKClcIiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZmlsdGVyIHAtaW5wdXR0ZXh0IHAtY29tcG9uZW50XCIgW2F0dHIucGxhY2Vob2xkZXJdPVwiZmlsdGVyUGxhY2VIb2xkZXJcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFGaWx0ZXJMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW11bHRpc2VsZWN0LWZpbHRlci1pY29uIHBpIHBpLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwLW11bHRpc2VsZWN0LWNsb3NlIHAtbGlua1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiIHBSaXBwbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtY2xvc2UtaWNvbiBwaSBwaS10aW1lc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtaXRlbXMtd3JhcHBlclwiIFtzdHlsZS5tYXgtaGVpZ2h0XT1cInZpcnR1YWxTY3JvbGwgPyAnYXV0bycgOiAoc2Nyb2xsSGVpZ2h0fHwnYXV0bycpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInAtbXVsdGlzZWxlY3QtaXRlbXMgcC1jb21wb25lbnRcIiByb2xlPVwibGlzdGJveFwiIGFyaWEtbXVsdGlzZWxlY3RhYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF2aXJ0dWFsU2Nyb2xsOyBlbHNlIHZpcnR1YWxTY3JvbGxMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1vcHRpb24gbGV0LWk9XCJpbmRleFwiIFtuZ0Zvck9mXT1cInZpc2libGVPcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLW11bHRpU2VsZWN0SXRlbSBbb3B0aW9uXT1cIm9wdGlvblwiIFtzZWxlY3RlZF09XCJpc1NlbGVjdGVkKG9wdGlvbi52YWx1ZSlcIiAob25DbGljayk9XCJvbk9wdGlvbkNsaWNrKCRldmVudClcIiAob25LZXlkb3duKT1cIm9uT3B0aW9uS2V5ZG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4U2VsZWN0aW9uTGltaXRSZWFjaGVkXT1cIm1heFNlbGVjdGlvbkxpbWl0UmVhY2hlZFwiIFt0ZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIj48L3AtbXVsdGlTZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjdmlydHVhbFNjcm9sbExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCAjdmlld3BvcnQgW25nU3R5bGVdPVwieydoZWlnaHQnOiBzY3JvbGxIZWlnaHR9XCIgW2l0ZW1TaXplXT1cIml0ZW1TaXplXCIgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsICYmIHZpc2libGVPcHRpb25zICYmIHZpc2libGVPcHRpb25zLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IG9wdGlvbiBvZiB2aXNpYmxlT3B0aW9uczsgbGV0IGkgPSBpbmRleDsgbGV0IGMgPSBjb3VudDsgbGV0IGYgPSBmaXJzdDsgbGV0IGwgPSBsYXN0OyBsZXQgZSA9IGV2ZW47IGxldCBvID0gb2RkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdEl0ZW0gW29wdGlvbl09XCJvcHRpb25cIiBbc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZChvcHRpb24udmFsdWUpXCIgKG9uQ2xpY2spPVwib25PcHRpb25DbGljaygkZXZlbnQpXCIgKG9uS2V5ZG93bik9XCJvbk9wdGlvbktleWRvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21heFNlbGVjdGlvbkxpbWl0UmVhY2hlZF09XCJtYXhTZWxlY3Rpb25MaW1pdFJlYWNoZWRcIiBbdGVtcGxhdGVdPVwiaXRlbVRlbXBsYXRlXCIgW2l0ZW1TaXplXT1cIml0ZW1TaXplXCI+PC9wLW11bHRpU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiZmlsdGVyICYmIHZpc2libGVPcHRpb25zICYmIHZpc2libGVPcHRpb25zLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1lbXB0eS1tZXNzYWdlXCI+e3tlbXB0eUZpbHRlck1lc3NhZ2V9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZm9vdGVyXCIgKm5nSWY9XCJmb290ZXJGYWNldCB8fCBmb290ZXJUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ292ZXJsYXlBbmltYXRpb24nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJ30pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJ3t7c2hvd1RyYW5zaXRpb25QYXJhbXN9fScpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgne3toaWRlVHJhbnNpdGlvblBhcmFtc319Jywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZpbGxlZF0nOiAnZmlsbGVkJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0d3JhcHBlci1mb2N1c10nOiAnZm9jdXMnXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtNVUxUSVNFTEVDVF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9tdWx0aXNlbGVjdC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdCBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlclZpZXdJbml0LEFmdGVyQ29udGVudEluaXQsQWZ0ZXJWaWV3Q2hlY2tlZCxPbkRlc3Ryb3ksQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgc2Nyb2xsSGVpZ2h0OiBzdHJpbmcgPSAnMjAwcHgnO1xuXG4gICAgX2RlZmF1bHRMYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc2V0IGRlZmF1bHRMYWJlbCh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kZWZhdWx0TGFiZWwgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdExhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFiZWw7XG4gICAgfVxuXG4gICAgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzZXQgcGxhY2Vob2xkZXIodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICB9XG5cbiAgICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBwYW5lbFN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBwYW5lbFN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgZmlsdGVyUGxhY2VIb2xkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGZpbHRlckxvY2FsZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb3ZlcmxheVZpc2libGU6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgYXBwZW5kVG86IGFueTtcblxuICAgIEBJbnB1dCgpIGRhdGFLZXk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkaXNwbGF5U2VsZWN0ZWRMYWJlbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBtYXhTZWxlY3RlZExhYmVsczogbnVtYmVyID0gMztcblxuICAgIEBJbnB1dCgpIHNlbGVjdGlvbkxpbWl0OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1zTGFiZWw6IHN0cmluZyA9ICd7MH0gaXRlbXMgc2VsZWN0ZWQnO1xuXG4gICAgQElucHV0KCkgc2hvd1RvZ2dsZUFsbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBlbXB0eUZpbHRlck1lc3NhZ2U6IHN0cmluZyA9ICdObyByZXN1bHRzIGZvdW5kJztcblxuICAgIEBJbnB1dCgpIHJlc2V0RmlsdGVyT25IaWRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBkcm9wZG93bkljb246IHN0cmluZyA9ICdwaSBwaS1jaGV2cm9uLWRvd24nO1xuXG4gICAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNob3dIZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgYXV0b1pJbmRleDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBiYXNlWkluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgZmlsdGVyQnk6IHN0cmluZyA9ICdsYWJlbCc7XG5cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgaXRlbVNpemU6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHNob3dUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xMnMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xuXG4gICAgQElucHV0KCkgaGlkZVRyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnLjFzIGxpbmVhcic7XG5cbiAgICBASW5wdXQoKSBhcmlhRmlsdGVyTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGZpbHRlck1hdGNoTW9kZTogc3RyaW5nID0gXCJjb250YWluc1wiO1xuXG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nID0gJyc7XG5cbiAgICBASW5wdXQoKSB0b29sdGlwUG9zaXRpb246IHN0cmluZyA9ICdyaWdodCc7XG5cbiAgICBASW5wdXQoKSB0b29sdGlwUG9zaXRpb25TdHlsZTogc3RyaW5nID0gJ2Fic29sdXRlJztcblxuICAgIEBJbnB1dCgpIHRvb2x0aXBTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhdXRvZm9jdXNGaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKSBmaWx0ZXJJbnB1dENoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnaW4nKSBhY2Nlc3NpYmxlVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZChGb290ZXIpIGZvb3RlckZhY2V0O1xuXG4gICAgQENvbnRlbnRDaGlsZChIZWFkZXIpIGhlYWRlckZhY2V0O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uUGFuZWxTaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvblBhbmVsSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwdWJsaWMgdmFsdWU6IGFueVtdO1xuXG4gICAgcHVibGljIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvdmVybGF5OiBIVE1MRGl2RWxlbWVudDtcblxuICAgIHB1YmxpYyB2YWx1ZXNBc1N0cmluZzogc3RyaW5nO1xuXG4gICAgcHVibGljIGZvY3VzOiBib29sZWFuO1xuXG4gICAgZmlsbGVkOiBib29sZWFuO1xuXG4gICAgcHVibGljIGRvY3VtZW50Q2xpY2tMaXN0ZW5lcjogYW55O1xuXG4gICAgcHVibGljIGZpbHRlclZhbHVlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgdmlzaWJsZU9wdGlvbnM6IFNlbGVjdEl0ZW1bXTtcblxuICAgIHB1YmxpYyBkaXNhYmxlZFNlbGVjdGVkT3B0aW9uczogU2VsZWN0SXRlbVtdID0gW107XG5cbiAgICBwdWJsaWMgZmlsdGVyZWQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHVibGljIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbXNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHB1YmxpYyBoZWFkZXJDaGVja2JveEZvY3VzOiBib29sZWFuO1xuXG4gICAgX29wdGlvbnM6IGFueVtdO1xuXG4gICAgbWF4U2VsZWN0aW9uTGltaXRSZWFjaGVkOiBib29sZWFuO1xuXG4gICAgc2Nyb2xsSGFuZGxlcjogYW55O1xuXG4gICAgZG9jdW1lbnRSZXNpemVMaXN0ZW5lcjogYW55O1xuXG4gICAgcHJldmVudE1vZGVsVG91Y2hlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBASW5wdXQoKSBnZXQgb3B0aW9ucygpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHNldCBvcHRpb25zKHZhbDogYW55W10pIHtcbiAgICAgICAgbGV0IG9wdHMgPSB0aGlzLm9wdGlvbkxhYmVsID8gT2JqZWN0VXRpbHMuZ2VuZXJhdGVTZWxlY3RJdGVtcyh2YWwsIHRoaXMub3B0aW9uTGFiZWwpIDogdmFsO1xuICAgICAgICB0aGlzLnZpc2libGVPcHRpb25zID0gb3B0cztcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdHM7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcblxuICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZSAmJiB0aGlzLmZpbHRlclZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3RlZEl0ZW1zJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5VmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFsaWduT3ZlcmxheSgpO1xuXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMuc2V0RGlzYWJsZWRTZWxlY3RlZE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5jaGVja1NlbGVjdGlvbkxpbWl0KCk7XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjaGVja1NlbGVjdGlvbkxpbWl0KCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25MaW1pdCAmJiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gdGhpcy5zZWxlY3Rpb25MaW1pdCkpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2VsZWN0aW9uTGltaXRSZWFjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2VsZWN0aW9uTGltaXRSZWFjaGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVGaWxsZWRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5maWxsZWQgPSAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBldmVudC5vcHRpb247XG4gICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICBsZXQgc2VsZWN0aW9uSW5kZXggPSB0aGlzLmZpbmRTZWxlY3Rpb25JbmRleChvcHRpb25WYWx1ZSk7XG4gICAgICAgIGlmIChzZWxlY3Rpb25JbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWwsaSkgPT4gaSAhPSBzZWxlY3Rpb25JbmRleCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhTZWxlY3Rpb25MaW1pdFJlYWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25MaW1pdCB8fCAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPCB0aGlzLnNlbGVjdGlvbkxpbWl0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbLi4udGhpcy52YWx1ZSB8fCBbXSwgb3B0aW9uVmFsdWVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoZWNrU2VsZWN0aW9uTGltaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCB2YWx1ZTogdGhpcy52YWx1ZSwgaXRlbVZhbHVlOiBvcHRpb25WYWx1ZX0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRTZWxlY3Rpb25JbmRleCh2YWx1ZSkgIT0gLTE7XG4gICAgfVxuXG4gICAgZmluZFNlbGVjdGlvbkluZGV4KHZhbDogYW55KTogbnVtYmVywqB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0VXRpbHMuZXF1YWxzKHRoaXMudmFsdWVbaV0sIHZhbCwgdGhpcy5kYXRhS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICB0b2dnbGVBbGwoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWxsQ2hlY2tlZCgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZFNlbGVjdGVkT3B0aW9ucyAmJiB0aGlzLmRpc2FibGVkU2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFsuLi50aGlzLmRpc2FibGVkU2VsZWN0ZWRPcHRpb25zXTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgb3B0cyA9IHRoaXMuZ2V0VmlzaWJsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgIGlmIChvcHRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRTZWxlY3RlZE9wdGlvbnMgJiYgdGhpcy5kaXNhYmxlZFNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gWy4uLnRoaXMuZGlzYWJsZWRTZWxlY3RlZE9wdGlvbnNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2gob3B0c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogdGhpcy52YWx1ZX0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICB9XG5cbiAgICBpc0FsbENoZWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlICYmIHRoaXMuZmlsdGVyVmFsdWUudHJpbSgpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgJiYgdGhpcy52aXNpYmxlT3B0aW9ucyAmJiB0aGlzLnZpc2libGVPcHRpb25zLmxlbmd0aCAmJiB0aGlzLmlzQWxsVmlzaWJsZU9wdGlvbnNDaGVja2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uQ291bnQgPSB0aGlzLmdldEVuYWJsZWRPcHRpb25Db3VudCgpO1xuICAgICAgICAgICAgbGV0IGRpc2FibGVkU2VsZWN0ZWRPcHRpb25Db3VudCA9IHRoaXMuZGlzYWJsZWRTZWxlY3RlZE9wdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAmJiB0aGlzLm9wdGlvbnMgJiYgKHRoaXMudmFsdWUubGVuZ3RoID4gMCAmJiB0aGlzLnZhbHVlLmxlbmd0aCA9PSBvcHRpb25Db3VudCArIGRpc2FibGVkU2VsZWN0ZWRPcHRpb25Db3VudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0FsbFZpc2libGVPcHRpb25zQ2hlY2tlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGVPcHRpb25zIHx8IHRoaXMudmlzaWJsZU9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy52aXNpYmxlT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKG9wdGlvbi52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RW5hYmxlZE9wdGlvbkNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBvcHQgb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTZWxlY3RlZE9wdGlvbnMoKXtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZFNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBvcHQgb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHQuZGlzYWJsZWQgJiYgdGhpcy5pc1NlbGVjdGVkKG9wdC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRTZWxlY3RlZE9wdGlvbnMucHVzaChvcHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlWaXNpYmxlKXtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25PdmVybGF5QW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudG9TdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5ID0gZXZlbnQuZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvWkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgKCsrRG9tSGFuZGxlci56aW5kZXgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hbGlnbk92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcklucHV0Q2hpbGQgJiYgdGhpcy5maWx0ZXJJbnB1dENoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2ZW50TW9kZWxUb3VjaGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvZm9jdXNGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVySW5wdXRDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFuZWxTaG93LmVtaXQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd2b2lkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kT3ZlcmxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvID09PSAnYm9keScpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5LCB0aGlzLmFwcGVuZFRvKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXkuc3R5bGUubWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUubWluV2lkdGggPSBEb21IYW5kbGVyLmdldFdpZHRoKHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVPdmVybGF5QXBwZW5kKCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5ICYmIHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxpZ25PdmVybGF5KCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbylcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFic29sdXRlUG9zaXRpb24odGhpcy5vdmVybGF5LCB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbGF0aXZlUG9zaXRpb24odGhpcy5vdmVybGF5LCB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgaWYgKHRoaXMucmVzZXRGaWx0ZXJPbkhpZGUpe1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJJbnB1dENoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uUGFuZWxIaWRlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjbG9zZShldmVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZWNsaWNrKGV2ZW50LGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZG9ubHkgfHwgZXZlbnQudGFyZ2V0LmlzU2FtZU5vZGUodGhpcy5hY2Nlc3NpYmxlVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uQ2xpY2suZW1pdChldmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzT3ZlcmxheUNsaWNrKGV2ZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc092ZXJsYXlDbGljayhldmVudCkge1xuICAgICAgICByZXR1cm4gKHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkuY29udGFpbnMoPE5vZGU+IGV2ZW50LnRhcmdldCkpO1xuICAgIH1cblxuICAgIGlzT3V0c2lkZUNsaWNrZWQoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhKHRoaXMuZWwubmF0aXZlRWxlbWVudC5pc1NhbWVOb2RlKGV2ZW50LnRhcmdldCkgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHwgdGhpcy5pc092ZXJsYXlDbGljayhldmVudCkpO1xuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkZvY3VzLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50fSk7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudH0pO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50TW9kZWxUb3VjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2ZW50TW9kZWxUb3VjaGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25PcHRpb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2goZXZlbnQub3JpZ2luYWxFdmVudC53aGljaCkge1xuXG4gICAgICAgICAgICAvL2Rvd25cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgdmFyIG5leHRJdGVtID0gdGhpcy5maW5kTmV4dEl0ZW0oZXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJdGVtLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdmFyIHByZXZJdGVtID0gdGhpcy5maW5kUHJldkl0ZW0oZXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZJdGVtLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vZW50ZXJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmROZXh0SXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBuZXh0SXRlbSA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmIChuZXh0SXRlbSlcbiAgICAgICAgICAgIHJldHVybiBEb21IYW5kbGVyLmhhc0NsYXNzKG5leHRJdGVtLmNoaWxkcmVuWzBdLCAncC1kaXNhYmxlZCcpIHx8IERvbUhhbmRsZXIuaXNIaWRkZW4obmV4dEl0ZW0uY2hpbGRyZW5bMF0pID8gdGhpcy5maW5kTmV4dEl0ZW0obmV4dEl0ZW0pIDogbmV4dEl0ZW0uY2hpbGRyZW5bMF07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbmRQcmV2SXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBwcmV2SXRlbSA9IGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAocHJldkl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gRG9tSGFuZGxlci5oYXNDbGFzcyhwcmV2SXRlbS5jaGlsZHJlblswXSwgJ3AtZGlzYWJsZWQnKSB8fCBEb21IYW5kbGVyLmlzSGlkZGVuKHByZXZJdGVtLmNoaWxkcmVuWzBdKSA/IHRoaXMuZmluZFByZXZJdGVtKHByZXZJdGVtKSA6IHByZXZJdGVtLmNoaWxkcmVuWzBdO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpe1xuICAgICAgICBzd2l0Y2goZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIC8vZG93blxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVZpc2libGUgJiYgZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL3NwYWNlXG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vdmVybGF5VmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9lc2NhcGVcbiAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUxhYmVsKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLm9wdGlvbnMgJiYgdGhpcy52YWx1ZS5sZW5ndGggJiYgdGhpcy5kaXNwbGF5U2VsZWN0ZWRMYWJlbCkge1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUxhYmVsID0gdGhpcy5maW5kTGFiZWxCeVZhbHVlKHRoaXMudmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtTGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwgKyAnLCAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwgKyBpdGVtTGFiZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPD0gdGhpcy5tYXhTZWxlY3RlZExhYmVscykge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzQXNTdHJpbmcgPSBsYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gL3soLio/KX0vO1xuICAgICAgICAgICAgICAgIGlmIChwYXR0ZXJuLnRlc3QodGhpcy5zZWxlY3RlZEl0ZW1zTGFiZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzQXNTdHJpbmcgPSB0aGlzLnNlbGVjdGVkSXRlbXNMYWJlbC5yZXBsYWNlKHRoaXMuc2VsZWN0ZWRJdGVtc0xhYmVsLm1hdGNoKHBhdHRlcm4pWzBdLCB0aGlzLnZhbHVlLmxlbmd0aCArICcnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc0FzU3RyaW5nID0gdGhpcy5zZWxlY3RlZEl0ZW1zTGFiZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNBc1N0cmluZyA9IHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy5kZWZhdWx0TGFiZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kTGFiZWxCeVZhbHVlKHZhbDogYW55KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAodmFsID09IG51bGwgJiYgb3B0aW9uLnZhbHVlID09IG51bGwgfHwgT2JqZWN0VXRpbHMuZXF1YWxzKHZhbCwgb3B0aW9uLnZhbHVlLCB0aGlzLmRhdGFLZXkpKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBvcHRpb24ubGFiZWw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIG9uRmlsdGVyKCkge1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuZmlsdGVySW5wdXRDaGlsZC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZU9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmF0ZUZpbHRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoRmllbGRzOiBzdHJpbmdbXSA9IHRoaXMuZmlsdGVyQnkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZU9wdGlvbnMgPSBGaWx0ZXJVdGlscy5maWx0ZXIodGhpcy5vcHRpb25zLCBzZWFyY2hGaWVsZHMsIHRoaXMuZmlsdGVyVmFsdWUsIHRoaXMuZmlsdGVyTWF0Y2hNb2RlLCB0aGlzLmZpbHRlckxvY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFZpc2libGVPcHRpb25zKCk6IFNlbGVjdEl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zIHx8IHRoaXMub3B0aW9ucztcbiAgICB9XG5cbiAgICBvbkhlYWRlckNoZWNrYm94Rm9jdXMoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyQ2hlY2tib3hGb2N1cyA9IHRydWU7XG4gICAgfVxuXG4gICAgb25IZWFkZXJDaGVja2JveEJsdXIoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyQ2hlY2tib3hGb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50VGFyZ2V0OiBhbnkgPSB0aGlzLmVsID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAnZG9jdW1lbnQnO1xuXG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRvY3VtZW50VGFyZ2V0LCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc091dHNpZGVDbGlja2VkKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50UmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIGlmICghRG9tSGFuZGxlci5pc0FuZHJvaWQoKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBuZXcgQ29ubmVjdGVkT3ZlcmxheVNjcm9sbEhhbmRsZXIodGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHVuYmluZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIudW5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3ZlcmxheUhpZGUoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc3RvcmVPdmVybGF5QXBwZW5kKCk7XG4gICAgICAgIHRoaXMub25PdmVybGF5SGlkZSgpO1xuICAgIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsU2hhcmVkTW9kdWxlLFNjcm9sbGluZ01vZHVsZSxUb29sdGlwTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW011bHRpU2VsZWN0LFNoYXJlZE1vZHVsZSxTY3JvbGxpbmdNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW011bHRpU2VsZWN0LE11bHRpU2VsZWN0SXRlbV1cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RNb2R1bGUgeyB9XG4iXX0=