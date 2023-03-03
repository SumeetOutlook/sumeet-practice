import { NgModule, Component, ViewChild, ElementRef, Input, Output, EventEmitter, ContentChildren, Renderer2, forwardRef, ChangeDetectorRef, IterableDiffers, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/button';
import * as ɵngcc3 from 'primeng/ripple';

const _c0 = ["container"];
const _c1 = ["in"];
const _c2 = ["multiIn"];
const _c3 = ["multiContainer"];
const _c4 = ["ddBtn"];
const _c5 = function (a0, a1) { return { "p-autocomplete-dd-input": a0, "p-disabled": a1 }; };
function AutoComplete_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 7, 8);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_input_2_Template_input_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onInputClick($event); })("input", function AutoComplete_input_2_Template_input_input_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onInput($event); })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onKeydown($event); })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onKeyup($event); })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onInputFocus($event); })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onInputBlur($event); })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onInputChange($event); })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onInputPaste($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.inputStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.inputStyle)("autocomplete", ctx_r1.autocomplete)("ngClass", ɵngcc0.ɵɵpureFunction2(23, _c5, ctx_r1.dropdown, ctx_r1.disabled))("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵattribute("type", ctx_r1.type)("id", ctx_r1.inputId)("required", ctx_r1.required)("name", ctx_r1.name)("aria-controls", ctx_r1.listId)("aria-expanded", ctx_r1.overlayVisible)("aria-activedescendant", "p-highlighted-option")("autofocus", ctx_r1.autofocus)("placeholder", ctx_r1.placeholder)("size", ctx_r1.size)("maxlength", ctx_r1.maxlength)("tabindex", ctx_r1.tabindex)("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-required", ctx_r1.required);
} }
function AutoComplete_ul_3_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AutoComplete_ul_3_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 20);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r19 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r22.resolveFieldData(val_r19));
} }
function AutoComplete_ul_3_li_2_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_ul_3_li_2_span_4_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); ɵngcc0.ɵɵnextContext(); const _r20 = ɵngcc0.ɵɵreference(1); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.removeItem(_r20); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c6 = function (a0) { return { $implicit: a0 }; };
function AutoComplete_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 15, 16);
    ɵngcc0.ɵɵtemplate(2, AutoComplete_ul_3_li_2_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_ul_3_li_2_span_3_Template, 2, 1, "span", 18);
    ɵngcc0.ɵɵtemplate(4, AutoComplete_ul_3_li_2_span_4_Template, 1, 0, "span", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r19 = ctx.$implicit;
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r17.selectedItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c6, val_r19));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r17.selectedItemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r17.disabled);
} }
const _c7 = function (a0, a1) { return { "p-disabled": a0, "p-focus": a1 }; };
function AutoComplete_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ul", 9, 10);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_ul_3_Template_ul_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r28); const _r18 = ɵngcc0.ɵɵreference(5); return _r18.focus(); });
    ɵngcc0.ɵɵtemplate(2, AutoComplete_ul_3_li_2_Template, 5, 6, "li", 11);
    ɵngcc0.ɵɵelementStart(3, "li", 12);
    ɵngcc0.ɵɵelementStart(4, "input", 13, 14);
    ɵngcc0.ɵɵlistener("input", function AutoComplete_ul_3_Template_input_input_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onInput($event); })("click", function AutoComplete_ul_3_Template_input_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onInputClick($event); })("keydown", function AutoComplete_ul_3_Template_input_keydown_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.onKeydown($event); })("keyup", function AutoComplete_ul_3_Template_input_keyup_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onKeyup($event); })("focus", function AutoComplete_ul_3_Template_input_focus_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.onInputFocus($event); })("blur", function AutoComplete_ul_3_Template_input_blur_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.onInputBlur($event); })("change", function AutoComplete_ul_3_Template_input_change_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r35 = ɵngcc0.ɵɵnextContext(); return ctx_r35.onInputChange($event); })("paste", function AutoComplete_ul_3_Template_input_paste_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.onInputPaste($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(20, _c7, ctx_r2.disabled, ctx_r2.focus));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.value);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap(ctx_r2.inputStyleClass);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly)("autocomplete", ctx_r2.autocomplete)("ngStyle", ctx_r2.inputStyle);
    ɵngcc0.ɵɵattribute("type", ctx_r2.type)("id", ctx_r2.inputId)("placeholder", ctx_r2.value && ctx_r2.value.length ? null : ctx_r2.placeholder)("tabindex", ctx_r2.tabindex)("maxlength", ctx_r2.maxlength)("autofocus", ctx_r2.autofocus)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-controls", ctx_r2.listId)("aria-expanded", ctx_r2.overlayVisible)("aria-activedescendant", "p-highlighted-option");
} }
function AutoComplete_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 22);
} }
function AutoComplete_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 23, 24);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_button_5_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); const ctx_r38 = ɵngcc0.ɵɵnextContext(); return ctx_r38.handleDropdownClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r4.dropdownIcon)("disabled", ctx_r4.disabled);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r4.tabindex);
} }
function AutoComplete_div_6_li_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r43 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r45 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r45.resolveFieldData(option_r43));
} }
function AutoComplete_div_6_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c8 = function (a0) { return { "p-highlight": a0 }; };
const _c9 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function AutoComplete_div_6_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 29);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_div_6_li_3_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r49); const option_r43 = ctx.$implicit; const ctx_r48 = ɵngcc0.ɵɵnextContext(2); return ctx_r48.selectItem(option_r43); });
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_li_3_span_1_Template, 2, 1, "span", 30);
    ɵngcc0.ɵɵtemplate(2, AutoComplete_div_6_li_3_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r43 = ctx.$implicit;
    const idx_r44 = ctx.index;
    const ctx_r41 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c8, option_r43 === ctx_r41.highlightOption))("id", ctx_r41.highlightOption == option_r43 ? "p-highlighted-option" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r41.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r41.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(7, _c9, option_r43, idx_r44));
} }
function AutoComplete_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r42.emptyMessage);
} }
const _c10 = function () { return ["p-autocomplete-panel p-component"]; };
const _c11 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c12 = function (a1) { return { value: "visible", params: a1 }; };
function AutoComplete_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r51 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 0, 25);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function AutoComplete_div_6_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r51); const ctx_r50 = ɵngcc0.ɵɵnextContext(); return ctx_r50.onOverlayAnimationStart($event); })("@overlayAnimation.done", function AutoComplete_div_6_Template_div_animation_overlayAnimation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r51); const ctx_r52 = ɵngcc0.ɵɵnextContext(); return ctx_r52.onOverlayAnimationDone($event); });
    ɵngcc0.ɵɵelementStart(2, "ul", 26);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_div_6_li_3_Template, 3, 10, "li", 27);
    ɵngcc0.ɵɵtemplate(4, AutoComplete_div_6_li_4_Template, 2, 1, "li", 28);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r5.panelStyleClass);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r5.scrollHeight);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(10, _c10))("ngStyle", ctx_r5.panelStyle)("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(14, _c12, ɵngcc0.ɵɵpureFunction2(11, _c11, ctx_r5.showTransitionOptions, ctx_r5.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵattribute("id", ctx_r5.listId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.suggestions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.noResults && ctx_r5.emptyMessage);
} }
const _c13 = function (a1, a2) { return { "p-autocomplete p-component": true, "p-autocomplete-dd": a1, "p-autocomplete-multiple": a2 }; };
export const AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoComplete),
    multi: true
};
export class AutoComplete {
    constructor(el, renderer, cd, differs) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.differs = differs;
        this.minLength = 1;
        this.delay = 300;
        this.type = 'text';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.dropdownIcon = "pi pi-chevron-down";
        this.unique = true;
        this.completeOnFocus = false;
        this.completeMethod = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onDropdownClick = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.scrollHeight = '200px';
        this.dropdownMode = 'blank';
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.autocomplete = 'off';
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.overlayVisible = false;
        this.focus = false;
        this.inputFieldValue = null;
        this.differ = differs.find([]).create(null);
        this.listId = UniqueComponentId() + '_list';
    }
    get suggestions() {
        return this._suggestions;
    }
    set suggestions(val) {
        this._suggestions = val;
        this.handleSuggestionsChange();
    }
    ngAfterViewChecked() {
        //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
        if (this.suggestionsUpdated && this.overlay && this.overlay.offsetParent) {
            setTimeout(() => {
                if (this.overlay) {
                    this.alignOverlay();
                }
            }, 1);
            this.suggestionsUpdated = false;
        }
        if (this.highlightOptionChanged) {
            setTimeout(() => {
                if (this.overlay) {
                    let listItem = DomHandler.findSingle(this.overlay, 'li.p-highlight');
                    if (listItem) {
                        DomHandler.scrollInView(this.overlay, listItem);
                    }
                }
            }, 1);
            this.highlightOptionChanged = false;
        }
    }
    handleSuggestionsChange() {
        if (this._suggestions != null && this.loading) {
            this.highlightOption = null;
            if (this._suggestions.length) {
                this.noResults = false;
                this.show();
                this.suggestionsUpdated = true;
                if (this.autoHighlight) {
                    this.highlightOption = this._suggestions[0];
                }
            }
            else {
                this.noResults = true;
                if (this.emptyMessage) {
                    this.show();
                    this.suggestionsUpdated = true;
                }
                else {
                    this.hide();
                }
            }
            this.loading = false;
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
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    writeValue(value) {
        this.value = value;
        this.filled = this.value && this.value != '';
        this.updateInputField();
        this.cd.markForCheck();
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
    onInput(event) {
        // When an input element with a placeholder is clicked, the onInput event is invoked in IE.
        if (!this.inputKeyDown && DomHandler.isIE()) {
            return;
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        let value = event.target.value;
        if (!this.multiple && !this.forceSelection) {
            this.onModelChange(value);
        }
        if (value.length === 0 && !this.multiple) {
            this.hide();
            this.onClear.emit(event);
            this.onModelChange(value);
        }
        if (value.length >= this.minLength) {
            this.timeout = setTimeout(() => {
                this.search(event, value);
            }, this.delay);
        }
        else {
            this.suggestions = null;
            this.hide();
        }
        this.updateFilledState();
        this.inputKeyDown = false;
    }
    onInputClick(event) {
        if (this.documentClickListener) {
            this.inputClick = true;
        }
    }
    search(event, query) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
            return;
        }
        this.loading = true;
        this.completeMethod.emit({
            originalEvent: event,
            query: query
        });
    }
    selectItem(option, focus = true) {
        if (this.forceSelectionUpdateModelTimeout) {
            clearTimeout(this.forceSelectionUpdateModelTimeout);
            this.forceSelectionUpdateModelTimeout = null;
        }
        if (this.multiple) {
            this.multiInputEL.nativeElement.value = '';
            this.value = this.value || [];
            if (!this.isSelected(option) || !this.unique) {
                this.value = [...this.value, option];
                this.onModelChange(this.value);
            }
        }
        else {
            this.inputEL.nativeElement.value = this.field ? ObjectUtils.resolveFieldData(option, this.field) || '' : option;
            this.value = option;
            this.onModelChange(this.value);
        }
        this.onSelect.emit(option);
        this.updateFilledState();
        if (focus) {
            this.itemClicked = true;
            this.focusInput();
        }
    }
    show() {
        if (this.multiInputEL || this.inputEL) {
            let hasFocus = this.multiple ?
                this.multiInputEL.nativeElement.ownerDocument.activeElement == this.multiInputEL.nativeElement :
                this.inputEL.nativeElement.ownerDocument.activeElement == this.inputEL.nativeElement;
            if (!this.overlayVisible && hasFocus) {
                this.overlayVisible = true;
            }
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
                this.onShow.emit(event);
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    }
    onOverlayAnimationDone(event) {
        if (event.toState === 'void') {
            this._suggestions = null;
        }
    }
    appendOverlay() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                DomHandler.appendChild(this.overlay, this.appendTo);
            if (!this.overlay.style.minWidth) {
                this.overlay.style.minWidth = DomHandler.getWidth(this.el.nativeElement.children[0]) + 'px';
            }
        }
    }
    resolveFieldData(value) {
        return this.field ? ObjectUtils.resolveFieldData(value, this.field) : value;
    }
    restoreOverlayAppend() {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    }
    alignOverlay() {
        if (this.appendTo)
            DomHandler.absolutePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
        else
            DomHandler.relativePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
    }
    hide() {
        this.overlayVisible = false;
        this.cd.markForCheck();
    }
    handleDropdownClick(event) {
        if (!this.overlayVisible) {
            this.focusInput();
            let queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
            if (this.dropdownMode === 'blank')
                this.search(event, '');
            else if (this.dropdownMode === 'current')
                this.search(event, queryValue);
            this.onDropdownClick.emit({
                originalEvent: event,
                query: queryValue
            });
        }
        else {
            this.hide();
        }
    }
    focusInput() {
        if (this.multiple)
            this.multiInputEL.nativeElement.focus();
        else
            this.inputEL.nativeElement.focus();
    }
    removeItem(item) {
        let itemIndex = DomHandler.index(item);
        let removedValue = this.value[itemIndex];
        this.value = this.value.filter((val, i) => i != itemIndex);
        this.onModelChange(this.value);
        this.updateFilledState();
        this.onUnselect.emit(removedValue);
    }
    onKeydown(event) {
        if (this.overlayVisible) {
            let highlightItemIndex = this.findOptionIndex(this.highlightOption);
            switch (event.which) {
                //down
                case 40:
                    if (highlightItemIndex != -1) {
                        var nextItemIndex = highlightItemIndex + 1;
                        if (nextItemIndex != (this.suggestions.length)) {
                            this.highlightOption = this.suggestions[nextItemIndex];
                            this.highlightOptionChanged = true;
                        }
                    }
                    else {
                        this.highlightOption = this.suggestions[0];
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    if (highlightItemIndex > 0) {
                        let prevItemIndex = highlightItemIndex - 1;
                        this.highlightOption = this.suggestions[prevItemIndex];
                        this.highlightOptionChanged = true;
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                        this.hide();
                    }
                    event.preventDefault();
                    break;
                //escape
                case 27:
                    this.hide();
                    event.preventDefault();
                    break;
                //tab
                case 9:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                    }
                    this.hide();
                    break;
            }
        }
        else {
            if (event.which === 40 && this.suggestions) {
                this.search(event, event.target.value);
            }
        }
        if (this.multiple) {
            switch (event.which) {
                //backspace
                case 8:
                    if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
                        this.value = [...this.value];
                        const removedValue = this.value.pop();
                        this.onModelChange(this.value);
                        this.updateFilledState();
                        this.onUnselect.emit(removedValue);
                    }
                    break;
            }
        }
        this.inputKeyDown = true;
    }
    onKeyup(event) {
        this.onKeyUp.emit(event);
    }
    onInputFocus(event) {
        if (!this.itemClicked && this.completeOnFocus) {
            let queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
            this.search(event, queryValue);
        }
        this.focus = true;
        this.onFocus.emit(event);
        this.itemClicked = false;
    }
    onInputBlur(event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onInputChange(event) {
        if (this.forceSelection) {
            let valid = false;
            let inputValue = event.target.value.trim();
            if (this.suggestions) {
                for (let suggestion of this.suggestions) {
                    let itemValue = this.field ? ObjectUtils.resolveFieldData(suggestion, this.field) : suggestion;
                    if (itemValue && inputValue === itemValue.trim()) {
                        valid = true;
                        this.forceSelectionUpdateModelTimeout = setTimeout(() => {
                            this.selectItem(suggestion, false);
                        }, 250);
                        break;
                    }
                }
            }
            if (!valid) {
                if (this.multiple) {
                    this.multiInputEL.nativeElement.value = '';
                }
                else {
                    this.value = null;
                    this.inputEL.nativeElement.value = '';
                }
                this.onClear.emit(event);
                this.onModelChange(this.value);
            }
        }
    }
    onInputPaste(event) {
        this.onKeydown(event);
    }
    isSelected(val) {
        let selected = false;
        if (this.value && this.value.length) {
            for (let i = 0; i < this.value.length; i++) {
                if (ObjectUtils.equals(this.value[i], val, this.dataKey)) {
                    selected = true;
                    break;
                }
            }
        }
        return selected;
    }
    findOptionIndex(option) {
        let index = -1;
        if (this.suggestions) {
            for (let i = 0; i < this.suggestions.length; i++) {
                if (ObjectUtils.equals(option, this.suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    updateFilledState() {
        if (this.multiple)
            this.filled = (this.value && this.value.length) || (this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '');
        else
            this.filled = (this.inputFieldValue && this.inputFieldValue != '') || (this.inputEL && this.inputEL.nativeElement && this.inputEL.nativeElement.value != '');
        ;
    }
    updateInputField() {
        let formattedValue = this.value ? (this.field ? ObjectUtils.resolveFieldData(this.value, this.field) || '' : this.value) : '';
        this.inputFieldValue = formattedValue;
        if (this.inputEL && this.inputEL.nativeElement) {
            this.inputEL.nativeElement.value = formattedValue;
        }
        this.updateFilledState();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
                if (event.which === 3) {
                    return;
                }
                if (!this.inputClick && !this.isDropdownClick(event)) {
                    this.hide();
                }
                this.inputClick = false;
                this.cd.markForCheck();
            });
        }
    }
    isDropdownClick(event) {
        if (this.dropdown) {
            let target = event.target;
            return (target === this.dropdownButton.nativeElement || target.parentNode === this.dropdownButton.nativeElement);
        }
        else {
            return false;
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
        this.hide();
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerEL.nativeElement, () => {
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
        this.onHide.emit();
    }
    ngOnDestroy() {
        if (this.forceSelectionUpdateModelTimeout) {
            clearTimeout(this.forceSelectionUpdateModelTimeout);
            this.forceSelectionUpdateModelTimeout = null;
        }
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
    }
}
AutoComplete.ɵfac = function AutoComplete_Factory(t) { return new (t || AutoComplete)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
AutoComplete.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AutoComplete, selectors: [["p-autoComplete"]], contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function AutoComplete_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.multiInputEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.multiContainerEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownButton = _t.first);
    } }, hostVars: 4, hostBindings: function AutoComplete_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus && !ctx.disabled);
    } }, inputs: { minLength: "minLength", delay: "delay", type: "type", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", dropdownIcon: "dropdownIcon", unique: "unique", completeOnFocus: "completeOnFocus", scrollHeight: "scrollHeight", dropdownMode: "dropdownMode", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", autocomplete: "autocomplete", suggestions: "suggestions", disabled: "disabled", style: "style", panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", inputStyle: "inputStyle", inputId: "inputId", inputStyleClass: "inputStyleClass", placeholder: "placeholder", readonly: "readonly", maxlength: "maxlength", name: "name", required: "required", size: "size", appendTo: "appendTo", autoHighlight: "autoHighlight", forceSelection: "forceSelection", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", field: "field", dropdown: "dropdown", multiple: "multiple", tabindex: "tabindex", dataKey: "dataKey", emptyMessage: "emptyMessage", autofocus: "autofocus" }, outputs: { completeMethod: "completeMethod", onSelect: "onSelect", onUnselect: "onUnselect", onFocus: "onFocus", onBlur: "onBlur", onDropdownClick: "onDropdownClick", onClear: "onClear", onKeyUp: "onKeyUp", onShow: "onShow", onHide: "onHide" }, features: [ɵngcc0.ɵɵProvidersFeature([AUTOCOMPLETE_VALUE_ACCESSOR])], decls: 7, vars: 12, consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["class", "p-autocomplete-input p-inputtext p-component", "aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "ngStyle", "class", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste", 4, "ngIf"], ["class", "p-autocomplete-multiple-container p-component p-inputtext", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-autocomplete-loader pi pi-spinner pi-spin", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-autocomplete-dropdown", "pRipple", "", 3, "icon", "disabled", "click", 4, "ngIf"], [3, "ngClass", "max-height", "ngStyle", "class", 4, "ngIf"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 1, "p-autocomplete-input", "p-inputtext", "p-component", 3, "ngStyle", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste"], ["in", ""], [1, "p-autocomplete-multiple-container", "p-component", "p-inputtext", 3, "ngClass", "click"], ["multiContainer", ""], ["class", "p-autocomplete-token", 4, "ngFor", "ngForOf"], [1, "p-autocomplete-input-token"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "disabled", "readonly", "autocomplete", "ngStyle", "input", "click", "keydown", "keyup", "focus", "blur", "change", "paste"], ["multiIn", ""], [1, "p-autocomplete-token"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-autocomplete-token-label", 4, "ngIf"], ["class", "p-autocomplete-token-icon pi pi-times-circle", 3, "click", 4, "ngIf"], [1, "p-autocomplete-token-label"], [1, "p-autocomplete-token-icon", "pi", "pi-times-circle", 3, "click"], [1, "p-autocomplete-loader", "pi", "pi-spinner", "pi-spin"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-autocomplete-dropdown", 3, "icon", "disabled", "click"], ["ddBtn", ""], ["panel", ""], ["role", "listbox", 1, "p-autocomplete-items"], ["role", "option", "class", "p-autocomplete-item", "pRipple", "", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], ["class", "p-autocomplete-emptymessage p-autocomplete-item", 4, "ngIf"], ["role", "option", "pRipple", "", 1, "p-autocomplete-item", 3, "ngClass", "id", "click"], [4, "ngIf"], [1, "p-autocomplete-emptymessage", "p-autocomplete-item"]], template: function AutoComplete_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0, 1);
        ɵngcc0.ɵɵtemplate(2, AutoComplete_input_2_Template, 2, 26, "input", 2);
        ɵngcc0.ɵɵtemplate(3, AutoComplete_ul_3_Template, 6, 23, "ul", 3);
        ɵngcc0.ɵɵtemplate(4, AutoComplete_i_4_Template, 1, 0, "i", 4);
        ɵngcc0.ɵɵtemplate(5, AutoComplete_button_5_Template, 2, 3, "button", 5);
        ɵngcc0.ɵɵtemplate(6, AutoComplete_div_6_Template, 5, 16, "div", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c13, ctx.dropdown, ctx.multiple))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.multiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.multiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dropdown);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc2.ButtonDirective, ɵngcc3.Ripple], styles: [".p-autocomplete{display:-ms-inline-flexbox;display:inline-flex;position:relative}.p-autocomplete-loader{margin-top:-.5rem;position:absolute;top:50%}.p-autocomplete-dd .p-autocomplete-input{-ms-flex:1 1 auto;flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-bottom-right-radius:0;border-top-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-bottom-left-radius:0;border-top-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%}.p-autocomplete-panel{overflow:auto;position:absolute}.p-autocomplete-items{list-style-type:none;margin:0;padding:0}.p-autocomplete-item{cursor:pointer;overflow:hidden;position:relative;white-space:nowrap}.p-autocomplete-multiple-container{-ms-flex-align:center;align-items:center;cursor:text;display:-ms-flexbox;display:flex;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-autocomplete-token{-ms-flex:0 0 auto;-ms-flex-align:center;align-items:center;cursor:default;display:-ms-inline-flexbox;display:inline-flex;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{-ms-flex:1 1 auto;display:-ms-inline-flexbox;display:inline-flex;flex:1 1 auto}.p-autocomplete-input-token input{background-color:rgba(0,0,0,0);border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-autocomplete{display:-ms-flexbox;display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}"], encapsulation: 2, data: { animation: [
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
AutoComplete.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: IterableDiffers }
];
AutoComplete.propDecorators = {
    minLength: [{ type: Input }],
    delay: [{ type: Input }],
    style: [{ type: Input }],
    panelStyle: [{ type: Input }],
    styleClass: [{ type: Input }],
    panelStyleClass: [{ type: Input }],
    inputStyle: [{ type: Input }],
    inputId: [{ type: Input }],
    inputStyleClass: [{ type: Input }],
    placeholder: [{ type: Input }],
    readonly: [{ type: Input }],
    disabled: [{ type: Input }],
    maxlength: [{ type: Input }],
    name: [{ type: Input }],
    required: [{ type: Input }],
    size: [{ type: Input }],
    appendTo: [{ type: Input }],
    autoHighlight: [{ type: Input }],
    forceSelection: [{ type: Input }],
    type: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    dropdownIcon: [{ type: Input }],
    unique: [{ type: Input }],
    completeOnFocus: [{ type: Input }],
    completeMethod: [{ type: Output }],
    onSelect: [{ type: Output }],
    onUnselect: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onDropdownClick: [{ type: Output }],
    onClear: [{ type: Output }],
    onKeyUp: [{ type: Output }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    field: [{ type: Input }],
    scrollHeight: [{ type: Input }],
    dropdown: [{ type: Input }],
    dropdownMode: [{ type: Input }],
    multiple: [{ type: Input }],
    tabindex: [{ type: Input }],
    dataKey: [{ type: Input }],
    emptyMessage: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    autofocus: [{ type: Input }],
    autocomplete: [{ type: Input }],
    containerEL: [{ type: ViewChild, args: ['container',] }],
    inputEL: [{ type: ViewChild, args: ['in',] }],
    multiInputEL: [{ type: ViewChild, args: ['multiIn',] }],
    multiContainerEL: [{ type: ViewChild, args: ['multiContainer',] }],
    dropdownButton: [{ type: ViewChild, args: ['ddBtn',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    suggestions: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutoComplete, [{
        type: Component,
        args: [{
                selector: 'p-autoComplete',
                template: `
        <span #container [ngClass]="{'p-autocomplete p-component':true,'p-autocomplete-dd':dropdown,'p-autocomplete-multiple':multiple}" [ngStyle]="style" [class]="styleClass">
            <input *ngIf="!multiple" #in [attr.type]="type" [attr.id]="inputId" [ngStyle]="inputStyle" [class]="inputStyleClass" [autocomplete]="autocomplete" [attr.required]="required" [attr.name]="name"
            class="p-autocomplete-input p-inputtext p-component" [ngClass]="{'p-autocomplete-dd-input':dropdown,'p-disabled': disabled}" [value]="inputFieldValue" aria-autocomplete="list" [attr.aria-controls]="listId" role="searchbox" [attr.aria-expanded]="overlayVisible" aria-haspopup="true" [attr.aria-activedescendant]="'p-highlighted-option'"
            (click)="onInputClick($event)" (input)="onInput($event)" (keydown)="onKeydown($event)" (keyup)="onKeyup($event)" [attr.autofocus]="autofocus" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" (change)="onInputChange($event)" (paste)="onInputPaste($event)"
            [attr.placeholder]="placeholder" [attr.size]="size" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [readonly]="readonly" [disabled]="disabled" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-required]="required"
            ><ul *ngIf="multiple" #multiContainer class="p-autocomplete-multiple-container p-component p-inputtext" [ngClass]="{'p-disabled':disabled,'p-focus':focus}" (click)="multiIn.focus()">
                <li #token *ngFor="let val of value" class="p-autocomplete-token">
                    <ng-container *ngTemplateOutlet="selectedItemTemplate; context: {$implicit: val}"></ng-container>
                    <span *ngIf="!selectedItemTemplate" class="p-autocomplete-token-label">{{resolveFieldData(val)}}</span>
                    <span class="p-autocomplete-token-icon pi pi-times-circle" (click)="removeItem(token)" *ngIf="!disabled"></span>
                </li>
                <li class="p-autocomplete-input-token">
                    <input #multiIn [attr.type]="type" [attr.id]="inputId" [disabled]="disabled" [attr.placeholder]="(value&&value.length ? null : placeholder)" [attr.tabindex]="tabindex" [attr.maxlength]="maxlength" (input)="onInput($event)"  (click)="onInputClick($event)"
                            (keydown)="onKeydown($event)" [readonly]="readonly" (keyup)="onKeyup($event)" [attr.autofocus]="autofocus" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" (change)="onInputChange($event)" (paste)="onInputPaste($event)" [autocomplete]="autocomplete"
                            [ngStyle]="inputStyle" [class]="inputStyleClass" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-required]="required"
                            aria-autocomplete="list" [attr.aria-controls]="listId" role="searchbox" [attr.aria-expanded]="overlayVisible" aria-haspopup="true" [attr.aria-activedescendant]="'p-highlighted-option'">
                </li>
            </ul>
            <i *ngIf="loading" class="p-autocomplete-loader pi pi-spinner pi-spin"></i><button #ddBtn type="button" pButton [icon]="dropdownIcon" class="p-autocomplete-dropdown" [disabled]="disabled" pRipple
                (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex"></button>
            <div #panel *ngIf="overlayVisible" [ngClass]="['p-autocomplete-panel p-component']" [style.max-height]="scrollHeight" [ngStyle]="panelStyle" [class]="panelStyleClass"
                [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" (@overlayAnimation.done)="onOverlayAnimationDone($event)" >
                <ul role="listbox" [attr.id]="listId" class="p-autocomplete-items">
                    <li role="option" *ngFor="let option of suggestions; let idx = index" class="p-autocomplete-item" pRipple [ngClass]="{'p-highlight': (option === highlightOption)}" [id]="highlightOption == option ? 'p-highlighted-option':''" (click)="selectItem(option)">
                        <span *ngIf="!itemTemplate">{{resolveFieldData(option)}}</span>
                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: idx}"></ng-container>
                    </li>
                    <li *ngIf="noResults && emptyMessage" class="p-autocomplete-emptymessage p-autocomplete-item">{{emptyMessage}}</li>
                </ul>
            </div>
        </span>
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
                    '[class.p-inputwrapper-focus]': 'focus && !disabled'
                },
                providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-autocomplete{display:-ms-inline-flexbox;display:inline-flex;position:relative}.p-autocomplete-loader{margin-top:-.5rem;position:absolute;top:50%}.p-autocomplete-dd .p-autocomplete-input{-ms-flex:1 1 auto;flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-bottom-right-radius:0;border-top-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-bottom-left-radius:0;border-top-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%}.p-autocomplete-panel{overflow:auto;position:absolute}.p-autocomplete-items{list-style-type:none;margin:0;padding:0}.p-autocomplete-item{cursor:pointer;overflow:hidden;position:relative;white-space:nowrap}.p-autocomplete-multiple-container{-ms-flex-align:center;align-items:center;cursor:text;display:-ms-flexbox;display:flex;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-autocomplete-token{-ms-flex:0 0 auto;-ms-flex-align:center;align-items:center;cursor:default;display:-ms-inline-flexbox;display:inline-flex;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{-ms-flex:1 1 auto;display:-ms-inline-flexbox;display:inline-flex;flex:1 1 auto}.p-autocomplete-input-token input{background-color:rgba(0,0,0,0);border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-autocomplete{display:-ms-flexbox;display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.IterableDiffers }]; }, { minLength: [{
            type: Input
        }], delay: [{
            type: Input
        }], type: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], dropdownIcon: [{
            type: Input
        }], unique: [{
            type: Input
        }], completeOnFocus: [{
            type: Input
        }], completeMethod: [{
            type: Output
        }], onSelect: [{
            type: Output
        }], onUnselect: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onDropdownClick: [{
            type: Output
        }], onClear: [{
            type: Output
        }], onKeyUp: [{
            type: Output
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], scrollHeight: [{
            type: Input
        }], dropdownMode: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], suggestions: [{
            type: Input
        }], disabled: [{
            type: Input
        }], style: [{
            type: Input
        }], panelStyle: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], panelStyleClass: [{
            type: Input
        }], inputStyle: [{
            type: Input
        }], inputId: [{
            type: Input
        }], inputStyleClass: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], readonly: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], name: [{
            type: Input
        }], required: [{
            type: Input
        }], size: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], autoHighlight: [{
            type: Input
        }], forceSelection: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], field: [{
            type: Input
        }], dropdown: [{
            type: Input
        }], multiple: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], emptyMessage: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], containerEL: [{
            type: ViewChild,
            args: ['container']
        }], inputEL: [{
            type: ViewChild,
            args: ['in']
        }], multiInputEL: [{
            type: ViewChild,
            args: ['multiIn']
        }], multiContainerEL: [{
            type: ViewChild,
            args: ['multiContainer']
        }], dropdownButton: [{
            type: ViewChild,
            args: ['ddBtn']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class AutoCompleteModule {
}
AutoCompleteModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AutoCompleteModule });
AutoCompleteModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AutoCompleteModule_Factory(t) { return new (t || AutoCompleteModule)(); }, imports: [[CommonModule, InputTextModule, ButtonModule, SharedModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AutoCompleteModule, { declarations: function () { return [AutoComplete]; }, imports: function () { return [CommonModule, InputTextModule, ButtonModule, SharedModule, RippleModule]; }, exports: function () { return [AutoComplete, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutoCompleteModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, InputTextModule, ButtonModule, SharedModule, RippleModule],
                exports: [AutoComplete, SharedModule],
                declarations: [AutoComplete]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUE2QyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQXVCLFNBQVMsRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsZUFBZSxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BSLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFnQixNQUFNLHFCQUFxQixDQUFDO0FBQ3BGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUUsNkJBQTZCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdEUsT0FBTyxFQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQXVCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RVgsTUFBTTtBQUFLLHFCQUVYLE1BQU07QUFBSyxvQkFFWCxLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSywyQkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyxzQkFFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFLLG9DQUVWLEtBQUs7QUFBSyxvQ0FFVixLQUFLO0FBQUssd0JBRVYsS0FBSztBQUFLLDJCQUVWLEtBQUs7QUFBSywwQkFFVixTQUFTLFNBQUMsV0FBVztBQUFPLHNCQUU1QixTQUFTLFNBQUMsSUFBSTtBQUFPLDJCQUVyQixTQUFTLFNBQUMsU0FBUztBQUFPLCtCQUUxQixTQUFTLFNBQUMsZ0JBQWdCO0FBQU8sNkJBRWpDLFNBQVMsU0FBQyxPQUFPO0FBQU8sd0JBRXhCLGVBQWUsU0FBQyxhQUFhO0FBQU8sMEJBMkRwQyxLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBNmpCaEIsTUFBTSxPQUFPLGtCQUFrQjtBQUFHOzhDQUxqQyxRQUFRLFNBQUM7QUFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLGtCQUM5RSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLGtCQUNwQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FDL0I7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsVmlld0NoaWxkLEVsZW1lbnRSZWYsQWZ0ZXJWaWV3Q2hlY2tlZCxBZnRlckNvbnRlbnRJbml0LE9uRGVzdHJveSxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLENvbnRlbnRDaGlsZHJlbixRdWVyeUxpc3QsVGVtcGxhdGVSZWYsUmVuZGVyZXIyLGZvcndhcmRSZWYsQ2hhbmdlRGV0ZWN0b3JSZWYsSXRlcmFibGVEaWZmZXJzLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7dHJpZ2dlcixzdHlsZSx0cmFuc2l0aW9uLGFuaW1hdGUsQW5pbWF0aW9uRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQge1JpcHBsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGUsUHJpbWVUZW1wbGF0ZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtEb21IYW5kbGVyLCBDb25uZWN0ZWRPdmVybGF5U2Nyb2xsSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtPYmplY3RVdGlscywgVW5pcXVlQ29tcG9uZW50SWR9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IEFVVE9DT01QTEVURV9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQXV0b0NvbXBsZXRlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1hdXRvQ29tcGxldGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuICNjb250YWluZXIgW25nQ2xhc3NdPVwieydwLWF1dG9jb21wbGV0ZSBwLWNvbXBvbmVudCc6dHJ1ZSwncC1hdXRvY29tcGxldGUtZGQnOmRyb3Bkb3duLCdwLWF1dG9jb21wbGV0ZS1tdWx0aXBsZSc6bXVsdGlwbGV9XCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiIW11bHRpcGxlXCIgI2luIFthdHRyLnR5cGVdPVwidHlwZVwiIFthdHRyLmlkXT1cImlucHV0SWRcIiBbbmdTdHlsZV09XCJpbnB1dFN0eWxlXCIgW2NsYXNzXT1cImlucHV0U3R5bGVDbGFzc1wiIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCIgW2F0dHIucmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgICAgICAgY2xhc3M9XCJwLWF1dG9jb21wbGV0ZS1pbnB1dCBwLWlucHV0dGV4dCBwLWNvbXBvbmVudFwiIFtuZ0NsYXNzXT1cInsncC1hdXRvY29tcGxldGUtZGQtaW5wdXQnOmRyb3Bkb3duLCdwLWRpc2FibGVkJzogZGlzYWJsZWR9XCIgW3ZhbHVlXT1cImlucHV0RmllbGRWYWx1ZVwiIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwibGlzdElkXCIgcm9sZT1cInNlYXJjaGJveFwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwib3ZlcmxheVZpc2libGVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIFthdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF09XCIncC1oaWdobGlnaHRlZC1vcHRpb24nXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbklucHV0Q2xpY2soJGV2ZW50KVwiIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIiAoa2V5ZG93bik9XCJvbktleWRvd24oJGV2ZW50KVwiIChrZXl1cCk9XCJvbktleXVwKCRldmVudClcIiBbYXR0ci5hdXRvZm9jdXNdPVwiYXV0b2ZvY3VzXCIgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiIChjaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCIgKHBhc3RlKT1cIm9uSW5wdXRQYXN0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW2F0dHIuc2l6ZV09XCJzaXplXCIgW2F0dHIubWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiIFthdHRyLnRhYmluZGV4XT1cInRhYmluZGV4XCIgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIiBbYXR0ci5hcmlhLXJlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgID48dWwgKm5nSWY9XCJtdWx0aXBsZVwiICNtdWx0aUNvbnRhaW5lciBjbGFzcz1cInAtYXV0b2NvbXBsZXRlLW11bHRpcGxlLWNvbnRhaW5lciBwLWNvbXBvbmVudCBwLWlucHV0dGV4dFwiIFtuZ0NsYXNzXT1cInsncC1kaXNhYmxlZCc6ZGlzYWJsZWQsJ3AtZm9jdXMnOmZvY3VzfVwiIChjbGljayk9XCJtdWx0aUluLmZvY3VzKClcIj5cbiAgICAgICAgICAgICAgICA8bGkgI3Rva2VuICpuZ0Zvcj1cImxldCB2YWwgb2YgdmFsdWVcIiBjbGFzcz1cInAtYXV0b2NvbXBsZXRlLXRva2VuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzZWxlY3RlZEl0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogdmFsfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFzZWxlY3RlZEl0ZW1UZW1wbGF0ZVwiIGNsYXNzPVwicC1hdXRvY29tcGxldGUtdG9rZW4tbGFiZWxcIj57e3Jlc29sdmVGaWVsZERhdGEodmFsKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtYXV0b2NvbXBsZXRlLXRva2VuLWljb24gcGkgcGktdGltZXMtY2lyY2xlXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0odG9rZW4pXCIgKm5nSWY9XCIhZGlzYWJsZWRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwLWF1dG9jb21wbGV0ZS1pbnB1dC10b2tlblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI211bHRpSW4gW2F0dHIudHlwZV09XCJ0eXBlXCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cIih2YWx1ZSYmdmFsdWUubGVuZ3RoID8gbnVsbCA6IHBsYWNlaG9sZGVyKVwiIFthdHRyLnRhYmluZGV4XT1cInRhYmluZGV4XCIgW2F0dHIubWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIiAgKGNsaWNrKT1cIm9uSW5wdXRDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleWRvd24oJGV2ZW50KVwiIFtyZWFkb25seV09XCJyZWFkb25seVwiIChrZXl1cCk9XCJvbktleXVwKCRldmVudClcIiBbYXR0ci5hdXRvZm9jdXNdPVwiYXV0b2ZvY3VzXCIgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiIChjaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCIgKHBhc3RlKT1cIm9uSW5wdXRQYXN0ZSgkZXZlbnQpXCIgW2F1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cImlucHV0U3R5bGVcIiBbY2xhc3NdPVwiaW5wdXRTdHlsZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIiBbYXR0ci5hcmlhLXJlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImxpc3RJZFwiIHJvbGU9XCJzZWFyY2hib3hcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBbYXR0ci5hcmlhLWFjdGl2ZWRlc2NlbmRhbnRdPVwiJ3AtaGlnaGxpZ2h0ZWQtb3B0aW9uJ1wiPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJwLWF1dG9jb21wbGV0ZS1sb2FkZXIgcGkgcGktc3Bpbm5lciBwaS1zcGluXCI+PC9pPjxidXR0b24gI2RkQnRuIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIFtpY29uXT1cImRyb3Bkb3duSWNvblwiIGNsYXNzPVwicC1hdXRvY29tcGxldGUtZHJvcGRvd25cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBwUmlwcGxlXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZURyb3Bkb3duQ2xpY2soJGV2ZW50KVwiICpuZ0lmPVwiZHJvcGRvd25cIiBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiAjcGFuZWwgKm5nSWY9XCJvdmVybGF5VmlzaWJsZVwiIFtuZ0NsYXNzXT1cIlsncC1hdXRvY29tcGxldGUtcGFuZWwgcC1jb21wb25lbnQnXVwiIFtzdHlsZS5tYXgtaGVpZ2h0XT1cInNjcm9sbEhlaWdodFwiIFtuZ1N0eWxlXT1cInBhbmVsU3R5bGVcIiBbY2xhc3NdPVwicGFuZWxTdHlsZUNsYXNzXCJcbiAgICAgICAgICAgICAgICBbQG92ZXJsYXlBbmltYXRpb25dPVwie3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3Nob3dUcmFuc2l0aW9uUGFyYW1zOiBzaG93VHJhbnNpdGlvbk9wdGlvbnMsIGhpZGVUcmFuc2l0aW9uUGFyYW1zOiBoaWRlVHJhbnNpdGlvbk9wdGlvbnN9fVwiIChAb3ZlcmxheUFuaW1hdGlvbi5zdGFydCk9XCJvbk92ZXJsYXlBbmltYXRpb25TdGFydCgkZXZlbnQpXCIgKEBvdmVybGF5QW5pbWF0aW9uLmRvbmUpPVwib25PdmVybGF5QW5pbWF0aW9uRG9uZSgkZXZlbnQpXCIgPlxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdGJveFwiIFthdHRyLmlkXT1cImxpc3RJZFwiIGNsYXNzPVwicC1hdXRvY29tcGxldGUtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJvcHRpb25cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHN1Z2dlc3Rpb25zOyBsZXQgaWR4ID0gaW5kZXhcIiBjbGFzcz1cInAtYXV0b2NvbXBsZXRlLWl0ZW1cIiBwUmlwcGxlIFtuZ0NsYXNzXT1cInsncC1oaWdobGlnaHQnOiAob3B0aW9uID09PSBoaWdobGlnaHRPcHRpb24pfVwiIFtpZF09XCJoaWdobGlnaHRPcHRpb24gPT0gb3B0aW9uID8gJ3AtaGlnaGxpZ2h0ZWQtb3B0aW9uJzonJ1wiIChjbGljayk9XCJzZWxlY3RJdGVtKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWl0ZW1UZW1wbGF0ZVwiPnt7cmVzb2x2ZUZpZWxkRGF0YShvcHRpb24pfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBvcHRpb24sIGluZGV4OiBpZHh9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cIm5vUmVzdWx0cyAmJiBlbXB0eU1lc3NhZ2VcIiBjbGFzcz1cInAtYXV0b2NvbXBsZXRlLWVtcHR5bWVzc2FnZSBwLWF1dG9jb21wbGV0ZS1pdGVtXCI+e3tlbXB0eU1lc3NhZ2V9fTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ292ZXJsYXlBbmltYXRpb24nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJ30pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJ3t7c2hvd1RyYW5zaXRpb25QYXJhbXN9fScpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgne3toaWRlVHJhbnNpdGlvblBhcmFtc319Jywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZpbGxlZF0nOiAnZmlsbGVkJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0d3JhcHBlci1mb2N1c10nOiAnZm9jdXMgJiYgIWRpc2FibGVkJ1xuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbQVVUT0NPTVBMRVRFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkLEFmdGVyQ29udGVudEluaXQsT25EZXN0cm95LENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMTtcblxuICAgIEBJbnB1dCgpIGRlbGF5OiBudW1iZXIgPSAzMDA7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgcGFuZWxTdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcGFuZWxTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgbWF4bGVuZ3RoOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBhbnk7XG5cbiAgICBASW5wdXQoKSBhdXRvSGlnaGxpZ2h0OiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZm9yY2VTZWxlY3Rpb246IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAndGV4dCc7XG5cbiAgICBASW5wdXQoKSBhdXRvWkluZGV4OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGJhc2VaSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkcm9wZG93bkljb246IHN0cmluZyA9IFwicGkgcGktY2hldnJvbi1kb3duXCI7XG5cbiAgICBASW5wdXQoKSB1bmlxdWU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgY29tcGxldGVPbkZvY3VzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgY29tcGxldGVNZXRob2Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvblVuc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uRHJvcGRvd25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uS2V5VXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uU2hvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25IaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgpIGZpZWxkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzY3JvbGxIZWlnaHQ6IHN0cmluZyA9ICcyMDBweCc7XG5cbiAgICBASW5wdXQoKSBkcm9wZG93bjogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGRyb3Bkb3duTW9kZTogc3RyaW5nID0gJ2JsYW5rJztcblxuICAgIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGRhdGFLZXk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGVtcHR5TWVzc2FnZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc2hvd1RyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnLjEycyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSc7XG5cbiAgICBASW5wdXQoKSBoaWRlVHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMXMgbGluZWFyJztcblxuICAgIEBJbnB1dCgpIGF1dG9mb2N1czogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nID0gJ29mZic7XG5cbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJFTDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2luJykgaW5wdXRFTDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ211bHRpSW4nKSBtdWx0aUlucHV0RUw6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdtdWx0aUNvbnRhaW5lcicpIG11bHRpQ29udGFpbmVyRUw6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdkZEJ0bicpIGRyb3Bkb3duQnV0dG9uOiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgb3ZlcmxheTogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBzZWxlY3RlZEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHZhbHVlOiBhbnk7XG5cbiAgICBfc3VnZ2VzdGlvbnM6IGFueVtdO1xuXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgdGltZW91dDogYW55O1xuXG4gICAgb3ZlcmxheVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGRvY3VtZW50Q2xpY2tMaXN0ZW5lcjogYW55O1xuXG4gICAgc3VnZ2VzdGlvbnNVcGRhdGVkOiBib29sZWFuO1xuXG4gICAgaGlnaGxpZ2h0T3B0aW9uOiBhbnk7XG5cbiAgICBoaWdobGlnaHRPcHRpb25DaGFuZ2VkOiBib29sZWFuO1xuXG4gICAgZm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGZpbGxlZDogYm9vbGVhbjtcblxuICAgIGlucHV0Q2xpY2s6IGJvb2xlYW47XG5cbiAgICBpbnB1dEtleURvd246IGJvb2xlYW47XG5cbiAgICBub1Jlc3VsdHM6IGJvb2xlYW47XG5cbiAgICBkaWZmZXI6IGFueTtcblxuICAgIGlucHV0RmllbGRWYWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBzY3JvbGxIYW5kbGVyOiBhbnk7XG5cbiAgICBkb2N1bWVudFJlc2l6ZUxpc3RlbmVyOiBhbnk7XG5cbiAgICBmb3JjZVNlbGVjdGlvblVwZGF0ZU1vZGVsVGltZW91dDogYW55O1xuXG4gICAgbGlzdElkOiBzdHJpbmc7XG5cbiAgICBpdGVtQ2xpY2tlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHtcbiAgICAgICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5saXN0SWQgPSBVbmlxdWVDb21wb25lbnRJZCgpICsgJ19saXN0JztcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgc3VnZ2VzdGlvbnMoKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VnZ2VzdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0IHN1Z2dlc3Rpb25zKHZhbDphbnlbXSkge1xuICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IHZhbDtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWdnZXN0aW9uc0NoYW5nZSgpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgLy9Vc2UgdGltZW91dHMgYXMgc2luY2UgQW5ndWxhciA0LjIsIEFmdGVyVmlld0NoZWNrZWQgaXMgYnJva2VuIGFuZCBub3QgY2FsbGVkIGFmdGVyIHBhbmVsIGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHRoaXMuc3VnZ2VzdGlvbnNVcGRhdGVkICYmIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25PdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zVXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0T3B0aW9uQ2hhbmdlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5vdmVybGF5LCAnbGkucC1oaWdobGlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnNjcm9sbEluVmlldyh0aGlzLm92ZXJsYXksIGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb25DaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdWdnZXN0aW9uc0NoYW5nZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N1Z2dlc3Rpb25zICE9IG51bGwgJiYgdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zVXBkYXRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvSGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uID0gdGhpcy5fc3VnZ2VzdGlvbnNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub1Jlc3VsdHMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW1wdHlNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0ZWRJdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpbGxlZCA9IHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZSAhPSAnJztcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dEZpZWxkKCk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIG9uSW5wdXQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIC8vIFdoZW4gYW4gaW5wdXQgZWxlbWVudCB3aXRoIGEgcGxhY2Vob2xkZXIgaXMgY2xpY2tlZCwgdGhlIG9uSW5wdXQgZXZlbnQgaXMgaW52b2tlZCBpbiBJRS5cbiAgICAgICAgaWYgKCF0aGlzLmlucHV0S2V5RG93biAmJiBEb21IYW5kbGVyLmlzSUUoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkudmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSAmJiAhdGhpcy5mb3JjZVNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgJiYgIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5vbkNsZWFyLmVtaXQoZXZlbnQpO1xuXHQgICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaChldmVudCwgdmFsdWUpO1xuICAgICAgICAgICAgfSwgdGhpcy5kZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICAgICAgdGhpcy5pbnB1dEtleURvd24gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Q2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoKGV2ZW50OiBhbnksIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgLy9hbGxvdyBlbXB0eSBzdHJpbmcgYnV0IG5vdCB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgIGlmIChxdWVyeSA9PT0gdW5kZWZpbmVkIHx8IHF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICB9XG5cbiAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgdGhpcy5jb21wbGV0ZU1ldGhvZC5lbWl0KHtcbiAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdEl0ZW0ob3B0aW9uOiBhbnksIGZvY3VzOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5mb3JjZVNlbGVjdGlvblVwZGF0ZU1vZGVsVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZm9yY2VTZWxlY3Rpb25VcGRhdGVNb2RlbFRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5mb3JjZVNlbGVjdGlvblVwZGF0ZU1vZGVsVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5tdWx0aUlucHV0RUwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWV8fFtdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2VsZWN0ZWQob3B0aW9uKSB8fCAhdGhpcy51bmlxdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gWy4uLnRoaXMudmFsdWUsb3B0aW9uXTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RUwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZmllbGQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5maWVsZCl8fCcnOiBvcHRpb247XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uO1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KG9wdGlvbik7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcblxuICAgICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbUNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aUlucHV0RUwgfHwgdGhpcy5pbnB1dEVMKSB7XG4gICAgICAgICAgICBsZXQgaGFzRm9jdXMgPSB0aGlzLm11bHRpcGxlID9cbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpSW5wdXRFTC5uYXRpdmVFbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSB0aGlzLm11bHRpSW5wdXRFTC5uYXRpdmVFbGVtZW50IDpcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RUwubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gdGhpcy5pbnB1dEVMLm5hdGl2ZUVsZW1lbnQgO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVZpc2libGUgJiYgaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3ZlcmxheUFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRvU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Zpc2libGUnOlxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheSA9IGV2ZW50LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1pJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gU3RyaW5nKHRoaXMuYmFzZVpJbmRleCArICgrK0RvbUhhbmRsZXIuemluZGV4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25PdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblNob3cuZW1pdChldmVudCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndm9pZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlIaWRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3ZlcmxheUFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFwcGVuZE92ZXJsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyA9PT0gJ2JvZHknKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSwgdGhpcy5hcHBlbmRUbyk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5vdmVybGF5LnN0eWxlLm1pbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLm1pbldpZHRoID0gRG9tSGFuZGxlci5nZXRXaWR0aCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0pICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc29sdmVGaWVsZERhdGEodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHZhbHVlLCB0aGlzLmZpZWxkKTogdmFsdWU7XG4gICAgfVxuXG4gICAgcmVzdG9yZU92ZXJsYXlBcHBlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGlnbk92ZXJsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKVxuICAgICAgICAgICAgRG9tSGFuZGxlci5hYnNvbHV0ZVBvc2l0aW9uKHRoaXMub3ZlcmxheSwgKHRoaXMubXVsdGlwbGUgPyB0aGlzLm11bHRpQ29udGFpbmVyRUwubmF0aXZlRWxlbWVudCA6IHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50KSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVsYXRpdmVQb3NpdGlvbih0aGlzLm92ZXJsYXksICh0aGlzLm11bHRpcGxlID8gdGhpcy5tdWx0aUNvbnRhaW5lckVMLm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmlucHV0RUwubmF0aXZlRWxlbWVudCkpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBoYW5kbGVEcm9wZG93bkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5vdmVybGF5VmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IHRoaXMubXVsdGlwbGUgPyB0aGlzLm11bHRpSW5wdXRFTC5uYXRpdmVFbGVtZW50LnZhbHVlIDogdGhpcy5pbnB1dEVMLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bkb3duTW9kZSA9PT0gJ2JsYW5rJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaChldmVudCwgJycpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wZG93bk1vZGUgPT09ICdjdXJyZW50JylcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaChldmVudCwgcXVlcnlWYWx1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMub25Ecm9wZG93bkNsaWNrLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpXG4gICAgICAgICAgICB0aGlzLm11bHRpSW5wdXRFTC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlSXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IERvbUhhbmRsZXIuaW5kZXgoaXRlbSk7XG4gICAgICAgIGxldCByZW1vdmVkVmFsdWUgPSB0aGlzLnZhbHVlW2l0ZW1JbmRleF07XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsLCBpKSA9PiBpIT1pdGVtSW5kZXgpO1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICAgICAgdGhpcy5vblVuc2VsZWN0LmVtaXQocmVtb3ZlZFZhbHVlKTtcbiAgICB9XG5cbiAgICBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBoaWdobGlnaHRJdGVtSW5kZXggPSB0aGlzLmZpbmRPcHRpb25JbmRleCh0aGlzLmhpZ2hsaWdodE9wdGlvbik7XG5cbiAgICAgICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIC8vZG93blxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGlmIChoaWdobGlnaHRJdGVtSW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0SXRlbUluZGV4ID0gaGlnaGxpZ2h0SXRlbUluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SXRlbUluZGV4ICE9ICh0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbiA9IHRoaXMuc3VnZ2VzdGlvbnNbbmV4dEl0ZW1JbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb25DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uID0gdGhpcy5zdWdnZXN0aW9uc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvL3VwXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpZ2hsaWdodEl0ZW1JbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2SXRlbUluZGV4ID0gaGlnaGxpZ2h0SXRlbUluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uID0gdGhpcy5zdWdnZXN0aW9uc1twcmV2SXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy9lbnRlclxuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZ2hsaWdodE9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHRoaXMuaGlnaGxpZ2h0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvL2VzY2FwZVxuICAgICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgICAgICAgICAvL3RhYlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0T3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0odGhpcy5oaWdobGlnaHRPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA0MCAmJiB0aGlzLnN1Z2dlc3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goZXZlbnQsZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICAvL2JhY2tzcGFjZVxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggJiYgIXRoaXMubXVsdGlJbnB1dEVMLm5hdGl2ZUVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbLi4udGhpcy52YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVkVmFsdWUgPSB0aGlzLnZhbHVlLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWxsZWRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblVuc2VsZWN0LmVtaXQocmVtb3ZlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dEtleURvd24gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uS2V5dXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbktleVVwLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cyhldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXRlbUNsaWNrZWQgJiYgdGhpcy5jb21wbGV0ZU9uRm9jdXMgKSB7XG4gICAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IHRoaXMubXVsdGlwbGUgPyB0aGlzLm11bHRpSW5wdXRFTC5uYXRpdmVFbGVtZW50LnZhbHVlIDogdGhpcy5pbnB1dEVMLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaChldmVudCwgcXVlcnlWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkZvY3VzLmVtaXQoZXZlbnQpO1xuICAgICAgICB0aGlzLml0ZW1DbGlja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgICAgIHRoaXMub25CbHVyLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdWdnZXN0aW9ucykgIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzdWdnZXN0aW9uIG9mIHRoaXMuc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1WYWx1ZSA9IHRoaXMuZmllbGQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHN1Z2dlc3Rpb24sIHRoaXMuZmllbGQpIDogc3VnZ2VzdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1WYWx1ZSAmJiBpbnB1dFZhbHVlID09PSBpdGVtVmFsdWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmNlU2VsZWN0aW9uVXBkYXRlTW9kZWxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHN1Z2dlc3Rpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlJbnB1dEVMLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0RUwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub25DbGVhci5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbklucHV0UGFzdGUoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25LZXlkb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdFV0aWxzLmVxdWFscyh0aGlzLnZhbHVlW2ldLCB2YWwsIHRoaXMuZGF0YUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH1cblxuICAgIGZpbmRPcHRpb25JbmRleChvcHRpb24pOiBudW1iZXIge1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IC0xO1xuICAgICAgICBpZiAodGhpcy5zdWdnZXN0aW9ucykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdFV0aWxzLmVxdWFscyhvcHRpb24sIHRoaXMuc3VnZ2VzdGlvbnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIHVwZGF0ZUZpbGxlZFN0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSlcbiAgICAgICAgICAgIHRoaXMuZmlsbGVkID0gKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGgpIHx8wqAodGhpcy5tdWx0aUlucHV0RUwgJiYgdGhpcy5tdWx0aUlucHV0RUwubmF0aXZlRWxlbWVudCAmJiB0aGlzLm11bHRpSW5wdXRFTC5uYXRpdmVFbGVtZW50LnZhbHVlICE9ICcnKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5maWxsZWQgPSAodGhpcy5pbnB1dEZpZWxkVmFsdWUgJiYgdGhpcy5pbnB1dEZpZWxkVmFsdWUgIT0gJycpIHx8wqAodGhpcy5pbnB1dEVMICYmIHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50LnZhbHVlICE9ICcnKTs7XG4gICAgfVxuXG4gICAgdXBkYXRlSW5wdXRGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy52YWx1ZSA/ICh0aGlzLmZpZWxkID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YSh0aGlzLnZhbHVlLCB0aGlzLmZpZWxkKXx8JycgOiB0aGlzLnZhbHVlKSA6ICcnO1xuICAgICAgICB0aGlzLmlucHV0RmllbGRWYWx1ZSA9IGZvcm1hdHRlZFZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlucHV0RUwgJiYgdGhpcy5pbnB1dEVMLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50LnZhbHVlID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRUYXJnZXQ6IGFueSA9IHRoaXMuZWwgPyB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub3duZXJEb2N1bWVudCA6ICdkb2N1bWVudCc7XG5cbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oZG9jdW1lbnRUYXJnZXQsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlucHV0Q2xpY2sgJiYgIXRoaXMuaXNEcm9wZG93bkNsaWNrKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0Ryb3Bkb3duQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICByZXR1cm4gKHRhcmdldCA9PT0gdGhpcy5kcm9wZG93bkJ1dHRvbi5uYXRpdmVFbGVtZW50IHx8IHRhcmdldC5wYXJlbnROb2RlID09PSB0aGlzLmRyb3Bkb3duQnV0dG9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgYmluZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gbmV3IENvbm5lY3RlZE92ZXJsYXlTY3JvbGxIYW5kbGVyKHRoaXMuY29udGFpbmVyRUwubmF0aXZlRWxlbWVudCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHVuYmluZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIudW5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3ZlcmxheUhpZGUoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgICAgIHRoaXMub25IaWRlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VTZWxlY3Rpb25VcGRhdGVNb2RlbFRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZvcmNlU2VsZWN0aW9uVXBkYXRlTW9kZWxUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VTZWxlY3Rpb25VcGRhdGVNb2RlbFRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN0b3JlT3ZlcmxheUFwcGVuZCgpO1xuICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxJbnB1dFRleHRNb2R1bGUsQnV0dG9uTW9kdWxlLFNoYXJlZE1vZHVsZSxSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtBdXRvQ29tcGxldGUsU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBdXRvQ29tcGxldGVdXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZU1vZHVsZSB7IH1cbiJdfQ==