import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { NgModule, Component, ElementRef, Input, Output, Renderer2, EventEmitter, ContentChildren, ViewChild, forwardRef, ChangeDetectorRef, NgZone, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { ObjectUtils } from 'primeng/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FilterUtils } from 'primeng/utils';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/ripple';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/tooltip';
import * as ɵngcc4 from '@angular/cdk/scrolling';

function DropdownItem_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.option.label || "empty");
} }
function DropdownItem_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "height": a0 }; };
const _c1 = function (a1, a2) { return { "p-dropdown-item": true, "p-highlight": a1, "p-disabled": a2 }; };
const _c2 = function (a0) { return { $implicit: a0 }; };
const _c3 = ["container"];
const _c4 = ["filter"];
const _c5 = ["in"];
const _c6 = ["editableInput"];
function Dropdown_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.label || "empty");
} }
function Dropdown_span_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c7 = function (a1) { return { "p-dropdown-label p-inputtext": true, "p-dropdown-label-empty": a1 }; };
function Dropdown_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 12);
    ɵngcc0.ɵɵtemplate(1, Dropdown_span_5_ng_container_1_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(2, Dropdown_span_5_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c7, ctx_r2.label == null || ctx_r2.label.length === 0))("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.selectedItemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(10, _c2, ctx_r2.selectedOption));
} }
const _c8 = function (a1) { return { "p-dropdown-label p-inputtext p-placeholder": true, "p-dropdown-label-empty": a1 }; };
function Dropdown_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c8, ctx_r3.placeholder == null || ctx_r3.placeholder.length === 0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.placeholder || "empty");
} }
function Dropdown_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 16, 17);
    ɵngcc0.ɵɵlistener("click", function Dropdown_input_7_Template_input_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onEditableInputClick(); })("input", function Dropdown_input_7_Template_input_input_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onEditableInputChange($event); })("focus", function Dropdown_input_7_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onEditableInputFocus($event); })("blur", function Dropdown_input_7_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onInputBlur($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r4.disabled);
    ɵngcc0.ɵɵattribute("maxlength", ctx_r4.maxlength)("aria-label", ctx_r4.selectedOption ? ctx_r4.selectedOption.label : " ")("placeholder", ctx_r4.placeholder)("aria-expanded", ctx_r4.overlayVisible);
} }
function Dropdown_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 18);
    ɵngcc0.ɵɵlistener("click", function Dropdown_i_8_Template_i_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.clear($event); });
    ɵngcc0.ɵɵelementEnd();
} }
function Dropdown_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵlistener("click", function Dropdown_div_11_div_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementStart(2, "input", 27, 28);
    ɵngcc0.ɵɵlistener("keydown.enter", function Dropdown_div_11_div_1_Template_input_keydown_enter_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); return $event.preventDefault(); })("keydown", function Dropdown_div_11_div_1_Template_input_keydown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27.onKeydown($event, false); })("input", function Dropdown_div_11_div_1_Template_input_input_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onFilter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("value", ctx_r17.filterValue || "");
    ɵngcc0.ɵɵattribute("placeholder", ctx_r17.filterPlaceholder)("aria-label", ctx_r17.ariaFilterLabel);
} }
function Dropdown_div_11_ng_container_4_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const optgroup_r30 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(optgroup_r30.label || "empty");
} }
function Dropdown_div_11_ng_container_4_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dropdown_div_11_ng_container_4_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c9 = function (a0, a1) { return { $implicit: a0, selectedOption: a1 }; };
function Dropdown_div_11_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_4_ng_template_1_span_1_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(2, Dropdown_div_11_ng_container_4_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, Dropdown_div_11_ng_container_4_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 14);
} if (rf & 2) {
    const optgroup_r30 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    const _r20 = ɵngcc0.ɵɵreference(7);
    const ctx_r29 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r29.groupTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r29.groupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c2, optgroup_r30));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r20)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(7, _c9, optgroup_r30.items, ctx_r29.selectedOption));
} }
function Dropdown_div_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_4_ng_template_1_Template, 4, 10, "ng-template", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r18.optionsToDisplay);
} }
function Dropdown_div_11_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dropdown_div_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r20 = ɵngcc0.ɵɵreference(7);
    const ctx_r19 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r20)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c9, ctx_r19.optionsToDisplay, ctx_r19.selectedOption));
} }
function Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdownItem", 34);
    ɵngcc0.ɵɵlistener("onClick", function Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_dropdownItem_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r44 = ɵngcc0.ɵɵnextContext(4); return ctx_r44.onItemClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r42 = ctx.$implicit;
    const selectedOption_r37 = ɵngcc0.ɵɵnextContext(2).selectedOption;
    const ctx_r41 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("option", option_r42)("selected", selectedOption_r37 == option_r42)("template", ctx_r41.itemTemplate);
} }
function Dropdown_div_11_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template, 1, 3, "ng-template", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const options_r36 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", options_r36);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "p-dropdownItem", 34);
    ɵngcc0.ɵɵlistener("onClick", function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_dropdownItem_onClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r59); const ctx_r58 = ɵngcc0.ɵɵnextContext(5); return ctx_r58.onItemClick($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r51 = ctx.$implicit;
    const selectedOption_r37 = ɵngcc0.ɵɵnextContext(3).selectedOption;
    const ctx_r50 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("option", option_r51)("selected", selectedOption_r37 == option_r51)("template", ctx_r50.itemTemplate);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    const _r62 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 36, 37);
    ɵngcc0.ɵɵlistener("scrolledIndexChange", function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r62); const ctx_r61 = ɵngcc0.ɵɵnextContext(4); return ctx_r61.scrollToSelectedVirtualScrollElement(); });
    ɵngcc0.ɵɵtemplate(2, Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 3, "ng-container", 38);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const options_r36 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r48 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r48.scrollHeight))("itemSize", ctx_r48.itemSize);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", options_r36);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 35);
} if (rf & 2) {
    const ctx_r40 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r40.virtualScroll && ctx_r40.optionsToDisplay && ctx_r40.optionsToDisplay.length);
} }
function Dropdown_div_11_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Dropdown_div_11_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 32);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 33, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r39 = ɵngcc0.ɵɵreference(2);
    const ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r21.virtualScroll)("ngIfElse", _r39);
} }
function Dropdown_div_11_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 39);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r22.emptyFilterMessage);
} }
const _c10 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c11 = function (a1) { return { value: "visible", params: a1 }; };
function Dropdown_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r65 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function Dropdown_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r65); const ctx_r64 = ɵngcc0.ɵɵnextContext(); return ctx_r64.onOverlayAnimationStart($event); });
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_div_1_Template, 5, 3, "div", 20);
    ɵngcc0.ɵɵelementStart(2, "div", 21);
    ɵngcc0.ɵɵelementStart(3, "ul", 22);
    ɵngcc0.ɵɵtemplate(4, Dropdown_div_11_ng_container_4_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(5, Dropdown_div_11_ng_container_5_Template, 2, 5, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(6, Dropdown_div_11_ng_template_6_Template, 3, 2, "ng-template", null, 23, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(8, Dropdown_div_11_li_8_Template, 2, 1, "li", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r6.panelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-dropdown-panel p-component")("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(14, _c11, ɵngcc0.ɵɵpureFunction2(11, _c10, ctx_r6.showTransitionOptions, ctx_r6.hideTransitionOptions)))("ngStyle", ctx_r6.panelStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.filter);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r6.virtualScroll ? "auto" : ctx_r6.scrollHeight || "auto");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.group);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.group);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.filter && (!ctx_r6.optionsToDisplay || ctx_r6.optionsToDisplay && ctx_r6.optionsToDisplay.length === 0));
} }
const _c12 = function (a1, a2, a3, a4) { return { "p-dropdown p-component": true, "p-disabled": a1, "p-dropdown-open": a2, "p-focus": a3, "p-dropdown-clearable": a4 }; };
export const DROPDOWN_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Dropdown),
    multi: true
};
export class DropdownItem {
    constructor() {
        this.onClick = new EventEmitter();
    }
    onOptionClick(event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    }
}
DropdownItem.ɵfac = function DropdownItem_Factory(t) { return new (t || DropdownItem)(); };
DropdownItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropdownItem, selectors: [["p-dropdownItem"]], inputs: { option: "option", selected: "selected", disabled: "disabled", visible: "visible", itemSize: "itemSize", template: "template" }, outputs: { onClick: "onClick" }, decls: 3, vars: 14, consts: [["role", "option", "pRipple", "", 3, "ngStyle", "ngClass", "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DropdownItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "li", 0);
        ɵngcc0.ɵɵlistener("click", function DropdownItem_Template_li_click_0_listener($event) { return ctx.onOptionClick($event); });
        ɵngcc0.ɵɵtemplate(1, DropdownItem_span_1_Template, 2, 1, "span", 1);
        ɵngcc0.ɵɵtemplate(2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(7, _c0, ctx.itemSize + "px"))("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c1, ctx.selected, ctx.option.disabled));
        ɵngcc0.ɵɵattribute("aria-label", ctx.option.label)("aria-selected", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(12, _c2, ctx.option));
    } }, directives: [ɵngcc1.Ripple, ɵngcc2.NgStyle, ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], encapsulation: 2 });
