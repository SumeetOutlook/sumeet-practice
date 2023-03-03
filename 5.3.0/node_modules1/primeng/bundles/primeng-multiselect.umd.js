(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/tooltip'),require('primeng/ripple'),require('@angular/cdk/scrolling'),require('primeng/api'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/dom'), require('primeng/utils'), require('primeng/api'), require('@angular/forms'), require('@angular/cdk/scrolling'), require('primeng/tooltip'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/multiselect', ['@angular/core','@angular/common','primeng/tooltip','primeng/ripple','@angular/cdk/scrolling','primeng/api','exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng/dom', 'primeng/utils', 'primeng/api', '@angular/forms', '@angular/cdk/scrolling', 'primeng/tooltip', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.tooltip,global.primeng.ripple,global.ng.cdk.scrolling,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.multiselect = {}), global.ng.core, global.ng.animations, global.ng.common, global.primeng.dom, global.primeng.utils, global.primeng.api, global.ng.forms, global.ng.cdk.scrolling, global.primeng.tooltip, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, core, animations, common, dom, utils, api, forms, scrolling, tooltip, ripple) { 
function MultiSelectItem_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.option.label);
} }
function MultiSelectItem_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { "height": a0 }; };
var _c1 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
var _c2 = function (a0) { return { "p-highlight": a0 }; };
var _c3 = function (a0) { return { "pi pi-check": a0 }; };
var _c4 = function (a0) { return { $implicit: a0 }; };
var _c5 = ["container"];
var _c6 = ["filterInput"];
var _c7 = ["in"];
function MultiSelect_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.valuesAsString || "empty");
} }
function MultiSelect_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MultiSelect_div_11_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c8 = function (a0, a1) { return { "p-highlight": a0, "p-focus": a1 }; };
function MultiSelect_div_11_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 26);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "input", 27);
    ɵngcc0.ɵɵlistener("focus", function MultiSelect_div_11_div_1_div_3_Template_input_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(3); return ctx_r14.onHeaderCheckboxFocus(); })("blur", function MultiSelect_div_11_div_1_div_3_Template_input_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r16 = ɵngcc0.ɵɵnextContext(3); return ctx_r16.onHeaderCheckboxBlur(); })("keydown.space", function MultiSelect_div_11_div_1_div_3_Template_input_keydown_space_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r17 = ɵngcc0.ɵɵnextContext(3); return ctx_r17.toggleAll($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 28);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_div_11_div_1_div_3_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r18 = ɵngcc0.ɵɵnextContext(3); return ctx_r18.toggleAll($event); });
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("checked", ctx_r12.isAllChecked());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c8, ctx_r12.isAllChecked(), ctx_r12.headerCheckboxFocus));
    ɵngcc0.ɵɵattribute("aria-checked", ctx_r12.isAllChecked());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c3, ctx_r12.isAllChecked()));
} }
function MultiSelect_div_11_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 30);
    ɵngcc0.ɵɵelementStart(1, "input", 31, 32);
    ɵngcc0.ɵɵlistener("input", function MultiSelect_div_11_div_1_div_4_Template_input_input_1_listener() { ɵngcc0.ɵɵrestoreView(_r21); var ctx_r20 = ɵngcc0.ɵɵnextContext(3); return ctx_r20.onFilter(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "span", 33);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r13.filterValue || "");
    ɵngcc0.ɵɵattribute("placeholder", ctx_r13.filterPlaceHolder)("aria-label", ctx_r13.ariaFilterLabel);
} }
function MultiSelect_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_div_1_ng_container_2_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵtemplate(3, MultiSelect_div_11_div_1_div_3_Template, 5, 9, "div", 22);
    ɵngcc0.ɵɵtemplate(4, MultiSelect_div_11_div_1_div_4_Template, 4, 3, "div", 23);
    ɵngcc0.ɵɵelementStart(5, "button", 24);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_div_11_div_1_Template_button_click_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r22 = ɵngcc0.ɵɵnextContext(2); return ctx_r22.close($event); });
    ɵngcc0.ɵɵelement(6, "span", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.showToggleAll && !ctx_r5.selectionLimit);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.filter);
} }
function MultiSelect_div_11_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-multiSelectItem", 35);
    ɵngcc0.ɵɵlistener("onClick", function MultiSelect_div_11_ng_container_4_ng_template_1_Template_p_multiSelectItem_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r27 = ɵngcc0.ɵɵnextContext(3); return ctx_r27.onOptionClick($event); })("onKeydown", function MultiSelect_div_11_ng_container_4_ng_template_1_Template_p_multiSelectItem_onKeydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r29 = ɵngcc0.ɵɵnextContext(3); return ctx_r29.onOptionKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r25 = ctx.$implicit;
    var ctx_r24 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("option", option_r25)("selected", ctx_r24.isSelected(option_r25.value))("maxSelectionLimitReached", ctx_r24.maxSelectionLimitReached)("template", ctx_r24.itemTemplate);
} }
function MultiSelect_div_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", 34);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.visibleOptions);
} }
function MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "p-multiSelectItem", 40);
    ɵngcc0.ɵɵlistener("onClick", function MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); var ctx_r40 = ɵngcc0.ɵɵnextContext(4); return ctx_r40.onOptionClick($event); })("onKeydown", function MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onKeydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); var ctx_r42 = ɵngcc0.ɵɵnextContext(4); return ctx_r42.onOptionKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r33 = ctx.$implicit;
    var ctx_r32 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("option", option_r33)("selected", ctx_r32.isSelected(option_r33.value))("maxSelectionLimitReached", ctx_r32.maxSelectionLimitReached)("template", ctx_r32.itemTemplate)("itemSize", ctx_r32.itemSize);
} }
function MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 37, 38);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 5, "ng-container", 39);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r30 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r30.scrollHeight))("itemSize", ctx_r30.itemSize);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r30.visibleOptions);
} }
function MultiSelect_div_11_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MultiSelect_div_11_ng_template_5_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 36);
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.virtualScroll && ctx_r8.visibleOptions && ctx_r8.visibleOptions.length);
} }
function MultiSelect_div_11_li_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 41);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
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
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.footerTemplate);
} }
var _c9 = function () { return ["p-multiselect-panel p-component"]; };
var _c10 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c11 = function (a1) { return { value: "visible", params: a1 }; };
function MultiSelect_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function MultiSelect_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); var ctx_r44 = ɵngcc0.ɵɵnextContext(); return ctx_r44.onOverlayAnimationStart($event); })("keydown", function MultiSelect_div_11_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); var ctx_r46 = ɵngcc0.ɵɵnextContext(); return ctx_r46.onKeydown($event); });
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
    var _r7 = ɵngcc0.ɵɵreference(6);
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
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
var _c12 = [[["p-header"]], [["p-footer"]]];
var _c13 = function (a1, a2, a3) { return { "p-multiselect p-component": true, "p-multiselect-open": a1, "p-focus": a2, "p-disabled": a3 }; };
var _c14 = function (a0, a1) { return { "p-placeholder": a0, "p-multiselect-label-empty": a1 }; };
var _c15 = function () { return { "p-multiselect-trigger": true }; };
var _c16 = ["p-header", "p-footer"];
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var MULTISELECT_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return MultiSelect; }),
        multi: true
    };
    var MultiSelectItem = /** @class */ (function () {
        function MultiSelectItem() {
            this.onClick = new core.EventEmitter();
            this.onKeydown = new core.EventEmitter();
        }
        MultiSelectItem.prototype.onOptionClick = function (event) {
            this.onClick.emit({
                originalEvent: event,
                option: this.option
            });
        };
        MultiSelectItem.prototype.onOptionKeydown = function (event) {
            this.onKeydown.emit({
                originalEvent: event,
                option: this.option
            });
        };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectItem, [{
        type: core.Component,
        args: [{
                selector: 'p-multiSelectItem',
                template: "\n        <li class=\"p-multiselect-item\" (click)=\"onOptionClick($event)\" (keydown)=\"onOptionKeydown($event)\" [attr.aria-label]=\"option.label\"\n            [attr.tabindex]=\"option.disabled ? null : '0'\" [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'p-highlight': selected, 'p-disabled': (option.disabled || (maxSelectionLimitReached && !selected))}\">\n            <div class=\"p-checkbox p-component\">\n                <div class=\"p-checkbox-box\" [ngClass]=\"{'p-highlight': selected}\">\n                    <span class=\"p-checkbox-icon\" [ngClass]=\"{'pi pi-check': selected}\"></span>\n                </div>\n            </div>\n            <span *ngIf=\"!template\">{{option.label}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return []; }, { onClick: [{
            type: core.Output
        }], onKeydown: [{
            type: core.Output
        }], option: [{
            type: core.Input
        }], selected: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], itemSize: [{
            type: core.Input
        }], template: [{
            type: core.Input
        }], maxSelectionLimitReached: [{
            type: core.Input
        }] }); })();
        return MultiSelectItem;
    }());
    MultiSelectItem.propDecorators = {
        option: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        itemSize: [{ type: core.Input }],
        template: [{ type: core.Input }],
        maxSelectionLimitReached: [{ type: core.Input }],
        onClick: [{ type: core.Output }],
        onKeydown: [{ type: core.Output }]
    };
    var MultiSelect = /** @class */ (function () {
        function MultiSelect(el, renderer, cd) {
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
            this.onChange = new core.EventEmitter();
            this.onFocus = new core.EventEmitter();
            this.onBlur = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
            this.onPanelShow = new core.EventEmitter();
            this.onPanelHide = new core.EventEmitter();
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
            this.disabledSelectedOptions = [];
        }
        Object.defineProperty(MultiSelect.prototype, "defaultLabel", {
            get: function () {
                return this._defaultLabel;
            },
            set: function (val) {
                this._defaultLabel = val;
                this.updateLabel();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MultiSelect.prototype, "placeholder", {
            get: function () {
                return this._placeholder;
            },
            set: function (val) {
                this._placeholder = val;
                this.updateLabel();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MultiSelect.prototype, "options", {
            get: function () {
                return this._options;
            },
            set: function (val) {
                var opts = this.optionLabel ? utils.ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
                this.visibleOptions = opts;
                this._options = opts;
                this.updateLabel();
                if (this.filterValue && this.filterValue.length) {
                    this.activateFilter();
                }
            },
            enumerable: false,
            configurable: true
        });
        MultiSelect.prototype.ngOnInit = function () {
            this.updateLabel();
        };
        MultiSelect.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'item':
                        _this.itemTemplate = item.template;
                        break;
                    case 'selectedItems':
                        _this.selectedItemsTemplate = item.template;
                        break;
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                    default:
                        _this.itemTemplate = item.template;
                        break;
                }
            });
        };
        MultiSelect.prototype.ngAfterViewInit = function () {
            if (this.overlayVisible) {
                this.show();
            }
        };
        MultiSelect.prototype.ngAfterViewChecked = function () {
            if (this.filtered) {
                this.alignOverlay();
                this.filtered = false;
            }
        };
        MultiSelect.prototype.writeValue = function (value) {
            this.value = value;
            this.updateLabel();
            this.updateFilledState();
            this.setDisabledSelectedOptions();
            this.checkSelectionLimit();
            this.cd.markForCheck();
        };
        MultiSelect.prototype.checkSelectionLimit = function () {
            if (this.selectionLimit && (this.value && this.value.length === this.selectionLimit)) {
                this.maxSelectionLimitReached = true;
            }
            else {
                this.maxSelectionLimitReached = false;
            }
        };
        MultiSelect.prototype.updateFilledState = function () {
            this.filled = (this.value && this.value.length > 0);
        };
        MultiSelect.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        MultiSelect.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        MultiSelect.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
        MultiSelect.prototype.onOptionClick = function (event) {
            var option = event.option;
            if (option.disabled) {
                return;
            }
            var optionValue = option.value;
            var selectionIndex = this.findSelectionIndex(optionValue);
            if (selectionIndex != -1) {
                this.value = this.value.filter(function (val, i) { return i != selectionIndex; });
                if (this.selectionLimit) {
                    this.maxSelectionLimitReached = false;
                }
            }
            else {
                if (!this.selectionLimit || (!this.value || this.value.length < this.selectionLimit)) {
                    this.value = __spread(this.value || [], [optionValue]);
                }
                this.checkSelectionLimit();
            }
            this.onModelChange(this.value);
            this.onChange.emit({ originalEvent: event.originalEvent, value: this.value, itemValue: optionValue });
            this.updateLabel();
            this.updateFilledState();
        };
        MultiSelect.prototype.isSelected = function (value) {
            return this.findSelectionIndex(value) != -1;
        };
        MultiSelect.prototype.findSelectionIndex = function (val) {
            var index = -1;
            if (this.value) {
                for (var i = 0; i < this.value.length; i++) {
                    if (utils.ObjectUtils.equals(this.value[i], val, this.dataKey)) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        MultiSelect.prototype.toggleAll = function (event) {
            if (this.isAllChecked()) {
                if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                    var value = [];
                    value = __spread(this.disabledSelectedOptions);
                    this.value = value;
                }
                else {
                    this.value = [];
                }
            }
            else {
                var opts = this.getVisibleOptions();
                if (opts) {
                    var value = [];
                    if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                        value = __spread(this.disabledSelectedOptions);
                    }
                    for (var i = 0; i < opts.length; i++) {
                        var option = opts[i];
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
        };
        MultiSelect.prototype.isAllChecked = function () {
            if (this.filterValue && this.filterValue.trim().length) {
                return this.value && this.visibleOptions && this.visibleOptions.length && this.isAllVisibleOptionsChecked();
            }
            else {
                var optionCount = this.getEnabledOptionCount();
                var disabledSelectedOptionCount = this.disabledSelectedOptions.length;
                return this.value && this.options && (this.value.length > 0 && this.value.length == optionCount + disabledSelectedOptionCount);
            }
        };
        MultiSelect.prototype.isAllVisibleOptionsChecked = function () {
            var e_1, _a;
            if (!this.visibleOptions || this.visibleOptions.length === 0) {
                return false;
            }
            else {
                try {
                    for (var _b = __values(this.visibleOptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var option = _c.value;
                        if (!this.isSelected(option.value)) {
                            return false;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return true;
            }
        };
        MultiSelect.prototype.getEnabledOptionCount = function () {
            var e_2, _a;
            if (this.options) {
                var count = 0;
                try {
                    for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var opt = _c.value;
                        if (!opt.disabled) {
                            count++;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return count;
            }
            else {
                return 0;
            }
        };
        MultiSelect.prototype.setDisabledSelectedOptions = function () {
            var e_3, _a;
            if (this.options) {
                this.disabledSelectedOptions = [];
                if (this.value) {
                    try {
                        for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var opt = _c.value;
                            if (opt.disabled && this.isSelected(opt.value)) {
                                this.disabledSelectedOptions.push(opt.value);
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
        };
        MultiSelect.prototype.show = function () {
            if (!this.overlayVisible) {
                this.overlayVisible = true;
            }
        };
        MultiSelect.prototype.onOverlayAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    this.overlay = event.element;
                    this.appendOverlay();
                    if (this.autoZIndex) {
                        this.overlay.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
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
        };
        MultiSelect.prototype.appendOverlay = function () {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.overlay);
                else
                    dom.DomHandler.appendChild(this.overlay, this.appendTo);
                if (!this.overlay.style.minWidth) {
                    this.overlay.style.minWidth = dom.DomHandler.getWidth(this.containerViewChild.nativeElement) + 'px';
                }
            }
        };
        MultiSelect.prototype.restoreOverlayAppend = function () {
            if (this.overlay && this.appendTo) {
                this.el.nativeElement.appendChild(this.overlay);
            }
        };
        MultiSelect.prototype.alignOverlay = function () {
            if (this.overlay) {
                if (this.appendTo)
                    dom.DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
                else
                    dom.DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
            }
        };
        MultiSelect.prototype.hide = function () {
            this.overlayVisible = false;
            this.unbindDocumentClickListener();
            if (this.resetFilterOnHide) {
                this.filterInputChild.nativeElement.value = '';
                this.onFilter();
            }
            this.onPanelHide.emit();
            this.cd.markForCheck();
        };
        MultiSelect.prototype.close = function (event) {
            this.hide();
            event.preventDefault();
            event.stopPropagation();
        };
        MultiSelect.prototype.onMouseclick = function (event, input) {
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
        };
        MultiSelect.prototype.isOverlayClick = function (event) {
            return (this.overlay && this.overlay.contains(event.target));
        };
        MultiSelect.prototype.isOutsideClicked = function (event) {
            return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.isOverlayClick(event));
        };
        MultiSelect.prototype.onInputFocus = function (event) {
            this.focus = true;
            this.onFocus.emit({ originalEvent: event });
        };
        MultiSelect.prototype.onInputBlur = function (event) {
            this.focus = false;
            this.onBlur.emit({ originalEvent: event });
            if (!this.preventModelTouched) {
                this.onModelTouched();
            }
            this.preventModelTouched = false;
        };
        MultiSelect.prototype.onOptionKeydown = function (event) {
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
        };
        MultiSelect.prototype.findNextItem = function (item) {
            var nextItem = item.nextElementSibling;
            if (nextItem)
                return dom.DomHandler.hasClass(nextItem.children[0], 'p-disabled') || dom.DomHandler.isHidden(nextItem.children[0]) ? this.findNextItem(nextItem) : nextItem.children[0];
            else
                return null;
        };
        MultiSelect.prototype.findPrevItem = function (item) {
            var prevItem = item.previousElementSibling;
            if (prevItem)
                return dom.DomHandler.hasClass(prevItem.children[0], 'p-disabled') || dom.DomHandler.isHidden(prevItem.children[0]) ? this.findPrevItem(prevItem) : prevItem.children[0];
            else
                return null;
        };
        MultiSelect.prototype.onKeydown = function (event) {
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
        };
        MultiSelect.prototype.updateLabel = function () {
            if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
                var label = '';
                for (var i = 0; i < this.value.length; i++) {
                    var itemLabel = this.findLabelByValue(this.value[i]);
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
                    var pattern = /{(.*?)}/;
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
        };
        MultiSelect.prototype.findLabelByValue = function (val) {
            var label = null;
            for (var i = 0; i < this.options.length; i++) {
                var option = this.options[i];
                if (val == null && option.value == null || utils.ObjectUtils.equals(val, option.value, this.dataKey)) {
                    label = option.label;
                    break;
                }
            }
            return label;
        };
        MultiSelect.prototype.onFilter = function () {
            var inputValue = this.filterInputChild.nativeElement.value;
            if (inputValue && inputValue.length) {
                this.filterValue = inputValue;
                this.activateFilter();
            }
            else {
                this.filterValue = null;
                this.visibleOptions = this.options;
                this.filtered = false;
            }
        };
        MultiSelect.prototype.activateFilter = function () {
            if (this.options && this.options.length) {
                var searchFields = this.filterBy.split(',');
                this.visibleOptions = utils.FilterUtils.filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                this.filtered = true;
            }
        };
        MultiSelect.prototype.getVisibleOptions = function () {
            return this.visibleOptions || this.options;
        };
        MultiSelect.prototype.onHeaderCheckboxFocus = function () {
            this.headerCheckboxFocus = true;
        };
        MultiSelect.prototype.onHeaderCheckboxBlur = function () {
            this.headerCheckboxFocus = false;
        };
        MultiSelect.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentClickListener = this.renderer.listen(documentTarget, 'click', function (event) {
                    if (_this.isOutsideClicked(event)) {
                        _this.hide();
                    }
                });
            }
        };
        MultiSelect.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        MultiSelect.prototype.bindDocumentResizeListener = function () {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        };
        MultiSelect.prototype.unbindDocumentResizeListener = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        MultiSelect.prototype.onWindowResize = function () {
            if (!dom.DomHandler.isAndroid()) {
                this.hide();
            }
        };
        MultiSelect.prototype.bindScrollListener = function () {
            var _this = this;
            if (!this.scrollHandler) {
                this.scrollHandler = new dom.ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, function () {
                    if (_this.overlayVisible) {
                        _this.hide();
                    }
                });
            }
            this.scrollHandler.bindScrollListener();
        };
        MultiSelect.prototype.unbindScrollListener = function () {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        };
        MultiSelect.prototype.onOverlayHide = function () {
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
            this.overlay = null;
            this.onModelTouched();
        };
        MultiSelect.prototype.ngOnDestroy = function () {
            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.restoreOverlayAppend();
            this.onOverlayHide();
        };
MultiSelect.ɵfac = function MultiSelect_Factory(t) { return new (t || MultiSelect)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MultiSelect.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultiSelect, selectors: [["p-multiSelect"]], contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
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
        var _r47 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵprojectionDef(_c12);
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function MultiSelect_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r47); var _r1 = ɵngcc0.ɵɵreference(4); return ctx.onMouseclick($event, _r1); });
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
            animations.trigger('overlayAnimation', [
                animations.transition(':enter', [
                    animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animations.animate('{{showTransitionParams}}')
                ]),
                animations.transition(':leave', [
                    animations.animate('{{hideTransitionParams}}', animations.style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelect, [{
        type: core.Component,
        args: [{
                selector: 'p-multiSelect',
                template: "\n        <div #container [ngClass]=\"{'p-multiselect p-component':true,'p-multiselect-open':overlayVisible,'p-focus':focus,'p-disabled': disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            (click)=\"onMouseclick($event,in)\">\n            <div class=\"p-hidden-accessible\">\n                <input #in type=\"text\" readonly=\"readonly\" [attr.id]=\"inputId\" [attr.name]=\"name\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\"\n                       [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" (keydown)=\"onKeydown($event)\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\"\n                       [attr.aria-labelledby]=\"ariaLabelledBy\" role=\"listbox\">\n            </div>\n            <div class=\"p-multiselect-label-container\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <div class=\"p-multiselect-label\" [ngClass]=\"{'p-placeholder': valuesAsString === (defaultLabel || placeholder), 'p-multiselect-label-empty': ((valuesAsString == null || valuesAsString.length === 0) && (placeholder == null || placeholder.length === 0))}\">\n                    <ng-container *ngIf=\"!selectedItemsTemplate\">{{valuesAsString || 'empty'}}</ng-container>\n                    <ng-container *ngTemplateOutlet=\"selectedItemsTemplate; context: {$implicit: value}\"></ng-container>\n                </div>\n            </div>\n            <div [ngClass]=\"{'p-multiselect-trigger':true}\">\n                <span class=\"p-multiselect-trigger-icon\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"['p-multiselect-panel p-component']\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\"\n                [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\" (keydown)=\"onKeydown($event)\">\n                <div class=\"p-multiselect-header\" *ngIf=\"showHeader\">\n                    <ng-content select=\"p-header\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                    <div class=\"p-checkbox p-component\" *ngIf=\"showToggleAll && !selectionLimit\">\n                        <div class=\"p-hidden-accessible\">\n                            <input type=\"checkbox\" readonly=\"readonly\" [checked]=\"isAllChecked()\" (focus)=\"onHeaderCheckboxFocus()\" (blur)=\"onHeaderCheckboxBlur()\" (keydown.space)=\"toggleAll($event)\">\n                        </div>\n                        <div class=\"p-checkbox-box\" role=\"checkbox\" [attr.aria-checked]=\"isAllChecked()\" [ngClass]=\"{'p-highlight':isAllChecked(), 'p-focus': headerCheckboxFocus}\" (click)=\"toggleAll($event)\">\n                            <span class=\"p-checkbox-icon\" [ngClass]=\"{'pi pi-check':isAllChecked()}\"></span>\n                        </div>\n                    </div>\n                    <div class=\"p-multiselect-filter-container\" *ngIf=\"filter\">\n                        <input #filterInput type=\"text\" role=\"textbox\" [value]=\"filterValue||''\" (input)=\"onFilter()\" class=\"p-multiselect-filter p-inputtext p-component\" [attr.placeholder]=\"filterPlaceHolder\" [attr.aria-label]=\"ariaFilterLabel\">\n                        <span class=\"p-multiselect-filter-icon pi pi-search\"></span>\n                    </div>\n                    <button class=\"p-multiselect-close p-link\" type=\"button\" (click)=\"close($event)\" pRipple>\n                        <span class=\"p-multiselect-close-icon pi pi-times\"></span>\n                    </button>\n                </div>\n                <div class=\"p-multiselect-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"p-multiselect-items p-component\" role=\"listbox\" aria-multiselectable=\"true\">\n                        <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                            <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"visibleOptions\">\n                                <p-multiSelectItem [option]=\"option\" [selected]=\"isSelected(option.value)\" (onClick)=\"onOptionClick($event)\" (onKeydown)=\"onOptionKeydown($event)\"\n                                        [maxSelectionLimitReached]=\"maxSelectionLimitReached\" [template]=\"itemTemplate\"></p-multiSelectItem>\n                            </ng-template>\n                        </ng-container>\n                        <ng-template #virtualScrollList>\n                            <cdk-virtual-scroll-viewport #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && visibleOptions && visibleOptions.length\">\n                                <ng-container *cdkVirtualFor=\"let option of visibleOptions; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                    <p-multiSelectItem [option]=\"option\" [selected]=\"isSelected(option.value)\" (onClick)=\"onOptionClick($event)\" (onKeydown)=\"onOptionKeydown($event)\"\n                                        [maxSelectionLimitReached]=\"maxSelectionLimitReached\" [template]=\"itemTemplate\" [itemSize]=\"itemSize\"></p-multiSelectItem>\n                                </ng-container>\n                            </cdk-virtual-scroll-viewport>\n                        </ng-template>\n                        <li *ngIf=\"filter && visibleOptions && visibleOptions.length === 0\" class=\"p-multiselect-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n                <div class=\"p-multiselect-footer\" *ngIf=\"footerFacet || footerTemplate\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n                </div>\n            </div>\n        </div>\n    ",
                animations: [
                    animations.trigger('overlayAnimation', [
                        animations.transition(':enter', [
                            animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animations.animate('{{showTransitionParams}}')
                        ]),
                        animations.transition(':leave', [
                            animations.animate('{{hideTransitionParams}}', animations.style({ opacity: 0 }))
                        ])
                    ])
                ],
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': 'focus'
                },
                providers: [MULTISELECT_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-multiselect{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;user-select:none}.p-multiselect-trigger{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;flex-shrink:0;justify-content:center}.p-multiselect-label-container{-ms-flex:1 1 auto;cursor:pointer;flex:1 1 auto;overflow:hidden}.p-multiselect-label{cursor:pointer;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect .p-multiselect-panel{min-width:100%}.p-multiselect-panel{position:absolute}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{list-style-type:none;margin:0;padding:0}.p-multiselect-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-multiselect-header,.p-multiselect-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-multiselect-header{-ms-flex-pack:justify;justify-content:space-between}.p-multiselect-filter-container{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}.p-multiselect-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-multiselect,.p-multiselect-close{display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { scrollHeight: [{
            type: core.Input
        }], filter: [{
            type: core.Input
        }], displaySelectedLabel: [{
            type: core.Input
        }], maxSelectedLabels: [{
            type: core.Input
        }], selectedItemsLabel: [{
            type: core.Input
        }], showToggleAll: [{
            type: core.Input
        }], emptyFilterMessage: [{
            type: core.Input
        }], resetFilterOnHide: [{
            type: core.Input
        }], dropdownIcon: [{
            type: core.Input
        }], showHeader: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], filterBy: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], filterMatchMode: [{
            type: core.Input
        }], tooltip: [{
            type: core.Input
        }], tooltipPosition: [{
            type: core.Input
        }], tooltipPositionStyle: [{
            type: core.Input
        }], autofocusFilter: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], onFocus: [{
            type: core.Output
        }], onBlur: [{
            type: core.Output
        }], onClick: [{
            type: core.Output
        }], onPanelShow: [{
            type: core.Output
        }], onPanelHide: [{
            type: core.Output
        }], defaultLabel: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], options: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], overlayVisible: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], panelStyle: [{
            type: core.Input
        }], panelStyleClass: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }], filterPlaceHolder: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], tabindex: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], dataKey: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }], selectionLimit: [{
            type: core.Input
        }], optionLabel: [{
            type: core.Input
        }], virtualScroll: [{
            type: core.Input
        }], itemSize: [{
            type: core.Input
        }], ariaFilterLabel: [{
            type: core.Input
        }], tooltipStyleClass: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }], filterInputChild: [{
            type: core.ViewChild,
            args: ['filterInput']
        }], accessibleViewChild: [{
            type: core.ViewChild,
            args: ['in']
        }], footerFacet: [{
            type: core.ContentChild,
            args: [api.Footer]
        }], headerFacet: [{
            type: core.ContentChild,
            args: [api.Header]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return MultiSelect;
    }());
    MultiSelect.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    MultiSelect.propDecorators = {
        scrollHeight: [{ type: core.Input }],
        defaultLabel: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        panelStyle: [{ type: core.Input }],
        panelStyleClass: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        filter: [{ type: core.Input }],
        filterPlaceHolder: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        overlayVisible: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        dataKey: [{ type: core.Input }],
        name: [{ type: core.Input }],
        ariaLabelledBy: [{ type: core.Input }],
        displaySelectedLabel: [{ type: core.Input }],
        maxSelectedLabels: [{ type: core.Input }],
        selectionLimit: [{ type: core.Input }],
        selectedItemsLabel: [{ type: core.Input }],
        showToggleAll: [{ type: core.Input }],
        emptyFilterMessage: [{ type: core.Input }],
        resetFilterOnHide: [{ type: core.Input }],
        dropdownIcon: [{ type: core.Input }],
        optionLabel: [{ type: core.Input }],
        showHeader: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        virtualScroll: [{ type: core.Input }],
        itemSize: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        ariaFilterLabel: [{ type: core.Input }],
        filterMatchMode: [{ type: core.Input }],
        tooltip: [{ type: core.Input }],
        tooltipPosition: [{ type: core.Input }],
        tooltipPositionStyle: [{ type: core.Input }],
        tooltipStyleClass: [{ type: core.Input }],
        autofocusFilter: [{ type: core.Input }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }],
        filterInputChild: [{ type: core.ViewChild, args: ['filterInput',] }],
        accessibleViewChild: [{ type: core.ViewChild, args: ['in',] }],
        footerFacet: [{ type: core.ContentChild, args: [api.Footer,] }],
        headerFacet: [{ type: core.ContentChild, args: [api.Header,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        onChange: [{ type: core.Output }],
        onFocus: [{ type: core.Output }],
        onBlur: [{ type: core.Output }],
        onClick: [{ type: core.Output }],
        onPanelShow: [{ type: core.Output }],
        onPanelHide: [{ type: core.Output }],
        options: [{ type: core.Input }]
    };
    var MultiSelectModule = /** @class */ (function () {
        function MultiSelectModule() {
        }
MultiSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MultiSelectModule });
MultiSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MultiSelectModule_Factory(t) { return new (t || MultiSelectModule)(); }, imports: [[common.CommonModule, api.SharedModule, scrolling.ScrollingModule, tooltip.TooltipModule, ripple.RippleModule], ɵngcc5.SharedModule, ɵngcc4.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MultiSelectModule, { declarations: [MultiSelect, MultiSelectItem], imports: [ɵngcc1.CommonModule, ɵngcc5.SharedModule, ɵngcc4.ScrollingModule, ɵngcc2.TooltipModule, ɵngcc3.RippleModule], exports: [MultiSelect, ɵngcc5.SharedModule, ɵngcc4.ScrollingModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, api.SharedModule, scrolling.ScrollingModule, tooltip.TooltipModule, ripple.RippleModule],
                exports: [MultiSelect, api.SharedModule, scrolling.ScrollingModule],
                declarations: [MultiSelect, MultiSelectItem]
            }]
    }], function () { return []; }, null); })();
        return MultiSelectModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MULTISELECT_VALUE_ACCESSOR = MULTISELECT_VALUE_ACCESSOR;
    exports.MultiSelect = MultiSelect;
    exports.MultiSelectItem = MultiSelectItem;
    exports.MultiSelectModule = MultiSelectModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-multiselect.umd.js.map