DropdownItem.propDecorators = {
    option: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    visible: [{ type: Input }],
    itemSize: [{ type: Input }],
    template: [{ type: Input }],
    onClick: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownItem, [{
        type: Component,
        args: [{
                selector: 'p-dropdownItem',
                template: `
        <li (click)="onOptionClick($event)" role="option" pRipple
            [attr.aria-label]="option.label" [attr.aria-selected]="selected"
            [ngStyle]="{'height': itemSize + 'px'}"
            [ngClass]="{'p-dropdown-item':true, 'p-highlight': selected, 'p-disabled':(option.disabled)}">
            <span *ngIf="!template">{{option.label||'empty'}}</span>
            <ng-container *ngTemplateOutlet="template; context: {$implicit: option}"></ng-container>
        </li>
    `
            }]
    }], function () { return []; }, { onClick: [{
            type: Output
        }], option: [{
            type: Input
        }], selected: [{
            type: Input
        }], disabled: [{
            type: Input
        }], visible: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();
export class Dropdown {
    constructor(el, renderer, cd, zone) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.scrollHeight = '200px';
        this.filterBy = 'label';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.autoDisplayFirst = true;
        this.emptyFilterMessage = 'No results found';
        this.autoZIndex = true;
        this.baseZIndex = 0;
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
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.viewPortOffsetTop = 0;
    }
    get disabled() {
        return this._disabled;
    }
    ;
    set disabled(_disabled) {
        if (_disabled)
            this.focused = false;
        this._disabled = _disabled;
        if (!this.cd.destroyed) {
            this.cd.detectChanges();
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    this.selectedItemTemplate = item.template;
                    break;
                case 'group':
                    this.groupTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngOnInit() {
        this.optionsToDisplay = this.options;
        this.updateSelectedOption(null);
    }
    get options() {
        return this._options;
    }
    set options(val) {
        let opts = this.optionLabel ? ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
        this._options = opts;
        this.optionsToDisplay = this._options;
        this.updateSelectedOption(this.value);
        this.optionsChanged = true;
        this.updateFilledState();
        if (this.filterValue && this.filterValue.length) {
            this.activateFilter();
        }
    }
    ngAfterViewInit() {
        if (this.editable) {
            this.updateEditableLabel();
        }
    }
    get label() {
        return (this.selectedOption ? this.selectedOption.label : null);
    }
    updateEditableLabel() {
        if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = (this.selectedOption ? this.selectedOption.label : this.value || '');
        }
    }
    onItemClick(event) {
        const option = event.option;
        if (!option.disabled) {
            this.selectItem(event, option);
            this.accessibleViewChild.nativeElement.focus();
        }
        setTimeout(() => {
            this.hide(event);
        }, 150);
    }
    selectItem(event, option) {
        if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = option.value;
            this.filled = true;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
                originalEvent: event.originalEvent,
                value: this.value
            });
            if (this.virtualScroll) {
                setTimeout(() => {
                    this.viewPortOffsetTop = this.viewPort ? this.viewPort.measureScrollOffset() : 0;
                }, 1);
            }
        }
    }
    ngAfterViewChecked() {
        if (this.optionsChanged && this.overlayVisible) {
            this.optionsChanged = false;
            if (this.virtualScroll) {
                this.updateVirtualScrollSelectedIndex(true);
            }
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.alignOverlay();
                }, 1);
            });
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            if (this.virtualScroll && this.viewPort) {
                let range = this.viewPort.getRenderedRange();
                this.updateVirtualScrollSelectedIndex(false);
                if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                    this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                }
            }
            let selectedItem = DomHandler.findSingle(this.overlay, 'li.p-highlight');
            if (selectedItem) {
                DomHandler.scrollInView(this.itemsWrapper, DomHandler.findSingle(this.overlay, 'li.p-highlight'));
            }
            this.selectedOptionUpdated = false;
        }
    }
    writeValue(value) {
        if (this.filter) {
            this.resetFilter();
        }
        this.value = value;
        this.updateSelectedOption(value);
        this.updateEditableLabel();
        this.updateFilledState();
        this.cd.markForCheck();
    }
    resetFilter() {
        this.filterValue = null;
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
        }
        this.optionsToDisplay = this.options;
    }
    updateSelectedOption(val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
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
    onMouseclick(event) {
        if (this.disabled || this.readonly || this.isInputClick(event)) {
            return;
        }
        this.onClick.emit(event);
        this.accessibleViewChild.nativeElement.focus();
        if (this.overlayVisible)
            this.hide(event);
        else
            this.show();
        this.cd.detectChanges();
    }
    isInputClick(event) {
        return DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') ||
            event.target.isSameNode(this.accessibleViewChild.nativeElement) ||
            (this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement));
    }
    isOutsideClicked(event) {
        return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
    }
    onEditableInputClick() {
        this.bindDocumentClickListener();
    }
    onEditableInputFocus(event) {
        this.focused = true;
        this.hide(event);
        this.onFocus.emit(event);
    }
    onEditableInputChange(event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    show() {
        this.overlayVisible = true;
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                let itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.p-dropdown-items-wrapper';
                this.itemsWrapper = DomHandler.findSingle(this.overlay, itemsWrapperSelector);
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.bindScrollListener();
                if (this.options && this.options.length) {
                    if (!this.virtualScroll) {
                        let selectedListItem = DomHandler.findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');
                        if (selectedListItem) {
                            DomHandler.scrollInView(this.itemsWrapper, selectedListItem);
                        }
                    }
                }
                if (this.filterViewChild && this.filterViewChild.nativeElement) {
                    this.preventModelTouched = true;
                    if (this.autofocusFilter) {
                        this.filterViewChild.nativeElement.focus();
                    }
                }
                this.onShow.emit(event);
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    }
    scrollToSelectedVirtualScrollElement() {
        if (!this.virtualAutoScrolled) {
            if (this.viewPortOffsetTop) {
                this.viewPort.scrollToOffset(this.viewPortOffsetTop);
            }
            else if (this.virtualScrollSelectedIndex > -1) {
                this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
            }
        }
        this.virtualAutoScrolled = true;
    }
    updateVirtualScrollSelectedIndex(resetOffset) {
        if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
            if (resetOffset) {
                this.viewPortOffsetTop = 0;
            }
            this.virtualScrollSelectedIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay);
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
    hide(event) {
        this.overlayVisible = false;
        if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
        }
        if (this.virtualScroll) {
            this.virtualAutoScrolled = false;
        }
        this.cd.markForCheck();
        this.onHide.emit(event);
    }
    alignOverlay() {
        if (this.overlay) {
            if (this.appendTo)
                DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
            else
                DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
    }
    onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        this.onBlur.emit(event);
        if (!this.preventModelTouched) {
            this.onModelTouched();
        }
        this.preventModelTouched = false;
    }
    findPrevEnabledOption(index) {
        let prevEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (let i = (index - 1); 0 <= i; i--) {
                let option = this.optionsToDisplay[i];
                if (option.disabled) {
                    continue;
                }
                else {
                    prevEnabledOption = option;
                    break;
                }
            }
            if (!prevEnabledOption) {
                for (let i = this.optionsToDisplay.length - 1; i >= index; i--) {
                    let option = this.optionsToDisplay[i];
                    if (option.disabled) {
                        continue;
                    }
                    else {
                        prevEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return prevEnabledOption;
    }
    findNextEnabledOption(index) {
        let nextEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (let i = (index + 1); index < (this.optionsToDisplay.length - 1); i++) {
                let option = this.optionsToDisplay[i];
                if (option.disabled) {
                    continue;
                }
                else {
                    nextEnabledOption = option;
                    break;
                }
            }
            if (!nextEnabledOption) {
                for (let i = 0; i < index; i++) {
                    let option = this.optionsToDisplay[i];
                    if (option.disabled) {
                        continue;
                    }
                    else {
                        nextEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return nextEnabledOption;
    }
    onKeydown(event, search) {
        if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
            return;
        }
        switch (event.which) {
            //down
            case 40:
                if (!this.overlayVisible && event.altKey) {
                    this.show();
                }
                else {
                    if (this.group) {
                        let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                        if (selectedItemIndex !== -1) {
                            let nextItemIndex = selectedItemIndex.itemIndex + 1;
                            if (nextItemIndex < (this.optionsToDisplay[selectedItemIndex.groupIndex].items.length)) {
                                this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[nextItemIndex]);
                                this.selectedOptionUpdated = true;
                            }
                            else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                                this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex + 1].items[0]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                        else {
                            this.selectItem(event, this.optionsToDisplay[0].items[0]);
                        }
                    }
                    else {
                        let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                        let nextEnabledOption = this.findNextEnabledOption(selectedItemIndex);
                        if (nextEnabledOption) {
                            this.selectItem(event, nextEnabledOption);
                            this.selectedOptionUpdated = true;
                        }
                    }
                }
                event.preventDefault();
                break;
            //up
            case 38:
                if (this.group) {
                    let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                    if (selectedItemIndex !== -1) {
                        let prevItemIndex = selectedItemIndex.itemIndex - 1;
                        if (prevItemIndex >= 0) {
                            this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[prevItemIndex]);
                            this.selectedOptionUpdated = true;
                        }
                        else if (prevItemIndex < 0) {
                            let prevGroup = this.optionsToDisplay[selectedItemIndex.groupIndex - 1];
                            if (prevGroup) {
                                this.selectItem(event, prevGroup.items[prevGroup.items.length - 1]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                    }
                }
                else {
                    let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                    let prevEnabledOption = this.findPrevEnabledOption(selectedItemIndex);
                    if (prevEnabledOption) {
                        this.selectItem(event, prevEnabledOption);
                        this.selectedOptionUpdated = true;
                    }
                }
                event.preventDefault();
                break;
            //space
            case 32:
            case 32:
                if (!this.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //enter
            case 13:
                if (!this.filter || (this.optionsToDisplay && this.optionsToDisplay.length > 0)) {
                    this.hide(event);
                }
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide(event);
                break;
            //search item based on keyboard input
            default:
                if (search) {
                    this.search(event);
                }
                break;
        }
    }
    search(event) {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        const char = event.key;
        this.previousSearchChar = this.currentSearchChar;
        this.currentSearchChar = char;
        if (this.previousSearchChar === this.currentSearchChar)
            this.searchValue = this.currentSearchChar;
        else
            this.searchValue = this.searchValue ? this.searchValue + char : char;
        let newOption;
        if (this.group) {
            let searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : { groupIndex: 0, itemIndex: 0 };
            newOption = this.searchOptionWithinGroup(searchIndex);
        }
        else {
            let searchIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
            newOption = this.searchOption(++searchIndex);
        }
        if (newOption && !newOption.disabled) {
            this.selectItem(event, newOption);
            this.selectedOptionUpdated = true;
        }
        this.searchTimeout = setTimeout(() => {
            this.searchValue = null;
        }, 250);
    }
    searchOption(index) {
        let option;
        if (this.searchValue) {
            option = this.searchOptionInRange(index, this.optionsToDisplay.length);
            if (!option) {
                option = this.searchOptionInRange(0, index);
            }
        }
        return option;
    }
    searchOptionInRange(start, end) {
        for (let i = start; i < end; i++) {
            let opt = this.optionsToDisplay[i];
            if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                return opt;
            }
        }
        return null;
    }
    searchOptionWithinGroup(index) {
        let option;
        if (this.searchValue) {
            for (let i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
                for (let j = (index.groupIndex === i) ? (index.itemIndex + 1) : 0; j < this.optionsToDisplay[i].items.length; j++) {
                    let opt = this.optionsToDisplay[i].items[j];
                    if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                        return opt;
                    }
                }
            }
            if (!option) {
                for (let i = 0; i <= index.groupIndex; i++) {
                    for (let j = 0; j < ((index.groupIndex === i) ? index.itemIndex : this.optionsToDisplay[i].items.length); j++) {
                        let opt = this.optionsToDisplay[i].items[j];
                        if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                            return opt;
                        }
                    }
                }
            }
        }
        return null;
    }
    findOptionIndex(val, opts) {
        let index = -1;
        if (opts) {
            for (let i = 0; i < opts.length; i++) {
                if ((val == null && opts[i].value == null) || ObjectUtils.equals(val, opts[i].value, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    findOptionGroupIndex(val, opts) {
        let groupIndex, itemIndex;
        if (opts) {
            for (let i = 0; i < opts.length; i++) {
                groupIndex = i;
                itemIndex = this.findOptionIndex(val, opts[i].items);
                if (itemIndex !== -1) {
                    break;
                }
            }
        }
        if (itemIndex !== -1) {
            return { groupIndex: groupIndex, itemIndex: itemIndex };
        }
        else {
            return -1;
        }
    }
    findOption(val, opts, inGroup) {
        if (this.group && !inGroup) {
            let opt;
            if (opts && opts.length) {
                for (let optgroup of opts) {
                    opt = this.findOption(val, optgroup.items, true);
                    if (opt) {
                        break;
                    }
                }
            }
            return opt;
        }
        else {
            let index = this.findOptionIndex(val, opts);
            return (index != -1) ? opts[index] : null;
        }
    }
    onFilter(event) {
        let inputValue = event.target.value;
        if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this.filterValue = null;
            this.optionsToDisplay = this.options;
        }
        this.optionsChanged = true;
    }
    activateFilter() {
        let searchFields = this.filterBy.split(',');
        if (this.options && this.options.length) {
            if (this.group) {
                let filteredGroups = [];
                for (let optgroup of this.options) {
                    let filteredSubOptions = FilterUtils.filter(optgroup.items, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                    if (filteredSubOptions && filteredSubOptions.length) {
                        filteredGroups.push({
                            label: optgroup.label,
                            value: optgroup.value,
                            items: filteredSubOptions
                        });
                    }
                }
                this.optionsToDisplay = filteredGroups;
            }
            else {
                this.optionsToDisplay = FilterUtils.filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
            }
            this.optionsChanged = true;
        }
    }
    applyFocus() {
        if (this.editable)
            DomHandler.findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();
        else
            DomHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
    }
    focus() {
        this.applyFocus();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
                if (this.isOutsideClicked(event)) {
                    this.hide(event);
                    this.unbindDocumentClickListener();
                }
                this.cd.markForCheck();
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
            this.hide(event);
        }
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, (event) => {
                if (this.overlayVisible) {
                    this.hide(event);
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
    updateFilledState() {
        this.filled = (this.selectedOption != null);
    }
    clear(event) {
        this.value = null;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
        this.updateSelectedOption(this.value);
        this.updateEditableLabel();
        this.updateFilledState();
    }
    onOverlayHide() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
        this.overlay = null;
        this.itemsWrapper = null;
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
Dropdown.ɵfac = function Dropdown_Factory(t) { return new (t || Dropdown)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
Dropdown.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Dropdown, selectors: [["p-dropdown"]], contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Dropdown_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.accessibleViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewPort = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.editableInputViewChild = _t.first);
    } }, hostVars: 4, hostBindings: function Dropdown_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused);
    } }, inputs: { scrollHeight: "scrollHeight", filterBy: "filterBy", resetFilterOnHide: "resetFilterOnHide", dropdownIcon: "dropdownIcon", autoDisplayFirst: "autoDisplayFirst", emptyFilterMessage: "emptyFilterMessage", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", filterMatchMode: "filterMatchMode", tooltip: "tooltip", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", autofocusFilter: "autofocusFilter", disabled: "disabled", options: "options", filter: "filter", name: "name", style: "style", panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", readonly: "readonly", required: "required", editable: "editable", appendTo: "appendTo", tabindex: "tabindex", placeholder: "placeholder", filterPlaceholder: "filterPlaceholder", filterLocale: "filterLocale", inputId: "inputId", selectId: "selectId", dataKey: "dataKey", autofocus: "autofocus", optionLabel: "optionLabel", group: "group", showClear: "showClear", virtualScroll: "virtualScroll", itemSize: "itemSize", ariaFilterLabel: "ariaFilterLabel", ariaLabelledBy: "ariaLabelledBy", maxlength: "maxlength", tooltipStyleClass: "tooltipStyleClass" }, outputs: { onChange: "onChange", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onShow: "onShow", onHide: "onHide" }, features: [ɵngcc0.ɵɵProvidersFeature([DROPDOWN_VALUE_ACCESSOR])], decls: 12, vars: 23, consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", "aria-haspopup", "listbox", "role", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "text", "class", "p-dropdown-label p-inputtext", "aria-haspopup", "listbox", 3, "disabled", "click", "input", "focus", "blur", 4, "ngIf"], ["class", "p-dropdown-clear-icon pi pi-times", 3, "click", 4, "ngIf"], ["role", "button", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["type", "text", "aria-haspopup", "listbox", 1, "p-dropdown-label", "p-inputtext", 3, "disabled", "click", "input", "focus", "blur"], ["editableInput", ""], [1, "p-dropdown-clear-icon", "pi", "pi-times", 3, "click"], [3, "ngClass", "ngStyle"], ["class", "p-dropdown-header", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], ["role", "listbox", 1, "p-dropdown-items"], ["itemslist", ""], ["class", "p-dropdown-empty-message", 4, "ngIf"], [1, "p-dropdown-header"], [1, "p-dropdown-filter-container", 3, "click"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "value", "keydown.enter", "keydown", "input"], ["filter", ""], [1, "p-dropdown-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [1, "p-dropdown-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], [3, "option", "selected", "template", "onClick"], [3, "ngStyle", "itemSize", "scrolledIndexChange", 4, "ngIf"], [3, "ngStyle", "itemSize", "scrolledIndexChange"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "p-dropdown-empty-message"]], template: function Dropdown_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function Dropdown_Template_div_click_0_listener($event) { return ctx.onMouseclick($event); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("focus", function Dropdown_Template_input_focus_3_listener($event) { return ctx.onInputFocus($event); })("blur", function Dropdown_Template_input_blur_3_listener($event) { return ctx.onInputBlur($event); })("keydown", function Dropdown_Template_input_keydown_3_listener($event) { return ctx.onKeydown($event, true); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, Dropdown_span_5_Template, 3, 12, "span", 5);
        ɵngcc0.ɵɵtemplate(6, Dropdown_span_6_Template, 2, 4, "span", 6);
        ɵngcc0.ɵɵtemplate(7, Dropdown_input_7_Template, 2, 5, "input", 7);
        ɵngcc0.ɵɵtemplate(8, Dropdown_i_8_Template, 1, 0, "i", 8);
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelement(10, "span", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, Dropdown_div_11_Template, 9, 16, "div", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(18, _c12, ctx.disabled, ctx.overlayVisible, ctx.focused, ctx.showClear && !ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("aria-label", ctx.selectedOption ? ctx.selectedOption.label : " ")("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy)("tabindex", ctx.tabindex)("autofocus", ctx.autofocus);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editable && ctx.label != null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editable && ctx.label == null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.editable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.value != null && ctx.showClear && !ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.overlayVisible);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dropdownIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc3.Tooltip, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, DropdownItem, ɵngcc4.CdkVirtualScrollViewport, ɵngcc4.CdkFixedSizeVirtualScroll, ɵngcc4.CdkVirtualForOf], styles: [".p-dropdown{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{-ms-flex:1 1 auto;cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:-ms-flexbox;display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"], encapsulation: 2, data: { animation: [
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
Dropdown.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
Dropdown.propDecorators = {
    scrollHeight: [{ type: Input }],
    filter: [{ type: Input }],
    name: [{ type: Input }],
    style: [{ type: Input }],
    panelStyle: [{ type: Input }],
    styleClass: [{ type: Input }],
    panelStyleClass: [{ type: Input }],
    readonly: [{ type: Input }],
    required: [{ type: Input }],
    editable: [{ type: Input }],
    appendTo: [{ type: Input }],
    tabindex: [{ type: Input }],
    placeholder: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    filterLocale: [{ type: Input }],
    inputId: [{ type: Input }],
    selectId: [{ type: Input }],
    dataKey: [{ type: Input }],
    filterBy: [{ type: Input }],
    autofocus: [{ type: Input }],
    resetFilterOnHide: [{ type: Input }],
    dropdownIcon: [{ type: Input }],
    optionLabel: [{ type: Input }],
    autoDisplayFirst: [{ type: Input }],
    group: [{ type: Input }],
    showClear: [{ type: Input }],
    emptyFilterMessage: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    itemSize: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    ariaFilterLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    filterMatchMode: [{ type: Input }],
    maxlength: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    tooltipPositionStyle: [{ type: Input }],
    tooltipStyleClass: [{ type: Input }],
    autofocusFilter: [{ type: Input }],
    onChange: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onClick: [{ type: Output }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    filterViewChild: [{ type: ViewChild, args: ['filter',] }],
    accessibleViewChild: [{ type: ViewChild, args: ['in',] }],
    viewPort: [{ type: ViewChild, args: [CdkVirtualScrollViewport,] }],
    editableInputViewChild: [{ type: ViewChild, args: ['editableInput',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    disabled: [{ type: Input }],
    options: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Dropdown, [{
        type: Component,
        args: [{
                selector: 'p-dropdown',
                template: `
         <div #container [ngClass]="{'p-dropdown p-component':true,
            'p-disabled':disabled, 'p-dropdown-open':overlayVisible, 'p-focus':focused, 'p-dropdown-clearable': showClear && !disabled}"
            (click)="onMouseclick($event)" [ngStyle]="style" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input #in [attr.id]="inputId" type="text" [attr.aria-label]="selectedOption ? selectedOption.label : ' '" readonly (focus)="onInputFocus($event)" aria-haspopup="listbox"
                    aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" [attr.aria-labelledby]="ariaLabelledBy" (blur)="onInputBlur($event)" (keydown)="onKeydown($event, true)"
                    [disabled]="disabled" [attr.tabindex]="tabindex" [attr.autofocus]="autofocus" role="listbox">
            </div>
            <span [ngClass]="{'p-dropdown-label p-inputtext':true,'p-dropdown-label-empty':(label == null || label.length === 0)}" *ngIf="!editable && (label != null)" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <ng-container *ngIf="!selectedItemTemplate">{{label||'empty'}}</ng-container>
                <ng-container *ngTemplateOutlet="selectedItemTemplate; context: {$implicit: selectedOption}"></ng-container>
            </span>
            <span [ngClass]="{'p-dropdown-label p-inputtext p-placeholder':true,'p-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}" *ngIf="!editable && (label == null)">{{placeholder||'empty'}}</span>
            <input #editableInput type="text" [attr.maxlength]="maxlength" [attr.aria-label]="selectedOption ? selectedOption.label : ' '" class="p-dropdown-label p-inputtext" *ngIf="editable" [disabled]="disabled" [attr.placeholder]="placeholder"
                aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" (click)="onEditableInputClick()" (input)="onEditableInputChange($event)" (focus)="onEditableInputFocus($event)" (blur)="onInputBlur($event)">
            <i class="p-dropdown-clear-icon pi pi-times" (click)="clear($event)" *ngIf="value != null && showClear && !disabled"></i>
            <div class="p-dropdown-trigger" role="button" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible">
                <span class="p-dropdown-trigger-icon" [ngClass]="dropdownIcon"></span>
            </div>
            <div *ngIf="overlayVisible" [ngClass]="'p-dropdown-panel p-component'" [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" [ngStyle]="panelStyle" [class]="panelStyleClass">
                <div class="p-dropdown-header" *ngIf="filter" >
                    <div class="p-dropdown-filter-container" (click)="$event.stopPropagation()">
                        <input #filter type="text" autocomplete="off" [value]="filterValue||''" class="p-dropdown-filter p-inputtext p-component" [attr.placeholder]="filterPlaceholder"
                        (keydown.enter)="$event.preventDefault()" (keydown)="onKeydown($event, false)" (input)="onFilter($event)" [attr.aria-label]="ariaFilterLabel">
                        <span class="p-dropdown-filter-icon pi pi-search"></span>
                    </div>
                </div>
                <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : (scrollHeight||'auto')">
                    <ul class="p-dropdown-items" role="listbox">
                        <ng-container *ngIf="group">
                            <ng-template ngFor let-optgroup [ngForOf]="optionsToDisplay">
                                <li class="p-dropdown-item-group">
                                    <span *ngIf="!groupTemplate">{{optgroup.label||'empty'}}</span>
                                    <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>
                                </li>
                                <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: optgroup.items, selectedOption: selectedOption}"></ng-container>
                            </ng-template>
                        </ng-container>
                        <ng-container *ngIf="!group">
                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}"></ng-container>
                        </ng-container>
                        <ng-template #itemslist let-options let-selectedOption="selectedOption">
                            <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                                <ng-template ngFor let-option let-i="index" [ngForOf]="options">
                                    <p-dropdownItem [option]="option" [selected]="selectedOption == option"
                                                    (onClick)="onItemClick($event)"
                                                    [template]="itemTemplate"></p-dropdownItem>
                                </ng-template>
                            </ng-container>
                            <ng-template #virtualScrollList>
                                <cdk-virtual-scroll-viewport (scrolledIndexChange)="scrollToSelectedVirtualScrollElement()" #viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && optionsToDisplay && optionsToDisplay.length">
                                    <ng-container *cdkVirtualFor="let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">
                                        <p-dropdownItem [option]="option" [selected]="selectedOption == option"
                                                                   (onClick)="onItemClick($event)"
                                                                   [template]="itemTemplate"></p-dropdownItem>
                                    </ng-container>
                                </cdk-virtual-scroll-viewport>
                            </ng-template>
                        </ng-template>
                        <li *ngIf="filter && (!optionsToDisplay || (optionsToDisplay && optionsToDisplay.length === 0))" class="p-dropdown-empty-message">{{emptyFilterMessage}}</li>
                    </ul>
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
                    '[class.p-inputwrapper-focus]': 'focused'
                },
                providers: [DROPDOWN_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-dropdown{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{-ms-flex:1 1 auto;cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:-ms-flexbox;display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { scrollHeight: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], resetFilterOnHide: [{
            type: Input
        }], dropdownIcon: [{
            type: Input
        }], autoDisplayFirst: [{
            type: Input
        }], emptyFilterMessage: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
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
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], disabled: [{
            type: Input
        }], options: [{
            type: Input
        }], filter: [{
            type: Input
        }], name: [{
            type: Input
        }], style: [{
            type: Input
        }], panelStyle: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], panelStyleClass: [{
            type: Input
        }], readonly: [{
            type: Input
        }], required: [{
            type: Input
        }], editable: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], filterPlaceholder: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], inputId: [{
            type: Input
        }], selectId: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], group: [{
            type: Input
        }], showClear: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], ariaFilterLabel: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], tooltipStyleClass: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], filterViewChild: [{
            type: ViewChild,
            args: ['filter']
        }], accessibleViewChild: [{
            type: ViewChild,
            args: ['in']
        }], viewPort: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }], editableInputViewChild: [{
            type: ViewChild,
            args: ['editableInput']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class DropdownModule {
}
DropdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DropdownModule });
DropdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DropdownModule_Factory(t) { return new (t || DropdownModule)(); }, imports: [[CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DropdownModule, { declarations: function () { return [Dropdown, DropdownItem]; }, imports: function () { return [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule]; }, exports: function () { return [Dropdown, SharedModule, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule],
                exports: [Dropdown, SharedModule, ScrollingModule],
                declarations: [Dropdown, DropdownItem]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLHdCQUF3QixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDakYsT0FBTyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFrRSxLQUFLLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUN4SSxTQUFTLEVBQWEsVUFBVSxFQUFDLGlCQUFpQixFQUFDLE1BQU0sRUFBUyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNySixPQUFPLEVBQUMsT0FBTyxFQUFPLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFnQixNQUFNLHFCQUFxQixDQUFDO0FBQzFGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFFLDZCQUE2QixFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFDLGlCQUFpQixFQUF1QixNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUMsWUFBWSxDQUFDLGNBQ3hDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2Nyb2xsaW5nTW9kdWxlLCBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixPbkluaXQsQWZ0ZXJWaWV3SW5pdCxBZnRlckNvbnRlbnRJbml0LEFmdGVyVmlld0NoZWNrZWQsT25EZXN0cm95LElucHV0LE91dHB1dCxSZW5kZXJlcjIsRXZlbnRFbWl0dGVyLENvbnRlbnRDaGlsZHJlbixcbiAgICAgICAgUXVlcnlMaXN0LFZpZXdDaGlsZCxUZW1wbGF0ZVJlZixmb3J3YXJkUmVmLENoYW5nZURldGVjdG9yUmVmLE5nWm9uZSxWaWV3UmVmLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RyaWdnZXIsc3RhdGUsc3R5bGUsdHJhbnNpdGlvbixhbmltYXRlLEFuaW1hdGlvbkV2ZW50fSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1NoYXJlZE1vZHVsZSxQcmltZVRlbXBsYXRlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge0RvbUhhbmRsZXIsIENvbm5lY3RlZE92ZXJsYXlTY3JvbGxIYW5kbGVyfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQge09iamVjdFV0aWxzfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0ZpbHRlclV0aWxzfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7VG9vbHRpcE1vZHVsZX0gZnJvbSAncHJpbWVuZy90b29sdGlwJztcbmltcG9ydCB7UmlwcGxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5cbmV4cG9ydCBjb25zdCBEUk9QRE9XTl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd24pLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWRyb3Bkb3duSXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGxpIChjbGljayk9XCJvbk9wdGlvbkNsaWNrKCRldmVudClcIiByb2xlPVwib3B0aW9uXCIgcFJpcHBsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJvcHRpb24ubGFiZWxcIiBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogaXRlbVNpemUgKyAncHgnfVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtZHJvcGRvd24taXRlbSc6dHJ1ZSwgJ3AtaGlnaGxpZ2h0Jzogc2VsZWN0ZWQsICdwLWRpc2FibGVkJzoob3B0aW9uLmRpc2FibGVkKX1cIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCI+e3tvcHRpb24ubGFiZWx8fCdlbXB0eSd9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogb3B0aW9ufVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2xpPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25JdGVtIHtcblxuICAgIEBJbnB1dCgpIG9wdGlvbjogU2VsZWN0SXRlbTtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgaXRlbVNpemU6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgb25PcHRpb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICBvcHRpb246IHRoaXMub3B0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWRyb3Bkb3duJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgPGRpdiAjY29udGFpbmVyIFtuZ0NsYXNzXT1cInsncC1kcm9wZG93biBwLWNvbXBvbmVudCc6dHJ1ZSxcbiAgICAgICAgICAgICdwLWRpc2FibGVkJzpkaXNhYmxlZCwgJ3AtZHJvcGRvd24tb3Blbic6b3ZlcmxheVZpc2libGUsICdwLWZvY3VzJzpmb2N1c2VkLCAncC1kcm9wZG93bi1jbGVhcmFibGUnOiBzaG93Q2xlYXIgJiYgIWRpc2FibGVkfVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25Nb3VzZWNsaWNrKCRldmVudClcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjaW4gW2F0dHIuaWRdPVwiaW5wdXRJZFwiIHR5cGU9XCJ0ZXh0XCIgW2F0dHIuYXJpYS1sYWJlbF09XCJzZWxlY3RlZE9wdGlvbiA/IHNlbGVjdGVkT3B0aW9uLmxhYmVsIDogJyAnXCIgcmVhZG9ubHkgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCIgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwib3ZlcmxheVZpc2libGVcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIiAoYmx1cik9XCJvbklucHV0Qmx1cigkZXZlbnQpXCIgKGtleWRvd24pPVwib25LZXlkb3duKCRldmVudCwgdHJ1ZSlcIlxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiIFthdHRyLmF1dG9mb2N1c109XCJhdXRvZm9jdXNcIiByb2xlPVwibGlzdGJveFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3AtZHJvcGRvd24tbGFiZWwgcC1pbnB1dHRleHQnOnRydWUsJ3AtZHJvcGRvd24tbGFiZWwtZW1wdHknOihsYWJlbCA9PSBudWxsIHx8IGxhYmVsLmxlbmd0aCA9PT0gMCl9XCIgKm5nSWY9XCIhZWRpdGFibGUgJiYgKGxhYmVsICE9IG51bGwpXCIgW3BUb29sdGlwXT1cInRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiIFtwb3NpdGlvblN0eWxlXT1cInRvb2x0aXBQb3NpdGlvblN0eWxlXCIgW3Rvb2x0aXBTdHlsZUNsYXNzXT1cInRvb2x0aXBTdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzZWxlY3RlZEl0ZW1UZW1wbGF0ZVwiPnt7bGFiZWx8fCdlbXB0eSd9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzZWxlY3RlZEl0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogc2VsZWN0ZWRPcHRpb259XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3AtZHJvcGRvd24tbGFiZWwgcC1pbnB1dHRleHQgcC1wbGFjZWhvbGRlcic6dHJ1ZSwncC1kcm9wZG93bi1sYWJlbC1lbXB0eSc6IChwbGFjZWhvbGRlciA9PSBudWxsIHx8IHBsYWNlaG9sZGVyLmxlbmd0aCA9PT0gMCl9XCIgKm5nSWY9XCIhZWRpdGFibGUgJiYgKGxhYmVsID09IG51bGwpXCI+e3twbGFjZWhvbGRlcnx8J2VtcHR5J319PC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0ICNlZGl0YWJsZUlucHV0IHR5cGU9XCJ0ZXh0XCIgW2F0dHIubWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiIFthdHRyLmFyaWEtbGFiZWxdPVwic2VsZWN0ZWRPcHRpb24gPyBzZWxlY3RlZE9wdGlvbi5sYWJlbCA6ICcgJ1wiIGNsYXNzPVwicC1kcm9wZG93bi1sYWJlbCBwLWlucHV0dGV4dFwiICpuZ0lmPVwiZWRpdGFibGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlXCIgKGNsaWNrKT1cIm9uRWRpdGFibGVJbnB1dENsaWNrKClcIiAoaW5wdXQpPVwib25FZGl0YWJsZUlucHV0Q2hhbmdlKCRldmVudClcIiAoZm9jdXMpPVwib25FZGl0YWJsZUlucHV0Rm9jdXMoJGV2ZW50KVwiIChibHVyKT1cIm9uSW5wdXRCbHVyKCRldmVudClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwicC1kcm9wZG93bi1jbGVhci1pY29uIHBpIHBpLXRpbWVzXCIgKGNsaWNrKT1cImNsZWFyKCRldmVudClcIiAqbmdJZj1cInZhbHVlICE9IG51bGwgJiYgc2hvd0NsZWFyICYmICFkaXNhYmxlZFwiPjwvaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRyb3Bkb3duLXRyaWdnZXJcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWRyb3Bkb3duLXRyaWdnZXItaWNvblwiIFtuZ0NsYXNzXT1cImRyb3Bkb3duSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm92ZXJsYXlWaXNpYmxlXCIgW25nQ2xhc3NdPVwiJ3AtZHJvcGRvd24tcGFuZWwgcC1jb21wb25lbnQnXCIgW0BvdmVybGF5QW5pbWF0aW9uXT1cInt2YWx1ZTogJ3Zpc2libGUnLCBwYXJhbXM6IHtzaG93VHJhbnNpdGlvblBhcmFtczogc2hvd1RyYW5zaXRpb25PcHRpb25zLCBoaWRlVHJhbnNpdGlvblBhcmFtczogaGlkZVRyYW5zaXRpb25PcHRpb25zfX1cIiAoQG92ZXJsYXlBbmltYXRpb24uc3RhcnQpPVwib25PdmVybGF5QW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiIFtuZ1N0eWxlXT1cInBhbmVsU3R5bGVcIiBbY2xhc3NdPVwicGFuZWxTdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZHJvcGRvd24taGVhZGVyXCIgKm5nSWY9XCJmaWx0ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRyb3Bkb3duLWZpbHRlci1jb250YWluZXJcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2ZpbHRlciB0eXBlPVwidGV4dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFt2YWx1ZV09XCJmaWx0ZXJWYWx1ZXx8JydcIiBjbGFzcz1cInAtZHJvcGRvd24tZmlsdGVyIHAtaW5wdXR0ZXh0IHAtY29tcG9uZW50XCIgW2F0dHIucGxhY2Vob2xkZXJdPVwiZmlsdGVyUGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIiAoa2V5ZG93bik9XCJvbktleWRvd24oJGV2ZW50LCBmYWxzZSlcIiAoaW5wdXQpPVwib25GaWx0ZXIoJGV2ZW50KVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUZpbHRlckxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtZHJvcGRvd24tZmlsdGVyLWljb24gcGkgcGktc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kcm9wZG93bi1pdGVtcy13cmFwcGVyXCIgW3N0eWxlLm1heC1oZWlnaHRdPVwidmlydHVhbFNjcm9sbCA/ICdhdXRvJyA6IChzY3JvbGxIZWlnaHR8fCdhdXRvJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicC1kcm9wZG93bi1pdGVtc1wiIHJvbGU9XCJsaXN0Ym94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW9wdGdyb3VwIFtuZ0Zvck9mXT1cIm9wdGlvbnNUb0Rpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicC1kcm9wZG93bi1pdGVtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFncm91cFRlbXBsYXRlXCI+e3tvcHRncm91cC5sYWJlbHx8J2VtcHR5J319PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImdyb3VwVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IG9wdGdyb3VwfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbXNsaXN0OyBjb250ZXh0OiB7JGltcGxpY2l0OiBvcHRncm91cC5pdGVtcywgc2VsZWN0ZWRPcHRpb246IHNlbGVjdGVkT3B0aW9ufVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbXNsaXN0OyBjb250ZXh0OiB7JGltcGxpY2l0OiBvcHRpb25zVG9EaXNwbGF5LCBzZWxlY3RlZE9wdGlvbjogc2VsZWN0ZWRPcHRpb259XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaXRlbXNsaXN0IGxldC1vcHRpb25zIGxldC1zZWxlY3RlZE9wdGlvbj1cInNlbGVjdGVkT3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF2aXJ0dWFsU2Nyb2xsOyBlbHNlIHZpcnR1YWxTY3JvbGxMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtb3B0aW9uIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JPZl09XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bkl0ZW0gW29wdGlvbl09XCJvcHRpb25cIiBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRPcHRpb24gPT0gb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbVRlbXBsYXRlXCI+PC9wLWRyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3ZpcnR1YWxTY3JvbGxMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IChzY3JvbGxlZEluZGV4Q2hhbmdlKT1cInNjcm9sbFRvU2VsZWN0ZWRWaXJ0dWFsU2Nyb2xsRWxlbWVudCgpXCIgI3ZpZXdwb3J0IFtuZ1N0eWxlXT1cInsnaGVpZ2h0Jzogc2Nyb2xsSGVpZ2h0fVwiIFtpdGVtU2l6ZV09XCJpdGVtU2l6ZVwiICpuZ0lmPVwidmlydHVhbFNjcm9sbCAmJiBvcHRpb25zVG9EaXNwbGF5ICYmIG9wdGlvbnNUb0Rpc3BsYXkubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zOyBsZXQgaSA9IGluZGV4OyBsZXQgYyA9IGNvdW50OyBsZXQgZiA9IGZpcnN0OyBsZXQgbCA9IGxhc3Q7IGxldCBlID0gZXZlbjsgbGV0IG8gPSBvZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bkl0ZW0gW29wdGlvbl09XCJvcHRpb25cIiBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRPcHRpb24gPT0gb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbVRlbXBsYXRlXCI+PC9wLWRyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImZpbHRlciAmJiAoIW9wdGlvbnNUb0Rpc3BsYXkgfHwgKG9wdGlvbnNUb0Rpc3BsYXkgJiYgb3B0aW9uc1RvRGlzcGxheS5sZW5ndGggPT09IDApKVwiIGNsYXNzPVwicC1kcm9wZG93bi1lbXB0eS1tZXNzYWdlXCI+e3tlbXB0eUZpbHRlck1lc3NhZ2V9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ292ZXJsYXlBbmltYXRpb24nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJ30pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJ3t7c2hvd1RyYW5zaXRpb25QYXJhbXN9fScpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCd7e2hpZGVUcmFuc2l0aW9uUGFyYW1zfX0nLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZpbGxlZF0nOiAnZmlsbGVkJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0d3JhcHBlci1mb2N1c10nOiAnZm9jdXNlZCdcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW0RST1BET1dOX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duIGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQsQWZ0ZXJDb250ZW50SW5pdCxBZnRlclZpZXdDaGVja2VkLE9uRGVzdHJveSxDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBzY3JvbGxIZWlnaHQ6IHN0cmluZyA9ICcyMDBweCc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgcGFuZWxTdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcGFuZWxTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBhcHBlbmRUbzogYW55O1xuXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJQbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZmlsdGVyTG9jYWxlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzZWxlY3RJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZGF0YUtleTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZmlsdGVyQnk6IHN0cmluZyA9ICdsYWJlbCc7XG5cbiAgICBASW5wdXQoKSBhdXRvZm9jdXM6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSByZXNldEZpbHRlck9uSGlkZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgZHJvcGRvd25JY29uOiBzdHJpbmcgPSAncGkgcGktY2hldnJvbi1kb3duJztcblxuICAgIEBJbnB1dCgpIG9wdGlvbkxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhdXRvRGlzcGxheUZpcnN0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGdyb3VwOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2hvd0NsZWFyOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZW1wdHlGaWx0ZXJNZXNzYWdlOiBzdHJpbmcgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG5cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgaXRlbVNpemU6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGF1dG9aSW5kZXg6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgYmFzZVpJbmRleDogbnVtYmVyID0gMDtcblxuICAgIEBJbnB1dCgpIHNob3dUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xMnMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xuXG4gICAgQElucHV0KCkgaGlkZVRyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnLjFzIGxpbmVhcic7XG5cbiAgICBASW5wdXQoKSBhcmlhRmlsdGVyTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJNYXRjaE1vZGU6IHN0cmluZyA9IFwiY29udGFpbnNcIjtcblxuICAgIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nID0gJyc7XG5cbiAgICBASW5wdXQoKSB0b29sdGlwUG9zaXRpb246IHN0cmluZyA9ICdyaWdodCc7XG5cbiAgICBASW5wdXQoKSB0b29sdGlwUG9zaXRpb25TdHlsZTogc3RyaW5nID0gJ2Fic29sdXRlJztcblxuICAgIEBJbnB1dCgpIHRvb2x0aXBTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhdXRvZm9jdXNGaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uU2hvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25IaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2ZpbHRlcicpIGZpbHRlclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2luJykgYWNjZXNzaWJsZVZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KSB2aWV3UG9ydDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xuXG4gICAgQFZpZXdDaGlsZCgnZWRpdGFibGVJbnB1dCcpIGVkaXRhYmxlSW5wdXRWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH07XG5cbiAgICBzZXQgZGlzYWJsZWQoX2Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChfZGlzYWJsZWQpXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IF9kaXNhYmxlZDtcbiAgICAgICAgaWYgKCEodGhpcy5jZCBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3ZlcmxheTogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBpdGVtc1dyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZ3JvdXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHNlbGVjdGVkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgc2VsZWN0ZWRPcHRpb246IGFueTtcblxuICAgIF9vcHRpb25zOiBhbnlbXTtcblxuICAgIHZhbHVlOiBhbnk7XG5cbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvcHRpb25zVG9EaXNwbGF5OiBhbnlbXTtcblxuICAgIGhvdmVyOiBib29sZWFuO1xuXG4gICAgZm9jdXNlZDogYm9vbGVhbjtcblxuICAgIGZpbGxlZDogYm9vbGVhbjtcblxuICAgIG92ZXJsYXlWaXNpYmxlOiBib29sZWFuO1xuXG4gICAgZG9jdW1lbnRDbGlja0xpc3RlbmVyOiBhbnk7XG5cbiAgICBzY3JvbGxIYW5kbGVyOiBhbnk7XG5cbiAgICBvcHRpb25zQ2hhbmdlZDogYm9vbGVhbjtcblxuICAgIHBhbmVsOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGRpbWVuc2lvbnNVcGRhdGVkOiBib29sZWFuO1xuXG4gICAgaG92ZXJlZEl0ZW06IGFueTtcblxuICAgIHNlbGVjdGVkT3B0aW9uVXBkYXRlZDogYm9vbGVhbjtcblxuICAgIGZpbHRlclZhbHVlOiBzdHJpbmc7XG5cbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nO1xuXG4gICAgc2VhcmNoSW5kZXg6IG51bWJlcjtcblxuICAgIHNlYXJjaFRpbWVvdXQ6IGFueTtcblxuICAgIHByZXZpb3VzU2VhcmNoQ2hhcjogc3RyaW5nO1xuXG4gICAgY3VycmVudFNlYXJjaENoYXI6IHN0cmluZztcblxuICAgIGRvY3VtZW50UmVzaXplTGlzdGVuZXI6IGFueTtcblxuICAgIHZpcnR1YWxBdXRvU2Nyb2xsZWQ6IGJvb2xlYW47XG5cbiAgICB2aXJ0dWFsU2Nyb2xsU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuXG4gICAgdmlld1BvcnRPZmZzZXRUb3A6IG51bWJlciA9IDA7XG5cbiAgICBwcmV2ZW50TW9kZWxUb3VjaGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHpvbmU6IE5nWm9uZSkge31cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdGVkSXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JvdXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zVG9EaXNwbGF5ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKG51bGwpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBvcHRpb25zKCk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0IG9wdGlvbnModmFsOiBhbnlbXSkge1xuICAgICAgICBsZXQgb3B0cyA9IHRoaXMub3B0aW9uTGFiZWwgPyBPYmplY3RVdGlscy5nZW5lcmF0ZVNlbGVjdEl0ZW1zKHZhbCwgdGhpcy5vcHRpb25MYWJlbCkgOiB2YWw7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRzO1xuICAgICAgICB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkgPSB0aGlzLl9vcHRpb25zO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9wdGlvbnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWxsZWRTdGF0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlICYmIHRoaXMuZmlsdGVyVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKcKge1xuICAgICAgICBpZiAodGhpcy5lZGl0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0YWJsZUxhYmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNlbGVjdGVkT3B0aW9uID8gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbCA6IG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVkaXRhYmxlTGFiZWwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRhYmxlSW5wdXRWaWV3Q2hpbGQgJiYgdGhpcy5lZGl0YWJsZUlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdGFibGVJbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnZhbHVlID0gKHRoaXMuc2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsIDogdGhpcy52YWx1ZXx8JycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZXZlbnQub3B0aW9uO1xuXG4gICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIG9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLmFjY2Vzc2libGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoZXZlbnQpO1xuICAgICAgICB9LCAxNTApO1xuICAgIH1cblxuICAgIHNlbGVjdEl0ZW0oZXZlbnQsIG9wdGlvbikge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiAhPSBvcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5maWxsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRhYmxlTGFiZWwoKTtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydE9mZnNldFRvcCA9IHRoaXMudmlld1BvcnQgPyB0aGlzLnZpZXdQb3J0Lm1lYXN1cmVTY3JvbGxPZmZzZXQoKSA6IDA7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNDaGFuZ2VkICYmIHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmlydHVhbFNjcm9sbFNlbGVjdGVkSW5kZXgodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25PdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uVXBkYXRlZCAmJiB0aGlzLml0ZW1zV3JhcHBlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCAmJiB0aGlzLnZpZXdQb3J0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlID0gdGhpcy52aWV3UG9ydC5nZXRSZW5kZXJlZFJhbmdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaXJ0dWFsU2Nyb2xsU2VsZWN0ZWRJbmRleChmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmFuZ2Uuc3RhcnQgPiB0aGlzLnZpcnR1YWxTY3JvbGxTZWxlY3RlZEluZGV4IHx8IHJhbmdlLmVuZCA8IHRoaXMudmlydHVhbFNjcm9sbFNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydC5zY3JvbGxUb0luZGV4KHRoaXMudmlydHVhbFNjcm9sbFNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLm92ZXJsYXksICdsaS5wLWhpZ2hsaWdodCcpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuc2Nyb2xsSW5WaWV3KHRoaXMuaXRlbXNXcmFwcGVyLCBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5vdmVybGF5LCAnbGkucC1oaWdobGlnaHQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uVXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKHZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0YWJsZUxhYmVsKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZXNldEZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmlld0NoaWxkICYmIHRoaXMuZmlsdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9uc1RvRGlzcGxheSA9IHRoaXMub3B0aW9ucztcbiAgICB9XG5cbiAgICB1cGRhdGVTZWxlY3RlZE9wdGlvbih2YWw6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHZhbCwgdGhpcy5vcHRpb25zVG9EaXNwbGF5KTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0Rpc3BsYXlGaXJzdCAmJiAhdGhpcy5wbGFjZWhvbGRlciAmJiAhdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkgJiYgdGhpcy5vcHRpb25zVG9EaXNwbGF5Lmxlbmd0aCAmJiAhdGhpcy5lZGl0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9uc1RvRGlzcGxheVswXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uVXBkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIG9uTW91c2VjbGljayhldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5IHx8IHRoaXMuaXNJbnB1dENsaWNrKGV2ZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICB0aGlzLmFjY2Vzc2libGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKVxuICAgICAgICAgICAgdGhpcy5oaWRlKGV2ZW50KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgaXNJbnB1dENsaWNrKGV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBEb21IYW5kbGVyLmhhc0NsYXNzKGV2ZW50LnRhcmdldCwgJ3AtZHJvcGRvd24tY2xlYXItaWNvbicpIHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQuaXNTYW1lTm9kZSh0aGlzLmFjY2Vzc2libGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkgfHxcbiAgICAgICAgICAgICh0aGlzLmVkaXRhYmxlSW5wdXRWaWV3Q2hpbGQgJiYgZXZlbnQudGFyZ2V0LmlzU2FtZU5vZGUodGhpcy5lZGl0YWJsZUlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBpc091dHNpZGVDbGlja2VkKGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaXNTYW1lTm9kZShldmVudC50YXJnZXQpIHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpIHx8ICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5LmNvbnRhaW5zKDxOb2RlPiBldmVudC50YXJnZXQpKSk7XG4gICAgfVxuXG4gICAgb25FZGl0YWJsZUlucHV0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIG9uRWRpdGFibGVJbnB1dEZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGlkZShldmVudCk7XG4gICAgICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkVkaXRhYmxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbih0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbk92ZXJsYXlBbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50b1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkgPSBldmVudC5lbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBpdGVtc1dyYXBwZXJTZWxlY3RvciA9IHRoaXMudmlydHVhbFNjcm9sbCA/ICcuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0JyA6ICcucC1kcm9wZG93bi1pdGVtcy13cmFwcGVyJztcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zV3JhcHBlciA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLm92ZXJsYXksIGl0ZW1zV3JhcHBlclNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvWkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgKCsrRG9tSGFuZGxlci56aW5kZXgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hbGlnbk92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGlzdEl0ZW0gPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5pdGVtc1dyYXBwZXIsICcucC1kcm9wZG93bi1pdGVtLnAtaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRMaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuc2Nyb2xsSW5WaWV3KHRoaXMuaXRlbXNXcmFwcGVyLCBzZWxlY3RlZExpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlclZpZXdDaGlsZCAmJiB0aGlzLmZpbHRlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmVudE1vZGVsVG91Y2hlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b2ZvY3VzRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uU2hvdy5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd2b2lkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9TZWxlY3RlZFZpcnR1YWxTY3JvbGxFbGVtZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlydHVhbEF1dG9TY3JvbGxlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlld1BvcnRPZmZzZXRUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdQb3J0LnNjcm9sbFRvT2Zmc2V0KHRoaXMudmlld1BvcnRPZmZzZXRUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsU2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydC5zY3JvbGxUb0luZGV4KHRoaXMudmlydHVhbFNjcm9sbFNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aXJ0dWFsQXV0b1Njcm9sbGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2VsZWN0ZWRJbmRleChyZXNldE9mZnNldCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkgJiYgdGhpcy5vcHRpb25zVG9EaXNwbGF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydE9mZnNldFRvcCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbFNlbGVjdGVkSW5kZXggPSB0aGlzLmZpbmRPcHRpb25JbmRleCh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kT3ZlcmxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvID09PSAnYm9keScpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5LCB0aGlzLmFwcGVuZFRvKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXkuc3R5bGUubWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUubWluV2lkdGggPSBEb21IYW5kbGVyLmdldFdpZHRoKHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVPdmVybGF5QXBwZW5kKCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5ICYmIHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShldmVudCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyICYmIHRoaXMucmVzZXRGaWx0ZXJPbkhpZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgIHRoaXMudmlydHVhbEF1dG9TY3JvbGxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5vbkhpZGUuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgYWxpZ25PdmVybGF5KCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbylcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFic29sdXRlUG9zaXRpb24odGhpcy5vdmVybGF5LCB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbGF0aXZlUG9zaXRpb24odGhpcy5vdmVybGF5LCB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25CbHVyLmVtaXQoZXZlbnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50TW9kZWxUb3VjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2ZW50TW9kZWxUb3VjaGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZmluZFByZXZFbmFibGVkT3B0aW9uKGluZGV4KSB7XG4gICAgICAgIGxldCBwcmV2RW5hYmxlZE9wdGlvbjtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zVG9EaXNwbGF5ICYmIHRoaXMub3B0aW9uc1RvRGlzcGxheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAoaW5kZXggLSAxKTsgMCA8PSBpOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zVG9EaXNwbGF5W2ldO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2RW5hYmxlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXByZXZFbmFibGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMub3B0aW9uc1RvRGlzcGxheS5sZW5ndGggLSAxOyBpID49IGluZGV4IDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVuYWJsZWRPcHRpb24gPSBvcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmV2RW5hYmxlZE9wdGlvbjtcbiAgICB9XG5cbiAgICBmaW5kTmV4dEVuYWJsZWRPcHRpb24oaW5kZXgpIHtcbiAgICAgICAgbGV0IG5leHRFbmFibGVkT3B0aW9uO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNUb0Rpc3BsYXkgJiYgdGhpcy5vcHRpb25zVG9EaXNwbGF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IChpbmRleCArIDEpOyBpbmRleCA8ICh0aGlzLm9wdGlvbnNUb0Rpc3BsYXkubGVuZ3RoIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbaV07XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRFbmFibGVkT3B0aW9uID0gb3B0aW9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbmV4dEVuYWJsZWRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMub3B0aW9uc1RvRGlzcGxheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RW5hYmxlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHRFbmFibGVkT3B0aW9uO1xuICAgIH1cblxuICAgIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgc2VhcmNoOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRvbmx5IHx8ICF0aGlzLm9wdGlvbnNUb0Rpc3BsYXkgfHwgdGhpcy5vcHRpb25zVG9EaXNwbGF5Lmxlbmd0aCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAvL2Rvd25cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkT3B0aW9uID8gdGhpcy5maW5kT3B0aW9uR3JvdXBJbmRleCh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpIDogLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dEl0ZW1JbmRleCA9IHNlbGVjdGVkSXRlbUluZGV4Lml0ZW1JbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRJdGVtSW5kZXggPCAodGhpcy5vcHRpb25zVG9EaXNwbGF5W3NlbGVjdGVkSXRlbUluZGV4Lmdyb3VwSW5kZXhdLml0ZW1zLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGV2ZW50LCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbc2VsZWN0ZWRJdGVtSW5kZXguZ3JvdXBJbmRleF0uaXRlbXNbbmV4dEl0ZW1JbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9uc1RvRGlzcGxheVtzZWxlY3RlZEl0ZW1JbmRleC5ncm91cEluZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGV2ZW50LCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbc2VsZWN0ZWRJdGVtSW5kZXguZ3JvdXBJbmRleCArIDFdLml0ZW1zWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvblVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShldmVudCwgdGhpcy5vcHRpb25zVG9EaXNwbGF5WzBdLml0ZW1zWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gPyB0aGlzLmZpbmRPcHRpb25JbmRleCh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dEVuYWJsZWRPcHRpb24gPSB0aGlzLmZpbmROZXh0RW5hYmxlZE9wdGlvbihzZWxlY3RlZEl0ZW1JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEVuYWJsZWRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIG5leHRFbmFibGVkT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy91cFxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkT3B0aW9uID8gdGhpcy5maW5kT3B0aW9uR3JvdXBJbmRleCh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2SXRlbUluZGV4ID0gc2VsZWN0ZWRJdGVtSW5kZXguaXRlbUluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2SXRlbUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIHRoaXMub3B0aW9uc1RvRGlzcGxheVtzZWxlY3RlZEl0ZW1JbmRleC5ncm91cEluZGV4XS5pdGVtc1twcmV2SXRlbUluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvblVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJldkl0ZW1JbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJldkdyb3VwID0gdGhpcy5vcHRpb25zVG9EaXNwbGF5W3NlbGVjdGVkSXRlbUluZGV4Lmdyb3VwSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShldmVudCwgcHJldkdyb3VwLml0ZW1zW3ByZXZHcm91cC5pdGVtcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25VcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gPyB0aGlzLmZpbmRPcHRpb25JbmRleCh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2RW5hYmxlZE9wdGlvbiA9IHRoaXMuZmluZFByZXZFbmFibGVkT3B0aW9uKHNlbGVjdGVkSXRlbUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZFbmFibGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIHByZXZFbmFibGVkT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25VcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9zcGFjZVxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlWaXNpYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vZW50ZXJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlciB8fCAodGhpcy5vcHRpb25zVG9EaXNwbGF5ICYmIHRoaXMub3B0aW9uc1RvRGlzcGxheS5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9lc2NhcGUgYW5kIHRhYlxuICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoZXZlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vc2VhcmNoIGl0ZW0gYmFzZWQgb24ga2V5Ym9hcmQgaW5wdXRcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2goZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2VhcmNoVGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFyID0gZXZlbnQua2V5O1xuICAgICAgICB0aGlzLnByZXZpb3VzU2VhcmNoQ2hhciA9IHRoaXMuY3VycmVudFNlYXJjaENoYXI7XG4gICAgICAgIHRoaXMuY3VycmVudFNlYXJjaENoYXIgPSBjaGFyO1xuXG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzU2VhcmNoQ2hhciA9PT0gdGhpcy5jdXJyZW50U2VhcmNoQ2hhcilcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB0aGlzLmN1cnJlbnRTZWFyY2hDaGFyO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZSA/IHRoaXMuc2VhcmNoVmFsdWUgKyBjaGFyIDogY2hhcjtcblxuICAgICAgICBsZXQgbmV3T3B0aW9uO1xuICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgbGV0IHNlYXJjaEluZGV4ID0gdGhpcy5zZWxlY3RlZE9wdGlvbiA/IHRoaXMuZmluZE9wdGlvbkdyb3VwSW5kZXgodGhpcy5zZWxlY3RlZE9wdGlvbi52YWx1ZSwgdGhpcy5vcHRpb25zVG9EaXNwbGF5KSA6IHtncm91cEluZGV4OiAwLCBpdGVtSW5kZXg6IDB9O1xuICAgICAgICAgICAgbmV3T3B0aW9uID0gdGhpcy5zZWFyY2hPcHRpb25XaXRoaW5Hcm91cChzZWFyY2hJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoSW5kZXggPSB0aGlzLnNlbGVjdGVkT3B0aW9uID8gdGhpcy5maW5kT3B0aW9uSW5kZXgodGhpcy5zZWxlY3RlZE9wdGlvbi52YWx1ZSwgdGhpcy5vcHRpb25zVG9EaXNwbGF5KSA6IC0xO1xuICAgICAgICAgICAgbmV3T3B0aW9uID0gdGhpcy5zZWFyY2hPcHRpb24oKytzZWFyY2hJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3T3B0aW9uICYmICFuZXdPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShldmVudCwgbmV3T3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25VcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VhcmNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IG51bGw7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxuXG4gICAgc2VhcmNoT3B0aW9uKGluZGV4KSB7XG4gICAgICAgIGxldCBvcHRpb247XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuc2VhcmNoT3B0aW9uSW5SYW5nZShpbmRleCwgdGhpcy5vcHRpb25zVG9EaXNwbGF5Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5zZWFyY2hPcHRpb25JblJhbmdlKDAsIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgc2VhcmNoT3B0aW9uSW5SYW5nZShzdGFydCwgZW5kKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0ID0gdGhpcy5vcHRpb25zVG9EaXNwbGF5W2ldO1xuICAgICAgICAgICAgaWYgKG9wdC5sYWJlbC50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSkuc3RhcnRzV2l0aCgodGhpcy5zZWFyY2hWYWx1ZSBhcyBhbnkpLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuZmlsdGVyTG9jYWxlKSkgJiYgIW9wdC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzZWFyY2hPcHRpb25XaXRoaW5Hcm91cChpbmRleCkge1xuICAgICAgICBsZXQgb3B0aW9uO1xuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXguZ3JvdXBJbmRleDsgaSA8IHRoaXMub3B0aW9uc1RvRGlzcGxheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAoaW5kZXguZ3JvdXBJbmRleCA9PT0gaSkgPyAoaW5kZXguaXRlbUluZGV4ICsgMSkgOiAwOyBqIDwgdGhpcy5vcHRpb25zVG9EaXNwbGF5W2ldLml0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHQgPSB0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbaV0uaXRlbXNbal07XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHQubGFiZWwudG9Mb2NhbGVMb3dlckNhc2UodGhpcy5maWx0ZXJMb2NhbGUpLnN0YXJ0c1dpdGgoKHRoaXMuc2VhcmNoVmFsdWUgYXMgYW55KS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSkpICYmICFvcHQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXguZ3JvdXBJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgKChpbmRleC5ncm91cEluZGV4ID09PSBpKSA/IGluZGV4Lml0ZW1JbmRleCA6IHRoaXMub3B0aW9uc1RvRGlzcGxheVtpXS5pdGVtcy5sZW5ndGgpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHQgPSB0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbaV0uaXRlbXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0LmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuZmlsdGVyTG9jYWxlKS5zdGFydHNXaXRoKCh0aGlzLnNlYXJjaFZhbHVlIGFzIGFueSkudG9Mb2NhbGVMb3dlckNhc2UodGhpcy5maWx0ZXJMb2NhbGUpKSAmJiAhb3B0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbmRPcHRpb25JbmRleCh2YWw6IGFueSwgb3B0czogYW55W10pOiBudW1iZXIge1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IC0xO1xuICAgICAgICBpZiAob3B0cykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh2YWwgPT0gbnVsbCAmJiBvcHRzW2ldLnZhbHVlID09IG51bGwpIHx8wqBPYmplY3RVdGlscy5lcXVhbHModmFsLCBvcHRzW2ldLnZhbHVlLCB0aGlzLmRhdGFLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGZpbmRPcHRpb25Hcm91cEluZGV4KHZhbDogYW55LCBvcHRzOiBhbnlbXSk6IGFueSB7XG4gICAgICAgIGxldCBncm91cEluZGV4LCBpdGVtSW5kZXg7XG5cbiAgICAgICAgaWYgKG9wdHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdyb3VwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGl0ZW1JbmRleCA9IHRoaXMuZmluZE9wdGlvbkluZGV4KHZhbCwgb3B0c1tpXS5pdGVtcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHtncm91cEluZGV4OiBncm91cEluZGV4LCBpdGVtSW5kZXg6IGl0ZW1JbmRleH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kT3B0aW9uKHZhbDogYW55LCBvcHRzOiBhbnlbXSwgaW5Hcm91cD86IGJvb2xlYW4pOiBTZWxlY3RJdGVtIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXAgJiYgIWluR3JvdXApIHtcbiAgICAgICAgICAgIGxldCBvcHQ6IFNlbGVjdEl0ZW07XG4gICAgICAgICAgICBpZiAob3B0cyAmJiBvcHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG9wdGdyb3VwIG9mIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0ID0gdGhpcy5maW5kT3B0aW9uKHZhbCwgb3B0Z3JvdXAuaXRlbXMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuZmluZE9wdGlvbkluZGV4KHZhbCwgb3B0cyk7XG4gICAgICAgICAgICByZXR1cm4gKGluZGV4ICE9IC0xKSA/IG9wdHNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRmlsdGVyKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1RvRGlzcGxheSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9uc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGFjdGl2YXRlRmlsdGVyKCkge1xuICAgICAgICBsZXQgc2VhcmNoRmllbGRzOiBzdHJpbmdbXSA9IHRoaXMuZmlsdGVyQnkuc3BsaXQoJywnKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkR3JvdXBzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb3B0Z3JvdXAgb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFN1Yk9wdGlvbnMgPSBGaWx0ZXJVdGlscy5maWx0ZXIob3B0Z3JvdXAuaXRlbXMsIHNlYXJjaEZpZWxkcywgdGhpcy5maWx0ZXJWYWx1ZSwgdGhpcy5maWx0ZXJNYXRjaE1vZGUsIHRoaXMuZmlsdGVyTG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkU3ViT3B0aW9ucyAmJiBmaWx0ZXJlZFN1Yk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEdyb3Vwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogb3B0Z3JvdXAubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGdyb3VwLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBmaWx0ZXJlZFN1Yk9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zVG9EaXNwbGF5ID0gZmlsdGVyZWRHcm91cHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkgPSBGaWx0ZXJVdGlscy5maWx0ZXIodGhpcy5vcHRpb25zLCBzZWFyY2hGaWVsZHMsIHRoaXMuZmlsdGVyVmFsdWUsIHRoaXMuZmlsdGVyTWF0Y2hNb2RlLCB0aGlzLmZpbHRlckxvY2FsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwbHlGb2N1cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGUpXG4gICAgICAgICAgICBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLnAtZHJvcGRvd24tbGFiZWwucC1pbnB1dHRleHQnKS5mb2N1cygpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaW5wdXRbcmVhZG9ubHldJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBmb2N1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHBseUZvY3VzKCk7XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRUYXJnZXQ6IGFueSA9IHRoaXMuZWwgPyB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub3duZXJEb2N1bWVudCA6ICdkb2N1bWVudCc7XG5cbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oZG9jdW1lbnRUYXJnZXQsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0c2lkZUNsaWNrZWQoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZShldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgaWYgKCFEb21IYW5kbGVyLmlzQW5kcm9pZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gbmV3IENvbm5lY3RlZE92ZXJsYXlTY3JvbGxIYW5kbGVyKHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICB1bmJpbmRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLnVuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVGaWxsZWRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5maWxsZWQgPSAodGhpcy5zZWxlY3RlZE9wdGlvbiAhPSBudWxsKTtcbiAgICB9XG5cbiAgICBjbGVhcihldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRPcHRpb24odGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdGFibGVMYWJlbCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgb25PdmVybGF5SGlkZSgpIHtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMudW5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pdGVtc1dyYXBwZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN0b3JlT3ZlcmxheUFwcGVuZCgpO1xuICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxTaGFyZWRNb2R1bGUsU2Nyb2xsaW5nTW9kdWxlLFRvb2x0aXBNb2R1bGUsUmlwcGxlTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbRHJvcGRvd24sU2hhcmVkTW9kdWxlLFNjcm9sbGluZ01vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbRHJvcGRvd24sRHJvcGRvd25JdGVtXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1vZHVsZSB7IH1cbiJdfQ==